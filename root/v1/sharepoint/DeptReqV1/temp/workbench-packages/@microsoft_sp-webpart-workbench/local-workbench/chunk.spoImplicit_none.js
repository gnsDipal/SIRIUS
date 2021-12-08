(window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || []).push([["spoImplicit"],{

/***/ "2BGP":
/*!************************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/implicitTokenProvider/TokenRequestManager.js ***!
  \************************************************************************************/
/*! exports provided: TokenRequestManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRequestManager", function() { return TokenRequestManager; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AadTokenProvider */ "jtSf");
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AadConstants */ "MGiw");
/* harmony import */ var _AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AadErrorHandler */ "nUPw");
/* harmony import */ var _TokenStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TokenStorage */ "Gmzh");
/* harmony import */ var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../SPHttpStrings.resx */ "NJ9J");
var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../SPHttpStrings.resx */ "NJ9J", 1);
/* harmony import */ var _AadKillSwitches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../AadKillSwitches */ "+3E/");








var DEFAULT_TOKEN_EXPIRATION = '3600';
var PLUS_SIGN_REGEX = /\+/g;
var SEARCH_REGEX = /([^&=]+)=([^&]*)/g;
var TokenRequestManager = /** @class */ (function () {
    function TokenRequestManager(configuration) {
        this._defaultConfiguration = configuration;
        this._resourceMap = new Map();
        this._tokenRequestDictionary = new Map();
    }
    TokenRequestManager.isSuccessfulResponse = function (tokenResponse) {
        return (!!tokenResponse.token &&
            !!tokenResponse.expiration);
    };
    TokenRequestManager.isExpectedError = function (errorMessage) {
        var userAgentString = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation().userAgent || '';
        return (_AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AadErrorHandler"]._doesAadErrorCodeExist(errorMessage, _AadConstants__WEBPACK_IMPORTED_MODULE_3__["default"].EXPECTED_AAD_ERRORS) ||
            userAgentString.indexOf('TabStop/1.0') > -1); // MSAL Implicit seems to have issues with test infra.
    };
    TokenRequestManager._createResourceMetadata = function (resourceEndpoint) {
        return {
            correlationId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString(),
            state: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString(),
            uri: resourceEndpoint
        };
    };
    /**
     * FROM MSAL.JS WindowUtils.monitorWindowForHash
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    TokenRequestManager._monitorWindowForHash = function (contentWindow, timeout) {
        var POLLING_INTERVAL_MS = 50;
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / POLLING_INTERVAL_MS;
            var ticks = 0;
            var startTime = Date.now();
            var intervalId = setInterval(function () {
                if (contentWindow.closed) {
                    clearInterval(intervalId);
                    reject(new Error('User closed iframe'));
                }
                var hash;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    hash = contentWindow.location.hash;
                }
                catch (e) {
                    // Ignore this error as it's expected for cross domain requests
                }
                ticks++;
                if (hash) {
                    clearInterval(intervalId);
                    // ADAL.JS mentions that sometimes the hash may be followed by /
                    // WEX VSO Item: BUG 906637
                    if (hash.indexOf('#/') > -1) {
                        hash = hash.substring(hash.indexOf('#/') + 2);
                    }
                    else if (hash.indexOf('#') > -1) {
                        hash = hash.substring(1);
                    }
                    resolve(hash);
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    // Return timeout if we've been trying to fetch the token for over a minute
                    if (Date.now() > startTime + 1000 * 60) {
                        reject(new Error('Timeout due to TAB suspension'));
                    }
                    else {
                        reject(new Error('Token retrieval timeout'));
                    }
                }
            }, POLLING_INTERVAL_MS);
        });
    };
    /**
     * Parses the query string parameters into a key-value pair object.
     * From ADAL.JS
     * @ignore
     */
    TokenRequestManager._deserialize = function (hash) {
        var match;
        var pl = PLUS_SIGN_REGEX, search = SEARCH_REGEX, decode = function (s) {
            return decodeURIComponent(s.replace(pl, ' '));
        }, obj = {};
        match = search.exec(hash);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(hash);
        }
        return obj;
    };
    /**
     * Adds the hidden iframe for silent token renewal. This code is a security fix to ADAL.js's iframe
     * rendering code. IE11 doesn't support dynamically setting attributes on an iFrame element, so
     * we must patch the original implementation. Original code is in ADAL.js addAdalFrame.
     * https://github.com/AzureAD/azure-activedirectory-library-for-js/ for source code
     */
    TokenRequestManager._createIframe = function (iframeId, tokenRequestUrl) {
        var sandboxAttributes = 'allow-same-origin allow-scripts allow-forms allow-pointer-lock';
        var ifr = document.createElement('iframe');
        ifr.setAttribute('id', iframeId);
        ifr.setAttribute('aria-hidden', 'true');
        ifr.setAttribute('sandbox', sandboxAttributes);
        ifr.style.visibility = 'hidden';
        ifr.style.position = 'absolute';
        ifr.style.width = ifr.style.height = ifr.style.border = '0';
        var iFrameReference = document.getElementsByTagName('body')[0].appendChild(ifr);
        iFrameReference.src = tokenRequestUrl;
        return iFrameReference;
    };
    TokenRequestManager.prototype.getToken = function (resourceUri, useLoginHint) {
        var resourceMetadata = this._resourceMap.get(resourceUri);
        if (!resourceMetadata) {
            resourceMetadata = TokenRequestManager._createResourceMetadata(resourceUri);
            this._resourceMap.set(resourceUri, resourceMetadata);
        }
        var tokenRequest = _AadKillSwitches__WEBPACK_IMPORTED_MODULE_7__["AadKillSwitches"].isUpdateTokenForImplicitTokenProviderEnabled()
            ? undefined
            : this._tokenRequestDictionary.get(JSON.stringify(resourceMetadata));
        if (!tokenRequest) {
            tokenRequest = this._getToken(resourceUri, useLoginHint, resourceMetadata, 0);
        }
        if (!_AadKillSwitches__WEBPACK_IMPORTED_MODULE_7__["AadKillSwitches"].isUpdateTokenForImplicitTokenProviderEnabled()) {
            this._tokenRequestDictionary.set(JSON.stringify(resourceMetadata), tokenRequest);
        }
        return tokenRequest;
    };
    TokenRequestManager.prototype._getToken = function (resourceUri, useLoginHint, resourceMetadata, attemptCount) {
        var _this = this;
        if (attemptCount === void 0) { attemptCount = 0; }
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ImplicitTokenProvider.FetchAccessTokenSilent');
        var extraData = this._generateTelemetryExtraData(resourceUri, resourceMetadata.correlationId);
        var tokenRequest = this._generateTokenRequestPromise(resourceMetadata, useLoginHint);
        return tokenRequest
            .then(function (response) {
            if (TokenRequestManager.isSuccessfulResponse(response)) {
                acquireAccessTokenQosMonitor.writeSuccess(extraData);
            }
            else {
                _this._handleAuthErrors(acquireAccessTokenQosMonitor, resourceUri, response.errorDescription, response.errorCode, extraData);
                if (attemptCount < 1) {
                    var localLoginHint = useLoginHint;
                    if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('3d883034-d2f0-4034-8c1e-9ade277ceb6c' /* '8/5/2020', 'Retry Authentication' */) &&
                        response.errorDescription.indexOf(_AadConstants__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIN_REQUIRED) > -1) {
                        localLoginHint = false;
                    }
                    return _this._getToken(resourceUri, localLoginHint, resourceMetadata, ++attemptCount);
                }
            }
            return response;
        })
            .catch(function (error) {
            // Timeout failure
            acquireAccessTokenQosMonitor.writeUnexpectedFailure('Timeout', error);
            if (attemptCount < 1) {
                return _this._getToken(resourceUri, useLoginHint, resourceMetadata, ++attemptCount);
            }
            throw error;
        });
    };
    TokenRequestManager.prototype._generateTelemetryExtraData = function (resourceUri, correlationId) {
        // alias is being used to detect cache hits
        return {
            alias: 'false',
            CorrelationId: correlationId,
            isInternal: this._defaultConfiguration.servicePrincipalId === _AadConstants__WEBPACK_IMPORTED_MODULE_3__["default"].PRE_AUTHORIZED_APP_PRINCIPAL_ID,
            name: resourceUri
        };
    };
    TokenRequestManager.prototype._handleAuthErrors = function (monitor, resourceUri, errorMessage, errorCode, extraData) {
        if (_AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AadErrorHandler"]._isInteractionRequired(errorMessage, errorCode)) {
            try {
                // SPFxSingleSignOn will read this value and use it redirect back to this page for MFA failures
                sessionStorage.setItem('adal.login.request', window.location.href);
                sessionStorage.setItem('SPORedirectTokenKey', _TokenStorage__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"].getCacheKey(this._defaultConfiguration.aadUserId || '', this._defaultConfiguration.servicePrincipalId, _TokenStorage__WEBPACK_IMPORTED_MODULE_5__["ACCESS_TOKEN_KEY"], resourceUri));
                sessionStorage.setItem('SPORedirectExpirationKey', _TokenStorage__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"].getCacheKey(this._defaultConfiguration.aadUserId || '', this._defaultConfiguration.servicePrincipalId, _TokenStorage__WEBPACK_IMPORTED_MODULE_5__["EXPIRATION_KEY"], resourceUri));
            }
            catch (e) {
                // If session storage is unavailable, SPFxSingleSignOn will redirect to window.location.host
            }
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__["default"]._tokenAcquisitionEventId, new _AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__["TokenAcquisitionEventArgs"](_SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_6__["additionalCredentialsWarning"], this._getTokenRequestUrl(TokenRequestManager._createResourceMetadata(resourceUri), false, false)));
        }
        var err = new Error(errorCode + ': ' + errorMessage);
        if (TokenRequestManager.isExpectedError(errorMessage)) {
            monitor.writeExpectedFailure(errorCode, err, extraData);
        }
        else {
            monitor.writeUnexpectedFailure(errorCode, err, extraData);
        }
    };
    TokenRequestManager.prototype._getTokenRequestUrl = function (resourceMetadata, useLoginHint, isSilent) {
        var tokenResponseType = 'token';
        var implicitTokenProviderName = 'SPFxImplicitTokenProvider';
        var loginHintQueryParameter = useLoginHint && this._defaultConfiguration.userPrincipalName
            ? '&login_hint=' + encodeURIComponent(this._defaultConfiguration.userPrincipalName)
            : '';
        var isSilentQueryParameter = isSilent ? '&prompt=none' : '&prompt=select_account';
        return (this._defaultConfiguration.aadInstanceUrl +
            '/' +
            this._defaultConfiguration.aadTenantId +
            '/oauth2/authorize' +
            '?response_type=' +
            tokenResponseType +
            '&client_id=' +
            encodeURIComponent(this._defaultConfiguration.servicePrincipalId) +
            '&resource=' +
            encodeURIComponent(resourceMetadata.uri) +
            '&redirect_uri=' +
            encodeURIComponent(this._defaultConfiguration.redirectUri) +
            '&state=' +
            encodeURIComponent(resourceMetadata.state) +
            loginHintQueryParameter +
            '&client-request-id=' +
            encodeURIComponent(resourceMetadata.correlationId) +
            '&x-client-SKU=Js' +
            '&x-client-Ver=' +
            implicitTokenProviderName +
            isSilentQueryParameter);
    };
    TokenRequestManager.prototype._generateTokenRequestPromise = function (resourceMetadata, useLoginHint) {
        var _this = this;
        var tokenRequestUrl = this._getTokenRequestUrl(resourceMetadata, useLoginHint, true);
        var tokenRequestIFrame = TokenRequestManager._createIframe(resourceMetadata.correlationId + '|' + resourceMetadata.uri, tokenRequestUrl);
        return TokenRequestManager._monitorWindowForHash(tokenRequestIFrame.contentWindow, 10000).then(function (hash) {
            return _this._convertHashtoTokenResponse(resourceMetadata, hash);
        });
    };
    TokenRequestManager.prototype._convertHashtoTokenResponse = function (tokenRequest, hash) {
        var parameters = TokenRequestManager._deserialize(hash);
        if (tokenRequest.state !== parameters.state) {
            return {
                errorCode: 'Invalid State',
                errorDescription: 'State mismatch. Expected:' + tokenRequest.state + ' Actual: ' + parameters.state,
                isExpected: false
            };
        }
        var token = parameters.access_token;
        if (token) {
            return {
                expiration: parameters.expires_in || DEFAULT_TOKEN_EXPIRATION,
                token: token
            };
        }
        else {
            return {
                errorCode: parameters.error || 'Unknown',
                errorDescription: parameters.error_description || 'Error Description was missing',
                isExpected: TokenRequestManager.isExpectedError(parameters.error_description || 'Error Description was missing')
            };
        }
    };
    return TokenRequestManager;
}());



