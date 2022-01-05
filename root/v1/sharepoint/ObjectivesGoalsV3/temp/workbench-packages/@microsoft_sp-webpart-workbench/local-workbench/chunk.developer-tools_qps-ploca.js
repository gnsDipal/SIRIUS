(window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] = window["webpackJsonp_1c6c9123_7aac_41f3_a376_3caea41ed83f_1_12_1"] || []).push([["developer-tools"],{

/***/ "+k5P":
/*!*******************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/LoadingOrErrorModule/LoadingOrErrorModule.resx ***!
  \*******************************************************************************************************/
/*! exports provided: developerToolsTabLoadingText, developerToolsTabLoadingUnknownError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"developerToolsTabLoadingText\":\"Ĺōàďĩńĝ...\",\"developerToolsTabLoadingUnknownError\":\"Ũńķńōŵń ēŕŕōŕ ĺōàďĩńĝ ďēvēĺōƥēŕ ţōōĺś mōďũĺē.\"}");

/***/ }),

/***/ "/aa2":
/*!************************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceHeader/PerformanceLegend/PerformanceLegend.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PerformanceLegend.module.scss */ "9llX");
/* harmony import */ var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../PerformanceDisplay.resx */ "yWXA");
var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceLegend.tsx
 * The legend for the performance graph that shows what the different colored bars mean
 */




var PerformanceLegend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PerformanceLegend, _super);
    function PerformanceLegend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PerformanceLegend.prototype.render = function () {
        var legendBlue = [_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].colorSquare, _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].msBlue].join(' ');
        var legendPurple = [_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].colorSquare, _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].msPurpleLight].join(' ');
        var legendDarkBlue = [_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].colorSquare, _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].msBlueMid].join(' ');
        var legendTeal = [_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].colorSquare, _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].msTealLight].join(' ');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].legend },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].legendCells },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: legendBlue }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3__["ModulesLoadedLegendLabel"])),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].legendCells },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: legendPurple }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3__["InitializationLegendLabel"])),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].legendCells },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: legendDarkBlue }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3__["RenderTimeLegendLabel"])),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].legendCells },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: legendTeal }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_3__["DataFetchLegendLabel"]))))));
    };
    return PerformanceLegend;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PerformanceLegend);


/***/ }),

/***/ "1F0B":
/*!********************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceList.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Stores/TraceDisplayStore */ "wTRJ");
/* harmony import */ var _TraceListHeader_TraceListHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TraceListHeader/TraceListHeader */ "EasO");
/* harmony import */ var _TraceListItem_TraceListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TraceListItem/TraceListItem */ "sHC+");
/* harmony import */ var _CsvRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsvRenderer */ "jD7m");
/* harmony import */ var _TraceList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TraceList.module.scss */ "fk6i");
/* harmony import */ var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../TraceDisplay.resx */ "Rspa");
var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../TraceDisplay.resx */ "Rspa", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceList.tsx
 *
 * Sub-component for TraceDisplay. This component displays the log
 * events from the trace in table form.
 * It will show the name and the level, message, scope, source.
 */








var TraceList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TraceList, _super);
    function TraceList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleButtonClick = function () {
            Object(_CsvRenderer__WEBPACK_IMPORTED_MODULE_5__["triggerCsvDownload"])(_this.props.allTraces);
        };
        return _this;
    }
    TraceList.prototype.render = function () {
        var _this = this;
        var idCounter = 0;
        var displayedTraces = [];
        var levelFilters = this.props.filters.level;
        var scopeFilters = this.props.filters.scope;
        var sourceFilters = this.props.filters.source;
        if (!this.props.allTraces) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TraceListHeader_TraceListHeader__WEBPACK_IMPORTED_MODULE_3__["default"], { filters: this.props.filters }),
                _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__["EmptyTraceData"]));
        }
        this.props.allTraces.forEach(function (trace) {
            if (levelFilters[_Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_2__["LogLevel"][trace.level]] === false) {
                return;
            }
            if (trace.scope) {
                _this._addFilterLabel(trace.scope.id, scopeFilters);
                if (!scopeFilters[trace.scope.id]) {
                    return;
                }
            }
            else if (scopeFilters.none === false) {
                return;
            }
            if (trace.source) {
                _this._addFilterLabel(trace.source, sourceFilters);
                if (!sourceFilters[trace.source]) {
                    return;
                }
            }
            displayedTraces.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TraceListItem_TraceListItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: idCounter, id: idCounter, trace: trace }));
            idCounter++;
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TraceList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this._handleButtonClick }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__["ExportCSVButtonLabel"]),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TraceListHeader_TraceListHeader__WEBPACK_IMPORTED_MODULE_3__["default"], { filters: this.props.filters }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: _TraceList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].traceListItemsContainer }, displayedTraces)));
    };
    TraceList.prototype._addFilterLabel = function (filterLabel, multiFilter) {
        if (filterLabel && !(filterLabel in multiFilter)) {
            multiFilter[filterLabel] = true;
        }
    };
    return TraceList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TraceList);


/***/ }),

/***/ "23zc":
/*!**************************************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceGraph/PerformanceGraphItem/PerformanceGraphItem.module.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".bk_q_77a7cb2f{height:13px;margin:-6px 0 0;box-sizing:border-box;position:absolute}.af_q_77a7cb2f{border:1px solid #767676;padding:5px;height:25px;box-sizing:border-box}.bl_q_77a7cb2f{border-bottom:1px solid #c8c8c8}.ag_q_77a7cb2f{border-right:1px solid #c8c8c8}.bm_q_77a7cb2f{width:10%;border-spacing:0;z-index:1;border:1px solid #c8c8c8;border-top:0;border-left:0}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  bar: "bk_q_77a7cb2f",
  tableRowPerfList: "af_q_77a7cb2f",
  tableRowBottomLight: "bl_q_77a7cb2f",
  tableRowRightLight: "ag_q_77a7cb2f",
  tdDelimiter: "bm_q_77a7cb2f"
});


/***/ }),

/***/ "4D8N":
/*!*************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PerformanceGraph_PerformanceGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerformanceGraph/PerformanceGraph */ "bnUl");
/* harmony import */ var _PerformanceHeader_PerformanceHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PerformanceHeader/PerformanceHeader */ "fKXZ");
/* harmony import */ var _DataProviders_PerformanceDisplayStateProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../DataProviders/PerformanceDisplayStateProvider */ "B27l");
/* harmony import */ var _PerformanceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PerformanceDisplay.module.scss */ "SBDY");
/* harmony import */ var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PerformanceDisplay.resx */ "yWXA");
var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @file PerformanceDisplay.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */








var PerformanceDisplay = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PerformanceDisplay, _super);
    function PerformanceDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _DataProviders_PerformanceDisplayStateProvider__WEBPACK_IMPORTED_MODULE_5__["PerformanceDisplayStateProvider"].getState();
        return _this;
    }
    PerformanceDisplay.prototype.render = function () {
        if (this.state.errorMessage) {
            var errorMessageClass = [_PerformanceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].errorMessage, _PerformanceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].msFontColorRedDark].join(' ');
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: errorMessageClass },
                _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__["GeneralErrorMessage"],
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__["ErrorMessagePrefix"], this.state.errorMessage)));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PerformanceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].performanceDisplayContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PerformanceHeader_PerformanceHeader__WEBPACK_IMPORTED_MODULE_4__["default"], { perfItems: this.state.perfItems, overallDuration: this.state.eupl, fullPageDuration: this.state.fullPageLoad, timeToInteractive: this.state.timeToInteractive, speedOfLight: this.state.speedOfLight, serverDuration: this.state.serverDuration, firstFlushDuration: this.state.firstFlushDuration, postFlush: this.state.postFlush, CDNStatus: this.state.CDNStatus, spoVersion: this.state.spoVersion, correlationId: this.state.correlationId, clientBuildVersion: this.state.clientBuildVersion }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PerformanceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].graphContainer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PerformanceGraph_PerformanceGraph__WEBPACK_IMPORTED_MODULE_3__["default"], { perfItems: this.state.perfItems, startTime: this.state.startTime, overallDuration: this.state.eupl }))));
        }
    };
    return PerformanceDisplay;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PerformanceDisplay);


/***/ }),

/***/ "7yKZ":
/*!****************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperToolsConsole.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pivot */ "wD6F");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Stores/DeveloperToolsConsoleStore */ "l3/d");
/* harmony import */ var _DeveloperModules_LoadingOrErrorModule_LoadingOrErrorModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeveloperModules/LoadingOrErrorModule/LoadingOrErrorModule */ "lFVU");
/* harmony import */ var _DeveloperToolsConsole_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeveloperToolsConsole.module.scss */ "lXua");
/* harmony import */ var _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../DeveloperTools.resx */ "Hgul");
var _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../DeveloperTools.resx */ "Hgul", 1);
/**
 * @file DeveloperToolsConsole.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */









var DeveloperToolsConsole = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeveloperToolsConsole, _super);
    function DeveloperToolsConsole(props) {
        var _this = _super.call(this, props) || this;
        _this._handleCancelClick = function () {
            _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].showHideConsole(false);
        };
        _this._onDrag = function (e) {
            var mouseEvent = e; // tslint:disable-line:no-any
            if (mouseEvent.pageY !== 0) {
                var clientHeight = document.documentElement.clientHeight;
                var height = (clientHeight - mouseEvent.pageY) / clientHeight;
                _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].resizeConsole(height);
            }
        };
        _this._setState = function () {
            _this.setState({
                topPosition: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].height,
                visible: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].visible,
                tabs: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].tabs,
                selectedTabId: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].selectedTabId
            });
        };
        _this.state = {
            topPosition: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].height,
            visible: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].visible,
            tabs: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].tabs,
            selectedTabId: _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].selectedTabId
        };
        return _this;
    }
    DeveloperToolsConsole.prototype.componentDidMount = function () {
        _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].addListener(this._setState);
    };
    DeveloperToolsConsole.prototype.componentWillUnmount = function () {
        _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_5__["default"].removeListener(this._setState);
    };
    DeveloperToolsConsole.prototype.render = function () {
        var RENDER_NOTHING = null; // tslint:disable-line
        if (this.state.visible) {
            var tabs = this.state.tabs.map(function (tab, id) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_2__["PivotItem"], { linkText: tab.title, itemIcon: tab.iconName },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DeveloperModules_LoadingOrErrorModule_LoadingOrErrorModule__WEBPACK_IMPORTED_MODULE_6__["default"], { tab: tab })));
            });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _DeveloperToolsConsole_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container, style: { height: this.state.topPosition * 100 + "%" } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _DeveloperToolsConsole_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].resizeBar, draggable: true, onDrag: this._onDrag }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _DeveloperToolsConsole_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].toolsArea },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_2__["Pivot"], { linkSize: office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_2__["PivotLinkSize"].normal, linkFormat: office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_2__["PivotLinkFormat"].links, styles: this._calculatePivotStyles(this.props.theme) }, tabs),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { className: _DeveloperToolsConsole_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].closeButton, iconProps: { iconName: 'Cancel' }, title: _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_8__["closeDeveloperToolsAriaLabel"], ariaLabel: _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_8__["closeDeveloperToolsAriaLabel"], onClick: this._handleCancelClick }))));
        }
        else {
            return RENDER_NOTHING;
        }
    };
    DeveloperToolsConsole.prototype._calculatePivotStyles = function (theme) {
        if (theme) {
            var isInverted = theme.isInverted, semanticColors = theme.semanticColors;
            var buttonBackground = semanticColors.buttonBackground, buttonText = semanticColors.buttonText;
            return {
                linkContent: { color: isInverted ? buttonBackground : buttonText }
            };
        }
        else {
            return undefined;
        }
    };
    DeveloperToolsConsole = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('DeveloperToolsConsole', ['theme'])
    ], DeveloperToolsConsole);
    return DeveloperToolsConsole;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DeveloperToolsConsole);


