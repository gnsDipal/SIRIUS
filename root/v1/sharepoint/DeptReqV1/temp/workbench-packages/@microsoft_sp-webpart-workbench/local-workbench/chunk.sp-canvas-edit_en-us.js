(window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] = window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] || []).push([["sp-canvas-edit"],{

/***/ "+LOX":
/*!***********************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/toolbar/Toolbar.js ***!
  \***********************************************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Toolbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toolbar.scss */ "Hcv0");





var Toolbar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this._domElementRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._directionalHint = _this.props.directionalHint;
        return _this;
    }
    Toolbar.prototype.componentDidMount = function () {
        if (this.props.toolbarDidMount) {
            this.props.toolbarDidMount(this);
        }
    };
    Toolbar.prototype.render = function () {
        var _a = this.props, rootClassName = _a.rootClassName, toolbarClassName = _a.toolbarClassName, fixedPosition = _a.fixedPosition;
        var isControlToolbar = !toolbarClassName && !rootClassName;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusZone"], { isCircularNavigation: true, className: rootClassName },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: isControlToolbar ? 'CanvasControlToolbar' : toolbarClassName, "data-automation-id": 'canvas-control-toolbar', style: fixedPosition, role: 'toolbar', ref: this._domElementRef, "data-canvas-control": 'toolbar' },
                this._configurationButton,
                this._moveHandle,
                this._duplicateButton,
                this._deleteButton)));
    };
    Toolbar.prototype.getHeight = function () {
        return this._domElementRef.current ? this._domElementRef.current.clientHeight : 0;
    };
    Object.defineProperty(Toolbar.prototype, "toolBarElement", {
        get: function () {
            return this._domElementRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_deleteButton", {
        get: function () {
            if (!this.props.deleteButton) {
                return false;
            }
            var _a = this.props.deleteButton, title = _a.title, onClick = _a.onClick;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], { canBeActive: false, fabricIconKey: 'Trash', onClick: onClick, title: title, automationId: 'deleteButton', directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_configurationButton", {
        get: function () {
            if (!this.props.configurationButton) {
                return undefined;
            }
            var _a = this.props.configurationButton, fabricIconKey = _a.fabricIconKey, title = _a.title, onClick = _a.onClick;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], { canBeActive: false, fabricIconKey: fabricIconKey + "Edit", freIconRef: 'sp-fre-canvas-2', onClick: onClick, title: title, automationId: 'configureButton', directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_moveHandle", {
        get: function () {
            if (!this.props.moveButton) {
                return undefined;
            }
            var _a = this.props.moveButton, dragHandleTag = _a.dragHandleTag, title = _a.title;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], { canBeActive: false, fabricIconKey: 'Move', title: title, automationId: 'moveButton', dragHandleTag: dragHandleTag, directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "_duplicateButton", {
        get: function () {
            if (!this.props.duplicateButton) {
                return undefined;
            }
            var title = this.props.duplicateButton.title;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], { fabricIconKey: 'Copy', automationId: 'duplicateButton', onClick: this.props.duplicateButton.onClick, title: title, directionalHint: this._directionalHint }));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["autobind"]
    ], Toolbar.prototype, "getHeight", null);
    return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "//O0":
/*!***********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolbox/CanvasToolbox.js ***!
  \***********************************************************************/
/*! exports provided: CanvasToolbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasToolbox", function() { return CanvasToolbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeferredCanvasToolbox */ "7JSu");




var CanvasToolbox = /** @class */ (function () {
    function CanvasToolbox() {
    }
    /**
     * Render Toolbox component, and resolve the toolbox reference when it finishes rendering.
     * @param toolboxProps - The props of Toolbox component
     * @returns - The Promise which resolves the Toolbox reference for open/close actions.
     */
    CanvasToolbox.render = function (toolboxProps) {
        return new Promise(function (resolve) {
            var toolboxComponent = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DeferredCanvasToolbox__WEBPACK_IMPORTED_MODULE_3__["DeferredToolboxComponent"], {
                deferredProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, toolboxProps), { instanceRef: function (instance) { return resolve((CanvasToolbox._toolboxRef = instance)); } })
            });
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](toolboxComponent, CanvasToolbox._toolboxContainer);
            // When ref exists, it means the previous rendered toolbox is still mounted, we can return the ref directly.
            // Because if toolboxProps doesn't change, instanceRef will not be called twice.
            // When toolboxProps changes, we cannot omit ReactDOM.render as we need still need to update Toolbox pros.
            if (CanvasToolbox._toolboxRef) {
                resolve(CanvasToolbox._toolboxRef);
            }
        });
    };
    CanvasToolbox.close = function () {
        if (CanvasToolbox._toolboxRef) {
            CanvasToolbox._toolboxRef.closeToolbox();
        }
    };
    Object.defineProperty(CanvasToolbox, "_toolboxContainer", {
        get: function () {
            if (!CanvasToolbox._toolboxContainerInternal ||
                !document.body.contains(CanvasToolbox._toolboxContainerInternal)) {
                CanvasToolbox._toolboxContainerInternal = document.createElement('div');
                document.body.appendChild(CanvasToolbox._toolboxContainerInternal);
            }
            return CanvasToolbox._toolboxContainerInternal;
        },
        enumerable: true,
        configurable: true
    });
    return CanvasToolbox;
}());



/***/ }),

/***/ "/M9o":
/*!*******************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZoneEmphasisButton.module.scss.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasZoneEmphasisButton.module.css */ "NbyJ");
var styles = {
    emphasisPickerButton: 'y_h_32f825c4',
    isNone: 'z_h_32f825c4',
    isSelected: 'aa_h_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "/g48":
/*!*********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/index-edit.js ***!
  \*********************************************************************/
/*! exports provided: CanvasSectionDragZoneUtils, CanvasWebPartDragZoneUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasSectionDragZoneUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasSectionDragZoneUtils */ "l9Wn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasSectionDragZoneUtils", function() { return _CanvasSectionDragZoneUtils__WEBPACK_IMPORTED_MODULE_0__["CanvasSectionDragZoneUtils"]; });

/* harmony import */ var _CanvasWebPartDragZoneUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasWebPartDragZoneUtils */ "DjSq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasWebPartDragZoneUtils", function() { return _CanvasWebPartDragZoneUtils__WEBPACK_IMPORTED_MODULE_1__["CanvasWebPartDragZoneUtils"]; });





/***/ }),

/***/ "0Klk":
/*!*********************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRte.resx ***!
  \*********************************************************/
/*! exports provided: FormattingBarMoreButtonTitle, TextWebPartPlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"FormattingBarMoreButtonTitle\":\"More\",\"TextWebPartPlaceholder\":\"Add your text here.\"}");

/***/ }),

/***/ "2R/J":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: SPVariantThemeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPVariantThemeType", function() { return SPVariantThemeType; });
/**
 * See the equivalent in SPWeb
 * Variants documentation: https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/variants
 *  0: no emphasis - appears as normal
 *  1: neutral emphasis - soft shade of background as background (light gray in default theme)
 *  2: soft variant - soft tint of the primary color as background (light blue in default theme)
 *  3: strong variant - primary color as background, text uses original background color (white on blue in default theme)
 */
var SPVariantThemeType;
(function (SPVariantThemeType) {
    SPVariantThemeType[SPVariantThemeType["None"] = 0] = "None";
    SPVariantThemeType[SPVariantThemeType["Neutral"] = 1] = "Neutral";
    SPVariantThemeType[SPVariantThemeType["Soft"] = 2] = "Soft";
    SPVariantThemeType[SPVariantThemeType["Strong"] = 3] = "Strong";
})(SPVariantThemeType || (SPVariantThemeType = {}));
//# sourceMappingURL=SPVariantThemeType.js.map

/***/ }),

/***/ "4ZDH":
/*!*******************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/EditChunk.resx ***!
  \*******************************************************/
/*! exports provided: ToolboxErrorMessage, ToolboxVerticalColumnPart, ToolboxVerticalColumnToolTipText, ToolboxFullWidthColumnTooltipText, DeleteConfirmationLabel, DuplicateConfirmationLabel, YammerHighlightsWebpartTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ToolboxErrorMessage\":\"There was an error fetching the web parts. Not all web parts may be available.\",\"ToolboxVerticalColumnPart\":\"Vertical section\",\"ToolboxVerticalColumnToolTipText\":\"Can\\u0027t add a vertical section because one already exists, or because there is a full-width column on the page.\",\"ToolboxFullWidthColumnTooltipText\":\"Can\\u0027t add a full-width section because there is a vertical section on the page.\",\"DeleteConfirmationLabel\":\"{0} has been deleted.\",\"DuplicateConfirmationLabel\":\"{0} has been duplicated.\",\"YammerHighlightsWebpartTitle\":\"Highlights\"}");

/***/ }),

/***/ "5zIm":
/*!******************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/LayoutCanvasToolboxHint.scss.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./LayoutCanvasToolboxHint.css */ "R6FH");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "6HUO":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/sprte/SPRteTouchDevice.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ab_i_32f825c4{margin-top:30px}", ""]);


/***/ }),

/***/ "9MOG":
/*!************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/toolbar/Toolbar.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./Toolbar.css */ "ihgt");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "AHAC":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZone.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".e_c_32f825c4{position:absolute;top:0;-ms-flex-direction:row;flex-direction:row;text-align:center;font-size:32px;color:\"[theme:neutralLighterAlt, default: #faf9f8]\";pointer-events:none;visibility:collapse}.e_c_32f825c4,.e_c_32f825c4 .f_c_32f825c4{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.e_c_32f825c4 .f_c_32f825c4{width:50px;height:50px;background-color:\"[theme:themePrimary, default: #0078d4]\";-ms-flex-pack:center;justify-content:center}.e_c_32f825c4 .f_c_32f825c4 .ms-Icon{font-size:32px;padding:9px}.e_c_32f825c4 .g_c_32f825c4{height:22px;padding:4px;max-width:200px;font-size:15px!important;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-color:rgba(0,0,0,.5);color:#fff;font-family:Segoe UI Light WestEuropean,Segoe UI Light,Segoe WP Light,Segoe UI,Segoe WP,Tahoma,Arial,sans-serif}.e_c_32f825c4 .h_c_32f825c4{box-shadow:0 4.8px 14.4px rgba(0,0,0,.108),0 25.6px 57.6px rgba(0,0,0,.132);padding:8px;background-color:\"[theme:white, default: #ffffff]\";border:1px solid hsla(0,0%,100%,.15)}.e_c_32f825c4 .h_c_32f825c4 .i_c_32f825c4{position:absolute;text-align:center;display:block;background-color:\"[theme:white, default: #ffffff]\";margin-top:24px;padding:2px 8px;border-radius:2px;font-size:15px!important;font-family:Segoe UI;font-size:14px;color:\"[theme:black, default: #000000]\";border:1px solid hsla(0,0%,100%,.15)}.e_c_32f825c4 .j_c_32f825c4:before{content:\"\\F1D3\"}.e_c_32f825c4 .k_c_32f825c4:before{content:\"\\F1D4\"}.e_c_32f825c4 .l_c_32f825c4:before{content:\"\\F1D5\"}.e_c_32f825c4 .m_c_32f825c4:before{content:\"\\F1D6\"}.e_c_32f825c4 .n_c_32f825c4:before{content:\"\\F1D7\"}.o_c_32f825c4{position:relative}.o_c_32f825c4:before{background-color:\"[theme:neutralSecondary, default: #605e5c]\";content:\"\";display:block;position:absolute;height:100%;width:100%;z-index:100;opacity:.6}.p_c_32f825c4{pointer-events:none;position:fixed;will-change:left,top,transform;transform-origin:top left;z-index:1000}.q_c_32f825c4{z-index:100}.r_c_32f825c4:after{visibility:hidden}.r_c_32f825c4:after,.s_c_32f825c4{pointer-events:none!important}.t_c_32f825c4{position:relative;margin:0 auto}", ""]);


/***/ }),

/***/ "AlH4":
/*!***************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZone.resx ***!
  \***************************************************************************/
/*! exports provided: DragIconFallbackRTEText, DragZoneHandleTitle, DragZoneMoveStarted, DragZoneMoveComplete, DragZoneMoveCompleteZone, DragZoneMoveCancelled, DragZoneMoveNotAllowedAriaLabel, DragZoneMoveNotAllowed, DragZoneMoveInsideLevelControl, DragZoneMoveInsideLevelSection, DragZoneMoveInsideLevelZone, DragGhostSectionLabel, WebPartDragGhostDefaultLabel, DragGhostAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DragIconFallbackRTEText\":\"Text\",\"DragZoneHandleTitle\":\"Press Enter or Space to enter move mode\",\"DragZoneMoveStarted\":\"Press up arrow key to move up and down arrow key to move down. Press Enter to confirm the move. Press escape to cancel the move. \",\"DragZoneMoveComplete\":\"Moved web part from {0} to {1}. \",\"DragZoneMoveCompleteZone\":\"Moved section from {0} to {1}\",\"DragZoneMoveCancelled\":\"Move has been cancelled.\",\"DragZoneMoveNotAllowedAriaLabel\":\"Can\\u0027t move any further in that direction, or move is not allowed to that section\",\"DragZoneMoveNotAllowed\":\"Move not allowed\",\"DragZoneMoveInsideLevelControl\":\"Position {0}\",\"DragZoneMoveInsideLevelSection\":\"Column {0}, position {1}\",\"DragZoneMoveInsideLevelZone\":\"Section {0}, column {1}, position {2}\",\"DragGhostSectionLabel\":\"Section\",\"WebPartDragGhostDefaultLabel\":\"Web part\",\"DragGhostAriaLabel\":\"Moving {0}\"}");

/***/ }),

/***/ "DNmk":
/*!******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasStore/CanvasStoreEditActions.js ***!
  \******************************************************************************/
/*! exports provided: CanvasStoreEditActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasStoreEditActions", function() { return CanvasStoreEditActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-viewport-loader */ "ywDL");
/* harmony import */ var _ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _canvasStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../canvasStore */ "yRr9");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../canvasLayout */ "yPt8");
/* harmony import */ var _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../a11y/CanvasA11yConstants */ "AqUB");
/* harmony import */ var _canvasComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../canvasComponent */ "j0qU");
/* harmony import */ var _shouldExcludeFromToolbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shouldExcludeFromToolbox */ "Vp7h");
/* harmony import */ var _canvasSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../canvasSection */ "JqQl");
/* harmony import */ var _common_ComponentPerfLogger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/ComponentPerfLogger */ "RtnV");
/* harmony import */ var _webPartFactory_WebPartFactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webPartFactory/WebPartFactory */ "v9l7");
/* harmony import */ var _canvasToolbox_CanvasToolbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../canvasToolbox/CanvasToolbox */ "//O0");
/* harmony import */ var _canvasToolbox_ToolboxConstants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../canvasToolbox/ToolboxConstants */ "OfOi");
/* harmony import */ var _canvasToolbox_RteToolboxItemData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../canvasToolbox/RteToolboxItemData */ "d67+");
/* harmony import */ var _ControlPositionCalculator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ControlPositionCalculator */ "eITN");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/Flights */ "qRiB");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/Constants */ "+zV1");
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../EditChunk.resx */ "4ZDH");
var _EditChunk_resx__WEBPACK_IMPORTED_MODULE_26___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../EditChunk.resx */ "4ZDH", 1);



























