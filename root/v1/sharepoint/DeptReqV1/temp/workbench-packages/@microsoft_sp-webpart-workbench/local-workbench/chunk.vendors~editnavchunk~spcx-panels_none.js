(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~editnavchunk~spcx-panels"],{

/***/ "0sdQ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHRPromise.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["XHRPromise"]; });

// Loading @ms/odsp-utilities/./lib/xhr/XHRPromise.js



/***/ }),

/***/ "14YZ":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.styles.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


var DEFAULT_PILL_WIDTH = 40;
var DEFAULT_PILL_HEIGHT = 20;
var DEFAULT_THUMB_SIZE = 12;
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var theme = props.theme, className = props.className, disabled = props.disabled, checked = props.checked, inlineLabel = props.inlineLabel, onOffMissing = props.onOffMissing;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    // Tokens
    var pillUncheckedBackground = semanticColors.bodyBackground;
    var pillCheckedBackground = semanticColors.inputBackgroundChecked;
    var pillCheckedHoveredBackground = semanticColors.inputBackgroundCheckedHovered;
    var thumbUncheckedHoveredBackground = palette.neutralDark;
    var pillCheckedDisabledBackground = semanticColors.disabledBodySubtext;
    var thumbBackground = semanticColors.smallInputBorder;
    var thumbCheckedBackground = semanticColors.inputForegroundChecked;
    var thumbDisabledBackground = semanticColors.disabledBodySubtext;
    var thumbCheckedDisabledBackground = semanticColors.disabledBackground;
    var pillBorderColor = semanticColors.smallInputBorder;
    var pillBorderHoveredColor = semanticColors.inputBorderHovered;
    var pillBorderDisabledColor = semanticColors.disabledBodySubtext;
    var textDisabledColor = semanticColors.disabledText;
    return {
        root: [
            'ms-Toggle',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            theme.fonts.medium,
            {
                marginBottom: '8px',
            },
            inlineLabel && {
                display: 'flex',
                alignItems: 'center',
            },
            className,
        ],
        label: [
            'ms-Toggle-label',
            { display: 'inline-block' },
            disabled && {
                color: textDisabledColor,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'GrayText',
                    },
                    _a),
            },
            inlineLabel &&
                !onOffMissing && {
                marginRight: 16,
            },
            onOffMissing &&
                inlineLabel && {
                order: 1,
                marginLeft: 16,
            },
            inlineLabel && { wordBreak: 'break-all' },
        ],
        container: [
            'ms-Toggle-innerContainer',
            {
                display: 'flex',
                position: 'relative',
            },
        ],
        pill: [
            'ms-Toggle-background',
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -3 }),
            {
                fontSize: '20px',
                boxSizing: 'border-box',
                width: DEFAULT_PILL_WIDTH,
                height: DEFAULT_PILL_HEIGHT,
                borderRadius: DEFAULT_PILL_HEIGHT / 2,
                transition: 'all 0.1s ease',
                border: "1px solid " + pillBorderColor,
                background: pillUncheckedBackground,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0 3px',
            },
            !disabled && [
                !checked && {
                    selectors: {
                        ':hover': [
                            {
                                borderColor: pillBorderHoveredColor,
                            },
                        ],
                        ':hover .ms-Toggle-thumb': [
                            {
                                backgroundColor: thumbUncheckedHoveredBackground,
                                selectors: (_b = {},
                                    _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        borderColor: 'Highlight',
                                    },
                                    _b),
                            },
                        ],
                    },
                },
                checked && [
                    {
                        background: pillCheckedBackground,
                        borderColor: 'transparent',
                        justifyContent: 'flex-end',
                    },
                    {
                        selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_c = { ':hover': [
                                    {
                                        backgroundColor: pillCheckedHoveredBackground,
                                        borderColor: 'transparent',
                                        selectors: (_d = {},
                                            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                                backgroundColor: 'Highlight',
                                            },
                                            _d),
                                    },
                                ] }, _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            backgroundColor: 'Highlight',
                        }, _c), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
                    },
                ],
            ],
            disabled && [
                {
                    cursor: 'default',
                },
                !checked && [
                    {
                        borderColor: pillBorderDisabledColor,
                    },
                ],
                checked && [
                    {
                        backgroundColor: pillCheckedDisabledBackground,
                        borderColor: 'transparent',
                        justifyContent: 'flex-end',
                    },
                ],
            ],
            !disabled && {
                selectors: {
                    '&:hover': {
                        selectors: (_e = {},
                            _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                borderColor: 'Highlight',
                            },
                            _e),
                    },
                },
            },
        ],
        thumb: [
            'ms-Toggle-thumb',
            {
                display: 'block',
                width: DEFAULT_THUMB_SIZE,
                height: DEFAULT_THUMB_SIZE,
                borderRadius: '50%',
                transition: 'all 0.1s ease',
                backgroundColor: thumbBackground,
                /* Border is added to handle high contrast mode for Firefox */
                borderColor: 'transparent',
                borderWidth: DEFAULT_THUMB_SIZE / 2,
                borderStyle: 'solid',
                boxSizing: 'border-box',
            },
            !disabled &&
                checked && [
                {
                    backgroundColor: thumbCheckedBackground,
                    selectors: (_f = {},
                        _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            backgroundColor: 'Window',
                            borderColor: 'Window',
                        },
                        _f),
                },
            ],
            disabled && [
                !checked && [
                    {
                        backgroundColor: thumbDisabledBackground,
                    },
                ],
                checked && [
                    {
                        backgroundColor: thumbCheckedDisabledBackground,
                    },
                ],
            ],
        ],
        text: [
            'ms-Toggle-stateText',
            {
                selectors: {
                    // Workaround: make rules more specific than Label rules.
                    '&&': {
                        padding: '0',
                        margin: '0 8px',
                        userSelect: 'none',
                        fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular,
                    },
                },
            },
            disabled && {
                selectors: {
                    '&&': {
                        color: textDisabledColor,
                        selectors: (_g = {},
                            _g[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                color: 'GrayText',
                            },
                            _g),
                    },
                },
            },
        ],
    };
};
//# sourceMappingURL=Toggle.styles.js.map

/***/ }),

/***/ "2+UY":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type. Value = 0.
     */
    PrincipalType[PrincipalType["none"] = 0] = "none";
    /**
     * Enumeration whose value specifies a user as the principal type. Value = 1.
     */
    PrincipalType[PrincipalType["user"] = 1] = "user";
    /**
     * Enumeration whose value specifies a distribution list as the principal type. Value = 2.
     */
    PrincipalType[PrincipalType["distributionList"] = 2] = "distributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type. Value = 4.
     */
    PrincipalType[PrincipalType["securityGroup"] = 4] = "securityGroup";
    /**
     * Enumeration whose value specifies a group (2) as the principal type. Value = 8.
     */
    PrincipalType[PrincipalType["sharePointGroup"] = 8] = "sharePointGroup";
    /**
     * Enumeration whose value specifies all principal types. Value = 15.
     */
    PrincipalType[PrincipalType["all"] = 15] = "all";
})(PrincipalType || (PrincipalType = {}));
/* harmony default export */ __webpack_exports__["default"] = (PrincipalType);
//# sourceMappingURL=PrincipalType.js.map

/***/ }),

/***/ "40s1":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Toggle.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: Toggle, ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Toggle/index */ "kL0j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__["Toggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return _components_Toggle_index__WEBPACK_IMPORTED_MODULE_0__["ToggleBase"]; });


//# sourceMappingURL=Toggle.js.map

/***/ }),

/***/ "6r7H":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/base/dataRequestor/DataRequestor.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: DataRequestor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRequestor", function() { return DataRequestor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHRPromise */ "0sdQ");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Api.event */ "Joik");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper */ "nXow");
/* harmony import */ var _models_error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony import */ var _ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/Base64Encoding */ "892h");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage













var performance = window && window.performance;
var DEFAULT_EXPECTED_ERROR_CODES = {
    // ErrorCode
    activityLimitReached: true,
    malwareDetected: true,
    nameAlreadyExists: true,
    resourceModified: true,
    resyncRequired: true,
    quotaLimitReached: true,
    // InnerErrorCode
    accessRestricted: true,
    childItemCountExceeded: true,
    entityTagDoesNotMatch: true,
    fragmentOutOfOrder: true,
    fragmentOverlap: true,
    hipCheckRequired: true,
    insufficientVaultQuota: true,
    lockMismatch: true,
    lockNotFoundOrAlreadyExpired: true,
    lockOwnerMismatch: true,
    maxDocumentCountExceeded: true,
    maxFileSizeExceeded: true,
    maxFolderCountExceeded: true,
    maxItemCountExceeded: true,
    nameContainsInvalidCharacters: true,
    pathIsTooLong: true,
    pathTooDeep: true,
    pathIsTooDeep: true,
    propertyNotUpdateable: true,
    resyncApplyDifferences: true,
    resyncUploadDifferences: true,
    serviceReadOnly: true,
    throttledRequest: true,
    unlockRequired: true,
    versionNumberDoesNotMatch: true,
    virusSuspicious: true,
    // ClientErrorCode
    authFailure: false
};
var BEARER_AUTH_TYPE = 'Bearer';
var DataRequestor = /** @class */ (function () {
    function DataRequestor(params, dependencies) {
        var _a = params.alwaysSendContentType, alwaysSendContentType = _a === void 0 ? false : _a;
        var sessionManagementProvider = dependencies.sessionManagementProvider, urlDataSource = dependencies.urlDataSource, _b = dependencies.apiEvent, apiEvent = _b === void 0 ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["Api"] : _b, cookieOrigin = dependencies.cookieOrigin, isOffline = dependencies.isOffline;
        this._sessionManagementProvider = sessionManagementProvider;
        this._alwaysSendContentType = alwaysSendContentType;
        this._apiEvent = apiEvent;
        this._apiName =
            urlDataSource && typeof urlDataSource.getApiName === 'function' ? urlDataSource.getApiName() : 'Vroom';
        this._apiBaseUrl = urlDataSource
            ? typeof urlDataSource.getApiBaseUrl === 'function'
                ? urlDataSource.getApiBaseUrl()
                : urlDataSource.getVroomApiBaseUrl()
            : undefined;
        this._cookieOrigin = cookieOrigin;
        this._isOffline = isOffline;
        this._encodingFixEnabled =
            !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('179f8622-1596-43df-a186-a4b42e1d7917', '08/04/2020', 'Decode unicode characters in graph errors') && !_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_11__["default"].isFeatureEnabled({ ODC: 'GraphEncodingFixKillswitch' });
    }
    DataRequestor.prototype.send = function (options) {
        var _this = this;
        var _a = options.headers, headers = _a === void 0 ? {} : _a, path = options.path, _b = options.endpoint, endpoint = _b === void 0 ? this._apiBaseUrl : _b, driveUrl = options.driveUrl, apiName = options.apiName, _c = options.disableLogging, disableLogging = _c === void 0 ? false : _c, timeout = options.timeout, onProgress = options.onProgress, onUploadProgress = options.onUploadProgress, qosExtraData = options.qosExtraData, _d = options.apiVersion, apiVersion = _d === void 0 ? 'v2.0' : _d, _e = options.needsAuthorization, needsAuthorization = _e === void 0 ? true : _e, _f = options.useAuthorizationHeaders, useAuthorizationHeaders = _f === void 0 ? false : _f, accessToken = options.accessToken, postProcessQos = options.postProcessQos, breakCache = options.breakCache, allowCookies = options.allowCookies, _g = options.hasContentType, hasContentType = _g === void 0 ? true : _g, _h = options.useMultiPart, useMultiPart = _h === void 0 ? false : _h, _j = options.getErrorAsMessage, getErrorAsMessage = _j === void 0 ? false : _j, expectedErrors = options.expectedErrors;
        var expectedErrorCodes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_EXPECTED_ERROR_CODES), (options.expectedErrorCodes || {}));
        var _k = options.requestType, requestType = _k === void 0 ? 'GET' : _k;
        var cookieOrigin = this._cookieOrigin;
        var pathUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](path);
        var url = pathUri.authority ? path : "" + endpoint + path;
        var getData = function (auth) {
            var multiPartId = '';
            var requestHeaders = {};
            if (useMultiPart) {
                // Send only one header in the main request to avoid CORS. Remaining headers are sent as part
                // of the multi-part content disposition data.
                multiPartId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_7__["default"].generate();
                requestHeaders = {
                    'Content-Type': "multipart/form-data;boundary=" + multiPartId
                };
            }
            else {
                // Don't pass a content-type header if no postData. Otherwise we are stuck with CORS pre-flight on all requests.
                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Accept: 'application/json' }, ((options.postData || _this._alwaysSendContentType) && hasContentType
                    ? {
                        'Content-Type': 'application/json'
                    }
                    : {})), (auth.useCookies && auth.digestValue
                    ? {
                        'x-requestdigest': auth.digestValue
                    }
                    : {})), (getErrorAsMessage
                    ? {
                        prefer: 'rich-error-as-message'
                    }
                    : {})), headers);
            }
            var apiUri;
            if (auth.sessionToken && auth.sessionToken.tokenUrl && path.indexOf('/drive/') === 0) {
                // replace the generic "/drive/" with our specific token url
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](auth.sessionToken.tokenUrl + "/" + path.substring(7));
            }
            else {
                apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](path);
                if (endpoint && !apiUri.getScheme()) {
                    apiUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](endpoint + path);
                }
            }
            if (useMultiPart) {
                apiUri.setQueryParameter('ump', '1');
                if (requestType !== 'POST') {
                    headers['X-HTTP-Method-Override'] = requestType;
                }
                // in order to avoid CORS, the type of the actual request needs to be POST
                requestType = 'POST';
            }
            // save the url to log before we add sensitive tokens
            var apiUrlToLog = apiUri.toString();
            if (!useMultiPart) {
                if (auth.sessionToken) {
                    var _a = auth.sessionToken, sessionAccessToken = _a.accessToken, proofToken = _a.proofToken, wlidToken = _a.wlidToken, isBadger = _a.isBadger;
                    if (wlidToken) {
                        requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "wlid1.1 " + wlidToken });
                    }
                    else if (useAuthorizationHeaders) {
                        if (sessionAccessToken) {
                            if (isBadger) {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "badger " + sessionAccessToken });
                            }
                            else {
                                requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { Authorization: "bearer " + sessionAccessToken });
                            }
                        }
                        if (proofToken) {
                            requestHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestHeaders), { 'X-PROOF_TOKEN': proofToken });
                        }
                    }
                    else {
                        if (sessionAccessToken) {
                            // We attach the access token as a query parameter to every request.
                            // We could also pass it in through the 'Authorization: bearer' header,
                            // but that would result in an extra CORS preflight request for every
                            // unique path.
                            apiUri.setQueryParameter('access_token', sessionAccessToken);
                        }
                        if (proofToken) {
                            // ODB scenarios use proof tokens
                            apiUri.setQueryParameter('prooftoken', proofToken);
                        }
                    }
                }
            }
            if (useMultiPart) {
                var body = '';
                body += "--" + multiPartId + "\r\n";
                body += 'Content-Disposition: form-data;name=data\r\n';
                if (headers) {
                    for (var _i = 0, _b = Object.keys(headers); _i < _b.length; _i++) {
                        var header = _b[_i];
                        body += header + ": " + headers[header] + "\r\n";
                    }
                }
                body += 'Content-Type: application/json\r\n';
                body += "Authorization: bearer " + auth.sessionToken.accessToken + "\r\n";
                if (getErrorAsMessage) {
                    body += 'prefer: rich-error-as-message\r\n';
                }
                body += '\r\n';
                body += (options.postData !== undefined ? options.postData : '') + "\r\n";
                body += "--" + multiPartId + "--";
            }
            if (breakCache) {
                apiUri.setQueryParameter('r', Math.random().toFixed(8));
            }
            var apiEvent;
            if (!disableLogging) {
                var telemetryUri = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](apiUrlToLog);
                var eventDetails = {
                    url: telemetryUri.authority + "/{ length: " + telemetryUri.path.length + ", segments: " + telemetryUri.segments.length + " }",
                    name: _this._apiName + "DataRequest." + apiName,
                    extraData: qosExtraData
                };
                apiEvent = new _this._apiEvent(eventDetails);
            }
            var apiUrlString = apiUri.toString();
            var requestPerformanceStartTime = performance && performance.now();
            return _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_2__["default"].start({
                url: apiUrlString,
                headers: requestHeaders,
                method: requestType,
                json: body || options.postData || '',
                requestTimeoutInMS: timeout,
                withCredentials: auth.useCookies,
                onProgress: onProgress,
                onUploadProgress: onUploadProgress
            }).then(function (request) {
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (apiEvent) {
                    var qosData = {
                        resultType: _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Success,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics),
                            requestId: request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid'),
                            MSCorrelationVector: request.getResponseHeader('MS-CV')
                        }
                    };
                    apiEvent.end(qosData);
                }
                if (options.parseResponse) {
                    return options.parseResponse(request);
                }
                if (request.responseText.length === 0) {
                    return null;
                }
                return JSON.parse(request.responseText);
            }, function (request) {
                var complete = function (apiEndSchema, error) {
                    if (postProcessQos) {
                        apiEndSchema = postProcessQos(apiEndSchema, error);
                    }
                    if (apiEvent) {
                        apiEvent.end(apiEndSchema);
                    }
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                };
                var performanceMetrics = Object(_ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_5__["getRequestEntryDurationMetrics"])(apiUrlString, requestPerformanceStartTime);
                if (request instanceof Error) {
                    var isCanceled = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].isCanceled(request);
                    var resultType = isCanceled ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure;
                    var apiEndSchema = {
                        error: request.message,
                        resultCode: isCanceled ? 'Canceled' : '',
                        resultType: resultType,
                        extraData: {
                            rawRequestDuration: performanceMetrics.duration,
                            performanceEntry: JSON.stringify(performanceMetrics)
                        }
                    };
                    return complete(apiEndSchema, request);
                }
                else {
                    var response_1;
                    if (request.responseText) {
                        try {
                            response_1 = JSON.parse(request.responseText);
                        }
                        catch (error) {
                            // no-op
                        }
                    }
                    if (getErrorAsMessage) {
                        try {
                            // If we requested the error to be encoded in the message field, decode it
                            var decodedError = _this._encodingFixEnabled
                                ? JSON.parse(Object(_ms_odsp_utilities_lib_encoding_Base64Encoding__WEBPACK_IMPORTED_MODULE_10__["base64ToString"])(response_1.error.message))
                                : JSON.parse(atob(response_1.error.message));
                            response_1 = { error: decodedError };
                        }
                        catch (e) {
                            // If we fail to decode, just try to continue with the original response
                        }
                    }
                    var status_1 = request.status, statusText_1 = request.statusText;
                    var _a = (response_1 || {}).error, _b = _a === void 0 ? {} : _a, _c = _b.message, message_1 = _c === void 0 ? '' : _c, _d = _b.innerError, _e = _d === void 0 ? {} : _d, _f = _e.stackTrace, stackTrace_1 = _f === void 0 ? '' : _f, _g = _e.debugMessage, debugMessage_1 = _g === void 0 ? '' : _g;
                    var offlinePromise = status_1 || !_this._isOffline ? _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(false) : _this._isOffline();
                    return offlinePromise.then(function (isOffline) {
                        var offlineMessage = isOffline ? 'Offline' : '';
                        var correlationId = request.getResponseHeader('request-id') || request.getResponseHeader('sprequestguid');
                        var isExpected = isOffline ||
                            !!Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getErrorResolutionFromResponse"])(response_1, status_1, function (code) {
                                return expectedErrorCodes[code];
                            });
                        var error = new _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"](new Error(message_1 || offlineMessage), {
                            response: response_1,
                            status: status_1,
                            request: request,
                            correlationId: correlationId,
                            isExpected: isExpected
                        });
                        if (expectedErrors && Object(_ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_8__["isExpectedError"])({ code: error.code, message: message_1 }, expectedErrors)) {
                            isExpected = true;
                        }
                        var apiEndSchema = {
                            resultType: isExpected ? _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure : _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure,
                            error: message_1,
                            resultCode: error.code,
                            extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (qosExtraData || {})), Object(_models_error_Error__WEBPACK_IMPORTED_MODULE_6__["getQosExtraDataFromError"])(error)), { stack: stackTrace_1, httpStatus: status_1, httpStatusText: statusText_1, requestId: correlationId, MSCorrelationVector: request.getResponseHeader('MS-CV'), debugMessage: debugMessage_1, accessTokenLength: auth.sessionToken && auth.sessionToken.accessToken
                                    ? auth.sessionToken.accessToken.length
                                    : -1, urlLength: apiUri.toString().length, useCookies: !!auth.useCookies, 
                                // This check may give false negatives, as being on a LAN with no internet still qualifies as "onLine"
                                isOffline: isOffline, rawRequestDuration: performanceMetrics.duration, performanceEntry: JSON.stringify(performanceMetrics) })
                        };
                        return complete(apiEndSchema, error);
                    });
                }
            });
        };
        var sessionManagementProvider = this._sessionManagementProvider;
        if (needsAuthorization) {
            if (accessToken) {
                return getData({
                    sessionToken: accessToken
                });
            }
            var origin_1 = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_9__["default"](url).authority;
            if (allowCookies && origin_1 && cookieOrigin && origin_1 === cookieOrigin) {
                // This is a same-origin call. In this case, cookies may be used for this API call.
                if (sessionManagementProvider && sessionManagementProvider.getFormDigest && requestType !== 'GET') {
                    // If the API call is not made using 'GET', a cross-site anti-forgery token needs to be obtained from the current app.
                    return sessionManagementProvider.getFormDigest().then(function (digestValue) {
                        return getData({
                            digestValue: digestValue,
                            useCookies: true
                        });
                    });
                }
                return getData({
                    useCookies: true
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getSessionToken) {
                var getSessionTokenOptions_1 = {
                    apiVersion: apiVersion,
                    endpoint: endpoint,
                    driveUrl: driveUrl,
                    path: url
                };
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(sessionManagementProvider.getSessionToken(getSessionTokenOptions_1)).then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    }).catch(function (error) {
                        if (sessionToken && isInvalidTokenError(error)) {
                            // If the token is invalid, do a one-time renewal attempt.
                            return sessionManagementProvider
                                .getSessionToken(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getSessionTokenOptions_1), { claimsChallenge: {
                                    sessionToken: sessionToken,
                                    claims: getAuthenticateClaims(error),
                                    error: error
                                } }))
                                .then(function (newSessionToken) {
                                if (newSessionToken.accessToken !== sessionToken.accessToken) {
                                    return getData({
                                        sessionToken: newSessionToken
                                    });
                                }
                                else {
                                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                                }
                            });
                        }
                        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
                    });
                });
            }
            if (sessionManagementProvider && sessionManagementProvider.getToken) {
                return sessionManagementProvider
                    .getToken(apiVersion, url)
                    .then(function (sessionToken) {
                    return getData({
                        sessionToken: sessionToken
                    });
                });
            }
        }
        return getData({});
    };
    return DataRequestor;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataRequestor);
