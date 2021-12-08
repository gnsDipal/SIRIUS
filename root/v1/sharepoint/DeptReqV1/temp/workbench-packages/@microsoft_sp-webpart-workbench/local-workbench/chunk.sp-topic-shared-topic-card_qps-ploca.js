(window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || []).push([["sp-topic-shared-topic-card"],{

/***/ "1qD4":
/*!************************************!*\
  !*** ./lib/topicCard/TopicCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/sp-pages-core */ "mMzb");
/* harmony import */ var _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_ChooseIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/ChooseIcon */ "1jTL");
/* harmony import */ var _TopicUtilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TopicUtilities */ "mAUd");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/Flights */ "w4+A");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/KillSwitches */ "+ORw");
/* harmony import */ var _feedback_Feedback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feedback/Feedback */ "w+n4");
/* harmony import */ var _experienceFeedback_ExperienceFeedback__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./experienceFeedback/ExperienceFeedback */ "poX+");
/* harmony import */ var _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TopicCard.module.scss */ "sFbo");
/* harmony import */ var _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TopicCard.resx */ "zrI7");
var _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TopicCard.resx */ "zrI7", 1);
/* harmony import */ var _utilities_logTopicCardEngagement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utilities/logTopicCardEngagement */ "kqZ5");
/* harmony import */ var _utilities_getFriendlyName__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utilities/getFriendlyName */ "a6+Q");
/* harmony import */ var _common_addLinkSource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/addLinkSource */ "NmML");
/* harmony import */ var _utilities_topicCurated__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utilities/topicCurated */ "Gw7F");
/* harmony import */ var _utilities_topicDefinition__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utilities/topicDefinition */ "MFio");
/* harmony import */ var _components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/DefinitionSourceElement */ "6ayc");
/* harmony import */ var _personaCell_PersonaCell__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./personaCell/PersonaCell */ "hSub");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./KillSwitches */ "LSGH");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




























var TOPIC_CARD_CALLOUT_WIDTH = 340;
var theme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])();
var actionButtonStyles = {
    root: {
        padding: '12px 1px 12px 0px'
    },
    rootHovered: {
        backgroundColor: theme.palette.neutralLighter
    }
};
function getThemedBorderColor() {
    return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])({
        border: '1px solid',
        borderColor: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().semanticColors.variantBorder
    });
}
function getThemedBorderBottomColor() {
    return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])({
        borderBottom: '1px solid',
        borderBottomColor: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().semanticColors.variantBorder
    });
}
function stopClickPropagation(e) {
    e.stopPropagation();
}
function stopOnEnterPropagation(e) {
    if (e.key === 'Enter') {
        e.stopPropagation();
    }
}
/**
 * Topic cards are used to display details from the M365 knowledge graph about a topic.
 * A topic can be a project, company, team, etc...
 */
var TopicCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TopicCard, _super);
    function TopicCard(props) {
        var _this = _super.call(this, props) || this;
        _this.setFutureTopicId = function (id) {
            _this._futureTopicId = id;
        };
        /**
         * Attach the topic card callout to the passed in element.
         */
        _this.setElement = function (targetElement, linkSource, hideFeedback) {
            if (hideFeedback === void 0) { hideFeedback = false; }
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(targetElement, 'targetElement');
            var topicId = targetElement.getAttribute(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].kmTopicIdAttribute) ||
                targetElement.getAttribute(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].kmHashtaggedTopicIdAttribute) ||
                _this._futureTopicId;
            var isHastagged = !!targetElement.getAttribute(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].kmHashtaggedTopicIdAttribute);
            if ((_this.state.topic.Id === topicId || _this._futureTopicId !== topicId) &&
                isHastagged === _this._isHashtagged) {
                // Topic card is already displaying, nothing to do.
                return;
            }
            _this._isHashtagged = isHastagged;
            if (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_15__["dismissTopicCardWhenVisibleKSActivated"])() || _this.state.isVisible) {
                _this.onDismiss();
            }
            _this._qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](TopicCard._qosTag);
            if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["topicCardTryGetKSActivated"])() && _this.props.tryGetTopicInfo) {
                _this.props.tryGetTopicInfo(topicId).then(function (topic) {
                    _this._showTopicCard(topic, hideFeedback, targetElement, linkSource);
                });
            }
            else if (_this.props.getTopicInfo) {
                var topic = _this.props.getTopicInfo(topicId);
                _this._showTopicCard(topic, hideFeedback, targetElement, linkSource);
            }
        };
        _this.onDismiss = function () {
            _this.setState({
                isVisible: false,
                topic: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__["INVALID_TOPIC"]
            });
        };
        _this._showTopicCard = function (topic, hideFeedback, targetElement, linkSource) {
            var _a, _b, _c, _d, _e;
            _this.props.setCurrentTopicInCache(topic);
            _this.setState({
                hideFeedback: hideFeedback,
                isVisible: true,
                targetElement: targetElement,
                topic: topic,
                linkSource: linkSource
            });
            Object(_utilities_logTopicCardEngagement__WEBPACK_IMPORTED_MODULE_20__["default"])('Show', (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a.topic) === null || _b === void 0 ? void 0 : _b.Id, Object(_utilities_topicCurated__WEBPACK_IMPORTED_MODULE_23__["default"])(_this._topicUrl), {}, Object(_utilities_topicDefinition__WEBPACK_IMPORTED_MODULE_24__["getTopicDefinitionType"])(_this.state.topic.Definitions, (_e = (_d = (_c = _this) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.topic) === null || _e === void 0 ? void 0 : _e.Definition));
        };
        _this._onTitleLinkClick = function () {
            _this._handleHeaderClick('TitleLink.Click');
        };
        _this._onViewDetailsClick = function () {
            _this._handleHeaderClick('ViewDetails.Click');
        };
        _this._handleHeaderClick = function (eventName) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            Object(_utilities_logTopicCardEngagement__WEBPACK_IMPORTED_MODULE_20__["default"])(eventName, (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a.topic) === null || _b === void 0 ? void 0 : _b.Id, Object(_utilities_topicCurated__WEBPACK_IMPORTED_MODULE_23__["default"])(_this._topicUrl), {}, Object(_utilities_topicDefinition__WEBPACK_IMPORTED_MODULE_24__["getTopicDefinitionType"])((_e = (_d = (_c = _this) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.topic) === null || _e === void 0 ? void 0 : _e.Definitions, (_h = (_g = (_f = _this) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g.topic) === null || _h === void 0 ? void 0 : _h.Definition));
            if (_this._topicUrl) {
                _this.onDismiss();
            }
            else {
                if (!_this.props.shouldLinksOpenInNewTab) {
                    _this._openPreview();
                }
            }
        };
        _this._getTopicNameWithAlternates = function () {
            var _a, _b, _c, _d;
            if (((_a = _this.state.targetElement) === null || _a === void 0 ? void 0 : _a.textContent.toLowerCase().trim()) ===
                _this.state.topic.Name.toLowerCase().trim() ||
                (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["putAlternateNameInParenthesesKSActivated"])() && !((_b = _this.state.targetElement) === null || _b === void 0 ? void 0 : _b.textContent))) {
                return _this.state.topic.Name;
            }
            else {
                if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["putAlternateNameInParenthesesKSActivated"])()) {
                    return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicNameWithAlternateName"], _this.state.topic.Name, (_c = _this.state.targetElement) === null || _c === void 0 ? void 0 : _c.textContent);
                }
                else {
                    return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardAlternateName"], (_d = _this.state.targetElement) === null || _d === void 0 ? void 0 : _d.textContent, _this.state.topic.Name);
                }
            }
        };
        _this._moveFocusToAnnotator = function () {
            var topicAnnotators = document.querySelectorAll("[" + _common_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].kmTopicIdAttribute + "=" + _this._futureTopicId + "]");
            if (topicAnnotators.length > 0 && topicAnnotators[0]) {
                topicAnnotators[0].focus();
            }
        };
        _this._getHeaderText = function (name, count) {
            // Topic Card header text representing the section name and count.
            // If there is no count then return the name only.
            // Otherwise show {name} (10+) if it's more than 10, else show the true value e.g {name} (3).
            if (!count) {
                return name;
            }
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SectionCount"], name, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].formatWithLocalizedCountValue(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicSectionCountTemplate"], _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicSectionCountInterval"], count));
        };
        _this._definitionAltNames = function () {
            if (!_this.state.topic.AlternateNames || !_this.state.topic.AlternateNames.length) {
                return undefined;
            }
            var definitionAltNames = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DescriptionAlternameNames"], _this.state.topic.AlternateNames.map(function (alt) { return alt.Name; }).join(', '));
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].descriptionAlternateNames, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].descriptionAlternateNameFix), title: definitionAltNames }, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_this.state.topic.AlternateNames.length === 1
                ? _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DescriptionSingleAlternameName"]
                : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DescriptionAlternameNames"], _this.state.topic.AlternateNames.map(function (alt) { return alt.Name; }).join(', '))));
        };
        _this._definition = function () {
            var _a, _b, _c, _d;
            // when topic.Definitions[0] is present, ignore topic.Definition
            var definition = (_a = _this.state.topic) === null || _a === void 0 ? void 0 : _a.Definitions[0];
            var definitionContent = (_c = (_b = definition) === null || _b === void 0 ? void 0 : _b.Definition, (_c !== null && _c !== void 0 ? _c : _this.state.topic.Definition));
            if (definitionContent) {
                var capitalContent = definitionContent.charAt(0).toUpperCase() + definitionContent.slice(1);
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].definitionText, title: capitalContent }, capitalContent),
                    definition.SourceType === 'Wikipedia' && definition && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_25__["WikiSourceElement"], { source: { title: capitalContent, url: definition.Url }, className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].definitionSource })),
                    !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["addDefinitionAttributionKSActivated"])() &&
                        definition.SourceType !== 'Wikipedia' && ((_d = definition) === null || _d === void 0 ? void 0 : _d.Url) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_DefinitionSourceElement__WEBPACK_IMPORTED_MODULE_25__["SuggestedDefinitionSourceElement"], { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].definitionSource, source: {
                            title: definition.SourceDocumentTitle +
                                (definition.SourceDocumentExtension ? '.' + definition.SourceDocumentExtension : ''),
                            url: definition.Url
                        } }))));
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].definitionText, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].placeholder), title: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["topicCardUXKSActivated"])() ? '' : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DescriptionPlaceholderV2"] }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DescriptionPlaceholderV2"]));
        };
        _this._onContentsClickDocument = function () {
            var _a, _b;
            Object(_utilities_logTopicCardEngagement__WEBPACK_IMPORTED_MODULE_20__["default"])('Document.Click', (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a.topic) === null || _b === void 0 ? void 0 : _b.Id, Object(_utilities_topicCurated__WEBPACK_IMPORTED_MODULE_23__["default"])(_this._topicUrl));
            return true;
        };
        _this._onContentsClickPerson = function () {
            var _a, _b;
            Object(_utilities_logTopicCardEngagement__WEBPACK_IMPORTED_MODULE_20__["default"])('Person.Click', (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a.topic) === null || _b === void 0 ? void 0 : _b.Id, Object(_utilities_topicCurated__WEBPACK_IMPORTED_MODULE_23__["default"])(_this._topicUrl));
            return true;
        };
        _this._assignLinkItemRef = function (ref) {
            _this._headerLinkItem = ref;
        };
        _this._isMinedTopic = function () {
            var _a, _b;
            return (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["removeSuggestedHeaderLabelsTopicCardKSActivated"])() &&
                _this.state.isVisible &&
                ((_b = (_a = _this.state.topic) === null || _a === void 0 ? void 0 : _a.LifecycleState) === null || _b === void 0 ? void 0 : _b.State) === 'Suggested');
        };
        /**
         * Removes a property value (e.g. definitions, people, documents...etc.)
         * in the topic that's currently displayed in the topic card.
         *
         * @param value The object containing the identifier for what's to be removed.
         */
        _this._removeTopicPropertyValue = function (value) {
            var definitionText = value.definitionText, documentUniqueId = value.documentUniqueId, personUpn = value.personUpn;
            if (!!definitionText) {
                _this._removeDefinition(definitionText);
            }
            else if (!!documentUniqueId) {
                // TODO: implement document removal.
                // Bug 1000109: Topic card feedback visual regression for rejected people and documents
                // https://onedrive.visualstudio.com/CSI/_workitems/edit/1000109/
                return;
            }
            else if (!!personUpn) {
                // TODO: implement person removal.
                // Bug 1000109: Topic card feedback visual regression for rejected people and documents
                // https://onedrive.visualstudio.com/CSI/_workitems/edit/1000109/
                return;
            }
        };
        _this._removeDefinition = function (definitionText) {
            var _a;
            if (!((_a = _this.state.topic) === null || _a === void 0 ? void 0 : _a.Definitions)) {
                return;
            }
            var indexOfDefinitionToRemove = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__["findIndex"])(_this.state.topic.Definitions, function (definition) { return definition.Definition === definitionText; });
            if (indexOfDefinitionToRemove < _this.state.topic.Definitions.length && indexOfDefinitionToRemove > -1) {
                var newTopicEntity = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(_this.state.topic);
                var removedDefinition = newTopicEntity.Definitions.splice(indexOfDefinitionToRemove, 1)[0];
                if (removedDefinition) {
                    if (newTopicEntity.Definition === removedDefinition.Definition) {
                        newTopicEntity.Definition = '';
                    }
                    _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { topic: newTopicEntity }));
                }
            }
        };
        _this._browser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_BrowserDetection"].getBrowserInformation().browser;
        _this.state = {
            isVisible: false,
            targetElement: undefined,
            topic: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__["INVALID_TOPIC"],
            hideFeedback: false
        };
        if (!_this._pageContext) {
            // @todo: https://onedrive.visualstudio.com/CSI/_workitems/edit/788509
            _this._pageContext =
                _this.context && _this.context.serviceScope
                    ? _this.context.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey)
                    : _this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
        }
        return _this;
    }
    TopicCard.prototype.componentDidUpdate = function () {
        if (this._qosMonitor) {
            this._qosMonitor = undefined;
        }
    };
    TopicCard.prototype.render = function () {
        this._renderChildElementFailed = false;
        if (!this._pageContext) {
            this._pageContext =
                this.context && this.context.serviceScope
                    ? this.context.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey)
                    : this.props.serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_5__["PageContext"].serviceKey);
        }
        var viewDetails = !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["revampViewDetailsLinkKSActivated"])() ? (this._viewDetailsLink()) : !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["linkStylingUpdateKSActivated"])() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].links, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].fixViewDetailsLink) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], { styles: actionButtonStyles }, this._viewDetailsLinkDeprecated()))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].links }, this._viewDetailsLinkDeprecated()));
        var childrenElement = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["announceOpenKSActivated"])() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: 'topicCardOpened', className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].screenReaderOnly }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardOpenedAriaLabel"])),
            (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showTopicCardCloseButtonKSActivated"])() || this._isInMobileView) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].calloutDismissButton, "aria-label": _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardDismissButtonAriaLabel"], onClick: this.onDismiss, iconProps: { iconName: 'Cancel' } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].cardContentContainer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._getHeaderClass() },
                    this._isMinedTopic() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].suggestedTopicLabel, style: { borderColor: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().palette.neutralQuaternaryAlt }, title: _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedTopicBadgeTooltip"] }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedTopicLabel"])),
                    this._topicTitleLink(),
                    Object(_common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"])(1057 /* TopicExperienceFeedback */) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].experienceFeedbackContainer },
                        viewDetails,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_experienceFeedback_ExperienceFeedback__WEBPACK_IMPORTED_MODULE_17__["ExperienceFeedback"], { topicName: this.state.topic.Name, topicId: this.state.topic.Id, pageContext: this._pageContext, className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].experienceFeedback }))) : (viewDetails)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].scrollContainer, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].topicCardMaxHeightFix) },
                    this._renderProjectCard(),
                    !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["hideFeedbackByStateKSActivated"])()
                        ? !this.state.hideFeedback && this._renderFeedback()
                        : this._renderFeedback()))));
        var calloutStyles = {
            calloutMain: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixScrollBarMissingKSActivated"])()
                ? {
                    display: 'flex',
                    selectors: {
                        ' > div:first-child': {
                            display: 'flex',
                            maxWidth: '100%'
                        }
                    }
                }
                : {
                    overflow: 'visible'
                },
            beak: {},
            beakCurtain: {},
            container: {},
            root: {}
        };
        if (this.state.isVisible) {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"](TopicCard._qosTag);
            if (this._renderChildElementFailed) {
                qosMonitor.writeUnexpectedFailure(TopicCard._qosTag, this._lastError);
            }
            else {
                qosMonitor.writeSuccess();
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["FocusTrapCallout"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].callout, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].topicCardMaxHeightFix, getThemedBorderColor()), gapSpace: 0, target: this.state.targetElement, onDismiss: this.onDismiss, hidden: !this.state.isVisible, isBeakVisible: false, calloutMaxHeight: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])() ? undefined : 600, calloutWidth: TOPIC_CARD_CALLOUT_WIDTH, minPagePadding: this._isInMobileView ? this._minPagePaddingInMobileView : undefined, coverTarget: this._isInMobileView, styles: calloutStyles, role: 'dialog', ariaLabel: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardDialogAriaLabel"], this._getTopicNameWithAlternates()), ariaDescribedBy: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["announceOpenKSActivated"])() ? 'topicCardOpened' : undefined, focusTrapProps: {
                isClickableOutsideFocusTrap: true,
                forceFocusInsideTrap: false
            } }, childrenElement));
    };
    TopicCard.prototype._viewDetailsLink = function () {
        var _a;
        var currentTopic = this.props.getCurrentTopicFromCache();
        var topicUrl = this._topicUrl;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], { componentRef: this._assignLinkItemRef, iconProps: { iconName: 'Page', className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon }, "data-automation-id": 'view-topic-card-button', "data-interception": this.props.shouldLinksOpenInNewTab ? _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__["_DataInterceptionType"].Off : _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__["_DataInterceptionType"].Propagate, key: 'topic-card-view-link', className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].viewDetailsLink, 
            // The reason we have to do this check here is because there is a unique bug when we
            // try to open a preview page from allTopicsPage. In that scenario, we need to use a special
            // onClick function instead of an href.
            target: this.props.shouldLinksOpenInNewTab && '_blank', href: !Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["isShowAllTopicsPage"])() || ((_a = currentTopic) === null || _a === void 0 ? void 0 : _a.Url) ? topicUrl : undefined, onClick: this._onViewDetailsClick },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].viewDetailsText }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardViewDetails"])));
    };
    TopicCard.prototype._viewDetailsLinkDeprecated = function () {
        var viewDetailsLinkProps = {
            buttonType: 2 /* Title */,
            automationId: 'view-topic-card-button',
            reactKey: 'topic-card-view-link',
            onTopicPageClick: this._onViewDetailsClick,
            className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].contribute,
            icon: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { iconName: 'Page', className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["linkStylingUpdateKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].fixViewDetailsIcon) })),
            text: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].viewDetailsText, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["linkStylingUpdateKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].fixViewDetailsTextHover) }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardViewDetails"])),
            role: 'link'
        };
        return this._createTopicCardHeaderButton(viewDetailsLinkProps);
    };
    TopicCard.prototype._openPreview = function () {
        Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["openInNewTab"])(this._topicUrl);
        this.onDismiss();
    };
    TopicCard.prototype._topicTitleLink = function () {
        var titleLinkProps = {
            buttonType: 2 /* Title */,
            automationId: 'title-topic-card-button',
            reactKey: 'topic-card-title-link',
            onTopicPageClick: this._onTitleLinkClick,
            className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].topicTitleLink,
            text: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].title, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].titleHeadTruncated) }, this._getTopicNameWithAlternates())),
            role: 'link'
        };
        return this._createTopicCardHeaderButton(titleLinkProps);
    };
    TopicCard.prototype._createTopicCardHeaderButton = function (linkProps) {
        var _a;
        var currentTopic = this.props.getCurrentTopicFromCache();
        var linkStyles = {
            root: {
                selectors: {
                    '&:hover': {
                        textDecoration: 'none'
                    }
                }
            }
        };
        var topicUrl = this._topicUrl;
        topicUrl =
            topicUrl &&
                topicUrl + (linkProps.buttonType === 1 /* Contribute */ ? '?Mode=Edit' : '');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { componentRef: this._assignLinkItemRef, role: linkProps.role, "data-automation-id": linkProps.automationId, "data-interception": this.props.shouldLinksOpenInNewTab ? _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__["_DataInterceptionType"].Off : _ms_sp_pages_core__WEBPACK_IMPORTED_MODULE_8__["_DataInterceptionType"].Propagate, 
            // If data-interception isn't set to off, clicking the link will always trigger an attempt at
            // transitioning in-place, which is not what we want when this.props.shouldLinksOpenInNewTab is
            // set to 'true'.
            key: linkProps.reactKey, styles: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["linkStylingUpdateKSActivated"])() ? linkStyles : undefined, className: linkProps.className, target: this.props.shouldLinksOpenInNewTab && '_blank', 
            // The reason we have to do this check here is because there is a unique bug when we
            // try to open a preview page from allTopicsPage. In that scenario, we need to use a special
            // onClick function instead of an href.
            href: !Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["isShowAllTopicsPage"])() || ((_a = currentTopic) === null || _a === void 0 ? void 0 : _a.Url) ? topicUrl : undefined, onClick: linkProps.onTopicPageClick },
            linkProps.icon,
            linkProps.text));
    };
    Object.defineProperty(TopicCard.prototype, "_topicUrl", {
        get: function () {
            var currentTopic = this.props.getCurrentTopicFromCache();
            if (currentTopic && currentTopic.Id !== _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__["NULL_TOPIC_ENTITY"].Id) {
                var url = Object(_common_addLinkSource__WEBPACK_IMPORTED_MODULE_22__["default"])(currentTopic.Url, this.state.linkSource);
                // This topic does not have a topic page URL yet.
                if (!url && !Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["isShowAllTopicsPage"])()) {
                    url = Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["generatePreviewUrl"])(currentTopic.Name, currentTopic.Id, this._pageContext, this.state.linkSource);
                }
                return url;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    TopicCard.prototype._renderProjectCard = function () {
        var _this = this;
        var relatedPeople = this.state.topic.RelatedPeople
            ? this._getLPCUsers(this.state.topic.RelatedPeople)
            : [];
        // Removes experts past the cut-off limit for displaying on topic card.
        relatedPeople.splice(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_PEOPLE_LIMIT"]);
        var relatedDocuments = this.state.topic.RelatedDocuments || [];
        relatedDocuments.splice(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"]);
        var feedStyle = this._browser === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_Browser"].Edge ? _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].feedWithOverflowEdge : _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].feedWithOverflow;
        var sectionStyle = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].section, getThemedBorderBottomColor());
        // Get the related sites and reduce the combined related resources of documents and sites
        var relatedSites = this.state.topic.RelatedSites || [];
        if (Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixResourceCountKSActivated"])()) {
            relatedSites.splice(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"]);
        }
        else {
            relatedSites = relatedSites.slice(0, _common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"]);
        }
        this._reduceRelatedResources(relatedDocuments, relatedSites);
        return (this.state.isVisible && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].scrollWrapper },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: feedStyle },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: sectionStyle, key: 'topic-callout-description' },
                    this._definitionAltNames(),
                    this._definition()),
                this.state.topic.AtTheMinimumRelatedPeopleCount === 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: 'topic-callout-people' })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: sectionStyle, key: 'topic-callout-people' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].sectionTitle }, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["navigatableTopicWebpartKSActivated"])() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { target: '_blank', href: this._topicUrl + "#" + _common_Constants__WEBPACK_IMPORTED_MODULE_13__["TOPIC_CARD_RELATED_PEOPLE"] }, this._getHeaderText(this._isMinedTopic() ? _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedPeopleHeader"] : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["PeopleHeader"], this.state.topic.AtTheMinimumRelatedPeopleCount))) : (this._getHeaderText(this._isMinedTopic() ? _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedPeopleHeader"] : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["PeopleHeader"], this.state.topic.AtTheMinimumRelatedPeopleCount))),
                    relatedPeople.map(function (person, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: index, className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].expertCell, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fontSizeTopicCardKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].contributeDocumentText), role: 'main', onClick: _this._onContentsClickPerson, 
                        // tslint:disable-next-line: react-this-binding-issue
                        onKeyDown: function (event) {
                            if (event.key === 'Enter') {
                                _this._onContentsClickPerson();
                            }
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_personaCell_PersonaCell__WEBPACK_IMPORTED_MODULE_26__["PersonaCell"], { pageContext: _this._pageContext, user: person, lpcCardBehavior: {
                                disableHover: true,
                                // Had to make those callbacks undefined, because we don't want to do anything with them,
                                // but the props interface was designed in a way that requires passing something,
                                // even if it is undefined.
                                onCardOpen: undefined,
                                onCardClose: _this._moveFocusToAnnotator
                            }, ariaLabel: _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["PeopleCellAriaLabel"], person.name), immediateLPC: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["useImmediateLPCUndefinedTopicCardKSActivated"])() ? true : undefined, personaDescription: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])()
                                ? _this._renderPersonDescription(_this.state.topic.RelatedPeople[index])
                                : undefined }),
                        Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])() &&
                            _this._renderPersonDescription(_this.state.topic.RelatedPeople[index]))); }))),
                !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["topicCardRemoveEmptySuggestedResourcesSectionKSActivated"])() &&
                    this._getTopicResourceCount() === 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: 'topic-callout-documents' })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: sectionStyle, key: 'topic-callout-documents' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].sectionTitle }, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["navigatableTopicWebpartKSActivated"])() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { target: '_blank', href: this._topicUrl + "#" + _common_Constants__WEBPACK_IMPORTED_MODULE_13__["TOPIC_CARD_RELATED_RESOURCES"] }, this._getHeaderText(this._isMinedTopic()
                        ? _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedDocumentSectionTitle"]
                        : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentSectionTitle"], this._getTopicResourceCount()))) : (this._getHeaderText(this._isMinedTopic()
                        ? _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedDocumentSectionTitle"]
                        : _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentSectionTitle"], this._getTopicResourceCount()))),
                    this._renderSites(relatedSites),
                    this._renderDocuments(relatedDocuments)))))));
    };
    TopicCard.prototype._getTopicResourceCount = function () {
        return Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixResourceCountKSActivated"])()
            ? this.state.topic.AtTheMinimumRelatedResourcesCount
            : this.state.topic.RelatedSites.length + this.state.topic.AtTheMinimumRelatedResourcesCount;
    };
    TopicCard.prototype._getLPCUsers = function (relatedPeople) {
        return relatedPeople.map(function (personInfo) { return ({
            loginName: personInfo.OId,
            name: personInfo.Name,
            email: personInfo.Email
        }); });
    };
    TopicCard.prototype._reduceRelatedResources = function (relatedDocuments, relatedSites) {
        // Total items in the resources section is limited to RELATED_DOCUMENTS_LIMIT
        // If we are over the limit then we need to remove documents and sites
        if (relatedDocuments.length + relatedSites.length > _common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"]) {
            // The decision to keep documents or sites is based on the following priority order
            //    1. Curated Documents
            //    2. Curated Sites
            //    3. Mined Documents
            //    4. Mined Sites
            // The order of elements within the related documents and sites arrays are guaranteed to have
            // curated elements ordered before mined elements.
            // First determine how many curated documents and mined documents there are
            var cuDocCount_1 = 0;
            var miDocCount_1 = 0;
            relatedDocuments.forEach(function (doc) {
                if (doc.State && doc.State.indexOf('Curated') !== -1) {
                    cuDocCount_1++;
                }
                else {
                    miDocCount_1++;
                }
            });
            // If there enough curated documents then use them over sites
            if (cuDocCount_1 === _common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"]) {
                relatedSites.length = 0;
            }
            else if (miDocCount_1 === 0) {
                // Otherwise fill the remaining resource slots with sites. We trim from the end of the list
                // because any curated sites will be at the front.
                relatedSites.splice(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"] - cuDocCount_1);
            }
            else {
                // Otherwise if there are any curated sites that exist, keep them over the remaining mined documents.
                var cuSiteCount_1 = 0;
                relatedSites.forEach(function (s) {
                    if (s.State && s.State.indexOf('Curated') !== -1) {
                        cuSiteCount_1++;
                    }
                });
                // Remove any excess mined documents
                if (cuSiteCount_1 > miDocCount_1) {
                    // Keep curated sites over mined documents; just keep the curated documents.
                    relatedDocuments.splice(cuDocCount_1);
                }
                else {
                    relatedDocuments.splice(-1, cuSiteCount_1);
                }
                // Remove any excess sites
                relatedSites.splice(_common_Constants__WEBPACK_IMPORTED_MODULE_13__["RELATED_DOCUMENTS_LIMIT"] - relatedDocuments.length);
            }
        }
    };
    TopicCard.prototype._renderPersonDescription = function (person) {
        if (!person) {
            return undefined;
        }
        // Default description to "Contributed to resources"
        // If person.Description is not null then use it
        // Otherwise show AI reason...
        //  If AI reason count eq 1, then attempt show "Contributed to <filename>"
        //  Else If count is between 2 and 10, then show "Contributed to <n> resources"
        //  Else If count > 10, then show "Contributed to many resources"
        var description = _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardRelatedPersonDefaultDescription"];
        if (person.Description) {
            description = person.Description;
        }
        else if (person.AIReason) {
            var reason = person.AIReason;
            if (reason.Count === 1) {
                if (reason.DocumentContributedTo && reason.DocumentContributedTo.Title) {
                    var singleDoc = _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardPersonContributedSingleDoc"].split('{0}');
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        singleDoc.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, singleDoc[0]),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { target: '_blank', href: reason.DocumentContributedTo.Url, className: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fontSizeTopicCardKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].contributeDocumentText, onClick: stopClickPropagation, onKeyDown: stopOnEnterPropagation }, reason.DocumentContributedTo.Title),
                        singleDoc.length > 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, singleDoc[1])));
                }
            }
            else if (reason.Count > 1) {
                description = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].formatWithLocalizedCountValue(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["PersonAIReasonTemplate"], _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["PersonAIReasonInterval"], reason.Count);
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].personDescription, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentSubText) }, description));
    };
    TopicCard.prototype._renderDocumentAIReason = function (document) {
        var _a, _b;
        if (!((_b = (_a = document) === null || _a === void 0 ? void 0 : _a.AIReason) === null || _b === void 0 ? void 0 : _b.TopicMentionsCount)) {
            return undefined;
        }
        var reason = _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].formatWithLocalizedCountValue(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentAIReasonTemplate"], _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentAIReasonInterval"], document.AIReason.TopicMentionsCount);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentAIReason, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentSubText) }, reason));
    };
    TopicCard.prototype._renderSites = function (sites) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(sites, 'sites');
        var result = sites.map(function (site, index) {
            try {
                var siteTile = void 0;
                var logoUrl = site.LogoUrl;
                if (!logoUrl) {
                    var acronym = site.Acronym;
                    if (!acronym) {
                        var title = site.Title.toLocaleUpperCase().split(' ');
                        acronym = title.length > 1 ? title[0].slice(0, 1) + title[1].slice(0, 1) : site.Title.slice(0, 1);
                    }
                    var color = site.Color ? site.Color : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["DefaultPalette"].neutralSecondary;
                    siteTile = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].compactBanner, style: { backgroundColor: color } }, acronym));
                }
                else {
                    siteTile = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentIcon, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentIconMinWidth), iconType: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image, imageProps: {
                            src: logoUrl,
                            imageFit: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ImageFit"].contain,
                            maximizeFrame: true
                        } }));
                }
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: index, className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentCell },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLink, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkCentered, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkNoUnderline), href: site.Url, target: '_blank', "data-interception": 'off', onClick: _this._onContentsClickDocument },
                        siteTile,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkText, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkTextWithDetails, Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsBold, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].fixLongResourcesLink) },
                            site.Title,
                            !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsSite, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentSubText, Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsBold) }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SiteTag"])),
                            !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() && site.State === 'Mined' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsSite, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentSubText) }, _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["SuggestedSiteDefaultAIReason"]))))));
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(TopicCard._logSource, error, 'SitesOnTopicCardFailed');
                _this._renderChildElementFailed = true;
                _this._lastError = error;
                return undefined;
            }
        });
        // If an element errored out during mapping, then it will be in the array as undefined,
        // so we want to get rid of it.
        return result.filter(function (element) { return !!element; });
    };
    TopicCard.prototype._renderDocuments = function (documents) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Validate"].isNotNullOrUndefined(documents, 'documents');
        var result = documents.map(function (document, index) {
            var _a;
            try {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: index, className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentCell },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Link"], { "aria-label": _this._getDocAriaLabel(_this.state.topic.RelatedDocuments[index]), className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLink, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkCentered, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkNoUnderline), href: Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_12__["getWebviewUrl"])(document.SitePath, (_a = _this._pageContext.legacyPageContext) === null || _a === void 0 ? void 0 : _a.layoutsUrl, document.UniqueId, 
                        // There are 2 APIs in topic, WebviewUrl can be undefined
                        document.WebviewUrl || document.Url), target: '_blank', "data-interception": 'off', onClick: _this._onContentsClickDocument },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentIcon, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentWithDetailsIcon, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentIconMinWidth, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentIconMinWidth), iconType: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image, imageProps: {
                                src: Object(_common_ChooseIcon__WEBPACK_IMPORTED_MODULE_11__["chooseIcon"])(document.Url),
                                imageFit: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["ImageFit"].contain,
                                maximizeFrame: true
                            } }),
                        _this._getDocTitleWithDetails(_this.state.topic.RelatedDocuments[index])),
                    Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])() &&
                        _this._renderDocumentAIReason(_this.state.topic.RelatedDocuments[index])));
            }
            catch (error) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(TopicCard._logSource, error, 'DocumentOnTopicCardFailed');
                _this._renderChildElementFailed = true;
                _this._lastError = error;
                return undefined;
            }
        });
        // If an element errored out during mapping, then it will be in the array as undefined,
        // so we want to get rid of it.
        return result.filter(function (element) { return !!element; });
    };
    TopicCard.prototype._getDocTitleWithDetails = function (document) {
        var modifiedDate = document.LastModifiedTime
            ? _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_9__["LocaleFormat"].formatRelativeTimeApproximate(new Date(document.LastModifiedTime), {
                oneWeekCutoff: true
            })
            : '';
        var detailsElement = undefined;
        if (document.Modifier && document.Modifier.Name && modifiedDate) {
            detailsElement = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsPerson }, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["showSuggestedSiteAIReasonKSActivated"])() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentSubText },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__["StringFormaterWithNodes"], { template: _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentModifiedOn"], values: [
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentDetailsBold }, document.Modifier.Name),
                        modifiedDate
                    ] }))) : (_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentModifiedOn"], modifiedDate))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkTextWithDetails, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].fixLongResourcesLink) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].documentLinkText }, document.Title),
            detailsElement,
            !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["personaCellTextAlignmentKSActivated"])() && this._renderDocumentAIReason(document)));
    };
    TopicCard.prototype._getDocumentTypeName = function (document) {
        var extension = document.Url.split('.').pop().toLowerCase();
        return Object(_utilities_getFriendlyName__WEBPACK_IMPORTED_MODULE_21__["default"])(extension);
    };
    TopicCard.prototype._getDocAriaLabel = function (document) {
        var _a, _b;
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["useOldAriaLabelForTopicDocumentKSActivated"])()) {
            var modifiedDate = document.LastModifiedTime
                ? _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_9__["LocaleFormat"].formatRelativeTimeApproximate(new Date(document.LastModifiedTime), {
                    oneWeekCutoff: true
                })
                : '';
            var friendlyAppName = this._getDocumentTypeName(document);
            return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["TopicCardDocumentsAriaLabelNew"], friendlyAppName, document.Title, (_b = (_a = document.Modifier) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : '')), modifiedDate);
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_6__["StringHelper"].format(_TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["ResourceItemAriaLabel"], _TopicCard_resx__WEBPACK_IMPORTED_MODULE_19__["DocumentSectionTitle"], document.Title);
    };
    /**
     * this is the feedback at the bottom of the topic card.
     */
    TopicCard.prototype._renderFeedback = function () {
        if (Object(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_7__["isCortexEnabled"])(this._pageContext)) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_feedback_Feedback__WEBPACK_IMPORTED_MODULE_16__["default"], { serviceScope: this.context.serviceScope || this.props.serviceScope, topicEntity: this.state.topic, topicCardIsHidden: !this.state.isVisible, targetElement: this.state.targetElement, onTopicCardDismissed: this.onDismiss, headerLinkRef: this._headerLinkItem, removeAnnotation: this.props.removeAnnotation, getSPOId: this.props.getSPOId, removeTopicCardPropertyValue: this._removeTopicPropertyValue }));
        }
        return undefined;
    };
    /**
     * Gets the header name for the title card
     */
    TopicCard.prototype._getHeaderClass = function () {
        var _headerClass = _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].header;
        if (!Object(_common_Flights__WEBPACK_IMPORTED_MODULE_14__["default"])(1288 /* TopicCardEditButton */) && Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])()) {
            _headerClass = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_headerClass, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].sansEditButton, _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].headerTitleFix);
        }
        return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(_headerClass, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_27__["fixTopicCardMaxHeightKSActivated"])() && _TopicCard_module_scss__WEBPACK_IMPORTED_MODULE_18__["default"].topicCardMaxHeightFix, getThemedBorderBottomColor());
    };
    Object.defineProperty(TopicCard.prototype, "_isInMobileView", {
        get: function () {
            return window.innerWidth < 640;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopicCard.prototype, "_minPagePaddingInMobileView", {
        get: function () {
            // 8 is default minPagePadding for Callout
            return Math.max(window.innerWidth - TOPIC_CARD_CALLOUT_WIDTH, 16) / 2;
        },
        enumerable: true,
        configurable: true
    });
    TopicCard._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('TopicCard');
    TopicCard._qosTag = _common_Constants__WEBPACK_IMPORTED_MODULE_13__["default"].kmTopicCardLogPrefix + ".Render";
    return TopicCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TopicCard);


/***/ }),

