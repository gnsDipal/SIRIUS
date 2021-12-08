(window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] = window["webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0"] || []).push([["vendors~spcx-sitefooter"],{

/***/ "+yYx":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/SimpleFooter/SimpleFooter.base.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: getFooterProps, SimpleFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFooterProps", function() { return getFooterProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFooterBase", function() { return SimpleFooterBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Permissions */ "jH+c");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "s4p3");











var getClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["classNamesFunction"])();
var HEADER_LINK_URL = 'http://linkless.header/';
/**
 * Parse footer node into separate footer options
 * @param group Footer node
 * @public
 */
function getFooterProps(links, strings, theme, pageContext) {
    var footerProps = {
        footerStrings: strings,
        pageContext: pageContext
    };
    if (theme) {
        footerProps.theme = theme;
    }
    if (links && Array.isArray(links)) {
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var node = links_1[_i];
            if (!node) {
                continue;
            }
            else if (node.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */) {
                // logo
                footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { srcImgUrl: node.url });
            }
            else if (node.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */) {
                // name
                if (node.links && node.links.length) {
                    footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { name: node.links[0].name });
                }
            }
            else if (node.name === "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */) {
                // nav links
                footerProps.links = node.links;
            }
        }
    }
    return footerProps;
}
var CREATE_SITE_REL_PATH = '_layouts/15/createGroup.aspx?siteTemplate=68';
var DEFAULT_POWERED_BY_NODE_KEY = 'defaultPoweredBySharePointNode';
var DEFAULT_GET_MOBILE_APP_NODE_KEY = 'defaultGetMobileAppNode';
var SimpleFooterBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleFooterBase, _super);
    function SimpleFooterBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onLogoError = function () {
            _this.setState({ hasLogoLoadError: true });
        };
        _this._onEditLinksClicked = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({ name: 'FooterLinks.Edit.Click' });
            if (!_this.props.onEditNavClicked) {
                return;
            }
            var spNavLinkGroup = {
                links: _this.props.links || [],
                name: "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */
            };
            _this.props.onEditNavClicked(spNavLinkGroup, undefined, _this._updateFooterDisplayLink);
        };
        _this._updateFooterDisplayLink = function (links, afterSetState) {
            if (_this.props.onFooterLinksUpdated) {
                _this.props.onFooterLinksUpdated();
            }
            if (afterSetState) {
                afterSetState();
            }
        };
        _this.state = {
            hasLogoLoadError: false
        };
        return _this;
    }
    SimpleFooterBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? this.props.getStyles : _b, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.simpleFooterContainer, role: 'contentinfo', "data-automationid": 'SimpleFooter' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.simpleFooterLogoSlot }, this.props.logo && this._renderLogo(this.props.logo)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.simpleFooterLinkSlots },
                this._showEditNavLink && this._renderEditLink(),
                this.props.links &&
                    this.props.links.map(function (value, index) { return _this._renderNavLink(value, index); }))));
    };
    SimpleFooterBase.prototype._renderEditLink = function () {
        return this.props.footerStrings.edit ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.simpleFooterItem, "data-automationid": 'SimpleFooter-edit' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: this._classNames.simpleFooterEditItem, id: 'FooterEditLink', onClick: this._onEditLinksClicked, "aria-label": this.props.footerStrings.editAriaLabel ? this.props.footerStrings.editAriaLabel : '' }, this.props.footerStrings.edit))) : null;
    };
    Object.defineProperty(SimpleFooterBase.prototype, "_showEditNavLink", {
        get: function () {
            if (!this.props.pageContext || window['teamsCustomAppType'] === 'portals') {
                return false;
            }
            var isAnonymousGuest = this.props.pageContext.isAnonymousGuestUser || this.props.pageContext.isExternalGuestUser;
            var showEditLink = _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].hasPermission(this.props.pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].manageLists) &&
                !isAnonymousGuest;
            return showEditLink && this._isEditNavInFooterFlightOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFooterBase.prototype, "_isEditNavInFooterFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled({ ODB: 1560 } /* MoveEditFooterLink */);
        },
        enumerable: true,
        configurable: true
    });
    // TODO: remove this ms-specific code
    SimpleFooterBase.prototype._isMicrosoft = function () {
        return (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://microsoft.sharepoint.com') ||
            Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://microsoft.sharepoint-df.com') ||
            Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://msft.spoppe.com'));
    };
    SimpleFooterBase.prototype._getMobileUpsellLink = function () {
        return this._isMicrosoft() ? 'https://aka.ms/getspmobilemsit' : 'https://aka.ms/getspmteamcommsite';
    };
    SimpleFooterBase.prototype._getCreateSiteLink = function () {
        return _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"].concatenate(window.location.origin, CREATE_SITE_REL_PATH);
    };
    SimpleFooterBase.prototype._renderLogo = function (item) {
        var enableImage = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('d0c75a93-542a-4abc-ab67-cf128b08990f', '10/2/2019', 'Hide image on image error')
            ? true
            : !this.state.hasLogoLoadError;
        var destinationUrl = !!item.destinationUrl && item.destinationUrl.length > 0
            ? new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](item.destinationUrl).toString()
            : undefined;
        var target = this._islinkTargetKSActive() || destinationUrl === undefined
            ? '_blank'
            : _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"].shouldLinkOpenInSameWindow(destinationUrl)
                ? '_self'
                : '_blank';
        if (item.name && item.srcImgUrl) {
            var elements = [];
            if (enableImage) {
                elements.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["css"])(this._classNames.simpleFooterItem, 'simpleFooterLogoItem'), key: 'logo' }, !!item.destinationUrl && item.destinationUrl.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: destinationUrl, "data-interception": 'propagate', target: target, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["NavigationSource"].Footer) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: this._classNames.simpleFooterLogoImage, src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](item.srcImgUrl).toString(), onError: this._onLogoError, alt: item.name }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: this._classNames.simpleFooterLogoImage, src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](item.srcImgUrl).toString(), onError: this._onLogoError, alt: item.name }))));
            }
            elements.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["css"])(this._classNames.simpleFooterItem, 'simpleFooterNameItem'), key: 'name' }, !!item.destinationUrl && item.destinationUrl.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: destinationUrl, "data-interception": 'propagate', target: target }, item.name)) : (item.name)));
            return elements;
        }
        else if (item.name) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["css"])(this._classNames.simpleFooterItem, 'simpleFooterNameItem') }, !!item.destinationUrl && item.destinationUrl.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: destinationUrl, "data-interception": 'propagate', target: target, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["NavigationSource"].Footer) }, item.name)) : (item.name)));
        }
        else if (enableImage && item.srcImgUrl) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["css"])(this._classNames.simpleFooterItem, 'simpleFooterLogoItem') }, !!item.destinationUrl && item.destinationUrl.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: destinationUrl, "data-interception": 'propagate', target: target },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: this._classNames.simpleFooterLogoImage, src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](item.srcImgUrl).toString(), onError: this._onLogoError, alt: this.props.footerStrings.companyLogoAlt ? this.props.footerStrings.companyLogoAlt : '' }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: this._classNames.simpleFooterLogoImage, src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](item.srcImgUrl).toString(), onError: this._onLogoError, alt: this.props.footerStrings.companyLogoAlt ? this.props.footerStrings.companyLogoAlt : '' }))));
        }
        else {
            return undefined;
        }
    };
    SimpleFooterBase.prototype._renderNavLink = function (item, index) {
        var _this = this;
        if (this._isRemoveMobileAppButtonActive() && item.key === DEFAULT_GET_MOBILE_APP_NODE_KEY) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "footerLinkDiv" + index, className: this._classNames.simpleFooterItem, "data-automationid": 'simpleFooter-defaultGetMobileAppNode' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: this._getMobileUpsellLink(), "data-interception": 'propagate', target: '_blank' }, this.props.footerStrings.mobileUpsell)));
        }
        if (item.key === DEFAULT_POWERED_BY_NODE_KEY) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "footerLinkDiv" + index, className: this._classNames.simpleFooterItem, "data-automationid": 'simpleFooter-defaultPoweredBySharePointNode' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, this.props.footerStrings.poweredBy + " ",
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: this._getCreateSiteLink(), "data-interception": 'propagate', target: this._islinkTargetKSActive() ? '_blank' : '_self', onClick: item.onClick }, this.props.footerStrings.createSite))));
        }
        var linkTarget = this._islinkTargetKSActive()
            ? '_blank'
            : _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"].shouldLinkOpenInSameWindow(item.url)
                ? '_self'
                : '_blank';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.simpleFooterItem, key: "footerLinkDiv" + index }, !!item.url && item.url.length && item.url !== HEADER_LINK_URL ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: item.url, "data-interception": 'propagate', key: "footerLink" + index, target: linkTarget, onClick: function (ev) { return _this._itemOnClick(ev, item); }, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["NavigationSource"].Footer) }, item.name)) : (item.name)));
    };
    SimpleFooterBase.prototype._itemOnClick = function (ev, item) {
        var pageContext = this.props.pageContext;
        var numLinks = this.props.links ? this.props.links.length : 0;
        setTimeout(function () {
            return _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({
                name: "Footer.Link.Click",
                extraData: {
                    siteId: pageContext && pageContext.siteId,
                    numFooterLinks: numLinks,
                    layout: 'SimpleFooter'
                }
            });
        }, 0);
        if (item.onClick) {
            item.onClick(ev, item);
        }
    };
    SimpleFooterBase.prototype._islinkTargetKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('e2657949-d82e-4521-8087-e46b9f22c7c6', '4/14/2020', 'Keep consistent link targets with header');
    };
    SimpleFooterBase.prototype._isRemoveMobileAppButtonActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('8d38d290-4b6a-48c9-83f6-4ae1365db35c', '9/14/2020', 'Remove mobile APP button');
    };
    return SimpleFooterBase;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));

//# sourceMappingURL=SimpleFooter.base.js.map

/***/ }),

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "2vvD":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaFooter/MegaFooter.styles.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var _ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/shared-react-fluent-theme/lib/Fluent */ "rFal");



var MAX_FOOTER_LOGO_HEIGHT = 32;
var getStyles = function (props) {
    var sections = props.sections, theme = props.theme;
    var fonts = theme.fonts, semanticColors = theme.semanticColors;
    var spaceBetweenColumns = 24; // px
    var itemLineHeight = 19; // px
    var fluentItemLineHeight = 24; // px
    return {
        megaFooterContainer: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ alignItems: 'flex-start', backgroundColor: semanticColors.bodyBackground, color: semanticColors.bodyText, display: 'flex', flexWrap: 'wrap' }, fonts.medium), { height: 'auto', justifyContent: 'space-between', 
            // set paddingBottom to be 8 so that it adds 24px marginBottom from menuSection to be 32
            padding: "14px " + spaceBetweenColumns + "px 8px", 
            // remove z-index here once MobileUpsell sticky hovering button is gone from sp-pages
            zIndex: 13, selectors: {
                a: {
                    color: semanticColors.actionLink,
                    textDecoration: 'none',
                    selectors: {
                        ':hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            selectors: {
                                '.ms-ContextualMenu-itemText': {
                                    color: semanticColors.actionLinkHovered
                                }
                            }
                        }
                    }
                }
            } }),
        megaFooterLogo: {
            color: semanticColors.bodyText,
            display: 'flex',
            marginBottom: sections && sections.length > 0 ? spaceBetweenColumns : 0,
            selectors: {
                span: {
                    fontSize: fonts.mediumPlus.fontSize,
                    fontWeight: Object(_ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_2__["fluentFontWeights"])(theme).semibold.fontWeight,
                    margin: 'auto'
                },
                img: {
                    maxHeight: MAX_FOOTER_LOGO_HEIGHT,
                    marginRight: 8,
                    width: 'auto'
                }
            }
        },
        megaFooterSectionsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            selectors: {
                '.ms-MegaMenu-gridLayout': {
                    justifyContent: 'flex-start'
                },
                '.ms-MegaMenu-gridLayoutItem': {
                    marginRight: spaceBetweenColumns,
                    selectors: {
                        ':last-child': {
                            marginRight: 0
                        }
                    }
                },
                '.ms-Menu-section': {
                    margin: 0,
                    padding: 0,
                    // megamenu should have 24px between columns
                    marginBottom: spaceBetweenColumns + "px"
                },
                '.ms-Menu-heading': {
                    color: semanticColors.bodyText,
                    fontSize: fonts.medium.fontSize,
                    fontWeight: Object(_ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_2__["fluentFontWeights"])(theme).semibold.fontWeight,
                    lineHeight: itemLineHeight,
                    margin: 0,
                    padding: 0,
                    marginBottom: '8px'
                },
                '.ms-Menu-item': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fonts.medium), { lineHeight: fluentItemLineHeight, paddingTop: 0, selectors: {
                        '.ms-ContextualMenu-itemText': {
                            color: semanticColors.bodyText,
                            margin: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                            whiteSpace: 'nowrap'
                        }
                    } }),
                '.ms-Menu-itemLink': {
                    color: semanticColors.bodyText,
                    fontSize: office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].medium
                }
            }
        },
        megaFooterEditLinksButton: {
            background: 'none',
            border: 'none',
            color: semanticColors.link,
            cursor: 'pointer',
            fontSize: fonts.medium.fontSize,
            margin: "0 " + spaceBetweenColumns + "px " + spaceBetweenColumns + "px 0",
            padding: 0,
            textDecoration: 'none',
            selectors: {
                ':hover': {
                    color: semanticColors.linkHovered,
                    textDecoration: 'underline'
                }
            }
        }
    };
};
//# sourceMappingURL=MegaFooter.styles.js.map

/***/ }),

/***/ "3Q3O":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/utilities/performance/performance.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: now, mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global */ "i/zE");
// Utility functions for measuring page performance

function now() {
    return _Global__WEBPACK_IMPORTED_MODULE_0__["global"].performance && performance.now ? Math.round(performance.now()) : Date.now();
}
function mark(name) {
    if (_Global__WEBPACK_IMPORTED_MODULE_0__["global"].performance && performance.mark) {
        performance.mark(name);
    }
}
//# sourceMappingURL=performance.js.map

/***/ }),

/***/ "3btB":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: getDividerClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDividerClassNames", function() { return getDividerClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */
var getDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(
// eslint-disable-next-line deprecation/deprecation
function (theme) {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center',
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
    });
});
//# sourceMappingURL=VerticalDivider.classNames.js.map

/***/ }),

/***/ "4Nwi":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/ReactDeferredComponent.js ***!
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

/***/ "4nKP":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/PersistentCache.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: PersistentCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCache", function() { return PersistentCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/PersistentCacheIndexedDB */ "SjTB");
/* harmony import */ var _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/PersistentCacheLocalStorage */ "SHpA");
/* harmony import */ var _ms_utilities_crypto_lib_CryptoErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/utilities-crypto/lib/CryptoErrors */ "K5yv");
/* harmony import */ var _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CacheUpdateManager */ "pcnK");
/* harmony import */ var _utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/performance/performance */ "3Q3O");
/* harmony import */ var _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/ResultTypeEnum */ "Z+U/");







var CACHEKEY_PREFIX = '_odspcache_';
var logStatsTimeout = 30 * 1000;
var cacheKeyUserDelimiter = '_____';
var DEFAULT_CONFIG = {
    cacheType: 1 /* indexedDB */
};
var PersistentCache = /** @class */ (function () {
    function PersistentCache(configuration) {
        var _a = configuration.cacheType, cacheType = _a === void 0 ? DEFAULT_CONFIG.cacheType : _a, restOfConfiguration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(configuration, ["cacheType"]);
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restOfConfiguration), { cacheType: cacheType });
        this._cacheSecret = this._config.secret;
        this._dataIsEncrypted = !!this._cacheSecret;
        this._crypto = this._config.crypto;
        if (this._dataIsEncrypted && !this._crypto) {
            throw new Error("When data needs encryption, crypto implementing ICrypto has to be provided when initiating PersistentCache.");
        }
        this._cacheType = this._config.cacheType;
        this._app = configuration.app;
        this._cacheUpdateTaskManager = new _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_4__["CacheUpdateTaskManager"]();
        this._qos = this._config.telemetry && this._config.telemetry.qos;
        this._initLocalStorage(this._cacheType);
    }
    Object.defineProperty(PersistentCache.prototype, "configuration", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    PersistentCache.prototype.read = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, result, cryptoCost, ioCost, start, startDateTime, readResult, cacheKey, secretChanged, stats, clearTextData, ioStart, data, encryptedData, _a, currentSecret, previousSecret, cryptoStart, ex_1, ex_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logEndData = this._logQos({ name: 'PersistentCache.read' });
                        start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        startDateTime = Date.now();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, , 13]);
                        cacheKey = this._getCacheKey(key);
                        secretChanged = false;
                        stats = {
                            lastModified: NaN,
                            lastRead: startDateTime,
                            reads: 1
                        };
                        clearTextData = void 0;
                        if (!cacheKey) return [3 /*break*/, 11];
                        ioStart = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        return [4 /*yield*/, this._storage.read(cacheKey)];
                    case 2:
                        readResult = _b.sent();
                        ioCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - ioStart);
                        if (!readResult) return [3 /*break*/, 11];
                        data = readResult.data;
                        stats = {
                            lastModified: readResult.lastModified,
                            lastRead: startDateTime,
                            reads: readResult.reads + 1
                        };
                        result = PersistentCache._buffer[cacheKey];
                        if (!(result && result.cacheStats.lastModified === readResult.lastModified)) return [3 /*break*/, 3];
                        result.app = readResult.app || this._app;
                        result.key = {
                            original: key,
                            encoded: readResult.key || cacheKey
                        };
                        // use in-memory cached data to save the cost of decryption
                        result.cacheStats.lastRead = startDateTime;
                        result.cacheStats.reads++;
                        result.performance = {
                            total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                        };
                        return [3 /*break*/, 11];
                    case 3:
                        result = undefined; // do not use buffered data if lastModified does not match
                        if (!(data !== undefined)) return [3 /*break*/, 11];
                        if (!this._dataIsEncrypted) return [3 /*break*/, 10];
                        encryptedData = data;
                        _a = this._cacheSecret, currentSecret = _a.CurrentKey.Key, previousSecret = _a.PreviousKey.Key;
                        cryptoStart = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 9]);
                        return [4 /*yield*/, this._crypto.decrypt({
                                encryptedData: encryptedData,
                                encryptionSecret: currentSecret
                            })];
                    case 5:
                        clearTextData = (_b.sent());
                        return [3 /*break*/, 9];
                    case 6:
                        ex_1 = _b.sent();
                        if (!(ex_1 && ex_1.message && ex_1.message.indexOf(_ms_utilities_crypto_lib_CryptoErrors__WEBPACK_IMPORTED_MODULE_3__["CryptoErrors"].secretError) >= 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this._crypto.decrypt({
                                encryptedData: encryptedData,
                                encryptionSecret: previousSecret
                            })];
                    case 7:
                        clearTextData = (_b.sent());
                        secretChanged = typeof clearTextData !== 'undefined';
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].ExpectedFailure,
                            error: ex_1.message,
                            extraData: {
                                cacheResult: 'hit'
                            }
                        });
                        _b.label = 8;
                    case 8: return [3 /*break*/, 9];
                    case 9:
                        cryptoCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - cryptoStart);
                        return [3 /*break*/, 11];
                    case 10:
                        clearTextData = data;
                        _b.label = 11;
                    case 11:
                        result = result || {
                            key: {
                                original: key,
                                encoded: (readResult && readResult.key) || cacheKey
                            },
                            app: (readResult && readResult.app) || this._app,
                            data: clearTextData,
                            cacheStats: stats,
                            cacheType: this._cacheType,
                            performance: {
                                crypto: cryptoCost,
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        };
                        PersistentCache._buffer[cacheKey] = result;
                        if (secretChanged) {
                            this.update(key, clearTextData); // do not block on update
                        }
                        return [3 /*break*/, 13];
                    case 12:
                        ex_2 = _b.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_2.message ? ex_2.message : ex_2.toString(),
                            extraData: {
                                cacheResult: 'miss'
                            }
                        });
                        throw ex_2;
                    case 13:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success,
                            extraData: {
                                cacheResult: "" + (typeof result.data !== 'undefined' ? 'hit' : 'miss')
                            }
                        });
                        return [2 /*return*/, Promise.resolve(result)];
                }
            });
        });
    };
    PersistentCache.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, ioCost, start, startDateTime, resultPromises, stats, ioStart_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._cacheType !== 1 /* indexedDB */) {
                    throw new Error("Only indexedDB supports range query, your storage does not support!");
                }
                logEndData = this._logQos({ name: 'PersistentCache.rangeQuery' });
                ioCost = 0;
                start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                startDateTime = Date.now();
                stats = {
                    lastModified: NaN,
                    lastRead: startDateTime,
                    reads: 1
                };
                try {
                    ioStart_1 = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                    resultPromises = this._storage.rangeQuery(rangeQuery).then(function (resultPrimaryKeys) {
                        ioCost = Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - ioStart_1);
                        var cacheKeysInResult = resultPrimaryKeys.map(function (primaryKey) {
                            return {
                                original: _this._getOriginalKeyFromCacheKey(primaryKey),
                                encoded: primaryKey
                            };
                        });
                        return {
                            key: undefined,
                            app: undefined,
                            data: cacheKeysInResult,
                            cacheStats: stats,
                            cacheType: _this._cacheType,
                            performance: {
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        };
                    });
                }
                catch (ex) {
                    logEndData({
                        resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                        error: ex.message ? ex.message : ex.toString()
                    });
                    throw ex;
                }
                logEndData({
                    resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                });
                return [2 /*return*/, (resultPromises ||
                        Promise.resolve({
                            key: undefined,
                            app: undefined,
                            data: [],
                            cacheStats: stats,
                            cacheType: this._cacheType,
                            performance: {
                                io: ioCost,
                                total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                            }
                        }))];
            });
        });
    };
    PersistentCache.prototype.update = function (key, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cacheKey, updateTask;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this._getCacheKey(key);
                        updateTask = this._cacheUpdateTaskManager.enqueue(cacheKey, function () {
                            return _this._doCacheUpdate(key, data);
                        });
                        return [4 /*yield*/, updateTask.signal.promise];
                    case 1:
                        _a.sent();
                        this._logCacheStats();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCache.prototype.remove = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.update(key, undefined)];
            });
        });
    };
    /**
     * Deleting data rows of an application to free up space
     * @param app the application rows of which are deleted
     * @param size the number of bytes that is freed
     */
    PersistentCache.prototype.freeSpace = function (app, size) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._storage.freeSpace(app, size)];
            });
        });
    };
    PersistentCache.prototype.readAndUpdate = function (key, getFreshData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var start, startDateTime, logEndData, freshDataPromise, result, ex_3, ex_4;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])();
                        startDateTime = Date.now();
                        logEndData = this._logQos({ name: 'PersistentCache.readAndUpdate' });
                        freshDataPromise = getFreshData().then(function (freshData) {
                            var freshResult = {
                                app: _this._app,
                                key: {
                                    original: key,
                                    encoded: _this._getCacheKey(key)
                                },
                                data: freshData,
                                cacheType: 2 /* none */,
                                cacheStats: {
                                    lastModified: undefined,
                                    lastRead: startDateTime,
                                    reads: 1
                                },
                                performance: {
                                    total: Math.round(Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])() - start)
                                }
                            };
                            _this.update(key, freshData);
                            return freshResult;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.race([this.read(key), freshDataPromise])];
                    case 3:
                        result = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        if (!(!result || (result.cacheType !== 2 /* none */ && typeof result.data === 'undefined'))) return [3 /*break*/, 7];
                        return [4 /*yield*/, freshDataPromise];
                    case 6:
                        // for cache misses, we need to return fresh data
                        result = _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        ex_4 = _a.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_4.message ? ex_4.message : ex_4.toString()
                        });
                        throw ex_4;
                    case 9:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PersistentCache.prototype._initLocalStorage = function (cacheType) {
        switch (cacheType) {
            case 0 /* localStorage */:
                this._storage = new _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheLocalStorage"]();
                break;
            case 1 /* indexedDB */:
            default:
                try {
                    this._storage = new _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__["PersistentCacheIndexedDB"](this._logQos.bind(this));
                }
                catch (ex) {
                    if (ex.message === _storage_PersistentCacheIndexedDB__WEBPACK_IMPORTED_MODULE_1__["indexedDBErrors"].notSupported) {
                        // if indexedDB not supported, fallback to localStorage
                        this._storage = new _storage_PersistentCacheLocalStorage__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheLocalStorage"]();
                        this._cacheType = 0 /* localStorage */;
                    }
                }
                break;
        }
    };
    PersistentCache.prototype._getCacheKey = function (key) {
        var encodedCacheKey = encodeURIComponent("" + key.key + (key.user ? cacheKeyUserDelimiter + key.user : ''));
        return "" + CACHEKEY_PREFIX + (this._dataIsEncrypted ? btoa(encodedCacheKey) : encodedCacheKey);
    };
    PersistentCache.prototype._getOriginalKeyFromCacheKey = function (cacheKey) {
        var keyNoPrefix = cacheKey.replace(CACHEKEY_PREFIX, '');
        var trasfermedKey = this._dataIsEncrypted ? atob(keyNoPrefix) : keyNoPrefix;
        var decodedKey = decodeURIComponent(trasfermedKey);
        // key format: `${ key.key }${ key.user ? cacheKeyUserDelimiter + key.user : '' }`
        if (decodedKey.indexOf(cacheKeyUserDelimiter) >= 0) {
            var _a = decodedKey.split(cacheKeyUserDelimiter), keyPart = _a[0], userPart = _a[1];
            return {
                key: keyPart,
                user: userPart
            };
        }
        return {
            key: decodedKey
        };
    };
    PersistentCache.prototype._doCacheUpdate = function (key, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logEndData, cacheKey, buffered, dataToBeWriten, size, currentSecret, ex_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logEndData = this._logQos({ name: 'PersistentCache.update' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        cacheKey = this._getCacheKey(key);
                        if (!(typeof data !== 'undefined')) return [3 /*break*/, 6];
                        buffered = (PersistentCache._buffer[cacheKey] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, PersistentCache._buffer[cacheKey]), {
                            data: data,
                            cacheType: this._cacheType
                        }));
                        if (!buffered.cacheStats) {
                            buffered.cacheStats = {
                                lastModified: NaN,
                                lastRead: Object(_utilities_performance_performance__WEBPACK_IMPORTED_MODULE_5__["now"])(),
                                reads: 1
                            };
                        }
                        dataToBeWriten = data;
                        size = NaN;
                        if (!this._dataIsEncrypted) return [3 /*break*/, 3];
                        currentSecret = this._cacheSecret.CurrentKey.Key;
                        return [4 /*yield*/, this._crypto.encrypt({
                                encryptionSecret: currentSecret,
                                data: data,
                                doSerialize: this._cacheType === 0 /* localStorage */
                            })];
                    case 2:
                        dataToBeWriten = _a.sent();
                        size = dataToBeWriten.cipherText ? dataToBeWriten.cipherText.byteLength : 0;
                        return [3 /*break*/, 4];
                    case 3:
                        try {
                            size = typeof data === 'string' ? data.length : JSON.stringify(data).length;
                        }
                        catch (ex) {
                            /* no-op */
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this._storage.write({
                            app: this._app,
                            key: cacheKey,
                            data: dataToBeWriten,
                            lastRead: buffered.cacheStats.lastRead,
                            parentKey: key.parentKey,
                            reads: buffered.cacheStats.reads,
                            size: size
                        })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        // delete existing cache entry in storage
                        delete PersistentCache._buffer[cacheKey];
                        return [4 /*yield*/, this._storage.write({
                                key: cacheKey,
                                app: undefined,
                                data: undefined,
                                lastRead: undefined,
                                parentKey: key.parentKey,
                                reads: undefined,
                                size: undefined
                            })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        ex_5 = _a.sent();
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Failure,
                            error: ex_5.message ? ex_5.message : ex_5.toString()
                        });
                        throw ex_5;
                    case 10:
                        logEndData({
                            resultType: _ms_telemetry_manager_lib_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_6__["ResultTypeEnum"].Success
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PersistentCache.prototype._logCacheStats = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // debounce logging
                if (!this._logStatsTimer) {
                    this._logStatsTimer = setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var stats;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._storage.statistics()];
                                case 1:
                                    stats = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, logStatsTimeout);
                }
                return [2 /*return*/];
            });
        });
    };
    PersistentCache.prototype._logQos = function (startData) {
        if (this._qos) {
            var app_1 = this._app;
            if (!startData.extraData) {
                startData.extraData = {};
            }
            startData.extraData.alias = startData.extraData.alias || app_1;
            var qos_1 = new this._qos(startData);
            return function (endData) {
                if (!endData.extraData) {
                    endData.extraData = {};
                }
                endData.extraData.alias = endData.extraData.alias || app_1;
                qos_1.end(endData);
            };
        }
        return function (endData) {
            // if qos is not provided in config, do no-op
            // this is to decouple telemetry code from persistent cache,
            // to make Persistent cache log telemtry itself, you have to
            // pass in Qos and Engagement as configuration when constructing Persistent cache
            return;
        };
    };
    // have a shared in-memory buffer for PersistentCache instances
    PersistentCache._buffer = {};
    return PersistentCache;
}());