function isInvalidTokenError(error) {
    if (error instanceof _models_error_Error__WEBPACK_IMPORTED_MODULE_6__["GraphError"]) {
        var request = error.request;
        var authenticate = request && request.getResponseHeader('WWW-Authenticate');
        if (authenticate &&
            authenticate.slice(0, BEARER_AUTH_TYPE.length) === BEARER_AUTH_TYPE &&
            authenticate.indexOf('error="insufficient_claims"') > -1) {
            return true;
        }
    }
    return false;
}
function getAuthenticateClaims(error) {
    var authenticate = error.request && error.request.getResponseHeader('WWW-Authenticate');
    var claimsToken = "claims=\"";
    if (authenticate) {
        var indexOfClaims = authenticate.indexOf(claimsToken);
        if (indexOfClaims > -1) {
            var endOfClaims = authenticate.indexOf("\"", indexOfClaims + claimsToken.length);
            if (endOfClaims > -1) {
                return authenticate.slice(indexOfClaims + claimsToken.length, endOfClaims);
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=DataRequestor.js.map

/***/ }),

/***/ "892h":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/Base64Encoding.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: base64ToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToString", function() { return base64ToString; });
/**
 * Decodes a base-64 string. It is assumed that the original encoded byte array is UTF-8 or ASCII.
 */
function base64ToString(encoded) {
    return decodeURIComponent(escape(atob(encoded)));
}
//# sourceMappingURL=Base64Encoding.js.map

/***/ }),

/***/ "8VvQ":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/peoplePicker/SubstratePeoplePickerHelper.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: SUBSTRATE_SEARCH_URL, PeoplePickerSubstrate, SubstratePeoplePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRATE_SEARCH_URL", function() { return SUBSTRATE_SEARCH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerSubstrate", function() { return PeoplePickerSubstrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstratePeoplePickerHelper", function() { return SubstratePeoplePickerHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var STORE_KEY = 'PeoplePicker';
var DISABLE_SUBSTRATE_KEY = 'DisableSubstrateSearch';
var SUBSTRATE_SEARCH_URL = 'https://outlook.office.com/search';
var PeoplePickerSubstrate = { ODB: 1286 };
var SubstratePeoplePickerHelper = /** @class */ (function () {
    function SubstratePeoplePickerHelper(params, dependencies) {
        this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["DataRequestor"]({}, {});
        this._pageContext = dependencies.pageContext;
        this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        if (this._sharingContextInformation && this._sharingContextInformation.additionalTokens) {
            this._substrateToken = this._sharingContextInformation.additionalTokens.substrateToken;
        }
        this.initializeDataStore();
    }
    /**
     * Returns whether or not we are able to use 3S for people search. 3S calls can be disabled if the OAuth call
     * previously failed, if we are token authenticated (Acquire only supports cookie auth), or if the user isn't in the
     * A/B experiment to use 3S.
     */
    SubstratePeoplePickerHelper.prototype.canUseSubstrate = function () {
        if (this._substrateToken) {
            return true;
        }
        var canUseSubstrate = false;
        // We can't call 3S On-Prem
        if (this._pageContext && !this._pageContext.isSPO) {
            return canUseSubstrate;
        }
        // Disable 3S if we're authenticated with an access token. Currently, 3S calls are only supported with cookie auth.
        if (this._pageContext && !!this._pageContext.authToken) {
            return canUseSubstrate;
        }
        if (this._pageContext &&
            this._oAuthTokenProvider &&
            _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(PeoplePickerSubstrate)) {
            canUseSubstrate = true;
        }
        if (this._dataStore) {
            canUseSubstrate =
                canUseSubstrate &&
                    !this._dataStore.getValue(DISABLE_SUBSTRATE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
        return canUseSubstrate;
    };
    /**
     * Store flag to disable 3S calls in session storage so we don't keep making OAuth token calls that will error.
     * The calls are expensive and if the user is unable to call 3S we shouldn't keep trying. Since some errors are
     * recoverable outside the session, don't scope to something as long-lived as local storage.
     */
    SubstratePeoplePickerHelper.prototype.disableSubstrateCallsForPicker = function () {
        this.initializeDataStore();
        this._dataStore.setValue(DISABLE_SUBSTRATE_KEY, true, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
    };
    /**
     * Retrieves an access token for calling 3S.
     */
    SubstratePeoplePickerHelper.prototype.getSubstrateToken = function () {
        var _this = this;
        if (this._substrateToken) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this._substrateToken);
        }
        if (this._oAuthTokenProvider) {
            /**
             * OAuthTokenProvider already logs QOS events for its calls but we want to measure retrieving 3S tokens from within the people picker
             * separately. This allows us to track how often users are forced into the fallback logic scenario.
             */
            var qos_1 = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: 'PeoplePicker.GetSubstrateToken' });
            return this._oAuthTokenProvider.getToken(SUBSTRATE_SEARCH_URL).then(function (oAuthToken) {
                qos_1.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success
                });
                return oAuthToken;
            }, function (error) {
                if (_ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].isCanceled(error)) {
                    qos_1.end({
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].ExpectedFailure,
                        resultCode: 'Canceled'
                    });
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].reject(error);
                }
                else {
                    qos_1.end({
                        resultCode: 'PeoplePicker.GetSubstrateTokenError',
                        resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                        extraData: {
                            serverErrorCode: error['_serverErrorCode'],
                            message: error.message
                        }
                    });
                    // If the Acquire call fails, disable future attempts to retrieve the 3S token for the current session.
                    _this.disableSubstrateCallsForPicker();
                }
                return null;
            });
        }
        return null;
    };
    SubstratePeoplePickerHelper.prototype.init = function (oAuthToken) {
        var scenario = 'documentshare';
        var initUrl = SUBSTRATE_SEARCH_URL + "/api/v1/init?scenario=" + scenario;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('20373606-dfd1-4220-9a96-50f93570a877', '07/03/2020', 'Removing litoken while calling Substrate.')) {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken
                },
                needsAuthorization: false
            });
        }
        else {
            this._dataRequestor.send({
                apiName: 'Substrate.PeopleSearch.Init',
                path: initUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                },
                needsAuthorization: false
            });
        }
    };
    SubstratePeoplePickerHelper.prototype.initializeDataStore = function () {
        if (!this._dataStore) {
            this._dataStore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_3__["default"](STORE_KEY, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_4__["default"].session);
        }
    };
    return SubstratePeoplePickerHelper;
}());

//# sourceMappingURL=SubstratePeoplePickerHelper.js.map

/***/ }),

/***/ "Fsp9":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/IPresenceType.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: PresenceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceType", function() { return PresenceType; });
// OneDrive:IgnoreCodeCoverage
var PresenceType;
(function (PresenceType) {
    PresenceType[PresenceType["Unknown"] = 0] = "Unknown";
    PresenceType[PresenceType["Online"] = 1] = "Online";
    PresenceType[PresenceType["Busy"] = 2] = "Busy";
    PresenceType[PresenceType["DoNotDisturb"] = 3] = "DoNotDisturb";
    PresenceType[PresenceType["BeRightBack"] = 4] = "BeRightBack";
    PresenceType[PresenceType["Away"] = 5] = "Away";
    PresenceType[PresenceType["Offline"] = 6] = "Offline";
    PresenceType[PresenceType["Hidden"] = 7] = "Hidden";
})(PresenceType || (PresenceType = {}));
//# sourceMappingURL=IPresenceType.js.map