/***/ "2glS":
/*!**************************************************************!*\
  !*** ./lib/topicCard/personaCell/PersonaCell.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PersonaCell.module.css */ "3MMz");
var styles = {
    spLikesPersonaBox: 'ac_f_04103875',
    spLikesPersona: 'ae_f_04103875',
    spLikesPersonaText: 'af_f_04103875',
    personDescription: 'ag_f_04103875',
    personaLayoutFix: 'ah_f_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "3MMz":
/*!**********************************************************!*\
  !*** ./lib/topicCard/personaCell/PersonaCell.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./PersonaCell.module.css */ "8Hjq");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "4H02":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/topicCard/feedback/Feedback.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".b_b_04103875{position:fixed;bottom:0;width:100%}.c_b_04103875{background-color:\"[theme:themeLighterAlt, default: #eff6fc]\"}.e_b_04103875{margin:0 16px 16px 0}[dir=rtl] .e_b_04103875{margin:0 0 16px 16px}[dir=ltr] .f_b_04103875{margin-right:5px}[dir=rtl] .f_b_04103875{margin-left:5px}.g_b_04103875{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;margin:0}.h_b_04103875{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.i_b_04103875{margin:12px 8px 12px 16px}[dir=rtl] .i_b_04103875{margin:12px 16px 12px 8px}.j_b_04103875{font-size:14px;line-height:20px}.j_b_04103875 .k_b_04103875,.l_b_04103875{font-weight:600}.l_b_04103875{font-size:14px}.m_b_04103875{padding:0;margin-top:8px;margin-right:8px;width:auto}", ""]);


/***/ }),

/***/ "8Hjq":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/topicCard/personaCell/PersonaCell.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ac_f_04103875{padding:7px 0;vertical-align:middle}.ac_f_04103875 .ae_f_04103875{border-radius:50%;vertical-align:middle}[dir=ltr] .ac_f_04103875 .ae_f_04103875{margin-right:10px}[dir=rtl] .ac_f_04103875 .ae_f_04103875{margin-left:10px}.ac_f_04103875 .af_f_04103875{font-size:14px;font-weight:400;color:\"[theme:bodyText, default: #323130]\";vertical-align:middle}.ac_f_04103875 .ag_f_04103875{font-size:12px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:2;word-break:break-all}.ac_f_04103875.ah_f_04103875{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}", ""]);


/***/ }),

/***/ "9/Cm":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/topicCard/TopicCard.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".ai_g_04103875{font-size:\"[theme:xSmallFontSize, default: 10px]\";font-weight:\"[theme:xSmallFontWeight, default: 400]\";color:\"[theme:neutralSecondary, default: #605e5c]\";border-radius:\"[theme:roundedCorner2, default: 2px]\";border:1px solid;margin:0 0 4px;display:inline-block}.ai_g_04103875,[dir=rtl] .ai_g_04103875{padding:3px 8px}[dir=rtl] .ai_g_04103875{margin:0 0 4px}.aj_g_04103875{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 22px;height:116px}[dir=rtl] .aj_g_04103875{padding:0 22px}.aj_g_04103875.ak_g_04103875{padding-top:18px;display:block;height:auto}.aj_g_04103875 .al_g_04103875{display:-webkit-box!important;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:2}.aj_g_04103875 .am_g_04103875{line-height:20px;padding-bottom:12px}.aj_g_04103875 .am_g_04103875.an_g_04103875{margin-top:3px}.aj_g_04103875 .am_g_04103875:not(.an_g_04103875){margin-top:12px}.aj_g_04103875 .am_g_04103875 button{height:20px}.aj_g_04103875 .s_g_04103875{display:block;margin:0;color:\"[theme:themePrimary, default: #0078d4]\";font-size:24px;line-height:32px;font-weight:600;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 2px}[dir=rtl] .aj_g_04103875 .s_g_04103875{padding:0 2px}.aj_g_04103875 .s_g_04103875:hover{color:\"[theme:themeDarker, default: #004578]\";-webkit-text-decoration-color:\"[theme:themeDarker, default: #004578]\";text-decoration-color:\"[theme:themeDarker, default: #004578]\"}.aj_g_04103875 .ao_g_04103875{padding-bottom:6px}.aj_g_04103875 .ap_g_04103875{border:0;padding:2px 2px 0}[dir=rtl] .aj_g_04103875 .ap_g_04103875{padding:2px 2px 0}[dir=ltr] .aj_g_04103875 .ap_g_04103875 .aq_g_04103875{margin-right:8px}[dir=rtl] .aj_g_04103875 .ap_g_04103875 .aq_g_04103875{margin-left:8px}.aj_g_04103875 .ap_g_04103875 .aq_g_04103875.ar_g_04103875{margin-top:3px}.aj_g_04103875 .as_g_04103875{border:0;padding:0 4px 0 2px;margin:6px 0 6px -2px}[dir=rtl] .aj_g_04103875 .as_g_04103875{padding:0 2px 0 4px;margin:6px -2px 6px 0}.aj_g_04103875 .as_g_04103875 .aq_g_04103875{color:\"[theme:themePrimary, default: #0078d4]\"}[dir=ltr] .aj_g_04103875 .as_g_04103875 .aq_g_04103875{margin-right:8px}[dir=rtl] .aj_g_04103875 .as_g_04103875 .aq_g_04103875{margin-left:8px}@media screen and (-ms-high-contrast:active){.aj_g_04103875 .at_g_04103875:focus{outline:1px auto #1aebff}}@media screen and (-ms-high-contrast:black-on-white){.aj_g_04103875 .at_g_04103875:focus{outline:1px auto #37006e}}.aj_g_04103875 .at_g_04103875:hover{color:\"[theme:themeDarker, default: #004578]\";-webkit-text-decoration-color:\"[theme:themeDarker, default: #004578]\";text-decoration-color:\"[theme:themeDarker, default: #004578]\"}.au_g_04103875{display:inline-table;height:50px!important;margin-top:18px;width:340px}.av_g_04103875{color:\"[theme:neutralPrimary, default: #323130]\";vertical-align:top}.av_g_04103875.aw_g_04103875:hover{text-decoration:none}.ax_g_04103875:not(.ak_g_04103875){max-height:600px}.ax_g_04103875.ak_g_04103875{max-height:540px}.ay_g_04103875{position:absolute;top:0;color:\"[theme:neutralPrimary, default: #323130]\"}[dir=ltr] .ay_g_04103875{right:0}[dir=rtl] .ay_g_04103875{left:0}.az_g_04103875{max-width:100%;overflow:hidden;max-height:538px}.az_g_04103875,.ba_g_04103875{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.ba_g_04103875:not(.ak_g_04103875){max-height:445px}.ba_g_04103875.ak_g_04103875{-ms-flex-positive:2;flex-grow:2;overflow-x:hidden;overflow-y:auto}.bb_g_04103875{color:\"[theme:neutralSecondary, default: #605e5c]\";margin-bottom:12px;font-size:12px;line-height:16px}.bc_g_04103875{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}[dir=ltr] .be_g_04103875{margin-left:35px}[dir=rtl] .be_g_04103875{margin-right:35px}.bf_g_04103875{min-width:95%}.bf_g_04103875,.bg_g_04103875{margin:0;padding:0;width:100%;overflow:hidden;border-bottom:none;visibility:visible;list-style:none;background:\"[theme:white, default: #ffffff]\"}.bf_g_04103875:hover,.bg_g_04103875:hover{overflow-y:auto}.bh_g_04103875{visibility:hidden;overflow:auto}.bh_g_04103875:focus,.bh_g_04103875:hover{visibility:visible}.bi_g_04103875{margin:0 24px;padding:12px 0;box-sizing:content-box;position:relative;animation:none;overflow:hidden;display:list-item;text-align:match-parent}li.bi_g_04103875:last-child{border-bottom:0}.bj_g_04103875{height:64px}.bk_g_04103875{padding:0 20px 0 0;margin:4px 0;font-size:15px;font-weight:600}.bl_g_04103875{padding:2px 24px 2px 0;font-size:14px}[dir=ltr] .bl_g_04103875{margin-left:1px}[dir=rtl] .bl_g_04103875{margin-right:1px}.bm_g_04103875{white-space:nowrap;margin:10px 0;padding:4px 2px}.bn_g_04103875{display:block;overflow:hidden;text-overflow:ellipsis}[dir=ltr] .bn_g_04103875{margin-left:1px}[dir=rtl] .bn_g_04103875{margin-right:1px}.bo_g_04103875{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.bp_g_04103875:hover{text-decoration:none}.bq_g_04103875{width:24px;height:24px;margin-right:8px;vertical-align:sub}.br_g_04103875{width:28px;height:28px}.bs_g_04103875{min-width:24px}.bt_g_04103875{min-width:28px}.bu_g_04103875{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;word-break:break-all;word-wrap:break-word}.bv_g_04103875{color:\"[theme:neutralPrimary, default: #323130]\";width:100%}.bv_g_04103875.bw_g_04103875{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.bv_g_04103875:not(.bw_g_04103875){display:table;table-layout:fixed}.bx_g_04103875{font-size:14px;font-weight:400;overflow:hidden;max-height:4.5em;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.bx_g_04103875.by_g_04103875{color:\"[theme:neutralSecondary, default: #605e5c]\"}.bz_g_04103875{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:3}.ca_g_04103875{font-size:12px}.cb_g_04103875{height:94px}.cc_g_04103875{font-size:12px;font-weight:400;color:\"[theme:white, default: #ffffff]\";-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;width:28px;height:28px;min-width:28px}[dir=ltr] .cc_g_04103875{margin-right:4px}[dir=rtl] .cc_g_04103875{margin-left:4px}.ce_g_04103875{margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cf_g_04103875{margin-bottom:10px}.ag_g_04103875{font-size:12px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:2}.cg_g_04103875{margin-top:2px}.cg_g_04103875,.ch_g_04103875{font-size:12px;text-overflow:ellipsis;overflow:hidden}.ch_g_04103875{display:block}.ci_g_04103875{font-weight:600}.cj_g_04103875{display:block;font-size:12px}.ck_g_04103875{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\";color:\"[theme:bodySubtext, default: #605e5c]\"}.cl_g_04103875{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.cm_g_04103875{font-size:\"[theme:smallFontSize, default: 12px]\";font-weight:\"[theme:smallFontWeight, default: 400]\";margin-top:8px;color:\"[theme:neutralSecondary, default: #605e5c]\"}", ""]);