/***/ }),

/***/ "9llX":
/*!*********************************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceHeader/PerformanceLegend/PerformanceLegend.module.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".ao_o_77a7cb2f{border:1px solid #767676;border-collapse:collapse;position:relative;margin:auto auto 10px}.ap_o_77a7cb2f{border:1px solid #767676;padding:2px 10px}.aq_o_77a7cb2f{height:13px;width:13px;float:left;position:relative;margin-right:7px;top:3px}.ar_o_77a7cb2f{background-color:#0078d4}.as_o_77a7cb2f{background-color:#00188f}.at_o_77a7cb2f{background-color:#b4a0ff}.au_o_77a7cb2f{background-color:#00b294}.av_o_77a7cb2f{background-color:#71afe5}.aw_o_77a7cb2f{background-color:#77f70f}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  legend: "ao_o_77a7cb2f",
  legendCells: "ap_o_77a7cb2f",
  colorSquare: "aq_o_77a7cb2f",
  msBlue: "ar_o_77a7cb2f",
  msBlueMid: "as_o_77a7cb2f",
  msPurpleLight: "at_o_77a7cb2f",
  msTealLight: "au_o_77a7cb2f",
  msThemeTertiary: "av_o_77a7cb2f",
  msLightGreen: "aw_o_77a7cb2f"
});


/***/ }),

/***/ "B27l":
/*!*****************************************************************************!*\
  !*** ./lib/DeveloperTools/DataProviders/PerformanceDisplayStateProvider.js ***!
  \*****************************************************************************/
/*! exports provided: PerformanceDisplayStateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceDisplayStateProvider", function() { return PerformanceDisplayStateProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx */ "yWXA");
var _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @file PerformanceDisplayStore.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




var PerformanceDisplayStateProvider = /** @class */ (function () {
    function PerformanceDisplayStateProvider() {
    }
    /**
     * This function parses through performance data and puts together some performance data (_IPerfItem) objects for the
     * component to display. If errors are encountered, the _errorMessage variable is set and the function returns an
     * empty array. The component checks for the presence of an error message to determine if something went wrong.
     */
    PerformanceDisplayStateProvider.getState = function () {
        var perfItems = [];
        var toReturn = {
            perfItems: perfItems,
            startTime: 0,
            eupl: 0,
            fullPageLoad: 0,
            speedOfLight: 0,
            timeToInteractive: 0,
            clientBuildVersion: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_Telemetry"].buildNumber
        };
        // Wrap in a try/catch block to ensure we don't break the page if this throws
        try {
            // @todo VSO:237921 - use the correct typings
            var data = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_1__["_PerformanceLogger"].getPerformanceData(); // tslint:disable-line:no-any
            if (!data || !data.W3cNavigationStart || !data.EUPL) {
                toReturn.errorMessage = _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ErrorAccessingPerfDataErrorMessage"];
                console.debug(toReturn.errorMessage); // tslint:disable-line:no-console
                return toReturn;
            }
            // We are using performance API so start is always 0 corresponding to W3cNavigationStart
            toReturn.startTime = 0;
            toReturn.eupl = data.EUPL;
            toReturn.spoVersion = data.SharePointServerVersion;
            toReturn.correlationId = data.ServerCorrelationId;
            toReturn.CDNStatus = data.CDNStatus;
            toReturn.fullPageLoad = data.spFullCanvasRendered;
            toReturn.timeToInteractive = data.TTI;
            toReturn.speedOfLight = data.allWebPartsAdded;
            toReturn.firstFlushDuration = data.firstFlushDuration;
            toReturn.serverDuration = data.ServerRequestDuration;
            if (data.postFlush) {
                toReturn.postFlush = Math.round(data.postFlush);
            }
            // Would be really nice if JSON.tryParse existed ...
            var euplBreakdown = void 0;
            try {
                euplBreakdown = JSON.parse(data.EUPLBreakdown);
            }
            catch (error) {
                /* no-op */
            }
            if (!euplBreakdown) {
                toReturn.errorMessage = _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ErrorParsingPercievedLatencyErrorMessage"];
                console.debug(toReturn.errorMessage); // tslint:disable-line:no-console
                return toReturn;
            }
            var apiCallsData = void 0;
            try {
                apiCallsData = JSON.parse(data.APICalls);
            }
            catch (error) {
                /* no-op */
            }
            if (!apiCallsData) {
                toReturn.errorMessage = _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ErrorParsingApiDataErrorMessage"];
                console.debug(toReturn.errorMessage); // tslint:disable-line:no-console
                return toReturn;
            }
            if (data.W3cRedirectStart && data.W3cRedirectEnd) {
                perfItems.push({
                    id: 'RedirectResponse',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["RedirectResponseLabel"],
                    startVal: data.W3cRedirectStart - data.W3cNavigationStart,
                    duration: data.W3cRedirectEnd - data.W3cRedirectStart,
                    breakdown: undefined
                });
            }
            if (data.headStart && data.headEnd && data.bodyStart) {
                perfItems.push({
                    id: 'head',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["HeadLabel"],
                    startVal: Math.round(data.headStart),
                    duration: Math.round(data.headEnd - data.headStart),
                    breakdown: undefined
                });
                perfItems.push({
                    id: 'serverResponseWait',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ServerResponseWaitLabel"],
                    startVal: Math.round(data.headEnd),
                    duration: Math.round(data.bodyStart - data.headEnd),
                    breakdown: undefined
                });
                perfItems.push({
                    id: 'body',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["BodyExecutionLabel"],
                    startVal: Math.round(data.bodyStart),
                    duration: Math.round(data.bodyEnd - data.bodyStart),
                    breakdown: undefined
                });
            }
            if (euplBreakdown.appStart) {
                perfItems.push({
                    id: 'appStart',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ApplicationInitializationLabel"],
                    startVal: Math.round(data.bodyStart),
                    duration: Math.round(data.appStart - data.bodyStart),
                    breakdown: undefined
                });
            }
            if (euplBreakdown.spLoaderStart) {
                perfItems.push({
                    id: 'scriptFetchEval',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ScriptFetchEvalLabel"],
                    startVal: Math.round(data.W3cResponseEnd - data.W3cNavigationStart),
                    duration: Math.round(euplBreakdown.spLoaderStart - (data.W3cResponseEnd - data.W3cNavigationStart)),
                    breakdown: undefined
                });
            }
            if (euplBreakdown.spLoaderStart && euplBreakdown.appStart) {
                perfItems.push({
                    id: 'spLoaderStart',
                    name: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["SpLoaderStartLabel"],
                    startVal: Math.round(euplBreakdown.spLoaderStart),
                    duration: Math.round(euplBreakdown.appStart - euplBreakdown.spLoaderStart),
                    breakdown: undefined
                });
            }
            /**
             * Check if any web parts made API calls, and store them in a data structure per web part
             */
            var apiCalls = {};
            var endVals = {};
            for (var _i = 0, apiCallsData_1 = apiCallsData; _i < apiCallsData_1.length; _i++) {
                var apiCall = apiCallsData_1[_i];
                if (apiCall.name && apiCall.name.indexOf('WebPart') > -1) {
                    if (!apiCalls[apiCall.name]) {
                        apiCalls[apiCall.name] = [];
                        endVals[apiCall.name] = 0;
                    }
                    apiCalls[apiCall.name].push({
                        startVal: apiCall.startTime,
                        duration: apiCall.duration
                    });
                    // Find the latest ending API call for total duration calculation later on
                    endVals[apiCall.name] = Math.max(apiCall.startTime + apiCall.duration, endVals[apiCall.name]);
                }
            }
            /**
             * Get loading breakdown for each web part. Web parts have their loading times broken down further, so an
             * _IWebPartBreakdown object is put together for each one.
             */
            for (var i = 1; i <= 10; i++) {
                var webPart = data["Control" + i + "Id"];
                var renderEnd = data["Control" + i + "RenderTime"];
                var renderStart = euplBreakdown[webPart + ".start"];
                if (!webPart || isNaN(renderStart) || isNaN(renderEnd)) {
                    continue;
                }
                var initTime = euplBreakdown[webPart + ".init"];
                var moduleLoadedTime = euplBreakdown[webPart + ".modulesLoaded"];
                var loadingDelayed = euplBreakdown[webPart + ".loadingDelayed"];
                var inViewportLoading = euplBreakdown[webPart + ".inViewportLoading"];
                var wpBreakdown = {
                    dataFetch: apiCalls[webPart] || [],
                    render: {
                        startVal: inViewportLoading || initTime || moduleLoadedTime || renderStart,
                        duration: renderEnd - (inViewportLoading || initTime || moduleLoadedTime || renderStart)
                    }
                };
                if (moduleLoadedTime && initTime) {
                    // Get breakdown of loading data for web parts
                    if (!isNaN(moduleLoadedTime)) {
                        wpBreakdown.modulesLoaded = {
                            startVal: renderStart,
                            duration: moduleLoadedTime - renderStart
                        };
                    }
                    if (!isNaN(initTime)) {
                        wpBreakdown.init = {
                            startVal: inViewportLoading || moduleLoadedTime,
                            duration: initTime - (inViewportLoading || moduleLoadedTime)
                        };
                    }
                    if (!isNaN(inViewportLoading) && !isNaN(loadingDelayed)) {
                        wpBreakdown.lazyLoading = {
                            startVal: loadingDelayed,
                            duration: inViewportLoading - loadingDelayed
                        };
                    }
                }
                perfItems.push({
                    id: webPart,
                    name: "" + PerformanceDisplayStateProvider._getReadableWebpartName(webPart.replace('Load.', '')),
                    startVal: renderStart,
                    duration: renderEnd - renderStart,
                    breakdown: wpBreakdown
                });
            }
            return toReturn;
        }
        catch (error) {
            toReturn.errorMessage = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["UnknownPerformanceDataErrorMessage"], error);
            console.debug(toReturn.errorMessage); // tslint:disable-line:no-console
            return toReturn;
        }
    };
    /**
     * Splits the WebPart id to access the alias.
     */
    PerformanceDisplayStateProvider._getReadableWebpartName = function (id) {
        if (id.indexOf('WebPart.') === -1) {
            return id;
        }
        /**
         * idString is in the format of WebPart.manifestID.instanceID
         * Example: WebPart.QuickLinksWebPart.a3deb5fc-2f96-4621-9dfe-985955a33833
         * If there is a failure in getting a readable name from the id
         * (change in web parts manifest) log the error and display the
         * generic name 'web part' so data can still be shown.
         */
        try {
            var readableWebPartName = id.split('.')[1];
            return readableWebPartName;
        }
        catch (error) {
            return id;
        }
    };
    return PerformanceDisplayStateProvider;
}());



