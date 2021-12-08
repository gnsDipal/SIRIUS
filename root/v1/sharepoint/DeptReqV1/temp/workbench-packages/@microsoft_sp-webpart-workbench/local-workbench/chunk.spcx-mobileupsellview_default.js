(window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] = window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] || []).push([["spcx-mobileupsellview"],{

/***/ "7Ndm":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/chunks/spcx-mobileUpsellView/MobileUpsellView.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".v_e_beed2cf1{bottom:0;height:30px;min-width:80px;text-align:center;display:inline-block;cursor:pointer}[dir=ltr] .v_e_beed2cf1{margin-right:20px}[dir=rtl] .v_e_beed2cf1{margin-left:20px}.v_e_beed2cf1.w_e_beed2cf1{z-index:11}@media print{.v_e_beed2cf1{display:none}}.x_e_beed2cf1{-ms-flex-align:end;align-items:flex-end;position:fixed;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;z-index:6}[dir=ltr] .x_e_beed2cf1{right:20px}[dir=rtl] .x_e_beed2cf1{left:20px}@media screen and (max-width:480px){.x_e_beed2cf1{display:none}}", ""]);


/***/ }),

/***/ "cGcj":
/*!**************************************************************************!*\
  !*** ./lib/chunks/spcx-mobileUpsellView/MobileUpsellView.module.scss.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./MobileUpsellView.module.css */ "uS8O");
var styles = {
    MobileUpsellView: 'v_e_beed2cf1',
    originalZIndex: 'w_e_beed2cf1',
    MobileUpsellWrapper: 'x_e_beed2cf1'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "fUfm":
/*!****************************************************************!*\
  !*** ./lib/chunks/spcx-mobileUpsellView/MobileUpsellView.resx ***!
  \****************************************************************/
/*! exports provided: GetMobileAppButtonText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"GetMobileAppButtonText\":\"GetMobileAppButtonText\"}");

/***/ }),

/***/ "uS8O":
/*!**********************************************************************!*\
  !*** ./lib/chunks/spcx-mobileUpsellView/MobileUpsellView.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./MobileUpsellView.module.css */ "7Ndm");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "xy68":
/*!**************************************************************!*\
  !*** ./lib/chunks/spcx-mobileUpsellView/MobileUpsellView.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileUpsellView_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileUpsellView.resx */ "fUfm");
var _MobileUpsellView_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./MobileUpsellView.resx */ "fUfm", 1);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MobileUpsellView_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileUpsellView.module.scss */ "cGcj");
/**
 * @file MobileUpsellView.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */








/**
 * Represents the MobileUpsellView react component
 */
var MobileUpsellView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MobileUpsellView, _super);
    function MobileUpsellView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClick = function (ev) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_TraceLogger"].logVerbose(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_5__["_LogSource"].create('MobileUpsellView'), 'mobileupsellview clicked');
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_EngagementLogger"].logEvent('MobileUpsellView.Click', ev.type);
        };
        return _this;
    }
    /**
     * Invoked when the component is rendered
     */
    MobileUpsellView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MobileUpsellView_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].MobileUpsellWrapper },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ href: this._getMobileUpsellLink(), ariaLabel: MobileUpsellView.buttonText, className: _MobileUpsellView_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].MobileUpsellView, onClick: this._onClick }, { target: '_blank' } /* VSO:391730 Remove this workaround */), MobileUpsellView.buttonText)));
    };
    MobileUpsellView.prototype._isMicrosoft = function () {
        return (_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].doesStringStartWith(window.location.href, 'https://microsoft.sharepoint.com') ||
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].doesStringStartWith(window.location.href, 'https://microsoft.sharepoint-df.com') ||
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["StringHelper"].doesStringStartWith(window.location.href, 'https://msft.spoppe.com'));
    };
    MobileUpsellView.prototype._getMobileUpsellLink = function () {
        return this._isMicrosoft() ? 'https://aka.ms/getspmobilemsit' : 'https://aka.ms/getspmteamcommsite';
    };
    MobileUpsellView.buttonText = _MobileUpsellView_resx__WEBPACK_IMPORTED_MODULE_2__["GetMobileAppButtonText"];
    return MobileUpsellView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MobileUpsellView);


/***/ })

}]);
//# sourceMappingURL=chunk.spcx-mobileupsellview_[locale].js.map