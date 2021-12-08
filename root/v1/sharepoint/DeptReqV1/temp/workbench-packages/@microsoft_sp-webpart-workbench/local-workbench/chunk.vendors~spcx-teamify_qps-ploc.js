(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~spcx-teamify"],{

/***/ "0/V7":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/TeamifyWizard.Props.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: TeamifyEntryPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamifyEntryPoint", function() { return TeamifyEntryPoint; });
var TeamifyEntryPoint;
(function (TeamifyEntryPoint) {
    TeamifyEntryPoint["TipsNTricks"] = "TipsNTricks";
    TeamifyEntryPoint["TeamifyBanner"] = "TeamifyBanner";
})(TeamifyEntryPoint || (TeamifyEntryPoint = {}));
//# sourceMappingURL=TeamifyWizard.Props.js.map

/***/ }),

/***/ "9heX":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/userInfo/UserInfoDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: UserInfoFlag, UserInfoDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoFlag", function() { return UserInfoFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoDataSource", function() { return UserInfoDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/url/ItemUrlHelper */ "+1yd");
/* harmony import */ var _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/url/ApiUrlHelper */ "sVQZ");






/**
 * These flags are defined in SPORel osrv\directory\interface\src\rest\RestUser.cs and correspond
 * to values of SharePointHomeExperienceStateFlags in federateddirectory\core\om\UserBuiltInSchema.cs.
 * (The enum names are abbreviated for convenience.)
 */
var UserInfoFlag;
(function (UserInfoFlag) {
    UserInfoFlag["odbFirstRun"] = "sharePointOneDriveBusinessFirstRun";
    UserInfoFlag["filtersPaneFirstRun"] = "sharePointFiltersPaneFirstRun";
    UserInfoFlag["teamsTeachingBubble"] = "sharePointTeamsTeachingBubble";
    UserInfoFlag["librariesFirstRun"] = "sharePointLibrariesFirstRun";
    UserInfoFlag["listsFirstRun"] = "sharePointListsFirstRun";
    UserInfoFlag["modernDocSetsFirstRun"] = "sharePointModernDocSetsFirstRun";
})(UserInfoFlag || (UserInfoFlag = {}));
var UserInfoDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserInfoDataSource, _super);
    function UserInfoDataSource(params, dependencies) {
        var _this = _super.call(this, {
            dataSourceName: 'UserInfo',
            id: 'UserInfo'
        }, dependencies) || this;
        var pageContext = _this._pageContext;
        var itemUrlHelper = dependencies.itemUrlHelper || new _utilities_url_ItemUrlHelper__WEBPACK_IMPORTED_MODULE_4__["ItemUrlHelper"]({}, { pageContext: pageContext });
        _this.apiUrlHelper =
            dependencies.apiUrlHelper ||
                new _utilities_url_ApiUrlHelper__WEBPACK_IMPORTED_MODULE_5__["ApiUrlHelper"]({}, { pageContext: pageContext, itemUrlHelper: itemUrlHelper });
        // The 'X-ClientType' header helps the AAD people track API calls by different scenarios.
        // 'SharePointUserFlag' and other values are defined in \federateddirectory\core\om\ClientType.cs.
        _this._additionalHeaders = {
            'X-ClientType': 'SharePointFirstRunUserFlag'
        };
        return _this;
    }
    UserInfoDataSource.prototype.getUserFlagValue = function (flag) {
        var _this = this;
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('AC6676C2-EA2E-4FFE-AAEA-E36483FB5552', '03/29/2020', 'Disable Firstrun check')) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(true);
        }
        if (!this._pageContext.userLoginName && !this._pageContext.aadUserId) {
            // if we dont have user aad or UPN info, return true and don't call server as it'l fail.
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(true);
        }
        // if it's external user, don't call the server as it'll fail.
        if (this._pageContext.isAnonymousGuestUser ||
            this._pageContext.isEmailAuthenticationGuestUser ||
            this._pageContext.isExternalGuestUser) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(true);
        }
        var params = {
            url: this._getApiUrl() + '&$select=' + flag,
            qosName: 'GetUserFlag',
            method: 'GET',
            // Use the flag name as a cache key (see setUserFlagValue for details on why)
            cacheRequestKey: flag
        };
        // Thus far, all the user flags are only flipped to true once. So before making a server call,
        // check the cache to see if the flag has already been set to true (even if that data is "stale").
        return this.getDataUtilizingLegacyCache(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ onlyCache: true, useStale: true }, params))
            .then(function (value) {
            if (value) {
                return value;
            }
            // No cached value, or cached value is false. Do a normal cached data fetch (returning
            // cached value if it's not expired, or making a server call).
            return _this.getDataUtilizingLegacyCache(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { additionalHeaders: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._additionalHeaders), parseResponse: function (responseText) {
                    var response = JSON.parse(responseText);
                    if (response && response.d && response.d[flag] !== undefined) {
                        return !!response.d[flag];
                    }
                    // Something went wrong and the flag value wasn't returned. We don't want to cache null,
                    // so throw an error here and return null in the .catch().
                    throw new Error('Response did not contain flag: ' + flag);
                } }));
        })
            .catch(function () { return null; });
    };
    UserInfoDataSource.prototype.setUserFlagValue = function (flag, value) {
        var _a;
        return this.getDataUtilizingLegacyCache({
            url: this._getApiUrl(),
            qosName: 'SetUserFlag',
            additionalPostData: JSON.stringify((_a = {}, _a[flag] = value, _a)),
            method: 'POST',
            additionalHeaders: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 'X-HTTP-Method': 'PATCH', Accept: 'application/json; odata=minimalmetadata' }, this._additionalHeaders),
            contentType: 'application/json; odata=minimalmetadata',
            // The get and set methods both use the flag name as a cache key.
            // setUserFlagValue always makes a server call (bypassCache=true).
            // It then ignores the actual server reponse and returns+caches the updated value.
            // This way, the next time getUserFlagValue is called, it will use the value just set
            // rather than making a server call.
            cacheRequestKey: flag,
            bypassCache: true,
            parseResponse: function () { return value; }
        });
    };
    UserInfoDataSource.prototype._getApiUrl = function () {
        return this.apiUrlHelper
            .build()
            .segment('SP.Directory.DirectorySession')
            .methodWithAliases('User', !this._pageContext.aadUserId
            ? { principalName: this._pageContext.userLoginName }
            : { id: this._pageContext.aadUserId })
            .toString();
    };
    return UserInfoDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_3__["CachedDataSource"]));

