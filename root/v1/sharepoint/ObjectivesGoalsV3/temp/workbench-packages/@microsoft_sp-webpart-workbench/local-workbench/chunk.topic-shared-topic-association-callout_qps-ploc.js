(window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || []).push([["topic-shared-topic-association-callout"],{

/***/ "MeRj":
/*!***********************************************************!*\
  !*** ./lib/components/TopicAssociationCallout.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./TopicAssociationCallout.module.css */ "nNyA");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "SACp":
/*!***************************************************!*\
  !*** ./lib/components/TopicAssociationCallout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopicAssociationCallout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useRerenderOnResize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useRerenderOnResize */ "ar+0");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useForceUpdate */ "ge7z");
/* harmony import */ var _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicAssociationCallout.module.scss */ "olc/");
/* harmony import */ var _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopicAssociationCallout.resx */ "vUw5");
var _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TopicAssociationCallout.resx */ "vUw5", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */









var BEAK_HEIGHT = 8;
var TARGET_CALLOUT_GAP = 5;
var BEAK_DEFAULT_LEFT = 20;
var counter = 0;
/**
 * Use `DeferredTopicAssociationCallout` for better load performance.
 *
 * Make a custom callout instead of fabric `Callout` component to fix invisble issue.
 * @internal
 */
function TopicAssociationCallout(props) {
    var _a, _b, _c, _d, _e;
    /* tslint:disable:no-null-keyword */
    var contentRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    /* tslint:disable:no-null-keyword */
    var closeButton = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var targetRect = props.target.getBoundingClientRect();
    var contentRect = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    var top = targetRect.top + targetRect.height + BEAK_HEIGHT + TARGET_CALLOUT_GAP;
    if ((_b = props.offset) === null || _b === void 0 ? void 0 : _b.y) {
        top += props.offset.y;
    }
    var left = ((_c = contentRect) === null || _c === void 0 ? void 0 : _c.width) ? targetRect.left - contentRect.width / 2 : targetRect.left;
    if ((_d = props.offset) === null || _d === void 0 ? void 0 : _d.x) {
        left += props.offset.x;
    }
    var titleID = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () { return "TopicAssociationCalloutTitle" + counter++; }, []);
    var descriptionID = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () { return "TopicAssociationCalloutDescription" + counter++; }, []);
    var forceUpdate = Object(_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useForceUpdate"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        // Rerender to trigger recalculate callout position
        // because we rely on mounted container's width
        forceUpdate();
    }, []);
    Object(_hooks_useRerenderOnResize__WEBPACK_IMPORTED_MODULE_5__["useRerenderOnResize"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        function handleScroll() {
            var _a, _b;
            (_b = (_a = props).onDismiss) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        var throttleHanlder = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["throttle"])(handleScroll, 200);
        window.addEventListener('scroll', throttleHanlder, true);
        return function () {
            throttleHanlder.cancel();
            window.removeEventListener('scroll', throttleHanlder);
        };
    }, [props.onDismiss]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        function hanldeKeyDown(ev) {
            var _a, _b;
            if (ev.key === 'Escape') {
                (_b = (_a = props).onDismiss) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        }
        window.document.addEventListener('keydown', hanldeKeyDown);
        return function () {
            window.document.removeEventListener('keydown', hanldeKeyDown);
        };
    }, [props.onDismiss]);
    if (!props.target) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    }
    return react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container, style: {
            top: top,
            left: left
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].beak, style: {
                left: ((_e = contentRect) === null || _e === void 0 ? void 0 : _e.width) ? contentRect.width / 2 : BEAK_DEFAULT_LEFT
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusTrapZone"], { firstFocusableSelector: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].link },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content, ref: contentRef, role: 'alertdialog', "aria-labelledby": titleID, "aria-describedby": descriptionID },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["TooltipHost"], { content: _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__["CalloutCloseButtonAriaLabel"], calloutProps: {
                        target: closeButton
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { elementRef: closeButton, iconProps: { iconName: 'Cancel' }, onClick: props.onDismiss, className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].closeButton, title: _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__["CalloutCloseButtonAriaLabel"], ariaLabel: _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__["CalloutCloseButtonAriaLabel"] })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title, id: titleID }, _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__["CalloutTitle"]),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["StringFormaterWithNodes"], { template: _TopicAssociationCallout_resx__WEBPACK_IMPORTED_MODULE_8__["CalloutDescription"], values: [
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { href: props.topicURL, className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].link, target: '_blank', "data-interception": 'off' }, props.topicName)
                    ], className: _TopicAssociationCallout_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].description, id: descriptionID })))), document.body);
}


