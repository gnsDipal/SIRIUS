(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-panels"],{

/***/ "+RfP":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelContainer.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_6b55bba6{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:150px}.b_a_6b55bba6 .c_a_6b55bba6{display:inline-block;border:none}", ""]);


/***/ }),

/***/ "5Prl":
/*!**************************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelContainer.module.scss.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./SitePermissionsPanelContainer.module.css */ "csJC");
var styles = {
    spinnerContainer: 'a_a_6b55bba6',
    overrideBingPreview: 'b_a_6b55bba6',
    override: 'c_a_6b55bba6'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "6tIO":
/*!**************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelContainer.js ***!
  \**************************************************************************************/
/*! exports provided: SitePermissionsPanelContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitePermissionsPanelContainer", function() { return SitePermissionsPanelContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_shared_react_lib_SitePermissionsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/SitePermissionsPanel */ "uEVh");
/* harmony import */ var _ms_odsp_shared_react_lib_containers_SitePermissions_SitePermissionsStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/containers/SitePermissions/SitePermissionsStateManager */ "CgVw");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SitePermissionsPanelContainer.resx */ "msui");
var _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SitePermissionsPanelContainer.resx */ "msui", 1);
/* harmony import */ var _SitePermissionsPanelContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SitePermissionsPanelContainer.module.scss */ "5Prl");
/* harmony import */ var _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../loaders/spcx-siteHeaderLPC */ "oGdD");
/* harmony import */ var _loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../loaders/spcx-panels */ "mK7h");
/* harmony import */ var _ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/index */ "dV1M");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_11__);









// Loaders for defer-loaded code




var SitePermissionsPanelContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SitePermissionsPanelContainer, _super);
    function SitePermissionsPanelContainer(props) {
        var _this = _super.call(this, props) || this;
        _this._goToMembersOnClick = function () {
            Object(_loaders_spcx_panels__WEBPACK_IMPORTED_MODULE_8__["groupMembershipPanelRendererLoader"])().then(function (renderer) {
                renderer.render({
                    serviceScope: _this.props.serviceScope,
                    pageContext: _this.props.pageContext,
                    onDismiss: function () {
                        /* no-op */
                    }
                });
            });
        };
        _this._renderLoadingIndicator = function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SitePermissionsPanelContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].spinnerContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["Spinner"], { type: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_10__["SpinnerType"].large })));
        };
        var isGroup = _this.props.isGroup;
        _this.state = {
            showShareSiteOnly: _this.props.showShareSiteOnly
        };
        _this._serviceScope = _this.props.serviceScope;
        var peoplePickerDataSourceService = _this._serviceScope && _this._serviceScope.consume(_ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_9__["PeoplePickerDataSourceService"].serviceKey);
        _this._peoplePickerDataSource =
            peoplePickerDataSourceService && peoplePickerDataSourceService.peoplePickerDataSource;
        _this._state = new _ms_odsp_shared_react_lib_containers_SitePermissions_SitePermissionsStateManager__WEBPACK_IMPORTED_MODULE_3__["default"]({
            sitePermissionsPanelContainer: _this,
            pageContext: props.pageContext,
            title: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["title"],
            fullControl: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["fullControl"],
            edit: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["edit"],
            read: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["read"],
            remove: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["remove"],
            panelDescription: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["panelDescription"],
            addMembersToGroup: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["addMembersToGroup"],
            shareSiteOnly: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["shareSiteOnly"],
            invitePeople: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["invitePeople"],
            groupOwners: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["groupOwners"],
            groupMembers: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["groupMembers"],
            saveButton: _this.props.shouldLoadSharePanelOnly ? _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["share"] : _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["addButton"],
            cancelButton: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["cancelButton"],
            addUserOrGroupText: isGroup ? _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["addUserOrGroupText"] : undefined,
            shareSiteOnlyDescription: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["shareSiteOnlyDescription"],
            advancedPermSettingsUrl: _this.getAdvancedPermissionsSettingsUrl(),
            advancedPermSettings: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["advancedPermSettings"],
            goToOutlookLink: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["goToOutlookLink"],
            goToOutlookText: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["goToOutlookText"],
            goToOutlookOnClick: _this._goToMembersOnClick.bind(_this),
            manageSitePermissions: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["manageSitePermissions"],
            siteOwners: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["siteOwners"],
            siteMembers: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["siteMembers"],
            siteVisitors: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["siteVisitors"],
            shareSiteOnlyVerboseText: isGroup ? _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["shareSiteOnlyVerboseText"] : undefined,
            shareSiteOnlyAddMembersLinkText: isGroup ? _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["shareSiteOnlyAddMembersLinkText"] : undefined,
            emptyGroupText: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["emptyGroupText"],
            shareSiteTitle: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["shareSiteTitle"],
            addMemberDefaultPermissionLevel: isGroup ? _ms_odsp_shared_react_lib_containers_SitePermissions_SitePermissionsStateManager__WEBPACK_IMPORTED_MODULE_3__["PermissionLevel"].Edit : _ms_odsp_shared_react_lib_containers_SitePermissions_SitePermissionsStateManager__WEBPACK_IMPORTED_MODULE_3__["PermissionLevel"].Read,
            shouldLoadSharePanelOnly: props.shouldLoadSharePanelOnly,
            onSendEmail: props.sendEmail,
            sendEmailText: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["sendEmailText"],
            messagePlaceHolderText: _SitePermissionsPanelContainer_resx__WEBPACK_IMPORTED_MODULE_5__["messagePlaceHolder"],
            isEmailSharingEnabled: true,
            peoplePickerDataSource: _this._peoplePickerDataSource
        });
        return _this;
    }
    SitePermissionsPanelContainer.prototype.componentDidMount = function () {
        var _this = this;
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_11__["SPComponentLoader"].loadComponentById(SitePermissionsPanelContainer._spHtmlEmbedComponentId).then(function (module) {
            _this._htmlEmbed = module.HTMLEmbed;
            _this._embedCodeType = module.EmbedCodeType;
            _this._embedCodeShownType = module.EmbedCodeShownType;
            _this._embeddableServiceFactory = module.EmbeddableServiceFactory;
            _this.setState({
                htmlEmbedControlLoaded: true
            });
        });
        this._state.componentDidMount();
    };
    SitePermissionsPanelContainer.prototype.componentWillUnmount = function () {
        this._state.componentWillUnmount();
    };
    SitePermissionsPanelContainer.prototype.render = function () {
        /* tslint:disable:no-any */
        var sitePermissionsPanelProps = this._state.getRenderProps(Object(_loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__["getLivePersonaCardAdapterComponentModuleLoader"])());
        /* tslint:enable:no-any */
        sitePermissionsPanelProps.sitePreviewLoader = this.state.htmlEmbedControlLoaded
            ? this._renderHTMLEmbed()
            : undefined;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_SitePermissionsPanel__WEBPACK_IMPORTED_MODULE_2__["SitePermissionsPanel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sitePermissionsPanelProps));
    };
    SitePermissionsPanelContainer.prototype.getAdvancedPermissionsSettingsUrl = function () {
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Uri"].concatenate(this.props.pageContext.webServerRelativeUrl, this.props.pageContext.layoutsUrl, 'user.aspx');
    };
    SitePermissionsPanelContainer.prototype._renderHTMLEmbed = function () {
        var featureName = 'SitePermissionsPanel';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _SitePermissionsPanelContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].overrideBingPreview },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this._htmlEmbed, { embedCode: {
                    embedCode: window.location.href,
                    embedCodeType: this._embedCodeType.Url,
                    embedCodeShownType: this._embedCodeShownType.BingPreviewStyle
                }, className: _SitePermissionsPanelContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].override, shouldScale: true, renderLoadingIndicator: this._renderLoadingIndicator, embeddableService: this._embeddableServiceFactory.createEmbeddableService(window.location.href, featureName, this.props.serviceScope), titleMetaDataOverride: this.props.pageContext.webTitle })));
    };
    SitePermissionsPanelContainer._spHtmlEmbedComponentId = '3fbad3f4-a628-41b0-8694-2054c09edccd';
    return SitePermissionsPanelContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (SitePermissionsPanelContainer);


