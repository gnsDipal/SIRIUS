(window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || []).push([["topic-shared-create-new-topic-dialog"],{

/***/ "/G8a":
/*!************************************************!*\
  !*** ./lib/components/CreateNewTopicDialog.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateNewTopicDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_webpart_shared_editmode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-webpart-shared-editmode */ "9poL");
/* harmony import */ var _ms_sp_webpart_shared_editmode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_webpart_shared_editmode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dataProviders_CreateTopicDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dataProviders/CreateTopicDataProvider */ "r7AW");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utilities */ "pUyu");
/* harmony import */ var _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateNewTopicDialog.resx */ "4GXx");
var _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CreateNewTopicDialog.resx */ "4GXx", 1);
/* harmony import */ var _CreateNewTopicDialog_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateNewTopicDialog.module.scss */ "jBVd");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */











var WIDTH = 416;
var idCounter = 0;
/**
 * Use `DeferredCreateNewTopicDialog` for better load performance
 * @internal
 */
function CreateNewTopicDialog(props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.topicCandidate || ''), 2), topicName = _a[0], setTopicName = _a[1];
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1__["useState"](''), 2), topicDescription = _b[0], setTopicDescription = _b[1];
    var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), 2), isAPIPending = _c[0], setIsAPIPending = _c[1];
    var topicNameInputId = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () { return "TopicNameInput" + idCounter++; }, []);
    var handleCreateTopic = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
        var _a;
        var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"]('CSIKM.CreateNewTopicDialog');
        var dataProvider = new _dataProviders_CreateTopicDataProvider__WEBPACK_IMPORTED_MODULE_7__["CreateTopicDataProvider"](props.pageContext, props.serviceScope);
        // Focus on input first to avoid lost the focus as the submit button will be disabled.
        (_a = document.getElementById(topicNameInputId)) === null || _a === void 0 ? void 0 : _a.focus();
        setIsAPIPending(true);
        dataProvider
            .createTopicPage({
            topic: {
                Id: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_5__["NULL_TOPIC_ENTITY"].Id,
                Definition: topicDescription,
                Definitions: [],
                Name: topicName,
                State: 'Curated',
                Type: 'Project',
                Score: 0,
                RelatedDocuments: [],
                RelatedPeople: [],
                HiddenMinedDocuments: [],
                HiddenMinedPeople: [],
                LifecycleState: {
                    State: 'Published'
                }
            }
        })
            .then(function (data) {
            var _a, _b;
            qosMonitor.writeSuccess();
            setIsAPIPending(false);
            (_b = (_a = props).onCreateTopicOK) === null || _b === void 0 ? void 0 : _b.call(_a, {
                id: data.EntityId,
                name: data.Title,
                url: data.AbsoluteUrl,
                definition: Object(_Utilities__WEBPACK_IMPORTED_MODULE_8__["getDefinitionFromLayoutWebpartsContent"])(data.LayoutWebpartsContent)
            });
        })
            .catch(function (error) {
            setIsAPIPending(false);
            qosMonitor.writeUnexpectedFailure('dataProvider', error);
        });
    }, [props.pageContext, props.serviceScope, topicDescription, topicName, props.onCreateTopicOK]);
    var handleTopicNameChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event, newValue) {
        setTopicName(newValue);
    }, []);
    var handleTopicDescriptionChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event, newValue) {
        setTopicDescription(newValue);
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (props.topicCandidate) {
            setTopicName(props.topicCandidate);
            setTopicDescription('');
        }
    }, [props.topicCandidate]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_webpart_shared_editmode__WEBPACK_IMPORTED_MODULE_6__["DeferredDialog"], { hidden: !props.shouldShowDialog, dialogContentProps: {
            type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogType"].close,
            title: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["CreateNewTopic"],
            closeButtonAriaLabel: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["DialogCloseButtonAriaLabel"]
        }, maxWidth: WIDTH, minWidth: WIDTH, modalProps: {
            firstFocusableSelector: _CreateNewTopicDialog_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].topicNameInput
        }, onDismiss: props.onCloseDialog },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Stack"], { tokens: {
                childrenGap: 24
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["TextField"], { label: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["TopicName"], value: topicName, onChange: handleTopicNameChange, inputClassName: _CreateNewTopicDialog_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].topicNameInput, id: topicNameInputId, required: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["TextField"], { label: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["ShortDescription"], value: topicDescription, onChange: handleTopicDescriptionChange, multiline: true, required: true, rows: 4 })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_webpart_shared_editmode__WEBPACK_IMPORTED_MODULE_6__["DeferredDialogFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { onClick: handleCreateTopic, text: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["CreateTopic"], disabled: !topicName || !topicDescription || isAPIPending }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { onClick: props.onCloseDialog, text: _CreateNewTopicDialog_resx__WEBPACK_IMPORTED_MODULE_9__["Cancel"] }))));
}


