(window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] = window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] || []).push([["debug-prompt-components"],{

/***/ "9BRi":
/*!***************************************************************!*\
  !*** ./lib/debug/debugComponents/debugComponents.module.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".n_f_77a7cb2f{min-width:500px!important;max-width:50vw}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  dialogContainer: "n_f_77a7cb2f"
});


/***/ }),

/***/ "IS8z":
/*!**************************************************************!*\
  !*** ./lib/debug/debugComponents/debugError/DebugError.resx ***!
  \**************************************************************/
/*! exports provided: debugManifestErrorDetail, debugManifestErrorDismissButtonText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"debugManifestErrorDetail\":\"debugManifestErrorDetail\",\"debugManifestErrorDismissButtonText\":\"debugManifestErrorDismissButtonText\"}");

/***/ }),

/***/ "J6sC":
/*!*********************************************************************!*\
  !*** ./lib/debug/debugComponents/debugError/DebugError.module.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".s_h_77a7cb2f{-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.t_h_77a7cb2f{font-family:monospace;-webkit-user-select:text;-ms-user-select:text;user-select:text}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  detailText: "s_h_77a7cb2f",
  errorText: "t_h_77a7cb2f"
});


/***/ }),

/***/ "bEFm":
/*!********************************************!*\
  !*** ./lib/debug/debugComponents/index.js ***!
  \********************************************/
/*! exports provided: showDebugPrompt, showError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDebugPrompt", function() { return showDebugPrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "7Nbw");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _debugPrompt_DebugPrompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debugPrompt/DebugPrompt */ "gmkQ");
/* harmony import */ var _debugError_DebugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugError/DebugError */ "sqhZ");
/* harmony import */ var _debugPrompt_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./debugPrompt/DebugPrompt.resx */ "wrZQ");
var _debugPrompt_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./debugPrompt/DebugPrompt.resx */ "wrZQ", 1);





var _errorIsShown = false;
var _containerElement;
function showDebugPrompt(options) {
    return new Promise(function (resolve) {
        var title = options.loaderRequested && options.manifestsRequested
            ? _debugPrompt_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_4__["allowDebugLoaderAndManifestsTitle"]
            : options.loaderRequested
                ? _debugPrompt_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_4__["allowDebugLoaderTitle"]
                : _debugPrompt_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_4__["allowDebugManifestsTitle"];
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_debugPrompt_DebugPrompt__WEBPACK_IMPORTED_MODULE_2__["default"], { title: title, callback: resolve }), _ensureEmptyContainerElement());
    });
}
function showError(innerError, errorText, title) {
    // Only show the prompt once
    if (!_errorIsShown) {
        _errorIsShown = true;
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_debugError_DebugError__WEBPACK_IMPORTED_MODULE_3__["default"], { innerError: innerError, errorText: errorText, title: title }), _ensureEmptyContainerElement());
    }
}
function _ensureEmptyContainerElement() {
    if (!_containerElement) {
        _containerElement = document.createElement('div');
        document.body.appendChild(_containerElement);
    }
    return _containerElement;
}


/***/ }),

/***/ "gmkQ":
/*!**************************************************************!*\
  !*** ./lib/debug/debugComponents/debugPrompt/DebugPrompt.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "ioxN");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DebugPrompt.resx */ "wrZQ");
var _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DebugPrompt.resx */ "wrZQ", 1);
/* harmony import */ var _debugComponents_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../debugComponents.module.scss */ "9BRi");
/* harmony import */ var _DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DebugPrompt.module.scss */ "tOzf");










var DebugPrompt = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DebugPrompt, _super);
    function DebugPrompt(props) {
        var _this = _super.call(this, props) || this;
        _this._handleCancelClick = function () {
            _this._handleButtonClick(false);
        };
        _this._handleConfirmClick = function () {
            _this._handleButtonClick(true);
        };
        _this._handleButtonClick = function (allow) {
            // Hide the dialog after 200ms to let the callout disappear
            _this._timeouts.push(setTimeout(function () { return _this.setState({ dismissed: true }); }, 200));
            _this.setState({
                showCallout: false,
                showDialog: false
            });
            _this.props.callback(allow);
        };
        _this.state = {
            showDialog: true,
            showCallout: false,
            dismissed: false
        };
        _this._calloutRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._timeouts = [];
        return _this;
    }
    DebugPrompt.prototype.componentDidMount = function () {
        var _this = this;
        this._timeouts.push(setTimeout(function () {
            return _this.setState({
                showCallout: _this.state.showDialog // Only show the callout if the dialog is still open
            });
        }, 5000 // Show the callout after 5 seconds.
        ));
    };
    DebugPrompt.prototype.componentWillUnmount = function () {
        for (var _i = 0, _a = this._timeouts; _i < _a.length; _i++) {
            var id = _a[_i];
            clearTimeout(id);
        }
        this._timeouts = [];
    };
    DebugPrompt.prototype.render = function () {
        var _a;
        return !this.state.dismissed ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'dialog', "data-automation-id": 'debugManifestPromptDialog', "aria-labelledby": 'manifestWarningLabel' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { dialogContentProps: {
                    type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogType"].largeHeader,
                    title: this.props.title
                }, hidden: !this.state.showDialog, modalProps: {
                    isBlocking: true,
                    containerClassName: _debugComponents_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].dialogContainer
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].warningText }, _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingWarning"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].warningText }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(_DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingWarning2"], _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingCancel"])),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { "data-automation-id": 'debugManifestConfirmButton', onClick: this._handleConfirmClick }, _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingConfirm"]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { "data-automation-id": 'debugManifestCancelButton', onClick: this._handleCancelClick },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._calloutRef }, _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingCancel"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])(_DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].callout, (_a = {}, _a[_DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].calloutFadeIn] = !!this.state.showCallout, _a)), target: this._calloutRef, directionalHint: office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomCenter, gapSpace: 10 },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _DebugPrompt_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].calloutText }, _DebugPrompt_resx__WEBPACK_IMPORTED_MODULE_7__["debugManifestLoadingCalloutText"])))) : null; // tslint:disable-line:no-null-keyword
    };
    return DebugPrompt;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DebugPrompt);