/* harmony default export */ __webpack_exports__["default"] = (UserInfoDataSource);
//# sourceMappingURL=UserInfoDataSource.js.map

/***/ }),

/***/ "AnjI":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/TeamifyBanner/index.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: TeamifyBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamifyBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamifyBanner */ "suPl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamifyBanner", function() { return _TeamifyBanner__WEBPACK_IMPORTED_MODULE_0__["TeamifyBanner"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "CKsc":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/TeamifyBanner/TeamifyBanner.resx.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"description":"[!!--##Ćōmmũńĩćàţē ŵĩţĥ ŷōũŕ ćōĺĺēàĝũēś ĩń ŕēàĺ ţĩmē ƀŷ ćŕēàţĩńĝ à Ţēàm ƒōŕ ŷōũŕ Mĩćŕōśōƒţ 365 Ĝŕōũƥ.##--!!]","createTeam":"[!!--##Ćŕēàţē à Ţēàm##--!!]","teamsDescription1":"[!!--##Mĩćŕōśōƒţ Ţēàmś ĩś à ŕēàĺ-ţĩmē ćōĺĺàƀōŕàţĩōń àńď ćōmmũńĩćàţĩōń ţōōĺ ţĥàţ ĩś ƥàŕţ ōƒ ţĥē Ōƒƒĩćē 365 śũĩţē ōƒ śēŕvĩćēś.##--!!]","teamsDescription2":"[!!--##Ćĺĩćķĩńĝ {0} ŵĩĺĺ àďď à ńēŵ Mĩćŕōśōƒţ Ţēàm àńď ćōńńēćţ ĩţ ţō ţĥē Mĩćŕōśōƒţ 365 Ĝŕōũƥ àśśōćĩàţēď ŵĩţĥ ţĥĩś śĩţē. Ţĥĩś àćţĩōń ćàńńōţ ƀē ŕēvēŕśēď.##--!!]","creating":"[!!--##Ćŕēàţĩńĝ à Ţēàm##--!!]","error":"[!!--##Ŵē ćōũĺďń\u0027ţ śēţ ũƥ ţĥē Ţēàm. Ƥĺēàśē ţŕŷ àĝàĩń ĺàţēŕ.##--!!]","visitTeam":"[!!--##Śũććēśś!  Ćĺĩćķ ĥēŕē ţō ĝō ţō ŷōũŕ Ţēàm.##--!!]","hideTeamifyDialogTitle":"[!!--##Ĥĩďē##--!!]","hideTeamifyDialogDescription":"[!!--##Àŕē ŷōũ śũŕē ŷōũ ŵàńţ ţō ĥĩďē ţĥē Mĩćŕōśōƒţ Ţēàmś ƀàńńēŕ ƒōŕ ţĥĩś ƀŕōŵśēŕ śēśśĩōń? Ţō ŕēmōvē ĩţ ƥēŕmàńēńţĺŷ, ćĺĩćķ \u0022{0}\u0022##--!!]","hideTeamifyDialogPermanentDismissLink":"[!!--##Ďōń\u0027ţ śĥōŵ mē àĝàĩń##--!!]","hideTeamifyDialogYesButton":"[!!--##Ŷēś##--!!]","hideTeamifyDialogNoButton":"[!!--##Ńō##--!!]","hideTeamifyButtonAriaLabel":"[!!--##Ĥĩďē##--!!]","title":"[!!--##Àďď ŕēàĺ-ţĩmē ćĥàţ##--!!]","teamifyDescription":"[!!--##Àďď Mĩćŕōśōƒţ Ţēàmś ţō ćōĺĺàƀōŕàţē ĩń ŕēàĺ-ţĩmē àńď śĥàŕē ŕēśōũŕćēś àćŕōśś Mĩćŕōśōƒţ 365 ŵĩţĥ ŷōũŕ ţēàm.##--!!]","linkDescription":"[!!--##Àďď Mĩćŕōśōƒţ Ţēàmś##--!!]","toolTipContent":"[!!--##Àďďĩńĝ Mĩćŕōśōƒţ Ţēàmś ŵĩĺĺ ćōńńēćţ ŷōũŕ ţēàm śĩţē ţō à Mĩćŕōśōƒţ 365 Ĝŕōũƥ àńď ćŕēàţē à ńēŵ ŵōŕķśƥàćē ţō śĥàŕē ŕēśōũŕćēś àńď ćōĺĺàƀōŕàţē ĩń ŕēàĺ-ţĩmē. ##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "K3kX":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.base.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubbleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return TeachingBubbleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeachingBubbleContent */ "LcJw");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Callout */ "ioxN");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/DirectionalHint */ "EE7g");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var TeachingBubbleBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeachingBubbleBase, _super);
    // Constructor
    function TeachingBubbleBase(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this.state = {};
        _this._defaultCalloutProps = {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].rightCenter,
        };
        return _this;
    }
    TeachingBubbleBase.prototype.focus = function () {
        if (this.rootElement.current) {
            this.rootElement.current.focus();
        }
    };
    TeachingBubbleBase.prototype.render = function () {
        var _a = this.props, setCalloutProps = _a.calloutProps, 
        // eslint-disable-next-line deprecation/deprecation
        targetElement = _a.targetElement, onDismiss = _a.onDismiss, 
        // Default to deprecated value if provided.
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.hasCloseButton, 
        // Default to deprecated value if provided.
        // eslint-disable-next-line deprecation/deprecation
        hasCloseButton = _b === void 0 ? this.props.hasCloseIcon : _b, isWide = _a.isWide, styles = _a.styles, theme = _a.theme, target = _a.target;
        var calloutProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._defaultCalloutProps), setCalloutProps);
        var stylesProps = {
            theme: theme,
            isWide: isWide,
            calloutProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, calloutProps), { theme: calloutProps.theme }),
            hasCloseButton: hasCloseButton,
        };
        var classNames = getClassNames(styles, stylesProps);
        var calloutStyles = classNames.subComponentStyles
            ? classNames.subComponentStyles.callout
            : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_4__["Callout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ target: target || targetElement, onDismiss: onDismiss }, calloutProps, { className: classNames.root, styles: calloutStyles, hideOverflow: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this.rootElement },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props)))));
    };
    TeachingBubbleBase.defaultProps = {
        /**
         * Default calloutProps is deprecated in favor of private `_defaultCalloutProps`.
         * Remove in next release.
         * @deprecated In favor of private `_defaultCalloutProps`.
         */
        // eslint-disable-next-line deprecation/deprecation
        calloutProps: {
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
            directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].rightCenter,
        },
    };
    return TeachingBubbleBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=TeachingBubble.base.js.map