var SECTION_ITEM_GROUPID = '19ede092-2988-4759-9b2f-5396b160ce68';
var CANVAS_ELEMENT_DELETION = 'canvasElementDeleted';
var VERTICAL_SECTION_TOOLBOX_POSITION = Object(_canvasComponent__WEBPACK_IMPORTED_MODULE_13__["CreateEmptyZoneLayout"])(1, // Zone index
1, // Section index
undefined, // Control index
_canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].verticalLayoutIndex);
var REMOVE_HTMLTAGS_REGEX = new RegExp(/<([^>]+)>|&nbsp;/g);
var REMOVE_SPACES_REGEX = new RegExp(/\\s+/g);
var CanvasStoreEditActions = /** @class */ (function () {
    function CanvasStoreEditActions(store) {
        var _this = this;
        this._isDisposed = false;
        this.setDisplayModeCore = function (newMode) {
            var setDisplayModeTasks;
            if (_common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_22__["Experiments"].isRTEClickAnywhereExperimentEnabled()) {
                setDisplayModeTasks = _this._canvasFields.canvasControls.map(function (control) { return function () {
                    var controlComponent = _this._canvasFields.getControlComponentById(control.id);
                    return controlComponent ? controlComponent.setDisplayMode(newMode) : Promise.resolve(undefined);
                }; });
            }
            else {
                setDisplayModeTasks = _this._canvasFields.canvasControls.map(function (control) {
                    var controlComponent = _this._canvasFields.getControlComponentById(control.id);
                    return controlComponent
                        ? function () { return controlComponent.setDisplayMode(newMode); }
                        : function () { return Promise.resolve(undefined); };
                });
            }
            return Object(_ms_sp_viewport_loader__WEBPACK_IMPORTED_MODULE_7__["runTasksWithoutBlockingAnimation"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                function () {
                    return new Promise(function (resolve) {
                        if (newMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read) {
                            _this._afterReadModeSwitched();
                        }
                        _this._canvasFields.render(resolve);
                    });
                }
            ], setDisplayModeTasks)).then(function () {
                if (!_common_Flights__WEBPACK_IMPORTED_MODULE_23__["Flights"].isCanvasReadOnlyEnabled() && newMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Read) {
                    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.raiseEvent('anchorEvent', {
                        action: 'FinishRegistration'
                    });
                }
            });
        };
        this.moveControl = function (control, newControlPosition) {
            // If the move is within the same layout index, let layout handle the move
            if (control.position.layoutIndex === newControlPosition.layoutIndex) {
                _this._canvasFields.canvasLayout.moveControl(control, newControlPosition);
            }
            else {
                // Todo#661360 Fix workaround left-over
                _this._canvasFields.canvasLayouts.get(control.position.layoutIndex).removeControl(control.position);
                control.position = newControlPosition;
                if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone) {
                    control.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString();
                }
                // Todo#661360 Fix workaround left-over
                _this._canvasFields.canvasLayouts.get(newControlPosition.layoutIndex).addControl(control);
                _this._canvasFields.render();
                _this._canvasFields.handleCanvasChanged({
                    selectedControlId: control.id
                });
            }
        };
        this.openToolbox = function (type, position, target, onClose) {
            var qos = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('Canvas.openToolbox');
            _common_ComponentPerfLogger__WEBPACK_IMPORTED_MODULE_16__["ComponentPerfLogger"].getInstance().start('ToolboxRender', 'ToolboxComponentDownload');
            var items = [];
            var errorMessage;
            var featuredIds = _canvasToolbox_ToolboxConstants__WEBPACK_IMPORTED_MODULE_19__["FEATURED_ITEM_IDS"];
            try {
                items = _this.getToolboxItems(type, position);
            }
            catch (e) {
                errorMessage = _EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["ToolboxErrorMessage"];
            }
            var toolboxProps = {
                items: errorMessage ? new Error(errorMessage) : items,
                onClickItem: function (itemProps, info) { return _this.handleToolboxItemClick(itemProps, info); },
                onCloseToolbox: function () {
                    _this._canvasFields.toolboxOpenPosition = undefined;
                    if (onClose) {
                        onClose();
                    }
                },
                a11yManager: _this._canvasFields.a11yManager,
                cultureName: _this._canvasFields.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey).cultureInfo
                    .currentUICultureName,
                componentPerfLogger: _common_ComponentPerfLogger__WEBPACK_IMPORTED_MODULE_16__["ComponentPerfLogger"].getInstance(),
                featuredIds: featuredIds,
                // Quick solution for internal demo, will be refined in future.
                pageLayoutType: _this._canvasFields.pageLayoutType,
                serviceScope: _this._canvasFields.serviceScope
            };
            _this._canvasFields.toolboxOpenPosition = position;
            _canvasToolbox_CanvasToolbox__WEBPACK_IMPORTED_MODULE_18__["CanvasToolbox"].render(toolboxProps)
                .then(function (ref) {
                _common_ComponentPerfLogger__WEBPACK_IMPORTED_MODULE_16__["ComponentPerfLogger"].getInstance().markStage('ToolboxRender', 'ToolboxChunkDownload');
                if (type === "WebPart" /* WebPart */) {
                    ref.openWebPartToolbox(target, _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomCenter);
                }
                else {
                    ref.openSectionToolbox(target, _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightTopEdge);
                }
                qos.writeSuccess();
            })
                .catch(function (error) { return qos.writeUnexpectedFailure(error); });
        };
        this.closeToolbox = function () {
            _canvasToolbox_CanvasToolbox__WEBPACK_IMPORTED_MODULE_18__["CanvasToolbox"].close();
            _this._canvasFields.toolboxOpenPosition = undefined;
        };
        this.handleConfigureButtonClicked = function (id) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName('ConfigureControl'));
            var isCurrentlySelected = _this._canvasFields.selectedControlIdInternal === id;
            // Only toggle the Property Pane if the currently selected control's configure button is clicked.
            var controlComponent = _this._canvasFields.getControlComponentById(id);
            if (controlComponent) {
                controlComponent.handleConfigureButtonClicked(isCurrentlySelected);
                // Set private member so we don't call requestPropertyPaneAction twice.
                _this._canvasFields.selectedControlIdInternal = id;
                _this._canvasFields.editedZoneIndex = undefined; // Todo#661360 Fix workaround left-over
                _this._canvasFields.render();
            }
        };
        this.handleDuplicateControlButtonClicked = function (id) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName('DuplicateControl'));
            var canvasControl = _this._canvasFields.getControlComponentById(id);
            if (!canvasControl) {
                return;
            }
            var duplicateControlData = CanvasStoreEditActions._cloneControl(canvasControl);
            // Todo#661360 Fix workaround left-over
            var newLayoutIndex = _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].generateNewLayoutIndex(_this._canvasFields.canvasLayout
                .fetchZone(duplicateControlData.position.zoneIndex)
                .fetchAllControls()
                .filter(function (control) { return control.position.sectionIndex === duplicateControlData.position.sectionIndex; })
                .map(function (control) {
                return { index: control.position.controlIndex };
            }), duplicateControlData.position.controlIndex, true);
            duplicateControlData.position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, duplicateControlData.position), { controlIndex: newLayoutIndex });
            _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].addControlToCanvas(_this._canvasFields, duplicateControlData, true);
            _this._canvasFields.a11yManager.alert(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["DuplicateConfirmationLabel"], _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["WebPartAriaLabel"]));
        };
        this.handleDuplicateZoneButtonClicked = function (id) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName('DuplicateZone'));
            var originalZone = _this._canvasFields.canvasLayout.fetchZone(+id);
            var newLayoutIndex = _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].generateNewLayoutIndex(_this._canvasFields.canvasLayout.zones, originalZone.index, true);
            originalZone.fetchAllControls(true).forEach(function (control) {
                var canvasControl = _this._canvasFields.getControlComponentById(control.id);
                if (canvasControl) {
                    var duplicateControlData = CanvasStoreEditActions._cloneControl(canvasControl);
                    duplicateControlData.position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, duplicateControlData.position), { zoneIndex: newLayoutIndex });
                    _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].addControlToCanvas(_this._canvasFields, duplicateControlData, false);
                }
                else if (!control.id && !control.controlType) {
                    var duplicateControlData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, control);
                    duplicateControlData.position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, duplicateControlData.position), { zoneIndex: newLayoutIndex });
                    _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].addControlToCanvas(_this._canvasFields, duplicateControlData, false);
                }
            });
            _this._canvasFields.render();
            _this._canvasFields.handleCanvasChanged();
            _this._canvasFields.a11yManager.alert(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["DuplicateConfirmationLabel"], _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["SectionAriaLabel"]));
        };
        this.handleConfigureZoneButtonClicked = function (id, zoneFocusHandler) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName('ConfigureZone'));
            var isCurrentlySelected = _this._canvasFields.editedZoneIndex === id;
            void _this._canvasFields.propertyPaneLoader.propertyPane.then(function (propertyPaneController) {
                propertyPaneController.requestAction(id, isCurrentlySelected ? 'Toggle' : 'Open');
            });
            _this._canvasFields.editedZoneIndex = id;
            _this._canvasFields.editedZoneFocusHandler = zoneFocusHandler;
        };
        this.handleDeleteControlButtonClicked = function (position) {
            _this._canvasFields.selectedLayoutIndex = position.layoutIndex;
            var selectedControl = _this._canvasFields.getControl(position);
            var controlType;
            if (selectedControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].RTE) {
                controlType = 'RTE';
            }
            else {
                controlType = 'WebPart';
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].log({
                name: CanvasStoreEditActions._getEventName('DeleteControl'),
                extraData: {
                    controlType: controlType
                }
            });
            void _this._canvasFields.propertyPaneLoader.propertyPane.then(function (propertyPaneController) {
                // Todo#661360 Fix workaround left-over
                var consumerId = selectedControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone
                    ? _this._canvasFields.selectedControlIdInternal
                    : undefined;
                propertyPaneController.requestAction(consumerId);
            });
            _this._canvasFields.selectedControlIdInternal = selectedControl.id;
            _this._deleteControl(position);
        };
        this.handleDeleteZoneButtonClicked = function (position) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName('DeleteZone'));
            _this._deleteZone(position);
        };
        this.handleToolboxItemClick = function (itemProps, info) {
            var isZone = !(itemProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].RTE ||
                itemProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone);
            var extraData = {};
            if (isZone && itemProps.position.layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].verticalLayoutIndex) {
                var eventNameVS = 'VerticalSection';
                extraData.alias = eventNameVS;
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(CanvasStoreEditActions._getEventName(eventNameVS));
            }
            var qos = _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].createQosScope('ToolboxItemClicked');
            if (_this._canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit) {
                _this._canvasFields.selectedControlIdInternal = itemProps.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString();
                _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].addControlToCanvas(_this._canvasFields, itemProps, undefined /** shouldRender */, undefined /** shouldPersistData */, _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_22__["Experiments"].isRTEClickAnywhereExperimentEnabled() ? true /** addedFromToolbox */ : undefined);
                // Notify all the web parts to resize when vertical section is added
                if (itemProps.position.layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].verticalLayoutIndex) {
                    _this._canvasFields.webPartManager.notifyWebPartContainerResize();
                }
                if (isZone) {
                    _this._canvasFields.selectedZoneIndex = itemProps.position.zoneIndex;
                }
                _this._canvasFields.render();
                if (itemProps.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone) {
                    // We don't want to notify the change for web part. There is an implicit logic in WebPartZone
                    // which will serialize the web part right after it's mounted and notify the change.
                    // We need to make sure there is only one change notified when web part is added.
                    _this._canvasFields.handleCanvasChanged();
                }
                qos.writeSuccess(extraData);
                if (itemProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"]('Toolbox', 'AddWebPart', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ manifestId: itemProps.webPartManifest.id }, CanvasStoreEditActions._convertClickItemInfo(info))));
                }
                else if (itemProps.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].RTE) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"]('Toolbox', 'AddRTE', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: info.size }, CanvasStoreEditActions._convertClickItemInfo(info))));
                }
            }
            else {
                var error = new Error('handleToolboxItemClicked invoked in read mode');
                // This method should never be invoked when in DisplayMode.Read since the Toolbox should not be visible.
                qos.writeUnexpectedFailure('ReadMode', error, extraData);
            }
        };
        this.pollActiveElement = function () {
            var activeElement = document.activeElement;
            if (activeElement && activeElement.tagName !== 'IFRAME') {
                window.clearInterval(_this._canvasFields.pollId);
            }
            else if (_this._canvasFields.oldActiveElement !== activeElement && _this._canvasFields.hoveredControlId) {
                _this._canvasFields.oldActiveElement = activeElement;
                _this._canvasFields.selectedControlIdInternal = _this._canvasFields.hoveredControlId;
            }
        };
        /**
         * If needed, scrolls element into view after the element is added to the Canvas.
         * Note: Javascript scrollIntoView is not consistent cross-browser
         *
         * @param type - Specifies whether to scroll if the 'full' web part is visible or a 'partial' part of the web part
         *   is visible
         * @param element - A rendered element inside the Canvas to scroll to
         * @param duration - The length of time the animation should take. Frames are calculated by duration / delta time.
         * @param margin - Optional. Margin to be scrolled into view. If not provided, margin is not scrolled into view
         */
        this.scrollIntoView = function (type, element, duration, margin, allowScrollUp) {
            if (margin === void 0) { margin = 0; }
            if (!_this._canvasFields.scrollableParent || !element) {
                return;
            }
            var parentClientRect = _this._canvasFields.scrollableParent.getBoundingClientRect();
            var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var frameBottom = Math.min(viewportHeight, parentClientRect.bottom);
            var elementClientRect = element.getBoundingClientRect();
            // 'partial' checks bottom to see if the element is partially hidden after adding, if it is scroll into view
            // 'full checks if the entire web part is hidden, if it is scroll into view
            if ((type === 'partial' ? elementClientRect.bottom : elementClientRect.top) > frameBottom ||
                (allowScrollUp && frameBottom > elementClientRect.top)) {
                _this._scrollElementIntoView(frameBottom, element, duration, margin, parentClientRect, elementClientRect);
            }
        };
        this.reclaimFocus = function () {
            var selectedControlId = _this._canvasFields.selectedControlIdInternal;
            if (selectedControlId) {
                var controlComponent = _this._canvasFields.getControlComponentById(selectedControlId);
                if (controlComponent) {
                    controlComponent.focus();
                }
            }
            else if (_this._canvasFields.editedZoneIndex && _this._canvasFields.editedZoneFocusHandler) {
                // This is a callback method that sets focus on the respective zone when the property pane closes
                _this._canvasFields.editedZoneFocusHandler();
            }
        };
        /**
         * IFrame's swallow pointer events, so this is a workaround to detect when focus has shifted to
         * an IFrame. Additionally, to compensate for IFrame to IFrame interactions we poll for the document.activeElement.
         * If document.activeElement is not the same as it was in the last poll then the focus has shifted from the IFrame.
         * If the new document.activeElement is an IFrame continue polling, otherwise we can stop polling because focus
         * is back inside of the current document.
         */
        this.handleWindowBlur = function (e) {
            if (_this._canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit &&
                _this._canvasFields.hoveredControlId &&
                document.activeElement &&
                document.activeElement.tagName === 'IFRAME') {
                _this._canvasFields.selectedControlIdInternal = _this._canvasFields.hoveredControlId;
                _this._canvasFields.oldActiveElement = document.activeElement;
                // Before setting a new interval clear the last one, this prevents more than one poll to be active.
                window.clearInterval(_this._canvasFields.pollId);
                _this._canvasFields.pollId = window.setInterval(function () { return _this.pollActiveElement(); }, 250);
            }
        };
        this.updateControl = function (newCanvasControl) {
            var layoutIndex = newCanvasControl.position.layoutIndex;
            var layout = layoutIndex
                ? _this._canvasFields.canvasLayouts.get(layoutIndex)
                : _this._canvasFields.canvasLayout;
            return layout.updateControl(newCanvasControl);
        };
        this.handleRteChanged = function (newCanvasControl, newSelection, shouldUpdate) {
            if (shouldUpdate === void 0) { shouldUpdate = true; }
            var hasControlUpdated = _this.updateControl(newCanvasControl);
            if (hasControlUpdated && shouldUpdate) {
                _this._canvasFields.handleCanvasChanged({
                    selectedControlId: newCanvasControl.id,
                    selectedRteState: {
                        selection: newSelection
                    }
                });
            }
        };
        this.handleWebPartChanged = function (wpInstanceId) {
            var handleCanvasChanged = _this._canvasFields.handleCanvasChanged;
            var newCanvasControl = _this._canvasFields.getControlComponentById(wpInstanceId).serialize();
            // For newly added web parts, they might manipulate the property bag after initialization which brings multiple
            // changes being tracked. The changes happen before web parts finalize their property bag should not be tracked.
            // E.g. Adding Image web part by Blob which will be uploaded by Image web part itself and be reflected to its
            // property bag.
            var shouldSkipUpdate = newCanvasControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone &&
                _webPartFactory_WebPartFactory__WEBPACK_IMPORTED_MODULE_17__["WebPartFactory"].shouldExcludeFromWebPartUpdate(newCanvasControl);
            if (!shouldSkipUpdate) {
                newCanvasControl.addedFromPersistedData = true;
                var hasControlUpdated = _this.updateControl(newCanvasControl);
                if (hasControlUpdated) {
                    // Make sure updated control data is reflected to WebPartZone props.
                    _this._canvasFields.render();
                    handleCanvasChanged({
                        selectedControlId: wpInstanceId
                    });
                }
            }
        };
        this._deleteControl = function (position) {
            var qos = _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].createQosScope('DeleteWebPart');
            try {
                var control_1 = _this._canvasFields.getControl(position);
                if (control_1 && _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone === control_1.controlType) {
                    _this._markWebPartDeletion(control_1);
                }
                _this._renderAfterDeletionAndAdjustFocus(position, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["DeleteConfirmationLabel"], _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["WebPartAriaLabel"]), function () {
                    _this._canvasFields.canvasLayout.removeControl(position);
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_23__["Flights"].isInlineImageEnabled() && control_1.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].RTE) {
                        // Clean up inline web parts in RTE
                        _this.cleanupIntegratedWebParts(control_1.id);
                    }
                    document.dispatchEvent(new CustomEvent(CANVAS_ELEMENT_DELETION));
                });
                qos.writeSuccess();
            }
            catch (err) {
                _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].handleMonitoredException(qos, err);
            }
        };
        this._deleteZone = function (position) {
            var zoneDeleteQos = _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].createQosScope('DeleteZone');
            try {
                var zone = _this._canvasFields.canvasLayout.fetchZone(position.zoneIndex);
                zone.fetchAllControls().forEach(function (control) {
                    if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone) {
                        _this._markWebPartDeletion(control);
                    }
                });
                _this._renderAfterDeletionAndAdjustFocus(position, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["DeleteConfirmationLabel"], _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["SectionAriaLabel"]), function () {
                    _this._canvasFields.canvasLayout.removeZone(position.zoneIndex);
                    document.dispatchEvent(new CustomEvent(CANVAS_ELEMENT_DELETION));
                });
                // Notify all the web parts to resize when vertical section is deleted
                if (position.layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].verticalLayoutIndex) {
                    _this._canvasFields.selectedLayoutIndex = _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["CanvasLayout"].firstLayoutIndex;
                    _this._canvasFields.webPartManager.notifyWebPartContainerResize();
                }
                zoneDeleteQos.writeSuccess();
            }
            catch (err) {
                _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].handleMonitoredException(zoneDeleteQos, err);
            }
        };
        this._handlePropertyPaneEvent = function (eventArgs) {
            if (eventArgs.configurationEvent === 'Opened' || eventArgs.configurationEvent === 'Closed') {
                _this._store.canvasFields.render();
            }
        };
        this._store = store;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.registerEvent('propertyPaneEvent', this, this._handlePropertyPaneEvent);
    }
    CanvasStoreEditActions._extractWebPartData = function (manifest, entry) {
        // Todo#661360 Fix workaround left-over
        var webPartData = {
            id: manifest.id,
            instanceId: undefined,
            title: entry.title.default,
            description: entry.description.default,
            dataVersion: entry.dataVersion,
            properties: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(entry.properties)
        };
        return webPartData;
    };
    CanvasStoreEditActions._getEventName = function (eventName) {
        return "Canvas." + eventName + ".Click";
    };
    CanvasStoreEditActions._convertClickItemInfo = function (info) {
        var extraLogs = {
            source: info.size
        };
        if (info.size === 'Small') {
            extraLogs.queryLength = info.query.length.toString();
        }
        else if (info.size === 'Large') {
            extraLogs.view = info.query ? 'Search' : info.view.type;
            extraLogs.queryLength = info.query.length.toString();
        }
        return extraLogs;
    };
    CanvasStoreEditActions._createSectionItemProps = function (controlType, position) {
        return {
            controlType: controlType,
            position: position,
            id: undefined // Todo#661360 Fix workaround left-over
        };
    };
    /**
     * Calculates the easing number using the quadratic in-out formula
     */
    CanvasStoreEditActions._calculateEasing = function (time, start, diff, duration) {
        time /= duration / 2;
        if (time < 1) {
            return (diff / 2) * time * time + start;
        }
        else {
            --time;
            return (-diff / 2) * (time * (time - 2) - 1) + start;
        }
    };
    CanvasStoreEditActions._cloneControl = function (control) {
        var duplicateControlData = control.serialize();
        duplicateControlData.addedFromPersistedData = true;
        var newId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString();
        duplicateControlData.id = newId;
        if (duplicateControlData.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone) {
            duplicateControlData.webPartData.instanceId = newId;
        }
        return duplicateControlData;
    };
    Object.defineProperty(CanvasStoreEditActions.prototype, "_canvasFields", {
        get: function () {
            return this._store.canvasFields;
        },
        enumerable: true,
        configurable: true
    });
    CanvasStoreEditActions.prototype.cleanupIntegratedWebParts = function (controlId, // Rte instance id
    innerHTML // Whether we are checking innerHTML or just deleting the RTE
    ) {
        var _this = this;
        var canvasControls = this._canvasFields.canvasControls;
        var integratedControls = canvasControls.filter(function (canvasControl) {
            return canvasControl &&
                canvasControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone &&
                canvasControl.rteInstanceId === controlId;
        });
        var isRteDeleted = !innerHTML;
        integratedControls.forEach(function (integratedControl) {
            var _a;
            // We want to clean up inline web parts if
            // 1. Web part got deleted from RTE
            // 2. If RTE gets deleted
            if (((_a = innerHTML) === null || _a === void 0 ? void 0 : _a.indexOf(integratedControl.id)) === -1 || isRteDeleted) {
                _this.handleDeleteControlButtonClicked(integratedControl.position);
            }
        });
    };
    CanvasStoreEditActions.prototype.addRTEInCanvas = function (rteCanvasControl, shouldPersistData) {
        if (shouldPersistData === void 0) { shouldPersistData = true; }
        var spaceNormalizedInnerHtml;
        var shouldAddRTE;
        if (rteCanvasControl.innerHTML) {
            spaceNormalizedInnerHtml = rteCanvasControl.innerHTML.replace(REMOVE_HTMLTAGS_REGEX, '');
            spaceNormalizedInnerHtml = spaceNormalizedInnerHtml.replace(REMOVE_SPACES_REGEX, '');
            shouldAddRTE = spaceNormalizedInnerHtml !== '';
        }
        // We do not want to add empty RTE.
        if (shouldAddRTE) {
            this._store.addControlToCanvas(rteCanvasControl, true, shouldPersistData);
        }
    };
    CanvasStoreEditActions.prototype.getToolBoxItem = function (id) {
        var toolboxItems = this.getToolboxItems("WebPart" /* WebPart */, _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["undefinedControlPosition"]);
        var currentIndex = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(toolboxItems, function (toolboxItem) {
            return id === toolboxItem.itemData.webPartId;
        });
        if (currentIndex !== -1) {
            return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(toolboxItems[currentIndex].itemData);
        }
        return undefined;
    };
    CanvasStoreEditActions.prototype.getSectionToolboxItems = function (position) {
        var items = [
            {
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxOneColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].OneColumn, position),
                id: 'SingleColumnSectionToolboxItem',
                msIconName: 'SingleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxTwoColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].TwoColumns, position),
                id: 'DoubleColumnSectionToolboxItem',
                msIconName: 'DoubleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxThreeColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].ThreeColumns, position),
                id: 'TripleColumnSectionToolboxItem',
                msIconName: 'TripleColumn',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxOneThirdLeftColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].OneThirdColumnLeft, position),
                id: 'ColumnRightTwoThirdsSectionToolboxItem',
                msIconName: 'ColumnRightTwoThirds',
                groupId: SECTION_ITEM_GROUPID
            },
            {
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxOneThirdRightColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].OneThirdColumnRight, position),
                id: 'ColumnLeftTwoThirdsSectionToolboxItem',
                msIconName: 'ColumnLeftTwoThirds',
                groupId: SECTION_ITEM_GROUPID
            }
        ];
        if (this._canvasFields.siteSupportsFullWidth) {
            items.push({
                displayName: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_25__["ToolboxFullWidthColumnPart"],
                itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].FullWidth, position),
                id: 'FullWidthSectionToolboxItem',
                msIconName: 'FullWidth',
                groupId: SECTION_ITEM_GROUPID,
                disabled: !this._canvasFields.canAddFullWidthSection
            });
        }
        items.push({
            displayName: _EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["ToolboxVerticalColumnPart"],
            itemData: CanvasStoreEditActions._createSectionItemProps(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].OneColumn, VERTICAL_SECTION_TOOLBOX_POSITION),
            id: 'VerticalSectionToolboxItem',
            msIconName: 'ColumnVerticalSection',
            groupId: SECTION_ITEM_GROUPID,
            disabled: !this._canvasFields.canAddVerticalSection
        });
        return items;
    };
    CanvasStoreEditActions.prototype.getToolboxItems = function (type, position) {
        var _this = this;
        if (type === "Section" /* Section */) {
            return this.getSectionToolboxItems(position);
        }
        var qos = _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].createQosScope('LoadWebPartsInToolbox');
        try {
            var toolboxItems_1 = type === "WebPart" /* WebPart */ &&
                (!_common_Flights__WEBPACK_IMPORTED_MODULE_23__["Flights"].isMEEDashboardEnabled() || this._canvasFields.pageLayoutType !== _common_Constants__WEBPACK_IMPORTED_MODULE_24__["PageLayoutName"].Dashboard)
                ? [Object(_canvasToolbox_RteToolboxItemData__WEBPACK_IMPORTED_MODULE_20__["getRteToolboxItemData"])(position)]
                : [];
            _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].getManifestMap(this._canvasFields).forEach(function (manifest, cid) {
                var _a;
                if (Object(_shouldExcludeFromToolbox__WEBPACK_IMPORTED_MODULE_14__["shouldExcludeFromToolbox"])(manifest, _this._canvasFields.pageContext, _this._canvasFields.pageLayoutType)) {
                    return;
                }
                var i = 0;
                for (var _i = 0, _b = manifest.preconfiguredEntries; _i < _b.length; _i++) {
                    var entry = _b[_i];
                    var itemProps = {
                        controlType: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].WebPartZone,
                        id: undefined,
                        position: position,
                        webPartId: cid,
                        webPartData: CanvasStoreEditActions._extractWebPartData(manifest, entry),
                        webPartManifest: manifest
                    };
                    var iconUrl = entry.iconImageUrl;
                    if (iconUrl && !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlUtilities"].isDataUrl(iconUrl)) {
                        iconUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlUtilities"].resolve(iconUrl, manifest.loaderConfig.internalModuleBaseUrls[0]);
                    }
                    var displayName = entry.title.default;
                    if (itemProps.webPartManifest &&
                        itemProps.webPartManifest.id === '31e9537e-f9dc-40a4-8834-0e3b7df418bc') {
                        displayName = _EditChunk_resx__WEBPACK_IMPORTED_MODULE_26__["YammerHighlightsWebpartTitle"];
                    }
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_23__["Flights"].isMEEDashboardEnabled() && ((_a = manifest.experimentalData) === null || _a === void 0 ? void 0 : _a.ACE)) {
                        // All manifests have been fetched at this point so the ACE WP manifest should exist
                        var aceWPmanifest = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__["SPComponentLoader"].tryGetManifestById('f3bc67ee-015d-4678-a95f-c7e90ea62c1e', '1.0.0');
                        itemProps.webPartManifest = aceWPmanifest;
                        itemProps.webPartId = aceWPmanifest.id;
                        var aceEntry = aceWPmanifest.preconfiguredEntries[0];
                        itemProps.webPartData = CanvasStoreEditActions._extractWebPartData(aceWPmanifest, aceEntry);
                        // This needs to be up to date with @ms/sp-adaptive-card-extension-web-part#IAdaptiveCardExtensionWebPartProperties
                        itemProps.webPartData.properties = {
                            aceData: {
                                dataVersion: entry.dataVersion,
                                id: manifest.id,
                                properties: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(entry.properties),
                                title: entry.title.default,
                                description: entry.description.default,
                                cardSize: entry.properties.cardSize || 'Medium',
                                iconProperty: entry.officeFabricIconFontName || entry.iconImageUrl
                            },
                            aceManifestId: manifest.id
                        };
                    }
                    // Todo#661360 Fix workaround left-over
                    var toolboxItem = {
                        itemData: itemProps,
                        description: entry.description.default,
                        displayName: displayName,
                        msIconName: entry.officeFabricIconFontName,
                        imageSrc: iconUrl,
                        id: manifest.id + "_" + i++,
                        groupId: entry.groupId
                    };
                    if (type !== "FullWidth" /* FullWidth */ || _canvasSection__WEBPACK_IMPORTED_MODULE_15__["CanvasFullWidthSection"].isFullWidthControl(itemProps)) {
                        toolboxItems_1.push(toolboxItem);
                    }
                }
            });
            qos.writeSuccess();
            return toolboxItems_1;
        }
        catch (err) {
            _canvasStore__WEBPACK_IMPORTED_MODULE_9__["CanvasStoreCommonActions"].handleMonitoredException(qos, err);
            return [];
        }
    };
    CanvasStoreEditActions.prototype.tryMatchContentHandlerAndSplit = function (rteInstanceId, // The id of the RTE instance where the paste happens.
    innerHTML, position, data, captionText) {
        // Because the rich text editor has been manipulated (text split) when matching content handler actions,
        // We need to make sure the data in the store is update to date and the change should be combined with actual
        // content handler changes when being bubbled to page. So changes caused content handler action will be treated
        // as one change.
        var controlComponent = this._canvasFields.getControlComponentById(rteInstanceId);
        if (controlComponent) {
            this.handleRteChanged(controlComponent.serialize(), undefined /* newSelection */, false /* shouldUpdate */);
        }
        var webPartProps = this._matchWebPart(data, captionText);
        var rteCanvasContent = {
            controlType: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_10__["CanvasControlType"].RTE,
            id: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString(),
            position: _canvasLayout__WEBPACK_IMPORTED_MODULE_11__["undefinedControlPosition"],
            innerHTML: innerHTML
        };
        this._addRTEAndWebPart(position, rteCanvasContent, webPartProps);
    };
    CanvasStoreEditActions.prototype.tryMatchContentHandlerInline = function (rteInstanceId, // The id of the RTE instance where the paste happens.
    position, data, captionText) {
        var webPartProps = this._matchWebPart(data, captionText);
        webPartProps.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(position);
        webPartProps.rteInstanceId = rteInstanceId;
        // We don't want to persist the data immediately when this gets called when web part is added by drag and drop,
        // web part zone will notify canvas once the web part is mounted and initialized.
        this._store.addControlToCanvas(webPartProps, false /* shouldRender */, false /* shouldPersistData */);
        return webPartProps;
    };
    CanvasStoreEditActions.prototype.getControlPositionAfterImagePaste = function (controls, position, isZone) {
        if (isZone) {
            return _ControlPositionCalculator__WEBPACK_IMPORTED_MODULE_21__["ControlPositionCalculator"].getPositionToInsertInSelectedZone(controls, position);
        }
        return _ControlPositionCalculator__WEBPACK_IMPORTED_MODULE_21__["ControlPositionCalculator"].getPositionToInsertAfterSelectedControl(controls, position);
    };
    CanvasStoreEditActions.prototype.handleImagePasteInCanvas = function (clipboardData, position) {
        var data = clipboardData.items;
        if (data instanceof DataTransferItemList) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].kind === 'file') {
                    this.pasteImageInCanvas(data[i].getAsFile(), position);
                }
            }
        }
    };
    CanvasStoreEditActions.prototype.dispose = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.unregisterEvent('propertyPaneEvent', this, this._handlePropertyPaneEvent);
        this._isDisposed = true;
    };
    Object.defineProperty(CanvasStoreEditActions.prototype, "instanceId", {
        get: function () {
            if (!this._instanceId) {
                this._instanceId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid().toString();
            }
            return this._instanceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStoreEditActions.prototype, "componentId", {
        get: function () {
            return '85093aa7-8c12-4683-91aa-47cd5e2654db';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStoreEditActions.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasStoreEditActions.prototype, "selectedPosition", {
        set: function (control) {
            var _this = this;
            if (this._canvasFields.selectedControlIdInternal !== control.id ||
                this._canvasFields.selectedLayoutIndex !== control.position.layoutIndex) {
                this._canvasFields.selectedLayoutIndex = control.position.layoutIndex || 1;
                this._canvasFields.selectedControlIdInternal = control.id;
                this._canvasFields.render();
            }
            void this._canvasFields.propertyPaneLoader.propertyPane.then(function (propertyPaneController) {
                if (control.id !== undefined &&
                    propertyPaneController &&
                    _this._canvasFields.displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["DisplayMode"].Edit) {
                    var isCurrentlyConfigured = propertyPaneController.currentlyConfiguredConsumerId === control.id;
                    propertyPaneController.requestAction(control.id, isCurrentlyConfigured ? 'Refresh' : 'Default');
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    CanvasStoreEditActions.prototype._matchWebPart = function (data, captionText) {
        var pasteMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('RTEOnPasteFromExternalSource');
        var tryGetWebPartResult = _webPartFactory_WebPartFactory__WEBPACK_IMPORTED_MODULE_17__["WebPartFactory"].getWebPart(data, this._store);
        if (tryGetWebPartResult.webPartResultType !== "SUCCESS" /* SUCCESS */) {
            if (tryGetWebPartResult.webPartResultType === "FileTypeNotSupported" /* FILE_TYPE_NOT_SUPPORTED */) {
                pasteMonitor.writeExpectedFailure(tryGetWebPartResult.webPartResultType);
            }
            else {
                pasteMonitor.writeUnexpectedFailure(tryGetWebPartResult.webPartResultType);
            }
        }
        pasteMonitor.writeSuccess();
        var webPartProps = tryGetWebPartResult
            .webPartDataProps;
        if (webPartProps.webPartManifest.id === 'd1d91016-032f-456d-98a4-721247c305e8' /** Image web part */ &&
            captionText) {
            webPartProps.webPartData.properties.captionText = captionText;
        }
        return webPartProps;
    };
    CanvasStoreEditActions.prototype._addRTEAndWebPart = function (position, rteCanvasControl, itemPropsWebPart) {
        var controls = this._store.canvasLayout.fetchAllControls();
        var currentIndex = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(controls, function (control) {
            return (position.zoneIndex === control.position.zoneIndex &&
                position.sectionIndex === control.position.sectionIndex &&
                position.controlIndex === control.position.controlIndex &&
                position.sectionFactor === control.position.sectionFactor);
        });
        var nextIndex = currentIndex + 1;
        var nextControlPosition;
        if (nextIndex < controls.length &&
            controls[nextIndex].position.zoneIndex === position.zoneIndex &&
            controls[nextIndex].position.sectionIndex === position.sectionIndex) {
            // If the zone indexes and section indexes are same, then it means that
            // the next control is in same section as the current control
            nextControlPosition = controls[nextIndex].position;
            itemPropsWebPart.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(nextControlPosition);
            // We don't want to persist the data immediately when this gets called when web part is added by drag and drop,
            // web part zone will notify canvas once the web part is mounted and initialized.
            this._store.addControlToCanvas(itemPropsWebPart, true /* shouldRender */, false /* shouldPersistData */);
            rteCanvasControl.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(nextControlPosition);
            this.addRTEInCanvas(rteCanvasControl, false /* shouldPersistData */);
        }
        else {
            // If there is no control after the current control in the same section, then create
            // a new position and add the control
            nextControlPosition = {
                zoneIndex: position.zoneIndex,
                sectionIndex: position.sectionIndex,
                sectionFactor: position.sectionFactor,
                controlIndex: position.controlIndex === undefined ? undefined : position.controlIndex + 1,
                layoutIndex: position.layoutIndex
            };
            rteCanvasControl.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(nextControlPosition);
            this.addRTEInCanvas(rteCanvasControl, false /* shouldPersistData */);
            itemPropsWebPart.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(nextControlPosition);
            // We don't want to persist the data immediately when this get called when web part is added by drag and drop,
            // web part zone will notify canvas once the web part is mounted and initialized.
            this._store.addControlToCanvas(itemPropsWebPart, true /* shouldRender */, false /* shouldPersistData */);
        }
    };
    CanvasStoreEditActions.prototype._markWebPartDeletion = function (control) {
        this._canvasFields.webPartManager.onWebPartDelete(control.id);
        var webPartData = control.webPartData;
        if (webPartData && _canvasStore__WEBPACK_IMPORTED_MODULE_9__["EUPL_APPROVED_WEB_PARTS"].has(webPartData.id)) {
            this._canvasFields.euplApprovedWebpartCount--;
        }
    };
    CanvasStoreEditActions.prototype._renderAfterDeletionAndAdjustFocus = function (position, screenReaderMessage, onDelete) {
        var elementToFocusOnDismiss = this._findHintBeforePosition(position);
        onDelete();
        this._canvasFields.a11yManager.alert(screenReaderMessage);
        this._canvasFields.render(function () {
            if (elementToFocusOnDismiss) {
                elementToFocusOnDismiss.focus();
            }
        });
        this._canvasFields.handleCanvasChanged();
    };
    CanvasStoreEditActions.prototype._scroll = function (start, end, duration, time) {
        var _this = this;
        if (time === void 0) { time = 0; }
        var diff = end - start;
        var deltaTime = 20;
        if (time < duration) {
            requestAnimationFrame(function () {
                time += deltaTime;
                _this._canvasFields.scrollableParent.scrollTop = CanvasStoreEditActions._calculateEasing(time, start, diff, duration);
                _this._scroll(start, end, duration, time);
            });
        }
    };
    CanvasStoreEditActions.prototype._scrollElementIntoView = function (frameBottom, element, duration, margin, parentClientRect, elementClientRect) {
        var scrollPosition = elementClientRect.bottom - this._canvasFields.canvasElement.getBoundingClientRect().top;
        var frameTop = Math.max(0, parentClientRect.top);
        var offset = frameTop - frameBottom + this._canvasFields.scrollThreshold + margin;
        var newScrollTop = scrollPosition + offset + this._canvasFields.scrollThreshold;
        this._scroll(this._canvasFields.scrollableParent.scrollTop, newScrollTop, duration);
    };
    CanvasStoreEditActions.prototype.pasteImageInCanvas = function (data, controlPosition) {
        var pasteMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('PasteImageInCanvas');
        try {
            var webPartResult = _webPartFactory_WebPartFactory__WEBPACK_IMPORTED_MODULE_17__["WebPartFactory"].getWebPart(data, this._store);
            // If we succesfully generated WebPartData object based on pasted data
            if (webPartResult.webPartResultType === "SUCCESS" /* SUCCESS */) {
                // Set the position to paste
                webPartResult.webPartDataProps.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["clone"])(controlPosition);
                // Add a new web part into the Canvas with the generated webPartDataProps
                // We don't want to persist the data immediately when this get called when content is pasted,
                // web part zone will notify canvas once the web part is mounted and initialized.
                this._store.addControlToCanvas(webPartResult.webPartDataProps, true /* shouldRender */, false /* shouldPersistData */);
                this._store.selectedControlId = webPartResult.webPartDataProps.id;
                pasteMonitor.writeSuccess();
            }
            else if (webPartResult.webPartResultType === "FileTypeNotSupported" /* FILE_TYPE_NOT_SUPPORTED */) {
                pasteMonitor.writeExpectedFailure(webPartResult.webPartResultType);
            }
            else {
                pasteMonitor.writeUnexpectedFailure(webPartResult.webPartResultType);
            }
        }
        catch (err) {
            pasteMonitor.writeUnexpectedFailure('PasteImageInCanvasException', err);
        }
    };
    CanvasStoreEditActions.prototype._findHintBeforePosition = function (position) {
        var isZone = position.controlIndex === undefined && position.zoneIndex !== undefined;
        var elementToDelete;
        if (isZone) {
            elementToDelete = this._canvasFields.a11yManager.getElementByA11yId(Object(_a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__["getCanvasZoneA11yId"])(position.zoneIndex.toString()));
        }
        else {
            var control = this._canvasFields.getControl(position);
            elementToDelete = control
                ? this._canvasFields.a11yManager.getElementByA11yId(Object(_a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__["getControlZoneA11yId"])(control.id))
                : undefined;
        }
        if (elementToDelete) {
            var hints = this._canvasFields.a11yManager.getElementsByA11yClass(_a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_12__["canvasA11yClasses"].toolboxHint);
            for (var i = 0; i < hints.length - 1; i++) {
                // Check if the control element is between the current hint and the next one
                /* tslint:disable:no-bitwise */
                var isHintBeforeZone = (elementToDelete.compareDocumentPosition(hints[i]) & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
                var isNextHintAfterZone = (elementToDelete.compareDocumentPosition(hints[i + 1]) &
                    (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)) !==
                    0;
                /* tslint:enable:no-bitwise */
                if (isHintBeforeZone && isNextHintAfterZone) {
                    return hints[i];
                }
            }
        }
        return undefined;
    };
    CanvasStoreEditActions.prototype._afterReadModeSwitched = function () {
        this._canvasFields.selectedControlIdInternal = undefined;
        void this._canvasFields.propertyPaneLoader.propertyPane.then(function (propertyPane) {
            propertyPane.requestAction(undefined, 'Close');
        });
        this.closeToolbox();
    };
    return CanvasStoreEditActions;
}());



/***/ }),

/***/ "DjSq":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasWebPartDragZoneUtils.js ***!
  \*************************************************************************************/
/*! exports provided: CanvasWebPartDragZoneUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasWebPartDragZoneUtils", function() { return CanvasWebPartDragZoneUtils; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _canvasStore_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../canvasStore/index */ "yRr9");
/* harmony import */ var _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasDragZoneConstants */ "9S6n");
/* harmony import */ var _CanvasDragIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasDragIcon */ "nRzo");
/* harmony import */ var _webPartFactory_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webPartFactory/index */ "ZsUb");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/Flights */ "qRiB");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/KillSwitches */ "17t3");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/Constants */ "+zV1");
/* harmony import */ var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CanvasDragZone.resx */ "AlH4");
var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasDragZone.resx */ "AlH4", 1);
/* harmony import */ var _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CanvasDragZone.module.scss */ "dczX");
/* harmony import */ var _DraggingExperience_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DraggingExperience.module.scss */ "q4KC");












