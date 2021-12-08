(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["spcx-knowledgeHubHardCodedLink"],{

/***/ "BdQi":
/*!********************************************************************************!*\
  !*** ./lib/chunks/spcx-knowledgeHubHardCodedLink/KnowledgeHubHardCodedLink.js ***!
  \********************************************************************************/
/*! exports provided: KnowledgeHubHardCodedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeHubHardCodedLink", function() { return KnowledgeHubHardCodedLink; });
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _KnowledgeHubHardCodedLink_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowledgeHubHardCodedLink.resx */ "QBM4");
var _KnowledgeHubHardCodedLink_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./KnowledgeHubHardCodedLink.resx */ "QBM4", 1);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");
/* harmony import */ var _common_TopicUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/TopicUtilities */ "x74c");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */






/* TODO: Remove this harcodign when code is moved to provison code
 https://dev.azure.com/onedrive/CSI/_queries/edit/892507/?triage=true */
function KnowledgeHubHardCodedLink(origLink, pageContext) {
    var quickLunchNodeKey = 1025;
    var knowledgeHubSiteUrl = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_5__["_getKnowledgeHubUrl"])(pageContext);
    var isKnowledgeCenter = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_5__["_isSiteKnowledgeCenter"])(pageContext);
    var shouldEnableLinks = Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isFixKnowledgeCenterNavLinkPermssionFixActivated"])() ||
        (!!pageContext.webPermMasks &&
            new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"](pageContext.webPermMasks).hasPermission(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["SPPermission"].manageWeb) &&
            // tslint:disable-next-line:no-any
            Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_1__["isCortexEnabled"])(pageContext));
    if (knowledgeHubSiteUrl === undefined || !isKnowledgeCenter || !shouldEnableLinks) {
        return origLink;
    }
    var nodesIds = new Set();
    origLink.map(function (node) {
        nodesIds.add(node.Id);
    });
    if (!nodesIds.has(_common_Constants__WEBPACK_IMPORTED_MODULE_4__["GETTINGSTARTEDID"])) {
        var gettingStartedUrl = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_5__["_getKnowledgeCenterTabUri"])(knowledgeHubSiteUrl, _common_Constants__WEBPACK_IMPORTED_MODULE_4__["gettingStartedParameter"]).toString();
        origLink.push({
            Id: _common_Constants__WEBPACK_IMPORTED_MODULE_4__["GETTINGSTARTEDID"],
            Title: _KnowledgeHubHardCodedLink_resx__WEBPACK_IMPORTED_MODULE_2__["GettingStarted"],
            Url: gettingStartedUrl,
            IsDocLib: false,
            IsExternal: false,
            Children: [],
            ParentId: quickLunchNodeKey
        });
    }
    if (!nodesIds.has(_common_Constants__WEBPACK_IMPORTED_MODULE_4__["MANAGETOPICSID"])) {
        var manageTopicsUrl = Object(_common_TopicUtilities__WEBPACK_IMPORTED_MODULE_5__["_getKnowledgeCenterTabUri"])(knowledgeHubSiteUrl, _common_Constants__WEBPACK_IMPORTED_MODULE_4__["manageTopicsParameter"]).toString();
        origLink.push({
            Id: _common_Constants__WEBPACK_IMPORTED_MODULE_4__["MANAGETOPICSID"],
            Title: _KnowledgeHubHardCodedLink_resx__WEBPACK_IMPORTED_MODULE_2__["ManageTopics"],
            Url: manageTopicsUrl,
            IsDocLib: false,
            IsExternal: false,
            Children: [],
            ParentId: quickLunchNodeKey
        });
    }
    return origLink;
}


/***/ }),

/***/ "QBM4":
/*!**********************************************************************************!*\
  !*** ./lib/chunks/spcx-knowledgeHubHardCodedLink/KnowledgeHubHardCodedLink.resx ***!
  \**********************************************************************************/
/*! exports provided: GettingStarted, ManageTopics, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"GettingStarted\":\"[!!--##Ĝēţ śţàŕţēď##--!!]\",\"ManageTopics\":\"[!!--##Màńàĝē ţōƥĩćś##--!!]\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.spcx-knowledgeHubHardCodedLink_[locale].js.map