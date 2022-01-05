(window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] = window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] || []).push([["sp-canvas-dash-card"],{

/***/ "0X9Z":
/*!*********************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DashCardToolboxHint.module.scss.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DashCardToolboxHint.module.css */ "ovt7");
var styles = {
    dashCardToolboxHint: 'w_g_32f825c4',
    plusButton: 'x_g_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "2nlv":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/DashCardCanvas.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashCardCanvas; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvasLayout */ "yPt8");
/* harmony import */ var _canvasSection_CanvasDashCardSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvasSection/CanvasDashCardSection */ "I4Mh");
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _DashCardCanvas_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashCardCanvas.module.scss */ "N0eF");
/* harmony import */ var _canvasZone_CanvasZone_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvasZone/CanvasZone.scss */ "Kw1M");









function DashCardCanvas(props) {
    var themeData = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["useCustomizationSettings"])(['theme'], 'DashCardCanvas');
    var zone = props.zone || createDefaultZonePart(props.store);
    var dashCardCanvasClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(props.className, _DashCardCanvas_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].dashCardCanvas, 'CanvasZoneContainer' // This class ensures the web part toolbar hidden after blur.
    );
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: dashCardCanvasClassName, role: props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Edit ? 'application' : undefined, tabIndex: -1, "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_6__["CanvasDragZoneConstants"].layoutDragTag, onFocus: handleFocusCanvasZoneContainer },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: 'CanvasZone', "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_6__["CanvasDragZoneConstants"].zoneDragTag },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_canvasSection_CanvasDashCardSection__WEBPACK_IMPORTED_MODULE_5__["default"], { theme: themeData.theme, emphasisTheme: themeData.theme, layoutIndex: zone.layoutIndex, zoneIndex: zone.index, section: zone.sections[0], store: props.store, shouldResize: props.store.shouldResize(zone.layoutIndex), selectedPosition: props.store.canvasLayout.fetchCurrentSelection() }))));
    function handleFocusCanvasZoneContainer(event) {
        var dragTag = event.target.getAttribute('data-drag-tag');
        if (dragTag === _editChunk__WEBPACK_IMPORTED_MODULE_6__["CanvasDragZoneConstants"].layoutDragTag ||
            dragTag === _editChunk__WEBPACK_IMPORTED_MODULE_6__["CanvasDragZoneConstants"].zoneDragTag ||
            dragTag === _editChunk__WEBPACK_IMPORTED_MODULE_6__["CanvasDragZoneConstants"].sectionDragTag) {
            props.store.selectedZoneIndex = -1;
        }
    }
}
function createDefaultZonePart(store) {
    var zoneIndex = 1;
    var zonePart = new _canvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasZonePart"](zoneIndex, 
    /* emphasis */ undefined, store.canvasFields.getControlComponentById, _canvasLayout__WEBPACK_IMPORTED_MODULE_4__["CanvasLayout"].firstLayoutIndex);
    zonePart.addControl({
        controlType: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].DashCard,
        id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid().toString(),
        position: {
            zoneIndex: zoneIndex,
            sectionIndex: 1,
            controlIndex: undefined
        }
    });
    return zonePart;
}


/***/ }),

/***/ "I4Mh":
/*!*********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasDashCardSection.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasDashCardSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editChunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editChunk */ "9s5w");
/* harmony import */ var _editChunk_canvasToolboxHint_DashCardToolboxHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editChunk/canvasToolboxHint/DashCardToolboxHint */ "isF6");
/* harmony import */ var _canvasControl_CanvasControlFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvasControl/CanvasControlFactory */ "aYeN");
/* harmony import */ var _controlZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controlZone */ "QfGm");
/* harmony import */ var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CanvasSection.resx */ "PPgh");
var _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasSection.resx */ "PPgh", 1);
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _CanvasDashCardSection_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CanvasDashCardSection.module.scss */ "UWgl");











