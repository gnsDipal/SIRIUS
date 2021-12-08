(window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || []).push([["adalauthcontext"],{

/***/ "AYFb":
/*!**********************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/adalAuthContextManager/OboTokenProvider.js ***!
  \**********************************************************************************/
/*! exports provided: OboTokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OboTokenProvider", function() { return OboTokenProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AadConstants */ "MGiw");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../spHttpClient/SPHttpClient */ "5q05");
/* harmony import */ var _AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AadErrorHandler */ "nUPw");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Class that wraps the ADAL's authentication class
 * @internal
 */
var OboTokenProvider = /** @class */ (function () {
    function OboTokenProvider(authContext, tokenParameters) {
        this.servicePrincipalId = authContext.config.clientId;
        this._patchAdalAuthContext(authContext);
        this._authContext = authContext;
        this._serverRelativeUrl = tokenParameters.serverRelativeUrl;
        this._spHttpClient = tokenParameters.spHttpClient;
    }
    OboTokenProvider.prototype.getToken = function (resourceEndpoint, useCachedToken) {
        if (useCachedToken === void 0) { useCachedToken = true; }
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('OboTokenProvider.GetToken');
        return this._getAccessToken(resourceEndpoint, useCachedToken)
            .then(function (token) {
            acquireAccessTokenQosMonitor.writeSuccess();
            return token;
        })
            .catch(function (e) {
            acquireAccessTokenQosMonitor.writeUnexpectedFailure('TokenAcquisitionFailure', e);
            throw e;
        });
    };
    OboTokenProvider.prototype._getAccessToken = function (resourceEndpoint, useCachedToken) {
        var cachedAccessToken = this._tryGetCachedAccessToken(resourceEndpoint);
        if (useCachedToken && cachedAccessToken) {
            return Promise.resolve(cachedAccessToken);
        }
        else {
            return this._fetchAccessToken(resourceEndpoint);
        }
    };
    /**
     * Returns an access token if a valid cached token exists
     */
    OboTokenProvider.prototype._tryGetCachedAccessToken = function (resourceEndpoint) {
        var cachedToken;
        try {
            cachedToken = this._authContext.getCachedToken(resourceEndpoint);
        }
        catch (e) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_TraceLogger"].logError(OboTokenProvider._logSource, e);
        }
        return cachedToken;
    };
    /**
     * See the following link for details about handling conditional access policies.
     * https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-conditional-access-developer
     */
    OboTokenProvider.prototype._fetchAccessToken = function (resourceEndpoint) {
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('OboTokenProvider.FetchAccessToken');
        // Attempt to fetch a new access token
        return this._fetchAccessTokenSilent(resourceEndpoint)
            .then(function (token) {
            acquireAccessTokenQosMonitor.writeSuccess();
            return token;
        })
            .catch(function (e) {
            if (e.message &&
                _AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AadErrorHandler"]._doesAadErrorCodeExist(e.message, _AadConstants__WEBPACK_IMPORTED_MODULE_1__["default"].EXPECTED_AAD_ERRORS)) {
                acquireAccessTokenQosMonitor.writeExpectedFailure('TokenAcquisitionFailure', e);
            }
            else {
                acquireAccessTokenQosMonitor.writeUnexpectedFailure('TokenAcquisitionFailure', e);
            }
            throw e;
        });
    };
    /**
     * Wraps the ADAL.js callback code with a promise.
     */
    OboTokenProvider.prototype._fetchAccessTokenSilent = function (resourceEndpoint) {
        var urlToCall = this._serverRelativeUrl + "/_api/Microsoft.SharePoint.Internal" +
            (".ClientSideComponent.Token.AcquireOBOToken?resource='" + resourceEndpoint + "'") +
            ("&clientId='" + this._authContext.config.clientId + "'");
        var requestInfo = {
            headers: {
                'X-HTTP-Method': 'GET',
                'OData-Version': '3.0'
            }
        };
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["_SPKillSwitch"].isActivated(OboTokenProvider.useHeadersKillSwitchGuid, '1/9/2020', 'Use headers for requesting tokens')) {
            requestInfo.headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, requestInfo.headers), { ClientId: this._authContext.config.clientId, Resource: resourceEndpoint });
        }
        return this._spHttpClient
            .get(urlToCall, _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_3__["default"].configurations.v1, requestInfo)
            .then(function (response) {
            return response.ok ? response.json() : Promise.reject(response.json());
        })
            .then(function (json) {
            return JSON.parse(json.value).AccessToken;
        });
    };
    /**
     * Adal creates an iframe without the sandbox attribute.
     * Adal assumes it's being used as a singleton but this will not work for our scenario.
     */
    OboTokenProvider.prototype._patchAdalAuthContext = function (authContext) {
        Object.getPrototypeOf(authContext)._singletonInstance = undefined;
    };
    OboTokenProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogSource"].create('OBOTokenProvider');
    OboTokenProvider.useHeadersKillSwitchGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_5__["Guid"].parse('6f64a6ed-dc35-422c-a368-539dd03f9b9b');
    return OboTokenProvider;
}());



