(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~teamifywizard.deferred"],{

/***/ "/dre":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Foundation.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Foundation.js


/***/ }),

/***/ "/rp/":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/SignalField.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: SignalField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalField", function() { return SignalField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _SignalField_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignalField.scss */ "A7Mc");




/**
 * Renders a field flanked by signals.
 * Pass `<Signal />` or related components in for the `before` and `after` fields.
 * Pass the main value as the children.
 */
var SignalField = function (props) {
    var _a;
    var before = props.before, after = props.after, className = props.className, _b = props.signalsFieldMode, signalsFieldMode = _b === void 0 ? 'compact' : _b, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["before", "after", "className", "signalsFieldMode"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spanProps, { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(_SignalField_scss__WEBPACK_IMPORTED_MODULE_3__["signalField"], (_a = {},
            _a[_SignalField_scss__WEBPACK_IMPORTED_MODULE_3__["wide"]] = signalsFieldMode === 'wide',
            _a[_SignalField_scss__WEBPACK_IMPORTED_MODULE_3__["compact"]] = signalsFieldMode === 'compact',
            _a), className) }),
        props.before,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _SignalField_scss__WEBPACK_IMPORTED_MODULE_3__["signalFieldValue"] }, props.children),
        props.after));
};
//# sourceMappingURL=SignalField.js.map

/***/ }),

/***/ "1/dy":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/Pages.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pages_00841fe7f94f43bd878999bb8cf021c7.png";

/***/ }),

/***/ "1ezJ":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/Signals.scss.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: newSignal, selected, newIcon, comments, commentsIcon, commentsCount, trending, blocked, warning, shared, folder, lock, missingMetadata, youCheckedOut, someoneCheckedOut, awaitingApproval, mention, unseenEdit, unseenReply, emailed, malwareDetected, readOnly, external, record, liveEdit, bookmarkOutline, bookmarkFilled, needsRepublishing, itemScheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSignal", function() { return newSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selected", function() { return selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newIcon", function() { return newIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comments", function() { return comments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsIcon", function() { return commentsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsCount", function() { return commentsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trending", function() { return trending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocked", function() { return blocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shared", function() { return shared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folder", function() { return folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lock", function() { return lock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingMetadata", function() { return missingMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youCheckedOut", function() { return youCheckedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "someoneCheckedOut", function() { return someoneCheckedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitingApproval", function() { return awaitingApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mention", function() { return mention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unseenEdit", function() { return unseenEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unseenReply", function() { return unseenReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailed", function() { return emailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "malwareDetected", function() { return malwareDetected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOnly", function() { return readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "external", function() { return external; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveEdit", function() { return liveEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookmarkOutline", function() { return bookmarkOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookmarkFilled", function() { return bookmarkFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needsRepublishing", function() { return needsRepublishing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemScheduled", function() { return itemScheduled; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".newSignal_38aecd7c{width:0;height:1em;position:relative;line-height:1em;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}html[dir=ltr] .newSignal_38aecd7c{margin-right:0}html[dir=rtl] .newSignal_38aecd7c{margin-left:0}.selected_38aecd7c .newSignal_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.newIcon_38aecd7c{position:absolute;bottom:100%;font-size:.66em;margin-bottom:-.9em}html[dir=ltr] .newIcon_38aecd7c{right:-.15em}html[dir=rtl] .newIcon_38aecd7c{left:-.15em}.comments_38aecd7c{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.selected_38aecd7c .comments_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.commentsIcon_38aecd7c{vertical-align:middle}.commentsCount_38aecd7c{font-size:.9em;font-weight:600;vertical-align:baseline}html[dir=ltr] .commentsCount_38aecd7c{margin-left:.2em}html[dir=rtl] .commentsCount_38aecd7c{margin-right:.2em}.trending_38aecd7c{color:" }, { "theme": "green", "defaultValue": "#107c10" }, { "rawString": "}.blocked_38aecd7c{color:" }, { "theme": "redDark", "defaultValue": "#a4262c" }, { "rawString": "}.warning_38aecd7c{color:#cf3902}.shared_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .shared_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.folder_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .folder_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.lock_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .lock_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.missingMetadata_38aecd7c{color:#cf3902}.youCheckedOut_38aecd7c{color:" }, { "theme": "redDark", "defaultValue": "#a4262c" }, { "rawString": "}.someoneCheckedOut_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .someoneCheckedOut_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.awaitingApproval_38aecd7c{color:#ad3100}.mention_38aecd7c{position:relative;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.selected_38aecd7c .mention_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.unseenEdit_38aecd7c{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.selected_38aecd7c .unseenEdit_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.unseenReply_38aecd7c{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.selected_38aecd7c .unseenReply_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}i.unseenReply_38aecd7c{top:.25em}.emailed_38aecd7c{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.selected_38aecd7c .emailed_38aecd7c{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}i.emailed_38aecd7c{top:.25em}.malwareDetected_38aecd7c{color:" }, { "theme": "redDark", "defaultValue": "#a4262c" }, { "rawString": "}.readOnly_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .readOnly_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.external_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .external_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.record_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.selected_38aecd7c .record_38aecd7c{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.liveEdit_38aecd7c{display:none}.bookmarkOutline_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.bookmarkFilled_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.needsRepublishing_38aecd7c{color:" }, { "theme": "yellowDark", "defaultValue": "#d29200" }, { "rawString": "}.itemScheduled_38aecd7c{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}" }]);
var newSignal = "newSignal_38aecd7c";
var selected = "selected_38aecd7c";
var newIcon = "newIcon_38aecd7c";
var comments = "comments_38aecd7c";
var commentsIcon = "commentsIcon_38aecd7c";
var commentsCount = "commentsCount_38aecd7c";
var trending = "trending_38aecd7c";
var blocked = "blocked_38aecd7c";
var warning = "warning_38aecd7c";
var shared = "shared_38aecd7c";
var folder = "folder_38aecd7c";
var lock = "lock_38aecd7c";
var missingMetadata = "missingMetadata_38aecd7c";
var youCheckedOut = "youCheckedOut_38aecd7c";
var someoneCheckedOut = "someoneCheckedOut_38aecd7c";
var awaitingApproval = "awaitingApproval_38aecd7c";
var mention = "mention_38aecd7c";
var unseenEdit = "unseenEdit_38aecd7c";
var unseenReply = "unseenReply_38aecd7c";
var emailed = "emailed_38aecd7c";
var malwareDetected = "malwareDetected_38aecd7c";
var readOnly = "readOnly_38aecd7c";
var external = "external_38aecd7c";
var record = "record_38aecd7c";
var liveEdit = "liveEdit_38aecd7c";
var bookmarkOutline = "bookmarkOutline_38aecd7c";
var bookmarkFilled = "bookmarkFilled_38aecd7c";
var needsRepublishing = "needsRepublishing_38aecd7c";
var itemScheduled = "itemScheduled_38aecd7c";
//# sourceMappingURL=Signals.scss.js.map

/***/ }),

/***/ "1o9y":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/FolderCover.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: FolderCover, getFolderCoverLayout, renderFolderCoverWithLayout, initializeFolderCovers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FolderCover_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FolderCover/index */ "9SS3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderCover", function() { return _components_FolderCover_index__WEBPACK_IMPORTED_MODULE_0__["FolderCover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFolderCoverLayout", function() { return _components_FolderCover_index__WEBPACK_IMPORTED_MODULE_0__["getFolderCoverLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderFolderCoverWithLayout", function() { return _components_FolderCover_index__WEBPACK_IMPORTED_MODULE_0__["renderFolderCoverWithLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFolderCovers", function() { return _components_FolderCover_index__WEBPACK_IMPORTED_MODULE_0__["initializeFolderCovers"]; });


//# sourceMappingURL=FolderCover.js.map

/***/ }),

/***/ "1v0F":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/FolderCover/FolderCover.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: FolderCover, getFolderCoverLayout, renderFolderCoverWithLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderCover", function() { return FolderCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFolderCoverLayout", function() { return getFolderCoverLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFolderCoverWithLayout", function() { return renderFolderCoverWithLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "gnd0");
/* harmony import */ var _FolderCover_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FolderCover.scss */ "EtCy");
/* harmony import */ var _signals_Signal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signals/Signal.scss */ "XL4t");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);






var FolderCoverStyles = _FolderCover_scss__WEBPACK_IMPORTED_MODULE_3__;
var SignalStyles = _signals_Signal_scss__WEBPACK_IMPORTED_MODULE_4__;
var FolderCoverLayoutValues = {
    smallWidth: 72,
    smallHeight: 44,
    largeWidth: 112,
    largeHeight: 72,
    contentPadding: 4,
};
var SIZES = {
    small: {
        width: FolderCoverLayoutValues.smallWidth - FolderCoverLayoutValues.contentPadding * 2,
        height: FolderCoverLayoutValues.smallHeight - FolderCoverLayoutValues.contentPadding * 2,
    },
    large: {
        width: FolderCoverLayoutValues.largeWidth - FolderCoverLayoutValues.contentPadding * 2,
        height: FolderCoverLayoutValues.largeHeight - FolderCoverLayoutValues.contentPadding * 2,
    },
};
var ASSETS = {
    small: {
        default: {
            back: "folderCoverSmallDefaultBack",
            front: "folderCoverSmallDefaultFront",
        },
        linked: {
            back: "folderCoverSmallLinkedBack",
            front: "folderCoverSmallLinkedFront",
        },
        media: {
            back: "folderCoverSmallMediaBack",
            front: "folderCoverSmallMediaFront",
        },
    },
    large: {
        default: {
            back: "folderCoverLargeDefaultBack",
            front: "folderCoverLargeDefaultFront",
        },
        linked: {
            back: "folderCoverLargeLinkedBack",
            front: "folderCoverLargeLinkedFront",
        },
        media: {
            back: "folderCoverLargeMediaBack",
            front: "folderCoverLargeMediaFront",
        },
    },
};
var FolderCover = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FolderCover, _super);
    function FolderCover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FolderCover.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.folderCoverSize, size = _c === void 0 ? 'large' : _c, _d = _b.folderCoverType, type = _d === void 0 ? 'default' : _d, _e = _b.hideContent, hideContent = _e === void 0 ? false : _e, metadata = _b.metadata, signal = _b.signal, children = _b.children, isFluent = _b.isFluent, divProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["folderCoverSize", "folderCoverType", "hideContent", "metadata", "signal", "children", "isFluent"]);
        var assets = ASSETS[size][type];
        var metadataIcon = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-metadata', FolderCoverStyles.metadata) }, metadata);
        var signalIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-signal', FolderCoverStyles.signal, SignalStyles.isFluent) }, signal));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, divProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(FolderCoverStyles.root, (_a = {},
                _a["ms-FolderCover--isSmall " + FolderCoverStyles.isSmall] = size === 'small',
                _a["ms-FolderCover--isLarge " + FolderCoverStyles.isLarge] = size === 'large',
                _a["ms-FolderCover--isDefault " + FolderCoverStyles.isDefault] = type === 'default',
                _a["ms-FolderCover--isMedia " + FolderCoverStyles.isMedia] = type === 'media',
                _a["ms-FolderCover--isLinked " + FolderCoverStyles.isLinked] = type === 'linked',
                _a["ms-FolderCover--hideContent " + FolderCoverStyles.hideContent] = hideContent,
                _a["ms-FolderCover--isFluent " + FolderCoverStyles.isFluent] = true,
                _a)) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { "aria-hidden": true, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-back', FolderCoverStyles.back), iconName: assets.back }),
            this._renderChildren({ children: children }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { "aria-hidden": true, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-front', FolderCoverStyles.front), iconName: assets.front }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                metadataIcon,
                signalIcon)));
    };
    FolderCover.prototype._renderChildren = function (_a) {
        var children = _a.children;
        var finalChildren = typeof children === 'function' ? children(getFolderCoverLayoutFromProps(this.props)) : children;
        return finalChildren ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-content', FolderCoverStyles.content) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-FolderCover-frame', FolderCoverStyles.frame) }, finalChildren))) : null;
    };
    return FolderCover;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getFolderCoverLayout(element) {
    var folderCoverProps = element.props;
    return getFolderCoverLayoutFromProps(folderCoverProps);
}
function getFolderCoverLayoutFromProps(folderCoverProps) {
    var _a = folderCoverProps.folderCoverSize, folderCoverSize = _a === void 0 ? 'large' : _a;
    var contentSize = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, SIZES[folderCoverSize]);
    return {
        contentSize: contentSize,
    };
}
function renderFolderCoverWithLayout(element, props) {
    var Tag = element.type;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element.props, props));
}
//# sourceMappingURL=FolderCover.js.map

/***/ }),