/***/ }),

/***/ "GbJQ":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/EmailAddressParser.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["EmailAddressParser"]; });

// Loading @ms/odsp-utilities/./lib/string/EmailAddressParser.js



/***/ }),

/***/ "Joik":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Api.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Api"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Api.event.js



/***/ }),

/***/ "LGYR":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.base.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return ToggleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Label */ "wMNn");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'Toggle';
var ToggleBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToggleBase, _super);
    function ToggleBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleButton = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onClick = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, disabled = _a.disabled, checkedProp = _a.checked, onChange = _a.onChange, onChanged = _a.onChanged, onClick = _a.onClick;
            var checked = _this.state.checked;
            if (!disabled) {
                // Only update the state if the user hasn't provided it.
                if (checkedProp === undefined) {
                    _this.setState({
                        checked: !checked,
                    });
                }
                if (onChange) {
                    onChange(ev, !checked);
                }
                if (onChanged) {
                    onChanged(!checked);
                }
                if (onClick) {
                    onClick(ev);
                }
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(COMPONENT_NAME, props, {
            checked: 'defaultChecked',
        });
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            onAriaLabel: 'ariaLabel',
            offAriaLabel: undefined,
            onChanged: 'onChange',
        });
        _this.state = {
            checked: !!(props.checked || props.defaultChecked),
        };
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Toggle');
        return _this;
    }
    ToggleBase.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.checked === undefined) {
            return null;
        }
        return {
            checked: !!nextProps.checked,
        };
    };
    Object.defineProperty(ToggleBase.prototype, "checked", {
        /**
         * Gets the current checked state of the toggle.
         */
        get: function () {
            return this.state.checked;
        },
        enumerable: true,
        configurable: true
    });
    ToggleBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'div' : _b, className = _a.className, theme = _a.theme, disabled = _a.disabled, keytipProps = _a.keytipProps, label = _a.label, ariaLabel = _a.ariaLabel, 
        /* eslint-disable deprecation/deprecation */
        onAriaLabel = _a.onAriaLabel, offAriaLabel = _a.offAriaLabel, 
        /* eslint-enable deprecation/deprecation */
        offText = _a.offText, onText = _a.onText, styles = _a.styles, inlineLabel = _a.inlineLabel;
        var checked = this.state.checked;
        var stateText = checked ? onText : offText;
        var badAriaLabel = checked ? onAriaLabel : offAriaLabel;
        var toggleNativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["inputProperties"], ['defaultChecked']);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            checked: checked,
            inlineLabel: inlineLabel,
            onOffMissing: !onText && !offText,
        });
        var labelId = this._id + "-label";
        var stateTextId = this._id + "-stateText";
        // The following properties take priority for what Narrator should read:
        // 1. ariaLabel
        // 2. onAriaLabel (if checked) or offAriaLabel (if not checked)
        // 3. label AND stateText, if existent
        var labelledById = undefined;
        if (!ariaLabel && !badAriaLabel) {
            if (label) {
                labelledById = labelId;
            }
            if (stateText) {
                labelledById = labelledById ? labelledById + " " + stateTextId : stateTextId;
            }
        }
        var ariaRole = this.props.role ? this.props.role : 'switch';
        var renderPill = function (keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, toggleNativeProps, keytipAttributes, { className: classNames.pill, disabled: disabled, id: _this._id, type: "button", role: ariaRole, ref: _this._toggleButton, "aria-disabled": disabled, "aria-checked": checked, "aria-label": ariaLabel ? ariaLabel : badAriaLabel, "data-is-focusable": true, onChange: _this._noop, onClick: _this._onClick, "aria-labelledby": labelledById }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.thumb })));
        };
        var pillContent = keytipProps ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, ariaDescribedBy: toggleNativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return renderPill(keytipAttributes); })) : (renderPill());
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, { className: classNames.root, hidden: toggleNativeProps.hidden },
            label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { htmlFor: this._id, className: classNames.label, id: labelId }, label)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.container },
                pillContent,
                stateText && (
                // This second "htmlFor" property is needed to allow the
                // toggle's stateText to also trigger a state change when clicked.
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_3__["Label"], { htmlFor: this._id, className: classNames.text, id: stateTextId }, stateText))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null)));
    };
    ToggleBase.prototype.focus = function () {
        if (this._toggleButton.current) {
            this._toggleButton.current.focus();
        }
    };
    ToggleBase.prototype._noop = function () {
        /* no-op */
    };
    return ToggleBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Toggle.base.js.map

/***/ }),

/***/ "Xm1E":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/peoplePicker/odb/PeoplePickerProvider.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerProvider", function() { return PeoplePickerProvider; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony import */ var _models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/store/PeopleStore */ "fxuZ");
// OneDrive:CoverageThreshold(80)



var UNVALIDATED_EMAIL_ADDRESS = 'UNVALIDATED_EMAIL_ADDRESS'; // Person PrincipalType value to ignore when adding to cache.
var PeoplePickerProvider = /** @class */ (function () {
    function PeoplePickerProvider(params) {
        this._dataSource = params.peoplePickerDataSource
            ? params.peoplePickerDataSource
            : new _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__["PeoplePickerDataSource"]({
                imageAbsoluteWebUrl: params.imageAbsoluteWebUrl
            }, {
                pageContext: params.pageContext,
                apiUrlHelper: params.apiUrlHelper,
                graphPeoplePickerHelper: params.graphPeoplePickerHelper
            });
        this._ppCapabilities = this._dataSource.getCapabilities();
        if (this._ppCapabilities.supportsMruCaching) {
            this._mruCache = new _models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__["PeopleStore"]();
            this.MaxCacheSuggestions = 5;
        }
        else {
            this.MaxCacheSuggestions = 0;
        }
    }
    PeoplePickerProvider.prototype.search = function (query, context) {
        var _this = this;
        var searchPromise;
        var results = {
            cached: null,
            promise: null
        };
        var cacheResults;
        // Send cached results to caller immediately without waiting for server results
        // Don't use cache if limiting results to members of a particular SP Group
        // (context.groupID of zero indicates there are no group membership restrictions)
        if (this._mruCache && !context.groupID) {
            cacheResults = this.searchMruCache(query, context && context.filterExternalUsers); // get the items from the cache for the current query
            if (cacheResults.length > 0) {
                results.cached = cacheResults;
            }
        }
        results.promise = new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"](function (complete, error) {
            // Call the server to search for people that match the query
            searchPromise = _this._dataSource.search(query, context).then(function (data) {
                if (!data) {
                    return;
                }
                if (cacheResults) {
                    // Omit entries that are already in the local cache.
                    if (cacheResults.length > 0) {
                        cacheResults = _this._removeStaleCacheResults(cacheResults, data);
                    }
                    var cachedIds_1 = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
                    complete(data.filter(function (person) { return cachedIds_1.indexOf(person.userId) < 0; }));
                }
                else {
                    complete(data);
                }
            }, 
            /* onError */ function (data) {
                // pass through error to parent promise
                error(data);
            });
        }, 
        /* onCancel */ function () {
            if (searchPromise) {
                searchPromise.cancel();
            }
        });
        return results;
    };
    PeoplePickerProvider.prototype.resolve = function (query, context) {
        var _this = this;
        return this._dataSource.resolve(query, context).then(function (data) {
            if (_this._mruCache && data.isResolved) {
                _this.addToMruCache(data);
            }
            return data;
        });
        // TODO: Only add item to the cache for certain query parameter values:
        //  return (this.UseLocalSuggestionCache) &&
        // (this.UrlZone == null) &&
        // (this.SharePointGroupID <= 0) &&
        // (this.WebApplicationID == '{00000000-0000-0000-0000-000000000000}') &&
        // (this.EnabledClaimProviders == '' || this.EnabledClaimProviders == null) &&
        // (this.PrincipalAccountTypeEnum % 2 == 1 /*SP.Utilities.PrincipalType.user*/) &&
        // (this.ResolvePrincipalSource == 15 /*SP.Utilities.PrincipalSource.all*/);
    };
    PeoplePickerProvider.prototype.getPersonaDetails = function (accountID) {
        return this._dataSource.getPersonaDetails(accountID).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.subscribePresence = function (accountID, fnCallback) {
        return this._dataSource.subscribePresence(accountID, fnCallback);
    };
    PeoplePickerProvider.prototype.addToMruCache = function (item) {
        var mruCache = this._mruCache;
        if (mruCache &&
            item.rawPersonData &&
            item.rawPersonData['EntityData'] &&
            item.rawPersonData['EntityData']['PrincipalType'] !== UNVALIDATED_EMAIL_ADDRESS) {
            mruCache.setItem(item);
        }
    };
    PeoplePickerProvider.prototype.getPickerEntityInformation = function (person) {
        return this._dataSource.getPickerEntityInformation(person);
    };
    PeoplePickerProvider.prototype.sharePointSearch = function (query, context) {
        return this._dataSource.sharePointSearch(query, context).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.canUseGraph = function (context) {
        return this._dataSource.canUseGraph(context);
    };
    PeoplePickerProvider.prototype.canUseSubstrate = function (context) {
        return this._dataSource.canUseSubstrate(context);
    };
    PeoplePickerProvider.prototype.getLivePersonaPickerHelper = function () {
        return this._dataSource.getLivePersonaPickerHelper();
    };
    PeoplePickerProvider.prototype.searchMruCache = function (query, filterExternalUsers) {
        var data = [];
        var mruCache = this._mruCache;
        if (mruCache) {
            data = mruCache.getItems(query, filterExternalUsers);
            // Only return up to the maximum number of suggestions requested
            var maxCacheSuggestions = this.MaxCacheSuggestions;
            if (data.length > maxCacheSuggestions) {
                data = data.splice(0, maxCacheSuggestions);
            }
        }
        return data;
    };
    /**
     * Removes any stale results from the people picker cache so
     * we don't ignore search results that are fresher than the
     * corresponding cache entry.
     *
     * @param cacheResults The results that are stored in the localStorage cache.
     * @param searchResults Fresh search results.
     */
    PeoplePickerProvider.prototype._removeStaleCacheResults = function (cacheResults, searchResults) {
        var cachedIds = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
        var freshCacheResults = [];
        searchResults.forEach(function (searchResult) {
            var cacheResultId = cachedIds.indexOf(searchResult.userId);
            // If the ID exists in the cache, check that it's fresh.
            if (cacheResultId > -1) {
                var cacheResult = cacheResults[cacheResultId];
                // If the cache entry is fresh, add it to the array of fresh cache entries.
                if (_models_store_PeopleStore__WEBPACK_IMPORTED_MODULE_2__["PeopleStore"].isCacheEntryFresh(cacheResult, searchResult)) {
                    freshCacheResults.push(cacheResult);
                }
            }
        });
        return freshCacheResults;
    };
    return PeoplePickerProvider;
}());