/***/ }),

/***/ "btfH":
/*!*********************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/adalAuthContextManager/AdalAuthContext.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AadConstants */ "MGiw");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AadErrorHandler */ "nUPw");
/* harmony import */ var _AadKillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AadKillSwitches */ "+3E/");






/**
 * Class that's extends on the Error class and adds an extra member variable
 * @internal
 */
var DetailedError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailedError, _super);
    function DetailedError(errorMessage, errorCode) {
        var _this = _super.call(this, errorMessage) || this;
        _this._errorCode = errorCode;
        return _this;
    }
    Object.defineProperty(DetailedError.prototype, "errorCode", {
        get: function () {
            return this._errorCode;
        },
        enumerable: false,
        configurable: true
    });
    return DetailedError;
}(Error));
/**
 * Class that wraps the ADAL's authentication class
 * @internal
 */
var AdalAuthContext = /** @class */ (function () {
    function AdalAuthContext(authContext, aadUserId) {
        this.clientId = authContext.config.clientId;
        this._aadUserId = aadUserId || '';
        this._patchAdalAuthContext(authContext);
        this._authContext = authContext;
        this._extraQueryParameter = authContext.config.extraQueryParameter;
    }
    AdalAuthContext.prototype.getToken = function (resourceEndpoint, useCachedToken) {
        var _this = this;
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('AdalTokenProvider.GetToken');
        var extraData = {
            alias: 'false',
            CorrelationId: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid().toString(),
            isInternal: this.clientId === _AadConstants__WEBPACK_IMPORTED_MODULE_2__["default"].PRE_AUTHORIZED_APP_PRINCIPAL_ID
        };
        return this._getAccessToken(resourceEndpoint, useCachedToken, extraData)
            .then(function (token) {
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_5__["AadKillSwitches"].isLogAadAdditionalTelemetryEnabled() && extraData.isInternal) {
                extraData.name = resourceEndpoint;
            }
            acquireAccessTokenQosMonitor.writeSuccess(extraData);
            return token;
        })
            .catch(function (e) {
            _AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AadErrorHandler"]._handleInteractionRequiredFailures(_this._authContext, e.message, resourceEndpoint);
            _this._monitorAndThrowForAccessTokenExpectedFailures(acquireAccessTokenQosMonitor, e, resourceEndpoint, extraData);
            // Expected errors will log and throw an exception from the previous function
            acquireAccessTokenQosMonitor.writeUnexpectedFailure(e.errorCode, e, extraData);
            throw e;
        });
    };
    AdalAuthContext.prototype._getAccessToken = function (resourceEndpoint, useCachedToken, extraData) {
        var cachedAccessToken = this._tryGetCachedAccessToken(resourceEndpoint);
        if (useCachedToken && cachedAccessToken) {
            // No network request was made.
            extraData.CorrelationId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].empty.toString();
            extraData.alias = 'true';
            return Promise.resolve(cachedAccessToken);
        }
        else {
            return this._fetchAccessToken(resourceEndpoint, extraData);
        }
    };
    /**
     * Returns an access token if a valid cached token exists
     */
    AdalAuthContext.prototype._tryGetCachedAccessToken = function (resourceEndpoint) {
        var cachedToken;
        try {
            cachedToken = this._authContext.getCachedToken(resourceEndpoint);
            var jwtToken = this._authContext._extractIdToken(cachedToken);
            if (jwtToken.oid !== this._aadUserId || jwtToken.appid !== this.clientId) {
                cachedToken = undefined;
            }
        }
        catch (e) {
            // Empty block
        }
        return cachedToken;
    };
    AdalAuthContext.prototype._fetchAccessToken = function (resourceEndpoint, extraData) {
        var _this = this;
        var acquireAccessTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"]('AdalTokenProvider.AcquireAccessTokenSilent');
        this._authContext.config.correlationId = extraData.CorrelationId;
        this._authContext.config.extraQueryParameter = this._extraQueryParameter;
        // Attempt to fetch a new access token
        return this._fetchAccessTokenSilent(resourceEndpoint)
            .catch(function (firstError) {
            // The login hint can cause failures. ESTS does not support parsing of error codes.
            _this._authContext.config.extraQueryParameter = undefined;
        })
            .then(function (token) {
            if (token) {
                return token;
            }
            // Use a new correlation id for retry
            var correlationId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid().toString();
            _this._authContext.config.correlationId = correlationId;
            extraData.CorrelationId = correlationId;
            return _this._fetchAccessTokenSilent(resourceEndpoint);
        })
            .catch(function (secondError) {
            _this._authContext.config.extraQueryParameter = _this._extraQueryParameter;
            _this._monitorAndThrowForAccessTokenExpectedFailures(acquireAccessTokenQosMonitor, secondError, resourceEndpoint, extraData);
            if (secondError.message.indexOf('Token renewal operation failed due to timeout') > -1) {
                secondError.message =
                    secondError.message +
                        ' - AADCorrelationId: ' +
                        extraData.CorrelationId +
                        ' - ClientId: ' +
                        _this.clientId;
            }
            acquireAccessTokenQosMonitor.writeUnexpectedFailure(secondError.errorCode, secondError, extraData);
            throw secondError;
        })
            .then(function (token) {
            _this._authContext.config.extraQueryParameter = _this._extraQueryParameter;
            acquireAccessTokenQosMonitor.writeSuccess(extraData);
            return token;
        });
    };
    /**
     * Throws an exception if an expected error has occurred. List of expected errors are listed in AadConstants.ts
     */
    AdalAuthContext.prototype._monitorAndThrowForAccessTokenExpectedFailures = function (acquireAccessTokenQosMonitor, aadError, resourceEndpoint, correlationObject) {
        if (_AadErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AadErrorHandler"]._doesAadErrorCodeExist(aadError.message, _AadConstants__WEBPACK_IMPORTED_MODULE_2__["default"].EXPECTED_AAD_ERRORS)) {
            acquireAccessTokenQosMonitor.writeExpectedFailure(aadError.errorCode, aadError, correlationObject);
            throw aadError;
        }
    };
    /**
     * Wraps the ADAL.js callback code with a promise.
     */
    AdalAuthContext.prototype._fetchAccessTokenSilent = function (resourceEndpoint) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._authContext.acquireToken(resourceEndpoint, function (errorDescription, token, errorType) {
                if (!token) {
                    reject(new DetailedError('Error - Type : ' + errorType + ' - Description : ' + errorDescription, errorType));
                }
                else {
                    resolve(token);
                }
            });
        });
    };
    /**
     * Patching ADAL context to address design issues.
     */
    AdalAuthContext.prototype._patchAdalAuthContext = function (authContext) {
        var _this = this;
        // AuthContext object has a weird mechanism that forces the object to be a singleton
        // We're fixing this so that we can have multiple authContext objects
        Object.getPrototypeOf(authContext)._singletonInstance = undefined;
        // Patching ADAL's iframe to include sandbox mode
        authContext._addAdalFrame = function (iframeId) {
            return _this._addAdalFrame(authContext, iframeId);
        };
        // Patching ADAL's iframe rendering logic to avoid setTimeout.
        authContext._loadFrame = function (urlNavigate, frameName) {
            return _this._loadFrame(authContext, urlNavigate, frameName);
        };
        // Patching ADAL's to avoid fetching id token before access token
        authContext._user = {};
        // This is required for the MFA scenario. SPFxSingleSignOn.aspx reads this value redirects to the original page.
        authContext._saveItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST, window.location.href);
    };
    /**
     * Adds the hidden iframe for silent token renewal. This code is a security fix to ADAL.js's iframe
     * rendering code. IE11 doesn't support dynamically setting attributes on an iFrame element, so
     * we must patch the original implementation. Original code is in ADAL.js addAdalFrame.
     * https://github.com/AzureAD/azure-activedirectory-library-for-js/ for source code
     */
    AdalAuthContext.prototype._addAdalFrame = function (authContext, iframeId) {
        if (typeof iframeId === 'undefined') {
            return;
        }
        authContext.info('Add adal frame to document:' + iframeId);
        var adalFrame = document.getElementById(iframeId);
        var sandboxAttributes = 'allow-same-origin allow-scripts allow-forms allow-pointer-lock';
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                /* tslint:disable:next-line no-any */
                (window.opera || window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                var ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.setAttribute('aria-hidden', 'true');
                ifr.setAttribute('sandbox', sandboxAttributes);
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.style.border = '0';
                adalFrame = document.getElementsByTagName('body')[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe sandbox="' +
                    sandboxAttributes +
                    '" name="' +
                    iframeId +
                    '" id="' +
                    iframeId +
                    '" style="display:none"></iframe>');
            }
            var windowFrames = window.frames;
            if (windowFrames && windowFrames[iframeId]) {
                adalFrame = windowFrames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * Opens a hidden iframe for silent token renewal. The original code performed this action in a really weird
     * and inefficent way, so we're fixing it.
     * Original code is in ADAL.js loadFrame.
     * https://github.com/AzureAD/azure-activedirectory-library-for-js/ for source code
     */
    AdalAuthContext.prototype._loadFrame = function (authContext, urlNavigate, frameName) {
        authContext.info('LoadFrame: ' + frameName);
        var frameHandle = authContext._addAdalFrame(frameName);
        frameHandle.src = urlNavigate;
    };
    return AdalAuthContext;
}());
/* harmony default export */ __webpack_exports__["default"] = (AdalAuthContext);


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