/***/ "3GEp":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/index.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: TileLayoutValues, TileLayoutSizes, Tile, getTileLayout, renderTileWithLayout, ShimmerTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "YZms");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayoutValues", function() { return _Tile__WEBPACK_IMPORTED_MODULE_0__["TileLayoutValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayoutSizes", function() { return _Tile__WEBPACK_IMPORTED_MODULE_0__["TileLayoutSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return _Tile__WEBPACK_IMPORTED_MODULE_0__["Tile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTileLayout", function() { return _Tile__WEBPACK_IMPORTED_MODULE_0__["getTileLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderTileWithLayout", function() { return _Tile__WEBPACK_IMPORTED_MODULE_0__["renderTileWithLayout"]; });

/* harmony import */ var _ShimmerTile_ShimmerTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShimmerTile/ShimmerTile */ "LAm1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShimmerTile", function() { return _ShimmerTile_ShimmerTile__WEBPACK_IMPORTED_MODULE_1__["ShimmerTile"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "3TP1":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/Teams-Chat.png ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Teams-Chat_27a200602f7d63282468a5bb5b8329fe.png";

/***/ }),

/***/ "3o4I":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Text/Text.styles.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: TextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyles", function() { return TextStyles; });
var TextStyles = function (props, theme) {
    var as = props.as, className = props.className, block = props.block, nowrap = props.nowrap, variant = props.variant;
    var fonts = theme.fonts;
    var variantObject = fonts[variant || 'medium'];
    return {
        root: [
            theme.fonts.medium,
            {
                display: block ? (as === 'td' ? 'table-cell' : 'block') : 'inline',
                fontFamily: variantObject.fontFamily,
                fontSize: variantObject.fontSize,
                fontWeight: variantObject.fontWeight,
                color: variantObject.color,
                mozOsxFontSmoothing: variantObject.MozOsxFontSmoothing,
                webkitFontSmoothing: variantObject.WebkitFontSmoothing,
            },
            nowrap && {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            className,
        ],
    };
};
//# sourceMappingURL=Text.styles.js.map

/***/ }),

/***/ "3oO6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/spInTeams/SPPagesInTeamsDataSource.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: SPPagesInTeamsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPPagesInTeamsDataSource", function() { return SPPagesInTeamsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");



var sitePageContentTypeId = '0x0101009D1CB255DA76424F860D91F20E6C4118';
var IMAGE_WIDTH = 112;
var IMAGE_HEIGHT = 84;
var IMAGE_FIT = 4;
var SPPagesInTeamsDataSource = /** @class */ (function () {
    function SPPagesInTeamsDataSource(siteCollectionUrl) {
        var _this = this;
        this._siteId = undefined;
        this._webId = undefined;
        this.pagesViewCountResult = [];
        this._pages = [];
        this.CurrentSiteCollectionUrl = undefined;
        this._handleErrors = function (response) {
            if (response.ok) {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Success });
            }
            else if ((response.status >= 200 && response.status <= 299) ||
                (response.status >= 400 && response.status <= 499)) {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].ExpectedFailure });
            }
            else {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"].Failure });
            }
        };
        this._initializeSiteId = function () {
            return new Promise(function (resolve) {
                var apiUrl = '_api/site/id';
                var graphUrl = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(_this.CurrentSiteCollectionUrl, apiUrl);
                var headers = new Headers();
                headers.append('accept', 'application/json');
                fetch(graphUrl, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (responseJson) {
                    _this._siteId = responseJson.value;
                    resolve();
                });
            });
        };
        this._initializeWebId = function () {
            return new Promise(function (resolve) {
                var apiUrl = '_api/web/id';
                var graphUrl = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(_this.CurrentSiteCollectionUrl, apiUrl);
                var headers = new Headers();
                headers.append('accept', 'application/json');
                fetch(graphUrl, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (responseJson) {
                    _this._webId = responseJson.value;
                    resolve();
                });
            });
        };
        this._fetchViewCounts = function () {
            return new Promise(function (resolve) {
                var apiUrl = _this._getViewCountUrl();
                var headers = new Headers();
                headers.append('accept', 'application/json');
                fetch(apiUrl, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (responseJson) {
                    var pagesResponse = responseJson.value
                        .map(function (pageItem) {
                        return {
                            name: pageItem.name,
                            webUrl: pageItem.webUrl,
                            viewCount: Number(pageItem.analytics.lastSevenDays.access.actionCount),
                            id: pageItem.id
                        };
                    })
                        .filter(function (res) { return res.webUrl; });
                    _this.pagesViewCountResult = pagesResponse;
                    resolve();
                });
            });
        };
        this._fetchSPModernPages = function (retries) {
            if (retries === void 0) { retries = 3; }
            return new Promise(function (resolve) {
                var graphUrl = _this._getSPModernPagesRequestUrl();
                var headers = new Headers();
                headers.append('accept', 'application/json');
                fetch(graphUrl, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'
                })
                    .then(function (response) {
                    _this._handleErrors(response);
                    return response.json();
                })
                    .then(function (responseJson) {
                    var pagesResponse = responseJson.value
                        .map(function (pageItem) {
                        return {
                            itemType: 1 /* Page */,
                            webUrl: pageItem.EncodedAbsUrl,
                            title: pageItem.Title,
                            previewImg: {
                                previewImageSrc: pageItem.BannerImageUrl !== null ? pageItem.BannerImageUrl.Url : undefined,
                                width: IMAGE_WIDTH,
                                height: IMAGE_HEIGHT,
                                imageFit: IMAGE_FIT
                            },
                            author: {
                                name: pageItem.Editor.Title,
                                profileImageSrc: undefined
                            },
                            uniqueId: pageItem.UniqueId,
                            webId: _this._webId,
                            siteId: _this._siteId,
                            modifiedDate: pageItem.Modified
                        };
                    })
                        .filter(function (res) { return res.title; });
                    _this._pages = pagesResponse;
                    resolve();
                })
                    .catch(function (error) {
                    if (retries > 0) {
                        _this._fetchSPModernPages(retries - 1);
                    }
                    throw error;
                });
            });
        };
        this._getViewCountUrl = function () {
            var uri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"](window.location.href.toLowerCase());
            var apiUrl = uri.getScheme() + "://" + uri.getHost() + "/_api/v2.1/sites('" + uri.getHost() + ",";
            apiUrl = apiUrl.concat(_this._siteId + "," + _this._webId);
            apiUrl = apiUrl.concat("')/items?$filter=isof('oneDrive.Page')&$expand=analytics($expand=lastSevenDays)&$top=100");
            apiUrl = apiUrl.concat('&$orderby=analytics/lastSevenDays/access/actorCount desc');
            return apiUrl;
        };
        this._getSPModernPagesRequestUrl = function () {
            var filter = "$filter=(OData__UIVersionString ge '1.0' and startswith(ContentTypeId,'" + sitePageContentTypeId + "'))";
            var select = "&$select=Title,EncodedAbsUrl,BannerImageUrl,UniqueId,Modified,Editor/Title&$expand=Editor/Title";
            var orderBy = '&$orderby=Modified desc';
            var sitePagesUrl = _this._relativeSiteCollectionUrl + '/SitePages';
            var apiUrl = "_api/web/GetList('" + sitePagesUrl + "')/items";
            var siteCollectionUrl = _this.CurrentSiteCollectionUrl;
            var urlToGraph = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(siteCollectionUrl, apiUrl) + ("?" + filter + select + orderBy);
            return urlToGraph;
        };
        this.CurrentSiteCollectionUrl = siteCollectionUrl;
    }
    SPPagesInTeamsDataSource.prototype.getSharePointPages = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemsWithViewCount, count_1, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._monitor = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_2__["Qos"]({ name: 'Teamify._fetchModernPages' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Promise.all([this._initializeSiteId(), this._initializeWebId()])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Promise.all([this._fetchViewCounts(), this._fetchSPModernPages()])];
                    case 3:
                        _a.sent();
                        itemsWithViewCount = this._pages.map(function (item, i) {
                            return Object.assign({}, item, _this.pagesViewCountResult[i]);
                        });
                        itemsWithViewCount.sort(function (a, b) {
                            if (a.viewCount === undefined) {
                                a.viewCount = 0;
                            }
                            if (b.viewCount === undefined) {
                                b.viewCount = 0;
                            }
                            return b.viewCount - a.viewCount;
                        });
                        count_1 = 0;
                        itemsWithViewCount.forEach(function (element) {
                            element.itemNumber = ++count_1;
                        });
                        return [2 /*return*/, itemsWithViewCount];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SPPagesInTeamsDataSource.prototype, "_relativeSiteCollectionUrl", {
        get: function () {
            var serverUrl = window.location.origin.toLowerCase();
            return this.CurrentSiteCollectionUrl.replace(serverUrl, '');
        },
        enumerable: true,
        configurable: true
    });
    return SPPagesInTeamsDataSource;
}());

//# sourceMappingURL=SPPagesInTeamsDataSource.js.map

/***/ }),

/***/ "79Uu":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/Signal.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Signal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return Signal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _Signal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signal.scss */ "XL4t");




var Signal = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, children = props.children, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["ariaLabel", "className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "aria-label": props.ariaLabel }, spanProps, { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(_Signal_scss__WEBPACK_IMPORTED_MODULE_3__["signal"], className) }), props.children));
};
//# sourceMappingURL=Signal.js.map

/***/ }),

/***/ "8nOp":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Selection.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/selection/index */ "v+17");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });


//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "9RII":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/TeamifyWizard.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeamifyWizard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamifyWizard.scss */ "xs0v");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var office_ui_fabric_react_lib_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/List */ "HP5x");
/* harmony import */ var office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Panel */ "p6C6");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony import */ var _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Groups */ "b0jF");
/* harmony import */ var office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Image */ "pw9o");
/* harmony import */ var office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! office-ui-fabric-react/lib/Pivot */ "wD6F");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_spInTeams_SPInTeamsDataSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/spInTeams/SPInTeamsDataSource */ "f3H6");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var office_ui_fabric_react_lib_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! office-ui-fabric-react/lib/Text */ "pAlt");
/* harmony import */ var office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! office-ui-fabric-react/lib/MessageBar */ "oW6A");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var _SPTeamifyResource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SPTeamifyResource */ "MG44");
/* harmony import */ var _AccessibilityManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AccessibilityManager */ "qSlx");





















