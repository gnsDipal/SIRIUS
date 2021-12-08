(window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || []).push([["aadTokenProvider"],{

/***/ "+3E/":
/*!***************************************************!*\
  !*** ./lib/oauthTokenProvider/AadKillSwitches.js ***!
  \***************************************************/
/*! exports provided: AadKillSwitches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AadKillSwitches", function() { return AadKillSwitches; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var AadKillSwitches = /** @class */ (function () {
    function AadKillSwitches() {
    }
    AadKillSwitches.isAdditionalMsalTelemetryEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('0f83cdbf-a595-48d6-a1b5-ff70e5daf777'), '03/26/20', 'Add additional telemetry for MSAL calls');
    };
    AadKillSwitches.isLogAadAdditionalTelemetryEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d6619064-d4fc-4659-8306-7e9edb59d871'), '04/13/20', 'Add additional logging for the time it takes to fetch Aad tokens');
    };
    AadKillSwitches.isUpdateTokenForImplicitTokenProviderEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('d4f4cc58-9fc2-47f1-a5df-66add6851f7c'), '09/08/20', 'Allow ImplicitTokenProvider update token');
    };
    AadKillSwitches.isRetryTimeoutsEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('8677b99c-f245-43dd-8e78-a6f512170c24'
        /* '10/20/20',
        'Retry on timeout failures' */
        );
    };
    AadKillSwitches.isRetryWithLoginHintEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('a7bec1ab-8f5f-43dc-8723-b7160b9430b5'
        /* '10/23/20',
        'Retry with login hint' */
        );
    };
    AadKillSwitches.isRetryIdTokenWithLoginHintEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('343c4c23-c2a0-4fb5-8e8a-334c8bad48e5'
        /* '11/06/20',
        'Retry with login hint' */
        );
    };
    AadKillSwitches.isRetryOnResolveEndpointsFailureEnabled = function () {
        return !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('d156f602-a884-45d4-817b-afb6405eb98d'
        /* '11/05/20',
          'Retry on resolve endpoints failure' */
        );
    };
    return AadKillSwitches;
}());



/***/ }),

/***/ "NUTh":
/*!************************************************************************************!*\
  !*** ./lib/oauthTokenProvider/chunks/aadTokenProvider/DeferredAadTokenProvider.js ***!
  \************************************************************************************/
/*! exports provided: DeferredAadTokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredAadTokenProvider", function() { return DeferredAadTokenProvider; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SPHttpStrings.resx */ "NJ9J");
var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../SPHttpStrings.resx */ "NJ9J", 1);
/* harmony import */ var _AadConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AadConstants */ "MGiw");
/* harmony import */ var _AadKillSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AadKillSwitches */ "+3E/");





/**
 * This class allows a developer to obtain OAuth2 tokens from Azure AD.
 *
 * OAuth2 tokens are used to authenticate the user from the SharePoint page
 * to other services such as PowerBI, Sway, Exchange, Yammer, etc.
 *
 * @privateRemarks
 * AadTokenProvider is replacing the /_api.SP.OAuth.Token/Acquire endpoint
 * for authentication with ADAL.js. At some point in the near future, when Azure AD v2.0
 * can support the same scenarios as the original version, we will switch to MSAL.
 *
 * @public
 * @sealed
 */
