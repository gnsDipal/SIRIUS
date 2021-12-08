(window["webpackJsonpf1006a38_983e_4851_ba4a_70a12aaf94b8_0_1_0"] = window["webpackJsonpf1006a38_983e_4851_ba4a_70a12aaf94b8_0_1_0"] || []).push([["sp-multilingual-muisettingspage"],{

/***/ "05W4":
/*!**************************************************!*\
  !*** ./lib/dataSources/SettingPageDataSource.js ***!
  \**************************************************/
/*! exports provided: SettingPageDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageDataSource", function() { return SettingPageDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "o1EW");
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Killswitches */ "VZb/");





var SettingPageDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SettingPageDataSource, _super);
    function SettingPageDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getMultilingualFeature = function () {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + ".GetMultilingualFeatureSetting");
            return _this._getRequest("/_api/web/features/GetById(guid'" + SettingPageDataSource.GUID + "')")
                .then(function (_a) {
                var DefinitionId = _a.DefinitionId;
                monitor.writeSuccess();
                if (DefinitionId) {
                    return { isFeatureActivated: true };
                }
                return { isFeatureActivated: false };
            })
                .catch(function (response) {
                monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to get feature setting"), {
                    correlationId: response.correlationId,
                    status: response.status
                });
                return Promise.resolve();
            });
        };
        _this.setMultilingualFeature = function (activate) {
            if (activate === void 0) { activate = false; }
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + "." + (activate ? 'Set' : 'Clear') + "MultilingualFeatureSetting");
            var pageContext = _this.pageContext;
            var headers = _this._headers;
            var option = activate ? 'add' : 'remove';
            return _this.post(pageContext.web.absoluteUrl, "/_api/web/features/" + option + "(guid'" + SettingPageDataSource.GUID + "')", '' /* queryString */, JSON.stringify({}) /* body */, '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
                .then(function (response) {
                monitor.writeSuccess();
                return { isFeatureActivated: activate };
            })
                .catch(function (response) {
                if (!Object(_Killswitches__WEBPACK_IMPORTED_MODULE_4__["updateMLPMonitorKSActive"])()) {
                    response
                        .json()
                        .then(function (resolvedResponse) {
                        if (resolvedResponse &&
                            resolvedResponse.error &&
                            resolvedResponse.error.code &&
                            (resolvedResponse.error.code.indexOf('DuplicateNameException') > -1 ||
                                resolvedResponse.error.code.indexOf('UnauthorizedAccessException') > -1)) {
                            var isDuplicateNameException = resolvedResponse.error.code.indexOf('DuplicateNameException') > -1;
                            monitor.writeExpectedFailure(isDuplicateNameException
                                ? SettingPageDataSource.DUPLICATE_NAME_ERROR_MSG
                                : SettingPageDataSource.UNAUTHORIZED_ACCESS_ERROR_MSG, Error(resolvedResponse.message && "Failed to " + option + " feature"), {
                                correlationId: response.correlationId,
                                status: response.status,
                                code: resolvedResponse.error.code
                            });
                        }
                        else {
                            monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to " + option + " feature"), {
                                correlationId: response.correlationId,
                                status: response.status
                            });
                        }
                    })
                        .catch(function () {
                        monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed resolve Error message"), {
                            correlationId: response.correlationId,
                            status: response.status
                        });
                    });
                }
                else {
                    monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to " + option + " feature"), {
                        correlationId: response.correlationId,
                        status: response.status
                    });
                }
                return { isFeatureActivated: activate };
            });
        };
        _this.getOverwriteTranslationsSetting = function () {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + ".GetOverwriteTranslationsSetting");
            return _this._getRequest("/_api/web")
                .then(function (_a) {
                var OverwriteTranslationsOnChange = _a.OverwriteTranslationsOnChange;
                monitor.writeSuccess();
                if (OverwriteTranslationsOnChange) {
                    return { isOverriden: true };
                }
                return { isOverriden: false };
            })
                .catch(function (response) {
                monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to get overwrite setting"), {
                    correlationId: response.correlationId,
                    status: response.status
                });
                return Promise.resolve();
            });
        };
        _this.setOverwriteTranslationsSetting = function (isOverriden) {
            if (isOverriden === void 0) { isOverriden = false; }
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + "." + (isOverriden ? 'Set' : 'Clear') + "OverwriteTranslationsSetting");
            var pageContext = _this.pageContext;
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata=verbose');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            headers.append('x-http-method', 'MERGE');
            headers.append('odata-version', '3.0');
            return _this.patch(pageContext.web.absoluteUrl, "/_api/web", '' /* queryString */, JSON.stringify({
                __metadata: {
                    type: 'SP.Web'
                },
                OverwriteTranslationsOnChange: isOverriden
            }), '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
                .then(function (response) {
                monitor.writeSuccess();
                return { isOverriden: isOverriden };
            })
                .catch(function (response) {
                monitor.writeUnexpectedFailure(SettingPageDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to set overwrite setting"), {
                    correlationId: response.correlationId,
                    status: response.status
                });
                return Promise.resolve();
            });
        };
        // tslint:disable-next-line:no-any
        _this._getRequest = function (apiRelativePath) {
            var pageContext = _this.pageContext;
            var headers = _this._headers;
            return _this.get(pageContext.web.absoluteUrl, apiRelativePath, '' /* queryString */, '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, false /* skipJsonParse */);
        };
        return _this;
    }
    Object.defineProperty(SettingPageDataSource.prototype, "_headers", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata.metadata=minimal');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    SettingPageDataSource.GUID = '24611c05-ee19-45da-955f-6602264abaf8';
    SettingPageDataSource.ERROR_MSG = 'SettingPageDataSourceError';
    SettingPageDataSource.DUPLICATE_NAME_ERROR_MSG = 'SettingPageDataSourceError_Duplicate_Name';
    SettingPageDataSource.UNAUTHORIZED_ACCESS_ERROR_MSG = 'SettingPageDataSourceError_Access_Error';
    return SettingPageDataSource;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]));



/***/ }),

/***/ "9hiF":
/*!***********************************************!*\
  !*** ./lib/mui-setting-page/loc/Strings.resx ***!
  \***********************************************/
/*! exports provided: DocumentTitle, MainHeader, DefaultLanguage, MultilingualSupport, ToggleOn, ToggleOff, MultilingualSupportOn, MultilingualSupportOff, OverwriteTranslationsOn, OverwriteTranslationsOff, AlternateLanguages, OutOfTheBoxTranslations, Show, Hide, OverwriteTranslations, OverwriteTranslationsDescription, OverwriteTranslationsMoreInfo, Save, Cancel, UnsavedChanges, LanguageSection, LanguageColumnHeader, TranslatorsColumnHeader, ActionsColumnHeader, PeoplePickerPlaceholder, LanguageSelectionPlaceholder, LanguageSelectionAriaLabel, Remove, RemoveLabelFormat, RemoveTranslator, SettingsSaved, SettingsNotSaved, PeoplePickerAriaLabelFormat, PeoplePickerAriaLabel, LoadingText, NoResultsFoundText, moreCharactersText, SuggestionsAvailableAlertText, SuggestionsContainerAriaLabel, FailToRenderError, TranslatorsColumnToolTip, TranslatorsLearnMoreLink, TranslatorsNoEntryMessage, SaveDisabledTooltip, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DocumentTitle\":\"DocumentTitle\",\"MainHeader\":\"MainHeader\",\"DefaultLanguage\":\"DefaultLanguage\",\"MultilingualSupport\":\"MultilingualSupport\",\"ToggleOn\":\"ToggleOn\",\"ToggleOff\":\"ToggleOff\",\"MultilingualSupportOn\":\"MultilingualSupportOn\",\"MultilingualSupportOff\":\"MultilingualSupportOff\",\"OverwriteTranslationsOn\":\"OverwriteTranslationsOn\",\"OverwriteTranslationsOff\":\"OverwriteTranslationsOff\",\"AlternateLanguages\":\"AlternateLanguages\",\"OutOfTheBoxTranslations\":\"OutOfTheBoxTranslations\",\"Show\":\"Show\",\"Hide\":\"Hide\",\"OverwriteTranslations\":\"OverwriteTranslations\",\"OverwriteTranslationsDescription\":\"OverwriteTranslationsDescription\",\"OverwriteTranslationsMoreInfo\":\"OverwriteTranslationsMoreInfo\",\"Save\":\"Save\",\"Cancel\":\"Cancel\",\"UnsavedChanges\":\"UnsavedChanges\",\"LanguageSection\":\"LanguageSection\",\"LanguageColumnHeader\":\"LanguageColumnHeader\",\"TranslatorsColumnHeader\":\"TranslatorsColumnHeader\",\"ActionsColumnHeader\":\"ActionsColumnHeader\",\"PeoplePickerPlaceholder\":\"PeoplePickerPlaceholder\",\"LanguageSelectionPlaceholder\":\"LanguageSelectionPlaceholder\",\"LanguageSelectionAriaLabel\":\"LanguageSelectionAriaLabel\",\"Remove\":\"Remove\",\"RemoveLabelFormat\":\"RemoveLabelFormat\",\"RemoveTranslator\":\"RemoveTranslator\",\"SettingsSaved\":\"SettingsSaved\",\"SettingsNotSaved\":\"SettingsNotSaved\",\"PeoplePickerAriaLabelFormat\":\"PeoplePickerAriaLabelFormat\",\"PeoplePickerAriaLabel\":\"PeoplePickerAriaLabel\",\"LoadingText\":\"LoadingText\",\"NoResultsFoundText\":\"NoResultsFoundText\",\"moreCharactersText\":\"moreCharactersText\",\"SuggestionsAvailableAlertText\":\"SuggestionsAvailableAlertText\",\"SuggestionsContainerAriaLabel\":\"SuggestionsContainerAriaLabel\",\"FailToRenderError\":\"FailToRenderError\",\"TranslatorsColumnToolTip\":\"TranslatorsColumnToolTip\",\"TranslatorsLearnMoreLink\":\"TranslatorsLearnMoreLink\",\"TranslatorsNoEntryMessage\":\"TranslatorsNoEntryMessage\",\"SaveDisabledTooltip\":\"SaveDisabledTooltip\"}");

/***/ }),