/***/ }),

/***/ "K9K9":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Coachmark.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: Coachmark, COACHMARK_ATTRIBUTE_NAME, CoachmarkBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Coachmark_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Coachmark/index */ "vMXs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coachmark", function() { return _components_Coachmark_index__WEBPACK_IMPORTED_MODULE_0__["Coachmark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_ATTRIBUTE_NAME", function() { return _components_Coachmark_index__WEBPACK_IMPORTED_MODULE_0__["COACHMARK_ATTRIBUTE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoachmarkBase", function() { return _components_Coachmark_index__WEBPACK_IMPORTED_MODULE_0__["CoachmarkBase"]; });


//# sourceMappingURL=Coachmark.js.map

/***/ }),

/***/ "OH2p":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/UserInfo.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: UserInfoFlag, UserInfoDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_userInfo_UserInfoDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/userInfo/UserInfoDataSource */ "9heX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoFlag", function() { return _dataSources_userInfo_UserInfoDataSource__WEBPACK_IMPORTED_MODULE_0__["UserInfoFlag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoDataSource", function() { return _dataSources_userInfo_UserInfoDataSource__WEBPACK_IMPORTED_MODULE_0__["UserInfoDataSource"]; });


//# sourceMappingURL=UserInfo.js.map

/***/ }),

/***/ "T36c":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble, TeachingBubbleBase, TeachingBubbleContent, TeachingBubbleContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeachingBubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeachingBubble */ "fsJh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return _TeachingBubble__WEBPACK_IMPORTED_MODULE_0__["TeachingBubble"]; });

/* harmony import */ var _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeachingBubble.base */ "K3kX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__["TeachingBubbleBase"]; });

/* harmony import */ var _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeachingBubbleContent */ "LcJw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return _TeachingBubbleContent__WEBPACK_IMPORTED_MODULE_2__["TeachingBubbleContent"]; });

/* harmony import */ var _TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeachingBubbleContent.base */ "hdND");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContentBase", function() { return _TeachingBubbleContent_base__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContentBase"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TYvE":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/TeamifyBanner.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: TeamifyBanner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TeamifyBanner_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TeamifyBanner/index */ "AnjI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamifyBanner", function() { return _components_TeamifyBanner_index__WEBPACK_IMPORTED_MODULE_0__["TeamifyBanner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_TeamifyBanner_index__WEBPACK_IMPORTED_MODULE_0__["TeamifyBanner"]; });



//# sourceMappingURL=TeamifyBanner.js.map

/***/ }),

