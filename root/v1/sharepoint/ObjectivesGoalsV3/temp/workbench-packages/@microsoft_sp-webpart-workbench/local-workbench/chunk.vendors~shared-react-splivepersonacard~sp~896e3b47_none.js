(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-splivepersonacard~sp~896e3b47"],{

/***/ "0wds":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/oauthUtility/OAuthUtility.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "XKi3");
/* harmony import */ var _OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OAuthUtilityError */ "Zqtz");


/**
 * The TokenUtility class facilitates getting a OAuth token for a given resource.
 * It handles caching and token expiration in a way that is transparent to the library user.
 *
 * @alpha
 */
var OAuthUtility = /** @class */ (function () {
    function OAuthUtility(context) {
        var _this = this;
        this._context = context;
        this._dispose = this._dispose.bind(this);
        window.addEventListener('unload', this._dispose);
        // VSO#358762 To get rid of the global variable
        // TODO: Temporary. VSO#612140 To remove this handler once OfficeMain 3439189 is in prod
        var mediaTokenCallback = '_spPageOnMediaTokenReceived';
        window[mediaTokenCallback] = function () {
            _this._receiveMediaServiceFlushedToken();
        };
        var mediaTokenCallbackV2 = '_spMSBTLoaded';
        window[mediaTokenCallbackV2] = function () {
            _this._receiveMediaServiceFlushedToken();
        };
    }
    OAuthUtility._getCorrelationId = function (response) {
        return response.headers.get('sprequestguid');
    };
    // Perhaps for PowerApps the error wasn't nested, but for PowerBI it certainly is
    OAuthUtility._extractRealError = function (errorResponse) {
        var isNested = errorResponse.hasOwnProperty('error');
        return isNested ? errorResponse.error : errorResponse;
    };
    /**
     * Fetches the OAuth token for a resource if the user that's currently logged in has
     * access to that resource.
     *
     * If the promise returned by this method rejects, there is no point in retrying the same call.
     * If the response from the server signals that the request should be retried this function will do this by itself.
     *
     * An example of a resource would be https://sdfpilot.outlook.com
     *
     * @param resource - the resource for which the token should be obtained
     * @returns A promise that will be fullfiled with the token or that will reject
     *          with an instance of TokenUtilityError
     */
    OAuthUtility.prototype.getOAuthToken = function (resource, webUrl) {
        return this.getInstrumentedOAuthToken(resource, webUrl).then(function (instrumentedToken) {
            if (instrumentedToken) {
                return instrumentedToken.tokenInfo;
            }
        });
    };
    OAuthUtility.prototype.getInstrumentedOAuthToken = function (resource, webUrl) {
        var _this = this;
        this._receiveMediaServiceFlushedToken();
        var cachedData = this._getCachedTokenData(resource);
        if (cachedData && !this._isExpiring(cachedData)) {
            var tokenInfo = {
                token: cachedData.accessToken,
                isGuest: false,
                expirationTimeMs: cachedData.expiresOn
            };
            return Promise.resolve({
                tokenInfo: tokenInfo,
                spRequestId: cachedData.correlationId,
                spRequestTimestamp: cachedData.requestTimestamp
            });
        }
        return this._retriableFetchWithDigest(resource, _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].retries, webUrl).then(function (responseData) {
            _this._storeTokenData(resource, responseData);
            var tokenInfo = {
                token: responseData.accessToken,
                isGuest: false,
                expirationTimeMs: responseData.expiresOn
            };
            return {
                tokenInfo: tokenInfo,
                spRequestId: responseData.correlationId,
                spRequestTimestamp: responseData.requestTimestamp
            };
        });
    };
    /**
     * Clears the token from a given resource from the internal cache. If there is no token
     * cached for the resource the method does nothing.
     *
     * @param resource - resource for which the token should be cleared from the cache
     */
    OAuthUtility.prototype.clearCachedToken = function (resource) {
        var key = this._getCacheKey(resource);
        window.sessionStorage.removeItem(key);
        var index = this._resourceKeys.indexOf(key);
        if (!isNaN(index) && index > -1) {
            this._resourceKeys.splice(index);
        }
    };
    Object.defineProperty(OAuthUtility.prototype, "_resourceKeys", {
        get: function () {
            if (!this._keysToDispose) {
                this._keysToDispose = new Array();
            }
            return this._keysToDispose;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param resource - the resource for which the request is done
     * @param retriesLeft - number of retries to be done in case of a retriable error
     * @returns A promise that fullfills to the server response or rejects with an instance of TokenUtilityError
     */
    OAuthUtility.prototype._retriableFetchWithDigest = function (resource, retriesLeft, webUrl) {
        var _this = this;
        var monitor = this._context.qosMonitor();
        var requestTimestamp = Date.now();
        return this._context
            .fetchWithDigest(this._buildTokenRequest(resource, webUrl))
            .then(function (response) {
            if (response.status !== 200) {
                /**
                 * If the request code is not 400 this means that the error is not raised by the rest API.
                 * In this case, the error is passed directly to the user.
                 *
                 * @TODO #225093
                 * Throttling response will have code 429. This also needs to be handled separately
                 */
                _this._context.logger.logError('fetchWithDigest failed. Server responded with ' + response.statusText);
                var error = new _OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["default"](_OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["OAuthUtilityErrorType"].unknownError, {
                    httpResponseStatus: response.status,
                    message: response.statusText,
                    correlationId: OAuthUtility._getCorrelationId(response)
                });
                if (response.status !== 400) {
                    monitor.writeUnexpectedFailure('UnknownError', error);
                    return Promise.reject(error);
                }
                return response.json().then(function (mixedErrorResponse) {
                    var errorResponse = OAuthUtility._extractRealError(mixedErrorResponse);
                    var errorCode = _this._getErrorCodeFromResponseCode(errorResponse);
                    if (!_this._isRetriableError(errorCode) || retriesLeft === 0) {
                        var oAuthError = _this._buildErrorFromResponse(errorResponse);
                        monitor.writeUnexpectedFailure('SharepointServerError', oAuthError);
                        return Promise.reject(oAuthError);
                    }
                    _this._context.logger.logError('fetchWithDigest failed. Retrying. Retries left: ' + retriesLeft);
                    return _this._retriableFetchWithDigest(resource, retriesLeft - 1, webUrl);
                });
            }
            return _this._instrumentedParseResponseData(response, monitor, requestTimestamp);
        });
    };
    OAuthUtility.prototype._getCachedTokenData = function (resource) {
        return JSON.parse(window.sessionStorage.getItem(this._getCacheKey(resource)));
    };
    OAuthUtility.prototype._storeTokenData = function (resource, data) {
        window.sessionStorage.setItem(this._getCacheKey(resource), JSON.stringify(data));
    };
    OAuthUtility.prototype._getCacheKey = function (resource) {
        var key = ['sp-client-shared', _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].npmPackageVersion, 'OAuthUtility', resource].join(';');
        var index = this._resourceKeys.indexOf(key);
        if (index === -1) {
            this._resourceKeys.push(key);
        }
        return key;
    };
    OAuthUtility.prototype._isExpiring = function (tokenRequestData) {
        return tokenRequestData.expiresOn - Date.now() / 1000 < _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].aboutToExpireIntervalSeconds;
    };
    OAuthUtility.prototype._isRetriableError = function (errorCode) {
        return _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].retriableErrorCodes.indexOf(errorCode) !== -1;
    };
    OAuthUtility.prototype._buildTokenRequest = function (resource, webUrl) {
        var requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
        requestHeaders.append('Odata-Version', '4.0');
        requestHeaders.append('Accept', 'application/json;odata.metadata=minimal');
        var request = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(this._buildRequestBody(resource))
        };
        var webUrlNoEndingSlash = webUrl;
        if (webUrlNoEndingSlash && webUrlNoEndingSlash.lastIndexOf('/') === webUrlNoEndingSlash.length - 1) {
            webUrlNoEndingSlash = webUrlNoEndingSlash.substr(0, webUrlNoEndingSlash.length - 1);
        }
        return new Request(webUrlNoEndingSlash + _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl, request);
    };
    OAuthUtility.prototype._buildRequestBody = function (resource) {
        return {
            resource: resource
        };
    };
    /**
     * The returned error contains the same message as the server error and a numeric error code
     * coresponding to the error code sent by the server
     *
     * @param serverErrorResponse - The error response object as it is sent by the server
     * @returns An instance of TokenUtilityError
     **/
    OAuthUtility.prototype._buildErrorFromResponse = function (serverErrorResponse) {
        var errorCode = this._getErrorCodeFromResponseCode(serverErrorResponse);
        if (errorCode === undefined) {
            return new _OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["default"](_OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["OAuthUtilityErrorType"].malformedResponseBody, {
                httpResponseStatus: 400,
                message: _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].unexpectedErrorCodeFormat,
                correlationId: serverErrorResponse.correlationId
            });
        }
        // TODO #289057: The error response format is changing. We're handling both current and new format until server
        // side changes are implemented to return the new format.
        var message;
        var cultureName;
        if (serverErrorResponse.message) {
            if (typeof serverErrorResponse.message === 'string') {
                // TODO #289057: Current format to be removed
                message = serverErrorResponse.message;
            }
            else {
                // New format to be implemented
                message = serverErrorResponse.message.value;
                cultureName = serverErrorResponse.message.lang;
            }
        }
        var redirectUrlKey = 'error.redirectUrl';
        return new _OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["default"](_OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["OAuthUtilityErrorType"].serverError, {
            httpResponseStatus: 400,
            message: message,
            cultureName: cultureName,
            serverErrorCode: errorCode,
            correlationId: serverErrorResponse.correlationId,
            // To support both OData 3 & 4, try @ prefix as fallback
            redirectUrl: serverErrorResponse[redirectUrlKey] || serverErrorResponse["@" + redirectUrlKey]
        });
    };
    /**
     * The format is <errorCode>, <exception class name> (TODO #289057) OR <errorCode>
     *
     * @param responseError - The response sent by the server
     */
    OAuthUtility.prototype._getErrorCodeFromResponseCode = function (serverErrorResponse) {
        var responseErrorCode = serverErrorResponse.code;
        // New format has code in the corresponding property
        var errorCode = Number(responseErrorCode);
        if (isNaN(errorCode) && typeof serverErrorResponse.message === 'string') {
            // TODO #289057: Previous to be removed
            var firstCommaIndex = responseErrorCode.indexOf(',');
            if (firstCommaIndex !== -1) {
                errorCode = Number(responseErrorCode.substr(0, firstCommaIndex));
            }
        }
        return errorCode;
    };
    OAuthUtility.prototype._instrumentedParseResponseData = function (response, monitor, requestTimestamp) {
        try {
            return response.json().then(function (responseBody) {
                monitor.writeSuccess();
                return {
                    accessToken: responseBody.access_token,
                    expiresOn: Number(responseBody.expires_on),
                    notBefore: Number(responseBody.not_before),
                    resource: responseBody.resource,
                    tokenType: responseBody.token_type,
                    correlationId: OAuthUtility._getCorrelationId(response),
                    requestTimestamp: requestTimestamp
                };
            });
        }
        catch (error) {
            monitor.writeUnexpectedFailure('ResponseParseError', error);
            return Promise.reject(new _OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["default"](_OAuthUtilityError__WEBPACK_IMPORTED_MODULE_1__["OAuthUtilityErrorType"].malformedResponseBody, {
                httpResponseStatus: 200,
                message: _Constants__WEBPACK_IMPORTED_MODULE_0__["default"].unexpectedTokenMessageFormat,
                correlationId: OAuthUtility._getCorrelationId(response)
            }));
        }
    };
    OAuthUtility.prototype._dispose = function (ev) {
        window.removeEventListener('unload', this._dispose);
        for (var _i = 0, _a = this._resourceKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            window.sessionStorage.removeItem(key);
        }
    };
    /**
     * Receive media service oauth token flushed in page response
     * Reference: SPClientSideMediaServiceTokenPrefetchDataGenerator
     */
    OAuthUtility.prototype._receiveMediaServiceFlushedToken = function () {
        var tokenKey = '_spMSBT';
        if (window[tokenKey]) {
            var responseData = {
                tokenType: window[tokenKey].TokenType,
                expiresOn: window[tokenKey].ExpiresOn,
                notBefore: undefined,
                resource: window[tokenKey].Resource,
                accessToken: window[tokenKey].AccessToken
            };
            this._storeTokenData(responseData.resource, responseData);
            window[tokenKey] = undefined;
        }
    };
    return OAuthUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (OAuthUtility);