/***/ "A0pP":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/mui-setting-page/MuiSettingPageLayout.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".c_b_f298b284{overflow-y:auto}.e_b_f298b284{max-width:1204px!important;padding:32px;margin:0 auto}.e_b_f298b284 .f_b_f298b284{font-size:21px}.e_b_f298b284 .g_b_f298b284{font-weight:400}.e_b_f298b284 .h_b_f298b284{padding:8px 0}.e_b_f298b284 .h_b_f298b284 .i_b_f298b284{font-size:14px;font-weight:400;font-weight:600}.e_b_f298b284 .h_b_f298b284 p{margin:5px 0}.e_b_f298b284 .h_b_f298b284 p a{margin:0 5px}[dir=ltr] .e_b_f298b284 .h_b_f298b284 .j_b_f298b284{text-align:left}[dir=rtl] .e_b_f298b284 .h_b_f298b284 .j_b_f298b284{text-align:right}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 span{color:\"[theme:neutralSecondary, default: #605e5c]\"}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 span.g_b_f298b284{vertical-align:middle;margin:0 0 0 8px}[dir=rtl] .e_b_f298b284 .h_b_f298b284 .j_b_f298b284 span.g_b_f298b284{margin:0 8px 0 0}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284{width:100%;display:-ms-flexbox;display:flex;border-bottom:1px solid;border-color:\"[theme:neutrallight, default: #edebe9]\"}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284 .l_b_f298b284{font-weight:600;color:\"[theme:neutralPrimary, default: #323130]\";font-size:14px;padding:12px}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284 .l_b_f298b284 .m_b_f298b284,.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284 .l_b_f298b284 .n_b_f298b284{-ms-flex:0 0 auto;flex:0 0 auto}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284 .l_b_f298b284 .m_b_f298b284{height:auto;bottom:-2px}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .k_b_f298b284 .l_b_f298b284 .m_b_f298b284:hover{background-color:transparent}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .o_b_f298b284{width:100%;border-bottom:1px solid;border-color:\"[theme:neutrallight, default: #edebe9]\"}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .o_b_f298b284 .p_b_f298b284{display:-ms-flexbox;display:flex}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .o_b_f298b284 .p_b_f298b284 .q_b_f298b284{color:\"[theme:neutralPrimary, default: #323130]\";font-size:14px;padding:12px}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .o_b_f298b284 .p_b_f298b284 .q_b_f298b284 label{font-weight:400}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .o_b_f298b284 .p_b_f298b284 .q_b_f298b284 .r_b_f298b284{font-weight:400;height:100%}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .s_b_f298b284{position:relative;height:55px;border-bottom:1px solid;border-color:\"[theme:neutrallight, default: #edebe9]\"}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .s_b_f298b284 .t_b_f298b284{position:absolute;top:50%;transform:translateY(-50%);width:220px}[dir=ltr] .e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .s_b_f298b284 .t_b_f298b284{left:8px}[dir=rtl] .e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .s_b_f298b284 .t_b_f298b284{right:8px}.e_b_f298b284 .h_b_f298b284 .j_b_f298b284 .s_b_f298b284 .t_b_f298b284 input{width:180px}.e_b_f298b284 .h_b_f298b284 .u_b_f298b284{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;height:1470px}@media (min-width:500px){.e_b_f298b284 .h_b_f298b284 .u_b_f298b284{height:758px}}@media (min-width:750px){.e_b_f298b284 .h_b_f298b284 .u_b_f298b284{height:513px}}@media (min-width:1000px){.e_b_f298b284 .h_b_f298b284 .u_b_f298b284{height:390.5px}}.e_b_f298b284 .h_b_f298b284 .u_b_f298b284 .v_b_f298b284{width:250px}.e_b_f298b284 .w_b_f298b284{font-weight:400}.e_b_f298b284 .x_b_f298b284{padding-top:16px;padding-bottom:50px}.e_b_f298b284 .x_b_f298b284 .y_b_f298b284{pointer-events:auto}[dir=ltr] .e_b_f298b284 .x_b_f298b284 .y_b_f298b284{margin-right:8px}[dir=rtl] .e_b_f298b284 .x_b_f298b284 .y_b_f298b284{margin-left:8px}.e_b_f298b284 .x_b_f298b284 .z_b_f298b284 i{margin-top:8px;margin-right:8px}.e_b_f298b284 .x_b_f298b284 .z_b_f298b284 .aa_b_f298b284,.e_b_f298b284 .x_b_f298b284 .z_b_f298b284 i{color:\"[theme:themePrimary, default: #0078d4]\"}.e_b_f298b284 .x_b_f298b284 .z_b_f298b284 .ab_b_f298b284{color:\"[theme:redDark, default: #a4262c]\"}", ""]);


/***/ }),

/***/ "B/Ux":
/*!******************************************************************!*\
  !*** ./lib/mui-setting-page/MuiSettingPageLayout.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./MuiSettingPageLayout.module.css */ "gxuU");
var styles = {
    muiSettingPageLayoutContainer: 'c_b_f298b284',
    muiSettingPageLayout: 'e_b_f298b284',
    mainHeader: 'f_b_f298b284',
    defaultLanguage: 'g_b_f298b284',
    controlSection: 'h_b_f298b284',
    sectionHeader: 'i_b_f298b284',
    translatorGrid: 'j_b_f298b284',
    detailsHeader: 'k_b_f298b284',
    detailsHeaderCell: 'l_b_f298b284',
    infoButton: 'm_b_f298b284',
    tooltip: 'n_b_f298b284',
    detailsRow: 'o_b_f298b284',
    detailsRowFields: 'p_b_f298b284',
    detailsRowCell: 'q_b_f298b284',
    removeLink: 'r_b_f298b284',
    comboBoxContainer: 's_b_f298b284',
    comboBox: 't_b_f298b284',
    alternateGrid: 'u_b_f298b284',
    checkBox: 'v_b_f298b284',
    sectionDescription: 'w_b_f298b284',
    buttonsWrapper: 'x_b_f298b284',
    saveButton: 'y_b_f298b284',
    saveResultMessage: 'z_b_f298b284',
    successMessage: 'aa_b_f298b284',
    errorMessage: 'ab_b_f298b284'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "FTt5":
/*!******************************************************!*\
  !*** ./lib/dataProviders/SettingPageDataProvider.js ***!
  \******************************************************/
/*! exports provided: SettingPageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageDataProvider", function() { return SettingPageDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataSources_SettingPageDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataSources/SettingPageDataSource */ "05W4");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants */ "o1EW");





var SettingPageDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SettingPageDataProvider, _super);
    function SettingPageDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'PageSettings';
        _this.title = '';
        _this.getPageSettings = function () {
            return _this._getCurrent();
        };
        _this.setPageSettings = function (activate) {
            if (activate === void 0) { activate = false; }
            return _this._setCurrent(activate);
        };
        _this.getOverwriteSettings = function () {
            return _this._getOverwriteSetting();
        };
        _this.setOverwriteSettings = function (isOverriden) {
            if (isOverriden === void 0) { isOverriden = false; }
            return _this._setOverwriteSetting(isOverriden);
        };
        // tslint:disable:no-any
        _this.getItems = function () {
            /* no-op */
            return Promise.resolve([]);
        };
        _this._getCurrent = function () {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SettingPageGetSettings");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.getMultilingualFeature();
            })
                .then(function (setting) {
                monitor.writeSuccess();
                return setting;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadPageSettings', error);
                throw error;
            });
        };
        _this._setCurrent = function (activate) {
            if (activate === void 0) { activate = false; }
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SettingPageSetSettings");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.setMultilingualFeature(activate);
            })
                .then(function (setting) {
                monitor.writeSuccess();
                return setting;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadPageSettings', error);
                throw error;
            });
        };
        _this._getOverwriteSetting = function () {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SettingPageGetOverwriteSettings");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.getOverwriteTranslationsSetting();
            })
                .then(function (setting) {
                monitor.writeSuccess();
                return setting;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadPageSettings', error);
                throw error;
            });
        };
        _this._setOverwriteSetting = function (isOverriden) {
            if (isOverriden === void 0) { isOverriden = false; }
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SettingPageSetOverwriteSettings");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.setOverwriteTranslationsSetting(isOverriden);
            })
                .then(function (setting) {
                monitor.writeSuccess();
                return setting;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadPageSettings', error);
                throw error;
            });
        };
        return _this;
    }
    Object.defineProperty(SettingPageDataProvider.prototype, "_ensureDataSource", {
        get: function () {
            if (!this._pageSettingDataSource) {
                this._pageSettingDataSource = new _dataSources_SettingPageDataSource__WEBPACK_IMPORTED_MODULE_3__["SettingPageDataSource"]({
                    pageContext: this.pageContext,
                    spHttpClient: this.spHttpClient
                });
            }
            return this._pageSettingDataSource;
        },
        enumerable: true,
        configurable: true
    });
    return SettingPageDataProvider;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__["BaseDataProvider"]));