var TeamifyCall;
(function (TeamifyCall) {
    TeamifyCall[TeamifyCall["NotCalled"] = 0] = "NotCalled";
    TeamifyCall[TeamifyCall["CreatingTeam"] = 1] = "CreatingTeam";
    TeamifyCall[TeamifyCall["Pinning"] = 2] = "Pinning";
    TeamifyCall[TeamifyCall["Done"] = 3] = "Done";
})(TeamifyCall || (TeamifyCall = {}));
var TeamifyResult;
(function (TeamifyResult) {
    TeamifyResult[TeamifyResult["Success"] = 0] = "Success";
    TeamifyResult[TeamifyResult["PartialSuccess"] = 1] = "PartialSuccess";
    TeamifyResult[TeamifyResult["Failure"] = 2] = "Failure";
})(TeamifyResult || (TeamifyResult = {}));
var SystemLibraries = ['Site Assets', 'Form Templates', 'Style Library'];
// tslint:disable-next-line: no-any
var styles = _TeamifyWizard_scss__WEBPACK_IMPORTED_MODULE_2__;
var imageProps = {
    imageFit: office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__["ImageFit"].centerContain,
    // tslint:disable-next-line:no-require-imports
    src: __webpack_require__(/*! ./images/TeamifyWizard.png */ "V/NK"),
    className: styles.ms_teamifyWizard_image
};
var Constants;
(function (Constants) {
    Constants[Constants["ColumnsPerRow"] = 3] = "ColumnsPerRow";
    Constants[Constants["PagesCount"] = 2] = "PagesCount";
})(Constants || (Constants = {}));
var Pages;
(function (Pages) {
    Pages[Pages["SummaryPage"] = 1] = "SummaryPage";
    Pages[Pages["SelectionPage"] = 2] = "SelectionPage";
})(Pages || (Pages = {}));
var LEARN_MORE_URL = 'https://support.microsoft.com/en-us/office/\
add-a-sharepoint-page-or-list-to-a-channel-in-teams-131edef1-455f-4c67-a8ce-efa2ebf25f0b\
?ui=en-us&rs=en-us&ad=us&cc365plan=o365ww&storagetype=stage';
var TeamifyWizard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TeamifyWizard, _super);
    function TeamifyWizard(props) {
        var _this = _super.call(this, props) || this;
        // tslint:disable-next-line:no-any
        _this._logEngagement = function (key, extraData) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_4__["Engagement"].logData({
                name: key,
                isIntentional: true,
                siteId: _this._pageContext.siteId,
                groupId: _this._pageContext.groupId,
                extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, extraData), { userId: _this._pageContext.userId, entryPoint: _this.props.entryPoint })
            });
        };
        _this._selectItem = function (item) {
            if (!item.isDefault) {
                _this._selectedItems.set(item.url, item);
                _this.forceUpdate();
            }
        };
        _this._deselectItem = function (item) {
            _this._selectedItems.delete(item.url);
            _this.forceUpdate();
        };
        /**
         * Arranges items into Rows of COLUM_PER_ROW number of columns.
         */
        _this._getGridRows = function (lists) {
            var gridRows;
            gridRows = [];
            var index = 0;
            while (index < lists.length) {
                if (index % Constants.ColumnsPerRow === 0) {
                    var row = void 0;
                    row = [];
                    do {
                        row.push(lists[index]);
                        index++;
                    } while (index < lists.length && index % Constants.ColumnsPerRow !== 0);
                    gridRows.push(row);
                }
            }
            return gridRows;
        };
        _this._excludeSystemLibraries = function (docLibs) {
            return docLibs.filter(function (item) { return !SystemLibraries.includes(item.title); });
        };
        /**
         * Returns the Preview Image URL based on the item type.
         */
        _this._getPreviewImgSrc = function (item) {
            if (item.itemType === 0 /* List */) {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/List.png */ "UYTr");
            }
            else if (item.itemType === 3 /* DocLib */) {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/Folder.png */ "VDkv");
            }
            else if (item.itemType === 1 /* Page */ || item.itemType === 2 /* NewsL2 */) {
                if (item.previewImage && item.previewImage.previewImageSrc) {
                    return item.previewImage.previewImageSrc;
                }
                else {
                    var uri = new URL(window.location.href);
                    // tslint:disable-next-line:max-line-length
                    return uri.protocol + "//" + uri.host + "/_layouts/15/getpreview.ashx?guidSite=" + item.siteId + "&guidWeb=" + item.webId + "&guidFile=" + item.uniqueId + "&resolution=0";
                }
            }
            else {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/Pages.png */ "1/dy");
            }
        };
        /**
         * Render method for SP resource (Pages, Lists, Doclibs)
         */
        _this._onRenderItem = function (row, rowIndex) {
            if (row !== undefined && rowIndex !== undefined) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.ms_TeamifyWizard_Grid_Row }, row.map(function (item, itemIndex) {
                    var _a, _b, _c;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SPTeamifyResource__WEBPACK_IMPORTED_MODULE_19__["SPTeamifyResource"], { key: item.webUrl, itemType: item.itemType, title: item.title, webUrl: item.webUrl, modifiedDate: item.modifiedDate, canUncheck: item.title.localeCompare('Documents') === 0 ||
                            _this.state.teamifyCall === 1 /* CreatingTeam */ ||
                            _this.state.teamifyCall === 2 /* Pinning */ ||
                            _this.state.teamifyResult === 1 /* PartialSuccess */
                            ? false
                            : true, isSelected: _this._selectedItems.has(item.webUrl) || item.title.localeCompare('Documents') === 0, width: 100 / Constants.ColumnsPerRow, selectCallback: _this._selectItem, deselectCallback: _this._deselectItem, previewImg: {
                            previewImageSrc: _this._getPreviewImgSrc(item)
                        }, hasPinningFailed: _this._failedItems.has(item.webUrl), strings: {
                            documentToolTip: _this.props.strings !== undefined ? _this.props.strings.documentToolTip : '',
                            homeToolTip: _this.props.strings !== undefined ? (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.homeToolTip : '',
                            errorToolTip: _this.props.strings !== undefined ? (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.errorToolTip : '',
                            learnMore: _this.props.strings !== undefined ? (_c = _this.props.strings) === null || _c === void 0 ? void 0 : _c.learnMore : ''
                        }, gridIndex: rowIndex * 3 + itemIndex, onFocusCallback: _this._onFocusCallback }));
                })));
            }
            else {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
            }
        };
        /**
         * Renders Wizard page based on the page number.
         * @param pageNo number of the page which needs to be rendered.
         */
        _this._renderContent = function (pageNo) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            switch (pageNo) {
                case 1:
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.content) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_points) }, (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.introPageDescription1),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_second_header) }, (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.introPageSecondHeader),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_points) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__["Image"]
                                // tslint:disable-next-line:no-require-imports
                                , { 
                                    // tslint:disable-next-line:no-require-imports
                                    src: __webpack_require__(/*! ./images/Teams-Chat.png */ "3TP1"), className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.icon), role: 'img', "aria-label": (_c = _this.props.strings) === null || _c === void 0 ? void 0 : _c.teamsChatAriaLabel }), (_d = _this.props.strings) === null || _d === void 0 ? void 0 :
                                _d.introPagePoint1),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_points) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__["Image"]
                                // tslint:disable-next-line:no-require-imports
                                , { 
                                    // tslint:disable-next-line:no-require-imports
                                    src: __webpack_require__(/*! ./images/Teams-OnlineMeeting.png */ "YFQZ"), className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.icon), role: 'img', "aria-label": (_e = _this.props.strings) === null || _e === void 0 ? void 0 : _e.teamsMeetingAriaLabel }), (_f = _this.props.strings) === null || _f === void 0 ? void 0 :
                                _f.introPagePoint2),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_points) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__["Image"]
                                // tslint:disable-next-line:no-require-imports
                                , { 
                                    // tslint:disable-next-line:no-require-imports
                                    src: __webpack_require__(/*! ./images/Teams-Collaborate.png */ "IIwc"), className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.icon), role: 'img', "aria-label": (_g = _this.props.strings) === null || _g === void 0 ? void 0 : _g.teamsCollaborateAriaLabel }), (_h = _this.props.strings) === null || _h === void 0 ? void 0 :
                                _h.introPagePoint3)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_9__["Image"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, imageProps, { role: 'img', "aria-label": (_j = _this.props.strings) === null || _j === void 0 ? void 0 : _j.introStepImageAriaLabel })))));
                case 2:
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.content) },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, (_k = _this.props.strings) === null || _k === void 0 ? void 0 : _k.selectPageDescription),
                        _this._renderResources()));
                default:
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
            }
        };
        /**
         * Callback for the Continue button in the footer.
         * Sets the page number in the state so that it renders the next page.
         */
        _this._onClickContinue = function () {
            _this._logEngagement('TeamifyWizard.Continue.Click');
            _this.setState(function (prevState) { return ({
                pageNumber: prevState.pageNumber + 1
            }); });
        };
        _this._setPinningFailedItems = function (failedItems) {
            failedItems.forEach(function (item) {
                _this._failedItems.set(item.url, item);
            });
        };
        _this._handleSuccess = function (teamifyQos) {
            var postSuccessEvents = function () {
                var teamsWindow = window.open(_this._teamsUrl);
                var timeOut = setTimeout(function () {
                    window.location.reload();
                }, 5000);
                if (teamsWindow) {
                    teamsWindow.onload = function () {
                        window.location.reload();
                        clearTimeout(timeOut);
                    };
                }
            };
            _this._logEngagement('TeamifyWizard.Teamify.Success');
            /* Team created and tab creation succeded */
            teamifyQos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Success });
            _this.setState({
                teamifyCall: 3 /* Done */,
                teamifyResult: 0 /* Success */
            });
            /** On Success dismiss the wizard and navigate to Teams*/
            _this._autoDismiss();
            if (_this._teamsUrl !== undefined) {
                postSuccessEvents();
            }
        };
        _this._handlePartialSuccess = function (teamifyResponse, teamifyQos) {
            teamifyQos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Failure });
            _this._setPinningFailedItems(teamifyResponse.pinToTeam.FailedPinning.results);
            _this.setState({
                teamifyCall: 3 /* Done */,
                teamifyResult: 1 /* PartialSuccess */
            });
        };
        _this._handleFailure = function (teamifyQos, error) {
            teamifyQos.end({
                resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Failure,
                error: error !== undefined ? error : 'UnExpected Error'
            });
            _this.setState({
                teamifyCall: 3 /* Done */,
                teamifyResult: 2 /* Failure */
            });
        };
        /**
         * Makes API call to Teamify the SP Teamsite and pins the selected items as tabs.
         */
        _this._teamify = function () {
            _this._logEngagement('TeamifyWizard.Teamify.Click', {
                selectedItems: _this._selectedItems.size
            });
            var teamifyQos = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["default"]({ name: 'TeamifyWizard.Teamify' });
            _this.setState({
                teamifyCall: 1 /* CreatingTeam */
            });
            var callback = function (createTeamResponse) {
                _this._isTeamCreated = true;
                _this._teamsUrl = createTeamResponse.teamsUrl;
                _this.setState({
                    teamifyCall: 2 /* Pinning */
                });
            };
            try {
                _this._groupsProvider.teamifyV2(_this._getSelectedItemsList(_this._selectedItems), callback).done(function (teamifyResponse) {
                    if (teamifyResponse === undefined) {
                        _this._handleFailure(teamifyQos, 'Unexpected error from the service');
                    }
                    else {
                        _this._teamsUrl = teamifyResponse.teamsInfo.teamsUrl;
                        if (teamifyResponse.pinToTeam.FailedPinning &&
                            teamifyResponse.pinToTeam.FailedPinning.results.length === 0) {
                            _this._handleSuccess(teamifyQos);
                        }
                        else {
                            _this._handlePartialSuccess(teamifyResponse, teamifyQos);
                        }
                    }
                }, function (error) {
                    _this._handleFailure(teamifyQos, error.message);
                });
            }
            catch (error) {
                _this._handleFailure(teamifyQos, error.message);
            }
        };
        _this._setFeedbackMessage = function () {
            var _a, _b;
            if (_this.state.teamifyCall === 3 /* Done */) {
                if (_this.state.teamifyResult !== 0 /* Success */ && _this._isTeamCreated) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Text__WEBPACK_IMPORTED_MODULE_15__["Text"], null, (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.pinningError);
                }
                else if (_this.state.teamifyResult === 2 /* Failure */) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Text__WEBPACK_IMPORTED_MODULE_15__["Text"], null, (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.failure);
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
        };
        _this._goToTeams = function () {
            _this._logEngagement('TeamifyWizard.GoToTeams.Click');
            if (_this._teamsUrl !== undefined) {
                window.open(_this._teamsUrl);
                window.location.reload();
            }
        };
        _this._getPrimaryButton = function () {
            var _a, _b;
            if (_this.state.teamifyCall === 3 /* Done */ &&
                _this.state.teamifyResult !== 0 /* Success */ &&
                _this._isTeamCreated) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { className: styles.ms_teamifyWizard_button, text: (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.goToTeams, onClick: _this._goToTeams, role: 'button', ariaLabel: (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.goToTeams }));
            }
            else {
                var buttonText = (function () {
                    var _a, _b, _c;
                    if (_this.state.pageNumber === Pages.SummaryPage) {
                        return (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.continueButtonText;
                    }
                    else {
                        return _this.state.teamifyCall === 3 /* Done */ &&
                            _this.state.teamifyResult === 2 /* Failure */
                            ? (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.retry : (_c = _this.props.strings) === null || _c === void 0 ? void 0 : _c.addTeamButtonText;
                    }
                })();
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { className: styles.ms_teamifyWizard_button, text: buttonText, onClick: _this.state.pageNumber === Pages.SummaryPage ? _this._onClickContinue : _this._teamify, autoFocus: _this.state.pageNumber === Pages.SummaryPage ? true : false, role: 'button', ariaLabel: buttonText }));
            }
        };
        _this._renderHeader = function () {
            var _a;
            var headerText = function () {
                var _a, _b;
                return _this.state.pageNumber === Pages.SummaryPage
                    ? (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.introPageHeaderText : (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.selectPageHeaderText;
            };
            var backButtonHandler = function () {
                if (!_this._isTeamifyStarted()) {
                    _this.setState(function (prevState) { return ({
                        pageNumber: prevState.pageNumber - 1
                    }); });
                }
            };
            var _onKeyUpBackButtonHandler = function (ev) {
                if (ev.key === 'Enter') {
                    backButtonHandler();
                }
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_teamifyWizard_header) },
                _this.state.pageNumber === Pages.SelectionPage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_14__["Icon"], { iconName: 'Back', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_panel_back), onKeyUp: _onKeyUpBackButtonHandler, onClick: backButtonHandler, tabIndex: !_this._isTeamifyStarted() ? 0 : -1, role: 'button', "aria-label": (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.backButtonAriaLabel })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.ms_panel_header_text) },
                    " ",
                    headerText())));
        };
        /**
         * Renders Wizard footer based on the page number.
         * @param page : Page number in the Wizard
         */
        _this._renderFooterContent = function () {
            var _a, _b;
            var spinnerLabel = (function () {
                var _a, _b;
                if (_this.state.teamifyCall === 1 /* CreatingTeam */) {
                    return (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.creatingTeam;
                }
                else if (_this.state.teamifyCall === 2 /* Pinning */) {
                    return (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.addResources;
                }
                return '';
            })();
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.ms_teamifyWizard_footer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.ms_teamifyWizard_footer_page },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: 'teamifywizard_step' },
                            _this.state.pageNumber,
                            " of ",
                            Constants.PagesCount)),
                    _this._isTeamifyInProgress() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], { role: 'alert', "aria-live": 'assertive', "aria-label": spinnerLabel, label: spinnerLabel, labelPosition: 'right' })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        _this._getPrimaryButton(),
                        _this.state.teamifyResult !== 1 /* PartialSuccess */ && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { className: styles.ms_teamifyWizard_button, text: (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.cancelButtonText, onClick: _this._userDismiss, role: 'button', "aria-label": (_b = _this.props.strings) === null || _b === void 0 ? void 0 : _b.cancelButtonText })))))));
        };
        _this._autoDismiss = function () {
            _this.props.onDismiss(false);
        };
        _this._userDismiss = function () {
            _this.props.onDismiss(true, _this._isBackDismissal);
        };
        /**
         * Fetches SP Lists
         */
        _this._getLists = function () {
            return _this._spInTeamsDataSource.getSharePointLists().then(function (response) {
                _this.setState({
                    lists: response
                });
                Promise.resolve();
            });
        };
        /**
         * Fetches SP Modern Pages and adds the Site Home page to the selected items by default.
         */
        _this._getPages = function () {
            return _this._spInTeamsDataSource.getSharePointPages().then(function (response) {
                var homeItem = response.find(function (item, index, pages) {
                    return item.title.localeCompare('Home') === 0;
                });
                if (homeItem !== null && homeItem !== undefined) {
                    _this._selectItem({
                        url: homeItem.webUrl,
                        isDefault: false,
                        displayName: 'Site'
                    });
                }
                _this.setState({
                    pages: response
                });
                Promise.resolve();
            });
        };
        _this._getDocLibs = function () {
            return _this._spInTeamsDataSource.getSharePointDocLibs().then(function (response) {
                _this.setState({
                    docLibs: response
                });
                Promise.resolve();
            });
        };
        _this._onFocusCallback = function (index) {
            if (index !== -1) {
                _this.setState({
                    currentActiveKey: index
                });
            }
        };
        _this.state = {
            pageNumber: Pages.SummaryPage,
            lists: [],
            pages: [],
            docLibs: [],
            teamifyCall: 0 /* NotCalled */,
            teamifyResult: 2 /* Failure */,
            showErrorMessage: true,
            currentPivotKey: 0,
            currentActiveKey: 0,
            isFocusInGrid: false
        };
        _this._gridItems = new Map();
        _this._accessibilityManager = new _AccessibilityManager__WEBPACK_IMPORTED_MODULE_20__["AccessibilityManager"](_this._selectItem, _this._deselectItem);
        _this._pageContext = _this.props.pageContext;
        if (!_this._pageContext) {
            throw new Error('TeamifyWizard fatal error: Component is missing required page context.');
        }
        _this._groupsProvider = new _ms_odsp_datasources_lib_Groups__WEBPACK_IMPORTED_MODULE_8__["GroupsProvider"]({ pageContext: _this._pageContext });
        _this._spInTeamsDataSource = new _ms_odsp_datasources_lib_dataSources_spInTeams_SPInTeamsDataSource__WEBPACK_IMPORTED_MODULE_11__["SPInTeamsDataSource"](_this._pageContext);
        _this._selectedItems = new Map();
        _this._failedItems = new Map();
        _this._teamsUrl = undefined;
        _this._isBackDismissal = false;
        _this._isTeamCreated = false;
        _this._pivotRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._errorMessageLinkRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    TeamifyWizard.prototype.componentDidMount = function () {
        var _this = this;
        this.props.qos.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_7__["ResultTypeEnum"].Success });
        this._logEngagement('TeamifyWizard.Render');
        Promise.all([this._getLists(), this._getPages(), this._getDocLibs()]).then(function () {
            _this._gridItems.set(0, _this._sortItems(_this.state.pages.concat(_this.state.lists).concat(_this._excludeSystemLibraries(_this.state.docLibs))).map(function (item) { return _this._getTabItem(item); }));
            _this._gridItems.set(1, _this._sortItems(_this.state.pages).map(function (item) { return _this._getTabItem(item); }));
            _this._gridItems.set(2, _this.state.lists.map(function (item) { return _this._getTabItem(item); }));
            _this._gridItems.set(3, _this._sortItems(_this.state.docLibs).map(function (item) { return _this._getTabItem(item); }));
            _this._accessibilityManager.setGridItems(_this._gridItems);
        });
    };
    TeamifyWizard.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.pageNumber === Pages.SummaryPage && this.state.pageNumber === Pages.SelectionPage) {
            if (this._pivotRef.current) {
                this._pivotRef.current.focus();
            }
        }
        if (this.state.teamifyCall === 3 /* Done */ &&
            this.state.teamifyResult !== 0 /* Success */ &&
            this.state.showErrorMessage) {
            if (this._errorMessageLinkRef.current) {
                this._errorMessageLinkRef.current.focus();
            }
        }
        if (this.state.currentPivotKey !== prevState.currentPivotKey) {
            this._accessibilityManager.setActivePivotIndex(this.state.currentPivotKey);
        }
        if (this.state.currentActiveKey !== prevState.currentActiveKey) {
            this._accessibilityManager.setActiveIndex(this.state.currentActiveKey);
        }
    };
    TeamifyWizard.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var errorBarStyle = {
            fontSize: '12px',
            visibility: this.state.teamifyCall === 3 /* Done */ &&
                this.state.teamifyResult !== 0 /* Success */ &&
                this.state.showErrorMessage
                ? 'visible'
                : 'hidden',
            margin: '16px 16px 0px 0px'
        };
        var errorMessageBar = function () {
            var _a;
            var onDismissError = function () {
                _this.setState({
                    showErrorMessage: false
                });
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_16__["MessageBar"], { messageBarType: office_ui_fabric_react_lib_MessageBar__WEBPACK_IMPORTED_MODULE_16__["MessageBarType"].error, onDismiss: onDismissError },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    _this._setFeedbackMessage(),
                    _this.state.teamifyResult === 1 /* PartialSuccess */ && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_17__["Link"], { href: LEARN_MORE_URL, target: '_blank', style: {
                            fontSize: '14px'
                        }, componentRef: _this._errorMessageLinkRef }, (_a = _this.props.strings) === null || _a === void 0 ? void 0 : _a.learnMore)))));
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_6__["Panel"], { onRenderHeader: this._renderHeader, isOpen: true, hasCloseButton: true, onDismiss: this._userDismiss, onRenderFooterContent: this._renderFooterContent, isFooterAtBottom: true, type: office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_6__["PanelType"].medium, role: 'dialog', "aria-describedby": 'teamifywizard_step', "aria-label": this.state.pageNumber === Pages.SummaryPage
                ? (_a = this.props.strings) === null || _a === void 0 ? void 0 : _a.introPageHeaderText : (_b = this.props.strings) === null || _b === void 0 ? void 0 : _b.selectionStepAriaLabel },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_13__["css"])(styles.contentContainer) },
                this._renderContent(this.state.pageNumber),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: errorBarStyle }, errorMessageBar()))));
    };
    /**
     * Renders items into a Grid.
     */
    TeamifyWizard.prototype._renderGridItems = function (items, index) {
        var _this = this;
        var onFocusGrid = function () {
            _this.setState({
                isFocusInGrid: true,
                currentPivotKey: index
            });
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_18__["FocusZone"], { onFocus: onFocusGrid },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.ms_teamifyWizard_grid, "data-is-scrollable": 'true' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_List__WEBPACK_IMPORTED_MODULE_5__["List"], { items: this._getGridRows(items), onRenderCell: this._onRenderItem }))));
    };
    /**
     * Sorts lists and pages items based on their lastModifiedTime.
     * This method always sorts `Home item` at the beginning of the array.
     * @param items : Lists and Pages items
     */
    TeamifyWizard.prototype._sortItems = function (items) {
        return items.sort(function (a, b) {
            if (a.title.localeCompare('Home') !== 0 &&
                b.title.localeCompare('Home') !== 0 &&
                a.title.localeCompare('Documents') !== 0 &&
                b.title.localeCompare('Documents') !== 0) {
                return new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime();
            }
            else if (a.title.localeCompare('Documents') === 0) {
                return -2;
            }
            else if (a.title.localeCompare('Home') === 0) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    /**
     * Renders the Resources into Recommended, Pages, Lists and DocLibs
     */
    TeamifyWizard.prototype._renderResources = function () {
        var _a, _b, _c, _d;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: styles.ms_teamifyWizard_resources_container },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__["Pivot"], { componentRef: this._pivotRef },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__["PivotItem"], { headerText: (_a = this.props.strings) === null || _a === void 0 ? void 0 : _a.recommended }, this._renderGridItems(this._sortItems(this.state.pages
                    .concat(this.state.lists)
                    .concat(this._excludeSystemLibraries(this.state.docLibs))), 0)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__["PivotItem"], { headerText: (_b = this.props.strings) === null || _b === void 0 ? void 0 : _b.pages }, this._renderGridItems(this._sortItems(this.state.pages), 1)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__["PivotItem"], { headerText: (_c = this.props.strings) === null || _c === void 0 ? void 0 : _c.lists }, this._renderGridItems(this.state.lists, 2)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Pivot__WEBPACK_IMPORTED_MODULE_10__["PivotItem"], { headerText: (_d = this.props.strings) === null || _d === void 0 ? void 0 : _d.doclibs }, this._renderGridItems(this._sortItems(this.state.docLibs), 3)))));
    };
    /**
     * Returns the list of selected from the selected items Map.
     * @param selectedItems Map of Selected items.
     */
    TeamifyWizard.prototype._getSelectedItemsList = function (selectedItems) {
        var selectedItemsList;
        selectedItemsList = [];
        selectedItems.forEach(function (value, key, map) {
            selectedItemsList.push(value);
        });
        return selectedItemsList;
    };
    TeamifyWizard.prototype._getTabItem = function (item) {
        return {
            url: item.webUrl,
            isDefault: item.title.localeCompare('Documents') === 0 ? true : false,
            displayName: item.title.localeCompare('Home') === 0 ? 'Site' : item.title,
            itemType: item.itemType
        };
    };
    TeamifyWizard.prototype._isTeamifyStarted = function () {
        return !(this.state.teamifyCall !== 1 /* CreatingTeam */ &&
            this.state.teamifyCall !== 2 /* Pinning */ &&
            this.state.teamifyCall !== 3 /* Done */);
    };
    TeamifyWizard.prototype._isTeamifyInProgress = function () {
        return (this.state.teamifyCall === 1 /* CreatingTeam */ || this.state.teamifyCall === 2 /* Pinning */);
    };
    return TeamifyWizard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TeamifyWizard);
