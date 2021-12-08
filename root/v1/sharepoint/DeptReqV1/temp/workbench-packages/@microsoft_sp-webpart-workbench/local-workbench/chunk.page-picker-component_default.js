(window["webpackJsonpe795d530_8fb6_425c_b864_b86735dbae1d_1_7_153"] = window["webpackJsonpe795d530_8fb6_425c_b864_b86735dbae1d_1_7_153"] || []).push([["page-picker-component"],{

/***/ "6+Mi":
/*!*****************************************!*\
  !*** ./lib/PagePickerSuggestionsRow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/DetailsList */ "0q4O");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagePickerSuggestions.module.scss */ "YVB/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */





var PagePickerSuggestionsRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagePickerSuggestionsRow, _super);
    function PagePickerSuggestionsRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleClick = function () {
            _this.props.onSelect(_this.props.detailsRowProps.item, _this.props.detailsRowProps.itemIndex);
        };
        _this._handleKeyDown = function (event) {
            if (event.key === 'Space') {
                _this.props.onSelect(_this.props.detailsRowProps.item, _this.props.detailsRowProps.itemIndex);
            }
        };
        return _this;
    }
    PagePickerSuggestionsRow.prototype.render = function () {
        var _a;
        var suggestionsRowClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].suggestionsRow, (_a = {},
            _a[_PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].isRowSelected] = this.props.detailsRowProps.item.isSelected,
            _a));
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: suggestionsRowClassName, onClick: this._handleClick, onKeyDown: this._handleKeyDown },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__["DetailsRow"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.detailsRowProps))));
    };
    return PagePickerSuggestionsRow;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PagePickerSuggestionsRow);


/***/ }),

/***/ "6G+p":
/*!*******************************************************************!*\
  !*** ./lib/copied/screenReaderAlert/ScreenReaderAlert.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ScreenReaderAlert.module.css */ "wned");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ANju":
/*!***********************************************************!*\
  !*** ./lib/copied/screenReaderAlert/ScreenReaderAlert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenReaderAlertProps */ "RiH3");
/* harmony import */ var _ScreenReaderAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreenReaderAlert.module.scss */ "Pc1x");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Screen Reader Alert component.
 */





/**
 * This is a screen reader alert component for developers to easily add screen reader feature to their web site.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions Live Region in MDN}
 *
 * All functionalities of this component are tested through:
 * 1. Narrator in Windows 10.
 * 2. JAWS 18.
 * 3. NVDA 2016.4.
 * 4. ChromeVOX v53.0.2784.4.
 *
 * @example
 * <ScreenReaderAlert message={ message } />
 */
var ScreenReaderAlert = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScreenReaderAlert, _super);
    function ScreenReaderAlert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The index updated during each rendering to make React re-attach the DOM.
         *
         * It is critical to make React re-attach the DOM once we want it to read something. Simply updating the
         * text context inside DOM will cause different behavior in different screen readers or browsers.
         * Re-attaching the live region element is the most common way which is supported by most major screen reader
         * and browser combinations.
         */
        _this._renderIndex = 0;
        return _this;
    }
    /**
     * This is an API for developers to read screen reader message.
     * It is typically to be called when there is no React component or DOM element to attach ScreenReaderAlert component.
     */
    ScreenReaderAlert.read = function (message, readingMode) {
        if (ScreenReaderAlert.alertNode === undefined) {
            ScreenReaderAlert.alertNode = document.createElement('div');
            ScreenReaderAlert.alertNode.setAttribute('data-automation-id', 'screen-reader-alert-static');
            document.body.appendChild(ScreenReaderAlert.alertNode);
        }
        react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ScreenReaderAlert, { readingMode: readingMode !== undefined ? readingMode : 1 /* ReadAfterOtherContent */, indicator: ScreenReaderAlert.alertIndicator++, message: message }), ScreenReaderAlert.alertNode);
    };
    ScreenReaderAlert.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ScreenReaderAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].screenReaderAlert, key: this._renderIndex++ }, this.props.message && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { role: this._role, "aria-live": _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_3__["ARIA_LIVE_MAPPING"].get(this.props.readingMode), "aria-atomic": true }, this.props.message))));
    };
    Object.defineProperty(ScreenReaderAlert.prototype, "_role", {
        get: function () {
            return this.props.readingMode === 2 /* ReadImmediately */ ? 'alert' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    // The default props that will automatically be applied to this component.
    ScreenReaderAlert.defaultProps = _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_3__["defaultScreenReaderAlertProps"];
    ScreenReaderAlert.alertIndicator = 0;
    return ScreenReaderAlert;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (ScreenReaderAlert);


/***/ }),

/***/ "GiGj":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/PagePickerSuggestions.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_d7d6ff7b{height:200px;border:1px solid \"[theme:neutraltertiary, default: #a19f9d]\";overflow:auto}.a_a_d7d6ff7b:hover{border-color:\"[theme:neutralDark, default: #201f1e]\"}.a_a_d7d6ff7b .b_a_d7d6ff7b{overflow:visible}.c_a_d7d6ff7b{cursor:pointer}.c_a_d7d6ff7b.e_a_d7d6ff7b .ms-DetailsRow{background-color:\"[theme:neutralLight, default: #edebe9]\"}.f_a_d7d6ff7b,.g_a_d7d6ff7b{font-size:14px;color:\"[theme:neutralPrimary, default: #323130]\"}.h_a_d7d6ff7b{font-size:14px;color:\"[theme:neutralSecondary, default: #605e5c]\"}.i_a_d7d6ff7b{padding-bottom:4px}.i_a_d7d6ff7b,.j_a_d7d6ff7b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.j_a_d7d6ff7b{color:\"[theme:neutralTertiary, default: #a19f9d]\"}.j_a_d7d6ff7b,.k_a_d7d6ff7b{font-size:12px}[dir=ltr] .k_a_d7d6ff7b{padding-left:10px}[dir=rtl] .k_a_d7d6ff7b{padding-right:10px}.l_a_d7d6ff7b{height:100%;display:-ms-flexbox;display:flex;overflow:hidden}", ""]);