var WEB_PART_DRAG_ZONE_STRINGS = {
    // Pass empty handleTitle to avoid two tooltips on hover. Tooltip now comes from toolbar item
    handleTitle: '',
    moveStarted: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveStarted"],
    moveComplete: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveComplete"],
    moveCancelled: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveCancelled"],
    moveNotAllowed: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveNotAllowedAriaLabel"],
    moveInsideLevel: [
        _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveInsideLevelControl"],
        _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveInsideLevelSection"],
        _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_9__["DragZoneMoveInsideLevelZone"]
    ]
};
var CanvasWebPartDragZoneUtils = /** @class */ (function () {
    function CanvasWebPartDragZoneUtils(getStore, cultureName) {
        var _this = this;
        this._dragIcon = new _CanvasDragIcon__WEBPACK_IMPORTED_MODULE_4__["CanvasDragIcon"]();
        this.getDragZoneProps = function () {
            var dragZoneProps = {
                treeLevelTagsBottomUp: [
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].controlZoneDragTag,
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].sectionDragTag,
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].zoneDragTag,
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].layoutDragTag
                ],
                dropPositionOffsetBottomPx: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].WEBPART_DROP_HINT_OFFSET_BOTTOM,
                dropPositionOffsetTopPx: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].WEBPART_DROP_HINT_OFFSET_TOP,
                onMoved: _this._onWebPartMoved,
                onMoveStart: _this._onWebPartMoveStart,
                onDropFromExternalSource: _this._handleDropFromExternalSource,
                getDropEffectFromDragEvent: _this._getDropEffectFromDragEvent,
                canDropOnEmptyParent: true,
                dragHandleTags: [
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].webPartButtonDragHandleTag,
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].webPartBorderDragHandleTag,
                    _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].webPartInsideDragHandleTag
                ],
                icon: _this._dragIcon.HTMLIcon,
                dragZoneStrings: WEB_PART_DRAG_ZONE_STRINGS,
                disallowedTag: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].fullWidthSectionTag,
                disallowedClassName: _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].disabledArea,
                supportHorizontalReorder: _common_Flights__WEBPACK_IMPORTED_MODULE_6__["Flights"].isMEEDashboardEnabled() && _this._store.pageLayoutType === _common_Constants__WEBPACK_IMPORTED_MODULE_8__["PageLayoutName"].Dashboard,
                scrollIntoView: _this._store.getEditModule('actions').scrollIntoView,
                onMoving: _this._onWebPartMoving,
                additionalDraggingDecoration: {
                    classNameToApply: _DraggingExperience_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].hideElementOnDrag,
                    dropLocationThemeEmphasisName: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].dropLocationThemeEmphasisName,
                    hideDropHintsAroundElement: true,
                    thinDropHint: true
                }
            };
            return dragZoneProps;
        };
        /**
         * Handler called by the DragZone when a web part has been picked up and the drag has started
         * @param position The position of the web part before the move started
         */
        this._onWebPartMoveStart = function (position) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent('Canvas.MoveControl.Click');
            if (!CanvasWebPartDragZoneUtils._isValidWebpartPosition(position)) {
                return;
            }
            var control = _this._getControlFromDragZonePosition(position);
            if (control) {
                _this._dragIcon.setMoveIconBasedOnControl(control, _canvasStore_index__WEBPACK_IMPORTED_MODULE_2__["CanvasStoreCommonActions"].getManifestMap(_this._store.canvasFields), _this._cultureName);
            }
        };
        this._onWebPartMoving = function (disallowed) {
            if (disallowed) {
                _this._dragIcon.setDisallowedIcon();
            }
            else {
                _this._dragIcon.setToPreviousState();
            }
        };
        /**
         * Handler called by the DragZone when a webpart has been dropped to a new position.
         * The position of the webpart consists of an array with 3 items: zoneIndex, sectionIndex, controlIndex.
         * @param oldPosition - the position of the webpart before it is moved
         * @param newPosition - the position of the webpart after it is moved
         */
        this._onWebPartMoved = function (oldPosition, newPosition) {
            var extraData = {};
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('CanvasControlMove');
            _this._dragIcon.reset();
            extraData.flights = _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_3__["CanvasDragZoneConstants"].FLIGHT_ON_TEXT;
            if (oldPosition === newPosition ||
                !CanvasWebPartDragZoneUtils._isValidWebpartPosition(oldPosition) ||
                !CanvasWebPartDragZoneUtils._isValidWebpartPosition(newPosition) ||
                CanvasWebPartDragZoneUtils._droppedOnTheSamePosition(oldPosition, newPosition)) {
                monitor.writeExpectedFailure('NoNeedMove', undefined /* error */, extraData);
                return;
            }
            try {
                var oldControl = _this._getControlFromDragZonePosition(oldPosition);
                if (!oldControl) {
                    throw new Error('ControlNotFound');
                }
                var newCanvasPosition = _this._getNewPositionFromDragZonePosition(newPosition);
                _this._store.getEditModule('actions').moveControl(oldControl, newCanvasPosition);
                monitor.writeSuccess(extraData);
            }
            catch (err) {
                monitor.writeUnexpectedFailure('ExceptionMovingControl', err, extraData);
            }
        };
        this._handleDropFromExternalSource = function (data, droppedPosition, droppedAtTheEndOfSection) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent('Canvas.HandleDropFromExternal.Drop');
            var controlPosition = _this._getNewPositionFromDragZonePosition(droppedPosition, droppedAtTheEndOfSection);
            if (data instanceof DataTransferItemList) {
                for (var i = 0; i < data.length; i++) {
                    _this._addDroppedDataToCanvas(data[i].getAsFile(), controlPosition);
                    if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_7__["onlyAllowOneImageInFullWidthKSActivated"])() && controlPosition.sectionFactor === 0) {
                        break;
                    }
                }
            }
        };
        this._getDropEffectFromDragEvent = function (evt) {
            var dragEventDropEffect = 'all';
            var data = evt && evt.dataTransfer && evt.dataTransfer.items;
            if (data instanceof DataTransferItemList) {
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    if (!dataItem || !dataItem.type || !dataItem.type.match(RegExp('^image/|^application/|^video/'))) {
                        dragEventDropEffect = 'none';
                        break;
                    }
                }
            }
            return dragEventDropEffect;
        };
        this._getNewPositionFromDragZonePosition = function (position, addAtTheEnd) {
            var layout = _this._store.canvasLayouts.get(position[3] === 0 ? 1 : 2);
            if (!layout) {
                throw new Error("LayoutNotFound, layout position: " + position[3]);
            }
            var zone = CanvasWebPartDragZoneUtils._getZoneFromDragZonePosition(position, layout);
            var section = zone && CanvasWebPartDragZoneUtils._getSectionFromDragZonePosition(position, zone);
            var controlIndex = position[0];
            if (section.controls.length === 0) {
                controlIndex = 1;
            }
            else if (controlIndex === section.controls.length || addAtTheEnd) {
                // Todo#661360 Fix workaround left-over
                controlIndex = section.controls[section.controls.length - 1].position.controlIndex + 1;
            }
            else {
                controlIndex = section.controls[controlIndex].position.controlIndex;
            }
            var newCanvasPosition = {
                controlIndex: controlIndex,
                sectionIndex: section.index,
                sectionFactor: section.factor,
                zoneIndex: zone.index,
                layoutIndex: layout.layoutIndex
            };
            return newCanvasPosition;
        };
        this._getControlFromDragZonePosition = function (position) {
            var layout = _this._store.canvasLayouts.get(position[3] === 0 ? 1 : 2);
            if (!layout) {
                return undefined;
            }
            var zone = CanvasWebPartDragZoneUtils._getZoneFromDragZonePosition(position, layout);
            var section = CanvasWebPartDragZoneUtils._getSectionFromDragZonePosition(position, zone);
            var ctrlIdx = position[0];
            if (!section.controls || section.controls.length <= ctrlIdx) {
                return undefined;
            }
            else {
                return section.controls[ctrlIdx];
            }
        };
        this._addDroppedDataToCanvas = function (data, controlPosition) {
            var dropMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('CanvasOnDropFromExternalSource');
            try {
                var webPartResult = _webPartFactory_index__WEBPACK_IMPORTED_MODULE_5__["WebPartFactory"].getWebPart(data, _this._store);
                // If we succesfully generated WebPartData object based on dropped data
                if (webPartResult.webPartResultType === "SUCCESS" /* SUCCESS */) {
                    // Set the position to drop
                    webPartResult.webPartDataProps.position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["clone"])(controlPosition);
                    // Add a new web part into the Canvas with the generated webPartDataProps
                    // We don't want to persist the data immediately when this get called when web part is added by drag and drop,
                    // web part zone will notify canvas once the web part is mounted and initialized.
                    _this._store.addControlToCanvas(webPartResult.webPartDataProps, true /* shouldRender */, false /* shouldPersistData */);
                    dropMonitor.writeSuccess();
                }
                else if (webPartResult.webPartResultType === "FileTypeNotSupported" /* FILE_TYPE_NOT_SUPPORTED */) {
                    dropMonitor.writeExpectedFailure(webPartResult.webPartResultType);
                }
                else {
                    dropMonitor.writeUnexpectedFailure(webPartResult.webPartResultType);
                }
            }
            catch (err) {
                dropMonitor.writeUnexpectedFailure('ExceptionDragAndDrop', err);
            }
        };
        this._getStore = getStore;
        this._cultureName = cultureName;
    }
    CanvasWebPartDragZoneUtils._isValidWebpartPosition = function (position) {
        return position && position.length === 4;
    };
    CanvasWebPartDragZoneUtils._droppedOnTheSamePosition = function (oldPosition, newPosition) {
        // If the new position is right before or after the current position, the resulting move would be a no op
        var oldControlIndex = oldPosition[0], oldSectionIndex = oldPosition[1], oldZoneIndex = oldPosition[2], oldLayoutIndex = oldPosition[3];
        var newControlIndex = newPosition[0], newSectionIndex = newPosition[1], newZoneIndex = newPosition[2], newLayoutIndex = newPosition[3];
        return (oldLayoutIndex === newLayoutIndex &&
            oldZoneIndex === newZoneIndex &&
            oldSectionIndex === newSectionIndex &&
            (oldControlIndex === newControlIndex - 1 || oldControlIndex === newControlIndex));
    };
    CanvasWebPartDragZoneUtils._getZoneFromDragZonePosition = function (position, layout) {
        var zoneIndex = position[2];
        var zone = layout.zones && layout.zones.length > zoneIndex && layout.zones[zoneIndex];
        if (!zone) {
            // all of these exceptions are to stop the rest of the logic because this is a breaking issue.
            // they are caught at the top and logged to QoS
            throw new Error("ZoneNotFound, zoneIndex: " + zoneIndex);
        }
        return zone;
    };
    CanvasWebPartDragZoneUtils._getSectionFromDragZonePosition = function (position, zone) {
        var sectionIndex = position[1];
        var section = zone.sections && zone.sections.length > sectionIndex && zone.sections[sectionIndex];
        if (!section) {
            throw new Error("SectionNotFound, sectionIndex: " + sectionIndex);
        }
        return section;
    };
    Object.defineProperty(CanvasWebPartDragZoneUtils.prototype, "_store", {
        get: function () {
            return this._getStore();
        },
        enumerable: true,
        configurable: true
    });
    return CanvasWebPartDragZoneUtils;
}());



/***/ }),

/***/ "F9/O":
/*!**********************************************************!*\
  !*** ./lib/sp-canvas/common/ControlsInOneRow.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./ControlsInOneRow.module.css */ "d18e");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Gm4V":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasDragZone/DraggingExperience.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".v_f_32f825c4{opacity:0!important}", ""]);


/***/ }),

/***/ "HCd6":
/*!******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRteTouchDevice.js ***!
  \******************************************************************/
/*! exports provided: SPRteTouchDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRteTouchDevice", function() { return SPRteTouchDevice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPRte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPRte */ "Lb2a");
/* harmony import */ var _SPRteTouchDevice_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPRteTouchDevice.module.scss */ "ZHZH");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * @class SPRteTouchDevice class. This component is used as a canvas control for touch devices.
 */
var SPRteTouchDevice = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPRteTouchDevice, _super);
    function SPRteTouchDevice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TAG_NAME = 'CanvasTouchDevice.';
        _this._handleSelectionChange = function (range, forceUpdate) {
            if (range) {
                _this.setState({ currentSubmenuOpen: undefined });
                if (_this._restoreOnFocus()) {
                    _this._updateFormattingBar(false);
                    return;
                }
            }
            if (!range) {
                return;
            }
            else {
                _this._updateSelection(range, forceUpdate);
            }
        };
        return _this;
    }
    SPRteTouchDevice.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
    };
    SPRteTouchDevice.prototype._afterEditorCreated = function (editor) {
        _super.prototype._afterEditorCreated.call(this, editor);
    };
    SPRteTouchDevice.prototype._initState = function () {
        this.state = {
            displayMode: this.props.displayMode,
            formattingBarPosition: SPRteTouchDevice._getFormattingBarDefaultPosition(this._isRtl),
            // Formatting bar needs to be hidden when editor gets created.
            isFormattingBarHidden: true
        };
    };
    Object.defineProperty(SPRteTouchDevice.prototype, "_formattingBarPosition", {
        get: function () {
            return this._floatingFormattingBarPosition;
        },
        enumerable: true,
        configurable: true
    });
    SPRteTouchDevice.prototype._handleScroll = function () {
        this._handleScrollWithFloatingFormattingBar();
    };
    Object.defineProperty(SPRteTouchDevice.prototype, "_additionalRteElementClassName", {
        get: function () {
            return _SPRteTouchDevice_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].rteTouch;
        },
        enumerable: true,
        configurable: true
    });
    SPRteTouchDevice.prototype._formatOrPrepare = function (formatKey) {
        var _this = this;
        _super.prototype._formatOrPrepare.call(this, formatKey);
        // The formatting bar is getting hidden after applying format because RTE
        // is losing focus. Blur event gets called and hides the formatting bar.
        // We need to force the focus on editor again.
        this._async.setTimeout(function () {
            _this.focus();
        }, 0);
    };
    return SPRteTouchDevice;
}(_SPRte__WEBPACK_IMPORTED_MODULE_1__["SPRte"]));



/***/ }),

/***/ "Hcv0":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/toolbar/Toolbar.scss.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Toolbar.css */ "9MOG");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "I+xK":
/*!*****************************************************!*\
  !*** ../sp-topic-shared/lib/utilities/cleanGuid.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanGuid; });
/**
 * @internal
 */
function cleanGuid(guid) {
    return guid.toLowerCase().replace(/[{}]/g, '');
}


/***/ }),

/***/ "LBkn":
/*!************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZonePropertyPaneControl.js ***!
  \************************************************************************************************/
/*! exports provided: CanvasZonePropertyPaneControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasZonePropertyPaneControl", function() { return CanvasZonePropertyPaneControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../canvasLayout */ "yPt8");
/* harmony import */ var _CanvasZoneEmphasisPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CanvasZoneEmphasisPicker */ "ws9o");
/* harmony import */ var _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvasZonePropertyPaneStrings.resx */ "svZL");
var _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./canvasZonePropertyPaneStrings.resx */ "svZL", 1);
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../loc/CanvasStrings.resx */ "indE", 1);
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/Flights */ "qRiB");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/KillSwitches */ "17t3");