//# sourceMappingURL=PersistentCache.js.map

/***/ }),

/***/ "6HRV":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/SimpleFooter/SimpleFooter.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: SimpleFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFooter", function() { return SimpleFooter; });
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _SimpleFooter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleFooter.base */ "+yYx");
/* harmony import */ var _SimpleFooter_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleFooter.styles */ "rFu+");



/**
 * @public
 */
var SimpleFooter = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_SimpleFooter_base__WEBPACK_IMPORTED_MODULE_1__["SimpleFooterBase"], _SimpleFooter_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=SimpleFooter.js.map

/***/ }),

/***/ "6mMG":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/Menu.styles.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var theme = props.theme;
    return {
        section: {
            backgroundColor: theme.semanticColors.bodyBackground,
            margin: '18px 24px',
            listStyleType: 'none'
        },
        heading: {
            lineHeight: '1.41em',
            paddingBottom: '10px'
        },
        item: {
            lineHeight: '2.29em'
        },
        itemLink: {
            color: theme.semanticColors.bodyText,
            textDecoration: 'none',
            selectors: {
                ':hover': {
                    textDecoration: 'underline'
                }
            }
        },
        itemLinkMenuHeading: {
            color: theme.semanticColors.menuItemText,
            textDecoration: 'none',
            selectors: {
                ':hover': {
                    textDecoration: 'underline'
                }
            }
        }
    };
};
//# sourceMappingURL=Menu.styles.js.map

/***/ }),

/***/ "7AwM":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/permissions/Identity.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: IdentityType, Identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return IdentityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
var IdentityType;
(function (IdentityType) {
    IdentityType[IdentityType["anonymous"] = 1] = "anonymous";
    IdentityType[IdentityType["msa"] = 2] = "msa";
    IdentityType[IdentityType["aad"] = 3] = "aad";
})(IdentityType || (IdentityType = {}));
var Identity = /** @class */ (function () {
    function Identity() {
    }
    return Identity;
}());

/* harmony default export */ __webpack_exports__["default"] = (Identity);
//# sourceMappingURL=Identity.js.map

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

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



/***/ }),

/***/ "9lav":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactDeferredComponent */ "4Nwi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__["ReactDeferredComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "9n2P":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/IRequestCache.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: DEFAULT_CACHE_TIMEOUT_TIME, DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME, DEFAULT_CACHE_ID_PREFIX, CachingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_TIMEOUT_TIME", function() { return DEFAULT_CACHE_TIMEOUT_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME", function() { return DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_ID_PREFIX", function() { return DEFAULT_CACHE_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingStrategy", function() { return CachingStrategy; });
var DEFAULT_CACHE_TIMEOUT_TIME = 300000;
var DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME = 1000 * 60 * 60 * 24;
// sp-home oil uses "ms-oil-datasource-" as prefix.
var DEFAULT_CACHE_ID_PREFIX = 'odsp-ds-';
var CachingStrategy;
(function (CachingStrategy) {
    CachingStrategy[CachingStrategy["useCacheAndUpdateInTheBackground"] = 0] = "useCacheAndUpdateInTheBackground";
    CachingStrategy[CachingStrategy["useCacheIfNotExpired"] = 1] = "useCacheIfNotExpired";
    CachingStrategy[CachingStrategy["onlyCache"] = 2] = "onlyCache";
    CachingStrategy[CachingStrategy["bypassCache"] = 3] = "bypassCache"; // If true, will bypass the cache and issue a server call but still cache server response
})(CachingStrategy || (CachingStrategy = {}));
//# sourceMappingURL=IRequestCache.js.map

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

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/string/StringHelper.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "EHv9":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/GridLayout.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");




var DEFAULT_COLUMN_WIDTH = 300;
/**
 * Responsive layout of items with same column width. Items rendered in the same row share the same height.
 */
var GridLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridLayout, _super);
    function GridLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GridLayout.prototype, "_containerMaxWidth", {
        get: function () {
            var colWidth = this.props.columnWidth || DEFAULT_COLUMN_WIDTH;
            return this.props.maxColumnCount !== undefined ? colWidth * this.props.maxColumnCount + "px" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridLayout.prototype, "_containerFixedWidth", {
        get: function () {
            var colWidth = this.props.columnWidth || DEFAULT_COLUMN_WIDTH;
            var windowWidth = this.props.gridSpacingFromEdge
                ? window.innerWidth - this.props.gridSpacingFromEdge * 2
                : window.innerWidth;
            var numSections = this.props.children.length;
            var numColumns = this.props.maxColumnCount
                ? Math.min(this.props.maxColumnCount, Math.floor(windowWidth / colWidth))
                : Math.floor(windowWidth / colWidth);
            var numColumnsNeeded = Math.min(numColumns, numSections);
            return numColumnsNeeded * colWidth + "px";
        },
        enumerable: true,
        configurable: true
    });
    GridLayout.prototype.render = function () {
        var props = this.props;
        var gridItems = props.children;
        var sectionWidth = props.columnWidth || DEFAULT_COLUMN_WIDTH;
        var cssProps = {
            maxWidth: this._isMaxWidthKSActive() ? this._containerMaxWidth || 'auto' : undefined,
            width: !this._isMaxWidthKSActive() && this.props.enforceGridWidth ? this._containerFixedWidth : undefined,
            backgroundSize: sectionWidth + 1
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-MegaMenu-gridLayout', 'ms-MegaMenu-gridLayout-enhanced', {
                withDivider: props.showDivider
            }), style: cssProps }, gridItems.map(function (item, index) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-MegaMenu-gridLayoutItem', key: "gridLayoutItem" + index, style: { width: sectionWidth }, "data-is-focusable": 'true' }, item));
        })));
    };
    GridLayout.prototype._isMaxWidthKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_3__["Killswitch"].isActivated('1d9f71f7-9bc4-471c-a23b-e29524adac78', '4/9/2020', 'Take browser window size into consideration when calculating MegaMenu max width');
    };
    return GridLayout;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (GridLayout);
//# sourceMappingURL=GridLayout.js.map

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



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

/***/ "GvAj":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/variants@7.2.32_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/variants/lib/index.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/uifabric-variants-bundle */ "wrw2");
/* harmony import */ var _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_uifabric_variants_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @uifabric/variants/./lib/index.js


/***/ }),

/***/ "HhMN":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenu.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: MegaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenu", function() { return MegaMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var _GridLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridLayout */ "EHv9");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "h7K1");
/* harmony import */ var _MegaMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MegaMenu.scss */ "Zgja");







/**
 * MegaMenu consist of multiple Menu sections in a responsive GridLayout
 * @public
 **/
var MegaMenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MegaMenu, _super);
    function MegaMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onKeyDown = function (ev) {
            if (ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape) {
                _this.props.onDismiss();
                if (_this._previousActiveElement && _this._previousActiveElement !== document.body) {
                    _this._previousActiveElement.focus();
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        return _this;
    }
    MegaMenu.prototype.UNSAFE_componentWillMount = function () {
        this._previousActiveElement = document.activeElement;
    };
    MegaMenu.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].horizontal, handleTabKey: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneTabbableElements"].all, isCircularNavigation: true, isInnerZoneKeystroke: this._innerZoneKeystroke, tabIndex: 0 /* enforce onKeyDown to work in this FocusZone React element */, onKeyDown: this._onKeyDown, "data-sp-a11y-skipkeys": office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape.toString() },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GridLayout__WEBPACK_IMPORTED_MODULE_4__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.layoutProps), this.props.sections.map(function (section, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, section, { key: "menu" + index, shouldFocusOnMount: _this.props.shouldFocusOnMount && index === 0, pageContext: _this.props.pageContext, navigationSource: _this.props.navigationSource, onItemClick: _this.props.onItemClick }))); }))));
    };
    MegaMenu.prototype._innerZoneKeystroke = function (ev) {
        return ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up || ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down;
    };
    return MegaMenu;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=MegaMenu.js.map

/***/ }),

/***/ "K5yv":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-crypto@1.0.0/node_modules/@ms/utilities-crypto/lib/CryptoErrors.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: CryptoErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoErrors", function() { return CryptoErrors; });
var CryptoErrors = {
    secretError: 'wrong secret or signature.',
    unsupportedError: 'Crypto operations not supported.',
    deserializationError: 'Data serialization/deserialization error.'
};
//# sourceMappingURL=CryptoErrors.js.map

/***/ }),

/***/ "M66I":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/RequestCache.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: RequestCache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCache", function() { return RequestCache; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony import */ var _IRequestCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IRequestCache */ "9n2P");




/**
 * This is @deprecated, you should use PersistentRequestCache
 *
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var RequestCache = /** @class */ (function () {
    /**
     * @param params The configuration params specific to the given cache.
     * @param dependencies Dependencies expected to be shared across all cache instances.
     */
    function RequestCache(params, dependencies) {
        var id = params.id, _a = params.cacheType, cacheType = _a === void 0 ? _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].session : _a;
        var _b = dependencies.cacheIdPrefix, cacheIdPrefix = _b === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CACHE_ID_PREFIX"] : _b, pageContext = dependencies.pageContext;
        this._id = id;
        this._version = pageContext ? pageContext.siteClientTag + '_' + pageContext.userDisplayName : '';
        this._store = new _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_1__["default"](cacheIdPrefix, cacheType);
        this._storeDefaultCacheType = cacheType;
        this._initCache();
    }
    /**
     * A special version of getData that will utilize the cache. This takes in mostly the same
     * parameters as DataSource.getData, with extra caching-related parameters from
     * ICachedRequestOptions (see RequestCache.ts).
     *
     * @see DataSource.getData
     * @see ICachedRequestOptions
     */
    RequestCache.prototype.getDataUtilizingCache = function (_a) {
        var _this = this;
        var cacheRequestKey = _a.cacheRequestKey, _b = _a.useStale, useStale = _b === void 0 ? false : _b, _c = _a.bypassCache, bypassCache = _c === void 0 ? false : _c, _d = _a.onlyCache, onlyCache = _d === void 0 ? false : _d, checkForInvalidation = _a.checkForInvalidation, setInvalidated = _a.setInvalidated, getData = _a.getData, _e = _a.cacheTimeoutTime, cacheTimeoutTime = _e === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CACHE_TIMEOUT_TIME"] : _e, _f = _a.returnStatistics, returnStatistics = _f === void 0 ? false : _f;
        var cache = this._cache;
        var cacheItem = cache[cacheRequestKey];
        var getResult = function () {
            return returnStatistics
                ? {
                    data: cacheItem._value,
                    cacheStats: {
                        lastModified: NaN,
                        lastRead: cacheItem._fetched,
                        reads: NaN
                    }
                }
                : cacheItem._value;
        };
        if (onlyCache) {
            if (cacheItem) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(getResult());
            }
            else {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(undefined);
            }
        }
        // Cache invalidation via localStorage isn't relevant if we're bypassing the cache, or if
        // we're already using localStorage as the default cache storage. (Also, with the current
        // implementation, the invalidation timestamp is stored under the same key as the fetched
        // data, so putting both in localStorage wouldn't work.)
        checkForInvalidation =
            checkForInvalidation && !bypassCache && this._storeDefaultCacheType !== _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local;
        var stale = cacheItem && this._isCacheExpired(cacheItem, cacheRequestKey, checkForInvalidation, cacheTimeoutTime);
        var shouldFetch = bypassCache || !cacheItem || (stale && !useStale);
        if (shouldFetch) {
            return getData().then(function (value) {
                var fetched = new Date().valueOf();
                cache[cacheRequestKey] = {
                    _fetched: fetched,
                    _value: value
                };
                if (setInvalidated) {
                    // Mark that other tabs' sessionStorage copies of this data are invalidated.
                    // (Subtract 1 from the timestamp to protect the data we just cached above
                    // from accidentally being considered expired by future code.)
                    _this._store.setValue(cacheRequestKey, fetched - 1, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local);
                }
                _this._updateCache();
                return returnStatistics
                    ? {
                        data: value,
                        cacheStats: {
                            lastModified: NaN,
                            lastRead: fetched,
                            reads: NaN
                        }
                    }
                    : value;
            });
        }
        else {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(getResult());
        }
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    RequestCache.prototype.getRequestKey = function (url, method, additionalPostData) {
        var keyParts = [];
        keyParts.push(url);
        keyParts.push(method);
        if (additionalPostData) {
            keyParts.push(additionalPostData.toString());
        }
        return keyParts.join(',');
    };
    /**
     * Returns true if all of the following are satisfied:
     * - Cache entry for this key exists
     * - localStorage entry with an invalidation timestamp for this key exists
     * - the invalidation timestamp is newer than the cache entry time
     *
     * @param cacheRequestKey Key to check
     */
    RequestCache.prototype.isCachedDataInvalidated = function (cacheRequestKey) {
        var cacheItem = this._cache[cacheRequestKey];
        return this._isCachedDataInvalidated(cacheItem, cacheRequestKey);
    };
    Object.defineProperty(RequestCache.prototype, "cacheId", {
        /**
         * Name for session/local storage entry storing the data for this cache.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestCache.prototype, "cacheVersionId", {
        /**
         * Name for session/local storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._id + '-version';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     * If no key is specified, flushes the whole cache.
     */
    RequestCache.prototype.flushCache = function (cacheRequestKey) {
        if (cacheRequestKey) {
            delete this._cache[cacheRequestKey];
            this._updateCache();
        }
        else {
            this._clearCache();
        }
    };
    /**
     * Initializes and loads the cache. If the cache is no longer valid, flush the cache first.
     */
    RequestCache.prototype._initCache = function () {
        if (this._version !== this._store.getValue(this.cacheVersionId, undefined, false)) {
            this._clearCache();
            // update the version
            this._store.setValue(this.cacheVersionId, this._version, undefined, false);
        }
        else {
            this._cache = this._store.getValue(this.cacheId, undefined, false) || {};
        }
    };
    /**
     * Save to session/local storage the state of the in-memory cache.
     */
    RequestCache.prototype._updateCache = function () {
        this._store.setValue(this.cacheId, this._cache, undefined, false);
    };
    /**
     * Clear/flush the cache.
     */
    RequestCache.prototype._clearCache = function () {
        this._cache = {};
        this._updateCache();
    };
    /**
     * Given a cache item, indicates whether the cache is expired.
     */
    RequestCache.prototype._isCacheExpired = function (cacheItem, cacheRequestKey, checkForInvalidation, cacheTimeoutTime) {
        if (checkForInvalidation && this._isCachedDataInvalidated(cacheItem, cacheRequestKey)) {
            return true;
        }
        var refreshThreshold = new Date().valueOf() - cacheTimeoutTime;
        return cacheItem._fetched <= refreshThreshold;
    };
    RequestCache.prototype._isCachedDataInvalidated = function (cacheItem, cacheRequestKey) {
        // The value of cacheRequestKey in local storage tells the last time that the data
        // for this key was invalidated. If our data isn't generally expired, but it's older
        // than the last invalidation time, we should consider it expired.
        var lastInvalidated = Number(this._store.getValue(cacheRequestKey, _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_2__["default"].local));
        return !!(cacheItem && lastInvalidated && cacheItem._fetched < lastInvalidated);
    };
    return RequestCache;
}());

/* harmony default export */ __webpack_exports__["default"] = (RequestCache);
//# sourceMappingURL=RequestCache.js.map

/***/ }),

/***/ "MLtZ":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/PersistentRequestCache.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: PersistentRequestCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentRequestCache", function() { return PersistentRequestCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/persistent-cache/lib/index */ "uFJw");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _IRequestCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IRequestCache */ "9n2P");