/***/ "Y+qM":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/TeamifyBanner/TeamifyBanner.module.scss.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: teamifyBanner, titleWrapper, teamsIcon, teamsName, infoIcon, toolTipContainer, tooltip, createTeamText, description, teamifySpinner, hideTeamifyButton, hideTeamifyIcon, hideTeamifyDialogButtonContainer, hideTeamifyDialogButton, createTeamLink, dismissPermanentlyLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamifyBanner", function() { return teamifyBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleWrapper", function() { return titleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsIcon", function() { return teamsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsName", function() { return teamsName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoIcon", function() { return infoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolTipContainer", function() { return toolTipContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltip", function() { return tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTeamText", function() { return createTeamText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamifySpinner", function() { return teamifySpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTeamifyButton", function() { return hideTeamifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTeamifyIcon", function() { return hideTeamifyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTeamifyDialogButtonContainer", function() { return hideTeamifyDialogButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTeamifyDialogButton", function() { return hideTeamifyDialogButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTeamLink", function() { return createTeamLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissPermanentlyLink", function() { return dismissPermanentlyLink; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".teamifyBanner_c8bdf7d0{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";position:relative}.titleWrapper_c8bdf7d0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:4px}.teamsIcon_c8bdf7d0{color:#5558af;font-size:17px}.teamsName_c8bdf7d0{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";font-weight:600;font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";padding:0 8px 0 4px}[dir='rtl'] .teamsName_c8bdf7d0{padding:0 4px 0 8px}.infoIcon_c8bdf7d0{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";height:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";padding-top:6px}.toolTipContainer_c8bdf7d0{padding:0px 4px}.tooltip_c8bdf7d0{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": "}.createTeamText_c8bdf7d0{font-weight:600}.description_c8bdf7d0{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.teamifySpinner_c8bdf7d0.teamifySpinner_c8bdf7d0{display:'inline-block'}.hideTeamifyButton_c8bdf7d0{position:absolute;top:0px;right:0px}.hideTeamifyIcon_c8bdf7d0{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";height:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";line-height:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": "}.hideTeamifyDialogButtonContainer_c8bdf7d0{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.hideTeamifyDialogButton_c8bdf7d0{padding:0px 4px}.createTeamLink_c8bdf7d0{padding-top:8px}.dismissPermanentlyLink_c8bdf7d0{padding-top:20px}\n" }]);
var teamifyBanner = "teamifyBanner_c8bdf7d0";
var titleWrapper = "titleWrapper_c8bdf7d0";
var teamsIcon = "teamsIcon_c8bdf7d0";
var teamsName = "teamsName_c8bdf7d0";
var infoIcon = "infoIcon_c8bdf7d0";
var toolTipContainer = "toolTipContainer_c8bdf7d0";
var tooltip = "tooltip_c8bdf7d0";
var createTeamText = "createTeamText_c8bdf7d0";
var description = "description_c8bdf7d0";
var teamifySpinner = "teamifySpinner_c8bdf7d0";
var hideTeamifyButton = "hideTeamifyButton_c8bdf7d0";
var hideTeamifyIcon = "hideTeamifyIcon_c8bdf7d0";
var hideTeamifyDialogButtonContainer = "hideTeamifyDialogButtonContainer_c8bdf7d0";
var hideTeamifyDialogButton = "hideTeamifyDialogButton_c8bdf7d0";
var createTeamLink = "createTeamLink_c8bdf7d0";
var dismissPermanentlyLink = "dismissPermanentlyLink_c8bdf7d0";
//# sourceMappingURL=TeamifyBanner.module.scss.js.map

/***/ }),

/***/ "cbdt":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/teams/TeamsProvider.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: TEAMIFY_FEATURE, TeamsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAMIFY_FEATURE", function() { return TEAMIFY_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsProvider", function() { return TeamsProvider; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");





var TEAMIFY_FEATURE = { ODB: 870 };
var TeamsProvider = /** @class */ (function () {
    function TeamsProvider(params, dependencies) {
        var pageContext = (this._pageContext = dependencies.pageContext);
        this._groupsProvider = dependencies.groupsProvider;
        this._graphUserInfoDataSource = dependencies.graphUserInfoDataSource;
        this._userInfoDataSource = dependencies.userInfoDataSource;
        this._isTeamsRelevant =
            _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_1__["default"].isFeatureEnabled(TEAMIFY_FEATURE) && Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_2__["isGroupWebContext"])(pageContext);
        this._hideTeamifyKillswitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('61F9968C-D778-4963-9A95-573BC29B5CBF', '02/03/2019', 'Enable Hide teamify banner');
    }
    TeamsProvider.prototype.getTeamsUrl = function () {
        if (!this._isTeamsRelevant) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(); // no links, not a group, or flight not on
        }
        return this._groupsProvider.getGroup().then(function (group) { return group && group.teamsUrl; });
    };
    /**
     * Whether or not the user can see the teamify banner.
     * If the teamify banner has been hidden then the site might still be
     * teamifiable, but it must be done via teams.
     */
    TeamsProvider.prototype.canTeamify = function () {
        var _this = this;
        var pageContext = this._pageContext;
        if (!this._isTeamsRelevant || !pageContext.isSiteAdmin) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(false);
        }
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('233F5D13-C231-46A9-820F-68FD2F032580', '4/16/2020', "Don't show banner if server side flag set")) {
            if (pageContext.isTeamsConnectedSite) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(false);
            }
        }
        var getGroupsProviderPromise = function () {
            return _this._groupsProvider
                .getGroup()
                .then(function (group) {
                // group can't already have teams or yammer
                if (group.teamsUrl || group.yammerResources) {
                    return false;
                }
                // use the graph data source to check if user is licensed/enabled for Teams
                // (this is the most expensive check, so do it almost last)
                return _this._graphUserInfoDataSource.canUseTeams().then(function (canUseTeams) {
                    return canUseTeams;
                });
            })
                .catch(function () { return false; });
        }; // ignore errors
        if (!this._hideTeamifyKillswitch) {
            return this._groupsProvider.getTeamifyBannerHidden().then(function (hidden) {
                if (hidden) {
                    return false;
                }
                return getGroupsProviderPromise();
            });
        }
        // All other teamify prereqs are satisfied, so do async checks
        return getGroupsProviderPromise();
    };
    TeamsProvider.prototype.shouldShowTeamsCoachmark = function () {
        var _this = this;
        var bubbleSeenPromise;
        // TEMPORARY: hack to reset the flag for testing
        if ((window.location.search || '').indexOf('resetbubble=1') !== -1) {
            bubbleSeenPromise = this._userInfoDataSource
                .setUserFlagValue("sharePointTeamsTeachingBubble" /* teamsTeachingBubble */, false)
                .then(function () { return false; });
        }
        else {
            bubbleSeenPromise = this._userInfoDataSource.getUserFlagValue("sharePointTeamsTeachingBubble" /* teamsTeachingBubble */);
        }
        return bubbleSeenPromise.then(function (hasSeenBubble) {
            if (hasSeenBubble !== false) {
                return; // already seen bubble, or error getting user flag
            }
            // check whether user is licensed/enabled for Teams (do this second since it's more expensive)
            return _this._graphUserInfoDataSource.canUseTeams();
        });
    };
    TeamsProvider.prototype.findTeamsLink = function (links, teamsUrl) {
        if (!links || !links.length) {
            return;
        }
        // Example URL as found in left nav:
        // https://teams.microsoft.com/l/team/19:e82c423472e546cd96761b4d43e29387%40thread.skype/conversations?groupId=d273ead4-dc92-465c-9ee5-1cad8461cde9&tenantId=d97cc7c7-3a50-46d8-88e5-746204907b14
        // Example group.teamsUrl:
        // https://teams.microsoft.com/l/team/19:e82c423472e546cd96761b4d43e29387%40thread.skype/conversations?tenantId=d97cc7c7-3a50-46d8-88e5-746204907b14
        // So try comparing the URLs without the query.
        // (If something odd happened on the server, the Teams link might also point to groupstatus.)
        var teamsUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_3__["default"](teamsUrl.toLowerCase());
        teamsUrl = decodeURIComponent(teamsUri.getStringWithoutQueryAndFragment());
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            var url = decodeURIComponent((link.url || '').toLowerCase());
            if (url.substring(0, teamsUrl.length) === teamsUrl ||
                url.indexOf('/_layouts/15/groupstatus.aspx?target=team') !== -1) {
                return link;
            }
        }
    };
    TeamsProvider.prototype.setTeamsBubbleFlag = function (bubbleViewed) {
        return this._userInfoDataSource.setUserFlagValue("sharePointTeamsTeachingBubble" /* teamsTeachingBubble */, bubbleViewed);
    };
    return TeamsProvider;
}());