/***/ }),

/***/ "7aNq":
/*!****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/PeoplePickerDataSourceService.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSourceService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSourceService", function() { return PeoplePickerDataSourceService; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/peoplePicker/spo/PeoplePickerDataSource */ "yImb");
/* harmony import */ var _oAuthToken_OAuthTokenProviderShim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../oAuthToken/OAuthTokenProviderShim */ "azBL");
/* harmony import */ var _ms_odsp_datasources_lib_utilities_peoplePicker_GraphPeoplePickerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/utilities/peoplePicker/GraphPeoplePickerHelper */ "UeHE");
/* harmony import */ var _ms_odsp_datasources_lib_utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/utilities/peoplePicker/SubstratePeoplePickerHelper */ "8VvQ");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);




 // Wraped for max line limit

/**
 * This class allows one to obtain PeoplePickDataSouce with graph and substrate search ability.
 * A peoplePickerDataSourceServiceLoader is provided in ./loader/sp-component-utilities-peoplepicker-datasource
 * for deferred load.
 */
var PeoplePickerDataSourceService = /** @class */ (function () {
    function PeoplePickerDataSourceService(serviceScope) {
        this._serviceScope = serviceScope;
    }
    Object.defineProperty(PeoplePickerDataSourceService.prototype, "peoplePickerDataSource", {
        get: function () {
            if (this._peoplePickerDataSource === undefined) {
                var spPageContext = this._serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
                var pageContext = spPageContext && spPageContext.legacyPageContext;
                var oAuthTokenProvider = new _oAuthToken_OAuthTokenProviderShim__WEBPACK_IMPORTED_MODULE_2__["OAuthTokenProviderShim"](this._serviceScope);
                var graphPeoplePickerHelper = new _ms_odsp_datasources_lib_utilities_peoplePicker_GraphPeoplePickerHelper__WEBPACK_IMPORTED_MODULE_3__["GraphPeoplePickerHelper"]({}, { pageContext: pageContext, oAuthTokenProvider: oAuthTokenProvider });
                var substratePeoplePickerHelper = new _ms_odsp_datasources_lib_utilities_peoplePicker_SubstratePeoplePickerHelper__WEBPACK_IMPORTED_MODULE_4__["SubstratePeoplePickerHelper"]({}, { pageContext: pageContext, oAuthTokenProvider: oAuthTokenProvider });
                this._peoplePickerDataSource = new _ms_odsp_datasources_lib_dataSources_peoplePicker_spo_PeoplePickerDataSource__WEBPACK_IMPORTED_MODULE_1__["PeoplePickerDataSource"]({}, {
                    pageContext: pageContext,
                    graphPeoplePickerHelper: graphPeoplePickerHelper,
                    substratePeoplePickerHelper: substratePeoplePickerHelper
                });
            }
            return this._peoplePickerDataSource;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The service key for PeoplePickDataSouce.
     */
    PeoplePickerDataSourceService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-component-utilities:PeoplePickerDataSource', PeoplePickerDataSourceService);
    return PeoplePickerDataSourceService;
}());

/* harmony default export */ __webpack_exports__["default"] = (PeoplePickerDataSourceService);


/***/ }),

/***/ "A7bO":
/*!*******************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/GroupMembershipPanel/GroupMembershipPanel.resx ***!
  \*******************************************************************************/
/*! exports provided: title, owner, member, guest, updating, removeFromGroup, membersCount, membersCountIntervals, save, ok, cancel, addMembers, removeLastOwnerError, demoteLastOwnerError, addMembersInstructions, addMembersOrGuestsInstructions, addGuestsLink, enterNameOrEmailAddress, addMemberFailedErrorMessageSingular, addMemberFailedErrorMessageMultiple, addMemberFailedErrorMessage, errorMessage, largeGroupMessage, outlookLink, searchMembersMessage, searchMembersLink, removeOwnerConfirmation, closeButtonLabel, closeErrorMessageLabel, loadingMembersErrorMessage, addingGuest, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Ĝŕōũƥ mēmƀēŕśĥĩƥ\",\"owner\":\"Ōŵńēŕ\",\"member\":\"Mēmƀēŕ\",\"guest\":\"Ĝũēśţ\",\"updating\":\"Ũƥďàţĩńĝ...\",\"removeFromGroup\":\"Ŕēmōvē ƒŕōm ĝŕōũƥ\",\"membersCount\":\"{0} mēmƀēŕś||{0} mēmƀēŕ||{0} mēmƀēŕś\",\"membersCountIntervals\":\"0||1||2-\",\"save\":\"Śàvē\",\"ok\":\"ŌĶ\",\"cancel\":\"Ćàńćēĺ\",\"addMembers\":\"Àďď mēmƀēŕś\",\"removeLastOwnerError\":\"Ţĥĩś ĝŕōũƥ ĥàś ōńĺŷ ōńē ōŵńēŕ. Ţō ŕēmōvē ţĥē ōŵńēŕ ƒŕōm ţĥē ĝŕōũƥ, ƒĩŕśţ ƥŕōmōţē àńōţĥēŕ mēmƀēŕ ţō ōŵńēŕ.\",\"demoteLastOwnerError\":\"Ţĥĩś ĝŕōũƥ ĥàś ōńĺŷ ōńē ōŵńēŕ. Ţō ćĥàńĝē ţĥē ōŵńēŕ ţō à mēmƀēŕ, ƒĩŕśţ ƥŕōmōţē àńōţĥēŕ mēmƀēŕ ţō ōŵńēŕ.\",\"addMembersInstructions\":\"Àďď ćōĺĺēàĝũēś ţō ţĥĩś ĝŕōũƥ.\",\"addMembersOrGuestsInstructions\":\"Àďď ćōĺĺēàĝũēś ţō ţĥĩś ĝŕōũƥ. Ţō àďď ĝũēśţś, {0}.\",\"addGuestsLink\":\"ĝō ţō Ōũţĺōōķ\",\"enterNameOrEmailAddress\":\"Ēńţēŕ à ńàmē ōŕ ēmàĩĺ àďďŕēśś\",\"addMemberFailedErrorMessageSingular\":\"Ćōũĺďń\\u0027ţ àďď {0} àś à mēmƀēŕ.\",\"addMemberFailedErrorMessageMultiple\":\"Ćōũĺďń\\u0027ţ àďď ţĥēśē ƥēōƥĺē àś mēmƀēŕś: {0}.\",\"addMemberFailedErrorMessage\":\"Ćōũĺďń\\u0027ţ àďď ũśēŕś.\",\"errorMessage\":\"Àń ēŕŕōŕ ōććũŕŕēď ŵĥĩĺē ƥŕōćēśśĩńĝ ţĥĩś ŕēǫũēśţ.\",\"largeGroupMessage\":\"Ţĥĩś ĝŕōũƥ ĥàś mōŕē mēmƀēŕś ţĥàń ŵē ćàń śĥōŵ ĥēŕē. {0}, àńď śēàŕćĥ ţō ƒĩńď ƥēōƥĺē.\",\"outlookLink\":\"Ōƥēń ţĥē ĺĩśţ ōƒ mēmƀēŕś ĩń Ōũţĺōōķ\",\"searchMembersMessage\":\"Śćŕōĺĺ ďōŵń ţō śēē mōŕē mēmƀēŕś ōŕ {0} ţō śēàŕćĥ ƒōŕ à śƥēćĩƒĩć mēmƀēŕ.\",\"searchMembersLink\":\"ōƥēń ţĥē ĺĩśţ ĩń Ōũţĺōōķ\",\"removeOwnerConfirmation\":\"Ĩƒ ŷōũ\\u0027ŕē ńō ĺōńĝēŕ àń ōŵńēŕ, ŷōũ ŵōń\\u0027ţ ƀē àƀĺē ţō màńàĝē ţĥē ĝŕōũƥ.\",\"closeButtonLabel\":\"Ćĺōśē\",\"closeErrorMessageLabel\":\"Ćĺōśē ēŕŕōŕ mēśśàĝē\",\"loadingMembersErrorMessage\":\"Śōŕŕŷ, ŵē ćōũĺďń\\u0027ţ ďĩśƥĺàŷ àĺĺ ţĥē ĝŕōũƥ mēmƀēŕś. Ƥĺēàśē ţŕŷ àĝàĩń ĩń à ƒēŵ mĩńũţēś.\",\"addingGuest\":\"Ŷōũ\\u0027ŕē àďďĩńĝ à ĝũēśţ ţō ţĥĩś ĝŕōũƥ. Àś à mēmƀēŕ, ţĥēŷ\\u0027ĺĺ ĥàvē àććēśś ţō ĝŕōũƥ ćōńţēńţ.\"}");

/***/ }),