/***/ "z1gO":
/*!****************************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/adalAuthContextManager/AdalAuthContextManager.js ***!
  \****************************************************************************************/
/*! exports provided: AdalAuthContextManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdalAuthContextManager", function() { return AdalAuthContextManager; });
/* harmony import */ var adal_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! adal-angular */ "OTTE");
/* harmony import */ var adal_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(adal_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdalAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdalAuthContext */ "btfH");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OboTokenProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OboTokenProvider */ "AYFb");




/**
 * Class for managing multiple instances of the authentication context.
 * @internal
 */
var AdalAuthContextManager = /** @class */ (function () {
    function AdalAuthContextManager() {
        /**
         * Handles the loading of Adal.js. It is set to protected so that it can
         * be mocked in a unit test.
         * @internal
         */
        this._loadAdalJsModulePromise = undefined;
        this._authContextDictionary = new Map();
    }
    AdalAuthContextManager.convertTokenParametersToConfig = function (tokenProviderParameters) {
        var extraQueryParameter;
        var loginHint = tokenProviderParameters.userPrincipalName;
        if (loginHint) {
            extraQueryParameter = "login_hint=" + encodeURIComponent(loginHint);
        }
        var instance = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlUtilities"].removeEndSlash(tokenProviderParameters.aadInstanceUrl) + '/';
        return {
            clientId: tokenProviderParameters.servicePrincipalId,
            redirectUri: tokenProviderParameters.redirectUri,
            instance: instance,
            loadFrameTimeout: 10000,
            tenant: tokenProviderParameters.aadTenantId,
            navigateToLoginRequestUrl: false,
            extraQueryParameter: extraQueryParameter
        };
    };
    AdalAuthContextManager.prototype.getOboTokenProvider = function (tokenProviderConfiguration, sharePointOBOProviderConfiguration) {
        return new _OboTokenProvider__WEBPACK_IMPORTED_MODULE_3__["OboTokenProvider"](adal_angular__WEBPACK_IMPORTED_MODULE_0__["inject"](AdalAuthContextManager.convertTokenParametersToConfig(tokenProviderConfiguration)), sharePointOBOProviderConfiguration);
    };
    // Adal-angular exports include an inject function that takes a AuthenticationContext
    // configuration object and returns a instance of the AuthenticationContext.
    // https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/dev/lib/adal.js
    AdalAuthContextManager.prototype.getAdalTokenProvider = function (tokenProviderConfiguration) {
        // Using the servicePrincipalId as a unique identiifier for Authentication Context objects
        if (!this._authContextDictionary.has(tokenProviderConfiguration.servicePrincipalId)) {
            var authContext = new _AdalAuthContext__WEBPACK_IMPORTED_MODULE_1__["default"](adal_angular__WEBPACK_IMPORTED_MODULE_0__["inject"](AdalAuthContextManager.convertTokenParametersToConfig(tokenProviderConfiguration)), tokenProviderConfiguration.aadUserId);
            this._authContextDictionary.set(tokenProviderConfiguration.servicePrincipalId, authContext);
        }
        return this._authContextDictionary.get(tokenProviderConfiguration.servicePrincipalId);
    };
    return AdalAuthContextManager;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.adalauthcontext_none.js.map