/***/ }),

/***/ "sqhZ":
/*!************************************************************!*\
  !*** ./lib/debug/debugComponents/debugError/DebugError.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _debugComponents_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../debugComponents.module.scss */ "9BRi");
/* harmony import */ var _DebugError_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DebugError.module.scss */ "J6sC");
/* harmony import */ var _DebugError_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DebugError.resx */ "IS8z");
var _DebugError_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DebugError.resx */ "IS8z", 1);







var DebugError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DebugError, _super);
    function DebugError(props) {
        var _this = _super.call(this, props) || this;
        _this._handleDismissClick = function () {
            _this.setState({ isShown: false });
        };
        _this.state = {
            isShown: true
        };
        return _this;
    }
    DebugError.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": 'debugManifestErrorDialog', role: 'dialog' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { hidden: !this.state.isShown, dialogContentProps: {
                    type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogType"].largeHeader,
                    title: this.props.title
                }, modalProps: {
                    isBlocking: true,
                    containerClassName: _debugComponents_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dialogContainer
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _DebugError_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].detailText }, this.props.errorText || _DebugError_resx__WEBPACK_IMPORTED_MODULE_6__["debugManifestErrorDetail"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _DebugError_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].errorText }, this.props.innerError.toString()),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { "data-automation-id": 'debugManifestErrorDismissButton', onClick: this._handleDismissClick }, _DebugError_resx__WEBPACK_IMPORTED_MODULE_6__["debugManifestErrorDismissButtonText"])))));
    };
    return DebugError;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DebugError);


/***/ }),

/***/ "tOzf":
/*!***********************************************************************!*\
  !*** ./lib/debug/debugComponents/debugPrompt/DebugPrompt.module.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".o_g_77a7cb2f{color:#e81123;-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.p_g_77a7cb2f{opacity:1!important;transform:ms-translate3d(0,0,0)!important}div .q_g_77a7cb2f{max-width:200px;-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:default;opacity:0;transform:ms-translate3d(0,20px,0);transition:opacity .2s,transform .2s;animation:none}.r_g_77a7cb2f{padding:18px 24px 12px;margin:0;font-size:21px;font-weight:100;color:#323130;font-weight:300}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  warningText: "o_g_77a7cb2f",
  calloutFadeIn: "p_g_77a7cb2f",
  callout: "q_g_77a7cb2f",
  calloutText: "r_g_77a7cb2f"
});


/***/ }),

/***/ "wrZQ":
/*!****************************************************************!*\
  !*** ./lib/debug/debugComponents/debugPrompt/DebugPrompt.resx ***!
  \****************************************************************/
/*! exports provided: allowDebugManifestsTitle, allowDebugLoaderTitle, allowDebugLoaderAndManifestsTitle, debugManifestLoadingWarning, debugManifestLoadingWarning2, debugManifestLoadingConfirm, debugManifestLoadingCancel, debugManifestLoadingCalloutText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"allowDebugManifestsTitle\":\"allowDebugManifestsTitle\",\"allowDebugLoaderTitle\":\"allowDebugLoaderTitle\",\"allowDebugLoaderAndManifestsTitle\":\"allowDebugLoaderAndManifestsTitle\",\"debugManifestLoadingWarning\":\"debugManifestLoadingWarning\",\"debugManifestLoadingWarning2\":\"debugManifestLoadingWarning2\",\"debugManifestLoadingConfirm\":\"debugManifestLoadingConfirm\",\"debugManifestLoadingCancel\":\"debugManifestLoadingCancel\",\"debugManifestLoadingCalloutText\":\"debugManifestLoadingCalloutText\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.debug-prompt-components_[locale].js.map