/***/ }),

/***/ "JoD4":
/*!********************************************************!*\
  !*** ./lib/topicCard/feedback/Feedback.module.scss.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Feedback.module.css */ "epxU");
var styles = {
    messageBarContainer: 'b_b_04103875',
    messageBar: 'c_b_04103875',
    messageBarActionButton: 'e_b_04103875',
    messageBarButtonLeft: 'f_b_04103875',
    messageBarIconContainer: 'g_b_04103875',
    responseOptionContainer: 'h_b_04103875',
    textContainer: 'i_b_04103875',
    text: 'j_b_04103875',
    semibold: 'k_b_04103875',
    responseOption: 'l_b_04103875',
    dismissButton: 'm_b_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "L2UT":
/*!******************************************************!*\
  !*** ./lib/topicCard/feedback/FeedbackInterfaces.js ***!
  \******************************************************/
/*! exports provided: QUESTION_TYPE, RESPONSE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_TYPE", function() { return QUESTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_TYPE", function() { return RESPONSE_TYPE; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * This file contains interfaces for collecting and handling feedback from users on topics.
 */
/**
 * Use this for equality checks of [[ QuestionType ]].
 *
 * @internal
 */
var QUESTION_TYPE = {
    ConfirmTopicEntity: 'ConfirmTopicEntity',
    AnnotateOnPage: 'AnnotateOnPage',
    IsPersonRelated: 'IsPersonRelated',
    IsFileRelated: 'IsFileRelated',
    IsDefinitionAccurate: 'IsDefinitionAccurate'
};
/**
 * Use this for equality checks of [[ ResponseType ]].
 */
var RESPONSE_TYPE = {
    No: 'No',
    Yes: 'Yes',
    Dismiss: 'Dismiss'
};


/***/ }),

/***/ "MFio":
/*!******************************************!*\
  !*** ./lib/utilities/topicDefinition.js ***!
  \******************************************/
/*! exports provided: getTopicDefinitionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopicDefinitionType", function() { return getTopicDefinitionType; });
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Constants */ "rMgv");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */

/**
 * Get MinedDefinition vs Definition vs NotDefinition based on the topicDefinition.
 *
 * @param definitions history of topic definitions
 * @param definition definition of the topic.
 */
/* tslint:disable-next-line:export-name */
function getTopicDefinitionType(definitions, definition) {
    var _a, _b, _c;
    var latestDefinition = (_a = definitions) === null || _a === void 0 ? void 0 : _a[0];
    if (latestDefinition) {
        return ((_b = latestDefinition.Definition) === null || _b === void 0 ? void 0 : _b.length) ? latestDefinition.State === 'Mined'
            ? _common_Constants__WEBPACK_IMPORTED_MODULE_0__["DefinitionTypes"].MinedDefinition
            : _common_Constants__WEBPACK_IMPORTED_MODULE_0__["DefinitionTypes"].Definition
            : _common_Constants__WEBPACK_IMPORTED_MODULE_0__["DefinitionTypes"].NoDefinition;
    }
    return ((_c = definition) === null || _c === void 0 ? void 0 : _c.length) ? _common_Constants__WEBPACK_IMPORTED_MODULE_0__["DefinitionTypes"].Definition : _common_Constants__WEBPACK_IMPORTED_MODULE_0__["DefinitionTypes"].NoDefinition;
}


/***/ }),

/***/ "TBtE":
/*!****************************************************************!*\
  !*** ../sp-component-utilities/lib/topics/ITopicInterfaces.js ***!
  \****************************************************************/
/*! exports provided: ENTITY_STATE, INVALID_TOPIC, NULL_TOPIC_ENTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_STATE", function() { return ENTITY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_TOPIC", function() { return INVALID_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NULL_TOPIC_ENTITY", function() { return NULL_TOPIC_ENTITY; });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * This file contains shared interfaces for Cortex Knowledge
 * Management Topics.
 */
/**
 * Use this for equality checks of the state of topics or related entities (e.g. documents/people/sites).
 *
 * @internal
 */
var ENTITY_STATE = {
    Mined: 'Mined',
    Curated: 'Curated',
    CuratedAndMined: 'CuratedAndMined'
};
/**
 * Empty topic
 *
 * @internal
 */
var INVALID_TOPIC = {
    Id: 'InvalidTopicId',
    Name: 'InvalidTopicName'
};
/**
 * A null object used to describe a topic before it's been curated or
 * associated to the AI.
 *
 * @internal
 */
var NULL_TOPIC_ENTITY = {
    Definition: '',
    Id: 'null_topic_id',
    Name: '',
    Score: 0,
    Type: 'Project',
    RelatedDocuments: [],
    RelatedPeople: []
};


/***/ }),

/***/ "a6+Q":
/*!****************************************************!*\
  !*** ./lib/topicCard/utilities/getFriendlyName.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_lib_icons_OfficeFileNameHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/icons/OfficeFileNameHelper */ "Vnag");

var extensionToFriendlyNameMapExtended = {
    pdf: 'PDF',
    aspx: 'SharePoint Site'
};
var getFriendlyName = function (extension) {
    var _a;
    var mapApp = _ms_odsp_utilities_lib_icons_OfficeFileNameHelper__WEBPACK_IMPORTED_MODULE_0__["OfficeIconFileTypeMap"][extension];
    var officeFriendlyName = _ms_odsp_utilities_lib_icons_OfficeFileNameHelper__WEBPACK_IMPORTED_MODULE_0__["getOfficeAppFriendlyName"](mapApp);
    if (officeFriendlyName) {
        return officeFriendlyName;
    }
    return _a = extensionToFriendlyNameMapExtended[extension], (_a !== null && _a !== void 0 ? _a : '');
};
/* harmony default export */ __webpack_exports__["default"] = (getFriendlyName);


/***/ }),

/***/ "bRuj":
/*!********************************************************!*\
  !*** ./lib/topicCard/feedback/FeedbackDataProvider.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/ITopicInterfaces */ "TBtE");
/* harmony import */ var _dataProviders_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataProviders/BaseSubstrateTopicDataProvider */ "53ge");
/* harmony import */ var _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeedbackInterfaces */ "L2UT");
/* harmony import */ var _FeedbackQuestionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedbackQuestionCache */ "pOvN");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */







var ApiEndpoint;
(function (ApiEndpoint) {
    ApiEndpoint["GetPrimer"] = "TopicCardFeedbackQuestion";
    ApiEndpoint["PostFeedback"] = "TopicCardFeedback";
})(ApiEndpoint || (ApiEndpoint = {}));
/**
 * This provider abstracts what questions to ask users regarding a certain topic
 * along with storing and processing the feedback received.
 */
var FeedbackDataProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FeedbackDataProvider, _super);
    function FeedbackDataProvider(serviceScope, spoId) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serviceScope, "serviceScope");
        _this = _super.call(this, serviceScope) || this;
        _this._spoId = spoId;
        _this._questionCache = new _FeedbackQuestionCache__WEBPACK_IMPORTED_MODULE_5__["default"]();
        _this._relatedEntityCache = new Map();
        _this._topicsWithNoQuestions = new Set();
        _this._topicsInProcessing = new Set();
        _this._currentPageId = {
            SiteId: (_b = (_a = _this._spoId.siteId) === null || _a === void 0 ? void 0 : _a.toString(), (_b !== null && _b !== void 0 ? _b : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].empty)),
            WebId: (_d = (_c = _this._spoId.webId) === null || _c === void 0 ? void 0 : _c.toString(), (_d !== null && _d !== void 0 ? _d : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].empty)),
            UniqueId: (_f = (_e = _this._spoId.uniqueId) === null || _e === void 0 ? void 0 : _e.toString(), (_f !== null && _f !== void 0 ? _f : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].empty))
        };
        var urlQuery = new URLSearchParams(window.location.search);
        _this._debugMode = ((_g = urlQuery.get('feedbackDebugMode')) === null || _g === void 0 ? void 0 : _g.toLocaleLowerCase().trim()) === 'true';
        _this._debugMockMode = ((_h = urlQuery.get('feedbackMockMode')) === null || _h === void 0 ? void 0 : _h.toLocaleLowerCase().trim()) === 'true';
        _this._statelessFeedbackMode =
            ((_j = urlQuery.get('statelessFeedbackMode')) === null || _j === void 0 ? void 0 : _j.toLocaleLowerCase().trim()) === 'true' && _this._debugMockMode;
        return _this;
    }
    /**
     * Get a question to ask the user to get feedback on a topic and its properties.
     */
    FeedbackDataProvider.prototype.getFeedbackQuestion = function (topicEntity) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(topicEntity, "topicEntity");
        var question = undefined;
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["feedbackConfirmationResponsivenessFixKSActivated"])() && this._topicsInProcessing.has(topicEntity.Id)) {
            return Promise.resolve(question);
        }
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
            question = this._getFeedbackQuestion(topicEntity);
        }
        else {
            question = this._questionCache.getQuestion(topicEntity.Id);
        }
        if (!question && !this._topicsWithNoQuestions.has(topicEntity.Id)) {
            return this._getFeedbackQuestionPrimer(topicEntity).then(function (primer) {
                if (primer) {
                    _this._buildAndCacheFeedbackQuestions(topicEntity, primer);
                    if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
                        return _this._getFeedbackQuestion(topicEntity);
                    }
                    else {
                        return _this._questionCache.getQuestion(topicEntity.Id);
                    }
                }
            });
        }
        else {
            return Promise.resolve(question);
        }
    };
    /**
     * Process feedback received on a topic.
     */
    FeedbackDataProvider.prototype.processFeedback = function (topicEntity, feedbackQuestion) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(topicEntity, "topicEntity");
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(feedbackQuestion, "feedbackQuestion");
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(feedbackQuestion.ResponseType, 'feedbackQuestion.ResponseType');
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["feedbackConfirmationResponsivenessFixKSActivated"])()) {
            this._topicsInProcessing.add(topicEntity.Id);
        }
        this._currentApiName = ApiEndpoint.PostFeedback;
        this._requestBody = this._buildProcessFeedbackAPIRequestBody(topicEntity, feedbackQuestion);
        if (this._debugMockMode) {
            return this._mockCleanUp(topicEntity, feedbackQuestion);
        }
        else {
            return this.getRequest().then(function (ok) {
                if (ok) {
                    if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
                        return _this._cleanUp(topicEntity, feedbackQuestion);
                    }
                    else {
                        if (feedbackQuestion.ResponseType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE"].Dismiss) {
                            _this._topicsWithNoQuestions.add(topicEntity.Id);
                            if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["feedbackConfirmationResponsivenessFixKSActivated"])()) {
                                var questionsRemoved = _this._questionCache.removeAllQuestionsForTopic(topicEntity.Id);
                                _this._topicsInProcessing.delete(topicEntity.Id);
                                return questionsRemoved;
                            }
                            else {
                                return _this._questionCache.removeAllQuestionsForTopic(topicEntity.Id);
                            }
                        }
                        else {
                            if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["feedbackConfirmationResponsivenessFixKSActivated"])()) {
                                var questionRemoved = _this._questionCache.removeQuestion(topicEntity.Id, feedbackQuestion);
                                _this._topicsInProcessing.delete(topicEntity.Id);
                                return questionRemoved;
                            }
                            else {
                                return _this._questionCache.removeQuestion(topicEntity.Id, feedbackQuestion);
                            }
                        }
                    }
                }
            });
        }
    };
    Object.defineProperty(FeedbackDataProvider.prototype, "isPost", {
        /**
         * @override
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedbackDataProvider.prototype, "apiName", {
        /**
         * @override
         */
        get: function () {
            return this._currentApiName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedbackDataProvider.prototype, "qosTag", {
        /**
         * @override
         */
        get: function () {
            return this._currentApiName;
        },
        enumerable: true,
        configurable: true
    });
    FeedbackDataProvider.prototype.getCustomRequestOptions = function (options) {
        var _a;
        options.body = this._requestBody;
        if (this._debugMode) {
            options.headers = (_a = options.headers, (_a !== null && _a !== void 0 ? _a : {}));
            options.headers['X-SPDF-TestFeedback'] = 'true';
        }
    };
    /**
     * Get a question to ask the user from cache with additional filtering.
     */
    FeedbackDataProvider.prototype._getFeedbackQuestion = function (topicEntity) {
        var _a;
        var question = this._questionCache.getQuestion(topicEntity.Id);
        // Make sure if we're asking feedback on definition, that the definition in question is actually being displayed.
        while (!this._questionCache.isQuestionQueueEmpty(topicEntity.Id) &&
            question.QuestionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsDefinitionAccurate &&
            ((_a = topicEntity.Definitions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
            question.RelatedEntity.EntityIdentity.Text !==
                topicEntity.Definitions[0].Definition) {
            this._questionCache.removeQuestion(topicEntity.Id, question);
            question = this._questionCache.getQuestion(topicEntity.Id);
        }
        return question;
    };
    /**
     * Get the primer from the Feedback API containing information on what questions to ask.
     */
    FeedbackDataProvider.prototype._getFeedbackQuestionPrimer = function (topicEntity) {
        var _this = this;
        this._currentApiName = ApiEndpoint.GetPrimer;
        this._requestBody = this._buildGetPrimerAPIRequestBody(topicEntity);
        if (this._debugMockMode) {
            return this._getMockFeedbackQuestionPrimer();
        }
        else {
            return this.getRequest().then(function (apiResponse) {
                if (apiResponse) {
                    return apiResponse.Primer;
                }
                else {
                    _this._topicsWithNoQuestions.add(topicEntity.Id);
                    return undefined;
                }
            });
        }
    };
    /**
     * Mock feedback primer that can be used to debug the feedback component with dummy data.
     */
    FeedbackDataProvider.prototype._getMockFeedbackQuestionPrimer = function () {
        var request = JSON.parse(this._requestBody).Request;
        var primer = {
            EntityId: request.EntityId,
            ConfirmEntity: true,
            ConfirmAnnotation: true,
            FilesToConfirm: request.SuggestedFiles ? request.SuggestedFiles : [],
            PeopleToConfirm: request.SuggestedPeople ? request.SuggestedPeople : [],
            DefinitionsToConfirm: request.SuggestedDefinitions ? request.SuggestedDefinitions : []
        };
        return Promise.resolve(primer);
    };
    /**
     * Build and return the feedback questions primer request body.
     */
    FeedbackDataProvider.prototype._buildGetPrimerAPIRequestBody = function (topicEntity) {
        var suggestedFiles = [];
        var suggestedPeople = [];
        var suggestedDefinitions = [];
        this._cacheSuggestedRelatedEntities(topicEntity, suggestedFiles, suggestedPeople, suggestedDefinitions);
        return JSON.stringify({
            Request: {
                EntityId: topicEntity.Id,
                SuggestedFiles: suggestedFiles,
                SuggestedPeople: suggestedPeople,
                SuggestedDefinitions: suggestedDefinitions,
                CurrentPageId: this._currentPageId
            }
        });
    };
    /**
     * Build and return process feedback request body.
     */
    FeedbackDataProvider.prototype._buildProcessFeedbackAPIRequestBody = function (topicEntity, feedbackQuestion) {
        var _a, _b;
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
            var request = {
                EntityId: topicEntity.Id,
                Name: topicEntity.Name,
                CurrentPageId: this._currentPageId,
                QuestionType: feedbackQuestion.QuestionType,
                ResponseType: feedbackQuestion.ResponseType
            };
            if (feedbackQuestion.RelatedEntity) {
                switch (feedbackQuestion.RelatedEntity.Type) {
                    case 'Document':
                        request.RelatedFile = feedbackQuestion.RelatedEntity.EntityIdentity;
                        break;
                    case 'Person':
                        request.RelatedPerson = feedbackQuestion.RelatedEntity.EntityIdentity;
                        break;
                    case 'Definition':
                        request.Definition = feedbackQuestion.RelatedEntity.EntityIdentity;
                        break;
                }
            }
            return JSON.stringify({ Request: request });
        }
        else {
            return ((_a = feedbackQuestion.RelatedEntity) === null || _a === void 0 ? void 0 : _a.Type) === 'Document'
                ? JSON.stringify({
                    Request: {
                        EntityId: topicEntity.Id,
                        Name: topicEntity.Name,
                        CurrentPageId: this._currentPageId,
                        QuestionType: feedbackQuestion.QuestionType,
                        ResponseType: feedbackQuestion.ResponseType,
                        RelatedFile: feedbackQuestion.RelatedEntity.EntityIdentity
                    }
                })
                : ((_b = feedbackQuestion.RelatedEntity) === null || _b === void 0 ? void 0 : _b.Type) === 'Person'
                    ? JSON.stringify({
                        Request: {
                            EntityId: topicEntity.Id,
                            Name: topicEntity.Name,
                            CurrentPageId: this._currentPageId,
                            QuestionType: feedbackQuestion.QuestionType,
                            ResponseType: feedbackQuestion.ResponseType,
                            RelatedPerson: feedbackQuestion.RelatedEntity.EntityIdentity
                        }
                    })
                    : JSON.stringify({
                        Request: {
                            EntityId: topicEntity.Id,
                            Name: topicEntity.Name,
                            CurrentPageId: this._currentPageId,
                            QuestionType: feedbackQuestion.QuestionType,
                            ResponseType: feedbackQuestion.ResponseType
                        }
                    });
        }
    };
    /**
     * Determine what questions to ask based on primer and cache them for future reference.
     */
    FeedbackDataProvider.prototype._buildAndCacheFeedbackQuestions = function (topicEntity, primer) {
        var _this = this;
        // NOTE: since questions are stacked, the last item added here is the first question that will be asked.
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
            for (var i = primer.FilesToConfirm.length - 1; i >= 0; i--) {
                var docId = primer.FilesToConfirm[i];
                this._questionCache.addQuestion(topicEntity.Id, {
                    QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsFileRelated,
                    RelatedEntity: this._relatedEntityCache.get(docId.UniqueId)
                });
            }
            for (var i = primer.PeopleToConfirm.length - 1; i >= 0; i--) {
                var personId = primer.PeopleToConfirm[i];
                this._questionCache.addQuestion(topicEntity.Id, {
                    QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsPersonRelated,
                    RelatedEntity: this._relatedEntityCache.get(personId.UserPrincipalName)
                });
            }
            for (var i = primer.DefinitionsToConfirm.length - 1; i >= 0; i--) {
                var definition = primer.DefinitionsToConfirm[i];
                this._questionCache.addQuestion(topicEntity.Id, {
                    QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsDefinitionAccurate,
                    RelatedEntity: this._relatedEntityCache.get(definition.Text)
                });
            }
        }
        else {
            primer.FilesToConfirm.forEach(function (docId) {
                _this._questionCache.addQuestion(topicEntity.Id, {
                    QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsFileRelated,
                    RelatedEntity: _this._relatedEntityCache.get(docId.UniqueId)
                });
            });
            primer.PeopleToConfirm.forEach(function (personId) {
                _this._questionCache.addQuestion(topicEntity.Id, {
                    QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsPersonRelated,
                    RelatedEntity: _this._relatedEntityCache.get(personId.UserPrincipalName)
                });
            });
        }
        if (primer.ConfirmAnnotation) {
            this._questionCache.addQuestion(topicEntity.Id, {
                QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].AnnotateOnPage
            });
        }
        if (primer.ConfirmEntity && (topicEntity.State === _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__["ENTITY_STATE"].Mined || this._statelessFeedbackMode)) {
            this._questionCache.addQuestion(topicEntity.Id, {
                QuestionType: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].ConfirmTopicEntity
            });
        }
    };
    /**
     * Extract the mined/suggested related entities (people/documents) that are visible in the topic card
     * and cache them for future reference.
     *
     * @param topicEntity The topic entity from which to extract suggested related entities.
     * @param suggestedFiles If defined, this parameter can be used to retrieve list of file identities found.
     * @param suggestedPeople If defined, this parameter can be used to retrieve list of people identities found.
     * @param suggestedDefinitions If defined, this parameter can be used to retrieve list of definition identities found
     */
    FeedbackDataProvider.prototype._cacheSuggestedRelatedEntities = function (topicEntity, suggestedFiles, suggestedPeople, suggestedDefinitions) {
        var _this = this;
        if (suggestedFiles === void 0) { suggestedFiles = undefined; }
        if (suggestedPeople === void 0) { suggestedPeople = undefined; }
        if (suggestedDefinitions === void 0) { suggestedDefinitions = undefined; }
        topicEntity.RelatedDocuments.forEach(function (document) {
            if (document.State === _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__["ENTITY_STATE"].Mined || _this._statelessFeedbackMode) {
                var entityIdentity = {
                    SiteId: document.SiteId,
                    WebId: document.WebId,
                    UniqueId: document.UniqueId
                };
                _this._relatedEntityCache.set(entityIdentity.UniqueId, {
                    Type: 'Document',
                    Name: document.Title,
                    EntityIdentity: entityIdentity
                });
                if (suggestedFiles) {
                    suggestedFiles.push(entityIdentity);
                }
            }
        });
        topicEntity.RelatedPeople.forEach(function (person) {
            if (person.State === _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__["ENTITY_STATE"].Mined || _this._statelessFeedbackMode) {
                var entityIdentity = {
                    ObjectId: person.OId,
                    UserPrincipalName: person.Upn
                };
                _this._relatedEntityCache.set(entityIdentity.UserPrincipalName, {
                    Type: 'Person',
                    Name: person.Name,
                    EntityIdentity: entityIdentity
                });
                if (suggestedPeople) {
                    suggestedPeople.push(entityIdentity);
                }
            }
        });
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["definitionFeedbackKSActivated"])()) {
            if ((topicEntity.Definitions.length > 0 && topicEntity.Definitions[0].State === _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__["ENTITY_STATE"].Mined) ||
                this._statelessFeedbackMode) {
                topicEntity.Definitions.forEach(function (definition) {
                    if (definition.State === _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_2__["ENTITY_STATE"].Mined || _this._statelessFeedbackMode) {
                        var entityIdentity = {
                            Text: definition.Definition
                        };
                        _this._relatedEntityCache.set(entityIdentity.Text, {
                            Type: 'Definition',
                            Name: 'Definition',
                            EntityIdentity: entityIdentity
                        });
                        if (suggestedDefinitions) {
                            suggestedDefinitions.push(entityIdentity);
                        }
                    }
                });
            }
        }
    };
    /**
     * Clean up question cache and any data that should no longer be visible
     * in the topic card.
     */
    FeedbackDataProvider.prototype._cleanUp = function (topicEntity, feedbackQuestion) {
        var isSuccessful = false;
        if (feedbackQuestion.QuestionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsDefinitionAccurate &&
            feedbackQuestion.ResponseType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE"].Yes) {
            var question = feedbackQuestion;
            // Remove all remaining definition questions when the user confirms an accurate definition.
            do {
                isSuccessful = this._questionCache.removeQuestion(topicEntity.Id, question);
                question = this._questionCache.getQuestion(topicEntity.Id);
            } while (isSuccessful && question.QuestionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["QUESTION_TYPE"].IsDefinitionAccurate);
        }
        else if (feedbackQuestion.ResponseType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_4__["RESPONSE_TYPE"].Dismiss) {
            this._topicsWithNoQuestions.add(topicEntity.Id);
            isSuccessful = this._questionCache.removeAllQuestionsForTopic(topicEntity.Id);
        }
        else {
            isSuccessful = this._questionCache.removeQuestion(topicEntity.Id, feedbackQuestion);
        }
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["feedbackConfirmationResponsivenessFixKSActivated"])()) {
            this._topicsInProcessing.delete(topicEntity.Id);
        }
        return isSuccessful;
    };
    /**
     * Clean up for mock mode.
     */
    FeedbackDataProvider.prototype._mockCleanUp = function (topicEntity, feedbackQuestion) {
        var isSuccessful = this._cleanUp(topicEntity, feedbackQuestion);
        if (this._questionCache.isQuestionQueueEmpty(topicEntity.Id)) {
            this._topicsWithNoQuestions.add(topicEntity.Id);
        }
        return Promise.resolve(isSuccessful);
    };
    return FeedbackDataProvider;
}(_dataProviders_BaseSubstrateTopicDataProvider__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FeedbackDataProvider);


/***/ }),

/***/ "epxU":
/*!****************************************************!*\
  !*** ./lib/topicCard/feedback/Feedback.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./Feedback.module.css */ "4H02");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "hSub":
/*!**************************************************!*\
  !*** ./lib/topicCard/personaCell/PersonaCell.js ***!
  \**************************************************/
/*! exports provided: PersonaCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCell", function() { return PersonaCell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_image_lib_lib_acronym_TextboyImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/image-lib/lib/acronym/TextboyImageLoader */ "wLiO");
/* harmony import */ var _ms_image_lib_lib_acronym_TextboyImageLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_image_lib_lib_acronym_TextboyImageLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_shared_react_lib_components_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard */ "1RX4");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities */ "hiL/");
/* harmony import */ var _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/* harmony import */ var _PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PersonaCell.module.scss */ "2glS");
/* harmony import */ var _PersonaCell_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PersonaCell.resx */ "mggt");
var _PersonaCell_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./PersonaCell.resx */ "mggt", 1);










var PersonaCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PersonaCell, _super);
    function PersonaCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonaCell.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, user = _a.user, lpcCardBehavior = _a.lpcCardBehavior;
        /*
         * Immediate LPC means the card adapter is getting loaded with the component, not on demand(hover)
         * to ensure focus zone list behavior is correct
         */
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_odsp_shared_react_lib_components_LivePersonaCardAdapter_DeferredSpLivePersonaCard__WEBPACK_IMPORTED_MODULE_5__["DeferredSpLivePersonaCard"], { personaType: 'User', identifier: user.email, pageContext: this.props.pageContext.legacyPageContext, lpcCardBehavior: lpcCardBehavior, ariaLabel: ariaLabel, moduleLoader: undefined, forceLoad: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_7__["useImmediateLPCUndefinedTopicCardKSActivated"])() && this.props.immediateLPC }, this._renderPersonaCell()));
    };
    PersonaCell.prototype._renderPersonaCell = function () {
        var _a;
        var size = (_a = this.props.size, (_a !== null && _a !== void 0 ? _a : 32));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_4__["css"])(_PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spLikesPersonaBox, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_7__["personaCellTextAlignmentKSActivated"])() && _PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].personaLayoutFix), "data-is-focusable": true, "aria-label": this.props.user.name },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ms_image_lib_lib_acronym_TextboyImageLoader__WEBPACK_IMPORTED_MODULE_3___default.a, { key: this.props.user.email, dimensions: { height: size, width: size }, displayName: this.props.user.name },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { alt: _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_PersonaCell_resx__WEBPACK_IMPORTED_MODULE_9__["userPhotoAlt"], this.props.user.name), className: _PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spLikesPersona, src: _ms_sp_component_utilities__WEBPACK_IMPORTED_MODULE_6__["SPUtility"].getUserPhotoUrl(this.props.user.email) })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spLikesPersonaText },
                this.props.user.name,
                !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_7__["personaCellTextAlignmentKSActivated"])() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _PersonaCell_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].personDescription }, this.props.personaDescription)))));
    };
    return PersonaCell;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "kOVZ":