/***/ }),

/***/ "ItMH":
/*!*********************************!*\
  !*** ./lib/PagePickerSearch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _copied_screenReaderAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copied/screenReaderAlert */ "JB+B");
/* harmony import */ var _dataProviders_LinkDataProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataProviders/LinkDataProvider */ "M7Bk");
/* harmony import */ var _PagePickerSuggestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PagePickerSuggestions */ "dNPk");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PagePickerComponent.module.scss */ "bjXu");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */









var GET_PAGE_LINKS_DELAY_IN_MILLISECONDS = 400;
var NOT_EMPTY_REG_EXP = /\S/;
var MR_SPACES_SUB_CONTENT_TYPE = '0043153F945E98468297E67C3EEE43AB70';
var PagePickerSearch = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagePickerSearch, _super);
    function PagePickerSearch(props) {
        var _this = _super.call(this, props) || this;
        _this._handleSearchInputChanged = function (event, searchInput) {
            // Will only read the screen reader alert after user typed something.
            _this.setState({
                shouldReadScreenReaderAlert: true
            });
            _this.renderSuggestions(searchInput);
        };
        _this._handleSuggestionSelect = function (link, selectedIndex) {
            _this.setState(function (prevState) {
                var newSuggestions = prevState.suggestions.map(function (suggestion, index) {
                    if (index === selectedIndex) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, suggestion), { isSelected: true });
                    }
                    else {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, suggestion), { isSelected: false });
                    }
                });
                return {
                    suggestions: newSuggestions
                };
            });
            _this.props.onSuggestionSelect(link);
        };
        _this.state = {
            isSuggestionLoading: false,
            searchInput: '',
            shouldReadScreenReaderAlert: false,
            shouldSearch: false,
            suggestions: []
        };
        var subContentTypeId = _this.props.isMixedRealityMode ? MR_SPACES_SUB_CONTENT_TYPE : undefined;
        _this._dataProvider =
             false || ( true && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["EnvironmentType"].Local)
                ? new (__webpack_require__(/*! ./dataProviders/MockLinkDataProvider */ "OFYg").default)()
                : new _dataProviders_LinkDataProvider__WEBPACK_IMPORTED_MODULE_5__["default"](_this.props.serviceScope, subContentTypeId, _this.props.qosPrefix || '');
        _this._operationId = 0;
        _this._renderSearchPageSuggestions = _this._async.debounce(_this._renderSearchPageSuggestions, GET_PAGE_LINKS_DELAY_IN_MILLISECONDS);
        return _this;
    }
    PagePickerSearch.prototype.render = function () {
        var suggestionsLabel = this.state.shouldSearch
            ? this.props.isMixedRealityMode
                ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchForSpacesLabel"]
                : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchForPagesLabel"]
            : this.props.isMixedRealityMode
                ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["RecentSpacesLabel"]
                : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["RecentPagesLabel"];
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("section", null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TextField"], { className: !this.props.isMixedRealityMode
                    ? Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].linkDialogInput, _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].searchInput)
                    : Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].linkDialogInput), "data-automation-id": 'pagePickerSearchTextField', label: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchTextFieldLabel"], onChange: this._handleSearchInputChanged, placeholder: this.props.isMixedRealityMode
                    ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchSpacesTextFieldPlaceholder"]
                    : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchPagesTextFieldPlaceholder"], value: this.state.searchInput }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PagePickerSuggestions__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: this.state.isSuggestionLoading, label: suggestionsLabel, onSuggestionSelect: this._handleSuggestionSelect, suggestions: this.state.suggestions, userInput: this.state.searchInput }),
            this.state.shouldReadScreenReaderAlert && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_copied_screenReaderAlert__WEBPACK_IMPORTED_MODULE_4__["ScreenReaderAlert"], { message: this._screenReaderAlert })));
    };
    PagePickerSearch.prototype.componentDidMount = function () {
        this.renderSuggestions(this.props.defaultQuery || '');
    };
    PagePickerSearch.prototype.renderSuggestions = function (searchInput) {
        var shouldSearch = NOT_EMPTY_REG_EXP.test(searchInput);
        this.setState({
            isSuggestionLoading: shouldSearch,
            searchInput: searchInput,
            shouldSearch: shouldSearch,
            suggestions: []
        });
        if (shouldSearch) {
            // Since _renderSearchPageSuggestions is a debounce function, we need to increment operationId here.
            this._renderSearchPageSuggestions(searchInput, ++this._operationId);
        }
        else {
            // Will show the recent pages if there is no user input for the search text field.
            this._renderRecentPageSuggestions();
        }
    };
    Object.defineProperty(PagePickerSearch.prototype, "_screenReaderAlert", {
        get: function () {
            if (this.state.isSuggestionLoading) {
                return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["IsSearching"];
            }
            else if (!this.state.suggestions || this.state.suggestions.length === 0) {
                return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["NoResultLabel"];
            }
            else if (this.state.shouldSearch) {
                return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["SearchResultsShowing"];
            }
            else {
                return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_7__["RecentPagesShowing"];
            }
        },
        enumerable: true,
        configurable: true
    });
    PagePickerSearch.prototype._renderSearchPageSuggestions = function (value, operationId) {
        var _this = this;
        this._dataProvider.getPageLinksByTitle(value).then(function (links) {
            if (_this.props.isMixedRealityMode) {
                _this._removeCurrentUrl(links);
            }
            if (operationId === _this._operationId) {
                _this.setState({
                    isSuggestionLoading: false,
                    suggestions: links
                });
            }
        });
    };
    PagePickerSearch.prototype._renderRecentPageSuggestions = function () {
        var _this = this;
        var operationId = ++this._operationId;
        // We only send request to get recent pages once.
        if (!this._recentPageSuggestions) {
            this.setState({
                isSuggestionLoading: true
            });
            this._dataProvider.getRecentPageLinks().then(function (links) {
                if (_this.props.isMixedRealityMode) {
                    _this._removeCurrentUrl(links);
                }
                _this._recentPageSuggestions = links;
                if (operationId === _this._operationId) {
                    _this.setState({
                        isSuggestionLoading: false,
                        suggestions: _this._recentPageSuggestions
                    });
                }
            });
        }
        else {
            this.setState({
                isSuggestionLoading: false,
                suggestions: this._recentPageSuggestions
            });
        }
    };
    PagePickerSearch.prototype._removeCurrentUrl = function (links) {
        links.some(function (link, index) {
            var currentPageUrl = "" + window.location.origin + window.location.pathname;
            if (currentPageUrl === link.url) {
                links.splice(index, 1);
                return true;
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], PagePickerSearch.prototype, "renderSuggestions", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], PagePickerSearch.prototype, "_renderSearchPageSuggestions", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["autobind"]
    ], PagePickerSearch.prototype, "_renderRecentPageSuggestions", null);
    return PagePickerSearch;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PagePickerSearch);


