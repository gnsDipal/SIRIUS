(window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || []).push([["ms-client-shared"],{

/***/ "AmIq":
/*!*********************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-client-shared/lib-commonjs/tokenUtility/OAuthUtility.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "17wl");
var sp_core_library_1 = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
var Constants_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Constants */ "iZ/7"));
var OAuthUtilityError_1 = tslib_1.__importStar(__webpack_require__(/*! ./OAuthUtilityError */ "EB4i"));
/**
 * The TokenUtility class facilitates getting a OAuth token for a given resource.
 * It handles caching and token expiration in a way that is transparent to the library user.
 *
 * @alpha
 */
var OAuthUtility = /** @class */ (function () {
    function OAuthUtility(context) {
        this._context = context;
        this._dispose = this._dispose.bind(this);
        window.addEventListener('unload', this._dispose);
    }
    OAuthUtility._getCorrelationId = function (response) {
        return response.headers.get('sprequestguid');
    };
    // Perhaps for PowerApps the error wasn't nested, but for PowerBI it certainly is
    OAuthUtility._extractRealError = function (errorResponse) {
        var isNested = errorResponse.hasOwnProperty('error');
        return isNested ? errorResponse.error : errorResponse;
    };
    OAuthUtility.prototype.getOAuthToken = function (resource, webUrl, tokenType) {
        var _this = this;
        var cachedData = this._getCachedTokenData(resource);
        if (cachedData && !this._isExpiring(cachedData)) {
            return Promise.resolve({
                token: cachedData.accessToken,
                isGuest: false,
                expirationTimeMs: cachedData.expiresOn,
                _correlationId: cachedData.correlationId
            });
        }
        return this._retriableFetchWithDigest(resource, Constants_1.default.retries, webUrl, tokenType).then(function (responseData) {
            _this._storeTokenData(resource, responseData);
            return {
                token: responseData.accessToken,
                isGuest: false,
                expirationTimeMs: responseData.expiresOn,
                _correlationId: responseData.correlationId
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
        enumerable: false,
        configurable: true
    });
    /**
     * @param resource - the resource for which the request is done
     * @param retriesLeft - number of retries to be done in case of a retriable error
     * @param webUrl - url of the token acquire request endpoint
     * @param tokenType - token type to issue. e.g. AAD token or STI token
     * @returns A promise that fulfills to the server response or rejects with an instance of TokenUtilityError
     */
    OAuthUtility.prototype._retriableFetchWithDigest = function (resource, retriesLeft, webUrl, tokenType) {
        var _this = this;
        var monitor = this._context.qosMonitor();
        var extraOAuthUtilityData;
        return this._context
            .fetchWithDigest(this._buildTokenRequest(resource, webUrl, tokenType))
            .then(function (response) {
            extraOAuthUtilityData = { CorrelationId: OAuthUtility._getCorrelationId(response), resource: resource };
            if (response.status !== 200) {
                /**
                 * If the request code is not 400 this means that the error is not raised by the rest API.
                 * In this case, the error is passed directly to the user.
                 *
                 * @TODO #225093
                 * Throttling response will have code 429. This also needs to be handled separately
                 */
                _this._context.logger.logError('fetchWithDigest failed. Server responded with ' + response.statusText);
                var error = new OAuthUtilityError_1.default(OAuthUtilityError_1.OAuthUtilityErrorType.unknownError, {
                    httpResponseStatus: response.status,
                    message: response.statusText,
                    correlationId: OAuthUtility._getCorrelationId(response)
                });
                if (!sp_core_library_1._SPKillSwitch.isActivated('13621315-ff1d-45a5-a115-c607c98657a4'
                /*'10/20/20',
                'Treat unauthorized as expected' */
                ) &&
                    response.status === 403) {
                    monitor.writeExpectedFailure('Unauthorized', error, extraOAuthUtilityData);
                    return Promise.reject(error);
                }
                if (response.status !== 400) {
                    monitor.writeUnexpectedFailure('UnknownError', error, extraOAuthUtilityData);
                    return Promise.reject(error);
                }
                return response.json().then(function (mixedErrorResponse) {
                    var errorResponse = OAuthUtility._extractRealError(mixedErrorResponse);
                    var errorCode = _this._getErrorCodeFromResponseCode(errorResponse);
                    if (!_this._isRetriableError(errorCode) || retriesLeft === 0) {
                        var oAuthError = _this._buildErrorFromResponse(errorResponse);
                        monitor.writeUnexpectedFailure('SharepointServerError', oAuthError, extraOAuthUtilityData);
                        return Promise.reject(oAuthError);
                    }
                    _this._context.logger.logError('fetchWithDigest failed. Retrying. Retries left: ' + retriesLeft);
                    return _this._retriableFetchWithDigest(resource, retriesLeft - 1, webUrl, tokenType);
                });
            }
            return _this._instrumentedParseResponseData(response, monitor, extraOAuthUtilityData);
        });
    };
    OAuthUtility.prototype._getCachedTokenData = function (resource) {
        return JSON.parse(window.sessionStorage.getItem(this._getCacheKey(resource)));
    };
    OAuthUtility.prototype._storeTokenData = function (resource, data) {
        window.sessionStorage.setItem(this._getCacheKey(resource), JSON.stringify(data));
    };
    /**
     * Note: Not adding token type to the cache key. The reason being that for a resource, only one token
     * type would be used. There is no likely scenarion when multiple types of tokens will be acquired
     * for the same resource.
     */
    OAuthUtility.prototype._getCacheKey = function (resource) {
        var key = ['sp-client-shared', Constants_1.default.npmPackageVersion, 'OAuthUtility', resource].join(';');
        var index = this._resourceKeys.indexOf(key);
        if (index === -1) {
            this._resourceKeys.push(key);
        }
        return key;
    };
    OAuthUtility.prototype._isExpiring = function (tokenRequestData) {
        return tokenRequestData.expiresOn - Date.now() / 1000 < Constants_1.default.aboutToExpireIntervalSeconds;
    };
    OAuthUtility.prototype._isRetriableError = function (errorCode) {
        return Constants_1.default.retriableErrorCodes.indexOf(errorCode) !== -1;
    };
    OAuthUtility.prototype._buildTokenRequest = function (resource, webUrl, tokenType) {
        var requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
        requestHeaders.append('Odata-Version', '4.0');
        requestHeaders.append('Accept', 'application/json;odata.metadata=minimal');
        var request = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(this._buildRequestBody(resource, tokenType))
        };
        var webUrlNoEndingSlash = webUrl;
        if (webUrlNoEndingSlash && webUrlNoEndingSlash.lastIndexOf('/') === webUrlNoEndingSlash.length - 1) {
            webUrlNoEndingSlash = webUrlNoEndingSlash.substr(0, webUrlNoEndingSlash.length - 1);
        }
        return new Request(webUrlNoEndingSlash + Constants_1.default.apiUrl, request);
    };
    OAuthUtility.prototype._buildRequestBody = function (resource, tokenType) {
        if (!sp_core_library_1._SPKillSwitch.isActivated('d0b667ec-278c-4551-bada-5c5e34f466b1'
        /* '8/21/2020',
      'Add support for tokenType property in the Acquire endpoint' */
        )) {
            return {
                resource: resource,
                tokenType: tokenType
            };
        }
        else {
            return {
                resource: resource
            };
        }
    };
    /**
     * The returned error contains the same message as the server error and a numeric error code
     * corresponding to the error code sent by the server
     *
     * @param serverErrorResponse - The error response object as it is sent by the server
     * @returns An instance of TokenUtilityError
     **/
    OAuthUtility.prototype._buildErrorFromResponse = function (serverErrorResponse) {
        var errorCode = this._getErrorCodeFromResponseCode(serverErrorResponse);
        if (errorCode === undefined) {
            return new OAuthUtilityError_1.default(OAuthUtilityError_1.OAuthUtilityErrorType.malformedResponseBody, {
                httpResponseStatus: 400,
                message: Constants_1.default.unexpectedErrorCodeFormat,
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
        return new OAuthUtilityError_1.default(OAuthUtilityError_1.OAuthUtilityErrorType.serverError, {
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
     * The format is "\<errorCode\>, \<exception class name\>" (TODO #289057) OR "\<errorCode\>"
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
    OAuthUtility.prototype._instrumentedParseResponseData = function (response, monitor, extraOAuthUtilityData) {
        return Promise.resolve()
            .then(function () { return (response.ok ? response.json() : Promise.reject(new Error(response.statusText))); })
            .then(function (responseBody) {
            monitor.writeSuccess(extraOAuthUtilityData);
            return {
                accessToken: responseBody.access_token,
                correlationId: OAuthUtility._getCorrelationId(response),
                expiresOn: Number(responseBody.expires_on),
                notBefore: Number(responseBody.not_before),
                resource: responseBody.resource,
                tokenType: responseBody.token_type
            };
        })
            .catch(function (error) {
            monitor.writeUnexpectedFailure('ResponseParseError', error, extraOAuthUtilityData);
            throw new OAuthUtilityError_1.default(OAuthUtilityError_1.OAuthUtilityErrorType.malformedResponseBody, {
                httpResponseStatus: response.status,
                message: Constants_1.default.unexpectedTokenMessageFormat,
                correlationId: OAuthUtility._getCorrelationId(response)
            });
        });
    };
    OAuthUtility.prototype._dispose = function (ev) {
        window.removeEventListener('unload', this._dispose);
        for (var _i = 0, _a = this._resourceKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            window.sessionStorage.removeItem(key);
        }
    };
    return OAuthUtility;
}());
exports.default = OAuthUtility;


/***/ }),

/***/ "EB4i":
/*!**************************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-client-shared/lib-commonjs/tokenUtility/OAuthUtilityError.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthUtilityErrorType = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "17wl");
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
})(OAuthUtilityErrorType = exports.OAuthUtilityErrorType || (exports.OAuthUtilityErrorType = {}));
/**
 * Error returned by the rejected promise
 *
 * @alpha
 */
var OAuthUtilityError = /** @class */ (function (_super) {
    tslib_1.__extends(OAuthUtilityError, _super);
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "httpResponseStatus", {
        /**
         * @returns status of the http response (200, 404, etc)
         */
        get: function () {
            return this._httpResponseStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "message", {
        /**
         * @returns the error message
         */
        get: function () {
            return this._message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "cultureName", {
        /**
         * @returns the language tag of the error message (ex: en-US)
         */
        get: function () {
            return this._cultureName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "correlationId", {
        /**
         * @returns correlation identifier associated with the server request that caused the error.
         */
        get: function () {
            return this._correlationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "redirectUrl", {
        /**
         * @returns redirect url to re-authentication page
         */
        get: function () {
            return this._redirectUrl;
        },
        enumerable: false,
        configurable: true
    });
    return OAuthUtilityError;
}(Error));
exports.default = OAuthUtilityError;


/***/ }),

/***/ "iZ/7":
/*!******************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-client-shared/lib-commonjs/tokenUtility/Constants.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Constants;


/***/ }),

/***/ "jHvI":
/*!*************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-client-shared/lib-commonjs/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OAuthUtility_1 = __webpack_require__(/*! ./tokenUtility/OAuthUtility */ "AmIq");
Object.defineProperty(exports, "OAuthUtility", { enumerable: true, get: function () { return OAuthUtility_1.default; } });
var OAuthUtilityError_1 = __webpack_require__(/*! ./tokenUtility/OAuthUtilityError */ "EB4i");
Object.defineProperty(exports, "OAuthUtilityError", { enumerable: true, get: function () { return OAuthUtilityError_1.default; } });
Object.defineProperty(exports, "OAuthUtilityErrorType", { enumerable: true, get: function () { return OAuthUtilityError_1.OAuthUtilityErrorType; } });


/***/ })

}]);
//# sourceMappingURL=chunk.ms-client-shared_none.js.map