/**
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var PersistentRequestCache = /** @class */ (function () {
    /**
     * @param params The configuration params specific to the given cache.
     * @param dependencies Dependencies expected to be shared across all cache instances.
     */
    function PersistentRequestCache(params, dependencies) {
        /** The get data request promise caches. */
        this._getDataPromises = {};
        var id = params.id, dataSourceName = params.dataSourceName, _a = params.cacheType, cacheType = _a === void 0 ? 1 /* indexedDB */ : _a;
        var pageContext = dependencies.pageContext;
        var aadUserId = (pageContext || {}).aadUserId;
        this._id = id;
        this._userId = aadUserId;
        var qosName = dataSourceName || id;
        var loggingOverride = function (data) {
            if (data.name && qosName && !data.name.startsWith(qosName)) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { name: qosName + "." + data.name });
            }
            return data;
        };
        var cacheQos = _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["Qos"].withData(loggingOverride);
        this._cache = new _ms_persistent_cache_lib_index__WEBPACK_IMPORTED_MODULE_3__["PersistentCache"]({
            cacheType: cacheType,
            telemetry: {
                qos: cacheQos
            }
        });
    }
    /**
     * A special version of getData that will utilize the cache. This takes in mostly the same
     * parameters as DataSource.getData, with extra caching-related parameters from
     * ICachedRequestOptions (see RequestCache.ts).
     *
     * @see DataSource.getData
     * @see ICachedRequestOptions
     */
    PersistentRequestCache.prototype.getDataUtilizingCache = function (options) {
        var _this = this;
        var cacheRequestKey = options.cacheRequestKey, _a = options.cachingStrategy, cachingStrategy = _a === void 0 ? 0 /* useCacheAndUpdateInTheBackground */ : _a, _b = options.cacheTimeoutTime, cacheTimeoutTime = _b === void 0 ? _IRequestCache__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_PERSISTENT_CACHE_TIMEOUT_TIME"] : _b, // when the cache entry is older than this value, it needs refresh
        getData = options.getData, _c = options.returnStatistics, returnStatistics = _c === void 0 ? false : _c;
        var persistentCacheKey = {
            key: cacheRequestKey,
            user: this._userId
        };
        var getDataAndUpdateCache = function () {
            if (!isCacheRequestAtInstanceLevelKillSwitchActivated() && !_this._getDataPromises[cacheRequestKey]) {
                // Cache the ongoing get data request promise at instance level because the indexedDB level is not available yet.
                // So if the method is called again, return the same promise to avoid double requests.
                // After the request completes, remove ongoing promise from instance level cache.
                // The indexedDB level cache is established, the following call will leverage that.
                _this._getDataPromises[cacheRequestKey] = getData().then(function (value) {
                    delete _this._getDataPromises[cacheRequestKey];
                    return value;
                });
            }
            return (isCacheRequestAtInstanceLevelKillSwitchActivated()
                ? getData()
                : _this._getDataPromises[cacheRequestKey]).then(function (value) {
                _this._cache.update(persistentCacheKey, value);
                return returnStatistics
                    ? {
                        data: value,
                        cacheStats: {
                            lastModified: NaN,
                            lastRead: Date.now(),
                            reads: 1
                        }
                    }
                    : value;
            });
        };
        // Treating onlyCache uniquely to ensure a network call is never made
        // If there is an exception reading the cache, or it is empty, return null
        // on KS removal, remove CachingStrategy,onlyCache in switch below
        if (!isOnlyCacheChangesKillSwitchActivated() && cachingStrategy === 2 /* onlyCache */) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(this._cache.read(persistentCacheKey))
                .then(function (result) {
                var data = result.data, cacheStats = result.cacheStats;
                if (data === null || data === undefined) {
                    return null;
                }
                return returnStatistics
                    ? {
                        data: data,
                        cacheStats: cacheStats
                    }
                    : data;
            })
                .catch(function () {
                return null;
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(this._cache.read(persistentCacheKey))
            .then(function (result) {
            var data = result.data, cacheStats = result.cacheStats;
            if (data === null || data === undefined) {
                return getDataAndUpdateCache();
            }
            var ret = returnStatistics
                ? {
                    data: data,
                    cacheStats: cacheStats
                }
                : data;
            var stale = _this._isCacheExpired(cacheStats.lastModified, cacheTimeoutTime);
            switch (cachingStrategy) {
                case 2 /* onlyCache */:
                    return ret;
                case 0 /* useCacheAndUpdateInTheBackground */:
                    if (stale) {
                        getDataAndUpdateCache();
                    }
                    return ret;
                case 1 /* useCacheIfNotExpired */:
                    if (stale) {
                        return getDataAndUpdateCache();
                    }
                    return ret;
                case 3 /* bypassCache */:
                default:
                    return getDataAndUpdateCache();
            }
        })
            .catch(function () {
            // If catch exception while reading PersistentCache, just try to fetch fresh data.
            return getDataAndUpdateCache();
        });
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    PersistentRequestCache.prototype.getRequestKey = function (url, method, additionalPostData) {
        var keyParts = [];
        keyParts.push(url);
        keyParts.push(method);
        if (additionalPostData) {
            keyParts.push(additionalPostData.toString());
        }
        return keyParts.join(',');
    };
    Object.defineProperty(PersistentRequestCache.prototype, "cacheId", {
        /**
         * Name for session/local storage entry storing the data for this cache.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersistentRequestCache.prototype, "cacheVersionId", {
        /**
         * Name for session/local storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._id + '-version';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     */
    PersistentRequestCache.prototype.flushCache = function (cacheRequestKey) {
        var persistentCacheKey = {
            key: cacheRequestKey,
            user: this._userId
        };
        delete this._cache[cacheRequestKey];
        this._cache.remove(persistentCacheKey);
    };
    /**
     * Given a cache item, indicates whether the cache is expired.
     */
    PersistentRequestCache.prototype._isCacheExpired = function (lastModified, cacheTimeoutTime) {
        var refreshThreshold = new Date().valueOf() - cacheTimeoutTime;
        return lastModified <= refreshThreshold;
    };
    return PersistentRequestCache;
}());

function isCacheRequestAtInstanceLevelKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('0b1fbce0-bb51-41da-a09b-8d1686398bb7'
    /* '2020-09-18', 'Cache ongoing getData request at instance level' */
    );
}
function isOnlyCacheChangesKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('19cec8a5-4f79-4d4c-ae7e-f272ba265abb'
    /* '2020-09-28', 'No network calls for onlyCache' */
    );
}
//# sourceMappingURL=PersistentRequestCache.js.map

/***/ }),

/***/ "NMYH":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusZone.js


/***/ }),

/***/ "Ng1F":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-guid@1.0.0/node_modules/@ms/utilities-guid/lib/Guid.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Empty, generate, normalizeLower, normalizeUpper, normalizeDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLower", function() { return normalizeLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUpper", function() { return normalizeUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDashes", function() { return normalizeDashes; });
// tslint:disable:no-bitwise
function generateUuidPart(length) {
    var str = '';
    while (str.length < length) {
        var num = Math.random() * 16;
        num = num | 0; // clear decimal
        str += num.toString(16);
    }
    return str;
}
/**
 * @public
 */
var Empty = '00000000-0000-0000-0000-000000000000';
/**
 * Return a v4 UUID as specified by RFC 4122 http://tools.ietf.org/html/rfc4122
 *
 * @public
 */
function generate() {
    var parts = [];
    parts.push(generateUuidPart(8));
    parts.push(generateUuidPart(4));
    // first digit must be 4 since we are using pseudorandom numbers
    var timeHighAndVersion = '4' + generateUuidPart(3);
    parts.push(timeHighAndVersion);
    // first digit must have first two bits set to 10
    var clockSeqHiAndReserved = generateUuidPart(4);
    // ClockSeqHiAndReserved is a base-16 string.
    var intVal = parseInt(clockSeqHiAndReserved[0], 16);
    intVal = intVal & 3; // clear out first two bits
    intVal = intVal | 8; // set first bit to 1
    clockSeqHiAndReserved = intVal.toString(16) + clockSeqHiAndReserved.substr(1);
    parts.push(clockSeqHiAndReserved);
    parts.push(generateUuidPart(12));
    return parts.join('-');
}
/**
 * Normalizes a GUID to lowercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeLower(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toLowerCase(), includeBrackets) : '';
}
/**
 * Normalizes a GUID to uppercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeUpper(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toUpperCase(), includeBrackets) : '';
}
/**
 * Normalizes the dashes in a GUID. Returns '' if the input is null, undefined, or does not contain
 * 32 hexadecimal characters.
 * @param guid - The GUID
 * @param includeBrackets - if true, output will contain brackets; if false, output will not
 *
 * @public
 */
function normalizeDashes(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    if (guid) {
        var parsed = guid.replace(/[^A-Fa-f0-9]/g, '');
        if (parsed.length === 32) {
            return _normalizeBrackets(parsed.slice(0, 8) + "-" + parsed.slice(8, 12) + "-" + parsed.slice(12, 16) + "-" + parsed.slice(16, 20) + "-" + parsed.slice(20), includeBrackets);
        }
    }
    return '';
}
function _normalizeBrackets(guid, includeBrackets) {
    var match = guid.match(/^\{(.*)\}$/);
    if (match) {
        return includeBrackets ? match[0] : match[1];
    }
    return includeBrackets ? '{' + guid + '}' : guid;
}
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "NuUw":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/editNav/ViewNavDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: ViewNavDataSource, isRefineAudienceTargetKillSwitchActivated, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNavDataSource", function() { return ViewNavDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefineAudienceTargetKillSwitchActivated", function() { return isRefineAudienceTargetKillSwitchActivated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");








var structureNavDepthUseDefault = { ODB: 1447 };
var emptyNavLinkGroup = {
    // @todo The default value of `links` is explicitly set to `undefined`.
    // Some callers have special logic to handle links is `undefined` or `[]`.
    // To keep the backward compatibility, we defines `links` default to be `undefined`.
    // However, some are directly skipping the re-render if the `links` is `undefined`.
    // That is not incorrect way to handle `undefined` case - it should render empty array.
    // We need to review all callers, then switch defaulting to `[]` in the future.
    links: undefined,
    name: '',
    startingNodeKey: '',
    isAudienceEnabled: false,
    isAudienceTargeted: false,
    isAudienceAffected: false
};
/**
 * This datasource calls SP NavigationService REST API to do update.
 */
var ViewNavDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewNavDataSource, _super);
    /**
     * @param pageContext the page context
     * @param mapProviderName navigation provider name used. If not provided, retrieve default navigation data.
     */
    function ViewNavDataSource(pageContext, mapProviderName) {
        var _this = _super.call(this, {
            id: 'ViewNavDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this._mapProviderName = mapProviderName;
        _this._audiencesDataSource = _audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_5__["AudiencesDataSource"].getInstance(pageContext);
        return _this;
    }
    /**
     *  Tests if the url is a relative url
     */
    ViewNavDataSource.isRelativeUrl = function (url) {
        if (!url) {
            return false;
        }
        var hasProtocol = /^[a-z0-9+-.]+:\/\//i.test(url);
        return !hasProtocol && url.indexOf('/_layouts/15/groupstatus.aspx?') === -1;
    };
    /**
     * Tests if a URL should be opened in the same window
     * @param url the url target
     */
    ViewNavDataSource.shouldLinkOpenInSameWindow = function (url) {
        if (!url) {
            return false;
        }
        var target = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_4__["default"](url);
        var targetOrigin = target.getScheme() + '://' + target.getAuthority();
        var pathUrl = target.getScheme() === '' && target.getAuthority() === '';
        return ((pathUrl || targetOrigin === window.location.origin) &&
            url.indexOf('/_layouts/15/groupstatus.aspx?') === -1);
    };
    /**
     * Transform INavNodes to IDSNavLinks (compatible with fabric INavLink).
     *
     * @param nodes Nav nodes from the server
     * @param onClick Optional click handler to add to each link
     * @param filter Optional filter for nodes (level param starts at 0)
     */
    ViewNavDataSource.transformNodesToLinks = function (nodes, onClick, filter) {
        nodes = nodes || [];
        var transformNodes = function (nodes, level) {
            if (filter) {
                nodes = nodes.filter(function (node) { return filter(node, level); });
            }
            return nodes.map(function (node) {
                return {
                    name: node.Title,
                    key: node.Id.toString(),
                    url: node.Url,
                    onClick: onClick,
                    isDocLib: node.IsDocLib,
                    links: node.Children && node.Children.length ? transformNodes(node.Children, level + 1) : undefined,
                    audiences: node.AudienceIds || undefined,
                    currentLCID: node.CurrentLCID
                };
            });
        };
        return transformNodes(nodes, 0);
    };
    /**
     * Gets the publishing navigation settings URL.
     */
    ViewNavDataSource.getAreaNavigationSettingsUrl = function (pageContext) {
        return pageContext.webAbsoluteUrl + "/_layouts/15/AreaNavigationSettings.aspx";
    };
    /**
     * Set global nav enable/disable flag
     * @param isEnabled is global nav enabled or not
     */
    ViewNavDataSource.prototype.setGlobalNavEnabled = function (isEnabled) {
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/SetGlobalNavEnabled?isEnabled=" + isEnabled;
        return this.dataRequestor.getData({
            url: url,
            qosName: 'SetGlobalNavEnabled',
            method: 'POST',
            noRedirect: true
        });
    };
    /**
     * Get global nav enable/disable setting
     */
    ViewNavDataSource.prototype.getGlobalNavEnabled = function () {
        var _this = this;
        return this.getDataUtilizingPersistentCache({
            getUrl: function () { return _this._pageContext.webAbsoluteUrl + "/_api/navigation/GlobalNavEnabled"; },
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (!response || !response.d) {
                    return false;
                }
                return response.d.GlobalNavEnabled;
            },
            qosName: 'getGlobalNavEnabled',
            method: 'GET',
            noRedirect: true
        });
    };
    /**
     * Get global navigation data for SP App bar.
     * @param forceRefresh leverage cache or not
     * @param source navigation source, it can be either TopOrHub or QuickLaunch
     * @param skipAudienceTargeting skip audience targeting filter or not
     */
    ViewNavDataSource.prototype.getGlobalNav = function (forceRefresh, source, skipAudienceTargeting) {
        var _this = this;
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["Qos"]({ name: 'GlobalNavigation' });
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/GlobalNav";
        if (source) {
            url += "?source='" + source + "'";
        }
        var paramsForGetData = {
            url: url,
            qosName: 'GetGlobalNavigation',
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return _this._transformToNavLinkGroup(response, false, qosEvent, true);
            },
            method: 'GET',
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
            contentType: 'application/json; odata.metadata=minimal',
            maxRetries: 1,
            crossSiteCollectionCall: true,
            cachingStrategy: forceRefresh
                ? 3 /* bypassCache */
                : 0 /* useCacheAndUpdateInTheBackground */,
            noRedirect: true
        };
        var getNavGroupPromise = this.getDataUtilizingPersistentCache(paramsForGetData);
        return getNavGroupPromise.then(function (linkGroup) {
            if (!skipAudienceTargeting &&
                (!isRefineAudienceTargetKillSwitchActivated() || linkGroup) &&
                linkGroup.isAudienceEnabled &&
                linkGroup.isAudienceTargeted) {
                return _this._audiencesDataSource.filter('GlobalNav', linkGroup.links, 'links').then(function (links) {
                    var isAudienceAffected = ViewNavDataSource.checkIfLinksAffected(linkGroup.links, links);
                    linkGroup.links = links || [];
                    linkGroup.isAudienceAffected = isAudienceAffected;
                    return linkGroup;
                });
            }
            else {
                return linkGroup;
            }
        });
    };
    /**
     * Check if nav audience targeting is enabled.
     */
    ViewNavDataSource.prototype.isNavAudienceTargetedEnabled = function () {
        var _a;
        // The webPropertyFlags2 is not available on SP Start page, we fallback to isAudienceTargeted field.
        // Can't just check "truthiness" of webPropertyFlags2 because it could be set to 0, and that is a valid value
        // For which we cannot fall back to navigationInfo.isAudienceTargeted
        return Boolean(this._pageContext.webPropertyFlags2 === 0 || this._pageContext.webPropertyFlags2
            ? this._pageContext.webPropertyFlags2 & ViewNavDataSource.NAV_AUDIENCE_TARGET_FLAG
            : (_a = this._pageContext.navigationInfo) === null || _a === void 0 ? void 0 : _a.isAudienceTargeted);
    };
    /**
     * Get SharePoint navigation "menu state" data.
     */
    ViewNavDataSource.prototype.getMenuState = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["Qos"]({ name: 'NavigationGetMenuState' });
        var _a = options.providerName, providerName = _a === void 0 ? this._mapProviderName : _a, isGlobalNav = options.isGlobalNav, useCache = options.useCache, forceRefresh = options.forceRefresh, menuNodeKey = options.menuNodeKey, _b = options.maxRetries, maxRetries = _b === void 0 ? 1 : _b, _c = options.depth, depth = _c === void 0 ? 3 : _c, skipAudienceFiltering = options.skipAudienceFiltering, audienceFilterNodeKey = options.audienceFilterNodeKey;
        var qosName = useCache ? 'getMenuStateUsingCache' : 'getMenuState';
        var queryString = '';
        providerName = providerName || this._mapProviderName;
        if (menuNodeKey) {
            queryString += "?menuNodeKey='" + menuNodeKey + "'";
            if (providerName) {
                queryString += "&mapProviderName='" + providerName + "'";
            }
        }
        else if (isGlobalNav || providerName) {
            queryString += "?menuNodeKey=" + (isGlobalNav ? "1002" /* globalNavParent */ : '');
            if (providerName) {
                queryString += "&mapProviderName='" + providerName + "'";
            }
        }
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__["default"].isFeatureEnabled(structureNavDepthUseDefault)) {
            // if StructureNavDepthUseDefault flight is enabled (sorry name is opposit meaning),
            // pass depth level value 3 to override server default 10 levels
            if (queryString && queryString.length > 0) {
                queryString += "&depth='" + depth + "'";
            }
        }
        var url = this._pageContext.webAbsoluteUrl + "/_api/navigation/MenuState" + queryString;
        var paramsForGetData = {
            url: url,
            qosName: qosName,
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                return _this._transformToNavLinkGroup(response, Boolean(skipAudienceFiltering), qosEvent);
            },
            method: 'GET',
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
            contentType: 'application/json; odata.metadata=minimal',
            maxRetries: maxRetries,
            crossSiteCollectionCall: true,
            cachingStrategy: forceRefresh
                ? 3 /* bypassCache */
                : 0 /* useCacheAndUpdateInTheBackground */,
            noRedirect: true
        };
        var getNavGroupPromise;
        if (useCache) {
            getNavGroupPromise = this.getDataUtilizingPersistentCache(paramsForGetData).then(function (group) {
                return isRefineAudienceTargetKillSwitchActivated() ? group : group || emptyNavLinkGroup;
            });
        }
        else {
            getNavGroupPromise = this.dataRequestor.getData(paramsForGetData);
        }
        if (isRefineAudienceTargetKillSwitchActivated()) {
            if (!skipAudienceFiltering &&
                (isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                    ? this._audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                    : this.isNavAudienceTargetedEnabled())) {
                return getNavGroupPromise.then(function (linkGroup) {
                    if (linkGroup && _this._isGroupAudienceTargeted(linkGroup)) {
                        if (linkGroup.name === "13b7c916-4fea-4bb2-8994-5cf274aeb530" /* footerNavParent */ &&
                            linkGroup.links &&
                            audienceFilterNodeKey &&
                            // only validate on given node
                            _this._audiencesDataSource.containsAudiences(linkGroup.links.filter(function (link) { return link.name === audienceFilterNodeKey; }), 'links')) {
                            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({
                                name: 'FooterNav.AudienceTargeting'
                            });
                        }
                        return _this._audiencesDataSource.filter('SiteNav', linkGroup.links, 'links').then(function (links) {
                            linkGroup.links = links || [];
                            return linkGroup;
                        });
                    }
                    else {
                        return linkGroup;
                    }
                });
            }
            else {
                return getNavGroupPromise;
            }
        }
        else {
            return getNavGroupPromise.then(function (linkGroup) {
                if (linkGroup.isAudienceEnabled && linkGroup.isAudienceTargeted) {
                    return _this._audiencesDataSource.filter('SiteNav', linkGroup.links, 'links').then(function (links) {
                        var isAudienceAffected = ViewNavDataSource.checkIfLinksAffected(linkGroup.links, links);
                        linkGroup.links = links || [];
                        linkGroup.isAudienceAffected = isAudienceAffected;
                        return linkGroup;
                    });
                }
                else {
                    return linkGroup;
                }
            });
        }
    };
    /**
     * Check if the links is affected by the audience filtering.
     */
    ViewNavDataSource.checkIfLinksAffected = function (links1, links2) {
        var count1 = countTotalLinks(links1);
        var count2 = countTotalLinks(links2);
        return count1 !== count2;
    };
    /** Clears all cached data. */
    ViewNavDataSource.prototype.clearCache = function () {
        this.flushCache();
    };
    ViewNavDataSource.prototype._transformToNavLinkGroup = function (menuState, skipAudienceFiltering, qosEvent, isGlobalNav /** whether it is requesting global nav or not */) {
        if (!menuState || !menuState.Nodes || menuState.Nodes.length === 0) {
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].ExpectedFailure, error: 'getMenuState empty MenuState' });
            return isRefineAudienceTargetKillSwitchActivated() ? undefined : emptyNavLinkGroup;
        }
        try {
            var links = this._getLinksFromNodes(menuState.Nodes, menuState.FriendlyUrlPrefix);
            var group = {
                isAudienceEnabled: !isRefineAudienceTargetKillSwitchActivated() &&
                    !skipAudienceFiltering &&
                    // If this is specific for global nav, use IsAudienceTargetEnabledForGlobalNav; otherwise use the flag in current context.
                    (isGlobalNav
                        ? menuState.IsAudienceTargetEnabledForGlobalNav
                        : isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                            ? this._audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                            : this.isNavAudienceTargetedEnabled()),
                isAudienceTargeted: (isRefineAudienceTargetKillSwitchActivated() || !skipAudienceFiltering) &&
                    this._audiencesDataSource.containsAudiences(links, 'links'),
                isAudienceAffected: false,
                name: menuState.StartingNodeTitle || '',
                links: links,
                startingNodeKey: menuState.StartingNodeKey
            };
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Success });
            return group;
        }
        catch (e) {
            qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Failure, error: e ? e.toString() : 'getMenuState failed' });
            return isRefineAudienceTargetKillSwitchActivated() ? undefined : emptyNavLinkGroup;
        }
    };
    ViewNavDataSource.prototype._getLinksFromNodes = function (nodes, friendlyUrlPrefix) {
        var _this = this;
        var transformNodes = function (nodes, parent, prevUrlSegment) {
            nodes = nodes.filter(function (node) {
                if (node.Key === "1033" /* quickLaunchRecent */ ||
                    node.Key.indexOf("SPNavigationNodeId=" + "1033" /* quickLaunchRecent */) !== -1) {
                    return false;
                }
                return !node.IsDeleted && !node.IsHidden;
            });
            var urlSegment = prevUrlSegment ? prevUrlSegment + '/' : '';
            return nodes.map(function (node) {
                var parentUrlSegment = parent && urlSegment + parent.FriendlyUrlSegment;
                var url = _this._getUrl(node, !!parent, friendlyUrlPrefix, parentUrlSegment);
                return {
                    name: node.Title,
                    url: url,
                    key: node.Key,
                    ariaLabel: node.Title,
                    isExpanded: false,
                    hasChildLinks: node.CustomProperties
                        ? _this._getCustomPropertyValue(node.CustomProperties, 'HasChildNodes') === 'True'
                        : undefined,
                    target: ViewNavDataSource.shouldLinkOpenInSameWindow(url) ? '' : '_blank',
                    links: node.Nodes && node.Nodes.length ? transformNodes(node.Nodes, node, parentUrlSegment) : undefined,
                    audiences: node.AudienceIds && node.AudienceIds.length > 0 ? node.AudienceIds : undefined,
                    currentLCID: node.CurrentLCID
                };
            });
        };
        return transformNodes(nodes || []);
    };
    ViewNavDataSource.prototype._getCustomPropertyValue = function (properties, key) {
        // newly added supposed at the last so we start from end of arrary
        var maxIdx = properties.length - 1;
        for (var i = maxIdx; i > 0; i--) {
            if (properties[i].Key === key) {
                // found the customer property
                return properties[i].Value;
            }
        }
        return '';
    };
    ViewNavDataSource.prototype._getUrl = function (node, isSublink, friendlyUrlPrefix, parentFriendlySegment) {
        if (node.SimpleUrl) {
            return node.SimpleUrl;
        }
        var url;
        if (node.NodeType === 1 /* FriendlyUrl */ && node.FriendlyUrlSegment) {
            if (!isSublink) {
                // parent node
                url = friendlyUrlPrefix + node.FriendlyUrlSegment;
            }
            else {
                // child node
                url =
                    friendlyUrlPrefix +
                        ((parentFriendlySegment ? "/" + parentFriendlySegment : '') + ("/" + node.FriendlyUrlSegment));
            }
            url = url.replace('//', '/');
        }
        return url;
    };
    ViewNavDataSource.prototype._isGroupAudienceTargeted = function (group) {
        if (group.isAudienceTargeted) {
            return true;
        }
        else if (group.name === "13b7c916-4fea-4bb2-8994-5cf274aeb530" /* footerNavParent */ && group.links) {
            return this._audiencesDataSource.containsAudiences(group.links, 'links');
        }
        else {
            return false;
        }
    };
    ViewNavDataSource.NAV_AUDIENCE_TARGET_FLAG = 0x00000000000800000;
    return ViewNavDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_2__["CachedDataSource"]));

