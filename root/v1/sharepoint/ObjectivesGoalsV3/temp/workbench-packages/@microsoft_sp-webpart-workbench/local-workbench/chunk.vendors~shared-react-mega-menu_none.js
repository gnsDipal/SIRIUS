(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-mega-menu"],{

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

/***/ "I7Jc":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/Menu.js ***!
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
/* harmony import */ var _Menu_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu.styles */ "yAKn");
/* harmony import */ var _MegaMenu_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MegaMenu.scss */ "Xnv1");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _common_telemetry_NavigationSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/telemetry/NavigationSource */ "MFpg");












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

/***/ "JieS":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenuCallout.styles.js ***!
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

/***/ "O8cP":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenu.js ***!
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
/* harmony import */ var _GridLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridLayout */ "OzVy");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "I7Jc");
/* harmony import */ var _MegaMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MegaMenu.scss */ "Xnv1");







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

/***/ "OzVy":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/GridLayout.js ***!
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

/***/ "Xnv1":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenu.scss.js ***!
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

/***/ "q8JF":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/MegaMenuCallout.js ***!
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
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MegaMenu */ "O8cP");
/* harmony import */ var _MegaMenuCallout_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MegaMenuCallout.styles */ "JieS");







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

/***/ "yAKn":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MegaMenu/Menu.styles.js ***!
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

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-mega-menu_[locale].js.map