/***/ }),

/***/ "Mna5":
/*!**************************************************!*\
  !*** ./lib/dataSources/TranslatorsDataSource.js ***!
  \**************************************************/
/*! exports provided: TranslatorsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorsDataSource", function() { return TranslatorsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants */ "o1EW");





var TranslatorsDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslatorsDataSource, _super);
    function TranslatorsDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTranslators = function () {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".GetTranslators");
            var headers = _this._headers;
            return _this.get(_this.pageContext.web.absoluteUrl, '/_api/web/multilingualsettings/recipients?$expand=recipients', '' /* queryString */, '' /* dataSourceName */, '', headers, true /* throwHttpClientResponse */, false /* skipJsonParse */)
                .then(function (_a) {
                var value = _a.value;
                var languageRecipients = value.map(function (languageRecipient) {
                    var recipients = [];
                    if (languageRecipient.Recipients) {
                        recipients = languageRecipient.Recipients.map(function (recipient) {
                            var processedRecipient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, recipient); // tslint:disable-line:no-any
                            var accountName = recipient.UserPrincipalName;
                            processedRecipient.text = processedRecipient.Title;
                            processedRecipient.email = processedRecipient.Email;
                            processedRecipient.userId = processedRecipient.LoginName;
                            processedRecipient.imageUrl = _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["SPUtility"].getUserPhotoUrl(accountName);
                            return processedRecipient;
                        });
                    }
                    return {
                        languageCode: languageRecipient.LanguageCode,
                        translators: recipients
                    };
                });
                monitor.writeSuccess();
                return languageRecipients;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure(TranslatorsDataSource.ERROR_MSG, Error(error.statusMessage && 'Failed to get translators'), {
                    correlationId: error.correlationId,
                    status: error.status
                });
                return Promise.reject(error);
            });
        };
        _this.setTranslators = function (languageTranslators) {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SetTranslators");
            var headers = _this._headers;
            // tslint:disable-next-line:no-any
            var payload = {
                request: {
                    NotificationRecipients: {
                        results: languageTranslators.map(function (languageTranslator) {
                            return {
                                LanguageCode: languageTranslator.languageCode,
                                Recipients: {
                                    results: languageTranslator.translators.map(function (translator) {
                                        var loginName;
                                        if (translator.principalType === 4) {
                                            // tslint:disable-next-line:no-string-literal
                                            loginName = translator['LoginName'] || (translator.rawData && translator.rawData.Key);
                                        }
                                        else {
                                            loginName = translator.userId;
                                        }
                                        return { LoginName: loginName };
                                    })
                                }
                            };
                        })
                    }
                }
            };
            return _this.post(_this.pageContext.web.absoluteUrl, '/_api/web/multilingualsettings/setnotificationrecipients', '' /* queryString */, JSON.stringify(payload), '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
                .then(function (response) {
                monitor.writeSuccess();
                return response;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure(TranslatorsDataSource.ERROR_MSG, Error(error.statusMessage && 'Failed to set translators'), {
                    correlationId: error.correlationId,
                    status: error.status
                });
                return Promise.reject(error);
            });
        };
        return _this;
    }
    Object.defineProperty(TranslatorsDataSource.prototype, "_headers", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json;odata=verbose;charset=utf-8');
            headers.append('Accept', 'application/json');
            headers.append('odata-version', '3.0');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    TranslatorsDataSource.ERROR_MSG = 'TranslatorsDataSourceError';
    return TranslatorsDataSource;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__["SPDataSource"]));



/***/ }),

/***/ "UVu5":
/*!**************************************************************************!*\
  !*** ../sp-component-utilities/lib/oAuthToken/OAuthTokenProviderShim.js ***!
  \**************************************************************************/
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

/***/ "ZhAW":
/*!*************************************************************!*\
  !*** ./lib/dataProviders/SupportedLanguagesDataProvider.js ***!
  \*************************************************************/
/*! exports provided: SupportedLanguagesDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLanguagesDataProvider", function() { return SupportedLanguagesDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataSources_SupportedLanguagesDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataSources/SupportedLanguagesDataSource */ "vW1H");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants */ "o1EW");





var SupportedLanguagesDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SupportedLanguagesDataProvider, _super);
    function SupportedLanguagesDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'SupportedLanguages';
        _this.title = '';
        _this.getSupportedLanguages = function () {
            return _this._getLanguages();
        };
        _this.setSupportedLanguages = function (languages) {
            return _this._setLanguages(languages);
        };
        // tslint:disable:no-any
        _this.getItems = function () {
            /* no-op */
            return Promise.resolve([]);
        };
        _this._getLanguages = function () {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SupportedLanguagesGetLanguages");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.getSupportedLanguages();
            })
                .then(function (languages) {
                monitor.writeSuccess();
                return languages;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadSupportedLanguages', error);
                throw error;
            });
        };
        _this._setLanguages = function (languages) {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".SupportedLanguagesSetLanguages");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.setSupportedLanguages(languages);
            })
                .then(function (results) {
                monitor.writeSuccess();
                return languages;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadSupportedLanguages', error);
                throw error;
            });
        };
        return _this;
    }
    Object.defineProperty(SupportedLanguagesDataProvider.prototype, "_ensureDataSource", {
        get: function () {
            if (!this._supportedLanguagesDataSource) {
                this._supportedLanguagesDataSource = new _dataSources_SupportedLanguagesDataSource__WEBPACK_IMPORTED_MODULE_3__["SupportedLanguagesDataSource"]({
                    pageContext: this.pageContext,
                    spHttpClient: this.spHttpClient
                });
            }
            return this._supportedLanguagesDataSource;
        },
        enumerable: true,
        configurable: true
    });
    return SupportedLanguagesDataProvider;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__["BaseDataProvider"]));



/***/ }),

/***/ "ferJ":
/*!****************************************************************************************************************************!*\
  !*** ../sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/PeoplePickerDataSourceService.js ***!
  \****************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSourceService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSourceService", function() { return PeoplePickerDataSourceService; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony import */ var _oAuthToken_OAuthTokenProviderShim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../oAuthToken/OAuthTokenProviderShim */ "UVu5");
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


/***/ }),

/***/ "gxuU":
/*!**************************************************************!*\
  !*** ./lib/mui-setting-page/MuiSettingPageLayout.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./MuiSettingPageLayout.module.css */ "A0pP");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "oXZH":
/*!************************************************!*\
  !*** ./lib/mui-setting-page/common/Flights.js ***!
  \************************************************/
/*! exports provided: Flights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flights", function() { return Flights; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var Flights = /** @class */ (function () {
    function Flights() {
    }
    Flights.isNotificationFlightEnabled = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1226 /* MultilingualPagesNotification */);
    };
    return Flights;
}());



/***/ }),

/***/ "pfaT":
/*!****************************************************!*\
  !*** ./lib/mui-setting-page/TranslatorListView.js ***!
  \****************************************************/
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
/* harmony import */ var office_ui_fabric_react_lib_ComboBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/ComboBox */ "iXnO");
/* harmony import */ var office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/DetailsList */ "0q4O");
/* harmony import */ var office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pickers */ "JuHm");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/PeoplePicker */ "sQJ6");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType */ "2+UY");
/* harmony import */ var _ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/index */ "vkWw");
/* harmony import */ var _LanguageNames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LanguageNames */ "qAjK");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Constants */ "o1EW");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/Flights */ "oXZH");
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Killswitches */ "VZb/");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loc/Strings.resx */ "9hiF");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "9hiF", 1);
/* harmony import */ var _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MuiSettingPageLayout.module.scss */ "B/Ux");

















