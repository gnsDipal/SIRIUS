(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-create-group"],{

/***/ "3WSi":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/FocusTrapZone/index.js


/***/ }),

/***/ "8dHh":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-client-form@1.5.0_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-client-form/lib/components/iframeLoaderPanel/IframeLoaderPanel.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: IframeLoaderPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeLoaderPanel", function() { return IframeLoaderPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Panel */ "p6C6");
/* harmony import */ var _IframeLoaderPanel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IframeLoaderPanel.scss */ "XH42");

// External packages


// Local packages

var IFRAME_HEIGHT_OFFSET = 50;
var IFRAME_HEIGHT_MIN = 50;
var IframeLoaderPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IframeLoaderPanel, _super);
    function IframeLoaderPanel(props) {
        var _this = _super.call(this, props) || this;
        _this._onLoad = function () {
            if (_this.props.onLoad) {
                _this.props.onLoad(_this._frame);
            }
        };
        return _this;
    }
    IframeLoaderPanel.prototype.render = function () {
        var _this = this;
        // This is to override "height: 100%" for ".ms-IframeLoader-iframe" that
        // is defined in odsp-next.
        var iframeStyle = {
            height: this._getIframeHeight()
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: 'ms-IframeLoaderPanel', firstFocusableSelector: 'ms-TextField-field', isOpen: true }, this.props.panelProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("iframe", { className: 'ms-IframeLoader-iframe', src: this.props.url, ref: function (frame) {
                    _this._frame = frame;
                }, onLoad: this._onLoad, style: iframeStyle, role: this.props.isExcludeFromScreenReader ? 'none' : null })));
    };
    IframeLoaderPanel.prototype.componentWillUnmount = function () {
        if (this._frame) {
            this._frame.src = '';
        }
    };
    IframeLoaderPanel.prototype._getIframeHeight = function () {
        var height = document.body.clientHeight - IFRAME_HEIGHT_OFFSET;
        height = height < IFRAME_HEIGHT_MIN ? IFRAME_HEIGHT_MIN : height;
        return height + 'px';
    };
    IframeLoaderPanel.defaultProps = {
        panelProps: {
            type: office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__["PanelType"].largeFixed
        }
    };
    return IframeLoaderPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=IframeLoaderPanel.js.map

/***/ }),

/***/ "Dfht":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/IframeLoaderPanel/IframeLoaderPanel.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: IframeLoaderPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_shared_react_client_form_lib_components_iframeLoaderPanel_IframeLoaderPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/shared-react-client-form/lib/components/iframeLoaderPanel/IframeLoaderPanel */ "8dHh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IframeLoaderPanel", function() { return _ms_shared_react_client_form_lib_components_iframeLoaderPanel_IframeLoaderPanel__WEBPACK_IMPORTED_MODULE_0__["IframeLoaderPanel"]; });


//# sourceMappingURL=IframeLoaderPanel.js.map

/***/ }),

/***/ "OqUb":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Overlay.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Overlay.js


/***/ }),

/***/ "SLaJ":
/*!*********************************************************************!*\
  !*** ./lib/chunks/spcx-panels/CreateGroupPanel/CreateGroupPanel.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_components_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Panel */ "Wa6+");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_odsp_shared_react_lib_components_IframeLoaderPanel_IframeLoaderPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/IframeLoaderPanel/IframeLoaderPanel */ "Dfht");
/* harmony import */ var _CreateGroupPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateGroupPanel.module.scss */ "nj1n");






var CREATE_GROUP_ASPX = '/_layouts/15/CreateGroup.aspx?';
/**
 * Create hub-joined site panel
 */
var CreateGroupPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreateGroupPanel, _super);
    function CreateGroupPanel(props) {
        var _this = _super.call(this, props) || this;
        _this._onIframeLoaded = function (frame) {
            // Do nothing
        };
        _this._receiveMessage = function (event) {
            if (event.data === 'CloseDialog') {
                _this.props.onDismiss();
            }
        };
        var _a = _this.props
            .spPageContext, hubSiteId = _a.hubSiteId, isSPO = _a.isSPO, alternateWebAppHost = _a.alternateWebAppHost, portalLocation = _a.portalLocation, siteServerRelativeUrl = _a.siteServerRelativeUrl; // tslint:disable-line:no-any
        _this._hubSiteId = hubSiteId;
        _this._siteServerRelativeUrl = siteServerRelativeUrl;
        var host = !isSPO && alternateWebAppHost ? alternateWebAppHost : portalLocation;
        _this._prefixUrl = host ? host.replace(/\/$/, '') : '';
        return _this;
    }
    CreateGroupPanel.prototype.render = function () {
        window.addEventListener('message', (this._receiveMessageEventListener = this._receiveMessage), false);
        var query = '';
        var includeSiteServerRelativeUrl = false;
        if (this.props.joinHubSite) {
            query = this._hubSiteId ? 'hubSiteId=' + this._hubSiteId : '';
        }
        else if (this.props.groupifySite) {
            query = 'mode=connectgroup';
            includeSiteServerRelativeUrl = true;
        }
        var createGroupUrl = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format('{0}{1}{2}{3}', this._prefixUrl, !!this._siteServerRelativeUrl && includeSiteServerRelativeUrl
            ? this._siteServerRelativeUrl.replace(/\/$/, '')
            : '', CREATE_GROUP_ASPX, query);
        var iframeLoaderPanelProps = {
            url: createGroupUrl,
            onLoad: this._onIframeLoaded,
            panelProps: {
                className: _CreateGroupPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].CreateGroupPanel,
                customWidth: '940px',
                hasCloseButton: false,
                isLightDismiss: true,
                isOpen: this.props.isOpen,
                onDismiss: this.props.onDismiss,
                type: office_ui_fabric_react_lib_components_Panel__WEBPACK_IMPORTED_MODULE_1__["PanelType"].custom
            }
        };
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ms_odsp_shared_react_lib_components_IframeLoaderPanel_IframeLoaderPanel__WEBPACK_IMPORTED_MODULE_4__["IframeLoaderPanel"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, iframeLoaderPanelProps));
    };
    /**
     * invoked once only on the client immediately before a component is unmounted
     * remove the event listener before unmounted
     */
    CreateGroupPanel.prototype.componentWillUnmountl = function () {
        window.removeEventListener('message', this._receiveMessageEventListener, false);
    };
    return CreateGroupPanel;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CreateGroupPanel);


/***/ }),

/***/ "XH42":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-client-form@1.5.0_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-client-form/lib/components/iframeLoaderPanel/IframeLoaderPanel.scss.js ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-IframeLoaderPanel{width:100%}.ms-IframeLoader-loadingLabel{padding-bottom:15px;display:none}.ms-IFrameLoader-LoadingWithMargin.ms-IframeLoader-loadingLabel{margin:15px 15px 15px 30px}.ms-IframeLoader-title{display:none}.ms-IframeLoader-iframe{width:100%;border:none;display:block}.ms-IframeLoader-progressContainer{display:none}.ms-IframeLoader-iframe--visible,.ms-IframeLoader-title--visible,.ms-IframeLoader-loadingLabel--visible,.ms-IframeLoader-progressContainer--visible,.ms-IframeLoader--visible{display:block}\n" }]);
//# sourceMappingURL=IframeLoaderPanel.scss.js.map

/***/ }),

/***/ "YkKq":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/chunks/spcx-panels/CreateGroupPanel/CreateGroupPanel.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".e_b_6b55bba6{top:50px}.e_b_6b55bba6 .ms-Panel-content{padding-left:0;padding-right:0}.e_b_6b55bba6 .ms-Panel-main{background-color:\"[theme:bodyBackground, default: #ffffff]\"}", ""]);


/***/ }),

/***/ "hY6p":
/*!*****************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/CreateGroupPanel/CreateGroupPanel.module.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CreateGroupPanel.module.css */ "YkKq");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "nj1n":
/*!*********************************************************************************!*\
  !*** ./lib/chunks/spcx-panels/CreateGroupPanel/CreateGroupPanel.module.scss.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CreateGroupPanel.module.css */ "hY6p");
var styles = {
    CreateGroupPanel: 'e_b_6b55bba6'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ })

}]);
//# sourceMappingURL=chunk.spcx-create-group_none.js.map