function countTotalLinks(links) {
    if (!links) {
        return 0;
    }
    var count = links.length;
    for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
        var link = links_1[_i];
        count += countTotalLinks(link.links);
    }
    return count;
}
function isRefineAudienceTargetKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('1cd2d1c9-fdc8-4110-a71e-e8125063dd90', '2020-09-01', 'Refine the audience targeting logging');
}
function isCheckNavAudienceTargetInViewNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('71980d68-1e8b-44e4-84a5-19370f97ec10'
    /* '2020-12-15', 'Leverage the check nav audience target method from ViewNavDataSource' */
    );
}
/* harmony default export */ __webpack_exports__["default"] = (ViewNavDataSource);
//# sourceMappingURL=ViewNavDataSource.js.map

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

/***/ "Q+fs":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/audienceTargeting/AudiencesDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: AudiencesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiencesDataSource", function() { return AudiencesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/audience-targeting/lib/AudienceTargeting */ "W9wO");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _base_PersistentRequestCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/PersistentRequestCache */ "MLtZ");
/* harmony import */ var _base_DataRequestor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/DataRequestor */ "PayJ");







var GetMembershipEndPoint = '/_api/SP.Publishing.SitePageService.GetCurrentUserMemberships';
var GUID_STRING_LEN = 36;
var TWO_HOURS_CACHE_TIME = 1000 * 60 * 60 * 2; // 2 hours
var AudiencesDataSource = /** @class */ (function () {
    /**
     * @deprecated Use `AudiencesDataSource.getInstance` to retrieve data source instance.
     * Change constructor to private after all consumers are updated.
     */
    function AudiencesDataSource(pageContext) {
        var _this = this;
        this._getDataFromAPI = function (apiUrl, scenario) {
            var paramsForGetData = {
                url: apiUrl,
                qosName: scenario
                    ? "getUserMembershipsForAudienceTargeting." + scenario
                    : 'getUserMembershipsForAudienceTargeting',
                cacheRequestKey: _this._cacheRequestKey,
                parseResponse: function (responseText) {
                    return (responseText && JSON.parse(responseText).value) || [];
                },
                method: 'GET',
                additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1
            };
            return _this._dataRequestor.getData(paramsForGetData);
        };
        this._pageContext = pageContext;
        this._dataRequestor = new _base_DataRequestor__WEBPACK_IMPORTED_MODULE_6__["DataRequestor"]({ qosName: 'AudiencesDataSource' }, { pageContext: pageContext });
        this._cache = new _base_PersistentRequestCache__WEBPACK_IMPORTED_MODULE_5__["PersistentRequestCache"]({
            id: 'AudiencesDataSource',
            cacheType: 0 /* localStorage */
        }, {
            pageContext: pageContext
        });
        // cache by user instead of web
        this._cacheRequestKey = pageContext.aadUserId || pageContext.userLoginName;
    }
    AudiencesDataSource.getInstance = function (pageContext) {
        if (isCacheAudiencesDataSourceInstanceKillSwitchActivated()) {
            return new AudiencesDataSource(pageContext);
        }
        var userId = pageContext.aadUserId || pageContext.userLoginName;
        if (!AudiencesDataSource._instances[userId]) {
            AudiencesDataSource._instances[userId] = new AudiencesDataSource(pageContext);
        }
        return AudiencesDataSource._instances[userId];
    };
    /**
     * Check if any item in the array contains valid audiences value.
     * If the `recursiveKey` is provided, it will check recursively on that item field.
     */
    AudiencesDataSource.prototype.containsAudiences = function (items, recursiveKey) {
        if (!items) {
            return false;
        }
        var filteredLinks = items.filter(doesItemContainAudiences);
        if (filteredLinks.length > 0) {
            return true;
        }
        if (recursiveKey) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                // @ts-ignore TypeScript does not recognize the type of `item[recursiveKey]` is `T[]`
                if (this.containsAudiences(item[recursiveKey], recursiveKey)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Check whether links contains audience targeted node recursively.
     * @deprecated Use the `containsAudiences` from instance.
     */
    AudiencesDataSource.containsAudienceTargetedNode = function (links) {
        var _this = this;
        if (!links) {
            return false;
        }
        var filteredLinks = links.filter(doesItemContainAudiences);
        if (filteredLinks.length > 0) {
            return true;
        }
        return links.filter(function (link) { return _this.containsAudienceTargetedNode(link.links); }).length > 0;
    };
    /**
     * Save audience targeting toggle boolean.
     * @deprecated Use the same method from EditNavDataSource. Remove it when graduate c9bcad44-81c8-4486-8030-32482a73a942 kill switch.
     */
    AudiencesDataSource.prototype.saveAudienceTargetSetting = function (checked) {
        var _this = this;
        var apiUrl = this._pageContext.webAbsoluteUrl + '/_api/web';
        var paramsForGetData = {
            bypassCache: true,
            url: apiUrl,
            qosName: 'saveNavAudienceTargetingEnabled',
            method: 'POST',
            additionalHeaders: {
                'X-HTTP-Method': 'MERGE'
            },
            additionalPostData: JSON.stringify({
                NavAudienceTargetingEnabled: checked,
                __metadata: { type: 'SP.Web' }
            })
        };
        return this._cache.getDataUtilizingCache({
            cacheRequestKey: this._cacheRequestKey,
            cachingStrategy: 0 /* useCacheAndUpdateInTheBackground */,
            cacheTimeoutTime: isCacheAudienceForTwoHoursKillSwitchActivated() ? undefined : TWO_HOURS_CACHE_TIME,
            getData: function () { return _this._dataRequestor.getData(paramsForGetData); }
        });
    };
    /**
     * Check web property from page context to determine whether nav audience targeting is enabled.
     * @deprecated Use `isNavAudienceTargetedEnabled` method from `ViewNavDataSource` instance.
     */
    AudiencesDataSource.prototype.isAudienceTargetedNavEnabledBasedOnWebProperty = function () {
        if (this._pageContext && this._pageContext.webPropertyFlags2 === undefined) {
            // The webPropertyFlags2 is not available on SP Start page, we fallback to isAudienceTargeted field.
            return Boolean(this._pageContext &&
                this._pageContext.navigationInfo &&
                this._pageContext.navigationInfo.isAudienceTargeted);
        }
        return Boolean(this._pageContext &&
            this._pageContext.webPropertyFlags2 &&
            (this._pageContext.webPropertyFlags2 & AudiencesDataSource.NAV_AUDIENCE_TARGETING_ENABLED) !== 0x00);
    };
    /**
     * Filter items based on current user's group memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudiencesDataSource.prototype.filter = function (scenario, items, recursiveKey) {
        var _this = this;
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).filter(this._cacheRequestKey, this._pageContext.webAbsoluteUrl, scenario, items, recursiveKey);
        }
        else {
            if (!items) {
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(undefined);
            }
            return this.getCurrentUserMemberships(scenario)
                .then(function (memberships) { return _this.filterWithMembership(memberships, items, recursiveKey); })
                .catch(function () { return _this.filterWithMembership([], items, recursiveKey); });
        }
    };
    /**
     * Filter items based on given memberships
     * @deprecated Use the `filterWithMembership` from instance.
     */
    AudiencesDataSource.filterItemsWithMemberships = function (items, memberships) {
        return AudiencesDataSource._filterRecursively(new Set(memberships), items);
    };
    /**
     * Filter items based on the given memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudiencesDataSource.prototype.filterWithMembership = function (memberships, items, recursiveKey) {
        var _this = this;
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).filterWithMembership(memberships, items, recursiveKey);
        }
        else {
            if (!items) {
                return items;
            }
            // One item is targeted if any of the following two conditions are met:
            // 1. The item does not contain any audiences value.
            // 2. The item audiences match any value in the memberships.
            var targetedItems = items.filter(function (item) { return !doesItemContainAudiences(item) || doesItemMatchAudiences(item, memberships); });
            if (recursiveKey) {
                targetedItems = targetedItems.map(function (item) {
                    var _a;
                    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), (_a = {}, _a[recursiveKey] = _this.filterWithMembership(memberships, item[recursiveKey], recursiveKey), _a)));
                });
            }
            return targetedItems;
        }
    };
    /**
     * Filter navigation links based on given memberships
     * @deprecated Use the `filterWithMembership` from instance.
     */
    AudiencesDataSource.filterLinksWithMemberships = function (links, memberships) {
        return AudiencesDataSource._filterRecursively(new Set(memberships), links, function (link) { return link.links; }, function (link, links) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), { links: links })); });
    };
    /**
     * Get person group id from people picker result
     * @param person person returned from the people picker control
     * @returns person group id
     */
    AudiencesDataSource.getGroupObjectId = function (person) {
        if (person.userId && person.userId.length >= GUID_STRING_LEN) {
            return person.userId.substr(person.userId.length - GUID_STRING_LEN);
        }
        else {
            return undefined;
        }
    };
    /**
     * Get the current user's group membership used by audience filtering.
     */
    AudiencesDataSource.prototype.getCurrentUserMemberships = function (scenario) {
        var _this = this;
        var baseUrl = this._pageContext.webAbsoluteUrl;
        // Use the current domain as the base URL to fix the home site membership call.
        // We need to make sure the domain match current's site URL to avoid cross-domain violation.
        if (window &&
            window.location &&
            window.location.origin &&
            baseUrl.indexOf(window.location.origin) === -1) {
            baseUrl = window.location.origin;
        }
        if (!isUseAudienceComponentActivated()) {
            return _ms_audience_targeting_lib_AudienceTargeting__WEBPACK_IMPORTED_MODULE_1__["AudienceTargeting"].getInstance(this._getDataFromAPI).getCurrentUserMemberships(this._cacheRequestKey, baseUrl, scenario);
        }
        else {
            var queryString = scenario ? "?scenario='" + scenario + "'" : '';
            var apiUrl = baseUrl + GetMembershipEndPoint + queryString;
            var paramsForGetData_1 = {
                url: apiUrl,
                qosName: scenario
                    ? "getUserMembershipsForAudienceTargeting." + scenario
                    : 'getUserMembershipsForAudienceTargeting',
                cacheRequestKey: this._cacheRequestKey,
                parseResponse: function (responseText) {
                    return (responseText && JSON.parse(responseText).value) || [];
                },
                method: 'GET',
                additionalHeaders: {
                    'ODATA-VERSION': '4.0',
                    Accept: '*/*, application/json; odata.metadata=minimal'
                },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1
            };
            return this._cache.getDataUtilizingCache({
                cacheRequestKey: this._cacheRequestKey,
                cachingStrategy: 0 /* useCacheAndUpdateInTheBackground */,
                cacheTimeoutTime: isCacheAudienceForTwoHoursKillSwitchActivated() ? undefined : TWO_HOURS_CACHE_TIME,
                getData: function () { return _this._dataRequestor.getData(paramsForGetData_1); }
            });
        }
    };
    /**
     * Helper function to recursively filter out audiences targeted values with given user group memberships.
     * @deprecated We don't need this helper function after removing other deprecated methods.
     */
    AudiencesDataSource._filterRecursively = function (memberships, values, recursiveGetter, recursiveSetter) {
        if (!values) {
            return values;
        }
        // The value is targeted if any of the following two conditions are met:
        // 1. The value does not specify the audiences.
        // 2. The value does specify the audiences and the given user group memberships match any of the specified audiences.
        var targetedValues = values.filter(function (v) { var _a; return !doesItemContainAudiences(v) || ((_a = v.audiences) === null || _a === void 0 ? void 0 : _a.some(function (a) { return memberships.has(a); })); });
        // If the recursive getter and setter are provided, recursively checks the values in the array.
        if (recursiveGetter && recursiveSetter) {
            targetedValues = targetedValues.map(function (value) {
                var originalArray = recursiveGetter(value);
                var targetedArray = AudiencesDataSource._filterRecursively(memberships, originalArray, recursiveGetter, recursiveSetter);
                return recursiveSetter(value, targetedArray);
            });
        }
        return targetedValues;
    };
    /** @deprecated Remove it when graduate the CheckNavAudienceTargetInViewNav kill switch (71980d68-1e8b-44e4-84a5-19370f97ec10) */
    AudiencesDataSource.NAV_AUDIENCE_TARGETING_ENABLED = 0x00000000000800000;
    AudiencesDataSource._instances = {};
    return AudiencesDataSource;
}());

function doesItemContainAudiences(item) {
    return Boolean(item.audiences && item.audiences.length > 0 && item.audiences[0] !== _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_3__["default"].Empty);
}
function doesItemMatchAudiences(item, memberships) {
    var audiences = item.audiences;
    if (!audiences) {
        return false;
    }
    for (var index = 0; index < audiences.length; index++) {
        if (memberships.indexOf(audiences[index]) !== -1) {
            return true;
        }
    }
    return false;
}
function isCacheAudiencesDataSourceInstanceKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('f7fd618b-1552-46ab-a5ed-482958f81075'
    /* '2020-09-17', 'Make audiences data source as singleton on user ID' */
    );
}
function isCacheAudienceForTwoHoursKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('463ac4ec-c850-4547-aaf4-9b4c8992d79e'
    /* '2020-10-23', 'Cache the audience membership only for 2 hours' */
    );
}
function isUseAudienceComponentActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('45b0162c-3bdb-469a-888b-cf1a1961187f'
    /* '2020-12-07', 'Use shared audience-targeting component' */
    );
}
//# sourceMappingURL=AudiencesDataSource.js.map

/***/ }),

/***/ "Qjmx":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/ViewNav.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: ViewNavDataSource, isRefineAudienceTargetKillSwitchActivated, NavNodeKeys, NavigationProvider, AudiencesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/editNav/ViewNavDataSource */ "NuUw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewNavDataSource", function() { return _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__["ViewNavDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRefineAudienceTargetKillSwitchActivated", function() { return _dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_0__["isRefineAudienceTargetKillSwitchActivated"]; });

/* harmony import */ var _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/editNav/IEditNavDataSource */ "ZH1b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavNodeKeys", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavNodeKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationProvider", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavigationProvider"]; });

/* harmony import */ var _dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSources/audienceTargeting/AudiencesDataSource */ "Q+fs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiencesDataSource", function() { return _dataSources_audienceTargeting_AudiencesDataSource__WEBPACK_IMPORTED_MODULE_2__["AudiencesDataSource"]; });

// Everything related to the ViewNav datasource



//# sourceMappingURL=ViewNav.js.map

/***/ }),

/***/ "SHpA":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/storage/PersistentCacheLocalStorage.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: localStorageErrors, PersistentCacheLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageErrors", function() { return localStorageErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheLocalStorage", function() { return PersistentCacheLocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/Global */ "i/zE");



var PREFIX = 'PersistentCache';
var METADATAKEY = 'PersistentCache_metadata';
var localStorageErrors = {
    notSupported: 'localStorage is not supported'
};
var PersistentCacheLocalStorage = /** @class */ (function () {
    function PersistentCacheLocalStorage() {
        try {
            if ('localStorage' in _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"] && _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"].localStorage) {
                this._localStorage = _utilities_Global__WEBPACK_IMPORTED_MODULE_2__["global"].localStorage;
                if (!this._localStorage.getItem(METADATAKEY)) {
                    var metaData = {
                        id: _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_1__["generate"](),
                        created: Date.now(),
                        cacheType: 0 /* localStorage */
                    };
                    this._localStorage.setItem(METADATAKEY, JSON.stringify(metaData));
                }
            }
        }
        catch (ex) {
            // do nothing
        }
        if (!this._localStorage) {
            throw new Error(localStorageErrors.notSupported);
        }
    }
    PersistentCacheLocalStorage.prototype.freeSpace = function (app, size) {
        throw new Error('Method not implemented.');
    };
    /**
     * read data from local storage
     * @param key cache key
     */
    PersistentCacheLocalStorage.prototype.read = function (key) {
        return JSON.parse(this._localStorage.getItem(this._cacheKey(key)));
    };
    /**
     * write data ointo local storage
     */
    PersistentCacheLocalStorage.prototype.write = function (payload) {
        var key = payload.key, data = payload.data;
        if (typeof data !== 'undefined') {
            var dataToCache = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, payload), { lastModified: Date.now() });
            this._localStorage.setItem(this._cacheKey(key), JSON.stringify(dataToCache));
        }
        else {
            this._localStorage.removeItem(key);
        }
    };
    PersistentCacheLocalStorage.prototype.statistics = function () {
        var sizes = [];
        for (var key in this._localStorage) {
            if (key.indexOf(PREFIX) === 0) {
                var item = this._localStorage.getItem(key);
                sizes.push(item ? item.length : 0);
            }
        }
        var metaData = JSON.parse(this._localStorage.getItem(METADATAKEY));
        return {
            metaData: metaData,
            count: sizes.length,
            totalBytes: sizes.reduce(function (a, b) { return a + b; }, 0)
        };
    };
    PersistentCacheLocalStorage.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    PersistentCacheLocalStorage.prototype._cacheKey = function (key) {
        return PREFIX + "_" + key;
    };
    return PersistentCacheLocalStorage;
}());

//# sourceMappingURL=PersistentCacheLocalStorage.js.map

/***/ }),

/***/ "SjTB":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/storage/PersistentCacheIndexedDB.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: indexedDBErrors, PersistentCacheIndexedDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDBErrors", function() { return indexedDBErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheIndexedDB", function() { return PersistentCacheIndexedDB; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-browser/lib/PlatformDetection */ "u0q+");
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Global */ "i/zE");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");





