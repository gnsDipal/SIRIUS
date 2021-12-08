(window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] = window["webpackJsonp_914330ee_2df2_4f6e_a858_30c23a812408_1_15_53"] || []).push([["vendors~live-persona-card-loader"],{

/***/ "+3tZ":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/ReactDeferredComponent.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return ReactDeferredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/hoist */ "ybkr");
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__);
// OneDrive:IgnoreCodeCoverage



/**
 * People can use this component as a wrapper to wrap their components that need to be delay loaded.
 * Then they put this component into their before glass code. It contains logic to delay load the real target
 * components and will render them accordingly.
 * This ReactDeferredComponent works for both AMD and common js/web pack code base.
 * Please check how do we defer loading EditNav in odsp-next/controls/leftNav/react/ReactLeftNav
 * and defer loading ContextualManu and GroupCard in SiteHeaderHost of sp-client/sp-pages
 *
 * @public
 *
 * @example
 * render() {
 *   let deferredComponentProps: IReactDeferredComponentProps = {
 *    modulePath: target_module_path,
 *    moduleLoader: implementation of IReactDeferredComponentModuleLoader,
 *    customWaiter: Promise<void>, // start defer loading component until this custom waiter promise is resolved.
 *    props: properties of the defer loaded component.
 *  };
 *  let deferredComponent = <ReactDeferredComponent { ...deferredComponentProps } />;
 *  return (
 *      <div>
 *          <before glass components>
 *          {deferredComponent}
 *      </div>
 *  );
 * }
 */
var ReactDeferredComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReactDeferredComponent, _super);
    function ReactDeferredComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._deferLoadComponent = function () {
            var ComponentModule = _this.state.ComponentModule;
            if (!ComponentModule && _this.props.moduleLoader && _this.props.modulePath) {
                _this.props.moduleLoader.load(_this.props.modulePath, _this.props.getModule).then(function (reactComp) {
                    if (_this.props.moduleLoader.parse) {
                        reactComp = _this.props.moduleLoader.parse(reactComp);
                    }
                    if (!reactComp) {
                        var error = "ReactDeferredComponent: component not found when loading " + _this.props.modulePath + " " +
                            '- check your load and parse functions';
                        console.error(error);
                    }
                    if (_this._mounted) {
                        _this.setState({ ComponentModule: reactComp });
                    }
                    else {
                        _this.state = {
                            ComponentModule: reactComp
                        };
                    }
                });
            }
        };
        _this._mounted = false;
        _this.state = {
            ComponentModule: undefined
        };
        _this._setupDeferLoadCallback(props);
        return _this;
    }
    ReactDeferredComponent.prototype.render = function () {
        var _this = this;
        var ComponentModule = this.state.ComponentModule;
        if (ComponentModule) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComponentModule, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: function (deferredComponentInstance) {
                    if (deferredComponentInstance) {
                        Object(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__["hoistMethods"])(_this, deferredComponentInstance);
                    }
                } }, this.props.props), this.props.children));
        }
        else {
            return this.props.placeHolder || null;
        }
    };
    ReactDeferredComponent.prototype.componentDidMount = function () {
        if (!this._mounted) {
            this._mounted = true;
        }
    };
    ReactDeferredComponent.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        this._setupDeferLoadCallback(newProps);
    };
    ReactDeferredComponent.prototype._setupDeferLoadCallback = function (props) {
        var customWaiter = props.customWaiter;
        if (customWaiter) {
            customWaiter.then(this._deferLoadComponent);
        }
        else {
            this._deferLoadComponent();
        }
    };
    return ReactDeferredComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ReactDeferredComponent.js.map

/***/ }),

/***/ "+o+5":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/SpLivePersonaCard.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: SpLivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpLivePersonaCard", function() { return SpLivePersonaCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LivePersonaCardAdapter */ "1kJI");






/**
 * @public
 */
var SpLivePersonaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SpLivePersonaCard, _super);
    function SpLivePersonaCard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            lpcCallbacks: SpLivePersonaCard.makeSpLpcCallbacks(undefined, _this.props.pageContext, _this.props.lpcCallbacks)
        };
        return _this;
    }
    SpLivePersonaCard.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_5__["LivePersonaCardAdapter"], { personaType: this.props.personaType, email: this.props.identifier, locationId: this.props.locationId, pageContext: this.props.pageContext, dataAutomationId: this.props.dataAutomationId, lpcCallbacks: this.state.lpcCallbacks, lpcHoverTargetProps: this.props.lpcHoverTargetProps, loggingData: this.props.loggingData, lpcCardBehavior: this.props.lpcCardBehavior, lpcHoverTargetV2Props: this.props.lpcHoverTargetV2Props, ariaLabel: this.props.ariaLabel, tabIndex: this.props.tabIndex, lpcClientType: this.props.lpcClientType }, this.props.children));
    };
    /**
     * Creates the SharePoint-specific callbacks to use with the LivePersonaCard control (via LivePersonaCardBootstrapper).
     * Because callbacks must be passed in at initialization, all SharePoint callback logic must be centralized here.
     * addGroupMembers is more complicated, requiring repo-specific logic, and thus must be passed in. We decided to use
     * default LPC group card add member behavior, which will redirect to Exchange, so no need to pass in addGroupMembersCallback
     * for LPC at this moment.
     *
     * @param addGroupMembersCallback: the repo-specific logic for this callback
     */
    SpLivePersonaCard.makeSpLpcCallbacks = function (addGroupMembersCallback, pageContext, lpcCallbacks) {
        // getPersonaPhotoUrl() has been deprecated and replaced by this callback
        var getAndPrefetchPersonaImageUriCallback = function (personaId, callback) {
            if (personaId.PersonaType === 'User' && personaId.Smtp) {
                callback(!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('5277c492-ecd6-441d-9734-42f956caa92d', '7/2/2020', 'Move user photo to private CDN')
                    ? Object(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_3__["getUserPhotoUrl"])(personaId.Smtp, 3 /* Large */)
                    : '/_layouts/15/userphoto.aspx?size=L&accountname=' + personaId.Smtp);
            }
            else {
                // have the LPC use its default fallback logic
                callback();
            }
        };
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (lpcCallbacks ? lpcCallbacks : {})), { getAndPrefetchPersonaImageUri: getAndPrefetchPersonaImageUriCallback, addGroupMembers: addGroupMembersCallback });
    };
    return SpLivePersonaCard;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=SpLivePersonaCard.js.map

/***/ }),

/***/ "0Dq7":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@o365groups/gmc-types@0.0.22/node_modules/@o365groups/gmc-types/lib/common/entities/GroupIdentityTypes.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: GroupIdentityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupIdentityType", function() { return GroupIdentityType; });
var GroupIdentityType;
(function (GroupIdentityType) {
    GroupIdentityType[GroupIdentityType["SmtpAddress"] = 0] = "SmtpAddress";
    GroupIdentityType[GroupIdentityType["ExternalDirectoryObjectId"] = 1] = "ExternalDirectoryObjectId";
})(GroupIdentityType || (GroupIdentityType = {}));
//# sourceMappingURL=GroupIdentityTypes.js.map

/***/ }),

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

/***/ "1kJI":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/LivePersonaCardAdapter.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: LivePersonaCardAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePersonaCardAdapter", function() { return LivePersonaCardAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LivePersonaCardAdapter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LivePersonaCardAdapter.scss */ "6MzZ");
/* harmony import */ var _msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @msfast/lpc-bootstrapper/dist/odsp/livepersonacardbootstrapper */ "Tdoi");
/* harmony import */ var _msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_datasources_lib_Loki__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Loki */ "UkJ3");
/* harmony import */ var office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Persona */ "UXmd");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _LivePersonaCardDataUpdate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LivePersonaCardDataUpdate */ "H8HH");










/**
 * Wraps the child element in an element that shows a live persona card.
 * Example:
 * <LivePersonaCardAdapter
    personaType={ 'User' }
    email={ this.props.userEmail }
    pageContext={ this.props.pageContext }>
      <UserName />
   </LivePersonaCardAdapter>
 *
 * @public
 */
var LivePersonaCardAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LivePersonaCardAdapter, _super);
    function LivePersonaCardAdapter(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.makeAdapterConfig = function () {
            var actionCallBacks = _this.props.lpcCallbacks || {};
            if (_this.props.addGroupMembersCallback) {
                actionCallBacks.addGroupMembers = _this.props.addGroupMembersCallback;
            }
            return {
                pageContext: _this.props.pageContext,
                actionCallBacks: actionCallBacks,
                dataCallBacks: _this.props.lpcCallbacks,
                clientType: _this.props.lpcClientType
            };
        };
        _this.state = { isReady: false };
        LivePersonaCardAdapter.ensureInitializeLPC(_this.makeAdapterConfig()).then(function () {
            _this.setState({ isReady: true });
        });
        return _this;
    }
    LivePersonaCardAdapter.prototype.render = function () {
        var _this = this;
        // LivePersonaCardHoverTarget V1 is deprecated, only use V1 if this.props.lpcHoverTargetProps provided.
        if (LivePersonaCardAdapter.LivePersonaCardHoverTargetV2 && !this.props.lpcHoverTargetProps) {
            var propsForHoverTarget = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (this.props.tabIndex && { tabIndex: this.props.tabIndex })), { cardParameters: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ personaInfo: {
                        identifiers: {
                            Smtp: this.props.email,
                            // In some hybrid tenants, users get successfully resolved only using UPN, not SMTP.
                            // Before all consumers of LivePersonaCardAdapter start providing a upn property, we fallback to email here.
                            Upn: this.props.upn || (this.props.personaType === 'User' ? this.props.email : undefined),
                            PersonaType: this.props.personaType,
                            LocationId: this.props.locationId
                        },
                        displayName: this.props.displayName,
                        personaCoinColor: Object(office_ui_fabric_react_lib_Persona__WEBPACK_IMPORTED_MODULE_5__["getPersonaInitialsColor"])({ text: this.props.displayName })
                    }, behavior: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.lpcCardBehavior), { onCardOpen: function () {
                            if (_this.props.loggingData) {
                                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["Engagement"].logData(_this.props.loggingData);
                            }
                            if (_this.props.lpcCardBehavior && _this.props.lpcCardBehavior.onCardOpen) {
                                _this.props.lpcCardBehavior.onCardOpen();
                            }
                        } }), externalAppSessionCorrelationId: this.props.pageContext.CorrelationId }, (this.props.ariaLabel && { ariaLabel: this.props.ariaLabel })) }), this.props.lpcHoverTargetV2Props);
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LivePersonaCardAdapter.LivePersonaCardHoverTargetV2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, propsForHoverTarget), this.props.children));
        }
        else if (LivePersonaCardAdapter.LivePersonaCardHoverTarget) {
            var propsForHoverTarget = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ upn: this.props.email, hostAppPersonaInfo: { PersonaType: this.props.personaType, LocationId: this.props.locationId }, externalAppSessionCorrelationId: this.props.pageContext.CorrelationId }, (this.props.tabIndex && { tabIndex: this.props.tabIndex })), (this.props.ariaLabel && { ariaLabel: this.props.ariaLabel })), this.props.lpcHoverTargetProps), { onCardOpen: function () {
                    if (_this.props.loggingData) {
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["Engagement"].logData(_this.props.loggingData);
                    }
                    if (_this.props.lpcHoverTargetProps && _this.props.lpcHoverTargetProps.onCardOpen) {
                        _this.props.lpcHoverTargetProps.onCardOpen();
                    }
                } });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LivePersonaCardAdapter.LivePersonaCardHoverTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, propsForHoverTarget), this.props.children));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'sp-livePersonaCardAdapter-root' }, this.props.children);
        }
    };
    LivePersonaCardAdapter.ensureInitializeLPC = function (adapterConfig) {
        // For various reasons, we might want to disable the LPC. If so, we'll short-circuit the initialization here.
        var pageContext = adapterConfig.pageContext;
        if (!pageContext.isSPO) {
            return Promise.reject('LPC is not supported on-prem.');
        }
        if (pageContext.isExternalGuestUser || pageContext.isAnonymousGuestUser) {
            return Promise.reject('LPC is not enabled for guest users.');
        }
        if (!_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_7__["default"].isFeatureEnabled({ ODB: 809, ODC: null, Fallback: false })) {
            // PeopleCardsReactComponent flight
            return Promise.reject('The global LPC flight is off for this configuration.');
        }
        // "0" is OFF, any other number is ON
        // Number type conversion due to inconsistent / misleading type in farmSettings object
        var isLpcEnabledInServiceConfig = Boolean(Number(pageContext.farmSettings.ExternalService_islivepersonacardenabled));
        if (!isLpcEnabledInServiceConfig) {
            return Promise.reject('LPC is disabled in this environment via SpoServiceConfig.');
        }
        if (window['LPC'] && window['LPC'].getRenderer) {
            LivePersonaCardAdapter.LivePersonaCardHoverTarget = window['LivePersonaCardHoverTarget'];
            LivePersonaCardAdapter.LivePersonaCardHoverTargetV2 = window['LivePersonaCardHoverTargetV2'];
            if (adapterConfig.callback) {
                adapterConfig.callback();
            }
            return Promise.resolve();
        }
        var loki = new _ms_odsp_datasources_lib_Loki__WEBPACK_IMPORTED_MODULE_4__["Loki"](adapterConfig.pageContext);
        var complianceEnvironment = 'Prod';
        if (adapterConfig.pageContext) {
            if (Object(_ms_odsp_datasources_lib_Loki__WEBPACK_IMPORTED_MODULE_4__["isBlackforestEnvironment"])(adapterConfig.pageContext)) {
                complianceEnvironment = 'Blackforest';
            }
            if (Object(_ms_odsp_datasources_lib_Loki__WEBPACK_IMPORTED_MODULE_4__["isGccModerateEnvironment"])(adapterConfig.pageContext)) {
                complianceEnvironment = 'GccModerate';
            }
        }
        var getAuthToken = loki.getAadAuthTokenGetter();
        var bootstrapperConfig = {
            culture: adapterConfig.pageContext.currentUICultureName,
            region: loki.getRegion(),
            clientType: adapterConfig.clientType || 'ODSP',
            clientContextType: 'Generic',
            clientCorrelationId: adapterConfig.pageContext.CorrelationId,
            logMessage: LivePersonaCardAdapter._logResult,
            getAuthToken: getAuthToken,
            actionCallbacks: adapterConfig.actionCallBacks,
            dataCallbacks: adapterConfig.dataCallBacks,
            complianceEnvironment: complianceEnvironment,
            isConsumer: false,
            dataUpdateBroadcaster: {
                setGroupMembersUpdateListener: _LivePersonaCardDataUpdate__WEBPACK_IMPORTED_MODULE_9__["setLpcGroupMembersDataUpdateListener"]
            },
            options: adapterConfig.bootstrapperConfigOptions
        };
        return Object(_msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper__WEBPACK_IMPORTED_MODULE_3__["initializeLivePersonaCardAsync"])(bootstrapperConfig)
            .then(function () {
            LivePersonaCardAdapter.LivePersonaCardHoverTarget = window['LivePersonaCardHoverTarget'];
            LivePersonaCardAdapter.LivePersonaCardHoverTargetV2 = window['LivePersonaCardHoverTargetV2'];
            if (adapterConfig.callback) {
                adapterConfig.callback();
            }
            if (adapterConfig.onSuccess) {
                adapterConfig.onSuccess();
            }
        })
            .catch(function (errorMessage) {
            if (true) {
                console.error('LivePersonaCardAdapter ensureInitialize error: ' + errorMessage);
            }
            if (adapterConfig.onFailure) {
                adapterConfig.onFailure(errorMessage);
            }
        });
    };
    /**
     * DEPRECATED, replaced by LivePersonaCardHoverTargetV2
     * LivePersonaCardHoverTarget React component.
     * Wraps the child element in and it will show a live persona card on hover/click.
     * @see https://msfast.visualstudio.com/FAST/_git/Midgard?path=%2Fpackages%2Flpc-core%2Fsrc%2FComponents%2FExportedComponents%2FLivePersonaCardHoverTarget.web.tsx
     * @example
     * <LivePersonaCardAdapter.LivePersonaCardHoverTarget
     *  {...ILivePersonaCardHoverTargetProps}
     * >
     *  <Persona />
     * </LivePersonaCardAdapter.LivePersonaCardHoverTarget>
     */
    LivePersonaCardAdapter.LivePersonaCardHoverTarget = undefined;
    /**
     * LivePersonaCardHoverTargetV2 React component.
     * Wraps the child element in and it will show a live persona card on hover/click.
     * @see https://msfast.visualstudio.com/FAST/_git/Midgard?path=%2Fpackages%2Flpc-core%2Fsrc%2FComponents%2FExportedComponents%2FLivePersonaCardHoverTargetV2.web.tsx
     * @example
     * <LivePersonaCardAdapter.LivePersonaCardHoverTargetV2
     *  {...ILivePersonaCardHoverTargetPropsV2}
     * >
     *  <Persona />
     * </LivePersonaCardAdapter.LivePersonaCardHoverTargetV2>
     */
    LivePersonaCardAdapter.LivePersonaCardHoverTargetV2 = undefined;
    LivePersonaCardAdapter._logResult = function (logType, logResultType, message) {
        if ( true && logResultType !== 'Success') {
            console.error('LivePersonaCardAdapter error - logtype: ' +
                logType +
                ', logResultType: ' +
                logResultType +
                ', message: ' +
                message);
        }
    };
    return LivePersonaCardAdapter;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));

//# sourceMappingURL=LivePersonaCardAdapter.js.map

/***/ }),

/***/ "5Txe":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: DeferredSpLivePersonaCard, wrapWithDeferredSpLivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSpLivePersonaCard", function() { return DeferredSpLivePersonaCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithDeferredSpLivePersonaCard", function() { return wrapWithDeferredSpLivePersonaCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeferredSpLivePersonaCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredSpLivePersonaCard.scss */ "jgiY");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReactDeferredComponent/index */ "afe6");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");






