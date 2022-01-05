(window["webpackJsonpc79b9f88_6338_40fb_b463_3aad22a88b15_0_1_0"] = window["webpackJsonpc79b9f88_6338_40fb_b463_3aad22a88b15_0_1_0"] || []).push([["webpack-shared-editmode-fabric-dialog-footer"],{

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


/***/ })

}]);
//# sourceMappingURL=chunk.webpack-shared-editmode-fabric-dialog-footer_none.js.map