//# sourceMappingURL=PeoplePickerProvider.js.map

/***/ }),

/***/ "YHiq":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/Toggle.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Toggle_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.base */ "LGYR");
/* harmony import */ var _Toggle_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.styles */ "14YZ");



var Toggle = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Toggle_base__WEBPACK_IMPORTED_MODULE_1__["ToggleBase"], _Toggle_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Toggle' });
//# sourceMappingURL=Toggle.js.map

/***/ }),

/***/ "cAy9":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/IPerson.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: PrincipalType, EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony import */ var _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../roleAssignments/PrincipalType */ "2+UY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_0__["default"]; });


var EntityType;
(function (EntityType) {
    EntityType[EntityType["regularUser"] = 0] = "regularUser";
    EntityType[EntityType["externalUser"] = 1] = "externalUser";
    EntityType[EntityType["group"] = 2] = "group";
    EntityType[EntityType["application"] = 3] = "application";
    EntityType[EntityType["linkedinUser"] = 4] = "linkedinUser";
})(EntityType || (EntityType = {}));
//# sourceMappingURL=IPerson.js.map

/***/ }),

/***/ "eDfq":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/SPFeatureInfo.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
/**
 * This class is primarily used with the `PageContext` class and `ISpPageContext` interface. It provides contextual
 * information for the features enabled on the SharePoint site that hosts the page.
 *
 * @internal
 */
var SPFeatureInfo = /** @class */ (function () {
    /**
     * @param data - Raw JSON data from the html file
     */
    function SPFeatureInfo(data) {
        this._features = new Map();
        if (!data) {
            throw new Error('Cannot create SPFeatureInfo object, incoming data is undefined.');
        }
        for (var key in data) {
            if (key !== undefined) {
                // tslint:disable-next-line:no-any
                var value = data[key];
                this._features.set(key, { version: value.Version, enabled: value.Enabled });
            }
        }
    }
    /**
     * Returns a JSON serializable object.
     */
    SPFeatureInfo.prototype._serialize = function () {
        var data = {};
        this._features.forEach(function (value, key) {
            data[key] = { Version: value.version, Enabled: value.enabled };
        });
        return data;
    };
    /**
     * Returns feature information for a given feature.
     * @param featureName - Name of a feature to lookup
     */
    SPFeatureInfo.prototype.get = function (featureName) {
        if (!featureName || (featureName && featureName.length === 0)) {
            throw new Error('Cannot get feature, featureName input is empty or undefined');
        }
        return this._features.get(featureName);
    };
    return SPFeatureInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPFeatureInfo);
//# sourceMappingURL=SPFeatureInfo.js.map

/***/ }),

/***/ "fxuZ":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/store/PeopleStore.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: PeopleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleStore", function() { return PeopleStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage




var PeopleStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeopleStore, _super);
    function PeopleStore() {
        var _this = _super.call(this, PeopleStore._Key, PeopleStore._DataStoreCachingType) || this;
        // Initiliaze constants
        _this._MaxItems = 200;
        _this._Version = 5;
        var oneWeekInMilliseconds = 604800000;
        // Initiliaze buffer object from DOM local storage if it exists
        _this._buffer = _this.getValue(PeopleStore._StorageKey);
        // If there's no buffer object in DOM local storage or if the buffer is from a previous schema version, initialize an empty buffer object
        if (!_this._buffer || _this._buffer.version !== _this._Version || !_this._buffer.lastCachePrune) {
            _this.initializeBuffer();
        }
        // Initialize data object for fast and easy lookups
        _this._data = {};
        // Only keep things in the cache if it has been emptied in the last week
        if (Date.now() < _this._buffer.lastCachePrune + oneWeekInMilliseconds ||
            _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('e96e6a47-9f55-4ea4-8395-c9f48a655b2a', '8/07/2018', 'PeopleStorePruning')) {
            for (var i = 0; i < _this._buffer.dataArray.length; i++) {
                _this._data[_this._buffer.dataArray[i].email] = _this._buffer.dataArray[i];
            }
        }
        else {
            // Prune the cache
            _this.initializeBuffer();
            _this.setValue(PeopleStore._StorageKey, _this._buffer);
        }
        return _this;
    }
    PeopleStore.clear = function () {
        var datastore = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"](PeopleStore._Key, PeopleStore._DataStoreCachingType);
        datastore.remove(PeopleStore._StorageKey);
    };
    PeopleStore.isCacheEntryFresh = function (cacheEntry, freshData) {
        return (cacheEntry.name === freshData.name &&
            cacheEntry.email === freshData.email &&
            cacheEntry.job === freshData.job &&
            cacheEntry.office === freshData.office &&
            cacheEntry.department === freshData.department &&
            cacheEntry.phone === freshData.phone);
    };
    PeopleStore.prototype.setItem = function (item) {
        /**
         * Check to see if the data object already has a matching entry for this person. If
         * the cached entry has the same name and email, do nothing. If anything has changed,
         * update the entry in the cache with the new information.
         */
        var cachedItem = this._data[item.email];
        if (cachedItem) {
            if (!PeopleStore.isCacheEntryFresh(cachedItem, item)) {
                var cachedIds = this._buffer.dataArray.map(function (cacheResult) { return cacheResult.userId; });
                var cacheId = cachedIds.indexOf(item.userId);
                this._buffer.dataArray[cacheId] = item;
            }
            else {
                return;
            }
        }
        else if (this._buffer.dataArray.length === this._MaxItems) {
            // Increment the buffer index and wrap it to the front of the array if it extended beyond MaxItems
            this._buffer.index++;
            if (this._buffer.index >= this._MaxItems) {
                this._buffer.index = 0;
            }
            // Remove oldest person stored in the data object
            var oldestPerson = this._buffer.dataArray[this._buffer.index];
            delete this._data[oldestPerson.email];
            // Remove the oldest person stored in the buffer array
            this._buffer.dataArray[this._buffer.index] = item;
        }
        else {
            // Push person on the buffer array (will take care of wrapping the index the next time an item is added)
            this._buffer.dataArray.push(item);
            this._buffer.index++;
        }
        // Update the data object in both cases with the person's email
        this._data[item.email] = item;
        // Serialize the buffer array and update local storage
        this.setValue(PeopleStore._StorageKey, this._buffer);
    };
    PeopleStore.prototype.getItems = function (query, filterExternalUsers) {
        var results = [];
        for (var i = 0; i < this._buffer.dataArray.length; i++) {
            // Start with the newest item in the buffer. Then work our way back so that we are returning the newest items in the cache.
            // Since items are stored from left to right in terms of oldest to newest, we will work our way from right to left.
            // For the case when _bufferindex - i is >= 0, we are just counting down towards zero. For the case where _bufferIndex - i < 0,
            // we are starting at the end of the buffer and counting down towards the location of _bufferIndex.
            var newestIndex = (this._buffer.index - i + this._MaxItems) % this._MaxItems;
            // TODO: Better algorithm here. It should match how the suggestions box algorithm in ODC PeoplePicker works today
            if (((this._buffer.dataArray[newestIndex].email &&
                this._buffer.dataArray[newestIndex].email.toLowerCase().indexOf(query.toLowerCase()) >= 0) ||
                (this._buffer.dataArray[newestIndex].name &&
                    this._buffer.dataArray[newestIndex].name.toLowerCase().indexOf(query.toLowerCase()) >= 0)) &&
                !(filterExternalUsers && this._buffer.dataArray[newestIndex].entityType === 1 /* externalUser */)) {
                results.push(this._buffer.dataArray[newestIndex]);
            }
        }
        return results;
    };
    PeopleStore.prototype.containsItem = function (item) {
        return Boolean(this._data[item.email]);
    };
    PeopleStore.prototype.initializeBuffer = function () {
        this._buffer = {};
        this._buffer.dataArray = [];
        this._buffer.index = -1;
        this._buffer.version = this._Version;
        this._buffer.lastCachePrune = Date.now();
    };
    PeopleStore._Key = 'ClientPeoplePicker';
    PeopleStore._StorageKey = 'MRU'; // Together with 'dataStoreKey' (in 'super' call) will come to 'ClientPeoplePickerMRU'
    PeopleStore._DataStoreCachingType = _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local;
    return PeopleStore;
}(_ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"]));

//# sourceMappingURL=PeopleStore.js.map

/***/ }),

/***/ "kL0j":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Toggle/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Toggle, ToggleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle */ "YHiq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _Toggle__WEBPACK_IMPORTED_MODULE_0__["Toggle"]; });

/* harmony import */ var _Toggle_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.base */ "LGYR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleBase", function() { return _Toggle_base__WEBPACK_IMPORTED_MODULE_1__["ToggleBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "nXow":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/RequestDurationLoggingHelper.js


/***/ }),

/***/ "qJrk":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/ErrorHelper.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/telemetry-manager/./lib/ErrorHelper.js



/***/ }),

/***/ "sQJ6":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/PeoplePicker.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSource, PrincipalType, EntityType, PresenceType, PeoplePickerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSource", function() { return _dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerDataSource"]; });

/* harmony import */ var _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/peoplePicker/IPerson */ "cAy9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__["PrincipalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return _dataSources_peoplePicker_IPerson__WEBPACK_IMPORTED_MODULE_1__["EntityType"]; });