//# sourceMappingURL=OAuthUtility.js.map

/***/ }),

/***/ "7OYH":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/oAuthToken/OAuthTokenProvider.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: TokenFetchServerErrorCodes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenFetchServerErrorCodes", function() { return TokenFetchServerErrorCodes; });
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "bV/n");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
// OneDrive:IgnoreCodeCoverage



var TokenFetchServerErrorCodes;
(function (TokenFetchServerErrorCodes) {
    TokenFetchServerErrorCodes[TokenFetchServerErrorCodes["InteractionRequired"] = 10013] = "InteractionRequired";
})(TokenFetchServerErrorCodes || (TokenFetchServerErrorCodes = {}));
var OAuthTokenProvider = /** @class */ (function () {
    function OAuthTokenProvider(params, dependencies) {
        if (params === void 0) { params = {}; }
        this._dataSource = dependencies.oAuthTokenDataSource;
    }
    /**
     * Get token for embedded scenarios
     * @param audience: resource for which the token is associated with
     * @param skipCache
     */
    OAuthTokenProvider.prototype.getToken = function (audience, skipCache) {
        var qos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["Qos"]({ name: 'getToken' });
        return this._dataSource.getToken(audience, skipCache).then(function (token) {
            qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Success });
            return token;
        }, function (error) {
            qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure });
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
        });
    };
    /**
     * Get instrumented token for embedded scenarios
     * @param audience: resource for which the instrumented token is associated with
     * @param skipCache
     */
    OAuthTokenProvider.prototype.getInstrumentedToken = function (audience, skipCache) {
        var qos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["Qos"]({ name: 'getToken' });
        return this._dataSource.getInstrumentedToken(audience, skipCache).then(function (token) {
            qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Success });
            return token;
        }, function (error) {
            qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure });
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(error);
        });
    };
    return OAuthTokenProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (OAuthTokenProvider);