//# sourceMappingURL=TeamsProvider.js.map

/***/ }),

/***/ "dHB+":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/wrapPlaceholderContent.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: wrapPlaceholderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPlaceholderContent", function() { return wrapPlaceholderContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Takes a string with a {0} placeholder and wraps the placeholder content in the given
 * element/component type--for example, to make the content bold or make it into a link.
 *
 * @param mainString Whole string containing a {0} placeholder
 * @param placeholderContent String substituted for the placeholder
 * @param placeholderWrapperType Wrap the placeholder content with this element/component type
 * (such as 'span' or office-ui-fabric-react Link)
 * @param placeholderWrapperProps Props for the wrapper element/component
 * @returns Array containing the text before the placeholder, the formatted placeholder content,
 * and the text after the placeholder (can be rendered inside some other element)
 */
function wrapPlaceholderContent(mainString, placeholderContent, placeholderWrapperType, placeholderWrapperProps) {
    var mainStrParts = mainString.split('{0}');
    // When rendering a JSX element that's part of an array, React gives a console warning if
    // the element doesn't have a key. So add an arbitrary key.
    placeholderWrapperProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: 'key' }, (placeholderWrapperProps || {}));
    return [
        mainStrParts[0],
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](placeholderWrapperType, placeholderWrapperProps, placeholderContent),
        mainStrParts[1]
    ];
}
//# sourceMappingURL=wrapPlaceholderContent.js.map

/***/ }),

/***/ "fsJh":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return TeachingBubble; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeachingBubble.base */ "K3kX");
/* harmony import */ var _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeachingBubble.styles */ "s+9P");



var TeachingBubble = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_TeachingBubble_base__WEBPACK_IMPORTED_MODULE_1__["TeachingBubbleBase"], _TeachingBubble_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'TeachingBubble' });
//# sourceMappingURL=TeachingBubble.js.map

/***/ }),

/***/ "qieP":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/nav/NavLinkCoachmark.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: NavLinkCoachmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinkCoachmark", function() { return NavLinkCoachmark; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Coachmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Coachmark */ "K9K9");
/* harmony import */ var office_ui_fabric_react_lib_TeachingBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/TeachingBubble */ "rpLR");
/* harmony import */ var office_ui_fabric_react_lib_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/common/DirectionalHint */ "EE7g");
/* harmony import */ var _Nav_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav.resx */ "mw8S");
/* harmony import */ var _Nav_resx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Nav_resx__WEBPACK_IMPORTED_MODULE_5__);






var NavLinkCoachmark = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NavLinkCoachmark, _super);
    function NavLinkCoachmark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onDismiss = function () {
            _this.setState({ isDismissed: true });
            _this.props.onDismiss();
        };
        return _this;
    }
    NavLinkCoachmark.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        if (state && state.isDismissed) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Coachmark__WEBPACK_IMPORTED_MODULE_2__["Coachmark"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ target: '#' + props.id, positioningContainerProps: { directionalHint: office_ui_fabric_react_lib_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].rightCenter } }, (props.coachmarkProps || {})),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_TeachingBubble__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ headline: props.teachingBubbleHeadline, calloutProps: { doNotLayer: true }, hasCloseIcon: true, closeButtonAriaLabel: _Nav_resx__WEBPACK_IMPORTED_MODULE_5___default.a.bubbleCloseButton, primaryButtonProps: { text: _Nav_resx__WEBPACK_IMPORTED_MODULE_5___default.a.bubbleDoneButton, onClick: this._onDismiss }, hasSmallHeadline: true, onDismiss: this._onDismiss }, (props.teachingBubbleProps || {})), props.teachingBubbleContent)));
    };
    return NavLinkCoachmark;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=NavLinkCoachmark.js.map

/***/ }),

/***/ "rpLR":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/TeachingBubble.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: TeachingBubble, TeachingBubbleBase, TeachingBubbleContent, TeachingBubbleContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TeachingBubble/index */ "T36c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubble", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleBase", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContent", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeachingBubbleContentBase", function() { return _components_TeachingBubble_index__WEBPACK_IMPORTED_MODULE_0__["TeachingBubbleContentBase"]; });


//# sourceMappingURL=TeachingBubble.js.map

/***/ }),

/***/ "skUM":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/graphUserInfo/GraphUserInfoDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: GraphUserInfoDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphUserInfoDataSource", function() { return GraphUserInfoDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _base_RequestCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/RequestCache */ "M66I");
/* harmony import */ var _base_DataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/DataSource */ "AfY0");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");





var TEAMS_SERVICE_PLAN_ID = '57ff2da0-773e-42df-b2af-ffb7a2317929';
var TEAMS_SERVICE_PLAN_ENABLED_STATUS_STRING = 'Success';
var GRAPH_REQUEST_COMMON_PARAMS = {
    // use GET since Graph actually interprets POST requests properly
    method: 'GET',
    // graph doesn't like the ;odata=verbose part in default types
    contentType: 'application/json',
    additionalHeaders: { accept: 'application/json' }
};
/**
 * Provides info about the current user from MS Graph `/me` APIs.
 */
var GraphUserInfoDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphUserInfoDataSource, _super);
    function GraphUserInfoDataSource(params, dependencies) {
        var _this = _super.call(this, { dataSourceName: 'GraphUserInfo' }, dependencies) || this;
        _this._oAuthTokenProvider = dependencies.oAuthTokenProvider;
        _this._canUseGraph = _this._pageContext.isSPO; // no Graph on-prem
        _this._requestCache = new _base_RequestCache__WEBPACK_IMPORTED_MODULE_2__["RequestCache"]({ id: 'GraphUserInfo' }, { pageContext: _this._pageContext });
        return _this;
    }
    /**
     * Returns true if the user is licensed/enabled for Teams.
     * Returns false if the user is confirmed to not be licensed/enabled.
     * Returns null if any errors occur or MS Graph is unavailable.
     */
    GraphUserInfoDataSource.prototype.canUseTeams = function () {
        var _this = this;
        if (!this._canUseGraph) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(null);
        }
        // 1. Check the cache
        return this._requestCache
            .getDataUtilizingCache({
            cacheRequestKey: 'CanUseTeams',
            // This is called if cached data doesn't exist or is expired
            getData: function () {
                // 2. Get the oauth token
                return (_this._oAuthTokenProvider
                    .getToken(_this._pageContext.msGraphEndpointUrl)
                    // 3. Call the licenseDetails API with the token (in a separate method for readability)
                    .then(function (oAuthToken) { return _this._canUseTeams(oAuthToken); }));
            }
        })
            .catch(function () { return null; });
    };
    GraphUserInfoDataSource.prototype._canUseTeams = function (oAuthToken) {
        return this.dataRequestor.getData(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: this._pageContext.msGraphEndpointUrl + '/beta/me/licenseDetails', authToken: oAuthToken, qosName: 'CanUseTeams' }, GRAPH_REQUEST_COMMON_PARAMS), { 
            // Parse the response before caching
            parseResponse: function (response) {
                var result = JSON.parse(response);
                return result.value.some(function (sku) {
                    var servicePlans = sku.servicePlans || [];
                    if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('D8EC3B19-16BC-4A64-8EF4-AF0DB0262805', '7/25/2019', 'Properly check the status of the users Teams license')) {
                        for (var i = 0; i < servicePlans.length; i++) {
                            if (servicePlans[i].servicePlanId === TEAMS_SERVICE_PLAN_ID) {
                                return servicePlans[i].provisioningStatus === TEAMS_SERVICE_PLAN_ENABLED_STATUS_STRING;
                            }
                        }
                        // could not find a service plan for Teams
                        return false;
                    }
                    else {
                        return servicePlans.some(function (p) { return p.servicePlanId === TEAMS_SERVICE_PLAN_ID; });
                    }
                });
            } }));
    };
    return GraphUserInfoDataSource;
}(_base_DataSource__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));

//# sourceMappingURL=GraphUserInfoDataSource.js.map

/***/ }),

/***/ "suPl":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/TeamifyBanner/TeamifyBanner.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: TeamifyBanner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamifyBanner", function() { return TeamifyBanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/index */ "P2cQ");
/* harmony import */ var _uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TeamifyBanner.module.scss */ "Y+qM");
/* harmony import */ var _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TeamifyBanner.resx */ "CKsc");
/* harmony import */ var _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilities_wrapPlaceholderContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/wrapPlaceholderContent */ "dHB+");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Groups */ "b0jF");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ms_teamify_lib_TeamifyWizard_Props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/teamify/lib/TeamifyWizard.Props */ "0/V7");
/* harmony import */ var _ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/sp-experiments/lib/flightsonrails/SPExperiment */ "D8Gs");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");




















var TeamifyWizard = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
    return Promise.all(/*! import() | teamifywizard.deferred */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e("vendors~audience-picker-chunk~sp-pages-pa~f202f0ab"), __webpack_require__.e("vendors~spcx-panels~teamifywizard.deferred"), __webpack_require__.e("vendors~teamifywizard.deferred")]).then(__webpack_require__.bind(null, /*! @ms/teamify/lib/TeamifyWizard */ "9RII"));
});
var TeamifyWizardFeature = { ODB: 1936 };
var TeamifyExperimentId = 90010;
/**
 * @public
 */
