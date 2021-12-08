(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["shared-react-webtemplatesgallerydialog"],{

/***/ "/BN8":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/webTemplatesGalleryDialog/WebTemplatesGalleryDialog.js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplatesGalleryDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplatesGalleryDialog", function() { return WebTemplatesGalleryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Modal */ "Vr3T");
/* harmony import */ var _ms_odsp_utilities_lib_browser_ResponsiveUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/browser/ResponsiveUI */ "4lbg");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _interfaces_IWebTemplatesGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/IWebTemplatesGallery */ "UdI1");
/* harmony import */ var _WebTemplatesGalleryDialog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebTemplatesGalleryDialog.scss */ "E74r");
// OneDrive:IgnoreCodeCoverage







var WEBTEMPLATESGALLERY_CANCELED = 'webtemplatesgallery_canceled';
var WEBTEMPLATESGALLERY_RESIZE = 'webtemplatesgallery_resize';
var WEBTEMPLATESGALLERY_VIEWSITE = 'webtemplatesgallery_viewsite';
var WebTemplatesGalleryDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebTemplatesGalleryDialog, _super);
    function WebTemplatesGalleryDialog(props) {
        var _this = _super.call(this, props) || this;
        _this._onIFrameLoad = function () {
            _this.setState({
                isIframeLoaded: true
            });
            if (!!_this._iframeRef) {
                // tslint:disable:ban-native-functions
                window.addEventListener('resize', _this._handleResize.bind(_this));
                window.addEventListener('orientationchange', _this._handleResize.bind(_this));
                // tslint:enable:ban-native-functions
            }
        };
        // Handle any postMessages sent by the iframed web templates gallery component
        // to resize, close the dialog, or navigate to the site.
        _this._handleMessages = function (webTemplatesGalleryEvent) {
            var eventData;
            try {
                eventData = JSON.parse(webTemplatesGalleryEvent.data);
            }
            catch (e) {
                return;
            }
            var eventMethod = eventData.method;
            if (eventMethod === WEBTEMPLATESGALLERY_RESIZE) {
                if (eventData.height && eventData.width) {
                    var heightVal = !isNaN(Number(eventData.height)) ? eventData.height + 'px' : eventData.height;
                    var widthVal = !isNaN(Number(eventData.width)) ? eventData.width + 'px' : eventData.width;
                    _this.setState({
                        iframeHeight: heightVal,
                        iframeWidth: widthVal
                    });
                }
            }
            else if (eventMethod === WEBTEMPLATESGALLERY_CANCELED) {
                _this._closeModal();
            }
            else if (eventMethod === WEBTEMPLATESGALLERY_VIEWSITE) {
                if (eventData.href) {
                    window.location.href = eventData.href;
                }
            }
        };
        _this._closeModal = function () {
            _this.setState({ isModalOpen: false });
            if (_this.props.onDismiss) {
                _this.props.onDismiss();
            }
        };
        _this._pageContext = props.pageContext;
        _this._mode = props.mode;
        // dlg=true indicates the component is in a dialog (rather than full page) and should use size breakpoints accordingly
        _this._webTemplatesGalleryUrl =
            _this._pageContext.webAbsoluteUrl.replace(/\/$/, '') +
                '/_layouts/15/webtemplatesgallery.aspx?mode=' +
                _interfaces_IWebTemplatesGallery__WEBPACK_IMPORTED_MODULE_5__["WebTemplatesGalleryMode"][_this._mode] +
                '&dlg=true';
        _this.state = {
            isModalOpen: true,
            isIframeLoaded: false
        };
        return _this;
    }
    WebTemplatesGalleryDialog.prototype.componentDidMount = function () {
        // disable tslint as it's just for prototyping
        // tslint:disable:ban-native-functions
        window.addEventListener('message', this._handleMessages);
    };
    WebTemplatesGalleryDialog.prototype.componentWillUnmount = function () {
        window.removeEventListener('message', this._handleMessages);
        window.removeEventListener('resize', this._handleResize);
        window.removeEventListener('orientationchange', this._handleResize);
        // tslint:enable:ban-native-functions
    };
    WebTemplatesGalleryDialog.prototype.render = function () {
        var _this = this;
        var _a = this.state, isModalOpen = _a.isModalOpen, isIframeLoaded = _a.isIframeLoaded, iframeWidth = _a.iframeWidth, iframeHeight = _a.iframeHeight;
        var _b = iframeWidth && iframeHeight ? { width: iframeWidth, height: iframeHeight } : this._getInitialSize(), width = _b.width, height = _b.height;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], { isOpen: isModalOpen, styles: { main: [_WebTemplatesGalleryDialog_scss__WEBPACK_IMPORTED_MODULE_6__["webTemplatesGalleryModal"]] } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: !isIframeLoaded ? _WebTemplatesGalleryDialog_scss__WEBPACK_IMPORTED_MODULE_6__["webTemplatesGallerySpinner"] : 'webTemplatesGalleryContent', style: {
                    overflow: 'hidden',
                    width: width,
                    height: height
                } },
                !isIframeLoaded && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], { size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__["SpinnerSize"].large }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("iframe", { ref: function (iframeEle) {
                        _this._iframeRef = iframeEle;
                    }, id: 'WebTemplatesGalleryIFrame', name: 'WebTemplatesGalleryIFrame', className: _WebTemplatesGalleryDialog_scss__WEBPACK_IMPORTED_MODULE_6__["webTemplatesGalleryIframe"], onLoad: this._onIFrameLoad, src: this._webTemplatesGalleryUrl, "data-is-focusable": true, style: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        display: isIframeLoaded ? 'block' : 'none'
                    } }))));
    };
    WebTemplatesGalleryDialog.prototype._handleResize = function () {
        if (this._iframeRef) {
            // @ts-ignore
            this._iframeRef.contentWindow.postMessage('iframe_resize', '*');
        }
    };
    // Attempt to prevent "jank" by calculating initial size of the web templates gallery component.
    WebTemplatesGalleryDialog.prototype._getInitialSize = function () {
        var DEFAULTPAGE_XLARGE_MAXWIDTH = 1148;
        var DEFAULTPAGE_LARGE_MAXWIDTH = 920;
        var DEFAULTPAGE_HEIGHT = 714;
        var DIALOGPADDING_XL = 50;
        var DIALOGPADDING_L = 40;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowSize = _ms_odsp_utilities_lib_browser_ResponsiveUI__WEBPACK_IMPORTED_MODULE_3__["ResponsiveUI"].determineWindowSize(windowWidth);
        var defaultPageMaxWidth = DEFAULTPAGE_XLARGE_MAXWIDTH;
        var dialogPadding = DIALOGPADDING_XL;
        switch (windowSize) {
            case 'XXXXLarge':
            case 'XXXLarge':
            case 'XXLarge':
            case 'XLarge':
                break;
            case 'Large':
                defaultPageMaxWidth = DEFAULTPAGE_LARGE_MAXWIDTH;
                dialogPadding = DIALOGPADDING_L;
                break;
            default:
        }
        if (windowSize === 'Medium' || windowSize === 'Small') {
            return {
                width: '100%',
                height: '100%'
            };
        }
        var pageWidth = Math.min(defaultPageMaxWidth, windowWidth - dialogPadding * 2);
        var pageHeight = Math.min(DEFAULTPAGE_HEIGHT, windowHeight - dialogPadding * 2);
        return {
            width: pageWidth + 'px',
            height: pageHeight + 'px'
        };
    };
    return WebTemplatesGalleryDialog;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (WebTemplatesGalleryDialog);