var ResultType;
(function (ResultType) {
    ResultType["success"] = "success";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
// when you add a new index, do not forget to update IPersistentCacheRangeQueryOptions
var APP_INDEX_NAME = 'app';
var APP_LASTMODIFIED_INDEX_NAME = 'app_lastModified';
var APP_LASTREAD_INDEX_NAME = 'app_lastRead';
var APP_READS_INDEX_NAME = 'app_reads';
var DBNAME = 'ODSP_DB';
var DATATABLENAME = 'ODSP_DB_TABLE';
var KEY_INDEX_NAME = 'key';
var LASTMODIFIED_INDEX_NAME = 'lastModified';
var LASTREAD_INDEX_NAME = 'lastRead';
var METADATATABLENAME = 'ODSP_DB_METADATA_TABLE';
var METADATAKEY = 'database_metadata';
var PARENTKEY_INDEX_NAME = 'parentKey';
var PARENTKEY_APP_INDEX_NAME = 'parentKey_app';
var PARENTKEY_APP_LASTMODIFIED_INDEX_NAME = 'parentKey_app_lastModified';
var PARENTKEY_APP_LASTREAD_INDEX_NAME = 'parentKey_app_lastRead';
var PARENTKEY_APP_READS_INDEX_NAME = 'parentKey_app_reads';
var READS_INDEX_NAME = 'reads';
var VERSION = 4;
var platformDetection = new _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__["PlatformDetection"]();
var isGecko = platformDetection.isFirefox;
var indexedDBErrors = {
    notSupported: 'indexedDB is not supported'
};
var PersistentCacheIndexedDB = /** @class */ (function () {
    function PersistentCacheIndexedDB(logger) {
        if ('indexedDB' in _utilities_Global__WEBPACK_IMPORTED_MODULE_3__["global"] && _utilities_Global__WEBPACK_IMPORTED_MODULE_3__["global"].indexedDB) {
            this._logger = logger;
            if (!PersistentCacheIndexedDB._openDBPromise) {
                PersistentCacheIndexedDB._openDBPromise = this._openIndexedDB().then(function (db) {
                    PersistentCacheIndexedDB._db = db;
                    return db;
                });
            }
        }
        else {
            throw new Error(indexedDBErrors.notSupported);
        }
    }
    PersistentCacheIndexedDB.prototype.freeSpace = function (app, size) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([DATATABLENAME], 'readwrite');
                                var table = transaction.objectStore(DATATABLENAME);
                                var req = table.index(APP_LASTREAD_INDEX_NAME).openCursor();
                                req.onsuccess = function (ev) {
                                    var cursor = req.result;
                                    if (cursor) {
                                        if (cursor.value.app === app && size > 0) {
                                            size -= cursor.value.size;
                                            cursor.delete();
                                        }
                                        // Only continue if the required space size is not freed yet
                                        if (size > 0) {
                                            cursor.continue();
                                        }
                                        else {
                                            resolve();
                                        }
                                    }
                                    else {
                                        resolve();
                                    }
                                };
                                req.onerror = function (ev) {
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype.read = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._readInternal(DATATABLENAME, function (table) {
                        return table.get(key);
                    })];
            });
        });
    };
    PersistentCacheIndexedDB.prototype.rangeQuery = function (rangeQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var async, db, _a, _b, transaction, table, resultKeys, index, range, direction, count, indexedTable, cursorRequest;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        async = {};
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        transaction = db.transaction([DATATABLENAME], 'readonly');
                        table = transaction.objectStore(DATATABLENAME);
                        resultKeys = [];
                        index = rangeQuery.index, range = rangeQuery.range, direction = rangeQuery.direction, count = rangeQuery.count;
                        indexedTable = table.index(index);
                        cursorRequest = indexedTable.openKeyCursor(range, direction);
                        cursorRequest.onerror = function (ev) {
                            _this._errorHandling(ev, async.reject);
                        };
                        cursorRequest.onsuccess = function (event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                resultKeys.push(cursor.primaryKey);
                                if (resultKeys.length >= count) {
                                    async.resolve(resultKeys);
                                }
                                else {
                                    cursor.continue();
                                }
                            }
                            else {
                                async.resolve(resultKeys);
                            }
                        };
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                async.resolve = resolve;
                                async.reject = reject;
                            })];
                }
            });
        });
    };
    /**
     * when there is no existing item in the DB with the same key, we add a new entry,
     * otherwise, we override existing entry with the same key
     */
    PersistentCacheIndexedDB.prototype.write = function (payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var key, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                key = payload.key, data = payload.data;
                if (typeof data !== 'undefined') {
                    return [2 /*return*/, this._writeInternal({
                            tableName: DATATABLENAME,
                            key: key,
                            row: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, payload), { lastModified: Date.now() })
                        })];
                }
                else {
                    // if parent key is provided delete existing cache entries using the parentkey
                    if (payload.parentKey !== undefined) {
                        return [2 /*return*/, this._deleteDataRows(payload.parentKey)];
                    }
                    // delete existing cache entry using key
                    return [2 /*return*/, this._writeInternal({
                            tableName: DATATABLENAME,
                            key: key,
                            row: undefined
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    PersistentCacheIndexedDB.prototype.statistics = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var metaData, sizes;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._dbMetaData) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._readAndSetMetadataDB()];
                    case 1:
                        metaData = _a.sent();
                        this._dbMetaData = metaData;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this._iterate(DATATABLENAME, function (data) { return data.size; })];
                    case 3:
                        sizes = _a.sent();
                        return [2 /*return*/, {
                                metaData: this._dbMetaData,
                                count: sizes.length,
                                totalBytes: sizes.reduce(function (a, b) { return a + b; }, 0)
                            }];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._openIndexedDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (PersistentCacheIndexedDB._db) {
                resolve(PersistentCacheIndexedDB._db);
            }
            else {
                // Gecko-only IndexedDB temp storage option:
                // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});
                var openDBRequest_1 = isGecko
                    ? // indexedDB typing bug, firefox expects this signiture
                        indexedDB.open(DBNAME, { version: VERSION, storage: 'temporary' }) // tslint:disable-line:no-any
                    : indexedDB.open(DBNAME, VERSION);
                // these two event handlers act on the database being opened successfully, or not
                openDBRequest_1.onerror = function (ev) {
                    _this._errorHandling(ev, reject);
                };
                openDBRequest_1.onsuccess = function (event) {
                    var db = (PersistentCacheIndexedDB._db = openDBRequest_1.result);
                    resolve(db);
                };
                // This event handles the event whereby a new version of the database needs to be created
                // Either one has not been created before, or a new version number has been submitted via the
                // indexedDB.open call
                openDBRequest_1.onupgradeneeded = function (event) {
                    var database = event.target.result;
                    database.onerror = function (ev) {
                        _this._errorHandling(ev, reject);
                    };
                    var oldVersion = event.oldVersion;
                    _this._handleDBUpgrade(openDBRequest_1, database, oldVersion);
                };
            }
        });
    };
    PersistentCacheIndexedDB.prototype._handleDBUpgrade = function (openDBRequest, database, oldVersion) {
        var objectStore;
        // initial version, need to create new data store and
        if (oldVersion < 1) {
            // Create an objectStore for this database, data key is the key path
            objectStore = database.createObjectStore(DATATABLENAME, {
                keyPath: KEY_INDEX_NAME
            });
            // create an index of created time column
            objectStore.createIndex(LASTMODIFIED_INDEX_NAME, LASTMODIFIED_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(READS_INDEX_NAME, READS_INDEX_NAME, {
                unique: false
            });
            // Create an metatdata table for this database
            database.createObjectStore(METADATATABLENAME, {
                keyPath: KEY_INDEX_NAME
            });
        }
        if (oldVersion < 2) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            objectStore.createIndex(APP_INDEX_NAME, APP_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(LASTREAD_INDEX_NAME, LASTREAD_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(APP_LASTREAD_INDEX_NAME, [APP_INDEX_NAME, LASTREAD_INDEX_NAME], {
                unique: false
            });
        }
        if (oldVersion < 3) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            // for version 3 and lower create the following indices
            objectStore.createIndex(APP_LASTMODIFIED_INDEX_NAME, [APP_INDEX_NAME, LASTMODIFIED_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(APP_READS_INDEX_NAME, [APP_INDEX_NAME, READS_INDEX_NAME], {
                unique: false
            });
        }
        if (oldVersion < 4) {
            // Upgrading existing object store
            objectStore = objectStore || openDBRequest.transaction.objectStore(DATATABLENAME);
            // for latest versions create the following indices
            objectStore.createIndex(PARENTKEY_INDEX_NAME, PARENTKEY_INDEX_NAME, {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_LASTMODIFIED_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, LASTMODIFIED_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_LASTREAD_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, LASTREAD_INDEX_NAME], {
                unique: false
            });
            objectStore.createIndex(PARENTKEY_APP_READS_INDEX_NAME, [PARENTKEY_INDEX_NAME, APP_INDEX_NAME, READS_INDEX_NAME], {
                unique: false
            });
        }
    };
    PersistentCacheIndexedDB.prototype._readAndSetMetadataDB = function () {
        var _this = this;
        // for latest versions create the following indices
        var promise = this._readInternal(METADATATABLENAME, function (table) { return table.get(METADATAKEY); }).then(function (metadatafromcache) {
            if (!metadatafromcache) {
                var newMetaData_1 = {
                    id: _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_2__["generate"](),
                    created: Date.now(),
                    cacheType: 1 /* indexedDB */
                };
                return _this._writeInternal({
                    tableName: METADATATABLENAME,
                    key: METADATAKEY,
                    row: {
                        key: METADATAKEY,
                        data: newMetaData_1
                    }
                }).then(function () { return newMetaData_1; });
            }
            else {
                return metadatafromcache.data;
            }
        });
        return promise;
    };
    PersistentCacheIndexedDB.prototype._readInternal = function (tableName, readOp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var logEndData = _this._logger({ name: 'PersistentCacheIDB.readInternal' });
                                var ioStart = Date.now();
                                var transaction = db.transaction([tableName], 'readonly');
                                var table = transaction.objectStore(tableName);
                                var req = readOp(table);
                                req.onsuccess = function (ev) {
                                    logEndData({
                                        resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Success,
                                        extraData: {
                                            io: Math.round(Date.now() - ioStart)
                                        }
                                    });
                                    resolve(req.result);
                                };
                                req.onerror = function (ev) {
                                    logEndData({
                                        resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Failure,
                                        extraData: {
                                            io: Math.round(Date.now() - ioStart)
                                        }
                                    });
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._iterate = function (tableName, mapping) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var db, _a, _b, results;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        results = [];
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([tableName], 'readonly');
                                var table = transaction.objectStore(tableName);
                                var req = table.openCursor();
                                req.onsuccess = function (ev) {
                                    var cursor = req.result;
                                    if (cursor) {
                                        results.push(mapping(cursor.value));
                                        cursor.continue();
                                    }
                                    else {
                                        resolve(results);
                                    }
                                };
                                req.onerror = function (ev) {
                                    _this._errorHandling(ev, reject);
                                };
                            })];
                }
            });
        });
    };
    PersistentCacheIndexedDB.prototype._writeInternal = function (writeOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tableName, key, row, db, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tableName = writeOptions.tableName, key = writeOptions.key, row = writeOptions.row;
                        _a = PersistentCacheIndexedDB;
                        _b = PersistentCacheIndexedDB._db;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, PersistentCacheIndexedDB._openDBPromise];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        db = (_a._db = _b);
                        // report on the success of the transaction completing, when everything is done
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                try {
                                    var transaction = db.transaction([tableName], 'readwrite');
                                    var table = transaction.objectStore(tableName);
                                    transaction.oncomplete = function () {
                                        // todo: add qos logging
                                    };
                                    transaction.onerror = function (ev) {
                                        _this._errorHandling(ev, reject);
                                    };
                                    var req = row ? table.put(row) : table.delete(key);
                                    req.onsuccess = function (ev) {
                                        resolve();
                                    };
                                    req.onerror = function (ev) {
                                        _this._errorHandling(ev, reject);
                                    };
                                }
                                catch (e) {
                                    throw e;
                                }
                            })];
                }
            });
        });
    };
    /**
     * Delete from data table all the entries of which parentKey starts with parentKeyPrefix
     * @param parentKeyPrefix the prefix for the parentKey
     */
    PersistentCacheIndexedDB.prototype._deleteDataRows = function (parentKeyPrefix) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var upperBound;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                upperBound = parentKeyPrefix.slice(0, parentKeyPrefix.length - 1) +
                    String.fromCharCode(parentKeyPrefix.charCodeAt(parentKeyPrefix.length - 1) + 1);
                return [2 /*return*/, this.rangeQuery({
                        index: PARENTKEY_INDEX_NAME,
                        range: IDBKeyRange.bound(parentKeyPrefix, upperBound, false, true),
                        direction: 'next'
                    })
                        .then(function (resultKeys) {
                        return Promise.all(resultKeys.map(function (key) {
                            return _this._writeInternal({
                                tableName: DATATABLENAME,
                                key: key,
                                row: undefined
                            });
                        }));
                    })
                        .then(function () {
                        return;
                    })];
            });
        });
    };
    PersistentCacheIndexedDB.prototype._errorHandling = function (ev, reject) {
        if (ev.type === ResultType.error) {
            var _a = ev.target.error, name_1 = _a.name, message = _a.message, code = _a.code;
            reject({
                name: name_1,
                message: message,
                code: code
            });
        }
    };
    return PersistentCacheIndexedDB;
}());

//# sourceMappingURL=PersistentCacheIndexedDB.js.map

/***/ }),

/***/ "VAEb":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenuCallout.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var theme = props.theme;
    return {
        root: {
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.semanticColors.bodyDivider,
            boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)',
            backgroundColor: theme.semanticColors.bodyBackground,
            visibility: 'hidden'
        }
    };
};
//# sourceMappingURL=MegaMenuCallout.styles.js.map

/***/ }),

/***/ "W9wO":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/audience-targeting@1.0.14_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/audience-targeting/lib/AudienceTargeting.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: AudienceTargeting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceTargeting", function() { return AudienceTargeting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _MembershipsCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MembershipsCache */ "y/6u");



var GetMembershipEndPoint = '/_api/SP.Publishing.SitePageService.GetCurrentUserMemberships';
/**
 * Audience targeting client handles fetching and caching memberships, and filtering items
 * base on memberships.
 *
 * Note: Please keep this component small, it is referenced by webparts, page components and
 * mobile MEE app.
 */
var AudienceTargeting = /** @class */ (function () {
    function AudienceTargeting(getData) {
        this._getData = getData;
    }
    AudienceTargeting.getInstance = function (getData) {
        if (!AudienceTargeting._instance) {
            AudienceTargeting._instance = new AudienceTargeting(getData);
        }
        return AudienceTargeting._instance;
    };
    /**
     * Filter items based on current user's group memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudienceTargeting.prototype.filter = function (userId, webAbsoluteUrl, scenario, items, recursiveKey) {
        var _this = this;
        if (!items) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(undefined);
        }
        return this.getCurrentUserMemberships(userId, webAbsoluteUrl, scenario)
            .then(function (memberships) { return _this.filterWithMembership(memberships, items, recursiveKey); })
            .catch(function () { return _this.filterWithMembership([], items, recursiveKey); });
    };
    /**
     * Filter items based on the given memberships.
     * If the `recursiveKey` is provided, it will filter recursively on that item field.
     */
    AudienceTargeting.prototype.filterWithMembership = function (memberships, items, recursiveKey) {
        var _this = this;
        if (!items) {
            return items;
        }
        // One item is targeted if any of the following two conditions are met:
        // 1. The item does not contain any audiences value.
        // 2. The item audiences match any value in the memberships.
        var targetedItems = items.filter(function (item) { return !doesItemContainAudiences(item) || doesItemMatchAudiences(item, memberships); });
        if (recursiveKey) {
            targetedItems = targetedItems.map(function (item) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), (_a = {}, _a[recursiveKey] = _this.filterWithMembership(memberships, item[recursiveKey], recursiveKey), _a)));
            });
        }
        return targetedItems;
    };
    /**
     * Get the current user's group membership used by audience filtering.
     */
    AudienceTargeting.prototype.getCurrentUserMemberships = function (userId, webAbsoluteUrl, scenario) {
        var _this = this;
        var memberships = Object(_MembershipsCache__WEBPACK_IMPORTED_MODULE_2__["readMembershipsCache"])(userId);
        if (memberships) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(memberships);
        }
        else if (!this._getMembershipsPromise) {
            var queryString = scenario ? "?scenario='" + scenario + "'" : '';
            var apiUrl = webAbsoluteUrl + GetMembershipEndPoint + queryString;
            this._getMembershipsPromise = this._getData(apiUrl, scenario).then(function (data) {
                _this._getMembershipsPromise = undefined;
                if (data) {
                    Object(_MembershipsCache__WEBPACK_IMPORTED_MODULE_2__["writeMembershipsCache"])(userId, data);
                }
                return data;
            });
        }
        return this._getMembershipsPromise;
    };
    return AudienceTargeting;
}());

function doesItemContainAudiences(item) {
    return Boolean(item.audiences &&
        item.audiences.length > 0 &&
        // not using Guid.Empty to avoid reference to Guid
        item.audiences[0] !== '00000000-0000-0000-0000-000000000000');
}
function doesItemMatchAudiences(item, memberships) {
    var audiences = item.audiences;
    if (!audiences) {
        return false;
    }
    for (var index = 0; index < audiences.length; index++) {
        if (memberships.indexOf(audiences[index]) !== -1) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=AudienceTargeting.js.map

/***/ }),

/***/ "XpCG":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/utilities/footer/FooterHelpers.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: getMegaFooterProps, getSimpleFooterProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMegaFooterProps", function() { return getMegaFooterProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimpleFooterProps", function() { return getSimpleFooterProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Parse footer node into separate footer options
 * @param group Footer node
 * @public
 */
function getMegaFooterProps(links, strings, theme) {
    var footerProps = {
        footerStrings: strings
    };
    if (theme) {
        footerProps.theme = theme;
    }
    if (links && Array.isArray(links)) {
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var node = links_1[_i];
            if (!node) {
                continue;
            }
            else if (node.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */) {
                // logo
                footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { srcImgUrl: node.url });
            }
            else if (node.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */) {
                // name
                if (node.links && node.links.length) {
                    footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { name: node.links[0].name });
                }
            }
            else if (node.name === "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */) {
                // nav links
                footerProps.sections = node.links
                    ? node.links.map(function (l) {
                        return {
                            heading: {
                                name: l.name,
                                url: l.url
                            },
                            linkKey: l.key,
                            items: l.links
                        };
                    })
                    : [];
            }
        }
    }
    return footerProps;
}
function getSimpleFooterProps(links, strings, theme, pageContext) {
    var footerProps = {
        footerStrings: strings,
        pageContext: pageContext
    };
    if (theme) {
        footerProps.theme = theme;
    }
    if (links && Array.isArray(links)) {
        for (var _i = 0, links_2 = links; _i < links_2.length; _i++) {
            var node = links_2[_i];
            if (!node) {
                continue;
            }
            else if (node.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */) {
                // logo
                footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { srcImgUrl: node.url });
            }
            else if (node.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */) {
                // name
                if (node.links && node.links.length) {
                    footerProps.logo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps.logo), { name: node.links[0].name });
                }
            }
            else if (node.name === "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */) {
                // nav links
                footerProps.links = node.links;
            }
        }
    }
    return footerProps;
}
//# sourceMappingURL=FooterHelpers.js.map

/***/ }),

/***/ "Z+U/":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/events/ResultTypeEnum.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/telemetry-manager/./lib/events/ResultTypeEnum.js


/***/ }),

/***/ "ZH1b":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/editNav/IEditNavDataSource.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: NavNodeKeys, NavigationProvider, EditNavLinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavNodeKeys", function() { return NavNodeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationProvider", function() { return NavigationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavLinkType", function() { return EditNavLinkType; });
/** Special INavLink.key values */
var NavNodeKeys;
(function (NavNodeKeys) {
    /** Parent for the global/top nav nodes */
    NavNodeKeys["globalNavParent"] = "1002";
    /** Parent for the quick launch/left nav nodes */
    NavNodeKeys["quickLaunchParent"] = "1025";
    NavNodeKeys["globalNavHome"] = "2003";
    NavNodeKeys["subsites"] = "1026";
    NavNodeKeys["quickLaunchHome"] = "1031";
    NavNodeKeys["quickLaunchRecent"] = "1033";
    NavNodeKeys["siteContents"] = "1034";
    /** Parent node for the rest of the footer nav tree */
    NavNodeKeys["footerNavParent"] = "13b7c916-4fea-4bb2-8994-5cf274aeb530";
    /** Child node containing logo url */
    NavNodeKeys["footerNavLogo"] = "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100";
    /** Child node containing footer name */
    NavNodeKeys["footerNavName"] = "7376cd83-67ac-4753-b156-6a7b3fa0fc1f";
    /** Child node containing footer navigation links */
    NavNodeKeys["footerNavLinks"] = "3a94b35f-030b-468e-80e3-b75ee84ae0ad";
    /** Child node containing fat footer nav sections */
    NavNodeKeys["footerNavSections"] = "47a59018-dcc3-4e98-a14e-146bc4001628";
    /** Key for recycle bin node added client-side */
    NavNodeKeys["clientRecycleBin"] = "-1000";
    /** Key for Edit node added client-side */
    NavNodeKeys["clientEdit"] = "-999";
    /** Key for shared with us node added client-side */
    NavNodeKeys["clientSharedWithUs"] = "-998";
    /** Key for clientToggleLeftNav button added client-side */
    NavNodeKeys["clientToggleLeftNav"] = "-997";
})(NavNodeKeys || (NavNodeKeys = {}));
/**
 * Standard names for server SiteMapProvider classes used to get nav data (only needed in modern
 * for publishing sites). This is a subset of StandardNavigationProviderNames from
 * sporel\cms\Publishing\OM\navigation\StandardNavigationSettings.cs.
 */
var NavigationProvider;
(function (NavigationProvider) {
    /** Publishing global/top navigation provider name */
    NavigationProvider["publishingGlobalNav"] = "GlobalNavigationSwitchableProvider";
    /** Publishing current/left navigation provider name */
    NavigationProvider["publishingQuickLaunch"] = "CurrentNavigationSwitchableProvider";
})(NavigationProvider || (NavigationProvider = {}));
var EditNavLinkType;
(function (EditNavLinkType) {
    /**
     * This is a traditional nav menu node.  If the URL is blank, then the node
     * acts as a menu caption with no hyperlink.
     */
    EditNavLinkType[EditNavLinkType["SimpleLink"] = 0] = "SimpleLink";
    /**
     * This is a special Taxonomy Nav menu node that defines a Friendly URL.
     */
    EditNavLinkType[EditNavLinkType["FriendlyUrl"] = 1] = "FriendlyUrl";
})(EditNavLinkType || (EditNavLinkType = {}));
//# sourceMappingURL=IEditNavDataSource.js.map

/***/ }),

/***/ "Zgja":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenu.scss.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-MegaMenu-gridLayout{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;padding-bottom:12px}.ms-MegaMenu-gridLayout.withDivider{background-image:linear-gradient(to right, " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": " 1px, transparent 1px)}.ms-MegaMenu-gridLayout-enhanced{padding-bottom:24px}.ms-MegaMenu-gridLayout-noBottomPadding{padding-bottom:0px}.ms-MegaMenu-gridLayoutItem{width:300px}.ms-Menu-section{margin:24px;padding:0;background-color:transparent}.ms-Menu-section-enhanced{margin-bottom:0px}.ms-Menu-heading{font-size:" }, { "theme": "largeFontSize", "defaultValue": "18px" }, { "rawString": ";font-weight:" }, { "theme": "largeFontWeight", "defaultValue": "400" }, { "rawString": ";font-weight:600;line-height:1.41em;padding-bottom:10px;margin:0 4px;color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Menu-item{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": ";line-height:19px;padding-bottom:8px}.ms-Menu-item:last-child{padding-bottom:0px}.ms-Menu-item .ms-ContextualMenu-itemText{color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";width:244px}.ms-Menu-item .ms-Nav-link{-webkit-text-decoration-color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";text-decoration-color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";display:block}.ms-Menu-item .ms-Nav-link:focus{outline:-webkit-focus-ring-color auto 5px}.ms-MegaMenu-Callout{position:absolute;z-index:299;border:none;background-color:transparent;padding-top:12px;min-width:302px}.ms-MegaMenu-Callout-NoHover{margin-top:12px;position:absolute;z-index:299;border:none;background-color:" }, { "theme": "bodyBackground", "defaultValue": "#ffffff" }, { "rawString": "}\n" }]);
//# sourceMappingURL=MegaMenu.scss.js.map

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

/***/ "dN6L":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/SimpleFooter/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: SimpleFooter, getFooterProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleFooter */ "6HRV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleFooter", function() { return _SimpleFooter__WEBPACK_IMPORTED_MODULE_0__["SimpleFooter"]; });

/* harmony import */ var _SimpleFooter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleFooter.base */ "+yYx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFooterProps", function() { return _SimpleFooter_base__WEBPACK_IMPORTED_MODULE_1__["getFooterProps"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dOpt":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaFooter/MegaFooter.base.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: MegaFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaFooterBase", function() { return MegaFooterBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Permissions */ "jH+c");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _MegaMenu_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MegaMenu/index */ "oIMt");
/* harmony import */ var _MegaFooter_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MegaFooter.styles */ "2vvD");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "s4p3");