/***/ }),

/***/ "BRQS":
/*!***************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceHeader/PerformanceHeader.module.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".aj_n_77a7cb2f{border:1px solid #767676;border-right:0;width:calc(100% - 1em);margin-bottom:10px;margin-top:5px;border-collapse:collapse}.ak_n_77a7cb2f{text-align:center;border-right:1px solid #767676;border-bottom:1px solid #767676}.al_n_77a7cb2f{font-size:12px;margin:5px}.am_n_77a7cb2f{margin-right:5px}.an_n_77a7cb2f{background-color:#deecf9}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  headerTable: "aj_n_77a7cb2f",
  headerTableRows: "ak_n_77a7cb2f",
  hint: "al_n_77a7cb2f",
  infoIcon: "am_n_77a7cb2f",
  msThemeLighter: "an_n_77a7cb2f"
});


/***/ }),

/***/ "EasO":
/*!******************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceListHeader/TraceListHeader.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Stores/TraceDisplayStore */ "wTRJ");
/* harmony import */ var _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TraceListHeader.module.scss */ "cIRK");
/* harmony import */ var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../TraceDisplay.resx */ "Rspa");
var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../TraceDisplay.resx */ "Rspa", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceListHeader.tsx
 * Sub-component for TraceList. The header displays the currently selected filters.
 */






var TraceListHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TraceListHeader, _super);
    function TraceListHeader(props) {
        var _this = _super.call(this, props) || this;
        _this._handleLevelClick = function () {
            _this._toggleFilterStateForColumn('level');
        };
        _this._handleScopeClick = function () {
            _this._toggleFilterStateForColumn('scope');
        };
        _this._handleSourceClick = function () {
            _this._toggleFilterStateForColumn('source');
        };
        _this._handleFilterChange = _this._handleFilterChange.bind(_this);
        // At page load time the default is to show no filter overlays
        _this.state = {
            filterToggles: { level: false, scope: false, source: false }
        };
        return _this;
    }
    TraceListHeader.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].timestamp }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["TimestampHeaderLabel"]),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].level },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { role: 'button', onClick: this._handleLevelClick, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerText }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["LevelHeaderLabel"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this._handleLevelClick, className: [_TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterButton, Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"])('Filter')].join(' ') }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._getFilterStyleForColumn('level'), id: 'levelFilterDropdown' }, Object.keys(this.props.filters.level).map(function (id) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: id, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterRow },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: 'checkbox', name: 'level '.concat(id), "aria-checked": _this.props.filters.level[id], checked: _this.props.filters.level[id], onChange: _this._handleFilterChange }),
                    id)); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].scope },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { role: 'button', onClick: this._handleScopeClick, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerText }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ScopeHeaderLabel"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this._handleScopeClick, className: [_TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterButton, Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"])('Filter')].join(' ') }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._getFilterStyleForColumn('scope'), id: 'scopeFilterDropdown' }, Object.keys(this.props.filters.scope).map(function (id) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: id, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterRow },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: 'checkbox', name: 'scope '.concat(id), "aria-checked": _this.props.filters.scope[id], checked: _this.props.filters.scope[id], onChange: _this._handleFilterChange }),
                    id)); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].source },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { role: 'button', onClick: this._handleSourceClick, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerText }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["SourceHeaderLabel"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this._handleSourceClick, className: [_TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterButton, Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"])('Filter')].join(' ') }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._getFilterStyleForColumn('source'), id: 'sourceFilterDropdown' }, Object.keys(this.props.filters.source).map(function (id) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: id, className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterRow },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: 'checkbox', name: 'source '.concat(id), "aria-checked": _this.props.filters.source[id], checked: _this.props.filters.source[id], onChange: _this._handleFilterChange }),
                    id)); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].message }, _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MessageHeaderLabel"])));
    };
    /**
     * Returns the current display style for the dropdown filter overlays.
     */
    TraceListHeader.prototype._getFilterStyleForColumn = function (columnId) {
        var filterStyle = this.state.filterToggles[columnId] ? _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].displayBlock : _TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].displayNone;
        return [_TraceListHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterOverlay, filterStyle].join(' ');
    };
    /**
     * Inverts the display status (None or Block) for the dropdown overlay column
     * that has the corresponding title of the param 'columnID'. Leaves all other
     * dropdown overlays unchanged.
     *
     * Ex: If columnId is 'level' and the current overlay display style is 'None', then the
     * display style for the level overlay will be changed to 'Block' and the other overlays
     * ('scope', 'source') will remain as is.
     */
    TraceListHeader.prototype._toggleFilterStateForColumn = function (columnId) {
        var filterToggles = { level: false, scope: false, source: false };
        for (var toggle in this.state.filterToggles) {
            if (this.state.filterToggles.hasOwnProperty(toggle)) {
                var value = this.state.filterToggles[toggle];
                filterToggles[toggle] = columnId === toggle ? !value : value;
            }
        }
        this.setState({ filterToggles: filterToggles });
    };
    TraceListHeader.prototype._handleFilterChange = function (event) {
        var all = 'all';
        var name = 'name';
        var eventTargetNameAttribute = event.target.getAttribute(name) || '';
        var filterDetailsTuple = eventTargetNameAttribute.split(' ');
        var filterType = filterDetailsTuple[0];
        var filterSubType = filterDetailsTuple[1];
        var subfilters = this.props.filters[filterType];
        if (filterSubType === all) {
            subfilters[all] = !subfilters[all];
            Object.keys(subfilters).forEach(function (element, count, array) {
                subfilters[element] = subfilters[all];
            });
        }
        else {
            subfilters[all] = false;
            subfilters[filterSubType] = !subfilters[filterSubType];
            var allTrue_1 = true;
            Object.keys(subfilters).forEach(function (key) {
                if (key !== all && subfilters[key] === false) {
                    allTrue_1 = false;
                }
            });
            if (allTrue_1) {
                subfilters[all] = true;
            }
        }
        _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["TraceDisplayStore"].instance.applyTraceFilter(this.props.filters);
    };
    return TraceListHeader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TraceListHeader);


/***/ }),

/***/ "Hgul":
/*!************************************************!*\
  !*** ./lib/DeveloperTools/DeveloperTools.resx ***!
  \************************************************/
/*! exports provided: missingDeveloperToolsTabInitFunctionError, closeDeveloperToolsAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"missingDeveloperToolsTabInitFunctionError\":\"Mĩśśĩńĝ ćōmƥōńēńţ ōŕ ĩńĩţĩàĺĩźēŕ ƒũńćţĩōń.\",\"closeDeveloperToolsAriaLabel\":\"Ćĺōśē ďēvēĺōƥēŕ ţōōĺś.\"}");

/***/ }),

/***/ "IhmD":
/*!*************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceGraph/PerformanceGraph.module.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_m_77a7cb2f{display:block;height:100%;width:100%}.ac_m_77a7cb2f{position:relative;float:left;width:100%;border-spacing:0;z-index:1}.ae_m_77a7cb2f{height:100%;padding:5px;border:0;border-right:1px solid #c8c8c8;border-bottom:1px solid #767676;width:10%;text-align:right;vertical-align:text-top;font-weight:400;font-size:small;position:relative}.af_m_77a7cb2f{border:1px solid #767676;padding:5px;height:25px;box-sizing:border-box}.ag_m_77a7cb2f{border-right:1px solid #c8c8c8}.ah_m_77a7cb2f{min-width:250px;max-width:250px}.ai_m_77a7cb2f{min-width:70px;max-width:70px}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_m_77a7cb2f",
  tableDelimiter: "ac_m_77a7cb2f",
  thDelimiter: "ae_m_77a7cb2f",
  tableRowPerfList: "af_m_77a7cb2f",
  tableRowRightLight: "ag_m_77a7cb2f",
  tableRowName: "ah_m_77a7cb2f",
  tableRowDuration: "ai_m_77a7cb2f"
});


/***/ }),

/***/ "MW+x":
/*!*************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceDisplay.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TraceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TraceDisplay.module.scss */ "lN/G");
/* harmony import */ var _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Stores/TraceDisplayStore */ "wTRJ");
/* harmony import */ var _TraceList_TraceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TraceList/TraceList */ "1F0B");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceDisplay.tsx
 */





var TraceDisplay = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TraceDisplay, _super);
    function TraceDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this._setState = function () {
            _this.setState({
                filter: _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["default"].currentFilter
            });
        };
        _this.state = {
            filter: _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["default"].currentFilter
        };
        return _this;
    }
    TraceDisplay.prototype.componentDidMount = function () {
        _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["default"].addListener(this._setState);
    };
    TraceDisplay.prototype.componentWillUnmount = function () {
        _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["default"].removeListener(this._setState);
    };
    TraceDisplay.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TraceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TraceDisplay_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].traceListContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TraceList_TraceList__WEBPACK_IMPORTED_MODULE_4__["default"], { allTraces: _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["default"].traces, filters: this.state.filter }))));
    };
    return TraceDisplay;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TraceDisplay);


/***/ }),

/***/ "NEyG":
/*!********************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/ManifestManager/ManifestDetails/ManifestDetails.module.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_k_77a7cb2f{display:block;height:100%}.z_k_77a7cb2f{font-size:large}.aa_k_77a7cb2f{width:100%;height:calc(100% - 3em);resize:none;border:none;outline:none}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_k_77a7cb2f",
  manifestIdHeading: "z_k_77a7cb2f",
  manifestTextBox: "aa_k_77a7cb2f"
});


/***/ }),

/***/ "PVnk":
/*!**********************************************!*\
  !*** ./lib/DeveloperTools/DeveloperTools.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "7Nbw");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/DeveloperToolsTab */ "hoe0");
/* harmony import */ var _Components_DeveloperToolsConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/DeveloperToolsConsole */ "7yKZ");
/* harmony import */ var _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stores/DeveloperToolsConsoleStore */ "l3/d");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_DeveloperModules_FlightInspector_FlightInspectorTab_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/DeveloperModules/FlightInspector/FlightInspectorTab.resx */ "qWET");
var _Components_DeveloperModules_FlightInspector_FlightInspectorTab_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Components/DeveloperModules/FlightInspector/FlightInspectorTab.resx */ "qWET", 1);
/* harmony import */ var _Components_DeveloperModules_FlightInspector_FlightInspectorTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/DeveloperModules/FlightInspector/FlightInspectorTab */ "ydCz");
/**
 * @file DeveloperTools.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */








var DeveloperTools = /** @class */ (function () {
    function DeveloperTools() {
    }
    Object.defineProperty(DeveloperTools, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DeveloperTools();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    DeveloperTools.prototype.initialize = function (serviceScope) {
        var developerToolsDiv = document.createElement('div');
        document.body.appendChild(developerToolsDiv);
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_DeveloperToolsConsole__WEBPACK_IMPORTED_MODULE_3__["default"]), developerToolsDiv);
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPFlight"].isEnabled(466 /* SPFXDebugExperiments */)) {
            // Add flight inspector tab for debug allowed environments so it won't expose to 3rd party developers who don't need this.
            this.registerDeveloperToolsTab({
                title: _Components_DeveloperModules_FlightInspector_FlightInspectorTab_resx__WEBPACK_IMPORTED_MODULE_6__["tabTitle"],
                iconName: 'Airplane',
                component: _Components_DeveloperModules_FlightInspector_FlightInspectorTab__WEBPACK_IMPORTED_MODULE_7__["FlightInspectorTab"],
                reactProps: {
                    serviceScope: serviceScope
                }
            });
        }
    };
    DeveloperTools.prototype.toggleDeveloperTools = function () {
        _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_4__["default"].showHideConsole(!_Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_4__["default"].visible);
    };
    DeveloperTools.prototype.showHideDeveloperTools = function (show) {
        _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_4__["default"].showHideConsole(show);
    };
    DeveloperTools.prototype.registerDeveloperToolsTab = function (developerToolsTab) {
        var tab = new _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_2__["default"](developerToolsTab);
        _Stores_DeveloperToolsConsoleStore__WEBPACK_IMPORTED_MODULE_4__["default"].registerTab(tab);
    };
    return DeveloperTools;
}());
/* harmony default export */ __webpack_exports__["default"] = (DeveloperTools);


/***/ }),

/***/ "Rspa":
/*!***************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceDisplay.resx ***!
  \***************************************************************************************/
/*! exports provided: TabTitle, EmptyTraceData, ExportCSVButtonLabel, LevelHeaderLabel, MessageHeaderLabel, ScopeHeaderLabel, SourceHeaderLabel, TimestampHeaderLabel, TimestampFormat, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TabTitle\":\"Ţŕàćē\",\"EmptyTraceData\":\"Ńō ţŕàćēś ĺōàďēď.\",\"ExportCSVButtonLabel\":\"Ēxƥōŕţ ĆŚV\",\"LevelHeaderLabel\":\"Ĺēvēĺ\",\"MessageHeaderLabel\":\"Mēśśàĝē\",\"ScopeHeaderLabel\":\"Śćōƥē\",\"SourceHeaderLabel\":\"Śōũŕćē\",\"TimestampHeaderLabel\":\"Ţĩmēśţàmƥ\",\"TimestampFormat\":\"{0}/{1}/{2} {3}:{4}:{5}.{6}\"}");

/***/ }),

/***/ "SBDY":
/*!**********************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.module.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".i_c_77a7cb2f{position:absolute;width:100%;height:100%;overflow-y:scroll}.j_c_77a7cb2f{float:left;width:calc(100% - 1em);border:1px solid}.k_c_77a7cb2f{text-align:center;position:relative;top:50%;font-size:25px}.l_c_77a7cb2f{color:#a80000}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  performanceDisplayContainer: "i_c_77a7cb2f",
  graphContainer: "j_c_77a7cb2f",
  errorMessage: "k_c_77a7cb2f",
  msFontColorRedDark: "l_c_77a7cb2f"
});


/***/ }),

/***/ "Tckj":
/*!*******************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/ManifestManager/ManifestManager.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/DetailsList */ "0q4O");
/* harmony import */ var _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../stores/ManifestStore */ "Eke5");
/* harmony import */ var _utilities_normalizeComponentId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../utilities/normalizeComponentId */ "jLfe");
/* harmony import */ var _ManifestDetails_ManifestDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ManifestDetails/ManifestDetails */ "tac/");
/* harmony import */ var _ManifestManager_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ManifestManager.module.scss */ "gDn6");
/* harmony import */ var _ManifestManager_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ManifestManager.resx */ "lHSH");
var _ManifestManager_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ManifestManager.resx */ "lHSH", 1);
/**
 * @file ManifestManager.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */








var ManifestManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManifestManager, _super);
    function ManifestManager(props) {
        var _this = _super.call(this, props) || this;
        _this._selection = new office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__["Selection"]({
            getKey: function (item) { return item.id; },
            onSelectionChanged: function () {
                var selectedModule = _this._selection.getSelection()[0];
                if (!selectedModule) {
                    ManifestManager._selectedManifestId = undefined;
                }
                else {
                    ManifestManager._selectedManifestId = Object(_utilities_normalizeComponentId__WEBPACK_IMPORTED_MODULE_4__["default"])(selectedModule.id, selectedModule.version);
                }
                _this.setState(_this.getUpdatedState());
            }
        });
        _this.state = _this.getUpdatedState();
        return _this;
    }
    ManifestManager.prototype.render = function () {
        var selectedManifest = this.state.selectedManifest;
        var manifestDetailsBox = selectedManifest ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ManifestDetails_ManifestDetails__WEBPACK_IMPORTED_MODULE_5__["default"], { manifest: selectedManifest })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestManager_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].noManifestSelectedContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _ManifestManager_resx__WEBPACK_IMPORTED_MODULE_7__["noManifestSelected"])));
        var columns = [
            {
                key: 'alias',
                name: 'alias',
                fieldName: 'alias',
                minWidth: 100,
                maxWidth: 150,
                onRender: function (item) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, (item.debugManifest || item.manifest).alias); }
            },
            {
                key: 'id',
                name: 'id',
                fieldName: 'id',
                minWidth: 300,
                maxWidth: 300
            }
        ];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestManager_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestManager_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].manifestListContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__["DetailsList"], { items: this.state.manifests, columns: columns, isHeaderVisible: false, selectionMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__["SelectionMode"].single, selection: this._selection, setKey: 'set', constrainMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_2__["ConstrainMode"].unconstrained })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestManager_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].manifestDetailsContainer }, manifestDetailsBox)));
    };
    ManifestManager.prototype.getUpdatedState = function () {
        var manifestMap = _stores_ManifestStore__WEBPACK_IMPORTED_MODULE_3__["default"].instance._getManifestMap();
        var manifests = [];
        manifestMap.forEach(function (entry) { return manifests.push(entry); });
        return {
            manifests: manifests,
            selectedManifest: ManifestManager._selectedManifestId
                ? manifestMap.get(ManifestManager._selectedManifestId)
                : undefined
        };
    };
    ManifestManager._selectedManifestId = undefined;
    return ManifestManager;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ManifestManager);


/***/ }),

/***/ "YGYo":
/*!************************************************!*\
  !*** ./lib/DeveloperTools/Stores/BaseStore.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file BaseStore.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * Contains common implementation for store
 */
var BaseStore = /** @class */ (function () {
    /**
     * Initializes a new instance of BaseStore
     */
    function BaseStore() {
        this._isDisposed = false;
        this._listeners = [];
        this._isDisposed = false;
    }
    /**
     * Add a listener to this store
     * @param listener - the listener callback
     */
    BaseStore.prototype.addListener = function (listener) {
        if (!this._isDisposed) {
            this._listeners.push(listener);
        }
    };
    /**
     * Removes a listener from the store
     * @param listener - the listener callback
     */
    BaseStore.prototype.removeListener = function (listener) {
        if (!this._isDisposed) {
            var listenerIdx = this._listeners.indexOf(listener);
            if (listenerIdx > -1) {
                this._listeners.splice(listenerIdx, 1);
            }
        }
    };
    /**
     * Removes all the registered listeners
     */
    BaseStore.prototype.removeAllListeners = function () {
        this._listeners = [];
    };
    /**
     * Removes a listener from the store
     * @param listener - the listener callback
     *
     * @return the count of listeners tied to this store
     */
    BaseStore.prototype.count = function () {
        return !this._isDisposed ? this._listeners.length : 0;
    };
    /**
     * Invokes all listeners tied to this store
     */
    BaseStore.prototype.emitChange = function () {
        if (!this._isDisposed) {
            this._listeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Disposes all listeners
     */
    BaseStore.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._listeners.splice(0);
            this._listeners = [];
            this._isDisposed = true;
        }
    };
    return BaseStore;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseStore);


/***/ }),

/***/ "bnUl":
/*!****************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceGraph/PerformanceGraph.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PerformanceGraphItem_PerformanceGraphItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PerformanceGraphItem/PerformanceGraphItem */ "gPmb");
/* harmony import */ var _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerformanceGraph.module.scss */ "IhmD");
/* harmony import */ var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../PerformanceDisplay.resx */ "yWXA");
var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceGraph.tsx
 */





var PerformanceGraph = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PerformanceGraph, _super);
    function PerformanceGraph(props) {
        var _this = _super.call(this, props) || this;
        _this._scale = Math.ceil(_this.props.overallDuration / 100) * 100;
        return _this;
    }
    PerformanceGraph.prototype.render = function () {
        var _this = this;
        var graphBars = [];
        this.props.perfItems.map(function (item) {
            graphBars.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PerformanceGraphItem_PerformanceGraphItem__WEBPACK_IMPORTED_MODULE_2__["default"], { key: item.id, perfItem: item, startTime: _this.props.startTime, overallDuration: _this._scale }));
        });
        /**
         * Horizontal lines on the graph that show the scale
         */
        var delimiters = [];
        for (var i = 1; i <= 10; i++) {
            delimiters.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i, className: _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].thDelimiter }, i * (this._scale / 10)));
        }
        var nameStyle = [_PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowPerfList, _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowRightLight, _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowName].join(' ');
        var durationStyle = [_PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowPerfList, _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowDuration].join(' ');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: _PerformanceGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableDelimiter },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: nameStyle }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_4__["ItemsColumnHeader"]),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: durationStyle }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_4__["DurationColumnHeader"]),
                        delimiters)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, graphBars))));
    };
    return PerformanceGraph;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PerformanceGraph);


/***/ }),