function CanvasDashCardSection(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: _CanvasDashCardSection_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].dashCardList, "data-drag-tag": _editChunk__WEBPACK_IMPORTED_MODULE_4__["CanvasDragZoneConstants"].sectionDragTag },
        props.section.controls.map(renderDashCard),
        props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && renderToolbox()));
    function renderDashCard(controlWithoutTheme) {
        var _a, _b, _c, _d;
        var control = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, controlWithoutTheme), { emphasisTheme: props.emphasisTheme, theme: props.theme });
        var isControlSelected = ((_a = props.selectedPosition) === null || _a === void 0 ? void 0 : _a.zoneIndex) === props.zoneIndex &&
            ((_b = props.selectedPosition) === null || _b === void 0 ? void 0 : _b.sectionIndex) === props.section.index &&
            ((_c = props.selectedPosition) === null || _c === void 0 ? void 0 : _c.layoutIndex) === props.layoutIndex &&
            ((_d = props.selectedPosition) === null || _d === void 0 ? void 0 : _d.controlIndex) === control.position.controlIndex;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _CanvasDashCardSection_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].dashCardItem, key: control.id },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_controlZone__WEBPACK_IMPORTED_MODULE_7__["ControlZone"], { displayMode: props.store.displayMode, emphasisTheme: props.emphasisTheme, isSelected: isControlSelected, controlDiff: undefined, theme: props.theme, control: control, store: props.store },
                _canvasControl_CanvasControlFactory__WEBPACK_IMPORTED_MODULE_6__["CanvasControlFactory"].CreateCanvasControl(control, props.store),
                props.store.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["DisplayMode"].Edit && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk__WEBPACK_IMPORTED_MODULE_4__["DeferredToolbar"], { directionalHint: !Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].rightCenter : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].leftCenter, configurationButton: {
                        title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_8__["WebpartToolbarConfigButtonTitle"],
                        fabricIconKey: '',
                        onClick: function () { return props.store.getEditModule('actions').handleConfigureButtonClicked(control.id); }
                    }, moveButton: {
                        title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_8__["WebpartToolbarMoveButtonTitle"],
                        dragHandleTag: _editChunk__WEBPACK_IMPORTED_MODULE_4__["CanvasDragZoneConstants"].webPartButtonDragHandleTag
                    }, duplicateButton: {
                        title: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_9__["ToolbarDuplicateWebPartTitle"],
                        onClick: function () {
                            return props.store.getEditModule('actions').handleDuplicateControlButtonClicked(control.id);
                        }
                    }, deleteButton: {
                        title: _CanvasSection_resx__WEBPACK_IMPORTED_MODULE_8__["WebpartToolbarDeleteButtonTitle"],
                        onClick: function () {
                            return props.store.getEditModule('actions').handleDeleteControlButtonClicked(control.position);
                        }
                    } })))));
    }
    function renderToolbox() {
        var nextControlLayout = {
            zoneIndex: props.zoneIndex,
            sectionIndex: props.section.index,
            controlIndex: getLatestControlIndex(props.section.controls) + 1,
            sectionFactor: props.section.factor,
            layoutIndex: props.layoutIndex
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _CanvasDashCardSection_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].dashCardItem, key: 'toolbox' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editChunk_canvasToolboxHint_DashCardToolboxHint__WEBPACK_IMPORTED_MODULE_5__["DashCardToolboxHint"], { store: props.store, layout: nextControlLayout, theme: props.theme })));
    }
}
function getLatestControlIndex(controls) {
    if (controls.length === 0) {
        return 0;
    }
    else {
        return controls[controls.length - 1].position.controlIndex || 0;
    }
}


/***/ }),

/***/ "LHja":
/*!************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/DashCardCanvas.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DashCardCanvas.module.css */ "OO3a");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "N0eF":
/*!****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasComponent/DashCardCanvas.module.scss.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DashCardCanvas.module.css */ "LHja");
var styles = {
    dashCardCanvas: 'a_a_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "N3VY":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DashCardToolboxHint.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".w_g_32f825c4{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:\"[theme:black, default: #000000]\";background-color:\"[theme:white, default: #ffffff]\";cursor:pointer;width:164px;height:180px;border:none;box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108)}.x_g_32f825c4{font-size:24px}", ""]);


/***/ }),