/**
 * Implements IPropertyPaneConsumer (internal and not exported from sp-webpart-base).
 *
 * This is a temporary pattern.
 */
var CanvasZonePropertyPaneControl = /** @class */ (function () {
    function CanvasZonePropertyPaneControl(zone, render, layoutIndex) {
        var _this = this;
        this._handleEmphasisChanged = function (emphasis) {
            if (emphasis !== _this._zone.emphasis) {
                var controlEmphasis = {
                    zoneEmphasis: emphasis,
                    sectionEmphasis: undefined,
                    controlEmphasis: undefined
                };
                _this._zone.changeEmphasis(controlEmphasis);
                _this._render();
            }
        };
        this._zone = zone;
        this._render = render;
        this._layoutIndex = layoutIndex;
    }
    CanvasZonePropertyPaneControl.prototype._isPropertyPaneReactive = function () {
        return true;
    };
    CanvasZonePropertyPaneControl.prototype._loadPropertyPaneResources = function () {
        /* no-op */
    };
    CanvasZonePropertyPaneControl.prototype._getPropertyPaneData = function () {
        // Todo#661360 Fix workaround left-over
        return Promise.resolve({
            webPartId: this._zone.id,
            title: _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_10__["SectionPropertyPaneTitle"],
            configuration: {
                pages: this._getProperyPanePages()
            },
            dynamicConfiguration: undefined,
            onPropertyPaneFieldChanged: undefined,
            onConfigurationEvent: undefined,
            onRendered: undefined,
            properties: {},
            isReactive: this._isPropertyPaneReactive()
        });
    };
    CanvasZonePropertyPaneControl.prototype._onPropertyPaneFieldChanged = function (propertyPath, newValue) {
        this._zone.changeZone(newValue);
        this._render();
    };
    CanvasZonePropertyPaneControl.prototype._onPropertyPaneLifeCycleEvent = function (event) {
        if (event === 'Closed') {
            _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__["SPFREUtility"].dismissFRECallout('sp-fre-canvas-3');
        }
    };
    Object.defineProperty(CanvasZonePropertyPaneControl.prototype, "_emphasisPickerControl", {
        get: function () {
            var controlProps = {
                onColorChanged: this._handleEmphasisChanged,
                activeColor: this._zone.emphasis || _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_6__["SPVariantThemeType"].None
            };
            var canvasEmphasisPicker = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CanvasZoneEmphasisPicker__WEBPACK_IMPORTED_MODULE_9__["CanvasZoneEmphasisPicker"], controlProps);
            return Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneCustomField"])({
                key: 'EmphasisPickerControl',
                onRender: function (element) { return react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](canvasEmphasisPicker, element); }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasZonePropertyPaneControl.prototype, "_getFREDataIcon", {
        get: function () {
            return Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneCustomField"])({
                key: 'SpFreDataIcon',
                onRender: function (element) {
                    return react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('div', {
                        'data-sp-fre-id': 'sp-fre-canvas-3',
                        'data-offset-left': '0',
                        'data-offset-top': '0'
                    }), element);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    CanvasZonePropertyPaneControl.prototype._getProperyPanePages = function () {
        var currentColumnSize = this._zone.layoutType;
        var groups = [];
        if (this._layoutIndex === _canvasLayout__WEBPACK_IMPORTED_MODULE_8__["CanvasLayout"].firstLayoutIndex) {
            // It's a workaround to fix the issue where Narrator skips certain choice group option in scan mode.
            // See https://github.com/microsoft/fluentui/issues/16038
            var ariaHiddenWorkaround = !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_13__["isWorkaroundChoiceGroupA11yKsActivated"])()
                ? { 'aria-hidden': false }
                : {};
            var selectedLayout = Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneChoiceGroup"])('selectedLayout', {
                label: _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_10__["SectionPropertyPaneColumnGroupName"],
                options: [
                    {
                        checked: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneColumn === currentColumnSize,
                        iconProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ officeFabricIconFontName: 'SingleColumn' }, ariaHiddenWorkaround),
                        key: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneColumn,
                        text: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxOneColumnPart"]
                    },
                    {
                        checked: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].TwoColumns === currentColumnSize,
                        iconProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ officeFabricIconFontName: 'DoubleColumn' }, ariaHiddenWorkaround),
                        key: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].TwoColumns,
                        text: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxTwoColumnPart"]
                    },
                    {
                        checked: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].ThreeColumns === currentColumnSize,
                        iconProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ officeFabricIconFontName: 'TripleColumn' }, ariaHiddenWorkaround),
                        key: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].ThreeColumns,
                        text: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxThreeColumnPart"]
                    },
                    {
                        checked: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneThirdColumnLeft === currentColumnSize,
                        iconProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ officeFabricIconFontName: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? 'ColumnLeftTwoThirds' : 'ColumnRightTwoThirds' }, ariaHiddenWorkaround),
                        key: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneThirdColumnLeft,
                        text: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxOneThirdLeftColumnPart"]
                    },
                    {
                        checked: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneThirdColumnRight === currentColumnSize,
                        iconProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ officeFabricIconFontName: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? 'ColumnRightTwoThirds' : 'ColumnLeftTwoThirds' }, ariaHiddenWorkaround),
                        key: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_7__["CanvasControlType"].OneThirdColumnRight,
                        text: _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_11__["ToolboxOneThirdRightColumnPart"]
                    }
                ]
            });
            groups.push({
                groupFields: _common_Flights__WEBPACK_IMPORTED_MODULE_12__["Flights"].isFRESequenceEnabled()
                    ? [this._getFREDataIcon, selectedLayout]
                    : [selectedLayout]
            });
        }
        groups.push({
            groupFields: [this._emphasisPickerControl]
        });
        return [
            {
                groups: groups
            }
        ];
    };
    return CanvasZonePropertyPaneControl;
}());



/***/ }),

/***/ "Lb2a":
/*!*******************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRte.js ***!
  \*******************************************************/
/*! exports provided: SPRte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRte", function() { return SPRte; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _webPartZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../webPartZone */ "4Tcc");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/sp-rte */ "RcaI");
/* harmony import */ var _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SPRte_resx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SPRte.resx */ "0Klk");
var _SPRte_resx__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SPRte.resx */ "0Klk", 1);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/Constants */ "+zV1");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/Flights */ "qRiB");


















/**
 * @class TextWebPart class. This component is used as a canvas control.
 */
var SPRte = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPRte, _super);
    function SPRte(props) {
        var _this = _super.call(this, props, {
            editor: _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["CKTextEditor"],
            config: new _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["BaseRteConfiguration"](),
            loader: _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["CKTextEditor"].moduleLoader
        }) || this;
        _this.TAG_NAME = 'Canvas.';
        _this._isToolbarExperimentNPSLogged = false;
        _this._isInitialized = false;
        _this.scrollIntoView = function (options) {
            if (_this._editorElement) {
                _this._editorElement.scrollIntoView(options);
                return true;
            }
            return false;
        };
        _this._handleToolbarFormatSubMenuOpen = function () {
            _this._isSelectionChangeFromToolbar = true;
            _this.setState({ currentSubmenuOpen: 'format' });
        };
        _this._handleToolbarAlignSubMenuOpen = function () {
            _this._isSelectionChangeFromToolbar = true;
            _this.setState({ currentSubmenuOpen: 'align' });
        };
        _this._handleToolbarBulletSubMenuOpen = function () {
            _this._isSelectionChangeFromToolbar = true;
            _this.setState({ currentSubmenuOpen: 'bullet' });
        };
        _this._openPropertyPane = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(_this._engagementLoggerClickTagName('moreButton'), '.Click');
            _this._changePropertyPaneState('Toggle');
        };
        _this._restoreScrollTopOnNextFocus = false;
        _this._isPasting = false;
        // Adding a debounce for scroll handler so that it doesnt get called multiple times
        _this._handleScroll = _this._async.debounce(_this._handleScroll, 100);
        return _this;
    }
    SPRte._getFormattingBarDefaultPosition = function (isRtl) {
        if (isRtl === void 0) { isRtl = false; }
        var left = isRtl ? 254 : -8;
        var top = -44;
        var position = 'absolute';
        var right = undefined;
        return { left: left, top: top, position: position, right: right };
    };
    SPRte.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.props.store && this.props.store.canvasFields.doesUserHaveEditPermission) {
            // Load event gets called inconsistently, so we need to set timeout to ensure it gets called
            this._async.setTimeout(this._onSPRteLoad.bind(this), 4000);
        }
        // This removes the placeholder when switched from read to edit button
        // when RTE is not empty
        if (this._editorElement &&
            this._shouldRemovePlaceholder &&
            this._editorElement.getAttribute('placeholder')) {
            this._editorElement.removeAttribute('placeholder');
        }
        SPRte._TOOLBAR_DEFAULT_POSITION.left = -8;
        SPRte._TOOLBAR_DEFAULT_POSITION.top = -44;
        this._loadAndInstantiatePropertyPaneControl();
    };
    SPRte.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.props.store && this._scrollableParent) {
            this._formattingBar
                ? this._scrollableParent.addEventListener('scroll', this._handleScroll)
                : this._scrollableParent.removeEventListener('scroll', this._handleScroll);
        }
        this._loadAndInstantiatePropertyPaneControl();
        // when RTE is not selected formatting bar needs to be updated
        if ( true && !this._isRTESelected && !this.state.isFormattingBarHidden) {
            // We need to force hide RTE to avoid stack overflow
            this._updateFormattingBar(true, true);
        }
        if (!this.state.currentSubmenuOpen && this._isPropertyPaneOpen && this._isRTESelected) {
            this._changePropertyPaneState('Refresh');
        }
        if (this._shouldRemovePlaceholder &&
            this._editorElement &&
            this._editorElement.getAttribute('placeholder')) {
            this._editorElement.removeAttribute('placeholder');
        }
        if (this._isRTESelected && !this._isToolbarExperimentNPSLogged) {
            var flights = [];
            if (this._isRTEFloatingToolbarExperimentTreatmentOn) {
                flights.push('90005_1'); // Treatment
            }
            else {
                flights.push('90005_0'); // Control
            }
            var event_1 = new CustomEvent('UpdateFlightsForOfficeFeedback', {
                detail: {
                    flights: flights
                }
            });
            document.dispatchEvent(event_1);
            this._isToolbarExperimentNPSLogged = true;
        }
    };
    SPRte.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.props.store.propertyPaneController) {
            // De-register consumer instance to avoid memory leak.
            this.props.store.propertyPaneController.onConsumerDelete(this.props.control.id);
        }
        this._isToolbarExperimentNPSLogged = false;
    };
    SPRte.prototype.focus = function () {
        this._currentScrollTop = this._scrollableParent.scrollTop;
        _super.prototype.focus.call(this);
        // We need to restore the scroll after focus to avoid jumpiness
        this._scrollableParent.scrollTop = this._currentScrollTop;
        // We need to set focus twice on the editor. The first time is needed to fix the scroll top
        // at the right position but focus switches back to property pane as the drop downs and color
        // picker steal the focus back. The next is delayed focus which actually puts the focus
        // back on the editor.
        if (this._isPropertyPaneOpen) {
            this._setDelayedFocus();
        }
    };
    SPRte.prototype.updateSelection = function (range) {
        _super.prototype._updateSelection.call(this, range);
    };
    SPRte.prototype.handlePropertyPaneOpenOrClose = function () {
        var _a;
        if (this.props.store) {
            this._updateFormattingBar(false);
            if (this._isRTESelected &&
                !this._isPropertyPaneOpen &&
                this._editorWrapper &&
                !this._editorWrapper.contains(document.activeElement)) {
                (_a = this._editorElement) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    };
    SPRte.prototype.getPredictedUrl = function (title) {
        var _this = this;
        return this._getComputedFileName(title).then(function (fileName) {
            var pageContext = _this.props.store.pageContext;
            var absoluteUrl = (pageContext.web && pageContext.web.absoluteUrl + '/') || '/';
            return Promise.resolve(absoluteUrl + 'SitePages/' + fileName + (".aspx?" + _common_Constants__WEBPACK_IMPORTED_MODULE_14__["WIKI_TITLE"] + "=" + encodeURI(title)));
        });
    };
    /**
     * Return the serialized instance of this control
     */
    SPRte.prototype.serialize = function () {
        var serialization = JSON.parse(JSON.stringify(this.props.control));
        var innerHTML = this.innerHTML;
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isInlineImageEnabled()) {
            var _a = this.props, store = _a.store, control = _a.control;
            // This makes sure we don't serialize the web part within the RTE. This will let
            // canvas read to load the web part in read mode and Sprte to load the web part in edit mode.
            var tempElement = document.createElement('div');
            tempElement.innerHTML = this.innerHTML;
            var webParts = tempElement.querySelectorAll("[" + SPRte._DATA_INSTANCE_ID + "]");
            if (webParts) {
                webParts.forEach(function (webPart) {
                    webPart.innerHTML = '';
                });
            }
            // CK Editor creates a temporary hidden div tag for use that we don't want to have a copy of.
            var ckHiddenElements = tempElement.querySelectorAll('div[data-cke-hidden-sel="1"]');
            if (ckHiddenElements) {
                ckHiddenElements.forEach(function (value) {
                    value.remove();
                });
            }
            innerHTML = tempElement.innerHTML;
            tempElement.remove();
            store.getEditModule('actions').cleanupIntegratedWebParts(control.id, this.innerHTML);
        }
        if (this._isInitialized) {
            serialization.innerHTML = innerHTML;
        }
        return serialization;
    };
    Object.defineProperty(SPRte.prototype, "innerHTML", {
        get: function () {
            return this._editorElement ? this._editorElement.innerHTML : this._text;
        },
        enumerable: true,
        configurable: true
    });
    SPRte.prototype.tryUpdate = function (innerHTML, selection) {
        var _this = this;
        if (this._editor) {
            var currentHTML = this.innerHTML;
            // Trim the text before comparison because CKEditor will always append a blank line after the returned HTML.
            if (innerHTML === undefined || currentHTML === undefined || currentHTML.trim() !== innerHTML.trim()) {
                this._editor.setData(innerHTML || '', function () {
                    if (_this._editor && selection && !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(selection, _this._currentSelection)) {
                        _this._editor.setSelection(selection);
                    }
                    if (_common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isInlineImageEnabled()) {
                        // Perf gets affected with undo/redo. Probably need to change the logic to improve perf.
                        // VSO: https://onedrive.visualstudio.com/DefaultCollection/WEX!/_workitems/edit/988746
                        _this._loadWebPartsInContainer();
                    }
                });
            }
        }
    };
    Object.defineProperty(SPRte.prototype, "_spFeatureInstanceId", {
        get: function () {
            return this.props.control.id;
        },
        enumerable: true,
        configurable: true
    });
    SPRte.prototype._handleKeyDown = function (evt) {
        _super.prototype._handleKeyDown.call(this, evt);
        // Open the property pane on Alt+P
        if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_6__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["KeyCodes"].p, evt, { alt: true })) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(this.TAG_NAME + 'PropertyPane.Focus', evt.type);
            this._changePropertyPaneState('Open');
            _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["BaseRte"]._preventEventDefaultBehaviour(evt);
        }
    };
    SPRte.prototype._createNewEditor = function (innerHTML, startupFocus) {
        return this._options.editor.createNewEditor({
            config: this._config,
            currentHTML: innerHTML,
            editorElement: this._editorElement,
            pageContext: this.props.store.pageContext,
            selectionChangeCallback: this._handleSelectionChange,
            textChangeCallback: this._handleTextChange.bind(this),
            startUpFocus: startupFocus,
            onImagePasteCallBack: this._onImagePaste.bind(this),
            onImageMoveCallBack: _common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isInlineImageEnabled() && this._onImageMove.bind(this),
            onPasteCallback: this._onPaste.bind(this),
            onHeadingPasteCallback: this._onHeadingPaste.bind(this),
            onEmbedPasteCallback: this._onEmbedPaste.bind(this),
            onContextMenuCallBack: this._onContextualMenu.bind(this),
            autocompleteRegexesMatch: [
                this._wikiPagePickerRegexMatch.bind(this),
                this._topicPickerRegexMatch.bind(this)
            ],
            autocompletePageSuggestions: this._suggestionsCallback.bind(this),
            autocompleteHTMLToInsert: this._selectedItemHTMLToInsert.bind(this),
            rteInsertLinkOnKeyDown: this._wikiInsertLinkOnKeyDown.bind(this)
        });
    };
    SPRte.prototype._onImageMove = function (instanceId) {
        var _a;
        _super.prototype._onImageMove.call(this, instanceId);
        var webParts = this._editorWrapper.querySelectorAll("[" + SPRte._DATA_INSTANCE_ID + "='" + instanceId + "']");
        if (((_a = webParts) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this._loadWebPart(instanceId, webParts[0]);
        }
    };
    SPRte.prototype._onImagePaste = function (imageResult) {
        _super.prototype._onImagePaste.call(this, imageResult);
        if (imageResult.isImageValid) {
            var _a = this.props, store_1 = _a.store, control = _a.control;
            // Hide the formatting bar on image paste to avoid two formatting bars showing at the same time.
            this._updateFormattingBar(true, true);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(this.TAG_NAME + 'ImageCopyPaste');
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isInlineImageEnabled()) {
                // log specifically when an inline image paste is used to track usage of the new feature
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(this.TAG_NAME + 'InlineImageCopyPaste');
                var webPartProps_1 = store_1
                    .getEditModule('actions')
                    .tryMatchContentHandlerInline(control.id, control.position, imageResult.imageBlob, imageResult.captionText);
                // signal to the Image web part that it should work in in-line mode
                webPartProps_1.webPartData.properties.isInlineImage = true;
                var webPartZoneProps = {
                    ref: function (instance) { return store_1.canvasFields.setControlComponentById(webPartProps_1.id, instance); },
                    displayMode: store_1.displayMode,
                    control: webPartProps_1,
                    store: store_1
                };
                var container = imageResult.container;
                container.setAttribute(SPRte._DATA_INSTANCE_ID, webPartProps_1.id);
                react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_webPartZone__WEBPACK_IMPORTED_MODULE_8__["WebPartZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, webPartZoneProps)), container);
                // avoid leaving an empty line feed, <p><br /><p>
                var parent_1 = container.parentElement || undefined;
                if (parent_1) {
                    var elements = parent_1.querySelectorAll('p');
                    elements.forEach(function (p) {
                        if (p && p.childNodes.length === 1 && p.childNodes[0].nodeName.toLowerCase() === 'br') {
                            p.remove();
                        }
                    });
                }
            }
            else {
                store_1
                    .getEditModule('actions')
                    .tryMatchContentHandlerAndSplit(control.id, imageResult.innerHTML, control.position, imageResult.imageBlob, imageResult.captionText);
            }
        }
    };
    SPRte.prototype._formatOrPrepare = function (formatKey) {
        _super.prototype._formatOrPrepare.call(this, formatKey);
        if (this._wasHeadingPasted && formatKey.match('h[1-4]')) {
            // This logs that user has used heading after paste
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent('FormatHeadingsAfterPaste.Click');
        }
    };
    SPRte.prototype._onEmbedPaste = function (isPasteInProgress, url) {
        var _this = this;
        // Assign to a deferred callback so embed behavior will be triggered after the text of RTE has been updated.
        // This separate the changes between RTE and web part creation and makes the change stack cleaner.
        this._embedPasteCallback = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(_this.TAG_NAME + 'EmbedCodeCopyPaste');
            _this.props.store
                .getEditModule('actions')
                .tryMatchContentHandlerAndSplit(_this.props.control.id, '', _this.props.control.position, url);
        };
    };
    SPRte.prototype._postEditorCreatedHandlerComplete = function () {
        var shouldFocus = _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_15__["Experiments"].isRTEClickAnywhereExperimentEnabled()
            ? !this.props.control.isPhantomRTE
            : true;
        if (!this.props.control.addedFromPersistedData && shouldFocus) {
            this.focus();
        }
        this._isInitialized = true;
    };
    SPRte.prototype._openLinkDialog = function (defaultAddress) {
        if (defaultAddress === void 0) { defaultAddress = ''; }
        _super.prototype._openLinkDialog.call(this, defaultAddress);
    };
    SPRte.prototype._restoreOnFocus = function () {
        var restore = _super.prototype._restoreOnFocus.call(this);
        if (this._restoreScrollTopOnNextFocus && this._currentScrollTop) {
            this._restoreScrollTopOnNextFocus = false;
            this._scrollableParent.scrollTop = this._currentScrollTop;
            restore = true;
        }
        return restore;
    };
    SPRte.prototype._handleTextChange = function () {
        _super.prototype._handleTextChange.call(this);
        if (this._editorElement) {
            if (this._editorElement.getAttribute('placeholder')) {
                this._editorElement.removeAttribute('placeholder');
            }
            else if (this._editorElement.innerHTML === SPRte._EMPTY_RTE_HTML) {
                if (this._placeholder !== undefined) {
                    this._editorElement.setAttribute('placeholder', this._placeholder);
                }
                else {
                    this._editorElement.removeAttribute('placeholder');
                }
            }
        }
        if (this._isPasting) {
            this._onAfterPaste();
        }
        var onChange = this.props.onChange;
        if (onChange) {
            var newControl = this.serialize();
            if (newControl.innerHTML !== this.props.innerHTML) {
                onChange(newControl, this._currentSelection);
            }
        }
        if (this._embedPasteCallback) {
            this._embedPasteCallback();
            this._embedPasteCallback = undefined;
        }
    };
    SPRte.prototype._afterEditorCreated = function (editor) {
        _super.prototype._afterEditorCreated.call(this, editor);
        if (this._editorElement && this._editorElement.innerHTML !== SPRte._EMPTY_RTE_HTML) {
            this._editorElement.removeAttribute('placeholder');
        }
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_16__["Flights"].isInlineImageEnabled() && this.props.control.addedFromPersistedData) {
            this._loadWebPartsInContainer();
        }
    };
    Object.defineProperty(SPRte.prototype, "_placeholder", {
        get: function () {
            return _SPRte_resx__WEBPACK_IMPORTED_MODULE_13__["TextWebPartPlaceholder"];
        },
        enumerable: true,
        configurable: true
    });
    SPRte.prototype._formattingBarButtons = function () {
        var alignButtons = [
            this._getFormatButtonProps('alignLeft', this.getFormatHandler('alignLeft')),
            this._getFormatButtonProps('alignCenter', this.getFormatHandler('alignCenter')),
            this._getFormatButtonProps('alignRight', this.getFormatHandler('alignRight'))
        ];
        var bulletButtons = [
            this._getFormatButtonProps('bullet', this.getFormatHandler('bullet')),
            this._getFormatButtonProps('list', this.getFormatHandler('list'))
        ];
        var buttons = [
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["DeferredToolbarSubmenu"], { a11yManagerId: this.props.a11yManagerId, key: 'format', buttons: this._formatSubmenuButtons, isOpen: this.state.currentSubmenuOpen === 'format', isWide: true, onOpen: this._handleToolbarFormatSubMenuOpen, onClose: this._handleCloseSubmenu, onBlur: this._handleFormattingBarBlur }),
            this._renderFormatButton('bold', this.getFormatHandler('bold')),
            this._renderFormatButton('italic', this.getFormatHandler('italic')),
            this._renderFormatButton('underline', this.getFormatHandler('underline')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["DeferredToolbarSubmenu"], { a11yManagerId: this.props.a11yManagerId, key: 'align', buttons: alignButtons, isOpen: this.state.currentSubmenuOpen === 'align', onOpen: this._handleToolbarAlignSubMenuOpen, onClose: this._handleCloseSubmenu, onBlur: this._handleFormattingBarBlur }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["DeferredToolbarSubmenu"], { a11yManagerId: this.props.a11yManagerId, key: 'bullet', buttons: bulletButtons, isOpen: this.state.currentSubmenuOpen === 'bullet', onOpen: this._handleToolbarBulletSubMenuOpen, onClose: this._handleCloseSubmenu, onBlur: this._handleFormattingBarBlur }),
            this._renderFormatButton('link', this._handleLink, this.disableFormatButton('link')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_11__["ToolbarButton"], { key: 'more', canBeActive: false, fabricIconKey: 'More', onClick: this._openPropertyPane, title: _SPRte_resx__WEBPACK_IMPORTED_MODULE_13__["FormattingBarMoreButtonTitle"], automationId: 'more-button', onBlur: this._handleFormattingBarBlur })
        ];
        return buttons;
    };
    Object.defineProperty(SPRte.prototype, "_isPropertyPaneOpen", {
        get: function () {
            return Boolean(this.props.store.propertyPaneController && this.props.store.propertyPaneController.isOpen());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hide/Show the formatting bar and update the formatting bar position if needed.
     * If the editor is not focused, hide the formatting bar
     * If the selection is collapsed the formatting bar will render in a static location
     * If the selection is not collapsed the formatting bar will appear near the selection
     * @param forceHide is for force hiding the toolbar even if it is active element. This is
     * added specifically for a scenario e.g. after image paste, we would like to hide the
     * formatting bar forcefully
     */
    SPRte.prototype._updateFormattingBar = function (isHidden, forceHide) {
        if (!this._editorElement) {
            return;
        }
        var updatePosition = true;
        var newState = {
            formattingBarPosition: {
                left: SPRte._TOOLBAR_DEFAULT_POSITION.left,
                top: SPRte._TOOLBAR_DEFAULT_POSITION.top,
                position: SPRte._TOOLBAR_DEFAULT_POSITION.position,
                right: SPRte._TOOLBAR_DEFAULT_POSITION.right
            },
            isFormattingBarHidden: isHidden
        };
        if (isHidden && this._formattingbarElement) {
            // If the editor or a toolbar button has the focus, don't hide the toolbar
            // However, hide the toolbar if the forceHide flag is true
            if (!forceHide &&
                this._editorElement &&
                document.activeElement &&
                document.activeElement === this._editorElement) {
                isHidden = false;
            }
            else {
                var buttonNodes = this._formattingbarElement.querySelectorAll('.ToolbarButton');
                for (var i = 0; i < buttonNodes.length; i++) {
                    if (this._isSelectionChangeFromToolbar ||
                        (document.activeElement && document.activeElement.isEqualNode(buttonNodes[i]))) {
                        this._isSelectionChangeFromToolbar = false;
                        newState.isFormattingBarHidden = false;
                        newState.formattingBarPosition = this.state.formattingBarPosition;
                        isHidden = false;
                        // Don't update the position if isHidden got overriden because a button was clicked
                        updatePosition = false;
                        break;
                    }
                }
            }
            if (isHidden &&
                document.activeElement &&
                !document.activeElement.isContentEditable) {
                // This makes the contenteditable element non-editable
                var selection = window.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                }
            }
        }
        if (!isHidden) {
            newState.isFormattingBarHidden = false;
            if (updatePosition) {
                newState.formattingBarPosition = this._formattingBarPosition;
            }
        }
        if (this._isFormattingBarStateChanged(newState)) {
            this.setState(newState);
        }
    };
    SPRte.prototype._onBeforePaste = function () {
        this._currentScrollTop = this._scrollableParent.scrollTop;
        this._isPasting = true;
    };
    SPRte.prototype._handleScroll = function () {
        if (this.state.formattingBarPosition &&
            this._scrollableParentTop !== this.state.formattingBarPosition.top) {
            this._handleScrollWithFloatingFormattingBar();
        }
    };
    SPRte.prototype._handleScrollWithFloatingFormattingBar = function () {
        if (this._shouldFormattingBarFloat) {
            this.setState({ formattingBarPosition: this._formattingBarPositionWithScroll });
        }
        else if (this._editorElement) {
            var scrollableParentTop = this._scrollableParentTop;
            var rteRect = this._rteRect;
            if (rteRect && scrollableParentTop > rteRect.bottom) {
                // Hide the formatting bar if not in the view port
                this.setState({ isFormattingBarHidden: true });
            }
            else {
                this.setState({
                    formattingBarPosition: SPRte._getFormattingBarDefaultPosition(this._isRtl)
                });
            }
        }
    };
    Object.defineProperty(SPRte.prototype, "_formattingBarPosition", {
        get: function () {
            return this._floatingFormattingBarPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_floatingFormattingBarPosition", {
        get: function () {
            if (!this._shouldFormattingBarFloat) {
                return SPRte._getFormattingBarDefaultPosition(this._isRtl);
            }
            else {
                return this._formattingBarPositionWithScroll;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_formattingBarPositionWithScroll", {
        get: function () {
            var formattingParPosition = SPRte._getFormattingBarDefaultPosition(this._isRtl);
            formattingParPosition.top = this._scrollableParentTop;
            if (this._rteRect) {
                if (!this._isRtl) {
                    formattingParPosition.left = this._rteRect.left - SPRte._CONTROLZONE_PADDING_HORIZONTAL;
                }
                else {
                    formattingParPosition.right = this._rteRect.right - SPRte._CONTROLZONE_PADDING_HORIZONTAL;
                }
            }
            formattingParPosition.position = 'fixed';
            return formattingParPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_isRTESelected", {
        get: function () {
            return this.props.store.selectedControlId === this.props.control.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_emphasisClassName", {
        get: function () {
            var _a = this.props.control, emphasisTheme = _a.emphasisTheme, theme = _a.theme;
            if (emphasisTheme && theme) {
                var rootClassName = 'cke_editable';
                var classNames = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_9__["CanvasRteStyles"].getClassNames({
                    root: rootClassName,
                    emphasisTheme: emphasisTheme,
                    globalTheme: theme
                });
                return classNames && classNames.root;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_scrollableParent", {
        get: function () {
            return this.props.store.scrollableParent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_scrollableParentTop", {
        get: function () {
            return this._scrollableParent && this._scrollableParent.getBoundingClientRect().top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_rteRect", {
        get: function () {
            return this._editorElement && this._editorElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_shouldFormattingBarFloat", {
        get: function () {
            if (this._editorElement) {
                var scrollableParentTop = this._scrollableParentTop;
                var rteRect = this._rteRect;
                if (rteRect) {
                    // This makes sure we don't hide half formatting bar while scrolling.
                    var rectTop = rteRect.top - SPRte._FORMATTING_BAR_HEIGHT;
                    // We need to float the formatting bar only when the RTE is in the viewport
                    return rectTop <= scrollableParentTop && scrollableParentTop <= rteRect.bottom;
                }
                return false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    SPRte.prototype._setDelayedFocus = function () {
        var _this = this;
        this._async.setTimeout(function () { return _this._focusCore(); }, 0);
    };
    SPRte.prototype._isFormattingBarStateChanged = function (newState) {
        return ((this.state.formattingBarPosition &&
            newState.formattingBarPosition &&
            !Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(this.state.formattingBarPosition, newState.formattingBarPosition)) ||
            this.state.isFormattingBarHidden !== newState.isFormattingBarHidden);
    };
    SPRte.prototype._onAfterPaste = function () {
        var _this = this;
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(this.TAG_NAME + 'CopyPaste');
        this._isPasting = false;
        // Fix the scroll. This might happen too fast before the scroll is messed up, so we will do it again after a delay
        // Having this can reduce flakiness (the scroll jumping for a very short period of time)
        this._scrollableParent.scrollTop = this._currentScrollTop;
        // A small delay to make sure we're fixing the scroll after it's messed up
        window.setTimeout(function () {
            // Resetting scroll to where it was before paste
            _this._scrollableParent.scrollTop = _this._currentScrollTop;
            // If pasted block is large and the cursor goes out of view, scroll to show the cursor on the bottom
            var range = _this._editor ? _this._editor.getSelection() : undefined;
            if (_this._editor && range) {
                var viewportHeight = document.documentElement
                    ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                    : undefined;
                var cursorTop = _this._editor.getBounds(range.start).top;
                var editorTop = _this._editorElement && _this._editorElement.getBoundingClientRect().top;
                if (viewportHeight !== undefined && editorTop && editorTop + cursorTop > viewportHeight) {
                    _this._scrollableParent.scrollTop =
                        _this._currentScrollTop + editorTop + cursorTop - viewportHeight + SPRte._LINE_HEIGHT;
                }
            }
        }, 10);
    };
    Object.defineProperty(SPRte.prototype, "_isPropertyPaneLoadedAndSelected", {
        get: function () {
            return this._spRtePropertyPanePromise && this._isRTESelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRte.prototype, "_shouldRemovePlaceholder", {
        get: function () {
            return !!(this.props.innerHTML && this.props.innerHTML !== SPRte._EMPTY_RTE_HTML);
        },
        enumerable: true,
        configurable: true
    });
    SPRte.prototype._changePropertyPaneState = function (propertyPaneState) {
        // We need to make sure that property pane is already loaded and
        // RTE is selected before we change the state
        if (this._isPropertyPaneLoadedAndSelected && this.props.store.propertyPaneController) {
            this.props.store.propertyPaneController.requestAction(this.props.control.id, propertyPaneState);
            if (this.props.store.propertyPaneController.isOpen() && propertyPaneState === 'Toggle') {
                // The focus stays on more button when PP is updated because property pane does not focus
                // in componentDidUpdate. This scenario is specific to RTE, therefore we cannot move this inside
                // property pane code.
                var propertyPaneContainer = document.getElementById('spPropertyPaneContainer');
                if (propertyPaneContainer) {
                    this.props.store.a11yManager.focusTo(propertyPaneContainer);
                }
            }
        }
    };
    SPRte.prototype._loadAndInstantiatePropertyPaneControl = function () {
        var _this = this;
        if (!this._spRtePropertyPanePromise) {
            this._spRtePropertyPanePromise = Promise.all(/*! import() | sp-rte-propertypane */[__webpack_require__.e("vendors~sp-rte-propertypane"), __webpack_require__.e("sp-rte-propertypane")]).then(__webpack_require__.bind(null, /*! ./PropertyPane/SPRtePropertyPaneControl */ "lruL")).then(function (spRtePropertyPane) {
                if (_this.props.store.propertyPaneController) {
                    _this.props.store.propertyPaneController.registerConsumer(_this.props.control.id, new spRtePropertyPane.SPRtePropertyPaneControl(_this));
                }
            });
        }
    };
    SPRte.prototype._getComputedFileName = function (title) {
        var _this = this;
        var pageContext = this.props.store.pageContext;
        var absoluteUrl = (pageContext.web && pageContext.web.absoluteUrl) || '/';
        var apiUrl = "/_api/SP.Publishing.SitePageService.ComputeFileName('" + title + "')";
        var requestUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_12__["Uri"].concatenate(absoluteUrl, apiUrl);
        var httpClient = this.props.serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__["SPHttpClient"].serviceKey);
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('ComputeFileName');
        var correlationId;
        return httpClient
            .get(requestUrl, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            correlationId = response.correlationId;
            if (response.ok) {
                qosMonitor.writeSuccess();
                return response.json();
            }
            else {
                qosMonitor.writeExpectedFailure('ComputeFileNameFailedWithNoResponse', undefined, {
                    correlationId: correlationId
                });
            }
        })
            .then(function (response) {
            return response.value;
        })
            .catch(function (error) {
            qosMonitor.writeExpectedFailure('ComputeFileNameFailed', error, {
                correlationId: correlationId
            });
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logErrorData({
                source: _ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["BaseRte"].logSource,
                error: error,
                serviceScope: _this.props.serviceScope
            });
            throw error;
        });
    };
    SPRte.prototype._loadWebPartsInContainer = function () {
        var _this = this;
        if (this._editorWrapper) {
            var containers = this._editorWrapper.querySelectorAll("[" + SPRte._DATA_INSTANCE_ID + "]");
            if (containers) {
                containers.forEach(function (container) {
                    var controlId = container.getAttribute(SPRte._DATA_INSTANCE_ID);
                    _this._loadWebPart(controlId, container);
                });
            }
        }
    };
    SPRte.prototype._loadWebPart = function (instanceId, webPart) {
        var store = this.props.store;
        var canvasControls = store.canvasFields.canvasControls;
        var embeddedControl = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["find"])(canvasControls, function (control) { return control.id === instanceId; });
        if (embeddedControl) {
            var webPartZoneProps = {
                ref: function (instance) { return store.canvasFields.setControlComponentById(embeddedControl.id, instance); },
                displayMode: store.displayMode,
                control: embeddedControl,
                store: store
            };
            Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_9__["_setInlineWebPartAlignment"])(webPartZoneProps, webPart);
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_webPartZone__WEBPACK_IMPORTED_MODULE_8__["WebPartZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, webPartZoneProps)), webPart);
        }
    };
    SPRte._TOOLBAR_DEFAULT_POSITION = {
        left: 0,
        top: -36,
        position: 'absolute',
        right: undefined
    };
    SPRte._CONTROLZONE_PADDING_HORIZONTAL = 8;
    SPRte._LINE_HEIGHT = 23;
    SPRte._FORMATTING_BAR_HEIGHT = 34;
    SPRte._EMPTY_RTE_HTML = '<p><br></p>';
    SPRte._DATA_INSTANCE_ID = 'data-instance-id';
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_handleKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_postEditorCreatedHandlerComplete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_afterEditorCreated", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_onBeforePaste", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_handleScroll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_onAfterPaste", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["autobind"]
    ], SPRte.prototype, "_changePropertyPaneState", null);
    return SPRte;
}(_ms_sp_rte__WEBPACK_IMPORTED_MODULE_10__["BaseRte"]));



/***/ }),

/***/ "NbyJ":
/*!***************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZoneEmphasisButton.module.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasZoneEmphasisButton.module.css */ "tWVl");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "OYYd":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRteTouchDevice.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./SPRteTouchDevice.module.css */ "6HUO");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "OfOi":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolbox/ToolboxConstants.js ***!
  \**************************************************************************/
/*! exports provided: FEATURED_ITEM_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_ITEM_IDS", function() { return FEATURED_ITEM_IDS; });
/* harmony import */ var _RteToolboxItemData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RteToolboxItemData */ "d67+");

// tslint:disable-next-line:export-name
var FEATURED_ITEM_IDS = [
    _RteToolboxItemData__WEBPACK_IMPORTED_MODULE_0__["RTE_TOOLBOX_ITEM_ID"],
    'd1d91016-032f-456d-98a4-721247c305e8_0',
    'b7dd04e1-19ce-4b24-9132-b60a1c2b910d_0',
    '6410b3b6-d440-4663-8744-378976dc041e_0',
    '490d7c76-1824-45b2-9de3-676421c997fa_0',
    'daf0b71c-6de8-4ef7-b511-faae7c388708_0' // Highlighted content
];


/***/ }),

/***/ "P4Am":
/*!*********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZone.module.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CanvasDragZone.module.css */ "AHAC");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "R6FH":
/*!**************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/LayoutCanvasToolboxHint.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./LayoutCanvasToolboxHint.css */ "XaOY");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "RtnV":
/*!*****************************************************!*\
  !*** ./lib/sp-canvas/common/ComponentPerfLogger.js ***!
  \*****************************************************/
/*! exports provided: ComponentPerfLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPerfLogger", function() { return ComponentPerfLogger; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft. All rights reserved.


/**
 * This class is supposed to use monitoring multi stage perf. It's alternative for RUMOne, because RUMOne take
 * too much cost when it comes to storage in Aria/MDM.
 * Use ComponentPerfLogger to measure performance of individual component, irrespective of within or outside
 * the viewport. RUMOne is useful only in the context of page load and any control loaded during that period.
 * @preapproved @internal
 */
var ComponentPerfLogger = /** @class */ (function () {
    function ComponentPerfLogger() {
        this._scenarioQoS = new Map();
    }
    ComponentPerfLogger.getInstance = function () {
        if (!ComponentPerfLogger._instance) {
            ComponentPerfLogger._instance = new ComponentPerfLogger();
        }
        return ComponentPerfLogger._instance;
    };
    /**
     * To start an perf log to monitor multi stage perf.
     */
    ComponentPerfLogger.prototype.start = function (scenarioName, firstStageName) {
        var scenarioQoS = this._scenarioQoS.get(scenarioName);
        if (scenarioQoS) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('ComponentPerfLogger.start'), _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["StringHelper"].format('duplicate call ComponentPerfLogger.start={0} or scenario={1} name duplicated.', scenarioName, firstStageName));
            var latestQoS = scenarioQoS[scenarioQoS.length - 1];
            latestQoS.writeExpectedFailure('CallStartDuplicate');
            this._scenarioQoS.delete(scenarioName);
        }
        this._scenarioQoS.set(scenarioName, [
            new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._generateQoSName(scenarioName, firstStageName))
        ]);
    };
    /**
     * return: true means markStage successfully while false means it is failure.
     */
    ComponentPerfLogger.prototype.markStage = function (scenarioName, stageName) {
        var scenarioQoS = this._scenarioQoS.get(scenarioName);
        if (!scenarioQoS || scenarioQoS.length <= 0) {
            var error = new Error(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["StringHelper"].format('Wrong usage: should call start first with scenarioName={0} and stageName={1}', scenarioName, stageName));
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('ComponentPerfLogger.markStage'), error);
            return false;
        }
        var latestQoS = scenarioQoS[scenarioQoS.length - 1];
        latestQoS.writeSuccess();
        var newStageQoS = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](this._generateQoSName(scenarioName, stageName));
        scenarioQoS.push(newStageQoS);
        return true;
    };
    /**
     * return: true means markStage successfully while false means it is failure.
     */
    ComponentPerfLogger.prototype.end = function (scenarioName) {
        var scenarioQoS = this._scenarioQoS.get(scenarioName);
        if (!scenarioQoS || scenarioQoS.length <= 0) {
            var error = new Error('Wrong usage: should call start first with scenarioName=' + scenarioName);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('ComponentPerfLogger.end'), error);
            return false;
        }
        var lastQoS = scenarioQoS[scenarioQoS.length - 1];
        lastQoS.writeSuccess();
        this._scenarioQoS.delete(scenarioName);
        return true;
    };
    ComponentPerfLogger.prototype._generateQoSName = function (prefixName, lastName) {
        return 'Perf.' + prefixName + '.' + lastName;
    };
    return ComponentPerfLogger;
}());