var TRANSLATOR_TOOLTIP_LINK = 'https://go.microsoft.com/fwlink/?linkid=2114279';
var LANGUAGE_COLUMN_MIN_WIDTH = 200;
var TRANSLATORS_COLUMN_MIN_WIDTH = 150;
var ACTION_COLUMN_MIN_WIDTH = 150;
var TranslatorListView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslatorListView, _super);
    function TranslatorListView(props) {
        var _this = _super.call(this, props) || this;
        _this._wrapperClassName = '';
        _this._tableColumns = [];
        _this._idPrefixes = {};
        _this._alreadyProcessedOptions = false;
        /* tslint:disable:no-bitwise */
        _this._allowedPrincipalType = _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_9__["default"].user | _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_9__["default"].securityGroup;
        /* tslint:enable:no-bitwise */
        _this._isGraphAPISupported = true;
        _this._relevantPersonas = [];
        _this._targetElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderDetailsListHeader = function (detailsHeader) {
            var columnHeaderProps = {
                'data-automationid': 'ColumnsHeaderColumn',
                className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-DetailsHeader-cell', _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].detailsHeaderCell)
            };
            var tipContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusZone"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onMouseEnter: _this._showCallout, onMouseLeave: _this._hideCallout },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["TranslatorsColumnToolTip"],
                        "\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { target: '_blank', href: TRANSLATOR_TOOLTIP_LINK }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["TranslatorsLearnMoreLink"]))));
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'row', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FocusZone', 'ms-DetailsHeader', _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].detailsHeader), "data-automationid": 'DetailsHeader' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnHeaderProps, { role: 'columnheader', "aria-colindex": 1, "data-item-key": detailsHeader.columns[0].key, style: { width: LANGUAGE_COLUMN_MIN_WIDTH + "px" } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, detailsHeader.columns[0].name)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnHeaderProps, { role: 'columnheader', "aria-colindex": 2, "data-item-key": detailsHeader.columns[1].key, style: { width: "calc(100% - " + (LANGUAGE_COLUMN_MIN_WIDTH + ACTION_COLUMN_MIN_WIDTH) + "px)" } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _this._isNotificationFlightEnabled ? detailsHeader.columns[1].name : ''),
                    _this._renderIcon()),
                _this._renderCallout(tipContent),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnHeaderProps, { role: 'presentation', "data-item-key": detailsHeader.columns[2].key, style: { width: ACTION_COLUMN_MIN_WIDTH + "px" } }), !_Killswitches__WEBPACK_IMPORTED_MODULE_14__["Killswitches"].muiSettingsActionsHeader.isActivated ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: 'columnheader', "aria-label": detailsHeader.columns[2].ariaLabel }, detailsHeader.columns[2].name)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, detailsHeader.columns[2].name)))));
        };
        _this._renderIcon = function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { ref: _this._targetElement, onMouseEnter: _this._showCallout, onMouseLeave: _this._hideCallout },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { id: "translatorListViewToolTipButton", onClick: _this._showCallout, ariaDescription: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["TranslatorsColumnToolTip"], className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].infoButton, iconProps: { iconName: 'Info' } })));
        };
        _this._renderCallout = function (tipContent) {
            if (!_this.state.isCalloutVisible) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusTrapCallout"], { target: _this._targetElement.current, directionalHint: 1, setInitialFocus: true, onDismiss: _this._hideCallout, styles: { root: ['ms-Tooltip', { padding: '8px' }] }, calloutMaxWidth: 364 }, tipContent));
        };
        _this._showCallout = function () {
            _this._clearTimer();
            _this.setState({ isCalloutVisible: true });
        };
        _this._hideCallout = function () {
            _this._clearTimer();
            _this._timer = setTimeout(function () {
                _this.setState({ isCalloutVisible: false });
            }, 1000);
        };
        _this._renderDetailsListRows = function (detailsRow) {
            var itemIndex = detailsRow.itemIndex;
            var detailsRowProps = {
                className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-DetailsRow-cell', _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].detailsRowCell)
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'row', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FocusZone', 'ms-DetailsRow', _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].detailsRow), "data-is-focusable": true, "data-automationid": 'DetailsRow', id: 'row' + itemIndex, onKeyDown: _this._handleKeyDownDetailRow(detailsRow.itemIndex) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-DetailsRow-fields', _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].detailsRowFields), "data-automationid": 'DetailsRowFields' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsRowProps, { role: 'rowheader', "aria-colindex": 1, "data-automation-key": detailsRow.columns[0].key, style: { width: LANGUAGE_COLUMN_MIN_WIDTH + "px" } }), detailsRow.item.languageNameLabel),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsRowProps, { role: 'gridcell', "aria-colindex": 2, "data-automation-key": detailsRow.columns[1].key, style: { width: "calc(100% - " + (LANGUAGE_COLUMN_MIN_WIDTH + ACTION_COLUMN_MIN_WIDTH) + "px)" } }), _this._isNotificationFlightEnabled && detailsRow.item.translators),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsRowProps, { role: 'gridcell', "aria-colindex": 3, "data-automation-key": detailsRow.columns[2].key, style: { width: ACTION_COLUMN_MIN_WIDTH + "px" } }), detailsRow.item.removeLink))));
        };
        _this._handleKeyDownDetailRow = function (itemIndex) { return function (ev) {
            var prefix = _this._isNotificationFlightEnabled
                ? _this._idPrefixes.picker
                : _this._idPrefixes.removeLink;
            if (ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
                ev.preventDefault();
                if (itemIndex === _this.props.supportedLanguages.length) {
                    _this._focusOnElementById(prefix + 0);
                }
                else {
                    _this._focusOnElementById(prefix + itemIndex);
                }
            }
            else if (ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up) {
                ev.preventDefault();
                if (itemIndex === 1) {
                    _this._focusOnElementById(prefix + (_this.props.supportedLanguages.length - 1));
                }
                else {
                    _this._focusOnElementById(prefix + (itemIndex - 2));
                }
            }
        }; };
        _this._getLanguageNameLabel = function (languageName) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Label"], null, languageName);
        };
        _this._getCompactPeoplePicker = function (index, languageCode, languageName) {
            var suggestionProps = {
                showRemoveButtons: false,
                loadingText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["LoadingText"],
                noResultsFoundText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["NoResultsFoundText"],
                suggestionsHeaderText: _this.state.filterText.length < 2 ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["moreCharactersText"] : undefined,
                suggestionsAvailableAlertText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["SuggestionsAvailableAlertText"],
                suggestionsContainerAriaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["SuggestionsContainerAriaLabel"]
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_5__["NormalPeoplePicker"], { componentRef: _this._peoplePickers[index], onResolveSuggestions: _this._onResolveSuggestions, onRenderSuggestionsItem: _this._onRenderSuggestionsItem, onEmptyInputFocus: _this._onEmptyInputFocus, onItemSelected: _this._onItemSelected, onChange: _this._handleChangePeoplePicker(languageCode), pickerSuggestionsProps: suggestionProps, selectedItems: _this.props.languageTranslators[languageCode], className: 'ms-PeoplePicker', removeButtonAriaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["RemoveTranslator"], onBlur: _this._peoplePickerOnBlur(index), inputProps: {
                    'aria-label': !_Killswitches__WEBPACK_IMPORTED_MODULE_14__["Killswitches"].muiSettingsPeoplePickerLabel.isActivated()
                        ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["PeoplePickerAriaLabelFormat"], languageName)
                        : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["PeoplePickerAriaLabel"],
                    placeholder: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["PeoplePickerPlaceholder"],
                    id: _this._idPrefixes.picker + index,
                    onFocus: function (ev) {
                        _this.setState({ filterText: ev.target.value });
                    },
                    onKeyDown: function (ev) {
                        if (ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left || ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right) {
                            _this._focusOnElementById(_this._idPrefixes.removeLink + index);
                        }
                    }
                }, resolveDelay: 300, styles: { text: { border: 'none' } } }));
        };
        _this._handleChangePeoplePicker = function (languageCode) { return function (items) {
            return _this._onItemsChange(items, languageCode);
        }; };
        _this._peoplePickerOnBlur = function (index) { return function (ev) {
            if (!_Killswitches__WEBPACK_IMPORTED_MODULE_14__["Killswitches"].hideTranslatorSuggestionsOnBlur.isActivated()) {
                if (_this._peoplePickers[index]) {
                    var picker = _this._peoplePickers[index].current;
                    if (!!picker) {
                        picker.dismissSuggestions(ev);
                    }
                }
            }
        }; };
        _this._getRemoveLink = function (index, languageName) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { "aria-label": !_Killswitches__WEBPACK_IMPORTED_MODULE_14__["Killswitches"].muiSettingsRemoveLanguageLabel.isActivated()
                    ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_6__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["RemoveLabelFormat"], languageName)
                    : undefined, className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].removeLink, onClick: _this._handleClickRemoveLink(index), id: _this._idPrefixes.removeLink + index, onKeyDown: _this._handleKenDownRemoveLink(index) }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["Remove"]));
        };
        _this._handleKenDownRemoveLink = function (index) { return function (ev) {
            if (ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left || ev.keyCode === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right) {
                _this._focusOnElementById(_this._idPrefixes.picker + index);
            }
        }; };
        _this._handleClickRemoveLink = function (index) { return function () {
            _this._onRemoveLanguage(index);
        }; };
        _this._focusOnLastPicker = function (prevProps) {
            _this._focusOnElementById(_this._idPrefixes.picker + prevProps.supportedLanguages.length);
        };
        _this._focusOnElementById = function (id) {
            var element = document.getElementById(id);
            if (element) {
                element.focus();
            }
        };
        _this._processAvailableOptions = function () {
            var supportedLanguages = {};
            _this.props.supportedLanguages.forEach(function (languageCode) { return (supportedLanguages[languageCode] = true); });
            var availableOptions = Object.keys(_this._languageByCode)
                .filter(function (key) {
                return Number(key) !== _this._defaultLanguageCode && !supportedLanguages[key];
            })
                .map(function (key) {
                return { key: key, text: _this._languageByCode[key].resource };
            });
            availableOptions.sort(_this._sortByAlphabeticalOrder);
            _this.setState({ availableOptions: availableOptions });
        };
        _this._onAddLanguage = function (ev, option, index, value) {
            if (index !== undefined && _this.state.availableOptions[index]) {
                ev.preventDefault();
                var languageCode = Number(_this.state.availableOptions[index].key);
                var availableOptions = Object.assign([], _this.state.availableOptions);
                availableOptions.splice(index, 1);
                _this.setState({
                    availableOptions: availableOptions
                });
                _this.props.onLanguagesListChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.props.supportedLanguages, [languageCode]));
            }
        };
        _this._onRemoveLanguage = function (index) {
            var languageCode = _this.props.supportedLanguages[index];
            var availableOptions = Object.assign([], _this.state.availableOptions);
            availableOptions.push({ key: languageCode, text: _this._languageByCode[languageCode].resource });
            availableOptions.sort(_this._sortByAlphabeticalOrder);
            _this.setState({
                availableOptions: availableOptions
            });
            _this.props.onLanguagesListChange(_this.props.supportedLanguages.filter(function (code) { return code !== languageCode; }));
        };
        _this._onResolveSuggestions = function (filterText, currentPersonas, limitResults) {
            _this.setState({ filterText: filterText });
            if (filterText && filterText.length > 1) {
                return _this._onFilterChange(filterText, currentPersonas);
            }
            else {
                if (filterText) {
                    return _this._filterSelected(_this._relevantPersonas.filter(function (persona) {
                        return (persona.name.indexOf(filterText) === 0 || persona.userId.split('@')[0].indexOf(filterText) === 0);
                    }), currentPersonas);
                }
                else {
                    return _this._filterSelected(_this._relevantPersonas, currentPersonas);
                }
            }
        };
        _this._onRenderSuggestionsItem = function (persona, suggestionsProps) {
            // tslint:disable-next-line:no-any
            var processedPersona = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, persona);
            processedPersona.text = persona.name || '';
            processedPersona.secondaryText = persona.job || persona.department || '';
            processedPersona.imageUrl = persona.image;
            processedPersona.size = _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["PersonaSize"].small;
            processedPersona.showInitialsUntilImageLoads = true;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pickers__WEBPACK_IMPORTED_MODULE_5__["PeoplePickerItemSuggestion"], { personaProps: processedPersona, suggestionsProps: suggestionsProps, styles: { personaWrapper: { width: '100%' } } }));
        };
        _this._onEmptyInputFocus = function (currentPersonas) {
            _this.setState({ filterText: '' });
            if (_this._isGraphAPISupported && (!_this._relevantPersonas || _this._relevantPersonas.length === 0)) {
                var monitor_1 = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].PREFIX + ".RelevanceSearch");
                return _this._peoplePickerDataProvider
                    .search('', _this._peoplePickerQueryParams)
                    .promise.then(function (personList) {
                    if (!personList ||
                        personList.length === 0 ||
                        (personList.length === 1 && personList[0].userId === '')) {
                        _this._isGraphAPISupported = false;
                        _this._relevantPersonas = [];
                        monitor_1.writeUnexpectedFailure('RelevanceSearchGraphService', new Error('Invalid Search Result'));
                        return [];
                    }
                    _this._relevantPersonas = personList;
                    var filteredResults = _this._filterSelected(personList, currentPersonas);
                    monitor_1.writeSuccess();
                    return filteredResults;
                })
                    .catch(function (error) {
                    monitor_1.writeUnexpectedFailure('RelevanceSearchGraphService', error);
                    return _this._filterSelected(_this._relevantPersonas, currentPersonas);
                });
            }
            else {
                return _this._filterSelected(_this._relevantPersonas, currentPersonas);
            }
        };
        _this._onItemSelected = function (persona) {
            // tslint:disable-next-line:no-any
            var processedPersona = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, persona);
            processedPersona.text = processedPersona.name;
            processedPersona.imageUrl = processedPersona.image;
            return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(processedPersona); }, 250); });
        };
        _this._onItemsChange = function (items, languageCode) {
            var languageTranslators = Object.assign({}, _this.props.languageTranslators);
            languageTranslators[languageCode] = items;
            _this.props.onLanguageTranslatorsChange(languageTranslators);
        };
        _this._onFilterChange = function (filterText, currentPersonas) {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_7__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].PREFIX + ".FilterSearch");
            return _this._peoplePickerDataProvider
                .search(filterText, _this._peoplePickerQueryParams)
                .promise.then(function (personList) {
                var filteredResults = _this._filterSelected(personList, currentPersonas);
                monitor.writeSuccess();
                return filteredResults;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FilterSearchGraphService', error);
                return _this._filterSelected(_this._relevantPersonas, currentPersonas);
            });
        };
        _this._filterSelected = function (personas, currentPersonas) {
            if (!currentPersonas || !currentPersonas.length || currentPersonas.length === 0) {
                return personas;
            }
            return personas.filter(function (persona) {
                /* tslint:disable:no-bitwise */
                // bit-wise operation: true for (0b101 && 0b001) or (0b101 && 0b100)
                if (persona.principalType && persona.principalType & _this._allowedPrincipalType) {
                    /* tslint:enable:no-bitwise */
                    return currentPersonas.filter(function (c) { return c.userId === persona.userId; }).length === 0;
                }
                else {
                    return false;
                }
            });
        };
        _this._resetTheme = function () {
            _this._theme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])();
        };
        _this._sortByAlphabeticalOrder = function (language1, language2) {
            if (language1.text < language2.text) {
                return -1;
            }
            else if (language1.text > language2.text) {
                return 1;
            }
            return 0;
        };
        _this.state = {
            filterText: '',
            availableOptions: [],
            error: undefined,
            isCalloutVisible: false
        };
        _this._defaultLanguageCode = _this.props.pageContext.web.language;
        _this._languageByCode = _LanguageNames__WEBPACK_IMPORTED_MODULE_11__["LanguageNames"].getInstalledLanguages(_this.props.supportedLanguages, _this._defaultLanguageCode);
        _this._wrapperClassName = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])({
            selectors: {
                '& .ms-ComboBox-container': { width: '240px' },
                '& .ms-ComboBox': { borderWidth: 0, paddingLeft: '4px' }
            }
        });
        _this._idPrefixes = {
            picker: 'picker',
            removeLink: 'removeLink'
        };
        _this._tableColumns = [
            {
                key: 'language',
                name: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["LanguageColumnHeader"],
                fieldName: 'languageNameLabel',
                minWidth: LANGUAGE_COLUMN_MIN_WIDTH,
                isRowHeader: true
            },
            {
                key: 'translators',
                name: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["TranslatorsColumnHeader"],
                fieldName: 'translators',
                minWidth: TRANSLATORS_COLUMN_MIN_WIDTH
            },
            {
                key: 'action',
                name: '',
                fieldName: 'removeLink',
                ariaLabel: !_Killswitches__WEBPACK_IMPORTED_MODULE_14__["Killswitches"].muiSettingsActionsHeader.isActivated()
                    ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["ActionsColumnHeader"]
                    : undefined,
                minWidth: ACTION_COLUMN_MIN_WIDTH
            }
        ];
        _this._isNotificationFlightEnabled = _common_Flights__WEBPACK_IMPORTED_MODULE_13__["Flights"].isNotificationFlightEnabled();
        _this._peoplePickerQueryParams = {
            allowEmailAddresses: true,
            groupID: 0,
            maximumEntitySuggestions: 30,
            principalSource: 15,
            blockExternalUsers: true,
            principalType: _ms_odsp_datasources_lib_dataSources_roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_9__["default"].all,
            useGraph: true
        };
        var peoplePickerDataSourceService = _this.props.serviceScope.consume(_ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_10__["PeoplePickerDataSourceService"].serviceKey);
        _this._peoplePickerDataSource = peoplePickerDataSourceService
            ? peoplePickerDataSourceService.peoplePickerDataSource
            : new _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_8__["PeoplePickerDataSource"](_this.props.pageContext.legacyPageContext);
        _this._peoplePickerDataProvider = new _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_8__["PeoplePickerProvider"]({
            pageContext: _this.props.pageContext.legacyPageContext,
            peoplePickerDataSource: _this._peoplePickerDataSource
        });
        _this._resetTheme();
        if (!!_this._languageByCode) {
            _this._peoplePickers = new Array(Object.keys(_this._languageByCode).length);
            for (var i = 0; i < Object.keys(_this._languageByCode).length; i++) {
                _this._peoplePickers[i] = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
            }
        }
        return _this;
    }
    TranslatorListView.prototype.componentDidMount = function () {
        this._processAvailableOptions();
    };
    TranslatorListView.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.supportedLanguages.length === 0 && this.props.supportedLanguages.length > 0) {
            if (!this._alreadyProcessedOptions) {
                this._processAvailableOptions();
                this._alreadyProcessedOptions = true;
            }
            else {
                this._focusOnLastPicker(prevProps);
            }
        }
        else if (prevProps.supportedLanguages.length + 1 === this.props.supportedLanguages.length) {
            this._focusOnLastPicker(prevProps);
        }
        this._resetTheme();
    };
    TranslatorListView.prototype.componentWillUnmount = function () {
        this._clearTimer();
    };
    TranslatorListView.prototype.componentDidCatch = function (error) {
        this.setState({ error: error });
    };
    TranslatorListView.prototype.render = function () {
        var error = this.state.error;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].controlSection, this._wrapperClassName) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].sectionHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["LanguageSection"]),
            error ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["MessageBar"], { messageBarType: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["MessageBarType"].error }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["FailToRenderError"])) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].translatorGrid, "data-automation-id": 'MuiMLPLanguageList' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_4__["DetailsList"], { items: this._detailsListItems, columns: this._tableColumns, setKey: 'set', selectionMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].none, layoutMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_4__["DetailsListLayoutMode"].justified, ariaLabelForSelectionColumn: 'Toggle selection', ariaLabelForSelectAllCheckbox: 'Toggle selection for all items', checkButtonAriaLabel: 'Row checkbox', onRenderDetailsHeader: this._renderDetailsListHeader, onRenderRow: this._renderDetailsListRows }),
                this._emptyTableRows))));
    };
    TranslatorListView.prototype._clearTimer = function () {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    };
    Object.defineProperty(TranslatorListView.prototype, "_detailsListItems", {
        get: function () {
            var _this = this;
            var detailsListItems = this.props.supportedLanguages
                .filter(function (languageCode) {
                return !!_this._languageByCode[languageCode];
            })
                .map(function (languageCode, index) {
                var languageName = _this._languageByCode[languageCode].resource;
                return {
                    key: languageCode,
                    languageNameLabel: _this._getLanguageNameLabel(languageName),
                    translators: _this._getCompactPeoplePicker(index, languageCode, languageName),
                    removeLink: _this._getRemoveLink(index, languageName)
                };
            });
            if (this._defaultLanguageCode) {
                detailsListItems.unshift({
                    key: this._defaultLanguageCode,
                    languageNameLabel: this._getLanguageNameLabel(this._languageByCode[this._defaultLanguageCode].resource),
                    translators: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].defaultLanguage }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["TranslatorsNoEntryMessage"]),
                    removeLink: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null)
                });
            }
            return detailsListItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslatorListView.prototype, "_emptyTableRows", {
        get: function () {
            var placeholderStyles = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])({
                selectors: {
                    '& input::placeholder': {
                        color: this._theme.isInverted
                            ? this._theme.palette.neutralTertiaryAlt
                            : this._theme.semanticColors.inputPlaceholderText
                    }
                }
            });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].comboBoxContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ComboBox__WEBPACK_IMPORTED_MODULE_3__["ComboBox"], { "data-automation-id": 'MuiAddLanguage', allowFreeform: true, autoComplete: 'on', options: this.state.availableOptions, onChange: this._onAddLanguage, placeholder: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["LanguageSelectionPlaceholder"], ariaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_15__["LanguageSelectionAriaLabel"], className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].comboBox, placeholderStyles), styles: {
                        optionsContainerWrapper: {
                            maxHeight: '480px'
                        }
                    } })));
        },
        enumerable: true,
        configurable: true
    });
    return TranslatorListView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TranslatorListView);


