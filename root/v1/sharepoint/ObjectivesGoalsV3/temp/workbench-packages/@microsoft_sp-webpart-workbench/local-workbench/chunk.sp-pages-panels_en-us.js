(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["sp-pages-panels"],{

/***/ "5qGQ":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/url/ApiUrlHelperBasic.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ApiUrlBasic, ApiUrlHelperBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlBasic", function() { return ApiUrlBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlHelperBasic", function() { return ApiUrlHelperBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");


/**
 * Implementation of an extendable SharePoint API URL.
 * Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrlBasic = /** @class */ (function () {
    function ApiUrlBasic(params) {
        var webAbsoluteUrl = params.webAbsoluteUrl, _a = params.encodeWebAbsoluteUrl, encodeWebAbsoluteUrl = _a === void 0 ? true : _a;
        this._webAbsoluteUrl = webAbsoluteUrl;
        this._encodeWebAbsoluteUrl = encodeWebAbsoluteUrl;
        this._segments = [];
        this._parameters = [];
        this._rawParameters = [];
        this._lastParameterId = 0;
    }
    ApiUrlBasic.prototype.toString = function () {
        var querySegments = [];
        if (this._parameters.length) {
            querySegments.push(this._parameters
                .map(function (_a) {
                var name = _a.name, serializedValue = _a.serializedValue;
                return name + "=" + serializedValue;
            })
                .join('&'));
        }
        querySegments.push.apply(querySegments, this._rawParameters);
        var query;
        if (querySegments.length) {
            query = "?" + querySegments.join('&');
        }
        else {
            query = '';
        }
        var _a = this._webUrl, webUrl = _a === void 0 ? this._webAbsoluteUrl : _a;
        var parts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([this._encodeWebAbsoluteUrl ? encodeURI(webUrl) : webUrl, '_api'], this._segments);
        return "" + parts.join('/') + query;
    };
    ApiUrlBasic.prototype.segment = function (name) {
        return this._extend({
            segments: [name]
        });
    };
    ApiUrlBasic.prototype.segments = function () {
        var segments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            segments[_i] = arguments[_i];
        }
        return this._extend({
            segments: segments
        });
    };
    ApiUrlBasic.prototype.methodWithAliases = function (name, parameters) {
        var apiUrl = this;
        var methodArguments = [];
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var parameter = _a[_i];
            var value = parameters[parameter];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(parameter + "=" + autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.method = function (name) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var apiUrl = this;
        var methodArguments = [];
        for (var _a = 0, parameters_1 = parameters; _a < parameters_1.length; _a++) {
            var value = parameters_1[_a];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.parameter = function (name, value) {
        return this._parameter(name, value);
    };
    ApiUrlBasic.prototype.parameters = function (parameters) {
        var apiUrl = this;
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = parameters[name_1];
            apiUrl = apiUrl.parameter(name_1, value);
        }
        return apiUrl;
    };
    ApiUrlBasic.prototype.oDataParameter = function (name, value) {
        return this.parameter(name, {
            raw: value
        });
    };
    ApiUrlBasic.prototype.rawParameter = function (queryString) {
        return this._extend({
            rawParameters: [queryString]
        });
    };
    ApiUrlBasic.prototype._autoParameter = function (value) {
        var lastParameterId = this._lastParameterId + 1;
        var name = "@a" + lastParameterId;
        var apiUrl = this._extend({
            lastParameterId: lastParameterId
        })._parameter(name, value);
        return {
            name: name,
            apiUrl: apiUrl
        };
    };
    ApiUrlBasic.prototype._parameter = function (name, value) {
        var serializedValue;
        if (isJson(value)) {
            serializedValue = _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(JSON.stringify(value.json));
        }
        else if (isGuid(value)) {
            serializedValue = "guid'" + value.guid + "'";
        }
        else if (isRaw(value)) {
            serializedValue = value.raw;
        }
        else if (typeof value === 'number') {
            serializedValue = "" + value;
        }
        else if (typeof value === 'boolean') {
            serializedValue = "" + value;
        }
        else {
            serializedValue = "'" + _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_1__["default"].encodeRestUriStringToken(value) + "'";
        }
        return this._extend({
            parameters: [
                {
                    name: name,
                    serializedValue: serializedValue
                }
            ]
        });
    };
    ApiUrlBasic.prototype.clone = function () {
        return new ApiUrlBasic({
            webAbsoluteUrl: this._webAbsoluteUrl,
            encodeWebAbsoluteUrl: this._encodeWebAbsoluteUrl
        });
    };
    ApiUrlBasic.prototype._extend = function (state) {
        var _a, _b, _c, _d, _e, _f;
        if (state === void 0) { state = {}; }
        var apiUrl = this.clone();
        apiUrl._webUrl = this._webUrl;
        apiUrl._lastParameterId = this._lastParameterId;
        (_a = apiUrl._parameters).push.apply(_a, this._parameters);
        (_b = apiUrl._segments).push.apply(_b, this._segments);
        (_c = apiUrl._rawParameters).push.apply(_c, this._rawParameters);
        if ('webUrl' in state) {
            apiUrl._webUrl = state.webUrl;
        }
        if ('lastParameterId' in state) {
            apiUrl._lastParameterId = state.lastParameterId;
        }
        if ('parameters' in state) {
            (_d = apiUrl._parameters).push.apply(_d, state.parameters);
        }
        if ('rawParameters' in state) {
            (_e = apiUrl._rawParameters).push.apply(_e, state.rawParameters);
        }
        if ('segments' in state) {
            (_f = apiUrl._segments).push.apply(_f, state.segments);
        }
        return apiUrl;
    };
    return ApiUrlBasic;
}());

/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelperBasic
 *
 * @example
 *  let apiUrlHelper = new ApiUrlHelperBasic({ webAbsoluteUrl: webAbsoluteUrl });
 *  let apiUrl = apiUrlHelper.build()
 *      .segment('web')
 *      .method('GetList', serverRelativeListUrl)
 *      .segment('RenderListFilterData')
 *      .parameter('FieldInternalName', fieldInternalName!);
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'GetFilterData'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelperBasic = /** @class */ (function () {
    function ApiUrlHelperBasic(params) {
        this._apiUrlType = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_apiUrlType, _super);
            function _apiUrlType() {
                return _super.call(this, {
                    webAbsoluteUrl: params.webAbsoluteUrl,
                    encodeWebAbsoluteUrl: params.encodeWebAbsoluteUrl
                }) || this;
            }
            return _apiUrlType;
        }(ApiUrlBasic));
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrlBasic}
     */
    ApiUrlHelperBasic.prototype.build = function () {
        return new this._apiUrlType();
    };
    /**
     * Generates a GetContextWebInformation API call URL based on any input URL against
     * a SharePoint server.
     *
     * @param {string} url
     * @returns {string}
     */
    ApiUrlHelperBasic.prototype.contextInfoUrl = function (fullItemUrl) {
        var layoutsIndex = fullItemUrl.indexOf('/_layouts/');
        var contextInfoRootUrl;
        if (layoutsIndex > -1) {
            contextInfoRootUrl = fullItemUrl.substring(0, layoutsIndex);
        }
        else {
            var lastSegmentIndex = fullItemUrl.lastIndexOf('/');
            var lastExtensionIndex = fullItemUrl.lastIndexOf('.');
            if (lastExtensionIndex > lastSegmentIndex) {
                contextInfoRootUrl = fullItemUrl.substring(0, lastExtensionIndex) + "_" + fullItemUrl.substring(lastExtensionIndex + 1);
            }
            else {
                contextInfoRootUrl = fullItemUrl;
            }
        }
        return contextInfoRootUrl + "/_api/contextinfo";
    };
    return ApiUrlHelperBasic;
}());

function isGuid(value) {
    return !!value && typeof value === 'object' && 'guid' in value;
}
function isRaw(value) {
    return !!value && typeof value === 'object' && 'raw' in value;
}
function isJson(value) {
    return !!value && typeof value === 'object' && 'json' in value;
}
//# sourceMappingURL=ApiUrlHelperBasic.js.map

/***/ }),