//# sourceMappingURL=OAuthTokenProvider.js.map

/***/ }),

/***/ "OyVb":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/oAuthToken/OAuthTokenDataSource.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_oauthUtility_OAuthUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/oauthUtility/OAuthUtility */ "0wds");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/DataSource */ "AfY0");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");






var Monitor = /** @class */ (function () {
    function Monitor() {
        this._qos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["default"]({
            name: 'OAuthTokenDataSource'
        });
    }
    Monitor.prototype.writeSuccess = function () {
        this._qos.end({
            resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Success
        });
    };
    Monitor.prototype.writeUnexpectedFailure = function (tag, ex) {
        this._qos.end({
            resultCode: tag,
            resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure,
            error: JSON.stringify(ex)
        });
    };
    Monitor.prototype.writeExpectedFailure = function (tag, ex) {
        this._qos.end({
            resultCode: tag,
            resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].ExpectedFailure,
            error: JSON.stringify(ex)
        });
    };
    return Monitor;
}());
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logWarning = function (message) {
        /* EMPTY BLOCK */
    };
    Logger.prototype.logError = function (message) {
        /* EMPTY BLOCK */
    };
    return Logger;
}());
var OAuthTokenDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OAuthTokenDataSource, _super);
    function OAuthTokenDataSource(context, params) {
        var _this = _super.call(this, {}, {
            pageContext: context
        }) || this;
        _this.logger = new Logger();
        if (params) {
            if (params.logger) {
                _this.logger = params.logger;
            }
            if (params.useAbsoluteUrlForOAuth) {
                _this._useAbsoluteUrlForOAuth = params.useAbsoluteUrlForOAuth;
            }
        }
        _this._oAuthUtility = new _utilities_oauthUtility_OAuthUtility__WEBPACK_IMPORTED_MODULE_1__["default"](_this);
        return _this;
    }
    OAuthTokenDataSource.prototype.qosMonitor = function () {
        return new Monitor();
    };
    Object.defineProperty(OAuthTokenDataSource.prototype, "webUrl", {
        get: function () {
            return this._useAbsoluteUrlForOAuth
                ? this._pageContext.webAbsoluteUrl
                : Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_4__["getSafeWebServerRelativeUrl"])(this._pageContext);
        },
        enumerable: true,
        configurable: true
    });
    OAuthTokenDataSource.prototype.fetchWithDigest = function (request) {
        var _this = this;
        return request.text().then(function (requestBody) {
            var contentType = request.headers.get('Content-Type');
            /* Content-Type needs to be removed from the headers because it is passed
            as a stand-alone parameter and set accordingly in getData */
            request.headers.delete('Content-Type');
            return _this._odspPromiseToEs6Promise(_this.getData(function () {
                return request.url;
            }, function (responseText, data) {
                return new Response(responseText, {
                    status: data.getStatus(),
                    headers: data.getResponseHeadersDictionary()
                });
            }, 'DelegationTokenDataSource', function () {
                return requestBody;
            }, 'POST', _this._getRequestHeadersDictionary(request), contentType, undefined, true).then(function (response) { return response; }, function (error) {
                return new Response(JSON.stringify(error), {
                    status: error.status
                });
            }));
        });
    };
    OAuthTokenDataSource.prototype.getToken = function (resource, skipCache) {
        if (skipCache) {
            this._oAuthUtility.clearCachedToken(resource);
        }
        return this._es6PromiseToOdspPromise(this._oAuthUtility.getOAuthToken(resource, this.webUrl).then(function (tokenInfo) {
            return tokenInfo.token;
        }));
    };
    OAuthTokenDataSource.prototype.getInstrumentedToken = function (resource, skipCache) {
        if (skipCache) {
            this._oAuthUtility.clearCachedToken(resource);
        }
        return this._es6PromiseToOdspPromise(this._oAuthUtility.getInstrumentedOAuthToken(resource, this.webUrl));
    };
    OAuthTokenDataSource.prototype._getRequestHeadersDictionary = function (request) {
        // Workaround; the typings for request headers in ts 2.2.2 seems to be wrong.
        var headerArray = request.headers;
        var requestHeaders = {};
        headerArray.forEach(function (value, index) {
            requestHeaders[index] = value;
        });
        return requestHeaders;
    };
    OAuthTokenDataSource.prototype._odspPromiseToEs6Promise = function (promise) {
        return new Promise(function (resolve, reject) {
            promise.then(function (value) {
                resolve(value);
            }, function (error) {
                reject(error);
            });
        });
    };
    OAuthTokenDataSource.prototype._es6PromiseToOdspPromise = function (promise) {
        return new _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"](function (resolve, reject) {
            promise.then(function (value) {
                resolve(value);
            }, function (error) {
                reject(error);
            });
        });
    };
    return OAuthTokenDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (OAuthTokenDataSource);