/***/ }),

/***/ "v8ko":
/*!******************************************************!*\
  !*** ./lib/dataProviders/TranslatorsDataProvider.js ***!
  \******************************************************/
/*! exports provided: TranslatorsDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorsDataProvider", function() { return TranslatorsDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataSources_TranslatorsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataSources/TranslatorsDataSource */ "Mna5");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants */ "o1EW");





var TranslatorsDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslatorsDataProvider, _super);
    function TranslatorsDataProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'Translators';
        _this.title = '';
        // tslint:disable:no-any
        _this.getItems = function () {
            /* no-op */
            return Promise.resolve([]);
        };
        _this.getTranslators = function () {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".TranslatorsGetTranslators");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.getTranslators();
            })
                .then(function (languageTranslators) {
                monitor.writeSuccess();
                return languageTranslators;
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToReadTranslators', error);
                throw error;
            });
        };
        _this.setTranslators = function (languageTranslators) {
            var monitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PREFIX + ".TranslatorsSetTranslators");
            return _this.resolveServices()
                .then(function () {
                return _this._ensureDataSource.setTranslators(languageTranslators);
            })
                .then(function () {
                monitor.writeSuccess();
            })
                .catch(function (error) {
                monitor.writeUnexpectedFailure('FailedToSaveTranslators', error);
                throw error;
            });
        };
        return _this;
    }
    Object.defineProperty(TranslatorsDataProvider.prototype, "_ensureDataSource", {
        get: function () {
            if (!this._translatorsDataSource) {
                this._translatorsDataSource = new _dataSources_TranslatorsDataSource__WEBPACK_IMPORTED_MODULE_3__["TranslatorsDataSource"]({
                    pageContext: this.pageContext,
                    spHttpClient: this.spHttpClient
                });
            }
            return this._translatorsDataSource;
        },
        enumerable: true,
        configurable: true
    });
    return TranslatorsDataProvider;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_2__["BaseDataProvider"]));