/***/ "OO3a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvasComponent/DashCardCanvas.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_32f825c4{outline:0;margin:0!important}.a_a_32f825c4:before{content:none!important}.a_a_32f825c4 .ControlZone{padding:0!important}.a_a_32f825c4 .CanvasControlToolbar{top:0!important}[dir=ltr] .a_a_32f825c4 .CanvasControlToolbar{left:-40px!important}[dir=rtl] .a_a_32f825c4 .CanvasControlToolbar{right:-40px!important}", ""]);


/***/ }),

/***/ "UWgl":
/*!*********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasDashCardSection.module.scss.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasDashCardSection.module.css */ "YTmn");
var styles = {
    dashCardList: 'b_b_32f825c4',
    dashCardItem: 'c_b_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "YTmn":
/*!*****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/canvasSection/CanvasDashCardSection.module.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasDashCardSection.module.css */ "eoxv");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "cSsE":
/*!***********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DashCardToolboxHint.resx ***!
  \***********************************************************************************/
/*! exports provided: AceAddButtonAriaLabel, AceAddButtonLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AceAddButtonAriaLabel\":\"AceAddButtonAriaLabel\",\"AceAddButtonLabel\":\"AceAddButtonLabel\"}");

/***/ }),

/***/ "eoxv":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/canvasSection/CanvasDashCardSection.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".b_b_32f825c4{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0 -8px;padding:0}.c_b_32f825c4{margin:8px;position:relative}", ""]);


/***/ }),

/***/ "isF6":
/*!*********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DashCardToolboxHint.js ***!
  \*********************************************************************************/
/*! exports provided: DashCardToolboxHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashCardToolboxHint", function() { return DashCardToolboxHint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../a11y/CanvasA11yConstants */ "AqUB");
/* harmony import */ var _DashCardToolboxHint_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashCardToolboxHint.resx */ "cSsE");
var _DashCardToolboxHint_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DashCardToolboxHint.resx */ "cSsE", 1);
/* harmony import */ var _DashCardToolboxHint_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashCardToolboxHint.module.scss */ "0X9Z");





function DashCardToolboxHint(props) {
    var plusButtonRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null // tslint:disable-line:no-null-keyword
    );
    var toolTipRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null); // tslint:disable-line:no-null-keyword
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TooltipHost"], { content: _DashCardToolboxHint_resx__WEBPACK_IMPORTED_MODULE_3__["AceAddButtonAriaLabel"], calloutProps: { gapSpace: 1, target: plusButtonRef }, directionalHint: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightCenter, delay: 2, componentRef: toolTipRef },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { "aria-haspopup": true, "aria-label": _DashCardToolboxHint_resx__WEBPACK_IMPORTED_MODULE_3__["AceAddButtonAriaLabel"], className: _DashCardToolboxHint_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dashCardToolboxHint, "data-automation-id": 'toolboxHint-webPart', "data-drag-hidden": 'true', "data-sp-a11y-class": _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_2__["canvasA11yClasses"].toolboxHint, onClick: openToolbox, onFocus: openTooltip, onBlur: closeTooltip },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _DashCardToolboxHint_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].plusButton, ref: plusButtonRef },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FontIcon"], { iconName: 'Add' })),
            _DashCardToolboxHint_resx__WEBPACK_IMPORTED_MODULE_3__["AceAddButtonLabel"])));
    function openTooltip() {
        var _a;
        (_a = toolTipRef.current) === null || _a === void 0 ? void 0 : _a.show();
    }
    function closeTooltip() {
        var _a;
        (_a = toolTipRef.current) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    function openToolbox() {
        props.store.selectedControlId = undefined;
        if (plusButtonRef.current) {
            props.store
                .getEditModule('actions')
                .openToolbox("WebPart" /* WebPart */, props.layout, plusButtonRef.current);
        }
    }
}


/***/ }),

/***/ "ovt7":
/*!*****************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/DashCardToolboxHint.module.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DashCardToolboxHint.module.css */ "N3VY");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

}]);
//# sourceMappingURL=chunk.sp-canvas-dash-card_[locale].js.map