/* harmony import */ var _dataSources_peoplePicker_IPresenceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSources/peoplePicker/IPresenceType */ "Fsp9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresenceType", function() { return _dataSources_peoplePicker_IPresenceType__WEBPACK_IMPORTED_MODULE_2__["PresenceType"]; });

/* harmony import */ var _providers_peoplePicker_odb_PeoplePickerProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/peoplePicker/odb/PeoplePickerProvider */ "Xm1E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerProvider", function() { return _providers_peoplePicker_odb_PeoplePickerProvider__WEBPACK_IMPORTED_MODULE_3__["PeoplePickerProvider"]; });





//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "swgI":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-graph@8.4.9_19c80a772e784933045edf88c0aed6c1/node_modules/@ms/odsp-graph/lib/models/error/Error.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: GraphError, getQosExtraDataFromError, isGraphError, getErrorResolution, getResultCodeFromError, getErrorResolutionFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphError", function() { return GraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQosExtraDataFromError", function() { return getQosExtraDataFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphError", function() { return isGraphError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolution", function() { return getErrorResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultCodeFromError", function() { return getResultCodeFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorResolutionFromResponse", function() { return getErrorResolutionFromResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");


var GraphError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphError, _super);
    function GraphError(error, params) {
        var _this = this;
        var _a = params.response, _b = (_a === void 0 ? {} : _a).error, _c = (_b === void 0 ? {} : _b).innerError, _d = (_c === void 0 ? {} : _c).stackTrace, stackTrace = _d === void 0 ? '' : _d, response = params.response, request = params.request, status = params.status, _e = params.code, code = _e === void 0 ? getErrorResolutionFromResponse(response, status, function (code) { return "" + code; }) ||
            'unhandled' : _e;
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ innerError: error, code: code }, params);
        _this = _super.call(this, props) || this;
        _this.name = 'GraphError';
        _this.response = response;
        _this.status = status;
        _this.serverStack = stackTrace;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return GraphError;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_1__["ApiError"]));

var errorMessage = 'errorMessage';
var vroomStatus = 'vroomStatus';
var vroomErrorCode = 'vroomErrorCode';
var vroomErrorMessage = 'vroomErrorMessage';
var vroomErrorInnerCode = 'vroomErrorInnerCode';
var vroomErrorInnerMessage = 'vroomErrorInnerMessage';
var vroomErrorInnerDebugMessage = 'vroomErrorInnerDebugMessage';
var vroomErrorInnerStack = 'vroomErrorInnerStack';
function getQosExtraDataFromError(error) {
    var extraData = {};
    extraData[errorMessage] = error.message;
    if (isGraphError(error)) {
        extraData[vroomStatus] = error.status;
        var response = error.response;
        if (response && response.error) {
            var responseError = response.error;
            extraData[vroomErrorCode] = responseError.code;
            extraData[vroomErrorMessage] = responseError.message;
            var innerError = responseError.innerError || responseError.innererror;
            if (innerError) {
                extraData[vroomErrorInnerCode] = innerError.code;
                extraData[vroomErrorInnerMessage] = innerError.message;
                extraData[vroomErrorInnerDebugMessage] = innerError.debugMessage;
                extraData[vroomErrorInnerStack] = innerError.stackTrace;
            }
        }
    }
    return extraData;
}
function isGraphError(error) {
    return error instanceof GraphError;
}
function getErrorResolution(error, resolveError) {
    if (isGraphError(error)) {
        var response = error.response, status_1 = error.status;
        return getErrorResolutionFromResponse(response, status_1, function (code) {
            return resolveError(code, error);
        });
    }
}
function getResultCodeFromError(error) {
    return getErrorResolution(error, function (code) { return "" + code; }) || 'unhandled';
}
function getErrorResolutionFromResponse(response, status, resolveError) {
    if (response) {
        var innerErrors = [];
        var innerError = response.error;
        while (innerError) {
            innerErrors.push(innerError);
            innerError = innerError.innerError || innerError.innererror;
        }
        while ((innerError = innerErrors.pop())) {
            if (typeof innerError.code !== 'undefined') {
                var resolution = resolveError(innerError.code);
                if (resolution !== undefined) {
                    return resolution;
                }
            }
        }
    }
    return resolveError(status);
}
//# sourceMappingURL=Error.js.map

/***/ }),

/***/ "xYco":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/web/WebTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/WebTemplateType */ "DRdk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["WebTemplateType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["isTeamSiteLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * DO NOT USE - moved to interfaces for better import location
 * @deprecated as of version 12.15.0
 */


//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "yImb":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSource", function() { return PeoplePickerDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/DataSource */ "AfY0");
/* harmony import */ var _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../roleAssignments/PrincipalType */ "2+UY");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/peoplePicker/SubstratePeoplePickerHelper */ "8VvQ");
/* harmony import */ var _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/url/ApiUrlHelper */ "sVQZ");
/* harmony import */ var _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/url/ItemUrlHelper */ "+1yd");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-graph/lib/base/dataRequestor/DataRequestor */ "6r7H");
/* harmony import */ var _ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-graph/lib/models/error/Error */ "swgI");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/EmailAddressParser */ "GbJQ");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
// OneDrive:CoverageThreshold(50)














var PeoplePickerDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PeoplePickerDataSource, _super);
    function PeoplePickerDataSource(paramsOrOriginalParams, dependencies) {
        var _this = this;
        var pageContext = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams
            : dependencies.pageContext;
        _this = _super.call(this, {}, {
            pageContext: pageContext
        }) || this;
        var apiUrlHelper = isOriginalParams(paramsOrOriginalParams)
            ? paramsOrOriginalParams.apiUrlHelper
            : dependencies.apiUrlHelper;
        _this._apiUrlHelper = apiUrlHelper
            ? apiUrlHelper
            : new _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_6__["ApiUrlHelper"]({}, {
                itemUrlHelper: new _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_7__["ItemUrlHelper"]({}, { pageContext: pageContext }),
                pageContext: pageContext
            });
        _this._capabilities = {
            supportsMruCaching: true
        };
        if (dependencies) {
            _this._dataRequestor = dependencies.dataRequestor;
            _this._graphPeoplePickerHelper = dependencies.graphPeoplePickerHelper;
            _this._substratePeoplePickerHelper = dependencies.substratePeoplePickerHelper;
            _this._livePeoplePickerHelper = dependencies.livePeoplePickerHelper;
            _this._getAuthToken = dependencies.getAuthToken;
        }
        _this._invalidPeopleSubTypesKSActivated = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('daa1be46-12ff-45a4-8c9f-9b3c0f174853', '01/19/2021', 'Ignore invalid PeopleSubtypes.');
        return _this;
    }
    PeoplePickerDataSource.prototype.getCapabilities = function () {
        return this._capabilities;
    };
    PeoplePickerDataSource.prototype.getPersonaDetails = function (accountID) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('sp.publishing.personmagazine.GetPersonMagazineUserProfileDataForUser')
                    .parameter('accountName', accountID)
                    .toString(),
                qosName: 'GetPersonaDetails',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var transformPerson = function (rawPerson) { return ({
                        name: rawPerson.DisplayName,
                        email: rawPerson.Email,
                        userId: rawPerson.AccountName,
                        office: rawPerson.Office,
                        image: rawPerson.PictureUrl,
                        job: rawPerson.Title,
                        department: rawPerson.DepartmentName,
                        phone: rawPerson.Phone,
                        sip: rawPerson.Lync
                    }); };
                    var response = JSON.parse(responseText);
                    var rawProfile = response.d.GetPersonMagazineUserProfileDataForUser;
                    var ret = {
                        personDetails: transformPerson(rawProfile.Primary),
                        managerChain: rawProfile.ManagerChain.results.map(transformPerson),
                        directReports: rawProfile.DirectReports.results.map(transformPerson)
                    };
                    ret.personDetails.profilePage =
                        Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__["getServerUrl"])(_this._pageContext) +
                            '/_layouts/15/me.aspx?p=' +
                            encodeURIComponent(ret.personDetails.sip) +
                            '&origin=ProfileODBCard';
                    return ret;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.getPickerEntityInformation = function (person) {
        var _this = this;
        var groupId = 0;
        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
            groupId = Number(person.rawPersonData.EntityData.SPGroupID);
        }
        var additionalPostData = JSON.stringify({
            entityInformationRequest: {
                PrincipalType: person.principalType,
                EmailAddress: person.email,
                GroupId: groupId
            }
        });
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.GetPickerEntityInformation')
                    .toString(),
                additionalPostData: additionalPostData,
                qosName: 'getPickerEntityInformation',
                authToken: authToken,
                noRedirect: true,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var entityInformation = {
                        totalMemberCount: response.d.TotalMemberCount,
                        person: person
                    };
                    return entityInformation;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.resolve = function (query, context) {
        var _this = this;
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Resolve',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    var responseData = JSON.parse(response.d.ClientPeoplePickerResolveUser);
                    var personArray = [];
                    personArray[0] = responseData;
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('067ca2b4-2244-4153-8dfa-d11e6b4487bb', '03/19/2018', 'Only overwrite display text if it is null or empty')) {
                        if (!responseData.IsResolved) {
                            personArray[0].DisplayText = responseData.Key;
                        }
                    }
                    else {
                        if (!responseData.IsResolved) {
                            if (!!responseData.EntityData.IsBlockedOnODB &&
                                responseData.EntityData.IsBlockedOnODB.toLowerCase() === 'true') {
                                //do nothing for ODB policy.
                            }
                            else {
                                personArray[0].DisplayText = responseData.Key;
                            }
                        }
                    }
                    personArray = _this._transformData(personArray, context.filterExternalUsers);
                    var person = personArray[0];
                    if (context.filterExternalUsers && person && person.entityType === 1 /* externalUser */) {
                        // If filterExternalUsers is passed then mark any existing external user in directory as unresolved
                        // and change its entity type to default.
                        person.isResolved = false;
                        person.entityType = 0 /* regularUser */;
                    }
                    else if (context.blockViaPolicy &&
                        !context.filterExternalUsers &&
                        person &&
                        !person.isResolved &&
                        person.multipleMatches.length === 0) {
                        person.isResolved = true;
                        person.isExternal = true;
                        person.entityType = 1 /* externalUser */;
                    }
                    if (context.isGraphDistributionList && context.useGraph && person.isExternal) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList;
                    }
                    return person;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.canUseGraph = function (context) {
        var canUseGraph = context &&
            context.useGraph &&
            this._graphPeoplePickerHelper &&
            this._graphPeoplePickerHelper.canUseGraph();
        if (canUseGraph && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseGraph;
    };
    PeoplePickerDataSource.prototype.canUseSubstrate = function (context) {
        var canUseSubstrate = context.useSubstrate &&
            this._substratePeoplePickerHelper &&
            this._substratePeoplePickerHelper.canUseSubstrate();
        if (canUseSubstrate && !this._dataRequestor) {
            this._dataRequestor = new _ms_odsp_graph_lib_base_dataRequestor_DataRequestor__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {});
        }
        return canUseSubstrate;
    };
    PeoplePickerDataSource.prototype.getLivePersonaPickerHelper = function () {
        return this._livePeoplePickerHelper;
    };
    PeoplePickerDataSource.prototype.search = function (query, context) {
        if (this.canUseSubstrate(context)) {
            return this._substrateSearch(query, context);
        }
        else if (this.canUseGraph(context)) {
            return this._graphSearch(query, context);
        }
        else {
            return this.sharePointSearch(query, context);
        }
    };
    PeoplePickerDataSource.prototype.sharePointSearch = function (query, context) {
        var _this = this;
        // Make sure to hide the search directory button when we're already searching via SP
        if (context.onToggleGetMoreResults) {
            context.onToggleGetMoreResults(false);
        }
        var getDataPromise = function (authToken) {
            return _this.dataRequestor.getData({
                url: _this._apiUrlHelper
                    .build()
                    .segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser')
                    .toString(),
                additionalPostData: _this._constructPostBody(query, context),
                qosName: 'Search',
                authToken: authToken,
                parseResponse: function (responseText) {
                    var _a = context.allowSharePointGroups, allowSharePointGroups = _a === void 0 ? true : _a, filterExternalUsers = context.filterExternalUsers, forceResolve = context.forceResolve;
                    var response = JSON.parse(responseText);
                    var peopleArray = JSON.parse(response.d.ClientPeoplePickerSearchUser);
                    var entities = _this._transformData(peopleArray, filterExternalUsers);
                    if (filterExternalUsers) {
                        entities = entities.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                    }
                    var noResults = !entities.length;
                    entities = entities.filter(function (person) {
                        if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup) {
                            return allowSharePointGroups;
                        }
                        else if (person.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup) {
                            /**
                             * If SharePoint groups are allowed, that means ALL security groups are allowed as well.
                             * If SharePoint groups aren't allowed, that means only email-enabled security groups are allowed.
                             */
                            return allowSharePointGroups || _this._isValidEmail(person.email, true /* isSecurityGroup */);
                        }
                        else {
                            return _this._isValidEmail(person.email, false /* isSecurityGroup */);
                        }
                    });
                    if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('cc7520a8-6922-4e12-81c1-179764750212', '3/29/2018', 'Disable limiting no results behavior to e-mail addresses.')) {
                        if (forceResolve && noResults) {
                            entities.push({
                                name: query,
                                userId: query,
                                email: query
                            });
                        }
                    }
                    else {
                        /**
                         * If the query returned no results and the query is an email, add
                         * that email as a suggestion.
                         */
                        if (context.resolveEmailIfNoResults !== false &&
                            entities.length === 0 &&
                            _this._isValidEmail(query, false /* isSecurityGroup */)) {
                            var rawData = {
                                Key: query,
                                IsResolved: false
                            };
                            entities.push({
                                email: query,
                                entityType: 1 /* externalUser */,
                                isResolved: false,
                                job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                                name: query,
                                userId: query,
                                rawData: rawData,
                                rawPersonData: rawData,
                                isExternal: true
                            });
                        }
                    }
                    return entities;
                }
            });
        };
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_4__["default"].resolve(this._getAuthToken && this._getAuthToken(this._pageContext.webAbsoluteUrl)).then(getDataPromise);
    };
    PeoplePickerDataSource.prototype.subscribePresence = function (accountID, fnCallback) {
        var _this = this;
        try {
            this._ensureSkypePresence();
            if (!O365Shell_Shim.SkypeIntegration.isAvailable()) {
                return null; //If skypeIntegration is not available for this user, return null so that we can handle not showing presence gracefully.
            }
            var fnPresenceCallback_1 = function (type) {
                try {
                    switch (type) {
                        case 0: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Unknown:
                            fnCallback(0 /* Unknown */);
                            break;
                        case 1: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Online:
                            fnCallback(1 /* Online */);
                            break;
                        case 2: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Busy:
                            fnCallback(2 /* Busy */);
                            break;
                        case 3: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.DoNotDisturb:
                            fnCallback(3 /* DoNotDisturb */);
                            break;
                        case 4: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.BeRightBack:
                            fnCallback(4 /* BeRightBack */);
                            break;
                        case 5: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Away:
                            fnCallback(5 /* Away */);
                            break;
                        case 6: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Offline:
                            fnCallback(6 /* Offline */);
                            break;
                        case 8: // Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Hidden:
                            fnCallback(7 /* Hidden */);
                            break;
                        default:
                            fnCallback(0 /* Unknown */);
                            break;
                    }
                }
                catch (e) {
                    // do nothing
                }
            };
            this._skypeIntegration.TrackPresence(accountID, fnPresenceCallback_1);
            var disposable = {
                dispose: function () {
                    try {
                        _this._skypeIntegration.UntrackPresence(accountID, fnPresenceCallback_1);
                    }
                    catch (e) {
                        // do nothing
                    }
                }
            };
            return disposable;
        }
        catch (e) {
            // do nothing
        }
        return null;
    };
    PeoplePickerDataSource.prototype.sendSourceName = function () {
        return 'PeoplePickerDataSource';
    };
    PeoplePickerDataSource.prototype._constructPostBody = function (query, context) {
        var strBody = {
            queryParams: {
                QueryString: query,
                MaximumEntitySuggestions: context.maximumEntitySuggestions,
                AllowEmailAddresses: context.allowEmailAddresses,
                AllowOnlyEmailAddresses: context.allowOnlyEmailAddresses,
                PrincipalType: context.principalType,
                PrincipalSource: context.principalSource,
                UseSubstrateSearch: context.useSubstrateSearch,
                SharePointGroupID: context.groupID,
                QuerySettings: context.querySettings
            }
        };
        return JSON.stringify(strBody);
    };
    PeoplePickerDataSource.prototype._ensureSkypePresence = function () {
        var _this = this;
        try {
            if (!Boolean(this._skypeIntegration)) {
                var skypeIntegration_1 = new O365Shell_Shim.SkypeIntegration();
                skypeIntegration_1.OnApiReady(function () {
                    _this._skypeIntegration = skypeIntegration_1;
                });
            }
        }
        catch (e) {
            //do nothing. Basically skype presence didn't work so degrade gracefully
        }
    };
    PeoplePickerDataSource.prototype._graphSearch = function (query, context) {
        var _this = this;
        return this._graphPeoplePickerHelper.getGraphToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            /**
             * Currently, mail-enabled security groups and legacy DLs are returned the same way from Graph. The former is an allowed share target while
             * the latter is not. Our two options for dealing with this are to:
             *   1. Call resolve when a user selects a PublicDistributionList returned by Graph. If it's a legacy DL, show an error message to the user.
             *   2. Filter out all PublicDistributionList objects returned by Graph and have the user click through to search the directory for more result
             * Putting this experiment behind a killswitch, not a flight, as calling Graph via the people picker is already behind a flight.
             */
            var graphRequestUrl = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_13__["default"]("https://graph.microsoft.com/v1.0/me/people");
            if (query) {
                graphRequestUrl.setQueryFromObject({
                    $search: "\"" + query + "\"",
                    $top: '30',
                    $select: 'displayName,scoredEmailAddresses,personType,department,jobTitle,userPrincipalName'
                });
                if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('08c31a2f-5109-4dd9-b6ab-d6ea8fec0d9f', '09/29/2020', 'Fix bug: Should correctly handle PrincipalType in Graph query filter.')) {
                    var personTypeFilter = PeoplePickerDataSource._getPersonTypeFilter(context);
                    if (personTypeFilter) {
                        graphRequestUrl.setQueryParameter('$filter', personTypeFilter);
                    }
                }
                else if (context.filterPublicDistributionList !== false) {
                    graphRequestUrl.setQueryParameter('$filter', "personType/subclass ne 'PublicDistributionList'");
                }
            }
            return _this._dataRequestor
                .send({
                apiName: 'Graph.PeopleSearch',
                path: graphRequestUrl.toString(),
                headers: {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-PeopleQuery-QuerySources': 'Mailbox,Directory'
                },
                needsAuthorization: false
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                if (!data || !data.value || data.value.length === 0) {
                    // fall back to SharePoint Search
                    return _this.sharePointSearch(query, context);
                }
                var rawPeople = data.value;
                var people = [];
                rawPeople.forEach(function (rawPerson) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        rawPerson.personType.subclass &&
                        _this._isIgnorablePeopleSubType(rawPerson.personType.subclass)) {
                        return;
                    }
                    var email = rawPerson.scoredEmailAddresses[0]
                        ? rawPerson.scoredEmailAddresses[0].address
                        : '';
                    var key = rawPerson.userPrincipalName &&
                        _this._isValidEmail(rawPerson.userPrincipalName, false /*isSecurityGroup*/)
                        ? rawPerson.userPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = rawPerson.personType.subclass === 'ImplicitContact';
                    var isOrganizationUser = rawPerson.personType.subclass === 'OrganizationUser';
                    var isUnifiedGroup = rawPerson.personType.class === 'Group' && rawPerson.personType.subclass === 'UnifiedGroup';
                    var isPublicDistributionList = rawPerson.personType.subclass === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: rawPerson.department,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false ? rawPerson.jobTitle : rawPerson.jobTitle || email,
                        name: rawPerson.displayName,
                        providerName: !isOrganizationUser ? undefined : 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser,
                        aadObjectId: rawPerson.id
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.userId = rawPerson.id; // Unified groups return a guid in rawPerson.userPrincipalName that won't resolve.
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            rawPerson.personType.class === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                /**
                 * Graph returning a 404 in search means that the resource to search doesn't exist. 401 means
                 * the user did not authenticate correctly. 403 means the user doesn't have permission to call Graph.
                 * Disable calls for the user and fallback to SP search in these cases.
                 */
                if (Object(_ms_odsp_graph_lib_models_error_Error__WEBPACK_IMPORTED_MODULE_10__["isGraphError"])(error)) {
                    switch (error.status) {
                        case 400:
                        case 401:
                        case 403:
                        case 404:
                            _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                            return _this.sharePointSearch(query, context);
                        default:
                            return _this.sharePointSearch(query, context); // Handle error, probably
                    }
                }
                else if (error.name !== 'Canceled') {
                    _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                }
                if (error.name === 'Canceled') {
                    return null;
                }
                else {
                    return _this.sharePointSearch(query, context); // Handle error, probably
                }
            });
        });
    };
    PeoplePickerDataSource.prototype._substrateSearch = function (query, context) {
        var _this = this;
        return this._substratePeoplePickerHelper.getSubstrateToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            var segmentIDs = null;
            //do not set array if length is 0
            if (context.siteIBSegmentIDs && context.siteIBSegmentIDs.length > 0) {
                segmentIDs = context.siteIBSegmentIDs;
            }
            var provenances = ['Directory'];
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('9403ac4d-b51a-48b3-a4c0-9007477f73ea', '02/18/2020', 'Mailbox Searching in Substrate People Suggestions.')) {
                provenances.splice(0, 0, 'Mailbox');
            }
            var headersDict = {};
            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_11__["Killswitch"].isActivated('04f09a5b-1c0f-42ef-9b9f-ba8c1e321810', '07/03/2020', 'Removing litoken in Substrate call.')) {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken
                };
            }
            else {
                headersDict = {
                    Authorization: 'Bearer ' + oAuthToken,
                    'X-User-Context': 'litoken=' + oAuthToken
                };
            }
            return _this._dataRequestor
                .send({
                apiName: 'Substrate.PeopleSearch',
                path: _utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_5__["SUBSTRATE_SEARCH_URL"] + "/api/v1/suggestions",
                headers: headersDict,
                needsAuthorization: false,
                requestType: 'POST',
                postData: JSON.stringify({
                    EntityRequests: [
                        {
                            EntityType: 'People',
                            ProvenanceMergeMode: 'Default',
                            Provenances: provenances,
                            Query: {
                                QueryString: query
                            },
                            From: 0,
                            Size: 25,
                            Fields: [
                                // "Id",
                                'DisplayName',
                                'EmailAddresses',
                                'CompanyName',
                                'JobTitle',
                                'OfficeLocation',
                                'Department',
                                // "ImAddress",
                                // "PhoneNumber",
                                // "ADObjectId",
                                'UserPrincipalName',
                                // "PersonaId",
                                // "FeatureData",
                                // "PDLItemId",
                                'PeopleType',
                                'PeopleSubtype'
                                // "Confidence"
                            ],
                            Filter: !segmentIDs
                                ? null
                                : {
                                    Or: segmentIDs.map(function (ID) {
                                        return { Term: { InformationBarrierSegment: ID } };
                                    })
                                }
                        }
                    ],
                    TimeZone: 'UTC',
                    Cvid: context.conversationId,
                    Scenario: { Name: 'documentshare' }
                })
            })
                .then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                var suggestions = data.Groups[0] ? data.Groups[0].Suggestions : [];
                var people = [];
                suggestions.forEach(function (suggestion) {
                    if (!_this._invalidPeopleSubTypesKSActivated &&
                        suggestion.PeopleSubtype &&
                        _this._isIgnorablePeopleSubType(suggestion.PeopleSubtype)) {
                        return;
                    }
                    var email = suggestion.EmailAddresses[0] || suggestion.QueryText || '';
                    var key = suggestion.UserPrincipalName &&
                        _this._isValidEmail(suggestion.UserPrincipalName, false /*isSecurityGroup*/)
                        ? suggestion.UserPrincipalName
                        : email;
                    var rawData = { Key: key, IsResolved: false };
                    var isImplicit = suggestion.PeopleSubtype === 'ImplicitContact';
                    var isOrganizationUser = suggestion.PeopleSubtype === 'OrganizationUser';
                    var isLinkedInContact = suggestion.PeopleSubtype === 'LinkedIn';
                    var isUnifiedGroup = suggestion.PeopleType === 'Group' && suggestion.PeopleSubtype === 'UnifiedGroup';
                    var isPublicDistributionList = suggestion.PeopleSubtype === 'PublicDistributionList';
                    var imageUrl = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                    var person = {
                        department: suggestion.Department,
                        office: suggestion.OfficeLocation,
                        email: email,
                        image: isImplicit ? undefined : imageUrl,
                        job: context.fallbackToEmailIfNoJob === false
                            ? suggestion.JobTitle
                            : suggestion.JobTitle || email,
                        name: suggestion.DisplayName,
                        providerName: 'Provider',
                        userId: key,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                        person.providerName = undefined; // In this case we need to set the providerName to be undefined so that the later code will resolve this entity
                    }
                    else if (isLinkedInContact) {
                        person.entityType = 4 /* linkedinUser */;
                    }
                    else {
                        person.principalType = isPublicDistributionList
                            ? _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList
                            : _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].none;
                        person.entityType =
                            suggestion.PeopleType === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    if (!!person.userId) {
                        people.push(person);
                    }
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (context.resolveEmailIfNoResults !== false &&
                    people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: false,
                        job: context.fallbackToEmailIfNoJob === false ? undefined : query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                if (error.name !== 'Canceled') {
                    _this._substratePeoplePickerHelper.disableSubstrateCallsForPicker();
                    _this.sharePointSearch(query, context);
                }
                return null;
            });
        });
    };
    PeoplePickerDataSource.prototype._isValidEmail = function (email, isSecurityGroup) {
        /**
         * Users without an email address assigned are valid in ShareLink scenarios.
         * Security groups without an email address are not valid in ShareLink scenarios.
         */
        if (!email) {
            return !isSecurityGroup;
        }
        // Known input that causes issues (and cannot exist in a valid email address).
        if (email.indexOf(' ') > -1 || email.indexOf(';') > -1) {
            return false;
        }
        // If result has an associated email, ensure that it is valid
        return _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_12__["default"].isValidEmailSyntax(email, false);
    };
    PeoplePickerDataSource._getPersonTypeFilter = function (context) {
        // If the principalType only contains User, just directly return "personType ne Group"
        if (context.principalType === _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user) {
            return "personType/class ne 'Group'";
        }
        var filterString = '';
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].distributionList)) {
            filterString = filterString + "personType/subclass ne 'PublicDistributionList'";
        }
        // Note: if the PrincipalType that sent to Graph doesn't contain SecurityGroup, it means
        // from people picker side it doesn't want O365 Group returned from Graph.
        if (!(context.principalType & _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup)) {
            if (filterString) {
                filterString = filterString + ' and ';
            }
            filterString = filterString + "personType/subclass ne 'UnifiedGroup'";
        }
        if (filterString) {
            return filterString;
        }
        if (context.filterPublicDistributionList !== false) {
            return "personType/subclass ne 'PublicDistributionList'";
        }
        return '';
    };
    PeoplePickerDataSource.prototype._isIgnorablePeopleSubType = function (peopleSubType) {
        if (!peopleSubType) {
            return false;
        }
        // Here lists some legacy or invalid PeopleSubtype in suggestions might be returned from 3S, they should be filtered out
        var ignorableSubTypes = ['PersonalDistributionList', 'ImplicitGroup', 'Unknown'];
        return ignorableSubTypes.includes(peopleSubType);
    };
    PeoplePickerDataSource.prototype._transformData = function (data, filterExternalUsers) {
        var _this = this;
        return data.map(function (rawPerson) {
            var rawEntityData = rawPerson.EntityData;
            var person = {
                name: rawPerson.DisplayText,
                email: rawEntityData.Email,
                userId: rawPerson.Key,
                job: rawEntityData.Title,
                department: rawEntityData.Department,
                phone: rawEntityData.MobilePhone,
                providerName: rawPerson.ProviderDisplayName,
                entityType: rawPerson.EntityType,
                isResolved: rawPerson.IsResolved,
                multipleMatches: rawPerson.MultipleMatches,
                rawPersonData: rawPerson,
                //set "rawData" to be the value exactly returned by the server. For list metadata, we need this exact value
                //when we write back to the list.
                rawData: rawPerson
            };
            if (person.multipleMatches.length > 0) {
                person.multipleMatches = _this._transformData(person.multipleMatches, filterExternalUsers);
                if (filterExternalUsers) {
                    person.multipleMatches = person.multipleMatches.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                }
            }
            var email = person.email;
            if (person.isResolved) {
                if (email) {
                    person.image = Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_8__["getUserPhotoUrl"])(email);
                }
                else {
                    person.image = null;
                }
            }
            // calculate entity type
            var serverType = rawEntityData.PrincipalType || rawPerson.EntityType;
            switch (serverType) {
                case 'UNVALIDATED_EMAIL_ADDRESS':
                case 'GUEST_USER':
                    person.entityType = 1 /* externalUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
                    person.isExternal = true;
                    break;
                case 'SecGroup':
                case 'SharePointGroup':
                case 'FormsRole':
                    person.entityType = 2 /* group */;
                    if (serverType === 'SharePointGroup') {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].sharePointGroup;
                    }
                    else {
                        person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].securityGroup;
                    }
                    break;
                default:
                    person.entityType = 0 /* regularUser */;
                    person.principalType = _roleAssignments_PrincipalType__WEBPACK_IMPORTED_MODULE_3__["default"].user;
            }
            return person;
        });
    };
    return PeoplePickerDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));

function isOriginalParams(params) {
    var originalParams = params;
    return !!originalParams.webAbsoluteUrl;
}
//# sourceMappingURL=PeoplePickerDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~editnavchunk~spcx-panels_[locale].js.map