(window["webpackJsonpf1006a38_983e_4851_ba4a_70a12aaf94b8_0_1_0"] = window["webpackJsonpf1006a38_983e_4851_ba4a_70a12aaf94b8_0_1_0"] || []).push([["vendors~sp-multilingual-muisettingspage"],{

/***/ "+1yd":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ItemUrlHelper.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: SiteRelation, GeoRelation, ItemUrlPartsBasic, removeDelimiter, appendDelimiter, startsWith, ItemUrlHelperBasic, ItemUrlParts, ItemUrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlParts", function() { return ItemUrlParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelper", function() { return ItemUrlHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemUrlHelperBasic */ "5aJL");
/* harmony import */ var _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/navigation/AddressParser */ "+7kh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteRelation", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["SiteRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoRelation", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["GeoRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemUrlPartsBasic", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlPartsBasic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDelimiter", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["removeDelimiter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendDelimiter", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["appendDelimiter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelperBasic", function() { return _ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlHelperBasic"]; });





var idParamKey = 'id';
var listUrlKey = 'listurl';
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlParts = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItemUrlParts, _super);
    function ItemUrlParts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ItemUrlParts;
}(_ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlPartsBasic"]));

/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelper
 *
 * @example
 *  import ItemUrlHelper, { resourceKey as itemUrlHelperKey } from '../dataSources/url/odb/ItemUrlHelper';
 *
 *  let itemUrlHelper = this.resources.consume(itemUrlHelperKey);
 *
 *  // Given only a webUrl and a path, extract a list URL and a server-relative URL.
 *  let {
 *      serverRelativeItemUrl,
 *      normalizedListUrl
 *  } = itemUrlHelper.getUrlParts({
 *      path: 'https://contoso.sharepoint.com/teams/finance/Shared_Documents/reports/Yearly.xlsx',
 *      webUrl: '/teams/finance'
 *  });
 *
 *  let itemKey = this._urlDataSource.getKey({
 *      [UrlQueryKeys.idParamKey]: serverRelativeItemUrl,
 *      [UrlQueryKeys.listUrlKey]: normalizedListUrl
 *  });
 */
var ItemUrlHelper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItemUrlHelper, _super);
    function ItemUrlHelper(params, dependencies) {
        var _this = this;
        var _a = dependencies.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlParts : _a;
        _this = _super.call(this, {
            context: dependencies.pageContext,
            itemUrlPartsType: itemUrlPartsType
        }) || this;
        return _this;
    }
    /**
     * Extracts the available URL parts for an item given available information.
     * Any or all of the inputs may be provided, though the outputs may be undefined
     * if insufficient information is provided.
     *
     * @param {IGetUrlPartsOptions} [params={}]
     * @returns {IItemUrlParts}
     */
    ItemUrlHelper.prototype.getUrlParts = function (options) {
        return _super.prototype.getUrlParts.call(this, options);
    };
    ItemUrlHelper.prototype.getItemUrlParts = function (key) {
        var keyParts = Object(_ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_2__["deserializeQuery"])(key);
        return this.getUrlParts({
            path: keyParts[idParamKey],
            listUrl: keyParts[listUrlKey]
        });
    };
    return ItemUrlHelper;
}(_ItemUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ItemUrlHelperBasic"]));

//# sourceMappingURL=ItemUrlHelper.js.map

/***/ }),

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["UriEncoding"]; });

// Loading @ms/odsp-utilities/./lib/encoding/UriEncoding.js



/***/ }),

/***/ "+7kh":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/navigation/AddressParser.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/navigation/AddressParser.js


/***/ }),

/***/ "+m1z":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.styles.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: CHECK_CELL_WIDTH, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_CELL_WIDTH", function() { return CHECK_CELL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");
/* harmony import */ var _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Check/Check.styles */ "gwC2");




var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
var CHECK_CELL_WIDTH = 48;
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var rowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].rowHeight, compactRowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
    var height = isHeader ? _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["HEADER_HEIGHT"] : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.small,
            _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__["CheckGlobalClassNames"].checkHost,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: isCheckVisible ? 1 : 0,
                height: height,
                width: CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map

/***/ }),

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

/***/ "0fxH":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/SelectionZone.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: SelectionZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return SelectionZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "2Xb7");




// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME = 'data-selection-touch-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
/**
 * {@docCategory Selection}
 */
var SelectionZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectionZone, _super);
    function SelectionZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onSelectionChange = function () {
            var selection = _this.props.selection;
            var isModal = selection.isModal && selection.isModal();
            _this.setState({
                isModal: isModal,
            });
        };
        _this._onMouseDownCapture = function (ev) {
            var target = ev.target;
            if (document.activeElement !== target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(document.activeElement, target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(target, _this._root.current)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (isToggleModifierPressed) {
                        // set anchor only.
                        selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                        if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                            selection.setModal(true);
                            _this._setIsTouch(false);
                        }
                    }
                    else {
                        if (_this.props.isSelectedOnFocus) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target)) &&
                        !_this._isShiftPressed &&
                        !_this._isCtrlPressed &&
                        !_this._isMetaPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            var _a = _this.props.enableTouchInvocationTarget, enableTouchInvocationTarget = _a === void 0 ? false : _a;
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    if (!isSelectionDisabled) {
                        _this._onToggleAllClick(ev);
                    }
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (!isSelectionDisabled) {
                            if (_this._isShiftPressed) {
                                _this._onItemSurfaceClick(ev, index);
                            }
                            else {
                                _this._onToggleClick(ev, index);
                            }
                        }
                        break;
                    }
                    else if ((_this._isTouch &&
                        enableTouchInvocationTarget &&
                        _this._hasAttribute(target, SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME)) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        // Items should be invokable even if selection is disabled.
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    else if (target === itemRoot) {
                        if (!isSelectionDisabled) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var target = ev.target;
            var _a = _this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    _this._onInvokeMouseDown(ev, index);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or
         * input elements), we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            if (itemRoot && onItemInvoked && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            var selection = _this.props.selection;
            var isSelectAllKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].a && (_this._isCtrlPressed || _this._isMetaPressed);
            var isClearSelectionKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple && !selection.isAllSelected()) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(true);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed, clear selection (if any are selected.)
            if (isClearSelectionKey && selection.getSelectedCount() > 0) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(false);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        if (!isSelectionDisabled) {
                            // If the event went to an element which should trigger auto-select, select it and then let
                            // the default behavior kick in.
                            _this._onInvokeMouseDown(ev, index);
                        }
                        break;
                    }
                    else if ((ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) &&
                        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                            // Items should be invokable even if selection is disabled.
                            _this._onInvokeClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                            if (!isSelectionDisabled) {
                                _this._onToggleClick(ev, index);
                            }
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
                }
            }
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        var selection = _this.props.selection;
        // Reflect the initial modal state of selection into the state.
        var isModal = selection.isModal && selection.isModal();
        _this.state = {
            isModal: isModal,
        };
        return _this;
    }
    SelectionZone.getDerivedStateFromProps = function (nextProps, prevState) {
        var isModal = nextProps.selection.isModal && nextProps.selection.isModal();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevState), { isModal: isModal });
    };
    SelectionZone.prototype.componentDidMount = function () {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(this._root.current);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
        // Subscribe to the selection to keep modal state updated.
        this._events.on(this.props.selection, 'change', this._onSelectionChange);
    };
    SelectionZone.prototype.render = function () {
        var isModal = this.state.isModal;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-SelectionZone', this.props.className, {
                'ms-SelectionZone--modal': !!isModal,
            }), ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: "presentation", onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu, onMouseDownCapture: this._onMouseDownCapture, onFocusCapture: this._onFocus, "data-selection-is-modal": isModal ? true : undefined },
            this.props.children,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null)));
    };
    SelectionZone.prototype.componentDidUpdate = function (previousProps) {
        var selection = this.props.selection;
        if (selection !== previousProps.selection) {
            // Whenever selection changes, update the subscripton to keep modal state updated.
            this._events.off(previousProps.selection);
            this._events.on(selection, 'change', this._onSelectionChange);
        }
    };
    SelectionZone.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        if (this._getSelectionMode() === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none) {
            return true;
        }
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].single) {
            var isSelected = selection.isIndexSelected(index);
            var isModal = selection.isModal && selection.isModal();
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
            if (isModal && selection.setModal) {
                // Since the above call to setAllSelected(false) clears modal state,
                // restore it. This occurs because the SelectionMode of the Selection
                // may differ from the SelectionZone.
                selection.setModal(true);
            }
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            if (this._isShiftPressed && !this._isTabPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    SelectionZone.prototype._findScrollParentAndTryClearOnEmptyClick = function (ev) {
        var scrollParent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["findScrollableParent"])(this._root.current);
        // unbind this handler and replace binding with a binding on the actual scrollable parent
        this._events.off(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick);
        // If we clicked inside the scrollable parent, call through to the handler on this click.
        if ((scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target)) || scrollParent === ev.target) {
            this._tryClearOnEmptyClick(ev);
        }
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            var isModal = selection.isModal && selection.isModal();
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            if (isModal || (this.props.enterModalOnTouch && this._isTouch)) {
                if (selection.setModal) {
                    selection.setModal(true);
                }
                if (this._isTouch) {
                    this._setIsTouch(false);
                }
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
        var keyCode = ev.keyCode;
        this._isTabPressed = keyCode ? keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab : false;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isElementTabbable"])(element)) {
                    return false;
                }
                element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isSelectedOnFocus: true,
        selectionMode: _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple,
    };
    return SelectionZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SelectionZone.js.map

/***/ }),

/***/ "0q4O":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/DetailsList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DetailsList/index */ "7YZ5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeaderBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["buildColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CheckboxVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["getDetailsRowStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsColumnBase"]; });


//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "0sdQ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHRPromise.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["XHRPromise"]; });

// Loading @ms/odsp-utilities/./lib/xhr/XHRPromise.js



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

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "1xj0":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsListBase, buildColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return DetailsListBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return buildColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailsList/DetailsHeader */ "tApQ");
/* harmony import */ var _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailsList/DetailsHeader.types */ "9ehK");
/* harmony import */ var _DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow */ "wqXl");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/dragdrop/DragDropHelper */ "uGAW");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/decorators/withViewport */ "AiA5");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/groupedList/GroupedListUtility */ "TUa0");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uifabric/react-hooks */ "v+W9");
















// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
/**
 * Hooks-based implementation of DetailsList.
 * Since many existing consumers of DetailsList expect `ref` to return a `DetailsList`,
 * this inner component handles rendering while the outer maintains compatibility.
 */
var DetailsListInner = function (props) {
    var selection = props.selection;
    var ariaLabelForListHeader = props.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = props.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = props.ariaLabelForSelectionColumn, className = props.className, checkboxVisibility = props.checkboxVisibility, compact = props.compact, constrainMode = props.constrainMode, dragDropEvents = props.dragDropEvents, groups = props.groups, groupProps = props.groupProps, indentWidth = props.indentWidth, items = props.items, isPlaceholderData = props.isPlaceholderData, isHeaderVisible = props.isHeaderVisible, layoutMode = props.layoutMode, onItemInvoked = props.onItemInvoked, onItemContextMenu = props.onItemContextMenu, onColumnHeaderClick = props.onColumnHeaderClick, onColumnHeaderContextMenu = props.onColumnHeaderContextMenu, _a = props.selectionMode, selectionMode = _a === void 0 ? selection.mode : _a, selectionPreservedOnEmptyClick = props.selectionPreservedOnEmptyClick, selectionZoneProps = props.selectionZoneProps, ariaLabel = props.ariaLabel, ariaLabelForGrid = props.ariaLabelForGrid, rowElementEventMap = props.rowElementEventMap, _b = props.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b, getKey = props.getKey, listProps = props.listProps, usePageCache = props.usePageCache, onShouldVirtualize = props.onShouldVirtualize, viewport = props.viewport, minimumPixelsForDrag = props.minimumPixelsForDrag, getGroupHeight = props.getGroupHeight, styles = props.styles, theme = props.theme, _c = props.cellStyleProps, cellStyleProps = _c === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _c, onRenderCheckbox = props.onRenderCheckbox, useFastIcons = props.useFastIcons, dragDropHelper = props.dragDropHelper, adjustedColumns = props.adjustedColumns, isCollapsed = props.isCollapsed, isSizing = props.isSizing, isSomeGroupExpanded = props.isSomeGroupExpanded, version = props.version, rootRef = props.rootRef, listRef = props.listRef, focusZoneRef = props.focusZoneRef, columnReorderOptions = props.columnReorderOptions, groupedListRef = props.groupedListRef, headerRef = props.headerRef, onGroupExpandStateChanged = props.onGroupExpandStateChanged, onColumnIsSizingChanged = props.onColumnIsSizingChanged, onRowDidMount = props.onRowDidMount, onRowWillUnmount = props.onRowWillUnmount, disableSelectionZone = props.disableSelectionZone, onColumnResized = props.onColumnResized, onColumnAutoResized = props.onColumnAutoResized, onToggleCollapse = props.onToggleCollapse, onActiveRowChanged = props.onActiveRowChanged, onBlur = props.onBlur, eventsToRegister = props.rowElementEventMap, onRenderMissingItem = props.onRenderMissingItem, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, getRowAriaLabel = props.getRowAriaLabel, getRowAriaDescribedBy = props.getRowAriaDescribedBy, checkButtonAriaLabel = props.checkButtonAriaLabel, checkboxCellClassName = props.checkboxCellClassName, useReducedRowRenderer = props.useReducedRowRenderer, enableUpdateAnimations = props.enableUpdateAnimations, enterModalSelectionOnTouch = props.enterModalSelectionOnTouch, onRenderDefaultRow = props.onRenderDefaultRow, selectionZoneRef = props.selectionZoneRef;
    var groupNestingDepth = getGroupNestingDepth(groups);
    var additionalListProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey,
            version: version }, listProps);
    }, [isSizing, getKey, version, listProps]);
    var selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none; // for SelectionMode.none
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].single) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple) {
        // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
        var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
        if (isCollapsedGroupSelectVisible === undefined) {
            isCollapsedGroupSelectVisible = true;
        }
        var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
        selectAllVisibility = isSelectAllVisible ? _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].visible : _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (checkboxVisibility === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none;
    }
    var defaultOnRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (detailsHeaderProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__["DetailsHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsHeaderProps));
    }, []);
    var defaultOnRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
        return null;
    }, []);
    var propsOnRenderDetailsHeader = props.onRenderDetailsHeader;
    var onRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsHeader
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader)
            : defaultOnRenderDetailsHeader;
    }, [propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader]);
    var propsOnRenderDetailsFooter = props.onRenderDetailsFooter;
    var onRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsFooter
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter)
            : defaultOnRenderDetailsFooter;
    }, [propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter]);
    var detailsFooterProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return {
            columns: adjustedColumns,
            groupNestingDepth: groupNestingDepth,
            selection: selection,
            selectionMode: selectionMode,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
        };
    }, [
        adjustedColumns,
        groupNestingDepth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        indentWidth,
        cellStyleProps,
    ]);
    var columnReorderOnDragEnd = columnReorderOptions && columnReorderOptions.onDragEnd;
    var onColumnDragEnd = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (_a, event) {
        var dropLocation = _a.dropLocation;
        var finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].outside;
        if (columnReorderOnDragEnd) {
            if (dropLocation && dropLocation !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header) {
                finalDropLocation = dropLocation;
            }
            else if (rootRef.current) {
                var clientRect = rootRef.current.getBoundingClientRect();
                if (event.clientX > clientRect.left &&
                    event.clientX < clientRect.right &&
                    event.clientY > clientRect.top &&
                    event.clientY < clientRect.bottom) {
                    finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].surface;
                }
            }
            columnReorderOnDragEnd(finalDropLocation);
        }
    }, [columnReorderOnDragEnd, rootRef]);
    var columnReorderProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        if (columnReorderOptions) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: onColumnDragEnd });
        }
    }, [columnReorderOptions, onColumnDragEnd]);
    var rowCount = (isHeaderVisible ? 1 : 0) + Object(_utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__["GetGroupCount"])(groups) + (items ? items.length : 0);
    var colCount = (selectAllVisibility !== _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none ? 1 : 0) +
        (adjustedColumns ? adjustedColumns.length : 0) +
        (groups ? 1 : 0);
    var classNames = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return getClassNames(styles, {
            theme: theme,
            compact: compact,
            isFixed: layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns,
            isHorizontalConstrained: constrainMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
            className: className,
        });
    }, [styles, theme, compact, layoutMode, constrainMode, className]);
    var onRenderDetailsGroupFooter = groupProps && groupProps.onRenderFooter;
    var finalOnRenderDetailsGroupFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupFooter
            ? function (groupFooterProps, defaultRender) {
                return onRenderDetailsGroupFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupFooterProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
    }, [
        onRenderDetailsGroupFooter,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var onRenderDetailsGroupHeader = groupProps && groupProps.onRenderHeader;
    var finalOnRenderDetailsGroupHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupHeader
            ? function (groupHeaderProps, defaultRender) {
                return onRenderDetailsGroupHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps, ariaColSpan: adjustedColumns.length }), defaultRender);
            }
            : function (groupHeaderProps, defaultRender) {
                return defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { ariaColSpan: adjustedColumns.length }));
            };
    }, [
        onRenderDetailsGroupHeader,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var finalGroupProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps), { onRenderFooter: finalOnRenderDetailsGroupFooter, onRenderHeader: finalOnRenderDetailsGroupHeader });
    }, [groupProps, finalOnRenderDetailsGroupFooter, finalOnRenderDetailsGroupHeader]);
    var sumColumnWidths = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useConst"])(function () {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (columns) {
            var totalWidth = 0;
            columns.forEach(function (column) { return (totalWidth += column.calculatedWidth || column.minWidth); });
            return totalWidth;
        });
    });
    var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
    var rowWidth = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return sumColumnWidths(adjustedColumns);
    }, [adjustedColumns, sumColumnWidths]);
    var onRenderCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth, item, index) {
        var finalOnRenderRow = props.onRenderRow
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(props.onRenderRow, onRenderDefaultRow)
            : onRenderDefaultRow;
        var rowProps = {
            item: item,
            itemIndex: index,
            compact: compact,
            columns: adjustedColumns,
            groupNestingDepth: nestingDepth,
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: onRowDidMount,
            onWillUnmount: onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            getCellValueKey: getCellValueKey,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            getRowAriaDescribedBy: getRowAriaDescribedBy,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
            useReducedRowRenderer: useReducedRowRenderer,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
            onRenderDetailsCheckbox: onRenderCheckbox,
            enableUpdateAnimations: enableUpdateAnimations,
            rowWidth: rowWidth,
            useFastIcons: useFastIcons,
        };
        if (!item) {
            if (onRenderMissingItem) {
                return onRenderMissingItem(index, rowProps);
            }
            return null;
        }
        return finalOnRenderRow(rowProps);
    }, [
        compact,
        adjustedColumns,
        selectionMode,
        selection,
        onRowDidMount,
        onRowWillUnmount,
        onRenderItemColumn,
        getCellValueKey,
        eventsToRegister,
        dragDropEvents,
        dragDropHelper,
        viewport,
        checkboxVisibility,
        collapseAllVisibility,
        getRowAriaLabel,
        getRowAriaDescribedBy,
        checkButtonAriaLabel,
        checkboxCellClassName,
        useReducedRowRenderer,
        indentWidth,
        cellStyleProps,
        onRenderCheckbox,
        enableUpdateAnimations,
        useFastIcons,
        onRenderDefaultRow,
        onRenderMissingItem,
        props.onRenderRow,
        rowWidth,
    ]);
    var onRenderListCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(nestingDepth, item, itemIndex);
        };
    }, [onRenderCell]);
    var isRightArrow = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
        return event.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, theme);
    }, [theme]);
    var focusZoneProps = {
        componentRef: focusZoneRef,
        className: classNames.focusZone,
        direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical,
        shouldEnterInnerZone: isRightArrow,
        onActiveElementChanged: onActiveRowChanged,
        shouldRaiseClicks: false,
        onBlur: onBlur,
    };
    var list = groups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList__WEBPACK_IMPORTED_MODULE_10__["GroupedList"], { focusZoneProps: focusZoneProps, componentRef: groupedListRef, groups: groups, groupProps: finalGroupProps, items: items, onRenderCell: onRenderCell, role: "presentation", selection: selection, selectionMode: checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? selectionMode : _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, focusZoneProps),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_11__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: listRef, role: "presentation", items: items, onRenderCell: onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps))));
    var onHeaderKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
            if (focusZoneRef.current && focusZoneRef.current.focus()) {
                // select the first item in list after down arrow key event
                // only if nothing was selected; otherwise start with the already-selected item
                if (selection.getSelectedIndices().length === 0) {
                    selection.setIndexSelected(0, true, false);
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [selection, focusZoneRef]);
    var onContentKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up && !ev.altKey) {
            if (headerRef.current && headerRef.current.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [headerRef]);
    return (
    // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
    // with JAWS.
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: rootRef, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false", "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "grid", "aria-label": ariaLabelForGrid, "aria-rowcount": isPlaceholderData ? -1 : rowCount, "aria-colcount": colCount, "aria-readonly": "true", "aria-busy": isPlaceholderData },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                onRenderDetailsHeader({
                    componentRef: headerRef,
                    selectionMode: selectionMode,
                    layoutMode: layoutMode,
                    selection: selection,
                    columns: adjustedColumns,
                    onColumnClick: onColumnHeaderClick,
                    onColumnContextMenu: onColumnHeaderContextMenu,
                    onColumnResized: onColumnResized,
                    onColumnIsSizingChanged: onColumnIsSizingChanged,
                    onColumnAutoResized: onColumnAutoResized,
                    groupNestingDepth: groupNestingDepth,
                    isAllCollapsed: isCollapsed,
                    onToggleCollapseAll: onToggleCollapse,
                    ariaLabel: ariaLabelForListHeader,
                    ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                    ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                    selectAllVisibility: selectAllVisibility,
                    collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                    viewport: viewport,
                    columnReorderProps: columnReorderProps,
                    minimumPixelsForDrag: minimumPixelsForDrag,
                    cellStyleProps: cellStyleProps,
                    checkboxVisibility: checkboxVisibility,
                    indentWidth: indentWidth,
                    onRenderDetailsCheckbox: onRenderCheckbox,
                    rowWidth: sumColumnWidths(adjustedColumns),
                    useFastIcons: useFastIcons,
                }, onRenderDetailsHeader)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onContentKeyDown, role: "presentation", className: classNames.contentWrapper }, !disableSelectionZone ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: selectionZoneRef, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: enterModalSelectionOnTouch }, (selectionZoneProps || {})), list)) : (list)),
            onRenderDetailsFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsFooterProps)))));
};
var DetailsListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsListBase, _super);
    function DetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._header = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._groupedList = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._selectionZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderRow = function (props, defaultRender) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__["DetailsRow"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._getDerivedStateFromProps = function (nextProps, previousState) {
            var _a = _this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? _this._selection.mode : _b, columns = _a.columns, viewport = _a.viewport, compact = _a.compact, dragDropEvents = _a.dragDropEvents;
            var _c = (_this.props.groupProps || {}).isAllGroupsCollapsed, isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
            var newViewportWidth = (nextProps.viewport && nextProps.viewport.width) || 0;
            var oldViewportWidth = (viewport && viewport.width) || 0;
            var shouldResetSelection = nextProps.setKey !== setKey || nextProps.setKey === undefined;
            var shouldForceUpdates = false;
            if (nextProps.layoutMode !== _this.props.layoutMode) {
                shouldForceUpdates = true;
            }
            var nextState = previousState;
            if (shouldResetSelection) {
                _this._initialFocusedIndex = nextProps.initialFocusedIndex;
                // reset focusedItemIndex when setKey changes
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { focusedItemIndex: _this._initialFocusedIndex !== undefined ? _this._initialFocusedIndex : -1 });
            }
            if (!_this.props.disableSelectionZone && nextProps.items !== items) {
                _this._selection.setItems(nextProps.items, shouldResetSelection);
            }
            if (nextProps.checkboxVisibility !== checkboxVisibility ||
                nextProps.columns !== columns ||
                newViewportWidth !== oldViewportWidth ||
                nextProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), _this._adjustColumns(nextProps, nextState, true));
            if (nextProps.selectionMode !== selectionMode) {
                shouldForceUpdates = true;
            }
            if (isAllGroupsCollapsed === undefined &&
                nextProps.groupProps &&
                nextProps.groupProps.isAllGroupsCollapsed !== undefined) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { isCollapsed: nextProps.groupProps.isAllGroupsCollapsed, isSomeGroupExpanded: !nextProps.groupProps.isAllGroupsCollapsed });
            }
            if (nextProps.dragDropEvents !== dragDropEvents) {
                _this._dragDropHelper && _this._dragDropHelper.dispose();
                _this._dragDropHelper = nextProps.dragDropEvents
                    ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                        selection: _this._selection,
                        minimumPixelsForDrag: nextProps.minimumPixelsForDrag,
                    })
                    : undefined;
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
            }
            return nextState;
        };
        _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
            _this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
        };
        _this._onColumnIsSizingChanged = function (column, isSizing) {
            _this.setState({ isSizing: isSizing });
        };
        _this._onRowDidMount = function (row) {
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            _this._activeRows[itemKey] = row; // this is used for column auto resize
            _this._setFocusToRowIfPending(row);
            var onRowDidMount = _this.props.onRowDidMount;
            if (onRowDidMount) {
                onRowDidMount(item, itemIndex);
            }
        };
        _this._onRowWillUnmount = function (row) {
            var onRowWillUnmount = _this.props.onRowWillUnmount;
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            delete _this._activeRows[itemKey];
            if (onRowWillUnmount) {
                onRowWillUnmount(item, itemIndex);
            }
        };
        _this._onToggleCollapse = function (collapsed) {
            _this.setState({
                isCollapsed: collapsed,
            });
            if (_this._groupedList.current) {
                _this._groupedList.current.toggleCollapseAll(collapsed);
            }
        };
        _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
            var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
            }
            _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
            _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._adjustColumns(_this.props, _this.state, true, resizingColumnIndex)), { version: {} }));
        };
        /**
         * Callback function when double clicked on the details header column resizer
         * which will measure the column cells of all the active rows and resize the
         * column to the max cell width.
         *
         * @param column - double clicked column definition
         * @param columnIndex - double clicked column index
         * TODO: min width 100 should be changed to const value and should be consistent with the
         * value used on _onSizerMove method in DetailsHeader
         */
        _this._onColumnAutoResized = function (column, columnIndex) {
            var max = 0;
            var count = 0;
            var totalCount = Object.keys(_this._activeRows).length;
            for (var key in _this._activeRows) {
                if (_this._activeRows.hasOwnProperty(key)) {
                    var currentRow = _this._activeRows[key];
                    currentRow.measureCell(columnIndex, function (width) {
                        max = Math.max(max, width);
                        count++;
                        if (count === totalCount) {
                            _this._onColumnResized(column, max, columnIndex);
                        }
                    });
                }
            }
        };
        /**
         * Call back function when an element in FocusZone becomes active. It will translate it into item
         * and call onActiveItemChanged callback if specified.
         *
         * @param row - element that became active in Focus Zone
         * @param focus - event from Focus Zone
         */
        _this._onActiveRowChanged = function (el, ev) {
            var _a = _this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
            if (!el) {
                return;
            }
            // Check and assign index only if the event was raised from any DetailsRow element
            if (el.getAttribute('data-item-index')) {
                var index = Number(el.getAttribute('data-item-index'));
                if (index >= 0) {
                    if (onActiveItemChanged) {
                        onActiveItemChanged(items[index], index, ev);
                    }
                    _this.setState({
                        focusedItemIndex: index,
                    });
                }
            }
        };
        _this._onBlur = function (event) {
            _this.setState({
                focusedItemIndex: -1,
            });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this.state = {
            focusedItemIndex: -1,
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props, undefined),
            isSizing: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
            version: {},
            getDerivedStateFromProps: _this._getDerivedStateFromProps,
        };
        _this._selection =
            props.selection ||
                new _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["Selection"]({
                    onSelectionChanged: undefined,
                    getKey: props.getKey,
                    selectionMode: props.selectionMode,
                });
        if (!_this.props.disableSelectionZone) {
            _this._selection.setItems(props.items, false);
        }
        _this._dragDropHelper = props.dragDropEvents
            ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                selection: _this._selection,
                minimumPixelsForDrag: props.minimumPixelsForDrag,
            })
            : undefined;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return previousState.getDerivedStateFromProps(nextProps, previousState);
    };
    DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
    };
    DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var item = this.props.items[index];
        if (item) {
            this.scrollToIndex(index, measureItem, scrollToMode);
            var itemKey = this._getItemKey(item, index);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row, forceIntoFirstElement);
            }
        }
    };
    DetailsListBase.prototype.getStartItemIndexInView = function () {
        if (this._list && this._list.current) {
            return this._list.current.getStartItemIndexInView();
        }
        else if (this._groupedList && this._groupedList.current) {
            return this._groupedList.current.getStartItemIndexInView();
        }
        return 0;
    };
    DetailsListBase.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
            this._dragDropHelper.dispose();
        }
        this._async.dispose();
    };
    DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._notifyColumnsResized();
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.items !== prevProps.items &&
            this.props.items.length > 0 &&
            this.state.focusedItemIndex !== -1 &&
            !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, document.activeElement, false)) {
            // Item set has changed and previously-focused item is gone.
            // Set focus to item at index of previously-focused item if it is in range,
            // else set focus to the last item.
            var index = this.state.focusedItemIndex < this.props.items.length
                ? this.state.focusedItemIndex
                : this.props.items.length - 1;
            var item = this.props.items[index];
            var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row);
            }
            else {
                this._initialFocusedIndex = index;
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsListBase.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DetailsListInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, this.state, { selection: this._selection, dragDropHelper: this._dragDropHelper, rootRef: this._root, listRef: this._list, groupedListRef: this._groupedList, focusZoneRef: this._focusZone, headerRef: this._header, selectionZoneRef: this._selectionZone, onGroupExpandStateChanged: this._onGroupExpandStateChanged, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onRowDidMount: this._onRowDidMount, onRowWillUnmount: this._onRowWillUnmount, onColumnResized: this._onColumnResized, onColumnAutoResized: this._onColumnAutoResized, onToggleCollapse: this._onToggleCollapse, onActiveRowChanged: this._onActiveRowChanged, onBlur: this._onBlur, onRenderDefaultRow: this._onRenderRow })));
    };
    DetailsListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            this._setFocusToRow(row);
            delete this._initialFocusedIndex;
        }
    };
    DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._selectionZone.current) {
            this._selectionZone.current.ignoreNextFocus();
        }
        this._async.setTimeout(function () {
            row.focus(forceIntoFirstElement);
        }, 0);
    };
    DetailsListBase.prototype._forceListUpdates = function () {
        if (this._groupedList.current) {
            this._groupedList.current.forceUpdate();
        }
        if (this._list.current) {
            this._list.current.forceUpdate();
        }
    };
    DetailsListBase.prototype._notifyColumnsResized = function () {
        this.state.adjustedColumns.forEach(function (column) {
            if (column.onColumnResize) {
                column.onColumnResize(column.currentWidth);
            }
        });
    };
    DetailsListBase.prototype._adjustColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var adjustedColumns = this._getAdjustedColumns(newProps, previousState, forceUpdate, resizingColumnIndex);
        var viewport = this.props.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { adjustedColumns: adjustedColumns, lastWidth: viewportWidth });
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsListBase.prototype._getAdjustedColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var _this = this;
        var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode, viewport = newProps.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        var newColumns = newProps.columns;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = previousState ? previousState.lastWidth : -1;
        var lastSelectionMode = previousState ? previousState.lastSelectionMode : undefined;
        if (!forceUpdate &&
            lastWidth === viewportWidth &&
            lastSelectionMode === selectionMode &&
            (!columns || newColumns === columns)) {
            return newColumns || [];
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            if (resizingColumnIndex !== undefined) {
                adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
            }
            else {
                adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
            }
            adjustedColumns.forEach(function (column) {
                _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
            });
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsListBase.prototype._getFixedColumns = function (newColumns) {
        var _this = this;
        return newColumns.map(function (column) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), _this._columnOverrides[column.key]);
            if (!newColumn.calculatedWidth) {
                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
            }
            return newColumn;
        });
    };
    DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
        var _this = this;
        var fixedColumns = newColumns.slice(0, resizingColumnIndex);
        fixedColumns.forEach(function (column) { return (column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth); });
        var fixedWidth = fixedColumns.reduce(function (total, column, i) { return total + getPaddedWidth(column, i === 0, props); }, 0);
        var remainingColumns = newColumns.slice(resizingColumnIndex);
        var remainingWidth = viewportWidth - fixedWidth;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(fixedColumns, this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
        var _this = this;
        var _a = props.selectionMode, selectionMode = _a === void 0 ? this._selection.mode : _a, checkboxVisibility = props.checkboxVisibility;
        var rowCheckWidth = selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__["CHECK_CELL_WIDTH"] : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__["SPACER_WIDTH"];
        var totalWidth = 0; // offset because we have one less inner padding.
        var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH }), _this._columnOverrides[column.key]);
            var isFirst = i + firstIndex === 0;
            totalWidth += getPaddedWidth(newColumn, isFirst, props);
            return newColumn;
        });
        var lastIndex = adjustedColumns.length - 1;
        // Shrink or remove collapsable columns.
        while (lastIndex > 0 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
            var overflowWidth = totalWidth - availableWidth;
            // eslint-disable-next-line deprecation/deprecation
            if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
                var originalWidth = column.calculatedWidth;
                column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                totalWidth -= originalWidth - column.calculatedWidth;
            }
            else {
                totalWidth -= getPaddedWidth(column, false, props);
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var isLast = i === adjustedColumns.length - 1;
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth && !isLast) {
                continue;
            }
            var spaceLeft = availableWidth - totalWidth;
            var increment = void 0;
            if (isLast) {
                increment = spaceLeft;
            }
            else {
                var maxWidth = column.maxWidth;
                var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        return adjustedColumns;
    };
    DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._getColumnOverride(column.key);
        overrides.calculatedWidth = newCalculatedWidth;
        overrides.currentWidth = newCalculatedWidth;
    };
    DetailsListBase.prototype._getColumnOverride = function (key) {
        return (this._columnOverrides[key] = this._columnOverrides[key] || {});
    };
    DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsListBase.defaultProps = {
        layoutMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].justified,
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple,
        constrainMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
        checkboxVisibility: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].onHover,
        isHeaderVisible: true,
        compact: false,
        useFastIcons: true,
    };
    DetailsListBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__["withViewport"]
    ], DetailsListBase);
    return DetailsListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsable: !!columns.length,
                    isCollapsible: !!columns.length,
                    isMultiline: isMultiline === undefined ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnActionsMode"].clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName,
                });
            }
        }
    }
    return columns;
}
function getPaddedWidth(column, isFirst, props) {
    var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    return (column.calculatedWidth +
        cellStyleProps.cellLeftPadding +
        cellStyleProps.cellRightPadding +
        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
}
function getGroupNestingDepth(groups) {
    var level = 0;
    var groupsInLevel = groups;
    while (groupsInLevel && groupsInLevel.length > 0) {
        level++;
        groupsInLevel = groupsInLevel[0].children;
    }
    return level;
}
//# sourceMappingURL=DetailsList.base.js.map

/***/ }),

/***/ "2+UY":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type. Value = 0.
     */
    PrincipalType[PrincipalType["none"] = 0] = "none";
    /**
     * Enumeration whose value specifies a user as the principal type. Value = 1.
     */
    PrincipalType[PrincipalType["user"] = 1] = "user";
    /**
     * Enumeration whose value specifies a distribution list as the principal type. Value = 2.
     */
    PrincipalType[PrincipalType["distributionList"] = 2] = "distributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type. Value = 4.
     */
    PrincipalType[PrincipalType["securityGroup"] = 4] = "securityGroup";
    /**
     * Enumeration whose value specifies a group (2) as the principal type. Value = 8.
     */
    PrincipalType[PrincipalType["sharePointGroup"] = 8] = "sharePointGroup";
    /**
     * Enumeration whose value specifies all principal types. Value = 15.
     */
    PrincipalType[PrincipalType["all"] = 15] = "all";
})(PrincipalType || (PrincipalType = {}));
/* harmony default export */ __webpack_exports__["default"] = (PrincipalType);
//# sourceMappingURL=PrincipalType.js.map

/***/ }),

/***/ "2Xb7":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/interfaces.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });


//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "3OK7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return GroupShowAll; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupShowAll.styles */ "K2Cj");
/* harmony import */ var _GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupShowAll.base */ "9/iP");



var GroupShowAll = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__["GroupShowAllBase"], _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, { scope: 'GroupShowAll' });
//# sourceMappingURL=GroupShowAll.js.map

/***/ }),

/***/ "40s1":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Toggle.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: Toggle, ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Toggle/index */ "kL0j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__["Toggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__["ToggleBase"]; });


//# sourceMappingURL=Toggle.js.map

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

/***/ "5aJL":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ItemUrlHelperBasic.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: SiteRelation, GeoRelation, ItemUrlPartsBasic, removeDelimiter, appendDelimiter, startsWith, ItemUrlHelperBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteRelation", function() { return SiteRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoRelation", function() { return GeoRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlPartsBasic", function() { return ItemUrlPartsBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDelimiter", function() { return removeDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDelimiter", function() { return appendDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUrlHelperBasic", function() { return ItemUrlHelperBasic; });
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Specifies how the default site relates to the site specified in the item URL.
 */
var SiteRelation;
(function (SiteRelation) {
    /** The default site and the item exist on the same site (SPWeb) */
    SiteRelation[SiteRelation["sameSite"] = 0] = "sameSite";
    /** The default site and the item exist on a different site (SPWeb) */
    SiteRelation[SiteRelation["crossSite"] = 1] = "crossSite";
    /** Unable to determine if the default site and the item are on different sites. */
    SiteRelation[SiteRelation["unknown"] = 2] = "unknown";
})(SiteRelation || (SiteRelation = {}));
/**
 * Specifies how the default authority related to the geo specified in the item URL.
 */
var GeoRelation;
(function (GeoRelation) {
    GeoRelation[GeoRelation["sameGeo"] = 0] = "sameGeo";
    GeoRelation[GeoRelation["crossGeo"] = 1] = "crossGeo";
    GeoRelation[GeoRelation["unknown"] = 2] = "unknown";
})(GeoRelation || (GeoRelation = {}));
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlPartsBasic = /** @class */ (function () {
    function ItemUrlPartsBasic(params) {
        var defaultFullWebUrl = params.defaultFullWebUrl, defaultListUrl = params.defaultListUrl, multiGeoInfo = params.multiGeoInfo, _a = params.options, _b = _a === void 0 ? {} : _a, _c = _b.path, path = _c === void 0 ? undefined : _c, _d = _b.listUrl, listUrl = _d === void 0 ? undefined : _d, _e = _b.webUrl, webUrl = _e === void 0 ? undefined : _e, _f = _b.mayInferListUrl, mayInferListUrl = _f === void 0 ? false : _f;
        this._rawPath = path || undefined;
        this._rawListUrl = listUrl || undefined;
        this._rawWebUrl = webUrl || undefined;
        this.defaultFullWebUrl = convertFromRootUrl(defaultFullWebUrl || undefined);
        this.defaultListUrl = convertFromRootUrl(defaultListUrl || undefined);
        this.multiGeoInfo = multiGeoInfo;
        this.mayInferListUrl = mayInferListUrl;
    }
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeItemUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeListUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullListUrl", {
        get: function () {
            return this._getFullListUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedListUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullItemUrl", {
        get: function () {
            return this._getFullItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedItemUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "listRelativeItemUrl", {
        get: function () {
            return this._getListRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "webRelativeItemUrl", {
        get: function () {
            return this._getWebRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullWebUrl", {
        get: function () {
            return this._getFullWebUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedWebUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedWebUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeWebUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeWebUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "isCrossDomain", {
        get: function () {
            return this._getIsCrossDomain();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "isCrossList", {
        get: function () {
            return this._getIsCrossList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "siteRelation", {
        get: function () {
            return this._getSiteRelation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "geoRelation", {
        get: function () {
            return this._getGeoRelation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "path", {
        get: function () {
            return this._getPath();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "listUrl", {
        get: function () {
            return this._getListUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "webUrl", {
        get: function () {
            return this._getWebUrl();
        },
        enumerable: true,
        configurable: true
    });
    ItemUrlPartsBasic.prototype._getPath = function () {
        var rawPath = this._rawPath;
        var path;
        if (rawPath) {
            if (rawPath[0] === '/' || rawPath.indexOf('://') > -1) {
                path = convertFromRootUrl(rawPath);
            }
            else {
                var listUrl = this._getListUrl() || this.defaultListUrl;
                if (listUrl) {
                    path = listUrl + "/" + rawPath;
                }
            }
        }
        this._getPath = function () { return path; };
        return path;
    };
    ItemUrlPartsBasic.prototype._getListUrl = function () {
        var rawListUrl = this._rawListUrl;
        var listUrl;
        if (rawListUrl) {
            if (rawListUrl[0] === '/' || rawListUrl.indexOf('://') > -1) {
                listUrl = convertFromRootUrl(rawListUrl);
            }
            else {
                var webUrl = this._getWebUrl() || this.defaultFullWebUrl;
                if (webUrl) {
                    listUrl = webUrl + "/" + rawListUrl;
                }
            }
        }
        this._getListUrl = function () { return listUrl; };
        return listUrl;
    };
    ItemUrlPartsBasic.prototype._getWebUrl = function () {
        var rawWebUrl = this._rawWebUrl;
        var webUrl;
        if (rawWebUrl) {
            if (rawWebUrl[0] === '/' || rawWebUrl.indexOf('://') > -1) {
                webUrl = convertFromRootUrl(rawWebUrl);
            }
            else {
                webUrl = this.defaultFullWebUrl + "/" + rawWebUrl;
            }
        }
        this._getWebUrl = function () { return webUrl; };
        return webUrl;
    };
    ItemUrlPartsBasic.prototype._getCurrentAuthority = function () {
        var currentAuthority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).authority;
        this._getCurrentAuthority = function () { return currentAuthority; };
        return currentAuthority;
    };
    ItemUrlPartsBasic.prototype._getNormalizedWebUrl = function () {
        var normalizedWebUrl;
        var fullWebUrl = this._getFullWebUrl();
        var defaultWebUrl = this.defaultFullWebUrl;
        if (fullWebUrl !== void 0 && !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullWebUrl, defaultWebUrl)) {
            var fullWebUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullWebUrl);
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullWebUri.authority, this._getCurrentAuthority())) {
                normalizedWebUrl = fullWebUri.path;
            }
            else {
                normalizedWebUrl = fullWebUrl;
            }
        }
        this._getNormalizedItemUrl = function () { return normalizedWebUrl; };
        return normalizedWebUrl;
    };
    ItemUrlPartsBasic.prototype._getNormalizedItemUrl = function () {
        var normalizedItemUrl;
        var fullItemUrl = this._getFullItemUrl();
        if (fullItemUrl !== void 0) {
            var fullItemUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullItemUrl);
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullItemUri.authority, this._getCurrentAuthority())) {
                normalizedItemUrl = fullItemUri.path;
            }
            else {
                normalizedItemUrl = fullItemUrl;
            }
        }
        this._getNormalizedItemUrl = function () { return normalizedItemUrl; };
        return normalizedItemUrl;
    };
    ItemUrlPartsBasic.prototype._getNormalizedListUrl = function () {
        var normalizedListUrl;
        var fullListUrl = this._getFullListUrl();
        var defaultListUrl = this._getDefaultListUrl();
        if (fullListUrl !== void 0 && !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullListUrl, defaultListUrl)) {
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](fullListUrl).authority, this._getCurrentAuthority())) {
                // Remove the domain if the list is on the current domain.
                normalizedListUrl = this._getServerRelativeListUrl();
            }
            else {
                // The list on not on the current server and is not the default.
                normalizedListUrl = fullListUrl;
            }
        }
        this._getNormalizedListUrl = function () { return normalizedListUrl; };
        return normalizedListUrl;
    };
    ItemUrlPartsBasic.prototype._getServerUrl = function () {
        // One of the provided inputs should have a domain.
        // Extract the authority from that input to use as the base for all full URLs.
        var serverUrl = (this.path && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.path).authority) ||
            (this.listUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.listUrl).authority) ||
            (this.webUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.webUrl).authority) ||
            (this.defaultListUrl && new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultListUrl).authority) ||
            new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).authority;
        this._getServerUrl = function () { return serverUrl; };
        return serverUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeListUrl = function () {
        var serverRelativeListUrl;
        if (this.listUrl !== void 0) {
            serverRelativeListUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.listUrl).path;
        }
        else {
            // Since no list URL was provided, we will check if we can use the default list URL
            var defaultListUrl = this._getDefaultListUrl();
            var mayInferListUrl = this.mayInferListUrl;
            if (defaultListUrl !== void 0 || mayInferListUrl) {
                var serverRelativePath = this._getServerRelativePath();
                var serverRelativeDefaultListUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](defaultListUrl).path;
                if ((serverRelativePath === void 0 &&
                    (this.webUrl === void 0 ||
                        (serverRelativeDefaultListUrl &&
                            startsWith(appendDelimiter(serverRelativeDefaultListUrl), appendDelimiter(this._getServerRelativeWebUrl()))))) ||
                    (serverRelativeDefaultListUrl &&
                        startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeDefaultListUrl)))) {
                    // If the default list URL contains the specified path (or there is no path), then the default list is the correct list.
                    serverRelativeListUrl = serverRelativeDefaultListUrl;
                }
                else if (serverRelativePath !== void 0 && (this.defaultListUrl === '' || mayInferListUrl)) {
                    // If defaultListUrl was actually the empty string, or inference is permitted,
                    // attempt to reconstruct the list URL as the next segment after the web URL within the item's path.
                    var serverRelativeWebUrl = this._getServerRelativeWebUrl();
                    if (startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeWebUrl))) {
                        // Assume that the list name is the next segment of the path after the webUrl.
                        // NOTE: This is a bug since a list can exist in folders on the web!
                        var listName = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativePath).segments[new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativeWebUrl).segments.length];
                        serverRelativeListUrl = "" + appendDelimiter(serverRelativeWebUrl) + listName;
                    }
                }
            }
        }
        this._getServerRelativeListUrl = function () { return serverRelativeListUrl; };
        return serverRelativeListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullListUrl = function () {
        var fullListUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        if (serverRelativeListUrl !== void 0) {
            fullListUrl = "" + serverUrl + serverRelativeListUrl;
        }
        return fullListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullItemUrl = function () {
        var fullItemUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeItemUrl = this._getServerRelativeItemUrl();
        if (serverRelativeItemUrl !== void 0) {
            fullItemUrl = "" + serverUrl + serverRelativeItemUrl;
        }
        this._getFullItemUrl = function () { return fullItemUrl; };
        return fullItemUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeWebUrl = function () {
        var serverRelativeWebUrl;
        var serverRelativeListUrl;
        if (this.webUrl !== void 0) {
            serverRelativeWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.webUrl).path;
        }
        else if ((this.defaultListUrl || this.listUrl) &&
            !this.mayInferListUrl &&
            (serverRelativeListUrl = this._getServerRelativeListUrl()) !== void 0) {
            // If there is list information, and the listUrl may not be inferred from this web URL (which would be recursive),
            // attempt to infer the web from the list.
            var serverRelativeListUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](serverRelativeListUrl);
            serverRelativeWebUrl = "" + serverRelativeListUri.segments.slice(0, -1).join('/');
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).path;
        }
        this._getServerRelativeWebUrl = function () { return serverRelativeWebUrl; };
        return serverRelativeWebUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativePath = function () {
        var serverRelativePath;
        if (this.path !== void 0) {
            // Path is the only pointer directly to the item.
            serverRelativePath = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.path).path;
        }
        this._getServerRelativePath = function () { return serverRelativePath; };
        return serverRelativePath;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeItemUrl = function () {
        var serverRelativeItemUrl;
        if (this.path || this._rawPath) {
            // If a path has been computed, or if any path value was specified explicitly, use the computation for the path.
            serverRelativeItemUrl = this._getServerRelativePath();
        }
        else if (this.listUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.webUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        else if (this.defaultListUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        this._getServerRelativeItemUrl = function () { return serverRelativeItemUrl; };
        return serverRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getListRelativeItemUrl = function () {
        var listRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        var serverRelativeListUrlStem;
        if (this.path !== void 0 &&
            serverRelativeListUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), (serverRelativeListUrlStem = appendDelimiter(serverRelativeListUrl)))) {
            listRelativeItemUrl =
                serverRelativePath && serverRelativePath.substring(serverRelativeListUrlStem.length);
        }
        this._getListRelativeItemUrl = function () { return listRelativeItemUrl; };
        return listRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getWebRelativeItemUrl = function () {
        var webRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        var serverRelativeWebUrlStem;
        if (this.path !== void 0 &&
            serverRelativeWebUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), (serverRelativeWebUrlStem = appendDelimiter(serverRelativeWebUrl)))) {
            webRelativeItemUrl =
                serverRelativePath && serverRelativePath.substring(serverRelativeWebUrlStem.length);
        }
        this._getWebRelativeItemUrl = function () { return webRelativeItemUrl; };
        return webRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getDefaultListUrl = function () {
        var defaultListUrl;
        if (this.defaultListUrl !== void 0) {
            if (new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultListUrl).authority) {
                // If the default list supplies its own domain, use it instead of the current server domain.
                defaultListUrl = this.defaultListUrl;
            }
            else {
                // Assume the list is on the current domain.
                defaultListUrl = "" + this._getCurrentAuthority() + this.defaultListUrl;
            }
        }
        this._getDefaultListUrl = function () { return defaultListUrl; };
        return defaultListUrl;
    };
    ItemUrlPartsBasic.prototype._getIsCrossDomain = function () {
        var currentAuthority = this._getCurrentAuthority();
        var isCrossDomain = !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this._getServerUrl()).authority, currentAuthority);
        this._getIsCrossDomain = function () { return isCrossDomain; };
        return isCrossDomain;
    };
    ItemUrlPartsBasic.prototype._getIsCrossList = function () {
        var fullListUrl = this._getFullListUrl();
        var defaultFullListUrl = this._getDefaultListUrl();
        var isCrossList = !Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(fullListUrl, defaultFullListUrl);
        this._getIsCrossList = function () { return isCrossList; };
        return isCrossList;
    };
    ItemUrlPartsBasic.prototype._getSiteRelation = function () {
        var siteRelation = SiteRelation.unknown;
        if (this._getIsCrossDomain()) {
            // All cross-domain URLs are to be treated as remote sites.
            siteRelation = SiteRelation.crossSite;
        }
        else if (this.webUrl !== void 0) {
            // If webUrl is explicitly provided, then it is either the current site or it is remote.
            // No ambiguity.
            if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(removeDelimiter(this.defaultFullWebUrl), removeDelimiter(this._getFullWebUrl()))) {
                siteRelation = SiteRelation.sameSite;
            }
            else {
                siteRelation = SiteRelation.crossSite;
            }
        }
        else {
            // If webUrl is not explicitly provided, then look at the provided child URL, either listUrl or path.
            var serverRelativeCurrentWebUrl = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultFullWebUrl).path;
            // Do this check with listUrl, falling back to path.
            var serverRelativeUrl = this._getServerRelativeListUrl() || this._getServerRelativePath();
            if (serverRelativeUrl !== void 0) {
                if (!startsWith(appendDelimiter(serverRelativeUrl), appendDelimiter(serverRelativeCurrentWebUrl))) {
                    // If url doesn't contain default web URL, then it definitely is cross site
                    siteRelation = SiteRelation.crossSite;
                }
                else {
                    var itemUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](removeDelimiter(serverRelativeUrl));
                    var webUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](removeDelimiter(serverRelativeCurrentWebUrl));
                    if (itemUri.segments.length - 1 === webUri.segments.length ||
                        (itemUri.segments.length - 2 === webUri.segments.length &&
                            itemUri.segments[itemUri.segments.length - 2] === 'Lists')) {
                        // We know that the site contains the default web Url, but we need to check if server-relative URL contains any potential web URL
                        // Example: If default web URL is http://server/engineering and list URL is http://server/engineering/workItems, then
                        // it's safe to assume that they are on the same web.
                        // Lists is a special folder that contains lists--- one can't create a subweb named Lists. So it's safe to assume they're on the same web.
                        siteRelation = SiteRelation.sameSite;
                    }
                    else {
                        // Site is on the same domain and contains default web url, but the item URL is not one-level
                        // under the default web URL so we can't say whether it's on the same site or not.
                        // Example: If default web URL is http://server/marketing/ and list URL is
                        // http://server/marketing/sales/Forecast, we don't know if "sales" is a subsite
                        // of "marketing" or just a folder.
                        siteRelation = SiteRelation.unknown;
                    }
                }
            }
        }
        this._getSiteRelation = function () { return siteRelation; };
        return siteRelation;
    };
    ItemUrlPartsBasic.prototype._getFullWebUrl = function () {
        var fullWebUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        if (serverRelativeWebUrl !== void 0) {
            fullWebUrl = "" + serverUrl + serverRelativeWebUrl;
        }
        this._getFullWebUrl = function () { return fullWebUrl; };
        return fullWebUrl;
    };
    ItemUrlPartsBasic.prototype._getGeoRelation = function () {
        if (!this._getIsCrossDomain()) {
            return GeoRelation.sameGeo;
        }
        var authority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](this._getServerUrl()).authority;
        if (!authority) {
            return GeoRelation.unknown;
        }
        var currentGeo = this._getCurrentGeo();
        if (!currentGeo) {
            return GeoRelation.unknown;
        }
        var geo = this._getGeoByAuthority()[authority.toUpperCase()];
        if (!geo) {
            return GeoRelation.unknown;
        }
        if (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_1__["equalsCaseInsensitive"])(geo, currentGeo)) {
            return GeoRelation.sameGeo;
        }
        return GeoRelation.crossGeo;
    };
    ItemUrlPartsBasic.prototype._getGeoByAuthority = function () {
        var geoByAuthority = {};
        var defaultFoundByAuthority = {};
        function addUrl(url, geo, isDefault) {
            var authority = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["default"](url).authority.toUpperCase();
            if (isDefault || !defaultFoundByAuthority[authority]) {
                geoByAuthority[authority] = geo;
            }
            if (isDefault) {
                defaultFoundByAuthority[authority] = true;
            }
        }
        if (this.multiGeoInfo) {
            for (var _i = 0, _a = this.multiGeoInfo; _i < _a.length; _i++) {
                var multiGeoInfo = _a[_i];
                var geo = multiGeoInfo.InstanceId;
                var isDefaultDataLocation = multiGeoInfo.IsDefaultDataLocation;
                addUrl(multiGeoInfo.MySiteHostUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.PortalUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.RootSiteUrl, geo, isDefaultDataLocation);
                addUrl(multiGeoInfo.TenantAdminUrl, geo, isDefaultDataLocation);
                if (multiGeoInfo.AdditionalUrls) {
                    for (var _b = 0, _c = multiGeoInfo.AdditionalUrls; _b < _c.length; _b++) {
                        var additionalUrl = _c[_b];
                        addUrl(additionalUrl, geo, isDefaultDataLocation);
                    }
                }
            }
        }
        this._getGeoByAuthority = function () { return geoByAuthority; };
        return geoByAuthority;
    };
    ItemUrlPartsBasic.prototype._getCurrentGeo = function () {
        var authority = this._getCurrentAuthority();
        if (!authority) {
            return;
        }
        var currentGeo = this._getGeoByAuthority()[authority.toUpperCase()];
        this._getCurrentGeo = function () { return currentGeo; };
        return currentGeo;
    };
    return ItemUrlPartsBasic;
}());

function convertToRootUrl(url) {
    if (url === '') {
        return '/';
    }
    return url;
}
function convertFromRootUrl(url) {
    if (url === '/') {
        return '/';
    }
    return url;
}
function removeDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment.substring(0, segment.length - 1);
    }
    else {
        return segment;
    }
}
function appendDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment;
    }
    else {
        return segment + "/";
    }
}
function startsWith(body, query) {
    var trimmedNormalizedBody = body.toUpperCase();
    var trimmedNormalizedQuery = query && query.toUpperCase();
    return (trimmedNormalizedBody.substring(0, (trimmedNormalizedQuery && trimmedNormalizedQuery.length) || 0) ===
        trimmedNormalizedQuery);
}
/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelperBasic
 */
var ItemUrlHelperBasic = /** @class */ (function () {
    function ItemUrlHelperBasic(params) {
        var context = params.context, _a = params.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlPartsBasic : _a;
        this.itemUrlPartsType = itemUrlPartsType;
        this.itemUrlContext = context;
    }
    /**
     * Extracts the available URL parts for an item given available information.
     * Any or all of the inputs may be provided, though the outputs may be undefined
     * if insufficient information is provided.
     *
     * @param {IGetUrlPartsOptions} [params={}]
     * @returns {IItemUrlParts}
     */
    ItemUrlHelperBasic.prototype.getUrlParts = function (options) {
        var _a = this.itemUrlContext, webAbsoluteUrl = _a.webAbsoluteUrl, listUrl = _a.listUrl, multiGeoInfo = _a.multiGeoInfo;
        return new this.itemUrlPartsType({
            defaultFullWebUrl: webAbsoluteUrl,
            defaultListUrl: listUrl,
            multiGeoInfo: multiGeoInfo,
            options: options
        });
    };
    return ItemUrlHelperBasic;
}());

//# sourceMappingURL=ItemUrlHelperBasic.js.map

/***/ }),

/***/ "5qGQ":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ApiUrlHelperBasic.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ApiUrlBasic, ApiUrlHelperBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlBasic", function() { return ApiUrlBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelperBasic", function() { return ApiUrlHelperBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");


/**
 * Implementation of an extendable SharePoint API URL.
 * Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrlBasic = /** @class */ (function () {
    function ApiUrlBasic(params) {
        var webAbsoluteUrl = params.webAbsoluteUrl, _a = params.encodeWebAbsoluteUrl, encodeWebAbsoluteUrl = _a === void 0 ? true : _a;
        this._webAbsoluteUrl = webAbsoluteUrl;
        this._encodeWebAbsoluteUrl = encodeWebAbsoluteUrl;
        this._segments = [];
        this._parameters = [];
        this._rawParameters = [];
        this._lastParameterId = 0;
    }
    ApiUrlBasic.prototype.toString = function () {
        var querySegments = [];
        if (this._parameters.length) {
            querySegments.push(this._parameters
                .map(function (_a) {
                var name = _a.name, serializedValue = _a.serializedValue;
                return name + "=" + serializedValue;
            })
                .join('&'));
        }
        querySegments.push.apply(querySegments, this._rawParameters);
        var query;
        if (querySegments.length) {
            query = "?" + querySegments.join('&');
        }
        else {
            query = '';
        }
        var _a = this._webUrl, webUrl = _a === void 0 ? this._webAbsoluteUrl : _a;
        var parts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([this._encodeWebAbsoluteUrl ? encodeURI(webUrl) : webUrl, '_api'], this._segments);
        return "" + parts.join('/') + query;
    };
    ApiUrlBasic.prototype.segment = function (name) {
        return this._extend({
            segments: [name]
        });
    };
    ApiUrlBasic.prototype.segments = function () {
        var segments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            segments[_i] = arguments[_i];
        }
        return this._extend({
            segments: segments
        });
    };
    ApiUrlBasic.prototype.methodWithAliases = function (name, parameters) {
        var apiUrl = this;
        var methodArguments = [];
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var parameter = _a[_i];
            var value = parameters[parameter];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(parameter + "=" + autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.method = function (name) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var apiUrl = this;
        var methodArguments = [];
        for (var _a = 0, parameters_1 = parameters; _a < parameters_1.length; _a++) {
            var value = parameters_1[_a];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.parameter = function (name, value) {
        return this._parameter(name, value);
    };
    ApiUrlBasic.prototype.parameters = function (parameters) {
        var apiUrl = this;
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = parameters[name_1];
            apiUrl = apiUrl.parameter(name_1, value);
        }
        return apiUrl;
    };
    ApiUrlBasic.prototype.oDataParameter = function (name, value) {
        return this.parameter(name, {
            raw: value
        });
    };
    ApiUrlBasic.prototype.rawParameter = function (queryString) {
        return this._extend({
            rawParameters: [queryString]
        });
    };
    ApiUrlBasic.prototype._autoParameter = function (value) {
        var lastParameterId = this._lastParameterId + 1;
        var name = "@a" + lastParameterId;
        var apiUrl = this._extend({
            lastParameterId: lastParameterId
        })._parameter(name, value);
        return {
            name: name,
            apiUrl: apiUrl
        };
    };
    ApiUrlBasic.prototype._parameter = function (name, value) {
        var serializedValue;
        if (isJson(value)) {
            serializedValue = _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(JSON.stringify(value.json));
        }
        else if (isGuid(value)) {
            serializedValue = "guid'" + value.guid + "'";
        }
        else if (isRaw(value)) {
            serializedValue = value.raw;
        }
        else if (typeof value === 'number') {
            serializedValue = "" + value;
        }
        else if (typeof value === 'boolean') {
            serializedValue = "" + value;
        }
        else {
            serializedValue = "'" + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(value) + "'";
        }
        return this._extend({
            parameters: [
                {
                    name: name,
                    serializedValue: serializedValue
                }
            ]
        });
    };
    ApiUrlBasic.prototype.clone = function () {
        return new ApiUrlBasic({
            webAbsoluteUrl: this._webAbsoluteUrl,
            encodeWebAbsoluteUrl: this._encodeWebAbsoluteUrl
        });
    };
    ApiUrlBasic.prototype._extend = function (state) {
        var _a, _b, _c, _d, _e, _f;
        if (state === void 0) { state = {}; }
        var apiUrl = this.clone();
        apiUrl._webUrl = this._webUrl;
        apiUrl._lastParameterId = this._lastParameterId;
        (_a = apiUrl._parameters).push.apply(_a, this._parameters);
        (_b = apiUrl._segments).push.apply(_b, this._segments);
        (_c = apiUrl._rawParameters).push.apply(_c, this._rawParameters);
        if ('webUrl' in state) {
            apiUrl._webUrl = state.webUrl;
        }
        if ('lastParameterId' in state) {
            apiUrl._lastParameterId = state.lastParameterId;
        }
        if ('parameters' in state) {
            (_d = apiUrl._parameters).push.apply(_d, state.parameters);
        }
        if ('rawParameters' in state) {
            (_e = apiUrl._rawParameters).push.apply(_e, state.rawParameters);
        }
        if ('segments' in state) {
            (_f = apiUrl._segments).push.apply(_f, state.segments);
        }
        return apiUrl;
    };
    return ApiUrlBasic;
}());

/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelperBasic
 *
 * @example
 *  let apiUrlHelper = new ApiUrlHelperBasic({ webAbsoluteUrl: webAbsoluteUrl });
 *  let apiUrl = apiUrlHelper.build()
 *      .segment('web')
 *      .method('GetList', serverRelativeListUrl)
 *      .segment('RenderListFilterData')
 *      .parameter('FieldInternalName', fieldInternalName!);
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'GetFilterData'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelperBasic = /** @class */ (function () {
    function ApiUrlHelperBasic(params) {
        this._apiUrlType = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_apiUrlType, _super);
            function _apiUrlType() {
                return _super.call(this, {
                    webAbsoluteUrl: params.webAbsoluteUrl,
                    encodeWebAbsoluteUrl: params.encodeWebAbsoluteUrl
                }) || this;
            }
            return _apiUrlType;
        }(ApiUrlBasic));
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrlBasic}
     */
    ApiUrlHelperBasic.prototype.build = function () {
        return new this._apiUrlType();
    };
    /**
     * Generates a GetContextWebInformation API call URL based on any input URL against
     * a SharePoint server.
     *
     * @param {string} url
     * @returns {string}
     */
    ApiUrlHelperBasic.prototype.contextInfoUrl = function (fullItemUrl) {
        var layoutsIndex = fullItemUrl.indexOf('/_layouts/');
        var contextInfoRootUrl;
        if (layoutsIndex > -1) {
            contextInfoRootUrl = fullItemUrl.substring(0, layoutsIndex);
        }
        else {
            var lastSegmentIndex = fullItemUrl.lastIndexOf('/');
            var lastExtensionIndex = fullItemUrl.lastIndexOf('.');
            if (lastExtensionIndex > lastSegmentIndex) {
                contextInfoRootUrl = fullItemUrl.substring(0, lastExtensionIndex) + "_" + fullItemUrl.substring(lastExtensionIndex + 1);
            }
            else {
                contextInfoRootUrl = fullItemUrl;
            }
        }
        return contextInfoRootUrl + "/_api/contextinfo";
    };
    return ApiUrlHelperBasic;
}());

function isGuid(value) {
    return !!value && typeof value === 'object' && 'guid' in value;
}
function isRaw(value) {
    return !!value && typeof value === 'object' && 'raw' in value;
}
function isJson(value) {
    return !!value && typeof value === 'object' && 'json' in value;
}
//# sourceMappingURL=ApiUrlHelperBasic.js.map

/***/ }),

/***/ "6e34":
/*!**********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/ApiError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "unYt");


/**
 * Custom error base class for the common scenario of generic errors that should be reported in
 * Quality of Service metrics.
 * @public
 */
var ApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiError, _super);
    function ApiError(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ApiError';
        var innerError = props.innerError;
        var innerErrorAsApiError = innerError ? innerError : undefined;
        var errorData = innerErrorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof innerErrorAsApiError.correlationId === 'string'
                ? { correlationId: innerErrorAsApiError.correlationId }
                : {})), (typeof innerErrorAsApiError.isExpected === 'boolean'
                ? { isExpected: innerErrorAsApiError.isExpected }
                : {})), (typeof innerErrorAsApiError.name === 'string' ? { code: innerErrorAsApiError.name } : {})), (typeof innerErrorAsApiError.code === 'string' ? { code: innerErrorAsApiError.code } : {})), (typeof innerErrorAsApiError.extraData === 'object'
                ? { extraData: innerErrorAsApiError.extraData }
                : {})) : {};
        var _a = props.correlationId, correlationId = _a === void 0 ? errorData.correlationId : _a, _b = props.isExpected, isExpected = _b === void 0 ? errorData.isExpected : _b, extraData = props.extraData;
        _this.correlationId = correlationId;
        _this.isExpected = !!isExpected;
        _this.code = props.code || errorData.code || '';
        _this.extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (errorData.extraData || {})), (extraData || {}));
        return _this;
    }
    return ApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_1__["CustomError"]));

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ "6r7H":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/base/dataRequestor/DataRequestor.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: DataRequestor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRequestor", function() { return DataRequestor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHRPromise */ "0sdQ");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Api.event */ "Joik");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper */ "nXow");
/* harmony import */ var _models_error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/Base64Encoding */ "892h");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage













var performance = window && window.performance;
var DEFAULT_EXPECTED_ERROR_CODES = {
    // ErrorCode
    activityLimitReached: true,
    malwareDetected: true,
    nameAlreadyExists: true,
    resourceModified: true,
    resyncRequired: true,
    quotaLimitReached: true,
    // InnerErrorCode
    accessRestricted: true,
    childItemCountExceeded: true,
    entityTagDoesNotMatch: true,
    fragmentOutOfOrder: true,
    fragmentOverlap: true,
    hipCheckRequired: true,
    insufficientVaultQuota: true,
    lockMismatch: true,
    lockNotFoundOrAlreadyExpired: true,
    lockOwnerMismatch: true,
    maxDocumentCountExceeded: true,
    maxFileSizeExceeded: true,
    maxFolderCountExceeded: true,
    maxItemCountExceeded: true,
    nameContainsInvalidCharacters: true,
    pathIsTooLong: true,
    pathTooDeep: true,
    pathIsTooDeep: true,
    propertyNotUpdateable: true,
    resyncApplyDifferences: true,
    resyncUploadDifferences: true,
    serviceReadOnly: true,
    throttledRequest: true,
    unlockRequired: true,
    versionNumberDoesNotMatch: true,
    virusSuspicious: true,
    // ClientErrorCode
    authFailure: false
};
var BEARER_AUTH_TYPE = 'Bearer';
var DataRequestor = /** @class */ (function () {
    function DataRequestor(params, dependencies) {
        var _a = params.alwaysSendContentType, alwaysSendContentType = _a === void 0 ? false : _a;
        var sessionManagementProvider = dependencies.sessionManagementProvider, urlDataSource = dependencies.urlDataSource, _b = dependencies.apiEvent, apiEvent = _b === void 0 ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["Api"] : _b, cookieOrigin = dependencies.cookieOrigin, isOffline = dependencies.isOffline;
        this._sessionManagementProvider = sessionManagementProvider;
        this._alwaysSendContentType = alwaysSendContentType;
        this._apiEvent = apiEvent;
        this._apiName =
            urlDataSource && typeof urlDataSource.getApiName === 'function' ? urlDataSource.getApiName() : 'Vroom';
        this._apiBaseUrl = urlDataSource
            ? typeof urlDataSource.getApiBaseUrl === 'function'
                ? urlDataSource.getApiBaseUrl()
                : urlDataSource.getVroomApiBaseUrl()
            : undefined;
        this._cookieOrigin = cookieOrigin;
        this._isOffline = isOffline;
        this._encodingFixEnabled =
            !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('179f8622-1596-43df-a186-a4b42e1d7917', '08/04/2020', 'Decode unicode characters in graph errors') && !_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__["default"].isFeatureEnabled({ ODC: 'GraphEncodingFixKillswitch' });
    }
    DataRequestor.prototype.send = function (options) {
        var _this = this;
        var _a = options.headers, headers = _a === void 0 ? {} : _a, path = options.path, _b = options.endpoint, endpoint = _b === void 0 ? this._apiBaseUrl : _b, driveUrl = options.driveUrl, apiName = options.apiName, _c = options.disableLogging, disableLogging = _c === void 0 ? false : _c, timeout = options.timeout, onProgress = options.onProgress, onUploadProgress = options.onUploadProgress, qosExtraData = options.qosExtraData, _d = options.apiVersion, apiVersion = _d === void 0 ? 'v2.0' : _d, _e = options.needsAuthorization, needsAuthorization = _e === void 0 ? true : _e, _f = options.useAuthorizationHeaders, useAuthorizationHeaders = _f === void 0 ? false : _f, accessToken = options.accessToken, postProcessQos = options.postProcessQos, breakCache = options.breakCache, allowCookies = options.allowCookies, _g = options.hasContentType, hasContentType = _g === void 0 ? true : _g, _h = options.useMultiPart, useMultiPart = _h === void 0 ? false : _h, _j = options.getErrorAsMessage, getErrorAsMessage = _j === void 0 ? false : _j, expectedErrors = options.expectedErrors;
        var expectedErrorCodes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_EXPECTED_ERROR_CODES), (options.expectedErrorCodes || {}));
        var _k = options.requestType, requestType = _k === void 0 ? 'GET' : _k;
        var cookieOrigin = this._cookieOrigin;
        var pathUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](path);
        var url = pathUri.authority ? path : "" + endpoint + path;
        var getData = function (auth) {
            var multiPartId = '';
            var requestHeaders = {};
            if (useMultiPart) {
                // Send only one header in the main request to avoid CORS. Remaining headers are sent as part
                // of the multi-part content disposition data.
                multiPartId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__["default"].generate();
                requestHeaders = {
                    'Content-Type': "multipart/form-data;boundary=" + multiPartId
                };
            }
            else {
                // Don't pass a content-type header if no postData. Otherwise we are stuck with CORS pre-flight on all requests.
                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Accept: 'application/json' }, ((options.postData || _this._alwaysSendContentType) && hasContentType
                    ? {
                        'Content-Type': 'application/json'
                    }
                    : {})), (auth.useCookies && auth.digestValue
                    ? {
                        'x-requestdigest': auth.digestValue
                    }
                    : {})), (getErrorAsMessage
                    ? {
                        prefer: 'rich-error-as-message'
                    }
                    : {})), headers);
            }
            var apiUri;
            if (auth.sessionToken && auth.sessionToken.tokenUrl && path.indexOf('/drive/') === 0) {
                // replace the generic "/drive/" with our specific token url
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](auth.sessionToken.tokenUrl + "/" + path.substring(7));
            }
            else {
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](path);
                if (endpoint && !apiUri.getScheme()) {
                    apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](endpoint + path);
                }
            }
            if (useMultiPart) {
                apiUri.setQueryParameter('ump', '1');
                if (requestType !== 'POST') {
                    headers['X-HTTP-Method-Override'] = requestType;
                }
                // in order to avoid CORS, the type of the actual request needs to be POST
                requestType = 'POST';
            }
            // save the url to log before we add sensitive tokens
            var apiUrlToLog = apiUri.toString();
            if (!useMultiPart) {
                if (auth.sessionToken) {
                    var _a = auth.sessionToken, sessionAccessToken = _a.accessToken, proofToken = _a.proofToken, wlidToken = _a.wlidToken, isBadger = _a.isBadger;
                    if (wlidToken) {
                        requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "wlid1.1 " + wlidToken });
                    }
                    else if (useAuthorizationHeaders) {
                        if (sessionAccessToken) {
                            if (isBadger) {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "badger " + sessionAccessToken });
                            }
                            else {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "bearer " + sessionAccessToken });
                            }
                        }
                        if (proofToken) {
                            requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { 'X-PROOF_TOKEN': proofToken });
                        }
                    }
                    else {
                        if (sessionAccessToken) {
                            // We attach the access token as a query parameter to every request.
                            // We could also pass it in through the 'Authorization: bearer' header,
                            // but that would result in an extra CORS preflight request for every
                            // unique path.
                            apiUri.setQueryParameter('access_token', sessionAccessToken);
                        }
                        if (proofToken) {
                            // ODB scenarios use proof tokens
                            apiUri.setQueryParameter('prooftoken', proofToken);
                        }
                    }
                }
            }
            if (useMultiPart) {
                var body = '';
                body += "--" + multiPartId + "\r\n";
                body += 'Content-Disposition: form-data;name=data\r\n';
                if (headers) {
                    for (var _i = 0, _b = Object.keys(headers); _i < _b.length; _i++) {
                        var header = _b[_i];
                        body += header + ": " + headers[header] + "\r\n";
                    }
                }
                body += 'Content-Type: application/json\r\n';
                body += "Authorization: bearer " + auth.sessionToken.accessToken + "\r\n";
                if (getErrorAsMessage) {
                    body += 'prefer: rich-error-as-message\r\n';
                }
                body += '\r\n';
                body += (options.postData !== undefined ? options.postData : '') + "\r\n";
                body += "--" + multiPartId + "--";
            }
            if (breakCache) {
                apiUri.setQueryParameter('r', Math.random().toFixed(8));
            }
            var apiEvent;
            if (!disableLogging) {
                var telemetryUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](apiUrlToLog);
                var eventDetails = {
                    url: telemetryUri.authority + "/{ length: " + telemetryUri.path.length + ", segments: " + telemetryUri.segments.length + " }",
                    name: _this._apiName + "DataRequest." + apiName,
                    extraData: qosExtraData
                };
                apiEvent = new _this._apiEvent(eventDetails);
            }
            var apiUrlString = apiUri.toString();
            var requestPerformanceStartTime = performance && performance.now();
            return _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__["default"].start({
                url: apiUrlString,
                headers: requestHeaders,
                method: requestType,
                json: body || options.postData || '',
                requestTimeoutInMS: timeout,
                withCredentials: auth.useCookies,
                onProgress: onProgress,
                onUploadProgress: onUploadProgress
            }).then(function (request) {
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (apiEvent) {
                    var qosData = {
                        resultType: _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Success,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics),
                            requestId: request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid'),
                            MSCorrelationVector: request.getResponseHeader('MS-CV')
                        }
                    };
                    apiEvent.end(qosData);
                }
                if (options.parseResponse) {
                    return options.parseResponse(request);
                }
                if (request.responseText.length === 0) {
                    return null;
                }
                return JSON.parse(request.responseText);
            }, function (request) {
                var complete = function (apiEndSchema, error) {
                    if (postProcessQos) {
                        apiEndSchema = postProcessQos(apiEndSchema, error);
                    }
                    if (apiEvent) {
                        apiEvent.end(apiEndSchema);
                    }
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                };
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (request instanceof Error) {
                    var isCanceled = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].isCanceled(request);
                    var resultType = isCanceled ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure;
                    var apiEndSchema = {
                        error: request.message,
                        resultCode: isCanceled ? 'Canceled' : '',
                        resultType: resultType,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics)
                        }
                    };
                    return complete(apiEndSchema, request);
                }
                else {
                    var response_1;
                    if (request.responseText) {
                        try {
                            response_1 = JSON.parse(request.responseText);
                        }
                        catch (error) {
                            // no-op
                        }
                    }
                    if (getErrorAsMessage) {
                        try {
                            // If we requested the error to be encoded in the message field, decode it
                            var decodedError = _this._encodingFixEnabled
                                ? JSON.parse(Object(_ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__["base64ToString"])(response_1.error.message))
                                : JSON.parse(atob(response_1.error.message));
                            response_1 = { error: decodedError };
                        }
                        catch (e) {
                            // If we fail to decode, just try to continue with the original response
                        }
                    }
                    var status_1 = request.status, statusText_1 = request.statusText;
                    var _a = (response_1 || {}).error, _b = _a === void 0 ? {} : _a, _c = _b.message, message_1 = _c === void 0 ? '' : _c, _d = _b.innerError, _e = _d === void 0 ? {} : _d, _f = _e.stackTrace, stackTrace_1 = _f === void 0 ? '' : _f, _g = _e.debugMessage, debugMessage_1 = _g === void 0 ? '' : _g;
                    var offlinePromise = status_1 || !_this._isOffline ? _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(false) : _this._isOffline();
                    return offlinePromise.then(function (isOffline) {
                        var offlineMessage = isOffline ? 'Offline' : '';
                        var correlationId = request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid');
                        var isExpected = isOffline ||
                            !!Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getErrorResolutionFromResponse"])(response_1, status_1, function (code) {
                                return expectedErrorCodes[code];
                            });
                        var error = new _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"](new Error(message_1 || offlineMessage), {
                            response: response_1,
                            status: status_1,
                            request: request,
                            correlationId: correlationId,
                            isExpected: isExpected
                        });
                        if (expectedErrors && Object(_ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__["isExpectedError"])({ code: error.code, message: message_1 }, expectedErrors)) {
                            isExpected = true;
                        }
                        var apiEndSchema = {
                            resultType: isExpected ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure,
                            error: message_1,
                            resultCode: error.code,
                            extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (qosExtraData || {})), Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getQosExtraDataFromError"])(error)), { stack: stackTrace_1, httpStatus: status_1, httpStatusText: statusText_1, requestId: correlationId, MSCorrelationVector: request.getResponseHeader('MS-CV'), debugMessage: debugMessage_1, accessTokenLength: auth.sessionToken && auth.sessionToken.accessToken
                                    ? auth.sessionToken.accessToken.length
                                    : -1, urlLength: apiUri.toString().length, useCookies: !!auth.useCookies, 
                                // This check may give false negatives, as being on a LAN with no internet still qualifies as "onLine"
                                isOffline: isOffline, rawRequestDuration: performanceMetrics.duration, performanceEntry: JSON.stringify(performanceMetrics) })
                        };
                        return complete(apiEndSchema, error);
                    });
                }
            });
        };
        var sessionManagementProvider = this._sessionManagementProvider;
        if (needsAuthorization) {
            if (accessToken) {
                return getData({
                    sessionToken: accessToken
                });
            }
            var origin_1 = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](url).authority;
            if (allowCookies && origin_1 && cookieOrigin && origin_1 === cookieOrigin) {
                // This is a same-origin call. In this case, cookies may be used for this API call.
                if (sessionManagementProvider && sessionManagementProvider.getFormDigest && requestType !== 'GET') {
                    // If the API call is not made using 'GET', a cross-site anti-forgery token needs to be obtained from the current app.
                    return sessionManagementProvider.getFormDigest().then(function (digestValue) {
                        return getData({
                            digestValue: digestValue,
                            useCookies: true
                        });
                    });
                }
                return getData({
                    useCookies: true
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getSessionToken) {
                var getSessionTokenOptions_1 = {
                    apiVersion: apiVersion,
                    endpoint: endpoint,
                    driveUrl: driveUrl,
                    path: url
                };
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(sessionManagementProvider.getSessionToken(getSessionTokenOptions_1)).then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    }).catch(function (error) {
                        if (sessionToken && isInvalidTokenError(error)) {
                            // If the token is invalid, do a one-time renewal attempt.
                            return sessionManagementProvider
                                .getSessionToken(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getSessionTokenOptions_1), { claimsChallenge: {
                                    sessionToken: sessionToken,
                                    claims: getAuthenticateClaims(error),
                                    error: error
                                } }))
                                .then(function (newSessionToken) {
                                if (newSessionToken.accessToken !== sessionToken.accessToken) {
                                    return getData({
                                        sessionToken: newSessionToken
                                    });
                                }
                                else {
                                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                                }
                            });
                        }
                        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                    });
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getToken) {
                return sessionManagementProvider
                    .getToken(apiVersion, url)
                    .then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    });
                });
            }
        }
        return getData({});
    };
    return DataRequestor;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataRequestor);
function isInvalidTokenError(error) {
    if (error instanceof _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"]) {
        var request = error.request;
        var authenticate = request && request.getResponseHeader('WWW-Authenticate');
        if (authenticate &&
            authenticate.slice(0, BEARER_AUTH_TYPE.length) === BEARER_AUTH_TYPE &&
            authenticate.indexOf('error="insufficient_claims"') > -1) {
            return true;
        }
    }
    return false;
}
function getAuthenticateClaims(error) {
    var authenticate = error.request && error.request.getResponseHeader('WWW-Authenticate');
    var claimsToken = "claims=\"";
    if (authenticate) {
        var indexOfClaims = authenticate.indexOf(claimsToken);
        if (indexOfClaims > -1) {
            var endOfClaims = authenticate.indexOf("\"", indexOfClaims + claimsToken.length);
            if (endOfClaims > -1) {
                return authenticate.slice(indexOfClaims + claimsToken.length, endOfClaims);
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=DataRequestor.js.map

/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



/***/ }),

/***/ "7YZ5":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony import */ var _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GroupedList/GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__["CollapseAllVisibility"]; });

/* harmony import */ var _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader */ "tApQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__["DetailsHeader"]; });

/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__["DetailsHeaderBase"]; });

/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__["SelectAllVisibility"]; });

/* harmony import */ var _DetailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsList */ "WEXx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _DetailsList__WEBPACK_IMPORTED_MODULE_5__["DetailsList"]; });

/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["buildColumns"]; });

/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["CheckboxVisibility"]; });

/* harmony import */ var _DetailsRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailsRow */ "wqXl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _DetailsRow__WEBPACK_IMPORTED_MODULE_8__["DetailsRow"]; });

/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__["DetailsRowBase"]; });

/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["getDetailsRowStyles"]; });

/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__["DetailsRowCheck"]; });

/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__["DetailsRowFields"]; });

/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__["DetailsColumnBase"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "892h":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/Base64Encoding.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: base64ToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToString", function() { return base64ToString; });
/**
 * Decodes a base-64 string. It is assumed that the original encoded byte array is UTF-8 or ASCII.
 */
function base64ToString(encoded) {
    return decodeURIComponent(escape(atob(encoded)));
}
//# sourceMappingURL=Base64Encoding.js.map

/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



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

/***/ "8VvQ":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/peoplePicker/SubstratePeoplePickerHelper.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: SUBSTRATE_SEARCH_URL, PeoplePickerSubstrate, SubstratePeoplePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRATE_SEARCH_URL", function() { return SUBSTRATE_SEARCH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerSubstrate", function() { return PeoplePickerSubstrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstratePeoplePickerHelper", function() { return SubstratePeoplePickerHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var STORE_KEY = 'PeoplePicker';
var DISABLE_SUBSTRATE_KEY = 'DisableSubstrateSearch';
var SUBSTRATE_SEARCH_URL = 'https://outlook.office.com/search';
var PeoplePickerSubstrate = { ODB: 1286 };
var SubstratePeoplePickerHelper = /** @class */ (function () {
    function SubstratePeoplePickerHelper(params, dependencies) {
        this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["DataRequestor"]({}, {});
        this._pageContext = dependencies.pageContext;
        this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        if (this._sharingContextInformation && this._sharingContextInformation.additionalTokens) {
            this._substrateToken = this._sharingContextInformation.additionalTokens.substrateToken;
        }
        this.initializeDataStore();
    }
    /**
     * Returns whether or not we are able to use 3S for people search. 3S calls can be disabled if the OAuth call
     * previously failed, if we are token authenticated (Acquire only supports cookie auth), or if the user isn't in the
     * A/B experiment to use 3S.
     */
    SubstratePeoplePickerHelper.prototype.canUseSubstrate = function () {
        if (this._substrateToken) {
            return true;
        }
        var canUseSubstrate = false;
        // We can't call 3S On-Prem
        if (this._pageContext && !this._pageContext.isSPO) {
            return canUseSubstrate;
        }
        // Disable 3S if we're authenticated with an access token. Currently, 3S calls are only supported with cookie auth.
        if (this._pageContext && !!this._pageContext.authToken) {
            return canUseSubstrate;
        }
        if (this._pageContext &&
            this._oAuthTokenProvider &&
            _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(PeoplePickerSubstrate)) {
            canUseSubstrate = true;
        }
        if (this._dataStore) {
            canUseSubstrate =
                canUseSubstrate &&
                    !this._dataStore.getValue(DISABLE_SUBSTRATE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
        return canUseSubstrate;
    };
    /**
     * Store flag to disable 3S calls in session storage so we don't keep making OAuth token calls that will error.
     * The calls are expensive and if the user is unable to call 3S we shouldn't keep trying. Since some errors are
     * recoverable outside the session, don't scope to something as long-lived as local storage.
     */
    SubstratePeoplePickerHelper.prototype.disableSubstrateCallsForPicker = function () {
        this.initializeDataStore();
        this._dataStore.setValue(DISABLE_SUBSTRATE_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
    };
    /**
     * Retrieves an access token for calling 3S.
     */
    SubstratePeoplePickerHelper.prototype.getSubstrateToken = function () {
        var _this = this;
        if (this._substrateToken) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this._substrateToken);
        }
        if (this._oAuthTokenProvider) {
            /**
             * OAuthTokenProvider already logs QOS events for its calls but we want to measure retrieving 3S tokens from within the people picker
             * separately. This allows us to track how often users are forced into the fallback logic scenario.
             */
            var qos_1 = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: 'PeoplePicker.GetSubstrateToken' });
            return this._oAuthTokenProvider.getToken(SUBSTRATE_SEARCH_URL).then(function (oAuthToken) {
                qos_1.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success
                });
                return oAuthToken;
            }, function (error) {
                if (_ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].isCanceled(error)) {
                    qos_1.end({
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].ExpectedFailure,
                        resultCode: 'Canceled'
                    });
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
                }
                else {
                    qos_1.end({
                        resultCode: 'PeoplePicker.GetSubstrateTokenError',
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                        extraData: {
                            serverErrorCode: error['_serverErrorCode'],
                            message: error.message
                        }
                    });
                    // If the Acquire call fails, disable future attempts to retrieve the 3S token for the current session.
                    _this.disableSubstrateCallsForPicker();
                }
                return null;
            });
        }
        return null;
    };
    SubstratePeoplePickerHelper.prototype.init = function (oAuthToken) {
        var scenario = 'documentshare';
        var initUrl = SUBSTRATE_SEARCH_URL + "/api/v1/init?scenario=" + scenario;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('20373606-dfd1-4220-9a96-50f93570a877', '07/03/2020', 'Removing litoken while calling Substrate.')) {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken
                },
                needsAuthorization: false
            });
        }
        else {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                },
                needsAuthorization: false
            });
        }
    };
    SubstratePeoplePickerHelper.prototype.initializeDataStore = function () {
        if (!this._dataStore) {
            this._dataStore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
    };
    return SubstratePeoplePickerHelper;
}());

//# sourceMappingURL=SubstratePeoplePickerHelper.js.map

/***/ }),

/***/ "9/iP":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.base.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAllBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAllBase", function() { return GroupShowAllBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "F3Wv");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupShowAllBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, _a = props.showAllLinkText, showAllLinkText = _a === void 0 ? 'Show All' : _a, styles = props.styles, theme = props.theme, onToggleSummarize = props.onToggleSummarize;
    var classNames = getClassNames(styles, { theme: theme });
    var memoizedOnClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (ev) {
        onToggleSummarize(group);
        ev.stopPropagation();
        ev.preventDefault();
    }, [onToggleSummarize, group]);
    if (group) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["GroupSpacer"], { count: groupLevel }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], { onClick: memoizedOnClick }, showAllLinkText)));
    }
    return null;
};
//# sourceMappingURL=GroupShowAll.base.js.map

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

/***/ "9ehK":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.types.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: SelectAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return SelectAllVisibility; });
/**
 * {@docCategory DetailsList}
 */
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));
//# sourceMappingURL=DetailsHeader.types.js.map

/***/ }),

/***/ "9jil":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell',
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                selectors: (_a = {},
                    _a["." + classNames.listCell] = {
                        minHeight: 38,
                    },
                    _a),
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            className,
        ],
        group: [
            classNames.group,
            {
                transition: "background-color " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInOutSine,
            },
        ],
        groupIsDropping: {
            backgroundColor: palette.neutralLight,
        },
    };
};
//# sourceMappingURL=GroupedList.styles.js.map

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

/***/ "9lkW":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return GroupedListBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].rowHeight, COMPACT_ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
var GroupedListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListBase, _super);
    function GroupedListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
            // override group header/footer props as needed
            var dividerProps = {
                onToggleSelectGroup: _this._onToggleSelectGroup,
                onToggleCollapse: _this._onToggleCollapse,
                onToggleSummarize: _this._onToggleSummarize,
            };
            var headerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.headerProps), dividerProps);
            var showAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.showAllProps), dividerProps);
            var footerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.footerProps), dividerProps);
            var groupNestingDepth = _this._getGroupNestingDepth();
            if (!groupProps.showEmptyGroups && group && group.count === 0) {
                return null;
            }
            var finalListProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (listProps || {})), { version: _this.state.version });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedListSection__WEBPACK_IMPORTED_MODULE_3__["GroupedListSection"], { key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: finalListProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
        };
        _this._getDefaultGroupItemLimit = function (group) {
            return group.count;
        };
        _this._getGroupItemLimit = function (group) {
            var groupProps = _this.props.groupProps;
            var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
            return getGroupItemLimit(group);
        };
        _this._getGroupHeight = function (group) {
            var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
            return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
        };
        _this._getPageHeight = function (itemIndex) {
            var groups = _this.state.groups;
            var _a = _this.props.getGroupHeight, getGroupHeight = _a === void 0 ? _this._getGroupHeight : _a;
            var pageGroup = groups && groups[itemIndex];
            if (pageGroup) {
                return getGroupHeight(pageGroup, itemIndex);
            }
            else {
                return 0;
            }
        };
        _this._onToggleCollapse = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
            if (group) {
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                group.isCollapsed = !group.isCollapsed;
                _this._updateIsSomeGroupExpanded();
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectGroup = function (group) {
            var _a = _this.props, selection = _a.selection, selectionMode = _a.selectionMode;
            if (group && selection && selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple) {
                selection.toggleRangeSelected(group.startIndex, group.count);
            }
        };
        _this._isInnerZoneKeystroke = function (ev) {
            return ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right);
        };
        _this._onToggleSummarize = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
            if (onToggleSummarize) {
                onToggleSummarize(group);
            }
            else {
                if (group) {
                    group.isShowingAll = !group.isShowingAll;
                }
                _this.forceUpdate();
            }
        };
        _this._getPageSpecification = function (itemIndex) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return {
                key: pageGroup && pageGroup.key,
            };
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        var _a = props.listProps, _b = (_a === void 0 ? {} : _a).version, version = _b === void 0 ? {} : _b;
        _this.state = {
            groups: props.groups,
            items: props.items,
            listProps: props.listProps,
            version: version,
        };
        return _this;
    }
    GroupedListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        var groups = nextProps.groups, selectionMode = nextProps.selectionMode, compact = nextProps.compact, items = nextProps.items, listProps = nextProps.listProps;
        var listVersion = listProps && listProps.version;
        var nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionMode: selectionMode,
            compact: compact,
            groups: groups,
            listProps: listProps });
        var shouldForceUpdates = false;
        var previousListVersion = previousState.listProps && previousState.listProps.version;
        if (listVersion !== previousListVersion ||
            items !== previousState.items ||
            groups !== previousState.groups ||
            selectionMode !== previousState.selectionMode ||
            compact !== previousState.compact) {
            // If there are any props not passed explicitly to `List` which have an impact on the behavior of `onRenderCell`,
            // these need to 'force-update' this component by revving the version. Otherwise, the List might render with stale
            // data.
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
        }
        return nextState;
    };
    GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (this._list.current) {
            this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        }
    };
    GroupedListBase.prototype.getStartItemIndexInView = function () {
        return this._list.current.getStartItemIndexInView() || 0;
    };
    GroupedListBase.prototype.componentDidMount = function () {
        var _a = this.props, groupProps = _a.groupProps, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        if (groupProps && groupProps.isAllGroupsCollapsed) {
            this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
        }
    };
    GroupedListBase.prototype.render = function () {
        var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, theme = _a.theme, _b = _a.role, role = _b === void 0 ? 'treegrid' : _b, styles = _a.styles, compact = _a.compact, _c = _a.focusZoneProps, focusZoneProps = _c === void 0 ? {} : _c, _d = _a.rootListProps, rootListProps = _d === void 0 ? {} : _d;
        var _e = this.state, groups = _e.groups, version = _e.version;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            compact: compact,
        });
        var _f = focusZoneProps.shouldEnterInnerZone, shouldEnterInnerZone = _f === void 0 ? this._isInnerZoneKeystroke : _f;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" }, focusZoneProps, { shouldEnterInnerZone: shouldEnterInnerZone, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.root, focusZoneProps.className) }), !groups ? (this._renderGroup(undefined, 0)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_4__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._list, role: role, items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: this._getPageHeight, getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, version: version }, rootListProps)))));
    };
    GroupedListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups.length > 0) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            this._setGroupsCollapsedState(groups, allCollapsed);
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
        for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            groups[groupIndex].isCollapsed = isCollapsed;
        }
    };
    GroupedListBase.prototype._returnOne = function () {
        return 1;
    };
    GroupedListBase.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(index));
    };
    GroupedListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedListBase.prototype._forceListUpdates = function (groups) {
        this.setState({
            version: {},
        });
    };
    GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups &&
            groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
    };
    GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedListBase.defaultProps = {
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple,
        isHeaderVisible: true,
        groupProps: {},
        compact: false,
    };
    return GroupedListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedList.base.js.map

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

/***/ "AfY0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataSource.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataRequestor */ "PayJ");
/* harmony import */ var _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetDataWithSyncClient */ "BPn7");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var NUCLEUS_PLUGIN_KILLSWITCH = '68FFDA86-24A1-4A87-A304-0B53C0058679';
// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) { return lib.getDataSyncClient(aadUserId, check); }; });
    }
    else {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(function (aadUserId) { return undefined; });
    }
})();
/* Use this as a base class for any generic data source */
/* For a data source that provides a list of items use the ItemDataSource */
var DataSource = /** @class */ (function () {
    function DataSource(params, dependencies) {
        var pageContext = (this._pageContext = dependencies.pageContext);
        var tokenProvider = dependencies.tokenProvider;
        var _a = dependencies.dataRequestorType, dataRequestorType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1(params) {
                return _super.call(this, params, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pageContext: pageContext, tokenProvider: tokenProvider }, (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')
                    ? {
                        dataSyncClient: _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(dataSyncClient),
                        getDataWithSyncClient: _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__["getDataWithSyncClient"]
                    }
                    : {}))) || this;
            }
            return class_1;
        }(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["default"])) : _a, dataSyncClient = dependencies.dataSyncClient;
        var _b = params.dataSourceName, dataSourceName = _b === void 0 ? 'DataSource' : _b;
        this.dataSyncClient = dataSyncClient;
        this.dataRequestor = new dataRequestorType({
            qosName: dataSourceName
        });
    }
    /**
     * @deprecated Override `dataSourceName` when passing `params` in the constructor.
     */
    DataSource.prototype.getDataSourceName = function () {
        return this.dataSourceName;
    };
    /**
     * @deprecated Pass `needsRequestDigest` to `this.dataRequestor.getData()` when making API calls.
     */
    DataSource.prototype.needsRequestDigest = function (url) {
        return true;
    };
    /**
     *
     *
     * @protected
     * @template T The type of the data returned by the parseResponse callback param.
     * @param {() => string} getUrl Lambda that returns the URL to which the datasource should make
     *                              the request.
     * @param {(responseText: string, serverData: ServerData) => T} parseResponse Function that takes in the response.
     *
     * @param {string} qosName Named used to Qos Logging.
     * @param {() => string} getAdditionalPostData Lambda that returns the additional POST string blob.
     * @param {string} method Method used to make the request.
     * @param {{ [key: string]: string }} additionalHeaders Additional headers to send as part of the request.
     * @param {string} contentType defaults to application/json;odata=verbose.
     * @param {number} maxRetries Maximum number of times to retry the request, defaults to 0.
     * @param {boolean} noRedirect Optional, defaults to false. If true and user hits 403, will redirect to auth.
     * @param {boolean} crossSiteCollectionCall
     * @param {(errorData: IErrorData) => string} Optional override for qos error handler
     * @returns {Promise<T>}
     *
     * @deprecated Use `this.dataRequestor.getData()` instead to make API calls, as it supports better configurability of optional parameters.
     */
    DataSource.prototype.getData = function (getUrl, parseResponse, qosName, getAdditionalPostData, method, additionalHeaders, contentType, // defaults to application/json;odata=verbose
    maxRetries, noRedirect, crossSiteCollectionCall, telemetryHandler, qosExtraData, authToken) {
        // This method is purely to facilitate a call to `this.dataRequestor.getData()` using the deprecated call style.
        // Do not amend this function except to work toward removing usage of it.
        var _this = this;
        if (method === void 0) { method = 'POST'; }
        var url = getUrl();
        var additionalPostData = getAdditionalPostData && getAdditionalPostData();
        var needsRequestDigest = this.needsRequestDigest(url);
        if (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(this._pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')) {
            return this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: needsRequestDigest,
                authToken: authToken
            });
        }
        var serviceRequest = function () {
            return _this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: _this.needsRequestDigest(url),
                authToken: authToken
            });
        };
        if (!this._pageContext.aadUserId) {
            return serviceRequest();
        }
        var localRequest = function (dataSyncClient) {
            // We're using data sync. Construct a local version of the request,
            // then hand both the service and local request to the data sync
            // layer for execution.
            var syncTelemetryHandler = Object(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
            var syncRequest = function (endpoint) {
                return _this.dataRequestor.getData({
                    url: endpoint.url,
                    authToken: endpoint.authToken,
                    parseResponse: parseResponse,
                    qosName: qosName,
                    additionalPostData: additionalPostData,
                    method: method,
                    additionalHeaders: additionalHeaders,
                    contentType: contentType,
                    maxRetries: maxRetries,
                    noRedirect: noRedirect,
                    crossSiteCollectionCall: crossSiteCollectionCall,
                    telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                    qosExtraData: qosExtraData,
                    needsRequestDigest: _this.needsRequestDigest(endpoint.url),
                    useExactAuthToken: true
                });
            };
            return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
        };
        if (this.dataSyncClient) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(localRequest(this.dataSyncClient));
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(getDataSyncClientImport).then(function (getter) {
                var client = getter(_this._pageContext.aadUserId);
                return client ? localRequest(client) : serviceRequest();
            });
        }
    };
    return DataSource;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataSource);
//# sourceMappingURL=DataSource.js.map

/***/ }),

/***/ "AiA5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withViewport.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withViewport.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withViewport;

/***/ }),

/***/ "AwyK":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ComboBox/ComboBox.classNames.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: getClassNames, getComboBoxOptionClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComboBoxOptionClassNames", function() { return getComboBoxOptionClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, className, isOpen, disabled, required, focused, allowFreeForm, hasErrorMessage) {
    return {
        container: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-container', className, styles.container),
        label: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.label, disabled && styles.labelDisabled),
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox', hasErrorMessage ? styles.rootError : isOpen && 'is-open', required && 'is-required', styles.root, !allowFreeForm && styles.rootDisallowFreeForm, hasErrorMessage && !focused ? styles.rootError : !disabled && focused && styles.rootFocused, !disabled && {
            selectors: {
                ':hover': hasErrorMessage ? styles.rootError : !isOpen && !focused && styles.rootHovered,
                ':active': hasErrorMessage ? styles.rootError : styles.rootPressed,
                ':focus': hasErrorMessage ? styles.rootError : styles.rootFocused,
            },
        }, disabled && ['is-disabled', styles.rootDisabled]),
        input: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-Input', styles.input, disabled && styles.inputDisabled),
        errorMessage: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.errorMessage),
        callout: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-callout', styles.callout),
        optionsContainerWrapper: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-optionsContainerWrapper', styles.optionsContainerWrapper),
        optionsContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-optionsContainer', styles.optionsContainer),
        header: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-header', styles.header),
        divider: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-divider', styles.divider),
        screenReaderText: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.screenReaderText),
    };
});
var getComboBoxOptionClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles) {
    return {
        optionText: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-optionText', styles.optionText),
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])('ms-ComboBox-option', styles.root, {
            selectors: {
                ':hover': styles.rootHovered,
                ':focus': styles.rootFocused,
                ':active': styles.rootPressed,
            },
        }),
        optionTextWrapper: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.optionTextWrapper),
    };
});
//# sourceMappingURL=ComboBox.classNames.js.map

/***/ }),

/***/ "BPn7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/GetDataWithSyncClient.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getDataWithSyncClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithSyncClient", function() { return getDataWithSyncClient; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyncTelemetryHandler */ "lxGK");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");




// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) {
            return lib.getDataSyncClient(aadUserId, check);
        }; });
    }
    else {
        return Promise.resolve(function (aadUserId) { return undefined; });
    }
})();
function getDataWithSyncClient(params) {
    var _a = params.options, url = _a.url, authToken = _a.authToken, telemetryHandler = _a.telemetryHandler, useExactAuthToken = _a.useExactAuthToken, dataSyncClientOverride = params.dataSyncClient, aadUserId = params.aadUserId, getData = params.getData;
    var serviceRequest = function () {
        return getData({
            url: url,
            telemetryHandler: telemetryHandler,
            authToken: authToken,
            useExactAuthToken: useExactAuthToken
        });
    };
    if (!aadUserId) {
        return serviceRequest();
    }
    var localRequest = function (dataSyncClient) {
        // We're using data sync. Construct a local version of the request,
        // then hand both the service and local request to the data sync
        // layer for execution.
        var syncTelemetryHandler = Object(_SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
        var syncRequest = function (endpoint) {
            return getData({
                url: endpoint.url,
                authToken: endpoint.authToken,
                telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                useExactAuthToken: true
            });
        };
        return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
    };
    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(dataSyncClientOverride)
        .then(function (dataSyncClient) {
        // If there is a specified override, use it. Otherwise fall back to requesting one for the given user
        // from page context, if provided.
        return (dataSyncClient ||
            getDataSyncClientImport.then(function (getter) {
                return getter(aadUserId);
            }));
    })
        .then(function (dataSyncClient) {
        return dataSyncClient ? localRequest(dataSyncClient) : serviceRequest();
    });
}
//# sourceMappingURL=GetDataWithSyncClient.js.map

/***/ }),

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/string/StringHelper.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "CE8r":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ComboBox/ComboBox.styles.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getOptionStyles, getCaretDownButtonStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionStyles", function() { return getOptionStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaretDownButtonStyles", function() { return getCaretDownButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
var _a, _b;



var ComboBoxHeight = 32;
var ComboBoxLineHeight = 30;
var ComboBoxCaretDownWidth = 32;
var ComboBoxOptionHeight = 36;
var getDisabledStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
    var _a;
    var semanticColors = theme.semanticColors;
    return {
        backgroundColor: semanticColors.disabledBackground,
        color: semanticColors.disabledText,
        cursor: 'default',
        selectors: (_a = {
                ':after': {
                    borderColor: semanticColors.disabledBackground,
                }
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                color: 'GrayText',
                selectors: {
                    ':after': {
                        borderColor: 'GrayText',
                    },
                },
            },
            _a),
    };
});
var listOptionHighContrastStyles = {
    selectors: (_a = {},
        _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
            backgroundColor: 'Highlight',
            borderColor: 'Highlight',
            color: 'HighlightText',
            MsHighContrastAdjust: 'none',
        },
        _a),
};
var inputHighContrastStyles = {
    selectors: (_b = {},
        _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
            color: 'WindowText',
            backgroundColor: 'Window',
            MsHighContrastAdjust: 'none',
        },
        _b),
};
var getOptionStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme, customStylesForAllOptions, customOptionStylesForCurrentOption, isPending, isHidden) {
    var _a;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var option = {
        textHoveredColor: semanticColors.menuItemTextHovered,
        textSelectedColor: palette.neutralDark,
        textDisabledColor: semanticColors.disabledText,
        backgroundHoveredColor: semanticColors.menuItemBackgroundHovered,
        backgroundPressedColor: semanticColors.menuItemBackgroundPressed,
    };
    var optionStyles = {
        root: [
            theme.fonts.medium,
            {
                backgroundColor: isPending ? option.backgroundHoveredColor : 'transparent',
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: isHidden ? 'none' : 'block',
                width: '100%',
                height: 'auto',
                minHeight: ComboBoxOptionHeight,
                lineHeight: '20px',
                padding: '0 8px',
                position: 'relative',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderRadius: 0,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'left',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        border: 'none',
                        borderColor: 'Background',
                    },
                    _a['&.ms-Checkbox'] = {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    _a['&.ms-Button--command:hover:active'] = {
                        backgroundColor: option.backgroundPressedColor,
                    },
                    _a['.ms-Checkbox-label'] = {
                        width: '100%',
                    },
                    _a),
            },
        ],
        rootHovered: {
            backgroundColor: option.backgroundHoveredColor,
            color: option.textHoveredColor,
        },
        rootFocused: {
            backgroundColor: option.backgroundHoveredColor,
        },
        rootChecked: [
            {
                backgroundColor: 'transparent',
                color: option.textSelectedColor,
                selectors: {
                    ':hover': [
                        {
                            backgroundColor: option.backgroundHoveredColor,
                        },
                        listOptionHighContrastStyles,
                    ],
                },
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, isFocusedOnly: false }),
            listOptionHighContrastStyles,
        ],
        rootDisabled: {
            color: option.textDisabledColor,
            cursor: 'default',
        },
        optionText: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            minWidth: '0px',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            display: 'inline-block',
        },
        optionTextWrapper: {
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
        },
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(optionStyles, customStylesForAllOptions, customOptionStylesForCurrentOption);
});
var getCaretDownButtonStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme, customStyles) {
    var _a, _b;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var caret = {
        buttonTextColor: semanticColors.bodySubtext,
        buttonTextHoveredCheckedColor: semanticColors.buttonTextChecked,
        buttonBackgroundHoveredColor: semanticColors.listItemBackgroundHovered,
        buttonBackgroundCheckedColor: semanticColors.listItemBackgroundChecked,
        buttonBackgroundCheckedHoveredColor: semanticColors.listItemBackgroundCheckedHovered,
    };
    var buttonHighContrastStyles = {
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none',
            },
            _a),
    };
    var styles = {
        root: {
            color: caret.buttonTextColor,
            fontSize: fonts.small.fontSize,
            position: 'absolute',
            top: 0,
            height: '100%',
            lineHeight: ComboBoxLineHeight,
            width: ComboBoxCaretDownWidth,
            textAlign: 'center',
            cursor: 'default',
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    backgroundColor: 'ButtonFace',
                    borderColor: 'ButtonText',
                    color: 'ButtonText',
                    MsHighContrastAdjust: 'none',
                },
                _b),
        },
        icon: {
            fontSize: fonts.small.fontSize,
        },
        rootHovered: [
            {
                backgroundColor: caret.buttonBackgroundHoveredColor,
                color: caret.buttonTextHoveredCheckedColor,
                cursor: 'pointer',
            },
            buttonHighContrastStyles,
        ],
        rootPressed: [
            {
                backgroundColor: caret.buttonBackgroundCheckedColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootChecked: [
            {
                backgroundColor: caret.buttonBackgroundCheckedColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootCheckedHovered: [
            {
                backgroundColor: caret.buttonBackgroundCheckedHoveredColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootDisabled: [
            getDisabledStyles(theme),
            {
                position: 'absolute',
            },
        ],
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(styles, customStyles);
});
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme, customStyles, comboBoxOptionWidth) {
    var _a, _b, _c, _d, _e, _f;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, effects = theme.effects;
    var root = {
        textColor: semanticColors.inputText,
        borderColor: semanticColors.inputBorder,
        borderHoveredColor: semanticColors.inputBorderHovered,
        borderPressedColor: semanticColors.inputFocusBorderAlt,
        borderFocusedColor: semanticColors.inputFocusBorderAlt,
        backgroundColor: semanticColors.inputBackground,
        erroredColor: semanticColors.errorText,
    };
    var option = {
        headerTextColor: semanticColors.menuHeader,
        dividerBorderColor: semanticColors.bodyDivider,
    };
    // placeholder style variables
    var placeholderHighContrastStyles = {
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                color: 'GrayText',
            },
            _a),
    };
    var placeholderStyles = [
        {
            color: semanticColors.inputPlaceholderText,
        },
        placeholderHighContrastStyles,
    ];
    var placeholderStylesHovered = [
        {
            color: semanticColors.inputTextHovered,
        },
        placeholderHighContrastStyles,
    ];
    var disabledPlaceholderStyles = [
        {
            color: semanticColors.disabledText,
        },
        placeholderHighContrastStyles,
    ];
    var ComboBoxRootHighContrastFocused = {
        color: 'HighlightText',
        backgroundColor: 'Window',
        MsHighContrastAdjust: 'none',
        selectors: {
            ':after': {
                borderColor: 'Highlight',
            },
        },
    };
    var focusBorderStyles = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getInputFocusStyle"])(root.borderPressedColor, effects.roundedCorner2, 'border', 0);
    var styles = {
        container: {},
        label: {},
        labelDisabled: {},
        root: [
            theme.fonts.medium,
            {
                boxShadow: 'none',
                marginLeft: '0',
                paddingRight: ComboBoxCaretDownWidth,
                paddingLeft: 9,
                color: root.textColor,
                position: 'relative',
                outline: '0',
                userSelect: 'none',
                backgroundColor: root.backgroundColor,
                cursor: 'text',
                display: 'block',
                height: ComboBoxHeight,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                boxSizing: 'border-box',
                selectors: {
                    '.ms-Label': {
                        display: 'inline-block',
                        marginBottom: '8px',
                    },
                    '&.is-open': {
                        selectors: (_b = {},
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = ComboBoxRootHighContrastFocused,
                            _b),
                    },
                    // setting border using pseudo-element here in order to
                    // prevent chevron button to overlap ComboBox border under certain resolutions
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
                        borderColor: root.borderColor,
                        borderRadius: effects.roundedCorner2,
                    },
                },
            },
        ],
        rootHovered: {
            selectors: (_c = {
                    ':after': {
                        borderColor: root.borderHoveredColor,
                    },
                    '.ms-ComboBox-Input': [
                        {
                            color: semanticColors.inputTextHovered,
                        },
                        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"])(placeholderStylesHovered),
                        inputHighContrastStyles,
                    ]
                },
                _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'HighlightText',
                    backgroundColor: 'Window',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        ':after': {
                            borderColor: 'Highlight',
                        },
                    },
                },
                _c),
        },
        rootPressed: [
            {
                position: 'relative',
                selectors: (_d = {},
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = ComboBoxRootHighContrastFocused,
                    _d),
            },
        ],
        rootFocused: [
            {
                selectors: (_e = {
                        '.ms-ComboBox-Input': [
                            {
                                color: semanticColors.inputTextHovered,
                            },
                            inputHighContrastStyles,
                        ]
                    },
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = ComboBoxRootHighContrastFocused,
                    _e),
            },
            focusBorderStyles,
        ],
        rootDisabled: getDisabledStyles(theme),
        rootError: {
            selectors: {
                ':after': {
                    borderColor: root.erroredColor,
                },
                ':hover:after': {
                    borderColor: semanticColors.inputBorderHovered,
                },
            },
        },
        rootDisallowFreeForm: {},
        input: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"])(placeholderStyles),
            {
                backgroundColor: root.backgroundColor,
                color: root.textColor,
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                borderStyle: 'none',
                outline: 'none',
                font: 'inherit',
                textOverflow: 'ellipsis',
                padding: '0',
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            inputHighContrastStyles,
        ],
        inputDisabled: [getDisabledStyles(theme), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"])(disabledPlaceholderStyles)],
        errorMessage: [
            theme.fonts.small,
            {
                color: root.erroredColor,
                marginTop: '5px',
            },
        ],
        callout: {
            boxShadow: effects.elevation8,
        },
        optionsContainerWrapper: {
            width: comboBoxOptionWidth,
        },
        optionsContainer: {
            display: 'block',
        },
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"],
        header: [
            fonts.medium,
            {
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                color: option.headerTextColor,
                backgroundColor: 'none',
                borderStyle: 'none',
                height: ComboBoxOptionHeight,
                lineHeight: ComboBoxOptionHeight,
                cursor: 'default',
                padding: '0 8px',
                userSelect: 'none',
                textAlign: 'left',
                selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_f = {}, _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'GrayText',
                }, _f), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            },
        ],
        divider: {
            height: 1,
            backgroundColor: option.dividerBorderColor,
        },
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(styles, customStyles);
});
//# sourceMappingURL=ComboBox.styles.js.map

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

/***/ "DsUK":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.base.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return DetailsRowBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");











var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var NO_COLUMNS = [];
var DetailsRowBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._cellMeasurer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onSelectionChanged = function () {
            var selectionState = getSelectionState(_this.props);
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(selectionState, _this.state.selectionState)) {
                _this.setState({
                    selectionState: selectionState,
                });
            }
        };
        /**
         * update isDropping state based on the input value, which is used to change style during drag and drop
         *
         * when change to true, that means drag enter. we will add default dropping class name
         * or the custom dropping class name (return result from onDragEnter) to the root elemet.
         *
         * when change to false, that means drag leave. we will remove the dropping class name from root element.
         *
         * @param newValue - New isDropping state value
         * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newValue, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, item = _a.item;
            if (!newValue) {
                if (dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(item, event);
                }
            }
            else if (dragDropEvents.onDragEnter) {
                _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
            if (isDropping !== newValue) {
                _this.setState({ isDropping: newValue });
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            selectionState: getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
        };
        _this._droppingClassNames = '';
        return _this;
    }
    DetailsRowBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionState: getSelectionState(nextProps) });
    };
    DetailsRowBase.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection, item = _a.item, onDidMount = _a.onDidMount;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SELECTION_CHANGE"], this._onSelectionChanged);
        }
        if (onDidMount && item) {
            // If the item appears later, we should wait for it before calling this method.
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined,
            });
        }
        if (item && onDidMount && !this._onDidMountCalled) {
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._events.dispose();
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            var newSelectionState = getSelectionState(nextProps);
            if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                return true;
            }
            return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _c = _a.onRenderCheck, onRenderCheck = _c === void 0 ? this._onRenderCheck : _c, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, onRenderItemColumn = _a.onRenderItemColumn, getCellValueKey = _a.getCellValueKey, selectionMode = _a.selectionMode, _d = _a.rowWidth, rowWidth = _d === void 0 ? 0 : _d, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        _e = _a.rowFieldsAs, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        RowFields = _e === void 0 ? _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__["DetailsRowFields"] : _e, selection = _a.selection, indentWidth = _a.indentWidth, enableUpdateAnimations = _a.enableUpdateAnimations, compact = _a.compact, theme = _a.theme, styles = _a.styles, cellsByColumn = _a.cellsByColumn, groupNestingDepth = _a.groupNestingDepth, _f = _a.useFastIcons, useFastIcons = _f === void 0 ? true : _f, cellStyleProps = _a.cellStyleProps;
        var _g = this.state, columnMeasureInfo = _g.columnMeasureInfo, isDropping = _g.isDropping;
        var _h = this.state.selectionState, _j = _h.isSelected, isSelected = _j === void 0 ? false : _j, _k = _h.isSelectionModal, isSelectionModal = _k === void 0 ? false : _k;
        var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
        var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
        var isContentUnselectable = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple;
        var showCheckbox = selectionMode !== _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
        var ariaSelected = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none ? undefined : isSelected;
        this._classNames = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._classNames), getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact,
            enableUpdateAnimations: enableUpdateAnimations,
            cellStyleProps: cellStyleProps,
        }));
        var rowClassNames = {
            isMultiline: this._classNames.isMultiline,
            isRowHeader: this._classNames.isRowHeader,
            cell: this._classNames.cell,
            cellAnimation: this._classNames.cellAnimation,
            cellPadded: this._classNames.cellPadded,
            cellUnpadded: this._classNames.cellUnpadded,
            fields: this._classNames.fields,
        };
        // Only re-assign rowClassNames when classNames have changed.
        // Otherwise, they will cause DetailsRowFields to unnecessarily
        // re-render, see https://github.com/microsoft/fluentui/pull/8799.
        // Refactor DetailsRowFields to generate own styles to remove need for this.
        if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this._rowClassNames || {}, rowClassNames)) {
            this._rowClassNames = rowClassNames;
        }
        var rowFields = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, cellsByColumn: cellsByColumn, columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0), onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey, enableUpdateAnimations: enableUpdateAnimations, cellStyleProps: cellStyleProps }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": true }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), (typeof isDraggable === 'boolean'
            ? {
                'data-is-draggable': isDraggable,
                draggable: isDraggable,
            }
            : {}), { direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].horizontal, elementRef: this._root, componentRef: this._focusZone, role: "row", "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, className: this._classNames.root, "data-selection-index": itemIndex, "data-selection-touch-invoke": true, "data-item-index": itemIndex, "aria-rowindex": itemIndex + 1, "aria-level": (groupNestingDepth && groupNestingDepth + 1) || undefined, "data-automationid": "DetailsRow", style: { minWidth: rowWidth }, "aria-selected": ariaSelected, allowFocusRoot: true }),
            showCheckbox && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell", "aria-colindex": 1, "data-selection-toggle": true, className: this._classNames.checkCell }, onRenderCheck({
                selected: isSelected,
                anySelected: isSelectionModal,
                'aria-label': checkButtonAriaLabel,
                canSelect: canSelect,
                compact: compact,
                className: this._classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always,
                onRenderDetailsCheckbox: onRenderDetailsCheckbox,
                useFastIcons: useFastIcons,
            }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - (this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_9__["CollapseAllVisibility"].hidden ? 1 : 0) }),
            item && rowFields,
            columnMeasureInfo && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.cellMeasurer, this._classNames.cell), ref: this._cellMeasurer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "checkbox", className: this._classNames.checkCover, "aria-checked": isSelected, "data-selection-toggle": true })));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone,
            },
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var _a;
        return !!((_a = this._focusZone.current) === null || _a === void 0 ? void 0 : _a.focus(forceIntoFirstElement));
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__["DetailsRowCheck"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
            onDragOver: dragDropEvents.onDragOver,
        };
        return options;
    };
    return DetailsRowBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getSelectionState(props) {
    var _a, _b, _c, _d;
    var itemIndex = props.itemIndex, selection = props.selection;
    return {
        isSelected: !!((_a = selection) === null || _a === void 0 ? void 0 : _a.isIndexSelected(itemIndex)),
        isSelectionModal: !!((_d = (_b = selection) === null || _b === void 0 ? void 0 : (_c = _b).isModal) === null || _d === void 0 ? void 0 : _d.call(_c)),
    };
}
//# sourceMappingURL=DetailsRow.base.js.map

/***/ }),

/***/ "E8BK":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedListSection.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return GroupedListSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../List */ "HP5x");








var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._subGroupRefs = {};
        _this._droppingClassName = '';
        _this._onRenderGroupHeader = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupHeader__WEBPACK_IMPORTED_MODULE_4__["GroupHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupShowAll = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupFooter = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupFooter__WEBPACK_IMPORTED_MODULE_6__["GroupFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._renderSubGroup = function (subGroup, subGroupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, groupProps = _a.groupProps, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter, onShouldVirtualize = _a.onShouldVirtualize, group = _a.group, compact = _a.compact;
            var nestingDepth = subGroup.level ? subGroup.level + 1 : groupNestingDepth;
            return !subGroup || subGroup.count > 0 || (groupProps && groupProps.showEmptyGroups) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GroupedListSection, { ref: function (ref) { return (_this._subGroupRefs['subGroup_' + subGroupIndex] = ref); }, key: _this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: nestingDepth, groupProps: groupProps, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter, onShouldVirtualize: onShouldVirtualize, groups: group ? group.children : [], compact: compact })) : null;
        };
        /**
         * collect all the data we need to enable drag/drop for a group
         */
        _this._getGroupDragDropOptions = function () {
            var _a = _this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
            var options = {
                eventMap: eventsToRegister,
                selectionIndex: -1,
                context: { data: group, index: groupIndex, isGroup: true },
                updateDropState: _this._updateDroppingState,
                canDrag: dragDropEvents.canDrag,
                canDrop: dragDropEvents.canDrop,
                onDrop: dragDropEvents.onDrop,
                onDragStart: dragDropEvents.onDragStart,
                onDragEnter: dragDropEvents.onDragEnter,
                onDragLeave: dragDropEvents.onDragLeave,
                onDragEnd: dragDropEvents.onDragEnd,
                onDragOver: dragDropEvents.onDragOver,
            };
            return options;
        };
        /**
         * update groupIsDropping state based on the input value, which is used to change style during drag and drop
         *
         * @param newValue - new isDropping state value
         * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newIsDropping, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, group = _a.group;
            if (isDropping !== newIsDropping) {
                if (isDropping) {
                    if (dragDropEvents && dragDropEvents.onDragLeave) {
                        dragDropEvents.onDragLeave(group, event);
                    }
                }
                else {
                    if (dragDropEvents && dragDropEvents.onDragEnter) {
                        _this._droppingClassName = dragDropEvents.onDragEnter(group, event);
                    }
                }
                _this.setState({ isDropping: newIsDropping });
            }
        };
        var selection = props.selection, group = props.group;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('GroupedListSection');
        _this.state = {
            isDropping: false,
            isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false,
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SELECTION_CHANGE"], this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        this._events.dispose();
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d, onShouldVirtualize = _a.onShouldVirtualize, groupedListClassNames = _a.groupedListClassNames, groups = _a.groups, compact = _a.compact, _e = _a.listProps, listProps = _e === void 0 ? {} : _e;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group &&
            !group.children &&
            !group.isCollapsed &&
            !group.isShowingAll &&
            (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var version = listProps.version;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            selected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode,
            groups: groups,
            compact: compact,
        };
        var ariaControlsProps = {
            groupedListId: this._id,
            ariaSetSize: groups ? groups.length : undefined,
            ariaPosInSet: groupIndex !== undefined ? groupIndex + 1 : undefined,
        };
        var groupHeaderProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headerProps), dividerProps), ariaControlsProps);
        var groupShowAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, showAllProps), dividerProps);
        var groupFooterProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps), dividerProps);
        var isDraggable = !!this.props.dragDropHelper &&
            this._getGroupDragDropOptions().canDrag(group) &&
            !!this.props.dragDropEvents.canDragGroups;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._root }, (isDraggable && { draggable: true }), { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()), role: "presentation" }),
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ? null : hasNestedGroups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], { role: "presentation", ref: this._list, items: group ? group.children : [], onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne, onShouldVirtualize: onShouldVirtualize, version: version, id: this._id })) : (this._onRenderGroup(renderCount)),
            group && group.isCollapsed
                ? null
                : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this._list.current) {
            this._list.current.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this._list.current.pageRefs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this._subGroupRefs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        if (selection && group) {
            var isSelected = selection.isRangeSelected(group.startIndex, group.count);
            if (isSelected !== this.state.isSelected) {
                this.setState({ isSelected: isSelected });
            }
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth, onShouldVirtualize = _a.onShouldVirtualize, groupProps = _a.groupProps;
        var count = group && !group.isShowingAll ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ role: groupProps && groupProps.role ? groupProps.role : 'presentation', items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth), ref: this._list, renderCount: Math.min(count, renderCount), startIndex: startIndex, onShouldVirtualize: onShouldVirtualize, id: this._id }, listProps)));
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var _a = this.props, group = _a.group, groupedListClassNames = _a.groupedListClassNames;
        isDropping = !!(group && isDropping);
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(isDropping && this._droppingClassName, isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
    };
    return GroupedListSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedListSection.js.map

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



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

/***/ "F3Wv":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Link.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Link.js


/***/ }),

/***/ "FdyI":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/DataSyncFlights.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DataSyncEntityType, NucleusPreviewEnabled, EnableNucleusListConflictsUX, isDataSyncEnabled, isSyncConflictsUxEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncEntityType", function() { return DataSyncEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusPreviewEnabled", function() { return NucleusPreviewEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableNucleusListConflictsUX", function() { return EnableNucleusListConflictsUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSyncEnabled", function() { return isDataSyncEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyncConflictsUxEnabled", function() { return isSyncConflictsUxEnabled; });
var DataSyncEntityType;
(function (DataSyncEntityType) {
    DataSyncEntityType["SharePointList"] = "SharePointList";
})(DataSyncEntityType || (DataSyncEntityType = {}));
var NucleusPreviewEnabled = {
    ODB: 1620
};
var EnableNucleusListConflictsUX = {
    ODB: 60063
};
/**
 * Checks whether data sync for the given entity type is enabled.
 * @param featureCheck A callback which allows async loaded data sync to
 * check feature overrides.
 */
function isDataSyncEnabled(featureCheck, entityType) {
    return (featureCheck(NucleusPreviewEnabled) &&
        // tslint:disable-next-line:no-string-literal
        ((window.localStorage && window.localStorage['NucleusPreviewEnabled'] === 'true') ||
            /[?&]enableNucleusPreview=true/.test(location.search)));
}
function isSyncConflictsUxEnabled(featureCheck) {
    return (isDataSyncEnabled(featureCheck, DataSyncEntityType.SharePointList) &&
        featureCheck(EnableNucleusListConflictsUX));
}
//# sourceMappingURL=DataSyncFlights.js.map

/***/ }),

/***/ "Fsp9":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/IPresenceType.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: PresenceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceType", function() { return PresenceType; });
// OneDrive:IgnoreCodeCoverage
var PresenceType;
(function (PresenceType) {
    PresenceType[PresenceType["Unknown"] = 0] = "Unknown";
    PresenceType[PresenceType["Online"] = 1] = "Online";
    PresenceType[PresenceType["Busy"] = 2] = "Busy";
    PresenceType[PresenceType["DoNotDisturb"] = 3] = "DoNotDisturb";
    PresenceType[PresenceType["BeRightBack"] = 4] = "BeRightBack";
    PresenceType[PresenceType["Away"] = 5] = "Away";
    PresenceType[PresenceType["Offline"] = 6] = "Offline";
    PresenceType[PresenceType["Hidden"] = 7] = "Hidden";
})(PresenceType || (PresenceType = {}));
//# sourceMappingURL=IPresenceType.js.map

/***/ }),

/***/ "G9th":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return GroupHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupHeader.styles */ "HKbE");
/* harmony import */ var _GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupHeader.base */ "pf3H");



var GroupHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__["GroupHeaderBase"], _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupHeader',
});
//# sourceMappingURL=GroupHeader.js.map

/***/ }),

/***/ "GDPH":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return GroupedList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.styles */ "9jil");
/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");



var GroupedList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupedList_base__WEBPACK_IMPORTED_MODULE_2__["GroupedListBase"], _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupedList',
});
//# sourceMappingURL=GroupedList.js.map

/***/ }),

/***/ "GbJQ":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/EmailAddressParser.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["EmailAddressParser"]; });

// Loading @ms/odsp-utilities/./lib/string/EmailAddressParser.js



/***/ }),

/***/ "GlwB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/ISpPageContext.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaState, SearchBoxInNavBarType, TeamsChannelType, SearchScopeType, SPWebPropertyFlags2, DEFAULT_LOGO_URL, getServerUrl, getSafeWebServerRelativeUrl, isGroupWebContext, isRootWebContext, isTeamsRootWebContext, isModernTemplate, isHomePlusHubWithExtendedHeader, isHomePlusHub, isHomeSite, isAnonymousOrGuest, shouldLoadAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaState", function() { return SiteResourceQuotaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInNavBarType", function() { return SearchBoxInNavBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelType", function() { return TeamsChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeType", function() { return SearchScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPropertyFlags2", function() { return SPWebPropertyFlags2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOGO_URL", function() { return DEFAULT_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerUrl", function() { return getServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSafeWebServerRelativeUrl", function() { return getSafeWebServerRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupWebContext", function() { return isGroupWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRootWebContext", function() { return isRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamsRootWebContext", function() { return isTeamsRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernTemplate", function() { return isModernTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHubWithExtendedHeader", function() { return isHomePlusHubWithExtendedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHub", function() { return isHomePlusHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomeSite", function() { return isHomeSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousOrGuest", function() { return isAnonymousOrGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAppBar", function() { return shouldLoadAppBar; });
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chrome/ChromeOptions */ "Vb17");

/**
 *   A value indicating the state of the reqource quota for a site.
 */
var SiteResourceQuotaState;
(function (SiteResourceQuotaState) {
    /** No quota issues */
    SiteResourceQuotaState[SiteResourceQuotaState["NoWarning"] = 0] = "NoWarning";
    /** Close to reaching disk quota warning */
    SiteResourceQuotaState[SiteResourceQuotaState["Warning"] = 1] = "Warning";
    /** Over quota */
    SiteResourceQuotaState[SiteResourceQuotaState["OverQuota"] = 2] = "OverQuota";
})(SiteResourceQuotaState || (SiteResourceQuotaState = {}));
/**
 * Search box in nav bar
 */
var SearchBoxInNavBarType;
(function (SearchBoxInNavBarType) {
    /** Default behavior will be AllPages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Default"] = 0] = "Default";
    /** Display search box in nav bar for all pages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["AllPages"] = 1] = "AllPages";
    /** Display search box in nav bar for modern pages only */
    SearchBoxInNavBarType[SearchBoxInNavBarType["ModernOnly"] = 2] = "ModernOnly";
    /** Do not display search box in nav bar */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Hidden"] = 3] = "Hidden";
})(SearchBoxInNavBarType || (SearchBoxInNavBarType = {}));
/** The possible types of a Teams Channel. */
var TeamsChannelType;
(function (TeamsChannelType) {
    /** This is not a site backing a teams channel */
    TeamsChannelType[TeamsChannelType["None"] = 0] = "None";
    /** Site is backing a Private Channel */
    TeamsChannelType[TeamsChannelType["PrivateChannel"] = 1] = "PrivateChannel";
    /** Site is backing a Shared Channel */
    TeamsChannelType[TeamsChannelType["SharedChannel"] = 2] = "SharedChannel";
    /** Site is backing a Standard Channel */
    TeamsChannelType[TeamsChannelType["StandardChannel"] = 3] = "StandardChannel";
})(TeamsChannelType || (TeamsChannelType = {}));
/**
 * Search box search scope
 * When the value is Default, it follows the existing search scope rule.
 * For example, hub site has hub scope, non-hub site has site scope.
 */
var SearchScopeType;
(function (SearchScopeType) {
    SearchScopeType[SearchScopeType["Default"] = 0] = "Default";
    SearchScopeType[SearchScopeType["Tenant"] = 1] = "Tenant";
    SearchScopeType[SearchScopeType["Hub"] = 2] = "Hub";
    SearchScopeType[SearchScopeType["Site"] = 3] = "Site";
})(SearchScopeType || (SearchScopeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
    /** Indicates which emphasis is assigned to the footer when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis0"] = 256] = "FooterEmphasis0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis1"] = 512] = "FooterEmphasis1";
    /** Indicates which footer layout type is selected when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout0"] = 1024] = "FooterLayout0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout1"] = 2048] = "FooterLayout1";
    SPWebPropertyFlags2[SPWebPropertyFlags2["HideTitleInHeader"] = 33554432] = "HideTitleInHeader";
})(SPWebPropertyFlags2 || (SPWebPropertyFlags2 = {}));
/** Default site logo URL */
var DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current web is the root web.
 * Otherwise it returns false.
 */
function isRootWebContext(pageContext) {
    'use strict';
    return pageContext && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current Web is the Root Web of a Teams-connected SPSite.
 * Otherwise it returns false.
 */
function isTeamsRootWebContext(pageContext) {
    'use strict';
    return (pageContext &&
        isRootWebContext(pageContext) &&
        pageContext.groupId &&
        pageContext.isTeamsConnectedSite &&
        !pageContext.isTeamsChannelSite);
}
/**
 * Returns true if the current web templates is one of the modern templates:
 * STS#3, GROUP#0, SITEPAGEPUBLISHING#0, TEAMSCHANNEL#0/1.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = [
        'STS#3',
        'GROUP#0',
        'SITEPAGEPUBLISHING#0',
        'TEAMSCHANNEL#0',
        'TEAMSCHANNEL#1'
    ];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 *     3. with extended header layout
 * @param spPageContext page context instance
 */
function isHomePlusHubWithExtendedHeader(spPageContext) {
    return !!(spPageContext.headerLayout === _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"].extended && isHomePlusHub(spPageContext));
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 */
function isHomePlusHub(spPageContext) {
    return !!(isHomeSite(spPageContext) && spPageContext.isHubSite);
}
/**
 * Helper function to check if current site is configured as a home site
 * @param spPageContext page context instance
 */
function isHomeSite(spPageContext) {
    return !!(spPageContext.companyPortalReference &&
        spPageContext.companyPortalReference.SiteId &&
        spPageContext.siteId &&
        spPageContext.siteId.indexOf(spPageContext.companyPortalReference.SiteId) >= 0);
}
/**
 * Helper function to check if the current user is anonymous or a guest of any kind.
 */
function isAnonymousOrGuest(spPageContext) {
    return !!(spPageContext.isAnonymousGuestUser ||
        spPageContext.isExternalGuestUser ||
        spPageContext.isEmailAuthenticationGuestUser ||
        spPageContext.isNativeFederatedUser);
}
/**
 * Helper function to check if the app bar should load or not in the current context.
 */
function shouldLoadAppBar(spPageContext) {
    return (!isAnonymousOrGuest(spPageContext) && spPageContext.appBarParams && !spPageContext.appBarParams.isDisabled);
}
//# sourceMappingURL=ISpPageContext.js.map

/***/ }),

/***/ "HKbE":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");




// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    root: 'ms-GroupHeader',
    compact: 'ms-GroupHeader--compact',
    check: 'ms-GroupHeader-check',
    dropIcon: 'ms-GroupHeader-dropIcon',
    expand: 'ms-GroupHeader-expand',
    isCollapsed: 'is-collapsed',
    title: 'ms-GroupHeader-title',
    isSelected: 'is-selected',
    iconTag: 'ms-Icon--Tag',
    group: 'ms-GroupedList-group',
    isDropping: 'is-dropping',
};
var beziers = {
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
};
var DEFAULT_GROUP_HEADER_HEIGHT = 48;
var COMPACT_GROUP_HEADER_HEIGHT = 40;
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
    // padding from the source to align GroupHeader title with DetailsRow's first cell.
    var cellLeftPadding = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"].cellLeftPadding;
    var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var checkExpandResetStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            cursor: 'default',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
        },
    ];
    return {
        root: [
            classNames.root,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.medium,
            {
                // keep the border for height but color it so it's invisible.
                borderBottom: "1px solid " + semanticColors.listBackground,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {
                        ':hover': {
                            background: semanticColors.listItemBackgroundHovered,
                            color: semanticColors.actionLinkHovered,
                        }
                    },
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
                        selectors: (_b = {},
                            _b["& > ." + classNames.root + " ." + classNames.dropIcon] = {
                                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutCirc + " " +
                                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1 + " " + beziers.easeOutSine),
                                transitionDelay: _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue3,
                                opacity: 1,
                                transform: "rotate(0.2deg) scale(1);",
                            },
                            _b["." + classNames.check] = {
                                opacity: 0,
                            },
                            _b),
                    },
                    _a),
            },
            selected && [
                classNames.isSelected,
                {
                    background: semanticColors.listItemBackgroundChecked,
                    selectors: (_c = {
                            ':hover': {
                                background: semanticColors.listItemBackgroundCheckedHovered,
                            }
                        },
                        _c["" + classNames.check] = {
                            opacity: 1,
                        },
                        _c),
                },
            ],
            compact && [classNames.compact, { border: 'none' }],
            className,
        ],
        groupHeaderContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                height: finalRowHeight,
            },
        ],
        headerCount: [
            {
                padding: '0px 4px',
            },
        ],
        check: [
            classNames.check,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                opacity: 0,
                width: _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__["CHECK_CELL_WIDTH"],
                height: finalRowHeight,
                selectors: (_d = {},
                    _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _d),
            },
        ],
        expand: [
            classNames.expand,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                width: _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__["SPACER_WIDTH"],
                height: finalRowHeight,
                color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight,
                    },
                    ':active': {
                        backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt,
                    },
                },
            },
        ],
        expandIsCollapsed: [
            isCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear',
                },
        ],
        title: [
            classNames.title,
            {
                paddingLeft: cellLeftPadding,
                fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
                fontWeight: isCollapsed ? _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular : _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
                cursor: 'pointer',
                outline: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        ],
        dropIcon: [
            classNames.dropIcon,
            {
                position: 'absolute',
                left: -26,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].large,
                color: palette.neutralSecondary,
                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInBack + ", " +
                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutSine),
                opacity: 0,
                transform: 'rotate(0.2deg) scale(0.65)',
                transformOrigin: '10px 10px',
                selectors: (_e = {},
                    _e[":global(." + classNames.iconTag + ")"] = {
                        position: 'absolute',
                    },
                    _e),
            },
        ],
    };
};
//# sourceMappingURL=GroupHeader.styles.js.map

/***/ }),

/***/ "HP5x":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/List.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/List.js


/***/ }),

/***/ "I5DX":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/Uri.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"]; });

// Loading @ms/odsp-utilities/./lib/uri/Uri.js



/***/ }),

/***/ "I5L8":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-groupFooter',
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                position: 'relative',
                padding: '5px 38px',
            },
            className,
        ],
    };
};
//# sourceMappingURL=GroupFooter.styles.js.map

/***/ }),

/***/ "ISIA":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Check.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Check.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Check;

/***/ }),

/***/ "JBVq":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-DetailsList',
    compact: 'ms-DetailsList--Compact',
    contentWrapper: 'ms-DetailsList-contentWrapper',
    headerWrapper: 'ms-DetailsList-headerWrapper',
    isFixed: 'is-fixed',
    isHorizontalConstrained: 'is-horizontalConstrained',
    listCell: 'ms-List-cell',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                color: semanticColors.listText,
                selectors: (_a = {},
                    _a["& ." + classNames.listCell] = {
                        minHeight: 38,
                        wordBreak: 'break-word',
                    },
                    _a),
            },
            isFixed && classNames.isFixed,
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            isHorizontalConstrained && [
                classNames.isHorizontalConstrained,
                {
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch',
                },
            ],
            className,
        ],
        focusZone: [
            {
                display: 'inline-block',
                minWidth: '100%',
                minHeight: 1,
            },
        ],
        headerWrapper: classNames.headerWrapper,
        contentWrapper: classNames.contentWrapper,
    };
};
//# sourceMappingURL=DetailsList.styles.js.map

/***/ }),

/***/ "Joik":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Api.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Api"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Api.event.js



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

/***/ "K2Cj":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.styles.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupShowAll',
    link: 'ms-Link',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme;
    var fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                padding: '10px 84px',
                cursor: 'pointer',
                selectors: (_a = {},
                    _a["." + classNames.link] = {
                        fontSize: fonts.small.fontSize,
                    },
                    _a),
            },
        ],
    };
};
//# sourceMappingURL=GroupShowAll.styles.js.map

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

/***/ "MnMY":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: CollapseAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return CollapseAllVisibility; });
/**
 * {@docCategory GroupedList}
 */
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));
//# sourceMappingURL=GroupedList.types.js.map

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

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataRequestor"]; });

// Loading @ms/odsp-datasources/./lib/dataSources/base/DataRequestor.js



/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


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

/***/ "R7/2":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooterBase", function() { return GroupFooterBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupFooterBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, footerText = props.footerText, indentWidth = props.indentWidth, styles = props.styles, theme = props.theme;
    var classNames = getClassNames(styles, { theme: theme });
    if (group && footerText) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_2__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
            footerText));
    }
    return null;
};
//# sourceMappingURL=GroupFooter.base.js.map

/***/ }),

/***/ "TRok":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return DetailsColumnBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");






var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])();
var TRANSITION_DURATION_DRAG = 200; // ms
var TRANSITION_DURATION_DROP = 1500; // ms
var CLASSNAME_ADD_INTERVAL = 20; // ms
/**
 * Component for rendering columns in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsColumnBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsColumnBase, _super);
    function DetailsColumnBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        _this._onColumnClick = function (ev) {
            var _a = _this.props, onColumnClick = _a.onColumnClick, column = _a.column;
            if (column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled) {
                return;
            }
            if (column.onColumnClick) {
                column.onColumnClick(ev, column);
            }
            if (onColumnClick) {
                onColumnClick(ev, column);
            }
        };
        _this._onDragStart = function (item, itemIndex, selectedItems, event) {
            var classNames = _this._classNames;
            if (itemIndex) {
                _this._updateHeaderDragInfo(itemIndex);
                _this._root.current.classList.add(classNames.borderWhileDragging);
                _this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderWhileDragging);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
        };
        _this._onDragEnd = function (item, event) {
            var classNames = _this._classNames;
            if (event) {
                _this._updateHeaderDragInfo(-1, event);
            }
            _this._root.current.classList.remove(classNames.borderWhileDragging);
            _this._root.current.classList.remove(classNames.noBorderWhileDragging);
        };
        _this._updateHeaderDragInfo = function (itemIndex, event) {
            /* eslint-disable deprecation/deprecation */
            if (_this.props.setDraggedItemIndex) {
                _this.props.setDraggedItemIndex(itemIndex);
            }
            /* eslint-enable deprecation/deprecation */
            if (_this.props.updateDragInfo) {
                _this.props.updateDragInfo({ itemIndex: itemIndex }, event);
            }
        };
        _this._onColumnContextMenu = function (ev) {
            var _a = _this.props, onColumnContextMenu = _a.onColumnContextMenu, column = _a.column;
            if (column.onColumnContextMenu) {
                column.onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
            if (onColumnContextMenu) {
                onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var isDraggable = _this.props.isDraggable;
            // Ignore anything except the primary button.
            if (isDraggable && ev.button === MOUSEDOWN_PRIMARY_BUTTON) {
                ev.stopPropagation();
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](_this);
        return _this;
    }
    DetailsColumnBase.prototype.render = function () {
        var _a = this.props, column = _a.column, columnIndex = _a.columnIndex, parentId = _a.parentId, isDraggable = _a.isDraggable, styles = _a.styles, theme = _a.theme, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CELL_STYLE_PROPS"] : _b, _c = _a.useFastIcons, useFastIcons = _c === void 0 ? true : _c;
        var _d = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d;
        this._classNames = getClassNames(styles, {
            theme: theme,
            headerClassName: column.headerClassName,
            iconClassName: column.iconClassName,
            isActionable: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled,
            isEmpty: !column.name,
            isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
            isPadded: column.isPadded,
            isIconOnly: column.isIconOnly,
            cellStyleProps: cellStyleProps,
            transitionDurationDrag: TRANSITION_DURATION_DRAG,
            transitionDurationDrop: TRANSITION_DURATION_DROP,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_2__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key, ref: this._root, role: 'columnheader', "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "aria-colindex": columnIndex, className: classNames.root, "data-is-draggable": isDraggable, draggable: isDraggable, style: {
                    width: column.calculatedWidth +
                        cellStyleProps.cellLeftPadding +
                        cellStyleProps.cellRightPadding +
                        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                }, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key },
                isDraggable && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: "GripperBarVertical", className: classNames.gripperBarVerticalStyle })),
                onRenderColumnHeaderTooltip({
                    hostClassName: classNames.cellTooltip,
                    id: parentId + "-" + column.key + "-tooltip",
                    setAriaDescribedBy: false,
                    column: column,
                    content: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled ? column.ariaLabel : '',
                    children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key, "aria-label": column.isIconOnly ? column.name : undefined, "aria-labelledby": column.isIconOnly ? undefined : parentId + "-" + column.key + "-name", className: classNames.cellTitle, "data-is-focusable": column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled, role: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled &&
                            (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined)
                            ? 'button'
                            : undefined, "aria-describedby": !this.props.onRenderColumnHeaderTooltip && this._hasAccessibleLabel()
                            ? parentId + "-" + column.key + "-tooltip"
                            : undefined, onContextMenu: this._onColumnContextMenu, onClick: this._onColumnClick, "aria-haspopup": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown, "aria-expanded": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown ? !!column.isMenuOpen : undefined },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key + "-name", className: classNames.cellName },
                            (column.iconName || column.iconClassName) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.iconClassName, iconName: column.iconName })),
                            column.isIconOnly ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.accessibleLabel }, column.name)) : (column.name)),
                        column.isFiltered && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "Filter" }),
                        column.isSorted && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.sortIcon, iconName: column.isSortedDescending ? 'SortDown' : 'SortUp' })),
                        column.isGrouped && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "GroupedDescending" }),
                        column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown && !column.isIconOnly && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { "aria-hidden": true, className: classNames.filterChevron, iconName: "ChevronDown" })))),
                }, this._onRenderColumnHeaderTooltip)),
            !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleLabel() : null));
    };
    DetailsColumnBase.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        var classNames = this._classNames;
        if (this.props.isDropped) {
            if (this._root.current) {
                this._root.current.classList.add(classNames.borderAfterDropping);
                this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderAfterDropping);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.remove(classNames.borderAfterDropping);
                    _this._root.current.classList.remove(classNames.noBorderAfterDropping);
                }
            }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._async.dispose();
        this._events.dispose();
    };
    DetailsColumnBase.prototype.componentDidUpdate = function () {
        if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        if (this._dragDropSubscription && !this.props.isDraggable) {
            this._dragDropSubscription.dispose();
            this._events.off(this._root.current, 'mousedown');
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
        var _this = this;
        var columnIndex = this.props.columnIndex;
        var options = {
            selectionIndex: columnIndex,
            context: { data: columnIndex, index: columnIndex },
            canDrag: function () { return _this.props.isDraggable; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd,
        };
        return options;
    };
    DetailsColumnBase.prototype._hasAccessibleLabel = function () {
        var column = this.props.column;
        return !!(column.ariaLabel ||
            column.filterAriaLabel ||
            column.sortAscendingAriaLabel ||
            column.sortDescendingAriaLabel ||
            column.groupAriaLabel);
    };
    DetailsColumnBase.prototype._renderAccessibleLabel = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId;
        var classNames = this._classNames;
        return this._hasAccessibleLabel() && !this.props.onRenderColumnHeaderTooltip ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: column.key + "_label", id: parentId + "-" + column.key + "-tooltip", className: classNames.accessibleLabel },
            column.ariaLabel,
            (column.isFiltered && column.filterAriaLabel) || null,
            (column.isSorted &&
                (column.isSortedDescending ? column.sortDescendingAriaLabel : column.sortAscendingAriaLabel)) ||
                null,
            (column.isGrouped && column.groupAriaLabel) || null)) : null;
    };
    DetailsColumnBase.prototype._addDragDropHandling = function () {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
        // We need to use native on this to prevent MarqueeSelection from handling the event before us.
        this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
    };
    return DetailsColumnBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DetailsColumn.base.js.map

/***/ }),

/***/ "TUa0":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/groupedList/GroupedListUtility.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GetGroupCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGroupCount", function() { return GetGroupCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */
var GetGroupCount = function (groups) {
    var total = 0;
    if (groups) {
        var remainingGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(groups);
        var currentGroup = void 0;
        while (remainingGroups && remainingGroups.length > 0) {
            ++total;
            currentGroup = remainingGroups.pop();
            if (currentGroup && currentGroup.children) {
                remainingGroups.push.apply(remainingGroups, currentGroup.children);
            }
        }
    }
    return total;
};
//# sourceMappingURL=GroupedListUtility.js.map

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

/***/ "UeHE":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/peoplePicker/GraphPeoplePickerHelper.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerGraph, GraphPeoplePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerGraph", function() { return PeoplePickerGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPeoplePickerHelper", function() { return GraphPeoplePickerHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");





var PeoplePickerGraph = { ODB: 387 };
var STORE_KEY = 'PeoplePicker';
var DISABLE_GRAPH_KEY = 'DisableGraph';
var GraphPeoplePickerHelper = /** @class */ (function () {
    function GraphPeoplePickerHelper(params, dependencies) {
        this._pageContext = dependencies.pageContext;
        this._sharingContextInformation = dependencies.sharingContextInformation;
        this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        if (this._sharingContextInformation && this._sharingContextInformation.additionalTokens) {
            this._graphToken = this._sharingContextInformation.additionalTokens.graphToken;
        }
        this.initializeDataStore();
    }
    /**
     * Returns whether or not we are able to use Graph for people search. Graph calls can be disabled if the OAuth call
     * previously failed, if we are token authenticated (Acquire only supports cookie auth), or if the user isn't in the
     * A/B experiment to use Graph.
     */
    GraphPeoplePickerHelper.prototype.canUseGraph = function () {
        if (this._graphToken) {
            return true;
        }
        // We can't call Graph On-Prem
        if (this._pageContext && !this._pageContext.isSPO) {
            return false;
        }
        // Disable Graph if we're authenticated with an access token. Currently, Graph calls are only supported with cookie auth.
        if (this._pageContext && !!this._pageContext.authToken) {
            return false;
        }
        var canUseGraph = this._pageContext && this._oAuthTokenProvider && _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(PeoplePickerGraph);
        if (this._dataStore) {
            canUseGraph =
                canUseGraph && !this._dataStore.getValue(DISABLE_GRAPH_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
        return canUseGraph;
    };
    /**
     * Store flag to disable Graph calls in session storage so we don't keep making OAuth token calls that will error.
     * The calls are expensive and if the user is unable to call Graph we shouldn't keep trying. Since some errors are
     * recoverable outside the session, don't scope to something as long-lived as local storage.
     */
    GraphPeoplePickerHelper.prototype.disableGraphCallsForPicker = function () {
        this.initializeDataStore();
        this._dataStore.setValue(DISABLE_GRAPH_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
    };
    /**
     * Retrieves an access token for calling MS Graph.
     */
    GraphPeoplePickerHelper.prototype.getGraphToken = function () {
        var _this = this;
        if (this._graphToken) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this._graphToken);
        }
        if (this._oAuthTokenProvider) {
            /**
             * OAuthTokenProvider already logs QOS events for its calls but we want to measure retrieving Graph tokens from within the people picker
             * separately. This allows us to track how often users are forced into the fallback logic scenario.
             */
            var qos_1 = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["Qos"]({ name: 'PeoplePicker.GetGraphToken' });
            return this._oAuthTokenProvider.getToken('https://graph.microsoft.com').then(function (oAuthToken) {
                qos_1.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Success
                });
                return oAuthToken;
            }, function (error) {
                if (_ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].isCanceled(error)) {
                    qos_1.end({
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].ExpectedFailure,
                        resultCode: 'Canceled'
                    });
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
                }
                else {
                    qos_1.end({
                        resultCode: 'PeoplePicker.GetGraphTokenError',
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure,
                        extraData: {
                            serverErrorCode: error['_serverErrorCode'],
                            message: error.message
                        }
                    });
                    // If the Acquire call fails, disable future attempts to retrieve the Graph token for the current session.
                    _this.disableGraphCallsForPicker();
                }
                return null;
            });
        }
        return null;
    };
    GraphPeoplePickerHelper.prototype.initializeDataStore = function () {
        if (!this._dataStore) {
            this._dataStore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
    };
    return GraphPeoplePickerHelper;
}());

//# sourceMappingURL=GraphPeoplePickerHelper.js.map

/***/ }),

/***/ "Vb17":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/chrome/ChromeOptions.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return ChromeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return NavPlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return HeaderLayoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return UnifiedHeaderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return LogoAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return FooterLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return FooterEmphasis; });
/**
 * Types of supported chrome controls
 */
var ChromeControlType;
(function (ChromeControlType) {
    ChromeControlType[ChromeControlType["HEADER"] = 0] = "HEADER";
    ChromeControlType[ChromeControlType["NAV"] = 1] = "NAV";
    ChromeControlType[ChromeControlType["FOOTER"] = 2] = "FOOTER";
    ChromeControlType[ChromeControlType["SEARCHBOX"] = 3] = "SEARCHBOX";
})(ChromeControlType || (ChromeControlType = {}));
var NavPlacementType;
(function (NavPlacementType) {
    NavPlacementType[NavPlacementType["LEFT"] = 0] = "LEFT";
    NavPlacementType[NavPlacementType["HORIZONTAL"] = 1] = "HORIZONTAL";
})(NavPlacementType || (NavPlacementType = {}));
/**
 * @deprecated see UnifiedHeaderLayout
 * Defines supported layout type for composite header control.
 * Currently the layout type is indicated from nav placement.
 */
var HeaderLayoutType;
(function (HeaderLayoutType) {
    /** Composite header control takes full width of the page */
    HeaderLayoutType[HeaderLayoutType["FULLBLEED"] = 0] = "FULLBLEED";
    /** Composite header control is placed on a page with left nav */
    HeaderLayoutType[HeaderLayoutType["WITHLEFTNAV"] = 1] = "WITHLEFTNAV";
})(HeaderLayoutType || (HeaderLayoutType = {}));
/** The layout to use for the new UnifiedHeader, which replaces the old headers. */
var UnifiedHeaderLayout;
(function (UnifiedHeaderLayout) {
    /** @deprecated none, don't use the UnifiedHeader and fall back to the old headers */
    UnifiedHeaderLayout[UnifiedHeaderLayout["none"] = 0] = "none";
    /** Large */
    UnifiedHeaderLayout[UnifiedHeaderLayout["standard"] = 1] = "standard";
    /** Medium */
    UnifiedHeaderLayout[UnifiedHeaderLayout["compact"] = 2] = "compact";
    /** @deprecated not currently supported */
    UnifiedHeaderLayout[UnifiedHeaderLayout["minimal"] = 3] = "minimal";
    /** Extended */
    UnifiedHeaderLayout[UnifiedHeaderLayout["extended"] = 4] = "extended";
})(UnifiedHeaderLayout || (UnifiedHeaderLayout = {}));
/** Logo alignment of extended header layout */
var LogoAlignment;
(function (LogoAlignment) {
    LogoAlignment[LogoAlignment["left"] = 0] = "left";
    LogoAlignment[LogoAlignment["middle"] = 1] = "middle";
    LogoAlignment[LogoAlignment["right"] = 2] = "right";
})(LogoAlignment || (LogoAlignment = {}));
/**
 * The layout to use for the footer
 */
var FooterLayout;
(function (FooterLayout) {
    FooterLayout[FooterLayout["SIMPLE"] = 0] = "SIMPLE";
    FooterLayout[FooterLayout["EXTENDED"] = 1] = "EXTENDED";
    FooterLayout[FooterLayout["STACKED"] = 2] = "STACKED";
})(FooterLayout || (FooterLayout = {}));
/**
 * The emphasis to use in the footer.
 * Note that this is different than the enum ordering that fabric uses, in order
 * to have strong be the default for unset variants in the property flags
 */
var FooterEmphasis;
(function (FooterEmphasis) {
    FooterEmphasis[FooterEmphasis["Strong"] = 0] = "Strong";
    FooterEmphasis[FooterEmphasis["Neutral"] = 1] = "Neutral";
    FooterEmphasis[FooterEmphasis["Soft"] = 2] = "Soft";
    FooterEmphasis[FooterEmphasis["None"] = 3] = "None";
})(FooterEmphasis || (FooterEmphasis = {}));
//# sourceMappingURL=ChromeOptions.js.map

/***/ }),

/***/ "WEXx":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return DetailsList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony import */ var _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsList.styles */ "JBVq");



var DetailsList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsList_base__WEBPACK_IMPORTED_MODULE_1__["DetailsListBase"], _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'DetailsList',
});
//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "Xm1E":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/peoplePicker/odb/PeoplePickerProvider.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerProvider", function() { return PeoplePickerProvider; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony import */ var _models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/store/PeopleStore */ "fxuZ");
// OneDrive:CoverageThreshold(80)



var UNVALIDATED_EMAIL_ADDRESS = 'UNVALIDATED_EMAIL_ADDRESS'; // Person PrincipalType value to ignore when adding to cache.
var PeoplePickerProvider = /** @class */ (function () {
    function PeoplePickerProvider(params) {
        this._dataSource = params.peoplePickerDataSource
            ? params.peoplePickerDataSource
            : new _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__["PeoplePickerDataSource"]({
                imageAbsoluteWebUrl: params.imageAbsoluteWebUrl
            }, {
                pageContext: params.pageContext,
                apiUrlHelper: params.apiUrlHelper,
                graphPeoplePickerHelper: params.graphPeoplePickerHelper
            });
        this._ppCapabilities = this._dataSource.getCapabilities();
        if (this._ppCapabilities.supportsMruCaching) {
            this._mruCache = new _models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__["PeopleStore"]();
            this.MaxCacheSuggestions = 5;
        }
        else {
            this.MaxCacheSuggestions = 0;
        }
    }
    PeoplePickerProvider.prototype.search = function (query, context) {
        var _this = this;
        var searchPromise;
        var results = {
            cached: null,
            promise: null
        };
        var cacheResults;
        // Send cached results to caller immediately without waiting for server results
        // Don't use cache if limiting results to members of a particular SP Group
        // (context.groupID of zero indicates there are no group membership restrictions)
        if (this._mruCache && !context.groupID) {
            cacheResults = this.searchMruCache(query, context && context.filterExternalUsers); // get the items from the cache for the current query
            if (cacheResults.length > 0) {
                results.cached = cacheResults;
            }
        }
        results.promise = new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"](function (complete, error) {
            // Call the server to search for people that match the query
            searchPromise = _this._dataSource.search(query, context).then(function (data) {
                if (!data) {
                    return;
                }
                if (cacheResults) {
                    // Omit entries that are already in the local cache.
                    if (cacheResults.length > 0) {
                        cacheResults = _this._removeStaleCacheResults(cacheResults, data);
                    }
                    var cachedIds_1 = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
                    complete(data.filter(function (person) { return cachedIds_1.indexOf(person.userId) < 0; }));
                }
                else {
                    complete(data);
                }
            }, 
            /* onError */ function (data) {
                // pass through error to parent promise
                error(data);
            });
        }, 
        /* onCancel */ function () {
            if (searchPromise) {
                searchPromise.cancel();
            }
        });
        return results;
    };
    PeoplePickerProvider.prototype.resolve = function (query, context) {
        var _this = this;
        return this._dataSource.resolve(query, context).then(function (data) {
            if (_this._mruCache && data.isResolved) {
                _this.addToMruCache(data);
            }
            return data;
        });
        // TODO: Only add item to the cache for certain query parameter values:
        //  return (this.UseLocalSuggestionCache) &&
        // (this.UrlZone == null) &&
        // (this.SharePointGroupID <= 0) &&
        // (this.WebApplicationID == '{00000000-0000-0000-0000-000000000000}') &&
        // (this.EnabledClaimProviders == '' || this.EnabledClaimProviders == null) &&
        // (this.PrincipalAccountTypeEnum % 2 == 1 /*SP.Utilities.PrincipalType.user*/) &&
        // (this.ResolvePrincipalSource == 15 /*SP.Utilities.PrincipalSource.all*/);
    };
    PeoplePickerProvider.prototype.getPersonaDetails = function (accountID) {
        return this._dataSource.getPersonaDetails(accountID).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.subscribePresence = function (accountID, fnCallback) {
        return this._dataSource.subscribePresence(accountID, fnCallback);
    };
    PeoplePickerProvider.prototype.addToMruCache = function (item) {
        var mruCache = this._mruCache;
        if (mruCache &&
            item.rawPersonData &&
            item.rawPersonData['EntityData'] &&
            item.rawPersonData['EntityData']['PrincipalType'] !== UNVALIDATED_EMAIL_ADDRESS) {
            mruCache.setItem(item);
        }
    };
    PeoplePickerProvider.prototype.getPickerEntityInformation = function (person) {
        return this._dataSource.getPickerEntityInformation(person);
    };
    PeoplePickerProvider.prototype.sharePointSearch = function (query, context) {
        return this._dataSource.sharePointSearch(query, context).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.canUseGraph = function (context) {
        return this._dataSource.canUseGraph(context);
    };
    PeoplePickerProvider.prototype.canUseSubstrate = function (context) {
        return this._dataSource.canUseSubstrate(context);
    };
    PeoplePickerProvider.prototype.getLivePersonaPickerHelper = function () {
        return this._dataSource.getLivePersonaPickerHelper();
    };
    PeoplePickerProvider.prototype.searchMruCache = function (query, filterExternalUsers) {
        var data = [];
        var mruCache = this._mruCache;
        if (mruCache) {
            data = mruCache.getItems(query, filterExternalUsers);
            // Only return up to the maximum number of suggestions requested
            var maxCacheSuggestions = this.MaxCacheSuggestions;
            if (data.length > maxCacheSuggestions) {
                data = data.splice(0, maxCacheSuggestions);
            }
        }
        return data;
    };
    /**
     * Removes any stale results from the people picker cache so
     * we don't ignore search results that are fresher than the
     * corresponding cache entry.
     *
     * @param cacheResults The results that are stored in the localStorage cache.
     * @param searchResults Fresh search results.
     */
    PeoplePickerProvider.prototype._removeStaleCacheResults = function (cacheResults, searchResults) {
        var cachedIds = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
        var freshCacheResults = [];
        searchResults.forEach(function (searchResult) {
            var cacheResultId = cachedIds.indexOf(searchResult.userId);
            // If the ID exists in the cache, check that it's fresh.
            if (cacheResultId > -1) {
                var cacheResult = cacheResults[cacheResultId];
                // If the cache entry is fresh, add it to the array of fresh cache entries.
                if (_models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__["PeopleStore"].isCacheEntryFresh(cacheResult, searchResult)) {
                    freshCacheResults.push(cacheResult);
                }
            }
        });
        return freshCacheResults;
    };
    return PeoplePickerProvider;
}());

//# sourceMappingURL=PeoplePickerProvider.js.map

/***/ }),

/***/ "YCgd":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/Selection.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });


//# sourceMappingURL=Selection.js.map

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

/***/ "Z9S6":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumn", function() { return DetailsColumn; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony import */ var _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsColumn.styles */ "lbay");



var DetailsColumn = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__["DetailsColumnBase"], _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsColumn' });
//# sourceMappingURL=DetailsColumn.js.map

/***/ }),

/***/ "a+oq":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: HEADER_HEIGHT, getCellStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_HEIGHT", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellStyles", function() { return getCellStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");



// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    tooltipHost: 'ms-TooltipHost',
    root: 'ms-DetailsHeader',
    cell: 'ms-DetailsHeader-cell',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical',
    checkTooltip: 'ms-DetailsHeader-checkTooltip',
    check: 'ms-DetailsHeader-check',
};
var HEADER_HEIGHT = 42;
var getCellStyles = function (props) {
    var theme = props.theme, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return [
        classNames.cell,
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            color: semanticColors.bodyText,
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px",
            lineHeight: 'inherit',
            margin: '0',
            height: HEADER_HEIGHT,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
        },
    ];
};
var getStyles = function (props) {
    var _a, _b, _c, _d;
    var theme = props.theme, className = props.className, isAllSelected = props.isAllSelected, isResizingColumn = props.isResizingColumn, isSizing = props.isSizing, isAllCollapsed = props.isAllCollapsed, _e = props.cellStyleProps, cellStyleProps = _e === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _e;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var cellSizerFadeInStyles = {
        opacity: 1,
        transition: 'opacity 0.3s linear',
    };
    var cellStyles = getCellStyles(props);
    return {
        root: [
            classNames.root,
            fonts.small,
            {
                display: 'inline-block',
                background: colors.headerBackgroundColor,
                position: 'relative',
                minWidth: '100%',
                verticalAlign: 'top',
                height: HEADER_HEIGHT,
                lineHeight: HEADER_HEIGHT,
                whiteSpace: 'nowrap',
                boxSizing: 'content-box',
                paddingBottom: '1px',
                paddingTop: '16px',
                borderBottom: "1px solid " + semanticColors.bodyDivider,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {},
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["& ." + classNames.tooltipHost + " ." + classNames.checkTooltip] = {
                        display: 'block',
                    },
                    _a),
            },
            isAllSelected && classNames.isAllSelected,
            isResizingColumn && classNames.isResizingColumn,
            className,
        ],
        check: [
            classNames.check,
            {
                height: HEADER_HEIGHT,
            },
            {
                selectors: (_b = {},
                    _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _b),
            },
        ],
        cellWrapperPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
        },
        cellIsCheck: [
            cellStyles,
            classNames.cellIsCheck,
            {
                position: 'relative',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
            },
            isAllSelected && {
                opacity: 1,
            },
        ],
        cellIsGroupExpander: [
            cellStyles,
            {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                padding: 0,
                border: 'none',
                width: _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["SPACER_WIDTH"],
                color: palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: palette.neutralLighter,
                    },
                    ':active': {
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        cellIsActionable: {
            selectors: {
                ':hover': {
                    color: semanticColors.bodyText,
                    background: semanticColors.listHeaderBackgroundHovered,
                },
                ':active': {
                    background: semanticColors.listHeaderBackgroundPressed,
                },
            },
        },
        cellIsEmpty: {
            textOverflow: 'clip',
        },
        cellSizer: [
            classNames.cellSizer,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(),
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'ew-resize',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 'inherit',
                background: 'transparent',
                zIndex: 1,
                width: 16,
                selectors: (_c = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: colors.resizerColor,
                            opacity: 0,
                            left: '50%',
                        },
                        ':focus:after': cellSizerFadeInStyles,
                        ':hover:after': cellSizerFadeInStyles
                    },
                    _c["&." + classNames.isResizing + ":after"] = [
                        cellSizerFadeInStyles,
                        {
                            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                        },
                    ],
                    _c),
            },
        ],
        cellIsResizing: classNames.isResizing,
        cellSizerStart: {
            margin: '0 -8px',
        },
        cellSizerEnd: {
            margin: 0,
            marginLeft: -16,
        },
        collapseButton: [
            classNames.collapseButton,
            {
                transformOrigin: '50% 50%',
                transition: 'transform .1s linear',
            },
            isAllCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                },
        ],
        checkTooltip: classNames.checkTooltip,
        sizingOverlay: isSizing && {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            cursor: 'ew-resize',
            background: 'rgba(255, 255, 255, 0)',
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    background: 'transparent',
                    MsHighContrastAdjust: 'none',
                },
                _d),
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"],
        dropHintCircleStyle: [
            classNames.dropHintCircleStyle,
            {
                display: 'inline-block',
                visibility: 'hidden',
                position: 'absolute',
                bottom: 0,
                height: 9,
                width: 9,
                borderRadius: '50%',
                marginLeft: -5,
                top: 34,
                overflow: 'visible',
                zIndex: 10,
                border: "1px solid " + palette.themePrimary,
                background: palette.white,
            },
        ],
        dropHintCaretStyle: [
            classNames.dropHintCaretStyle,
            {
                display: 'none',
                position: 'absolute',
                top: -28,
                left: -6.5,
                fontSize: fonts.medium.fontSize,
                color: palette.themePrimary,
                overflow: 'visible',
                zIndex: 10,
            },
        ],
        dropHintLineStyle: [
            classNames.dropHintLineStyle,
            {
                display: 'none',
                position: 'absolute',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 42,
                width: 1,
                background: palette.themePrimary,
                zIndex: 10,
            },
        ],
        dropHintStyle: {
            display: 'inline-block',
            position: 'absolute',
        },
    };
};
//# sourceMappingURL=DetailsHeader.styles.js.map

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

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "cAy9":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/IPerson.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: PrincipalType, EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony import */ var _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../roleAssignments/PrincipalType */ "2+UY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_0__["default"]; });


var EntityType;
(function (EntityType) {
    EntityType[EntityType["regularUser"] = 0] = "regularUser";
    EntityType[EntityType["externalUser"] = 1] = "externalUser";
    EntityType[EntityType["group"] = 2] = "group";
    EntityType[EntityType["application"] = 3] = "application";
    EntityType[EntityType["linkedinUser"] = 4] = "linkedinUser";
})(EntityType || (EntityType = {}));
//# sourceMappingURL=IPerson.js.map

/***/ }),

/***/ "ddaB":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return ColumnActionsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return ConstrainMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return ColumnDragEndLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return DetailsListLayoutMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return CheckboxVisibility; });
/**
 * Enum to describe how a particular column header behaves.
 * This is used to to specify the property `IColumn.columnActionsMode`.
 * If `IColumn.columnActionsMode` is undefined, it's equivalent to `ColumnActionsMode.clickable`.
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /** Renders the column header as disabled. */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /** Renders the column header as clickable. Default value. */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /** Renders the column header as clickable and displays the dropdown chevron. */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */
var ConstrainMode;
(function (ConstrainMode) {
    /** Lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /** Constrains the list to the given layout space. */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /** Drag ended outside of current list */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /** Drag ended within current list */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /** Drag ended on header */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /** Visible on hover. */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /** Visible always. */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /** Hide checkboxes. */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));
//# sourceMappingURL=DetailsList.types.js.map

/***/ }),

/***/ "eT67":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Qos.event.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/telemetry-manager/./lib/events/Qos.event.js



/***/ }),

/***/ "fxuZ":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/store/PeopleStore.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: PeopleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleStore", function() { return PeopleStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage




var PeopleStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeopleStore, _super);
    function PeopleStore() {
        var _this = _super.call(this, PeopleStore._Key, PeopleStore._DataStoreCachingType) || this;
        // Initiliaze constants
        _this._MaxItems = 200;
        _this._Version = 5;
        var oneWeekInMilliseconds = 604800000;
        // Initiliaze buffer object from DOM local storage if it exists
        _this._buffer = _this.getValue(PeopleStore._StorageKey);
        // If there's no buffer object in DOM local storage or if the buffer is from a previous schema version, initialize an empty buffer object
        if (!_this._buffer || _this._buffer.version !== _this._Version || !_this._buffer.lastCachePrune) {
            _this.initializeBuffer();
        }
        // Initialize data object for fast and easy lookups
        _this._data = {};
        // Only keep things in the cache if it has been emptied in the last week
        if (Date.now() < _this._buffer.lastCachePrune + oneWeekInMilliseconds ||
            _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('e96e6a47-9f55-4ea4-8395-c9f48a655b2a', '8/07/2018', 'PeopleStorePruning')) {
            for (var i = 0; i < _this._buffer.dataArray.length; i++) {
                _this._data[_this._buffer.dataArray[i].email] = _this._buffer.dataArray[i];
            }
        }
        else {
            // Prune the cache
            _this.initializeBuffer();
            _this.setValue(PeopleStore._StorageKey, _this._buffer);
        }
        return _this;
    }
    PeopleStore.clear = function () {
        var datastore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"](PeopleStore._Key, PeopleStore._DataStoreCachingType);
        datastore.remove(PeopleStore._StorageKey);
    };
    PeopleStore.isCacheEntryFresh = function (cacheEntry, freshData) {
        return (cacheEntry.name === freshData.name &&
            cacheEntry.email === freshData.email &&
            cacheEntry.job === freshData.job &&
            cacheEntry.office === freshData.office &&
            cacheEntry.department === freshData.department &&
            cacheEntry.phone === freshData.phone);
    };
    PeopleStore.prototype.setItem = function (item) {
        /**
         * Check to see if the data object already has a matching entry for this person. If
         * the cached entry has the same name and email, do nothing. If anything has changed,
         * update the entry in the cache with the new information.
         */
        var cachedItem = this._data[item.email];
        if (cachedItem) {
            if (!PeopleStore.isCacheEntryFresh(cachedItem, item)) {
                var cachedIds = this._buffer.dataArray.map(function (cacheResult) { return cacheResult.userId; });
                var cacheId = cachedIds.indexOf(item.userId);
                this._buffer.dataArray[cacheId] = item;
            }
            else {
                return;
            }
        }
        else if (this._buffer.dataArray.length === this._MaxItems) {
            // Increment the buffer index and wrap it to the front of the array if it extended beyond MaxItems
            this._buffer.index++;
            if (this._buffer.index >= this._MaxItems) {
                this._buffer.index = 0;
            }
            // Remove oldest person stored in the data object
            var oldestPerson = this._buffer.dataArray[this._buffer.index];
            delete this._data[oldestPerson.email];
            // Remove the oldest person stored in the buffer array
            this._buffer.dataArray[this._buffer.index] = item;
        }
        else {
            // Push person on the buffer array (will take care of wrapping the index the next time an item is added)
            this._buffer.dataArray.push(item);
            this._buffer.index++;
        }
        // Update the data object in both cases with the person's email
        this._data[item.email] = item;
        // Serialize the buffer array and update local storage
        this.setValue(PeopleStore._StorageKey, this._buffer);
    };
    PeopleStore.prototype.getItems = function (query, filterExternalUsers) {
        var results = [];
        for (var i = 0; i < this._buffer.dataArray.length; i++) {
            // Start with the newest item in the buffer. Then work our way back so that we are returning the newest items in the cache.
            // Since items are stored from left to right in terms of oldest to newest, we will work our way from right to left.
            // For the case when _bufferindex - i is >= 0, we are just counting down towards zero. For the case where _bufferIndex - i < 0,
            // we are starting at the end of the buffer and counting down towards the location of _bufferIndex.
            var newestIndex = (this._buffer.index - i + this._MaxItems) % this._MaxItems;
            // TODO: Better algorithm here. It should match how the suggestions box algorithm in ODC PeoplePicker works today
            if (((this._buffer.dataArray[newestIndex].email &&
                this._buffer.dataArray[newestIndex].email.toLowerCase().indexOf(query.toLowerCase()) >= 0) ||
                (this._buffer.dataArray[newestIndex].name &&
                    this._buffer.dataArray[newestIndex].name.toLowerCase().indexOf(query.toLowerCase()) >= 0)) &&
                !(filterExternalUsers && this._buffer.dataArray[newestIndex].entityType === 1 /* externalUser */)) {
                results.push(this._buffer.dataArray[newestIndex]);
            }
        }
        return results;
    };
    PeopleStore.prototype.containsItem = function (item) {
        return Boolean(this._data[item.email]);
    };
    PeopleStore.prototype.initializeBuffer = function () {
        this._buffer = {};
        this._buffer.dataArray = [];
        this._buffer.index = -1;
        this._buffer.version = this._Version;
        this._buffer.lastCachePrune = Date.now();
    };
    PeopleStore._Key = 'ClientPeoplePicker';
    PeopleStore._StorageKey = 'MRU'; // Together with 'dataStoreKey' (in 'super' call) will come to 'ClientPeoplePickerMRU'
    PeopleStore._DataStoreCachingType = _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local;
    return PeopleStore;
}(_ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"]));

//# sourceMappingURL=PeopleStore.js.map

/***/ }),

/***/ "fyAn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Spinner.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Spinner.js


/***/ }),

/***/ "gwC2":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Check/Check.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: CheckGlobalClassNames, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckGlobalClassNames", function() { return CheckGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var CheckGlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check',
    /** Must be manually applied to the parent element of the check. */
    checkHost: 'ms-Check-checkHost',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    // eslint-disable-next-line deprecation/deprecation
    var _f = props.height, height = _f === void 0 ? props.checkBoxHeight || '18px' : _f, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(CheckGlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: height,
        position: 'absolute',
        left: 0,
        top: 0,
        width: height,
        height: height,
        textAlign: 'center',
        verticalAlign: 'middle',
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: height,
                height: height,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: (_a = {
                        ':before': {
                            content: '""',
                            position: 'absolute',
                            top: '1px',
                            right: '1px',
                            bottom: '1px',
                            left: '1px',
                            borderRadius: '50%',
                            opacity: 1,
                            background: semanticColors.bodyBackground,
                        }
                    },
                    _a["." + classNames.checkHost + ":hover &, ." + classNames.checkHost + ":focus &, &:hover, &:focus"] = {
                        opacity: 1,
                    },
                    _a),
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    background: 'Window',
                                },
                                _b),
                        },
                    },
                },
            ],
            className,
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralSecondary,
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            checked && {
                color: palette.white,
            },
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralSecondary,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].medium,
                left: isRTL ? '-0.5px' : '.5px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1,
                        }
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        MsHighContrastAdjust: 'none',
                    },
                    _d),
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: 'none',
                        color: 'WindowText',
                    },
                    _e),
            },
        ],
        checkHost: classNames.checkHost,
    };
};
//# sourceMappingURL=Check.styles.js.map

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

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



/***/ }),

/***/ "iXnO":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ComboBox.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: SelectableOptionMenuItemType, ComboBox, VirtualizedComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ComboBox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ComboBox/index */ "jqXj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return _components_ComboBox_index__WEBPACK_IMPORTED_MODULE_0__["SelectableOptionMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _components_ComboBox_index__WEBPACK_IMPORTED_MODULE_0__["ComboBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualizedComboBox", function() { return _components_ComboBox_index__WEBPACK_IMPORTED_MODULE_0__["VirtualizedComboBox"]; });


//# sourceMappingURL=ComboBox.js.map

/***/ }),

/***/ "jkXB":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return DetailsRowCheck; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__);






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DetailsRowCheckBase = function (props) {
    var _a = props.isVisible, isVisible = _a === void 0 ? false : _a, _b = props.canSelect, canSelect = _b === void 0 ? false : _b, _c = props.anySelected, anySelected = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, _e = props.isHeader, isHeader = _e === void 0 ? false : _e, className = props.className, checkClassName = props.checkClassName, styles = props.styles, theme = props.theme, compact = props.compact, onRenderDetailsCheckbox = props.onRenderDetailsCheckbox, _f = props.useFastIcons, useFastIcons = _f === void 0 ? true : _f, // must be removed from buttonProps
    buttonProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["isVisible", "canSelect", "anySelected", "selected", "isHeader", "className", "checkClassName", "styles", "theme", "compact", "onRenderDetailsCheckbox", "useFastIcons"]);
    var defaultCheckboxRender = useFastIcons ? _fastDefaultCheckboxRender : _defaultCheckboxRender;
    var onRenderCheckbox = onRenderDetailsCheckbox
        ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__["composeRenderFunction"])(onRenderDetailsCheckbox, defaultCheckboxRender)
        : defaultCheckboxRender;
    var classNames = getClassNames(styles, {
        theme: theme,
        canSelect: canSelect,
        selected: selected,
        anySelected: anySelected,
        className: className,
        isHeader: isHeader,
        isVisible: isVisible,
        compact: compact,
    });
    var detailsCheckboxProps = {
        checked: selected,
        theme: theme,
    };
    return canSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { role: "checkbox", 
        // eslint-disable-next-line deprecation/deprecation
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check), "aria-checked": selected, "data-selection-toggle": true, "data-automationid": "DetailsRowCheck" }), onRenderCheckbox(detailsCheckboxProps))) : (
    // eslint-disable-next-line deprecation/deprecation
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check) })));
};
var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
function _defaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { checked: checkboxProps.checked });
}
function _fastDefaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
}
var DetailsRowCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(DetailsRowCheckBase, _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], undefined, { scope: 'DetailsRowCheck' }, true);
//# sourceMappingURL=DetailsRowCheck.js.map

/***/ }),

/***/ "jqXj":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ComboBox/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SelectableOptionMenuItemType, ComboBox, VirtualizedComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/selectableOption/SelectableOption.types */ "T0Qu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_0__["SelectableOptionMenuItemType"]; });

/* harmony import */ var _ComboBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComboBox */ "s+9u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _ComboBox__WEBPACK_IMPORTED_MODULE_1__["ComboBox"]; });

/* harmony import */ var _VirtualizedComboBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VirtualizedComboBox */ "rqxZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualizedComboBox", function() { return _VirtualizedComboBox__WEBPACK_IMPORTED_MODULE_2__["VirtualizedComboBox"]; });




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

/***/ "kL0j":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Toggle, ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle */ "YHiq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _Toggle__WEBPACK_IMPORTED_MODULE_0__["Toggle"]; });

/* harmony import */ var _Toggle_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.base */ "LGYR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return _Toggle_base__WEBPACK_IMPORTED_MODULE_1__["ToggleBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kVD3":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/GroupedList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GroupedList/index */ "y86Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupShowAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupSpacer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListSection"]; });


//# sourceMappingURL=GroupedList.js.map

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

/***/ "lbay":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");




var GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
    nearIcon: 'ms-DetailsColumn-nearIcon',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _b = props.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _b, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8,
    };
    var borderWhileDragging = {
        outline: "1px solid " + palette.themePrimary,
    };
    var borderAfterDragOrDrop = {
        outlineColor: 'transparent',
    };
    return {
        root: [
            Object(_DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__["getCellStyles"])(props),
            fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered,
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed,
                        },
                    },
                },
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip',
                },
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block',
                    },
                },
            },
            headerClassName,
        ],
        gripperBarVerticalStyle: {
            display: 'none',
            position: 'absolute',
            textAlign: 'left',
            color: palette.neutralTertiary,
            left: 1,
        },
        nearIcon: [classNames.nearIcon, nearIconStyle],
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1,
            },
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1,
            },
            iconClassName,
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 6,
                verticalAlign: 'middle',
                fontSize: fonts.small.fontSize,
            },
        ],
        cellTitle: [
            classNames.cellTitle,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px" }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse',
                }
                : {})),
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                fontSize: fonts.medium.fontSize,
            },
            isIconOnly && {
                selectors: (_a = {},
                    _a["." + classNames.nearIcon] = {
                        paddingLeft: 0,
                    },
                    _a),
            },
        ],
        cellTooltip: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"],
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline " + transitionDurationDrag + "ms ease" }],
        borderAfterDropping: borderWhileDragging,
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  " + transitionDurationDrop + "ms ease" }],
    };
};
//# sourceMappingURL=DetailsColumn.styles.js.map

/***/ }),

/***/ "lxGK":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/SyncTelemetryHandler.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return getSyncTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");


function getSyncTelemetryHandler(dataSyncClient, telemetryHandler) {
    return function (input, endpoint) {
        var eventData = input.eventData;
        var extraData = eventData.extraData;
        var syncQos = {
            performanceEntry: extraData && extraData['performanceEntry'],
            httpStatus: extraData && extraData['HttpStatus'],
            correlationId: extraData && extraData['CorrelationId'],
            succeeded: (eventData && eventData.resultType === _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success) || false,
            resultCode: eventData && eventData.resultCode,
            endpoint: endpoint
        };
        var handlerOutput = telemetryHandler && telemetryHandler(input);
        var canRetrySync = dataSyncClient.onRequestComplete(syncQos);
        extraData['dataSyncQos'] = dataSyncClient.getQosInfo();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput || {})), { eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData : eventData)), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData.extraData : eventData.extraData)), dataSyncClient.getQosInfo()) }), canRetry: canRetrySync && (!handlerOutput || handlerOutput.canRetry) });
    };
}
//# sourceMappingURL=SyncTelemetryHandler.js.map

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

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"]; });

// Loading @ms/odsp-utilities/./lib/uri/SimpleUri.js



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

/***/ "nXow":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/RequestDurationLoggingHelper.js


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

/***/ "oao7":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupSpacer.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: SPACER_WIDTH, GroupSpacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACER_WIDTH", function() { return SPACER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return GroupSpacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SPACER_WIDTH = 36;
var GroupSpacer = function (props) {
    var count = props.count, _a = props.indentWidth, indentWidth = _a === void 0 ? SPACER_WIDTH : _a, _b = props.role, role = _b === void 0 ? 'presentation' : _b;
    var width = count * indentWidth;
    return count > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-GroupSpacer', style: { display: 'inline-block', width: width }, role: role })) : null;
};
//# sourceMappingURL=GroupSpacer.js.map

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

/***/ "pVr0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/dragdrop/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DragDropHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragDropHelper */ "uGAW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__["DragDropHelper"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pf3H":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeaderBase", function() { return GroupHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Spinner */ "fyAn");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var GroupHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupHeaderBase, _super);
    function GroupHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleCollapse = function () {
            var _a = _this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
            var isCollapsed = _this.state.isCollapsed;
            var newCollapsed = !isCollapsed;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
            _this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible,
            });
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
        };
        _this._onKeyUp = function (ev) {
            var _a = _this.props, group = _a.group, onGroupHeaderKeyUp = _a.onGroupHeaderKeyUp;
            if (onGroupHeaderKeyUp) {
                onGroupHeaderKeyUp(ev, group);
            }
            if (!ev.defaultPrevented) {
                var shouldOpen = _this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, _this.props.theme);
                var shouldClose = !_this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left, _this.props.theme);
                if (shouldClose || shouldOpen) {
                    _this._toggleCollapse();
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
        };
        _this._onToggleClick = function (ev) {
            _this._toggleCollapse();
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onToggleSelectGroupClick = function (ev) {
            var _a = _this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
            if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onHeaderClick = function () {
            var _a = _this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
            if (onGroupHeaderClick) {
                onGroupHeaderClick(group);
            }
            else if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
        };
        _this._onRenderTitle = function (props) {
            var group = props.group, ariaColSpan = props.ariaColSpan;
            if (!group) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.title, role: "gridcell", "aria-colspan": ariaColSpan },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, group.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.headerCount },
                    "(",
                    group.count,
                    group.hasMoreData && '+',
                    ")")));
        };
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false,
        };
        return _this;
    }
    GroupHeaderBase.getDerivedStateFromProps = function (nextProps, previousState) {
        if (nextProps.group) {
            var newCollapsed = nextProps.group.isCollapsed;
            var isGroupLoading = nextProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(nextProps.group);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { isCollapsed: newCollapsed || false, isLoadingVisible: newLoadingVisible || false });
        }
        return previousState;
    };
    GroupHeaderBase.prototype.render = function () {
        var _a = this.props, group = _a.group, _b = _a.groupLevel, groupLevel = _b === void 0 ? 0 : _b, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, 
        // eslint-disable-next-line deprecation/deprecation
        _c = _a.isSelected, 
        // eslint-disable-next-line deprecation/deprecation
        isSelected = _c === void 0 ? false : _c, _d = _a.selected, selected = _d === void 0 ? false : _d, indentWidth = _a.indentWidth, _e = _a.onRenderTitle, onRenderTitle = _e === void 0 ? this._onRenderTitle : _e, onRenderGroupHeaderCheckbox = _a.onRenderGroupHeaderCheckbox, _f = _a.isCollapsedGroupSelectVisible, isCollapsedGroupSelectVisible = _f === void 0 ? true : _f, expandButtonProps = _a.expandButtonProps, expandButtonIcon = _a.expandButtonIcon, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, compact = _a.compact, ariaPosInSet = _a.ariaPosInSet, ariaSetSize = _a.ariaSetSize, useFastIcons = _a.useFastIcons;
        var defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;
        var onRenderCheckbox = onRenderGroupHeaderCheckbox
            ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["composeRenderFunction"])(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
            : defaultCheckboxRender;
        var _g = this.state, isCollapsed = _g.isCollapsed, isLoadingVisible = _g.isLoadingVisible;
        var canSelectGroup = selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = selected || isSelected;
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            selected: currentlySelected,
            isCollapsed: isCollapsed,
            compact: compact,
        });
        if (!group) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, role: "row", "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, "data-is-focusable": true, onKeyUp: this._onKeyUp, "aria-label": group.ariaLabel || group.name, "aria-expanded": !this.state.isCollapsed, "aria-level": groupLevel + 1 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.groupHeaderContainer, role: "presentation" },
                isSelectionCheckVisible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.check, role: "checkbox", "aria-checked": currentlySelected, "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick }, selectAllButtonProps), onRenderCheckbox({ checked: currentlySelected, theme: theme }, onRenderCheckbox)))) : (selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: 1 })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.dropIcon, role: "presentation" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: "Tag" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.expand, onClick: this._onToggleClick, "aria-expanded": !this.state.isCollapsed }, expandButtonProps),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: this._classNames.expandIsCollapsed, iconName: expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed') }))),
                onRenderTitle(this.props, this._onRenderTitle),
                isLoadingVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], { label: loadingText }))));
    };
    GroupHeaderBase.prototype._defaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { checked: checkboxProps.checked });
    };
    GroupHeaderBase.prototype._fastDefaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
    };
    GroupHeaderBase.defaultProps = {
        expandButtonProps: { 'aria-label': 'expand collapse group' },
    };
    return GroupHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
//# sourceMappingURL=GroupHeader.base.js.map

/***/ }),

/***/ "qJrk":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/ErrorHelper.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/telemetry-manager/./lib/ErrorHelper.js



/***/ }),

/***/ "r2Go":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowFields.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return DetailsRowFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var getCellText = function (item, column) {
    var value = item && column && column.fieldName ? item[column.fieldName] : '';
    if (value === null || value === undefined) {
        value = '';
    }
    if (typeof value === 'boolean') {
        return value.toString();
    }
    return value;
};
/**
 * Component for rendering a row's cells in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsRowFields = function (props) {
    var columns = props.columns, columnStartIndex = props.columnStartIndex, rowClassNames = props.rowClassNames, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a, item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, cellsByColumn = props.cellsByColumn, enableUpdateAnimations = props.enableUpdateAnimations;
    var cellValueKeysRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var cellValueKeys = cellValueKeysRef.current || (cellValueKeysRef.current = {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: rowClassNames.fields, "data-automationid": "DetailsRowFields", role: "presentation" }, columns.map(function (column, columnIndex) {
        var width = typeof column.calculatedWidth === 'undefined'
            ? 'auto'
            : column.calculatedWidth +
                cellStyleProps.cellLeftPadding +
                cellStyleProps.cellRightPadding +
                (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
        var _a = column.onRender, onRender = _a === void 0 ? onRenderItemColumn : _a, _b = column.getValueKey, getValueKey = _b === void 0 ? getCellValueKey : _b;
        var cellContentsRender = cellsByColumn && column.key in cellsByColumn
            ? cellsByColumn[column.key]
            : onRender
                ? onRender(item, itemIndex, column)
                : getCellText(item, column);
        var previousValueKey = cellValueKeys[column.key];
        var cellValueKey = enableUpdateAnimations && getValueKey ? getValueKey(item, itemIndex, column) : undefined;
        var showAnimation = false;
        if (cellValueKey !== undefined && previousValueKey !== undefined && cellValueKey !== previousValueKey) {
            showAnimation = true;
        }
        cellValueKeys[column.key] = cellValueKey;
        // generate a key that auto-dirties when content changes, to force the container to re-render,
        // to trigger animation
        var key = "" + column.key + (cellValueKey !== undefined ? "-" + cellValueKey : '');
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, role: column.isRowHeader ? 'rowheader' : 'gridcell', "aria-readonly": true, "aria-colindex": columnIndex + columnStartIndex + 1, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["css"])(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded, showAnimation && rowClassNames.cellAnimation), style: { width: width }, "data-automationid": "DetailsRowCell", "data-automation-key": column.key }, cellContentsRender));
    })));
};
//# sourceMappingURL=DetailsRowFields.js.map

/***/ }),

/***/ "rqxZ":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ComboBox/VirtualizedComboBox.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: VirtualizedComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualizedComboBox", function() { return VirtualizedComboBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComboBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComboBox */ "s+9u");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "mkpW");





var VirtualizedComboBox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VirtualizedComboBox, _super);
    function VirtualizedComboBox(props) {
        var _this = _super.call(this, props) || this;
        /** The combo box element */
        _this._comboBox = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /** The virtualized list element */
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderList = function (props) {
            var onRenderItem = props.onRenderItem;
            // Render virtualized list
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_3__["List"], { componentRef: _this._list, role: "listbox", items: props.options, 
                // eslint-disable-next-line react/jsx-no-bind
                onRenderCell: onRenderItem ? function (item) { return onRenderItem(item); } : function () { return null; } }));
        };
        _this._onScrollToItem = function (itemIndex) {
            // We are using the List component, call scrollToIndex
            _this._list.current && _this._list.current.scrollToIndex(itemIndex);
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["initializeComponentRef"])(_this);
        return _this;
    }
    Object.defineProperty(VirtualizedComboBox.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            if (this._comboBox.current) {
                return this._comboBox.current.selectedOptions;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    VirtualizedComboBox.prototype.dismissMenu = function () {
        if (this._comboBox.current) {
            return this._comboBox.current.dismissMenu();
        }
    };
    VirtualizedComboBox.prototype.focus = function (shouldOpenOnFocus, useFocusAsync) {
        if (this._comboBox.current) {
            this._comboBox.current.focus(shouldOpenOnFocus, useFocusAsync);
            return true;
        }
        return false;
    };
    VirtualizedComboBox.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ComboBox__WEBPACK_IMPORTED_MODULE_2__["ComboBox"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { componentRef: this._comboBox, onRenderList: this._onRenderList, onScrollToItem: this._onScrollToItem })));
    };
    return VirtualizedComboBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=VirtualizedComboBox.js.map

/***/ }),

/***/ "s+9u":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ComboBox/ComboBox.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return ComboBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Autofill_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Autofill/index */ "kjzS");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Checkbox */ "l0uo");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");
/* harmony import */ var _ComboBox_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComboBox.styles */ "CE8r");
/* harmony import */ var _ComboBox_classNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ComboBox.classNames */ "AwyK");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/selectableOption/index */ "/Djz");













var SearchDirection;
(function (SearchDirection) {
    SearchDirection[SearchDirection["backward"] = -1] = "backward";
    SearchDirection[SearchDirection["none"] = 0] = "none";
    SearchDirection[SearchDirection["forward"] = 1] = "forward";
})(SearchDirection || (SearchDirection = {}));
var HoverStatus;
(function (HoverStatus) {
    /** Used when the user was hovering and has since moused out of the menu items */
    HoverStatus[HoverStatus["clearAll"] = -2] = "clearAll";
    /** Default "normal" state, when no hover has happened or a hover is in progress */
    HoverStatus[HoverStatus["default"] = -1] = "default";
})(HoverStatus || (HoverStatus = {}));
var ScrollIdleDelay = 250; /* ms */
var TouchIdleDelay = 500; /* ms */
/**
 * This is used to clear any pending autocomplete text (used when autocomplete is true and
 * allowFreeform is false)
 */
var ReadOnlyPendingAutoCompleteTimeout = 1000; /* ms */
/**
 * Internal class that is used to wrap all ComboBox options.
 * This is used to customize when we want to rerender components,
 * so we don't rerender every option every time render is executed.
 */
var ComboBoxOptionWrapper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComboBoxOptionWrapper, _super);
    function ComboBoxOptionWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboBoxOptionWrapper.prototype.render = function () {
        return this.props.render();
    };
    ComboBoxOptionWrapper.prototype.shouldComponentUpdate = function (newProps) {
        // The render function will always be different, so we ignore that prop
        return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { render: undefined }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newProps), { render: undefined }));
    };
    return ComboBoxOptionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var COMPONENT_NAME = 'ComboBox';
var ComboBox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComboBox, _super);
    function ComboBox(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /** The input aspect of the comboBox */
        _this._autofill = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /** The wrapping div of the input and button */
        _this._comboBoxWrapper = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /** The callout element */
        _this._comboBoxMenu = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /** The menu item element that is currently selected */
        _this._selectedElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * {@inheritdoc}
         */
        _this.focus = function (shouldOpenOnFocus, useFocusAsync) {
            if (_this._autofill.current) {
                if (useFocusAsync) {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["focusAsync"])(_this._autofill.current);
                }
                else {
                    _this._autofill.current.focus();
                }
                if (shouldOpenOnFocus) {
                    _this.setState({
                        isOpen: true,
                    });
                }
            }
            // Programatically setting focus means that there is nothing else that needs to be done
            // Focus is now contained
            if (!_this._hasFocus()) {
                _this.setState({ focusState: 'focused' });
            }
        };
        /**
         * Close menu callout if it is open
         */
        _this.dismissMenu = function () {
            var isOpen = _this.state.isOpen;
            isOpen && _this.setState({ isOpen: false });
        };
        /**
         * componentWillReceiveProps handler for the auto fill component
         * Checks/updates the iput value to set, if needed
         * @param defaultVisibleValue - the defaultVisibleValue that got passed
         *  in to the auto fill's componentWillReceiveProps
         * @returns - the updated value to set, if needed
         */
        _this._onUpdateValueInAutofillWillReceiveProps = function () {
            var comboBox = _this._autofill.current;
            if (!comboBox) {
                return null;
            }
            if (comboBox.value === null || comboBox.value === undefined) {
                return null;
            }
            var visibleValue = _this._normalizeToString(_this._currentVisibleValue);
            if (comboBox.value !== visibleValue) {
                // If visibleValue is empty, ensure that the empty string is used
                return visibleValue || '';
            }
            return comboBox.value;
        };
        _this._renderComboBoxWrapper = function (multiselectAccessibleText, errorMessageId, keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            var _a = _this.props, label = _a.label, disabled = _a.disabled, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, required = _a.required, errorMessage = _a.errorMessage, buttonIconProps = _a.buttonIconProps, _b = _a.isButtonAriaHidden, isButtonAriaHidden = _b === void 0 ? true : _b, title = _a.title, placeholderProp = _a.placeholder, tabIndex = _a.tabIndex, autofill = _a.autofill, iconButtonProps = _a.iconButtonProps;
            var _c = _this.state, isOpen = _c.isOpen, suggestedDisplayValue = _c.suggestedDisplayValue;
            // If the combobox has focus, is multiselect, and has a display string, then use that placeholder
            // so that the selected items don't appear to vanish. This is not ideal but it's the only reasonable way
            // to correct the behavior where the input is cleared so the user can type. If a full refactor is done, then this
            // should be removed and the multiselect combobox should behave like a picker.
            var placeholder = _this._hasFocus() && _this.props.multiSelect && multiselectAccessibleText
                ? multiselectAccessibleText
                : placeholderProp;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: _this._comboBoxWrapper, id: _this._id + 'wrapper', className: _this._classNames.root },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Autofill_index__WEBPACK_IMPORTED_MODULE_2__["Autofill"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], "data-is-interactable": !disabled, componentRef: _this._autofill, id: _this._id + '-input', className: _this._classNames.input, type: "text", onFocus: _this._onFocus, onBlur: _this._onBlur, onKeyDown: _this._onInputKeyDown, onKeyUp: _this._onInputKeyUp, onClick: _this._onAutofillClick, onTouchStart: _this._onTouchStart, onInputValueChange: _this._onInputChange, "aria-expanded": isOpen, "aria-autocomplete": _this._getAriaAutoCompleteValue(), role: "combobox", readOnly: disabled, "aria-labelledby": label && _this._id + '-label', "aria-label": ariaLabel && !label ? ariaLabel : undefined, "aria-describedby": errorMessage !== undefined
                        ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby'], errorMessageId)
                        : Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), "aria-activedescendant": _this._getAriaActiveDescendantValue(), "aria-required": required, "aria-disabled": disabled, "aria-owns": isOpen ? _this._id + '-list' : undefined, spellCheck: false, defaultVisibleValue: _this._currentVisibleValue, suggestedDisplayValue: suggestedDisplayValue, updateValueInWillReceiveProps: _this._onUpdateValueInAutofillWillReceiveProps, shouldSelectFullInputValueInComponentDidUpdate: _this._onShouldSelectFullInputValueInAutofillComponentDidUpdate, title: title, preventValueSelection: !_this._hasFocus(), placeholder: placeholder, tabIndex: tabIndex }, autofill)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: 'ms-ComboBox-CaretDown-button', styles: _this._getCaretButtonStyles(), role: "presentation", "aria-hidden": isButtonAriaHidden, "data-is-focusable": false, tabIndex: -1, onClick: _this._onComboBoxClick, onBlur: _this._onBlur, iconProps: buttonIconProps, disabled: disabled, checked: isOpen }, iconButtonProps))));
        };
        /**
         * componentDidUpdate handler for the auto fill component
         *
         * @param defaultVisibleValue - the current defaultVisibleValue in the auto fill's componentDidUpdate
         * @param suggestedDisplayValue - the current suggestedDisplayValue in the auto fill's componentDidUpdate
         * @returns - should the full value of the input be selected?
         * True if the defaultVisibleValue equals the suggestedDisplayValue, false otherwise
         */
        _this._onShouldSelectFullInputValueInAutofillComponentDidUpdate = function () {
            return _this._currentVisibleValue === _this.state.suggestedDisplayValue;
        };
        /**
         * Get the correct value to pass to the input
         * to show to the user based off of the current props and state
         * @returns the value to pass to the input
         */
        _this._getVisibleValue = function () {
            var _a = _this.props, text = _a.text, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete;
            var _b = _this.state, selectedIndices = _b.selectedIndices, currentPendingValueValidIndex = _b.currentPendingValueValidIndex, currentOptions = _b.currentOptions, currentPendingValue = _b.currentPendingValue, suggestedDisplayValue = _b.suggestedDisplayValue, isOpen = _b.isOpen;
            var currentPendingIndexValid = _this._indexWithinBounds(currentOptions, currentPendingValueValidIndex);
            // If the user passed is a value prop, use that
            // unless we are open and have a valid current pending index
            if (!(isOpen && currentPendingIndexValid) &&
                text &&
                (currentPendingValue === null || currentPendingValue === undefined)) {
                return text;
            }
            if (_this.props.multiSelect) {
                // Multi-select
                if (_this._hasFocus()) {
                    var index = -1;
                    if (autoComplete === 'on' && currentPendingIndexValid) {
                        index = currentPendingValueValidIndex;
                    }
                    return _this._getPendingString(currentPendingValue, currentOptions, index);
                }
                else {
                    return _this._getMultiselectDisplayString(selectedIndices, currentOptions, suggestedDisplayValue);
                }
            }
            else {
                // Single-select
                var index = _this._getFirstSelectedIndex();
                if (allowFreeform) {
                    // If we are allowing freeform and autocomplete is also true
                    // and we've got a pending value that matches an option, remember
                    // the matched option's index
                    if (autoComplete === 'on' && currentPendingIndexValid) {
                        index = currentPendingValueValidIndex;
                    }
                    // Since we are allowing freeform, if there is currently a pending value, use that
                    // otherwise use the index determined above (falling back to '' if we did not get a valid index)
                    return _this._getPendingString(currentPendingValue, currentOptions, index);
                }
                else {
                    // If we are not allowing freeform and have a
                    // valid index that matches the pending value,
                    // we know we will need some version of the pending value
                    if (currentPendingIndexValid && autoComplete === 'on') {
                        // If autoComplete is on, return the
                        // raw pending value, otherwise remember
                        // the matched option's index
                        index = currentPendingValueValidIndex;
                        return _this._normalizeToString(currentPendingValue);
                    }
                    else if (!_this.state.isOpen && currentPendingValue) {
                        return _this._indexWithinBounds(currentOptions, index)
                            ? currentPendingValue
                            : _this._normalizeToString(suggestedDisplayValue);
                    }
                    else {
                        return _this._indexWithinBounds(currentOptions, index)
                            ? currentOptions[index].text
                            : _this._normalizeToString(suggestedDisplayValue);
                    }
                }
            }
        };
        /**
         * Handler for typing changes on the input
         * @param updatedValue - the newly changed value
         */
        _this._onInputChange = function (updatedValue) {
            if (_this.props.disabled) {
                _this._handleInputWhenDisabled(null /* event */);
                return;
            }
            _this.props.allowFreeform
                ? _this._processInputChangeWithFreeform(updatedValue)
                : _this._processInputChangeWithoutFreeform(updatedValue);
        };
        /**
         * Focus (and select) the content of the input
         * and set the focused state
         */
        _this._onFocus = function () {
            if (_this._autofill.current && _this._autofill.current.inputElement) {
                _this._autofill.current.inputElement.select();
            }
            if (!_this._hasFocus()) {
                _this.setState({ focusState: 'focusing' });
            }
        };
        /**
         * Callback issued when the options should be resolved, if they have been updated or
         * if they need to be passed in the first time. This only does work if an onResolveOptions
         * callback was passed in
         */
        _this._onResolveOptions = function () {
            if (_this.props.onResolveOptions) {
                // get the options
                var newOptions = _this.props.onResolveOptions(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.state.currentOptions));
                // Check to see if the returned value is an array, if it is update the state
                // If the returned value is not an array then check to see if it's a promise or PromiseLike.
                // If it is then resolve it asynchronously.
                if (Array.isArray(newOptions)) {
                    _this.setState({
                        currentOptions: newOptions,
                    });
                }
                else if (newOptions && newOptions.then) {
                    // Ensure that the promise will only use the callback if it was the most recent one
                    // and update the state when the promise returns
                    var promise_1 = (_this._currentPromise = newOptions);
                    promise_1.then(function (newOptionsFromPromise) {
                        if (promise_1 === _this._currentPromise) {
                            _this.setState({
                                currentOptions: newOptionsFromPromise,
                            });
                        }
                    });
                }
            }
        };
        /**
         * OnBlur handler. Set the focused state to false
         * and submit any pending value
         */
        // eslint-disable-next-line deprecation/deprecation
        _this._onBlur = function (event) {
            // Do nothing if the blur is coming from something
            // inside the comboBox root or the comboBox menu since
            // it we are not really bluring from the whole comboBox
            var relatedTarget = event.relatedTarget;
            if (event.relatedTarget === null) {
                // In IE11, due to lack of support, event.relatedTarget is always
                // null making every onBlur call to be "outside" of the ComboBox
                // even when it's not. Using document.activeElement is another way
                // for us to be able to get what the relatedTarget without relying
                // on the event
                relatedTarget = document.activeElement;
            }
            if (relatedTarget &&
                // when event coming from withing the comboBox title
                ((_this._root.current && _this._root.current.contains(relatedTarget)) ||
                    // when event coming from within the comboBox list menu
                    (_this._comboBoxMenu.current &&
                        (_this._comboBoxMenu.current.contains(relatedTarget) ||
                            // when event coming from the callout containing the comboBox list menu (ex: when scrollBar of the
                            // Callout is clicked) checks if the relatedTarget is a parent of _comboBoxMenu
                            Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["findElementRecursive"])(_this._comboBoxMenu.current, function (element) { return element === relatedTarget; }))))) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (_this._hasFocus()) {
                _this.setState({ focusState: 'none' });
                if (!_this.props.multiSelect || _this.props.allowFreeform) {
                    _this._submitPendingValue(event);
                }
            }
        };
        // Render Callout container and pass in list
        _this._onRenderContainer = function (props) {
            var onRenderList = props.onRenderList, calloutProps = props.calloutProps, dropdownWidth = props.dropdownWidth, dropdownMaxWidth = props.dropdownMaxWidth, _a = props.onRenderUpperContent, onRenderUpperContent = _a === void 0 ? _this._onRenderUpperContent : _a, _b = props.onRenderLowerContent, onRenderLowerContent = _b === void 0 ? _this._onRenderLowerContent : _b, useComboBoxAsMenuWidth = props.useComboBoxAsMenuWidth, persistMenu = props.persistMenu, _c = props.shouldRestoreFocus, shouldRestoreFocus = _c === void 0 ? true : _c;
            var isOpen = _this.state.isOpen;
            var comboBoxMenuWidth = useComboBoxAsMenuWidth && _this._comboBoxWrapper.current
                ? _this._comboBoxWrapper.current.clientWidth + 2
                : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_7__["DirectionalHint"].bottomLeftEdge, directionalHintFixed: false }, calloutProps, { onLayerMounted: _this._onLayerMounted, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_this._classNames.callout, calloutProps ? calloutProps.className : undefined), target: _this._comboBoxWrapper.current, onDismiss: _this._onDismiss, onMouseDown: _this._onCalloutMouseDown, onScroll: _this._onScroll, setInitialFocus: false, calloutWidth: useComboBoxAsMenuWidth && _this._comboBoxWrapper.current
                    ? comboBoxMenuWidth && comboBoxMenuWidth
                    : dropdownWidth, calloutMaxWidth: dropdownMaxWidth ? dropdownMaxWidth : comboBoxMenuWidth, hidden: persistMenu ? !isOpen : undefined, shouldRestoreFocus: shouldRestoreFocus }),
                onRenderUpperContent(_this.props, _this._onRenderUpperContent),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.optionsContainerWrapper, ref: _this._comboBoxMenu }, onRenderList(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), _this._onRenderList)),
                onRenderLowerContent(_this.props, _this._onRenderLowerContent)));
        };
        _this._onLayerMounted = function () {
            _this._onCalloutLayerMounted();
            if (_this.props.calloutProps && _this.props.calloutProps.onLayerMounted) {
                _this.props.calloutProps.onLayerMounted();
            }
        };
        _this._onRenderLabel = function (onRenderLabelProps) {
            var _a = onRenderLabelProps.props, label = _a.label, disabled = _a.disabled, required = _a.required;
            if (label) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_11__["Label"], { id: _this._id + '-label', disabled: disabled, required: required, className: _this._classNames.label },
                    label,
                    onRenderLabelProps.multiselectAccessibleText && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.screenReaderText }, onRenderLabelProps.multiselectAccessibleText))));
            }
            return null;
        };
        // Render List of items
        _this._onRenderList = function (props) {
            var onRenderItem = props.onRenderItem, options = props.options;
            var id = _this._id;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: id + '-list', className: _this._classNames.optionsContainer, "aria-labelledby": id + '-label', role: "listbox" }, options.map(function (item) { return onRenderItem(item, _this._onRenderItem); })));
        };
        // Render items
        _this._onRenderItem = function (item) {
            switch (item.itemType) {
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider:
                    return _this._renderSeparator(item);
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header:
                    return _this._renderHeader(item);
                default:
                    return _this._renderOption(item);
            }
        };
        // Default _onRenderLowerContent function returns nothing
        _this._onRenderLowerContent = function () {
            return null;
        };
        // Default _onRenderUpperContent function returns nothing
        _this._onRenderUpperContent = function () {
            return null;
        };
        _this._renderOption = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOptionContent : _a;
            var id = _this._id;
            var isSelected = _this._isOptionSelected(item.index);
            var isChecked = _this._isOptionChecked(item.index);
            var optionStyles = _this._getCurrentOptionStyles(item);
            var optionClassNames = Object(_ComboBox_classNames__WEBPACK_IMPORTED_MODULE_9__["getComboBoxOptionClassNames"])(_this._getCurrentOptionStyles(item));
            var title = _this._getPreviewText(item);
            var onRenderCheckboxLabel = function () { return onRenderOption(item, _this._onRenderOptionContent); };
            var getOptionComponent = function () {
                return !_this.props.multiSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_6__["CommandButton"], { id: id + '-list' + item.index, key: item.key, "data-index": item.index, styles: optionStyles, checked: isSelected, className: 'ms-ComboBox-option', onClick: _this._onItemClick(item), 
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseEnter: _this._onOptionMouseEnter.bind(_this, item.index), 
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseMove: _this._onOptionMouseMove.bind(_this, item.index), onMouseLeave: _this._onOptionMouseLeave, role: "option", "aria-selected": isSelected ? 'true' : 'false', ariaLabel: _this._getPreviewText(item), disabled: item.disabled, title: title }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: optionClassNames.optionTextWrapper, ref: isSelected ? _this._selectedElement : undefined }, onRenderOption(item, _this._onRenderOptionContent)))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], { id: id + '-list' + item.index, ariaLabel: _this._getPreviewText(item), key: item.key, "data-index": item.index, styles: optionStyles, className: 'ms-ComboBox-option', "data-is-focusable": true, onChange: _this._onItemClick(item), label: item.text, role: "option", checked: isChecked, title: title, disabled: item.disabled, 
                    // eslint-disable-next-line react/jsx-no-bind
                    onRenderLabel: onRenderCheckboxLabel, inputProps: {
                        'aria-selected': isSelected ? 'true' : 'false',
                    } }));
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComboBoxOptionWrapper, { key: item.key, index: item.index, disabled: item.disabled, isSelected: isSelected, isChecked: isChecked, text: item.text, 
                // eslint-disable-next-line react/jsx-no-bind
                render: getOptionComponent, data: item.data }));
        };
        /**
         * Mouse clicks to headers, dividers and scrollbar should not make input lose focus
         */
        _this._onCalloutMouseDown = function (ev) {
            ev.preventDefault();
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                _this._async.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
                _this._isScrollIdle = true;
            }, ScrollIdleDelay);
        };
        _this._onRenderOptionContent = function (item) {
            var optionClassNames = Object(_ComboBox_classNames__WEBPACK_IMPORTED_MODULE_9__["getComboBoxOptionClassNames"])(_this._getCurrentOptionStyles(item));
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: optionClassNames.optionText }, item.text);
        };
        /**
         * Handles dismissing (cancelling) the menu
         */
        _this._onDismiss = function () {
            var onMenuDismiss = _this.props.onMenuDismiss;
            if (onMenuDismiss) {
                onMenuDismiss();
            }
            // In persistMode we need to simulate callout layer mount
            // since that only happens once. We do it on dismiss since
            // it works either way.
            if (_this.props.persistMenu) {
                _this._onCalloutLayerMounted();
            }
            // close the menu
            _this._setOpenStateAndFocusOnClose(false /* isOpen */, false /* focusInputAfterClose */);
            // reset the selected index
            // to the last value state
            _this._resetSelectedIndex();
        };
        _this._onAfterClearPendingInfo = function () {
            _this._processingClearPendingInfo = false;
        };
        /**
         * Handle keydown on the input
         * @param ev - The keyboard event that was fired
         */
        _this._onInputKeyDown = function (ev) {
            var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete;
            var _b = _this.state, isOpen = _b.isOpen, currentOptions = _b.currentOptions, currentPendingValueValidIndexOnHover = _b.currentPendingValueValidIndexOnHover;
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _onInputKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            if (disabled) {
                _this._handleInputWhenDisabled(ev);
                return;
            }
            var index = _this._getPendingSelectedIndex(false /* includeCurrentPendingValue */);
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter:
                    if (_this._autofill.current && _this._autofill.current.inputElement) {
                        _this._autofill.current.inputElement.select();
                    }
                    _this._submitPendingValue(ev);
                    if (_this.props.multiSelect && isOpen) {
                        _this.setState({
                            currentPendingValueValidIndex: index,
                        });
                    }
                    else {
                        // On enter submit the pending value
                        if (isOpen ||
                            ((!allowFreeform ||
                                _this.state.currentPendingValue === undefined ||
                                _this.state.currentPendingValue === null ||
                                _this.state.currentPendingValue.length <= 0) &&
                                _this.state.currentPendingValueValidIndex < 0)) {
                            // if we are open or
                            // if we are not allowing freeform or
                            // our we have no pending value
                            // and no valid pending index
                            // flip the open state
                            _this.setState({
                                isOpen: !isOpen,
                            });
                        }
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].tab:
                    // On enter submit the pending value
                    if (!_this.props.multiSelect) {
                        _this._submitPendingValue(ev);
                    }
                    // If we are not allowing freeform
                    // or the comboBox is open, flip the open state
                    if (isOpen) {
                        _this._setOpenStateAndFocusOnClose(!isOpen, false /* focusInputAfterClose */);
                    }
                    // Allow TAB to propigate
                    return;
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].escape:
                    // reset the selected index
                    _this._resetSelectedIndex();
                    // Close the menu if opened
                    if (isOpen) {
                        _this.setState({
                            isOpen: false,
                        });
                    }
                    else {
                        return;
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].up:
                    // if we are in clearAll state (e.g. the user as hovering
                    // and has since mousedOut of the menu items),
                    // go to the last index
                    if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
                        index = _this.state.currentOptions.length;
                    }
                    if (ev.altKey || ev.metaKey) {
                        // Close the menu if it is open and break so
                        // that the event get stopPropagation and prevent default.
                        // Otherwise, we need to let the event continue to propagate
                        if (isOpen) {
                            _this._setOpenStateAndFocusOnClose(!isOpen, true /* focusInputAfterClose */);
                            break;
                        }
                        return;
                    }
                    // Go to the previous option
                    _this._setPendingInfoFromIndexAndDirection(index, SearchDirection.backward);
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].down:
                    // Expand the comboBox on ALT + DownArrow
                    if (ev.altKey || ev.metaKey) {
                        _this._setOpenStateAndFocusOnClose(true /* isOpen */, true /* focusInputAfterClose */);
                    }
                    else {
                        // if we are in clearAll state (e.g. the user as hovering
                        // and has since mousedOut of the menu items),
                        // go to the first index
                        if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
                            index = -1;
                        }
                        // Got to the next option
                        _this._setPendingInfoFromIndexAndDirection(index, SearchDirection.forward);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].home:
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].end:
                    if (allowFreeform) {
                        return;
                    }
                    // Set the initial values to respond to HOME
                    // which goes to the first selectable option
                    index = -1;
                    var directionToSearch = SearchDirection.forward;
                    // If end, update the values to respond to END
                    // which goes to the last selectable option
                    if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].end) {
                        index = currentOptions.length;
                        directionToSearch = SearchDirection.backward;
                    }
                    _this._setPendingInfoFromIndexAndDirection(index, directionToSearch);
                    break;
                /* eslint-disable no-fallthrough */
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space:
                    // event handled in _onComboBoxKeyUp
                    if (!allowFreeform && autoComplete === 'off') {
                        break;
                    }
                default:
                    /* eslint-enable no-fallthrough */
                    // are we processing a function key? if so bail out
                    if (ev.which >= 112 /* F1 */ && ev.which <= 123 /* F12 */) {
                        return;
                    }
                    // If we get here and we got either and ALT key
                    // or meta key, let the event propagate
                    if (ev.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].alt || ev.key === 'Meta' /* && isOpen */) {
                        return;
                    }
                    // If we are not allowing freeform and
                    // allowing autoComplete, handle the input here
                    // since we have marked the input as readonly
                    if (!allowFreeform && autoComplete === 'on') {
                        _this._onInputChange(ev.key);
                        break;
                    }
                    // allow the key to propagate by default
                    return;
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        /**
         * Handle keyup on the input
         * @param ev - the keyboard event that was fired
         */
        _this._onInputKeyUp = function (ev) {
            var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete;
            var isOpen = _this.state.isOpen;
            // We close the menu on key up only if ALL of the following are true:
            // - Most recent key down was alt or meta (command)
            // - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
            //   expand/collapse the menu)
            // - We're not on a Mac (or iOS)
            // This is because on Windows, pressing alt moves focus to the application menu bar or similar,
            // closing any open context menus. There is not a similar behavior on Macs.
            var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);
            _this._lastKeyDownWasAltOrMeta = false;
            var shouldHandleKey = keyPressIsAltOrMetaAlone && !(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isMac"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isIOS"])());
            if (disabled) {
                _this._handleInputWhenDisabled(ev);
                return;
            }
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space:
                    // If we are not allowing freeform and are not autoComplete
                    // make space expand/collapse the comboBox
                    // and allow the event to propagate
                    if (!allowFreeform && autoComplete === 'off') {
                        _this._setOpenStateAndFocusOnClose(!isOpen, !!isOpen);
                    }
                    return;
                default:
                    if (shouldHandleKey && isOpen) {
                        _this._setOpenStateAndFocusOnClose(!isOpen, true /* focusInputAfterClose */);
                    }
                    else {
                        if (_this.state.focusState === 'focusing' && _this.props.openOnKeyboardFocus) {
                            _this.setState({ isOpen: true });
                        }
                        if (_this.state.focusState !== 'focused') {
                            _this.setState({ focusState: 'focused' });
                        }
                    }
                    return;
            }
        };
        _this._onOptionMouseLeave = function () {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            // Ignore the event in persistMenu mode if the callout has
            // closed. This is to avoid clearing the visuals on item click.
            if (_this.props.persistMenu && !_this.state.isOpen) {
                return;
            }
            _this.setState({
                currentPendingValueValidIndexOnHover: HoverStatus.clearAll,
            });
        };
        /**
         * Click handler for the button of the comboBox
         * and the input when not allowing freeform. This
         * toggles the expand/collapse state of the comboBox (if enbled)
         */
        _this._onComboBoxClick = function () {
            var disabled = _this.props.disabled;
            var isOpen = _this.state.isOpen;
            if (!disabled) {
                _this._setOpenStateAndFocusOnClose(!isOpen, false /* focusInputAfterClose */);
                _this.setState({ focusState: 'focused' });
            }
        };
        /**
         * Click handler for the autofill.
         */
        _this._onAutofillClick = function () {
            var _a = _this.props, disabled = _a.disabled, allowFreeform = _a.allowFreeform;
            if (allowFreeform && !disabled) {
                _this.focus(_this.state.isOpen || _this._processingTouch);
            }
            else {
                _this._onComboBoxClick();
            }
        };
        _this._onTouchStart = function () {
            if (_this._comboBoxWrapper.current && !('onpointerdown' in _this._comboBoxWrapper)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent();
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["warnMutuallyExclusive"])(COMPONENT_NAME, props, {
            defaultSelectedKey: 'selectedKey',
            text: 'defaultSelectedKey',
            selectedKey: 'value',
            dropdownWidth: 'useComboBoxAsMenuWidth',
        });
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('ComboBox');
        var selectedKeys = _this._buildDefaultSelectedKeys(props.defaultSelectedKey, props.selectedKey);
        _this._isScrollIdle = true;
        _this._processingTouch = false;
        _this._gotMouseMove = false;
        _this._processingClearPendingInfo = false;
        var initialSelectedIndices = _this._getSelectedIndices(props.options, selectedKeys);
        _this.state = {
            isOpen: false,
            selectedIndices: initialSelectedIndices,
            focusState: 'none',
            suggestedDisplayValue: undefined,
            currentOptions: _this.props.options,
            currentPendingValueValidIndex: -1,
            currentPendingValue: undefined,
            currentPendingValueValidIndexOnHover: HoverStatus.default,
        };
        return _this;
    }
    Object.defineProperty(ComboBox.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            var _a = this.state, currentOptions = _a.currentOptions, selectedIndices = _a.selectedIndices;
            return Object(_utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["getAllSelectedOptions"])(currentOptions, selectedIndices);
        },
        enumerable: true,
        configurable: true
    });
    ComboBox.prototype.componentDidMount = function () {
        if (this._comboBoxWrapper.current && !this.props.disabled) {
            // hook up resolving the options if needed on focus
            this._events.on(this._comboBoxWrapper.current, 'focus', this._onResolveOptions, true);
            if ('onpointerdown' in this._comboBoxWrapper.current) {
                // For ComboBoxes, touching anywhere in the combo box should drop the dropdown, including the input element.
                // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
                // does not support Pointer events yet.
                this._events.on(this._comboBoxWrapper.current, 'pointerdown', this._onPointerDown, true);
            }
        }
    };
    ComboBox.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        // Update the selectedIndex and currentOptions state if
        // the selectedKey, value, or options have changed
        if (newProps.selectedKey !== this.props.selectedKey ||
            newProps.text !== this.props.text ||
            newProps.options !== this.props.options) {
            var selectedKeys = this._buildSelectedKeys(newProps.selectedKey);
            var indices = this._getSelectedIndices(newProps.options, selectedKeys);
            this.setState({
                selectedIndices: indices,
                currentOptions: newProps.options,
            });
            if (newProps.selectedKey === null) {
                this.setState({
                    suggestedDisplayValue: undefined,
                });
            }
        }
    };
    ComboBox.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var _a = this.props, allowFreeform = _a.allowFreeform, text = _a.text, onMenuOpen = _a.onMenuOpen, onMenuDismissed = _a.onMenuDismissed;
        var _b = this.state, isOpen = _b.isOpen, selectedIndices = _b.selectedIndices, currentPendingValueValidIndex = _b.currentPendingValueValidIndex;
        // If we are newly open or are open and the pending valid index changed,
        // make sure the currently selected/pending option is scrolled into view
        if (isOpen && (!prevState.isOpen || prevState.currentPendingValueValidIndex !== currentPendingValueValidIndex)) {
            // Need this timeout so that the selectedElement ref is correctly updated
            this._async.setTimeout(function () { return _this._scrollIntoView(); }, 0);
        }
        // if an action is taken that put focus in the ComboBox
        // and If we are open or we are just closed, shouldFocusAfterClose is set,
        // but we are not the activeElement set focus on the input
        if (this._hasFocus() &&
            (isOpen ||
                (prevState.isOpen &&
                    !isOpen &&
                    this._focusInputAfterClose &&
                    this._autofill.current &&
                    document.activeElement !== this._autofill.current.inputElement))) {
            this.focus(undefined /*shouldOpenOnFocus*/, true /*useFocusAsync*/);
        }
        // If we should focusAfterClose AND
        //   just opened/closed the menu OR
        //   are focused AND
        //     updated the selectedIndex with the menu closed OR
        //     are not allowing freeform OR
        //     the value changed
        // we need to set selection
        if (this._focusInputAfterClose &&
            ((prevState.isOpen && !isOpen) ||
                (this._hasFocus() &&
                    ((!isOpen &&
                        !this.props.multiSelect &&
                        prevState.selectedIndices &&
                        selectedIndices &&
                        prevState.selectedIndices[0] !== selectedIndices[0]) ||
                        !allowFreeform ||
                        text !== prevProps.text)))) {
            this._onFocus();
        }
        this._notifyPendingValueChanged(prevState);
        if (isOpen && !prevState.isOpen && onMenuOpen) {
            onMenuOpen();
        }
        if (!isOpen && prevState.isOpen && onMenuDismissed) {
            onMenuDismissed();
        }
    };
    ComboBox.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    // Primary Render
    ComboBox.prototype.render = function () {
        var _this = this;
        var id = this._id;
        var errorMessageId = id + '-error';
        var _a = this.props, className = _a.className, disabled = _a.disabled, required = _a.required, errorMessage = _a.errorMessage, _b = _a.onRenderContainer, onRenderContainer = _b === void 0 ? this._onRenderContainer : _b, _c = _a.onRenderLabel, onRenderLabel = _c === void 0 ? this._onRenderLabel : _c, _d = _a.onRenderList, onRenderList = _d === void 0 ? this._onRenderList : _d, _e = _a.onRenderItem, onRenderItem = _e === void 0 ? this._onRenderItem : _e, _f = _a.onRenderOption, onRenderOption = _f === void 0 ? this._onRenderOptionContent : _f, allowFreeform = _a.allowFreeform, customStyles = _a.styles, theme = _a.theme, keytipProps = _a.keytipProps, persistMenu = _a.persistMenu, multiSelect = _a.multiSelect;
        var _g = this.state, isOpen = _g.isOpen, suggestedDisplayValue = _g.suggestedDisplayValue;
        this._currentVisibleValue = this._getVisibleValue();
        // Single select is already accessible since the whole text is selected
        // when focus enters the input. Since multiselect appears to clear the input
        // it needs special accessible text
        var multiselectAccessibleText = multiSelect
            ? this._getMultiselectDisplayString(this.state.selectedIndices, this.state.currentOptions, suggestedDisplayValue)
            : undefined;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["divProperties"], [
            'onChange',
            'value',
        ]);
        var hasErrorMessage = errorMessage && errorMessage.length > 0 ? true : false;
        this._classNames = this.props.getClassNames
            ? this.props.getClassNames(theme, !!isOpen, !!disabled, !!required, !!this._hasFocus(), !!allowFreeform, !!hasErrorMessage, className)
            : Object(_ComboBox_classNames__WEBPACK_IMPORTED_MODULE_9__["getClassNames"])(Object(_ComboBox_styles__WEBPACK_IMPORTED_MODULE_8__["getStyles"])(theme, customStyles), className, !!isOpen, !!disabled, !!required, !!this._hasFocus(), !!allowFreeform, !!hasErrorMessage);
        var comboBoxWrapper = keytipProps ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_10__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) {
            return _this._renderComboBoxWrapper(multiselectAccessibleText, errorMessageId, keytipAttributes);
        })) : (this._renderComboBoxWrapper(multiselectAccessibleText, errorMessageId));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, divProps, { ref: this._root, className: this._classNames.container }),
            onRenderLabel({ props: this.props, multiselectAccessibleText: multiselectAccessibleText }, this._onRenderLabel),
            comboBoxWrapper,
            (persistMenu || isOpen) &&
                onRenderContainer(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { onRenderList: onRenderList,
                    onRenderItem: onRenderItem,
                    onRenderOption: onRenderOption, options: this.state.currentOptions.map(function (item, index) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index })); }), onDismiss: this._onDismiss }), this._onRenderContainer),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "region", "aria-live": "polite", "aria-atomic": "true", id: errorMessageId, className: hasErrorMessage ? this._classNames.errorMessage : '' }, errorMessage !== undefined ? errorMessage : '')));
    };
    ComboBox.prototype._getPendingString = function (currentPendingValue, currentOptions, index) {
        return currentPendingValue !== null && currentPendingValue !== undefined
            ? currentPendingValue
            : this._indexWithinBounds(currentOptions, index)
                ? currentOptions[index].text
                : '';
    };
    /**
     * Returns a string that concatenates all of the selected values
     * for multiselect combobox.
     */
    ComboBox.prototype._getMultiselectDisplayString = function (selectedIndices, currentOptions, suggestedDisplayValue) {
        var displayValues = [];
        for (var idx = 0; selectedIndices && idx < selectedIndices.length; idx++) {
            var index = selectedIndices[idx];
            displayValues.push(this._indexWithinBounds(currentOptions, index)
                ? currentOptions[index].text
                : this._normalizeToString(suggestedDisplayValue));
        }
        var _a = this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
        return displayValues.join(multiSelectDelimiter);
    };
    /**
     * Is the index within the bounds of the array?
     * @param options - options to check if the index is valid for
     * @param index - the index to check
     * @returns - true if the index is valid for the given options, false otherwise
     */
    ComboBox.prototype._indexWithinBounds = function (options, index) {
        if (!options) {
            return false;
        }
        return index >= 0 && index < options.length;
    };
    /**
     * Process the new input's new value when the comboBox
     * allows freeform entry
     * @param updatedValue - the input's newly changed value
     */
    ComboBox.prototype._processInputChangeWithFreeform = function (updatedValue) {
        var _this = this;
        var currentOptions = this.state.currentOptions;
        var newCurrentPendingValueValidIndex = -1;
        // if the new value is empty, see if we have an exact match
        // and then set the pending info
        if (updatedValue === '') {
            var items = currentOptions
                .map(function (item, index) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index });
            })
                .filter(function (option) {
                return option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header &&
                    option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider;
            })
                .filter(function (option) { return _this._getPreviewText(option) === updatedValue; });
            // if we found a match remember the index
            if (items.length === 1) {
                newCurrentPendingValueValidIndex = items[0].index;
            }
            this._setPendingInfo(updatedValue, newCurrentPendingValueValidIndex, updatedValue);
            return;
        }
        // Remember the original value and then,
        // make the value lowercase for comparison
        var originalUpdatedValue = updatedValue;
        updatedValue = updatedValue.toLocaleLowerCase();
        var newSuggestedDisplayValue = '';
        // If autoComplete is on, attempt to find a match from the available options
        if (this.props.autoComplete === 'on') {
            // If autoComplete is on, attempt to find a match where the text of an option starts with the updated value
            var items = currentOptions
                .map(function (item, index) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index });
            })
                .filter(function (option) {
                return option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header &&
                    option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider;
            })
                .filter(function (option) {
                return _this._getPreviewText(option)
                    .toLocaleLowerCase()
                    .indexOf(updatedValue) === 0;
            });
            if (items.length > 0) {
                // use ariaLabel as the value when the option is set
                var text = this._getPreviewText(items[0]);
                // If the user typed out the complete option text, we don't need any suggested display text anymore
                newSuggestedDisplayValue = text.toLocaleLowerCase() !== updatedValue ? text : '';
                // remember the index of the match we found
                newCurrentPendingValueValidIndex = items[0].index;
            }
        }
        else {
            // If autoComplete is off, attempt to find a match only when the value is exactly equal to the text of an option
            var items = currentOptions
                .map(function (item, index) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: index });
            })
                .filter(function (option) {
                return option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header &&
                    option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider;
            })
                .filter(function (option) { return _this._getPreviewText(option).toLocaleLowerCase() === updatedValue; });
            // if we found a match remember the index
            if (items.length === 1) {
                newCurrentPendingValueValidIndex = items[0].index;
            }
        }
        // Set the updated state
        this._setPendingInfo(originalUpdatedValue, newCurrentPendingValueValidIndex, newSuggestedDisplayValue);
    };
    /**
     * Process the new input's new value when the comboBox
     * does not allow freeform entry
     * @param updatedValue - the input's newly changed value
     */
    ComboBox.prototype._processInputChangeWithoutFreeform = function (updatedValue) {
        var _this = this;
        var _a = this.state, currentPendingValue = _a.currentPendingValue, currentPendingValueValidIndex = _a.currentPendingValueValidIndex, currentOptions = _a.currentOptions;
        if (this.props.autoComplete === 'on') {
            // If autoComplete is on while allow freeform is off,
            // we will remember the keypresses and build up a string to attempt to match
            // as long as characters are typed within a the timeout span of each other,
            // otherwise we will clear the string and start building a new one on the next keypress.
            // Also, only do this processing if we have a non-empty value
            if (updatedValue !== '') {
                // If we have a pending autocomplete clearing task,
                // we know that the user is typing with keypresses happening
                // within the timeout of each other so remove the clearing task
                // and continue building the pending value with the udpated value
                if (this._lastReadOnlyAutoCompleteChangeTimeoutId !== undefined) {
                    this._async.clearTimeout(this._lastReadOnlyAutoCompleteChangeTimeoutId);
                    this._lastReadOnlyAutoCompleteChangeTimeoutId = undefined;
                    updatedValue = this._normalizeToString(currentPendingValue) + updatedValue;
                }
                var originalUpdatedValue = updatedValue;
                updatedValue = updatedValue.toLocaleLowerCase();
                // If autoComplete is on, attempt to find a match where the text of an option starts with the updated value
                var items = currentOptions
                    .map(function (item, i) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { index: i });
                })
                    .filter(function (option) {
                    return option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header &&
                        option.itemType !== _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider;
                })
                    .filter(function (option) { return option.text.toLocaleLowerCase().indexOf(updatedValue) === 0; });
                // If we found a match, udpdate the state
                if (items.length > 0) {
                    this._setPendingInfo(originalUpdatedValue, items[0].index, this._getPreviewText(items[0]));
                }
                // Schedule a timeout to clear the pending value after the timeout span
                this._lastReadOnlyAutoCompleteChangeTimeoutId = this._async.setTimeout(function () {
                    _this._lastReadOnlyAutoCompleteChangeTimeoutId = undefined;
                }, ReadOnlyPendingAutoCompleteTimeout);
                return;
            }
        }
        // If we get here, either autoComplete is on or we did not find a match with autoComplete on.
        // Remember we are not allowing freeform, so at this point, if we have a pending valid value index
        // use that; otherwise use the selectedIndex
        var index = currentPendingValueValidIndex >= 0 ? currentPendingValueValidIndex : this._getFirstSelectedIndex();
        // Since we are not allowing freeform, we need to
        // set both the pending and suggested values/index
        // to allow us to select all content in the input to
        // give the illusion that we are readonly (e.g. freeform off)
        this._setPendingInfoFromIndex(index);
    };
    ComboBox.prototype._getFirstSelectedIndex = function () {
        return this.state.selectedIndices && this.state.selectedIndices.length > 0 ? this.state.selectedIndices[0] : -1;
    };
    /**
     * Walk along the options starting at the index, stepping by the delta (positive or negative)
     * looking for the next valid selectable index (e.g. skipping headings and dividers)
     * @param index - the index to get the next selectable index from
     * @param delta - optional delta to step by when finding the next index, defaults to 0
     * @returns - the next valid selectable index. If the new index is outside of the bounds,
     * it will snap to the edge of the options array. If delta == 0 and the given index is not selectable
     */
    ComboBox.prototype._getNextSelectableIndex = function (index, searchDirection) {
        var currentOptions = this.state.currentOptions;
        var newIndex = index + searchDirection;
        newIndex = Math.max(0, Math.min(currentOptions.length - 1, newIndex));
        if (!this._indexWithinBounds(currentOptions, newIndex)) {
            return -1;
        }
        var option = currentOptions[newIndex];
        if (option.itemType === _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Header ||
            option.itemType === _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_12__["SelectableOptionMenuItemType"].Divider ||
            option.hidden === true) {
            // Should we continue looking for an index to select?
            if (searchDirection !== SearchDirection.none &&
                ((newIndex > 0 && searchDirection < SearchDirection.none) ||
                    (newIndex >= 0 && newIndex < currentOptions.length && searchDirection > SearchDirection.none))) {
                newIndex = this._getNextSelectableIndex(newIndex, searchDirection);
            }
            else {
                // If we cannot perform a useful search just return the index we were given
                return index;
            }
        }
        // We have the next valid selectable index, return it
        return newIndex;
    };
    /**
     * Set the selected index. Note, this is
     * the "real" selected index, not the pending selected index
     * @param index - the index to set (or the index to set from if a search direction is provided)
     * @param searchDirection - the direction to search along the options from the given index
     */
    ComboBox.prototype._setSelectedIndex = function (index, submitPendingValueEvent, searchDirection) {
        var _this = this;
        if (searchDirection === void 0) { searchDirection = SearchDirection.none; }
        var _a = this.props, onChange = _a.onChange, onPendingValueChanged = _a.onPendingValueChanged;
        var currentOptions = this.state.currentOptions;
        var initialIndices = this.state.selectedIndices;
        // Clone selectedIndices so we don't mutate state
        var selectedIndices = initialIndices ? initialIndices.slice() : [];
        // Find the next selectable index, if searchDirection is none
        // we will get our starting index back
        index = this._getNextSelectableIndex(index, searchDirection);
        if (!this._indexWithinBounds(currentOptions, index)) {
            return;
        }
        // Are we at a new index? If so, update the state, otherwise
        // there is nothing to do
        if (this.props.multiSelect ||
            selectedIndices.length < 1 ||
            (selectedIndices.length === 1 && selectedIndices[0] !== index)) {
            var option_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentOptions[index]);
            // if option doesn't existing, or option is disabled, we noop
            if (!option_1 || option_1.disabled) {
                return;
            }
            if (this.props.multiSelect) {
                // Setting the initial state of option.selected in Multi-select combobox by checking the
                // selectedIndices array and overriding the undefined issue
                option_1.selected = option_1.selected !== undefined ? !option_1.selected : selectedIndices.indexOf(index) < 0;
                if (option_1.selected && selectedIndices.indexOf(index) < 0) {
                    selectedIndices.push(index);
                }
                else if (!option_1.selected && selectedIndices.indexOf(index) >= 0) {
                    selectedIndices = selectedIndices.filter(function (value) { return value !== index; });
                }
            }
            else {
                selectedIndices[0] = index;
            }
            submitPendingValueEvent.persist();
            // Only setstate if combobox is uncontrolled.
            if (this.props.selectedKey || this.props.selectedKey === null) {
                // If ComboBox value is changed, revert preview first
                if (this._hasPendingValue && onPendingValueChanged) {
                    onPendingValueChanged();
                    this._hasPendingValue = false;
                }
                if (onChange) {
                    onChange(submitPendingValueEvent, option_1, index, undefined);
                }
            }
            else {
                // Update current options
                var changedOptions = currentOptions.slice();
                changedOptions[index] = option_1;
                // Call onChange after state is updated
                this.setState({
                    selectedIndices: selectedIndices,
                    currentOptions: changedOptions,
                }, function () {
                    // If ComboBox value is changed, revert preview first
                    if (_this._hasPendingValue && onPendingValueChanged) {
                        onPendingValueChanged();
                        _this._hasPendingValue = false;
                    }
                    if (onChange) {
                        onChange(submitPendingValueEvent, option_1, index, undefined);
                    }
                });
            }
        }
        if (this.props.multiSelect && this.state.isOpen) {
            return;
        }
        // clear all of the pending info
        this._clearPendingInfo();
    };
    /**
     * Submit a pending value if there is one
     */
    ComboBox.prototype._submitPendingValue = function (submitPendingValueEvent) {
        var _a = this.props, onChange = _a.onChange, allowFreeform = _a.allowFreeform, autoComplete = _a.autoComplete;
        var _b = this.state, currentPendingValue = _b.currentPendingValue, currentPendingValueValidIndex = _b.currentPendingValueValidIndex, currentOptions = _b.currentOptions, currentPendingValueValidIndexOnHover = _b.currentPendingValueValidIndexOnHover;
        var selectedIndices = this.state.selectedIndices;
        // Do not submit any pending value if we
        // have already initiated clearing the pending info
        if (this._processingClearPendingInfo) {
            return;
        }
        // If we allow freeform we need to handle that
        if (allowFreeform) {
            // if currentPendingValue is null or undefined the user did not submit anything
            // (not even empty because we would have stored that as the pending value)
            if (currentPendingValue === null || currentPendingValue === undefined) {
                // if a user did not type anything they may just hovered over an item
                if (currentPendingValueValidIndexOnHover >= 0) {
                    this._setSelectedIndex(currentPendingValueValidIndexOnHover, submitPendingValueEvent);
                    this._clearPendingInfo();
                }
                return;
            }
            // Check to see if the user typed an exact match
            if (this._indexWithinBounds(currentOptions, currentPendingValueValidIndex)) {
                var pendingOptionText = this._getPreviewText(currentOptions[currentPendingValueValidIndex]).toLocaleLowerCase();
                // By exact match, that means: our pending value is the same as the pending option text OR
                // the pending option starts with the pending value and we have an "autoComplete" selection
                // where the total length is equal to pending option length OR
                // the live value in the underlying input matches the pending option; update the state
                if (currentPendingValue.toLocaleLowerCase() === pendingOptionText ||
                    (autoComplete &&
                        pendingOptionText.indexOf(currentPendingValue.toLocaleLowerCase()) === 0 &&
                        this._autofill.current &&
                        this._autofill.current.isValueSelected &&
                        currentPendingValue.length +
                            (this._autofill.current.selectionEnd - this._autofill.current.selectionStart) ===
                            pendingOptionText.length) ||
                    (this._autofill.current &&
                        this._autofill.current.inputElement &&
                        this._autofill.current.inputElement.value.toLocaleLowerCase() === pendingOptionText)) {
                    this._setSelectedIndex(currentPendingValueValidIndex, submitPendingValueEvent);
                    if (this.props.multiSelect && this.state.isOpen) {
                        return;
                    }
                    this._clearPendingInfo();
                    return;
                }
            }
            if (onChange) {
                if (onChange) {
                    // trigger onChange to clear value
                    onChange(submitPendingValueEvent, undefined, undefined, currentPendingValue);
                }
            }
            else {
                // If we are not controlled, create a new selected option
                var newOption = {
                    key: currentPendingValue || Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])(),
                    text: this._normalizeToString(currentPendingValue),
                };
                // If it's multiselect, set selected state to true
                if (this.props.multiSelect) {
                    newOption.selected = true;
                }
                var newOptions = currentOptions.concat([newOption]);
                if (selectedIndices) {
                    if (!this.props.multiSelect) {
                        selectedIndices = [];
                    }
                    selectedIndices.push(newOptions.length - 1);
                }
                this.setState({
                    currentOptions: newOptions,
                    selectedIndices: selectedIndices,
                });
            }
        }
        else if (currentPendingValueValidIndex >= 0) {
            // Since we are not allowing freeform, we must have a matching
            // to be able to update state
            this._setSelectedIndex(currentPendingValueValidIndex, submitPendingValueEvent);
        }
        else if (currentPendingValueValidIndexOnHover >= 0) {
            // If all else failed and we were hovering over an item, select it
            this._setSelectedIndex(currentPendingValueValidIndexOnHover, submitPendingValueEvent);
        }
        // Finally, clear the pending info
        this._clearPendingInfo();
    };
    ComboBox.prototype._onCalloutLayerMounted = function () {
        // In persistMenu mode _onLayerMounted is only called once for the lifetime
        // of the component. Any functionality required for callout "on mount" can
        // go here so that we can also call it again during callout dismissal to reset
        // object state.
        this._gotMouseMove = false;
    };
    // Render separator
    ComboBox.prototype._renderSeparator = function (item) {
        var index = item.index, key = item.key;
        if (index && index > 0) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "separator", key: key, className: this._classNames.divider });
        }
        return null;
    };
    ComboBox.prototype._renderHeader = function (item) {
        var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOptionContent : _a;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: item.key, className: this._classNames.header }, onRenderOption(item, this._onRenderOptionContent)));
    };
    /**
     * If we are coming from a mouseOut:
     * there is no visible selected option.
     *
     * Else if We are hovering over an item:
     * that gets the selected look.
     *
     * Else:
     * Use the current valid pending index if it exists OR
     * we do not have a valid index and we currently have a pending input value,
     * otherwise use the selected index
     * */
    ComboBox.prototype._isOptionSelected = function (index) {
        var currentPendingValueValidIndexOnHover = this.state.currentPendingValueValidIndexOnHover;
        // If the hover state is set to clearAll, don't show a selected index.
        // Note, this happens when the user moused out of the menu items
        if (currentPendingValueValidIndexOnHover === HoverStatus.clearAll) {
            return false;
        }
        return this._getPendingSelectedIndex(true /* includePendingValue */) === index ? true : false;
    };
    ComboBox.prototype._isOptionChecked = function (index) {
        if (this.props.multiSelect && index !== undefined && this.state.selectedIndices) {
            var idxOfSelectedIndex = -1;
            idxOfSelectedIndex = this.state.selectedIndices.indexOf(index);
            return idxOfSelectedIndex >= 0;
        }
        return false;
    };
    /**
     * Gets the pending selected index taking into account hover, valueValidIndex, and selectedIndex
     * @param includeCurrentPendingValue - Should we include the currentPendingValue when
     * finding the index
     */
    ComboBox.prototype._getPendingSelectedIndex = function (includeCurrentPendingValue) {
        var _a = this.state, currentPendingValueValidIndexOnHover = _a.currentPendingValueValidIndexOnHover, currentPendingValueValidIndex = _a.currentPendingValueValidIndex, currentPendingValue = _a.currentPendingValue;
        return currentPendingValueValidIndexOnHover >= 0
            ? currentPendingValueValidIndexOnHover
            : currentPendingValueValidIndex >= 0 ||
                (includeCurrentPendingValue && currentPendingValue !== null && currentPendingValue !== undefined)
                ? currentPendingValueValidIndex
                : this.props.multiSelect
                    ? 0
                    : this._getFirstSelectedIndex();
    };
    /**
     * Scroll the selected element into view
     */
    ComboBox.prototype._scrollIntoView = function () {
        var _a = this.props, onScrollToItem = _a.onScrollToItem, scrollSelectedToTop = _a.scrollSelectedToTop;
        var _b = this.state, currentPendingValueValidIndex = _b.currentPendingValueValidIndex, currentPendingValue = _b.currentPendingValue;
        if (onScrollToItem) {
            // Use the custom scroll handler
            onScrollToItem(currentPendingValueValidIndex >= 0 || currentPendingValue !== ''
                ? currentPendingValueValidIndex
                : this._getFirstSelectedIndex());
        }
        else if (this._selectedElement.current && this._selectedElement.current.offsetParent) {
            // We are using refs, scroll the ref into view
            if (scrollSelectedToTop) {
                this._selectedElement.current.offsetParent.scrollIntoView(true);
            }
            else {
                var alignToTop = true;
                if (this._comboBoxMenu.current && this._comboBoxMenu.current.offsetParent) {
                    var scrollableParentRect = this._comboBoxMenu.current.offsetParent.getBoundingClientRect();
                    var selectedElementRect = this._selectedElement.current.offsetParent.getBoundingClientRect();
                    // If we are completely in view then we do not need to scroll
                    if (scrollableParentRect.top <= selectedElementRect.top &&
                        scrollableParentRect.top + scrollableParentRect.height >=
                            selectedElementRect.top + selectedElementRect.height) {
                        return;
                    }
                    // If we are lower than the scrollable parent viewport then we should align to the bottom
                    if (scrollableParentRect.top + scrollableParentRect.height <=
                        selectedElementRect.top + selectedElementRect.height) {
                        alignToTop = false;
                    }
                }
                this._selectedElement.current.offsetParent.scrollIntoView(alignToTop);
            }
        }
    };
    /**
     * Click handler for the menu items
     * to select the item and also close the menu
     * @param index - the index of the item that was clicked
     */
    ComboBox.prototype._onItemClick = function (item) {
        var _this = this;
        var onItemClick = this.props.onItemClick;
        var index = item.index;
        return function (ev) {
            // only close the callout when it's in single-select mode
            if (!_this.props.multiSelect) {
                // ensure that focus returns to the input, not the button
                _this._autofill.current && _this._autofill.current.focus();
                _this.setState({
                    isOpen: false,
                });
            }
            // Continue processing the click only after
            // performing menu close / control focus(inner working)
            onItemClick && onItemClick(ev, item, index);
            _this._setSelectedIndex(index, ev);
        };
    };
    /**
     * Get the indices of the options that are marked as selected
     * @param options - the comboBox options
     * @param selectedKeys - the known selected keys to find
     * @returns - an array of the indices of the selected options, empty array if nothing is selected
     */
    ComboBox.prototype._getSelectedIndices = function (options, selectedKeys) {
        if (!options || !selectedKeys) {
            return [];
        }
        var selectedIndices = {};
        options.forEach(function (option, index) {
            if (option.selected) {
                selectedIndices[index] = true;
            }
        });
        var _loop_1 = function (selectedKey) {
            var index = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(options, function (option) { return option.key === selectedKey; });
            if (index > -1) {
                selectedIndices[index] = true;
            }
        };
        for (var _i = 0, selectedKeys_1 = selectedKeys; _i < selectedKeys_1.length; _i++) {
            var selectedKey = selectedKeys_1[_i];
            _loop_1(selectedKey);
        }
        return Object.keys(selectedIndices)
            .map(Number)
            .sort();
    };
    /**
     * Reset the selected index by clearing the
     * input (of any pending text), clearing the pending state,
     * and setting the suggested display value to the last
     * selected state text
     */
    ComboBox.prototype._resetSelectedIndex = function () {
        var currentOptions = this.state.currentOptions;
        this._clearPendingInfo();
        var selectedIndex = this._getFirstSelectedIndex();
        if (selectedIndex > 0 && selectedIndex < currentOptions.length) {
            this.setState({
                suggestedDisplayValue: currentOptions[selectedIndex].text,
            });
        }
        else if (this.props.text) {
            // If we had a value initially, restore it
            this.setState({
                suggestedDisplayValue: this.props.text,
            });
        }
    };
    /**
     * Clears the pending info state
     */
    ComboBox.prototype._clearPendingInfo = function () {
        this._processingClearPendingInfo = true;
        this.setState({
            currentPendingValue: undefined,
            currentPendingValueValidIndex: -1,
            suggestedDisplayValue: undefined,
            currentPendingValueValidIndexOnHover: HoverStatus.default,
        }, this._onAfterClearPendingInfo);
    };
    /**
     * Set the pending info
     * @param currentPendingValue - new pending value to set
     * @param currentPendingValueValidIndex - new pending value index to set
     * @param suggestedDisplayValue - new suggest display value to set
     */
    ComboBox.prototype._setPendingInfo = function (currentPendingValue, currentPendingValueValidIndex, suggestedDisplayValue) {
        if (currentPendingValueValidIndex === void 0) { currentPendingValueValidIndex = -1; }
        if (this._processingClearPendingInfo) {
            return;
        }
        this.setState({
            currentPendingValue: this._normalizeToString(currentPendingValue),
            currentPendingValueValidIndex: currentPendingValueValidIndex,
            suggestedDisplayValue: suggestedDisplayValue,
            currentPendingValueValidIndexOnHover: HoverStatus.default,
        });
    };
    /**
     * Set the pending info from the given index
     * @param index - the index to set the pending info from
     */
    ComboBox.prototype._setPendingInfoFromIndex = function (index) {
        var currentOptions = this.state.currentOptions;
        if (index >= 0 && index < currentOptions.length) {
            var option = currentOptions[index];
            this._setPendingInfo(this._getPreviewText(option), index, this._getPreviewText(option));
        }
        else {
            this._clearPendingInfo();
        }
    };
    /**
     * Sets the pending info for the comboBox
     * @param index - the index to search from
     * @param searchDirection - the direction to search
     */
    ComboBox.prototype._setPendingInfoFromIndexAndDirection = function (index, searchDirection) {
        var currentOptions = this.state.currentOptions;
        // update index to allow content to wrap
        if (searchDirection === SearchDirection.forward && index >= currentOptions.length - 1) {
            index = -1;
        }
        else if (searchDirection === SearchDirection.backward && index <= 0) {
            index = currentOptions.length;
        }
        // get the next "valid" index
        var indexUpdate = this._getNextSelectableIndex(index, searchDirection);
        // if the two indicies are equal we didn't move and
        // we should attempt to get  get the first/last "valid" index to use
        // (Note, this takes care of the potential cases where the first/last
        // item is not focusable), otherwise use the updated index
        if (index === indexUpdate) {
            if (searchDirection === SearchDirection.forward) {
                index = this._getNextSelectableIndex(-1, searchDirection);
            }
            else if (searchDirection === SearchDirection.backward) {
                index = this._getNextSelectableIndex(currentOptions.length, searchDirection);
            }
        }
        else {
            index = indexUpdate;
        }
        if (this._indexWithinBounds(currentOptions, index)) {
            this._setPendingInfoFromIndex(index);
        }
    };
    ComboBox.prototype._notifyPendingValueChanged = function (prevState) {
        var onPendingValueChanged = this.props.onPendingValueChanged;
        if (!onPendingValueChanged) {
            return;
        }
        var _a = this.state, currentPendingValue = _a.currentPendingValue, currentOptions = _a.currentOptions, currentPendingValueValidIndex = _a.currentPendingValueValidIndex, currentPendingValueValidIndexOnHover = _a.currentPendingValueValidIndexOnHover;
        var newPendingIndex = undefined;
        var newPendingValue = undefined;
        if (currentPendingValueValidIndexOnHover !== prevState.currentPendingValueValidIndexOnHover &&
            this._indexWithinBounds(currentOptions, currentPendingValueValidIndexOnHover)) {
            // Set new pending index if hover index was changed
            newPendingIndex = currentPendingValueValidIndexOnHover;
        }
        else if (currentPendingValueValidIndex !== prevState.currentPendingValueValidIndex &&
            this._indexWithinBounds(currentOptions, currentPendingValueValidIndex)) {
            // Set new pending index if currentPendingValueValidIndex was changed
            newPendingIndex = currentPendingValueValidIndex;
        }
        else if (currentPendingValue !== prevState.currentPendingValue) {
            // Set pendingValue in the case it was changed and no index was changed
            newPendingValue = currentPendingValue;
        }
        // Notify when there is a new pending index/value. Also, if there is a pending value, it needs to send undefined.
        if (newPendingIndex !== undefined || newPendingValue !== undefined || this._hasPendingValue) {
            onPendingValueChanged(newPendingIndex !== undefined ? currentOptions[newPendingIndex] : undefined, newPendingIndex, newPendingValue);
            this._hasPendingValue = newPendingIndex !== undefined || newPendingValue !== undefined;
        }
    };
    /**
     * Sets the isOpen state and updates focusInputAfterClose
     */
    ComboBox.prototype._setOpenStateAndFocusOnClose = function (isOpen, focusInputAfterClose) {
        this._focusInputAfterClose = focusInputAfterClose;
        this.setState({
            isOpen: isOpen,
        });
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    ComboBox.prototype._isAltOrMeta = function (ev) {
        return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].alt || ev.key === 'Meta';
    };
    ComboBox.prototype._onOptionMouseEnter = function (index) {
        if (this._shouldIgnoreMouseEvent()) {
            return;
        }
        this.setState({
            currentPendingValueValidIndexOnHover: index,
        });
    };
    ComboBox.prototype._onOptionMouseMove = function (index) {
        this._gotMouseMove = true;
        if (!this._isScrollIdle || this.state.currentPendingValueValidIndexOnHover === index) {
            return;
        }
        this.setState({
            currentPendingValueValidIndexOnHover: index,
        });
    };
    ComboBox.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /**
     * Handle dismissing the menu and
     * eating the required key event when disabled
     * @param ev - the keyboard event that was fired
     */
    ComboBox.prototype._handleInputWhenDisabled = function (ev) {
        // If we are disabled, close the menu (if needed)
        // and eat all keystokes other than TAB or ESC
        if (this.props.disabled) {
            if (this.state.isOpen) {
                this.setState({ isOpen: false });
            }
            // When disabled stop propagation and prevent default
            // of the event unless we have a tab, escape, or function key
            if (ev !== null &&
                ev.which !== _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].tab &&
                ev.which !== _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].escape &&
                (ev.which < 112 /* F1 */ || ev.which > 123) /* F12 */) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        }
    };
    ComboBox.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeeout from a previous touch and pointer event
        // cancel that timeout so we can set a nwe one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    /**
     * Get the styles for the current option.
     * @param item - Item props for the current option
     */
    ComboBox.prototype._getCaretButtonStyles = function () {
        var customCaretDownButtonStyles = this.props.caretDownButtonStyles;
        return Object(_ComboBox_styles__WEBPACK_IMPORTED_MODULE_8__["getCaretDownButtonStyles"])(this.props.theme, customCaretDownButtonStyles);
    };
    /**
     * Get the styles for the current option.
     * @param item - Item props for the current option
     */
    ComboBox.prototype._getCurrentOptionStyles = function (item) {
        var customStylesForAllOptions = this.props.comboBoxOptionStyles;
        var customStylesForCurrentOption = item.styles;
        return Object(_ComboBox_styles__WEBPACK_IMPORTED_MODULE_8__["getOptionStyles"])(this.props.theme, customStylesForAllOptions, customStylesForCurrentOption, this._isPendingOption(item), item.hidden);
    };
    /**
     * Get the aria-activedescendant value for the comboxbox.
     * @returns the id of the current focused combo item, otherwise the id of the currently selected element,
     * null otherwise
     */
    ComboBox.prototype._getAriaActiveDescendantValue = function () {
        var descendantText = this.state.isOpen && this.state.selectedIndices && this.state.selectedIndices.length > 0
            ? this._id + '-list' + this.state.selectedIndices[0]
            : undefined;
        if (this.state.isOpen && this._hasFocus() && this.state.currentPendingValueValidIndex !== -1) {
            descendantText = this._id + '-list' + this.state.currentPendingValueValidIndex;
        }
        return descendantText;
    };
    /**
     * Get the aria autocomplete value for the Combobox
     * @returns 'inline' if auto-complete automatically dynamic, 'both' if we have a list of possible values to pick from
     * and can dynamically populate input, and 'none' if auto-complete is not enabled as we can't give user inputs.
     */
    ComboBox.prototype._getAriaAutoCompleteValue = function () {
        var autoComplete = !this.props.disabled && this.props.autoComplete === 'on';
        return autoComplete ? (this.props.allowFreeform ? 'inline' : 'both') : 'none';
    };
    ComboBox.prototype._isPendingOption = function (item) {
        return item && item.index === this.state.currentPendingValueValidIndex;
    };
    /**
     * Given default selected key(s) and selected key(s), return the selected keys(s).
     * When default selected key(s) are available, they take precedence and return them instead of selected key(s).
     *
     * @returns No matter what specific types the input parameters are, always return an array of
     *  either strings or numbers instead of premitive type.  This normlization makes caller's logic easier.
     */
    ComboBox.prototype._buildDefaultSelectedKeys = function (defaultSelectedKey, selectedKey) {
        var selectedKeys = this._buildSelectedKeys(defaultSelectedKey);
        if (selectedKeys.length) {
            return selectedKeys;
        }
        return this._buildSelectedKeys(selectedKey);
    };
    ComboBox.prototype._buildSelectedKeys = function (selectedKey) {
        if (selectedKey === undefined) {
            return [];
        }
        // need to cast here so typescript does not complain
        return (selectedKey instanceof Array ? selectedKey : [selectedKey]);
    };
    // For scenarios where the option's text prop contains embedded styles, we use the option's
    // ariaLabel value as the text in the input and for autocomplete matching. We know to use this
    // when the useAriaLabelAsText prop is set to true
    ComboBox.prototype._getPreviewText = function (item) {
        return item.useAriaLabelAsText && item.ariaLabel ? item.ariaLabel : item.text;
    };
    ComboBox.prototype._normalizeToString = function (value) {
        return value || '';
    };
    /**
     * Returns true if the component has some kind of focus. If it's either focusing or if it's focused
     */
    ComboBox.prototype._hasFocus = function () {
        return this.state.focusState !== 'none';
    };
    ComboBox.defaultProps = {
        options: [],
        allowFreeform: false,
        autoComplete: 'on',
        buttonIconProps: { iconName: 'ChevronDown' },
    };
    ComboBox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('ComboBox', ['theme', 'styles'], true)
    ], ComboBox);
    return ComboBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ComboBox.js.map

/***/ }),

/***/ "sQJ6":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/PeoplePicker.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSource, PrincipalType, EntityType, PresenceType, PeoplePickerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSource", function() { return _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerDataSource"]; });

/* harmony import */ var _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/peoplePicker/IPerson */ "cAy9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__["PrincipalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__["EntityType"]; });

/* harmony import */ var _dataSources_peoplePicker_IPresenceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSources/peoplePicker/IPresenceType */ "Fsp9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresenceType", function() { return _dataSources_peoplePicker_IPresenceType__WEBPACK_IMPORTED_MODULE_2__["PresenceType"]; });

/* harmony import */ var _providers_peoplePicker_odb_PeoplePickerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/peoplePicker/odb/PeoplePickerProvider */ "Xm1E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerProvider", function() { return _providers_peoplePicker_odb_PeoplePickerProvider__WEBPACK_IMPORTED_MODULE_3__["PeoplePickerProvider"]; });





//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "sVQZ":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ApiUrlHelper.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: ApiUrlBasic, ApiUrlHelperBasic, ApiUrl, ApiUrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelper", function() { return ApiUrlHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemUrlHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemUrlHelper */ "+1yd");
/* harmony import */ var _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiUrlHelperBasic */ "5qGQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiUrlBasic", function() { return _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlBasic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelperBasic", function() { return _ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlHelperBasic"]; });





/**
 * Implementation of an extendable SharePoint API URL. Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiUrl, _super);
    function ApiUrl(params, dependencies) {
        var _this = _super.call(this, {
            webAbsoluteUrl: dependencies.pageContext.webAbsoluteUrl,
            encodeWebAbsoluteUrl: dependencies.encodeWebAbsoluteUrl
        }) || this;
        _this._pageContext = dependencies.pageContext;
        _this._shouldEncodeWebAbsoluteUrl = dependencies.encodeWebAbsoluteUrl;
        _this._itemUrlHelper = dependencies.itemUrlHelper;
        return _this;
    }
    ApiUrl.prototype.webByUrl = function (options) {
        return this.webByItemUrl(this._itemUrlHelper.getUrlParts(options));
    };
    ApiUrl.prototype.webByItemUrl = function (urlParts) {
        var siteRelation = urlParts.siteRelation, isCrossDomain = urlParts.isCrossDomain, fullItemUrl = urlParts.fullItemUrl;
        var apiUrl = this;
        if (isCrossDomain || siteRelation === _ItemUrlHelper__WEBPACK_IMPORTED_MODULE_1__["SiteRelation"].crossSite) {
            apiUrl = apiUrl.method('SP.RemoteWeb', fullItemUrl);
        }
        return apiUrl.segment('web');
    };
    ApiUrl.prototype.listById = function (urlParts, listId) {
        return this.webByItemUrl(urlParts).segment('lists').method('GetById', listId);
    };
    ApiUrl.prototype.clone = function () {
        return new ApiUrl({
            webAbsoluteUrl: this._pageContext.webAbsoluteUrl
        }, {
            pageContext: this._pageContext,
            itemUrlHelper: this._itemUrlHelper,
            encodeWebAbsoluteUrl: this._shouldEncodeWebAbsoluteUrl
        });
    };
    return ApiUrl;
}(_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlBasic"]));

/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelper
 *
 * @example
 *  import ApiUrlHelper, { resourceKey as apiUrlHelperKey } from './ApiUrlHelper';
 *  let apiUrlHelper = this.resources.consume(apiUrlHelperKey);
 *
 *  let apiUrl = apiUrlHelper.build()
 *      .webByItemKey(item.key)
 *      .segment('Folders')
 *      .segment('Add');
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'AddFolder'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiUrlHelper, _super);
    function ApiUrlHelper(params, dependencies) {
        var _this = _super.call(this, {
            webAbsoluteUrl: dependencies && dependencies.pageContext ? dependencies.pageContext.webAbsoluteUrl : '',
            encodeWebAbsoluteUrl: dependencies.encodeWebAbsoluteUrl
        }) || this;
        var itemUrlHelper = dependencies.itemUrlHelper, pageContext = dependencies.pageContext, encodeWebAbsoluteUrl = dependencies.encodeWebAbsoluteUrl;
        var _a = dependencies.apiUrlType, apiUrlType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(apiUrlType, _super);
            function apiUrlType() {
                return _super.call(this, {}, {
                    itemUrlHelper: itemUrlHelper,
                    pageContext: pageContext,
                    encodeWebAbsoluteUrl: encodeWebAbsoluteUrl
                }) || this;
            }
            return apiUrlType;
        }(ApiUrl)) : _a;
        _this._apiUrlType = apiUrlType;
        return _this;
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrl}
     */
    ApiUrlHelper.prototype.build = function () {
        return new this._apiUrlType();
    };
    return ApiUrlHelper;
}(_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_2__["ApiUrlHelperBasic"]));

//# sourceMappingURL=ApiUrlHelper.js.map

/***/ }),

/***/ "surb":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return DetailsHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/dragdrop/index */ "pVr0");
/* harmony import */ var _components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DetailsList/DetailsColumn */ "Z9S6");
/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");














var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var NO_COLUMNS = [];
var DetailsHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsHeaderBase, _super);
    function DetailsHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._rootComponent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};
        _this._updateDroppingState = function (newValue, event) {
            if (_this._draggedColumnIndex >= 0 && event.type !== 'drop' && !newValue) {
                _this._resetDropHints();
            }
        };
        _this._onDragOver = function (item, event) {
            if (_this._draggedColumnIndex >= 0) {
                event.stopPropagation();
                _this._computeDropHintToBeShown(event.clientX);
            }
        };
        _this._onDrop = function (item, event) {
            // Safe to assume this is defined since we're handling a drop event
            var columnReorderProps = _this._getColumnReorderProps();
            // Target index will not get changed if draggeditem is after target item.
            if (_this._draggedColumnIndex >= 0 && event) {
                var targetIndex = _this._draggedColumnIndex > _this._currentDropHintIndex
                    ? _this._currentDropHintIndex
                    : _this._currentDropHintIndex - 1;
                var isValidDrop = _this._isValidCurrentDropHintIndex();
                event.stopPropagation();
                if (isValidDrop) {
                    _this._onDropIndexInfo.sourceIndex = _this._draggedColumnIndex;
                    _this._onDropIndexInfo.targetIndex = targetIndex;
                    if (columnReorderProps.onColumnDrop) {
                        var dragDropDetails = {
                            draggedIndex: _this._draggedColumnIndex,
                            targetIndex: targetIndex,
                        };
                        columnReorderProps.onColumnDrop(dragDropDetails);
                        /* eslint-disable deprecation/deprecation */
                    }
                    else if (columnReorderProps.handleColumnReorder) {
                        columnReorderProps.handleColumnReorder(_this._draggedColumnIndex, targetIndex);
                        /* eslint-enable deprecation/deprecation */
                    }
                }
            }
            _this._resetDropHints();
            _this._dropHintDetails = {};
            _this._draggedColumnIndex = -1;
        };
        _this._updateDragInfo = function (props, event) {
            // Safe to assume this is defined since we're handling a drag event
            var columnReorderProps = _this._getColumnReorderProps();
            var itemIndex = props.itemIndex;
            if (itemIndex >= 0) {
                // Column index is set based on the checkbox
                _this._draggedColumnIndex = _this._isCheckboxColumnHidden() ? itemIndex - 1 : itemIndex - 2;
                _this._getDropHintPositions();
                if (columnReorderProps.onColumnDragStart) {
                    columnReorderProps.onColumnDragStart(true);
                }
            }
            else if (event && _this._draggedColumnIndex >= 0) {
                _this._resetDropHints();
                _this._draggedColumnIndex = -1;
                _this._dropHintDetails = {};
                if (columnReorderProps.onColumnDragEnd) {
                    var columnDragEndLocation = _this._isEventOnHeader(event);
                    columnReorderProps.onColumnDragEnd({ dropLocation: columnDragEndLocation }, event);
                }
            }
        };
        _this._getDropHintPositions = function () {
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            // Safe to assume this is defined since we're handling a drag/drop event
            var columnReorderProps = _this._getColumnReorderProps();
            var prevX = 0;
            var prevMid = 0;
            var prevRef;
            var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
            var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
            for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
                if (_this._rootElement.current) {
                    var dropHintElement = _this._rootElement.current.querySelectorAll('#columnDropHint_' + i)[0];
                    if (dropHintElement) {
                        if (i === frozenColumnCountFromStart) {
                            prevX = dropHintElement.offsetLeft;
                            prevMid = dropHintElement.offsetLeft;
                            prevRef = dropHintElement;
                        }
                        else {
                            var newMid = (dropHintElement.offsetLeft + prevX) / 2;
                            _this._dropHintDetails[i - 1] = {
                                originX: prevX,
                                startX: prevMid,
                                endX: newMid,
                                dropHintElementRef: prevRef,
                            };
                            prevMid = newMid;
                            prevRef = dropHintElement;
                            prevX = dropHintElement.offsetLeft;
                            if (i === columns.length - frozenColumnCountFromEnd) {
                                _this._dropHintDetails[i] = {
                                    originX: prevX,
                                    startX: prevMid,
                                    endX: dropHintElement.offsetLeft,
                                    dropHintElementRef: prevRef,
                                };
                            }
                        }
                    }
                }
            }
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         */
        _this._computeDropHintToBeShown = function (clientX) {
            var isRtl = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme);
            if (_this._rootElement.current) {
                var clientRect = _this._rootElement.current.getBoundingClientRect();
                var headerOriginX = clientRect.left;
                var eventXRelativePosition = clientX - headerOriginX;
                var currentDropHintIndex = _this._currentDropHintIndex;
                if (_this._isValidCurrentDropHintIndex()) {
                    if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
                        return;
                    }
                }
                var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
                // Safe to assume this is defined since we're handling a drag/drop event
                var columnReorderProps = _this._getColumnReorderProps();
                var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
                var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
                var currentIndex = frozenColumnCountFromStart;
                var lastValidColumn = columns.length - frozenColumnCountFromEnd;
                var indexToUpdate = -1;
                if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
                    indexToUpdate = currentIndex;
                }
                else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
                    indexToUpdate = lastValidColumn;
                }
                else if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
                        indexToUpdate = currentDropHintIndex + 1;
                    }
                    else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
                        indexToUpdate = currentDropHintIndex - 1;
                    }
                }
                if (indexToUpdate === -1) {
                    var startIndex = frozenColumnCountFromStart;
                    var endIndex = lastValidColumn;
                    while (startIndex < endIndex) {
                        var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                        if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
                            indexToUpdate = middleIndex;
                            break;
                        }
                        else if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            endIndex = middleIndex;
                        }
                        else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            startIndex = middleIndex;
                        }
                    }
                }
                if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
                    if (_this._isValidCurrentDropHintIndex()) {
                        _this._resetDropHints();
                    }
                }
                else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                    _this._resetDropHints();
                    _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');
                    _this._currentDropHintIndex = indexToUpdate;
                }
            }
        };
        _this._renderColumnSizer = function (_a) {
            var _b;
            var columnIndex = _a.columnIndex;
            var _c = _this.props.columns, columns = _c === void 0 ? NO_COLUMNS : _c;
            var column = columns[columnIndex];
            var columnResizeDetails = _this.state.columnResizeDetails;
            var classNames = _this._classNames;
            return column.isResizable ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key + "_sizer", "aria-hidden": true, role: "button", "data-is-focusable": false, onClick: _stopPropagation, "data-sizer-index": columnIndex, onBlur: _this._onSizerBlur, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_b = {},
                    _b[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                    _b)), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex) })) : null;
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        /**
         * Called when the select all toggle is clicked.
         */
        _this._onSelectAllClicked = function () {
            var selection = _this.props.selection;
            if (selection) {
                selection.toggleAllSelected();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            var columnIndex = Number(columnIndexAttr);
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
                // Ignore anything except the primary button.
                return;
            }
            _this.setState({
                columnResizeDetails: {
                    columnIndex: columnIndex,
                    columnMinWidth: columns[columnIndex].calculatedWidth,
                    originX: ev.clientX,
                },
            });
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onRootMouseMove = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
                _this.setState({ isSizing: true });
            }
        };
        _this._onRootKeyDown = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            var _b = _this.props, _c = _b.columns, columns = _c === void 0 ? NO_COLUMNS : _c, onColumnResized = _b.onColumnResized;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            if (!columnIndexAttr || isSizing) {
                return;
            }
            var columnIndex = Number(columnIndexAttr);
            if (!columnResizeDetails) {
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: {
                            columnIndex: columnIndex,
                            columnMinWidth: columns[columnIndex].calculatedWidth,
                        },
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                var increment = void 0;
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: undefined,
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? 1 : -1;
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? -1 : 1;
                }
                if (increment) {
                    if (!ev.shiftKey) {
                        increment *= 10;
                    }
                    _this.setState({
                        columnResizeDetails: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnResizeDetails), { columnMinWidth: columnResizeDetails.columnMinWidth + increment }),
                    });
                    if (onColumnResized) {
                        onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * mouse move event handler in the header
         * it will set isSizing state to true when user clicked on the sizer and move the mouse.
         *
         * @param ev - mouse move event
         */
        _this._onSizerMouseMove = function (ev) {
            var 
            // use buttons property here since ev.button in some edge case is not upding well during the move.
            // but firefox doesn't support it, so we set the default value when it is not defined.
            buttons = ev.buttons;
            var _a = _this.props, onColumnIsSizingChanged = _a.onColumnIsSizingChanged, onColumnResized = _a.onColumnResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
                // cancel mouse down event and return early when the primary button is not pressed
                _this._onSizerMouseUp(ev);
                return;
            }
            if (ev.clientX !== columnResizeDetails.originX) {
                if (onColumnIsSizingChanged) {
                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
                }
            }
            if (onColumnResized) {
                var movement = ev.clientX - columnResizeDetails.originX;
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)) {
                    movement = -movement;
                }
                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
            }
        };
        _this._onSizerBlur = function (ev) {
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (columnResizeDetails) {
                _this.setState({
                    columnResizeDetails: undefined,
                    isSizing: false,
                });
            }
        };
        /**
         * mouse up event handler in the header
         * clear the resize related state.
         * This is to ensure we can catch double click event
         *
         * @param ev - mouse up event
         */
        _this._onSizerMouseUp = function (ev) {
            var _a = _this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
            var columnResizeDetails = _this.state.columnResizeDetails;
            _this.setState({
                columnResizeDetails: undefined,
                isSizing: false,
            });
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
            }
        };
        _this._onToggleCollapseAll = function () {
            var onToggleCollapseAll = _this.props.onToggleCollapseAll;
            var newCollapsed = !_this.state.isAllCollapsed;
            _this.setState({
                isAllCollapsed: newCollapsed,
            });
            if (onToggleCollapseAll) {
                onToggleCollapseAll(newCollapsed);
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            columnResizeDetails: undefined,
            isAllCollapsed: _this.props.isAllCollapsed,
            isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected(),
        };
        _this._onDropIndexInfo = {
            sourceIndex: -1,
            targetIndex: -1,
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('header');
        _this._currentDropHintIndex = -1;
        // The drag drop handler won't do any work until subscribe() is called,
        // so always set it up for convenience
        _this._dragDropHelper = new _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__["DragDropHelper"]({
            selection: {
                getSelection: function () {
                    return;
                },
            },
            minimumPixelsForDrag: _this.props.minimumPixelsForDrag,
        });
        return _this;
    }
    DetailsHeaderBase.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SELECTION_CHANGE"], this._onSelectionChanged);
        // this._rootElement.current will be null in tests using react-test-renderer
        if (this._rootElement.current) {
            // We need to use native on this to prevent MarqueeSelection from handling the event before us.
            this._events.on(this._rootElement.current, 'mousedown', this._onRootMouseDown);
            this._events.on(this._rootElement.current, 'keydown', this._onRootKeyDown);
            if (this._getColumnReorderProps()) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
    };
    DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
        if (this._getColumnReorderProps()) {
            if (!this._subscriptionObject && this._rootElement.current) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
        else if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
            var _a = prevProps.columns, previousColumns = _a === void 0 ? NO_COLUMNS : _a;
            var _b = this.props.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
                this._onDropIndexInfo = {
                    sourceIndex: -1,
                    targetIndex: -1,
                };
            }
        }
        if (this.props.isAllCollapsed !== prevProps.isAllCollapsed) {
            this.setState({ isAllCollapsed: this.props.isAllCollapsed });
        }
    };
    DetailsHeaderBase.prototype.componentWillUnmount = function () {
        if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        this._dragDropHelper.dispose();
        this._events.dispose();
    };
    DetailsHeaderBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, ariaLabel = _a.ariaLabel, ariaLabelForToggleAllGroupsButton = _a.ariaLabelForToggleAllGroupsButton, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, indentWidth = _a.indentWidth, onColumnClick = _a.onColumnClick, onColumnContextMenu = _a.onColumnContextMenu, _c = _a.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c, styles = _a.styles, selectionMode = _a.selectionMode, theme = _a.theme, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, groupNestingDepth = _a.groupNestingDepth, useFastIcons = _a.useFastIcons, checkboxVisibility = _a.checkboxVisibility, className = _a.className;
        var _d = this.state, isAllSelected = _d.isAllSelected, columnResizeDetails = _d.columnResizeDetails, isSizing = _d.isSizing, isAllCollapsed = _d.isAllCollapsed;
        var showCheckbox = selectAllVisibility !== _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].none;
        var isCheckboxHidden = selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden;
        var isCheckboxAlwaysVisible = checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always;
        var columnReorderProps = this._getColumnReorderProps();
        var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart
            ? columnReorderProps.frozenColumnCountFromStart
            : 0;
        var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd
            ? columnReorderProps.frozenColumnCountFromEnd
            : 0;
        this._classNames = getClassNames(styles, {
            theme: theme,
            isAllSelected: isAllSelected,
            isSelectAllHidden: selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden,
            isResizingColumn: !!columnResizeDetails && isSizing,
            isSizing: isSizing,
            isAllCollapsed: isAllCollapsed,
            isCheckboxHidden: isCheckboxHidden,
            className: className,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], { role: "row", "aria-label": ariaLabel, className: classNames.root, componentRef: this._rootComponent, elementRef: this._rootElement, onMouseMove: this._onRootMouseMove, "data-automationid": "DetailsHeader", direction: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal },
            showCheckbox
                ? [
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "__checkbox", className: classNames.cellIsCheck, "aria-labelledby": this._id + "-check", onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined, "aria-colindex": 1, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                        hostClassName: classNames.checkTooltip,
                        id: this._id + "-checkTooltip",
                        setAriaDescribedBy: false,
                        content: ariaLabelForSelectAllCheckbox,
                        children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__["DetailsRowCheck"], { id: this._id + "-check", "aria-label": selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].multiple
                                ? ariaLabelForSelectAllCheckbox
                                : ariaLabelForSelectionColumn, "aria-describedby": !isCheckboxHidden
                                ? ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined
                                : ariaLabelForSelectionColumn && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined, "data-is-focusable": !isCheckboxHidden || undefined, isHeader: true, selected: isAllSelected, anySelected: false, canSelect: !isCheckboxHidden, className: classNames.check, onRenderDetailsCheckbox: onRenderDetailsCheckbox, useFastIcons: useFastIcons, isVisible: isCheckboxAlwaysVisible })),
                    }, this._onRenderColumnHeaderTooltip)),
                    !this.props.onRenderColumnHeaderTooltip ? (ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectAllCheckbox)) : ariaLabelForSelectionColumn && isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectionColumn)) : null) : null,
                ]
                : null,
            groupNestingDepth > 0 && this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.cellIsGroupExpander, onClick: this._onToggleCollapseAll, "data-is-focusable": true, "aria-label": ariaLabelForToggleAllGroupsButton, "aria-expanded": !isAllCollapsed, role: "columnheader" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.collapseButton, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' }))) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                var _isDraggable = columnReorderProps
                    ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd
                    : false;
                return [
                    columnReorderProps &&
                        (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) &&
                        _this._renderDropHint(columnIndex),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__["DetailsColumn"], { column: column, styles: column.styles, key: column.key, columnIndex: (showCheckbox ? 2 : 1) + columnIndex, parentId: _this._id, isDraggable: _isDraggable, updateDragInfo: _this._updateDragInfo, dragDropHelper: _this._dragDropHelper, onColumnClick: onColumnClick, onColumnContextMenu: onColumnContextMenu, 
                        // Do not render tooltips by default, but allow for override via props.
                        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip, isDropped: _this._onDropIndexInfo.targetIndex === columnIndex, cellStyleProps: _this.props.cellStyleProps, useFastIcons: useFastIcons }),
                    _this._renderColumnDivider(columnIndex),
                ];
            }),
            columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length),
            isSizing && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_6__["Layer"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sizingOverlay, onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeaderBase.prototype.focus = function () {
        var _a;
        return !!((_a = this._rootComponent.current) === null || _a === void 0 ? void 0 : _a.focus());
    };
    /**
     * Gets column reorder props from this.props. If the calling code is part of setting up or
     * handling drag/drop events, it's safe to assume that this method's return value is defined
     * (because drag/drop handling will only be set up if reorder props are given).
     */
    DetailsHeaderBase.prototype._getColumnReorderProps = function () {
        var _a = this.props, columnReorderOptions = _a.columnReorderOptions, columnReorderProps = _a.columnReorderProps;
        return columnReorderProps || (columnReorderOptions && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: undefined }));
    };
    DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver,
        };
        return options;
    };
    DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
        var _a = this.props, selectionMode = _a.selectionMode, checkboxVisibility = _a.checkboxVisibility;
        return selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].none || checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
    };
    DetailsHeaderBase.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');
            this._currentDropHintIndex = -1;
        }
    };
    DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
        element.childNodes[1].style.display = displayProperty;
        element.childNodes[0].style.display = displayProperty;
    };
    DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
        if (this._rootElement.current) {
            var clientRect = this._rootElement.current.getBoundingClientRect();
            if (event.clientX > clientRect.left &&
                event.clientX < clientRect.right &&
                event.clientY > clientRect.top &&
                event.clientY < clientRect.bottom) {
                return _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header;
            }
        }
    };
    DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = columns[columnIndex];
        var onRenderDivider = column.onRenderDivider;
        return onRenderDivider
            ? onRenderDivider({ column: column, columnIndex: columnIndex }, this._renderColumnSizer)
            : this._renderColumnSizer({ column: column, columnIndex: columnIndex });
    };
    DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
        var classNames = this._classNames;
        var IconComponent = this.props.useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: 'dropHintKey', className: classNames.dropHintStyle, id: "columnDropHint_" + dropHintIndex },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "presentation", key: "dropHintCircleKey", className: classNames.dropHintCaretStyle, "data-is-focusable": false, "data-sizer-index": dropHintIndex, "aria-hidden": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: 'CircleShapeSolid' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "dropHintLineKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintLineStyle })));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @param columnIndex - index of the column user double clicked
     * @param ev - mouse double click event
     */
    DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    DetailsHeaderBase.prototype._onSelectionChanged = function () {
        var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected,
            });
        }
    };
    DetailsHeaderBase.defaultProps = {
        selectAllVisibility: _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].visible,
        collapseAllVisibility: _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible,
        useFastIcons: true,
    };
    return DetailsHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _liesBetween(rtl, target, left, right) {
    return rtl ? target <= left && target >= right : target >= left && target <= right;
}
function _isBefore(rtl, a, b) {
    return rtl ? a >= b : a <= b;
}
function _isAfter(rtl, a, b) {
    return rtl ? a <= b : a >= b;
}
function _stopPropagation(ev) {
    ev.stopPropagation();
}
//# sourceMappingURL=DetailsHeader.base.js.map

/***/ }),

/***/ "swgI":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/models/error/Error.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: GraphError, getQosExtraDataFromError, isGraphError, getErrorResolution, getResultCodeFromError, getErrorResolutionFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphError", function() { return GraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQosExtraDataFromError", function() { return getQosExtraDataFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphError", function() { return isGraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolution", function() { return getErrorResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultCodeFromError", function() { return getResultCodeFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolutionFromResponse", function() { return getErrorResolutionFromResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");


var GraphError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphError, _super);
    function GraphError(error, params) {
        var _this = this;
        var _a = params.response, _b = (_a === void 0 ? {} : _a).error, _c = (_b === void 0 ? {} : _b).innerError, _d = (_c === void 0 ? {} : _c).stackTrace, stackTrace = _d === void 0 ? '' : _d, response = params.response, request = params.request, status = params.status, _e = params.code, code = _e === void 0 ? getErrorResolutionFromResponse(response, status, function (code) { return "" + code; }) ||
            'unhandled' : _e;
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ innerError: error, code: code }, params);
        _this = _super.call(this, props) || this;
        _this.name = 'GraphError';
        _this.response = response;
        _this.status = status;
        _this.serverStack = stackTrace;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return GraphError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

var errorMessage = 'errorMessage';
var vroomStatus = 'vroomStatus';
var vroomErrorCode = 'vroomErrorCode';
var vroomErrorMessage = 'vroomErrorMessage';
var vroomErrorInnerCode = 'vroomErrorInnerCode';
var vroomErrorInnerMessage = 'vroomErrorInnerMessage';
var vroomErrorInnerDebugMessage = 'vroomErrorInnerDebugMessage';
var vroomErrorInnerStack = 'vroomErrorInnerStack';
function getQosExtraDataFromError(error) {
    var extraData = {};
    extraData[errorMessage] = error.message;
    if (isGraphError(error)) {
        extraData[vroomStatus] = error.status;
        var response = error.response;
        if (response && response.error) {
            var responseError = response.error;
            extraData[vroomErrorCode] = responseError.code;
            extraData[vroomErrorMessage] = responseError.message;
            var innerError = responseError.innerError || responseError.innererror;
            if (innerError) {
                extraData[vroomErrorInnerCode] = innerError.code;
                extraData[vroomErrorInnerMessage] = innerError.message;
                extraData[vroomErrorInnerDebugMessage] = innerError.debugMessage;
                extraData[vroomErrorInnerStack] = innerError.stackTrace;
            }
        }
    }
    return extraData;
}
function isGraphError(error) {
    return error instanceof GraphError;
}
function getErrorResolution(error, resolveError) {
    if (isGraphError(error)) {
        var response = error.response, status_1 = error.status;
        return getErrorResolutionFromResponse(response, status_1, function (code) {
            return resolveError(code, error);
        });
    }
}
function getResultCodeFromError(error) {
    return getErrorResolution(error, function (code) { return "" + code; }) || 'unhandled';
}
function getErrorResolutionFromResponse(response, status, resolveError) {
    if (response) {
        var innerErrors = [];
        var innerError = response.error;
        while (innerError) {
            innerErrors.push(innerError);
            innerError = innerError.innerError || innerError.innererror;
        }
        while ((innerError = innerErrors.pop())) {
            if (typeof innerError.code !== 'undefined') {
                var resolution = resolveError(innerError.code);
                if (resolution !== undefined) {
                    return resolution;
                }
            }
        }
    }
    return resolveError(status);
}
//# sourceMappingURL=Error.js.map

/***/ }),

/***/ "tApQ":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return DetailsHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");



var DetailsHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__["DetailsHeaderBase"], _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsHeader' });
//# sourceMappingURL=DetailsHeader.js.map

/***/ }),

/***/ "tCYI":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.styles.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return DetailsRowGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return DEFAULT_CELL_STYLE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return DEFAULT_ROW_HEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return getDetailsRowStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var DetailsRowGlobalClassNames = {
    root: 'ms-DetailsRow',
    // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellAnimation: 'ms-DetailsRow-cellAnimation',
    cellCheck: 'ms-DetailsRow-cellCheck',
    check: 'ms-DetailsRow-check',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    isRowHeader: 'is-row-header',
    fields: 'ms-DetailsRow-fields',
};
var IsFocusableSelector = "[data-is-focusable='true']";
var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24,
};
// Source of default row heights to share.
var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32,
};
// Constant values
var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_ROW_HEIGHTS), { rowVerticalPadding: 11, compactRowVerticalPadding: 6 });
var getDetailsRowStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, anySelected = props.anySelected, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _o = props.cellStyleProps, cellStyleProps = _o === void 0 ? DEFAULT_CELL_STYLE_PROPS : _o, enableUpdateAnimations = props.enableUpdateAnimations;
    var palette = theme.palette, fonts = theme.fonts;
    var neutralPrimary = palette.neutralPrimary, white = palette.white, neutralSecondary = palette.neutralSecondary, neutralLighter = palette.neutralLighter, neutralLight = palette.neutralLight, neutralDark = palette.neutralDark, neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
    var focusBorder = theme.semanticColors.focusBorder;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(DetailsRowGlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderText: neutralPrimary,
        defaultMetaText: neutralSecondary,
        defaultBackground: white,
        // Default Hover
        defaultHoverHeaderText: neutralDark,
        defaultHoverMetaText: neutralPrimary,
        defaultHoverBackground: neutralLighter,
        // Selected
        selectedHeaderText: neutralDark,
        selectedMetaText: neutralPrimary,
        selectedBackground: neutralLight,
        // Selected Hover
        selectedHoverHeaderText: neutralDark,
        selectedHoverMetaText: neutralPrimary,
        selectedHoverBackground: neutralQuaternaryAlt,
        // Focus
        focusHeaderText: neutralDark,
        focusMetaText: neutralPrimary,
        focusBackground: neutralLight,
        focusHoverBackground: neutralQuaternaryAlt,
    };
    // Selected row styles
    var selectedStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: focusBorder, outlineColor: white }),
        classNames.isSelected,
        {
            color: colors.selectedMetaText,
            background: colors.selectedBackground,
            borderBottom: "1px solid " + white,
            selectors: (_a = {
                    '&:before': {
                        position: 'absolute',
                        display: 'block',
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '',
                        borderTop: "1px solid " + white,
                    },
                    // Selected State hover
                    '&:hover': {
                        background: colors.selectedHoverBackground,
                        color: colors.selectedHoverMetaText,
                        selectors: (_b = {},
                            // Selected State hover meta cell
                            _b["." + classNames.cell + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                color: 'HighlightText',
                                selectors: {
                                    '> a': {
                                        color: 'HighlightText',
                                    },
                                },
                            },
                            // Selected State hover Header cell
                            _b["." + classNames.isRowHeader] = {
                                color: colors.selectedHoverHeaderText,
                                selectors: (_c = {},
                                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _c),
                            },
                            // Ensure high-contrast mode overrides default hover background
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _b),
                    },
                    // Focus state
                    '&:focus': {
                        background: colors.focusBackground,
                        selectors: (_d = {},
                            // Selected State hover meta cell
                            _d["." + classNames.cell] = {
                                color: colors.focusMetaText,
                                selectors: (_e = {},
                                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                        selectors: {
                                            '> a': {
                                                color: 'HighlightText',
                                            },
                                        },
                                    },
                                    _e),
                            },
                            // Row header cell
                            _d["." + classNames.isRowHeader] = {
                                color: colors.focusHeaderText,
                                selectors: (_f = {},
                                    _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _f),
                            },
                            // Ensure high-contrast mode overrides default focus background
                            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _d),
                    }
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                // Focus and hover state
                _a['&:focus:hover'] = {
                    background: colors.focusHoverBackground,
                },
                _a),
        },
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default',
        },
    ];
    var rootCompactStyles = {
        minHeight: values.compactRowHeight,
        border: 0,
    };
    var cellCompactStyles = {
        minHeight: values.compactRowHeight,
        paddingTop: values.compactRowVerticalPadding,
        paddingBottom: values.compactRowVerticalPadding,
        paddingLeft: cellStyleProps.cellLeftPadding + "px",
    };
    var defaultCellStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1 }),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: values.rowVerticalPadding,
            paddingBottom: values.rowVerticalPadding,
            paddingLeft: cellStyleProps.cellLeftPadding + "px",
            selectors: (_g = {
                    '& > button': {
                        maxWidth: '100%',
                    }
                },
                _g[IsFocusableSelector] = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),
                _g),
        },
        isSelected && {
            selectors: (_h = {},
                _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                _h),
        },
        compact && cellCompactStyles,
    ];
    return {
        root: [
            classNames.root,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationClassNames"].fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { borderColor: focusBorder, outlineColor: white }),
            {
                borderBottom: "1px solid " + neutralLighter,
                background: colors.defaultBackground,
                color: colors.defaultMetaText,
                // This ensures that the row always tries to consume is minimum width and does not compress.
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_j = {},
                    _j["." + classNames.listCellFirstChild + " &:before"] = {
                        display: 'none',
                    },
                    _j['&:hover'] = {
                        background: colors.defaultHoverBackground,
                        color: colors.defaultHoverMetaText,
                        selectors: (_k = {},
                            _k["." + classNames.isRowHeader] = {
                                color: colors.defaultHoverHeaderText,
                            },
                            _k),
                    },
                    _j["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j),
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className,
        ],
        cellUnpadded: {
            paddingRight: cellStyleProps.cellRightPadding + "px",
        },
        cellPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
            selectors: (_l = {},
                _l["&." + classNames.cellCheck] = {
                    paddingRight: 0,
                },
                _l),
        },
        cell: defaultCellStyles,
        cellAnimation: enableUpdateAnimations && _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"].slideLeftIn40,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap',
            },
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0,
            },
        ],
        checkCover: {
            position: 'absolute',
            top: -1,
            left: 0,
            bottom: 0,
            right: 0,
            display: anySelected ? 'block' : 'none',
        },
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        isRowHeader: [
            classNames.isRowHeader,
            {
                color: colors.defaultHeaderText,
                fontSize: fonts.medium.fontSize,
            },
            isSelected && {
                color: colors.selectedHeaderText,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                selectors: (_m = {},
                    _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'HighlightText',
                    },
                    _m),
            },
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip',
            },
        ],
        check: [classNames.check],
    };
};
//# sourceMappingURL=DetailsRow.styles.js.map

/***/ }),

/***/ "uGAW":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/dragdrop/DragDropHelper.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DragDropHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return DragDropHelper; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");

var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var DragDropHelper = /** @class */ (function () {
    function DragDropHelper(params) {
        this._selection = params.selection;
        this._dragEnterCounts = {};
        this._activeTargets = {};
        this._lastId = 0;
        // To make this class cheap to create, which allows simplifying some logic elsewhere,
        // only initialize the event group and global event handlers as needed.
        this._initialized = false;
    }
    DragDropHelper.prototype.dispose = function () {
        if (this._events) {
            this._events.dispose();
        }
    };
    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
        var _this = this;
        if (!this._initialized) {
            this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
            // clear drag data when mouse up, use capture event to ensure it will be run
            if (doc) {
                this._events.on(doc.body, 'mouseup', this._onMouseUp.bind(this), true);
                this._events.on(doc, 'mouseup', this._onDocumentMouseUp.bind(this), true);
            }
            this._initialized = true;
        }
        var _a = dragDropOptions.key, key = _a === void 0 ? "" + ++this._lastId : _a;
        var handlers = [];
        var onDragStart;
        var onDragLeave;
        var onDragEnter;
        var onDragEnd;
        var onDrop;
        var onDragOver;
        var onMouseDown;
        var isDraggable;
        var isDroppable;
        var activeTarget;
        if (dragDropOptions && root) {
            var eventMap = dragDropOptions.eventMap, context = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
            var dragDropTarget = {
                root: root,
                options: dragDropOptions,
                key: key,
            };
            isDraggable = this._isDraggable(dragDropTarget);
            isDroppable = this._isDroppable(dragDropTarget);
            if (isDraggable || isDroppable) {
                if (eventMap) {
                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
                        var event_1 = eventMap_1[_i];
                        var handler = {
                            callback: event_1.callback.bind(null, context),
                            eventName: event_1.eventName,
                        };
                        handlers.push(handler);
                        this._events.on(root, handler.eventName, handler.callback);
                    }
                }
            }
            if (isDroppable) {
                // If the target is droppable, wire up global event listeners to track drop-related events.
                onDragLeave = function (event) {
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]--;
                        if (_this._dragEnterCounts[key] === 0) {
                            updateDropState_1(false /* isDropping */, event);
                        }
                    }
                };
                onDragEnter = function (event) {
                    event.preventDefault(); // needed for IE
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]++;
                        if (_this._dragEnterCounts[key] === 1) {
                            updateDropState_1(true /* isDropping */, event);
                        }
                    }
                };
                onDragEnd = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                };
                onDrop = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                    if (dragDropOptions.onDrop) {
                        dragDropOptions.onDrop(dragDropOptions.context.data, event);
                    }
                };
                onDragOver = function (event) {
                    event.preventDefault();
                    if (dragDropOptions.onDragOver) {
                        dragDropOptions.onDragOver(dragDropOptions.context.data, event);
                    }
                };
                this._dragEnterCounts[key] = 0;
                // dragenter and dragleave will be fired when hover to the child element
                // but we only want to change state when enter or leave the current element
                // use the count to ensure it.
                events.on(root, 'dragenter', onDragEnter);
                events.on(root, 'dragleave', onDragLeave);
                events.on(root, 'dragend', onDragEnd);
                events.on(root, 'drop', onDrop);
                events.on(root, 'dragover', onDragOver);
            }
            if (isDraggable) {
                // If the target is draggable, wire up local event listeners for mouse events.
                onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
                onDragEnd = this._onDragEnd.bind(this, dragDropTarget);
                // We need to add in data so that on Firefox we show the ghost element when dragging
                onDragStart = function (event) {
                    var options = dragDropOptions;
                    if (options && options.onDragStart) {
                        options.onDragStart(options.context.data, options.context.index, _this._selection.getSelection(), event);
                    }
                    _this._isDragging = true;
                    if (event.dataTransfer) {
                        event.dataTransfer.setData('id', root.id);
                    }
                };
                events.on(root, 'dragstart', onDragStart);
                events.on(root, 'mousedown', onMouseDown);
                events.on(root, 'dragend', onDragEnd);
            }
            activeTarget = {
                target: dragDropTarget,
                dispose: function () {
                    if (_this._activeTargets[key] === activeTarget) {
                        delete _this._activeTargets[key];
                    }
                    if (root) {
                        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                            var handler = handlers_1[_i];
                            _this._events.off(root, handler.eventName, handler.callback);
                        }
                        if (isDroppable) {
                            events.off(root, 'dragenter', onDragEnter);
                            events.off(root, 'dragleave', onDragLeave);
                            events.off(root, 'dragend', onDragEnd);
                            events.off(root, 'dragover', onDragOver);
                            events.off(root, 'drop', onDrop);
                        }
                        if (isDraggable) {
                            events.off(root, 'dragstart', onDragStart);
                            events.off(root, 'mousedown', onMouseDown);
                            events.off(root, 'dragend', onDragEnd);
                        }
                    }
                },
            };
            this._activeTargets[key] = activeTarget;
        }
        return {
            key: key,
            dispose: function () {
                if (activeTarget) {
                    activeTarget.dispose();
                }
            },
        };
    };
    DragDropHelper.prototype.unsubscribe = function (root, key) {
        var activeTarget = this._activeTargets[key];
        if (activeTarget) {
            activeTarget.dispose();
        }
    };
    DragDropHelper.prototype._onDragEnd = function (target, event) {
        var options = target.options;
        if (options.onDragEnd) {
            options.onDragEnd(options.context.data, event);
        }
    };
    /**
     * clear drag data when mouse up on body
     */
    DragDropHelper.prototype._onMouseUp = function (event) {
        this._isDragging = false;
        if (this._dragData) {
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.off(activeTarget.target.root, 'mousemove');
                    this._events.off(activeTarget.target.root, 'mouseleave');
                }
            }
            if (this._dragData.dropTarget) {
                // raise dragleave event to let dropTarget know it need to remove dropping style
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'dragleave');
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'drop');
            }
        }
        this._dragData = null;
    };
    /**
     * clear drag data when mouse up outside of the document
     */
    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && event.target === doc.documentElement) {
            this._onMouseUp(event);
        }
    };
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    DragDropHelper.prototype._onMouseMove = function (target, event) {
        var 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        _a = event.buttons, 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onMouseUp(event);
            return;
        }
        var root = target.root, key = target.key;
        if (this._isDragging) {
            if (this._isDroppable(target)) {
                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
                // outer target too, and we need to prevent the outer one from taking over.
                // So, check if the last dropTarget is not a child of the current.
                if (this._dragData) {
                    if (this._dragData.dropTarget &&
                        this._dragData.dropTarget.key !== key &&
                        !this._isChild(root, this._dragData.dropTarget.root)) {
                        if (this._dragEnterCounts[this._dragData.dropTarget.key] > 0) {
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'dragleave');
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(root, 'dragenter');
                            this._dragData.dropTarget = target;
                        }
                    }
                }
            }
        }
    };
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    DragDropHelper.prototype._onMouseLeave = function (target, event) {
        if (this._isDragging) {
            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(target.root, 'dragleave');
                this._dragData.dropTarget = undefined;
            }
        }
    };
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    DragDropHelper.prototype._onMouseDown = function (target, event) {
        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        if (this._isDraggable(target)) {
            this._dragData = {
                clientX: event.clientX,
                clientY: event.clientY,
                eventTarget: event.target,
                dragTarget: target,
            };
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));
                    this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
                }
            }
        }
        else {
            this._dragData = null;
        }
    };
    /**
     * determine whether the child target is a descendant of the parent
     */
    DragDropHelper.prototype._isChild = function (parentElement, childElement) {
        while (childElement && childElement.parentElement) {
            if (childElement.parentElement === parentElement) {
                return true;
            }
            childElement = childElement.parentElement;
        }
        return false;
    };
    DragDropHelper.prototype._isDraggable = function (target) {
        var options = target.options;
        return !!(options.canDrag && options.canDrag(options.context.data));
    };
    DragDropHelper.prototype._isDroppable = function (target) {
        // TODO: take the drag item into consideration to prevent dragging an item into the same group
        var options = target.options;
        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
        return !!(options.canDrop && options.canDrop(options.context, dragContext));
    };
    return DragDropHelper;
}());

//# sourceMappingURL=DragDropHelper.js.map

/***/ }),

/***/ "unYt":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/CustomError.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 * @public
 *
 * @remarks
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message || (props.innerError && props.innerError.message));
        this.message = error.message;
        this.innerError = props.innerError;
        this.stack = error.stack;
        this.name = error.name;
        // Avoid using assign since some platforms (native) do not enumerate prototyped objects.
        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore TOO BAD
                error[key] = this[key];
            }
        }
        var customErrorType = Object.getPrototypeOf(this);
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());

// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}
//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ "v+17":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "2Xb7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection */ "YCgd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _Selection__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });

/* harmony import */ var _SelectionZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectionZone */ "0fxH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _SelectionZone__WEBPACK_IMPORTED_MODULE_2__["SelectionZone"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "vo05":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/guid/Guid.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Guid"]; });

// Loading @ms/odsp-utilities/./lib/guid/Guid.js



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

/***/ "wqXl":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return DetailsRow; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var DetailsRow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__["DetailsRowBase"], _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["getDetailsRowStyles"], undefined, {
    scope: 'DetailsRow',
});
//# sourceMappingURL=DetailsRow.js.map

/***/ }),

/***/ "y86Q":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupedList */ "GDPH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _GroupedList__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__["GroupedListBase"]; });

/* harmony import */ var _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__["CollapseAllVisibility"]; });

/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _GroupHeader__WEBPACK_IMPORTED_MODULE_3__["GroupHeader"]; });

/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _GroupFooter__WEBPACK_IMPORTED_MODULE_4__["GroupFooter"]; });

/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"]; });

/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"]; });

/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__["GroupedListSection"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "yImb":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSource", function() { return PeoplePickerDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/DataSource */ "AfY0");
/* harmony import */ var _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../roleAssignments/PrincipalType */ "2+UY");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/peoplePicker/SubstratePeoplePickerHelper */ "8VvQ");
/* harmony import */ var _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/url/ApiUrlHelper */ "sVQZ");
/* harmony import */ var _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/url/ItemUrlHelper */ "+1yd");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-graph/lib/models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/EmailAddressParser */ "GbJQ");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
// OneDrive:CoverageThreshold(50)














var PeoplePickerDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeoplePickerDataSource, _super);
    function PeoplePickerDataSource(paramsOrOriginalParams, dependencies) {
        var _this = this;
        var pageContext = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams
            : dependencies.pageContext;
        _this = _super.call(this, {}, {
            pageContext: pageContext
        }) || this;
        var apiUrlHelper = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams.apiUrlHelper
            : dependencies.apiUrlHelper;
        _this._apiUrlHelper = apiUrlHelper
            ? apiUrlHelper
            : new _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__["ApiUrlHelper"]({}, {
                itemUrlHelper: new _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__["ItemUrlHelper"]({}, { pageContext: pageContext }),
                pageContext: pageContext
            });
        _this._capabilities = {
            supportsMruCaching: true
        };
        if (dependencies) {
            _this._dataRequestor = dependencies.dataRequestor;
            _this._graphPeoplePickerHelper = dependencies.graphPeoplePickerHelper;
            _this._substratePeoplePickerHelper = dependencies.substratePeoplePickerHelper;
            _this._livePeoplePickerHelper = dependencies.livePeoplePickerHelper;
            _this._getAuthToken = dependencies.getAuthToken;
        }
        _this._invalidPeopleSubTypesKSActivated = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('daa1be46-12ff-45a4-8c9f-9b3c0f174853', '01/19/2021', 'Ignore invalid PeopleSubtypes.');
        return _this;
    }
    PeoplePickerDataSource.prototype.getCapabilities = function () {
        return this._capabilities;
    };
    PeoplePickerDataSource.prototype.getPersonaDetails = function (accountID) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('sp.publishing.personmagazine.GetPersonMagazineUserProfileDataForUser')
                    .parameter('accountName', accountID)
                    .toString(),
                qosName: 'GetPersonaDetails',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var transformPerson = function (rawPerson) { return ({
                        name: rawPerson.DisplayName,
                        email: rawPerson.Email,
                        userId: rawPerson.AccountName,
                        office: rawPerson.Office,
                        image: rawPerson.PictureUrl,
                        job: rawPerson.Title,
                        department: rawPerson.DepartmentName,
                        phone: rawPerson.Phone,
                        sip: rawPerson.Lync
                    }); };
                    var response = JSON.parse(responseText);
                    var rawProfile = response.d.GetPersonMagazineUserProfileDataForUser;
                    var ret = {
                        personDetails: transformPerson(rawProfile.Primary),
                        managerChain: rawProfile.ManagerChain.results.map(transformPerson),
                        directReports: rawProfile.DirectReports.results.map(transformPerson)
                    };
                    ret.personDetails.profilePage =
                        Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__["getServerUrl"])(_this._pageContext) +
                            '/_layouts/15/me.aspx?p=' +
                            encodeURIComponent(ret.personDetails.sip) +
                            '&origin=ProfileODBCard';
                    return ret;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.getPickerEntityInformation = function (person) {
        var _this = this;
        var groupId = 0;
        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
            groupId = Number(person.rawPersonData.EntityData.SPGroupID);
        }
        var additionalPostData = JSON.stringify({
            entityInformationRequest: {
                PrincipalType: person.principalType,
                EmailAddress: person.email,
                GroupId: groupId
            }
        });
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.GetPickerEntityInformation')
                    .toString(),
                additionalPostData: additionalPostData,
                qosName: 'getPickerEntityInformation',
                authToken: authToken,
                noRedirect: true,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var entityInformation = {
                        totalMemberCount: response.d.TotalMemberCount,
                        person: person
                    };
                    return entityInformation;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.resolve = function (query, context) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Resolve',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var responseData = JSON.parse(response.d.ClientPeoplePickerResolveUser);
                    var personArray = [];
                    personArray[0] = responseData;
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('067ca2b4-2244-4153-8dfa-d11e6b4487bb', '03/19/2018', 'Only overwrite display text if it is null or empty')) {
                        if (!responseData.IsResolved) {
                            personArray[0].DisplayText = responseData.Key;
                        }
                    }
                    else {
                        if (!responseData.IsResolved) {
                            if (!!responseData.EntityData.IsBlockedOnODB &&
                                responseData.EntityData.IsBlockedOnODB.toLowerCase() === 'true') {
                                //do nothing for ODB policy.
                            }
                            else {
                                personArray[0].DisplayText = responseData.Key;
                            }
                        }
                    }
                    personArray = _this._transformData(personArray, context.filterExternalUsers);
                    var person = personArray[0];
                    if (context.filterExternalUsers && person && person.entityType === 1 /* externalUser */) {
                        // If filterExternalUsers is passed then mark any existing external user in directory as unresolved
                        // and change its entity type to default.
                        person.isResolved = false;
                        person.entityType = 0 /* regularUser */;
                    }
                    else if (context.blockViaPolicy &&
                        !context.filterExternalUsers &&
                        person &&
                        !person.isResolved &&
                        person.multipleMatches.length === 0) {
                        person.isResolved = true;
                        person.isExternal = true;
                        person.entityType = 1 /* externalUser */;
                    }
                    if (context.isGraphDistributionList && context.useGraph && person.isExternal) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList;
                    }
                    return person;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.canUseGraph = function (context) {
        var canUseGraph = context &&
            context.useGraph &&
            this._graphPeoplePickerHelper &&
            this._graphPeoplePickerHelper.canUseGraph();
        if (canUseGraph && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseGraph;
    };
    PeoplePickerDataSource.prototype.canUseSubstrate = function (context) {
        var canUseSubstrate = context.useSubstrate &&
            this._substratePeoplePickerHelper &&
            this._substratePeoplePickerHelper.canUseSubstrate();
        if (canUseSubstrate && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseSubstrate;
    };
    PeoplePickerDataSource.prototype.getLivePersonaPickerHelper = function () {
        return this._livePeoplePickerHelper;
    };
    PeoplePickerDataSource.prototype.search = function (query, context) {
        if (this.canUseSubstrate(context)) {
            return this._substrateSearch(query, context);
        }
        else if (this.canUseGraph(context)) {
            return this._graphSearch(query, context);
        }
        else {
            return this.sharePointSearch(query, context);
        }
    };
    PeoplePickerDataSource.prototype.sharePointSearch = function (query, context) {
        var _this = this;
        // Make sure to hide the search directory button when we're already searching via SP
        if (context.onToggleGetMoreResults) {
            context.onToggleGetMoreResults(false);
        }
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Search',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var _a = context.allowSharePointGroups, allowSharePointGroups = _a === void 0 ? true : _a, filterExternalUsers = context.filterExternalUsers, forceResolve = context.forceResolve;
                    var response = JSON.parse(responseText);
                    var peopleArray = JSON.parse(response.d.ClientPeoplePickerSearchUser);
                    var entities = _this._transformData(peopleArray, filterExternalUsers);
                    if (filterExternalUsers) {
                        entities = entities.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                    }
                    var noResults = !entities.length;
                    entities = entities.filter(function (person) {
                        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
                            return allowSharePointGroups;
                        }
                        else if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup) {
                            /**
                             * If SharePoint groups are allowed, that means ALL security groups are allowed as well.
                             * If SharePoint groups aren't allowed, that means only email-enabled security groups are allowed.
                             */
                            return allowSharePointGroups || _this._isValidEmail(person.email, true /* isSecurityGroup */);
                        }
                        else {
                            return _this._isValidEmail(person.email, false /* isSecurityGroup */);
                        }
                    });
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('cc7520a8-6922-4e12-81c1-179764750212', '3/29/2018', 'Disable limiting no results behavior to e-mail addresses.')) {
                        if (forceResolve && noResults) {
                            entities.push({
                                name: query,
                                userId: query,
                                email: query
                            });
                        }
                    }
                    else {
                        /**
                         * If the query returned no results and the query is an email, add
                         * that email as a suggestion.
                         */
                        if (context.resolveEmailIfNoResults !== false &&
                            entities.length === 0 &&
                            _this._isValidEmail(query, false /* isSecurityGroup */)) {
                            var rawData = {
                                Key: query,
                                IsResolved: false
                            };
                            entities.push({
                                email: query,
                                entityType: 1 /* externalUser */,
                                isResolved: false,
                                job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                                name: query,
                                userId: query,
                                rawData: rawData,
                                rawPersonData: rawData,
                                isExternal: true
                            });
                        }
                    }
                    return entities;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.subscribePresence = function (accountID, fnCallback) {
        var _this = this;
        try {
            this._ensureSkypePresence();
            if (!O365Shell_Shim.SkypeIntegration.isAvailable()) {
                return null; //If skypeIntegration is not available for this user, return null so that we can handle not showing presence gracefully.
            }
            var fnPresenceCallback_1 = function (type) {
                try {
                    switch (type) {
                        case 0: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Unknown:
                            fnCallback(0 /* Unknown */);
                            break;
                        case 1: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Online:
                            fnCallback(1 /* Online */);
                            break;
                        case 2: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Busy:
                            fnCallback(2 /* Busy */);
                            break;
                        case 3: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.DoNotDisturb:
                            fnCallback(3 /* DoNotDisturb */);
                            break;
                        case 4: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.BeRightBack:
                            fnCallback(4 /* BeRightBack */);
                            break;
                        case 5: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Away:
                            fnCallback(5 /* Away */);
                            break;
                        case 6: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Offline:
                            fnCallback(6 /* Offline */);
                            break;
                        case 8: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Hidden:
                            fnCallback(7 /* Hidden */);
                            break;
                        default:
                            fnCallback(0 /* Unknown */);
                            break;
                    }
                }
                catch (e) {
                    // do nothing
                }
            };
            this._skypeIntegration.TrackPresence(accountID, fnPresenceCallback_1);
            var disposable = {
                dispose: function () {
                    try {
                        _this._skypeIntegration.UntrackPresence(accountID, fnPresenceCallback_1);
                    }
                    catch (e) {
                        // do nothing
                    }
                }
            };
            return disposable;
        }
        catch (e) {
            // do nothing
        }
        return null;
    };
    PeoplePickerDataSource.prototype.sendSourceName = function () {
        return 'PeoplePickerDataSource';
    };
    PeoplePickerDataSource.prototype._constructPostBody = function (query, context) {
        var strBody = {
            queryParams: {
                QueryString: query,
                MaximumEntitySuggestions: context.maximumEntitySuggestions,
                AllowEmailAddresses: context.allowEmailAddresses,
                AllowOnlyEmailAddresses: context.allowOnlyEmailAddresses,
                PrincipalType: context.principalType,
                PrincipalSource: context.principalSource,
                UseSubstrateSearch: context.useSubstrateSearch,
                SharePointGroupID: context.groupID,
                QuerySettings: context.querySettings
            }
        };
        return JSON.stringify(strBody);
    };
    PeoplePickerDataSource.prototype._ensureSkypePresence = function () {
        var _this = this;
        try {
            if (!Boolean(this._skypeIntegration)) {
                var skypeIntegration_1 = new O365Shell_Shim.SkypeIntegration();
                skypeIntegration_1.OnApiReady(function () {
                    _this._skypeIntegration = skypeIntegration_1;
                });
            }
        }
        catch (e) {
            //do nothing. Basically skype presence didn't work so degrade gracefully
        }
    };
    PeoplePickerDataSource.prototype._graphSearch = function (query, context) {
        var _this = this;
        return this._graphPeoplePickerHelper.getGraphToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            /**
             * Currently, mail-enabled security groups and legacy DLs are returned the same way from Graph. The former is an allowed share target while
             * the latter is not. Our two options for dealing with this are to:
             *   1. Call resolve when a user selects a PublicDistributionList returned by Graph. If it's a legacy DL, show an error message to the user.
             *   2. Filter out all PublicDistributionList objects returned by Graph and have the user click through to search the directory for more result
             * Putting this experiment behind a killswitch, not a flight, as calling Graph via the people picker is already behind a flight.
             */
            var graphRequestUrl = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__["default"]("https://graph.microsoft.com/v1.0/me/people");
            if (query) {
                graphRequestUrl.setQueryFromObject({
                    $search: "\"" + query + "\"",
                    $top: '30',
                    $select: 'displayName,scoredEmailAddresses,personType,department,jobTitle,userPrincipalName'
                });
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('08c31a2f-5109-4dd9-b6ab-d6ea8fec0d9f', '09/29/2020', 'Fix bug: Should correctly handle PrincipalType in Graph query filter.')) {
                    var personTypeFilter = PeoplePickerDataSource._getPersonTypeFilter(context);
                    if (personTypeFilter) {
                        graphRequestUrl.setQueryParameter('$filter', personTypeFilter);
                    }
                }
                else if (context.filterPublicDistributionList !== false) {
                    graphRequestUrl.setQueryParameter('$filter', "personType/subclass ne 'PublicDistributionList'");
                }
            }
            return _this._dataRequestor
                .send({
                apiName: 'Graph.PeopleSearch',
                path: graphRequestUrl.toString(),
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-PeopleQuery-QuerySources': 'Mailbox,Directory'
                },
                needsAuthorization: false
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                if (!data || !data.value || data.value.length === 0) {
                    // fall back to SharePoint Search
                    return _this.sharePointSearch(query, context);
                }
                var rawPeople = data.value;
                var people = [];
                rawPeople.forEach(function (rawPerson) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        rawPerson.personType.subclass &&
                        _this._isIgnorablePeopleSubType(rawPerson.personType.subclass)) {
                        return;
                    }
                    var email = rawPerson.scoredEmailAddresses[0]
                        ? rawPerson.scoredEmailAddresses[0].address
                        : '';
                    var key = rawPerson.userPrincipalName &&
                        _this._isValidEmail(rawPerson.userPrincipalName, false /*isSecurityGroup*/)
                        ? rawPerson.userPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = rawPerson.personType.subclass === 'ImplicitContact';
                    var isOrganizationUser = rawPerson.personType.subclass === 'OrganizationUser';
                    var isUnifiedGroup = rawPerson.personType.class === 'Group' && rawPerson.personType.subclass === 'UnifiedGroup';
                    var isPublicDistributionList = rawPerson.personType.subclass === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: rawPerson.department,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false ? rawPerson.jobTitle : rawPerson.jobTitle || email,
                        name: rawPerson.displayName,
                        providerName: !isOrganizationUser ? undefined : 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser,
                        aadObjectId: rawPerson.id
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.userId = rawPerson.id; // Unified groups return a guid in rawPerson.userPrincipalName that won't resolve.
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            rawPerson.personType.class === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                /**
                 * Graph returning a 404 in search means that the resource to search doesn't exist. 401 means
                 * the user did not authenticate correctly. 403 means the user doesn't have permission to call Graph.
                 * Disable calls for the user and fallback to SP search in these cases.
                 */
                if (Object(_ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__["isGraphError"])(error)) {
                    switch (error.status) {
                        case 400:
                        case 401:
                        case 403:
                        case 404:
                            _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                            return _this.sharePointSearch(query, context);
                        default:
                            return _this.sharePointSearch(query, context); // Handle error, probably
                    }
                }
                else if (error.name !== 'Canceled') {
                    _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                }
                if (error.name === 'Canceled') {
                    return null;
                }
                else {
                    return _this.sharePointSearch(query, context); // Handle error, probably
                }
            });
        });
    };
    PeoplePickerDataSource.prototype._substrateSearch = function (query, context) {
        var _this = this;
        return this._substratePeoplePickerHelper.getSubstrateToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            var segmentIDs = null;
            //do not set array if length is 0
            if (context.siteIBSegmentIDs && context.siteIBSegmentIDs.length > 0) {
                segmentIDs = context.siteIBSegmentIDs;
            }
            var provenances = ['Directory'];
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('9403ac4d-b51a-48b3-a4c0-9007477f73ea', '02/18/2020', 'Mailbox Searching in Substrate People Suggestions.')) {
                provenances.splice(0, 0, 'Mailbox');
            }
            var headersDict = {};
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('04f09a5b-1c0f-42ef-9b9f-ba8c1e321810', '07/03/2020', 'Removing litoken in Substrate call.')) {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken
                };
            }
            else {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                };
            }
            return _this._dataRequestor
                .send({
                apiName: 'Substrate.PeopleSearch',
                path: _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__["SUBSTRATE_SEARCH_URL"] + "/api/v1/suggestions",
                headers: headersDict,
                needsAuthorization: false,
                requestType: 'POST',
                postData: JSON.stringify({
                    EntityRequests: [
                        {
                            EntityType: 'People',
                            ProvenanceMergeMode: 'Default',
                            Provenances: provenances,
                            Query: {
                                QueryString: query
                            },
                            From: 0,
                            Size: 25,
                            Fields: [
                                // "Id",
                                'DisplayName',
                                'EmailAddresses',
                                'CompanyName',
                                'JobTitle',
                                'OfficeLocation',
                                'Department',
                                // "ImAddress",
                                // "PhoneNumber",
                                // "ADObjectId",
                                'UserPrincipalName',
                                // "PersonaId",
                                // "FeatureData",
                                // "PDLItemId",
                                'PeopleType',
                                'PeopleSubtype'
                                // "Confidence"
                            ],
                            Filter: !segmentIDs
                                ? null
                                : {
                                    Or: segmentIDs.map(function (ID) {
                                        return { Term: { InformationBarrierSegment: ID } };
                                    })
                                }
                        }
                    ],
                    TimeZone: 'UTC',
                    Cvid: context.conversationId,
                    Scenario: { Name: 'documentshare' }
                })
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                var suggestions = data.Groups[0] ? data.Groups[0].Suggestions : [];
                var people = [];
                suggestions.forEach(function (suggestion) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        suggestion.PeopleSubtype &&
                        _this._isIgnorablePeopleSubType(suggestion.PeopleSubtype)) {
                        return;
                    }
                    var email = suggestion.EmailAddresses[0] || suggestion.QueryText || '';
                    var key = suggestion.UserPrincipalName &&
                        _this._isValidEmail(suggestion.UserPrincipalName, false /*isSecurityGroup*/)
                        ? suggestion.UserPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = suggestion.PeopleSubtype === 'ImplicitContact';
                    var isOrganizationUser = suggestion.PeopleSubtype === 'OrganizationUser';
                    var isLinkedInContact = suggestion.PeopleSubtype === 'LinkedIn';
                    var isUnifiedGroup = suggestion.PeopleType === 'Group' && suggestion.PeopleSubtype === 'UnifiedGroup';
                    var isPublicDistributionList = suggestion.PeopleSubtype === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: suggestion.Department,
                        office: suggestion.OfficeLocation,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false
                            ? suggestion.JobTitle
                            : suggestion.JobTitle || email,
                        name: suggestion.DisplayName,
                        providerName: 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.providerName = undefined; // In this case we need to set the providerName to be undefined so that the later code will resolve this entity
                    }
                    else if (isLinkedInContact) {
                        person.entityType = 4 /* linkedinUser */;
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            suggestion.PeopleType === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                if (error.name !== 'Canceled') {
                    _this._substratePeoplePickerHelper.disableSubstrateCallsForPicker();
                    _this.sharePointSearch(query, context);
                }
                return null;
            });
        });
    };
    PeoplePickerDataSource.prototype._isValidEmail = function (email, isSecurityGroup) {
        /**
         * Users without an email address assigned are valid in ShareLink scenarios.
         * Security groups without an email address are not valid in ShareLink scenarios.
         */
        if (!email) {
            return !isSecurityGroup;
        }
        // Known input that causes issues (and cannot exist in a valid email address).
        if (email.indexOf(' ') > -1 || email.indexOf(';') > -1) {
            return false;
        }
        // If result has an associated email, ensure that it is valid
        return _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__["default"].isValidEmailSyntax(email, false);
    };
    PeoplePickerDataSource._getPersonTypeFilter = function (context) {
        // If the principalType only contains User, just directly return "personType ne Group"
        if (context.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user) {
            return "personType/class ne 'Group'";
        }
        var filterString = '';
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList)) {
            filterString = filterString + "personType/subclass ne 'PublicDistributionList'";
        }
        // Note: if the PrincipalType that sent to Graph doesn't contain SecurityGroup, it means
        // from people picker side it doesn't want O365 Group returned from Graph.
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup)) {
            if (filterString) {
                filterString = filterString + ' and ';
            }
            filterString = filterString + "personType/subclass ne 'UnifiedGroup'";
        }
        if (filterString) {
            return filterString;
        }
        if (context.filterPublicDistributionList !== false) {
            return "personType/subclass ne 'PublicDistributionList'";
        }
        return '';
    };
    PeoplePickerDataSource.prototype._isIgnorablePeopleSubType = function (peopleSubType) {
        if (!peopleSubType) {
            return false;
        }
        // Here lists some legacy or invalid PeopleSubtype in suggestions might be returned from 3S, they should be filtered out
        var ignorableSubTypes = ['PersonalDistributionList', 'ImplicitGroup', 'Unknown'];
        return ignorableSubTypes.includes(peopleSubType);
    };
    PeoplePickerDataSource.prototype._transformData = function (data, filterExternalUsers) {
        var _this = this;
        return data.map(function (rawPerson) {
            var rawEntityData = rawPerson.EntityData;
            var person = {
                name: rawPerson.DisplayText,
                email: rawEntityData.Email,
                userId: rawPerson.Key,
                job: rawEntityData.Title,
                department: rawEntityData.Department,
                phone: rawEntityData.MobilePhone,
                providerName: rawPerson.ProviderDisplayName,
                entityType: rawPerson.EntityType,
                isResolved: rawPerson.IsResolved,
                multipleMatches: rawPerson.MultipleMatches,
                rawPersonData: rawPerson,
                //set "rawData" to be the value exactly returned by the server. For list metadata, we need this exact value
                //when we write back to the list.
                rawData: rawPerson
            };
            if (person.multipleMatches.length > 0) {
                person.multipleMatches = _this._transformData(person.multipleMatches, filterExternalUsers);
                if (filterExternalUsers) {
                    person.multipleMatches = person.multipleMatches.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                }
            }
            var email = person.email;
            if (person.isResolved) {
                if (email) {
                    person.image = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                }
                else {
                    person.image = null;
                }
            }
            // calculate entity type
            var serverType = rawEntityData.PrincipalType || rawPerson.EntityType;
            switch (serverType) {
                case 'UNVALIDATED_EMAIL_ADDRESS':
                case 'GUEST_USER':
                    person.entityType = 1 /* externalUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                    person.isExternal = true;
                    break;
                case 'SecGroup':
                case 'SharePointGroup':
                case 'FormsRole':
                    person.entityType = 2 /* group */;
                    if (serverType === 'SharePointGroup') {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup;
                    }
                    else {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                    }
                    break;
                default:
                    person.entityType = 0 /* regularUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
            }
            return person;
        });
    };
    return PeoplePickerDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));

function isOriginalParams(params) {
    var originalParams = params;
    return !!originalParams.webAbsoluteUrl;
}
//# sourceMappingURL=PeoplePickerDataSource.js.map

/***/ }),

/***/ "ym2C":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return GroupFooter; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupFooter.styles */ "I5L8");
/* harmony import */ var _GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupFooter.base */ "R7/2");



var GroupFooter = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__["GroupFooterBase"], _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupFooter',
});
//# sourceMappingURL=GroupFooter.js.map

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

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-multilingual-muisettingspage_[locale].js.map