/***/ }),

/***/ "Gmzh":
/*!*****************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/implicitTokenProvider/TokenStorage.js ***!
  \*****************************************************************************/
/*! exports provided: ACCESS_TOKEN_KEY, EXPIRATION_KEY, TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_KEY", function() { return ACCESS_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRATION_KEY", function() { return EXPIRATION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
var ACCESS_TOKEN_KEY = 'adal.access.token.key';
var EXPIRATION_KEY = 'adal.expiration.key';
var TOKEN_EXPIRATION_OFFSET = 10000;
var TokenStorage = /** @class */ (function () {
    function TokenStorage(tokenProviderParameters) {
        this._memoryCache = new Map();
        this._aadUserId = tokenProviderParameters.aadUserId || '';
        this._clientId = tokenProviderParameters.servicePrincipalId;
    }
    TokenStorage.getCacheKey = function (userId, clientId, typeOfResource, resourceUri) {
        return userId + '|' + clientId + '|' + typeOfResource + '|' + resourceUri;
    };
    /**
     * Calculates the expires in value in milliseconds for the acquired token
     * @ignore
     */
    TokenStorage._getTokenExpirationInMilliseconds = function (expiration) {
        var tokenLife = parseInt(expiration, 10);
        return Date.now() + tokenLife * 1000;
    };
    TokenStorage._isExpired = function (expiration) {
        return Date.now() >= parseInt(expiration, 10) - TOKEN_EXPIRATION_OFFSET;
    };
    TokenStorage._isValid = function (token, expiration) {
        if (token && expiration) {
            return !TokenStorage._isExpired(expiration);
        }
        return false;
    };
    TokenStorage.prototype.getToken = function (resourceUri) {
        var tokenCacheKey = TokenStorage.getCacheKey(this._aadUserId, this._clientId, ACCESS_TOKEN_KEY, resourceUri);
        var expirationCacheKey = TokenStorage.getCacheKey(this._aadUserId, this._clientId, EXPIRATION_KEY, resourceUri);
        var tokenInfo = this._memoryCache.get(resourceUri);
        if (tokenInfo) {
            if (!TokenStorage._isValid(tokenInfo.token, tokenInfo.expiration)) {
                this._memoryCache.delete(resourceUri);
            }
            else {
                return tokenInfo.token;
            }
        }
        var token = '';
        try {
            token = sessionStorage.getItem(tokenCacheKey) || '';
            var expiration = sessionStorage.getItem(expirationCacheKey) || '';
            if (!TokenStorage._isValid(token, expiration)) {
                sessionStorage.setItem(tokenCacheKey, '');
                sessionStorage.setItem(expirationCacheKey, '');
                token = '';
            }
        }
        catch (e) {
            // Session Storage not avaliable
        }
        return token;
    };
    TokenStorage.prototype.saveToken = function (tokenResponse, resourceUri) {
        var tokenCacheKey = TokenStorage.getCacheKey(this._aadUserId, this._clientId, ACCESS_TOKEN_KEY, resourceUri);
        var expirationCacheKey = TokenStorage.getCacheKey(this._aadUserId, this._clientId, EXPIRATION_KEY, resourceUri);
        this._memoryCache.set(resourceUri, tokenResponse);
        try {
            sessionStorage.setItem(tokenCacheKey, tokenResponse.token);
            sessionStorage.setItem(expirationCacheKey, TokenStorage._getTokenExpirationInMilliseconds(tokenResponse.expiration).toString());
        }
        catch (e) {
            // Session Storage not avaliable. Must rely on memory cache
        }
    };
    return TokenStorage;
}());