/*!********************************************!*\
  !*** ./lib/topicCard/TopicCard.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./TopicCard.module.css */ "9/Cm");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "kqZ5":
/*!***********************************************************!*\
  !*** ./lib/topicCard/utilities/logTopicCardEngagement.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logTopicCardEngagement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");
/* harmony import */ var _logEngagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logEngagement */ "M0jl");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */




function logTopicCardEngagement(event, topicId, topicCurated, properties, topicDefinition) {
    var attribution = {};
    if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_3__["isTopicDefinitionActivated"])() && topicDefinition) {
        attribution['topicDefinition'] = topicDefinition;
    }
    Object(_logEngagement__WEBPACK_IMPORTED_MODULE_2__["default"])(event, _common_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].kmTopicCardLogPrefix, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, properties), attribution), topicId, topicCurated);
}


/***/ }),

/***/ "mggt":
/*!****************************************************!*\
  !*** ./lib/topicCard/personaCell/PersonaCell.resx ***!
  \****************************************************/
/*! exports provided: userPhotoAlt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"userPhotoAlt\":\"Ƥĥōţō ōƒ {0}\"}");

/***/ }),

/***/ "pOvN":
/*!*********************************************************!*\
  !*** ./lib/topicCard/feedback/FeedbackQuestionCache.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * In-memory singleton cache of feedback questions to ask a user on visible topics.
 */
var FeedbackQuestionCache = /** @class */ (function () {
    function FeedbackQuestionCache() {
        this._cache = new Map();
    }
    /**
     * Get Question from cache.
     *
     * @param topicId Id of topic entity.
     */
    FeedbackQuestionCache.prototype.getQuestion = function (topicId) {
        var _a;
        var questionsList = this._cache[topicId];
        if (((_a = questionsList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return questionsList[questionsList.length - 1];
        }
        else {
            return undefined;
        }
    };
    /**
     * Add Question to cache.
     *
     * @param topicId Id of topic entity.
     * @param question Question to be added.
     */
    FeedbackQuestionCache.prototype.addQuestion = function (topicId, question) {
        var questionsList = this._cache[topicId] || [];
        questionsList.push(question);
        this._cache[topicId] = questionsList;
    };
    /**
     * Remove question from cache.
     *
     * @param topicId Id of topic entity.
     * @param question Question to be removed.
     */
    FeedbackQuestionCache.prototype.removeQuestion = function (topicId, question) {
        var questionsList = this._cache[topicId] || [];
        for (var i = questionsList.length - 1; i >= 0; i--) {
            if (questionsList[i] === question) {
                questionsList.pop();
                return true;
            }
        }
        return false;
    };
    FeedbackQuestionCache.prototype.removeAllQuestionsForTopic = function (topicId) {
        this._cache[topicId] = [];
        return this._cache[topicId].size === 0;
    };
    FeedbackQuestionCache.prototype.isQuestionQueueEmpty = function (topicId) {
        var questionsList = this._cache[topicId] || [];
        return questionsList.length === 0;
    };
    return FeedbackQuestionCache;
}());
/* harmony default export */ __webpack_exports__["default"] = (FeedbackQuestionCache);


/***/ }),

/***/ "pWas":
/*!************************************************************!*\
  !*** ./lib/topicCard/deferredTopicCard/TopicCardBundle.js ***!
  \************************************************************/
/*! exports provided: TopicCache, TopicCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../topicCache/TopicCache */ "NG/M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicCache", function() { return _topicCache_TopicCache__WEBPACK_IMPORTED_MODULE_0__["TopicCache"]; });

/* harmony import */ var _TopicCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TopicCard */ "1qD4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicCard", function() { return _TopicCard__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/**
 * @copyright (c) Microsoft Corporation.  All rights reserved.
 */
/**
 * @deprecated import directly from sp-topic-shared, remove when graduating ks 15414d36-2271-47b3-8dba-7af9b4688ba8
 */


// todo remove TopicCardBundle: https://onedrive.visualstudio.com/CSI/_workitems/edit/1037568/



/***/ }),

/***/ "poX+":
/*!****************************************************************!*\
  !*** ./lib/topicCard/experienceFeedback/ExperienceFeedback.js ***!
  \****************************************************************/
/*! exports provided: ExperienceFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceFeedback", function() { return ExperienceFeedback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopicUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../TopicUtilities */ "mAUd");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/* harmony import */ var _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExperienceFeedback.resx */ "w45E");
var _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ExperienceFeedback.resx */ "w45E", 1);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */







var FEEDBACK_EMAIL = 'projecthedleyfeedback@service.microsoft.com';
function ExperienceFeedback(_a) {
    var topicId = _a.topicId, topicName = _a.topicName, pageContext = _a.pageContext, className = _a.className;
    var handleClickFeedback = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
        window.open(Object(_TopicUtilities__WEBPACK_IMPORTED_MODULE_4__["getFeedbackMailLink"])({
            feedbackEmail: FEEDBACK_EMAIL,
            topicId: topicId,
            topicName: topicName,
            buildNumber: _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_Telemetry"].buildNumber,
            source: 'Topic Card',
            pageContext: pageContext
        }));
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogEntry"]('TopicCard', 'CSIKM.TopicCard.GiveFeedbackEmail', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_LogType"].Event, {
            topicId: topicId
        }, true));
    }, [topicId, topicName, pageContext]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_5__["isFixFeedbackButtonTooltipKSActivated"])() ? (
    /* Smile face emoji */
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], { iconProps: {
            iconName: 'Emoji2'
        }, onClick: handleClickFeedback, className: className, title: _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6__["TopicFeedbackTooltip"] }, _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6__["TopicFeedbackLabel"])) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["TooltipHost"], { content: _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6__["TopicFeedbackTooltip"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], { iconProps: {
                iconName: 'Emoji2'
            }, onClick: handleClickFeedback, className: className }, _ExperienceFeedback_resx__WEBPACK_IMPORTED_MODULE_6__["TopicFeedbackLabel"])))));
}


/***/ }),

/***/ "sFbo":
/*!************************************************!*\
  !*** ./lib/topicCard/TopicCard.module.scss.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./TopicCard.module.css */ "kOVZ");
var styles = {
    suggestedTopicLabel: 'ai_g_04103875',
    header: 'aj_g_04103875',
    topicCardMaxHeightFix: 'ak_g_04103875',
    titleHeadTruncated: 'al_g_04103875',
    links: 'am_g_04103875',
    fixViewDetailsLink: 'an_g_04103875',
    title: 's_g_04103875',
    titleLegacy: 'ao_g_04103875',
    contribute: 'ap_g_04103875',
    editIcon: 'aq_g_04103875',
    fixViewDetailsIcon: 'ar_g_04103875',
    viewDetailsLink: 'as_g_04103875',
    topicTitleLink: 'at_g_04103875',
    headerTitleFix: 'au_g_04103875',
    viewDetailsText: 'av_g_04103875',
    fixViewDetailsTextHover: 'aw_g_04103875',
    callout: 'ax_g_04103875',
    calloutDismissButton: 'ay_g_04103875',
    cardContentContainer: 'az_g_04103875',
    scrollContainer: 'ba_g_04103875',
    headerSubtext: 'bb_g_04103875',
    experienceFeedbackContainer: 'bc_g_04103875',
    experienceFeedback: 'be_g_04103875',
    feedWithOverflowEdge: 'bf_g_04103875',
    feedWithOverflow: 'bg_g_04103875',
    scrollWrapper: 'bh_g_04103875',
    section: 'bi_g_04103875',
    feedbackPlacholderSection: 'bj_g_04103875',
    sectionTitle: 'bk_g_04103875',
    expertCell: 'bl_g_04103875',
    documentCell: 'bm_g_04103875',
    documentLink: 'bn_g_04103875',
    documentLinkCentered: 'bo_g_04103875',
    documentLinkNoUnderline: 'bp_g_04103875',
    documentIcon: 'bq_g_04103875',
    documentWithDetailsIcon: 'br_g_04103875',
    documentIconMinWidth: 'bs_g_04103875',
    documentWithDetailsIconMinWidth: 'bt_g_04103875',
    documentLinkText: 'bu_g_04103875',
    documentLinkTextWithDetails: 'bv_g_04103875',
    fixLongResourcesLink: 'bw_g_04103875',
    definitionText: 'bx_g_04103875',
    placeholder: 'by_g_04103875',
    clampTitleText: 'bz_g_04103875',
    contributeDocumentText: 'ca_g_04103875',
    sansEditButton: 'cb_g_04103875',
    compactBanner: 'cc_g_04103875',
    descriptionAlternateNames: 'ce_g_04103875',
    descriptionAlternateNameFix: 'cf_g_04103875',
    personDescription: 'ag_g_04103875',
    documentAIReason: 'cg_g_04103875',
    documentDetailsPerson: 'ch_g_04103875',
    documentDetailsBold: 'ci_g_04103875',
    documentDetailsSite: 'cj_g_04103875',
    documentSubText: 'ck_g_04103875',
    screenReaderOnly: 'cl_g_04103875',
    definitionSource: 'cm_g_04103875'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "uw0C":
/*!**********************************************!*\
  !*** ./lib/topicCard/feedback/Feedback.resx ***!
  \**********************************************/
/*! exports provided: HighlightShortenedQuestion, ListingShortenedQuestion, DefinitionShortenedQuestion, Thanks, ConfirmTopicQuestionContext, ConfirmTopicQuestion, LegacyConfirmTopicNegativeResponseConfirmation, ConfirmTopicNegativeResponseConfirmation, RemoveHighlightOnPageQuestion, AnnotateOnPageQuestionContext, AnnotateOnPageQuestion, HighlightsResponseConfirmation, IsDefinitionAccurateContext, IsDefinitionAccurateQuestion, IsDefinitionAccurateConfirmation, IsPersonRelatedQuestionContext, IsFileRelatedQuestionContext, IsRelatedQuestion, IsRelatedConfirmation, PositiveResponse, NegativeResponse, Undo, CloseButtonAriaLabel, CloseButtonTooltip, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HighlightShortenedQuestion\":\"Śĥōũĺď ţĥĩś ĥĩĝĥĺĩĝĥţ ƀē ĥēŕē?\",\"ListingShortenedQuestion\":\"Śĥōũĺď {0} ƀē ĺĩśţēď?\",\"DefinitionShortenedQuestion\":\"Ĩś ţĥē ďēśćŕĩƥţĩōń ćōŕŕēćţ?\",\"Thanks\":\"Ţĥàńķś!\",\"ConfirmTopicQuestionContext\":\"ŵàś ĥĩĝĥĺĩĝĥţēď ƀēćàũśē ĩţ ŵàś àũţōmàţĩćàĺĺŷ ĩďēńţĩƒĩēď àś à ţōƥĩć ōƒ ĩńţēŕēśţ ţō ŷōũŕ ōŕĝàńĩźàţĩōń.\",\"ConfirmTopicQuestion\":\"Śĥōũĺď ĩţ ƀē ĥĩĝĥĺĩĝĥţēď?\",\"LegacyConfirmTopicNegativeResponseConfirmation\":\"Ţĥĩś ţōƥĩć ŵĩĺĺ ƀē ćōńśĩďēŕēď ƒōŕ ŕēmōvàĺ ƒŕōm ŷōũŕ ōŕĝàńĩźàţĩōń\\u0027ś ķńōŵĺēďĝē ńēţŵōŕķ.\",\"ConfirmTopicNegativeResponseConfirmation\":\"Ŷōũ\\u0027vē ţōĺď ũś ţĥĩś ţōƥĩć màŷ ńōţ ƀē ŕĩĝĥţ ƒōŕ ŷōũŕ ōŕĝàńĩźàţĩōń.\",\"RemoveHighlightOnPageQuestion\":\"Ŵōũĺď ŷōũ ŕàţĥēŕ ŕēmōvē ţĥē ĥĩĝĥĺĩĝĥţ ƒŕōm ţĥĩś ƥàĝē ōńĺŷ?\",\"AnnotateOnPageQuestionContext\":\"ŵàś àũţōmàţĩćàĺĺŷ ĩďēńţĩƒĩēď àś ŕēĺēvàńţ ţō ţĥĩś ƥàĝē\\u0027ś ćōńţēńţś.\",\"AnnotateOnPageQuestion\":\"Ĩś ĩţ ŕēĺēvàńţ?\",\"HighlightsResponseConfirmation\":\"Ŷōũŕ ŕēśƥōńśē ŵĩĺĺ ƀē ũśēď ţō ĩmƥŕōvē ţōƥĩć ĥĩĝĥĺĩĝĥţś. Ćĥàńĝēď ŷōũŕ mĩńď?\",\"IsDefinitionAccurateContext\":\"Ţĥē śĥōŕţ ďēśćŕĩƥţĩōń ōƒ {0} ŵàś àũţōmàţĩćàĺĺŷ ēxţŕàćţēď ƒŕōm à ŕēĺàţēď ŕēśōũŕćē.\",\"IsDefinitionAccurateQuestion\":\"Ďōēś ĩţ ďēśćŕĩƀē ţĥē ţōƥĩć ŵēĺĺ?\",\"IsDefinitionAccurateConfirmation\":\"Ŷōũŕ ŕēśƥōńśē ŵĩĺĺ ƀē ũśēď ţō ĩmƥŕōvē ďēśćŕĩƥţĩōńś ōƒ ţōƥĩćś. Ćĥàńĝēď ŷōũŕ mĩńď?\",\"IsPersonRelatedQuestionContext\":\"ŵàś àũţōmàţĩćàĺĺŷ ĩďēńţĩƒĩēď àś ćōńńēćţēď ţō ţĥĩś ţōƥĩć.\",\"IsFileRelatedQuestionContext\":\"Ţĥē ŕēśōũŕćē {0} ŵàś àũţōmàţĩćàĺĺŷ ĩďēńţĩƒĩēď àś ćōńńēćţēď ţō ţĥĩś ţōƥĩć.\",\"IsRelatedQuestion\":\"Ĩś ţĥē ćōńńēćţĩōń ćōŕŕēćţ?\",\"IsRelatedConfirmation\":\"Ŷōũŕ ŕēśƥōńśē ŵĩĺĺ ƀē ũśēď ţō ĩmƥŕōvē àũţōmàţĩć ĩďēńţĩƒĩćàţĩōń ōƒ ćōńńēćţĩōńś. Ćĥàńĝēď ŷōũŕ mĩńď?\",\"PositiveResponse\":\"Ŷēś\",\"NegativeResponse\":\"Ńō\",\"Undo\":\"Ũńďō\",\"CloseButtonAriaLabel\":\"Ćĺōśē ţōƥĩć ƒēēďƀàćķ\",\"CloseButtonTooltip\":\"Ćĺōśē\"}");

/***/ }),