/***/ }),

/***/ "vW1H":
/*!*********************************************************!*\
  !*** ./lib/dataSources/SupportedLanguagesDataSource.js ***!
  \*********************************************************/
/*! exports provided: SupportedLanguagesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLanguagesDataSource", function() { return SupportedLanguagesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-dataproviders */ "QZHX");
/* harmony import */ var _ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "o1EW");




var SupportedLanguagesDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SupportedLanguagesDataSource, _super);
    function SupportedLanguagesDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSupportedLanguages = function () {
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + ".GetSupportedLanguages");
            var pageContext = _this.pageContext;
            var headers = _this._headers;
            return _this.get(pageContext.web.absoluteUrl, "/_api/web/SupportedUILanguageIds", '' /* queryString */, '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, false /* skipJsonParse */)
                .then(function (_a) {
                var value = _a.value;
                monitor.writeSuccess();
                if (value) {
                    return value;
                }
                return [];
            })
                .catch(function (response) {
                monitor.writeUnexpectedFailure(SupportedLanguagesDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to get language list"), {
                    correlationId: response.correlationId,
                    status: response.status
                });
                return Promise.resolve([]);
            });
        };
        _this.setSupportedLanguages = function (languages) {
            if (languages === void 0) { languages = []; }
            var monitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PREFIX + ".SetSupportedLanguages");
            var pageContext = _this.pageContext;
            var headers = _this._patchHeaders;
            return _this.patch(pageContext.web.absoluteUrl, "/_api/web", '' /* queryString */, JSON.stringify({
                __metadata: {
                    type: 'SP.Web'
                },
                SupportedUILanguageIds: {
                    results: languages
                }
            }), '' /* dataSourceName */, '' /* dataSourceMethodName */, headers, true /* throwHttpClientResponse */, true /* skipJsonParse */)
                .then(function (response) {
                monitor.writeSuccess();
                return languages;
            })
                .catch(function (response) {
                monitor.writeUnexpectedFailure(SupportedLanguagesDataSource.ERROR_MSG, Error(response.statusMessage && "Failed to set language list"), {
                    correlationId: response.correlationId,
                    status: response.status
                });
                return Promise.resolve([]);
            });
        };
        return _this;
    }
    Object.defineProperty(SupportedLanguagesDataSource.prototype, "_headers", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata.metadata=minimal');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportedLanguagesDataSource.prototype, "_patchHeaders", {
        get: function () {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; odata=verbose');
            headers.append('Accept', 'application/json; odata.metadata=minimal');
            headers.append('x-http-method', 'MERGE');
            headers.append('odata-version', '3.0');
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    SupportedLanguagesDataSource.ERROR_MSG = 'SupportedLanguagesDataSourceError';
    return SupportedLanguagesDataSource;
}(_ms_sp_dataproviders__WEBPACK_IMPORTED_MODULE_1__["SPDataSource"]));



/***/ }),

/***/ "vkWw":
/*!****************************************************************************************************!*\
  !*** ../sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/index.js ***!
  \****************************************************************************************************/
/*! exports provided: PeoplePickerDataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PeoplePickerDataSourceService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeoplePickerDataSourceService */ "ferJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSourceService", function() { return _PeoplePickerDataSourceService__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerDataSourceService"]; });




/***/ }),

/***/ "xpJz":
/*!***************************************************************!*\
  !*** ./lib/mui-setting-page/MuiSettingPageLayoutComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var office_ui_fabric_react_lib_Toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Toggle */ "40s1");
/* harmony import */ var _TranslatorListView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TranslatorListView */ "pfaT");
/* harmony import */ var _AlternateLanguagesListView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlternateLanguagesListView */ "zIiH");
/* harmony import */ var _dataProviders_SettingPageDataProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dataProviders/SettingPageDataProvider */ "FTt5");
/* harmony import */ var _dataProviders_SupportedLanguagesDataProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dataProviders/SupportedLanguagesDataProvider */ "ZhAW");
/* harmony import */ var _dataProviders_TranslatorsDataProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dataProviders/TranslatorsDataProvider */ "v8ko");
/* harmony import */ var _LanguageNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../LanguageNames */ "qAjK");
/* harmony import */ var _Killswitches__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Killswitches */ "VZb/");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/Flights */ "oXZH");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Constants */ "o1EW");
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loc/Strings.resx */ "9hiF");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "9hiF", 1);
/* harmony import */ var _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MuiSettingPageLayout.module.scss */ "B/Ux");


















var MuiSettingPageLayoutComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MuiSettingPageLayoutComponent, _super);
    function MuiSettingPageLayoutComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._translatorsChanged = false;
        _this._supportedLanguagesChanged = false;
        _this._toggleMultilingualSupport = function (event, checked) {
            var multilingualSupportOn = _this.state.multilingualSupportOn;
            if (!multilingualSupportOn && checked) {
                var allLcids = Object.keys(_LanguageNames__WEBPACK_IMPORTED_MODULE_12__["LanguageNames"].getInstalledLanguages(_this.state.supportedLanguages, _this.props.pageContext.web.language));
                // If we currently support all possible languages (minus the web's default language) we should reset it
                if (allLcids.length - 1 <= _this.state.supportedLanguages.length) {
                    _this.setState({ supportedLanguages: [] });
                }
            }
            _this.setState({ multilingualSupportOn: !multilingualSupportOn });
        };
        _this._toggleOverwriteTranslations = function (event, checked) {
            var overwriteTranslations = _this.state.overwriteTranslations;
            _this.setState({ overwriteTranslations: !overwriteTranslations });
        };
        _this._toggleShowAdvancedSettings = function (event, checked) {
            var showAdvancedSettings = _this.state.showAdvancedSettings;
            _this.setState({ showAdvancedSettings: !showAdvancedSettings });
        };
        _this._onLanguagesListChange = function (languages) {
            _this._supportedLanguagesChanged = true;
            _this.setState({ supportedLanguages: languages });
        };
        _this._onLanguageTranslatorsChange = function (translators) {
            _this._translatorsChanged = true;
            _this.setState({ languageTranslators: translators });
        };
        _this._getDataThenLoadSuiteNav = function () {
            Promise.all([
                _this._getCurrentMUISupportSetting(),
                _this._getCurrentOverwriteTranslationsSetting(),
                _this._getSupportedLanguages(),
                _this._getLanguageTranslators()
            ]).then(function () {
                _this.setState({
                    hasUnresolvedPromises: false
                });
                _this.props.coreActions.startDeferredComponents();
            }, function (reason /* tslint:disable-line:no-any */) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, reason, 'GetAllSettingData');
                _this.props.coreActions.startDeferredComponents();
            });
        };
        _this._getCurrentMUISupportSetting = function () {
            return _this._settingPageDataProvider
                .getPageSettings()
                .then(function (settings) {
                if (settings) {
                    _this.setState({ multilingualSupportOn: !!settings.isFeatureActivated });
                    _this._multilingualSupportAlreadyOn = !!settings.isFeatureActivated;
                }
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'GetPageSetting');
            });
        };
        _this._getCurrentOverwriteTranslationsSetting = function () {
            return _this._settingPageDataProvider
                .getOverwriteSettings()
                .then(function (settings) {
                if (settings) {
                    _this.setState({ overwriteTranslations: !!settings.isOverriden });
                    _this._overwriteTranslationsAlreadyOn = !!settings.isOverriden;
                }
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'GetOverwriteTranslationsSetting');
            });
        };
        _this._getSupportedLanguages = function () {
            return _this._supportedLanguagesDataProvider
                .getSupportedLanguages()
                .then(function (languages) {
                if (languages) {
                    var defaultCode_1 = _this.props.pageContext.web.language;
                    _this.setState({ supportedLanguages: languages.filter(function (value) { return value !== defaultCode_1; }) });
                }
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'GetSupportedLanguages');
            });
        };
        _this._getLanguageTranslators = function () {
            return _this._translatorsDataProvider
                .getTranslators()
                .then(function (translatorObjects) {
                var languageTranslators = {};
                translatorObjects.forEach(function (translatorObject) {
                    var code = _LanguageNames__WEBPACK_IMPORTED_MODULE_12__["LanguageNames"].getCode(translatorObject.languageCode);
                    if (code && translatorObject.translators) {
                        languageTranslators[code] = translatorObject.translators;
                    }
                });
                _this.setState({ languageTranslators: languageTranslators });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'GetLanguageTranslators');
            });
        };
        _this._onSave = function () {
            // clear current message, if any
            _this.setState({ showSaveResult: false, saveSuccessful: undefined, saveResultMessage: '' });
            var multilingualSupportPromise = undefined;
            if (_this.state.multilingualSupportOn !== _this._multilingualSupportAlreadyOn) {
                multilingualSupportPromise = _this._onMUISupportToggleChange();
            }
            var overwriteTranslationsPromise = undefined;
            if (_this.state.overwriteTranslations !== _this._overwriteTranslationsAlreadyOn) {
                overwriteTranslationsPromise = _this._onOverwriteTranslationsToggleChange();
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX, _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".Save", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                MultilingualSupport: multilingualSupportPromise ? _this.state.multilingualSupportOn.toString() : '',
                OverwriteTranslationPromise: overwriteTranslationsPromise
                    ? _this.state.overwriteTranslations.toString()
                    : '',
                SupportedTranslations: _this._supportedLanguagesChanged
                    ? _this.state.supportedLanguages.length.toString()
                    : '',
                TranslatorsList: _this._translatorsChanged
                    ? Object.keys(_this.state.languageTranslators).length.toString()
                    : ''
            }));
            Promise.all([multilingualSupportPromise, overwriteTranslationsPromise]).then(function () {
                var supportedLanguagesPromise;
                if ((!_Killswitches__WEBPACK_IMPORTED_MODULE_13__["Killswitches"].muiSettingsOnTeamSite.isActivated() && _this._supportedLanguagesChanged) ||
                    (_Killswitches__WEBPACK_IMPORTED_MODULE_13__["Killswitches"].muiSettingsOnTeamSite.isActivated() && _this.state.multilingualSupportOn)) {
                    supportedLanguagesPromise = _this._onSupportedLanguagesListChange();
                }
                else {
                    supportedLanguagesPromise = Promise.resolve();
                }
                supportedLanguagesPromise.then(function () {
                    if (_this._isNotificationFlightEnabled &&
                        (_Killswitches__WEBPACK_IMPORTED_MODULE_13__["Killswitches"].muiSettingsOnTeamSite.isActivated() || _this._translatorsChanged)) {
                        var languageTranslatorsPromise = _this._onLanguageTranslatorsListChange();
                        languageTranslatorsPromise.then(function () {
                            _this._onSaveSuccessful();
                        }, _this._onSaveFailed);
                    }
                    else {
                        _this._onSaveSuccessful();
                    }
                }, _this._onSaveFailed);
            }, _this._onSaveFailed);
        };
        _this._onSaveSuccessful = function () {
            _this.setState({
                showSaveResult: true,
                saveSuccessful: true,
                saveResultMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["SettingsSaved"],
                hasUnsavedChanges: false
            });
            setTimeout(function () {
                _this.setState({
                    showSaveResult: false,
                    saveSuccessful: undefined,
                    saveResultMessage: ''
                });
                _this._redirectToMainSettingsPage();
            }, 3000);
        };
        _this._onSaveFailed = function () {
            _this.setState({
                showSaveResult: true,
                saveSuccessful: false,
                saveResultMessage: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["SettingsNotSaved"]
            });
            setTimeout(function () {
                _this.setState({
                    showSaveResult: false,
                    saveSuccessful: undefined,
                    saveResultMessage: ''
                });
            }, 3000);
        };
        _this._onMUISupportToggleChange = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX, _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".MUISupportToggle", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                isEnabled: _this.state.multilingualSupportOn.toString()
            }));
            return _this._settingPageDataProvider
                .setPageSettings(_this.state.multilingualSupportOn)
                .then(function (settings) {
                if (settings) {
                    _this.setState({ multilingualSupportOn: !!settings.isFeatureActivated });
                }
                return settings;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'SetPageSetting');
            });
        };
        _this._onOverwriteTranslationsToggleChange = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX, _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".OverwriteTranslationToggle", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                isEnabled: _this.state.overwriteTranslations.toString()
            }));
            return _this._settingPageDataProvider
                .setOverwriteSettings(_this.state.overwriteTranslations)
                .then(function (settings) {
                if (settings) {
                    _this.setState({ overwriteTranslations: !!settings.isOverriden });
                }
                return settings;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'SetPageSetting');
            });
        };
        _this._onSupportedLanguagesListChange = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX, _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".SupportedLanguageList", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                Languages: _this.state.supportedLanguages.length.toString()
            }));
            return _this._supportedLanguagesDataProvider
                .setSupportedLanguages(_this.state.supportedLanguages)
                .then(function (languages) {
                if (languages) {
                    _this.setState({ supportedLanguages: languages });
                }
                return languages;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'SetSupportedLanguages');
            });
        };
        _this._onLanguageTranslatorsListChange = function () {
            var none = 0, single = 0, multiple = 0;
            var translators = _this.state.languageTranslators;
            for (var languageName in translators) {
                if (translators[languageName].length === 0) {
                    none++;
                }
                else if (translators[languageName].length === 1) {
                    single++;
                }
                else if (translators[languageName].length > 1) {
                    multiple++;
                }
            }
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"](_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX, _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".TranslatorList", _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                None: none.toString(),
                Single: single.toString(),
                Multiple: multiple.toString()
            }));
            var payload = Object.keys(_this.state.languageTranslators).map(function (code) {
                return {
                    languageCode: _LanguageNames__WEBPACK_IMPORTED_MODULE_12__["LanguageNames"].getLanguageByCode(Number(code)),
                    translators: _this.state.languageTranslators[code]
                };
            });
            return _this._translatorsDataProvider
                .setTranslators(payload)
                .then(function () {
                return;
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(_this._logSource, error, 'SetLanguageTranslators');
            });
        };
        _this._onCancel = function () {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX + "." + _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".Cancel");
            _this._redirectToMainSettingsPage();
        };
        _this._redirectToMainSettingsPage = function () {
            window.location.href = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_5__["Uri"].concatenate(_this.props.pageContext.web.absoluteUrl, '/_layouts/15/settings.aspx');
        };
        _this.state = {
            hasUnresolvedPromises: true,
            hasUnsavedChanges: false,
            languageTranslators: {},
            multilingualSupportOn: false,
            overwriteTranslations: false,
            saveResultMessage: '',
            saveSuccessful: undefined,
            showAdvancedSettings: false,
            showSaveResult: undefined,
            supportedLanguages: []
        };
        _this._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('PageSetting');
        _this._defaultCulture = _LanguageNames__WEBPACK_IMPORTED_MODULE_12__["LanguageNames"].getResourceByCode(_this.props.pageContext.web.language);
        _this._multilingualPagesSupported = MuiSettingPageLayoutComponent._isCommSite(_this.props.pageContext);
        _this._isNotificationFlightEnabled = _common_Flights__WEBPACK_IMPORTED_MODULE_14__["Flights"].isNotificationFlightEnabled();
        _this._settingPageDataProvider = new _dataProviders_SettingPageDataProvider__WEBPACK_IMPORTED_MODULE_9__["SettingPageDataProvider"]({
            serviceScope: _this.props.serviceScope
        });
        _this._supportedLanguagesDataProvider = new _dataProviders_SupportedLanguagesDataProvider__WEBPACK_IMPORTED_MODULE_10__["SupportedLanguagesDataProvider"]({
            serviceScope: _this.props.serviceScope
        });
        _this._translatorsDataProvider = new _dataProviders_TranslatorsDataProvider__WEBPACK_IMPORTED_MODULE_11__["TranslatorsDataProvider"]({
            serviceScope: _this.props.serviceScope
        });
        return _this;
    }
    MuiSettingPageLayoutComponent._isCommSite = function (pageContext) {
        var feature = pageContext._featureInfo.get('SitePagePublishing');
        return !!feature && feature.enabled;
    };
    MuiSettingPageLayoutComponent.prototype.componentDidMount = function () {
        var _this = this;
        document.title = _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["DocumentTitle"];
        this._getDataThenLoadSuiteNav();
        window.onbeforeunload = function () {
            if (_this.state.hasUnsavedChanges) {
                return _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["UnsavedChanges"];
            }
        };
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEvent(_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].PREFIX + "." + _Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].Settings + ".PageLoad");
    };
    MuiSettingPageLayoutComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!this.state.hasUnresolvedPromises &&
            !this.state.hasUnsavedChanges &&
            (prevState.multilingualSupportOn !== this.state.multilingualSupportOn ||
                prevState.overwriteTranslations !== this.state.overwriteTranslations ||
                prevState.supportedLanguages !== this.state.supportedLanguages ||
                prevState.languageTranslators !== this.state.languageTranslators)) {
            this.setState({ hasUnsavedChanges: true });
        }
    };
    MuiSettingPageLayoutComponent.prototype.render = function () {
        var _a = this.state, languageTranslators = _a.languageTranslators, multilingualSupportOn = _a.multilingualSupportOn, overwriteTranslations = _a.overwriteTranslations, showAdvancedSettings = _a.showAdvancedSettings, showSaveResult = _a.showSaveResult, supportedLanguages = _a.supportedLanguages;
        var isSaveDisabled = !this.state.hasUnsavedChanges ||
            ((Object(_Killswitches__WEBPACK_IMPORTED_MODULE_13__["fixDisableSaveButtonKSActive"])() || multilingualSupportOn) &&
                this.state.supportedLanguages.length === 0);
        var showSaveTooltip = this.state.supportedLanguages.length === 0 && this.state.multilingualSupportOn;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: !Object(_Killswitches__WEBPACK_IMPORTED_MODULE_13__["fixScrollBarKSActive"])() ? _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].muiSettingPageLayoutContainer : undefined },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].muiSettingPageLayout, "data-page-key": 'muisetng' },
                !_Killswitches__WEBPACK_IMPORTED_MODULE_13__["Killswitches"].muiSettingsHeaderH1.isActivated() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].mainHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["MainHeader"])) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].mainHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["MainHeader"])),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].defaultLanguage }, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_4__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["DefaultLanguage"], this._defaultCulture)),
                this._multilingualPagesSupported && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].controlSection },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].sectionHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["MultilingualSupport"]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Toggle__WEBPACK_IMPORTED_MODULE_6__["Toggle"], { onText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ToggleOn"], offText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ToggleOff"], ariaLabel: multilingualSupportOn ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["MultilingualSupportOn"] : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["MultilingualSupportOff"], onChange: this._toggleMultilingualSupport, checked: multilingualSupportOn, "data-automation-id": 'multilingualSupportToggle', disabled: this.state.hasUnresolvedPromises }))),
                this._multilingualPagesSupported && multilingualSupportOn && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].controlSection },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TranslatorListView__WEBPACK_IMPORTED_MODULE_7__["default"], { supportedLanguages: supportedLanguages, languageTranslators: languageTranslators, onLanguagesListChange: this._onLanguagesListChange, onLanguageTranslatorsChange: this._onLanguageTranslatorsChange, pageContext: this.props.pageContext, serviceScope: this.props.serviceScope }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].controlSection },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Link"], { "aria-expanded": !_Killswitches__WEBPACK_IMPORTED_MODULE_13__["Killswitches"].muiSettingsAdvSettingsAriaExpand.isActivated()
                            ? showAdvancedSettings
                            : undefined, onClick: this._toggleShowAdvancedSettings }, showAdvancedSettings ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Hide"] : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Show"])),
                !(this._multilingualPagesSupported && multilingualSupportOn) && showAdvancedSettings && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].controlSection },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].sectionHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["AlternateLanguages"]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].sectionDescription }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OutOfTheBoxTranslations"]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_AlternateLanguagesListView__WEBPACK_IMPORTED_MODULE_8__["default"], { supportedLanguages: supportedLanguages, onLanguagesListChange: this._onLanguagesListChange, pageContext: this.props.pageContext }))),
                showAdvancedSettings && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].controlSection },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Label"], { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].sectionHeader }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OverwriteTranslations"]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OverwriteTranslationsDescription"],
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Link"], { href: MuiSettingPageLayoutComponent.LEARN_MORE_URL, target: '_blank' }, _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OverwriteTranslationsMoreInfo"])),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Toggle__WEBPACK_IMPORTED_MODULE_6__["Toggle"], { onText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ToggleOn"], offText: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["ToggleOff"], ariaLabel: overwriteTranslations ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OverwriteTranslationsOn"] : _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["OverwriteTranslationsOff"], onChange: this._toggleOverwriteTranslations, checked: overwriteTranslations, disabled: this.state.hasUnresolvedPromises }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].buttonsWrapper },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { "data-automation-id": 'MuiSaveButton', disabled: isSaveDisabled, text: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Save"], ariaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Save"], onClick: this._onSave, className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].saveButton, title: showSaveTooltip ? _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["SaveDisabledTooltip"] : undefined }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { "data-automation-id": 'MuiCancelButton', text: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Cancel"], ariaLabel: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_16__["Cancel"], onClick: this._onCancel }),
                    showSaveResult && this._saveResultMessage))));
    };
    Object.defineProperty(MuiSettingPageLayoutComponent.prototype, "_saveResultMessage", {
        get: function () {
            var _a = this.state, saveSuccessful = _a.saveSuccessful, saveResultMessage = _a.saveResultMessage;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": saveSuccessful ? 'MuiSaveSuccess' : 'MuiSaveError', className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].saveResultMessage },
                saveSuccessful && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: 'CheckMark' }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: saveSuccessful ? _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].successMessage : _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].errorMessage }, saveResultMessage)));
        },
        enumerable: true,
        configurable: true
    });
    MuiSettingPageLayoutComponent.LEARN_MORE_URL = 'https://go.microsoft.com/fwlink/?linkid=2102372';
    return MuiSettingPageLayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MuiSettingPageLayoutComponent);