//# sourceMappingURL=TeamifyWizard.js.map

/***/ }),

/***/ "9SS3":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/FolderCover/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: FolderCover, getFolderCoverLayout, renderFolderCoverWithLayout, initializeFolderCovers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolderCover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolderCover */ "1v0F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderCover", function() { return _FolderCover__WEBPACK_IMPORTED_MODULE_0__["FolderCover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFolderCoverLayout", function() { return _FolderCover__WEBPACK_IMPORTED_MODULE_0__["getFolderCoverLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderFolderCoverWithLayout", function() { return _FolderCover__WEBPACK_IMPORTED_MODULE_0__["renderFolderCoverWithLayout"]; });

/* harmony import */ var _initializeFolderCovers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeFolderCovers */ "V3Cx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFolderCovers", function() { return _initializeFolderCovers__WEBPACK_IMPORTED_MODULE_1__["initializeFolderCovers"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "A7Mc":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/SignalField.scss.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: signalField, compact, wide, signalFieldValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalField", function() { return signalField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wide", function() { return wide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalFieldValue", function() { return signalFieldValue; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".signalField_53f8fa52{max-width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row nowrap;flex-direction:row nowrap}.signalField_53f8fa52,.signalField_53f8fa52.compact_53f8fa52{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.signalField_53f8fa52.wide_53f8fa52{display:-webkit-box;display:-ms-flexbox;display:flex;vertical-align:top}.signalFieldValue_53f8fa52{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}html[dir=ltr] .signalFieldValue_53f8fa52{text-align:left}html[dir=rtl] .signalFieldValue_53f8fa52{text-align:right}" }]);
var signalField = "signalField_53f8fa52";
var compact = "compact_53f8fa52";
var wide = "wide_53f8fa52";
var signalFieldValue = "signalFieldValue_53f8fa52";
//# sourceMappingURL=SignalField.scss.js.map

/***/ }),

/***/ "Di2w":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Text/Text.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: Text, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _Foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Foundation */ "/dre");
/* harmony import */ var _Text_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.view */ "ekk/");
/* harmony import */ var _Text_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.styles */ "3o4I");



var Text = Object(_Foundation__WEBPACK_IMPORTED_MODULE_0__["createComponent"])(_Text_view__WEBPACK_IMPORTED_MODULE_1__["TextView"], {
    displayName: 'Text',
    styles: _Text_styles__WEBPACK_IMPORTED_MODULE_2__["TextStyles"],
});
/* harmony default export */ __webpack_exports__["default"] = (Text);
//# sourceMappingURL=Text.js.map

/***/ }),

/***/ "DmnJ":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/Signals.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Signal, SignalField, YouCheckedOutSignal, BlockedSignal, MissingMetadataSignal, WarningSignal, AwaitingApprovalSignal, TrendingSignal, SomeoneCheckedOutSignal, RecordSignal, NeedsRepublishingSignal, ItemScheduledSignal, NewSignal, LiveEditSignal, MentionSignal, CommentsSignal, UnseenReplySignal, UnseenEditSignal, ReadOnlySignal, EmailedSignal, SharedSignal, DesktopSignal, DocumentsSignal, PicturesSignal, MalwareDetectedSignal, ATPSignal, ExternalSignal, NotFollowedSignal, FollowedSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouCheckedOutSignal", function() { return YouCheckedOutSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedSignal", function() { return BlockedSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingMetadataSignal", function() { return MissingMetadataSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningSignal", function() { return WarningSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwaitingApprovalSignal", function() { return AwaitingApprovalSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingSignal", function() { return TrendingSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeoneCheckedOutSignal", function() { return SomeoneCheckedOutSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordSignal", function() { return RecordSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedsRepublishingSignal", function() { return NeedsRepublishingSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemScheduledSignal", function() { return ItemScheduledSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSignal", function() { return NewSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveEditSignal", function() { return LiveEditSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentionSignal", function() { return MentionSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsSignal", function() { return CommentsSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnseenReplySignal", function() { return UnseenReplySignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnseenEditSignal", function() { return UnseenEditSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlySignal", function() { return ReadOnlySignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailedSignal", function() { return EmailedSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedSignal", function() { return SharedSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopSignal", function() { return DesktopSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsSignal", function() { return DocumentsSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesSignal", function() { return PicturesSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MalwareDetectedSignal", function() { return MalwareDetectedSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATPSignal", function() { return ATPSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalSignal", function() { return ExternalSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFollowedSignal", function() { return NotFollowedSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowedSignal", function() { return FollowedSignal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _Signal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signal */ "79Uu");
/* harmony import */ var _Signals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signals.scss */ "1ezJ");
/* harmony import */ var _Signal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signal.scss */ "XL4t");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utilities */ "gnd0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return _Signal__WEBPACK_IMPORTED_MODULE_4__["Signal"]; });

/* harmony import */ var _SignalField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignalField */ "/rp/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalField", function() { return _SignalField__WEBPACK_IMPORTED_MODULE_8__["SignalField"]; });











var YouCheckedOutSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["youCheckedOut"], iconName: "checkedoutbyyou12" }));
};
var BlockedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["blocked"], iconName: "blocked12" }));
};
var MissingMetadataSignal = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["missingMetadata"], iconName: Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["getRTL"])() ? 'TagUnknown12Mirror' : 'TagUnknown12' })));
};
var WarningSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["warning"], iconName: "warning12" }));
};
var AwaitingApprovalSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["awaitingApproval"], iconName: "clock" }));
};
var TrendingSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["trending"], iconName: "market" }));
};
var SomeoneCheckedOutSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["someoneCheckedOut"], iconName: "checkedoutbyother12" }));
};
var RecordSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["record"], iconName: "lock" }));
};
var NeedsRepublishingSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["needsRepublishing"], iconName: "readingmode" }));
};
var ItemScheduledSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["itemScheduled"], iconName: "datetime2" }));
};
/**
 * Renders a signal marking the proceeding content as new.
 */
var NewSignal = function (props) {
    var ariaLabel = props.ariaLabel, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["ariaLabel"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spanProps, { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signal_scss__WEBPACK_IMPORTED_MODULE_6__["signal"], _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["newSignal"]) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], { ariaLabel: props.ariaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signals_scss__WEBPACK_IMPORTED_MODULE_5__["newIcon"]), iconName: "glimmer" })));
};
/**
 * Renders a signal for a live-edit scenario.
 */
var LiveEditSignal = function (props) {
    var className = props.className, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["className"]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Signal__WEBPACK_IMPORTED_MODULE_4__["Signal"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(className, _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["liveEdit"]) }, spanProps));
};
var MentionSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["mention"], iconName: "accounts" }));
};
/**
 * Renders a signal for a number of comments.
 */
var CommentsSignal = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, children = props.children, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["ariaLabel", "className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Signal__WEBPACK_IMPORTED_MODULE_4__["Signal"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signals_scss__WEBPACK_IMPORTED_MODULE_5__["comments"], className) }, spanProps),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], { ariaLabel: props.ariaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signals_scss__WEBPACK_IMPORTED_MODULE_5__["commentsIcon"]), iconName: "MessageFill" }),
        children ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signals_scss__WEBPACK_IMPORTED_MODULE_5__["commentsCount"]) }, children) : null));
};
/**
 * Renders a signal for a number of comments.
 */
var UnseenReplySignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["unseenReply"], iconName: "commentprevious" }));
};
var UnseenEditSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["unseenEdit"], iconName: "edit" }));
};
var ReadOnlySignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["readOnly"], iconName: "uneditablesolid12" }));
};
var EmailedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["emailed"], iconName: "mail" }));
};
var SharedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["shared"], iconName: "people" }));
};
var DesktopSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["folder"], iconName: "TVMonitor" }));
};
var DocumentsSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["folder"], iconName: "Page" }));
};
var PicturesSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["folder"], iconName: "Photo2" }));
};
var MalwareDetectedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["malwareDetected"], iconName: "BlockedSiteSolid12" }));
};
var ATPSignal = MalwareDetectedSignal; // TODO Delete on next major version.
/**
 * Renders a signal for an external item.
 */
var ExternalSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["external"], iconName: "Globe" }));
};
var NotFollowedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["bookmarkOutline"], iconName: "SingleBookmark" }));
};
var FollowedSignal = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconSignal, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { signalClass: _Signals_scss__WEBPACK_IMPORTED_MODULE_5__["bookmarkFilled"], iconName: "SingleBookmarkSolid" }));
};
/**
 * Renders a signal as just an Icon. This is the simplest Signal case.
 */
var IconSignal = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, signalClass = props.signalClass, spanProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["ariaLabel", "className", "signalClass"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spanProps, { ariaLabel: props.ariaLabel, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Signal_scss__WEBPACK_IMPORTED_MODULE_6__["signal"], signalClass, className) })));
};
//# sourceMappingURL=Signals.js.map

/***/ }),

/***/ "EtCy":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/FolderCover/FolderCover.scss.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: root, isSmall, isLinked, front, isLarge, back, content, hideContent, isFluent, frame, metadata, signal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSmall", function() { return isSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinked", function() { return isLinked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "front", function() { return front; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLarge", function() { return isLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideContent", function() { return hideContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluent", function() { return isFluent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signal", function() { return signal; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".root_fdf7ce80{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:bottom;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.root_fdf7ce80,.root_fdf7ce80.isSmall_fdf7ce80{width:72px;height:52px}.root_fdf7ce80.isLinked_fdf7ce80 .front_fdf7ce80,.root_fdf7ce80.isSmall_fdf7ce80.isLinked_fdf7ce80 .front_fdf7ce80{top:6px;left:-5px}.root_fdf7ce80.isLarge_fdf7ce80{width:112px;height:80px}.root_fdf7ce80.isLarge_fdf7ce80.isLinked_fdf7ce80 .front_fdf7ce80{top:10px;left:-4px}.front_fdf7ce80{display:block;position:absolute;left:-3px;right:-3px;bottom:-4px}.back_fdf7ce80{display:block;position:absolute;left:-3px;right:-3px;bottom:-4px}.content_fdf7ce80{position:absolute;left:4px;right:4px;bottom:4px;top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.hideContent_fdf7ce80 .content_fdf7ce80{opacity:0}.isFluent_fdf7ce80 .content_fdf7ce80{top:12px}.frame_fdf7ce80{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;max-width:100%;max-height:100%;-webkit-box-shadow:0 1px 3px 2px rgba(1,1,0,.06);box-shadow:0 1px 3px 2px rgba(1,1,0,.06);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:32px;min-height:32px}.metadata_fdf7ce80{display:block;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-weight:400;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:relative}html[dir=ltr] .metadata_fdf7ce80{margin-right:8px}html[dir=rtl] .metadata_fdf7ce80{margin-left:8px}html[dir=ltr] .metadata_fdf7ce80{text-align:right}html[dir=rtl] .metadata_fdf7ce80{text-align:left}.isFluent_fdf7ce80 .metadata_fdf7ce80{color:#bf5712}html[dir=ltr] .isFluent_fdf7ce80 .metadata_fdf7ce80{text-align:left}html[dir=rtl] .isFluent_fdf7ce80 .metadata_fdf7ce80{text-align:right}.metadata_fdf7ce80,.metadata_fdf7ce80.isSmall_fdf7ce80{font-size:12px;margin-bottom:1px}html[dir=ltr] .metadata_fdf7ce80,html[dir=ltr] .metadata_fdf7ce80.isSmall_fdf7ce80{margin-left:4px}html[dir=rtl] .metadata_fdf7ce80,html[dir=rtl] .metadata_fdf7ce80.isSmall_fdf7ce80{margin-right:4px}.isLarge_fdf7ce80 .metadata_fdf7ce80{font-size:14px;margin-bottom:4px}html[dir=ltr] .isLarge_fdf7ce80 .metadata_fdf7ce80{margin-left:8px}html[dir=rtl] .isLarge_fdf7ce80 .metadata_fdf7ce80{margin-right:8px}.signal_fdf7ce80{display:block;position:relative;margin-bottom:8px}html[dir=ltr] .signal_fdf7ce80{margin-left:8px}html[dir=rtl] .signal_fdf7ce80{margin-right:8px}html[dir=ltr] .signal_fdf7ce80{margin-right:4px}html[dir=rtl] .signal_fdf7ce80{margin-left:4px}.isFluent_fdf7ce80 .signal_fdf7ce80 :first-child{color:#bf5712}.signal_fdf7ce80,.signal_fdf7ce80.isSmall_fdf7ce80{font-size:16px;margin-bottom:1px}.isLarge_fdf7ce80 .signal_fdf7ce80{font-size:16px;margin-bottom:4px}html[dir=ltr] .isLarge_fdf7ce80 .signal_fdf7ce80{margin-right:7px}html[dir=rtl] .isLarge_fdf7ce80 .signal_fdf7ce80{margin-left:7px}" }]);
var root = "root_fdf7ce80";
var isSmall = "isSmall_fdf7ce80";
var isLinked = "isLinked_fdf7ce80";
var front = "front_fdf7ce80";
var isLarge = "isLarge_fdf7ce80";
var back = "back_fdf7ce80";
var content = "content_fdf7ce80";
var hideContent = "hideContent_fdf7ce80";
var isFluent = "isFluent_fdf7ce80";
var frame = "frame_fdf7ce80";
var metadata = "metadata_fdf7ce80";
var signal = "signal_fdf7ce80";
//# sourceMappingURL=FolderCover.scss.js.map

/***/ }),

/***/ "HP5x":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/List.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/List.js


/***/ }),

/***/ "IIwc":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/Teams-Collaborate.png ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Teams-Collaborate_ef78abe521379326aadc2609c868627c.png";

/***/ }),

/***/ "ISIA":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Check.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Check.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Check;

/***/ }),