var DelayLoadLPC = { ODB: 1596 };
/**
 * Defer-loads SpLivePersonaCard, that's it.
 * @public
 */
var DeferredSpLivePersonaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredSpLivePersonaCard, _super);
    function DeferredSpLivePersonaCard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._onActivate = function () {
            var hovered = _this.state.hovered;
            if (!hovered) {
                _this.setState({
                    hovered: true
                });
            }
        };
        _this.modulePath = './SpLivePersonaCard';
        _this.moduleLoader = {
            load: function () {
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./SpLivePersonaCard */ "+o+5")).then(function (module) {
                    return module.SpLivePersonaCard;
                });
            }
        };
        _this.state = {
            hovered: !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(DelayLoadLPC) || props.forceLoad
        };
        return _this;
    }
    DeferredSpLivePersonaCard.prototype.render = function () {
        var hovered = this.state.hovered;
        // Need to ensure _deferredComponentProps get the current this.props before render.
        this._deferredComponentProps = {
            modulePath: this.modulePath,
            moduleLoader: this.moduleLoader,
            props: this.props,
            customWaiter: this.props.customWaiter,
            placeHolder: this.props.placeHolder
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onMouseOver: this._onActivate, onClick: this._onActivate, onFocus: this._onActivate, onMouseDown: this._onActivate, onKeyDown: this._onActivate, className: 'sp-deferredLivePersonaCard-root', tabIndex: -1 }, hovered ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._deferredComponentProps), this.props.children)) : (this.props.children)));
    };
    return DeferredSpLivePersonaCard;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

/**
 * @public
 */
function wrapWithDeferredSpLivePersonaCard(cardProps, childElement) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredSpLivePersonaCard, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cardProps), childElement);
}
//# sourceMappingURL=DeferredSpLivePersonaCard.js.map

/***/ }),

/***/ "6MzZ":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/LivePersonaCardAdapter.scss.js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".sp-livePersonaCardAdapter-root{display:inline-block}\n" }]);
//# sourceMappingURL=LivePersonaCardAdapter.scss.js.map

/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



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

/***/ "8w9x":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: LivePersonaCardAdapter, SpLivePersonaCard, DeferredSpLivePersonaCard, wrapWithDeferredSpLivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LivePersonaCardAdapter */ "1kJI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePersonaCardAdapter", function() { return _LivePersonaCardAdapter__WEBPACK_IMPORTED_MODULE_0__["LivePersonaCardAdapter"]; });

/* harmony import */ var _SpLivePersonaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpLivePersonaCard */ "+o+5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpLivePersonaCard", function() { return _SpLivePersonaCard__WEBPACK_IMPORTED_MODULE_1__["SpLivePersonaCard"]; });

/* harmony import */ var _DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredSpLivePersonaCard */ "5Txe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredSpLivePersonaCard", function() { return _DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_2__["DeferredSpLivePersonaCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapWithDeferredSpLivePersonaCard", function() { return _DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_2__["wrapWithDeferredSpLivePersonaCard"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "AfY0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataSource.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataRequestor */ "PayJ");
/* harmony import */ var _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetDataWithSyncClient */ "BPn7");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var NUCLEUS_PLUGIN_KILLSWITCH = '68FFDA86-24A1-4A87-A304-0B53C0058679';
// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_4__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) { return lib.getDataSyncClient(aadUserId, check); }; });
    }
    else {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(function (aadUserId) { return undefined; });
    }
})();
/* Use this as a base class for any generic data source */
/* For a data source that provides a list of items use the ItemDataSource */
var DataSource = /** @class */ (function () {
    function DataSource(params, dependencies) {
        var pageContext = (this._pageContext = dependencies.pageContext);
        var tokenProvider = dependencies.tokenProvider;
        var _a = dependencies.dataRequestorType, dataRequestorType = _a === void 0 ? /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1(params) {
                return _super.call(this, params, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ pageContext: pageContext, tokenProvider: tokenProvider }, (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')
                    ? {
                        dataSyncClient: _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(dataSyncClient),
                        getDataWithSyncClient: _GetDataWithSyncClient__WEBPACK_IMPORTED_MODULE_3__["getDataWithSyncClient"]
                    }
                    : {}))) || this;
            }
            return class_1;
        }(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["default"])) : _a, dataSyncClient = dependencies.dataSyncClient;
        var _b = params.dataSourceName, dataSourceName = _b === void 0 ? 'DataSource' : _b;
        this.dataSyncClient = dataSyncClient;
        this.dataRequestor = new dataRequestorType({
            qosName: dataSourceName
        });
    }
    /**
     * @deprecated Override `dataSourceName` when passing `params` in the constructor.
     */
    DataSource.prototype.getDataSourceName = function () {
        return this.dataSourceName;
    };
    /**
     * @deprecated Pass `needsRequestDigest` to `this.dataRequestor.getData()` when making API calls.
     */
    DataSource.prototype.needsRequestDigest = function (url) {
        return true;
    };
    /**
     *
     *
     * @protected
     * @template T The type of the data returned by the parseResponse callback param.
     * @param {() => string} getUrl Lambda that returns the URL to which the datasource should make
     *                              the request.
     * @param {(responseText: string, serverData: ServerData) => T} parseResponse Function that takes in the response.
     *
     * @param {string} qosName Named used to Qos Logging.
     * @param {() => string} getAdditionalPostData Lambda that returns the additional POST string blob.
     * @param {string} method Method used to make the request.
     * @param {{ [key: string]: string }} additionalHeaders Additional headers to send as part of the request.
     * @param {string} contentType defaults to application/json;odata=verbose.
     * @param {number} maxRetries Maximum number of times to retry the request, defaults to 0.
     * @param {boolean} noRedirect Optional, defaults to false. If true and user hits 403, will redirect to auth.
     * @param {boolean} crossSiteCollectionCall
     * @param {(errorData: IErrorData) => string} Optional override for qos error handler
     * @returns {Promise<T>}
     *
     * @deprecated Use `this.dataRequestor.getData()` instead to make API calls, as it supports better configurability of optional parameters.
     */
    DataSource.prototype.getData = function (getUrl, parseResponse, qosName, getAdditionalPostData, method, additionalHeaders, contentType, // defaults to application/json;odata=verbose
    maxRetries, noRedirect, crossSiteCollectionCall, telemetryHandler, qosExtraData, authToken) {
        // This method is purely to facilitate a call to `this.dataRequestor.getData()` using the deprecated call style.
        // Do not amend this function except to work toward removing usage of it.
        var _this = this;
        if (method === void 0) { method = 'POST'; }
        var url = getUrl();
        var additionalPostData = getAdditionalPostData && getAdditionalPostData();
        var needsRequestDigest = this.needsRequestDigest(url);
        if (!Object(_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["getKillSwitch"])(this._pageContext).isActivated(NUCLEUS_PLUGIN_KILLSWITCH, '11/5/2020', 'Factor Nucleus support into DataRequestor plugin')) {
            return this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: needsRequestDigest,
                authToken: authToken
            });
        }
        var serviceRequest = function () {
            return _this.dataRequestor.getData({
                url: url,
                parseResponse: parseResponse,
                qosName: qosName,
                additionalPostData: additionalPostData,
                method: method,
                additionalHeaders: additionalHeaders,
                contentType: contentType,
                maxRetries: maxRetries,
                noRedirect: noRedirect,
                crossSiteCollectionCall: crossSiteCollectionCall,
                telemetryHandler: telemetryHandler,
                qosExtraData: qosExtraData,
                needsRequestDigest: _this.needsRequestDigest(url),
                authToken: authToken
            });
        };
        if (!this._pageContext.aadUserId) {
            return serviceRequest();
        }
        var localRequest = function (dataSyncClient) {
            // We're using data sync. Construct a local version of the request,
            // then hand both the service and local request to the data sync
            // layer for execution.
            var syncTelemetryHandler = Object(_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
            var syncRequest = function (endpoint) {
                return _this.dataRequestor.getData({
                    url: endpoint.url,
                    authToken: endpoint.authToken,
                    parseResponse: parseResponse,
                    qosName: qosName,
                    additionalPostData: additionalPostData,
                    method: method,
                    additionalHeaders: additionalHeaders,
                    contentType: contentType,
                    maxRetries: maxRetries,
                    noRedirect: noRedirect,
                    crossSiteCollectionCall: crossSiteCollectionCall,
                    telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                    qosExtraData: qosExtraData,
                    needsRequestDigest: _this.needsRequestDigest(endpoint.url),
                    useExactAuthToken: true
                });
            };
            return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
        };
        if (this.dataSyncClient) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(localRequest(this.dataSyncClient));
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(getDataSyncClientImport).then(function (getter) {
                var client = getter(_this._pageContext.aadUserId);
                return client ? localRequest(client) : serviceRequest();
            });
        }
    };
    return DataSource;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataSource);