/***/ "S+CH":
/*!**************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/GroupMembershipPanel/GroupMembershipPanelContainer.js ***!
  \**************************************************************************************/
/*! exports provided: GroupMembershipPanelContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMembershipPanelContainer", function() { return GroupMembershipPanelContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_shared_react_lib_GroupMembershipPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/GroupMembershipPanel */ "N96U");
/* harmony import */ var _ms_odsp_shared_react_lib_containers_groupMembershipPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/containers/groupMembershipPanel */ "fvyv");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../loaders/spcx-groupsProvider */ "+IOR");
/* harmony import */ var _ms_odsp_datasources_lib_providers_groups_GroupSiteProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/groups/GroupSiteProvider */ "ZaX7");
/* harmony import */ var _loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../loaders/spcx-siteHeaderLPC */ "oGdD");
/* harmony import */ var _ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/index */ "dV1M");
/* harmony import */ var _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GroupMembershipPanel.resx */ "A7bO");
var _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./GroupMembershipPanel.resx */ "A7bO", 1);
// OneDrive:IgnoreCodeCoverage










var GroupMembershipPanelContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupMembershipPanelContainer, _super);
    function GroupMembershipPanelContainer(props) {
        var _this = _super.call(this, props) || this;
        _this._serviceScope = props.serviceScope;
        var peoplePickerDataSourceService = _this._serviceScope && _this._serviceScope.consume(_ms_sp_component_utilities_lib_chunks_sp_component_utilities_peoplepicker_datasource_index__WEBPACK_IMPORTED_MODULE_8__["PeoplePickerDataSourceService"].serviceKey);
        _this._peoplePickerDataSource =
            peoplePickerDataSourceService && peoplePickerDataSourceService.peoplePickerDataSource;
        _this._state = new _ms_odsp_shared_react_lib_containers_groupMembershipPanel__WEBPACK_IMPORTED_MODULE_3__["GroupMembershipPanelStateManager"]({
            groupMembershipPanelContainer: _this,
            pageContext: _this.props.pageContext,
            getGroupsProvider: _this._getGroupsProvider.bind(_this),
            getGroupSiteProvider: _this._getGroupSiteProvider.bind(_this),
            peoplePickerDataSource: _this._peoplePickerDataSource,
            strings: {
                title: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["title"],
                memberText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["member"],
                ownerText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["owner"],
                updatingText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["updating"],
                guestText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["guest"],
                removeFromGroupText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["removeFromGroup"],
                membersCountText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["membersCount"],
                membersCountIntervalsText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["membersCountIntervals"],
                addMembersText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMembers"],
                doneButtonText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["save"],
                cancelButtonText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["cancel"],
                removeLastOwnerErrorText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["removeLastOwnerError"],
                demoteLastOwnerErrorText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["demoteLastOwnerError"],
                addMembersInstructionsText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMembersInstructions"],
                addMembersOrGuestsInstructionsText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMembersOrGuestsInstructions"],
                addGuestsLinkText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addGuestsLink"],
                peoplePickerPlaceholderText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["enterNameOrEmailAddress"],
                addMemberFailedSingularText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMemberFailedErrorMessageSingular"],
                addMemberFailedPluralText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMemberFailedErrorMessageMultiple"],
                addMemberFailedText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addMemberFailedErrorMessage"],
                serverErrorMessage: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["errorMessage"],
                largeGroupMessage: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["largeGroupMessage"],
                outlookLinkText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["outlookLink"],
                searchMembersMessage: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["searchMembersMessage"],
                searchLinkText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["searchMembersLink"],
                closeButtonAriaLabel: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["closeButtonLabel"],
                dismissErrorMessageAriaLabel: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["closeErrorMessageLabel"],
                okButtonText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["ok"],
                confirmationText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["removeOwnerConfirmation"],
                addingGuestText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["addingGuest"],
                loadingMembersErrorText: _GroupMembershipPanel_resx__WEBPACK_IMPORTED_MODULE_9__["loadingMembersErrorMessage"]
            }
        });
        return _this;
    }
    GroupMembershipPanelContainer.prototype.componentDidMount = function () {
        this._state.componentDidMount();
    };
    GroupMembershipPanelContainer.prototype.componentWillUnmount = function () {
        this._state.componentWillUnmount();
    };
    GroupMembershipPanelContainer.prototype.render = function () {
        /* tslint:disable:no-any */
        var groupMembershipPanelProps = this._state.getRenderProps(Object(_loaders_spcx_siteHeaderLPC__WEBPACK_IMPORTED_MODULE_7__["getLivePersonaCardAdapterComponentModuleLoader"])());
        /* tslint:enable:no-any */
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_GroupMembershipPanel__WEBPACK_IMPORTED_MODULE_2__["GroupMembershipPanel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupMembershipPanelProps));
    };
    GroupMembershipPanelContainer.prototype._getGroupsProvider = function () {
        return _loaders_spcx_groupsProvider__WEBPACK_IMPORTED_MODULE_5__["GroupsProviderFactory"].GetGroupsProvider(this.props.pageContext);
    };
    GroupMembershipPanelContainer.prototype._getGroupSiteProvider = function () {
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_4__["Promise"].wrap(new _ms_odsp_datasources_lib_providers_groups_GroupSiteProvider__WEBPACK_IMPORTED_MODULE_6__["GroupSiteProvider"]({
            pageContext: this.props.pageContext
        }));
    };
    return GroupMembershipPanelContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (GroupMembershipPanelContainer);


/***/ }),

