(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[10],{

/***/ "6idz":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/IBSegments/IBSegmentsCallout.scss.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-IBSegmentsCalloutView-sectionTitle{font-size:" }, { "theme": "mediumPlusFontSize", "defaultValue": "16px" }, { "rawString": ";font-weight:" }, { "theme": "mediumPlusFontWeight", "defaultValue": "400" }, { "rawString": ";font-weight:600;padding:24px 24px 0px 24px}.ms-IBSegmentsCalloutView-ErrorMessage{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:" }, { "theme": "smallFontWeight", "defaultValue": "400" }, { "rawString": ";color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": ";-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.ms-IBSegmentsCalloutView-segmentList{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": ";list-style-type:none;padding:0px 24px 12px 24px}.ms-IBSegmentsCalloutView-callout{min-width:250px}\n" }]);
//# sourceMappingURL=IBSegmentsCallout.scss.js.map

/***/ }),

/***/ "79mC":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/IBSegments/IBSegmentsCalloutStateManager.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: IBSegmentsCalloutStateManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IBSegmentsCalloutStateManager", function() { return IBSegmentsCalloutStateManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_ibsegments_IBSegmentsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/ibsegments/IBSegmentsDataSource */ "snKk");
/* harmony import */ var _IBSegmentsCalloutView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IBSegmentsCalloutView */ "ZAzZ");
/* harmony import */ var _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrentIBSegmentDisplay.resx */ "i8lC");
/* harmony import */ var _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5__);






/**
 * @public
 */
var IBSegmentsCalloutStateManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IBSegmentsCalloutStateManager, _super);
    function IBSegmentsCalloutStateManager(props) {
        var _this = _super.call(this, props) || this;
        _this._setIBSegmentLabelsFromPromise = function (ibSegmentLabelsPromise) {
            ibSegmentLabelsPromise
                .then(function (value) {
                if (value.length > 0) {
                    _this.setState({ ibDisplayLabels: value, isLoading: false });
                }
                else {
                    _this.setState({ errorString: _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5___default.a.errorLabelPresent, isLoading: false });
                }
            })
                .catch(function () {
                _this.setState({ errorString: _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5___default.a.error, isLoading: false });
            });
        };
        _this.state = {
            errorString: '',
            ibDisplayLabels: [],
            isLoading: true
        };
        return _this;
    }
    IBSegmentsCalloutStateManager.prototype.componentDidMount = function () {
        if (this.props.pageContext.IBSegments && this.props.pageContext.IBSegments.length > 0) {
            this._isIBSite = true;
            this._ibSegmentDatasource = new _ms_odsp_datasources_lib_dataSources_ibsegments_IBSegmentsDataSource__WEBPACK_IMPORTED_MODULE_3__["default"](this.props.pageContext);
            var ibSegmentLabelsPromise = this._ibSegmentDatasource.getIBSegmentLabels();
            this._setIBSegmentLabelsFromPromise(ibSegmentLabelsPromise);
        }
    };
    IBSegmentsCalloutStateManager.prototype.render = function () {
        if (this._isIBSite) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IBSegmentsCalloutView__WEBPACK_IMPORTED_MODULE_4__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { showIBSegmentCallout: this.props.showIBSegmentCallout, target: this.props.target, onDismissIBSegmentCallout: this.props.dismissIBSegmentCallout })));
        }
        else {
            return null;
        }
    };
    return IBSegmentsCalloutStateManager;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (IBSegmentsCalloutStateManager);
//# sourceMappingURL=IBSegmentsCalloutStateManager.js.map

/***/ }),

/***/ "ZAzZ":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/IBSegments/IBSegmentsCalloutView.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "ioxN");
/* harmony import */ var _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrentIBSegmentDisplay.resx */ "i8lC");
/* harmony import */ var _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IBSegmentsCallout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IBSegmentsCallout.scss */ "6idz");







var IBSegmentsCalloutView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IBSegmentsCalloutView, _super);
    function IBSegmentsCalloutView(props) {
        return _super.call(this, props) || this;
    }
    IBSegmentsCalloutView.prototype.render = function () {
        var _this = this;
        var _a = this.props, ibDisplayLabels = _a.ibDisplayLabels, errorString = _a.errorString;
        var insideCalloutContent;
        var ibDisplayElement = ibDisplayLabels &&
            ibDisplayLabels.map(function (value) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: value.objectId }, value.displayName);
            });
        if (this.props.isLoading) {
            insideCalloutContent = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null);
        }
        else {
            insideCalloutContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-IBSegmentsCalloutView-sectionTitle' }, _CurrentIBSegmentDisplay_resx__WEBPACK_IMPORTED_MODULE_5___default.a.displayTitle),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: 'ms-IBSegmentsCalloutView-segmentList' }, ibDisplayElement),
                errorString ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-IBSegmentsCalloutView-ErrorMessage', "data-automationid": 'IBSegmentsCalloutView-ErrorMessage' }, errorString)) : null));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], { className: 'ms-IBSegmentsCalloutView-callout', hidden: !this.props.showIBSegmentCallout, onDismiss: function () {
                _this.props.onDismissIBSegmentCallout();
            }, target: this.props.target }, insideCalloutContent));
    };
    return IBSegmentsCalloutView;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (IBSegmentsCalloutView);
//# sourceMappingURL=IBSegmentsCalloutView.js.map

/***/ }),

/***/ "fyAn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Spinner.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Spinner.js


/***/ }),