//# sourceMappingURL=OAuthTokenDataSource.js.map

/***/ }),

/***/ "XKi3":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/oauthUtility/Constants.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * This id is used to get / persist the token cache into session storage.
     * It is passed to window.sessionStorage.setItem(id, item) / getItem(id)
     */
    Constants.tokenCacheSessionStorageId = 'tokenCache';
    /**
     * If the token is about to expire, a new one will be requested.
     * A token is considered "about to expire" if:
     * (tokenExpirationTime - currentTime) < aboutToExpireIntervalSeconds
     */
    Constants.aboutToExpireIntervalSeconds = 600;
    /**
     * The token will be requested from this URL
     */
    Constants.apiUrl = '/_api/SP.OAuth.Token/Acquire';
    /**
     * Number of times to retry the server request in the case of a retriable error
     */
    Constants.retries = 3;
    /**
     * If an error from this list would be encountered then the request would be retried
     * for Constants.retries times.
     *
     * This list MUST always be kept in sync with the server-side error codes
     * A better alternative would be to have the server send a boolean shouldRetry flag
     *
     * The server-side error codes are defined in the class SPDelegationTokenServiceProviderErrorCodes
     */
    Constants.retriableErrorCodes = [
        /* Internal server error */
        10006,
        /* Unsupported Token */
        10008
    ];
    /**
     * An exception with this message will be thrown if the error code from the response
     * does not have the expected format described bellow
     */
    Constants.unexpectedErrorCodeFormat = 'Expected error code format is <numericCode>, <exception class name>';
    /**
     * An exception with the message will be thrown if the token couldn't be parsed from the response
     */
    Constants.unexpectedTokenMessageFormat = 'Your token request succeedeed but the token could not be parsed from the response.' +
        'This is most probably caused by a change in the server response format';
    /**
     * The version is used to assure unicity in the session storage keys used
     * used by the TokenUtility.
     */
    Constants.npmPackageVersion = '0.1.5';
    return Constants;
}());
/* harmony default export */ __webpack_exports__["default"] = (Constants);
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "Zqtz":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/oauthUtility/OAuthUtilityError.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: OAuthUtilityErrorType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthUtilityErrorType", function() { return OAuthUtilityErrorType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * OAuthUtilityError can have one of the types mentioned in this enum.
 *
 * @alpha
 */