/***/ "WR5I":
/*!*************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelRenderer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SitePermissionsPanelContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SitePermissionsPanelContainer */ "6tIO");




var SitePermissionsPanelRenderer = /** @class */ (function () {
    function SitePermissionsPanelRenderer() {
    }
    SitePermissionsPanelRenderer.prototype.render = function (props) {
        var _this = this;
        // If the container doesn't exist, create a new one, otherwise remove all the children inside and reuse it.
        if (!this._container) {
            this._container = document.createElement('div');
        }
        else {
            this._clearContainer();
        }
        var sitePermissionsPanelReactElement = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_SitePermissionsPanelContainer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { onDismiss: function () { return _this._onDismiss; } }));
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](sitePermissionsPanelReactElement, this._container);
    };
    SitePermissionsPanelRenderer.prototype._clearContainer = function () {
        while (this._container && this._container.firstChild) {
            this._container.removeChild(this._container.firstChild);
        }
    };
    SitePermissionsPanelRenderer.prototype._onDismiss = function () {
        this._clearContainer();
    };
    return SitePermissionsPanelRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (SitePermissionsPanelRenderer);


/***/ }),

/***/ "azBL":
/*!**************************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-component-utilities/lib/oAuthToken/OAuthTokenProviderShim.js ***!
  \**************************************************************************************************/
