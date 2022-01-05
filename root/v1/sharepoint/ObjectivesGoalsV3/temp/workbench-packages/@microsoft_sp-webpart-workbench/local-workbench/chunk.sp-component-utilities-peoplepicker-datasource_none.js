(window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || []).push([["sp-component-utilities-peoplepicker-datasource"],{

/***/ "Rtvv":
/*!**************************************************!*\
  !*** ./lib/oAuthToken/OAuthTokenProviderShim.js ***!
  \**************************************************/
/*! exports provided: OAuthTokenProviderShim, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthTokenProviderShim", function() { return OAuthTokenProviderShim; });
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");



var OAuthTokenProviderShim = /** @class */ (function () {
    function OAuthTokenProviderShim(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._oAuthTokenProvider = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["OAuthTokenProvider"].serviceKey);
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
        });
    }
    OAuthTokenProviderShim.prototype.getToken = function (audience, skipCache) {
        if (this._oAuthTokenProvider) {
            if (skipCache) {
                this._oAuthTokenProvider.clearCachedToken(audience);
            }
            var serverRelativeUrl = this._pageContext && this._pageContext.web && this._pageContext.web.serverRelativeUrl;
            return this._oAuthTokenProvider.getOAuthToken(audience, serverRelativeUrl).then(function (response) {
                return response.token;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(undefined);
    };
    OAuthTokenProviderShim.prototype.getInstrumentedToken = function (audience, skipCache) {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(undefined);
    };
    return OAuthTokenProviderShim;
}());

/* harmony default export */ __webpack_exports__["default"] = (OAuthTokenProviderShim);


/***/ }),

/***/ "yGly":
/*!****************************************************************************************************!*\
  !*** ./lib/chunks/sp-component-utilities-peoplepicker-datasource/PeoplePickerDataSourceService.js ***!
  \****************************************************************************************************/
/*! exports provided: PeoplePickerDataSourceService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSourceService", function() { return PeoplePickerDataSourceService; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony import */ var _oAuthToken_OAuthTokenProviderShim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../oAuthToken/OAuthTokenProviderShim */ "Rtvv");
/* harmony import */ var _ms_odsp_datasources_lib_utilities_peoplePicker_GraphPeoplePickerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/utilities/peoplePicker/GraphPeoplePickerHelper */ "UeHE");
/* harmony import */ var _ms_odsp_datasources_lib_utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/utilities/peoplePicker/SubstratePeoplePickerHelper */ "8VvQ");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);




 // Wraped for max line limit

/**
 * This class allows one to obtain PeoplePickDataSouce with graph and substrate search ability.
 * A peoplePickerDataSourceServiceLoader is provided in ./loader/sp-component-utilities-peoplepicker-datasource
 * for deferred load.
 */
var PeoplePickerDataSourceService = /** @class */ (function () {
    function PeoplePickerDataSourceService(serviceScope) {
        this._serviceScope = serviceScope;
    }
    Object.defineProperty(PeoplePickerDataSourceService.prototype, "peoplePickerDataSource", {
        get: function () {
            if (this._peoplePickerDataSource === undefined) {
                var spPageContext = this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
                var pageContext = spPageContext && spPageContext.legacyPageContext;
                var oAuthTokenProvider = new _oAuthToken_OAuthTokenProviderShim__WEBPACK_IMPORTED_MODULE_2__["OAuthTokenProviderShim"](this._serviceScope);
                var graphPeoplePickerHelper = new _ms_odsp_datasources_lib_utilities_peoplePicker_GraphPeoplePickerHelper__WEBPACK_IMPORTED_MODULE_3__["GraphPeoplePickerHelper"]({}, { pageContext: pageContext, oAuthTokenProvider: oAuthTokenProvider });
                var substratePeoplePickerHelper = new _ms_odsp_datasources_lib_utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_4__["SubstratePeoplePickerHelper"]({}, { pageContext: pageContext, oAuthTokenProvider: oAuthTokenProvider });
                this._peoplePickerDataSource = new _ms_odsp_datasources_lib_dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__["PeoplePickerDataSource"]({}, {
                    pageContext: pageContext,
                    graphPeoplePickerHelper: graphPeoplePickerHelper,
                    substratePeoplePickerHelper: substratePeoplePickerHelper
                });
            }
            return this._peoplePickerDataSource;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The service key for PeoplePickDataSouce.
     */
    PeoplePickerDataSourceService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-component-utilities:PeoplePickerDataSource', PeoplePickerDataSourceService);
    return PeoplePickerDataSourceService;
}());

/* harmony default export */ __webpack_exports__["default"] = (PeoplePickerDataSourceService);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-component-utilities-peoplepicker-datasource_none.js.map