//# sourceMappingURL=WebTemplatesGalleryDialog.js.map

/***/ }),

/***/ "E74r":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/shared-react-web-templates@0.1.240_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/shared-react-web-templates/lib/webTemplatesGalleryDialog/WebTemplatesGalleryDialog.scss.js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: webTemplatesGalleryModal, webTemplatesGalleryIframe, webTemplatesGallerySpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryModal", function() { return webTemplatesGalleryModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGalleryIframe", function() { return webTemplatesGalleryIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webTemplatesGallerySpinner", function() { return webTemplatesGallerySpinner; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".webTemplatesGalleryModal_3be81219{overflow:hidden;border-radius:" }, { "theme": "roundedCorner6", "defaultValue": "6px" }, { "rawString": "}@media (max-width: 639.99999px){.webTemplatesGalleryModal_3be81219{max-height:100%;max-width:100%}}.webTemplatesGalleryIframe_3be81219{border:none}.webTemplatesGallerySpinner_3be81219{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}\n" }]);
var webTemplatesGalleryModal = "webTemplatesGalleryModal_3be81219";
var webTemplatesGalleryIframe = "webTemplatesGalleryIframe_3be81219";
var webTemplatesGallerySpinner = "webTemplatesGallerySpinner_3be81219";
//# sourceMappingURL=WebTemplatesGalleryDialog.scss.js.map

/***/ }),

/***/ "fyAn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Spinner.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Spinner.js


/***/ })

}]);
//# sourceMappingURL=chunk.shared-react-webtemplatesgallerydialog_none.js.map