(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-classichomepagelink"],{

/***/ "IXKO":
/*!********************************************************************!*\
  !*** ./lib/chunks/spcx-classicHomepageLink/ClassicHomepageLink.js ***!
  \********************************************************************/
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
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loaders_spcx_webDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loaders/spcx-webDataSource */ "X7yh");
/* harmony import */ var _ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassicHomepageLinkStrings.resx */ "ntys");
var _ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ClassicHomepageLinkStrings.resx */ "ntys", 1);
/* harmony import */ var _ClassicHomepageLink_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClassicHomepageLink.module.scss */ "Y21U");








var ClassicHomepageLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassicHomepageLink, _super);
    function ClassicHomepageLink(props) {
        var _this = _super.call(this, props) || this;
        _this._renderHideBackToPrevHome = function () {
            if (_this.props.pageContext && _this.props.pageContext.isSiteAdmin) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { className: _ClassicHomepageLink_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].linkToClassicDismiss, ariaLabel: _ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6__["hidePreviousHomepageTitle"], iconProps: { iconName: 'ChromeClose', className: _ClassicHomepageLink_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].linkToClassicDismissIcon }, onClick: _this._openHideBackToPreviousDialog }));
            }
            return null; // tslint:disable-line:no-null-keyword
        };
        _this._openHideBackToPreviousDialog = function () {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({
                name: 'RevertToClassicHomepage.Dismiss.Click',
                isIntentional: true
            });
            Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["DeferredDialogUtility"])().then(function (dialogUtility) {
                dialogUtility.showConfirmationDialog(_ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6__["hidePreviousHomepageTitle"], react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6__["hidePreviousHomepageText"]), _this._onConfirmDismiss, undefined);
            });
        };
        _this._onConfirmDismiss = function () {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({
                name: 'RevertToClassicHomepage.Dismiss.Confirm',
                isIntentional: true
            });
            Object(_loaders_spcx_webDataSource__WEBPACK_IMPORTED_MODULE_5__["loadWebDataSource"])(_this.props.pageContext).then(function (webDataSource) {
                webDataSource.removeClassicWelcomePage().then(function () {
                    _this.props.onRemoveClassicHomepageUrl();
                });
            });
        };
        _this._onLinkClick = function () {
            _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({
                name: 'RevertToClassicHomepage.Click',
                isIntentional: true
            });
            // TODO: Implement floodgate when campaign is ready
            window.location.href = _this.props.classicHomepageUrl + "?BackToClassicHomepage=true";
        };
        return _this;
    }
    ClassicHomepageLink.prototype.componentDidMount = function () {
        _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({
            name: 'RevertToClassicHomepage.Render'
        });
    };
    ClassicHomepageLink.prototype.render = function () {
        var classicHomepageUrl = this.props.classicHomepageUrl;
        if (!classicHomepageUrl) {
            // tslint:disable-next-line:no-null-keyword
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ClassicHomepageLink_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].linkToClassic },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { "data-automation-id": 'returnToClassicLink', onClick: this._onLinkClick }, _ClassicHomepageLinkStrings_resx__WEBPACK_IMPORTED_MODULE_6__["previousHomepage"]),
            this._renderHideBackToPrevHome()));
    };
    return ClassicHomepageLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (ClassicHomepageLink);


/***/ }),

/***/ "Y21U":
/*!********************************************************************************!*\
  !*** ./lib/chunks/spcx-classicHomepageLink/ClassicHomepageLink.module.scss.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ClassicHomepageLink.module.css */ "Z+nJ");
var styles = {
    linkToClassic: 'o_e_6b55bba6',
    linkToClassicDismiss: 'p_e_6b55bba6',
    linkToClassicDismissIcon: 'q_e_6b55bba6'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Z+nJ":
/*!****************************************************************************!*\
  !*** ./lib/chunks/spcx-classicHomepageLink/ClassicHomepageLink.module.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ClassicHomepageLink.module.css */ "c71o");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "c71o":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/chunks/spcx-classicHomepageLink/ClassicHomepageLink.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".o_e_6b55bba6{font-size:12px;font-weight:400;padding:30px 0 15px;position:relative;text-align:center}.p_e_6b55bba6{position:absolute;top:0;right:0}.q_e_6b55bba6{font-size:12px;font-weight:400}", ""]);


/***/ }),

/***/ "ntys":
/*!*****************************************************************************!*\
  !*** ./lib/chunks/spcx-classicHomepageLink/ClassicHomepageLinkStrings.resx ***!
  \*****************************************************************************/
/*! exports provided: previousHomepage, hidePreviousHomepageTitle, hidePreviousHomepageText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"previousHomepage\":\"Ŕēvēŕţ ţō ŷōũŕ ćĺàśśĩć ĥōmē ƥàĝē\",\"hidePreviousHomepageTitle\":\"Ĥĩďē \\u0022Ŕēvēŕţ ţō ŷōũŕ ćĺàśśĩć ĥōmē ƥàĝē\\u0022 ĺĩńķ\",\"hidePreviousHomepageText\":\"Àŕē ŷōũ śũŕē ŷōũ ŵàńţ ţō ĥĩďē ţĥē \\u0022Ŕēvēŕţ ţō ćĺàśśĩć ĥōmē ƥàĝē\\u0022 ĺĩńķ? Ţĥĩś ŵĩĺĺ ƥēŕmàńēńţĺŷ ŕēmōvē ţĥē ĺĩńķ ƒŕōm ńàvĩĝàţĩōń, ƀũţ ĩţ ŵĩĺĺ ńōţ ďēĺēţē ţĥē ƥŕēvĩōũś ĥōmē ƥàĝē ƒŕōm ţĥē Śĩţē Ƥàĝēś ĺĩƀŕàŕŷ.\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.spcx-classichomepagelink_[locale].js.map