var MEGAFOOTER_COLUMN_WIDTH = 160;
var getClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["classNamesFunction"])();
var MegaFooterBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MegaFooterBase, _super);
    function MegaFooterBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onEditLinksClicked = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({ name: 'FooterLinks.Edit.Click' });
            if (!_this.props.onEditNavClicked) {
                return;
            }
            _this.props.onEditNavClicked(_this._navLinkGroup, undefined, _this._updateFooterDisplayLink);
        };
        _this._updateFooterDisplayLink = function (links, afterSetState) {
            if (_this.props.onFooterLinksUpdated) {
                _this.props.onFooterLinksUpdated();
            }
            if (afterSetState) {
                afterSetState();
            }
        };
        _this._onLogoError = function () {
            _this.setState({ hasLogoLoadError: true });
        };
        _this._itemOnClick = function (ev, item) {
            var pageContext = _this.props.pageContext;
            var numLinks = _this.props.sections.length ? _this.props.sections.length : 0;
            setTimeout(function () {
                return _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_6__["Engagement"].logData({
                    name: "Footer.Link.Click",
                    extraData: {
                        siteId: pageContext && pageContext.siteId,
                        numFooterSections: numLinks,
                        layout: 'MegaFooter'
                    }
                });
            }, 0);
            if (_this._isItemOnClickFixKSActive() && item.onClick) {
                item.onClick(ev, item);
            }
        };
        _this._getItemClickCallback = function (itemCallback) {
            if (!_this._isItemOnClickFixKSActive() && itemCallback) {
                return function (ev, item) {
                    _this._itemOnClick(ev, item);
                    itemCallback(ev, item);
                };
            }
            return _this._itemOnClick;
        };
        _this._isItemOnClickFixKSActive = function () {
            return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('f5134b79-36ed-4d23-a7c8-4e7a9bbf08fe', '4/13/2020', 'fix onClick callback for Extended Footer links');
        };
        _this.state = {
            hasLogoLoadError: false
        };
        return _this;
    }
    MegaFooterBase.prototype.render = function () {
        var _a = this.props, footerStrings = _a.footerStrings, logo = _a.logo, sections = _a.sections, theme = _a.theme;
        var layoutProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.layoutProps), { columnWidth: MEGAFOOTER_COLUMN_WIDTH });
        this._classNames = getClassNames(_MegaFooter_styles__WEBPACK_IMPORTED_MODULE_11__["getStyles"], { theme: theme, sections: sections });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.megaFooterContainer, role: 'contentinfo', "data-automationid": 'MegaFooter' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.megaFooterLogo }, !!logo && this._renderLogo(logo)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.megaFooterSectionsContainer },
                this._showEditLink && this._renderEditButton(),
                !!sections
                    ? this._renderSections(sections, layoutProps)
                    : this._isRemoveMobileAppButtonActive() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: this._getMobileUpsellLink(), target: '_blank' }, footerStrings.mobileUpsell))))));
    };
    // TODO: remove this ms-specific code
    MegaFooterBase.prototype._isMicrosoft = function () {
        return (Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://microsoft.sharepoint.com') ||
            Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://microsoft.sharepoint-df.com') ||
            Object(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_7__["doesStringStartWith"])(window.location.href, 'https://msft.spoppe.com'));
    };
    MegaFooterBase.prototype._getMobileUpsellLink = function () {
        return this._isMicrosoft() ? 'https://aka.ms/getspmobilemsit' : 'https://aka.ms/getspmteamcommsite';
    };
    MegaFooterBase.prototype._renderEditButton = function () {
        var footerStrings = this.props.footerStrings;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-automation-id": 'MegaFooter-edit' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: 'FooterEditLink', className: this._classNames.megaFooterEditLinksButton, onClick: this._onEditLinksClicked, "aria-label": this.props.footerStrings.editAriaLabel ? this.props.footerStrings.editAriaLabel : '' }, footerStrings.edit)));
    };
    Object.defineProperty(MegaFooterBase.prototype, "_showEditLink", {
        get: function () {
            if (!this.props.pageContext || window['teamsCustomAppType'] === 'portals') {
                return false;
            }
            var pageContext = this.props.pageContext;
            var isAnonymousGuest = pageContext.isAnonymousGuestUser || pageContext.isExternalGuestUser;
            var showEditLink = _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].hasPermission(pageContext.webPermMasks, _ms_odsp_datasources_lib_Permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionMask"].manageLists) && !isAnonymousGuest;
            return showEditLink && this._isEditNavInFooterFlightOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MegaFooterBase.prototype, "_isEditNavInFooterFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled({ ODB: 1560 } /* MoveEditFooterLink */);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MegaFooterBase.prototype, "_navLinkGroup", {
        get: function () {
            return {
                name: "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */,
                links: this.props.sections
                    ? this.props.sections.map(function (section) {
                        return {
                            name: section.heading.name,
                            links: section.items,
                            key: section.linkKey,
                            url: section.heading.url
                        };
                    })
                    : []
            };
        },
        enumerable: true,
        configurable: true
    });
    MegaFooterBase.prototype._renderLogo = function (logo) {
        var destinationUrl = logo.destinationUrl, name = logo.name, srcImgUrl = logo.srcImgUrl;
        var logoNameElement = [];
        var enableImage = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('d0c75a93-542a-4abc-ab67-cf128b08990f', '10/2/2019', 'Hide image on image error')
            ? true
            : !this.state.hasLogoLoadError;
        var destinationUrlExists = !!destinationUrl && destinationUrl.length > 0;
        var target = this._islinkTargetKSActive() || !destinationUrlExists
            ? '_blank'
            : _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"].shouldLinkOpenInSameWindow(destinationUrl)
                ? '_self'
                : '_blank';
        if (enableImage && !!srcImgUrl) {
            logoNameElement.push(destinationUrlExists ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { key: 'companyLogo', href: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](destinationUrl).toString(), target: target, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__["NavigationSource"].Footer) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](srcImgUrl).toString(), onError: this._onLogoError }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { key: 'companyLogo', src: new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_8__["default"](srcImgUrl).toString(), onError: this._onLogoError })));
        }
        if (!!name) {
            logoNameElement.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: 'companyName' }, destinationUrlExists ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: destinationUrl, target: target, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__["getNavComponentLabel"])(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__["NavigationSource"].Footer) }, name)) : (name)));
        }
        return logoNameElement;
    };
    MegaFooterBase.prototype._renderSections = function (sections, layoutProps) {
        var _this = this;
        if (!!sections) {
            var menuSections = sections.map(function (s) {
                return {
                    heading: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, s.heading), { onClick: _this._getItemClickCallback(s.heading.onClick), target: _this._islinkTargetKSActive() || s.heading.url === undefined
                            ? undefined
                            : _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"].shouldLinkOpenInSameWindow(s.heading.url)
                                ? '_self'
                                : '_blank' }),
                    items: s.items
                        ? s.items.map(function (i) {
                            return {
                                name: i.name,
                                href: i.url,
                                onClick: _this._getItemClickCallback(i.onClick),
                                target: _this._islinkTargetKSActive() || i.url === undefined
                                    ? undefined
                                    : _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"].shouldLinkOpenInSameWindow(i.url)
                                        ? '_self'
                                        : '_blank'
                            };
                        })
                        : undefined
                };
            });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MegaMenu_index__WEBPACK_IMPORTED_MODULE_10__["MegaMenu"], { sections: menuSections, layoutProps: layoutProps, navigationSource: _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_12__["NavigationSource"].Footer }));
        }
        else {
            return undefined;
        }
    };
    MegaFooterBase.prototype._islinkTargetKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('e2657949-d82e-4521-8087-e46b9f22c7c6', '4/14/2020', 'Keep consistent link targets with header');
    };
    MegaFooterBase.prototype._isRemoveMobileAppButtonActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('509594bb-1aed-4f48-b5a7-3a516630857d', '09/14/2020', 'Remove mobile upsell button');
    };
    return MegaFooterBase;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));

//# sourceMappingURL=MegaFooter.base.js.map

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

/***/ "h7K1":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/Menu.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: MenuBase, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBase", function() { return MenuBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd");
/* harmony import */ var office_ui_fabric_react_lib_components_ContextualMenu_ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames */ "wUuB");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _Menu_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu.styles */ "6mMG");
/* harmony import */ var _MegaMenu_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MegaMenu.scss */ "Zgja");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "s4p3");












var HEADER_LINK_URL = 'http://linkless.header/';
var MenuBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuBase, _super);
    function MenuBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this._classNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])()(_Menu_styles__WEBPACK_IMPORTED_MODULE_6__["getStyles"], {
            theme: _this.props.theme
        });
        return _this;
    }
    MenuBase.prototype.componentDidMount = function () {
        this.props.shouldFocusOnMount && Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["focusFirstChild"])(this._root.current);
    };
    MenuBase.prototype.shouldComponentUpdate = function (nextProps, nextStates) {
        return this.props.heading !== nextProps.heading || this.props.items !== nextProps.items;
    };
    MenuBase.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], { handleTabKey: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneTabbableElements"].none, direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-Menu-section', this._classNames.section, 'ms-Menu-section-enhanced'), ref: this._root },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-Menu-heading', this._classNames.heading), onMouseOver: this._onHeaderMouseOver.bind(this, this.props.heading.name) }, this._renderMenuHeading(this.props.heading)),
                this.props.items &&
                    this.props.items.map(function (item, index) {
                        var getClassNames = item.getItemClassNames || office_ui_fabric_react_lib_components_ContextualMenu_ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_3__["getItemClassNames"];
                        var iconProps = _this._getIconProps(item);
                        var itemClassNames = getClassNames(
                        // There's an odd typings issue with this function. Also, it's been deprecated and is being removed
                        // tslint:disable-next-line:no-any
                        _this.props.theme, !!(item.isDisabled || item.disabled) /* disabled */, false /* expanded */, false /* checked */, !!item.href /* isAnchorLink */, iconProps.iconName !== 'None' /* knownIcon */, item.className, item.itemType === office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider ? item.className : undefined, iconProps.className, item.submenuIconProps ? item.submenuIconProps.className : '');
                        var hasLink = !!item.href && item.href !== HEADER_LINK_URL;
                        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-Menu-item', _this._classNames.item), key: "megaMenuItem" + index }, !hasLink ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onMouseOver: _this._onItemMouseOver.bind(_this, item.name) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: itemClassNames.label }, item.title || item.name))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-Nav-link', _this._classNames.itemLink), href: item.href, target: item.target, onMouseOver: _this._onItemMouseOver.bind(_this, item.name), ref: function (c) {
                                if (c) {
                                    c.addEventListener('click', function (ev) { return _this._itemOnClick(ev, item); });
                                }
                            }, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(_this.props.navigationSource), "data-interception": _this._isLinkPropagateKSActive() ? undefined : 'propagate' },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItem"], { item: item, index: index, hasIcons: false, classNames: itemClassNames })))));
                    }))));
    };
    MenuBase.prototype._itemOnClick = function (ev, item) {
        var pageContext = this.props.pageContext;
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__["Engagement"].logData({
            name: this._getEngagementEventName(),
            extraData: {
                siteId: pageContext && pageContext.siteId
            }
        });
        if (item.onClick) {
            item.onClick(ev, item);
        }
        if (!this._isLinkPropagateKSActive() && this.props.onItemClick) {
            this.props.onItemClick();
        }
    };
    MenuBase.prototype._getEngagementEventName = function () {
        return Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(this.props.navigationSource) + ".MegaMenu.Link.Click";
    };
    MenuBase.prototype._renderMenuHeading = function (item) {
        return item.url && item.url !== HEADER_LINK_URL ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: this._classNames.itemLinkMenuHeading, href: item.url, target: item.target, ref: function (c) {
                if (c && item.onClick) {
                    c.addEventListener('click', function (ev) { return item.onClick(ev, item); });
                }
            }, "data-navigationcomponent": Object(_common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__["getNavComponentLabel"])(this.props.navigationSource), "data-interception": this._isLinkPropagateKSActive() ? undefined : 'propagate' }, item.name)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-is-focusable": true }, item.name));
    };
    /**
     * If display name is too long and uses ellipsis, then use tooltip to show the full name
     * @param item
     * @param event
     */
    MenuBase.prototype._onItemMouseOver = function (name, event) {
        var target = event.currentTarget;
        var textElemList = target && target.getElementsByClassName('ms-ContextualMenu-itemText');
        if (textElemList && textElemList.length > 0) {
            var textElem = textElemList.item(0);
            // if display name is too long
            if (name && textElem && textElem.offsetWidth < textElem.scrollWidth) {
                textElem.title = name;
            }
        }
    };
    /**
     * If display name is too long and uses ellipsis, then use tooltip to show the full name
     * @param item
     * @param event
     */
    MenuBase.prototype._onHeaderMouseOver = function (name, event) {
        var target = event.currentTarget;
        // if display name is too long
        if (name && target && target.offsetWidth < target.scrollWidth) {
            target.title = name;
        }
    };
    MenuBase.prototype._getIconProps = function (item) {
        var iconProps = item.iconProps
            ? item.iconProps
            : {
                iconName: item.icon
            };
        return iconProps;
    };
    MenuBase.prototype._isLinkPropagateKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__["Killswitch"].isActivated('b798b890-31a4-4e7e-a48d-3036c677510a', '8/12/2020', 'allow link propagation for MegaMenu links');
    };
    MenuBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["customizable"])('Menu', ['theme'])
    ], MenuBase);
    return MenuBase;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));

var Menu = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["styled"])(MenuBase, _Menu_styles__WEBPACK_IMPORTED_MODULE_6__["getStyles"]);
//# sourceMappingURL=Menu.js.map

/***/ }),

/***/ "i/zE":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/utilities/Global.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
// to support PersistentCache in worker namespace, we need to support both window and self
var global = typeof window === 'undefined' ? self : window;
//# sourceMappingURL=Global.js.map

/***/ }),

/***/ "iCFh":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/IPersistentCache.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: PersistentCacheType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheType", function() { return PersistentCacheType; });
var PersistentCacheType;
(function (PersistentCacheType) {
    PersistentCacheType[PersistentCacheType["localStorage"] = 0] = "localStorage";
    PersistentCacheType[PersistentCacheType["indexedDB"] = 1] = "indexedDB";
    PersistentCacheType[PersistentCacheType["none"] = 2] = "none"; // this is actually fresh data
})(PersistentCacheType || (PersistentCacheType = {}));
//# sourceMappingURL=IPersistentCache.js.map

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

/***/ "ioxN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Callout.js


/***/ }),

/***/ "jH+c":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/Permissions.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: Identity, IdentityType, PermissionMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/permissions/Identity */ "7AwM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return _utilities_permissions_Identity__WEBPACK_IMPORTED_MODULE_0__["IdentityType"]; });

/* harmony import */ var _utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/permissions/PermissionMask */ "z7Uc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionMask", function() { return _utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_1__["PermissionMask"]; });



//# sourceMappingURL=Permissions.js.map

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

/***/ "nh5d":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenuCallout.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: MegaMenuCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuCallout", function() { return MegaMenuCallout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "ioxN");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MegaMenu */ "HhMN");
/* harmony import */ var _MegaMenuCallout_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MegaMenuCallout.styles */ "VAEb");







/**
 * Callout MegaMenu used in horizontal nav
 * @public
 */
var MegaMenuCallout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MegaMenuCallout, _super);
    function MegaMenuCallout(props) {
        var _this = _super.call(this, props) || this;
        _this._onKeyDown = function (ev) {
            if (ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].escape) {
                _this._dismissCallout();
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._dismissCallout = function (ev) {
            _this.props.onDismiss && _this.props.onDismiss();
        };
        _this.state = {};
        _this._classNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])()(_MegaMenuCallout_styles__WEBPACK_IMPORTED_MODULE_6__["getStyles"], {
            theme: _this.props.theme
        });
        return _this;
    }
    MegaMenuCallout_1 = MegaMenuCallout;
    MegaMenuCallout.prototype.componentDidMount = function () {
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('84e53a0e-a1a6-48da-ae07-d6ece0ff59a5', '09/18/2019', 'Allow only one mega menu opened')) {
            // event to notify other instance of Mega menu callout to close
            // (i.e multiple instances of horizontal nav try to open mega menu)
            office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"].raise(window, MegaMenuCallout_1.SUBMENU_OPEN_EVENT);
        }
        // event listener is only registered after it's own open event so that it skips it
        this._events.on(window, MegaMenuCallout_1.SUBMENU_OPEN_EVENT, this._dismissCallout);
        this._events.on(document.body, 'click', this._dismissCallout);
        this._events.on(window, 'resize', this._dismissCallout);
    };
    MegaMenuCallout.prototype.componentWillUnmount = function () {
        this._events.off(document.body, 'click', this._dismissCallout);
        this._events.off(window, 'resize', this._dismissCallout);
        this._events.off(window, MegaMenuCallout_1.SUBMENU_OPEN_EVENT, this._dismissCallout);
    };
    MegaMenuCallout.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-MegaMenu-Callout' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root, onKeyDown: this._onKeyDown },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__["Callout"], { isBeakVisible: true, directionalHintFixed: true, directionalHint: office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].bottomLeftEdge, target: this.props.target, onDismiss: this._dismissCallout, setInitialFocus: false, shouldRestoreFocus: true, theme: this.props.theme, className: 'isFluent' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MegaMenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenu"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props))))));
    };
    var MegaMenuCallout_1;
    MegaMenuCallout.SUBMENU_OPEN_EVENT = 'submenu_open';
    MegaMenuCallout = MegaMenuCallout_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('MegaMenuCallout', ['theme'])
    ], MegaMenuCallout);
    return MegaMenuCallout;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=MegaMenuCallout.js.map

/***/ }),

/***/ "oIMt":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: MegaMenu, MegaMenuCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MegaMenu */ "HhMN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MegaMenu", function() { return _MegaMenu__WEBPACK_IMPORTED_MODULE_0__["MegaMenu"]; });

/* harmony import */ var _GridLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridLayout */ "EHv9");
/* empty/unused harmony star reexport *//* harmony import */ var _MegaMenuCallout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MegaMenuCallout */ "nh5d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MegaMenuCallout", function() { return _MegaMenuCallout__WEBPACK_IMPORTED_MODULE_2__["MegaMenuCallout"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pcnK":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/CacheUpdateManager.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: CacheUpdateTaskManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheUpdateTaskManager", function() { return CacheUpdateTaskManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/Global */ "i/zE");


var globalId = 0;
var TASK_SCHEDULE_INTERVAL = 5; // schdule next task to be run after 5 milliseconds
var CacheUpdateTaskManager = /** @class */ (function () {
    function CacheUpdateTaskManager() {
        this._queue = {};
    }
    CacheUpdateTaskManager.prototype.enqueue = function (key, update) {
        var existingTasks = (this._queue[key] = this._queue[key] || []);
        var needSchedule = true;
        var replacedTasks = [];
        if (existingTasks.length > 0) {
            if (!existingTasks[0].schedule) {
                // the current task (first in the queue) is not scheduled yet
                // a new update task should replace it
                replacedTasks = this._queue[key];
                this._queue[key] = [];
            }
            else {
                // a new update task should replace all queued but not scheduled task
                replacedTasks = existingTasks.slice(1);
                this._queue[key] = [existingTasks[0]];
                needSchedule = false;
            }
        }
        var task = this._createUpateTask(key, update);
        if (replacedTasks.length > 0) {
            // point the complete promise of all replaced tasks to the new
            task.signal = replacedTasks[0].signal;
        }
        this._queue[key].push(task);
        if (needSchedule) {
            this._scheduleTask(key);
        }
        return task;
    };
    CacheUpdateTaskManager.prototype._createUpateTask = function (key, update) {
        var _this = this;
        var signal = {};
        signal.promise = new Promise(function (resolve, reject) {
            signal.resolve = resolve;
            signal.reject = reject;
        });
        var task = {
            execute: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var ex_1;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            return [4 /*yield*/, update()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            ex_1 = _a.sent();
                            // update qos is handled in _doCacheUpdate
                            task.error = ex_1;
                            return [3 /*break*/, 4];
                        case 3:
                            // schedule the next update when the current task complete
                            this._completeTask(task);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
            schedule: 0,
            id: globalId++,
            key: key,
            signal: signal
        };
        return task;
    };
    CacheUpdateTaskManager.prototype._scheduleTask = function (key) {
        var tasks = this._queue[key];
        if (tasks && tasks.length > 0) {
            var task = tasks[0];
            task.schedule = _utilities_Global__WEBPACK_IMPORTED_MODULE_1__["global"].setTimeout(task.execute, TASK_SCHEDULE_INTERVAL);
        }
    };
    CacheUpdateTaskManager.prototype._completeTask = function (task) {
        var id = task.id, key = task.key;
        var queue = this._queue[key];
        var headTask = queue[0], remainingTasks = queue.slice(1);
        if (headTask.id !== id) {
            throw new Error('this should not happen, currently running task must be the top of the queue');
        }
        this._queue[key] = remainingTasks;
        this._scheduleTask(key);
        if (task.error) {
            task.signal.reject(task.error);
        }
        else {
            task.signal.resolve();
        }
    };
    return CacheUpdateTaskManager;
}());

//# sourceMappingURL=CacheUpdateManager.js.map

/***/ }),

/***/ "rFal":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-fluent-theme@1.0.36_0481e6a21b0e774e9f1ae529761f89ec/node_modules/@ms/shared-react-fluent-theme/lib/Fluent.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: fluentFontWeights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluentFontWeights", function() { return fluentFontWeights; });
/** This is necessary because the theme currently doesn't provide font weights. */
function fluentFontWeights(theme) {
    return {
        regular: {
            fontWeight: 400
        },
        semibold: {
            fontWeight: 600
        },
        bold: {
            fontWeight: 700
        }
    };
}
//# sourceMappingURL=Fluent.js.map

/***/ }),

/***/ "rFu+":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/SimpleFooter/SimpleFooter.styles.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/shared-react-fluent-theme/lib/Fluent */ "rFal");


var getStyles = function (props) {
    var theme = props.theme;
    var fonts = theme.fonts, semanticColors = theme.semanticColors;
    var spaceAroundItems = 24;
    var logoImageHeight = 32;
    return {
        simpleFooterContainer: {
            backgroundColor: semanticColors.bodyBackground,
            // remove z-index here once MobileUpsell sticky hovering button is gone from sp-pages
            zIndex: 13,
            minHeight: 48,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            height: 'auto',
            overflow: 'hidden',
            padding: "0 " + spaceAroundItems + "px"
        },
        simpleFooterLogoSlot: {
            display: 'flex',
            fontWeight: Object(_ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_1__["fluentFontWeights"])(theme).semibold.fontWeight,
            selectors: {
                '.simpleFooterNameItem': {
                    fontSize: fonts.medium.fontSize,
                    fontWeight: Object(_ms_shared_react_fluent_theme_lib_Fluent__WEBPACK_IMPORTED_MODULE_1__["fluentFontWeights"])(theme).semibold.fontWeight,
                    margin: '14px 0 10px 0',
                    lineHeight: '1.4em'
                },
                '.simpleFooterLogoItem': {
                    margin: '8px 0 4px 0',
                    maxHeight: logoImageHeight,
                    selectors: {
                        a: {
                            maxHeight: logoImageHeight
                        }
                    },
                    lineHeight: '1.4em'
                }
            }
        },
        simpleFooterLogoImage: {
            maxHeight: logoImageHeight,
            marginRight: 8
        },
        simpleFooterLinkSlots: {
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap'
        },
        simpleFooterItem: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ lineHeight: '19px', textAlign: 'left', color: semanticColors.bodyText }, fonts.medium), { margin: "14px " + spaceAroundItems + "px 14px 0", display: 'flex', alignItems: 'center', selectors: {
                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                    selectors: {
                        ':hover': {
                            color: semanticColors.actionLinkHovered,
                            textDecoration: 'underline'
                        }
                    }
                },
                ':last-of-type': {
                    marginRight: 0
                }
            } }),
        simpleFooterEditItem: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ border: 'none', background: 'none', color: semanticColors.link, cursor: 'pointer', padding: 0, textDecoration: 'none' }, fonts.medium), { selectors: {
                ':hover': {
                    color: semanticColors.linkHovered,
                    textDecoration: 'underline'
                }
            }, lineHeight: '19px' })
    };
};
//# sourceMappingURL=SimpleFooter.styles.js.map

/***/ }),