/***/ }),

/***/ "Vp7h":
/*!********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasStore/shouldExcludeFromToolbox.js ***!
  \********************************************************************************/
/*! exports provided: shouldExcludeFromToolbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldExcludeFromToolbox", function() { return shouldExcludeFromToolbox; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_topic_shared_lib_utilities_isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-topic-shared/lib/utilities/isSiteKnowledgeCenter */ "akm9");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/Flights */ "qRiB");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/KillSwitches */ "17t3");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/Constants */ "+zV1");








/**
 * Webpart IDs
 */
var CONNECTORS_ID = '893a257e-9c92-49bc-8a36-2f6bb058da34';
var PLANNER_ID = '39c4c1c2-63fa-41be-8cc2-f6c0b49b253d';
var MY_TOPICS_ID = '1f1a4f4f-c926-4a8e-b14c-564e2f8cf47a';
var STREAM_ID = '275c0095-a77e-4f6d-a2a0-6a7626911518';
var MY_TOPICS_FLIGHT = 1434; /* ClientSideWebPartMyTopics */
/**
 * Various grouping of webpart IDs
 */
var GROUP_ONLY_PARTS = new Set([CONNECTORS_ID, PLANNER_ID]);
function shouldExcludeFromToolbox(manifest, pageContext, pageLayoutType) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (_common_Flights__WEBPACK_IMPORTED_MODULE_4__["Flights"].isMEEDashboardEnabled() &&
        pageLayoutType === _common_Constants__WEBPACK_IMPORTED_MODULE_6__["PageLayoutName"].Dashboard &&
        !((_a = manifest.experimentalData) === null || _a === void 0 ? void 0 : _a.ACE)) {
        return true;
    }
    if (manifest.id === MY_TOPICS_ID) {
        if (!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["myTopicsInNormalSiteKSActivated"])()) {
            if (Object(_ms_sp_topic_shared_lib_utilities_isSiteKnowledgeCenter__WEBPACK_IMPORTED_MODULE_3__["default"])(!Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["fixCheckKnowledgeCenterIssueKSActivated"])() ? pageContext.legacyPageContext : pageContext)) {
                return !Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["isCortexEnabled"])(pageContext);
            }
            else {
                return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(MY_TOPICS_FLIGHT) || !Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["isCortexEnabled"])(pageContext);
            }
        }
        else {
            var currentUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["Uri"].concatenate(window.location.origin, window.location.pathname);
            var knowledgeCenterUrl = (_b = pageContext.legacyPageContext.knowledgeHubSiteDetails) === null || _b === void 0 ? void 0 : _b.Url;
            if (((_c = currentUrl) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== ((_d = knowledgeCenterUrl) === null || _d === void 0 ? void 0 : _d.toLowerCase()) || !Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_2__["isCortexEnabled"])(pageContext)) {
                return true;
            }
        }
    }
    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('43cfd3f1-93a5-45da-94e6-c0d84e6baeb5' /* '09/10/2020', 'SOX_HideStreamInSovereign' */) &&
        manifest.id === STREAM_ID) {
        var isStreamWebPartSupported = (_g = (_f = (_e = pageContext) === null || _e === void 0 ? void 0 : _e.legacyPageContext) === null || _f === void 0 ? void 0 : _f.farmSettings) === null || _g === void 0 ? void 0 : _g.ExternalService_isstreamwebpartsupported;
        if (Number(isStreamWebPartSupported) === 0) {
            return true;
        }
    }
    return (manifest.hiddenFromToolbox ||
        missingRequiredGroup(manifest, pageContext) ||
        _missingSupportSharePointWebPart(manifest));
}
function missingRequiredGroup(manifest, pageContext) {
    var hasGroup = Boolean(pageContext && pageContext.site && pageContext.site.group && pageContext.site.group.id);
    return !hasGroup && GROUP_ONLY_PARTS.has(manifest.id);
}
function _missingSupportSharePointWebPart(manifest) {
    if (!manifest.supportedHosts) {
        // If there is no value we default to false for back compat
        return false;
    }
    var missingSupportedHost = true;
    for (var _i = 0, _a = manifest.supportedHosts; _i < _a.length; _i++) {
        var supportedHost = _a[_i];
        if (supportedHost === 'SharePointWebPart') {
            missingSupportedHost = false;
            break;
        }
    }
    return missingSupportedHost;
}


/***/ }),

/***/ "Wzwt":
/*!**********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragIconUtilities.js ***!
  \**********************************************************************************/
/*! exports provided: getSectionParentByClassName, setDisplayNone, setDisplayBlock, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionParentByClassName", function() { return getSectionParentByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayNone", function() { return setDisplayNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayBlock", function() { return setDisplayBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
function getSectionParentByClassName(element, className) {
    if (!element.parentElement) {
        return undefined;
    }
    var referenceElement = element.parentElement;
    while (referenceElement && !referenceElement.classList.contains(className)) {
        if (referenceElement.parentElement) {
            referenceElement = referenceElement.parentElement;
        }
        else {
            break;
        }
    }
    return referenceElement;
}
function setDisplayNone(element) {
    element.style.display = 'none';
}
function setDisplayBlock(element) {
    element.style.display = 'block';
}
function toggleClass(element, cssClass, value) {
    if (element) {
        value ? element.classList.add(cssClass) : element.classList.remove(cssClass);
    }
}


/***/ }),

/***/ "XPNV":
/*!*****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/controlZone/ControlZoneEditEvents.js ***!
  \*****************************************************************************/
/*! exports provided: ControlZoneEditEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlZoneEditEvents", function() { return ControlZoneEditEvents; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../loc/CanvasStrings.resx */ "indE");
var _loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../loc/CanvasStrings.resx */ "indE", 1);