/***/ }),

/***/ "JB+B":
/*!***********************************************!*\
  !*** ./lib/copied/screenReaderAlert/index.js ***!
  \***********************************************/
/*! exports provided: ScreenReaderAlert, ARIA_LIVE_MAPPING, defaultScreenReaderAlertProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScreenReaderAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenReaderAlert */ "ANju");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenReaderAlert", function() { return _ScreenReaderAlert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenReaderAlertProps */ "RiH3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARIA_LIVE_MAPPING", function() { return _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_1__["ARIA_LIVE_MAPPING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultScreenReaderAlertProps", function() { return _ScreenReaderAlertProps__WEBPACK_IMPORTED_MODULE_1__["defaultScreenReaderAlertProps"]; });





/***/ }),

/***/ "KsJ/":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/PagePickerSuggestionsNoResult.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".u_e_d7d6ff7b{height:100%;padding:0 10px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.v_e_d7d6ff7b{margin-bottom:18px;font-size:32px}[dir=ltr] .v_e_d7d6ff7b{margin-right:14px}[dir=rtl] .v_e_d7d6ff7b{margin-left:14px}.w_e_d7d6ff7b{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.x_e_d7d6ff7b{font-size:21px;font-weight:100;margin-bottom:4px}.x_e_d7d6ff7b,.y_e_d7d6ff7b{color:\"[theme:neutralSecondary, default: #605e5c]\"}.y_e_d7d6ff7b{font-size:14px;font-weight:400}", ""]);


/***/ }),

/***/ "OFYg":
/*!***************************************************!*\
  !*** ./lib/dataProviders/MockLinkDataProvider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ILinkDataProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILinkDataProvider */ "C6Tv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


var MockLinkDataProvider = /** @class */ (function () {
    function MockLinkDataProvider() {
    }
    MockLinkDataProvider.prototype.getPageLinksByTitle = function (userInput) {
        var fakeLinks = [];
        for (var i = 0; i < 10; i++) {
            fakeLinks.push({
                id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid(),
                isSearchResult: Boolean(i % 2),
                lastEditor: 'Yusong Liu',
                lastModifiedDate: '4/27/2017',
                shouldOpenInNewTab: true,
                title: "fake text " + i,
                url: "https://fakeurl" + i + ".test"
            });
        }
        return Promise.resolve(fakeLinks);
    };
    MockLinkDataProvider.prototype.getRecentPageLinks = function () {
        var fakeLinks = [];
        for (var i = 0; i < _ILinkDataProvider__WEBPACK_IMPORTED_MODULE_1__["RECENT_PAGES_LIMIT"]; i++) {
            fakeLinks.push({
                id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid(),
                isSearchResult: Boolean(i % 2),
                lastEditor: 'Yusong Liu',
                lastModifiedDate: '4/27/2017',
                shouldOpenInNewTab: true,
                title: "recent fake text " + i,
                url: "https://fakeurl" + i + ".test"
            });
        }
        return Promise.resolve(fakeLinks);
    };
    return MockLinkDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (MockLinkDataProvider);


/***/ }),