//# sourceMappingURL=DataSource.js.map

/***/ }),

/***/ "BPn7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/GetDataWithSyncClient.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getDataWithSyncClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataWithSyncClient", function() { return getDataWithSyncClient; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyncTelemetryHandler */ "lxGK");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/data-sync-nucleus/lib/DataSyncFlights */ "FdyI");




// Async load for nucleus sync, if the flight is available.
var getDataSyncClientImport = (function () {
    var check = function (f) { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_2__["default"].isFeatureEnabled(f); };
    if (Object(_ms_data_sync_nucleus_lib_DataSyncFlights__WEBPACK_IMPORTED_MODULE_3__["isDataSyncEnabled"])(check)) {
        return __webpack_require__.e(/*! import() | data-sync-nucleus */ "vendors~data-sync-nucleus").then(__webpack_require__.bind(null, /*! @ms/data-sync-nucleus/lib/DataSync */ "O/Ab")).then(function (lib) { return function (aadUserId) {
            return lib.getDataSyncClient(aadUserId, check);
        }; });
    }
    else {
        return Promise.resolve(function (aadUserId) { return undefined; });
    }
})();
function getDataWithSyncClient(params) {
    var _a = params.options, url = _a.url, authToken = _a.authToken, telemetryHandler = _a.telemetryHandler, useExactAuthToken = _a.useExactAuthToken, dataSyncClientOverride = params.dataSyncClient, aadUserId = params.aadUserId, getData = params.getData;
    var serviceRequest = function () {
        return getData({
            url: url,
            telemetryHandler: telemetryHandler,
            authToken: authToken,
            useExactAuthToken: useExactAuthToken
        });
    };
    if (!aadUserId) {
        return serviceRequest();
    }
    var localRequest = function (dataSyncClient) {
        // We're using data sync. Construct a local version of the request,
        // then hand both the service and local request to the data sync
        // layer for execution.
        var syncTelemetryHandler = Object(_SyncTelemetryHandler__WEBPACK_IMPORTED_MODULE_1__["getSyncTelemetryHandler"])(dataSyncClient, telemetryHandler);
        var syncRequest = function (endpoint) {
            return getData({
                url: endpoint.url,
                authToken: endpoint.authToken,
                telemetryHandler: function (input) { return syncTelemetryHandler(input, endpoint); },
                useExactAuthToken: true
            });
        };
        return dataSyncClient.getData({ url: url }, syncRequest, serviceRequest);
    };
    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(dataSyncClientOverride)
        .then(function (dataSyncClient) {
        // If there is a specified override, use it. Otherwise fall back to requesting one for the given user
        // from page context, if provided.
        return (dataSyncClient ||
            getDataSyncClientImport.then(function (getter) {
                return getter(aadUserId);
            }));
    })
        .then(function (dataSyncClient) {
        return dataSyncClient ? localRequest(dataSyncClient) : serviceRequest();
    });
}
//# sourceMappingURL=GetDataWithSyncClient.js.map

/***/ }),

/***/ "FdyI":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/DataSyncFlights.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DataSyncEntityType, NucleusPreviewEnabled, EnableNucleusListConflictsUX, isDataSyncEnabled, isSyncConflictsUxEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncEntityType", function() { return DataSyncEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusPreviewEnabled", function() { return NucleusPreviewEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableNucleusListConflictsUX", function() { return EnableNucleusListConflictsUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSyncEnabled", function() { return isDataSyncEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyncConflictsUxEnabled", function() { return isSyncConflictsUxEnabled; });
var DataSyncEntityType;
(function (DataSyncEntityType) {
    DataSyncEntityType["SharePointList"] = "SharePointList";
})(DataSyncEntityType || (DataSyncEntityType = {}));
var NucleusPreviewEnabled = {
    ODB: 1620
};
var EnableNucleusListConflictsUX = {
    ODB: 60063
};
/**
 * Checks whether data sync for the given entity type is enabled.
 * @param featureCheck A callback which allows async loaded data sync to
 * check feature overrides.
 */
function isDataSyncEnabled(featureCheck, entityType) {
    return (featureCheck(NucleusPreviewEnabled) &&
        // tslint:disable-next-line:no-string-literal
        ((window.localStorage && window.localStorage['NucleusPreviewEnabled'] === 'true') ||
            /[?&]enableNucleusPreview=true/.test(location.search)));
}
function isSyncConflictsUxEnabled(featureCheck) {
    return (isDataSyncEnabled(featureCheck, DataSyncEntityType.SharePointList) &&
        featureCheck(EnableNucleusListConflictsUX));
}
//# sourceMappingURL=DataSyncFlights.js.map

/***/ }),