/***/ }),

/***/ "zIiH":
/*!************************************************************!*\
  !*** ./lib/mui-setting-page/AlternateLanguagesListView.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Checkbox */ "l0uo");
/* harmony import */ var _LanguageNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LanguageNames */ "qAjK");
/* harmony import */ var _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MuiSettingPageLayout.module.scss */ "B/Ux");





var AlternateLanguagesListView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlternateLanguagesListView, _super);
    function AlternateLanguagesListView(props) {
        var _this = _super.call(this, props) || this;
        _this._handleChangeCheckbox = function (index) { return function (ev, checked) {
            _this._onChange(index, checked);
        }; };
        _this._onChange = function (index, checked) {
            if (_this._defaultLanguageOptions[index]) {
                var language_1 = _this._defaultLanguageOptions[index];
                if (!language_1.initiallyChecked && checked) {
                    _this.props.onLanguagesListChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.props.supportedLanguages, [language_1.languageCode]));
                }
                else if (language_1.initiallyChecked && !checked) {
                    _this.props.onLanguagesListChange(_this.props.supportedLanguages.filter(function (languageCode) { return languageCode !== language_1.languageCode; }));
                }
            }
        };
        _this.state = {};
        _this._defaultLanguageCode = _this.props.pageContext.web.language;
        var supportedLanguages = {};
        _this.props.supportedLanguages.forEach(function (languageCode) { return (supportedLanguages[languageCode] = true); });
        var languages = _LanguageNames__WEBPACK_IMPORTED_MODULE_3__["LanguageNames"].getInstalledLanguages(_this.props.supportedLanguages, _this._defaultLanguageCode);
        _this._defaultLanguageOptions = Object.keys(languages)
            .filter(function (key) {
            return Number(key) !== _this._defaultLanguageCode;
        })
            .map(function (languageCode) {
            return {
                languageCode: Number(languageCode),
                languageName: languages[languageCode].resource,
                initiallyChecked: supportedLanguages[languageCode]
            };
        });
        return _this;
    }
    AlternateLanguagesListView.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].alternateGrid }, this._checkBoxes);
    };
    Object.defineProperty(AlternateLanguagesListView.prototype, "_checkBoxes", {
        get: function () {
            var _this = this;
            return this._defaultLanguageOptions.map(function (option, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Checkbox__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], { key: option.languageCode, label: option.languageName, defaultChecked: option.initiallyChecked, onChange: _this._handleChangeCheckbox(index), styles: { root: { marginTop: '10px' } }, className: _MuiSettingPageLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkBox })); });
        },
        enumerable: true,
        configurable: true
    });
    return AlternateLanguagesListView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (AlternateLanguagesListView);


/***/ })

}]);
//# sourceMappingURL=chunk.sp-multilingual-muisettingspage_[locale].js.map