(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-splivepersonacard~sp~95564be9"],{

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

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-splivepersonacard~sp~95564be9_[locale].js.map