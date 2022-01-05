(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["teamscustomutil"],{

/***/ "DgFN":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/CompositeHeader/subComponents/TeamsCustomActionsUtil.js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: onCopyLinkButtonClick, onRefreshButtonClick, onGoToBrowserButtonClick, teamsContextualMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCopyLinkButtonClick", function() { return onCopyLinkButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRefreshButtonClick", function() { return onRefreshButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGoToBrowserButtonClick", function() { return onGoToBrowserButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsContextualMenuItems", function() { return teamsContextualMenuItems; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CompositeHeader.resx */ "tDcW");
/* harmony import */ var _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");



function onCopyLinkButtonClick(ev) {
    var element = document.createElement('input');
    document.body.appendChild(element);
    element.value = _convertUrlOriginalFormat();
    element.select();
    try {
        var successful = document.execCommand('copy');
        document.body.removeChild(element);
        var msg = successful ? 'successful' : 'unsuccessful';
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.CopyLinkButtonClicked.' + msg });
    }
    catch (err) {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.CopyLinkFailed:' + err.toString() });
    }
}
function onRefreshButtonClick(ev) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.RefreshButtonClicked' });
    window.location.reload();
}
function onGoToBrowserButtonClick(ev) {
    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.GoToBrowserButtonClicked' });
    window.open(_convertUrlOriginalFormat(), '_BLANK');
}
function _convertUrlOriginalFormat() {
    var currentUrl = window.location.href;
    currentUrl = _removeURLParameter(currentUrl, 'app');
    if (typeof URLSearchParams !== 'undefined') {
        // If its a doclib link, converting it to original doc lib link
        currentUrl = _convertDoclibUrlToWebUrl(currentUrl);
    }
    else {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'TeamsSiteHeader.convertUrlOriginalFormat Doesnt support URLSearchParam' });
    }
    return currentUrl;
}
// To convert doclib url from listAllItems to allItems
function _convertDoclibUrlToWebUrl(currentUrl) {
    if (currentUrl.toLocaleLowerCase().includes('/listallitems.aspx')) {
        var url = new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__["default"](currentUrl);
        var urlparts = currentUrl.split('?');
        if (urlparts.length >= 2) {
            var params = new URLSearchParams(urlparts[1]);
            var listUrl = params.get('listUrl');
            params.delete('listUrl'); // Removing the listUrl query parm
            currentUrl = decodeURIComponent(url.authority +
                listUrl +
                (params.toString() ? (listUrl.indexOf('?') !== -1 ? '&' : '?') + params.toString() : ""));
            currentUrl = _AddingQSPToOpenAsModernPage(currentUrl);
        }
    }
    return currentUrl;
}
// For few Urls we have seen QSP for displaying as modern page is not proper
function _AddingQSPToOpenAsModernPage(url) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var params = new URLSearchParams(urlparts[1]);
        params.has('p') ? params.set('p', '1') : params.append('p', '1');
        return decodeURIComponent(urlparts[0] + '?' + params.toString());
    }
    return url + '?p=1';
}
function _removeURLParameter(url, parameter) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var params = new URLSearchParams(urlparts[1]);
        params.delete(parameter);
        return decodeURIComponent(urlparts[0] + (params.toString() ? '?' + params.toString() : ""));
    }
    return url;
}
function teamsContextualMenuItems() {
    var actionItems = [];
    var CopyLinkMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.copyLinkLabel,
        key: 'CopyLink',
        iconProps: { iconName: 'Link' },
        onClick: onCopyLinkButtonClick
    };
    actionItems.push(CopyLinkMenuItem);
    var RefreshMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.refreshLabel,
        key: 'Refresh',
        iconProps: { iconName: 'Refresh' },
        onClick: onRefreshButtonClick
    };
    actionItems.push(RefreshMenuItem);
    var GotoBrowserMenuItem = {
        name: _CompositeHeader_resx__WEBPACK_IMPORTED_MODULE_1___default.a.openInBrowserLabel,
        key: 'GotoBrowser',
        iconProps: { iconName: 'Globe' },
        onClick: onGoToBrowserButtonClick
    };
    actionItems.push(GotoBrowserMenuItem);
    return actionItems;
}
//# sourceMappingURL=TeamsCustomActionsUtil.js.map

/***/ }),

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"]; });

// Loading @ms/odsp-utilities/./lib/uri/SimpleUri.js



/***/ })

}]);
//# sourceMappingURL=chunk.teamscustomutil_none.js.map