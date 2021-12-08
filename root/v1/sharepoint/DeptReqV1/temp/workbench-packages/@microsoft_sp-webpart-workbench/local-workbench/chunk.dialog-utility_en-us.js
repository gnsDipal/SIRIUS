(window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || []).push([["dialog-utility"],{

/***/ "2wrW":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/dialog/DialogUtility.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, "[dir=ltr] .dialogSpinner{left:100px}[dir=rtl] .dialogSpinner{right:100px}.progressIcon{position:absolute;top:50%;transform:translate(-50%,-50%);padding-bottom:15px;font-family:-webkit-pictograph;text-align:center;background-color:\"[theme:white, default: #ffffff]\"}[dir=ltr] .progressIcon{left:50%}[dir=rtl] .progressIcon{right:50%}.progressIcon .ms-Icon{display:block;font-size:26px;margin:8px 0;color:\"[theme:themePrimary, default: #0078d4]\"}.progressIcon [data-icon-name=Sync]{animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.dialogMessage-label{font-size:21px!important;color:\"[theme:themePrimary, default: #0078d4]\"!important;text-align:center!important}.ms-dialogMainOverride .ms-Dialog-title{color:\"[theme:themePrimary, default: #0078d4]\"}", ""]);


/***/ }),

/***/ "Dmv+":
/*!******************************************!*\
  !*** ./lib/dialog/DialogUtility.scss.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DialogUtility.css */ "bO8f");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "K+M+":
/*!******************************************!*\
  !*** ./lib/dialog/PageDialog.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PageDialog.module.css */ "oCHT");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "YzAc":
/*!*************************************!*\
  !*** ./lib/dialog/DialogUtility.js ***!
  \*************************************/
/*! exports provided: DialogUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUtility", function() { return DialogUtility; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DialogUtility_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogUtility.scss */ "Dmv+");
/* harmony import */ var _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogUtility.resx */ "ZbVp");
var _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DialogUtility.resx */ "ZbVp", 1);
/* harmony import */ var _PageDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageDialog */ "vxt3");





