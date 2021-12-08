(window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] = window["webpackJsonp_8404d628_4817_4b3a_883e_1c5a4d07892e_1_11_0"] || []).push([["sp-rte-wikipagesuggestions"],{

/***/ "SnrF":
/*!***********************************************!*\
  !*** ./lib/rte/ckeditor/CKPagePicker.scss.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CKPagePicker.css */ "topo");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "eIS1":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/rte/ckeditor/CKPagePicker.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".suggestionItemContainer{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;box-sizing:border-box;width:100%;position:relative;max-height:30px}.suggestionItemContainer:hover:not([data-id=EMPTY_TOPIC_SUGGESTION_ID]){background-color:\"[theme:neutralLighter, default: #f3f2f1]\"!important}.suggestionItemContainer .pageLabel{color:\"[theme:neutralPrimary, default: #323130]\";font-size:14px;-webkit-font-smoothing:antialiased;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.suggestionItemContainer .suggestedTopicDefinitionLegacy{font-size:10px;padding-top:2px}.suggestionItemContainer .suggestedTopicDefinition{font-size:12px;font-weight:400}.suggestedTopicContainer{-ms-flex-direction:column;flex-direction:column;max-height:56px;padding:10px 12px!important;border-bottom-color:\"[theme:neutralLight, default: #edebe9]\"}.marginForSuggestionWithHeader-TopicSuggestion:nth-child(2){margin-top:36px}.suggestedTopicContainerLegacy{-ms-flex-direction:column;flex-direction:column;max-height:56px;padding:10px 12px!important;border-bottom:1px solid \"[theme:neutrallight, default: #edebe9]\"}.fixSuggestedStyles:hover{background-color:\"[theme:neutralTertiaryAlt, default: #c8c6c4]\"!important}.cke_autocomplete_selected_legacy:not(.fixSuggestedStyles){background-color:\"[theme:themeLighterAlt, default: #eff6fc]\"!important;font-weight:600}.cke_autocomplete_selected_legacy:not(.fixSuggestedStyles):hover{background-color:\"[theme:themeLighter, default: #deecf9]\"!important}.cke_autocomplete_selected_updated:not(.fixSuggestedStyles):not([data-id=EMPTY_TOPIC_SUGGESTION_ID]){background-color:\"[theme:themeLighterAlt, default: #eff6fc]\"!important}.cke_autocomplete_selected_updated:not(.fixSuggestedStyles):not([data-id=EMPTY_TOPIC_SUGGESTION_ID]):hover{background-color:\"[theme:themeLighter, default: #deecf9]\"!important}.cke_autocomplete_selected_updated:not(.fixSuggestedStyles):not([data-id=EMPTY_TOPIC_SUGGESTION_ID]) .pageLabel{color:\"[theme:neutralDark, default: #201f1e]\"!important}.cke_autocomplete_panel{background:\"[theme:white, default: #ffffff]\"!important;font:14px Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif!important;min-width:360px;overflow-x:hidden!important;box-sizing:border-box!important;box-shadow:0 0 5px 0 rgba(0,0,0,.4)!important;border-radius:0!important;border:1px solid \"[theme:neutrallight, default: #edebe9]\"!important;outline:transparent;visibility:visible;max-height:312px!important}.fixAutoCompletePanelHeight{max-height:100%!important}.suggestedTopicPanel{min-width:320px;border:none!important}.fitHeaderOutsideList{box-shadow:0 0 5px 0 rgba(0,0,0,.4)!important;margin-top:-37px;position:fixed;background-color:\"[theme:white, default: #ffffff]\"!important}.fitAutoCompletePanelBox{margin:40px 0;list-style-type:none}@media screen and (-ms-high-contrast:active){.cke_autocomplete_panel>li:hover,.cke_autocomplete_selected{color:LinkText}}", ""]);


/***/ }),

/***/ "n2+o":
/*!*************************************************!*\
  !*** ./lib/rte/ckeditor/WikiPageSuggestions.js ***!
  \*************************************************/
/*! exports provided: WikiPageSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiPageSuggestions", function() { return WikiPageSuggestions; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseRte/BaseRte */ "oubO");
/* harmony import */ var _common_MatchLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/MatchLink */ "nwhz");
/* harmony import */ var _CKPagePicker_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CKPagePicker.scss */ "SnrF");




var WikiPageSuggestions = /** @class */ (function () {
    function WikiPageSuggestions() {
    }
    WikiPageSuggestions.separator = '|';
    WikiPageSuggestions.endShortcut = ']]';
    WikiPageSuggestions.pagePickerCallback = function (rte, tagName, matchInfo, callback) {
        var _a;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('PagePickerSuggestions');
        var title = matchInfo.query.substring(2).trim();
        if (!title.length) {
            // no query yet
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tagName + 'OpenPagePickerCalloutByKeyboardShortcut');
            callback(rte.recentPages);
        }
        else {
            // picker with title as query, no '|' input
            callback(rte.prevSuggestions || []);
            var previousSuggestions = (_a = rte
                .getPageSuggestions(title)) === null || _a === void 0 ? void 0 : _a.then(function (links) {
                var autoSuggestions = _baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_1__["BaseRte"].makePageSuggestions(links, false);
                callback(autoSuggestions);
                qosMonitor.writeSuccess();
                return autoSuggestions;
            }).catch(function (error) {
                qosMonitor.writeUnexpectedFailure('SearchPagesFail', error);
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_1__["BaseRte"].logSource, error);
                return rte.recentPages;
            });
            return previousSuggestions;
        }
    };
    WikiPageSuggestions.insertLinkCallback = function (rte, editor, tagName, matchInfo) {
        var inputs = matchInfo.text.split(WikiPageSuggestions.separator);
        var title = inputs[0].substring(2).trim();
        var url = inputs[1];
        if (url && url.slice(-2) === WikiPageSuggestions.endShortcut) {
            // closed brackets with url
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tagName + 'CreateExternalLinkByKeyboardShortcut');
            url = _common_MatchLink__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeUrl(url.slice(0, -2).trim());
            if (url) {
                editor.format(matchInfo.range.endOffset, matchInfo.range.endOffset, {
                    link: url,
                    linkText: title,
                    shouldOpenInNewTab: false
                });
                editor.deleteContentsInContainer(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_1__["BaseRte"]._PAGE_LINKING_REGEX, matchInfo.range.startContainer);
                return url;
            }
        }
        else if (title && title.slice(-2) === WikiPageSuggestions.endShortcut) {
            // closed brackets with only title
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_EngagementLogger"].logEvent(tagName + 'CreateNewPageLinkByKeyboardShortcut.KeyDown');
            // title could be something like 'my page]]', this changes that to 'my page'
            title = title.slice(0, -2).trim();
            rte
                .getPredictedUrl(title)
                .then(function (predictedUrl) {
                matchInfo.range.extractContents();
                editor.format(matchInfo.range.endOffset, matchInfo.range.endOffset, {
                    link: predictedUrl,
                    linkText: title,
                    shouldOpenInNewTab: false,
                    linkPlaceHolder: title
                });
            })
                .catch(function (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(_baseRte_BaseRte__WEBPACK_IMPORTED_MODULE_1__["BaseRte"].logSource, error);
            });
        }
    };
    return WikiPageSuggestions;
}());



/***/ }),

/***/ "topo":
/*!*******************************************!*\
  !*** ./lib/rte/ckeditor/CKPagePicker.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CKPagePicker.css */ "eIS1");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

}]);
//# sourceMappingURL=chunk.sp-rte-wikipagesuggestions_none.js.map