/***/ }),

/***/ "4GXx":
/*!**************************************************!*\
  !*** ./lib/components/CreateNewTopicDialog.resx ***!
  \**************************************************/
/*! exports provided: CreateNewTopic, TopicName, ShortDescription, CreateTopic, Cancel, DialogCloseButtonAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"CreateNewTopic\":\"[!!--##Ćŕēàţē ńēŵ ţōƥĩć##--!!]\",\"TopicName\":\"[!!--##Ţōƥĩć ńàmē##--!!]\",\"ShortDescription\":\"[!!--##Śĥōŕţ ďēśćŕĩƥţĩōń##--!!]\",\"CreateTopic\":\"[!!--##Ćŕēàţē ţōƥĩć##--!!]\",\"Cancel\":\"[!!--##Ćàńćēĺ##--!!]\",\"DialogCloseButtonAriaLabel\":\"[!!--##Ćĺōśē##--!!]\"}");

/***/ }),

/***/ "8qje":
/*!********************************************************!*\
  !*** ./lib/components/CreateNewTopicDialog.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./CreateNewTopicDialog.module.css */ "MjD1");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "MjD1":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/components/CreateNewTopicDialog.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_04103875{display:inline-block}", ""]);


/***/ }),

/***/ "jBVd":
/*!************************************************************!*\
  !*** ./lib/components/CreateNewTopicDialog.module.scss.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./CreateNewTopicDialog.module.css */ "8qje");
var styles = {
    topicNameInput: 'a_a_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "pUyu":
/*!*************************************!*\
  !*** ./lib/components/Utilities.js ***!
  \*************************************/
/*! exports provided: getDefinitionFromLayoutWebpartsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefinitionFromLayoutWebpartsContent", function() { return getDefinitionFromLayoutWebpartsContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TopicPageLayoutDefaultTemplate */ "hrbp");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */


// tslint:disable-next-line: export-name
function getDefinitionFromLayoutWebpartsContent(content) {
    var e_1, _a;
    var _b, _c;
    var layoutWebparts = JSON.parse(content);
    try {
        for (var layoutWebparts_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(layoutWebparts), layoutWebparts_1_1 = layoutWebparts_1.next(); !layoutWebparts_1_1.done; layoutWebparts_1_1 = layoutWebparts_1.next()) {
            var layoutWebpart = layoutWebparts_1_1.value;
            if (layoutWebpart.id === _TopicPageLayoutDefaultTemplate__WEBPACK_IMPORTED_MODULE_1__["TopicPageLayoutDefaultTemplate"].DEFINITION_WP_ID) {
                return ((_c = (_b = layoutWebpart.serverProcessedContent) === null || _b === void 0 ? void 0 : _b.searchablePlainTexts) === null || _c === void 0 ? void 0 : _c.content) || '';
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (layoutWebparts_1_1 && !layoutWebparts_1_1.done && (_a = layoutWebparts_1.return)) _a.call(layoutWebparts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return '';
}


/***/ })

}]);
//# sourceMappingURL=chunk.topic-shared-create-new-topic-dialog_[locale].js.map