/***/ "cIRK":
/*!***************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceListHeader/TraceListHeader.module.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_p_77a7cb2f{display:block;margin-top:0;margin-bottom:0}.ax_p_77a7cb2f{display:none}.ay_p_77a7cb2f{display:block}.az_p_77a7cb2f{width:100%}.ba_p_77a7cb2f{background:transparent;border:none;cursor:pointer;padding:13px 5px;font-size:1.25em;color:#2f4f4f}.bb_p_77a7cb2f{height:60%;width:20%;clear:left;position:absolute;z-index:200;background:#fff;border:solid;border-color:#696969;border-width:1px;overflow-y:auto}.bc_p_77a7cb2f{float:left}.be_p_77a7cb2f{height:60%;width:10%;clear:left;position:absolute;z-index:200;background:#fff;border:solid;border-color:#696969;border-width:1px;overflow-y:auto}.bf_p_77a7cb2f{width:5%}.bg_p_77a7cb2f{width:40%}.bh_p_77a7cb2f,.bi_p_77a7cb2f{width:20%}.bj_p_77a7cb2f{width:15%}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_p_77a7cb2f",
  displayNone: "ax_p_77a7cb2f",
  displayBlock: "ay_p_77a7cb2f",
  filterRow: "az_p_77a7cb2f",
  filterButton: "ba_p_77a7cb2f",
  filterOverlay: "bb_p_77a7cb2f",
  headerText: "bc_p_77a7cb2f",
  levelFilterOverlay: "be_p_77a7cb2f",
  level: "bf_p_77a7cb2f",
  message: "bg_p_77a7cb2f",
  scope: "bh_p_77a7cb2f",
  source: "bi_p_77a7cb2f",
  timestamp: "bj_p_77a7cb2f"
});


/***/ }),

/***/ "f+sv":
/*!*******************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/FlightInspector/FlightInspectorTab.module.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".x_j_77a7cb2f{width:100%;height:100%;overflow-y:auto}.y_j_77a7cb2f{width:100%;padding:0 100px;box-sizing:border-box}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  root: "x_j_77a7cb2f",
  centerAlignedItem: "y_j_77a7cb2f"
});


/***/ }),

/***/ "fKXZ":
/*!******************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceHeader/PerformanceHeader.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PerformanceLegend_PerformanceLegend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerformanceLegend/PerformanceLegend */ "/aa2");
/* harmony import */ var _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PerformanceHeader.module.scss */ "BRQS");
/* harmony import */ var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../PerformanceDisplay.resx */ "yWXA");
var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceHeader.tsx
 * Sub-component for PerformanceDisplay. This component gives an overview of the performance data
 * that is detailed in the graph.
 */






var PerformanceHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PerformanceHeader, _super);
    function PerformanceHeader(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Time from navigation start to headStart marker
         */
        _this._headStart = 0;
        /**
         * Time to exeute <head></head> section.
         */
        _this._headTime = 0;
        /**
         * Time spent by browser waiting for <body></body> section to arrive once <head></head> is done by headEnd time.
         * This wait is dependent on _serverResponse vs _headTime.
         */
        _this._serverResponseWait = 0;
        /**
         * Time taken to start the app once head is executed as well _serverResponseWait is over if any.
         * Essentially time between bodyStart to appStart marker.
         *
         */
        _this._appStart = 0;
        /**
         * Time taken to render the page on client side.
         */
        _this._renderPageDuration = 0;
        /**
         * Time taken to render web parts.
         */
        _this._renderWebparts = 0;
        _this._hasWebParts = false;
        _this._getPerfTimings = _this._getPerfTimings.bind(_this);
        return _this;
    }
    PerformanceHeader.prototype.render = function () {
        this._getPerfTimings();
        // The legend has information about breakdown of webpart loading data
        // We only need to show it if there is web part data on the graph
        var legend = undefined;
        if (this._hasWebParts) {
            legend = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PerformanceLegend_PerformanceLegend__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
        var tableStyle = [_PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTable, _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msThemeLighter].join(' ');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: tableStyle },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows, title: _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["TotalRenderTimeTooltip"] }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["TotalRenderTimeLabel"]),
                        this.props.timeToInteractive && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows, title: _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["TimeToInteractiveTooltip"] }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["TimeToInteractiveLabel"])),
                        this.props.speedOfLight && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["SpeedOfLightLabel"])),
                        this.props.clientBuildVersion && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ClientBuildVersion"])),
                        this.props.spoVersion && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["SPOVersion"]),
                        this.props.CDNStatus && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["CDNStatus"]),
                        this.props.correlationId && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["CorrelationId"])))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.overallDuration)),
                        this.props.timeToInteractive && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.timeToInteractive))),
                        this.props.speedOfLight && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.speedOfLight))),
                        this.props.clientBuildVersion && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, this.props.clientBuildVersion)),
                        this.props.spoVersion && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, this.props.spoVersion),
                        this.props.CDNStatus && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, this.props.CDNStatus),
                        this.props.correlationId && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, this.props.correlationId))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: tableStyle },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        this.props.firstFlushDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["FirstFlushLabel"])),
                        this._headStart && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["HeadStartLabel"]),
                        this._headTime && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["HeadLabel"]),
                        this.props.serverDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ServerResponseLabel"])),
                        this._serverResponseWait !== undefined && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ServerResponseWaitLabel"])),
                        this._appStart && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["AppLoadLabel"]),
                        this._renderPageDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["PageRenderLabel"])),
                        this._hasWebParts && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["RenderWebPartsLabel"]),
                        this.props.postFlush && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["PostFlushLabel"]))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        this.props.firstFlushDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.firstFlushDuration))),
                        this._headStart && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._headStart))),
                        this._headTime && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._headTime))),
                        this.props.serverDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.serverDuration))),
                        this._serverResponseWait !== undefined && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._serverResponseWait))),
                        this._appStart && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._appStart))),
                        this._renderPageDuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._renderPageDuration))),
                        this._renderWebparts && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this._renderWebparts))),
                        this.props.postFlush && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerTableRows }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.postFlush)))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, legend)));
    };
    /**
     * Calculate overall load times for categories:
     * Server Response
     * App Load
     * Page Render
     * Web Parts Render
     * Total
     */
    PerformanceHeader.prototype._getPerfTimings = function () {
        this._hasWebParts = false;
        for (var _i = 0, _a = this.props.perfItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === 'appStart') {
                this._appStart = item.duration;
            }
            else if (item.id === 'head') {
                this._headStart = item.startVal;
                this._headTime = item.duration;
            }
            else if (item.id === 'serverResponseWait') {
                this._serverResponseWait = item.duration;
            }
            else if (item.id.indexOf('WebPart') > -1) {
                this._hasWebParts = true;
            }
        }
        this._renderPageDuration = this.props.overallDuration - this._appStart;
        this._renderWebparts =
            this.props.overallDuration - (this.props.speedOfLight ? this.props.speedOfLight : this._appStart);
    };
    return PerformanceHeader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PerformanceHeader);


/***/ }),

/***/ "fk6i":
/*!*****************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceList.module.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"]("ul{padding:0}li{display:inline-table}.a_l_77a7cb2f{height:100%;padding:0}.ab_l_77a7cb2f{height:80%;padding:0;overflow-y:auto;margin-top:0;margin-bottom:0}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_l_77a7cb2f",
  traceListItemsContainer: "ab_l_77a7cb2f"
});


/***/ }),

/***/ "gDn6":
/*!****************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/ManifestManager/ManifestManager.module.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_b_77a7cb2f{height:100%}.f_b_77a7cb2f{border-right:2px solid grey;height:100%;width:500px;overflow-y:auto;overflow-x:hidden;float:left}.g_b_77a7cb2f{height:100%;padding:5px;overflow-x:hidden;overflow-y:auto}.h_b_77a7cb2f{text-align:center;position:relative;font-size:30px;color:grey;display:table;width:100%;height:calc(100% - 10px);-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.h_b_77a7cb2f>div{display:table-cell;text-align:center;vertical-align:middle}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_b_77a7cb2f",
  manifestListContainer: "f_b_77a7cb2f",
  manifestDetailsContainer: "g_b_77a7cb2f",
  noManifestSelectedContainer: "h_b_77a7cb2f"
});


/***/ }),

/***/ "gPmb":
/*!*****************************************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceGraph/PerformanceGraphItem/PerformanceGraphItem.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerformanceGraphItem.module.scss */ "23zc");
/* harmony import */ var _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../PerformanceHeader/PerformanceLegend/PerformanceLegend.module.scss */ "9llX");
/* harmony import */ var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../PerformanceDisplay.resx */ "yWXA");
var _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../PerformanceDisplay.resx */ "yWXA", 1);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceGraphItem.tsx
 * Sub-component for PerformanceGraph. One of these exists for each bar in the graph.
 * Each bar has a start value and a width corresponding to some performance data.
 */






var PerformanceGraphItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PerformanceGraphItem, _super);
    function PerformanceGraphItem(props) {
        var _this = _super.call(this, props) || this;
        _this._drawGraphBar = _this._drawGraphBar.bind(_this);
        return _this;
    }
    PerformanceGraphItem.prototype.render = function () {
        var nameStyle = [
            _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowPerfList,
            _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowBottomLight,
            _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowRightLight
        ].join(' ');
        var durationStyle = [_PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowPerfList, _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tableRowBottomLight].join(' ');
        var graphBar = [];
        var perfItem = this.props.perfItem;
        if (perfItem.breakdown) {
            /**
             * Graph bars are pushed into array and rendered in this specific order, which shouldn't be changed.
             * Don't care about showing the entire 'render' time, only what is left beyond init, modules loaded, etc.
             * That one gets rendered first so part of it can be covered up. This makes start time calculation much easier.
             */
            graphBar.push(this._drawGraphBar(perfItem.breakdown.render.startVal, perfItem.breakdown.render.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msBlueMid, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["RenderTimeLegendLabel"] + " " + perfItem.breakdown.render.duration + " ms"));
            if (perfItem.breakdown.modulesLoaded) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.modulesLoaded.startVal, perfItem.breakdown.modulesLoaded.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msBlue, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ModuleLoadingTimeLabel"] + " " + perfItem.breakdown.modulesLoaded.duration + " ms"));
            }
            if (perfItem.breakdown.lazyLoading) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.lazyLoading.startVal, perfItem.breakdown.lazyLoading.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msLightGreen, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["ModuleLazyLoadingDelayLabel"] + " " + perfItem.breakdown.lazyLoading.duration + " ms"));
            }
            if (perfItem.breakdown.init) {
                graphBar.push(this._drawGraphBar(perfItem.breakdown.init.startVal, perfItem.breakdown.init.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msPurpleLight, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["InitializationTimeLabel"] + " " + perfItem.breakdown.init.duration + " ms"));
            }
            if (perfItem.breakdown.dataFetch) {
                for (var _i = 0, _a = perfItem.breakdown.dataFetch; _i < _a.length; _i++) {
                    var apiCall = _a[_i];
                    graphBar.push(this._drawGraphBar(apiCall.startVal, apiCall.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msTealLight, _PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["DataFetchTimeLabel"] + " " + apiCall.duration + " ms"));
                }
            }
        }
        else {
            graphBar.push(this._drawGraphBar(perfItem.startVal, perfItem.duration, _PerformanceHeader_PerformanceLegend_PerformanceLegend_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].msThemeTertiary, perfItem.name + " " + perfItem.duration + " ms"));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: nameStyle }, this.props.perfItem.name),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: durationStyle }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_5__["MillisecondsUnitLabel"], this.props.perfItem.duration)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }, graphBar),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: _PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdDelimiter })));
    };
    /**
     * Creates a div to show the bar on the graph.
     * startVal: start time integer representing where the bar starts
     * duration: time duration integer representing width of the bar
     * barColor: class name specifying the color of the bar
     */
    PerformanceGraphItem.prototype._drawGraphBar = function (startVal, duration, barColor, tooltip) {
        /**
         * Calculate the left value and width by percentage so that they will always fit on the screen
         * and be scaled properly
         */
        var leftVal = (startVal - this.props.startTime) / this.props.overallDuration;
        var widthVal = duration / this.props.overallDuration;
        /**
         * nameTableWidth: The pixel width of the name & duration section of the table.
         * This needs to be factored into the calculation because the bars are absolutely positioned to cross table lines
         * so the position needs to be offset from the edge of the name/duration section of the table.
         */
        var nameTableWidth = '320px';
        var barStyling = {
            left: "calc(" + leftVal + " * (100% - " + nameTableWidth + ") + " + nameTableWidth + ")",
            width: "calc(" + widthVal + " * (100% - " + nameTableWidth + "))"
        };
        var barClass = [_PerformanceGraphItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bar, barColor].join(' ');
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "" + leftVal + widthVal, className: barClass, style: barStyling, title: tooltip });
    };
    return PerformanceGraphItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PerformanceGraphItem);