/***/ "GlwB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/ISpPageContext.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaState, SearchBoxInNavBarType, TeamsChannelType, SearchScopeType, SPWebPropertyFlags2, DEFAULT_LOGO_URL, getServerUrl, getSafeWebServerRelativeUrl, isGroupWebContext, isRootWebContext, isTeamsRootWebContext, isModernTemplate, isHomePlusHubWithExtendedHeader, isHomePlusHub, isHomeSite, isAnonymousOrGuest, shouldLoadAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaState", function() { return SiteResourceQuotaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInNavBarType", function() { return SearchBoxInNavBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelType", function() { return TeamsChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeType", function() { return SearchScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPropertyFlags2", function() { return SPWebPropertyFlags2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOGO_URL", function() { return DEFAULT_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerUrl", function() { return getServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSafeWebServerRelativeUrl", function() { return getSafeWebServerRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupWebContext", function() { return isGroupWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRootWebContext", function() { return isRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamsRootWebContext", function() { return isTeamsRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernTemplate", function() { return isModernTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHubWithExtendedHeader", function() { return isHomePlusHubWithExtendedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHub", function() { return isHomePlusHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomeSite", function() { return isHomeSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousOrGuest", function() { return isAnonymousOrGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAppBar", function() { return shouldLoadAppBar; });
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chrome/ChromeOptions */ "Vb17");

/**
 *   A value indicating the state of the reqource quota for a site.
 */
var SiteResourceQuotaState;
(function (SiteResourceQuotaState) {
    /** No quota issues */
    SiteResourceQuotaState[SiteResourceQuotaState["NoWarning"] = 0] = "NoWarning";
    /** Close to reaching disk quota warning */
    SiteResourceQuotaState[SiteResourceQuotaState["Warning"] = 1] = "Warning";
    /** Over quota */
    SiteResourceQuotaState[SiteResourceQuotaState["OverQuota"] = 2] = "OverQuota";
})(SiteResourceQuotaState || (SiteResourceQuotaState = {}));
/**
 * Search box in nav bar
 */
var SearchBoxInNavBarType;
(function (SearchBoxInNavBarType) {
    /** Default behavior will be AllPages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Default"] = 0] = "Default";
    /** Display search box in nav bar for all pages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["AllPages"] = 1] = "AllPages";
    /** Display search box in nav bar for modern pages only */
    SearchBoxInNavBarType[SearchBoxInNavBarType["ModernOnly"] = 2] = "ModernOnly";
    /** Do not display search box in nav bar */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Hidden"] = 3] = "Hidden";
})(SearchBoxInNavBarType || (SearchBoxInNavBarType = {}));
/** The possible types of a Teams Channel. */
var TeamsChannelType;
(function (TeamsChannelType) {
    /** This is not a site backing a teams channel */
    TeamsChannelType[TeamsChannelType["None"] = 0] = "None";
    /** Site is backing a Private Channel */
    TeamsChannelType[TeamsChannelType["PrivateChannel"] = 1] = "PrivateChannel";
    /** Site is backing a Shared Channel */
    TeamsChannelType[TeamsChannelType["SharedChannel"] = 2] = "SharedChannel";
    /** Site is backing a Standard Channel */
    TeamsChannelType[TeamsChannelType["StandardChannel"] = 3] = "StandardChannel";
})(TeamsChannelType || (TeamsChannelType = {}));
/**
 * Search box search scope
 * When the value is Default, it follows the existing search scope rule.
 * For example, hub site has hub scope, non-hub site has site scope.
 */
var SearchScopeType;
(function (SearchScopeType) {
    SearchScopeType[SearchScopeType["Default"] = 0] = "Default";
    SearchScopeType[SearchScopeType["Tenant"] = 1] = "Tenant";
    SearchScopeType[SearchScopeType["Hub"] = 2] = "Hub";
    SearchScopeType[SearchScopeType["Site"] = 3] = "Site";
})(SearchScopeType || (SearchScopeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
    /** Indicates which emphasis is assigned to the footer when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis0"] = 256] = "FooterEmphasis0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis1"] = 512] = "FooterEmphasis1";
    /** Indicates which footer layout type is selected when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout0"] = 1024] = "FooterLayout0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout1"] = 2048] = "FooterLayout1";
    SPWebPropertyFlags2[SPWebPropertyFlags2["HideTitleInHeader"] = 33554432] = "HideTitleInHeader";
})(SPWebPropertyFlags2 || (SPWebPropertyFlags2 = {}));
/** Default site logo URL */
var DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current web is the root web.
 * Otherwise it returns false.
 */
function isRootWebContext(pageContext) {
    'use strict';
    return pageContext && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current Web is the Root Web of a Teams-connected SPSite.
 * Otherwise it returns false.
 */
function isTeamsRootWebContext(pageContext) {
    'use strict';
    return (pageContext &&
        isRootWebContext(pageContext) &&
        pageContext.groupId &&
        pageContext.isTeamsConnectedSite &&
        !pageContext.isTeamsChannelSite);
}
/**
 * Returns true if the current web templates is one of the modern templates:
 * STS#3, GROUP#0, SITEPAGEPUBLISHING#0, TEAMSCHANNEL#0/1.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = [
        'STS#3',
        'GROUP#0',
        'SITEPAGEPUBLISHING#0',
        'TEAMSCHANNEL#0',
        'TEAMSCHANNEL#1'
    ];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 *     3. with extended header layout
 * @param spPageContext page context instance
 */
function isHomePlusHubWithExtendedHeader(spPageContext) {
    return !!(spPageContext.headerLayout === _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"].extended && isHomePlusHub(spPageContext));
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 */
function isHomePlusHub(spPageContext) {
    return !!(isHomeSite(spPageContext) && spPageContext.isHubSite);
}
/**
 * Helper function to check if current site is configured as a home site
 * @param spPageContext page context instance
 */
function isHomeSite(spPageContext) {
    return !!(spPageContext.companyPortalReference &&
        spPageContext.companyPortalReference.SiteId &&
        spPageContext.siteId &&
        spPageContext.siteId.indexOf(spPageContext.companyPortalReference.SiteId) >= 0);
}
/**
 * Helper function to check if the current user is anonymous or a guest of any kind.
 */
function isAnonymousOrGuest(spPageContext) {
    return !!(spPageContext.isAnonymousGuestUser ||
        spPageContext.isExternalGuestUser ||
        spPageContext.isEmailAuthenticationGuestUser ||
        spPageContext.isNativeFederatedUser);
}
/**
 * Helper function to check if the app bar should load or not in the current context.
 */
function shouldLoadAppBar(spPageContext) {
    return (!isAnonymousOrGuest(spPageContext) && spPageContext.appBarParams && !spPageContext.appBarParams.isDisabled);
}
//# sourceMappingURL=ISpPageContext.js.map

/***/ }),

/***/ "H8HH":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/LivePersonaCardDataUpdate.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: setLpcGroupMembersDataUpdateListener, lpcUpdateGroupMembersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLpcGroupMembersDataUpdateListener", function() { return setLpcGroupMembersDataUpdateListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lpcUpdateGroupMembersData", function() { return lpcUpdateGroupMembersData; });
/* harmony import */ var _o365groups_gmc_bootstrapper_lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @o365groups/gmc-bootstrapper/lib/types */ "I8JU");

var lpcGroupMembersUpdateListener;
var setLpcGroupMembersDataUpdateListener = function (listener) {
    lpcGroupMembersUpdateListener = listener;
};
var lpcUpdateGroupMembersData = function (groupIdentity) {
    if (lpcGroupMembersUpdateListener) {
        var groupSmtp = void 0;
        var groupId = void 0;
        if (groupIdentity && groupIdentity.Type === _o365groups_gmc_bootstrapper_lib_types__WEBPACK_IMPORTED_MODULE_0__["GroupIdentityType"].ExternalDirectoryObjectId) {
            groupId = groupIdentity.Value;
        }
        else if (groupIdentity && groupIdentity.Type === _o365groups_gmc_bootstrapper_lib_types__WEBPACK_IMPORTED_MODULE_0__["GroupIdentityType"].SmtpAddress) {
            groupSmtp = groupIdentity.Value;
        }
        lpcGroupMembersUpdateListener({
            Smtp: groupSmtp,
            AadObjectId: groupId,
            PersonaType: 'Group',
            OlsPersonaId: ''
        });
    }
};
//# sourceMappingURL=LivePersonaCardDataUpdate.js.map

/***/ }),

/***/ "I8JU":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@o365groups/gmc-bootstrapper@0.1.20/node_modules/@o365groups/gmc-bootstrapper/lib/types.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: GroupIdentityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _o365groups_gmc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @o365groups/gmc-types */ "uSBM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupIdentityType", function() { return _o365groups_gmc_types__WEBPACK_IMPORTED_MODULE_0__["GroupIdentityType"]; });




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

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataRequestor"]; });

// Loading @ms/odsp-datasources/./lib/dataSources/base/DataRequestor.js



/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


/***/ }),

/***/ "Tdoi":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@msfast/lpc-bootstrapper@20190419.4.0/node_modules/@msfast/lpc-bootstrapper/dist/odsp/livepersonacardbootstrapper.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)o=i[s],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({1:"vendors~aria-webjs-sdk"}[e]||e)+"_"+{1:"719a99c981d8afec1ebf"}[e]+".js"}(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://lpcres.delve.office.com/lpc/versionless/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp_msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper=window.webpackJsonp_msfast_lpc_bootstrapper_dist_odsp_livepersonacardbootstrapper||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;return o(o.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},i=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},a=function(){function e(e){this.bootstrapperConfig=e,this.loggers=new Map}return e.getOrCreate=function(t){return r||(r=new e(t)),r},e.prototype.logEventAsync=function(e,t){return o(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,this.getLoggerAsync(t)];case 1:return n.sent().logEvent(e),[4,this.getLogManagerAsync()];case 2:return n.sent().flush(this.noOp),[3,4];case 3:return n.sent(),console.log("Live Persona Card ERROR: Failed to log an event to Aria"),[3,4];case 4:return[2]}})})},e.prototype.updateContextWithLokiDataAsync=function(e,t){return o(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.getLoggerAsync(t)];case 1:return(n=r.sent()).setContext("LokiUrl",e.LokiUrl),n.setContext("tenantAadObjectId",e.TenantAadObjectId),n.setContext("userAadObjectId",e.UserAadObjectId),n.setContext("userPuid",e.UserPuid),[3,3];case 2:throw r.sent(),new Error("Live Persona Card ERROR: Failed to update Aria's context");case 3:return[2]}})})},e.prototype.getLoggerAsync=function(e){return o(this,void 0,void 0,function(){var t,n,r;return i(this,function(o){switch(o.label){case 0:return(t=this.loggers.get(e))?[3,4]:[4,this.getLogManagerAsync()];case 1:return n=o.sent(),r=void 0,"Blackforest"!==this.bootstrapperConfig.complianceEnvironment?[3,3]:[4,this.getCollectorUrlGermanyAsync()];case 2:r=o.sent(),o.label=3;case 3:(t=n.initialize(e,{collectorUri:r}))||(t=n.getLogger(e)),this.loggers.set(e,t),t.setContext("culture",this.bootstrapperConfig.culture),t.setContext("region",this.bootstrapperConfig.region),t.setContext("clientType",this.bootstrapperConfig.clientType),t.setContext("clientContextType",this.bootstrapperConfig.clientContextType),t.setContext("clientCorrelationId",this.bootstrapperConfig.clientCorrelationId),t.setContext("bootstrapperVersion","1.20190419.4.0"),o.label=4;case 4:return[2,t]}})})},e.prototype.getLogManagerAsync=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,n.e(1).then(n.t.bind(null,30,7))];case 1:return[2,e.sent().AWTLogManager]}})})},e.prototype.getCollectorUrlGermanyAsync=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,n.e(1).then(n.t.bind(null,30,7))];case 1:return[2,e.sent().AWT_COLLECTOR_URL_GERMANY]}})})},e.prototype.noOp=function(){},e}(),s=function(){return function(e,t,n,r,o){this.name=e,this.message=t,this.rootCorrelationId=n,this.statusCode=r,this.numberOfRetries=o}}();function u(e,t){try{sessionStorage&&sessionStorage.setItem&&sessionStorage.setItem(e,t)}catch(e){}}var c="LokiAuthToken";function l(e,t){return new Promise(function(n,r){e?(u(c,e),n(e)):t(function(e,t){e?(u(c,e),n(e)):r(new s("GetAuthTokenError","Auth token is undefined",t))},function(e,t){r(new s("GetAuthTokenError",e,t))})})}var f="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function d(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":window.decodeURIComponent(t[1].replace(/\+/g," "))}var p=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},h=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},g="https://{0}.loki.delve.office.com/api/v1/configuration/{1}/{2}",v="https://loki.delve.office.de/api/v1/configuration/{0}/{1}",m="https://loki.delve-gcc.office.com/api/v1/configuration/{0}/{1}",y="https://loki.delve.office.com/api/v1/configuration/{0}/{1}",w=6e4,b="LivePersonaCardVersionOverride",C="LivePersonaCardCultureOverride",k="MidgardVersion",x="MidgardBranch",L=2,T=0;function A(e,t){return p(this,void 0,void 0,function(){var n,r;return h(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,8]),[4,O(e,t)];case 1:return n=o.sent(),[3,8];case 2:return(r=o.sent()).statusCode&&401===r.statusCode?[4,l(void 0,t.getAuthToken)]:[3,4];case 3:e=o.sent(),o.label=4;case 4:return T<L?(T++,[4,A(e,t)]):[3,6];case 5:return n=o.sent(),[3,7];case 6:throw r.numberOfRetries=T,r;case 7:return[3,8];case 8:return[2,n]}})})}function O(e,t){return new Promise(function(n,r){var o=new XMLHttpRequest,i=function(e){var t=d(C),n=t||e.culture;if("ppe"===e.region||"df"===e.region||"msit"===e.region)return g.replace("{0}",e.region).replace("{1}",e.clientType).replace("{2}",n);if("Blackforest"===e.complianceEnvironment)return v.replace("{0}",e.clientType).replace("{1}",n);if("GccModerate"===e.complianceEnvironment)return m.replace("{0}",e.clientType).replace("{1}",n);return y.replace("{0}",e.clientType).replace("{1}",n)}(t);o.open("GET",i,!0),o.setRequestHeader("authToken",e),o.setRequestHeader("Accept","application/json");var a=f.replace(/[xy]/g,function(e){var t;if(window.crypto){var n=new Uint8Array(1);window.crypto.getRandomValues(n),t=n[0]}else t=Math.floor(16*Math.random());return("x"===e?t%16:t%4+8).toString(16)});o.setRequestHeader("X-RootCorrelationId",a),o.setRequestHeader("X-CorrelationId",a),o.setRequestHeader("X-ClientCorrelationId",t.clientCorrelationId),o.setRequestHeader("X-ClientType",t.clientType);var u=d(k)||d(b);u&&o.setRequestHeader(b,u);var c=d(x);c&&o.setRequestHeader(x,c),o.addEventListener("load",function(){if(200===o.status)try{var e=JSON.parse(o.response);e.RootCorrelationId=a,e.LokiVersion=o.getResponseHeader("x-serverversion")||"",n(e)}catch(e){r(new s("GetLokiConfigError","Failed to parse initialization config.",a))}else r(new s("GetLokiConfigError","Couldn't retrieve initialization config. Status code is "+o.status,a,o.status))}),o.addEventListener("error",function(){r(new s("GetLokiConfigError","Couldn't retrieve initialization config, request failed to complete.",a))}),o.addEventListener("timeout",function(){r(new s("GetLokiConfigError","Loki config request timed out after "+w+" ms.",a))}),o.timeout=w,o.send()})}var S=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},E=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},P=2,F=0;function R(e){return S(this,void 0,void 0,function(){var t;return E(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,6]),[4,I(e)];case 1:return n.sent(),[3,6];case 2:return t=n.sent(),F<P?(F++,[4,R(e)]):[3,4];case 3:return n.sent(),[3,5];case 4:throw t.numberOfRetries=F,t;case 5:return[3,6];case 6:return[2]}})})}function I(e){return new Promise(function(t,n){var r=document.createElement("script");r.type="text/javascript",r.crossOrigin="anonymous",r.src=e,r.addEventListener("load",function(){t()}),r.addEventListener("error",function(){n(new s("LoadScriptError","Unexpected error while loading script on page."))}),document.body.appendChild(r)})}var _="livepersonacard_full",j="livepersonacard_global",B="livepersonacardstrings";var D="officefeed_feed",G="officefeedstrings";function M(e,t){return new Promise(function(n,r){setTimeout(function(){try{window.LPC||r(new s("StartLivePersonaCardError","window.LPC is undefined.")),window.LivePersonaCardStrings&&window.LivePersonaCardStrings.strings||r(new s("StartLivePersonaCardError","window.LivePersonaCardStrings is undefined."));var o=function(e,t){return{refreshAuthToken:U(t),logToExternalApplication:t.logMessage,contextType:t.clientContextType,strings:window.LivePersonaCardStrings.strings,source:t.clientType,consumerCorrelationId:t.clientCorrelationId,activeFlights:e.Flights,isDebug:!1,culture:t.culture,dataCallbacks:t.dataCallbacks,actionCallbacks:t.actionCallbacks,dataUpdateBroadcaster:t.dataUpdateBroadcaster,privateDataCallbacks:t.privateDataCallbacks,options:t.options?t.options:{isLinkedInIntegrationEnabled:!1,hideDocumentFilter:!1},lokiUrl:e.LokiUrl,lokiVersion:e.LokiVersion,tenantAadObjectId:e.TenantAadObjectId,userAadObjectId:e.UserAadObjectId,userPuid:e.UserPuid,ecsConfigIds:e.EcsConfigIds,ecsETag:e.EcsEtag,loggedInUserUpn:e.Upn,complianceEnvironment:t.complianceEnvironment,userDisplayName:e.UserDisplayName}}(e,t);window.LPC.start(o),n()}catch(e){r(new s("StartLivePersonaCardError",e.name+" "+e.message))}},0)})}function U(e){return function(t){e.getAuthToken(function(e,n){t(e,"",n)},function(e,n){t("",e,n)})}}var q,z=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},H=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function V(e,t){return z(this,void 0,void 0,function(){var n;return H(this,function(r){switch(r.label){case 0:return[4,(o=0,new Promise(function(e){return window.setTimeout(e,o)}))];case 1:r.sent();try{if(!window.OfficeFeed)throw new s("StartOfficeFeedError","window.OfficeFeed is undefined.");if(!window.OfficeFeedStrings||!window.OfficeFeedStrings.strings)throw new s("StartOfficeFeedError","window.OfficeFeedStrings is undefined.");return n=function(e,t){return{accountUpn:e.Upn,getLokiToken:W(t),options:t.options,hostAppActions:t.hostAppActions,strings:window.OfficeFeedStrings.strings}}(e,t),[2,window.OfficeFeed.start(n)]}catch(e){throw new s("StartOfficeFeedError",e.name+" "+e.message)}return[2]}var o})})}function W(e){return function(t){return new Promise(function(t,n){e.getAuthToken(function(e,n){t(e)},function(e,t){n("Error getting auth token: "+e+" (authRequestCorrelationId: "+t+")")})})}}!function(e){e.getAuthToken="GetAuthTokenDuration",e.getAuthTokenFromStart="GetAuthTokenFromStartDuration",e.getLokiConfig="GetLokiConfigDuration",e.getLokiConfigFromStart="GetLokiConfigFromStartDuration",e.getLpcBundles="GetLpcBundlesDuration",e.getLpcBundlesFromStart="GetLpcBundlesFromStartDuration",e.startLpc="StartLpcDuration",e.startLpcFromStart="StartLpcFromStartDuration",e.getOfficeFeedBundles="GetOfficeFeedBundlesFromStartDuration"}(q||(q={}));var N=function(){function e(){this.start=this.getCurrentTime(),this.timings={}}return e.prototype.measureFromStart=function(e){this.timings[e]=Math.round(this.getCurrentTime()-this.start)},e.prototype.startCustomTiming=function(e){try{window.performance.mark(e+"-start")}catch(e){}},e.prototype.endCustomTiming=function(e){try{window.performance.mark(e+"-end"),window.performance.measure(e,e+"-start",e+"-end");var t=window.performance.getEntriesByName(e)[0];this.timings[e]=Math.round(t.duration)}catch(e){}},e.prototype.getAllTimings=function(){var e=this;try{var t=window.performance.getEntriesByType("resource");t&&t.forEach(function(t){if(t&&t.name){var n=t.name.toLowerCase(),r=!1;-1!==n.indexOf("authtoken/loki")?(n="AuthRequestDuration",r=!0):-1!==n.indexOf("service.svc?action=getclientaccesstoken&ep=1&app=mail")?(n="AuthRequestDuration",r=!0):-1!==n.indexOf("/lpc/versionless/livepersonacard_")?(n="LpcBundleRequestDuration",r=!0):-1!==n.indexOf("/lpc/versionless/livepersonacardstrings")?(n="LpcStringsRequestDuration",r=!0):-1!==n.indexOf("/api/v1/configuration/")&&(n="InitConfigRequestDuration",r=!0),r&&(e.timings[n]=Math.round(t.duration))}})}catch(e){}return this.timings},e.prototype.getCurrentTime=function(){return window.performance&&"function"==typeof window.performance.now?performance.now():Date.now()},e}();function X(e){return void 0===e||"string"!=typeof e||""===e||null===e}function J(e){return void 0===e||"function"!=typeof e}var Y=["msit","df","ppe"],K=["Prod","Blackforest","GccModerate"];function Q(e){var t="";if(e){var n=[];X(e.culture)&&n.push("culture"),X(e.clientType)&&n.push("clientType"),X(e.clientContextType)&&n.push("clientContextType"),X(e.clientCorrelationId)&&n.push("clientCorrelationId"),J(e.logMessage)&&n.push("logMessage"),J(e.getAuthToken)&&n.push("getAuthToken"),n.length>0&&(t="Invalid required parameter(s): "+n.join(", ")+". Check the values and types you're passing. "),e.region&&-1===Y.indexOf(e.region.toLowerCase().trim())&&(t+="Invalid region value. Allowed values are: empty string for production environments, and "+Y.join(", ")+" for pre-production environments. "),-1===K.indexOf(e.complianceEnvironment)&&(t+="Environment is missing or wrong. Allowed values are: "+K.join(", ")+". We currently don't support other Sovereign Clouds.")}else t="Config must be defined.";if(t)throw new s("ValidateBootstrapperConfigError",t)}n.d(t,"initializeLivePersonaCardAsync",function(){return ae}),n.d(t,"initializeOfficeFeedAsync",function(){return ue}),n.d(t,"fetchLokiConfigAsync",function(){return ce});var Z,$,ee=function(){return(ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},te=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},ne=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},re=!1,oe=3e5,ie="e5ad760145754ffc9704e67c800087f2-dc72ff20-3e8a-401a-b9a8-ec72e4dd3e22-7257";function ae(e){return te(this,void 0,void 0,function(){var t,n,r=this;return ne(this,function(o){return!re&&Z?[2,Z]:(t=new N,n=a.getOrCreate(e),re=!1,(Z=new Promise(function(o,i){return te(r,void 0,void 0,function(){var r,a,s,u,c;return ne(this,function(f){switch(f.label){case 0:return f.trys.push([0,9,,10]),Q(e),t.startCustomTiming(q.getAuthToken),[4,l(e.authToken,e.getAuthToken)];case 1:return r=f.sent(),t.endCustomTiming(q.getAuthToken),t.measureFromStart(q.getAuthTokenFromStart),t.startCustomTiming(q.getLokiConfig),[4,A(r,e)];case 2:return a=f.sent(),t.endCustomTiming(q.getLokiConfig),t.measureFromStart(q.getLokiConfigFromStart),t.startCustomTiming(q.getLpcBundles),e.scriptsInsertedByHostPromise?[4,e.scriptsInsertedByHostPromise]:[3,4];case 3:return f.sent(),[3,6];case 4:return[4,(d=a,h=d.Resources[B],p="OwaPeopleHub"===d.Workload?d.Resources[j]:d.Resources[_],Promise.all([R(h),R(p)]))];case 5:f.sent(),f.label=6;case 6:return t.endCustomTiming(q.getLpcBundles),t.measureFromStart(q.getLpcBundlesFromStart),t.startCustomTiming(q.startLpc),[4,M(a,e)];case 7:return f.sent(),t.endCustomTiming(q.startLpc),t.measureFromStart(q.startLpcFromStart),[4,n.updateContextWithLokiDataAsync(a,ie).catch(function(){console.log("Live Persona Card ERROR: Bootstrapper failed to initialize Aria, continuing without.")})];case 8:return f.sent(),(s=le(t.getAllTimings())).RootCorrelationId=a.RootCorrelationId,s.isConsumer=e.isConsumer,n.logEventAsync({name:"initializeLivePersonaCard_success",properties:s},ie),o(),[3,10];case 9:return u=f.sent(),c=le(t.getAllTimings()),n.logEventAsync({name:"initializeLivePersonaCard_failure",properties:ee({},fe(u),c,{isConsumer:e.isConsumer})},ie),i("Failed to initialize Live Persona Card: "+u.name+" "+u.message),[3,10];case 10:return[2]}var d,p,h})})})).catch(function(){setTimeout(function(){re=!0},oe)}),[2,Z])})})}var se=!1;function ue(e){return te(this,void 0,void 0,function(){var t,n,r=this;return ne(this,function(o){return!se&&$?[2,$]:(t=new N,n=a.getOrCreate(e),se=!1,($=new Promise(function(o,i){return te(r,void 0,void 0,function(){var r,a,s,u,c,f;return ne(this,function(d){switch(d.label){case 0:return d.trys.push([0,6,,7]),Q(e),[4,l(e.authToken,e.getAuthToken)];case 1:return r=d.sent(),t.measureFromStart(q.getAuthTokenFromStart),[4,A(r,e)];case 2:return a=d.sent(),t.measureFromStart(q.getLokiConfigFromStart),[4,(p=a,h=p.Resources[G],g=p.Resources[D],Promise.all([R(h),R(g)]))];case 3:return d.sent(),t.measureFromStart(q.getOfficeFeedBundles),[4,V(a,e)];case 4:return s=d.sent(),[4,n.updateContextWithLokiDataAsync(a,ie).catch(function(){console.log("Office Feed ERROR: Bootstrapper failed to initialize Aria, continuing without.")})];case 5:return d.sent(),(u=le(t.getAllTimings())).RootCorrelationId=a.RootCorrelationId,n.logEventAsync({name:"initializeOfficeFeed_success",properties:u},ie),o(s),[3,7];case 6:return c=d.sent(),f=le(t.getAllTimings()),n.logEventAsync({name:"initializeOfficeFeed_failure",properties:ee({},fe(c),f)},ie),i("Failed to initialize Office Feed: "+c.name),[3,7];case 7:return[2]}var p,h,g})})})).catch(function(){setTimeout(function(){se=!0},oe)}),[2,$])})})}function ce(e){return te(this,void 0,void 0,function(){return ne(this,function(t){switch(t.label){case 0:return[4,l(e.authToken,e.getAuthToken)];case 1:return[2,A(t.sent(),e)]}})})}function le(e){var t={};return Object.keys(e).forEach(function(n){t["Perf_"+n]=e[n].toString()}),t}function fe(e){return{ErrorType:e.name,ErrorMessage:e.message||"",RootCorrelationId:e.rootCorrelationId||"",IsClientOnline:navigator&&void 0!==typeof navigator.onLine?navigator.onLine:""}}}])}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "UXmd":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Persona.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Persona.js


/***/ }),