var OAuthUtilityErrorType;
(function (OAuthUtilityErrorType) {
    /**
     * unknownError usually means that the http status in the response was neither 400 (server error)
     * or 429 (throttling).
     */
    OAuthUtilityErrorType[OAuthUtilityErrorType["unknownError"] = 0] = "unknownError";
    /**
     * malformedResponseBody means that the response that was received (either the success or the error)
     * could not be parsed. This may happen if the server response had it's format changed and the format
     * expected by the library needs to be updated.
     */
    OAuthUtilityErrorType[OAuthUtilityErrorType["malformedResponseBody"] = 1] = "malformedResponseBody";
    /**
     * serverError means that the server responded with an error. The serverErrorCode is set in this case,
     * and it can be used to identify the reason of the error.
     *
     * @privateRemarks
     * The server-side error codes are defined in the class SPDelegationTokenServiceProviderErrorCodes.
     */
    OAuthUtilityErrorType[OAuthUtilityErrorType["serverError"] = 2] = "serverError";
})(OAuthUtilityErrorType || (OAuthUtilityErrorType = {}));
/**
 * Error returned by the rejected promise
 *
 * @alpha
 */
var OAuthUtilityError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OAuthUtilityError, _super);
    function OAuthUtilityError(type, context) {
        var _this = _super.call(this, context.message) || this;
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = OAuthUtilityError.prototype; // tslint:disable-line:no-any
        _this._type = type;
        _this._httpResponseStatus = context.httpResponseStatus;
        _this._cultureName = context.cultureName;
        _this._message = context.message;
        _this._serverErrorCode = context.serverErrorCode;
        _this._correlationId = context.correlationId;
        _this._redirectUrl = context.redirectUrl;
        return _this;
    }
    Object.defineProperty(OAuthUtilityError.prototype, "type", {
        /**
         * @returns the type of the error. Can be unknownError | malformedResponseBody | serverError
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "serverErrorCode", {
        /**
         * serverErrorCode is set only if the type of the OAuthUtilityError containing this object
         * is serverError.
         * Server error codes are defined in the SPDelegationTokenServiceProviderErrorCodes class
         *
         * @returns server error code. If the error is not of serverError type this method throws
         */
        get: function () {
            if (this.type !== OAuthUtilityErrorType.serverError) {
                throw new Error('ServerErrorCode can only be obtained for errors of type serverError');
            }
            return this._serverErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "httpResponseStatus", {
        /**
         * @returns status of the http response (200, 404, etc)
         */
        get: function () {
            return this._httpResponseStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "message", {
        /**
         * @returns the error message
         */
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "cultureName", {
        /**
         * @returns the language tag of the error message (ex: en-US)
         */
        get: function () {
            return this._cultureName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "correlationId", {
        /**
         * @returns correlation identifier associated with the server request that caused the error.
         */
        get: function () {
            return this._correlationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "redirectUrl", {
        /**
         * @returns redirect url to re-authentication page
         */
        get: function () {
            return this._redirectUrl;
        },
        enumerable: true,
        configurable: true
    });
    return OAuthUtilityError;
}(Error));
/* harmony default export */ __webpack_exports__["default"] = (OAuthUtilityError);
//# sourceMappingURL=OAuthUtilityError.js.map

/***/ }),

/***/ "bV/n":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/whatwg-fetch@2.0.3/node_modules/whatwg-fetch/fetch.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-splivepersonacard~sp~896e3b47_[locale].js.map