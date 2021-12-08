(window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] = window["webpackJsonpf8a8ad94_4cf3_4a19_a76b_1cec9da00219_0_1_0"] || []).push([["sp-suite-nav-searchBoxProvider"],{

/***/ "SCym":
/*!*****************************************!*\
  !*** ./lib/search/SearchBoxProvider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_search_common_lib_getScenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-search-common/lib/getScenario */ "cKBR");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SuiteNavManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SuiteNavManagerConfiguration */ "bKG0");
/* harmony import */ var _getSearchShimPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSearchShimPromise */ "LDNF");





/**
 * @remarks
 * This has been built as a parallel to odsp-next SearchBoxProvider.
 * Some behaviors are scattered through apps and classes and should be unified here in the future.
 *
 * @internal
 */
var SearchBoxProvider = /** @class */ (function () {
    function SearchBoxProvider(serviceScope) {
        var _this = this;
        this._hasBeenActivated = false;
        this._isActive = false;
        this._onActivatedCallbacks = [];
        this._onSearchBoxActivatedCallback = function (applicationId) {
            _this._isActive = true;
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('7ba71c16-a767-4646-992c-e087c90f8482' /*'07/23/2020', Add scoping control usage telemetry*/)) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].log({
                    name: 'SuiteNavSearchBox.FocusIn',
                    isIntentional: true,
                    extraData: {
                        scenario: Object(_ms_sp_search_common_lib_getScenario__WEBPACK_IMPORTED_MODULE_1__["getScenario"])(applicationId)
                    }
                });
            }
            else {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('SuiteNavSearchBox.FocusIn');
            }
            if (!_this._hasBeenActivated) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].mark('SuiteNavSearchBox_FocusIn');
                _this._hasBeenActivated = true;
            }
            // Invoke all onActivated callbacks that have been registered.
            _this._onActivatedCallbacks.forEach(function (cb) { return cb(); });
        };
        this._onSearchBoxDeactivatedCallback = function (applicationId) {
            _this._isActive = false;
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('7ba71c16-a767-4646-992c-e087c90f8482' /*'07/23/2020', Add scoping control usage telemetry*/)) {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].log({
                    name: 'SuiteNavSearchBox.FocusOut',
                    isIntentional: true,
                    extraData: {
                        scenario: Object(_ms_sp_search_common_lib_getScenario__WEBPACK_IMPORTED_MODULE_1__["getScenario"])(applicationId)
                    }
                });
            }
            else {
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent('SuiteNavSearchBox.FocusOut');
            }
        };
        this._serviceScope = serviceScope;
    }
    /**
     * Initial configuration of the search box - Gets called once after the suiteNav has loaded.
     */
    SearchBoxProvider.prototype.configureSearchBox = function (suiteNavConfig) {
        var _this = this;
        if (this._isSearchBoxEnabled()) {
            // This check can be removed with graduation of killswitch 9aa80bce-7894-436c-8b49-14d6b028f55f
            // Only do the initialization once.
            if (this._initializedPromise) {
                return this._initializedPromise;
            }
            var qosMonitor_1 = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('SuiteNavSearchBox.Configure');
            this._initializedPromise = Object(_getSearchShimPromise__WEBPACK_IMPORTED_MODULE_4__["default"])(this._serviceScope)
                .then(function (searchShim) {
                searchShim.OnSearchBoxActivated(_this._onSearchBoxActivatedCallback.bind(_this, suiteNavConfig.preloadedData.clientSideApplicationId));
                searchShim.OnSearchBoxDeactivated(_this._onSearchBoxDeactivatedCallback.bind(_this, suiteNavConfig.preloadedData.clientSideApplicationId));
                qosMonitor_1.writeSuccess();
            })
                .catch(function (error) {
                qosMonitor_1.writeUnexpectedFailure(undefined, error);
            });
            return this._initializedPromise;
        }
        return Promise.resolve();
    };
    SearchBoxProvider.prototype.onActivated = function (callback) {
        var _this = this;
        if (this._onActivatedCallbacks.indexOf(callback) === -1) {
            this._onActivatedCallbacks = this._onActivatedCallbacks.concat(callback);
        }
        // If the search box is currently active, invoke the callback immediately.
        if (this._isActive) {
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('1352a85c-0818-4248-9f4d-4eab45b9a75b'
            /* '09/29/2020', '[stvikenv] Invoke new onActivated callbacks immediately if the search box is currently active.' */
            )) {
                callback();
            }
        }
        // Return a function to unsubscribe.
        return function () {
            _this._onActivatedCallbacks = _this._onActivatedCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Updates the search box configuration - Gets called every time an app loads the suiteNav.
     */
    SearchBoxProvider.prototype.updateSearchBoxConfiguration = function (suiteNavConfig) {
        if (!!suiteNavConfig.searchBoxConfigurationCallback) {
            suiteNavConfig.searchBoxConfigurationCallback();
        }
    };
    SearchBoxProvider.prototype._isSearchBoxEnabled = function () {
        return _SuiteNavManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__["default"].isSearchBoxInHeaderFlighted();
    };
    SearchBoxProvider.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-suite-nav:SearchBoxProvider', SearchBoxProvider);
    return SearchBoxProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (SearchBoxProvider);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-suite-nav-searchBoxProvider_none.js.map