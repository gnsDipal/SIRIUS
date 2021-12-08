(window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] || []).push([["sp-caption-element-edit"],{

/***/ "Emhs":
/*!*****************************************************!*\
  !*** ./lib/deferredUtilities/CaptionElementEdit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "Rl3Z");
/* harmony import */ var _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../captionElement/CaptionElement */ "Ar4x");
/* harmony import */ var _captionElement_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../captionElement/loc/Strings.resx */ "FkSJ");
var _captionElement_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../captionElement/loc/Strings.resx */ "FkSJ", 1);
/* harmony import */ var _captionElement_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../captionElement/CaptionElement.module.scss */ "70g6");







var CaptionElementEdit = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CaptionElementEdit, _super);
    function CaptionElementEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptionElementEdit.prototype.render = function () {
        var _a = this.props, handleChange = _a.handleChange, placeholder = _a.placeholder, text = _a.text, handleFocus = _a.handleFocus, handleBlur = _a.handleBlur, type = _a.type;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"], { className: _captionElement_CaptionElement_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].textarea, onChange: handleChange, placeholder: placeholder, value: text, onFocus: handleFocus, onBlur: handleBlur, "aria-label": type && type === _captionElement_CaptionElement__WEBPACK_IMPORTED_MODULE_4__["CaptionElementType"].Title ? _captionElement_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["TitlePlaceholder"] : _captionElement_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_5__["CaptionPlaceholder"] }));
    };
    return CaptionElementEdit;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (CaptionElementEdit);


/***/ }),

/***/ "FkSJ":
/*!*********************************************!*\
  !*** ./lib/captionElement/loc/Strings.resx ***!
  \*********************************************/
/*! exports provided: CaptionPlaceholder, TitlePlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"CaptionPlaceholder\":\"Àďď à ćàƥţĩōń\",\"TitlePlaceholder\":\"Àďď à ţĩţĺē\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.sp-caption-element-edit_[locale].js.map