/***/ "Kcka":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/Tile.scss.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: tile, selectable, selected, isFluentStyling, name, hasBackgroundFrame, invokable, label, description, link, foreground, foregroundHide, hasForegroundFrame, check, uninvokable, showCheck, background, backgroundHide, aboveNameplate, content, nameplate, activity, signal, storageSignal, socialSignal, lifecycleSignal, isLarge, isSmall, hasBackground, onlyOnHover, showBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tile", function() { return tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectable", function() { return selectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selected", function() { return selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluentStyling", function() { return isFluentStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBackgroundFrame", function() { return hasBackgroundFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokable", function() { return invokable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreground", function() { return foreground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foregroundHide", function() { return foregroundHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasForegroundFrame", function() { return hasForegroundFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uninvokable", function() { return uninvokable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCheck", function() { return showCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundHide", function() { return backgroundHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboveNameplate", function() { return aboveNameplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameplate", function() { return nameplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activity", function() { return activity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signal", function() { return signal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageSignal", function() { return storageSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialSignal", function() { return socialSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleSignal", function() { return lifecycleSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLarge", function() { return isLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSmall", function() { return isSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBackground", function() { return hasBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyOnHover", function() { return onlyOnHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBackground", function() { return showBackground; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".tile_945f5c41{display:block;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tile_945f5c41::-moz-focus-inner{border:0}.tile_945f5c41{outline:transparent}.tile_945f5c41.selectable_945f5c41:hover{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.tile_945f5c41.selectable_945f5c41:hover.selected_945f5c41{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.tile_945f5c41.selected_945f5c41{background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.tile_945f5c41.selected_945f5c41.isFluentStyling_945f5c41 .name_945f5c41{font-weight:600}.ms-Fabric--isFocusVisible .tile_945f5c41:focus{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41:focus.isFluentStyling_945f5c41{background-color:transparent}.ms-Fabric--isFocusVisible .tile_945f5c41:focus.selected_945f5c41{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41:focus{outline:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41:focus.selected_945f5c41{outline:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41:focus.selected_945f5c41.isFluentStyling_945f5c41{outline:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.tile_945f5c41.hasBackgroundFrame_945f5c41{-webkit-box-shadow:0 1px 3px 1px rgba(1,1,0,.05);box-shadow:0 1px 3px 1px rgba(1,1,0,.05)}.tile_945f5c41.hasBackgroundFrame_945f5c41.selectable_945f5c41:hover{outline:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c6c4" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41.hasBackgroundFrame_945f5c41:focus{outline:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.ms-Fabric--isFocusVisible .tile_945f5c41.hasBackgroundFrame_945f5c41:focus.selected_945f5c41{outline:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.tile_945f5c41.hasBackgroundFrame_945f5c41:after{content:'';display:block;position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.tile_945f5c41.invokable_945f5c41:active{-webkit-transform:scale(.95);transform:scale(.95)}.label_945f5c41{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.description_945f5c41{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.link_945f5c41{border:none;background:0 0;position:absolute;padding:0;top:0;left:0;bottom:0;right:0;width:100%;text-decoration:none;color:inherit;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;pointer-events:none}.link_945f5c41::-moz-focus-inner{border:0}.link_945f5c41{outline:transparent}.foreground_945f5c41{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;overflow:visible;max-width:100%;max-height:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.tile_945f5c41.invokable_945f5c41 .foreground_945f5c41{pointer-events:auto;cursor:pointer}.foreground_945f5c41.foregroundHide_945f5c41{opacity:0}.hasForegroundFrame_945f5c41 .foreground_945f5c41{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";-webkit-box-shadow:0 1px 3px 1px rgba(1,1,0,.05);box-shadow:0 1px 3px 1px rgba(1,1,0,.05);min-width:32px;min-height:32px}.hasForegroundFrame_945f5c41 .foreground_945f5c41:after{content:'';display:block;position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.check_945f5c41{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;top:0;border:none;background:0 0;background-color:transparent;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px}.check_945f5c41::-moz-focus-inner{border:0}.check_945f5c41{outline:transparent}.check_945f5c41{position:absolute}.ms-Fabric--isFocusVisible .check_945f5c41:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#605e5c" }, { "rawString": "}html[dir=ltr] .check_945f5c41{right:0}html[dir=rtl] .check_945f5c41{left:0}.tile_945f5c41.uninvokable_945f5c41 .check_945f5c41{width:100%;height:100%}.tile_945f5c41.selectable_945f5c41 .check_945f5c41{display:-webkit-box;display:-ms-flexbox;display:flex}.tile_945f5c41.selected_945f5c41 .check_945f5c41,.tile_945f5c41.showCheck_945f5c41 .check_945f5c41,.tile_945f5c41:hover .check_945f5c41{opacity:1}.ms-Fabric--isFocusVisible .check_945f5c41:focus{opacity:1}.ms-Fabric--isFocusVisible .tile_945f5c41:focus .check_945f5c41{opacity:1}.background_945f5c41{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.tile_945f5c41.invokable_945f5c41 .background_945f5c41{cursor:pointer;pointer-events:auto}.background_945f5c41.backgroundHide_945f5c41{opacity:0}.aboveNameplate_945f5c41{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;margin:16px 16px 0 16px}.content_945f5c41{position:absolute;top:0;left:0;bottom:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hasForegroundFrame_945f5c41 .content_945f5c41{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.nameplate_945f5c41{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:relative;margin:auto 0 0 0;padding:12px 8px;text-align:center;z-index:0}.nameplate_945f5c41 .name_945f5c41{-webkit-transition:color .2s linear;transition:color .2s linear}.tile_945f5c41.invokable_945f5c41 .nameplate_945f5c41 .name_945f5c41{pointer-events:auto;cursor:pointer}.link_945f5c41:hover .nameplate_945f5c41 .name_945f5c41{text-decoration:underline}.isFluentStyling_945f5c41 .link_945f5c41:hover .nameplate_945f5c41 .name_945f5c41{text-decoration:none}.nameplate_945f5c41 .activity_945f5c41{-webkit-transition:color .2s linear;transition:color .2s linear}.tile_945f5c41.hasBackgroundFrame_945f5c41 .nameplate_945f5c41{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:12px 10px}.signal_945f5c41{display:inline-block}html[dir=ltr] .signal_945f5c41.storageSignal_945f5c41{margin-left:4px}html[dir=rtl] .signal_945f5c41.storageSignal_945f5c41{margin-right:4px}html[dir=ltr] .signal_945f5c41.socialSignal_945f5c41{margin-right:4px}html[dir=rtl] .signal_945f5c41.socialSignal_945f5c41{margin-left:4px}html[dir=ltr] .signal_945f5c41.lifecycleSignal_945f5c41{margin-right:4px}html[dir=rtl] .signal_945f5c41.lifecycleSignal_945f5c41{margin-left:4px}.name_945f5c41{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}html[dir=ltr] .name_945f5c41{margin-left:-8px}html[dir=rtl] .name_945f5c41{margin-right:-8px}html[dir=ltr] .name_945f5c41{padding-left:8px}html[dir=rtl] .name_945f5c41{padding-right:8px}.isLarge_945f5c41 .name_945f5c41,.name_945f5c41{font-size:14px;height:30px;margin-top:-7px;margin-bottom:-8px}.isSmall_945f5c41 .name_945f5c41{font-size:12px;height:24px;margin-top:-5px;margin-bottom:-7px}.activity_945f5c41{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-weight:400;font-size:12px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;height:24px;margin-bottom:-4px}html[dir=ltr] .activity_945f5c41{margin-left:-8px}html[dir=rtl] .activity_945f5c41{margin-right:-8px}html[dir=ltr] .activity_945f5c41{padding-left:8px}html[dir=rtl] .activity_945f5c41{padding-right:8px}.hasBackgroundFrame_945f5c41 .name_945f5c41{display:block}html[dir=ltr] .hasBackgroundFrame_945f5c41 .name_945f5c41{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}html[dir=rtl] .hasBackgroundFrame_945f5c41 .name_945f5c41{-webkit-box-pack:right;-ms-flex-pack:right;justify-content:right}.hasBackgroundFrame_945f5c41 .name_945f5c41,.isLarge_945f5c41 .isSmall_945f5c41 .hasBackgroundFrame_945f5c41 .name_945f5c41{font-size:14px;height:auto;padding-top:6px;margin-top:0;margin-bottom:0;line-height:22px}.hasBackgroundFrame_945f5c41 .activity_945f5c41{font-size:12px;display:block;height:auto;margin-top:0;margin-bottom:0;line-height:20px}html[dir=ltr] .hasBackgroundFrame_945f5c41 .activity_945f5c41{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;text-align:left}html[dir=rtl] .hasBackgroundFrame_945f5c41 .activity_945f5c41{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;text-align:left}.hasBackground_945f5c41 .nameplate_945f5c41:before{position:absolute;content:'';display:block;top:-4px;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.65)),color-stop(55%,rgba(0,0,0,.5525)),color-stop(80%,rgba(0,0,0,.195)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.65) 0,rgba(0,0,0,.5525) 55%,rgba(0,0,0,.195) 80%,rgba(0,0,0,0) 100%);z-index:-1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;opacity:0}.hasBackground_945f5c41 .onlyOnHover_945f5c41 .name_945f5c41{opacity:0;-webkit-transition:opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;transition:opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;transition:transform .25s ease-out,opacity .2s linear,color .2s linear;transition:transform .25s ease-out,opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;-webkit-transform:translateY(1rem);transform:translateY(1rem)}.hasBackground_945f5c41 .onlyOnHover_945f5c41 .activity_945f5c41{opacity:0;-webkit-transition:opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;transition:opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;transition:transform .25s ease-out,opacity .2s linear,color .2s linear;transition:transform .25s ease-out,opacity .2s linear,color .2s linear,-webkit-transform .25s ease-out;-webkit-transform:translateY(1rem);transform:translateY(1rem)}.hasBackground_945f5c41.selected_945f5c41 .name_945f5c41.onlyOnHover_945f5c41,.hasBackground_945f5c41:hover .name_945f5c41.onlyOnHover_945f5c41{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.hasBackground_945f5c41.selected_945f5c41 .activity_945f5c41.onlyOnHover_945f5c41,.hasBackground_945f5c41:hover .activity_945f5c41.onlyOnHover_945f5c41{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.hasBackground_945f5c41.showBackground_945f5c41.selected_945f5c41 .onlyOnHover_945f5c41.nameplate_945f5c41:before,.hasBackground_945f5c41.showBackground_945f5c41:hover .onlyOnHover_945f5c41.nameplate_945f5c41:before{opacity:1}.hasBackground_945f5c41.showBackground_945f5c41 .nameplate_945f5c41:not(.onlyOnHover_945f5c41):before{opacity:1}.hasBackground_945f5c41.showBackground_945f5c41 .name_945f5c41{color:#fff;text-shadow:.5px .5px 2px rgba(0,0,0,.55)}.hasBackground_945f5c41.showBackground_945f5c41 .activity_945f5c41{color:#fff;text-shadow:.5px .5px 2px rgba(0,0,0,.55)}" }]);
var tile = "tile_945f5c41";
var selectable = "selectable_945f5c41";
var selected = "selected_945f5c41";
var isFluentStyling = "isFluentStyling_945f5c41";
var name = "name_945f5c41";
var hasBackgroundFrame = "hasBackgroundFrame_945f5c41";
var invokable = "invokable_945f5c41";
var label = "label_945f5c41";
var description = "description_945f5c41";
var link = "link_945f5c41";
var foreground = "foreground_945f5c41";
var foregroundHide = "foregroundHide_945f5c41";
var hasForegroundFrame = "hasForegroundFrame_945f5c41";
var check = "check_945f5c41";
var uninvokable = "uninvokable_945f5c41";
var showCheck = "showCheck_945f5c41";
var background = "background_945f5c41";
var backgroundHide = "backgroundHide_945f5c41";
var aboveNameplate = "aboveNameplate_945f5c41";
var content = "content_945f5c41";
var nameplate = "nameplate_945f5c41";
var activity = "activity_945f5c41";
var signal = "signal_945f5c41";
var storageSignal = "storageSignal_945f5c41";
var socialSignal = "socialSignal_945f5c41";
var lifecycleSignal = "lifecycleSignal_945f5c41";
var isLarge = "isLarge_945f5c41";
var isSmall = "isSmall_945f5c41";
var hasBackground = "hasBackground_945f5c41";
var onlyOnHover = "onlyOnHover_945f5c41";
var showBackground = "showBackground_945f5c41";
//# sourceMappingURL=Tile.scss.js.map

/***/ }),

/***/ "LAm1":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/ShimmerTile/ShimmerTile.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: ShimmerTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShimmerTile", function() { return ShimmerTile; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "gnd0");
/* harmony import */ var _ShimmerTile_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShimmerTile.base */ "MqJi");
/* harmony import */ var _ShimmerTile_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShimmerTile.styles */ "tvKE");



var ShimmerTile = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ShimmerTile_base__WEBPACK_IMPORTED_MODULE_1__["ShimmerTileBase"], _ShimmerTile_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);
//# sourceMappingURL=ShimmerTile.js.map

/***/ }),

/***/ "MG44":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/SPTeamifyResource.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: SPTeamifyResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPTeamifyResource", function() { return SPTeamifyResource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Image */ "pw9o");
/* harmony import */ var office_ui_fabric_react_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Checkbox */ "l0uo");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/dateTime/DateTime */ "ZqbN");
/* harmony import */ var _SPTeamifyResource_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SPTeamifyResource.scss */ "mmsU");
/* harmony import */ var _FolderTile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FolderTile */ "UAvW");












var LEARN_MORE_URL = 'https://support.microsoft.com/en-us/office/\
add-a-sharepoint-page-or-list-to-a-channel-in-teams-131edef1-455f-4c67-a8ce-efa2ebf25f0b\
?ui=en-us&rs=en-us&ad=us&cc365plan=o365ww&storagetype=stage';
// tslint:disable-next-line: no-any
var styles = _SPTeamifyResource_scss__WEBPACK_IMPORTED_MODULE_10__;
var thumbnailImageProps = {
    imageFit: office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_2__["ImageFit"].centerCover
};
var checkBoxStyles = function (props) { return ({
    checkbox: {
        borderRadius: '50%'
    }
}); };
var SPTeamifyResource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPTeamifyResource, _super);
    function SPTeamifyResource(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Get the tab item which is used in the pinning to Primary Channel of the Team
         */
        _this._getTabItem = function () {
            return {
                url: _this.props.webUrl,
                isDefault: false,
                displayName: _this.props.title.localeCompare('Home') === 0 ? 'Site' : _this.props.title,
                itemType: _this.props.itemType
            };
        };
        _this._onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (_this.props.canUncheck) {
                _this.setState(function (prevState) { return ({
                    isSelected: !prevState.isSelected
                }); });
                var callback = _this.state.isSelected ? _this.props.deselectCallback : _this.props.selectCallback;
                callback(_this._getTabItem());
            }
        };
        _this._getFallbackImgSrc = function () {
            if (_this.props.itemType === 0 /* List */) {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/List.png */ "UYTr");
            }
            else if (_this.props.itemType === 1 /* Page */) {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/Pages.png */ "1/dy");
            }
            else if (_this.props.itemType === 2 /* NewsL2 */) {
                // tslint:disable-next-line:no-require-imports
                return __webpack_require__(/*! ./images/News.png */ "fkyk");
            }
        };
        /**
         * Preview Image loading state change call back.
         * If an error occurs while loading the image, based on the type of item a static image is shown.
         */
        _this._onPreviewImgLoadingStateChange = function (loadState) {
            if (loadState === office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_2__["ImageLoadState"].error) {
                _this.setState({
                    previewImgFallBackSrc: _this._getFallbackImgSrc()
                });
            }
        };
        _this._onFocus = function () {
            if ((_this.props.title.localeCompare('Documents') === 0 || _this.props.title.localeCompare('Home') === 0) &&
                _this._toolTipHostRef.current) {
                _this._toolTipHostRef.current.show();
            }
            _this.props.onFocusCallback(_this.props.gridIndex !== undefined ? _this.props.gridIndex : -1);
        };
        _this.state = {
            isSelected: _this.props.isSelected,
            previewImgFallBackSrc: undefined
        };
        _this._toolTipHostRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    SPTeamifyResource.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.isSelected !== this.props.isSelected) {
            this.setState({
                isSelected: this.props.isSelected
            });
        }
    };
    SPTeamifyResource.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var errorToolTip = (function () {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                _this.props.strings.errorToolTip,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_7__["Link"], { href: LEARN_MORE_URL, target: '_blank' }, _this.props.strings.learnMore)));
        })();
        var ariaDescribedBy = (function () {
            if (_this.props.title.localeCompare('Documents') || _this.props.title.localeCompare('Home')) {
                return _this.props.title + "_tooltip";
            }
            else {
                return '';
            }
        })();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource, (_a = {},
                _a[styles.selected] = this.state.isSelected,
                _a[styles.error] = this.props.hasPinningFailed,
                _a)), style: {
                width: "calc(" + this.props.width + "% - 5px)",
                cursor: this.props.canUncheck ? 'pointer' : 'default'
            }, onClick: this._onclick, "data-is-focusable": true, tabIndex: 0, "aria-describedby": ariaDescribedBy, role: 'presentation', onFocus: this._onFocus },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_8__["FocusZone"], { disabled: true, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_focusZone) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_checkCircle), onClick: this._onclick }, this.props.hasPinningFailed ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipHost"], { content: errorToolTip },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { iconName: 'ErrorBadge', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_error) }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: -1 },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { checked: this.state.isSelected, styles: checkBoxStyles, disabled: !this.props.canUncheck, tabIndex: -1 })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_thumbnail), tabIndex: -1 }, this.props.itemType === 3 /* DocLib */ ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FolderTile__WEBPACK_IMPORTED_MODULE_11__["FolderTile"], null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, thumbnailImageProps, { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.thumbnail_container, (_b = {},
                        _b[styles.icon] = this.state.previewImgFallBackSrc !== undefined || this.props.itemType === 0 /* List */,
                        _b)), src: this.state.previewImgFallBackSrc
                        ? this.state.previewImgFallBackSrc
                        : this.props.previewImg !== undefined
                            ? this.props.previewImg.previewImageSrc
                            : '', onLoadingStateChange: this._onPreviewImgLoadingStateChange, tabIndex: -1 })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_title, (_c = {},
                        _c[styles.selected] = this.state.isSelected,
                        _c)) },
                    this.props.title.localeCompare('Documents') === 0 ||
                        this.props.title.localeCompare('Home') === 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipHost"], { id: this.props.title + "_tooltip", content: this.props.title.localeCompare('Documents') === 0
                            ? this.props.strings.documentToolTip
                            : this.props.strings.homeToolTip, componentRef: this._toolTipHostRef, directionalHint: office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_5__["DirectionalHint"].bottomCenter },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { iconName: 'Info', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.ms_teamifyResource_info) }))) : null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipHost"], { content: this.props.title }, this.props.title)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: styles.ms_teamifyResource_modifiedTime }, _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_9__["getFriendlyDateTimeStringPast"](new Date(this.props.modifiedDate))))));
    };
    return SPTeamifyResource;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SPTeamifyResource.js.map