var DeferredAadTokenProvider = /** @class */ (function () {
    /**
     * @internal
     */
    function DeferredAadTokenProvider(tokenAcquisitionEvent, beforeRedirectEvent, configuration, oboConfiguration) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(configuration.aadInstanceUrl, 'aadInstanceUrl');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(configuration.aadTenantId, 'aadTenantId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(configuration.redirectUri, 'redirectUri');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(configuration.servicePrincipalId, 'servicePrincipalId');
        this._defaultConfiguration = configuration;
        this._oboConfiguration = oboConfiguration;
        this._tokenAcquisitionEvent = tokenAcquisitionEvent;
        this.onBeforeRedirectEvent = beforeRedirectEvent;
    }
    /**
     * Fetches the AAD OAuth2 token for a resource if the user that's currently logged in has
     * access to that resource.
     *
     * The OAuth2 token should not be cached by the caller since it is already cached by the method
     * itself.
     *
     * @param resourceEndpoint - the resource for which the token should be obtained
     * @param useCachedToken - Allows the developer to specify if cached tokens should be returned.
     * An example of a resourceEndpoint would be https://graph.microsoft.com
     * @returns A promise that will be fullfiled with the token or that will reject
     *          with an error message
     */
    DeferredAadTokenProvider.prototype.getToken = function (resourceEndpoint, useCachedToken) {
        var _this = this;
        if (useCachedToken === void 0) { useCachedToken = true; }
        if (this._defaultConfiguration.servicePrincipalId === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].empty.toString()) {
            return Promise.reject(new Error(_SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_2__["servicePrincipalNotAvaliableError"]));
        }
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(DeferredAadTokenProvider.msalTrialRunKillSwitchGuid, '09/11/19', 'Run MSAL for only 1/10th of all requests') &&
            Math.floor(Math.random() * 10) === 0) {
            this._getMsalTokenProvider(this._defaultConfiguration)
                .then(function (tokenProvider) { return _this._getToken(tokenProvider, resourceEndpoint, useCachedToken); })
                .catch(function (e) {
                /* ignore failures as the function already does logging */
            });
        }
        return this._getTokenInternal(resourceEndpoint, this._defaultConfiguration, useCachedToken);
    };
    /**
     * Fetches the AAD OAuth2 token for a resource if the user that's currently logged in has
     * access to that resource.
     *
     * The OAuth2 token should not be cached by the caller since it is already cached by the method
     * itself.
     *
     * @param resourceEndpoint - the resource for which the token should be obtained
     * @param useCachedToken - Allows the developer to specify if cached tokens should be returned.
     * An example of a resourceEndpoint would be https://graph.microsoft.com
     * @returns A promise that will be fullfiled with the token or that will reject
     *          with an error message
     *
     * @internal
     */
    DeferredAadTokenProvider.prototype._getTokenInternal = function (resourceEndpoint, configuration, useCachedToken) {
        var _this = this;
        if (useCachedToken === void 0) { useCachedToken = true; }
        var acquireTokenQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('AadTokenProvider.GetAppTokenTimePerf');
        var getTokenPromise;
        var tokenProviderConfig = configuration || this._defaultConfiguration;
        if (this._shouldUseOboTokenExchange() && this._oboConfiguration) {
            // OBO Token Exchange is only supported for 3rd Parties. Using the default configuration will
            // prevent this code path from running for 1st party requests
            getTokenPromise = this._getOboTokenProvider(this._defaultConfiguration, this._oboConfiguration).then(function (tokenProvider) { return _this._getToken(tokenProvider, resourceEndpoint, useCachedToken); });
        }
        else if (this._shouldUseMsalTokenProvider()) {
            getTokenPromise = this._getMsalTokenProvider(tokenProviderConfig).then(function (tokenProvider) {
                return _this._getToken(tokenProvider, resourceEndpoint, useCachedToken);
            });
        }
        else if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1476) /* Implicit Token Provider */) {
            getTokenPromise = this._getImplicitTokenProvider(tokenProviderConfig).then(function (tokenProvider) {
                return _this._getToken(tokenProvider, resourceEndpoint, useCachedToken);
            });
        }
        else {
            getTokenPromise = this._getAdalTokenProvider(tokenProviderConfig).then(function (authContext) {
                return authContext.getToken(resourceEndpoint, useCachedToken);
            });
        }
        return getTokenPromise
            .then(function (token) {
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_4__["AadKillSwitches"].isLogAadAdditionalTelemetryEnabled()) {
                var isInternal = tokenProviderConfig.servicePrincipalId === _AadConstants__WEBPACK_IMPORTED_MODULE_3__["default"].PRE_AUTHORIZED_APP_PRINCIPAL_ID;
                var extraData = {
                    isInternal: isInternal
                };
                // We can only log the endpoint if first party to avoid privacy issues
                if (isInternal) {
                    extraData.name = resourceEndpoint;
                }
                acquireTokenQosMonitor.writeSuccess(extraData);
            }
            return token;
        })
            .catch(function (error) {
            if (_AadKillSwitches__WEBPACK_IMPORTED_MODULE_4__["AadKillSwitches"].isLogAadAdditionalTelemetryEnabled()) {
                acquireTokenQosMonitor.writeUnexpectedFailure();
            }
            throw error;
        });
    };
    DeferredAadTokenProvider.prototype._getToken = function (tokenProvider, resourceEndpoint, useCachedToken) {
        return tokenProvider.getToken(resourceEndpoint, useCachedToken);
    };
    Object.defineProperty(DeferredAadTokenProvider.prototype, "tokenAcquisitionEvent", {
        /**
         * Notifies the developer when Token Acquisition requires user action.
         * @eventproperty
         */
        get: function () {
            return this._tokenAcquisitionEvent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check for determining if the MSAL API should be used in the current environment.
     */
    DeferredAadTokenProvider.prototype._shouldUseMsalTokenProvider = function () {
        return !!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(this._defaultConfiguration.aadSessionId) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1887);
    };
    DeferredAadTokenProvider.prototype._getAdalAuthContextManager = function (configuration) {
        if (!this._authContextManager) {
            this._authContextManager = Promise.all(/*! import() | adalauthcontext */[__webpack_require__.e("vendors~adalauthcontext"), __webpack_require__.e("adalauthcontext")]).then(__webpack_require__.bind(null, /*! ../adalAuthContextManager/AdalAuthContextManager */ "z1gO")).then(function (adalAuthContextManagerModule) { return new adalAuthContextManagerModule.AdalAuthContextManager(); });
        }
        return this._authContextManager;
    };
    DeferredAadTokenProvider.prototype._getAdalTokenProvider = function (configuration) {
        return this._getAdalAuthContextManager(configuration).then(function (adalAuthContextManager) {
            return adalAuthContextManager.getAdalTokenProvider(configuration);
        });
    };
    DeferredAadTokenProvider.prototype._getMsalTokenProvider = function (configuration) {
        var _this = this;
        return Promise.all(/*! import() | msalImplicit */[__webpack_require__.e("vendors~msalImplicit"), __webpack_require__.e("msalImplicit")]).then(__webpack_require__.bind(null, /*! ../msalImplicit/MsalTokenProvider */ "X7FI")).then(function (msalTokenProviderModule) {
            if (_this._isFirstParty(configuration.servicePrincipalId)) {
                if (!_this._firstPartyMsalTokenProvider) {
                    _this._firstPartyMsalTokenProvider = new msalTokenProviderModule.MsalTokenProvider(configuration);
                }
                return _this._firstPartyMsalTokenProvider;
            }
            else {
                if (!_this._thirdPartyMsalTokenProvider) {
                    _this._thirdPartyMsalTokenProvider = new msalTokenProviderModule.MsalTokenProvider(configuration);
                }
                return _this._thirdPartyMsalTokenProvider;
            }
        });
    };
    DeferredAadTokenProvider.prototype._getImplicitTokenProvider = function (configuration) {
        var _this = this;
        return __webpack_require__.e(/*! import() | spoImplicit */ "spoImplicit").then(__webpack_require__.bind(null, /*! ../implicitTokenProvider/ImplicitFlowTokenProvider */ "onrO")).then(function (implicitTokenProviderModule) {
            if (_this._isFirstParty(configuration.servicePrincipalId)) {
                if (!_this._firstPartyImplicitTokenProvider) {
                    _this._firstPartyImplicitTokenProvider = new implicitTokenProviderModule.ImplicitFlowTokenProvider(configuration);
                }
                return _this._firstPartyImplicitTokenProvider;
            }
            else {
                if (!_this._thirdPartyImplicitTokenProvider) {
                    _this._thirdPartyImplicitTokenProvider = new implicitTokenProviderModule.ImplicitFlowTokenProvider(configuration);
                }
                return _this._thirdPartyImplicitTokenProvider;
            }
        });
    };
    DeferredAadTokenProvider.prototype._getOboTokenProvider = function (configuration, oboConfiguration) {
        var _this = this;
        return this._getAdalAuthContextManager(configuration).then(function (adalAuthContextManager) {
            if (!_this._thirdPartyOboTokenProvider) {
                _this._thirdPartyOboTokenProvider = adalAuthContextManager.getOboTokenProvider(configuration, oboConfiguration);
            }
            return _this._thirdPartyOboTokenProvider;
        });
    };
    DeferredAadTokenProvider.prototype._isFirstParty = function (clientId) {
        return clientId === _AadConstants__WEBPACK_IMPORTED_MODULE_3__["default"].PRE_AUTHORIZED_APP_PRINCIPAL_ID;
    };
    /**
     * Check for determining if the OBO Token Exchange API should be used in the current environment.
     */
    DeferredAadTokenProvider.prototype._shouldUseOboTokenExchange = function () {
        return !!this._oboConfiguration;
    };
    DeferredAadTokenProvider.msalTrialRunKillSwitchGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('fa0b23a7-7b4e-4fbe-b635-bbed397c3ef5');
    return DeferredAadTokenProvider;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.aadTokenProvider_none.js.map