var TeamifyBanner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeamifyBanner, _super);
    function TeamifyBanner(props) {
        var _this = _super.call(this, props) || this;
        _this._hideTeamifyKillswitch = false;
        _this._experimentKillswitch = false;
        _this._renderTooltipContent = function () {
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__["default"].isFeatureEnabled(TeamifyWizardFeature) || !_this._experimentKillswitch) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["tooltip"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.toolTipContent);
            }
            else {
                // This paragraph has a placeholder in the middle for 'Create a Team', which needs to be bold.
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["tooltip"] },
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.teamsDescription1,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    Object(_utilities_wrapPlaceholderContent__WEBPACK_IMPORTED_MODULE_10__["wrapPlaceholderContent"])(_TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.teamsDescription2, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.createTeam, 'span', {
                        className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["createTeamText"]
                    })));
            }
        };
        _this._onHideTeamifyBanner = function () {
            var groupSiteProvider = new _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_12__["GroupsProvider"]({ pageContext: _this.props.pageContext });
            groupSiteProvider.hideTeamifyBanner();
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                name: 'TeamifyBanner.Hide',
                isIntentional: true
            });
            _this.setState({ hasDismissed: true });
            _this._onCloseHideTeamifyDialog();
        };
        _this._onDismissTeamifyBanner = function () {
            var groupSiteProvider = new _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_12__["GroupsProvider"]({ pageContext: _this.props.pageContext });
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                name: 'TeamifyBanner.DismissPermanently',
                isIntentional: true
            });
            groupSiteProvider.dismissTeamifyBanner().then(function () {
                _this._onCloseHideTeamifyDialog();
                _this.setState({ hasDismissed: true });
            });
        };
        _this._onClick = function () {
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__["default"].isFeatureEnabled(TeamifyWizardFeature)) {
                _this._onClickV2Experience();
            }
            else if (!_this._experimentKillswitch) {
                var variant = Object(_ms_sp_experiments_lib_flightsonrails_SPExperiment__WEBPACK_IMPORTED_MODULE_15__["getVariantAndLogExposure"])(TeamifyExperimentId, _this.props.pageContext);
                switch (variant) {
                    case 1:
                        _this._onClickV2Experience();
                        break;
                    default:
                        _this._onClickV1Experience();
                        break;
                }
            }
            else {
                _this._onClickV1Experience();
            }
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                name: 'TeamifyBanner.Click',
                isIntentional: true
            });
        };
        _this._onClickV2Experience = function () {
            _this._teamifyQos = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_19__["Qos"]({ name: 'TeamifyWizardLoader.Load' });
            _this._toggleTeamify();
        };
        _this._onClickV1Experience = function () {
            _this.setState({ hasClickedLink: true });
            var groupSiteProvider = new _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_12__["GroupsProvider"]({ pageContext: _this.props.pageContext });
            groupSiteProvider.teamify().done(function (teamifyResponse) {
                if (teamifyResponse !== undefined) {
                    _this.setState({
                        responseHasFailure: false,
                        responseHasSuccess: true,
                        teamUrl: teamifyResponse
                    });
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                        name: 'TeamifyBanner.Teamify.Success',
                        isIntentional: false
                    });
                }
                else {
                    _this.setState({
                        responseHasFailure: true
                    });
                }
            }, function (error) {
                _this.setState({
                    responseHasFailure: true
                });
            });
        };
        _this._onCloseHideTeamifyDialog = function () {
            _this.setState({ hideTeamifyDialogOpen: false });
        };
        _this._onOpenHideTeamifyDialog = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                name: 'TeamifyBanner.OpenHideDialog',
                isIntentional: true
            });
            _this.setState({ hideTeamifyDialogOpen: true });
        };
        // the old method (for using GET on groupstatus.aspx instead of POST on GroupSiteManager)
        _this._logClick = function () {
            _this.setState({ hasClickedLink: true });
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
                name: 'TeamifyBanner.Click',
                isIntentional: true
            });
        };
        _this._toggleTeamify = function () {
            _this.setState(function (prevState) { return ({
                showTeamifyWizard: !prevState.showTeamifyWizard
            }); });
        };
        _this.state = {};
        // remove when killswitch is retired
        _this._createUrl =
            props.pageContext.webAbsoluteUrl + '/_layouts/15/groupstatus.aspx?Target=TEAM&Create=TRUE';
        _this._usePostmethod = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_17__["Killswitch"].isActivated('67615EE2-7930-41EE-A90D-4D174AB85A58', '01/15/2019', 'Enable Teamify through POST method only.');
        _this._hideTeamifyKillswitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_17__["Killswitch"].isActivated('61F9968C-D778-4963-9A95-573BC29B5CBF', '02/03/2019', 'Enable Hide teamify banner');
        _this._experimentKillswitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_17__["Killswitch"].isActivated('DB52012D-C103-4653-928C-16AC57D214B9', '11/05/2020', 'Enable v2 Experiment');
        return _this;
    }
    TeamifyBanner.prototype.render = function () {
        if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__["default"].isFeatureEnabled(TeamifyWizardFeature)) {
            return this._renderV2Experience();
        }
        else if (!this._experimentKillswitch) {
            return this._renderExperimentalExperience();
        }
        else {
            return this._renderV1Experience();
        }
    };
    TeamifyBanner.prototype.componentDidMount = function () {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_11__["Engagement"].logData({
            name: 'TeamifyBanner.Render',
            isIntentional: false
        });
    };
    TeamifyBanner.prototype._renderV1Experience = function () {
        if (this._usePostmethod) {
            // this is a product name, so intentionally not localized
            var teamsName = 'Microsoft Teams';
            var renderToolTip = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHost"], { tooltipProps: {
                    onRenderContent: this._renderTooltipContent
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info', className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["infoIcon"], tabIndex: 0, ariaLabel: teamsName + ". " + _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description })));
            var createSection = void 0;
            if (!this.state.hasClickedLink) {
                createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description,
                    !this._hideTeamifyKillswitch && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["toolTipContainer"] }, renderToolTip),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { onClick: this._onClick, className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["createTeamLink"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.createTeam)));
            }
            else if (!this.state.responseHasFailure && !this.state.responseHasSuccess) {
                createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_16__["Spinner"], { size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_16__["SpinnerSize"].xSmall, className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifySpinner"] + ' ' + _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifySpinner"] }),
                    ' ',
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.creating));
            }
            else if (this.state.responseHasFailure) {
                createSection = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.error);
            }
            else if (this.state.responseHasSuccess) {
                createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { href: this.state.teamUrl, target: '_blank' }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.visitTeam)));
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__["css"])(this.props.className, _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifyBanner"]) },
                this._renderHideTeamifyButton(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["titleWrapper"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsIcon"], iconName: 'TeamsLogoInverse' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsName"] }, teamsName),
                    this._hideTeamifyKillswitch && renderToolTip),
                createSection));
        }
        else {
            // _usePostMethod is false in this case; this is the old pre-killswitch code
            if (this.state.hasClickedLink) {
                // Hide the banner after the user clicks the link, so they don't click multiple times
                // (setting off multiple teamify requests on the server simultaneously causes odd behavior)
                return null;
            }
            // this is a product name, so intentionally not localized
            var teamsName = 'Microsoft Teams';
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__["css"])(this.props.className, _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifyBanner"]) },
                this._renderHideTeamifyButton(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["titleWrapper"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsIcon"], iconName: 'TeamsLogoInverse' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsName"] }, teamsName),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHost"], { tooltipProps: {
                            onRenderContent: this._renderTooltipContent
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info', className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["infoIcon"], tabIndex: 0, ariaLabel: teamsName + ". " + _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { href: this._createUrl, onClick: this._logClick, target: '_blank' }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.createTeam))));
        }
    };
    TeamifyBanner.prototype._renderV2Experience = function () {
        var renderToolTip = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHost"], { tooltipProps: {
                onRenderContent: this._renderTooltipContent
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info', className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["infoIcon"], tabIndex: 0 })));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__["css"])(this.props.className, _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifyBanner"]) },
                this._renderHideTeamifyButton(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["titleWrapper"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsIcon"], iconName: 'TeamsLogoInverse' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsName"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.title)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                    _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.teamifyDescription,
                    !this._hideTeamifyKillswitch && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["toolTipContainer"] }, renderToolTip),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { onClick: this._onClick, className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["createTeamLink"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.linkDescription))),
            this.state.showTeamifyWizard && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: null },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TeamifyWizard, { pageContext: this.props.pageContext, onDismiss: this._toggleTeamify, entryPoint: _ms_teamify_lib_TeamifyWizard_Props__WEBPACK_IMPORTED_MODULE_14__["TeamifyEntryPoint"].TeamifyBanner, strings: this.props.teamifyStrings, qos: this._teamifyQos })))));
    };
    TeamifyBanner.prototype._renderExperimentalExperience = function () {
        // this is a product name, so intentionally not localized
        var teamsName = 'Microsoft Teams';
        var renderToolTip = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHost"], { tooltipProps: {
                onRenderContent: this._renderTooltipContent
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info', className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["infoIcon"], tabIndex: 0 })));
        var createSection;
        if (!this.state.hasClickedLink) {
            createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.teamifyDescription,
                !this._hideTeamifyKillswitch && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["toolTipContainer"] }, renderToolTip),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { onClick: this._onClick, className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["createTeamLink"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.linkDescription)));
        }
        else if (!this.state.responseHasFailure && !this.state.responseHasSuccess) {
            createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.description,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_16__["Spinner"], { size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_16__["SpinnerSize"].xSmall, className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifySpinner"] + ' ' + _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifySpinner"] }),
                ' ',
                _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.creating));
        }
        else if (this.state.responseHasFailure) {
            createSection = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.error);
        }
        else if (this.state.responseHasSuccess) {
            createSection = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["description"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { href: this.state.teamUrl, target: '_blank' }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.visitTeam)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__["css"])(this.props.className, _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamifyBanner"]) },
            this._renderHideTeamifyButton(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["titleWrapper"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsIcon"], iconName: 'TeamsLogoInverse' }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["teamsName"] }, teamsName)),
            createSection,
            this.state.showTeamifyWizard && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: null },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TeamifyWizard, { pageContext: this.props.pageContext, onDismiss: this._toggleTeamify, entryPoint: _ms_teamify_lib_TeamifyWizard_Props__WEBPACK_IMPORTED_MODULE_14__["TeamifyEntryPoint"].TeamifyBanner, strings: this.props.teamifyStrings, qos: this._teamifyQos })))));
    };
    TeamifyBanner.prototype._renderHideTeamifyButton = function () {
        var hideTeamifyButton;
        if (!this._hideTeamifyKillswitch) {
            // If the user has opted to hide the teamify option we should hide this menu.
            if (this.state.hasDismissed) {
                return null;
            }
            hideTeamifyButton = [
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyButton"], ariaLabel: _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyButtonAriaLabel, iconProps: { iconName: 'ChromeClose', className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyIcon"] }, onClick: this._onOpenHideTeamifyDialog }),
                this._renderHideTeamifyDialog()
            ];
            return hideTeamifyButton;
        }
    };
    TeamifyBanner.prototype._renderHideTeamifyDialog = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_4__["Dialog"], { hidden: !this.state.hideTeamifyDialogOpen, type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_4__["DialogType"].close, dialogContentProps: {
                type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_4__["DialogType"].close,
                title: _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogTitle,
                subText: _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_13__["format"](_TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogDescription, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogPermanentDismissLink),
                showCloseButton: true,
                onDismiss: this._onCloseHideTeamifyDialog
            }, modalProps: {
                onDismiss: this._onCloseHideTeamifyDialog
            }, isBlocking: false },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyDialogButtonContainer"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyDialogButton"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: this._onHideTeamifyBanner },
                        ' ',
                        _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogYesButton,
                        ' ')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyDialogButton"] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { onClick: this._onCloseHideTeamifyDialog },
                        ' ',
                        _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogNoButton,
                        ' '))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["hideTeamifyDialogButtonContainer"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_6__["Link"], { className: _TeamifyBanner_module_scss__WEBPACK_IMPORTED_MODULE_8__["dismissPermanentlyLink"], onClick: this._onDismissTeamifyBanner }, _TeamifyBanner_resx__WEBPACK_IMPORTED_MODULE_9___default.a.hideTeamifyDialogPermanentDismissLink))));
    };
    return TeamifyBanner;
}(_uifabric_utilities_lib_index__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (TeamifyBanner);
//# sourceMappingURL=TeamifyBanner.js.map

/***/ }),

/***/ "v2H1":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/GraphUserInfo.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: GraphUserInfoDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_graphUserInfo_GraphUserInfoDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/graphUserInfo/GraphUserInfoDataSource */ "skUM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphUserInfoDataSource", function() { return _dataSources_graphUserInfo_GraphUserInfoDataSource__WEBPACK_IMPORTED_MODULE_0__["GraphUserInfoDataSource"]; });


//# sourceMappingURL=GraphUserInfo.js.map

/***/ }),

/***/ "vMXs":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Coachmark/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: Coachmark, COACHMARK_ATTRIBUTE_NAME, CoachmarkBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Coachmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coachmark */ "59YV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coachmark", function() { return _Coachmark__WEBPACK_IMPORTED_MODULE_0__["Coachmark"]; });

/* harmony import */ var _Coachmark_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coachmark.base */ "7luo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COACHMARK_ATTRIBUTE_NAME", function() { return _Coachmark_base__WEBPACK_IMPORTED_MODULE_1__["COACHMARK_ATTRIBUTE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoachmarkBase", function() { return _Coachmark_base__WEBPACK_IMPORTED_MODULE_1__["CoachmarkBase"]; });



//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~spcx-teamify_[locale].js.map