/***/ "UkJ3":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Loki.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: Loki, isBlackforestEnvironment, isGccModerateEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_loki_Loki__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/loki/Loki */ "wgfU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loki", function() { return _dataSources_loki_Loki__WEBPACK_IMPORTED_MODULE_0__["Loki"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlackforestEnvironment", function() { return _dataSources_loki_Loki__WEBPACK_IMPORTED_MODULE_0__["isBlackforestEnvironment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isGccModerateEnvironment", function() { return _dataSources_loki_Loki__WEBPACK_IMPORTED_MODULE_0__["isGccModerateEnvironment"]; });

// Loki datasource (for LivePersonaCard)

//# sourceMappingURL=Loki.js.map

/***/ }),

/***/ "Vb17":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/chrome/ChromeOptions.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return ChromeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return NavPlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return HeaderLayoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return UnifiedHeaderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return LogoAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return FooterLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return FooterEmphasis; });
/**
 * Types of supported chrome controls
 */
var ChromeControlType;
(function (ChromeControlType) {
    ChromeControlType[ChromeControlType["HEADER"] = 0] = "HEADER";
    ChromeControlType[ChromeControlType["NAV"] = 1] = "NAV";
    ChromeControlType[ChromeControlType["FOOTER"] = 2] = "FOOTER";
    ChromeControlType[ChromeControlType["SEARCHBOX"] = 3] = "SEARCHBOX";
})(ChromeControlType || (ChromeControlType = {}));
var NavPlacementType;
(function (NavPlacementType) {
    NavPlacementType[NavPlacementType["LEFT"] = 0] = "LEFT";
    NavPlacementType[NavPlacementType["HORIZONTAL"] = 1] = "HORIZONTAL";
})(NavPlacementType || (NavPlacementType = {}));
/**
 * @deprecated see UnifiedHeaderLayout
 * Defines supported layout type for composite header control.
 * Currently the layout type is indicated from nav placement.
 */