/***/ "w+n4":
/*!********************************************!*\
  !*** ./lib/topicCard/feedback/Feedback.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/ITopicInterfaces */ "TBtE");
/* harmony import */ var _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-dataproviders/lib/dataProviders/common/KMTieredCacheHelper */ "05y5");
/* harmony import */ var _ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-component-utilities/lib/topics/TopicFlightingUtilities */ "Tpx+");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedbackInterfaces */ "L2UT");
/* harmony import */ var _FeedbackDataProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeedbackDataProvider */ "bRuj");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Constants */ "rMgv");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KillSwitches */ "LSGH");
/* harmony import */ var _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Feedback.resx */ "uw0C");
var _Feedback_resx__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Feedback.resx */ "uw0C", 1);
/* harmony import */ var _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Feedback.module.scss */ "JoD4");
/* harmony import */ var _logEngagement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../logEngagement */ "M0jl");
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/KillSwitches */ "+ORw");

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */















var theme = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["getTheme"])();
var MESSAGE_BAR_STYLES = {
    root: !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["darkThemeFeedbackKSActivated"])()
        ? {
            backgroundColor: theme.palette.themeLighterAlt,
            color: theme.palette.black
        }
        : _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].messageBar,
    iconContainer: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].messageBarIconContainer,
    text: [_Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].textContainer],
    innerText: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].text,
    dismissal: [
        _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].dismissButton,
        {
            selectors: {
                '& .ms-Button-icon': !Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["darkThemeFeedbackKSActivated"])()
                    ? {
                        fontSize: 10,
                        color: theme.palette.neutralPrimary
                    }
                    : {
                        fontSize: 14
                    }
            }
        }
    ],
    actions: [_Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].messageBarActionButton]
};
var messageButtonStyles = {
    root: {
        minWidth: 66,
        paddingTop: 12,
        paddingBottom: 13,
        marginLeft: 0
    }
};
/**
 * This React component is responsible for displaying the feedback prompt through which we collect
 * feedback from users on the mined information displayed on the topic card.
 */
var Feedback = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Feedback, _super);
    function Feedback(props) {
        var _a, _b, _c, _d, _e;
        var _this = _super.call(this, props) || this;
        /**
         * Pass along the feedback received for processing/storage and reset state.
         */
        _this._save = function () {
            if (_this._badTopicDisambiguationEnabled) {
                if (_this.state.responseReceived === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].Yes) {
                    _this._feedbackDetails.QuestionType = _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].AnnotateOnPage;
                }
                else {
                    _this._feedbackDetails.QuestionType = _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].ConfirmTopicEntity;
                }
                _this._feedbackDetails.ResponseType = _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].No;
                _this._badTopicDisambiguationEnabled = false;
            }
            else if (!_this._feedbackDetails.ResponseType) {
                _this._feedbackDetails.ResponseType = _this.state.responseReceived;
            }
            _this._removeRejectedAnnotation();
            _this._removeRejectedDefinition();
            _this._logFeedbackResponse();
            if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["feedbackConfirmationResponsivenessFixKSActivated"])()) {
                _this._feedbackDataProvider.processFeedback(_this._currTopicEntity, _this._feedbackDetails);
                _this._feedbackDetails = undefined;
                _this._currTopicEntity = undefined;
                _this.setState({
                    responseReceived: undefined,
                    feedbackMessage: undefined
                });
            }
            else {
                _this._feedbackDataProvider.processFeedback(_this._currTopicEntity, _this._feedbackDetails).then(function () {
                    _this._feedbackDetails = undefined;
                    _this._currTopicEntity = undefined;
                    _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { responseReceived: undefined, feedbackMessage: undefined }));
                });
            }
            if (_this.props.headerLinkRef) {
                _this.props.headerLinkRef.focus();
            }
        };
        _this._handleUndo = function () {
            if (_this._badTopicDisambiguationEnabled && !_this.state.responseReceived) {
                _this._badTopicDisambiguationEnabled = false;
                _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { feedbackMessage: _this._getFeedbackMessage() }));
            }
            else {
                _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { responseReceived: undefined }));
            }
            _this._tryInvalidatePageForIndexedDBUsage();
        };
        _this._handlePostiveResponse = function () {
            _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { responseReceived: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].Yes }));
            _this._tryInvalidatePageForIndexedDBUsage();
        };
        _this._handleNegativeResponse = function () {
            var _a;
            if (((_a = _this._feedbackDetails) === null || _a === void 0 ? void 0 : _a.QuestionType) === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].ConfirmTopicEntity &&
                _this._spoId &&
                !_this._badTopicDisambiguationEnabled) {
                _this._badTopicDisambiguationEnabled = true;
                _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { feedbackMessage: _this._getFeedbackMessage() }));
            }
            else {
                _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { responseReceived: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].No }));
            }
            _this._tryInvalidatePageForIndexedDBUsage();
        };
        _this._setFocusForKeyboardNavigation = function () {
            var _a, _b, _c;
            (_c = (_b = (_a = _this._feedbackRootElement.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('[data-is-focusable=true]')) === null || _b === void 0 ? void 0 : _b.item(0)) === null || _c === void 0 ? void 0 : _c.focus();
        };
        _this._onKeyDown = function (ev, eventHandler) {
            if (ev.which === _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter) {
                eventHandler();
                _this.setState({
                    needSetFocusManually: true
                });
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._onKeyDownPositiveResponse = function (event) {
            _this._onKeyDown(event, _this._handlePostiveResponse);
        };
        _this._onKeyDownNegativeResponse = function (event) {
            _this._onKeyDown(event, _this._handleNegativeResponse);
        };
        _this._onKeyDownUndo = function (event) {
            _this._onKeyDown(event, _this._handleUndo);
        };
        _this._onDismissResponseClick = function () {
            _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { isVisible: false, responseReceived: _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].Dismiss }));
            if (_this.props.headerLinkRef) {
                _this.props.headerLinkRef.focus();
            }
        };
        _this._onShortenedQuestionClick = function () {
            _this.setState({
                shortenedQuestionMode: false
            });
        };
        _this._spoId = _this.props.getSPOId();
        _this._removeAnnotation = _this.props.removeAnnotation;
        if (!((_a = _this._spoId) === null || _a === void 0 ? void 0 : _a.siteId) || !((_b = _this._spoId) === null || _b === void 0 ? void 0 : _b.webId) || !((_c = _this._spoId) === null || _c === void 0 ? void 0 : _c.uniqueId)) {
            _this._spoId = undefined;
        }
        if (!_this._feedbackDataProvider &&
            _this.props.serviceScope &&
            (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_15__["fixPageUniqueIdUnderNewPageKSActivated"])() || _this._spoId)) {
            _this._feedbackDataProvider = new _FeedbackDataProvider__WEBPACK_IMPORTED_MODULE_9__["default"](_this.props.serviceScope, _this._spoId);
        }
        var urlQuery = new URLSearchParams(window.location.search);
        _this._debugMode = ((_d = urlQuery.get('feedbackDebugMode')) === null || _d === void 0 ? void 0 : _d.toLocaleLowerCase().trim()) === 'true';
        _this._debugMockMode = ((_e = urlQuery.get('feedbackMockMode')) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase().trim()) === 'true';
        _this._feedbackRootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.state = {
            feedbackMessage: undefined,
            responseReceived: undefined,
            isVisible: true,
            needSetFocusManually: false,
            shortenedQuestionMode: true
        };
        return _this;
    }
    Feedback.prototype.componentDidUpdate = function () {
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["shortenedFeedbackKSActivated"])() &&
            this.props.topicCardIsHidden &&
            !this.state.shortenedQuestionMode) {
            this.setState({
                shortenedQuestionMode: true
            });
        }
        if ((!this.state.isVisible || this.props.topicCardIsHidden) && this._feedbackDetails) {
            if (this.state.responseReceived || this._badTopicDisambiguationEnabled) {
                this._save();
            }
            this._feedbackDetails = undefined;
        }
        if (this.state.needSetFocusManually) {
            this._setFocusForKeyboardNavigation();
            this.setState({
                needSetFocusManually: false
            });
        }
    };
    Feedback.prototype.render = function () {
        var _this = this;
        var _a;
        if (((_a = this.props.topicEntity) === null || _a === void 0 ? void 0 : _a.Id) !== _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_4__["INVALID_TOPIC"].Id &&
            !this._feedbackDetails &&
            (Object(_common_KillSwitches__WEBPACK_IMPORTED_MODULE_15__["fixPageUniqueIdUnderNewPageKSActivated"])() || this._feedbackDataProvider)) {
            var hashtagged_1 = !!this.props.targetElement.getAttribute(_common_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].kmHashtaggedTopicIdAttribute);
            this._currTopicEntity = this.props.topicEntity;
            this._feedbackDataProvider
                .getFeedbackQuestion(this._currTopicEntity)
                .then(function (question) {
                _this._feedbackDetails = question;
                if (question) {
                    _this._logFeedbackRequest();
                    if (hashtagged_1 &&
                        (question.QuestionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].ConfirmTopicEntity ||
                            question.QuestionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].AnnotateOnPage)) {
                        _this._feedbackDetails.ResponseType = _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].Yes;
                        _this._save();
                    }
                    else {
                        _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { feedbackMessage: _this._getFeedbackMessage(), isVisible: true }));
                    }
                }
            });
        }
        var feedbackMessage;
        if (this.state.responseReceived || this._badTopicDisambiguationEnabled) {
            feedbackMessage = this._renderResponseConfirmation();
        }
        else if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["shortenedFeedbackKSActivated"])() && this.state.shortenedQuestionMode) {
            feedbackMessage = this._renderShortenedQuestion();
        }
        else {
            feedbackMessage = this._renderQuestion();
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._feedbackRootElement }, feedbackMessage);
    };
    /**
     * Render the confirmation message bar shown to the user after they respond to a feedback question.
     *
     * NOTE: fabric MessageBars use alpha levels to soften certain tones by relying on a solid color wrapper parent div.
     * Therefore, by wrapping it here, it assures that MessageBar and its parent wrapper get moved to the right
     * place and not just the child.
     */
    Feedback.prototype._renderResponseConfirmation = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["fixTopicCardMaxHeightKSActivated"])() ? _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].messageBarContainer : undefined, hidden: this.props.topicCardIsHidden || !this.state.isVisible },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBar"], { styles: MESSAGE_BAR_STYLES, messageBarIconProps: {}, messageBarType: _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBarType"].success, dismissButtonAriaLabel: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonAriaLabel"], dismissIconProps: { iconName: 'Clear', title: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonTooltip"] }, onDismiss: this._save },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].semibold }, _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["Thanks"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                this._badTopicDisambiguationEnabled && !this.state.responseReceived
                    ? this._renderBadTopicDisambiguation()
                    : this._renderConfirmationMessage(this.state.feedbackMessage.confirmation))));
    };
    /**
     * Render the feedback question message bar shown to the user after they open a topic card.
     */
    Feedback.prototype._renderShortenedQuestion = function () {
        var _this = this;
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { hidden: this.props.topicCardIsHidden ||
                !this.state.isVisible ||
                !this._feedbackDetails ||
                !this.state.feedbackMessage },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBar"], { styles: MESSAGE_BAR_STYLES, messageBarIconProps: {}, dismissButtonAriaLabel: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonAriaLabel"], dismissIconProps: { iconName: 'Clear', title: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonAriaLabel"] }, onDismiss: this._onDismissResponseClick },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Link"], { style: {
                        color: theme.palette.themePrimary
                    }, onClick: this._onShortenedQuestionClick, 
                    // tslint:disable-next-line: react-this-binding-issue
                    onKeyDown: function (event) {
                        _this._onKeyDown(event, _this._onShortenedQuestionClick);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, ((_a = this.state.feedbackMessage) === null || _a === void 0 ? void 0 : _a.shortenedQuestion) ? this.state.feedbackMessage.shortenedQuestion
                        : '')))));
    };
    /**
     * Render the feedback question message bar shown to the user after indicate they would like to provide feedback.
     *
     * NOTE: fabric MessageBars use alpha levels to soften certain tones by relying on a solid color wrapper parent div.
     * Therefore, by wrapping it here, it assures that MessageBar and its parent wrapper get moved to the right
     * place and not just the child.
     *
     * You'll also notice that this method will render by default even if there isn't a question.
     * That's so that React doesn't complain about returning null/undefined. The returned element will be hidden
     * in such scenario.
     */
    Feedback.prototype._renderQuestion = function () {
        var _a, _b, _c, _d;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { hidden: this.props.topicCardIsHidden ||
                !this.state.isVisible ||
                !this._feedbackDetails ||
                !this.state.feedbackMessage },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBar"], { styles: MESSAGE_BAR_STYLES, messageBarIconProps: {}, dismissButtonAriaLabel: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonAriaLabel"], dismissIconProps: { iconName: 'Clear', title: _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["CloseButtonAriaLabel"] }, onDismiss: this._onDismissResponseClick, actions: this._renderResponseOptions() },
                ((_a = this.state.feedbackMessage) === null || _a === void 0 ? void 0 : _a.prefixBeforeName) ? this.state.feedbackMessage.prefixBeforeName + ' '
                    : '',
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].semibold }, ((_b = this.state.feedbackMessage) === null || _b === void 0 ? void 0 : _b.entityName) ? this.state.feedbackMessage.entityName + ' ' : ''),
                ((_c = this.state.feedbackMessage) === null || _c === void 0 ? void 0 : _c.questionContext) + ' ', (_d = this.state.feedbackMessage) === null || _d === void 0 ? void 0 :
                _d.question,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null))));
    };
    /**
     * Render the message where we determine if the user meant to tell us that an entity is entirely erroneous
     * or if the annotation is just not relevant to the context of the page.
     */
    Feedback.prototype._renderBadTopicDisambiguation = function () {
        var confirmationMessage = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(364 /* CortexRebranding */)
            ? _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["ConfirmTopicNegativeResponseConfirmation"]
            : _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["LegacyConfirmTopicNegativeResponseConfirmation"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            this._renderConfirmationMessage(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(confirmationMessage, this._currTopicEntity.Name)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            this.state.feedbackMessage.question,
            this._renderResponseOptions()));
    };
    /**
     * Render the message for the user to confirm their feedback response.
     *
     * @param message the message to render.
     */
    Feedback.prototype._renderConfirmationMessage = function (message) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            message + ' ',
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["Link"], { style: {
                    color: theme.palette.themePrimary
                }, onClick: this._handleUndo, 
                // tslint:disable-next-line: react-this-binding-issue
                onKeyDown: this._onKeyDownUndo },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].text }, _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["Undo"]))));
    };
    /**
     * Render the response options we're making available to the user for them to give us feedback
     * in a concise manner.
     */
    Feedback.prototype._renderResponseOptions = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].responseOptionContainer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBarButton"], { onClick: this._handlePostiveResponse, 
                // tslint:disable-next-line: react-this-binding-issue
                onKeyDown: this._onKeyDownPositiveResponse, styles: messageButtonStyles, className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].messageBarButtonLeft },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].responseOption }, _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["PositiveResponse"])),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_3__["MessageBarButton"], { onClick: this._handleNegativeResponse, 
                // tslint:disable-next-line: react-this-binding-issue
                onKeyDown: this._onKeyDownNegativeResponse, styles: messageButtonStyles },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _Feedback_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].responseOption }, _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["NegativeResponse"]))));
    };
    /**
     * Determine the right localized strings that should be displayed to the user
     * based on what question we want to ask and whether or not a response has been received.
     */
    Feedback.prototype._getFeedbackMessage = function () {
        if (!this._currTopicEntity || !this._feedbackDetails) {
            return undefined;
        }
        var context = undefined;
        var result = {
            shortenedQuestion: undefined,
            prefixBeforeName: undefined,
            entityName: this._currTopicEntity.Name,
            questionContext: undefined,
            question: undefined,
            confirmation: undefined
        };
        if (this._badTopicDisambiguationEnabled) {
            result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["RemoveHighlightOnPageQuestion"];
            result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["HighlightsResponseConfirmation"];
            return result;
        }
        switch (this._feedbackDetails.QuestionType) {
            case _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].ConfirmTopicEntity:
                result.shortenedQuestion = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["HighlightShortenedQuestion"];
                result.questionContext = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["ConfirmTopicQuestionContext"];
                result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["ConfirmTopicQuestion"];
                result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["HighlightsResponseConfirmation"];
                break;
            case _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].AnnotateOnPage:
                result.shortenedQuestion = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["HighlightShortenedQuestion"];
                result.questionContext = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["AnnotateOnPageQuestionContext"];
                result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["AnnotateOnPageQuestion"];
                result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["HighlightsResponseConfirmation"];
                break;
            case _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].IsPersonRelated:
                result.entityName = this._feedbackDetails.RelatedEntity.Name;
                result.shortenedQuestion = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["ListingShortenedQuestion"], result.entityName);
                result.questionContext = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsPersonRelatedQuestionContext"];
                result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsRelatedQuestion"];
                result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsRelatedConfirmation"];
                break;
            case _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].IsFileRelated:
                context = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsFileRelatedQuestionContext"].split('{0}');
                result.prefixBeforeName = context[0];
                result.entityName = this._feedbackDetails.RelatedEntity.Name;
                result.shortenedQuestion = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Text"].format(_Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["ListingShortenedQuestion"], result.entityName);
                result.questionContext = context[1];
                result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsRelatedQuestion"];
                result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsRelatedConfirmation"];
                break;
            case _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].IsDefinitionAccurate:
                context = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsDefinitionAccurateContext"].split('{0}');
                result.prefixBeforeName = context[0];
                result.shortenedQuestion = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["DefinitionShortenedQuestion"];
                result.questionContext = context[1];
                result.question = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsDefinitionAccurateQuestion"];
                result.confirmation = _Feedback_resx__WEBPACK_IMPORTED_MODULE_12__["IsDefinitionAccurateConfirmation"];
                break;
        }
        return result;
    };
    /**
     * Remove the annotation on the page if the user's response was that the topic is
     * not correct or not relevant to the context of the page its on.
     */
    Feedback.prototype._removeRejectedAnnotation = function () {
        var _a, _b;
        var questionType = (_a = this._feedbackDetails) === null || _a === void 0 ? void 0 : _a.QuestionType;
        var responseType = (_b = this._feedbackDetails) === null || _b === void 0 ? void 0 : _b.ResponseType;
        var questionIsConfirmTopicEntity = questionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].ConfirmTopicEntity;
        var questionIsAnnotateOnPage = questionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].AnnotateOnPage;
        if ((questionIsConfirmTopicEntity || questionIsAnnotateOnPage) && responseType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].No) {
            this._removeAnnotation(this.props.targetElement);
            if (this.props.topicEntity.Id === this._currTopicEntity.Id) {
                this.props.onTopicCardDismissed();
            }
        }
    };
    /**
     * Remove the definition on the topic card if the user's response was that the topic's
     * currently displayed definition is not accurate.
     */
    Feedback.prototype._removeRejectedDefinition = function () {
        var _a, _b, _c;
        var question = this._feedbackDetails;
        var questionType = (_a = question) === null || _a === void 0 ? void 0 : _a.QuestionType;
        var responseType = (_b = question) === null || _b === void 0 ? void 0 : _b.ResponseType;
        if (questionType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["QUESTION_TYPE"].IsDefinitionAccurate && responseType === _FeedbackInterfaces__WEBPACK_IMPORTED_MODULE_8__["RESPONSE_TYPE"].No) {
            var definitionId_1 = (_c = question) === null || _c === void 0 ? void 0 : _c.RelatedEntity.EntityIdentity;
            if (this.props.topicEntity.Id !== _ms_sp_component_utilities_lib_topics_ITopicInterfaces__WEBPACK_IMPORTED_MODULE_4__["INVALID_TOPIC"].Id) {
                this.props.removeTopicCardPropertyValue({ definitionText: definitionId_1.Text });
            }
            else {
                var indexOfDefinitionToRemove = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_7__["findIndex"])(this._currTopicEntity.Definitions, function (definition) { return definition.Definition === definitionId_1.Text; });
                if (indexOfDefinitionToRemove < this._currTopicEntity.Definitions.length &&
                    indexOfDefinitionToRemove > -1) {
                    var removedDefinition = this._currTopicEntity.Definitions.splice(indexOfDefinitionToRemove, 1)[0];
                    if (removedDefinition) {
                        if (this._currTopicEntity.Definition === removedDefinition.Definition) {
                            this._currTopicEntity.Definition = '';
                        }
                    }
                }
            }
        }
    };
    /**
     * Log when we request the user for feedback.
     */
    Feedback.prototype._logFeedbackRequest = function () {
        var _a;
        var questionIsVisible = !this.state.responseReceived && this.state.isVisible && !this.props.topicCardIsHidden;
        var questionType = (_a = this._feedbackDetails) === null || _a === void 0 ? void 0 : _a.QuestionType;
        if (this._debugMockMode || this._debugMode) {
            console.log(_common_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].kmFeedbackLogPrefix + ".request." + questionType);
        }
        else if (questionType && questionIsVisible) {
            Object(_logEngagement__WEBPACK_IMPORTED_MODULE_14__["default"])("request." + questionType, _common_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].kmFeedbackLogPrefix);
        }
    };
    /**
     * Log when we receive a response from the user.
     */
    Feedback.prototype._logFeedbackResponse = function () {
        var _a, _b;
        var questionType = (_a = this._feedbackDetails) === null || _a === void 0 ? void 0 : _a.QuestionType;
        var responseType = (_b = this._feedbackDetails) === null || _b === void 0 ? void 0 : _b.ResponseType;
        if (this._debugMockMode || this._debugMode) {
            console.log(_common_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].kmFeedbackLogPrefix + ".response." + questionType + "." + responseType);
        }
        else if (questionType && responseType) {
            Object(_logEngagement__WEBPACK_IMPORTED_MODULE_14__["default"])("response." + questionType + "." + responseType, _common_Constants__WEBPACK_IMPORTED_MODULE_10__["default"].kmFeedbackLogPrefix);
        }
    };
    /**
     * This function should be called whenever feedback is sent to prevent stale data
     * from returning on the next annotations call when indexed DB is enabled.
     * The function sets flag so the next time the annotations code runs, it can check
     * to see if the page has been invalidated from the cache even if has not expired.
     */
    Feedback.prototype._tryInvalidatePageForIndexedDBUsage = function () {
        if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_11__["invalidatePageForIDBCacheKSActivated"])() && Object(_ms_sp_component_utilities_lib_topics_TopicFlightingUtilities__WEBPACK_IMPORTED_MODULE_6__["isIndexedDBEnabledForCortexAPIs"])()) {
            var uniquePageId = _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getUniquePageId(this._spoId.siteId, this._spoId.webId, this._spoId.uniqueId);
            if (uniquePageId) {
                _ms_sp_dataproviders_lib_dataProviders_common_KMTieredCacheHelper__WEBPACK_IMPORTED_MODULE_5__["default"].setInvalidForCacheUsage(uniquePageId);
            }
        }
    };
    return Feedback;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Feedback);