/*! exports provided: OAuthTokenProviderShim, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthTokenProviderShim", function() { return OAuthTokenProviderShim; });
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");



var OAuthTokenProviderShim = /** @class */ (function () {
    function OAuthTokenProviderShim(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._oAuthTokenProvider = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["OAuthTokenProvider"].serviceKey);
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_1__["PageContext"].serviceKey);
        });
    }
    OAuthTokenProviderShim.prototype.getToken = function (audience, skipCache) {
        if (this._oAuthTokenProvider) {
            if (skipCache) {
                this._oAuthTokenProvider.clearCachedToken(audience);
            }
            var serverRelativeUrl = this._pageContext && this._pageContext.web && this._pageContext.web.serverRelativeUrl;
            return this._oAuthTokenProvider.getOAuthToken(audience, serverRelativeUrl).then(function (response) {
                return response.token;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(undefined);
    };
    OAuthTokenProviderShim.prototype.getInstrumentedToken = function (audience, skipCache) {
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(undefined);
    };
    return OAuthTokenProviderShim;
}());

/* harmony default export */ __webpack_exports__["default"] = (OAuthTokenProviderShim);


/***/ }),

/***/ "csJC":
/*!**********************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelContainer.module.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./SitePermissionsPanelContainer.module.css */ "+RfP");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "dV1M":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/libraries/sp-component-utilities/lib/chunks/sp-component-utilities-peoplepicker-datasource/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: PeoplePickerDataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PeoplePickerDataSourceService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeoplePickerDataSourceService */ "7aNq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeoplePickerDataSourceService", function() { return _PeoplePickerDataSourceService__WEBPACK_IMPORTED_MODULE_0__["PeoplePickerDataSourceService"]; });