/***/ "s2jf":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/utilities/footer/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: getMegaFooterProps, getSimpleFooterProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterHelpers */ "XpCG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMegaFooterProps", function() { return _FooterHelpers__WEBPACK_IMPORTED_MODULE_0__["getMegaFooterProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSimpleFooterProps", function() { return _FooterHelpers__WEBPACK_IMPORTED_MODULE_0__["getSimpleFooterProps"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "s4p3":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/common/telemetry/NavigationSource.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: NavigationSource, getNavComponentLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSource", function() { return NavigationSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavComponentLabel", function() { return getNavComponentLabel; });
/**
 * An enum for types of components that can host navigation links. Intended for telemetry.
 */
var NavigationSource;
(function (NavigationSource) {
    NavigationSource[NavigationSource["Unknown"] = 0] = "Unknown";
    NavigationSource[NavigationSource["CompositeHeader"] = 1] = "CompositeHeader";
    NavigationSource[NavigationSource["HubNav"] = 2] = "HubNav";
    NavigationSource[NavigationSource["Footer"] = 3] = "Footer";
})(NavigationSource || (NavigationSource = {}));
/**
 * Create a label for a specified navigation source to be used when logging telemetry.
 * @param source The navigation component
 */
function getNavComponentLabel(source) {
    switch (source) {
        case NavigationSource.CompositeHeader:
            return 'SiteHeader';
        case NavigationSource.HubNav:
            return 'HubNav';
        case NavigationSource.Footer:
            return 'SiteFooter';
        default:
            return 'UnknownSource';
    }
}
//# sourceMappingURL=NavigationSource.js.map

/***/ }),

/***/ "u0q+":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-browser@1.0.2_@uifabric+utilities@7.33.2/node_modules/@ms/utilities-browser/lib/PlatformDetection.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: getBrowser, getBrowserVersion, getOS, PlatformDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserVersion", function() { return getBrowserVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOS", function() { return getOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return PlatformDetection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
// OneDrive:IgnoreCodeCoverage

function getBrowser(userAgent) {
    userAgent = userAgent.toLowerCase();
    // We want to figure out which ONE browser the user is most likely on.
    // The order of the checks is important so we're not deceived by (for example)
    // Chrome saying that it's Safari.
    // (Each regular expression captures the version number so we can parse it later.)
    var matchedBrowser;
    function testBrowserVersion(pattern) {
        return (matchedBrowser = RegExp(pattern + "(\\d+)([\\d.]*)").exec(userAgent));
    }
    // IE <= 10 has something like 'MSIE 9' in the user agent.
    // This is also what newer versions do in compatibility mode.
    // IE 11 sample user agent contains:
    // Trident/7.0; other stuff... rv:11.0
    var isIE = testBrowserVersion('msie ') || testBrowserVersion('trident.*rv:');
    var isIE9 = matchedBrowser && matchedBrowser[1] === '9';
    // This is Edge (it pretends to be Chrome and Safari).
    var isEdge = !matchedBrowser && testBrowserVersion('edge/');
    // This is Edge Chromium.
    var isEdgeChromium = !matchedBrowser && testBrowserVersion('edg/');
    var isFirefox = !matchedBrowser && testBrowserVersion('fxios|firefox/');
    // Note: lots of random browsers say they're Chrome and will end up in this bucket
    var isChrome = !matchedBrowser && testBrowserVersion('(?:chrome|crios)/');
    var isSafari = !matchedBrowser && /safari\/(\d+)/.test(userAgent);
    if (isSafari) {
        testBrowserVersion('version/');
    }
    // At this point, matchedBrowser should contain the version information
    // Some other browser categories:
    //   IE Mobile: /iemobile\/(\d+)/
    //   IE Mobile in desktop mode: contains WPDesktop; get version from Trident version
    //   Opera (currently goes into Chrome bucket): /opr\/(\d+)/
    var browserName = isIE
        ? 'IE'
        : isEdge
            ? 'Edge'
            : isEdgeChromium
                ? 'EdgeChromium'
                : isFirefox
                    ? 'Firefox'
                    : isChrome
                        ? 'Chrome'
                        : isSafari
                            ? 'Safari'
                            : 'NA';
    return {
        browserName: browserName,
        isChrome: !!isChrome,
        isEdge: !!isEdge,
        isEdgeChromium: !!isEdgeChromium,
        isFirefox: !!isFirefox,
        isIE: !!isIE,
        isIE9: !!isIE9,
        isSafari: !!isSafari,
        matchedBrowser: matchedBrowser
    };
}
function getBrowserVersion(info) {
    var matchedBrowser = info.matchedBrowser;
    // Parse the captured version number for user's browser.
    var browserMajor = (matchedBrowser && parseInt(matchedBrowser[1], 10)) || 0;
    var browserMinor = (matchedBrowser && matchedBrowser[2] && matchedBrowser[2].slice(1)) || '0';
    return {
        browserMajor: browserMajor,
        browserMinor: browserMinor
    };
}
function getOS(userAgent) {
    userAgent = userAgent.toLowerCase();
    // Parse device which gives hints about os / mobile state.
    // Windows Phone IE sometimes pretends to be Android, so explicitly check for Windows Phone first.
    // (wpdesktop is used by Windows Phone in desktop mode.)
    var isWinPhone = /windows phone|wpdesktop/.test(userAgent);
    var matchedOS = isWinPhone || /ipad|iphone|ipod|android/.exec(userAgent);
    // true[0] is undefined, which is falsy
    var device = matchedOS && matchedOS[0];
    var isAndroid = device === 'android';
    var isIPad = device === 'ipad';
    var isIOS = !!device && !isAndroid;
    var isMac = !matchedOS && userAgent.indexOf('macintosh') > -1;
    var isWindows = !matchedOS && userAgent.indexOf('windows nt') > -1;
    var osName = isWindows
        ? 'Windows'
        : isWinPhone
            ? 'Windows Phone'
            : isMac
                ? 'OSX'
                : isIOS
                    ? 'IOS'
                    : isAndroid
                        ? 'Android'
                        : 'NA';
    return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isIPad: isIPad,
        isMac: isMac,
        isWindows: isWindows,
        isWinPhone: !!isWinPhone,
        isMobile: !!matchedOS,
        osName: osName
    };
}

/**
 * Use PlatformDetection to evaluate which user experience makes sense for the user's
 * platform. NOTE: This class is NOT COMPLETE! Meaning not all values are parsed out of
 * the user agent. If something is missing that you need, add it and add unit tests.
 * WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
 */
var PlatformDetection = /** @class */ (function () {
    function PlatformDetection(inputAgent) {
        var root = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined;
        if (!inputAgent) {
            inputAgent = (root && root.navigator && navigator.userAgent) || '';
        }
        var userAgent = inputAgent;
        var agent = inputAgent.toLowerCase();
        var browserInfo = getBrowser(agent);
        var browserVersion = getBrowserVersion(browserInfo);
        var osInfo = getOS(agent);
        var isMobile = osInfo.isMobile;
        var isElectron = /electron\/\\d+[\\d.]*/.test(agent);
        var isWinAppWipEnabled = agent.indexOf('winappwipenabled') > -1;
        var isPWA = typeof window !== 'undefined' && window.matchMedia
            ? window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches
            : false;
        // Other operating systems:
        //   Chrome OS: /cros/
        //   Linux: /linux/ (Android can also say it's Linux, so check for Android first)
        // WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
        var osVersionMatch = /[\s\(](os|os x|windows (?:phone|nt)|android) ([\d._]+)/.exec(agent);
        var isUnlimitedStyleSheetsSupported = false;
        var isWebDavSupported = false;
        var isFolderUploadSupported = false;
        var isHtml5FileUploadSupported = false;
        if (root && root.document) {
            /**
             * Checks to see if styleSheet exists as a property off of a style element.
             * This will determine if style registration should be done via cssText (<= IE9) or not
             */
            var emptyStyle = document.createElement('style');
            emptyStyle.type = 'text/css';
            isUnlimitedStyleSheetsSupported = !emptyStyle.styleSheet;
            isWebDavSupported = 'addBehavior' in HTMLDivElement.prototype;
            var input = document.createElement('input');
            input.type = 'file';
            var file = root.File;
            var fileProto = file && file.prototype;
            isHtml5FileUploadSupported = !!(fileProto &&
                (fileProto.slice || fileProto.mozSlice || fileProto.webkitSlice));
            isFolderUploadSupported = 'webkitdirectory' in input && !isElectron;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, browserInfo), browserVersion), osInfo), { isElectron: isElectron, 
            // OS Identification
            osVersion: osVersionMatch ? osVersionMatch[2] : 'NA', isWindows81: !isMobile && /windows (?:8\.1|nt 6\.3)/.test(agent), isWindows10: !isMobile && agent.indexOf('windows nt 10') > -1, isWindows7: !isMobile && agent.indexOf('windows nt 6.1') > -1, 
            // Device identification
            isWinAppWipEnabled: isWinAppWipEnabled,
            isPWA: isPWA, 
            // Capabilities
            areCSS3TransitionsSupported: !browserInfo.isIE || browserVersion.browserMajor > 9, areTouchEventsSupported: !!root && 'ontouchstart' in root, isFolderUploadSupported: isFolderUploadSupported,
            isHtml5FileUploadSupported: isHtml5FileUploadSupported, isRetinaSupported: !!root && root.devicePixelRatio > 1, isUnlimitedStyleSheetsSupported: isUnlimitedStyleSheetsSupported,
            isWebDavSupported: isWebDavSupported,
            // Raw user agent
            userAgent: userAgent });
    }
    return PlatformDetection;
}());

//# sourceMappingURL=PlatformDetection.js.map

/***/ }),

/***/ "u4xd":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ContextualMenu.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/ContextualMenu.js


/***/ }),

/***/ "uFJw":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/persistent-cache@1.0.9_@uifabric+utilities@7.33.2/node_modules/@ms/persistent-cache/lib/index.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: CacheUpdateTaskManager, PersistentCache, PersistentCacheType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheUpdateManager */ "pcnK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheUpdateTaskManager", function() { return _CacheUpdateManager__WEBPACK_IMPORTED_MODULE_0__["CacheUpdateTaskManager"]; });

/* harmony import */ var _PersistentCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersistentCache */ "4nKP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentCache", function() { return _PersistentCache__WEBPACK_IMPORTED_MODULE_1__["PersistentCache"]; });

/* harmony import */ var _IPersistentCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IPersistentCache */ "iCFh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentCacheType", function() { return _IPersistentCache__WEBPACK_IMPORTED_MODULE_2__["PersistentCacheType"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vI+S":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaFooter/MegaFooter.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: MegaFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaFooter", function() { return MegaFooter; });
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _MegaFooter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MegaFooter.base */ "dOpt");
/* harmony import */ var _MegaFooter_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MegaFooter.styles */ "2vvD");



/**
 * @public
 */
var MegaFooter = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_MegaFooter_base__WEBPACK_IMPORTED_MODULE_1__["MegaFooterBase"], _MegaFooter_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=MegaFooter.js.map

/***/ }),

/***/ "w0JO":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/MegaFooter/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: MegaFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MegaFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MegaFooter */ "vI+S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MegaFooter", function() { return _MegaFooter__WEBPACK_IMPORTED_MODULE_0__["MegaFooter"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "wIFa":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/CompositeFooter/CompositeFooter.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: CompositeFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeFooter", function() { return CompositeFooter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/editNav/ViewNavDataSource */ "NuUw");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _uifabric_variants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uifabric/variants */ "GvAj");
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "PL71");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ReactDeferredComponent/index */ "9lav");
/* harmony import */ var _MegaFooter_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MegaFooter/index */ "w0JO");
/* harmony import */ var _SimpleFooter_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SimpleFooter/index */ "dN6L");
/* harmony import */ var _utilities_footer_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/footer/index */ "s2jf");
















/**
 * @public
 */
var CompositeFooter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompositeFooter, _super);
    function CompositeFooter(props) {
        var _this = _super.call(this, props) || this;
        _this._onEditNavClicked = function (group, exitEditCallback, updateDisplayedLinks) {
            // edit nav displays all links w/o filtering
            var key = "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */;
            _this._getFooterNavNodes(key, true /* skipAudienceFiltering */, _this.props.pageContext).then(function (g) {
                g.name = key;
                g.links = g.links || [];
                _this.props.onEditNavClicked(g, exitEditCallback, updateDisplayedLinks);
            });
        };
        _this._updateFooterFromServerData = function (pageContext) {
            if (pageContext === void 0) { pageContext = _this.props.pageContext; }
            var qos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_8__["Qos"]({ name: 'CompositeFooter.GetFooterNodes' });
            _this._getFooterNavNodes("13b7c916-4fea-4bb2-8994-5cf274aeb530" /* footerNavParent */, false, pageContext)
                .then(function (footerGroup) {
                var _a, _b, _c;
                _this.setState({ footerLinks: footerGroup ? footerGroup.links : undefined });
                if (!_this._isFooterTitleAndLogoPreviewKSActive() || _this.state.footerLinks !== undefined) {
                    _this._originalNameAndLogoLinks = _this._getLogoAndNameLinks(_this.state.footerLinks);
                }
                qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_8__["ResultTypeEnum"].Success });
                if (!isRefineAudienceTargetKillSwitchActivated()) {
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_5__["Engagement"].logData({
                        name: 'FooterNav.Render',
                        extraData: {
                            audienceTargetingEnabled: Boolean((_a = footerGroup) === null || _a === void 0 ? void 0 : _a.isAudienceEnabled).toString(),
                            audienceTargetingProvided: Boolean((_b = footerGroup) === null || _b === void 0 ? void 0 : _b.isAudienceTargeted).toString(),
                            audienceTargetingAffected: Boolean((_c = footerGroup) === null || _c === void 0 ? void 0 : _c.isAudienceAffected).toString()
                        }
                    });
                }
            })
                .catch(function (error) {
                console.error('Error fetching footer nodes');
                qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_8__["ResultTypeEnum"].Failure, error: "Failed to get footer nodes: " + error });
            });
        };
        _this._setDisplayedLinks = function (propsLinks) {
            var audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_6__["AudiencesDataSource"].getInstance(_this.props.pageContext);
            audiencesDataSource.filter('SiteNav', propsLinks, 'links').then(function (footerLinks) {
                _this.setState({ footerLinks: footerLinks });
            });
        };
        _this._isAudienceTargeted = function (propsLinks) {
            var audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_6__["AudiencesDataSource"].getInstance(_this.props.pageContext);
            var navDataSource = new _ms_odsp_datasources_lib_dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"](_this.props.pageContext);
            return (_ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_6__["AudiencesDataSource"].containsAudienceTargetedNode(propsLinks) &&
                (isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                    ? audiencesDataSource.isAudienceTargetedNavEnabledBasedOnWebProperty()
                    : navDataSource.isNavAudienceTargetedEnabled()));
        };
        _this._isShowingPreview = false;
        if (!_this._isFooterTitleAndLogoPreviewKSActive() || _this.props.footerNavigationNodes !== undefined) {
            _this._originalNameAndLogoLinks = _this._getLogoAndNameLinks(_this.props.footerNavigationNodes);
        }
        _this.state = {
            footerLinks: _this.props.footerNavigationNodes || [],
            theme: Object(_uifabric_variants__WEBPACK_IMPORTED_MODULE_9__["getVariant"])(props.theme || Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_10__["getTheme"])(), _this._getEmphasis(props.chromeOptions))
        };
        return _this;
    }
    CompositeFooter.prototype.componentDidMount = function () {
        if (!this.props.footerNavigationNodes) {
            this._updateFooterFromServerData();
        }
        if (this.props.footerNavigationNodes && this._isAudienceTargeted(this.props.footerNavigationNodes)) {
            this._setDisplayedLinks(this.props.footerNavigationNodes);
        }
    };
    CompositeFooter.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.footerNavigationNodes) {
            if (this._isAudienceTargeted(nextProps.footerNavigationNodes)) {
                this._setDisplayedLinks(nextProps.footerNavigationNodes);
            }
            else {
                this.setState({ footerLinks: nextProps.footerNavigationNodes });
            }
        }
        if (!this._isFetchLinksSiteNavigationKSActive() && this.props.pageContext && nextProps.pageContext) {
            if (this.props.pageContext.siteId !== nextProps.pageContext.siteId ||
                this.props.pageContext.webId !== nextProps.pageContext.webId) {
                this._updateFooterFromServerData(nextProps.pageContext);
            }
        }
        var hasPreviewLinks = this._isFooterTitleAndLogoPreviewKSActive()
            ? nextProps.footerLinks && nextProps.footerLinks.length === 2
            : Boolean(nextProps.footerLinks) ||
                (!Boolean(nextProps.footerLinks) && Boolean(this.props.footerLinks));
        if (hasPreviewLinks || (nextProps.footerLinks === undefined && this._isShowingPreview)) {
            this._handleFooterNameOrLogoChange(nextProps.footerLinks || this._originalNameAndLogoLinks);
            this._isShowingPreview = hasPreviewLinks;
        }
        if (nextProps.chromeOptions && nextProps.chromeOptions.footer) {
            this.setState({
                theme: Object(_uifabric_variants__WEBPACK_IMPORTED_MODULE_9__["getVariant"])(nextProps.theme || Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_10__["getTheme"])(), this._getEmphasis(nextProps.chromeOptions))
            });
        }
    };
    CompositeFooter.prototype.render = function () {
        if (this._isFooterEnabled) {
            var footerLinks = this.state.footerLinks;
            var layout = this._getFooterLayout();
            var renderSimpleFooter = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterLayout"].SIMPLE;
            var renderMegaFooter = layout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterLayout"].EXTENDED;
            var theme = this.state.theme;
            if (renderSimpleFooter && !this.props.simpleFooterStrings) {
                console.error('simpleFooterStrings must not be undefined when rendering the SimpleFooter layout');
                /* tslint:disable-next-line:no-null-keyword */
                return null;
            }
            if (renderMegaFooter && !this.props.megaFooterStrings) {
                console.error('megaFooterStrings must not be undefined when rendering the MegaFooter layout');
                /* tslint:disable-next-line:no-null-keyword */
                return null;
            }
            if (renderMegaFooter) {
                this._megaFooterProps = Object(_utilities_footer_index__WEBPACK_IMPORTED_MODULE_15__["getMegaFooterProps"])(footerLinks, this.props.megaFooterStrings, theme);
                if (this._isLayoutDeferLoadingKSActive()) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MegaFooter_index__WEBPACK_IMPORTED_MODULE_13__["MegaFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._megaFooterProps, { pageContext: this.props.pageContext, onEditNavClicked: this._onEditNavClicked, onFooterLinksUpdated: this._updateFooterFromServerData })));
                }
                return this._getDeferredMegaFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._megaFooterProps), { pageContext: this.props.pageContext, onEditNavClicked: this._onEditNavClicked, onFooterLinksUpdated: this._updateFooterFromServerData }));
            }
            if (renderSimpleFooter) {
                this._simpleFooterProps = {
                    footerStrings: undefined
                };
                if (!this._isFooterCustomized(this.state.footerLinks)) {
                    this._simpleFooterProps = Object(_utilities_footer_index__WEBPACK_IMPORTED_MODULE_15__["getSimpleFooterProps"])(this.props.enableMobileUpsell ? this._getDefaultLinks() : [], this.props.simpleFooterStrings, theme);
                }
                else {
                    this._simpleFooterProps = Object(_utilities_footer_index__WEBPACK_IMPORTED_MODULE_15__["getSimpleFooterProps"])(this.state.footerLinks, this.props.simpleFooterStrings, theme);
                }
                if (this._isLayoutDeferLoadingKSActive()) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SimpleFooter_index__WEBPACK_IMPORTED_MODULE_14__["SimpleFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._simpleFooterProps, { pageContext: this.props.pageContext, onEditNavClicked: this._onEditNavClicked, onFooterLinksUpdated: this._updateFooterFromServerData })));
                }
                return this._getDeferredSimpleFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._simpleFooterProps), { pageContext: this.props.pageContext, onEditNavClicked: this._onEditNavClicked, onFooterLinksUpdated: this._updateFooterFromServerData }));
            }
        }
        /* tslint:disable-next-line:no-null-keyword */
        return null;
    };
    CompositeFooter.prototype._getDeferredMegaFooter = function (footerProps) {
        var deferredMegaFooterProps = {
            modulePath: '../MegaFooter/index',
            moduleLoader: {
                load: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../MegaFooter/index */ "w0JO")).then(function (module) { return module.MegaFooter; });
                }
            },
            props: footerProps
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_12__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredMegaFooterProps))));
    };
    CompositeFooter.prototype._getDeferredSimpleFooter = function (footerProps) {
        var deferredSimpleFooterProps = {
            modulePath: '../SimpleFooter/index',
            moduleLoader: {
                load: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../SimpleFooter/index */ "dN6L")).then(function (module) { return module.SimpleFooter; });
                }
            },
            props: footerProps
        };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_12__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, deferredSimpleFooterProps));
    };
    CompositeFooter.prototype._getFooterLayout = function () {
        var layout = _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterLayout"].SIMPLE;
        if (this.props.chromeOptions &&
            this.props.chromeOptions.footer &&
            this.props.chromeOptions.footer.layout) {
            layout = this.props.chromeOptions.footer.layout;
        }
        return layout;
    };
    CompositeFooter.prototype._getEmphasis = function (chromeOptions) {
        if (chromeOptions && chromeOptions.footer) {
            switch (chromeOptions.footer.emphasis) {
                case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterEmphasis"].Neutral:
                    return _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].Neutral;
                case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterEmphasis"].Soft:
                    return _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].Soft;
                case _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_2__["FooterEmphasis"].None:
                    return _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].None;
                default:
                    return _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].Strong;
            }
        }
        return _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_4__["SPVariantThemeType"].Strong;
    };
    CompositeFooter.prototype._getFooterNavNodes = function (key, skipAudienceFiltering, pageContext) {
        if (pageContext) {
            var audienceFilterNodeKey = "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */;
            return new _ms_odsp_datasources_lib_dataSources_editNav_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_3__["ViewNavDataSource"](pageContext)
                .getMenuState({
                menuNodeKey: key,
                skipAudienceFiltering: skipAudienceFiltering,
                audienceFilterNodeKey: audienceFilterNodeKey
            })
                .then(function (dsLinkGroup) {
                // Directly remove this `.then` clause when graduate the kill switch.
                if (isRefineAudienceTargetKillSwitchActivated()) {
                    return { links: dsLinkGroup && dsLinkGroup.links };
                }
                else {
                    return dsLinkGroup;
                }
            });
        }
        else {
            Promise.reject('no page context');
        }
    };
    Object.defineProperty(CompositeFooter.prototype, "_isFooterEnabled", {
        get: function () {
            return this.props.chromeOptions && this.props.chromeOptions.footer
                ? !this.props.chromeOptions.footer.hidden
                : !this.props.isFooterInitiallyHidden;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the component detects changes to the footer logo or name, detected by a change to props
     * @param newLinks: the links that are new/have been changed
     */
    CompositeFooter.prototype._handleFooterNameOrLogoChange = function (newLinks) {
        var footerLinks = this.state.footerLinks;
        if (!footerLinks) {
            if (this._isFooterTitleAndLogoPreviewKSActive()) {
                return;
            }
            footerLinks = [];
        }
        var foundLogo = false;
        var foundName = false;
        var newLogo = newLinks
            ? newLinks.filter(function (l) {
                return l ? l.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */ : undefined;
            })[0]
            : undefined;
        var newName = newLinks
            ? newLinks.filter(function (l) {
                return l ? l.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */ : undefined;
            })[0]
            : undefined;
        for (var i = 0; i < footerLinks.length && (!foundLogo || !foundName); i++) {
            if (footerLinks[i] &&
                footerLinks[i].name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */ &&
                (this._isFooterTitleAndLogoPreviewKSActive() || newName)) {
                footerLinks[i] = newName;
                foundName = true;
            }
            else if (footerLinks[i] &&
                footerLinks[i].name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */ &&
                (this._isFooterTitleAndLogoPreviewKSActive() || newLogo)) {
                footerLinks[i] = newLogo;
                foundLogo = true;
            }
        }
        if (!foundLogo && (this._isFooterTitleAndLogoPreviewKSActive() || newLogo)) {
            footerLinks.push(newLogo);
        }
        if (!foundName && (this._isFooterTitleAndLogoPreviewKSActive() || newName)) {
            footerLinks.push(newName);
        }
        this.setState({ footerLinks: footerLinks });
    };
    CompositeFooter.prototype._getLogoAndNameLinks = function (footerLinks) {
        var logoAndNameLinks = [];
        if (this._isFooterTitleAndLogoPreviewKSActive()) {
            logoAndNameLinks.push(footerLinks.filter(function (l) { return l.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */; })[0]);
            logoAndNameLinks.push(footerLinks.filter(function (l) { return l.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */; })[0]);
        }
        else {
            var logo = footerLinks
                ? footerLinks.filter(function (l) {
                    return l ? l.name === "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */ : undefined;
                })[0]
                : undefined;
            var name_1 = footerLinks
                ? footerLinks.filter(function (l) {
                    return l ? l.name === "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */ : undefined;
                })[0]
                : undefined;
            logoAndNameLinks.push(logo || this._getDefaultLogoLink());
            logoAndNameLinks.push(name_1 || this._getDefaultTitleLink());
        }
        return logoAndNameLinks;
    };
    CompositeFooter.prototype._getDefaultLogoLink = function () {
        return {
            name: "2e456c2e-3ded-4a6c-a9ea-f7ac4c1b5100" /* footerNavLogo */,
            url: ''
        };
    };
    CompositeFooter.prototype._getDefaultTitleLink = function () {
        return {
            name: "7376cd83-67ac-4753-b156-6a7b3fa0fc1f" /* footerNavName */,
            url: undefined,
            links: [
                {
                    name: '',
                    url: undefined
                }
            ]
        };
    };
    CompositeFooter.prototype._isFooterCustomized = function (links) {
        // Check if the only link is footer links parent node - this isn't a real link so it doesn't mean it's customized
        if (links &&
            links.length === 1 &&
            links[0].name === '3a94b35f-030b-468e-80e3-b75ee84ae0ad' &&
            !links[0].links) {
            return false;
        }
        return links && links.length > 0;
    };
    CompositeFooter.prototype._getDefaultLinks = function () {
        return [
            {
                name: undefined,
                url: undefined,
                links: [
                    {
                        name: '',
                        url: '',
                        key: 'defaultGetMobileAppNode',
                        automationId: 'simpleFooter-defaultGetMobileAppNode'
                    }
                ]
            }
        ];
    };
    CompositeFooter.prototype._isFooterTitleAndLogoPreviewKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('5a79c7c8-c34b-46d1-8bcd-76cc6c52443e', '5/24/2020', 'fix footer title and logo live preview from CTL');
    };
    CompositeFooter.prototype._isLayoutDeferLoadingKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('e00ef3fc-dcc1-4928-804d-e3ba73875ffa', '6/5/2020', 'defer load footer layouts');
    };
    CompositeFooter.prototype._isFetchLinksSiteNavigationKSActive = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('40fb01c7-93d4-4b11-aa2d-fe4457728d5c', '08/17/2020', 'refetch links after in-place navigation across sites');
    };
    CompositeFooter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_11__["customizable"])('CompositeFooter', ['footerLinks', 'theme'])
    ], CompositeFooter);
    return CompositeFooter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function isRefineAudienceTargetKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('1cd2d1c9-fdc8-4110-a71e-e8125063dd90', '2020-09-01', 'Refine the audience targeting logging');
}
function isCheckNavAudienceTargetInViewNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('71980d68-1e8b-44e4-84a5-19370f97ec10'
    /* '2020-12-15', 'Leverage the check nav audience target method from ViewNavDataSource' */
    );
}
//# sourceMappingURL=CompositeFooter.js.map