var HeaderLayoutType;
(function (HeaderLayoutType) {
    /** Composite header control takes full width of the page */
    HeaderLayoutType[HeaderLayoutType["FULLBLEED"] = 0] = "FULLBLEED";
    /** Composite header control is placed on a page with left nav */
    HeaderLayoutType[HeaderLayoutType["WITHLEFTNAV"] = 1] = "WITHLEFTNAV";
})(HeaderLayoutType || (HeaderLayoutType = {}));
/** The layout to use for the new UnifiedHeader, which replaces the old headers. */
var UnifiedHeaderLayout;
(function (UnifiedHeaderLayout) {
    /** @deprecated none, don't use the UnifiedHeader and fall back to the old headers */
    UnifiedHeaderLayout[UnifiedHeaderLayout["none"] = 0] = "none";
    /** Large */
    UnifiedHeaderLayout[UnifiedHeaderLayout["standard"] = 1] = "standard";
    /** Medium */
    UnifiedHeaderLayout[UnifiedHeaderLayout["compact"] = 2] = "compact";
    /** @deprecated not currently supported */
    UnifiedHeaderLayout[UnifiedHeaderLayout["minimal"] = 3] = "minimal";
    /** Extended */
    UnifiedHeaderLayout[UnifiedHeaderLayout["extended"] = 4] = "extended";
})(UnifiedHeaderLayout || (UnifiedHeaderLayout = {}));
/** Logo alignment of extended header layout */
var LogoAlignment;
(function (LogoAlignment) {
    LogoAlignment[LogoAlignment["left"] = 0] = "left";
    LogoAlignment[LogoAlignment["middle"] = 1] = "middle";
    LogoAlignment[LogoAlignment["right"] = 2] = "right";
})(LogoAlignment || (LogoAlignment = {}));
/**
 * The layout to use for the footer
 */