/***/ }),

/***/ "h9jo":
/*!*************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/GroupMembershipPanel/GroupMembershipPanelRenderer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GroupMembershipPanelContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupMembershipPanelContainer */ "S+CH");



// tslint:disable-next-line:export-name
var GroupMembershipPanelRenderer = /** @class */ (function () {
    function GroupMembershipPanelRenderer() {
    }
    GroupMembershipPanelRenderer.prototype.render = function (props) {
        var _this = this;
        // If the container doesn't exist, create a new one, otherwise remove all the children inside and reuse it.
        if (!this._container) {
            this._container = document.createElement('div');
        }
        else {
            this._clearContainer();
        }
        var groupMembershipPanelReactElement = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupMembershipPanelContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
            serviceScope: props.serviceScope,
            pageContext: props.pageContext,
            onDismiss: function () { return _this._onDismiss(); }
        });
        react_dom__WEBPACK_IMPORTED_MODULE_0__["render"](groupMembershipPanelReactElement, this._container);
    };
    GroupMembershipPanelRenderer.prototype._clearContainer = function () {
        while (this._container && this._container.firstChild) {
            this._container.removeChild(this._container.firstChild);
        }
    };
    GroupMembershipPanelRenderer.prototype._onDismiss = function () {
        this._clearContainer();
    };
    return GroupMembershipPanelRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (GroupMembershipPanelRenderer);


/***/ }),

/***/ "msui":
/*!****************************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/SitePermissionsPanel/SitePermissionsPanelContainer.resx ***!
  \****************************************************************************************/