var WEBPARTS_ALLOWING_DROP = new Set([
    'd1d91016-032f-456d-98a4-721247c305e8' // image webpart
    // TODO: Enable for Hero and Image Gallery (VSO 863421, 863422)
]);
var ControlZoneEditEvents = /** @class */ (function () {
    function ControlZoneEditEvents(store) {
        var _this = this;
        this.handleControlFocus = function (control, childControlElementRef) {
            _this._selectControl(control);
            if (childControlElementRef.current && !childControlElementRef.current.contains(document.activeElement)) {
                childControlElementRef.current.focus();
            }
        };
        this.handleClickCapture = function (control, domElement) {
            if (_this._store.selectedControlId !== control.id && domElement.current) {
                _this._selectControl(control);
                _this._store.a11yManager.focusTo(domElement.current);
            }
            else {
                _this._selectControl(control);
            }
        };
        this.handleKeydownCapture = function (e, control, domElement, toolbarElementRef, childControlElementRef) {
            if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].WebPartZone) {
                _this._selectControl(control);
                if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isEscape(e) && domElement && domElement.current) {
                    _this._store.a11yManager.focusTo(domElement.current);
                    e.stopPropagation();
                    e.preventDefault();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].f10, e, { alt: true }) && toolbarElementRef.current) {
                    _this._store.a11yManager.focusTo(toolbarElementRef.current);
                    _this._store.a11yManager.alert(_loc_CanvasStrings_resx__WEBPACK_IMPORTED_MODULE_4__["ToolbarNavigationArrowKeys"]);
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
            // Do this for both web part and RTE
            if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].p, e, { alt: true })) {
                _this._openPropertyPane(e, control);
            }
            else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isKey(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].del, e) &&
                control.id === _this._store.selectedControlId &&
                domElement &&
                e.target === domElement.current) {
                _this._store.getEditModule('actions').handleDeleteControlButtonClicked(control.position);
            }
        };
        this.handlePaste = function (e, control, displayMode, domElement, isSelected) {
            if (displayMode === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].Read) {
                return;
            }
            // e.currentTarget is the selected element when paste happens
            if (e.currentTarget !== domElement.current) {
                return;
            }
            if (e.nativeEvent && e.nativeEvent.cancelBubble) {
                // checking nativeEvent because canvas and webparts are not in the same React render tree
                // thus synthetic event propagation cannot be stopped in webparts
                e.stopPropagation();
                return;
            }
            e.stopPropagation();
            if (control.controlType !== _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].RTE) {
                // RTE has image paste already, we don't need to do this.
                if (isSelected && WEBPARTS_ALLOWING_DROP.has(control.webPartId)) {
                    _this.getPasteEventHandler(control, domElement)(e);
                }
                else {
                    var position = _this._store
                        .getEditModule('actions')
                        .getControlPositionAfterImagePaste(_this._store.canvasLayout.fetchAllControls(), control.position, false);
                    _this._store.getEditModule('actions').handleImagePasteInCanvas(e.clipboardData, position);
                }
            }
        };
        this.handleToolbarKeydown = function (e, control, childControl) {
            if (childControl && control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].RTE) {
                _this._selectControl(control);
                // Only for RTE: pressing escape on toolbar takes the focus inside the editor
                if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isEscape(e)) {
                    childControl.focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
                else if (_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].isTab(e)) {
                    // Focus on the formatting bar if tab is pressed on the toolbar
                    childControl.focusFormattingBar();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        this.addDragEventListeners = function (control, domElement, onDragOver, onDragLeave) {
            if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].WebPartZone &&
                WEBPARTS_ALLOWING_DROP.has(control.webPartId) &&
                domElement.current) {
                domElement.current.addEventListener('dragover', onDragOver);
                domElement.current.addEventListener('dragleave', onDragLeave);
            }
        };
        this.removeDragEventListeners = function (control, domElement, onDragOver, onDragLeave) {
            if (control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_3__["CanvasControlType"].WebPartZone &&
                WEBPARTS_ALLOWING_DROP.has(control.webPartId) &&
                domElement.current) {
                domElement.current.removeEventListener('dragover', onDragOver);
                domElement.current.removeEventListener('dragleave', onDragLeave);
            }
        };
        this.addPasteEventListener = function (control, eventHandler) {
            if (WEBPARTS_ALLOWING_DROP.has(control.webPartId)) {
                document.body.addEventListener('paste', eventHandler);
            }
        };
        this.removePasteEventListener = function (control, eventHandler) {
            if (WEBPARTS_ALLOWING_DROP.has(control.webPartId)) {
                document.body.removeEventListener('paste', eventHandler);
            }
        };
        this.getPasteEventHandler = function (control, domElement) {
            return function (event) {
                var _a, _b;
                var pasteEvent = new CustomEvent('PasteEvents', {
                    bubbles: true,
                    cancelable: true,
                    detail: { event: event, instanceId: control.id }
                });
                (_b = (_a = domElement.current) === null || _a === void 0 ? void 0 : _a.querySelector('.ms-SPLegacyFabricBlock')) === null || _b === void 0 ? void 0 : _b.dispatchEvent(pasteEvent);
            };
        };
        this._selectControl = function (control) {
            _this._store.getEditModule('actions').selectedPosition = control;
        };
        this._store = store;
    }
    ControlZoneEditEvents.prototype._openPropertyPane = function (e, control) {
        if (this._store.propertyPaneController) {
            this._store.propertyPaneController.requestAction(control.id, 'Open');
        }
        e.stopPropagation();
        e.preventDefault();
    };
    return ControlZoneEditEvents;
}());



/***/ }),

/***/ "XaOY":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/LayoutCanvasToolboxHint.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasComponent.LCS .CanvasToolboxHint{background:0 0;border:none;cursor:pointer;opacity:0;overflow:visible;outline:0;padding:0;position:relative;transition:all .3s ease;color:\"[theme:neutralTertiary, default: #a19f9d]\"}.CanvasComponent.LCS .CanvasToolboxHint:not(.AlignedHint){width:100%}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton{border-radius:50%;padding:0;text-align:center;transition:all .3s ease}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton i{width:23px}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone{position:absolute;color:\"[theme:bodyText, default: #323130]\";opacity:1;border-radius:0;font-size:14px;height:32px;line-height:32px;transform:translate(-100%,-50%);width:32px}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone.emphasized{background-color:\"[theme:themeSecondary, default: #2b88d8]\";color:\"[theme:white, default: #ffffff]\"}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonSection{position:relative;font-size:14px;height:23px;left:50%;transform:translate(-50%);line-height:23px;top:0;width:23px}.CanvasComponent.LCS .CanvasToolboxHint .CanvasToolboxHint-plusButtonWrapper .CanvasToolboxHint-plusButton .ms-Icon{position:relative}.CanvasComponent.LCS .CanvasToolboxHint:before{border-top-width:1px;border-top-style:dashed;content:\"\";height:0;position:absolute;top:0;width:100%;transition:all .3s ease}[dir=ltr] .CanvasComponent.LCS .CanvasToolboxHint:before{left:0}[dir=rtl] .CanvasComponent.LCS .CanvasToolboxHint:before{right:0}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint{display:block;position:relative;height:0}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:focus:before,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:hover:before{border-top-color:\"[theme:themePrimary, default: #0078d4]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:focus .CanvasToolboxHint-plusButton,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:hover .CanvasToolboxHint-plusButton{background-color:\"[theme:themePrimary, default: #0078d4]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:focus .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:hover .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone{color:\"[theme:white, default: #ffffff]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:focus .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone.emphasized,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint:hover .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone.emphasized{background:0 0;color:\"[theme:bodyText, default: #323130]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:before{border-top-color:\"[theme:neutralTertiary, default: #a19f9d]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:before{border-top-color:\"[theme:themePrimary, default: #0078d4]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:before,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:before{border-top-width:1px;border-top-style:solid}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active .CanvasToolboxHint-plusButton,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected .CanvasToolboxHint-plusButton{background-color:\"[theme:themePrimary, default: #0078d4]\";opacity:1}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone{background:0 0;color:\"[theme:bodyText, default: #323130]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone.emphasized,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected .CanvasToolboxHint-plusButton.CanvasToolboxHint-plusButtonZone.emphasized{background-color:\"[theme:themeSecondary, default: #2b88d8]\";color:\"[theme:white, default: #ffffff]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:focus .CanvasToolboxHint-plusButtonZone,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:hover .CanvasToolboxHint-plusButtonZone,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:focus .CanvasToolboxHint-plusButtonZone,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:hover .CanvasToolboxHint-plusButtonZone{border-radius:0;opacity:1;background-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:focus .CanvasToolboxHint-plusButtonZone.emphasized,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active:hover .CanvasToolboxHint-plusButtonZone.emphasized,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:focus .CanvasToolboxHint-plusButtonZone.emphasized,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected:hover .CanvasToolboxHint-plusButtonZone.emphasized{background:0 0;color:\"[theme:bodyText, default: #323130]\"}.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-active+.CanvasZoneContainer--nonselected:before,.CanvasComponent.LCS .CanvasToolboxHint.ZoneHint.zone-selected+.CanvasZoneContainer--nonselected:before{border-top:none}.CanvasComponent.LCS .CanvasToolboxHint.SectionHint .CanvasToolboxHint-plusButton{opacity:1}.CanvasComponent.LCS .CanvasToolboxHint.SectionHint:before{border-top-width:1px;border-top-style:solid;top:calc(50% - 1px)}.CanvasComponent.LCS .Canvas>.CanvasToolboxHint:first-of-type:last-of-type,.CanvasComponent.LCS .Canvas>.CanvasToolboxHint:first-of-type:last-of-type .CanvasToolboxHint-plusButton,.CanvasComponent.LCS .CanvasSection:hover button.CanvasToolboxHint:first-of-type:last-of-type,.CanvasComponent.LCS .CanvasToolboxHint.is-visible,.CanvasComponent.LCS .CanvasToolboxHint:focus,.CanvasComponent.LCS .CanvasToolboxHint:focus .CanvasToolboxHint-plusButton,.CanvasComponent.LCS .CanvasToolboxHint:hover,.CanvasComponent.LCS .CanvasToolboxHint:hover .CanvasToolboxHint-plusButton,.CanvasComponent.LCS .CanvasZone--selected button.CanvasToolboxHint:first-of-type:last-of-type,.CanvasComponent.LCS .EmptyCanvasHint button.CanvasToolboxHint:first-of-type{opacity:1}@media screen and (-ms-high-contrast:active){.CanvasComponent.LCS .CanvasToolboxHint{color:#1aebff}.CanvasComponent.LCS .CanvasToolboxHint:focus .CanvasToolboxHint-plusButton{border:3px dotted #1aebff;box-sizing:content-box}}@media screen and (-ms-high-contrast:black-on-white){.CanvasComponent.LCS .CanvasToolboxHint{color:#37006e}.CanvasComponent.LCS .CanvasToolboxHint:focus .CanvasToolboxHint-plusButton{border:3px dotted #1aebff;box-sizing:content-box}}", ""]);


/***/ }),

/***/ "ZHZH":
/*!******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRteTouchDevice.module.scss.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./SPRteTouchDevice.module.css */ "OYYd");
var styles = {
    rteTouch: 'ab_i_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "ZsUb":
/*!***********************************************!*\
  !*** ./lib/sp-canvas/webPartFactory/index.js ***!
  \***********************************************/
/*! exports provided: WebPartFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebPartFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebPartFactory */ "v9l7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPartFactory", function() { return _WebPartFactory__WEBPACK_IMPORTED_MODULE_0__["WebPartFactory"]; });




/***/ }),

/***/ "akm9":
/*!*****************************************************************!*\
  !*** ../sp-topic-shared/lib/utilities/isSiteKnowledgeCenter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSiteKnowledgeCenter; });
/* harmony import */ var _cleanGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanGuid */ "I+xK");

/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Return if the current site is a Knowledge Center
 *
 * @internal
 */
// tslint:disable-next-line:no-any
function isSiteKnowledgeCenter(spPageContextInfo) {
    var _a, _b;
    if (!spPageContextInfo || !spPageContextInfo.knowledgeHubSiteDetails) {
        return false;
    }
    var siteId = (_a = spPageContextInfo) === null || _a === void 0 ? void 0 : _a.siteId;
    var webId = (_b = spPageContextInfo) === null || _b === void 0 ? void 0 : _b.webId;
    siteId = Object(_cleanGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(siteId);
    webId = Object(_cleanGuid__WEBPACK_IMPORTED_MODULE_0__["default"])(webId);
    return (spPageContextInfo.knowledgeHubSiteDetails.SiteId === siteId &&
        spPageContextInfo.knowledgeHubSiteDetails.WebId === webId);
}


/***/ }),

/***/ "d18e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/common/ControlsInOneRow.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ay_l_32f825c4{display:-ms-flexbox;display:flex}.ay_l_32f825c4.az_l_32f825c4{-ms-flex-pack:justify;justify-content:space-between}", ""]);


/***/ }),

/***/ "d67+":
/*!****************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolbox/RteToolboxItemData.js ***!
  \****************************************************************************/
/*! exports provided: RTE_TOOLBOX_ITEM_ID, getRteToolboxItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTE_TOOLBOX_ITEM_ID", function() { return RTE_TOOLBOX_ITEM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRteToolboxItemData", function() { return getRteToolboxItemData; });
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RteToolboxItemDataStrings_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RteToolboxItemDataStrings.resx */ "pSH/");
var _RteToolboxItemDataStrings_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./RteToolboxItemDataStrings.resx */ "pSH/", 1);


var RTE_TOOLBOX_ITEM_ID = 'RTE';
function getRteToolboxItemData(position) {
    return {
        id: RTE_TOOLBOX_ITEM_ID,
        description: _RteToolboxItemDataStrings_resx__WEBPACK_IMPORTED_MODULE_1__["TextWebpartDescription"],
        displayName: _RteToolboxItemDataStrings_resx__WEBPACK_IMPORTED_MODULE_1__["TextWebPartDisplayName"],
        msIconName: 'Font',
        groupId: 'cf066440-0614-43d6-98ae-0b31cf14c7c3',
        itemData: {
            controlType: _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__["CanvasControlType"].RTE,
            id: RTE_TOOLBOX_ITEM_ID,
            innerHTML: '',
            position: position
        }
    };
}


/***/ }),

/***/ "dczX":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragZone.module.scss.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CanvasDragZone.module.css */ "P4Am");
var styles = {
    dragIconContainer: 'e_c_32f825c4',
    dragIcon: 'f_c_32f825c4',
    dragText: 'g_c_32f825c4',
    dragElementHolder: 'h_c_32f825c4',
    labelContainer: 'i_c_32f825c4',
    singleColumn: 'j_c_32f825c4',
    doubleColumn: 'k_c_32f825c4',
    tripleColumn: 'l_c_32f825c4',
    columnLeftTwoThirds: 'm_c_32f825c4',
    columnRightTwoThirds: 'n_c_32f825c4',
    disabledArea: 'o_c_32f825c4',
    draggedElement: 'p_c_32f825c4',
    dragGhostExperienceFlightDragIcon: 'q_c_32f825c4',
    hidePseudoElement: 'r_c_32f825c4',
    disabledControlZoneElement: 's_c_32f825c4',
    moveNotAllowed: 't_c_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "eITN":
/*!*********************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasStore/ControlPositionCalculator.js ***!
  \*********************************************************************************/
/*! exports provided: ControlPositionCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPositionCalculator", function() { return ControlPositionCalculator; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvasLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../canvasLayout */ "yPt8");


var ControlPositionCalculator = /** @class */ (function () {
    function ControlPositionCalculator() {
    }
    // This method will return the position for the control to be inserted below the selected control
    ControlPositionCalculator.getPositionToInsertAfterSelectedControl = function (controls, position) {
        var controlPosition;
        var currentIndex = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["findIndex"](controls, function (control) {
            return (position.zoneIndex === control.position.zoneIndex &&
                position.sectionIndex === control.position.sectionIndex &&
                position.controlIndex === control.position.controlIndex &&
                position.sectionFactor === control.position.sectionFactor &&
                position.layoutIndex === control.position.layoutIndex);
        });
        var nextIndex = currentIndex + 1;
        if (nextIndex < controls.length &&
            controls[nextIndex].position.zoneIndex === position.zoneIndex &&
            controls[nextIndex].position.sectionIndex === position.sectionIndex) {
            // If the zone indexes and section indexes are same, then it means that
            // the next control is in same section as the current control
            // CanvasSection.addControl will automatically update the control index if
            // element with currentIndex already exists
            controlPosition = controls[nextIndex].position;
        }
        else {
            // If there is no control after the current control in the same section, then create
            // a new position and add the control
            controlPosition = _canvasLayout__WEBPACK_IMPORTED_MODULE_1__["CanvasLayout"].cloneMerge(position, {
                controlIndex: position.controlIndex === undefined ? undefined : position.controlIndex + 1
            });
        }
        return controlPosition;
    };
    // This method will return the position for the control to be inserted in first section of selected zone
    ControlPositionCalculator.getPositionToInsertInSelectedZone = function (controls, position) {
        var totalControls = controls.length;
        var controlIndex = totalControls === 0 ? 1 : controls[totalControls - 1].position.controlIndex;
        if (controlIndex && controlIndex <= totalControls) {
            controlIndex = controlIndex + 1;
        }
        var controlPosition = _canvasLayout__WEBPACK_IMPORTED_MODULE_1__["CanvasLayout"].cloneMerge(position, {
            controlIndex: controlIndex
        });
        return controlPosition;
    };
    return ControlPositionCalculator;
}());



/***/ }),

/***/ "fo9t":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/DraggingExperience.module.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DraggingExperience.module.css */ "Gm4V");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "h4ae":
/*!**************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/CanvasToolboxHint.styles.js ***!
  \**************************************************************************************/
/*! exports provided: CanvasToolboxHintStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasToolboxHintStyles", function() { return CanvasToolboxHintStyles; });
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__);

var CanvasToolboxHintStyles = /** @class */ (function () {
    function CanvasToolboxHintStyles() {
    }
    CanvasToolboxHintStyles.getClassNames = function (props) {
        return Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_0__["getClassNames"])(CanvasToolboxHintStyles._getStyles, props);
    };
    CanvasToolboxHintStyles._getStyles = function (props) {
        var theme = props.theme, root = props.root;
        var palette = theme.palette;
        return {
            root: [
                root,
                {
                    selectors: {
                        '&::before': {
                            borderTopColor: palette.neutralTertiary
                        },
                        '&:hover::before, &:focus::before': {
                            borderTopColor: palette.themePrimary
                        },
                        '&:hover .CanvasToolboxHint-plusButton, &:focus .CanvasToolboxHint-plusButton': {
                            backgroundColor: palette.themePrimary,
                            boxShadow: '0 0 4px 0 ' + palette.themeDark,
                            color: palette.white
                        },
                        '+ .hint--withTheme': {
                            backgroundColor: palette.themePrimary
                        }
                    }
                }
            ],
            plusButton: [
                'CanvasToolboxHintEmphasis-plusButton',
                {
                    backgroundColor: palette.neutralTertiaryAlt,
                    color: palette.neutralDark,
                    margin: '1px 0 1px 0'
                }
            ]
        };
    };
    return CanvasToolboxHintStyles;
}());



/***/ }),

/***/ "ihgt":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/toolbar/Toolbar.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".CanvasControlToolbar{position:absolute;top:0;width:32px;z-index:1;transition:all .15s ease}[dir=ltr] .CanvasControlToolbar{left:-40px}[dir=rtl] .CanvasControlToolbar{right:-40px}[dir=ltr] .CanvasControlToolbar{padding-right:10px}[dir=rtl] .CanvasControlToolbar{padding-left:10px}", ""]);


/***/ }),

/***/ "l9Wn":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasSectionDragZoneUtils.js ***!
  \*************************************************************************************/
/*! exports provided: CanvasSectionDragZoneUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSectionDragZoneUtils", function() { return CanvasSectionDragZoneUtils; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasDragZoneConstants */ "9S6n");
/* harmony import */ var _CanvasDragIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasDragIcon */ "nRzo");
/* harmony import */ var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasDragZone.resx */ "AlH4");
var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasDragZone.resx */ "AlH4", 1);
/* harmony import */ var _DraggingExperience_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DraggingExperience.module.scss */ "q4KC");





var SECTION_DRAG_ZONE_STRINGS = {
    // Pass empty handleTitle to avoid two tooltips on hover. Tooltip now comes from toolbar item
    handleTitle: '',
    moveStarted: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__["DragZoneMoveStarted"],
    moveComplete: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__["DragZoneMoveCompleteZone"],
    moveCancelled: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__["DragZoneMoveCancelled"],
    moveNotAllowed: _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__["DragZoneMoveNotAllowedAriaLabel"],
    moveInsideLevel: [_CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_3__["DragZoneMoveInsideLevelControl"]]
};
var CanvasSectionDragZoneUtils = /** @class */ (function () {
    function CanvasSectionDragZoneUtils(getStore) {
        var _this = this;
        this._dragIcon = new _CanvasDragIcon__WEBPACK_IMPORTED_MODULE_2__["CanvasDragIcon"]();
        this.getDragZoneProps = function () {
            var dragZoneProps = {
                treeLevelTagsBottomUp: [_CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__["CanvasDragZoneConstants"].zoneDragTag],
                dropPositionOffsetBottomPx: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__["CanvasDragZoneConstants"].LINE_OFFSET_BOTTOM,
                dropPositionOffsetTopPx: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__["CanvasDragZoneConstants"].SECTION_DROP_HINT_OFFSET_TOP,
                onMoved: _this._onZoneMoved,
                onMoveStart: _this._onZoneMoveStart,
                canDropOnEmptyParent: false,
                dragHandleTags: [_CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__["CanvasDragZoneConstants"].zoneDragHandleTag],
                icon: _this._dragIcon.HTMLIcon,
                dragZoneStrings: SECTION_DRAG_ZONE_STRINGS,
                scrollIntoView: _this._store.getEditModule('actions').scrollIntoView,
                additionalDraggingDecoration: {
                    classNameToApply: _DraggingExperience_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].hideElementOnDrag,
                    dropLocationThemeEmphasisName: _CanvasDragZoneConstants__WEBPACK_IMPORTED_MODULE_1__["CanvasDragZoneConstants"].dropLocationThemeEmphasisName,
                    hideDropHintsAroundElement: true
                }
            };
            return dragZoneProps;
        };
        /**
         * Handler called by the DragZone when a zone has been picked up and the drag has started
         * @param position The position of the zone before the move started
         */
        this._onZoneMoveStart = function (position) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent('Canvas.MoveZone.Click');
            if (!CanvasSectionDragZoneUtils._isValidZonePosition(position)) {
                return;
            }
            var layout = _this._store.canvasLayout;
            var zones = layout.zones;
            var oldZone = zones[position[0]];
            _this._dragIcon.setMoveIconBasedOnZone(oldZone);
        };
        /**
         * Handler called by the DragZone when a zone has been dropped to a new position.
         * The position of the zone consists of an array with one item, the zone index in the layout
         * @param oldPosition - The position of the zone before it is moved
         * @param newPosition - The position of the zone after it is moved
         */
        this._onZoneMoved = function (oldPosition, newPosition) {
            var extraData = {};
            _this._dragIcon.reset();
            // if the new position is right before or after the current position, the resulting move would be a no op
            if (oldPosition === newPosition ||
                !CanvasSectionDragZoneUtils._isValidZonePosition(oldPosition) ||
                !CanvasSectionDragZoneUtils._isValidZonePosition(newPosition) ||
                oldPosition[0] === newPosition[0] - 1 ||
                oldPosition[0] === newPosition[0]) {
                return;
            }
            var moveMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('CanvasZoneMove');
            var layout = _this._store.canvasLayout;
            var zones = layout.zones;
            try {
                var oldIndex = oldPosition[0];
                var newIndex = newPosition[0];
                var oldZone = zones[oldIndex];
                var newZoneIndex = 0;
                // if the newIndex exists just get the newZoneIndex from the zone there
                if (newIndex < zones.length) {
                    newZoneIndex = zones[newIndex].index;
                }
                else {
                    newZoneIndex = zones[zones.length - 1].index + 1;
                }
                layout.moveZone(oldZone, newZoneIndex);
                moveMonitor.writeSuccess(extraData);
            }
            catch (err) {
                moveMonitor.writeUnexpectedFailure('ExceptionMovingZone', err, extraData);
            }
        };
        this._getStore = getStore;
    }
    /**
     * A zone position contains [zoneIndex] so the position object must have a length of exactly 1.
     * @param position The position to be evaluated as a valid zone position
     */
    CanvasSectionDragZoneUtils._isValidZonePosition = function (position) {
        return position && position.length === 1;
    };
    Object.defineProperty(CanvasSectionDragZoneUtils.prototype, "_store", {
        get: function () {
            return this._getStore();
        },
        enumerable: true,
        configurable: true
    });
    return CanvasSectionDragZoneUtils;
}());



/***/ }),

/***/ "m0cW":
/*!**************************************************!*\
  !*** ./lib/sp-canvas/common/ControlsInOneRow.js ***!
  \**************************************************/
/*! exports provided: ControlsInOneRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsInOneRow", function() { return ControlsInOneRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ControlsInOneRow_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlsInOneRow.module.scss */ "sscl");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file ControlsInOneRow.tsx
 */




/**
 * ControlsInOneRow aligns the property pane controls in one row
 */
var ControlsInOneRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlsInOneRow, _super);
    function ControlsInOneRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // SPPPLAT VSO#392476: Align the controls in one row in property pane
    // Todo: Remove this class when property pane supports aligning controls in one row
    ControlsInOneRow.prototype.render = function () {
        var _a;
        var cssClass = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["css"])(_ControlsInOneRow_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].controlsInOneRow, (_a = {},
            _a[_ControlsInOneRow_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].spaceInBetween] = this.props.spaceInBetween,
            _a));
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: cssClass }, this.props.children);
    };
    return ControlsInOneRow;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "nRzo":
/*!*************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/CanvasDragIcon.js ***!
  \*************************************************************************/