/***/ }),

/***/ "MqJi":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/ShimmerTile/ShimmerTile.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: ShimmerTileBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShimmerTileBase", function() { return ShimmerTileBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "gnd0");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "YZms");
/* harmony import */ var office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Shimmer */ "dgKW");





var ShimmerTileLayoutValues = {
    largeSquareWidth: 96,
    largeSquareHeight: 96,
    largeNameWidth: 144,
    largeNameHeight: 7,
    largeActivityWidth: 96,
    largeActivityHeight: 7,
    smallSquareWidth: 62,
    smallSquareHeight: 61,
    smallNameWidth: 106,
    smallNameHeight: 5,
    smallActivityWidth: 62,
    smallActivityHeight: 5,
};
var PLACEHOLDER_SIZES = {
    small: {
        squareWidth: ShimmerTileLayoutValues.smallSquareWidth,
        squareHeight: ShimmerTileLayoutValues.smallSquareHeight,
        nameWidth: ShimmerTileLayoutValues.smallNameWidth,
        nameHeight: ShimmerTileLayoutValues.smallNameHeight,
        activityWidth: ShimmerTileLayoutValues.smallActivityWidth,
        activityHeight: ShimmerTileLayoutValues.smallActivityHeight,
    },
    large: {
        squareWidth: ShimmerTileLayoutValues.largeSquareWidth,
        squareHeight: ShimmerTileLayoutValues.largeSquareHeight,
        nameWidth: ShimmerTileLayoutValues.largeNameWidth,
        nameHeight: ShimmerTileLayoutValues.largeNameHeight,
        activityWidth: ShimmerTileLayoutValues.largeActivityWidth,
        activityHeight: ShimmerTileLayoutValues.largeActivityHeight,
    },
};
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var ShimmerTileBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShimmerTileBase, _super);
    function ShimmerTileBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    ShimmerTileBase.prototype.render = function () {
        var _a = this.props, styles = _a.styles, _b = _a.contentSize, contentSize = _b === void 0 ? { width: 176, height: 171 } : _b, _c = _a.itemActivity, itemActivity = _c === void 0 ? true : _c, _d = _a.itemName, itemName = _d === void 0 ? true : _d, _e = _a.itemThumbnail, itemThumbnail = _e === void 0 ? true : _e, _f = _a.tileSize, tileSize = _f === void 0 ? 'large' : _f;
        var _g = _Tile__WEBPACK_IMPORTED_MODULE_3__["TileLayoutSizes"][tileSize], nameplatePadding = _g.nameplatePadding, nameplateMargin = _g.nameplateMargin, nameplateActivityHeight = _g.nameplateActivityHeight, nameplateNameHeight = _g.nameplateNameHeight;
        var _h = PLACEHOLDER_SIZES[tileSize], squareWidth = _h.squareWidth, squareHeight = _h.squareHeight, nameWidth = _h.nameWidth, nameHeight = _h.nameHeight, activityWidth = _h.activityWidth, activityHeight = _h.activityHeight;
        var nameplateHeight = 0;
        if (itemName || itemActivity) {
            nameplateHeight += nameplatePadding * 2;
            if (itemName) {
                nameplateHeight += nameplateNameHeight;
            }
            if (itemActivity) {
                nameplateHeight += nameplateActivityHeight + nameplateMargin;
            }
        }
        this._classNames = getClassNames(styles, {});
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerGap"], { width: contentSize.width, height: contentSize.height - squareHeight - nameplateHeight }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementsGroup"], { shimmerElements: [
                    {
                        type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                        width: (contentSize.width - squareWidth) / 2,
                        height: squareHeight,
                    },
                    itemThumbnail
                        ? {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].line,
                            width: squareWidth,
                            height: squareHeight,
                        }
                        : {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                            width: squareWidth,
                            height: squareHeight,
                        },
                    {
                        type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                        width: (contentSize.width - squareWidth) / 2,
                        height: squareHeight,
                    },
                ] }),
            itemActivity || itemName ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerGap"], { width: contentSize.width, height: nameplatePadding }),
                itemName ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementsGroup"], { shimmerElements: [
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                            width: (contentSize.width - nameWidth) / 2,
                            height: nameplateNameHeight,
                        },
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].line,
                            width: nameWidth,
                            height: nameHeight,
                        },
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                            width: (contentSize.width - nameWidth) / 2,
                            height: nameplateNameHeight,
                        },
                    ] })) : null,
                itemActivity ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementsGroup"], { shimmerElements: [
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                            width: (contentSize.width - activityWidth) / 2,
                            height: nameplateActivityHeight,
                        },
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].line,
                            width: activityWidth,
                            height: activityHeight,
                        },
                        {
                            type: office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerElementType"].gap,
                            width: (contentSize.width - activityWidth) / 2,
                            height: nameplateActivityHeight,
                        },
                    ] })) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Shimmer__WEBPACK_IMPORTED_MODULE_4__["ShimmerGap"], { width: contentSize.width, height: nameplatePadding }))) : null));
    };
    return ShimmerTileBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ShimmerTile.base.js.map

/***/ }),

/***/ "PZDL":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/spInTeams/ISPListsInTeamsDataSource.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: ListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListType", function() { return ListType; });
var ListType;
(function (ListType) {
    ListType[ListType["List"] = 100] = "List";
    ListType[ListType["DocLib"] = 101] = "DocLib";
})(ListType || (ListType = {}));
//# sourceMappingURL=ISPListsInTeamsDataSource.js.map

/***/ }),

/***/ "RiqH":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/Tile.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: TileLayoutValues, TileLayoutSizes, Tile, getTileLayout, renderTileWithLayout, ShimmerTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tile/index */ "3GEp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayoutValues", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["TileLayoutValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayoutSizes", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["TileLayoutSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["Tile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTileLayout", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["getTileLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderTileWithLayout", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["renderTileWithLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShimmerTile", function() { return _components_Tile_index__WEBPACK_IMPORTED_MODULE_0__["ShimmerTile"]; });


//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "UAvW":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/FolderTile.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: FolderTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderTile", function() { return FolderTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_experiments_lib_FolderCover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/experiments/lib/FolderCover */ "1o9y");
/* harmony import */ var _uifabric_experiments_lib_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/experiments/lib/Tile */ "RiqH");
/* harmony import */ var _uifabric_experiments_lib_components_signals_Signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/experiments/lib/components/signals/Signals */ "DmnJ");
/* harmony import */ var _uifabric_experiments_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uifabric/experiments/lib/Utilities */ "gnd0");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _FolderTile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FolderTile.scss */ "kw+B");







var FolderTile = function (props) {
    var folderCover = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_uifabric_experiments_lib_FolderCover__WEBPACK_IMPORTED_MODULE_1__["FolderCover"], { folderCoverSize: 'large', folderCoverType: 'default', signal: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_uifabric_experiments_lib_components_signals_Signals__WEBPACK_IMPORTED_MODULE_3__["SharedSignal"], null) }));
    var contentSize = Object(_uifabric_experiments_lib_FolderCover__WEBPACK_IMPORTED_MODULE_1__["getFolderCoverLayout"])(folderCover).contentSize;
    var imageSize = Object(_uifabric_experiments_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["fitContentToBounds"])({
        contentSize: {
            width: 120,
            height: 96
        },
        boundsSize: contentSize,
        mode: 'contain'
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])(_FolderTile_scss__WEBPACK_IMPORTED_MODULE_6__["tileContainer"]) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_uifabric_experiments_lib_Tile__WEBPACK_IMPORTED_MODULE_2__["Tile"], { tileSize: 'large', hideBackground: true, foreground: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, Object(_uifabric_experiments_lib_FolderCover__WEBPACK_IMPORTED_MODULE_1__["renderFolderCoverWithLayout"])(folderCover, {
                children: imageSize ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _FolderTile_scss__WEBPACK_IMPORTED_MODULE_6__["blankFolderCover"], style: {
                        width: imageSize.width + "px",
                        height: imageSize.height + "px"
                    } })) : null
            })), className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])(_FolderTile_scss__WEBPACK_IMPORTED_MODULE_6__["tile"]), disabled: true })));
};
//# sourceMappingURL=FolderTile.js.map

/***/ }),

/***/ "UYTr":
/*!*********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/List.png ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "List_6580832bd7b549e11e365b3f8146144d.png";

/***/ }),

/***/ "V/NK":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/TeamifyWizard.png ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TeamifyWizard_57e1114e39d4e2e246440d6c10e33c91.png";

/***/ }),

/***/ "V3Cx":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/FolderCover/initializeFolderCovers.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: initializeFolderCovers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFolderCovers", function() { return initializeFolderCovers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/styling */ "dqzI");


var ASSET_CDN_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20200708.002/office-ui-fabric-react-assets/foldericons';
function initializeFolderCovers(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ASSET_CDN_BASE_URL; }
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerIcons"])({
        fontFace: {},
        style: {
            width: 118,
            height: 86,
            overflow: 'hidden',
        },
        icons: {
            folderCoverLargeDefaultFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-fg.svg" }),
            folderCoverLargeDefaultBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-bg.svg" }),
            folderCoverLargeLinkedFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-fg-linked.svg" }),
            folderCoverLargeLinkedBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-bg.svg" }),
            folderCoverLargeMediaFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-fg-media.svg" }),
            folderCoverLargeMediaBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/lg-bg.svg" }),
        },
    }, options);
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerIcons"])({
        fontFace: {},
        style: {
            width: 78,
            height: 58,
            overflow: 'hidden',
        },
        icons: {
            folderCoverSmallDefaultFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-fg.svg" }),
            folderCoverSmallDefaultBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-bg.svg" }),
            folderCoverSmallLinkedFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-fg-linked.svg" }),
            folderCoverSmallLinkedBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-bg.svg" }),
            folderCoverSmallMediaFront: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-fg-media.svg" }),
            folderCoverSmallMediaBack: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: baseUrl + "/sm-bg.svg" }),
        },
    }, options);
}
//# sourceMappingURL=initializeFolderCovers.js.map

/***/ }),

/***/ "VDkv":
/*!***********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/Folder.png ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Folder_2cea45093e65b91c6cf2badd44d3849a.png";

/***/ }),

/***/ "XL4t":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/signals/Signal.scss.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: signal, dark, selected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signal", function() { return signal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selected", function() { return selected; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".signal_bb597368{display:inline-block;margin:0 4px;position:relative;-webkit-transition:color .2s linear;transition:color .2s linear}.dark_bb597368 .signal_bb597368,.signal_bb597368 .dark_bb597368.selected_bb597368{color:#fff}html[dir=ltr] .signal_bb597368:first-child{margin-left:0}html[dir=rtl] .signal_bb597368:first-child{margin-right:0}html[dir=ltr] .signal_bb597368:last-child{margin-right:0}html[dir=rtl] .signal_bb597368:last-child{margin-left:0}i.signal_bb597368{top:.2em}" }]);
var signal = "signal_bb597368";
var dark = "dark_bb597368";
var selected = "selected_bb597368";
//# sourceMappingURL=Signal.scss.js.map

/***/ }),

/***/ "YFQZ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/Teams-OnlineMeeting.png ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Teams-OnlineMeeting_ef65fbb3bac22b83fb91621a2a3dab95.png";

/***/ }),

/***/ "YZms":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/Tile.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: TileLayoutValues, TileLayoutSizes, Tile, getTileLayout, renderTileWithLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileLayoutValues", function() { return TileLayoutValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileLayoutSizes", function() { return TileLayoutSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileLayout", function() { return getTileLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTileWithLayout", function() { return renderTileWithLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Check */ "ISIA");
/* harmony import */ var office_ui_fabric_react_lib_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var office_ui_fabric_react_lib_Selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Selection */ "8nOp");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "gnd0");
/* harmony import */ var _Tile_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tile.scss */ "Kcka");
/* harmony import */ var _signals_Signal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../signals/Signal.scss */ "XL4t");
/* harmony import */ var office_ui_fabric_react_lib_components_Check_Check_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Check/Check.scss */ "zpHR");








var TileStyles = _Tile_scss__WEBPACK_IMPORTED_MODULE_5__;
var SignalStyles = _signals_Signal_scss__WEBPACK_IMPORTED_MODULE_6__;
var CheckStyles = office_ui_fabric_react_lib_components_Check_Check_scss__WEBPACK_IMPORTED_MODULE_7__;
var TileLayoutValues = {
    nameplatePadding: 12,
    largeNameplateNameHeight: 15,
    smallNameplateNameHeight: 12,
    nameplateMargin: 0,
    largeNameplateActivityHeight: 20,
    smallNameplateActivityHeight: 20,
    foregroundMargin: 16,
};
var TileLayoutSizes = {
    small: {
        nameplatePadding: TileLayoutValues.nameplatePadding,
        nameplateNameHeight: TileLayoutValues.smallNameplateNameHeight,
        nameplateMargin: TileLayoutValues.nameplateMargin,
        nameplateActivityHeight: TileLayoutValues.smallNameplateActivityHeight,
        foregroundMargin: TileLayoutValues.foregroundMargin,
    },
    large: {
        nameplatePadding: TileLayoutValues.nameplatePadding,
        nameplateNameHeight: TileLayoutValues.largeNameplateNameHeight,
        nameplateMargin: TileLayoutValues.nameplateMargin,
        nameplateActivityHeight: TileLayoutValues.largeNameplateActivityHeight,
        foregroundMargin: TileLayoutValues.foregroundMargin,
    },
};
/**
 * A tile provides a frame for a potentially-selectable item which displays its contents prominently.
 */