/***/ "PD0V":
/*!******************************************************!*\
  !*** ./lib/PagePickerSuggestionsNoResult.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PagePickerSuggestionsNoResult.module.css */ "KsJ/");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Pc1x":
/*!***********************************************************************!*\
  !*** ./lib/copied/screenReaderAlert/ScreenReaderAlert.module.scss.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ScreenReaderAlert.module.css */ "6G+p");
var styles = {
    screenReaderAlert: 'm_b_d7d6ff7b'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "RiH3":
/*!****************************************************************!*\
  !*** ./lib/copied/screenReaderAlert/ScreenReaderAlertProps.js ***!
  \****************************************************************/
/*! exports provided: ARIA_LIVE_MAPPING, defaultScreenReaderAlertProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_LIVE_MAPPING", function() { return ARIA_LIVE_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScreenReaderAlertProps", function() { return defaultScreenReaderAlertProps; });
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
var ARIA_LIVE_MAPPING = new Map();
ARIA_LIVE_MAPPING.set(1 /* ReadAfterOtherContent */, 'polite');
ARIA_LIVE_MAPPING.set(2 /* ReadImmediately */, 'assertive');
var defaultScreenReaderAlertProps = {
    message: '',
    readingMode: 1 /* ReadAfterOtherContent */,
    indicator: undefined
};


/***/ }),

/***/ "TzC+":
/*!**********************************************!*\
  !*** ./lib/PagePickerSuggestions.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PagePickerSuggestions.module.css */ "GiGj");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Ug7T":
/*!*********************************************!*\
  !*** ./lib/PagePickerSuggestionsRowCell.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _PagePickerSuggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagePickerSuggestions */ "dNPk");
/* harmony import */ var _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PagePickerSuggestions.module.scss */ "YVB/");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */






var PagePickerSuggestionsRowCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagePickerSuggestionsRowCell, _super);
    function PagePickerSuggestionsRowCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagePickerSuggestionsRowCell._isCurrentPage = function (itemUrl) {
        var currentPageUrl = "" + window.location.origin + window.location.pathname;
        return currentPageUrl === itemUrl;
    };
    PagePickerSuggestionsRowCell.prototype.render = function () {
        if (this.props.column.fieldName === _PagePickerSuggestions__WEBPACK_IMPORTED_MODULE_4__["TITLE_FIELD_NAME"]) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].suggestionsTitleColumn, title: this.props.item.url },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].suggestionsTitlePrimaryText },
                    this.props.item[this.props.column.fieldName],
                    PagePickerSuggestionsRowCell._isCurrentPage(this.props.item.url) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].currentPage }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["CurrentPage"]))),
                this.props.item.isSearchResult && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].suggestionsTitleSecondaryText }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_3__["PageContentContainsSearchText"], this.props.userInput)))));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].suggestionsOtherColumn, title: this.props.item[this.props.column.fieldName] }, this.props.item[this.props.column.fieldName]));
        }
    };
    return PagePickerSuggestionsRowCell;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PagePickerSuggestionsRowCell);


/***/ }),

/***/ "WCU8":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/PagePickerComponent.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".n_c_d7d6ff7b{min-width:540px}.n_c_d7d6ff7b.o_c_d7d6ff7b{min-width:360px}.n_c_d7d6ff7b .p_c_d7d6ff7b{margin-top:4px;font-size:14px}[dir=ltr] .n_c_d7d6ff7b .p_c_d7d6ff7b{float:left}[dir=rtl] .n_c_d7d6ff7b .p_c_d7d6ff7b{float:right}.q_c_d7d6ff7b.ms-TextField{margin-bottom:2px}.q_c_d7d6ff7b.ms-TextField.r_c_d7d6ff7b{margin-top:20px}.s_c_d7d6ff7b{margin-top:15px}.t_c_d7d6ff7b{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "YVB/":
/*!**************************************************!*\
  !*** ./lib/PagePickerSuggestions.module.scss.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PagePickerSuggestions.module.css */ "TzC+");
var styles = {
    suggestions: 'a_a_d7d6ff7b',
    suggestionsList: 'b_a_d7d6ff7b',
    suggestionsRow: 'c_a_d7d6ff7b',
    isRowSelected: 'e_a_d7d6ff7b',
    suggestionsHeader: 'f_a_d7d6ff7b',
    suggestionsTitleColumn: 'g_a_d7d6ff7b',
    suggestionsOtherColumn: 'h_a_d7d6ff7b',
    suggestionsTitlePrimaryText: 'i_a_d7d6ff7b',
    suggestionsTitleSecondaryText: 'j_a_d7d6ff7b',
    currentPage: 'k_a_d7d6ff7b',
    spinner: 'l_a_d7d6ff7b'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "bjXu":
/*!************************************************!*\
  !*** ./lib/PagePickerComponent.module.scss.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PagePickerComponent.module.css */ "yMNK");