/***/ "i8lC":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/IBSegments/CurrentIBSegmentDisplay.resx.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"error":"Śōŕŕŷ, śōmēţĥĩńĝ ŵēńţ ŵŕōńĝ.","displayTitle":"Ĩńƒōŕmàţĩōń śēĝmēńţś","displayTitleAdditional":"Śēĺēćţ àďďĩţĩōńàĺ śēĝmēńţś","displayTitleAdditionalSPAC":"Màńàĝē śēĝmēńţś","additionalSegmentPlaceholder":"Śēĺēćţ ĩńƒōŕmàţĩōń śēĝmēńţ","additionalSegmentNotSelected":"Ƥĺēàśē śēĺēćţ àń Ĩß śēĝmēńţ","noCompatibleadditionalSegments":"Ńō ōţĥēŕ ćōmƥàţĩƀĺē śēĝmēńţś ƒōũńď","removeAriaLabel":"Ŕēmōvē","removeAriaDescription":"Ďēĺēţē śēĝmēńţ","addAdditionalSegment":"Àďď śēĝmēńţ","errorLabelPresent":"Śōŕŕŷ, śōmēţĥĩńĝ ŵēńţ ŵŕōńĝ. Ćōũĺď ńōţ ƒĩńď śĩţē ĺàƀēĺ","infoTip":"Àďďĩńĝ à śēĝmēńţ ƥŕēvēńţś ţĥĩś śĩţē ƒŕōm ƀēĩńĝ śĥàŕēď ŵĩţĥ ōŕ àććēśśēď ƀŷ ƥēōƥĺē ōũţśĩďē ţĥē śēĝmēńţ. {0}","learnMoreLinkText":"Ĺēàŕń mōŕē"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "ioxN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Callout.js


/***/ }),

/***/ "snKk":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/ibsegments/IBSegmentsDataSource.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: IBSegmentsDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IBSegmentsDataSource", function() { return IBSegmentsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");


var IBSegmentsDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IBSegmentsDataSource, _super);
    function IBSegmentsDataSource(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: 'IBSegmentsDataSource',
            id: 'IBSegmentsDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this.SPSITEMANAGER_URL_TEMPLATE = _this._pageContext.webAbsoluteUrl + "/_api/SPSiteManager";
        return _this;
    }
    IBSegmentsDataSource.prototype.getIBSegmentLabels = function (forceRefresh) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () { return _this.SPSITEMANAGER_URL_TEMPLATE + "/GetIBSegmentLabels"; },
            qosName: 'getIBSegmentLabels',
            bypassCache: forceRefresh,
            parseResponse: function (responseText) {
                var src = JSON.parse(responseText);
                return src && src.d && src.d.GetIBSegmentLabels && src.d.GetIBSegmentLabels.results
                    ? src.d.GetIBSegmentLabels.results.map(function (o) {
                        return {
                            objectId: o.ObjectId,
                            displayName: o.DisplayName
                        };
                    })
                    : [];
            },
            method: 'POST',
            additionalPostData: JSON.stringify({ IBSegments: this._pageContext.IBSegments })
        });
    };
    IBSegmentsDataSource.prototype.getCompatibleSegments = function (ibSegments, forceRefresh) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () { return _this.SPSITEMANAGER_URL_TEMPLATE + "/GetCompatibleSegments"; },
            qosName: 'GetCompatibleSegments',
            bypassCache: forceRefresh,
            parseResponse: function (responseText) {
                var src = JSON.parse(responseText);
                return src && src.d && src.d.GetCompatibleSegments && src.d.GetCompatibleSegments.results
                    ? src.d.GetCompatibleSegments.results
                        .map(function (o) {
                        return {
                            objectId: o.ObjectId,
                            displayName: o.DisplayName
                        };
                    })
                        .filter(function (ibSegmentInfo) {
                        return !ibSegments.includes(ibSegmentInfo.objectId);
                    })
                    : [];
            },
            method: 'POST',
            additionalPostData: JSON.stringify({ segments: ibSegments })
        });
    };
    IBSegmentsDataSource.prototype.setIBSegments = function (ibSegments) {
        var _this = this;
        return this.getData(function () { return _this.SPSITEMANAGER_URL_TEMPLATE + "/SetIBSegments"; } /*url*/, function (response) {
            return null;
        } /*parseResponse*/, 'SetIBSegments' /*qosName*/, function () { return JSON.stringify({ IBSegments: ibSegments }); } /*postData*/, 'POST' /*method*/);
    };
    IBSegmentsDataSource.prototype.getTenantAllOrCompatibleIBSegments = function (ibSegments, forceRefresh) {
        var _this = this;
        return this.getDataUtilizingLegacyCache({
            getUrl: function () { return _this._pageContext.webAbsoluteUrl + "/_api/SPO.Tenant/GetTenantAllOrCompatibleIBSegments"; },
            qosName: 'GetTenantAllOrCompatibleIBSegments',
            bypassCache: forceRefresh,
            parseResponse: function (responseText) {
                var src = JSON.parse(responseText);
                return src &&
                    src.d &&
                    src.d.GetTenantAllOrCompatibleIBSegments &&
                    src.d.GetTenantAllOrCompatibleIBSegments.results
                    ? src.d.GetTenantAllOrCompatibleIBSegments.results
                        .map(function (o) {
                        return {
                            objectId: o.ObjectId,
                            displayName: o.DisplayName
                        };
                    })
                        .filter(function (ibSegmentInfo) {
                        return !ibSegments.includes(ibSegmentInfo.objectId);
                    })
                    : [];
            },
            method: 'POST',
            additionalPostData: JSON.stringify({ segments: ibSegments })
        });
    };
    return IBSegmentsDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (IBSegmentsDataSource);
//# sourceMappingURL=IBSegmentsDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.10_[locale].js.map