/***/ }),

/***/ "nUPw":
/*!***************************************************!*\
  !*** ./lib/oauthTokenProvider/AadErrorHandler.js ***!
  \***************************************************/
/*! exports provided: AadErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AadErrorHandler", function() { return AadErrorHandler; });
/* harmony import */ var _AadTokenProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AadTokenProvider */ "jtSf");
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AadConstants */ "MGiw");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SPHttpStrings.resx */ "NJ9J");
var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SPHttpStrings.resx */ "NJ9J", 1);




var AadErrorHandler = /** @class */ (function () {
    function AadErrorHandler() {
    }
    /**
     * This function will fire an event if the AAD error code can be resolved with a full page redirect.
     */
    AadErrorHandler._handleInteractionRequiredFailures = function (authContext, errorMessage, resource) {
        // Don't prompt for interaction if the end user cannot resolve this failure.
        if (!AadErrorHandler._doesAadErrorCodeExist(errorMessage, _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].UNRESOLVABLE_AAD_ERROR_CODES)) {
            _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].RESOLVABLE_ERROR_CODES.forEach(function (errorCode) {
                if (errorMessage.indexOf(errorCode) > -1) {
                    var urlNavigate = authContext._getNavigateUrl(authContext.RESPONSE_TYPE.TOKEN, resource) + '&prompt=select_account';
                    _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.raiseEvent(_AadTokenProvider__WEBPACK_IMPORTED_MODULE_0__["default"]._tokenAcquisitionEventId, new _AadTokenProvider__WEBPACK_IMPORTED_MODULE_0__["TokenAcquisitionEventArgs"](_SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_3__["additionalCredentialsWarning"], urlNavigate));
                }
            });
        }
    };
    /**
     * This function will fire an event if the AAD error code can be resolved with a full page redirect.
     */
    AadErrorHandler._isInteractionRequired = function (errorMessage, errorCode) {
        if (!AadErrorHandler._doesAadErrorCodeExist(errorMessage, _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].UNRESOLVABLE_AAD_ERROR_CODES)) {
            return _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].RESOLVABLE_ERROR_CODES.has(errorCode);
        }
        return false;
    };
    AadErrorHandler._isTokenRenewalTimeout = function (errorCode) {
        return errorCode === _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].TOKEN_RENEWAL_TIMEOUT;
    };
    AadErrorHandler._isEndpointsResolutionError = function (errorCode) {
        return errorCode === _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].ENDPOINTS_RESOLUTION_ERROR;
    };
    /**
     * Returns true if an AAD Error Code exists in the error message.
     */
    AadErrorHandler._doesAadErrorCodeExist = function (errorMessage, setOfErrorCodes) {
        // AAD error messages use the following pattern. 'ErrorCode: ErrorMessage'. AAD errors can have multiple
        // error codes.
        var errorCodes = errorMessage.match(/(AADSTS)[0-9]+/g) || [];
        for (var _i = 0, errorCodes_1 = errorCodes; _i < errorCodes_1.length; _i++) {
            var errorCode = errorCodes_1[_i];
            if (setOfErrorCodes.has(errorCode)) {
                return true;
            }
        }
        return false;
    };
    return AadErrorHandler;
}());