var styles = {
    linkDialogContainer: 'n_c_d7d6ff7b',
    isCompact: 'o_c_d7d6ff7b',
    unlinkButton: 'p_c_d7d6ff7b',
    linkDialogInput: 'q_c_d7d6ff7b',
    searchInput: 'r_c_d7d6ff7b',
    openLinkInNewTabCheckbox: 's_c_d7d6ff7b',
    screenReaderOnly: 't_c_d7d6ff7b'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "dNPk":
/*!**************************************!*\
  !*** ./lib/PagePickerSuggestions.js ***!
  \**************************************/
/*! exports provided: TITLE_FIELD_NAME, MODIFIED_FIELD_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_FIELD_NAME", function() { return TITLE_FIELD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFIED_FIELD_NAME", function() { return MODIFIED_FIELD_NAME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/DetailsList */ "0q4O");
/* harmony import */ var office_ui_fabric_react_lib_utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PagePickerSuggestions.module.scss */ "YVB/");
/* harmony import */ var _PagePickerSuggestionsNoResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PagePickerSuggestionsNoResult */ "e1ov");
/* harmony import */ var _PagePickerSuggestionsRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PagePickerSuggestionsRow */ "6+Mi");
/* harmony import */ var _PagePickerSuggestionsRowCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PagePickerSuggestionsRowCell */ "Ug7T");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */











var TITLE_FIELD_NAME = 'title';
var MODIFIED_FIELD_NAME = 'lastModifiedDate';
var PagePickerSuggestions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagePickerSuggestions, _super);
    function PagePickerSuggestions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getItemUrl = function (item) { return item.url; };
        _this._setSelection = function (item, index, event) {
            if (event.which === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                _this.props.onSuggestionSelect(item, index);
            }
        };
        _this._renderRow = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PagePickerSuggestionsRow__WEBPACK_IMPORTED_MODULE_9__["default"], { detailsRowProps: props, onSelect: _this.props.onSuggestionSelect });
        };
        _this._renderRowCell = function (item, index, column) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PagePickerSuggestionsRowCell__WEBPACK_IMPORTED_MODULE_10__["default"], { item: item, index: index, column: column, userInput: _this.props.userInput }));
        };
        return _this;
    }
    PagePickerSuggestions.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Label"], null, this.props.label),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].suggestions, "data-automation-id": 'pagePickerSuggestions' }, this._renderSuggestionsContent())));
    };
    PagePickerSuggestions.prototype._renderSuggestionsContent = function () {
        if (this.props.isLoading) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Spinner"], { className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].spinner, size: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["SpinnerSize"].large });
        }
        else if (!this.props.suggestions || this.props.suggestions.length === 0) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PagePickerSuggestionsNoResult__WEBPACK_IMPORTED_MODULE_8__["default"], null);
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["DetailsList"], { ariaLabel: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["SuggestionsListAriaLabel"], this.props.label), checkboxVisibility: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden, className: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].suggestionsList, columns: PagePickerSuggestions._suggestionsColumns, compact: true, getKey: this._getItemUrl, items: this.props.suggestions, layoutMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns, onRenderItemColumn: this._renderRowCell, onRenderRow: this._renderRow, selectionMode: office_ui_fabric_react_lib_utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].none, onItemInvoked: this._setSelection }));
        }
    };
    PagePickerSuggestions._suggestionsColumns = [
        {
            columnActionsMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["ColumnActionsMode"].disabled,
            fieldName: TITLE_FIELD_NAME,
            headerClassName: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].suggestionsHeader,
            isResizable: true,
            key: TITLE_FIELD_NAME,
            minWidth: 320,
            name: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["TitleSuggestionsColumnName"]
        },
        {
            columnActionsMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["ColumnActionsMode"].disabled,
            fieldName: MODIFIED_FIELD_NAME,
            headerClassName: _PagePickerSuggestions_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].suggestionsHeader,
            isResizable: true,
            key: MODIFIED_FIELD_NAME,
            minWidth: 90,
            name: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_6__["ModifiedSuggestionsColumnName"]
        }
    ];
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], PagePickerSuggestions.prototype, "_renderSuggestionsContent", null);
    return PagePickerSuggestions;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PagePickerSuggestions);


/***/ }),

/***/ "e1ov":
/*!**********************************************!*\
  !*** ./lib/PagePickerSuggestionsNoResult.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagePickerSuggestionsNoResult; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PagePickerSuggestionsNoResult.module.scss */ "kyVz");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




function PagePickerSuggestionsNoResult() {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].noResultFoundContainer },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Icon"], { iconName: 'Search', className: _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].noResultFoundIcon }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].noResultFoundLabelContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].noResultLabel }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["NoResultLabel"]),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PagePickerSuggestionsNoResult_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tryAgainLabel }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["TryAgainLabel"]))));
}


/***/ }),

/***/ "kyVz":
/*!**********************************************************!*\
  !*** ./lib/PagePickerSuggestionsNoResult.module.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PagePickerSuggestionsNoResult.module.css */ "PD0V");