/***/ }),

/***/ "w45E":
/*!******************************************************************!*\
  !*** ./lib/topicCard/experienceFeedback/ExperienceFeedback.resx ***!
  \******************************************************************/
/*! exports provided: TopicFeedbackLabel, TopicFeedbackTooltip, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TopicFeedbackLabel\":\"Ĝĩvē ƒēēďƀàćķ\",\"TopicFeedbackTooltip\":\"Śēńď àń ēmàĩĺ mēśśàĝē ţō ţĥē ƤŕōĴēćţ Ćōŕţēx ţōƥĩć ēxƥēŕĩēńćēś ţēàm\"}");

/***/ }),

/***/ "zrI7":
/*!**************************************!*\
  !*** ./lib/topicCard/TopicCard.resx ***!
  \**************************************/
/*! exports provided: DefaultDescription, DescriptionPlaceholder, DescriptionPlaceholderV2, DocumentSectionTitle, SuggestedDocumentSectionTitle, EditLabel, EditTopic, ExpertSectionTitle, OpenTopicPage, PageLoading, PeopleHeader, SuggestedPeopleHeader, SnippetSectionTitle, SourceSectionTitle, Subtitle, TopicTag, TopicTitleSettings, TopicSubheader, TopicSectionCountInterval, TopicSectionCountTemplate, SectionCount, TopicNameWithAlternate, DescriptionAlternameNames, DescriptionSingleAlternameName, TopicCardDialogAriaLabel, PeopleCellAriaLabel, ResourceItemAriaLabel, TopicCardViewDetails, TopicCardRelatedPersonDefaultDescription, TopicCardPersonContributedSingleDoc, PersonAIReasonInterval, PersonAIReasonTemplate, DocumentAIReasonInterval, DocumentAIReasonTemplate, DocumentModifiedOn, SuggestedTopicLabel, SuggestedTopicBadgeTooltip, SiteTag, TopicCardDocumentsAriaLabelNew, TopicCardOpenedAriaLabel, TopicCardDismissButtonAriaLabel, TopicCardAlternateName, SuggestedSiteDefaultAIReason, TopicNameWithAlternateName, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"DefaultDescription\":\"Ŵē ĥàvēń\\u0027ţ ƒōũńď à ďēśćŕĩƥţĩōń ŷēţ.\",\"DescriptionPlaceholder\":\"Ēďĩţ {0} ţō àďď à ďēƒĩńĩţĩōń.\",\"DescriptionPlaceholderV2\":\"À śĥōŕţ ďēśćŕĩƥţĩōń ŵĩĺĺ àƥƥēàŕ àś śōōń àś ĩţ\\u0027ś àvàĩĺàƀĺē\",\"DocumentSectionTitle\":\"Ŕēśōũŕćēś\",\"SuggestedDocumentSectionTitle\":\"Śũĝĝēśţēď ŕēśōũŕćēś\",\"EditLabel\":\"Ēďĩţ\",\"EditTopic\":\"Ēďĩţ {0}\",\"ExpertSectionTitle\":\"Ƥēōƥĺē\",\"OpenTopicPage\":\"Śĥōŵ mōŕē\",\"PageLoading\":\"Ĺōàďĩńĝ…\",\"PeopleHeader\":\"Ƥēōƥĺē\",\"SuggestedPeopleHeader\":\"Śũĝĝēśţēď ƥēōƥĺē\",\"SnippetSectionTitle\":\"Śńĩƥƥēţ:\",\"SourceSectionTitle\":\"Śōũŕćē\",\"Subtitle\":\"Ĩmƥŕōvē ŵĥàţ ŵàś ďĩśćōvēŕēď\",\"TopicTag\":\"Ţōƥĩć\",\"TopicTitleSettings\":\"Ţōƥĩć ţĩţĺē śēţţĩńĝś\",\"TopicSubheader\":\"Ĩmƥŕōvē ŵĥàţ ŵàś ďĩśćōvēŕēď\",\"TopicSectionCountInterval\":\"0||1-10||11-\",\"TopicSectionCountTemplate\":\"|| ({0})|| (10+)\",\"SectionCount\":\"{0}{1}\",\"TopicNameWithAlternate\":\"{0}, {1}\",\"DescriptionAlternameNames\":\"Àĺţēŕńàţē ńàmēś: {0}\",\"DescriptionSingleAlternameName\":\"Àĺţēŕńàţē ńàmē: {0}\",\"TopicCardDialogAriaLabel\":\"{0} Ţōƥĩć ćàŕď\",\"PeopleCellAriaLabel\":\"{0}. Ƥŕēśś Ēńţēŕ ţō ōƥēń ďēţàĩĺś ƒōŕ ţĥĩś ƥēŕśōń.\",\"ResourceItemAriaLabel\":\"{0}. {1}.\",\"TopicCardViewDetails\":\"Vĩēŵ ďēţàĩĺś\",\"TopicCardRelatedPersonDefaultDescription\":\"Ćōńţŕĩƀũţēď ţō ŕēśōũŕćēś\",\"TopicCardPersonContributedSingleDoc\":\"Ćōńţŕĩƀũţēď ţō {0}\",\"PersonAIReasonInterval\":\"2-10||11-\",\"PersonAIReasonTemplate\":\"Ćōńţŕĩƀũţēď ţō {0} ŕēśōũŕćēś||Ćōńţŕĩƀũţēď ţō màńŷ ŕēśōũŕćēś\",\"DocumentAIReasonInterval\":\"1||2-10||11-\",\"DocumentAIReasonTemplate\":\"Ţōƥĩć mēńţĩōńēď ōńćē ĩń ţĥĩś ƒĩĺē||Ţōƥĩć mēńţĩōńēď {0} ţĩmēś||Ţōƥĩć mēńţĩōńēď màńŷ ţĩmēś\",\"DocumentModifiedOn\":\"{0} mōďĩƒĩēď {1}\",\"SuggestedTopicLabel\":\"ŚŨĜĜĒŚŢĒĎ ŢŌƤĨĆ\",\"SuggestedTopicBadgeTooltip\":\"Ţĥĩś ţōƥĩć ŵàś àũţōmàţĩćàĺĺŷ ĩďēńţĩƒĩēď àś à ţōƥĩć ōƒ ĩńţēŕēśţ ƒōŕ ŷōũŕ ōŕĝàńĩźàţĩōń.\",\"SiteTag\":\"Śĩţē\",\"TopicCardDocumentsAriaLabelNew\":\"{0}. {1}. {2} mōďĩƒĩēď ōń {3}\",\"TopicCardOpenedAriaLabel\":\"Ţōƥĩć ćàŕď ōƥēńēď\",\"TopicCardDismissButtonAriaLabel\":\"Ćĺōśē\",\"TopicCardAlternateName\":\"{0}, {1}\",\"SuggestedSiteDefaultAIReason\":\"Śũĝĝēśţēď ƀàśēď ōń ŕēśōũŕćēś\",\"TopicNameWithAlternateName\":\"{0} ({1})\"}");

/***/ })

}]);
//# sourceMappingURL=chunk.sp-topic-shared-topic-card_[locale].js.map