var FooterLayout;
(function (FooterLayout) {
    FooterLayout[FooterLayout["SIMPLE"] = 0] = "SIMPLE";
    FooterLayout[FooterLayout["EXTENDED"] = 1] = "EXTENDED";
    FooterLayout[FooterLayout["STACKED"] = 2] = "STACKED";
})(FooterLayout || (FooterLayout = {}));
/**
 * The emphasis to use in the footer.
 * Note that this is different than the enum ordering that fabric uses, in order
 * to have strong be the default for unset variants in the property flags
 */
var FooterEmphasis;
(function (FooterEmphasis) {
    FooterEmphasis[FooterEmphasis["Strong"] = 0] = "Strong";
    FooterEmphasis[FooterEmphasis["Neutral"] = 1] = "Neutral";
    FooterEmphasis[FooterEmphasis["Soft"] = 2] = "Soft";
    FooterEmphasis[FooterEmphasis["None"] = 3] = "None";
})(FooterEmphasis || (FooterEmphasis = {}));
//# sourceMappingURL=ChromeOptions.js.map

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

/***/ "afe6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactDeferredComponent */ "+3tZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__["ReactDeferredComponent"]; });


//# sourceMappingURL=index.js.map

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


/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "cDPE":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Engagement.event.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Engagement"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Engagement.event.js



/***/ }),

/***/ "eT67":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/Qos.event.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/telemetry-manager/./lib/events/Qos.event.js



/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



/***/ }),

/***/ "jgiY":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.scss.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".sp-deferredLivePersonaCard-root{display:inline-block}\n" }]);
//# sourceMappingURL=DeferredSpLivePersonaCard.scss.js.map

/***/ }),

/***/ "lxGK":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/SyncTelemetryHandler.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: getSyncTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyncTelemetryHandler", function() { return getSyncTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");


function getSyncTelemetryHandler(dataSyncClient, telemetryHandler) {
    return function (input, endpoint) {
        var eventData = input.eventData;
        var extraData = eventData.extraData;
        var syncQos = {
            performanceEntry: extraData && extraData['performanceEntry'],
            httpStatus: extraData && extraData['HttpStatus'],
            correlationId: extraData && extraData['CorrelationId'],
            succeeded: (eventData && eventData.resultType === _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success) || false,
            resultCode: eventData && eventData.resultCode,
            endpoint: endpoint
        };
        var handlerOutput = telemetryHandler && telemetryHandler(input);
        var canRetrySync = dataSyncClient.onRequestComplete(syncQos);
        extraData['dataSyncQos'] = dataSyncClient.getQosInfo();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput || {})), { eventData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData : eventData)), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (handlerOutput ? handlerOutput.eventData.extraData : eventData.extraData)), dataSyncClient.getQosInfo()) }), canRetry: canRetrySync && (!handlerOutput || handlerOutput.canRetry) });
    };
}
//# sourceMappingURL=SyncTelemetryHandler.js.map

/***/ }),

/***/ "mkpW":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Utilities.js


/***/ }),

/***/ "uSBM":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@o365groups/gmc-types@0.0.22/node_modules/@o365groups/gmc-types/lib/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: GroupIdentityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_entities_GroupIdentityTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/entities/GroupIdentityTypes */ "0Dq7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupIdentityType", function() { return _common_entities_GroupIdentityTypes__WEBPACK_IMPORTED_MODULE_0__["GroupIdentityType"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "wgfU":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/loki/Loki.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: Loki, isBlackforestEnvironment, isGccModerateEnvironment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loki", function() { return Loki; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlackforestEnvironment", function() { return isBlackforestEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGccModerateEnvironment", function() { return isGccModerateEnvironment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _providers_oAuthToken_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/oAuthToken/OAuthTokenProvider */ "7OYH");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/DataSource */ "AfY0");
/* harmony import */ var _oAuthToken_OAuthTokenDataSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oAuthToken/OAuthTokenDataSource */ "OyVb");





var Loki = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Loki, _super);
    function Loki(pageContext) {
        var _this = _super.call(this, {
            dataSourceName: 'LokiDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this._oAuthTokenProvider = new _providers_oAuthToken_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_2__["default"](null, {
            oAuthTokenDataSource: new _oAuthToken_OAuthTokenDataSource__WEBPACK_IMPORTED_MODULE_4__["default"](pageContext)
        });
        return _this;
    }
    Loki.prototype.getRegion = function () {
        var qos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: 'LivePersonaCard.GetLokiRegion' });
        try {
            var farmLabel = this._pageContext.farmLabel;
            if (!farmLabel) {
                qos.end({
                    resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                    resultCode: 'LokiNoFarmLabel',
                    error: 'Farm label property not found in _spPageContextinfo object. Aborting connection!'
                });
                return '';
            }
            // Get the region from the farm label.
            var labelRegion = farmLabel.split('_')[0].toLowerCase();
            var region = Loki.FARMLABEL_TO_REGION_MAPPING[labelRegion];
            return region;
        }
        catch (error) {
            qos.end({
                resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure,
                resultCode: 'LokiGetRegionError',
                error: error
            });
            return '';
        }
    };
    /**
     * Returns a function matching getAuthToken signature documented here:
     * https://msfast.visualstudio.com/DefaultCollection/FAST/_wiki/wikis/FAST.wiki?wikiVersion=GBwikiMaster&pageId=263&pagePath=%2FMidgard%2FApps%2FLivePersonaCard%2FHow%20to%20integrate%20LPC%20in%20a%20web%20app%20using%20the%20bootstrapper%20NPM%20package
     * This version returns an AAD token
     * The parameter is unused but kept for backwards compatibility when graduating the LPC AAD auth token flight
     */
    Loki.prototype.getAuthTokenGetter = function (_clientType) {
        if (_clientType === void 0) { _clientType = ''; }
        return this.getAadAuthTokenGetter();
    };
    /**
     * Returns a function matching getAuthToken signature documented here:
     * https://msfast.visualstudio.com/DefaultCollection/FAST/_wiki/wikis/FAST.wiki?wikiVersion=GBwikiMaster&pageId=263&pagePath=%2FMidgard%2FApps%2FLivePersonaCard%2FHow%20to%20integrate%20LPC%20in%20a%20web%20app%20using%20the%20bootstrapper%20NPM%20package
     * This version returns an AAD token
     */
    Loki.prototype.getAadAuthTokenGetter = function () {
        var _this = this;
        var correlationId = this._pageContext.CorrelationId;
        // Figure out the token audience (as blackforest has a different audience)
        var tokenAudience = 'https://loki.delve.office.com/';
        if (isBlackforestEnvironment(this._pageContext)) {
            tokenAudience = 'https://loki.delve.office.de/';
        }
        return function (onSuccess, onFailure) {
            _this._oAuthTokenProvider
                .getInstrumentedToken(tokenAudience)
                .then(function (response) {
                return onSuccess(response.tokenInfo.token, response.spRequestId);
            })
                .catch(function (error) {
                var lpcAuthError = {
                    httpStatusCode: error.httpResponseStatus,
                    serverErrorCode: error.serverErrorCode,
                    requestCorrelationId: error.correlationId,
                    type: error.type
                };
                onFailure(JSON.stringify(lpcAuthError), correlationId);
            });
        };
    };
    Loki.FARMLABEL_TO_REGION_MAPPING = {
        edog: 'ppe',
        msit: 'msit',
        spdf: 'df'
    };
    return Loki;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_3__["default"]));

function isBlackforestEnvironment(pageContext) {
    return ((pageContext.env && pageContext.env.toLowerCase() === 'blackforest') ||
        (pageContext.farmLabel && pageContext.farmLabel.toLowerCase().indexOf('deu_1') === 0));
}
function isGccModerateEnvironment(pageContext) {
    var farmLabel = (pageContext.farmLabel && pageContext.farmLabel.toLowerCase()) || '';
    return (farmLabel.indexOf('us_2_') === 0 ||
        farmLabel.indexOf('us_86_') === 0 ||
        farmLabel.indexOf('us_96_') === 0 ||
        farmLabel.indexOf('us_105_') === 0 ||
        farmLabel.indexOf('us_265_') === 0 ||
        farmLabel.indexOf('us_266_') === 0 ||
        farmLabel.indexOf('us_267_') === 0 ||
        farmLabel.indexOf('us_268_') === 0 ||
        farmLabel.indexOf('us_269_') === 0 ||
        farmLabel.indexOf('us_270_') === 0);
}
/* harmony default export */ __webpack_exports__["default"] = (Loki);
//# sourceMappingURL=Loki.js.map

/***/ }),

/***/ "ybkr":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/hoist.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/hoist.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~live-persona-card-loader_[locale].js.map