(window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || []).push([["msalImplicit"],{

/***/ "X7FI":
/*!*************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/msalImplicit/MsalTokenProvider.js ***!
  \*************************************************************************/
/*! exports provided: MsalTokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsalTokenProvider", function() { return MsalTokenProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AadTokenProvider */ "jtSf");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AadConstants */ "MGiw");
/* harmony import */ var _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AadErrorHandler */ "nUPw");
/* harmony import */ var _AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../AadKillSwitches */ "+3E/");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! msal */ "KZBk");









/**
 * Class that wraps the MSAL's authentication class
 * @internal
 */
var MsalTokenProvider = /** @class */ (function () {
    function MsalTokenProvider(configuration) {
        this._defaultConfiguration = configuration;
        this._requestMap = new Map();
        this._msalInstance = this._initializeMsalJs();
        // Revert to old behavior if Flight is off
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1887) /* Use MSAL for 3rd Party Requests */) {
            this._defaultConfiguration.aadInstanceUrl = 'https://login.microsoftonline.com';
        }
    }
    MsalTokenProvider.prototype.getToken = function (resourceEndpoint, useCachedToken) {
        var _this = this;
        if (useCachedToken === void 0) { useCachedToken = true; }
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.GetToken');
        var extraData = this._generateTelemetryExtraData();
        if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isLogAadAdditionalTelemetryEnabled() && extraData.isInternal) {
            extraData.name = resourceEndpoint;
        }
        // Supporting legacy behavor when the MSAL flight is off
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1887) /* Use MSAL for 3rd Party Requests */) {
            // MSAL will return "user login is required" in this case.
            // This will reduce the noise in the MSAL.AcquireAccessTokenSilent monitor.
            if (!this._defaultConfiguration.userPrincipalName) {
                var missingLoginHintError = new Error('MSAL does not support silent auth without login hint');
                acquireAccessTokenQosMonitor.writeExpectedFailure(missingLoginHintError.message, missingLoginHintError, extraData);
                return Promise.reject(missingLoginHintError);
            }
        }
        // If you try to fetch a token without "logging in", MSAL will make a request to fetch both
        // an ID and ACCESS token in parallel. The problem with this is that the URL containing the tokens
        // will exceed 4K characters. IE and EDGE do not support this and will automatically drop off
        // trailing query parameters. MSAL team plans to eventually fix this on their end.
        var currentBrowser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser;
        var acquireTokenPromise;
        if (currentBrowser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE || currentBrowser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].Edge) {
            acquireTokenPromise = this._loginSilent().then(function () { return _this._acquireToken(resourceEndpoint); });
        }
        else {
            acquireTokenPromise = this._acquireToken(resourceEndpoint);
        }
        extraData.CorrelationId = this._defaultConfiguration.spRequestGuid || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString();
        return acquireTokenPromise
            .then(function (accessToken) {
            acquireAccessTokenQosMonitor.writeSuccess(extraData);
            return accessToken;
        })
            .catch(function (e) { return _this._handleAuthErrors(acquireAccessTokenQosMonitor, e, extraData, resourceEndpoint); });
    };
    MsalTokenProvider.prototype._loginSilent = function () {
        // Represents the time it takes to fetch an id token.
        var getIdTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.GetIdToken');
        return this._loginSilentHelper(0, getIdTokenQosMonitor);
    };
    MsalTokenProvider.prototype._loginSilentHelper = function (attempt, getIdTokenQosMonitor) {
        var _this = this;
        var retryQosMonitor;
        if (attempt > 0) {
            retryQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.RetryGetIdToken');
        }
        var extraData = this._generateTelemetryExtraData();
        var requestData = {
            authority: this._defaultConfiguration.aadInstanceUrl + '/' + this._defaultConfiguration.aadTenantId,
            correlationId: extraData.CorrelationId,
            loginHint: this._defaultConfiguration.userPrincipalName,
            scopes: [this._defaultConfiguration.servicePrincipalId]
        };
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1887) /* Use MSAL for 3rd Party Requests */ && attempt === 0) {
            requestData.sid = this._defaultConfiguration.aadSessionId;
            requestData.loginHint = undefined;
        }
        return this._msalInstance
            .acquireTokenSilent(requestData)
            .then(function (response) {
            // Using alias column to mark cache hits
            extraData.alias = response.fromCache.toString();
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isAdditionalMsalTelemetryEnabled()) {
                extraData.jsonExtraData = JSON.stringify(_this._requestMap.get(extraData.CorrelationId));
            }
            getIdTokenQosMonitor.writeSuccess(extraData);
            return response.accessToken;
        })
            .catch(function (e) {
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isAdditionalMsalTelemetryEnabled()) {
                extraData.jsonExtraData = JSON.stringify(_this._requestMap.get(extraData.CorrelationId));
            }
            retryQosMonitor === null || retryQosMonitor === void 0 ? void 0 : retryQosMonitor.writeUnexpectedFailure(e.errorCode, e, extraData);
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isRetryIdTokenWithLoginHintEnabled() &&
                _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._isInteractionRequired(e.message, e.errorCode) &&
                attempt < 1) {
                return _this._loginSilentHelper(++attempt, getIdTokenQosMonitor);
            }
            else {
                _this._handleAuthErrors(getIdTokenQosMonitor, e, extraData, _this._defaultConfiguration.servicePrincipalId);
            }
        });
    };
    MsalTokenProvider.prototype._acquireToken = function (resourceEndpoint) {
        // Represents the time it takes to fetch an access token.
        var getAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.GetAccessToken');
        return this._acquireTokenHelper(resourceEndpoint, 0, getAccessTokenQosMonitor);
    };
    MsalTokenProvider.prototype._acquireTokenHelper = function (resourceEndpoint, attempt, getAccessTokenQosMonitor, useLoginHint) {
        var _this = this;
        if (useLoginHint === void 0) { useLoginHint = false; }
        var retryQosMonitor;
        if (attempt > 0) {
            if (useLoginHint) {
                retryQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.RetryLoginHintGetAccessToken');
            }
            else {
                retryQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('MsalTokenProvider.RetryGetAccessToken');
            }
        }
        var extraData = this._generateTelemetryExtraData();
        var requestData = {
            authority: this._defaultConfiguration.aadInstanceUrl + '/' + this._defaultConfiguration.aadTenantId,
            correlationId: extraData.CorrelationId,
            loginHint: this._defaultConfiguration.userPrincipalName,
            scopes: [resourceEndpoint + '/.default']
        };
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1887) /* Use MSAL for 3rd Party Requests */ && !useLoginHint) {
            requestData.sid = this._defaultConfiguration.aadSessionId;
            requestData.loginHint = undefined;
        }
        return this._msalInstance
            .acquireTokenSilent(requestData)
            .then(function (response) {
            // Using alias column to mark cache hits
            extraData.alias = response.fromCache.toString();
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isAdditionalMsalTelemetryEnabled()) {
                extraData.jsonExtraData = JSON.stringify(_this._requestMap.get(extraData.CorrelationId));
            }
            getAccessTokenQosMonitor.writeSuccess(extraData);
            retryQosMonitor === null || retryQosMonitor === void 0 ? void 0 : retryQosMonitor.writeSuccess(extraData);
            return response.accessToken;
        })
            .catch(function (e) {
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isAdditionalMsalTelemetryEnabled()) {
                extraData.jsonExtraData = JSON.stringify(_this._requestMap.get(extraData.CorrelationId));
            }
            retryQosMonitor === null || retryQosMonitor === void 0 ? void 0 : retryQosMonitor.writeUnexpectedFailure(e.errorCode, e, extraData);
            // We only want to retry once for network issues as the failure could be due to many different reasons
            // and retry could help fix the issue
            if ((_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isRetryTimeoutsEnabled() &&
                _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._isTokenRenewalTimeout(e.errorCode) &&
                attempt < 1) ||
                (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isRetryOnResolveEndpointsFailureEnabled() &&
                    _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._isEndpointsResolutionError(e.errorCode) &&
                    attempt < 1)) {
                return _this._acquireTokenHelper(resourceEndpoint, ++attempt, getAccessTokenQosMonitor);
            }
            else if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isRetryWithLoginHintEnabled() &&
                _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._isInteractionRequired(e.message, e.errorCode) &&
                attempt < 1) {
                return _this._acquireTokenHelper(resourceEndpoint, ++attempt, getAccessTokenQosMonitor, true);
            }
            else {
                _this._handleAuthErrors(getAccessTokenQosMonitor, e, extraData, resourceEndpoint);
            }
        });
    };
    MsalTokenProvider.prototype._initializeMsalJs = function () {
        var _this = this;
        var configuration;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(467)) {
            configuration = {
                auth: {
                    clientId: this._defaultConfiguration.servicePrincipalId,
                    navigateToLoginRequestUrl: true,
                    redirectUri: this._defaultConfiguration.redirectUri,
                    validateAuthority: false,
                    authority: this._defaultConfiguration.aadInstanceUrl + '/' + this._defaultConfiguration.aadTenantId
                },
                system: {
                    loadFrameTimeout: 10000,
                    navigateFrameWait: 0
                }
            };
        }
        else {
            configuration = {
                auth: {
                    clientId: this._defaultConfiguration.servicePrincipalId,
                    navigateToLoginRequestUrl: false,
                    redirectUri: this._defaultConfiguration.redirectUri,
                    validateAuthority: false
                },
                system: {
                    loadFrameTimeout: 10000,
                    navigateFrameWait: 0
                }
            };
        }
        if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_6__["AadKillSwitches"].isAdditionalMsalTelemetryEnabled()) {
            configuration.system.telemetry = {
                applicationName: this._defaultConfiguration.servicePrincipalId,
                applicationVersion: '1.0',
                telemetryEmitter: function (events) {
                    var key = '';
                    var value = {};
                    events.forEach(function (event) {
                        if (event['msal.event_name'] === 'msal.api_event') {
                            key = event['Microsoft.MSAL.correlation_id'];
                            value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), _this._requestMap.get(key)), event);
                        }
                        else if (event['msal.event_name'] === 'msal.default_event') {
                            value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), { 'msal.effective_connection_speed': event['msal.effective_connection_speed'] });
                        }
                    });
                    _this._requestMap.set(key, value);
                }
            };
        }
        return new msal__WEBPACK_IMPORTED_MODULE_7__["UserAgentApplication"](configuration);
    };
    MsalTokenProvider.prototype._generateTelemetryExtraData = function () {
        // alias is being used to detect cache hits
        // manifestId is used to save msal perf data
        return {
            alias: 'false',
            CorrelationId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString(),
            isInternal: this._defaultConfiguration.servicePrincipalId === _AadConstants__WEBPACK_IMPORTED_MODULE_4__["default"].PRE_AUTHORIZED_APP_PRINCIPAL_ID,
            jsonExtraData: ''
        };
    };
    MsalTokenProvider.prototype._cancelRedirect = function () {
        this._redirectCancelled = true;
    };
    MsalTokenProvider.prototype._handleAuthErrors = function (monitor, error, extraData, resourceEndpoint) {
        var _this = this;
        var userAgentString = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().userAgent || '';
        // Will remove this flight check when MSAL provides an API for handling MFA.
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(467) /* Allow MSAL to prompt the end user for MFA errors */ &&
            _AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._isInteractionRequired(error.message, error.errorCode) &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].IE !== _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser) {
            // To prevent infinite redirect loops we want to only allow 3 redirects with 1 minute
            var currDate = new Date();
            var firstRedirectTime = window.sessionStorage.getItem('msalRedirectFirstAttempTime');
            var oneMinuteInMs = 60 * 1000;
            var foundPreviousAttempt = false;
            var attemptNumber = 1;
            if (firstRedirectTime) {
                var firstRedirectDate = new Date(firstRedirectTime);
                if (currDate.getTime() - firstRedirectDate.getTime() < oneMinuteInMs) {
                    var attemptCount = window.sessionStorage.getItem('msalRedirectAttempNumber');
                    if (attemptCount) {
                        attemptNumber = parseInt(attemptCount, 10);
                        attemptNumber++;
                        foundPreviousAttempt = true;
                    }
                }
            }
            if (!foundPreviousAttempt) {
                window.sessionStorage.setItem('msalRedirectFirstAttempTime', currDate.toString());
            }
            // We want a maxium of 3 attempts, and have already incremented from 1 for previous attempts
            if (attemptNumber < 4) {
                monitor.writeExpectedFailure(error.errorCode, error, extraData);
                window.sessionStorage.setItem('msalRedirectAttempNumber', attemptNumber.toString());
                window.sessionStorage.setItem('msalRedirectClientId', this._defaultConfiguration.servicePrincipalId);
                this._msalInstance.acquireTokenRedirect({
                    authority: this._defaultConfiguration.aadInstanceUrl + '/' + this._defaultConfiguration.aadTenantId,
                    correlationId: extraData.CorrelationId,
                    loginHint: this._defaultConfiguration.userPrincipalName,
                    scopes: [resourceEndpoint + '/.default'],
                    state: window.location.href,
                    onRedirectNavigate: function (url) {
                        _this._redirectCancelled = false;
                        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPEventManager"].instance.raiseEvent(_AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__["default"]._onBeforeRedirectEventId, new _AadTokenProvider__WEBPACK_IMPORTED_MODULE_2__["BeforeRedirectEventArgs"](url, _this._cancelRedirect.bind(_this)));
                        // If we are in tab cancel the redirect.
                        if (window.sessionStorage.getItem('_isRunningTABTest') === 'true') {
                            _this._redirectCancelled = true;
                        }
                        return !_this._redirectCancelled;
                    }
                });
            }
            else {
                monitor.writeUnexpectedFailure(error.errorCode, error, extraData);
            }
        }
        else if (_AadErrorHandler__WEBPACK_IMPORTED_MODULE_5__["AadErrorHandler"]._doesAadErrorCodeExist(error.message, _AadConstants__WEBPACK_IMPORTED_MODULE_4__["default"].EXPECTED_AAD_ERRORS) ||
            userAgentString.indexOf('TabStop/1.0') > -1 // MSAL Implicit seems to have issues with test infra.
        ) {
            monitor.writeExpectedFailure(error.errorCode, error, extraData);
        }
        else {
            monitor.writeUnexpectedFailure(error.errorCode, error, extraData);
        }
        throw error;
    };
    return MsalTokenProvider;
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



/***/ })

}]);
//# sourceMappingURL=chunk.msalImplicit_none.js.map