/***/ }),

/***/ "gVY4":
/*!**************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/traceFormatting.js ***!
  \**************************************************************************************************/
/*! exports provided: formatTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return formatTimestamp; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../TraceDisplay.resx */ "Rspa");
var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../TraceDisplay.resx */ "Rspa", 1);
/**
 * Functions for formatting fields of trace logs.
 */


// Not using i18n-utilities here because it doesn't handle milliseconds
function formatTimestamp(time) {
    // tslint:disable-line:export-name
    var date = new Date(time);
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_1__["TimestampFormat"], 
    /*  Year */ date.getUTCFullYear(), 
    /* Month */ leftPadZeros(date.getUTCMonth() + 1, 2), // January is 0
    /*  Day  */ leftPadZeros(date.getUTCDate(), 2), 
    /*     Hour    */ leftPadZeros(date.getUTCHours(), 2), 
    /*    Minute   */ leftPadZeros(date.getUTCMinutes(), 2), 
    /*    Second   */ leftPadZeros(date.getUTCSeconds(), 2), 
    /* Millisecond */ leftPadZeros(date.getUTCMilliseconds(), 3));
}
function leftPadZeros(value, minLength) {
    var result = value.toString();
    for (var i = result.length; i < minLength; i++) {
        result = "0" + result;
    }
    return result;
}


/***/ }),

/***/ "hoe0":
/*!********************************************************!*\
  !*** ./lib/DeveloperTools/Models/DeveloperToolsTab.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DeveloperTools.resx */ "Hgul");
var _DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../DeveloperTools.resx */ "Hgul", 1);
/**
 * @file DeveloperToolsTab.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/**
 * Represents a developer tools tab. The developer console can be invoked with the "CTRL+F12"
 *  key combination.
 *
 * @internal
 */
var DeveloperToolsTab = /** @class */ (function () {
    function DeveloperToolsTab(parameters) {
        var _this = this;
        this._isLoading = false;
        this.loadComponent = function () {
            if (!_this._componentInitializer) {
                // If the component was passed in directly, resolve immediately
                return Promise.resolve(undefined);
            }
            if (!_this._componentInitializerPromise) {
                _this._isLoading = true;
                _this._componentInitializerPromise = new Promise(_this._componentInitializer)
                    .then(function (component) {
                    _this._isLoading = false;
                    _this._component = component;
                })
                    .catch(function (error) {
                    _this._isLoading = false;
                    _this._loadError = error;
                });
            }
            return _this._componentInitializerPromise;
        };
        this._iconName = parameters.iconName;
        this._title = parameters.title;
        this._reactProps = parameters.reactProps;
        var componentParameters = parameters;
        var promiseParameters = parameters;
        if (promiseParameters.componentInitializer) {
            this._componentInitializer = promiseParameters.componentInitializer;
            this._isLoading = true;
        }
        else if (componentParameters.component) {
            this._component = componentParameters.component;
        }
        else {
            throw new Error(_DeveloperTools_resx__WEBPACK_IMPORTED_MODULE_0__["missingDeveloperToolsTabInitFunctionError"]);
        }
    }
    Object.defineProperty(DeveloperToolsTab.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "iconName", {
        get: function () {
            return this._iconName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "component", {
        get: function () {
            return this._component;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "loadError", {
        get: function () {
            return this._loadError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "reactProps", {
        get: function () {
            return this._reactProps;
        },
        enumerable: false,
        configurable: true
    });
    return DeveloperToolsTab;
}());
/* harmony default export */ __webpack_exports__["default"] = (DeveloperToolsTab);


/***/ }),

/***/ "jD7m":
/*!**********************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/CsvRenderer.js ***!
  \**********************************************************************************************/
/*! exports provided: triggerCsvDownload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerCsvDownload", function() { return triggerCsvDownload; });
/* harmony import */ var _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Stores/TraceDisplayStore */ "wTRJ");
/* harmony import */ var _traceFormatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traceFormatting */ "gVY4");
/* harmony import */ var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../TraceDisplay.resx */ "Rspa");
var _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../TraceDisplay.resx */ "Rspa", 1);



var HEADER = 'data:text/csv;charset=utf-8';
var NEWLINE = '\n';
var FILENAME = 'spfx_trace_logs.csv';
function triggerCsvDownload(traces) {
    // tslint:disable-line:export-name
    var tracesLength = traces.length;
    if (tracesLength === 0) {
        return;
    }
    var csvContent = _generateCsvContent(traces);
    var link = document.createElement('a');
    link.setAttribute('href', encodeURI(HEADER + "," + csvContent));
    link.setAttribute('download', FILENAME);
    link.setAttribute('data-automation-id', 'trace-csv-download-anchor');
    document.body.appendChild(link);
    link.click(); // This will download the data file named "spfx_trace_logs.csv".
    document.body.removeChild(link);
}
function _generateCsvContent(traces) {
    var headerLine = [
        _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["TimestampHeaderLabel"],
        _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["LevelHeaderLabel"],
        _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["ScopeHeaderLabel"],
        _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["SourceHeaderLabel"],
        _TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_2__["MessageHeaderLabel"]
    ]
        .map(_escapeCsvField)
        .join(',');
    return "" + headerLine + NEWLINE + traces.map(_generateCsvLine).join(NEWLINE);
}
function _generateCsvLine(trace) {
    var logEventArray = [
        Object(_traceFormatting__WEBPACK_IMPORTED_MODULE_1__["formatTimestamp"])(trace.timestamp),
        trace.level ? _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][trace.level] : ' ',
        trace.source,
        trace.message ? trace.message : trace.error ? trace.error.message : ' '
    ];
    return logEventArray.map(_escapeCsvField).join(',');
}
function _escapeCsvField(rawField) {
    if (!rawField) {
        return ''; // If the field is undefined or empty, return an empty field
    }
    // Examples:
    // '"' -> '""""'
    // ',' -> '","'
    // '\n' -> '"\n"'
    // 'asdf"asdf' -> '"asdf""asdf"'
    // 'a"b,c\nd' -> '"a""b,c\nd"'
    var escapedField = rawField.replace(/(")/g, '""'); // Escape quotes to double quotes
    if (escapedField.match(/([,"\n])/)) {
        // Detect commas, quotes, and newlines
        escapedField = "\"" + escapedField + "\""; // Wrap the field in quotes if it contains any of those characters
    }
    return escapedField;
}


/***/ }),

/***/ "jLfe":
/*!***********************************************!*\
  !*** ./lib/utilities/normalizeComponentId.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponentId; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given a component id and version, gives a normalized string that includes both string and version.
 * Used internally to provide a common way to refer to id + version in different classes.
 *
 * Example:
 * { id: d1d91016-032f-456d-98a4-721247c305e8, version: 1.0.0 } -> d1d91016-032f-456d-98a4-721247c305e8_1.0.0
 */
function normalizeComponentId(id, version) {
    id = typeof id === 'string' ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(id) : id;
    version = typeof version === 'string' ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse(version) : version;
    return id.toString() + "_" + version.toString();
}


/***/ }),

/***/ "l3/d":
/*!*****************************************************************!*\
  !*** ./lib/DeveloperTools/Stores/DeveloperToolsConsoleStore.js ***!
  \*****************************************************************/
/*! exports provided: DeveloperToolsConsoleStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperToolsConsoleStore", function() { return DeveloperToolsConsoleStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseStore */ "YGYo");
/* harmony import */ var _Components_DeveloperModules_ManifestManager_ManifestManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/DeveloperModules/ManifestManager/ManifestManager */ "Tckj");
/* harmony import */ var _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay */ "4D8N");
/* harmony import */ var _Components_DeveloperModules_TraceDisplay_TraceDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Components/DeveloperModules/TraceDisplay/TraceDisplay */ "MW+x");
/* harmony import */ var _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Models/DeveloperToolsTab */ "hoe0");
/* harmony import */ var _Components_DeveloperModules_ManifestManager_ManifestManager_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Components/DeveloperModules/ManifestManager/ManifestManager.resx */ "lHSH");
var _Components_DeveloperModules_ManifestManager_ManifestManager_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Components/DeveloperModules/ManifestManager/ManifestManager.resx */ "lHSH", 1);
/* harmony import */ var _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx */ "yWXA");
var _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx */ "yWXA", 1);
/* harmony import */ var _Components_DeveloperModules_TraceDisplay_TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../Components/DeveloperModules/TraceDisplay/TraceDisplay.resx */ "Rspa");
var _Components_DeveloperModules_TraceDisplay_TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Components/DeveloperModules/TraceDisplay/TraceDisplay.resx */ "Rspa", 1);
/**
 * @file DeveloperToolsConsoleStore.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */









var DEFAULT_HEIGHT = 1 / 4;
var MIN_HEIGHT = 1 / 6;
var MAX_HEIGHT = 3 / 4;
var DeveloperToolsConsoleStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeveloperToolsConsoleStore, _super);
    function DeveloperToolsConsoleStore() {
        var _this = _super.call(this) || this;
        _this._height = DEFAULT_HEIGHT;
        _this._visible = false;
        _this._selectedTabId = 0;
        _this._tabs = [
            new _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_5__["default"]({
                title: _Components_DeveloperModules_TraceDisplay_TraceDisplay_resx__WEBPACK_IMPORTED_MODULE_8__["TabTitle"],
                iconName: 'ShowResults',
                component: _Components_DeveloperModules_TraceDisplay_TraceDisplay__WEBPACK_IMPORTED_MODULE_4__["default"]
            }),
            new _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_5__["default"]({
                title: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay_resx__WEBPACK_IMPORTED_MODULE_7__["TabTitle"],
                iconName: 'SpeedHigh',
                component: _Components_DeveloperModules_PerformanceDisplay_PerformanceDisplay__WEBPACK_IMPORTED_MODULE_3__["default"]
            }),
            new _Models_DeveloperToolsTab__WEBPACK_IMPORTED_MODULE_5__["default"]({
                title: _Components_DeveloperModules_ManifestManager_ManifestManager_resx__WEBPACK_IMPORTED_MODULE_6__["tabTitle"],
                iconName: 'Script',
                component: _Components_DeveloperModules_ManifestManager_ManifestManager__WEBPACK_IMPORTED_MODULE_2__["default"]
            })
        ];
        return _this;
    }
    Object.defineProperty(DeveloperToolsConsoleStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DeveloperToolsConsoleStore();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "selectedTabId", {
        get: function () {
            return this._selectedTabId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsConsoleStore.prototype, "tabs", {
        get: function () {
            return this._tabs;
        },
        enumerable: false,
        configurable: true
    });
    DeveloperToolsConsoleStore.prototype.resizeConsole = function (height) {
        var newHeight = this._height;
        if (height >= MAX_HEIGHT) {
            newHeight = MAX_HEIGHT;
        }
        else if (height <= MIN_HEIGHT) {
            newHeight = MIN_HEIGHT;
        }
        else {
            newHeight = height;
        }
        if (newHeight !== this._height) {
            this._height = newHeight;
            this.emitChange();
        }
    };
    DeveloperToolsConsoleStore.prototype.showHideConsole = function (show) {
        if (this._visible !== show) {
            this._visible = show;
            this.emitChange();
        }
    };
    DeveloperToolsConsoleStore.prototype.registerTab = function (tab) {
        this._tabs.push(tab);
        if (this._tabs.length === 1) {
            this._selectedTabId = 0;
        }
        this.emitChange();
    };
    return DeveloperToolsConsoleStore;
}(_BaseStore__WEBPACK_IMPORTED_MODULE_1__["default"]));

// instantiate the store so it can start listening to dispatch events
/* harmony default export */ __webpack_exports__["default"] = (DeveloperToolsConsoleStore.instance); // tslint:disable-line:export-name


/***/ }),

/***/ "lFVU":
/*!*****************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/LoadingOrErrorModule/LoadingOrErrorModule.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _LoadingOrErrorModule_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingOrErrorModule.module.scss */ "u/2x");
/* harmony import */ var _LoadingOrErrorModule_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadingOrErrorModule.resx */ "+k5P");
var _LoadingOrErrorModule_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LoadingOrErrorModule.resx */ "+k5P", 1);
/**
 * @file LoadingOrErrorModule.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */






var LoadingOrErrorModule = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoadingOrErrorModule, _super);
    function LoadingOrErrorModule(props) {
        return _super.call(this, props) || this;
    }
    LoadingOrErrorModule.prototype.componentDidMount = function () {
        var _this = this;
        this.props.tab
            .loadComponent()
            .then(function () {
            _this.forceUpdate();
        })
            .catch(function (error) {
            _this.forceUpdate();
        });
    };
    // tslint:disable-next-line:no-any
    LoadingOrErrorModule.prototype.render = function () {
        var tab = this.props.tab;
        if (tab.isLoading) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _LoadingOrErrorModule_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loadingModule },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"], { type: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_2__["SpinnerType"].large, label: _LoadingOrErrorModule_resx__WEBPACK_IMPORTED_MODULE_5__["developerToolsTabLoadingText"] })));
        }
        else if (tab.loadError || !tab.component) {
            // tslint:disable-next-line:typedef
            var errorMessage = tab.loadError || _LoadingOrErrorModule_resx__WEBPACK_IMPORTED_MODULE_5__["developerToolsTabLoadingUnknownError"];
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _LoadingOrErrorModule_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].module },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-live": 'assertive', className: _LoadingOrErrorModule_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].screenReaderErrorMessage, "data-automation-id": 'error-message' }, errorMessage),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])('ms-TextField-errorMessage', _LoadingOrErrorModule_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].errorText) }, errorMessage)));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tab.component, tab.reactProps);
        }
    };
    return LoadingOrErrorModule;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (LoadingOrErrorModule);


/***/ }),

/***/ "lHSH":
/*!*********************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/ManifestManager/ManifestManager.resx ***!
  \*********************************************************************************************/
/*! exports provided: tabTitle, noManifestSelected, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tabTitle\":\"Màńĩƒēśţś\",\"noManifestSelected\":\"Ńō màńĩƒēśţ śēĺēćţēď\"}");

/***/ }),

/***/ "lN/G":
/*!**********************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceDisplay.module.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_e_77a7cb2f{height:100%}.m_e_77a7cb2f{height:100%;width:100%;float:left}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_e_77a7cb2f",
  traceListContainer: "m_e_77a7cb2f"
});


/***/ }),

/***/ "lXua":
/*!*************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperToolsConsole.module.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_a_77a7cb2f{position:fixed;bottom:0;width:100%;background-color:#fff;color:#000;opacity:.9;z-index:999999}.b_a_77a7cb2f{position:absolute;bottom:0;top:5px;width:100%}.b_a_77a7cb2f>div{height:100%}.b_a_77a7cb2f>div .ms-Pivot{-webkit-user-select:none;-ms-user-select:none;user-select:none}.b_a_77a7cb2f>div>div+div{padding:0 5px 5px;height:calc(100% - 50px);position:absolute;width:calc(100% - 10px)}.b_a_77a7cb2f>div>div+div>div{height:100%}.c_a_77a7cb2f{background-color:#2f4f4f;width:100%;height:5px;cursor:ns-resize}.e_a_77a7cb2f{position:absolute!important;right:0;top:0}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_a_77a7cb2f",
  toolsArea: "b_a_77a7cb2f",
  resizeBar: "c_a_77a7cb2f",
  closeButton: "e_a_77a7cb2f"
});


/***/ }),

/***/ "qSKy":
/*!***********************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceListItem/TraceListItem.module.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".a_r_77a7cb2f{display:block}.bn_r_77a7cb2f{background:#deecf9}.bo_r_77a7cb2f{padding:0}.bo_r_77a7cb2f li{display:inline-table}.bp_r_77a7cb2f{width:5%;color:\"[theme:yellow, default: #ffb900]\"}.bq_r_77a7cb2f{width:5%;color:\"[theme:orangeLighter, default: #ff8c00]\"}.br_r_77a7cb2f{width:5%;color:\"[theme:orangeLight, default: #ea4300]\"}.bs_r_77a7cb2f{width:5%;color:\"[theme:red, default: #e81123]\"}.bg_r_77a7cb2f{width:40%}.bh_r_77a7cb2f,.bi_r_77a7cb2f{width:20%}.bj_r_77a7cb2f{width:15%}.bt_r_77a7cb2f{color:\"[theme:red, default: #e81123]\"}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  container: "a_r_77a7cb2f",
  blueBackground: "bn_r_77a7cb2f",
  itemDetails: "bo_r_77a7cb2f",
  verbose: "bp_r_77a7cb2f",
  info: "bq_r_77a7cb2f",
  warning: "br_r_77a7cb2f",
  error: "bs_r_77a7cb2f",
  message: "bg_r_77a7cb2f",
  scope: "bh_r_77a7cb2f",
  source: "bi_r_77a7cb2f",
  timestamp: "bj_r_77a7cb2f",
  redText: "bt_r_77a7cb2f"
});


/***/ }),

/***/ "qWET":
/*!************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/FlightInspector/FlightInspectorTab.resx ***!
  \************************************************************************************************/
/*! exports provided: tabTitle, flightInspectorTabLoadingText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tabTitle\":\"Ĩńśƥēćţ ƒĺĩĝĥţś, ēxƥēŕĩmēńţś, ōŕ ķĩĺĺ śŵĩţćĥēś\",\"flightInspectorTabLoadingText\":\"Ĺōàďĩńĝ\"}");

/***/ }),

/***/ "sHC+":
/*!**************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/TraceDisplay/TraceList/TraceListItem/TraceListItem.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TraceListItem.module.scss */ "qSKy");
/* harmony import */ var _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Stores/TraceDisplayStore */ "wTRJ");
/* harmony import */ var _traceFormatting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../traceFormatting */ "gVY4");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceListItem.tsx
 * Sub-component for TraceList. One of these exists for each row in the table.
 */





var TraceListItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TraceListItem, _super);
    function TraceListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TraceListItem.prototype.render = function () {
        var styleDeclarations;
        var message;
        styleDeclarations = [_TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container];
        if (this.props.id % 2 === 0) {
            styleDeclarations.push(_TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].blueBackground);
        }
        // Message property is a different property for Error logs.
        // @todo (SPPPlat VSO bug #259565) The Number casting is a workaround for a TypeScript bug.
        if (Number(this.props.trace.level) === _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].error) {
            message = this.props.trace.error ? this.props.trace.error.message : this.props.trace.message;
            styleDeclarations.push(_TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].redText);
        }
        else {
            message = this.props.trace.message;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: this.props.id, className: styleDeclarations.join(' ') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].itemDetails },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].timestamp }, Object(_traceFormatting__WEBPACK_IMPORTED_MODULE_4__["formatTimestamp"])(this.props.trace.timestamp)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][_Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["LogLevel"][this.props.trace.level]] }, _Stores_TraceDisplayStore__WEBPACK_IMPORTED_MODULE_3__["LogLevel"][this.props.trace.level]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].scope }, this.props.trace.scope ? this.props.trace.scope.id : undefined),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].source }, this.props.trace.source),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: _TraceListItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].message }, message))));
    };
    return TraceListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TraceListItem);


/***/ }),

/***/ "tac/":
/*!***********************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/ManifestManager/ManifestDetails/ManifestDetails.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ManifestDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManifestDetails.module.scss */ "NEyG");
/**
 * @file ManifestDetails.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */



var ManifestDetails = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManifestDetails, _super);
    function ManifestDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManifestDetails.prototype.render = function () {
        var manifest = this.props.manifest.debugManifest || this.props.manifest.manifest;
        var manifestText = manifest ? JSON.stringify(manifest, undefined, 2) : '';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _ManifestDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].manifestIdHeading }, this.props.manifest.id),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: _ManifestDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].manifestTextBox, readOnly: true, value: manifestText })));
    };
    return ManifestDetails;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ManifestDetails);


/***/ }),