var Tile = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tile, _super);
    function Tile(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._onSelectionChange = function () {
            var _a = _this.props, selection = _a.selection, _b = _a.selectionIndex, selectionIndex = _b === void 0 ? -1 : _b;
            var isSelected = selectionIndex > -1 && !!selection && selection.isIndexSelected(selectionIndex);
            var isModal = !!selection && !!selection.isModal && selection.isModal();
            _this.setState({
                isSelected: isSelected,
                isModal: isModal,
            });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["initializeComponentRef"])(_this);
        _this._nameId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('Tile-name');
        _this._activityId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('Tile-activity');
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('Tile-label');
        _this._descriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('Tile-description');
        var _a = props.selectionIndex, selectionIndex = _a === void 0 ? -1 : _a, selection = props.selection;
        var isSelected = !!selection && selectionIndex > -1 && selection.isIndexSelected(selectionIndex);
        var isModal = !!selection && !!selection.isModal && selection.isModal();
        _this.state = {
            isSelected: isSelected,
            isModal: isModal,
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_4__["EventGroup"](_this);
        return _this;
    }
    Tile.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _a = this.props, selection = _a.selection, selectionIndex = _a.selectionIndex;
        var nextSelection = nextProps.selection, _b = nextProps.selectionIndex, nextSelectionIndex = _b === void 0 ? -1 : _b;
        if (selection !== nextSelection || selectionIndex !== nextSelectionIndex) {
            var isSelected = !!nextSelection && nextSelectionIndex > -1 && nextSelection.isIndexSelected(nextSelectionIndex);
            var isModal = !!nextSelection && nextSelection.isModal && nextSelection.isModal();
            this.setState({
                isSelected: isSelected,
                isModal: isModal,
            });
        }
    };
    Tile.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        if (selection) {
            this._events.on(selection, office_ui_fabric_react_lib_Selection__WEBPACK_IMPORTED_MODULE_3__["SELECTION_CHANGE"], this._onSelectionChange);
        }
    };
    Tile.prototype.componentDidUpdate = function (previousProps) {
        var selection = this.props.selection;
        var previousSelection = previousProps.selection;
        if (selection !== previousSelection) {
            if (previousSelection) {
                this._events.off(previousSelection);
            }
            if (selection) {
                this._events.on(selection, office_ui_fabric_react_lib_Selection__WEBPACK_IMPORTED_MODULE_3__["SELECTION_CHANGE"], this._onSelectionChange);
            }
        }
    };
    Tile.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    Tile.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, _c = _b.selectionIndex, selectionIndex = _c === void 0 ? -1 : _c, _d = _b.invokeSelection, invokeSelection = _d === void 0 ? false : _d, selection = _b.selection, background = _b.background, foreground = _b.foreground, _e = _b.showBackgroundFrame, showBackgroundFrame = _e === void 0 ? false : _e, _f = _b.showForegroundFrame, showForegroundFrame = _f === void 0 ? false : _f, _g = _b.hideBackground, hideBackground = _g === void 0 ? false : _g, _h = _b.hideForeground, hideForeground = _h === void 0 ? false : _h, itemName = _b.itemName, itemActivity = _b.itemActivity, componentRef = _b.componentRef, className = _b.className, _j = _b.tileSize, tileSize = _j === void 0 ? 'large' : _j, contentSize = _b.contentSize, ariaLabel = _b.ariaLabel, descriptionAriaLabel = _b.descriptionAriaLabel, href = _b.href, onClick = _b.onClick, download = _b.download, hrefLang = _b.hrefLang, media = _b.media, rel = _b.rel, target = _b.target, isFluentStyling = _b.isFluentStyling, ariaLabelSelected = _b.ariaLabelSelected, nameplateOnlyOnHover = _b.nameplateOnlyOnHover, divProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["children", "selectionIndex", "invokeSelection", "selection", "background", "foreground", "showBackgroundFrame", "showForegroundFrame", "hideBackground", "hideForeground", "itemName", "itemActivity", "componentRef", "className", "tileSize", "contentSize", "ariaLabel", "descriptionAriaLabel", "href", "onClick", "download", "hrefLang", "media", "rel", "target", "isFluentStyling", "ariaLabelSelected", "nameplateOnlyOnHover"]);
        var _k = this.state, _l = _k.isSelected, isSelected = _l === void 0 ? false : _l, _m = _k.isModal, isModal = _m === void 0 ? false : _m;
        var _o = this.props.isSelectable, isSelectable = _o === void 0 ? !!selection && selectionIndex > -1 : _o;
        var isInvokable = (!!href || !!onClick || !!invokeSelection) && !isModal;
        var ariaLabelWithSelectState = isSelected && ariaLabelSelected ? ariaLabel + ", " + ariaLabelSelected : ariaLabel;
        var content = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            ariaLabel ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "label", id: this._labelId, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-label', _Tile_scss__WEBPACK_IMPORTED_MODULE_5__["label"]) }, ariaLabelWithSelectState)) : null,
            background
                ? this._onRenderBackground({
                    background: background,
                    hideBackground: hideBackground,
                })
                : null,
            foreground
                ? this._onRenderForeground({
                    foreground: foreground,
                    hideForeground: hideForeground,
                })
                : null,
            itemName || itemActivity
                ? this._onRenderNameplate({
                    name: itemName,
                    activity: itemActivity,
                    onlyOnHover: !!nameplateOnlyOnHover,
                })
                : null));
        var LinkAs = href ? 'a' : onClick ? 'button' : 'span';
        var link = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LinkAs, { href: href, onClick: onClick, download: download, hrefLang: hrefLang, media: media, target: target, rel: rel === undefined ? (href && target ? 'noopener' : undefined) : rel, ref: this.props.linkRef, "data-selection-invoke": isInvokable && selectionIndex > -1 ? true : undefined, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-link', TileStyles.link) }, content));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "aria-selected": isSelected }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getNativeProps"])(divProps, _Utilities__WEBPACK_IMPORTED_MODULE_4__["divProperties"]), { "aria-labelledby": ariaLabel ? this._labelId : this._nameId, "aria-describedby": ariaLabelWithSelectState ? this._descriptionId : this._activityId, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile', className, TileStyles.tile, (_a = {},
                _a["ms-Tile--isSmall " + TileStyles.isSmall] = tileSize === 'small',
                _a["ms-Tile--isLarge " + TileStyles.isLarge] = tileSize === 'large',
                _a["ms-Tile--hasBackgroundFrame " + TileStyles.hasBackgroundFrame] = showBackgroundFrame,
                _a["ms-Tile--hasForegroundFrame " + TileStyles.hasForegroundFrame] = showForegroundFrame,
                _a["ms-Tile--isSelected " + TileStyles.selected + " " + SignalStyles.selected] = isSelected,
                _a["ms-Tile--isSelectable " + TileStyles.selectable] = isSelectable,
                _a["ms-Tile--hasBackground " + TileStyles.hasBackground] = !!background,
                _a[SignalStyles.dark] = !!background && !hideBackground,
                _a["ms-Tile--showBackground " + TileStyles.showBackground] = !hideBackground,
                _a["ms-Tile--invokable " + TileStyles.invokable] = isInvokable,
                _a["ms-Tile--uninvokable " + TileStyles.uninvokable] = !isInvokable,
                _a["ms-Tile--isDisabled " + TileStyles.disabled] = !isSelectable && !isInvokable,
                _a["ms-Tile--showCheck " + TileStyles.showCheck] = isModal,
                _a["ms-Tile--isFluentStyling " + TileStyles.isFluentStyling] = isFluentStyling,
                _a)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-disable-click-on-enter": true, "data-selection-index": selectionIndex > -1 ? selectionIndex : undefined, "data-selection-touch-invoke": isInvokable && selectionIndex > -1 ? true : undefined }),
            link,
            descriptionAriaLabel ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "description", id: this._descriptionId, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-description', _Tile_scss__WEBPACK_IMPORTED_MODULE_5__["description"]) }, descriptionAriaLabel)) : null,
            isSelectable
                ? this._onRenderCheck({
                    isSelected: isSelected,
                })
                : null));
    };
    Tile.prototype._onRenderBackground = function (_a) {
        var _b;
        var background = _a.background, hideBackground = _a.hideBackground;
        var finalBackground = typeof background === 'function' ? background(getTileLayoutFromProps(this.props)) : background;
        return finalBackground ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "background", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-background', TileStyles.background, (_b = {},
                _b["ms-Tile-background--hide " + TileStyles.backgroundHide] = hideBackground,
                _b)) }, finalBackground)) : null;
    };
    Tile.prototype._onRenderForeground = function (_a) {
        var _b;
        var foreground = _a.foreground, hideForeground = _a.hideForeground;
        var finalForeground = typeof foreground === 'function' ? foreground(getTileLayoutFromProps(this.props)) : foreground;
        return finalForeground ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "foreground", role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-aboveNameplate', TileStyles.aboveNameplate) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-content', TileStyles.content) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-foreground', TileStyles.foreground, (_b = {},
                        _b["ms-Tile-foreground--hide " + TileStyles.foregroundHide] = hideForeground,
                        _b)) }, finalForeground)))) : null;
    };
    Tile.prototype._onRenderNameplate = function (_a) {
        var _b, _c, _d;
        var name = _a.name, activity = _a.activity, onlyOnHover = _a.onlyOnHover;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "nameplate", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-nameplate', TileStyles.nameplate, (_b = {}, _b[TileStyles.onlyOnHover] = onlyOnHover, _b)) },
            name ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: this._nameId, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-name', TileStyles.name, (_c = {}, _c[TileStyles.onlyOnHover] = onlyOnHover, _c)) }, name)) : null,
            activity ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: this._activityId, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-activity', TileStyles.activity, (_d = {}, _d[TileStyles.onlyOnHover] = onlyOnHover, _d)) }, activity)) : null));
    };
    Tile.prototype._onRenderCheck = function (_a) {
        var _b;
        var isSelected = _a.isSelected;
        var toggleSelectionAriaLabel = this.props.toggleSelectionAriaLabel;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: "check", role: "checkbox", "aria-label": toggleSelectionAriaLabel, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])('ms-Tile-check', TileStyles.check, CheckStyles.checkHost, (_b = {},
                _b[CheckStyles.hostShowCheck] = this.state.isModal,
                _b)), "data-selection-toggle": true, "aria-checked": isSelected },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Check__WEBPACK_IMPORTED_MODULE_2__["Check"], { checked: isSelected })));
    };
    return Tile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getTileLayout(tileElement) {
    var tileProps = tileElement.props;
    return getTileLayoutFromProps(tileProps);
}
function getTileLayoutFromProps(tileProps) {
    var contentSize = tileProps.contentSize, _a = tileProps.tileSize, tileSize = _a === void 0 ? 'large' : _a;
    if (!contentSize) {
        return {};
    }
    var width = contentSize.width;
    var _b = TileLayoutSizes[tileSize], nameplatePadding = _b.nameplatePadding, nameplateMargin = _b.nameplateMargin, nameplateActivityHeight = _b.nameplateActivityHeight, nameplateNameHeight = _b.nameplateNameHeight, foregroundMargin = _b.foregroundMargin;
    var nameplateHeight = 0;
    if (tileProps.itemName || tileProps.itemActivity) {
        nameplateHeight += nameplatePadding * 2; // 12px top/bottom padding.
        if (tileProps.itemName) {
            nameplateHeight += nameplateNameHeight;
        }
        if (tileProps.itemActivity) {
            nameplateHeight += nameplateActivityHeight + nameplateMargin;
        }
    }
    return {
        foregroundSize: {
            width: width - foregroundMargin * 2,
            height: contentSize.height - foregroundMargin - nameplateHeight,
        },
        backgroundSize: contentSize,
    };
}
function renderTileWithLayout(tileElement, props) {
    var Tag = tileElement.type;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tileElement.props, props));
}
//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "dgKW":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Shimmer.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Shimmer.js


/***/ }),

/***/ "ekk/":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Text/Text.view.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: TextView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return TextView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Foundation */ "/dre");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");

/** @jsx withSlots */



var TextView = function (props) {
    if (react__WEBPACK_IMPORTED_MODULE_1__["Children"].count(props.children) === 0) {
        return null;
    }
    var block = props.block, className = props.className, _a = props.as, RootType = _a === void 0 ? 'span' : _a, variant = props.variant, nowrap = props.nowrap, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["block", "className", "as", "variant", "nowrap"]);
    var Slots = Object(_Foundation__WEBPACK_IMPORTED_MODULE_2__["getSlots"])(props, {
        root: RootType,
    });
    return Object(_Foundation__WEBPACK_IMPORTED_MODULE_2__["withSlots"])(Slots.root, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(rest, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"])));
};
//# sourceMappingURL=Text.view.js.map

/***/ }),

/***/ "f3H6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/spInTeams/SPInTeamsDataSource.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: SPInTeamsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPInTeamsDataSource", function() { return SPInTeamsDataSource; });
/* harmony import */ var _ISPListsInTeamsDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ISPListsInTeamsDataSource */ "PZDL");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _SPListsInTeamsDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPListsInTeamsDataSource */ "sAjO");
/* harmony import */ var _SPPagesInTeamsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SPPagesInTeamsDataSource */ "3oO6");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");





var SPInTeamsDataSource = /** @class */ (function () {
    function SPInTeamsDataSource(pageContext) {
        var _this = this;
        if (pageContext === void 0) { pageContext = undefined; }
        this._listsTeamsDataSource = undefined;
        this._pagesTeamsDataSource = undefined;
        this._pageContext = undefined;
        this.ListAllItemsPath = '/_layouts/15/listallitems.aspx?app=teamsPages&listUrl=';
        this.DocLibSplitString = '/Forms/AllItems.aspx';
        this._processLists = function (lists) {
            try {
                var processedLists = lists.map(function (customList) {
                    var url = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(_this._currentSeverUrl, customList.DefaultViewUrl) + '?p=11';
                    return {
                        itemType: 0 /* List */,
                        webUrl: _this._transformListsUrl(url),
                        title: customList.Title,
                        author: {
                            name: customList.Author.Title,
                            profileImageSrc: undefined
                        },
                        modifiedDate: customList.LastItemModifiedDate,
                        uniqueId: customList.uniqueId
                    };
                });
                return processedLists;
            }
            catch (error) {
                throw error;
            }
        };
        this._filterDocLibs = function (docLib) {
            if (docLib.DefaultViewUrl.match(/.+\/Forms\/AllItems\.aspx.*/i)) {
                return true;
            }
            return false;
        };
        this._processDocLibs = function (lists) {
            try {
                var processedLists = lists
                    .filter(_this._filterDocLibs)
                    .map(function (customList) {
                    var url = '';
                    if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('5f5c4183-b5e2-4405-866f-2008d6f02219', '09/10/2020', 'New Doclib experience')) {
                        var path = customList.DefaultViewUrl.split(_this.DocLibSplitString)[0];
                        url = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(_this._currentSeverUrl, path);
                    }
                    else {
                        url = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_1__["default"].concatenate(_this._currentSeverUrl, customList.DefaultViewUrl) + '?p=11';
                    }
                    return {
                        itemType: 3 /* DocLib */,
                        webUrl: url,
                        title: customList.Title,
                        author: {
                            name: customList.Author.Title,
                            profileImageSrc: undefined
                        },
                        modifiedDate: customList.LastItemModifiedDate,
                        uniqueId: customList.uniqueId
                    };
                });
                return processedLists;
            }
            catch (error) {
                throw error;
            }
        };
        this.getSharePointLists = function () {
            return _this._listsTeamsDataSource
                .getSharePointLists(_ISPListsInTeamsDataSource__WEBPACK_IMPORTED_MODULE_0__["ListType"].List)
                .then(function (response) { return _this._processLists(response); });
        };
        this.getSharePointPages = function () {
            return _this._pagesTeamsDataSource.getSharePointPages();
        };
        this.getSharePointDocLibs = function () {
            return _this._listsTeamsDataSource
                .getSharePointLists(_ISPListsInTeamsDataSource__WEBPACK_IMPORTED_MODULE_0__["ListType"].DocLib)
                .then(function (response) { return _this._processDocLibs(response); });
        };
        this._pageContext = pageContext;
        this._listsTeamsDataSource = new _SPListsInTeamsDataSource__WEBPACK_IMPORTED_MODULE_2__["SPListsInTeamsDataSource"](this._currentSiteCollectionUrl);
        this._pagesTeamsDataSource = new _SPPagesInTeamsDataSource__WEBPACK_IMPORTED_MODULE_3__["SPPagesInTeamsDataSource"](this._currentSiteCollectionUrl);
    }
    Object.defineProperty(SPInTeamsDataSource.prototype, "_currentSeverUrl", {
        get: function () {
            return window.location.origin.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPInTeamsDataSource.prototype, "_currentSiteCollectionUrl", {
        get: function () {
            if (!this._pageContext) {
                return window.location.href.toLowerCase().split('?')[0].split('_layouts/15')[0];
            }
            else {
                return this._pageContext.webAbsoluteUrl;
            }
        },
        enumerable: true,
        configurable: true
    });
    SPInTeamsDataSource.prototype._transformListsUrl = function (url) {
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('ab17beb1-29db-4af6-8428-00aa9da89da8', '09/15/2020', 'New Lists experience')) {
            var urlPart = url.split('/Lists')[0];
            var listUrlPath = new URL(url).pathname;
            return urlPart + this.ListAllItemsPath + listUrlPath;
        }
        else {
            return url;
        }
    };
    return SPInTeamsDataSource;
}());

//# sourceMappingURL=SPInTeamsDataSource.js.map

/***/ }),

/***/ "fkyk":
/*!*********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/images/News.png ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "News_528dee777f8d060609bcc02d1af200ef.png";

/***/ }),

/***/ "gnd0":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/Utilities.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));

//# sourceMappingURL=Utilities.js.map

/***/ }),

/***/ "kw+B":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/FolderTile.scss.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: blankFolderCover, tile, tileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankFolderCover", function() { return blankFolderCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tile", function() { return tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileContainer", function() { return tileContainer; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".blankFolderCover_c7ccf13d{background:transparent;display:inline-block}.tile_c7ccf13d{background:transparent}.tileContainer_c7ccf13d{width:120px;height:96px}\n" }]);
var blankFolderCover = "blankFolderCover_c7ccf13d";
var tile = "tile_c7ccf13d";
var tileContainer = "tileContainer_c7ccf13d";
//# sourceMappingURL=FolderTile.scss.js.map

/***/ }),