/***/ "HTvD":
/*!************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/UserExpirationPanel/UserExpirationPanelContainer.js ***!
  \************************************************************************************/
/*! exports provided: UserExpirationPanelContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationPanelContainer", function() { return UserExpirationPanelContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_shared_react_lib_components_UserExpirationPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/UserExpirationPanel */ "ogg/");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_UserExpiration_UserExpirationDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/UserExpiration/UserExpirationDataSource */ "HbnO");
/* harmony import */ var _ms_odsp_datasources_lib_providers_UserExpiration_UserExpirationProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/UserExpiration/UserExpirationProvider */ "0ol6");





var UserExpirationPanelContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserExpirationPanelContainer, _super);
    function UserExpirationPanelContainer(props) {
        var _this = _super.call(this, props) || this;
        _this._onDismiss = function () {
            _this.setState({
                showPanel: false
            });
        };
        _this.state = {
            showPanel: true,
            userExpirationPolicyDays: 0
        };
        _this._provider = new _ms_odsp_datasources_lib_providers_UserExpiration_UserExpirationProvider__WEBPACK_IMPORTED_MODULE_4__["UserExpirationProvider"]({
            dataSource: new _ms_odsp_datasources_lib_dataSources_UserExpiration_UserExpirationDataSource__WEBPACK_IMPORTED_MODULE_3__["UserExpirationDataSource"]({ pageContext: props.pageContext })
        });
        _this._provider.getExternalUserExpirationPolicy().then(function (days) {
            _this.setState({
                userExpirationPolicyDays: days
            });
        });
        return _this;
    }
    UserExpirationPanelContainer.prototype.render = function () {
        var userExpirationPanelProps = {
            userExpirationProvider: this._provider,
            userExpirationPolicyDays: this.state.userExpirationPolicyDays,
            userExpirationPolicyEnabled: this.state.userExpirationPolicyDays !== 0,
            pageContext: this.props.pageContext,
            onDismiss: this._onDismiss,
            isOpen: this.state.showPanel
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_components_UserExpirationPanel__WEBPACK_IMPORTED_MODULE_2__["UserExpirationPanel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, userExpirationPanelProps));
    };
    return UserExpirationPanelContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "ibSY":
/*!***********************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/UserExpirationPanel/UserExpirationPanelRenderer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserExpirationPanelContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserExpirationPanelContainer */ "HTvD");
/* harmony import */ var _ms_odsp_datasources_lib_providers_UserExpiration_UserExpirationProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/UserExpiration/UserExpirationProvider */ "0ol6");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_UserExpiration_UserExpirationDataSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/UserExpiration/UserExpirationDataSource */ "HbnO");