/***/ }),

/***/ "wUuB":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: getSplitButtonVerticalDividerClassNames, getItemClassNames, getItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSplitButtonVerticalDividerClassNames", function() { return getSplitButtonVerticalDividerClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClassNames", function() { return getItemClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemStyles", function() { return getItemStyles; });
/* harmony import */ var _Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider/VerticalDivider.classNames */ "3btB");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "wmyZ");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");




var CONTEXTUAL_SPLIT_MENU_MINWIDTH = '28px';
var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMaxMedium"]);
var getSplitButtonVerticalDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(
/* eslint-disable deprecation/deprecation */
function (theme) {
    var _a;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])(Object(_Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__["getDividerClassNames"])(theme), {
        /* eslint-enable deprecation/deprecation */
        wrapper: {
            position: 'absolute',
            right: 28,
            selectors: (_a = {},
                _a[MediumScreenSelector] = {
                    right: 32,
                },
                _a),
        },
        divider: {
            height: 16,
            width: 1,
        },
    });
});
var GlobalClassNames = {
    item: 'ms-ContextualMenu-item',
    divider: 'ms-ContextualMenu-divider',
    root: 'ms-ContextualMenu-link',
    isChecked: 'is-checked',
    isExpanded: 'is-expanded',
    isDisabled: 'is-disabled',
    linkContent: 'ms-ContextualMenu-linkContent',
    linkContentMenu: 'ms-ContextualMenu-linkContent',
    icon: 'ms-ContextualMenu-icon',
    iconColor: 'ms-ContextualMenu-iconColor',
    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
    label: 'ms-ContextualMenu-itemText',
    secondaryText: 'ms-ContextualMenu-secondaryText',
    splitMenu: 'ms-ContextualMenu-splitMenu',
    screenReaderText: 'ms-ContextualMenu-screenReaderText',
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/microsoft/fluentui/issues/5534
 */
var getItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
    var _a, _b, _c, _d;
    var styles = Object(_ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["getMenuItemStyles"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getGlobalClassNames"])(GlobalClassNames, theme);
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])({
        item: [classNames.item, styles.item, itemClassName],
        divider: [classNames.divider, styles.divider, dividerClassName],
        root: [
            classNames.root,
            styles.root,
            checked && [classNames.isChecked, styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && [classNames.isExpanded, styles.rootExpanded],
            disabled && [classNames.isDisabled, styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_a = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _a),
                },
            ],
            className,
        ],
        splitPrimary: [
            styles.root,
            {
                width: "calc(100% - " + CONTEXTUAL_SPLIT_MENU_MINWIDTH + ")",
            },
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: (_b = {
                            ':hover': styles.rootHovered
                        },
                        // when hovering over the splitPrimary also affect the splitMenu
                        _b[":hover ~ ." + classNames.splitMenu] = styles.rootHovered,
                        _b[':active'] = styles.rootPressed,
                        _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _b),
                },
            ],
        ],
        splitMenu: [
            classNames.splitMenu,
            styles.root,
            {
                flexBasis: '0',
                padding: '0 8px',
                minWidth: CONTEXTUAL_SPLIT_MENU_MINWIDTH,
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_c = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _c),
                },
            ],
        ],
        anchorLink: styles.anchorLink,
        linkContent: [classNames.linkContent, styles.linkContent],
        linkContentMenu: [
            classNames.linkContentMenu,
            styles.linkContent,
            {
                justifyContent: 'center',
            },
        ],
        icon: [
            classNames.icon,
            knownIcon && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && [classNames.isDisabled, styles.iconDisabled],
        ],
        iconColor: styles.iconColor,
        checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
        subMenuIcon: [
            classNames.subMenuIcon,
            styles.subMenuIcon,
            subMenuClassName,
            expanded && { color: theme.palette.neutralPrimary },
            disabled && [styles.iconDisabled],
        ],
        label: [classNames.label, styles.label],
        secondaryText: [classNames.secondaryText, styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            !disabled &&
                !checked && [
                {
                    selectors: (_d = {},
                        _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _d),
                },
            ],
        ],
        screenReaderText: [
            classNames.screenReaderText,
            styles.screenReaderText,
            _Styling__WEBPACK_IMPORTED_MODULE_2__["hiddenContentStyle"],
            { visibility: 'hidden' },
        ],
    });
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props - the ContextualMenuItem style props used to generate its styles.
 */
var getItemStyles = function (props) {
    var theme = props.theme, disabled = props.disabled, expanded = props.expanded, checked = props.checked, isAnchorLink = props.isAnchorLink, knownIcon = props.knownIcon, itemClassName = props.itemClassName, dividerClassName = props.dividerClassName, iconClassName = props.iconClassName, subMenuClassName = props.subMenuClassName, primaryDisabled = props.primaryDisabled, className = props.className;
    // eslint-disable-next-line deprecation/deprecation
    return getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};
//# sourceMappingURL=ContextualMenu.classNames.js.map

/***/ }),

/***/ "wmyZ":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: CONTEXTUAL_MENU_ITEM_HEIGHT, getMenuItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXTUAL_MENU_ITEM_HEIGHT", function() { return CONTEXTUAL_MENU_ITEM_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemStyles", function() { return getMenuItemStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var CONTEXTUAL_MENU_ITEM_HEIGHT = 36;
var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]);
var getItemHighContrastStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    var _a;
    return {
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none',
            },
            _a),
    };
});
var getMenuItemStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, palette = theme.palette;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemTextHoverColor = semanticColors.menuItemTextHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundPressed;
    var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box',
            },
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: ContextualMenuItemDividerColor,
            position: 'relative',
        },
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            fonts.medium,
            {
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 8px 0 4px',
                textAlign: 'left',
            },
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                color: 'GrayText',
                opacity: 1,
            }, _a), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
        },
        rootHovered: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ backgroundColor: ContextualMenuItemBackgroundHoverColor, color: ContextualMenuItemTextHoverColor, selectors: {
                '.ms-ContextualMenu-icon': {
                    color: palette.themeDarkAlt,
                },
                '.ms-ContextualMenu-submenuIcon': {
                    color: palette.neutralPrimary,
                },
            } }, getItemHighContrastStyles()),
        rootFocused: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ backgroundColor: palette.white }, getItemHighContrastStyles()),
        rootChecked: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ selectors: {
                '.ms-ContextualMenu-checkmarkIcon': {
                    color: palette.neutralPrimary,
                },
            } }, getItemHighContrastStyles()),
        rootPressed: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, selectors: {
                '.ms-ContextualMenu-icon': {
                    color: palette.themeDark,
                },
                '.ms-ContextualMenu-submenuIcon': {
                    color: palette.neutralPrimary,
                },
            } }, getItemHighContrastStyles()),
        rootExpanded: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
        },
        anchorLink: {
            padding: '0px 8px 0 4px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box',
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        },
        secondaryText: {
            color: theme.palette.neutralSecondary,
            paddingLeft: '20px',
            textAlign: 'right',
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium,
            width: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium,
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0',
            selectors: (_b = {},
                _b[MediumScreenSelector] = {
                    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].large,
                    width: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].large,
                },
                _b),
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'inherit',
                },
                _c['$root:hover &'] = {
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText',
                        },
                        _d),
                },
                _c['$root:focus &'] = {
                    selectors: (_e = {},
                        _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText',
                        },
                        _e),
                },
                _c),
        },
        iconDisabled: {
            color: semanticColors.disabledBodyText,
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_f = {},
                _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'HighlightText',
                },
                _f),
        },
        subMenuIcon: {
            height: CONTEXTUAL_MENU_ITEM_HEIGHT,
            lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            color: palette.neutralSecondary,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].small,
            selectors: (_g = {
                    ':hover': {
                        color: palette.neutralPrimary,
                    },
                    ':active': {
                        color: palette.neutralPrimary,
                    }
                },
                _g[MediumScreenSelector] = {
                    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"].medium,
                },
                _g[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'HighlightText',
                },
                _g),
        },
        splitButtonFlexContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            {
                display: 'flex',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
        ],
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(menuItemStyles);
});
//# sourceMappingURL=ContextualMenu.cnstyles.js.map

/***/ }),

/***/ "y/6u":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/audience-targeting@1.0.14_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/audience-targeting/lib/MembershipsCache.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: readMembershipsCache, writeMembershipsCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMembershipsCache", function() { return readMembershipsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeMembershipsCache", function() { return writeMembershipsCache; });
var PREFIX = 'MembershipsCache';
var CACHE_EXPIREATION_TIME = 2 * 60 * 60 * 1000; // 2 hours
/**
 * read memberships from local storage
 * @param key cache key
 */
function readMembershipsCache(key) {
    validate();
    var item = window.localStorage.getItem(_cacheKey(key));
    if (item) {
        var cachedData = JSON.parse(item);
        if (cachedData &&
            cachedData.lastModified &&
            Date.now() - cachedData.lastModified <= CACHE_EXPIREATION_TIME) {
            return cachedData.data;
        }
    }
    return undefined;
}
/**
 * write memberships into local storage
 */
function writeMembershipsCache(key, memberships) {
    validate();
    if (memberships) {
        var dataToCache = {
            data: memberships,
            lastModified: Date.now()
        };
        window.localStorage.setItem(_cacheKey(key), JSON.stringify(dataToCache));
    }
    else {
        window.localStorage.removeItem(key);
    }
}
function validate() {
    if (!window || !window.localStorage) {
        throw new Error('localStorage is not supported');
    }
}
function _cacheKey(key) {
    return PREFIX + "_" + key;
}
//# sourceMappingURL=MembershipsCache.js.map

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

/***/ }),

/***/ "z7Uc":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/utilities/permissions/PermissionMask.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: PermissionMask, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionMask", function() { return PermissionMask; });
var PermissionMask = /** @class */ (function () {
    function PermissionMask() {
    }
    PermissionMask.hasItemPermission = function (item, permission) {
        return item && item.permissions && PermissionMask.hasPermission(item.permissions, permission);
    };
    PermissionMask.hasPermission = function (actualPerms, requestedPerm) {
        // When a bitwise operation like '&' is performed on an integer in Javascipt, the result
        // is automatically converted into a 32-bit signed integer. This usually doesn't matter,
        // but there is a error case when the most significant bit is set. For example,
        // if hasPermission(fullMask, fullMask) was called,
        // 0xFFFFFFFF & 0xFFFFFFFF results in a value of -1. Since 0xFFFFFFFF is still an unsigned
        // 64-bit integer and -1 is a signed 32-bit integer, they do not equal each other.
        // tslint:disable:no-bitwise
        return (!!requestedPerm &&
            !!actualPerms &&
            (requestedPerm.Low & actualPerms.Low) >>> 0 === requestedPerm.Low &&
            (requestedPerm.High & actualPerms.High) >>> 0 === requestedPerm.High);
        // tslint:enable:no-bitwise
    };
    PermissionMask.hasAny = function (actualPerms, requestedPerms) {
        return (requestedPerms || []).some(function (permission) {
            return PermissionMask.hasPermission(actualPerms, permission);
        });
    };
    PermissionMask.hasIdentityPermission = function (identity, permission) {
        return (permission && identity.webPermMasks && PermissionMask.hasPermission(identity.webPermMasks, permission));
    };
    PermissionMask.insertListItems = { High: 0x0, Low: 0x2 };
    PermissionMask.editListItems = { High: 0x0, Low: 0x4 };
    PermissionMask.deleteListItems = { High: 0x0, Low: 0x8 };
    PermissionMask.approveItems = { High: 0x0, Low: 0x10 };
    PermissionMask.openItems = { High: 0x0, Low: 0x20 };
    PermissionMask.viewVersions = { High: 0x0, Low: 0x40 };
    PermissionMask.deleteVersions = { High: 0x0, Low: 0x80 };
    PermissionMask.cancelCheckout = { High: 0x0, Low: 0x100 };
    PermissionMask.manageLists = { High: 0x0, Low: 0x800 };
    PermissionMask.viewFormPages = { High: 0x0, Low: 0x1000 };
    PermissionMask.reviewListItems = { High: 0x0, Low: 0x4000 };
    PermissionMask.viewPages = { High: 0x0, Low: 0x20000 };
    PermissionMask.layoutsPage = { High: 0x0, Low: 0x21000 };
    PermissionMask.addAndCustomizePages = { High: 0x0, Low: 0x40000 };
    PermissionMask.applyThemeAndBorder = { High: 0x0, Low: 0x80000 };
    PermissionMask.viewUsageData = { High: 0x0, Low: 0x200000 };
    PermissionMask.manageSubwebs = { High: 0x0, Low: 0x800000 };
    PermissionMask.managePermissions = { High: 0x0, Low: 0x2000000 };
    PermissionMask.browseDirectories = { High: 0x0, Low: 0x4000000 };
    PermissionMask.manageWeb = { High: 0x0, Low: 0x40000000 };
    PermissionMask.useClientIntegration = { High: 0x10, Low: 0x0 };
    PermissionMask.manageAlerts = { High: 0x40, Low: 0x0 };
    PermissionMask.createAlerts = { High: 0x80, Low: 0x0 };
    PermissionMask.enumeratePermissions = { High: 0x40000000, Low: 0x0 };
    PermissionMask.useRemoteAPIs = { High: 0x00000020, Low: 0x0 };
    // fullMask has all permissions, should be the last option in this list.
    PermissionMask.fullMask = { High: 0x7fffffff, Low: 0xffffffff };
    return PermissionMask;
}());

/* harmony default export */ __webpack_exports__["default"] = (PermissionMask);
//# sourceMappingURL=PermissionMask.js.map

/***/ }),

/***/ "zpEg":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/CachedDataSource.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: CachedDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedDataSource", function() { return CachedDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSource */ "AfY0");
/* harmony import */ var _PersistentRequestCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersistentRequestCache */ "MLtZ");
/* harmony import */ var _RequestCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestCache */ "M66I");




/**
 * A special version of the base DataSource that comes with a built-in cache.
 *
 * Cache operates in a similar fashion to  sp-home 'oil.ds' and should be compatible if given
 * the same prefix.
 */
var CachedDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CachedDataSource, _super);
    /**
     * @param pageContext - ISpPageContext needed by BaseDataSource.
     * @param id - The id of the current datasource instance, used as the id of the cache as well.
     * @param cacheOptions - Provides options to overwrite default settings of the cache.
     */
    function CachedDataSource(params, dependencies) {
        var _this = _super.call(this, params, dependencies) || this;
        var pageContext = dependencies.pageContext;
        _this._legacyRequestCache = new _RequestCache__WEBPACK_IMPORTED_MODULE_3__["RequestCache"](params, { pageContext: pageContext });
        // Exclude the `cacheType` for persistent request cache cache.
        var cacheType = params.cacheType, persistentRequestCacheParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(params, ["cacheType"]);
        _this._persistentRequestCache = new _PersistentRequestCache__WEBPACK_IMPORTED_MODULE_2__["PersistentRequestCache"](persistentRequestCacheParams, {
            pageContext: pageContext
        });
        return _this;
    }
    /**
     * @deprecated, please use getDataUtilizingPersistentCache which support indexedDB storage
     *
     * TODO: remove old version of params
     */
    CachedDataSource.prototype.getDataUtilizingLegacyCache = function (options) {
        var _this = this;
        var _a = options, getUrl = _a.getUrl, getAdditionalPostData = _a.getAdditionalPostData, cacheRequestKey = _a.cacheRequestKey, cacheTimeoutTime = _a.cacheTimeoutTime, getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["getUrl", "getAdditionalPostData", "cacheRequestKey", "cacheTimeoutTime"]);
        getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: getUrl && getUrl(), additionalPostData: getAdditionalPostData && getAdditionalPostData(), 
            // these defaults previously provided by DataSource.getData
            method: 'POST' }, getDataParams);
        // handle deprecated function forms of url/postdata
        getDataParams.url = getDataParams.url || (getUrl && getUrl());
        if (!('needsRequestDigest' in getDataParams)) {
            getDataParams.needsRequestDigest = this.needsRequestDigest(getDataParams.url);
        }
        getDataParams.additionalPostData =
            getDataParams.additionalPostData || (getAdditionalPostData && getAdditionalPostData());
        cacheRequestKey =
            cacheRequestKey ||
                this.getRequestKey(getDataParams.url, getDataParams.method, getDataParams.additionalPostData);
        var _b = options.useStale, useStale = _b === void 0 ? false : _b, _c = options.bypassCache, bypassCache = _c === void 0 ? false : _c, _d = options.onlyCache, onlyCache = _d === void 0 ? false : _d, _e = options.checkForInvalidation, checkForInvalidation = _e === void 0 ? false : _e, _f = options.setInvalidated, setInvalidated = _f === void 0 ? false : _f;
        return this._legacyRequestCache.getDataUtilizingCache({
            cacheRequestKey: cacheRequestKey,
            useStale: useStale,
            bypassCache: bypassCache,
            onlyCache: onlyCache,
            checkForInvalidation: checkForInvalidation,
            setInvalidated: setInvalidated,
            cacheTimeoutTime: cacheTimeoutTime,
            getData: function () { return _this.dataRequestor.getData(getDataParams); }
        });
    };
    /**
     * A special version of getData that will utilize the cache.
     *
     * TODO: remove old version of params
     */
    CachedDataSource.prototype.getDataUtilizingPersistentCache = function (options) {
        var _this = this;
        var _a = options, getUrl = _a.getUrl, getAdditionalPostData = _a.getAdditionalPostData, cacheRequestKey = _a.cacheRequestKey, cacheTimeoutTime = _a.cacheTimeoutTime, returnStatistics = _a.returnStatistics, getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["getUrl", "getAdditionalPostData", "cacheRequestKey", "cacheTimeoutTime", "returnStatistics"]);
        getDataParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: getUrl && getUrl(), additionalPostData: getAdditionalPostData && getAdditionalPostData(), 
            // these defaults previously provided by DataSource.getData
            method: 'POST' }, getDataParams);
        // handle deprecated function forms of url/postdata
        getDataParams.url = getDataParams.url || (getUrl && getUrl());
        if (!('needsRequestDigest' in getDataParams)) {
            getDataParams.needsRequestDigest = this.needsRequestDigest(getDataParams.url);
        }
        getDataParams.additionalPostData =
            getDataParams.additionalPostData || (getAdditionalPostData && getAdditionalPostData());
        cacheRequestKey =
            cacheRequestKey ||
                this.getRequestKey(getDataParams.url, getDataParams.method, getDataParams.additionalPostData);
        var cachingStrategy = options.cachingStrategy;
        return this._persistentRequestCache.getDataUtilizingCache({
            cachingStrategy: cachingStrategy,
            cacheRequestKey: cacheRequestKey,
            cacheTimeoutTime: cacheTimeoutTime,
            getData: function () {
                return _this.dataRequestor.getData(getDataParams);
            },
            returnStatistics: returnStatistics
        });
    };
    /**
     * Returns true if all of the following are satisfied:
     * - Cache entry for this key exists
     * - localStorage entry with an invalidation timestamp for this key exists
     * - the invalidation timestamp is newer than the cache entry time
     *
     * @param cacheRequestKey Key to check
     */
    CachedDataSource.prototype.isCachedDataInvalidated = function (cacheRequestKey) {
        return (this._legacyRequestCache.isCachedDataInvalidated &&
            this._legacyRequestCache.isCachedDataInvalidated(cacheRequestKey));
    };
    /**
     * Serializes a key for the request. Override this method to use your own serialization
     * or naming scheme.
     */
    CachedDataSource.prototype.getRequestKey = function (url, method, additionalPostData) {
        return this._legacyRequestCache.getRequestKey(url, method, additionalPostData);
    };
    Object.defineProperty(CachedDataSource.prototype, "cacheId", {
        /**
         * Name for session storage entry storing the data for this cache.
         */
        get: function () {
            return this._legacyRequestCache.cacheId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedDataSource.prototype, "cacheVersionId", {
        /**
         * Name for session storage entry storing the version number/partition for this cache.
         */
        get: function () {
            return this._legacyRequestCache.cacheVersionId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Flushes the cache entry with the specified cache request key.
     * If no key is specified, flushes the whole cache.
     */
    CachedDataSource.prototype.flushCache = function (cacheRequestKey) {
        this._legacyRequestCache.flushCache(cacheRequestKey);
        this._persistentRequestCache.flushCache(cacheRequestKey);
    };
    return CachedDataSource;
}(_DataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (CachedDataSource);
//# sourceMappingURL=CachedDataSource.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~spcx-sitefooter_[locale].js.map