/***/ }),

/***/ "ar+0":
/*!******************************************!*\
  !*** ./lib/hooks/useRerenderOnResize.js ***!
  \******************************************/
/*! exports provided: useRerenderOnResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRerenderOnResize", function() { return useRerenderOnResize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForceUpdate */ "ge7z");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



function useRerenderOnResize(waitTime) {
    if (waitTime === void 0) { waitTime = 33.3; }
    var forceUpdate = Object(_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["useForceUpdate"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        function handleScrollOrResize() {
            forceUpdate();
        }
        var throttleHanlder = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["throttle"])(handleScrollOrResize, waitTime);
        window.addEventListener('resize', throttleHanlder);
        return function () {
            throttleHanlder.cancel();
            window.removeEventListener('resize', throttleHanlder);
        };
    }, []);
}


/***/ }),

/***/ "ge7z":
/*!*************************************!*\
  !*** ./lib/hooks/useForceUpdate.js ***!
  \*************************************/
/*! exports provided: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

function useForceUpdate() {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](function (x) { return x + 1; }, 0, function () { return 0; }), 2), forceUpdate = _a[1];
    return forceUpdate;
}


/***/ }),

/***/ "nNyA":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/components/TopicAssociationCallout.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".n_c_04103875{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;margin:0;width:288px;position:absolute;border:none;background:\"[theme:white, default: #ffffff]\";border-radius:2px;box-shadow:0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108);z-index:999}.o_c_04103875{transform:rotate(45deg);height:16px;width:16px;background-color:inherit;box-shadow:inherit;border:inherit;position:absolute;top:-8px}.p_c_04103875{position:relative;border:none}.q_c_04103875{position:absolute;top:14px}[dir=ltr] .q_c_04103875{right:14px}[dir=rtl] .q_c_04103875{left:14px}.r_c_04103875{padding:17px 28px;position:relative;background:\"[theme:white, default: #ffffff]\";border-radius:2px}.s_c_04103875{font-size:\"[theme:xLargeFontSize, default: 20px]\";font-weight:\"[theme:xLargeFontWeight, default: 600]\";line-height:1.4;color:\"[theme:neutralPrimary, default: #323130]\";margin:0;padding:0;height:100%}.t_c_04103875{margin-top:10px;color:\"[theme:neutralPrimary, default: #323130]\"}.t_c_04103875,.u_c_04103875{font-size:\"[theme:smallPlusFontSize, default: 12px]\";font-weight:\"[theme:smallPlusFontWeight, default: 400]\";line-height:1.8}.u_c_04103875{color:\"[theme:themePrimary, default: #0078d4]\";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline}", ""]);


/***/ }),

/***/ "olc/":
/*!***************************************************************!*\
  !*** ./lib/components/TopicAssociationCallout.module.scss.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./TopicAssociationCallout.module.css */ "MeRj");
var styles = {
    container: 'n_c_04103875',
    beak: 'o_c_04103875',
    closeButtonContainer: 'p_c_04103875',
    closeButton: 'q_c_04103875',
    content: 'r_c_04103875',
    title: 's_c_04103875',
    description: 't_c_04103875',
    link: 'u_c_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "vUw5":
/*!*****************************************************!*\
  !*** ./lib/components/TopicAssociationCallout.resx ***!
  \*****************************************************/
/*! exports provided: CalloutTitle, CalloutDescription, CalloutCloseButtonAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"CalloutTitle\":\"[!!--##Ţōƥĩć ćŕēàţēď##--!!]\",\"CalloutDescription\":\"[!!--##Ŷōũ\\u0027ŕē ĩń ţĥē ĺĩśţ ōƒ ƥēōƥĺē ćōńńēćţēď ţō ţĥē ńēŵ ţōƥĩć. Ţō ćĥàńĝē ţĥē ĺĩśţ ōŕ ōţĥēŕ ďēţàĩĺś ĝō ţō ţĥē {0} ţōƥĩć ƥàĝē.##--!!]\",\"CalloutCloseButtonAriaLabel\":\"[!!--##Ćĺōśē##--!!]\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.topic-shared-topic-association-callout_[locale].js.map