var UserExpirationPanelRenderer = /** @class */ (function () {
    function UserExpirationPanelRenderer() {
    }
    UserExpirationPanelRenderer.prototype.createUserExpirationDataSource = function (pageContext) {
        return new _ms_odsp_datasources_lib_providers_UserExpiration_UserExpirationProvider__WEBPACK_IMPORTED_MODULE_3__["UserExpirationProvider"]({
            dataSource: new _ms_odsp_datasources_lib_dataSources_UserExpiration_UserExpirationDataSource__WEBPACK_IMPORTED_MODULE_4__["UserExpirationDataSource"]({ pageContext: pageContext })
        });
    };
    UserExpirationPanelRenderer.prototype.render = function (props) {
        if (!this._container) {
            this._container = document.createElement('div');
        }
        else {
            this._clearContainer();
        }
        var userExpirationPanel = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UserExpirationPanelContainer__WEBPACK_IMPORTED_MODULE_2__["UserExpirationPanelContainer"], props);
        react_dom__WEBPACK_IMPORTED_MODULE_0__["render"](userExpirationPanel, this._container);
    };
    UserExpirationPanelRenderer.prototype._clearContainer = function () {
        while (this._container && this._container.firstChild) {
            this._container.removeChild(this._container.firstChild);
        }
    };
    return UserExpirationPanelRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserExpirationPanelRenderer);


/***/ }),

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"]; });

// Loading @ms/odsp-utilities/./lib/uri/SimpleUri.js



/***/ }),

/***/ "ogg/":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/index.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationPanelBase, UserExpirationPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserExpirationPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserExpirationPanel */ "Ml3t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserExpirationPanelBase", function() { return _UserExpirationPanel__WEBPACK_IMPORTED_MODULE_0__["UserExpirationPanelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserExpirationPanel", function() { return _UserExpirationPanel__WEBPACK_IMPORTED_MODULE_0__["UserExpirationPanel"]; });


//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.sp-pages-panels_[locale].js.map