/*! exports provided: title, share, fullControl, edit, read, remove, panelDescription, addMembersToGroup, shareSiteOnly, shareSiteOnlyDescription, invitePeople, groupOwners, groupMembers, addButton, cancelButton, addUserOrGroupText, advancedPermSettings, goToOutlookLink, goToOutlookText, manageSitePermissions, siteOwners, siteMembers, siteVisitors, shareSiteOnlyVerboseText, shareSiteOnlyAddMembersLinkText, emptyGroupText, shareSiteTitle, sendEmailText, messagePlaceHolder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Śĩţē ƥēŕmĩśśĩōńś\",\"share\":\"Śĥàŕē\",\"fullControl\":\"Ƒũĺĺ Ćōńţŕōĺ\",\"edit\":\"Ēďĩţ\",\"read\":\"Ŕēàď\",\"remove\":\"Ŕēmōvē\",\"panelDescription\":\"Màńàĝē śĩţē ƥēŕmĩśśĩōńś ōŕ ĩńvĩţē ōţĥēŕś ţō ćōĺĺàƀōŕàţē\",\"addMembersToGroup\":\"Àďď Mēmƀēŕś ţō Ĝŕōũƥ\",\"shareSiteOnly\":\"Śĥàŕē Śĩţē Ōńĺŷ\",\"shareSiteOnlyDescription\":\"Ƥŕōvĩďē àććēśś ōńĺŷ ţō ţĥĩś śĩţē\",\"invitePeople\":\"Ĩńvĩţē ƥēōƥĺē\",\"groupOwners\":\"{0} ōŵńēŕś\",\"groupMembers\":\"{0} mēmƀēŕś\",\"addButton\":\"Àďď\",\"cancelButton\":\"Ćàńćēĺ\",\"addUserOrGroupText\":\"Àďď ũśēŕś, Mĩćŕōśōƒţ 365 Ĝŕōũƥś ōŕ śēćũŕĩţŷ ĝŕōũƥś\",\"advancedPermSettings\":\"Àďvàńćēď ƥēŕmĩśśĩōńś śēţţĩńĝś\",\"goToOutlookLink\":\"Ōũţĺōōķ\",\"goToOutlookText\":\"Ţō vĩēŵ ōŕ ćĥàńĝē ţĥē ĝŕōũƥ mēmƀēŕś ƒōŕ ţĥĩś śĩţē, ĝō ţō {0}.\",\"manageSitePermissions\":\"Màńàĝē ƥēŕmĩśśĩōńś ƒōŕ ţĥĩś śĩţē ĥēŕē\",\"siteOwners\":\"Śĩţē ōŵńēŕś\",\"siteMembers\":\"Śĩţē mēmƀēŕś\",\"siteVisitors\":\"Śĩţē vĩśĩţōŕś\",\"shareSiteOnlyVerboseText\":\"Ţĥĩś śĩţē ĩś ƥàŕţ ōƒ à Mĩćŕōśōƒţ 365 Ĝŕōũƥ. Śĥàŕĩńĝ ţĥē śĩţē ŵōń\\u0027ţ ĝĩvē ũśēŕś àććēśś ţō Mĩćŕōśōƒţ 365 Ĝŕōũƥ ŕēśōũŕćēś śũćĥ àś ćōńvēŕśàţĩōńś àńď ćàĺēńďàŕś. Ţō ďō ţĥàţ, ũśē {0} ĩńśţēàď.\",\"shareSiteOnlyAddMembersLinkText\":\"àďď mēmƀēŕś ţō ţĥē ĝŕōũƥ\",\"emptyGroupText\":\"Ńōńē\",\"shareSiteTitle\":\"Śĥàŕē śĩţē\",\"sendEmailText\":\"Śēńď Ēmàĩĺ\",\"messagePlaceHolder\":\"Àďď à mēśśàĝē\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.spcx-panels_[locale].js.map