/*! exports provided: CanvasDragIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDragIcon", function() { return CanvasDragIcon; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_canvas_diff_lib_utilities_getDisambiguatedWebPartName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-canvas-diff/lib/utilities/getDisambiguatedWebPartName */ "qKKy");
/* harmony import */ var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasDragZone.resx */ "AlH4");
var _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasDragZone.resx */ "AlH4", 1);
/* harmony import */ var _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CanvasDragZone.module.scss */ "dczX");
/* harmony import */ var _CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CanvasDragIconUtilities */ "Wzwt");







var CANVAS_ZONE_CONTAINER_CLASS_NAME = 'CanvasZoneContainer';
var CONTROL_ZONE_CLASS_NAME = 'ControlZone';
var CONTROL_ZONE_DRAG_CLASS_NAME = 'ControlZone-drag';
var CONTROL_ZONE_MOVE_CLASS_NAME = 'ControlZone-move';
var CONTROL_ZONE_OVERLAY_CLASS_NAME = 'ControlZone--overlay';
var DATA_CANVAS_CONTROL_TOOLBAR_SELECTOR = '[data-canvas-control="toolbar"]';
var DATA_ELEMENT_KEY = 'data-element-key';
var DRAG_ELEMENT_Z_INDEX = '999';
var DATA_INTERNAL_ID = 'data-internal-id';
var DATA_SP_FEATURE_INSTANCE_ID = 'data-sp-feature-instance-id';
var DRAG_GHOST_LABEL_HOLDER_ID = 'dragGhostLabelHolder';
var DRAG_GHOST_LABEL_ID = 'dragGhostLabel';
var DRAG_ICON_CONTAINER_ID = 'dragIconContainer';
var DRAGGED_ELEMENT_HOLDER_ID = 'draggedElementHolder';
var ICON_CONTAINER_INTERNAL_ID = 'iconContainerControl';
var ICON_INTERNAL_ID = 'iconControl';
var TEXT_INTERNAL_ID = 'textControl';
var LABEL_ELEMENT_PADDING = 8;
var WEB_PART_GHOST_MAX_DIMENSION = 350;
var SECTION_GHOST_MAX_DIMENSION = 600;
var CanvasDragIcon = /** @class */ (function () {
    function CanvasDragIcon() {
        var _this = this;
        this._createDragGhostAnimationFrameId = 0;
        this._dragIconPositionAnimationFrameId = 0;
        this._hasReset = false;
        // Used to prevent opacity from being continually set in trackDragIcon method
        this._isDragElementShowing = true;
        this._isWebPartDrag = true;
        this._moveNotAllowedIconVisible = false;
        var dragIcon = document.querySelector("[" + DATA_INTERNAL_ID + "='" + DRAG_ICON_CONTAINER_ID + "']");
        this._icon = dragIcon || this._getDragContainer();
        this._onDraggedElementMouseUpListener = function (event) { return _this._onDraggedElementMouseUp(event); };
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]();
    }
    CanvasDragIcon._getWebPartByInstanceId = function (id) {
        return document.querySelector('[' + DATA_SP_FEATURE_INSTANCE_ID + '="' + id + '"]');
    };
    CanvasDragIcon._getBackgroundColor = function (element) {
        var el = Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["getSectionParentByClassName"])(element, CANVAS_ZONE_CONTAINER_CLASS_NAME);
        return el ? window.getComputedStyle(el, undefined).getPropertyValue('background-color') : undefined;
    };
    CanvasDragIcon._getWebPartTitle = function (control, manifestMap, cultureName) {
        return control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_2__["CanvasControlType"].WebPartZone
            ? cultureName && manifestMap
                ? Object(_ms_sp_canvas_diff_lib_utilities_getDisambiguatedWebPartName__WEBPACK_IMPORTED_MODULE_3__["getDisambiguatedWebPartName"])(control, manifestMap, cultureName)
                : _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__["WebPartDragGhostDefaultLabel"]
            : _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__["DragIconFallbackRTEText"];
    };
    Object.defineProperty(CanvasDragIcon.prototype, "HTMLIcon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    CanvasDragIcon.prototype.setMoveIconBasedOnControl = function (control, manifestMap, cultureName) {
        if (!control) {
            return;
        }
        this._hasReset = false;
        this._isWebPartDrag = true;
        this._setPreviewGhost(CanvasDragIcon._getWebPartByInstanceId(control.id), CanvasDragIcon._getWebPartTitle(control, manifestMap, cultureName));
    };
    CanvasDragIcon.prototype.setMoveIconBasedOnZone = function (zone) {
        if (!zone) {
            return;
        }
        this._hasReset = false;
        this._isWebPartDrag = false;
        var canvasZoneElement = document.querySelector("[" + DATA_ELEMENT_KEY + "='" + zone.elementKey + "']");
        this._setPreviewGhost(canvasZoneElement, _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__["DragGhostSectionLabel"]);
    };
    CanvasDragIcon.prototype.setDisallowedIcon = function () {
        var iconControl = this._getTagByInternalId(ICON_INTERNAL_ID);
        var textControl = this._getTagByInternalId(TEXT_INTERNAL_ID);
        iconControl.className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getIconClassName"])('StatusErrorFull');
        textControl.innerText = _CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__["DragZoneMoveNotAllowed"];
        if (!this._moveNotAllowedIconVisible) {
            var iconContainerControl = this._getTagByInternalId(ICON_CONTAINER_INTERNAL_ID);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(this._icon);
            iconContainerControl.removeAttribute('style');
            textControl.removeAttribute('style');
            iconContainerControl.classList.add(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].moveNotAllowed);
            textControl.classList.add(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].moveNotAllowed);
            this._moveNotAllowedIconVisible = true;
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayBlock"])(this._icon);
        }
    };
    CanvasDragIcon.prototype.setToPreviousState = function () {
        if (this._moveNotAllowedIconVisible || !this._draggedElementHolderIsVisible) {
            this._showDraggedElementGhost();
        }
        else {
            var iconControl = this._getTagByInternalId(ICON_INTERNAL_ID);
            var textControl = this._getTagByInternalId(TEXT_INTERNAL_ID);
            iconControl.className = this._className;
            textControl.innerText = this._innerText;
        }
    };
    CanvasDragIcon.prototype.reset = function () {
        var _a, _b;
        this._async.cancelAnimationFrame(this._createDragGhostAnimationFrameId);
        this._async.cancelAnimationFrame(this._dragIconPositionAnimationFrameId);
        window.removeEventListener('mouseup', this._onDraggedElementMouseUpListener);
        this._removePlaceholder();
        this._clearDragElementHolder();
        this._setToolbarVisibilities(true);
        this._enableElementsForSectionDrop(true);
        (_a = this._draggedElement) === null || _a === void 0 ? void 0 : _a.removeAttribute('style');
        (_b = this._draggedElement) === null || _b === void 0 ? void 0 : _b.classList.remove(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].draggedElement);
        this._draggedElementHolderIsVisible = false;
        this._moveNotAllowedIconVisible = false;
        this._draggedElement = undefined;
        this._hasReset = true;
    };
    CanvasDragIcon.prototype._getDragContainer = function () {
        var dragIcon = document.createElement('div');
        dragIcon.className = _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dragIconContainer;
        dragIcon.setAttribute(DATA_INTERNAL_ID, DRAG_ICON_CONTAINER_ID);
        var iconContainer = document.createElement('div');
        iconContainer.setAttribute(DATA_INTERNAL_ID, ICON_CONTAINER_INTERNAL_ID);
        iconContainer.className = _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dragIcon;
        var iconElement = document.createElement('i');
        iconElement.setAttribute(DATA_INTERNAL_ID, ICON_INTERNAL_ID);
        iconContainer.appendChild(iconElement);
        var textContainer = document.createElement('div');
        textContainer.className = _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dragText;
        textContainer.classList.add('ms-fontSize-m');
        textContainer.setAttribute(DATA_INTERNAL_ID, TEXT_INTERNAL_ID);
        dragIcon.classList.add(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dragGhostExperienceFlightDragIcon);
        var draggedElementHolder = document.createElement('div');
        draggedElementHolder.className = _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dragElementHolder;
        draggedElementHolder.setAttribute(DATA_INTERNAL_ID, DRAGGED_ELEMENT_HOLDER_ID);
        CanvasDragIcon._dragGhostLabelHolder = document.createElement('div');
        CanvasDragIcon._dragGhostLabelHolder.setAttribute(DATA_INTERNAL_ID, DRAG_GHOST_LABEL_HOLDER_ID);
        CanvasDragIcon._dragGhostLabelHolder.className += _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].labelContainer;
        CanvasDragIcon._dragGhostLabel = document.createElement('span');
        CanvasDragIcon._dragGhostLabel.setAttribute(DATA_INTERNAL_ID, DRAG_GHOST_LABEL_ID);
        CanvasDragIcon._dragGhostLabelHolder.appendChild(CanvasDragIcon._dragGhostLabel);
        draggedElementHolder.style.zIndex = DRAG_ELEMENT_Z_INDEX;
        dragIcon.appendChild(draggedElementHolder);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(iconContainer);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(textContainer);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(draggedElementHolder);
        draggedElementHolder.appendChild(CanvasDragIcon._dragGhostLabelHolder);
        dragIcon.appendChild(iconContainer);
        dragIcon.appendChild(textContainer);
        document.body.appendChild(dragIcon);
        return dragIcon;
    };
    CanvasDragIcon.prototype._setPreviewGhost = function (draggedElement, label) {
        var _this = this;
        this._createDragGhostAnimationFrameId = this._async.requestAnimationFrame(function () {
            _this._createDragGhostElements(draggedElement, label);
            _this._dragIconPositionAnimationFrameId = _this._async.requestAnimationFrame(function () {
                _this._trackDragIcon();
            });
            _this._showDraggedElementGhost();
        });
        window.addEventListener('mouseup', this._onDraggedElementMouseUpListener);
    };
    CanvasDragIcon.prototype._showDraggedElementGhost = function () {
        // if Move not allowed icon was shown before, hide it
        if (this._moveNotAllowedIconVisible) {
            var iconContainerControl = this._getTagByInternalId(ICON_CONTAINER_INTERNAL_ID);
            var textControl = this._getTagByInternalId(TEXT_INTERNAL_ID);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(iconContainerControl);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(textControl);
            if (this._moveNotAllowedIconVisible) {
                iconContainerControl.classList.remove(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].moveNotAllowed);
                textControl.classList.remove(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].moveNotAllowed);
                this._moveNotAllowedIconVisible = false;
            }
        }
        // If drag ghost is already visible, try to avoid set display again
        if (!this._draggedElementHolderIsVisible) {
            var draggedElementHolder = this._getTagByInternalId(DRAGGED_ELEMENT_HOLDER_ID);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(this._icon);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayBlock"])(draggedElementHolder);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayBlock"])(this._icon);
            this._draggedElementHolderIsVisible = true;
        }
    };
    CanvasDragIcon.prototype._createDragGhostElements = function (element, label) {
        this._draggedElement = element;
        var draggedElementHolder = this._getTagByInternalId(DRAGGED_ELEMENT_HOLDER_ID);
        var dragBackground = document.createElement('div');
        var originalWidth = element.offsetWidth;
        var originalHeight = element.offsetHeight;
        var scale = this._getScale(originalWidth, originalHeight);
        var scaledWidth = originalWidth * scale;
        var scaledHeight = originalHeight * scale;
        this._transformDraggedElement(originalWidth, scale);
        dragBackground.style.width = scaledWidth + 'px';
        dragBackground.style.height = scaledHeight + 'px';
        dragBackground.style.pointerEvents = 'none';
        var backgroundColor = CanvasDragIcon._getBackgroundColor(element);
        if (backgroundColor) {
            dragBackground.style.backgroundColor = backgroundColor;
        }
        draggedElementHolder.style.width = scaledWidth + 'px';
        draggedElementHolder.style.height = scaledHeight + 'px';
        draggedElementHolder.prepend(dragBackground);
        this._appendPlaceholder(originalWidth, originalHeight);
        this._updateDragGhostLabel(label, scaledWidth, scaledHeight);
        this._setToolbarVisibilities(false);
        this._enableElementsForSectionDrop(false);
    };
    CanvasDragIcon.prototype._clearDragElementHolder = function () {
        var draggedElementHolder = this._getTagByInternalId(DRAGGED_ELEMENT_HOLDER_ID);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(draggedElementHolder);
        // Drag background was prepended to draggedElementHolder making it the first element, which we remove here
        if (draggedElementHolder.children.length > 1) {
            draggedElementHolder.removeChild(draggedElementHolder.children[0]);
        }
    };
    CanvasDragIcon.prototype._onDraggedElementMouseUp = function (event) {
        event.stopPropagation();
        if (this._hasReset) {
            return;
        }
        this.reset();
    };
    CanvasDragIcon.prototype._trackDragIcon = function () {
        var _this = this;
        var _a;
        var dragIcon = this._getTagByInternalId(DRAGGED_ELEMENT_HOLDER_ID)
            .parentElement;
        var dragElementParent = this._dragElementParent;
        if (this._draggedElement && dragElementParent && dragIcon) {
            var dragIconRect = (_a = dragIcon) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            var padding = 8;
            this._draggedElement.style.left = dragIconRect.left + padding + 'px';
            this._draggedElement.style.top = dragIconRect.top + padding + 'px';
            this._dragIconPositionAnimationFrameId = this._async.requestAnimationFrame(function () {
                _this._trackDragIcon();
            });
            if (!this._isDragElementShowing) {
                this._isDragElementShowing = true;
                // Visibility was hidden before to prevent jumpiness now we make it visible again now that it's placed
                this._draggedElement.style.opacity = '1';
            }
        }
        else {
            cancelAnimationFrame(this._dragIconPositionAnimationFrameId);
        }
    };
    CanvasDragIcon.prototype._appendPlaceholder = function (width, height) {
        var dragElementParent = this._dragElementParent;
        if (dragElementParent) {
            if (!this._placeholder) {
                this._placeholder = document.createElement('div');
            }
            this._placeholder.style.width = width + 'px';
            this._placeholder.style.height = height + 'px';
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayBlock"])(this._placeholder);
            dragElementParent.appendChild(this._placeholder);
        }
    };
    CanvasDragIcon.prototype._removePlaceholder = function () {
        var dragElementParent = this._dragElementParent;
        if (dragElementParent && this._placeholder && dragElementParent.contains(this._placeholder)) {
            dragElementParent.removeChild(this._placeholder);
            Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["setDisplayNone"])(this._placeholder);
        }
    };
    CanvasDragIcon.prototype._transformDraggedElement = function (width, scale) {
        var _a, _b;
        // bundle with dynamic styles to minimize reflow
        var opacityStyle = 'opacity: 0;';
        var scaleString = 'scale(' + scale + ')';
        var transformStyle = ' transform: ' + scaleString + ';';
        // hide jumpy transition from bundledStyles to styles.draggedElement caused by switching to position absolute.
        // opacity turned on again in trackDragIcon
        var bundledStyles = opacityStyle + transformStyle + ' width: ' + width + 'px; ';
        (_a = this._draggedElement) === null || _a === void 0 ? void 0 : _a.classList.add(_CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].draggedElement);
        (_b = this._draggedElement) === null || _b === void 0 ? void 0 : _b.setAttribute('style', bundledStyles);
        this._isDragElementShowing = false;
    };
    CanvasDragIcon.prototype._getScale = function (width, height) {
        var maxDimension = this._isWebPartDrag
            ? WEB_PART_GHOST_MAX_DIMENSION
            : SECTION_GHOST_MAX_DIMENSION;
        var scaleFactor = 0.5;
        if (width * scaleFactor > maxDimension || height * scaleFactor > maxDimension) {
            if (width > height) {
                // transform by width
                scaleFactor = maxDimension / width;
            }
            else {
                // transform by height
                scaleFactor = maxDimension / height;
            }
        }
        return scaleFactor;
    };
    CanvasDragIcon.prototype._setToolbarVisibilities = function (value) {
        var _a, _b, _c;
        var opacity = value ? '1' : '0';
        if (!this._draggedElement) {
            return;
        }
        if (this._isWebPartDrag) {
            var childToolbars = this._draggedElement.querySelectorAll(DATA_CANVAS_CONTROL_TOOLBAR_SELECTOR);
            if (childToolbars && childToolbars.length > 0) {
                this._setOpacityForElements(childToolbars, opacity);
            }
            else {
                var current = this._draggedElement.parentElement;
                while ((_a = current) === null || _a === void 0 ? void 0 : _a.parentElement) {
                    if (current.classList.contains(CONTROL_ZONE_CLASS_NAME)) {
                        var nodes = current.querySelectorAll(DATA_CANVAS_CONTROL_TOOLBAR_SELECTOR);
                        if (((_b = nodes) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                            this._setOpacityForElements(nodes, opacity);
                        }
                        break;
                    }
                    else {
                        current = current.parentElement;
                    }
                }
            }
        }
        else {
            // check canvas toolbar
            var canvasToolbars = this._draggedElement.querySelectorAll(DATA_CANVAS_CONTROL_TOOLBAR_SELECTOR);
            if (((_c = canvasToolbars) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                this._setOpacityForElements(canvasToolbars, opacity);
            }
        }
    };
    CanvasDragIcon.prototype._enableElementsForSectionDrop = function (value) {
        if (this._isWebPartDrag || !this._draggedElement) {
            return;
        }
        var controlZoneMove = this._draggedElement.getElementsByClassName(CONTROL_ZONE_MOVE_CLASS_NAME)[0];
        var controlZoneDrag = this._draggedElement.getElementsByClassName(CONTROL_ZONE_DRAG_CLASS_NAME)[0];
        var controlZonePosition = this._draggedElement.getElementsByClassName(CONTROL_ZONE_OVERLAY_CLASS_NAME)[0];
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["toggleClass"])(controlZoneMove, _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].disabledControlZoneElement, !value);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["toggleClass"])(controlZoneDrag, _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].disabledControlZoneElement, !value);
        Object(_CanvasDragIconUtilities__WEBPACK_IMPORTED_MODULE_6__["toggleClass"])(controlZonePosition, _CanvasDragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hidePseudoElement, !value);
    };
    CanvasDragIcon.prototype._updateDragGhostLabel = function (label, scaledWidth, scaledHeight) {
        if (!CanvasDragIcon._dragGhostLabel) {
            return;
        }
        CanvasDragIcon._dragGhostLabel.textContent = label;
        var ariaLabel = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_1__["StringHelper"].format(_CanvasDragZone_resx__WEBPACK_IMPORTED_MODULE_4__["DragGhostAriaLabel"], label);
        CanvasDragIcon._dragGhostLabel.setAttribute('aria-label', ariaLabel);
        this._async.setTimeout(function () {
            if (CanvasDragIcon._dragGhostLabelHolder) {
                // Center label holder based on scaled width of drag
                var left = Math.round((scaledWidth - CanvasDragIcon._dragGhostLabelHolder.offsetWidth) * 0.5) +
                    LABEL_ELEMENT_PADDING;
                var style = 'top: ' + scaledHeight + 'px; left: ' + left + 'px;';
                CanvasDragIcon._dragGhostLabelHolder.setAttribute('style', style);
            }
        }, 0);
    };
    CanvasDragIcon.prototype._getTagByInternalId = function (internalId) {
        return this._icon.querySelector("[" + DATA_INTERNAL_ID + "='" + internalId + "']");
    };
    Object.defineProperty(CanvasDragIcon.prototype, "_dragElementParent", {
        get: function () {
            return this._draggedElement ? this._draggedElement.parentElement : undefined;
        },
        enumerable: true,
        configurable: true
    });
    CanvasDragIcon.prototype._setOpacityForElements = function (nodes, opacity) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].style.opacity = opacity;
        }
    };
    return CanvasDragIcon;
}());



/***/ }),

/***/ "ogac":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/SPRteDataLayer.js ***!
  \****************************************************************/
/*! exports provided: withDataControlled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDataControlled", function() { return withDataControlled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The high order component to wrap SPRte to overcome the performance challenges of re-rendering
 * when data is updated from the RTE components.
 *
 * Challenge of doing it inside RTE components:
 * Previously we were doing the [React controlled component](https://reactjs.org/docs/forms.html#controlled-components)
 * pattern where any data update should notify parent and trigger a re-render to keep the props update-to-date.
 * This is to make sure in `componentDidUpdate` we can compare props with previous props to know if anything needs to
 * be updated.
 *
 * However, re-rendering costs a lot when canvas is large. We were re-rendering the whole CanvasComponent in
 * the begining. But it turns out even re-rendering single RTE instance per typing is expensive enough.
 *
 * While `componentWillReceiveProps` is discoraged, now there is no easy way in a React component class to know how
 * re-render is triggered among 3 typical ways: Re-render by parent, state updates, or forceUpdate(). In order to set
 * the RTE data when the data is updated from upper level (e.g. through undo-redo), we need to know whether the data
 * is different than the one that is currently rendered at the exact time the component is re-rendered by its parent.
 *
 * Thus, we extract and decouple this logic out into this high order component. We're recording the latest data by
 * injecting `onChange` callback. Since this functional component has no state, it will render ONLY when it is
 * re-rendered by its parent. Then we use React `useEffect` hook to invoke the SPRte API to try update the data.
 *
 * @param component - The RTE component class that needs to be wrapped for data controlling.
 */
function withDataControlled(// tslint:disable-line:export-name
component) {
    var innerHTML;
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
        function handleChange(newControl, newSelection) {
            if (newControl.innerHTML !== innerHTML) {
                innerHTML = newControl.innerHTML;
            }
            props.onChange(newControl, newSelection);
        }
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            if (ref && ref.current) {
                // If component is rendered by parent, try to update the data after the rendering.
                ref.current.tryUpdate(props.innerHTML, props.selection);
            }
        });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { ref: ref, onChange: handleChange }));
    });
}


/***/ }),

/***/ "pL8B":
/*!****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/sprte/index-deferred.js ***!
  \****************************************************************/
/*! exports provided: SPRte, SPRteTouchDevice, withDataControlled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPRte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPRte */ "Lb2a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRte", function() { return _SPRte__WEBPACK_IMPORTED_MODULE_0__["SPRte"]; });

/* harmony import */ var _SPRteTouchDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPRteTouchDevice */ "HCd6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRteTouchDevice", function() { return _SPRteTouchDevice__WEBPACK_IMPORTED_MODULE_1__["SPRteTouchDevice"]; });

/* harmony import */ var _SPRteDataLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPRteDataLayer */ "ogac");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDataControlled", function() { return _SPRteDataLayer__WEBPACK_IMPORTED_MODULE_2__["withDataControlled"]; });






/***/ }),

/***/ "pSH/":
/*!*************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolbox/RteToolboxItemDataStrings.resx ***!
  \*************************************************************************************/
/*! exports provided: TextWebPartDisplayName, TextWebpartDescription, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TextWebPartDisplayName\":\"Text\",\"TextWebpartDescription\":\"Add and format text and tables.\"}");

/***/ }),

/***/ "q4KC":
/*!*****************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDragZone/DraggingExperience.module.scss.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DraggingExperience.module.css */ "fo9t");
var styles = {
    hideElementOnDrag: 'v_f_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "qKKy":
/*!***********************************************************!*\
  !*** .-diff/lib/utilities/getDisambiguatedWebPartName.js ***!
  \***********************************************************/
/*! exports provided: getDisambiguatedWebPartName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisambiguatedWebPartName", function() { return getDisambiguatedWebPartName; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);

function getDisambiguatedWebPartName(control, manifestMap, cultureName) {
    var manifest = manifestMap.get(control.webPartId);
    // The title persisted with canvas control which matches the locale when the web part is added.
    // This title won't reflect the culture of the page.
    var persistedTitle = control.webPartData.title;
    if (!manifest || !manifest.preconfiguredEntries || !manifest.preconfiguredEntries.length) {
        // Pick the persisted title when manifest is not available.
        // It might differ with the current culture but we don't have other options.
        return persistedTitle;
    }
    var entryLength = manifest.preconfiguredEntries.length;
    var matchedEntryIndex = 0;
    if (entryLength > 1) {
        var _loop_1 = function (entryIndex) {
            // This contains the web part title in all supported locales.
            var localizedTitle = manifest.preconfiguredEntries[entryIndex].title;
            var isWebPartCreatedFromThisEntry = Object.keys(localizedTitle).some(function (locale) { return localizedTitle[locale] === persistedTitle; });
            if (isWebPartCreatedFromThisEntry) {
                matchedEntryIndex = entryIndex;
                return "break";
            }
        };
        // Figure out which entry matches the current web part.
        for (var entryIndex = 0; entryIndex < entryLength; entryIndex++) {
            var state_1 = _loop_1(entryIndex);
            if (state_1 === "break")
                break;
        }
    }
    // This contains the web part title in all supported locales.
    var matchedLocalizedTitle = manifest.preconfiguredEntries[matchedEntryIndex].title;
    var localeInRespectToPageCulture = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["find"])(Object.keys(matchedLocalizedTitle), function (locale) { return locale.toLowerCase() === cultureName; });
    return ((localeInRespectToPageCulture && matchedLocalizedTitle[localeInRespectToPageCulture]) || persistedTitle);
}


/***/ }),

