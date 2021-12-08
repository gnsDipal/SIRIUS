(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-syntexdatasource"],{

/***/ "z56S":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/contentCenter/SyntexDataSource.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/url/ApiUrlHelper */ "sVQZ");
/* harmony import */ var _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/url/ItemUrlHelper */ "+1yd");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
// OneDrive:IgnoreCodeCoverage




var SYNTEX_DATA_SOURCE_NAME = 'SyntexDataSource';
var MachineLearningCaptureEnabled_CACHE_TIMEOUT_TIME = 1000 * 60 * 10; // by default 10 minutes
var SyntexDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SyntexDataSource, _super);
    function SyntexDataSource(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: SYNTEX_DATA_SOURCE_NAME,
            id: SYNTEX_DATA_SOURCE_NAME + "(" + (pageContext ? pageContext.siteId : '') + ")"
        }, {
            pageContext: pageContext
        }) || this;
        _this._pageContext = pageContext;
        _this._apiUrlHelper = new _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_1__["ApiUrlHelper"]({}, {
            pageContext: _this._pageContext,
            itemUrlHelper: new _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_2__["ItemUrlHelper"]({}, { pageContext: _this._pageContext })
        });
        return _this;
    }
    SyntexDataSource.prototype.getMachineLearningCaptureEnabled = function (cacheTimeoutTime) {
        if (cacheTimeoutTime === undefined) {
            cacheTimeoutTime = MachineLearningCaptureEnabled_CACHE_TIMEOUT_TIME;
        }
        var apiUrl = this._apiUrlHelper.build().toString();
        apiUrl = apiUrl + "/machinelearning/machinelearningcaptureenabled";
        var headers = {
            accept: 'application/json',
            'content-type': 'application/json'
        };
        return this.getDataUtilizingPersistentCache({
            getUrl: function () { return apiUrl.toString(); },
            parseResponse: function (responseText) {
                return JSON.parse(responseText).value;
            },
            qosName: 'getMachineLearningCaptureEnabled',
            method: 'GET',
            additionalHeaders: headers,
            cacheTimeoutTime: cacheTimeoutTime,
            noRedirect: true /* noRedirect */
        });
    };
    return SyntexDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SyntexDataSource);
//# sourceMappingURL=SyntexDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.spcx-syntexdatasource_none.js.map