var styles = {
    noResultFoundContainer: 'u_e_d7d6ff7b',
    noResultFoundIcon: 'v_e_d7d6ff7b',
    noResultFoundLabelContainer: 'w_e_d7d6ff7b',
    noResultLabel: 'x_e_d7d6ff7b',
    tryAgainLabel: 'y_e_d7d6ff7b'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: DialogTitle, UrlTextFieldLabel, UrlTextFieldAriaLabel, UrlTextFieldError, TitleTextFieldLabel, RecentPagesLabel, SearchForPagesLabel, RecentSpacesLabel, SearchForSpacesLabel, NoResultLabel, TryAgainLabel, OpenLinkInNewTabLabel, SaveButtonLabel, CancelButtonLabel, UnlinkButtonLabel, TitleSuggestionsColumnName, EditorSuggestionsColumnName, ModifiedSuggestionsColumnName, PageContentContainsSearchText, CurrentPage, SearchTextFieldLabel, SearchPagesTextFieldPlaceholder, SearchSpacesTextFieldPlaceholder, DialogAriaDescription, SuggestionsListAriaLabel, SaveButtonDisabledScreenReaderAlert, SaveButtonEnabledScreenReaderAlert, PageIsSelectedScreenReaderAlert, IsSearching, SearchResultsShowing, RecentPagesShowing, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DialogTitle\":\"DialogTitle\",\"UrlTextFieldLabel\":\"UrlTextFieldLabel\",\"UrlTextFieldAriaLabel\":\"UrlTextFieldAriaLabel\",\"UrlTextFieldError\":\"UrlTextFieldError\",\"TitleTextFieldLabel\":\"TitleTextFieldLabel\",\"RecentPagesLabel\":\"RecentPagesLabel\",\"SearchForPagesLabel\":\"SearchForPagesLabel\",\"RecentSpacesLabel\":\"RecentSpacesLabel\",\"SearchForSpacesLabel\":\"SearchForSpacesLabel\",\"NoResultLabel\":\"NoResultLabel\",\"TryAgainLabel\":\"TryAgainLabel\",\"OpenLinkInNewTabLabel\":\"OpenLinkInNewTabLabel\",\"SaveButtonLabel\":\"SaveButtonLabel\",\"CancelButtonLabel\":\"CancelButtonLabel\",\"UnlinkButtonLabel\":\"UnlinkButtonLabel\",\"TitleSuggestionsColumnName\":\"TitleSuggestionsColumnName\",\"EditorSuggestionsColumnName\":\"EditorSuggestionsColumnName\",\"ModifiedSuggestionsColumnName\":\"ModifiedSuggestionsColumnName\",\"PageContentContainsSearchText\":\"PageContentContainsSearchText\",\"CurrentPage\":\"CurrentPage\",\"SearchTextFieldLabel\":\"SearchTextFieldLabel\",\"SearchPagesTextFieldPlaceholder\":\"SearchPagesTextFieldPlaceholder\",\"SearchSpacesTextFieldPlaceholder\":\"SearchSpacesTextFieldPlaceholder\",\"DialogAriaDescription\":\"DialogAriaDescription\",\"SuggestionsListAriaLabel\":\"SuggestionsListAriaLabel\",\"SaveButtonDisabledScreenReaderAlert\":\"SaveButtonDisabledScreenReaderAlert\",\"SaveButtonEnabledScreenReaderAlert\":\"SaveButtonEnabledScreenReaderAlert\",\"PageIsSelectedScreenReaderAlert\":\"PageIsSelectedScreenReaderAlert\",\"IsSearching\":\"IsSearching\",\"SearchResultsShowing\":\"SearchResultsShowing\",\"RecentPagesShowing\":\"RecentPagesShowing\"}");

/***/ }),

/***/ "pWhw":
/*!************************************!*\
  !*** ./lib/PagePickerComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_components_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Checkbox */ "6bbY");
/* harmony import */ var office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Dialog */ "/C2V");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _copied_screenReaderAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./copied/screenReaderAlert */ "JB+B");
/* harmony import */ var _PagePickerSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PagePickerSearch */ "ItMH");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PagePickerComponent.module.scss */ "bjXu");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */











var VALIDATE_URL_DELAY_IN_MILLISECONDS = 1000;
var DEFAULT_URL = 'https://';
var NOT_EMPTY_REG_EXP = /\S/;
// tslint:disable-next-line:max-line-length
var URL_REG_EXP = new RegExp('((^https?://)|(^ftp://)|(^file://)|(^mailto:)|(^news:)|(^pnm://)|(^mms://)|(^/)|(^#)|(^\\\\)).+', 'i');
var PagePickerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagePickerComponent, _super);
    function PagePickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._handleSuggestionSelect = function (link) {
            _this.setState(function (prevState) {
                var newState = {
                    isJustOpened: false,
                    linkUrl: link.url,
                    urlTextFieldError: PagePickerComponent._getUrlErrorMessage(link.url)
                };
                if (!prevState.isTitleUserInput) {
                    newState.linkTitle = link.title;
                }
                return newState;
            });
            _copied_screenReaderAlert__WEBPACK_IMPORTED_MODULE_7__["ScreenReaderAlert"].read(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["PageIsSelectedScreenReaderAlert"], link.title));
        };
        _this._handleDismissed = function () {
            if (_this._resolveOnDismissed) {
                _this._resolveOnDismissed();
            }
        };
        _this._handleKeyDown = function (event) {
            if (event.key === 'Enter' && URL_REG_EXP.test(_this.state.linkUrl)) {
                _this._async.setTimeout(function () {
                    _this._handleSave();
                }, 0);
            }
        };
        _this._handleLinkUrlChanged = function (event, userInput) {
            _this.setState(function (prevState) {
                var newState = {
                    isJustOpened: false,
                    linkUrl: userInput,
                    urlTextFieldError: ''
                };
                // We will automatically change the text to display to match the URL if
                // it's empty or it's not a suggested link title.
                if (!prevState.isTitleUserInput &&
                    (!prevState.linkTitle || prevState.linkTitle === prevState.linkUrl)) {
                    newState.linkTitle = userInput;
                }
                return newState;
            });
            _this._validateUrl();
        };
        _this._handleLinkTitleChanged = function (event, userInput) {
            _this.setState({
                isTitleUserInput: userInput !== '',
                linkTitle: userInput
            });
        };
        _this._handleCheckBoxChange = function (event, value) {
            _this.setState({
                shouldOpenLinkInNewTab: value
            });
        };
        _this._getFocusBackFromCKEditor = function () {
            // Copied from sp-client/libraries/sp-canvas/src/sp-rte/formattingbar/SPRteLinkDialog.tsx
            // We need to add a timeout here because there is some kind of race condition with
            // some event handler for CK editor. The focus gets stolen if we focus too early.
            _this._async.setTimeout(function () {
                if (_this._urlTextField) {
                    _this._urlTextField.select();
                    if (_this._urlTextField.value) {
                        _this._urlTextField.setSelectionStart(_this._urlTextField.value.length);
                        _this._urlTextField.setSelectionEnd(_this._urlTextField.value.length);
                    }
                    _this._urlTextField.focus();
                }
            }, 300);
        };
        _this._validateUrl = function () {
            _this.setState(function (prevState) {
                var linkUrl = prevState.linkUrl;
                var uri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["Uri"](prevState.linkUrl);
                var scheme = uri.getScheme();
                if (linkUrl && !scheme && !URL_REG_EXP.test(linkUrl)) {
                    linkUrl = "" + DEFAULT_URL + linkUrl;
                }
                return {
                    linkUrl: linkUrl,
                    urlTextFieldError: PagePickerComponent._getUrlErrorMessage(linkUrl)
                };
            });
        };
        _this.state = {
            isEditing: false,
            isJustOpened: true,
            isOpen: false,
            isTitleUserInput: false,
            linkTitle: '',
            linkUrl: '',
            shouldOpenLinkInNewTab: false,
            urlTextFieldError: ''
        };
        _this._dialogAriaDescriptionId = "page-picker-description-" + Math.random().toString();
        _this._validateUrl = _this._async.debounce(_this._validateUrl, VALIDATE_URL_DELAY_IN_MILLISECONDS);
        // @todo #404392 autobind fail in unit test in Phantomjs
        _this._handleSave = _this._handleSave.bind(_this);
        _this._handleCancel = _this._handleCancel.bind(_this);
        _this._handleUnlink = _this._handleUnlink.bind(_this);
        return _this;
    }
    PagePickerComponent._getUrlErrorMessage = function (url) {
        return !URL_REG_EXP.test(url) ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["UrlTextFieldError"] : '';
    };
    PagePickerComponent._getContentStyles = function () {
        return {
            content: {
                width: '100%' // Override width since we use display: flex outside.
            }
        };
    };
    PagePickerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!prevState.isOpen && this.state.isOpen) {
            this._getFocusBackFromCKEditor();
        }
    };
    PagePickerComponent.prototype.render = function () {
        var _a;
        var containerClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])(_PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].linkDialogContainer, (_a = {},
            _a[_PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].isCompact] = this.props.compact,
            _a));
        var isSaveButtonDisabled = !URL_REG_EXP.test(this.state.linkUrl);
        var subtitleAriaId = !this.props.compact ? this._dialogAriaDescriptionId : '';
        var screenReaderAlert = '';
        if (!this.state.isJustOpened) {
            screenReaderAlert = isSaveButtonDisabled
                ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["SaveButtonDisabledScreenReaderAlert"]
                : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["SaveButtonEnabledScreenReaderAlert"];
        }
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_3__["Dialog"], { dialogContentProps: {
                title: this.props.title || _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["DialogTitle"],
                type: office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_3__["DialogType"].normal,
                styles: PagePickerComponent._getContentStyles
            }, hidden: !this.state.isOpen, modalProps: {
                containerClassName: containerClassName,
                isBlocking: true,
                subtitleAriaId: subtitleAriaId,
                onDismissed: this._handleDismissed
            }, onDismiss: this._handleCancel, ignoreExternalFocusing: ignoreExternalFocusing },
            subtitleAriaId && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].screenReaderOnly, id: subtitleAriaId }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["DialogAriaDescription"])),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_copied_screenReaderAlert__WEBPACK_IMPORTED_MODULE_7__["ScreenReaderAlert"], { message: screenReaderAlert }),
            !this.props.isMixedRealityMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["TextField"], { ariaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["UrlTextFieldAriaLabel"], className: _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].linkDialogInput, componentRef: this._resolveRef('_urlTextField'), "data-automation-id": 'pagePickerUrlTextField', errorMessage: !this.state.isJustOpened ? this.state.urlTextFieldError : '', label: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["UrlTextFieldLabel"], onChange: this._handleLinkUrlChanged, onKeyDown: this._handleKeyDown, placeholder: DEFAULT_URL, value: this.state.linkUrl })),
            !this.props.isMixedRealityMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["TextField"], { className: _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].linkDialogInput, "data-automation-id": 'pagePickerTitleTextField', label: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["TitleTextFieldLabel"], onChange: this._handleLinkTitleChanged, onKeyDown: this._handleKeyDown, value: this.state.linkTitle })),
            !this.props.compact && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PagePickerSearch__WEBPACK_IMPORTED_MODULE_8__["default"], { isMixedRealityMode: this.props.isMixedRealityMode, serviceScope: this.props.serviceScope, qosPrefix: this.props.qosPrefix, onSuggestionSelect: this._handleSuggestionSelect, defaultQuery: this._getDefaultSearchQuery() })),
            !this.props.isMixedRealityMode && !this.props.compact && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Checkbox__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], { "data-automation-id": 'pagePickerOpenLinkInNewTabCheckbox', checked: this.state.shouldOpenLinkInNewTab, className: _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].openLinkInNewTabCheckbox, label: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["OpenLinkInNewTabLabel"], onChange: this._handleCheckBoxChange })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_3__["DialogFooter"], null,
                this.state.isEditing && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["Link"], { className: _PagePickerComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].unlinkButton, "data-automation-id": 'pagePickerUnlinkButton', onClick: this._handleUnlink }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["UnlinkButtonLabel"])),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], { "data-automation-id": 'pagePickerSaveButton', disabled: isSaveButtonDisabled, onClick: this._handleSave, text: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["SaveButtonLabel"] }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["DefaultButton"], { "data-automation-id": 'pagePickerCancelButton', onClick: this._handleCancel, text: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_9__["CancelButtonLabel"] }))));
    };
    PagePickerComponent.prototype.open = function (link) {
        var isEditing = Boolean(link && link.title && link.url);
        var isTitleUserInput = !this.props.isMixedRealityMode && Boolean(link && link.title);
        var absoluteUrl = '';
        if (link && link.url) {
            // We only support absolute URL in page picker.
            // If we got a server relative URL, we convert it to absolute URL.
            if (link.url[0] === '/') {
                absoluteUrl = window.location.protocol + "//" + window.location.host + link.url;
            }
            else {
                absoluteUrl = link.url;
            }
        }
        this.setState({
            isEditing: isEditing,
            isOpen: true,
            linkTitle: link ? link.title : '',
            linkUrl: absoluteUrl,
            isTitleUserInput: isTitleUserInput,
            isJustOpened: true,
            shouldOpenLinkInNewTab: link ? link.shouldOpenInNewTab : false,
            urlTextFieldError: PagePickerComponent._getUrlErrorMessage(absoluteUrl)
        });
    };
    PagePickerComponent.prototype.close = function () {
        this.setState({
            isOpen: false
        });
    };
    Object.defineProperty(PagePickerComponent.prototype, "_afterDismissed", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve) { return (_this._resolveOnDismissed = resolve); });
        },
        enumerable: true,
        configurable: true
    });
    PagePickerComponent.prototype._handleSave = function () {
        var _this = this;
        this.close();
        var props = {
            title: NOT_EMPTY_REG_EXP.test(this.state.linkTitle) ? this.state.linkTitle : this.state.linkUrl,
            url: this.state.linkUrl,
            shouldOpenInNewTab: this.state.shouldOpenLinkInNewTab
        };
        this._afterDismissed.then(function () {
            _this.props.onSelect(props);
        });
    };
    PagePickerComponent.prototype._handleCancel = function () {
        this.close();
        var onCancel = this.props.onCancel;
        this._afterDismissed.then(function () {
            if (onCancel) {
                onCancel();
            }
        });
    };
    PagePickerComponent.prototype._handleUnlink = function () {
        this.close();
        var onUnlink = this.props.onUnlink;
        this._afterDismissed.then(function () {
            if (onUnlink) {
                onUnlink();
            }
        });
    };
    PagePickerComponent.prototype._getDefaultSearchQuery = function () {
        var _a = this.state, linkUrl = _a.linkUrl, linkTitle = _a.linkTitle;
        return NOT_EMPTY_REG_EXP.test(linkTitle) && (linkUrl === '' || linkUrl === DEFAULT_URL) ? linkTitle : '';
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], PagePickerComponent.prototype, "open", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], PagePickerComponent.prototype, "close", null);
    return PagePickerComponent;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PagePickerComponent);


/***/ }),

/***/ "wned":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/copied/screenReaderAlert/ScreenReaderAlert.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".m_b_d7d6ff7b{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "yMNK":
/*!********************************************!*\
  !*** ./lib/PagePickerComponent.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PagePickerComponent.module.css */ "WCU8");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

}]);
//# sourceMappingURL=chunk.page-picker-component_[locale].js.map