/***/ "lwzg":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Text/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: Text, TextView, TextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "Di2w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var _Text_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.view */ "ekk/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return _Text_view__WEBPACK_IMPORTED_MODULE_1__["TextView"]; });

/* harmony import */ var _Text_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.styles */ "3o4I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextStyles", function() { return _Text_styles__WEBPACK_IMPORTED_MODULE_2__["TextStyles"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "mmsU":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/SPTeamifyResource.scss.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: ms_teamifyResource, selected, ms_teamifyResource_checkCircle, error, ms_teamifyResource_focusZone, ms_teamifyResource_error, ms_teamifyResource_thumbnail, thumbnail_container, icon, ms_teamifyResource_title, ms_teamifyResource_info, ms_teamifyResource_modifiedTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource", function() { return ms_teamifyResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selected", function() { return selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_checkCircle", function() { return ms_teamifyResource_checkCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_focusZone", function() { return ms_teamifyResource_focusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_error", function() { return ms_teamifyResource_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_thumbnail", function() { return ms_teamifyResource_thumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thumbnail_container", function() { return thumbnail_container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_title", function() { return ms_teamifyResource_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_info", function() { return ms_teamifyResource_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyResource_modifiedTime", function() { return ms_teamifyResource_modifiedTime; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms_teamifyResource_41ae8709{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:180px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0px 5px 5px 0px;padding-bottom:12px;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;position:relative}.ms_teamifyResource_41ae8709.selected_41ae8709{background-color:#ecebe9}.ms_teamifyResource_41ae8709.selected_41ae8709 .ms_teamifyResource_checkCircle_41ae8709{visibility:visible}.ms_teamifyResource_41ae8709.error_41ae8709{border:1px solid #a80000}.ms_teamifyResource_41ae8709:active{-webkit-transform:scale(0.9);transform:scale(0.9)}.ms_teamifyResource_41ae8709:hover{background-color:#f3f2f1}.ms_teamifyResource_41ae8709:hover .ms_teamifyResource_checkCircle_41ae8709{visibility:visible}.ms_teamifyResource_focusZone_41ae8709{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms_teamifyResource_checkCircle_41ae8709{position:absolute;right:0px;padding:5px;visibility:hidden}.ms_teamifyResource_error_41ae8709{color:red;font-size:18px}.ms_teamifyResource_thumbnail_41ae8709{margin-bottom:10px;height:96px;position:relative;margin-top:33px}.ms_teamifyResource_thumbnail_41ae8709 .thumbnail_container_41ae8709{width:120px;height:85px}.ms_teamifyResource_thumbnail_41ae8709 .thumbnail_container_41ae8709.icon_41ae8709{width:96px;height:96px;background:white;border:2px solid #ffffff;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 3px 1px rgba(1,1,0,0.05);box-shadow:0 1px 3px 1px rgba(1,1,0,0.05)}.ms_teamifyResource_title_41ae8709{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;padding:0px 10px 0px 10px}.ms_teamifyResource_title_41ae8709.selected_41ae8709{font-weight:600}.ms_teamifyResource_info_41ae8709{font-size:12px;margin-right:5px}.ms_teamifyResource_modifiedTime_41ae8709{font-size:12px;font-weight:400}\n" }]);
var ms_teamifyResource = "ms_teamifyResource_41ae8709";
var selected = "selected_41ae8709";
var ms_teamifyResource_checkCircle = "ms_teamifyResource_checkCircle_41ae8709";
var error = "error_41ae8709";
var ms_teamifyResource_focusZone = "ms_teamifyResource_focusZone_41ae8709";
var ms_teamifyResource_error = "ms_teamifyResource_error_41ae8709";
var ms_teamifyResource_thumbnail = "ms_teamifyResource_thumbnail_41ae8709";
var thumbnail_container = "thumbnail_container_41ae8709";
var icon = "icon_41ae8709";
var ms_teamifyResource_title = "ms_teamifyResource_title_41ae8709";
var ms_teamifyResource_info = "ms_teamifyResource_info_41ae8709";
var ms_teamifyResource_modifiedTime = "ms_teamifyResource_modifiedTime_41ae8709";
//# sourceMappingURL=SPTeamifyResource.scss.js.map

/***/ }),

/***/ "pAlt":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Text.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: Text, TextView, TextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Text_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Text/index */ "lwzg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components_Text_index__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return _components_Text_index__WEBPACK_IMPORTED_MODULE_0__["TextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextStyles", function() { return _components_Text_index__WEBPACK_IMPORTED_MODULE_0__["TextStyles"]; });


//# sourceMappingURL=Text.js.map

/***/ }),

/***/ "qSlx":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/AccessibilityManager.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: AccessibilityManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityManager", function() { return AccessibilityManager; });
var AccessibilityManager = /** @class */ (function () {
    function AccessibilityManager(selectItem, deselectItem) {
        var _this = this;
        this.setGridItems = function (items) {
            _this._gridItems = items;
        };
        this.setActivePivotIndex = function (index) {
            _this._activePivotIndex = index;
        };
        this.setActiveIndex = function (index) {
            _this._prevActiveIndex = _this._activeIndex;
            _this._activeIndex = index;
        };
        this._selectItems = function () {
            var index = _this._prevActiveIndex;
            var endIndex = _this._activeIndex;
            var items = _this._gridItems.get(_this._activePivotIndex) || [];
            if (items.length > 0) {
                if (endIndex - index > 0) {
                    while (index <= endIndex) {
                        _this._selectItem(items[index]);
                        index++;
                    }
                }
                else {
                    while (index >= endIndex) {
                        _this._deselectItem(items[index]);
                        index--;
                    }
                }
            }
        };
        this._keyMapper = function (key) {
            switch (key) {
                case 'ArrowRight':
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'ArrowDown':
                    _this._selectItems();
                    break;
            }
        };
        this._checkForMatch = function (key) {
            return (_this._keysPressed.get(AccessibilityManager.ShiftKey) && _this._keysPressed.get(key)) || false;
        };
        this._keysPressed = new Map();
        this._prevActiveIndex = 0;
        this._activeIndex = 0;
        this._gridItems = new Map();
        this._activePivotIndex = 0;
        this._selectItem = selectItem;
        this._deselectItem = deselectItem;
        document.addEventListener('keydown', function (event) {
            _this._keysPressed.set(event.key, true);
            if (AccessibilityManager.ArrowKeys.includes(event.key)) {
                if (_this._checkForMatch(event.key)) {
                    _this._keyMapper(event.key);
                }
            }
        });
        document.addEventListener('keyup', function (event) {
            _this._keysPressed.delete(event.key);
        });
    }
    AccessibilityManager.ArrowKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
    AccessibilityManager.ShiftKey = 'Shift';
    return AccessibilityManager;
}());

//# sourceMappingURL=AccessibilityManager.js.map

/***/ }),

/***/ "sAjO":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/spInTeams/SPListsInTeamsDataSource.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: SPListsInTeamsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPListsInTeamsDataSource", function() { return SPListsInTeamsDataSource; });
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");


var SPListsInTeamsDataSource = /** @class */ (function () {
    function SPListsInTeamsDataSource(siteCollectionUrl) {
        var _this = this;
        this.CurrentSiteCollectionUrl = undefined;
        this._handleErrors = function (response) {
            if (response.ok) {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success });
            }
            else if ((response.status >= 200 && response.status <= 299) ||
                (response.status >= 400 && response.status <= 499)) {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].ExpectedFailure });
            }
            else {
                _this._monitor.end({ resultType: _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure });
            }
        };
        this.CurrentSiteCollectionUrl = siteCollectionUrl;
    }
    SPListsInTeamsDataSource.prototype.getSharePointLists = function (listType, retries) {
        var _this = this;
        if (retries === void 0) { retries = 3; }
        var filter = "$filter=Hidden eq false and BaseTemplate eq " + listType;
        var fetchUrl = _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_0__["default"].concatenate(this.CurrentSiteCollectionUrl, SPListsInTeamsDataSource.apiUrl) + "?" + SPListsInTeamsDataSource.select + "&" + filter + "&" + SPListsInTeamsDataSource.orderBy;
        var headers = new Headers();
        this._monitor = new _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]({ name: 'Teamify._fetchLists' });
        try {
            // Provide an accept header override to return JSON and minimize payload size
            // https://www.microsoft.com/en-us/microsoft-365/blog/2014/08/13/json-light-support-rest-sharepoint-api-released/
            headers.append('Accept', 'application/json;odata=nometadata');
            return fetch(fetchUrl, {
                method: 'GET',
                headers: headers,
                credentials: 'include'
            })
                .then(function (response) {
                _this._handleErrors(response);
                return response.json();
            })
                .then(function (responsejson) {
                return responsejson.value;
            })
                .catch(function (error) {
                if (retries > 0) {
                    _this.getSharePointLists(listType, retries - 1);
                }
                throw error;
            });
        }
        catch (error) {
            throw error;
        }
    };
    SPListsInTeamsDataSource.select = '$select=BaseTemplate,DefaultViewUrl,Title,LastItemModifiedDate,UniqueId,Author&$expand=Author/Title';
    SPListsInTeamsDataSource.apiUrl = '/_api/web/lists';
    SPListsInTeamsDataSource.orderBy = '$orderby=LastItemModifiedDate desc';
    return SPListsInTeamsDataSource;
}());

//# sourceMappingURL=SPListsInTeamsDataSource.js.map

/***/ }),

/***/ "tvKE":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/experiments@7.38.2_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/experiments/lib/components/Tile/ShimmerTile/ShimmerTile.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
function getStyles(props) {
    return {
        root: [
            'ms-ShimmerTile-root',
            {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            },
        ],
    };
}
//# sourceMappingURL=ShimmerTile.styles.js.map

/***/ }),

/***/ "xs0v":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/teamify@1.0.272_078bb01e0c4e433dbeb6410f4127eb9f/node_modules/@ms/teamify/lib/TeamifyWizard.scss.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: ms_teamifyWizard_image, ms_teamifyWizard_header, ms_panel_back, ms_panel_header_text, contentContainer, content, ms_teamifyWizard_second_header, ms_teamifyWizard_points, icon, ms_teamifyWizard_resources_container, ms_teamifyWizard_grid, ms_TeamifyWizard_Grid_Row, ms_teamifyWizard_footer, ms_teamifyWizard_button, ms_teamifyWizard_footer_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_image", function() { return ms_teamifyWizard_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_header", function() { return ms_teamifyWizard_header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_panel_back", function() { return ms_panel_back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_panel_header_text", function() { return ms_panel_header_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentContainer", function() { return contentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_second_header", function() { return ms_teamifyWizard_second_header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_points", function() { return ms_teamifyWizard_points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_resources_container", function() { return ms_teamifyWizard_resources_container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_grid", function() { return ms_teamifyWizard_grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_TeamifyWizard_Grid_Row", function() { return ms_TeamifyWizard_Grid_Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_footer", function() { return ms_teamifyWizard_footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_button", function() { return ms_teamifyWizard_button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms_teamifyWizard_footer_page", function() { return ms_teamifyWizard_footer_page; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms_teamifyWizard_image_b5fa56ea{width:413px;height:293px;margin-left:120px;margin-top:48px}.ms_teamifyWizard_header_b5fa56ea{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0px 24px 0px 0px;position:absolute;left:24px}.ms_teamifyWizard_header_b5fa56ea .ms_panel_back_b5fa56ea{font-size:16px;color:#106ebe;margin:5px 25px 0px 0px;cursor:pointer}.ms_teamifyWizard_header_b5fa56ea .ms_panel_header_text_b5fa56ea{font-size:20px;font-weight:600;line-height:27px}.contentContainer_b5fa56ea{height:calc(100vh - 135px);overflow:hidden}.content_b5fa56ea{margin-top:24px}.ms_teamifyWizard_second_header_b5fa56ea{font-size:18px;font-weight:600}.ms_teamifyWizard_points_b5fa56ea{font-size:16px;margin:5px 0px 5px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.icon_b5fa56ea{margin:5px 5px 0px 0px}.ms_teamifyWizard_resources_container_b5fa56ea{margin-top:40px}.ms_teamifyWizard_grid_b5fa56ea{margin-top:20px;overflow-y:auto;position:relative;height:calc(100vh - 379px)}.ms_TeamifyWizard_Grid_Row_b5fa56ea{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ms_teamifyWizard_footer_b5fa56ea{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ms_teamifyWizard_button_b5fa56ea{margin:0 5px 0 5px}hr{display:block;height:1px;border:0;border-top:1px solid #efeeec;margin:1em 0;padding:0}.ms_teamifyWizard_footer_page_b5fa56ea{display:table-cell;vertical-align:middle}\n" }]);
var ms_teamifyWizard_image = "ms_teamifyWizard_image_b5fa56ea";
var ms_teamifyWizard_header = "ms_teamifyWizard_header_b5fa56ea";
var ms_panel_back = "ms_panel_back_b5fa56ea";
var ms_panel_header_text = "ms_panel_header_text_b5fa56ea";
var contentContainer = "contentContainer_b5fa56ea";
var content = "content_b5fa56ea";
var ms_teamifyWizard_second_header = "ms_teamifyWizard_second_header_b5fa56ea";
var ms_teamifyWizard_points = "ms_teamifyWizard_points_b5fa56ea";
var icon = "icon_b5fa56ea";
var ms_teamifyWizard_resources_container = "ms_teamifyWizard_resources_container_b5fa56ea";
var ms_teamifyWizard_grid = "ms_teamifyWizard_grid_b5fa56ea";
var ms_TeamifyWizard_Grid_Row = "ms_TeamifyWizard_Grid_Row_b5fa56ea";
var ms_teamifyWizard_footer = "ms_teamifyWizard_footer_b5fa56ea";
var ms_teamifyWizard_button = "ms_teamifyWizard_button_b5fa56ea";
var ms_teamifyWizard_footer_page = "ms_teamifyWizard_footer_page_b5fa56ea";
//# sourceMappingURL=TeamifyWizard.scss.js.map

/***/ }),

/***/ "zpHR":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Check/Check.scss.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: root, rootIsChecked, check, checkHost, circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootIsChecked", function() { return rootIsChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkHost", function() { return checkHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".root_351739b8{line-height:1;width:18px;height:18px;vertical-align:top;position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.root_351739b8:before{content:'';position:absolute;left:1px;right:1px;bottom:1px;top:1px;border-radius:50%;opacity:1;background:" }, { "theme": "bodyBackground", "defaultValue": "#ffffff" }, { "rawString": "}.root_351739b8.rootIsChecked_351739b8:before{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";opacity:1}@media screen and (-ms-high-contrast:active){.root_351739b8.rootIsChecked_351739b8:before{background:Window}}.root_351739b8 .check_351739b8{opacity:0}.checkHost_351739b8:focus .root_351739b8 .check_351739b8,.checkHost_351739b8:hover .root_351739b8 .check_351739b8,.root_351739b8.rootIsChecked_351739b8 .check_351739b8,.root_351739b8:focus .check_351739b8,.root_351739b8:hover .check_351739b8{opacity:1}.check_351739b8,.circle_351739b8{font-size:18px;position:absolute;left:0;top:0;width:18px;height:18px;text-align:center;vertical-align:middle}.circle_351739b8{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.circle_351739b8{color:WindowText}}.rootIsChecked_351739b8 .circle_351739b8{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.check_351739b8{color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";font-size:16px;left:.5px}@media screen and (-ms-high-contrast:active){.check_351739b8{-ms-high-contrast-adjust:none}}.rootIsChecked_351739b8 .check_351739b8{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:900}@media screen and (-ms-high-contrast:active){.rootIsChecked_351739b8 .check_351739b8{border:none;color:WindowText}}" }]);
var root = "root_351739b8";
var rootIsChecked = "rootIsChecked_351739b8";
var check = "check_351739b8";
var checkHost = "checkHost_351739b8";
var circle = "circle_351739b8";
//# sourceMappingURL=Check.scss.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~teamifywizard.deferred_[locale].js.map