/***/ }),

/***/ "onrO":
/*!******************************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/implicitTokenProvider/ImplicitFlowTokenProvider.js ***!
  \******************************************************************************************/
/*! exports provided: ImplicitFlowTokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImplicitFlowTokenProvider", function() { return ImplicitFlowTokenProvider; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenStorage */ "Gmzh");
/* harmony import */ var _TokenRequestManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokenRequestManager */ "2BGP");
/* harmony import */ var _AadKillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AadKillSwitches */ "+3E/");




/**
 * Class that wraps the replaces ADALs usage.
 * Shamelessly reuses code snippets from ADAL/MSAL.JS
 * Hoping to deprecate/delete when MSAL is production ready.
 * @internal
 */
var ImplicitFlowTokenProvider = /** @class */ (function () {
    function ImplicitFlowTokenProvider(configuration) {
        this._configuration = configuration;
        this._tokenStorage = new _TokenStorage__WEBPACK_IMPORTED_MODULE_1__["TokenStorage"](configuration);
        this._tokenRequestManager = new _TokenRequestManager__WEBPACK_IMPORTED_MODULE_2__["TokenRequestManager"](configuration);
    }
    /**
     * Performs a retry and drops the login hint.
     * @param resourceUri
     * @param useCachedToken
     */
    ImplicitFlowTokenProvider.prototype.getToken = function (resourceUri, useCachedToken) {
        var _this = this;
        if (useCachedToken === void 0) { useCachedToken = true; }
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('ImplicitTokenProvider.GetAccessTokenSilent');
        var extraData = this._tokenRequestManager._generateTelemetryExtraData(resourceUri, this._configuration.spRequestGuid);
        var cachedToken = this._tokenStorage.getToken(resourceUri);
        if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_3__["AadKillSwitches"].isUpdateTokenForImplicitTokenProviderEnabled()
            ? useCachedToken && cachedToken
            : cachedToken) {
            extraData.alias = 'true';
            acquireAccessTokenQosMonitor.writeSuccess(extraData);
            return Promise.resolve(cachedToken);
        }
        return this._tokenRequestManager
            .getToken(resourceUri, true)
            .then(function (response) {
            if (_TokenRequestManager__WEBPACK_IMPORTED_MODULE_2__["TokenRequestManager"].isSuccessfulResponse(response)) {
                _this._tokenStorage.saveToken(response, resourceUri);
                acquireAccessTokenQosMonitor.writeSuccess(extraData);
                return response.token;
            }
            else {
                throw new Error(response.errorCode + ': ' + response.errorDescription);
            }
        })
            .catch(function (e) {
            if (_TokenRequestManager__WEBPACK_IMPORTED_MODULE_2__["TokenRequestManager"].isExpectedError(e.message)) {
                acquireAccessTokenQosMonitor.writeExpectedFailure('GetTokenFailure', e);
            }
            else {
                acquireAccessTokenQosMonitor.writeUnexpectedFailure('GetTokenFailure', e);
            }
            throw e;
        });
    };
    return ImplicitFlowTokenProvider;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.spoImplicit_none.js.map