/***/ "sscl":
/*!**************************************************************!*\
  !*** ./lib/sp-canvas/common/ControlsInOneRow.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ControlsInOneRow.module.css */ "F9/O");
var styles = {
    controlsInOneRow: 'ay_l_32f825c4',
    spaceInBetween: 'az_l_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "svZL":
/*!**************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/canvasZonePropertyPaneStrings.resx ***!
  \**************************************************************************************************/
/*! exports provided: SectionPropertyPaneTitle, SectionPropertyPaneColumnGroupName, SectionBackgroundPropertyColumnGroupName, SectionBackgroundNeutralButtonLabel, SectionBackgroundSoftButtonLabel, SectionBackgroundStrongButtonLabel, SectionBackgroundNoneButtonLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SectionPropertyPaneTitle\":\"Section\",\"SectionPropertyPaneColumnGroupName\":\"Layout options\",\"SectionBackgroundPropertyColumnGroupName\":\"Section background\",\"SectionBackgroundNeutralButtonLabel\":\"Neutral\",\"SectionBackgroundSoftButtonLabel\":\"Soft\",\"SectionBackgroundStrongButtonLabel\":\"Strong\",\"SectionBackgroundNoneButtonLabel\":\"None\"}");

/***/ }),

/***/ "tWVl":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZoneEmphasisButton.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".y_h_32f825c4{width:66px;height:66px}.y_h_32f825c4 i{font-size:20px}.y_h_32f825c4.z_h_32f825c4{outline:1px solid}.y_h_32f825c4.aa_h_32f825c4{box-shadow:inset 0 0 0 4px \"[theme:neutralTertiaryAlt, default: #c8c6c4]\",inset 0 0 0 8px \"[theme:white, default: #ffffff]\"}.y_h_32f825c4:hover{box-shadow:inset 0 0 0 4px \"[theme:neutralLight, default: #edebe9]\",inset 0 0 0 8px \"[theme:white, default: #ffffff]\"}.y_h_32f825c4:focus{box-shadow:inset 0 0 0 1px \"[theme:neutralSecondary, default: #605e5c]\",inset 0 0 0 5px \"[theme:neutralTertiaryAlt, default: #c8c6c4]\",inset 0 0 0 9px \"[theme:white, default: #ffffff]\"}", ""]);


/***/ }),

/***/ "v9l7":
/*!********************************************************!*\
  !*** ./lib/sp-canvas/webPartFactory/WebPartFactory.js ***!
  \********************************************************/
/*! exports provided: WebPartFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartFactory", function() { return WebPartFactory; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_content_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/content-handler */ "/qUZ");
/* harmony import */ var _ms_content_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_content_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/KillSwitches */ "17t3");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */




var WebPartFactory = /** @class */ (function () {
    function WebPartFactory() {
    }
    /**
     * Given the data of a web part control, return whether the web part has finished adding phrase according
     * to its properties.
     * Ideally, web part should only make one time change to the property bag, but there're exceptions.
     * Note: This is implicit logic between undo-redo and web part properties. If web part changes its property structure,
     * This will return falsy results which will downgrade undo-redo experience. But there will not be data loss since it
     * only happens to newly added web part with falsy `addedFromPersistedData` and manual save/publish action will force
     * all the controls to be serialized properly.
     * @param control - The web part control data.
     */
    WebPartFactory.shouldExcludeFromWebPartUpdate = function (control) {
        var addedFromPersistedData = control.addedFromPersistedData, webPartManifest = control.webPartManifest;
        if (!webPartManifest || addedFromPersistedData) {
            return false;
        }
        switch (webPartManifest.id) {
            case WebPartFactory._getManifestId('Image'):
                // Image web part is added as a blob and it is still uploading the image.
                // It will setDirty once image is uploaded or failed upload.
                return !!control.webPartData.properties.imageBlob;
            case WebPartFactory._getManifestId('YouTube'):
                // When Embed web part is added, it generates and stores cached properties.
                // The absence of the cached data means Embed web part is still in the adding phrase.
                return !control.webPartData.properties.cachedEmbedCode;
            case WebPartFactory._getManifestId('Document'):
                // When Document web part is added, it uploads the file and generates metadata for this file.
                // The absence of metadata means the Document web part is still in the adding pharse.
                return !control.webPartData.properties.uniqueId;
            default:
                return false;
        }
    };
    WebPartFactory.getWebPart = function (data, store) {
        var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ContentHandler.getWebPart', !Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["logEngagementKSActivated"])());
        var webPartType = _ms_content_handler__WEBPACK_IMPORTED_MODULE_2__["ContentHandler"].getWebPartType(data);
        if (webPartType === 'None') {
            monitor.writeExpectedFailure("FileTypeNotSupported" /* FILE_TYPE_NOT_SUPPORTED */, 
            /* error */ undefined, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["logEngagementKSActivated"])() ? undefined : { webPartType: webPartType });
            return { webPartResultType: "FileTypeNotSupported" /* FILE_TYPE_NOT_SUPPORTED */ };
        }
        var manifestId = this._getManifestId(webPartType);
        var itemPropsWebPart = store
            .getEditModule('actions')
            .getToolBoxItem(manifestId);
        if (!itemPropsWebPart) {
            monitor.writeUnexpectedFailure("CanvasStoreError" /* CANVAS_STORE_ERROR */, 
            /* error */ undefined, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["logEngagementKSActivated"])() ? { manifestId: manifestId } : { manifestId: manifestId, webPartType: webPartType });
            return { webPartResultType: "CanvasStoreError" /* CANVAS_STORE_ERROR */ };
        }
        itemPropsWebPart.webPartData.properties = _ms_content_handler__WEBPACK_IMPORTED_MODULE_2__["ContentHandler"].getWebPartProperties(webPartType, data);
        if (!itemPropsWebPart.webPartData.properties) {
            monitor.writeUnexpectedFailure("UnexpectedError" /* UNEXPECTED_ERROR */, 
            /* error */ undefined, Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["logEngagementKSActivated"])() ? { manifestId: manifestId } : { manifestId: manifestId, webPartType: webPartType });
            return { webPartResultType: "UnexpectedError" /* UNEXPECTED_ERROR */ };
        }
        monitor.writeSuccess(Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["logEngagementKSActivated"])() ? undefined : { webPartType: webPartType });
        return { webPartDataProps: itemPropsWebPart, webPartResultType: "SUCCESS" /* SUCCESS */ };
    };
    WebPartFactory._getManifestId = function (webPartType) {
        return WebPartFactory._webPartToManifestDict.get(webPartType).toString();
    };
    WebPartFactory._webPartToManifestDict = new Map([
        ['Image', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d1d91016-032f-456d-98a4-721247c305e8')],
        ['YouTube', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('544dd15b-cf3c-441b-96da-004d5a8cea1d')],
        ['Document', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('b7dd04e1-19ce-4b24-9132-b60a1c2b910d')],
        ['LinkPreview', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('6410b3b6-d440-4663-8744-378976dc041e')],
        ['Stream', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('275c0095-a77e-4f6d-a2a0-6a7626911518')]
    ]);
    return WebPartFactory;
}());



/***/ }),

/***/ "vclg":
/*!*******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasToolboxHint/CanvasToolboxHint.js ***!
  \*******************************************************************************/
/*! exports provided: CanvasToolboxHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasToolboxHint", function() { return CanvasToolboxHint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../a11y/CanvasA11yConstants */ "AqUB");
/* harmony import */ var _common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/CanvasExperiments */ "CXHJ");
/* harmony import */ var _common_CanvasAlignmentStyles_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/CanvasAlignmentStyles.styles */ "PBv6");
/* harmony import */ var _LayoutCanvasToolboxHint_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayoutCanvasToolboxHint.scss */ "5zIm");
/* harmony import */ var _CanvasToolboxHint_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CanvasToolboxHint.styles */ "h4ae");












var CanvasToolboxHint = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasToolboxHint, _super);
    function CanvasToolboxHint(props) {
        var _this = _super.call(this, props) || this;
        _this._toolTipRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._openTooltip = function () {
            _this._toggleTooltip(true /* isTooltipVisible */);
        };
        _this._closeTooltip = function () {
            _this._toggleTooltip(false /* isTooltipVisible */);
        };
        _this._handlePlusButtonRef = function (ref) {
            // Force re-render tooltip host once plus button is mounted or it won't be anchored correctly
            if (ref && !_this.state.plusButtonRendered) {
                _this.setState({
                    plusButtonRendered: true
                });
            }
            _this._canvasToolPlusButton = ref;
        };
        _this._handleClick = function () {
            var store = _this.props.store;
            store.selectedControlId = undefined;
            if (_this.props.layout && _this.props.layout.zoneIndex) {
                store.selectedZoneIndex = _this.props.layout.zoneIndex;
            }
            var logPrefix = _this._isWebpartHint ? 'WebPart' : 'Section';
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent(logPrefix + "Hint.Click");
            if (_this._canvasToolPlusButton) {
                store.getEditModule('actions').openToolbox(_this._isWebpartHint ? "WebPart" /* WebPart */ : "Section" /* Section */, _this.props.layout, _this._canvasToolPlusButton, 
                // Use the close handler to hide the hint
                _this._handleToolboxClose);
                if (_this._isWebpartHint) {
                    _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["SPFREUtility"].dismissFRECallout('sp-fre-canvas-4');
                }
            }
            // @todo #427215
            // It is using async chain to open/close the toolbox.
            // We defer to set ToolboxHint visible to ensure it is really visible.
            // It will be resolved after adopt ToolboxHint inside the async flow.
            setTimeout(function () {
                return _this.setState({
                    isVisible: true
                });
            });
        };
        _this._handleToolboxClose = function () {
            _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["SPFREUtility"].dismissFRECallout(_this._isWebpartHint ? 'sp-fre-canvas-5' : 'sp-fre-canvas-1');
            if (!_this.props.isVisible) {
                _this.setState({
                    isVisible: false
                });
            }
        };
        _this.state = _this._getState(props);
        return _this;
    }
    CanvasToolboxHint._offsetRight = function (elem, withVerticalSection) {
        var clientWidth = elem.clientWidth, offsetLeft = elem.offsetLeft, parentElement = elem.parentElement;
        var offsetRight;
        if (!parentElement || !parentElement.offsetParent) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_TraceLogger"].logError(CanvasToolboxHint._logSource, new Error('_offsetRight: element is detached'));
            return 0;
        }
        if (withVerticalSection) {
            offsetRight =
                parentElement.offsetParent.clientWidth - parentElement.clientWidth - parentElement.offsetLeft;
        }
        else {
            offsetRight =
                parentElement.offsetParent.clientWidth - clientWidth - parentElement.offsetLeft - offsetLeft;
        }
        return offsetRight;
    };
    CanvasToolboxHint._isTouchEnabled = function () {
        var os = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_BrowserDetection"].getBrowserInformation().os;
        return os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_OS"].Android || os === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_OS"].IOS;
    };
    CanvasToolboxHint.prototype.componentDidMount = function () {
        this._setFocus();
    };
    CanvasToolboxHint.prototype.componentDidUpdate = function (prevProps) {
        this._setFocus();
        if (this.props.isVSPresent !== prevProps.isVSPresent ||
            this.props.store.canvasFields.isVerticalSectionPresent) {
            var cachedOffset = this._offset; // costly reflow calculation
            if (this.state.offset !== cachedOffset) {
                this.setState({
                    offset: cachedOffset
                });
            }
        }
    };
    CanvasToolboxHint.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.isVisible !== this.props.isVisible) {
            this.setState(this._getState(nextProps));
        }
    };
    CanvasToolboxHint.prototype.render = function () {
        var _a = this.props, adjacentZoneState = _a.adjacentZoneState, ariaLabel = _a.ariaLabel, layout = _a.layout, shouldCenterAlign = _a.shouldCenterAlign, theme = _a.theme, type = _a.type;
        var emphasisClassNames;
        if (theme) {
            emphasisClassNames = _CanvasToolboxHint_styles__WEBPACK_IMPORTED_MODULE_11__["CanvasToolboxHintStyles"].getClassNames({
                root: 'CanvasToolboxHintEmphasis',
                theme: theme
            });
        }
        var store = this.props.store;
        var toolboxOpenPosition = store.canvasFields.toolboxOpenPosition;
        var isZoneSelected = !!toolboxOpenPosition && toolboxOpenPosition.sectionIndex === layout.sectionIndex;
        var hintClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])('CanvasToolboxHint', emphasisClassNames ? emphasisClassNames.root : undefined, {
            'is-visible': this.state.isVisible,
            'zone-selected': adjacentZoneState === 3 /* Selected */ || isZoneSelected,
            'zone-active': adjacentZoneState === 2 /* Active */
        });
        var hintButtonWrapperClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])('CanvasToolboxHint-plusButtonWrapper', {
            centerAlign: !!shouldCenterAlign
        });
        var buttonTypeClassName;
        switch (type) {
            case 1 /* Zone */:
                hintClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])(hintClassName, 'ZoneHint');
                buttonTypeClassName = 'CanvasToolboxHint-plusButtonZone';
                if (_common_CanvasExperiments__WEBPACK_IMPORTED_MODULE_8__["Experiments"].isSectionAddEmphasisExperimentEnabled()) {
                    buttonTypeClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])(buttonTypeClassName, 'emphasized');
                }
                break;
            case 2 /* Section */:
                hintClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])(hintClassName, 'SectionHint');
                buttonTypeClassName = 'CanvasToolboxHint-plusButtonSection';
                break;
            case 0 /* None */:
            default:
                break;
        }
        var plusButtonClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])('CanvasToolboxHint-plusButton', buttonTypeClassName, emphasisClassNames ? emphasisClassNames.plusButton : undefined);
        var fontIcon = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["FontIcon"], { iconName: 'Add' });
        var alignedClassNames;
        if (type === 1 /* Zone */) {
            alignedClassNames = shouldCenterAlign
                ? _common_CanvasAlignmentStyles_styles__WEBPACK_IMPORTED_MODULE_9__["CanvasAlignmentStyles"].getHintClassNames({
                    root: hintClassName,
                    offset: -this.state.offset
                })
                : undefined;
        }
        if (store.displayMode !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["DisplayMode"].Edit) {
            return false;
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { "aria-haspopup": true, "aria-label": ariaLabel, className: alignedClassNames ? alignedClassNames.root : hintClassName, "data-automation-id": this._isWebpartHint ? 'toolboxHint-webPart' : 'toolboxHint-zone', "data-drag-hidden": 'true', "data-sp-a11y-class": _a11y_CanvasA11yConstants__WEBPACK_IMPORTED_MODULE_7__["canvasA11yClasses"].toolboxHint, onClick: this._handleClick, onFocus: this._openTooltip, onBlur: this._closeTooltip },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: hintButtonWrapperClassName },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: plusButtonClassName, ref: this._handlePlusButtonRef }, !CanvasToolboxHint._isTouchEnabled() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["TooltipHost"], { content: ariaLabel, calloutProps: { gapSpace: 1 }, directionalHint: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].rightCenter, delay: 2, componentRef: this._toolTipRef }, fontIcon)) : (fontIcon)))));
        }
    };
    Object.defineProperty(CanvasToolboxHint.prototype, "_offset", {
        get: function () {
            if (this._domNode) {
                if (Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["getRTL"])()) {
                    return CanvasToolboxHint._offsetRight(this._domNode, true);
                }
                else if (this._domNode.parentElement) {
                    return this._domNode.parentElement.offsetLeft;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    CanvasToolboxHint.prototype.focus = function () {
        var _this = this;
        /**
         * Setting a 0ms timeout to let the browser drawing finish before we set focus to an element.
         * Chrome's event queue lags more than IE's in this particular instance. Without this timeout
         * the focus will not be correct set in Chrome.
         */
        window.setTimeout(function () {
            if (_this._domNode) {
                _this._domNode.focus();
            }
        }, 0);
    };
    CanvasToolboxHint.prototype._setFocus = function () {
        this._domNode = react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](this);
        if (this.props.shouldFocus) {
            this.focus();
        }
    };
    CanvasToolboxHint.prototype._getState = function (props) {
        var nextOffset = this.state && this.state.offset;
        // Only recalc the offset if visible and with vertical section
        if (props.store.canvasFields.isVerticalSectionPresent && props.isVisible) {
            nextOffset = this._offset;
        }
        return {
            isVisible: !!props.isVisible,
            plusButtonRendered: false,
            offset: nextOffset
        };
    };
    CanvasToolboxHint.prototype._toggleTooltip = function (isTooltipVisible) {
        if (this._toolTipRef.current) {
            if (isTooltipVisible) {
                this._toolTipRef.current.show();
            }
            else {
                this._toolTipRef.current.dismiss();
            }
        }
    };
    Object.defineProperty(CanvasToolboxHint.prototype, "_isWebpartHint", {
        get: function () {
            return !!(this.props.layout && this.props.layout.sectionIndex);
        },
        enumerable: true,
        configurable: true
    });
    CanvasToolboxHint._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogSource"].create('CanvasToolboxHint');
    return CanvasToolboxHint;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "ws9o":
/*!*******************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZoneEmphasisPicker.js ***!
  \*******************************************************************************************/
/*! exports provided: CanvasZoneEmphasisPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasZoneEmphasisPicker", function() { return CanvasZoneEmphasisPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CanvasZoneEmphasisButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CanvasZoneEmphasisButton */ "xIUr");
/* harmony import */ var _common_ControlsInOneRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ControlsInOneRow */ "m0cW");
/* harmony import */ var _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvasZonePropertyPaneStrings.resx */ "svZL");
var _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./canvasZonePropertyPaneStrings.resx */ "svZL", 1);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file EmphasisColorPicker.tsx
 */







var PICKER_LABEL_ID = 'emphasis-picker';
/**
 * CanvasZoneEmphasisPicker as color picker component for property pane to customize zone emphasis
 */
var CanvasZoneEmphasisPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasZoneEmphasisPicker, _super);
    function CanvasZoneEmphasisPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleColorChanged = function (color) {
            _this.props.onColorChanged(color);
        };
        return _this;
    }
    /**
     * Renders CanvasZoneEmphasisPicker
     */
    CanvasZoneEmphasisPicker.prototype.render = function () {
        var buttons = [
            this._getCanvasSectionBackgroundButton(_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__["SectionBackgroundNoneButtonLabel"], 'noneBackgroundColorButton', _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_2__["SPVariantThemeType"].None),
            this._getCanvasSectionBackgroundButton(_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__["SectionBackgroundNeutralButtonLabel"], 'neutralBackgroundColorButton', _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_2__["SPVariantThemeType"].Neutral),
            this._getCanvasSectionBackgroundButton(_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__["SectionBackgroundSoftButtonLabel"], 'softBackgroundColorButton', _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_2__["SPVariantThemeType"].Soft),
            this._getCanvasSectionBackgroundButton(_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__["SectionBackgroundStrongButtonLabel"], 'strongBackgroundColorButton', _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_2__["SPVariantThemeType"].Strong)
        ];
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { role: 'radiogroup', "aria-labelledby": PICKER_LABEL_ID },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Label"], { id: PICKER_LABEL_ID }, _canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_6__["SectionBackgroundPropertyColumnGroupName"]),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusZone"], { direction: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["FocusZoneDirection"].horizontal, isCircularNavigation: true },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_common_ControlsInOneRow__WEBPACK_IMPORTED_MODULE_5__["ControlsInOneRow"], { spaceInBetween: true }, buttons))));
    };
    CanvasZoneEmphasisPicker.prototype._getCanvasSectionBackgroundButton = function (title, id, themeType) {
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_CanvasZoneEmphasisButton__WEBPACK_IMPORTED_MODULE_4__["CanvasZoneEmphasisButton"], { key: title, title: title, id: id, themeType: themeType, isColorActive: themeType === this.props.activeColor, onButtonClick: this._handleColorChanged, onFocus: this._handleColorChanged }));
    };
    return CanvasZoneEmphasisPicker;
}(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "xIUr":
/*!*******************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/CanvasZoneEmphasisButton.js ***!
  \*******************************************************************************************/
/*! exports provided: CanvasZoneEmphasisButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasZoneEmphasisButton", function() { return CanvasZoneEmphasisButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CanvasZoneEmphasisButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CanvasZoneEmphasisButton.module.scss */ "/M9o");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file CanvasZoneEmphasisButton.tsx
 */








/**
 * Represents a button for CanvasZoneEmphasisButton. This represents property pane button
 * for customizing canvas zone emphasis
 */
var CanvasZoneEmphasisButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CanvasZoneEmphasisButton, _super);
    /**
     * Constructs an instance of CanvasZoneEmphasisButton
     */
    function CanvasZoneEmphasisButton(props) {
        var _this = _super.call(this, props) || this;
        _this._handleFocus = function () {
            if (_this.props.onFocus) {
                _this.props.onFocus(_this.props.themeType);
            }
        };
        _this._handleClick = function () {
            var _a = _this.props, themeType = _a.themeType, onButtonClick = _a.onButtonClick;
            onButtonClick(themeType);
        };
        _this.state = {
            emphasisTheme: _this.props.theme
        };
        return _this;
    }
    CanvasZoneEmphasisButton.prototype.componentDidMount = function () {
        this._updateEmphasisTheme(this.props.theme); // Todo#661360 Fix workaround left-over
    };
    CanvasZoneEmphasisButton.prototype.UNSAFE_componentWillUpdate = function (nextProps) {
        if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.props.theme, nextProps.theme)) {
            this._updateEmphasisTheme(nextProps.theme); // Todo#661360 Fix workaround left-over
        }
    };
    /**
     * Renders the color picker group for CanvasZoneEmphasisButton
     */
    CanvasZoneEmphasisButton.prototype.render = function () {
        var _a;
        var _b = this.props, id = _b.id, isColorActive = _b.isColorActive, themeType = _b.themeType, theme = _b.theme, title = _b.title;
        var classNames;
        if (this.state.emphasisTheme) {
            classNames = _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasEmphasisStyles"].getClassNames({
                root: 'Emphasis',
                theme: this.state.emphasisTheme
            });
        }
        var buttonClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["css"])(_CanvasZoneEmphasisButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].emphasisPickerButton, classNames && classNames.root, (_a = {},
            _a[_CanvasZoneEmphasisButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].isSelected] = isColorActive,
            _a[_CanvasZoneEmphasisButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].isNone] = themeType === _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].None,
            _a));
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["Customizer"], { settings: { theme: theme }, key: title },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TooltipHost"], { content: title, id: id, calloutProps: { gapSpace: 0 } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { "aria-describedby": id, className: buttonClassName, "data-automation-id": id, iconProps: { iconName: 'Font' }, onClick: this._handleClick, onFocus: this._handleFocus, role: 'radio', "aria-checked": isColorActive }))));
    };
    CanvasZoneEmphasisButton.prototype._updateEmphasisTheme = function (theme) {
        var themeType = this.props.themeType;
        this.setState({
            emphasisTheme: Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["getVariantThemeForEmphasis"])(themeType, theme)
        });
    };
    CanvasZoneEmphasisButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["customizable"])('CanvasZoneEmphasisButton', ['theme'])
    ], CanvasZoneEmphasisButton);
    return CanvasZoneEmphasisButton;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "xWOd":
/*!**********************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/index-deferred.js ***!
  \**********************************************************/
/*! exports provided: CanvasStoreEditActions, ControlZoneEditEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvasStore_CanvasStoreEditActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasStore/CanvasStoreEditActions */ "DNmk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasStoreEditActions", function() { return _canvasStore_CanvasStoreEditActions__WEBPACK_IMPORTED_MODULE_0__["CanvasStoreEditActions"]; });

/* harmony import */ var _controlZone_ControlZoneEditEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlZone/ControlZoneEditEvents */ "XPNV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlZoneEditEvents", function() { return _controlZone_ControlZoneEditEvents__WEBPACK_IMPORTED_MODULE_1__["ControlZoneEditEvents"]; });



// VSO 883091: add all canvas edit modules


/***/ })

}]);
//# sourceMappingURL=chunk.sp-canvas-edit_[locale].js.map