/***/ "u/2x":
/*!**************************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/LoadingOrErrorModule/LoadingOrErrorModule.module.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"](".u_i_77a7cb2f,.v_i_77a7cb2f{text-align:center;vertical-align:middle;height:100%;display:table;width:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.t_i_77a7cb2f,.u_i_77a7cb2f>div{display:table-cell;text-align:center;vertical-align:middle}.t_i_77a7cb2f{font-size:17px;font-weight:300}.w_i_77a7cb2f{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  loadingModule: "u_i_77a7cb2f",
  module: "v_i_77a7cb2f",
  errorText: "t_i_77a7cb2f",
  screenReaderErrorMessage: "w_i_77a7cb2f"
});


/***/ }),

/***/ "wTRJ":
/*!********************************************************!*\
  !*** ./lib/DeveloperTools/Stores/TraceDisplayStore.js ***!
  \********************************************************/
/*! exports provided: LogLevel, TraceDisplayStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceDisplayStore", function() { return TraceDisplayStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseStore */ "YGYo");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceDisplayStore.ts
 */



var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["all"] = 0] = "all";
    LogLevel[LogLevel["verbose"] = 1] = "verbose";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warning"] = 3] = "warning";
    LogLevel[LogLevel["error"] = 4] = "error";
})(LogLevel || (LogLevel = {}));
/**
 *  Implementation for managing the data of user-selected filters and all trace data
 *  for a TraceDisplay.
 */
var TraceDisplayStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TraceDisplayStore, _super);
    function TraceDisplayStore() {
        var _this = _super.call(this) || this;
        _this._filter = {
            level: { all: true, verbose: true, info: true, warning: true, error: true, none: true },
            source: { all: true, none: true },
            scope: { all: true, none: true }
        };
        _this._traces = [];
        return _this;
    }
    Object.defineProperty(TraceDisplayStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new TraceDisplayStore();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TraceDisplayStore.prototype, "traces", {
        get: function () {
            var _this = this;
            var data = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogEvent"].logManager.events;
            this._traces = [];
            if (data) {
                data.forEach(function (value) {
                    if (value) {
                        _this._traces.push(value);
                    }
                });
            }
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TraceDisplayStore.prototype, "currentFilter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    TraceDisplayStore.prototype.applyTraceFilter = function (filter) {
        this._filter = filter;
        this.emitChange();
    };
    return TraceDisplayStore;
}(_BaseStore__WEBPACK_IMPORTED_MODULE_2__["default"]));

// instantiate the store so it can start listening to dispatch events
// tslint:disable:export-name
/* harmony default export */ __webpack_exports__["default"] = (TraceDisplayStore.instance);


/***/ }),

/***/ "yWXA":
/*!***************************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/PerformanceDisplay/PerformanceDisplay.resx ***!
  \***************************************************************************************************/
/*! exports provided: TabTitle, ErrorAccessingPerfDataErrorMessage, ErrorParsingPercievedLatencyErrorMessage, ErrorParsingApiDataErrorMessage, UnknownPerformanceDataErrorMessage, FirstFlushLabel, HeadStartLabel, HeadLabel, BodyExecutionLabel, ServerResponseLabel, ServerResponseWaitLabel, SpeedOfLightLabel, FullPageLoadTimeLabel, TimeToInteractiveLabel, TimeToInteractiveTooltip, PostFlushLabel, CDNStatus, SPOVersion, ClientBuildVersion, CorrelationId, ApplicationInitializationLabel, ScriptFetchEvalLabel, SpLoaderStartLabel, PageRenderLabel, RedirectResponseLabel, AppLoadLabel, RenderWebPartsLabel, TotalRenderTimeLabel, TotalRenderTimeTooltip, GeneralErrorMessage, ErrorMessagePrefix, PerformanceDataHint, ModulesLoadedLegendLabel, InitializationLegendLabel, RenderTimeLegendLabel, InitializationTimeLabel, ModuleLoadingTimeLabel, ModuleLazyLoadingDelayLabel, DataFetchTimeLabel, DataFetchLegendLabel, ItemsColumnHeader, DurationColumnHeader, MillisecondsUnitLabel, NAPlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TabTitle\":\"Ƥēŕƒōŕmàńćē\",\"ErrorAccessingPerfDataErrorMessage\":\"Ũńàƀĺē ţō ŕēţŕĩēvē ƥēŕƒōŕmàńćē ďàţà: ōƀĴēćţ ĩś ńũĺĺ ōŕ ũńďēƒĩńēď.\",\"ErrorParsingPercievedLatencyErrorMessage\":\"Àń ēŕŕōŕ ŵàś ćàũĝĥţ ŵĥēń ƥàŕśĩńĝ ţĥē ƥēŕćĩēvēď ĺàţēńćŷ ďàţà.\",\"ErrorParsingApiDataErrorMessage\":\"Àń ēŕŕōŕ ŵàś ćàũĝĥţ ŵĥēń ƥàŕśĩńĝ ţĥē ÀƤĨ ďàţà.\",\"UnknownPerformanceDataErrorMessage\":\"Àń ũńķńōŵń ēŕŕōŕ ĥàś ōććũŕēď: {0}\",\"FirstFlushLabel\":\"ƒĩŕśţ Ƒĺũśĥ\",\"HeadStartLabel\":\"ĥēàď Śţàŕţ\",\"HeadLabel\":\"ĥēàď Ēxēćũţĩōń\",\"BodyExecutionLabel\":\"ƀōďŷ Ēxēćũţĩōń\",\"ServerResponseLabel\":\"Śēŕvēŕ Ŕēśƥōńśē\",\"ServerResponseWaitLabel\":\"Ƥàĝē Ćōńţēxţ Ŵàĩţ\",\"SpeedOfLightLabel\":\"Śƥēēď Ōƒ Ĺĩĝĥţ\",\"FullPageLoadTimeLabel\":\"Ƒũĺĺ Ƥàĝē Ĺōàď\",\"TimeToInteractiveLabel\":\"ƑĆĨ\",\"TimeToInteractiveTooltip\":\"Ƒĩŕśţ ĆƤŨ Ĩďĺē\",\"PostFlushLabel\":\"Ƥōśţ Ƒĺũśĥ\",\"CDNStatus\":\"ĆĎŃ Śţàţũś\",\"SPOVersion\":\"ŚƤŌ Vēŕśĩōń\",\"ClientBuildVersion\":\"Ćĺĩēńţ Vēŕśĩōń\",\"CorrelationId\":\"Ćōŕŕēĺàţĩōń Ĩď\",\"ApplicationInitializationLabel\":\"Àƥƥĺĩćàţĩōń Ĩńĩţĩàĺĩźàţĩōń\",\"ScriptFetchEvalLabel\":\"Śćŕĩƥţ ƒēţćĥ àńď ēvàĺũàţĩōń\",\"SpLoaderStartLabel\":\"ŚƤƑx ĩńĩţĩàĺĩźàţĩōń\",\"PageRenderLabel\":\"Ƥàĝē Ŕēńďēŕ\",\"RedirectResponseLabel\":\"Ŕēďĩŕēćţ Ŕēśƥōńśē\",\"AppLoadLabel\":\"Àƥƥĺĩćàţĩōń Śţàŕţ\",\"RenderWebPartsLabel\":\"Ŵēƀ Ƥàŕţś Ŕēńďēŕ\",\"TotalRenderTimeLabel\":\"ƑMƤ\",\"TotalRenderTimeTooltip\":\"Ƒĩŕśţ Mēàńĩńĝƒũĺ Ƥàĩńţ\",\"GeneralErrorMessage\":\"Śōŕŕŷ, śōmēţĥĩńĝ ŵēńţ ŵŕōńĝ ŵĥĩĺē ŕēţŕĩēvĩńĝ ţĥē ƥēŕƒōŕmàńćē ďàţà.\",\"ErrorMessagePrefix\":\"Ēŕŕōŕ Mēśśàĝē: {0}\",\"PerformanceDataHint\":\"Ńōţē: Àƒţēŕ àďďĩńĝ ōŕ ŕēmōvĩńĝ à ŵēƀ ƥàŕţ, ŕēƒŕēśĥ ţĥē ƥàĝē ţō śēē ũƥďàţēď ƥēŕƒōŕmàńćē ďàţà.\",\"ModulesLoadedLegendLabel\":\"Mōďũĺēś Ĺōàďēď\",\"InitializationLegendLabel\":\"Ĩńĩţĩàĺĩźàţĩōń\",\"RenderTimeLegendLabel\":\"Ŕēńďēŕ Ţĩmē\",\"InitializationTimeLabel\":\"Ĩńĩţĩàĺĩźàţĩōń ţĩmē\",\"ModuleLoadingTimeLabel\":\"Mōďũĺē ĺōàďĩńĝ ţĩmē\",\"ModuleLazyLoadingDelayLabel\":\"Mōďũĺē ĺōàďĩńĝ ďēĺàŷēď\",\"DataFetchTimeLabel\":\"Ďàţà ƒēţćĥ ţĩmē\",\"DataFetchLegendLabel\":\"Ďàţà Ƒēţćĥ\",\"ItemsColumnHeader\":\"Ĩţēmś\",\"DurationColumnHeader\":\"Ďũŕàţĩōń\",\"MillisecondsUnitLabel\":\"{0} mś\",\"NAPlaceholder\":\"Ń/À\"}");

/***/ }),

/***/ "ydCz":
/*!**********************************************************************************************!*\
  !*** ./lib/DeveloperTools/Components/DeveloperModules/FlightInspector/FlightInspectorTab.js ***!
  \**********************************************************************************************/
/*! exports provided: FlightInspectorTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightInspectorTab", function() { return FlightInspectorTab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WYdG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "Q/xo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlightInspectorTab_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlightInspectorTab.module.scss */ "f+sv");
/* harmony import */ var _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../loader/SPComponentLoader */ "KZU3");




var FlightInspectorTab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlightInspectorTab, _super);
    function FlightInspectorTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._handleCompare = function (theOtherFullString) {
            return _this._flightInspector.compare(theOtherFullString);
        };
        _this._loadFlightInspector = function () {
            void _loader_SPComponentLoader__WEBPACK_IMPORTED_MODULE_3__["SPComponentLoader"].loadComponentById('a7f8537f-f742-423f-ad20-ed8feaaf0805' /* sp-flight-inspector */).then(function (module) {
                var instance = module._SPFlightInspector.getInstance(_this.props.serviceScope);
                module._renderFlightViewer(_this._rootRef.current, {
                    enabledFlights: instance.getEnabledFlights(),
                    enabledExperiments: instance.getExperimentVariants(),
                    activatedKillSwitches: instance.getActivatedKillSwitches(),
                    fullString: instance.getFullString(),
                    onCompare: _this._handleCompare,
                    limitMaxSize: false
                });
                _this._flightInspector = instance;
            });
        };
        return _this;
    }
    FlightInspectorTab.prototype.componentDidMount = function () {
        this._loadFlightInspector();
    };
    FlightInspectorTab.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _FlightInspectorTab_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _FlightInspectorTab_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].centerAlignedItem, ref: this._rootRef })));
    };
    return FlightInspectorTab;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ })

}]);
//# sourceMappingURL=chunk.developer-tools_[locale].js.map