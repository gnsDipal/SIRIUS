(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[12],{

/***/ "LBpa":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/ShareIFrame.scss.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ShareFrame{border:none;min-width:300px}.frameVisible{visibility:visible}.frameLoading{position:absolute;top:-9999px}.shareSpinner{position:absolute;top:40%}[dir='ltr'] .shareSpinner{left:40%}[dir='rtl'] .shareSpinner{right:40%}.od-share-DialogContainer.ms-Dialog-main{visibility:visible;width:auto;height:auto;max-width:650px}.od-share-DialogContainer.ms-Dialog-main>.ms-Dialog-header{padding-top:10px;padding-bottom:0px}[dir='ltr'] .od-share-DialogContainer.ms-Dialog-main>.ms-Dialog-header{padding-right:24px}[dir='rtl'] .od-share-DialogContainer.ms-Dialog-main>.ms-Dialog-header{padding-left:24px}.od-share-DialogContainer.ms-Dialog-main>.ms-Dialog-header>.ms-Dialog-title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.od-share-DialogContent{padding-top:0px;padding-bottom:10px;min-height:50px}[dir='ltr'] .od-share-DialogContent{padding-right:10px}[dir='rtl'] .od-share-DialogContent{padding-left:10px}[dir='ltr'] .od-share-DialogContent{padding-left:5px}[dir='rtl'] .od-share-DialogContent{padding-right:5px}\n" }]);
//# sourceMappingURL=ShareIFrame.scss.js.map

/***/ }),

/***/ "YjIr":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/ShareIFrame.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: ShareIFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIFrame", function() { return ShareIFrame; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ShareIFrame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShareIFrame.scss */ "LBpa");







var ShareIFrame = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShareIFrame, _super);
    function ShareIFrame(props) {
        var _this = _super.call(this, props) || this;
        _this._shareFrameHeight = '321px';
        _this._sharedWithFrameHeight = '295px';
        _this._frameWidth = '595px';
        _this._closeDialog = function (ev) {
            // Reset the state
            _this.setState({ frameLoading: true, frameVisible: false });
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            if (ev) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this.state = { frameLoading: true, frameVisible: false };
        return _this;
    }
    ShareIFrame.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.shareVisible && !this.state.frameVisible) {
            this.setState({ frameLoading: true, frameVisible: false });
        }
    };
    ShareIFrame.prototype.render = function () {
        var _this = this;
        var title = this.props.title ? " '" + this.props.title + "'" : '';
        var shareTitle = this.props.shareLabel + title;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { hidden: !this.props.shareVisible, onDismiss: this._closeDialog, type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogType"].close, title: shareTitle, isBlocking: false, containerClassName: 'od-share-DialogContainer', contentClassName: 'od-share-DialogContent' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                this.state.frameLoading ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { label: this.props.loadingLabel, className: 'shareSpinner' })) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("iframe", { src: this.props.url, tabIndex: 0, className: 'ShareFrame ' +
                            this.props.frameClass +
                            (this.state.frameVisible ? ' frameVisible' : ' frameLoading'), ref: function (frame) { return _this._setupIframeElementFunctions(frame); }, onLoad: function () { return _this._frameLoad(); }, height: this._shareFrameHeight, width: this._frameWidth, title: this.props.shareLabel })))));
    };
    ShareIFrame.prototype._frameLoad = function () {
        var _this = this;
        var aspForm = this._frame.contentWindow.document.getElementById('aspnetForm');
        var sharedWithTab = this._frame.contentWindow.document.getElementById('lnkSharedWithDlg');
        var shareDialogTab = this._frame.contentWindow.document.getElementById('lnkShrDlg');
        // The aspform gets an unhandled submit event from the "Close" button on the
        // shared with page. This causes the page to attempt to send an email when really
        // the dialog should close. Adding this event listener here prevents this bad behavior.
        if (aspForm) {
            aspForm.addEventListener('submit', function (ev) { return _this._closeDialog(ev); });
        }
        if (sharedWithTab) {
            sharedWithTab.addEventListener('click', function (ev) { return _this._sharedWithTabClick(); });
        }
        if (shareDialogTab) {
            shareDialogTab.addEventListener('click', function (ev) { return _this._updateFrameHeight(); });
            shareDialogTab.focus();
        }
        if (Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])()) {
            this._frame.contentDocument.documentElement.dir = 'rtl';
        }
        this._updateFrameHeight();
        this.setState({ frameLoading: false, frameVisible: true });
    };
    ShareIFrame.prototype._sharedWithTabClick = function () {
        this._frame.height = this._sharedWithFrameHeight;
    };
    ShareIFrame.prototype._updateFrameHeight = function () {
        var workSpace = this._frame.contentWindow.document.getElementById('s4-workspace');
        if (workSpace) {
            workSpace.style.height = 'auto';
            workSpace.style.overflow = '';
            var workSpaceRect = workSpace.getBoundingClientRect();
            this._frame.height = workSpaceRect.height + 'px';
            workSpace.style.overflow = 'auto';
        }
    };
    ShareIFrame.prototype._setupIframeElementFunctions = function (iframe) {
        var _this = this;
        if (iframe) {
            var customIFrame = iframe;
            // iframe needs additional methods to support the legacy calls that the share page makes.
            customIFrame.cancelPopUp = this._closeDialog;
            customIFrame.commitPopup = function (url) {
                _this.props.onClose();
            };
            customIFrame.autoSizeSuppressScrollbar = function (callback) {
                callback();
            };
        }
        this._frame = iframe;
    };
    ShareIFrame.defaultProps = {
        url: '',
        title: null,
        shareLabel: 'Share',
        loadingLabel: 'Loading',
        shareVisible: false,
        onClose: null,
        className: '',
        frameClass: ''
    };
    return ShareIFrame;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ShareIFrame.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.12_none.js.map