var DialogUtility = /** @class */ (function () {
    function DialogUtility() {
    }
    Object.defineProperty(DialogUtility, "dialog", {
        get: function () {
            return DialogUtility._dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogUtility, "dialogDiv", {
        /*
         * Lazy create the div that renders the dialog
         */
        get: function () {
            if (!DialogUtility._dialogDiv) {
                // Ensures the div that renders dialog exists
                DialogUtility._dialogDiv = document.createElement('div');
                document.body.appendChild(DialogUtility._dialogDiv);
            }
            return DialogUtility._dialogDiv;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Display error message in a blocking modal dialog with a close button
     */
    DialogUtility.showError = function (errorData) {
        errorData.title = errorData.title ? errorData.title : _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_3__["GenericErrorTitle"];
        errorData.actionType = 'CLOSE_ACTION';
        errorData.name = 'showError';
        errorData.closeCallback = DialogUtility._handleClose;
        DialogUtility.showCommonError(errorData);
    };
    /*
     * Display error message in a blocking modal dialog
     */
    DialogUtility.showCommonError = function (errorData) {
        errorData.closeCallback = errorData.closeCallback || DialogUtility._handleClose;
        DialogUtility._dialog = react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageDialog__WEBPACK_IMPORTED_MODULE_4__["PageDialog"], errorData), DialogUtility.dialogDiv);
    };
    /*
     * Display setting message in a blocking modal dialog with a save button
     */
    DialogUtility.showDialog = function (title, element, callback, type) {
        DialogUtility._dialog = react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageDialog__WEBPACK_IMPORTED_MODULE_4__["PageDialog"], {
            title: title,
            contentElement: element,
            actionType: type || 'SAVE_ACTION',
            callback: callback,
            closeCallback: DialogUtility._handleClose,
            name: 'showDialog'
        }), DialogUtility.dialogDiv);
    };
    /*
     * Display setting message in a blocking modal dialog with a default yes/no option
     */
    DialogUtility.showConfirmationDialog = function (title, element, callback, cancelCallback, subText, ignoreExternalFocusing, action) {
        if (action === void 0) { action = 'CONFIRM_ACTION'; }
        DialogUtility._dialog = react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageDialog__WEBPACK_IMPORTED_MODULE_4__["PageDialog"], {
            title: title,
            subText: subText,
            contentElement: element,
            actionType: action,
            callback: callback,
            name: 'showConfirmationDialog',
            cancelCallback: cancelCallback,
            closeCallback: DialogUtility._handleClose,
            ignoreExternalFocusing: ignoreExternalFocusing === undefined ? true : ignoreExternalFocusing
        }), DialogUtility.dialogDiv);
    };
    /*
     * Show progress bar with a message in a blocking modal dialog
     */
    DialogUtility.showProgressBar = function (message, dataAutomationId) {
        if (dataAutomationId === void 0) { dataAutomationId = undefined; }
        DialogUtility._showProgressBarTimer = undefined;
        DialogUtility._dialog = react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageDialog__WEBPACK_IMPORTED_MODULE_4__["PageDialog"], {
            message: message,
            actionType: 'NONE',
            name: 'showProgressBar',
            dataAutomationId: dataAutomationId
        }), DialogUtility.dialogDiv);
    };
    DialogUtility.showProgressBarWithDelay = function (message, dataAutomationId) {
        if (dataAutomationId === void 0) { dataAutomationId = undefined; }
        DialogUtility._showProgressBarTimer = window.setTimeout(DialogUtility.showProgressBar, 500, message, dataAutomationId);
    };
    /*
     * Dismiss progress bar if any
     */
    DialogUtility.dismissProgressBar = function () {
        if (DialogUtility._showProgressBarTimer) {
            window.clearTimeout(DialogUtility._showProgressBarTimer);
            DialogUtility._showProgressBarTimer = undefined;
        }
        else {
            DialogUtility._dialog = react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageDialog__WEBPACK_IMPORTED_MODULE_4__["PageDialog"], {
                hidden: true
            }), DialogUtility.dialogDiv);
        }
    };
    DialogUtility._handleClose = function () {
        if (DialogUtility._dialog) {
            react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](DialogUtility.dialogDiv);
            delete DialogUtility._dialog;
        }
    };
    return DialogUtility;
}());



/***/ }),

/***/ "ZbVp":
/*!***************************************!*\
  !*** ./lib/dialog/DialogUtility.resx ***!
  \***************************************/
/*! exports provided: DialogCloseButtonLabel, GenericErrorTitle, DialogSaveButtonLabel, DialogYesButtonLabel, DialogNoButtonLabel, DialogOkButtonLabel, DialogCancelButtonLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DialogCloseButtonLabel\":\"Close\",\"GenericErrorTitle\":\"Could not complete that action \",\"DialogSaveButtonLabel\":\"Save\",\"DialogYesButtonLabel\":\"Yes\",\"DialogNoButtonLabel\":\"No\",\"DialogOkButtonLabel\":\"OK\",\"DialogCancelButtonLabel\":\"Cancel\"}");

/***/ }),

/***/ "bO8f":
/*!**************************************!*\
  !*** ./lib/dialog/DialogUtility.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DialogUtility.css */ "2wrW");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "nX/4":
/*!**********************************************!*\
  !*** ./lib/dialog/PageDialog.module.scss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PageDialog.module.css */ "K+M+");
var styles = {
    screenReaderOnly: 'c_c_acd50736'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "oCHT":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/dialog/PageDialog.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".c_c_acd50736{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);


/***/ }),

/***/ "vxt3":
/*!**********************************!*\
  !*** ./lib/dialog/PageDialog.js ***!
  \**********************************/
/*! exports provided: PageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDialog", function() { return PageDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Dialog */ "/C2V");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DialogUtility_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogUtility.scss */ "Dmv+");
/* harmony import */ var _PageDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageDialog.module.scss */ "nX/4");
/* harmony import */ var _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DialogUtility.resx */ "ZbVp");
var _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DialogUtility.resx */ "ZbVp", 1);








var PRIMARY_ELEMENT_CLASSNAME = 'PageDialogPrimaryButton';
var ARIA_LABEL_ID = 'PageDialogAriaLabel';
/**
 * Generic page dialog
 */
var PageDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageDialog, _super);
    function PageDialog(props) {
        var _this = _super.call(this, props) || this;
        _this._cancelDialog = function () {
            if (_this.props.cancelCallback) {
                _this.props.cancelCallback();
            }
            _this._dismissDialog();
        };
        /**
         * Close modal dialog
         */
        _this._closeDialog = function () {
            if (_this.props.callback) {
                _this.props.callback();
            }
            _this._dismissDialog();
        };
        _this.state = {
            showDialog: true
        };
        return _this;
    }
    PageDialog.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.setState({
            showDialog: true
        });
    };
    PageDialog.prototype.render = function () {
        var footerElements;
        switch (this.props.actionType) {
            case 'CLOSE_ACTION':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._closeDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogCloseButtonLabel"], text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogCloseButtonLabel"], className: PRIMARY_ELEMENT_CLASSNAME })));
                break;
            case 'OK_ACTION':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._closeDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogOkButtonLabel"], text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogOkButtonLabel"], className: PRIMARY_ELEMENT_CLASSNAME })));
                break;
            case 'NONE':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: 'progressIcon' },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: 'Sync' }))));
                break;
            case 'SAVE_ACTION':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._closeDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogSaveButtonLabel"], text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogSaveButtonLabel"], className: PRIMARY_ELEMENT_CLASSNAME })));
                break;
            case 'CONFIRM_ACTION':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._closeDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogYesButtonLabel"], "data-automation-id": 'yesButton', text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogYesButtonLabel"], className: PRIMARY_ELEMENT_CLASSNAME }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { onClick: this._cancelDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogNoButtonLabel"], "data-automation-id": 'noButton', text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogNoButtonLabel"] })));
                break;
            case 'OK_CANCEL_ACTION':
                footerElements = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._closeDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogOkButtonLabel"], "data-automation-id": 'okButton', text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogOkButtonLabel"], className: PRIMARY_ELEMENT_CLASSNAME }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { onClick: this._cancelDialog, ariaLabel: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogCancelButtonLabel"], "data-automation-id": 'cancelButton', text: _DialogUtility_resx__WEBPACK_IMPORTED_MODULE_7__["DialogCancelButtonLabel"] })));
                break;
            default:
                break;
        }
        var contentElement;
        var _a = this.props, innerHTML = _a.innerHTML, message = _a.message, subText = _a.subText, title = _a.title, titleProps = _a.titleProps;
        if (this.props.contentElement) {
            contentElement = this.props.contentElement;
        }
        else if (message) {
            contentElement = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: 'dialogMessage-label' }, message);
            _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert('dialogMessage', message);
        }
        else if (innerHTML) {
            contentElement = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: 'dialogMessage-label', dangerouslySetInnerHTML: { __html: innerHTML } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { "data-automation-id": this.props.dataAutomationId },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["Dialog"], { maxWidth: this.props.maxWidth, minWidth: this.props.minWidth, hidden: Boolean(!this.state.showDialog || this.props.hidden), key: this.props.name, dialogContentProps: {
                    type: office_ui_fabric_react_lib_components_Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogType"].normal,
                    title: title,
                    titleProps: titleProps,
                    subText: subText
                }, modalProps: {
                    isBlocking: true,
                    className: 'ms-dialogMainOverride',
                    titleAriaId: ARIA_LABEL_ID
                }, ignoreExternalFocusing: this.props.ignoreExternalFocusing ? true : false, onDismiss: this._cancelDialog, firstFocusableSelector: PRIMARY_ELEMENT_CLASSNAME },
                title && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", { id: ARIA_LABEL_ID, className: _PageDialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].screenReaderOnly }, title)),
                contentElement,
                footerElements)));
    };
    /**
     * Close modal dialog
     */
    PageDialog.prototype._dismissDialog = function () {
        this.setState({
            showDialog: false
        });
        if (this.props.closeCallback) {
            this.props.closeCallback();
        }
    };
    return PageDialog;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ })

}]);
//# sourceMappingURL=chunk.dialog-utility_[locale].js.map