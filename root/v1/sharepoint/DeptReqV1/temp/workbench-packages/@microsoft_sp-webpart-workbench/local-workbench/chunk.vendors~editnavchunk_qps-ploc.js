(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~editnavchunk"],{

/***/ "/BpS":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNav.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: DROP_HINT_ID_PREFIX, MAKE_CHILD_DROP_HINT_ID_PREFIX, LAST_DROP_HINT_ID_PREFIX, isCommandAllowed, EditNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_HINT_ID_PREFIX", function() { return DROP_HINT_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_CHILD_DROP_HINT_ID_PREFIX", function() { return MAKE_CHILD_DROP_HINT_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_DROP_HINT_ID_PREFIX", function() { return LAST_DROP_HINT_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCommandAllowed", function() { return isCommandAllowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNav", function() { return EditNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var office_ui_fabric_react_lib_Toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Toggle */ "40s1");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var office_ui_fabric_react_lib_utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/dragdrop/DragDropHelper */ "uGAW");
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _EditNav_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EditNav.scss */ "CjIM");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditNav.resx */ "DF9w");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_EditNav_resx__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _EditNavCallout_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EditNavCallout/index */ "8Lop");
/* harmony import */ var _EditNavDataCache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditNavDataCache */ "0aO2");
/* harmony import */ var _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EditNav.Props */ "pAih");
/* harmony import */ var _EditNavLink_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EditNavLink/index */ "mzwG");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_datasources_lib_utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-datasources/lib/utilities/permissions/PermissionMask */ "z7Uc");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");













// odsp-shared-react













var EMPTY_LINK = {
    name: '',
    url: '',
    elementId: 'EditNavLink-root'
};
var DROP_HINT_ADJ_HEIGHT = 8;
var DEFAULT_MAX_LEVELS = 2;
var AUDIENCE_TARGETING_SUPPORT_URL = 'https://support.office.com/en-us/article/Customize-the-navigation-on-your-SharePoint-site-3cd61ae7-a9ed-4e1e-bf6d-4655f0bf25ca';
/**
 * @public
 */
var DROP_HINT_ID_PREFIX = 'EditNavLinkDropHint_';
/**
 * @public
 */
var MAKE_CHILD_DROP_HINT_ID_PREFIX = 'Drag-Drop-Root-';
/**
 * @public
 */
var LAST_DROP_HINT_ID_PREFIX = DROP_HINT_ID_PREFIX + 'LastItem';
var MAKE_CHILD_DROP_HINT_CLASS = 'ms-EditNavLink-DropHint';
var MAKE_SIBLING_DROP_HINT_CLASS = 'ms-EditNav-ShowDropHint';
var FEATURE_NAME = 'SideNavReorderDragDrop';
// !!! this needs to be kept in sync with template/include/tpweb.h !!!
// See other important eids defined in stucinf.hpp
var OOBNavKeys;
(function (OOBNavKeys) {
    OOBNavKeys["eidQUICKLAUNCH_LISTS"] = "1003";
    OOBNavKeys["eidQUICKLAUNCH_DOCS"] = "1004";
    OOBNavKeys["eidQUICKLAUNCH_PICTURES"] = "1005";
    OOBNavKeys["eidQUICKLAUNCH_DISCUSS"] = "1006";
    OOBNavKeys["eidQUICKLAUNCH_SURVEY"] = "1007";
    OOBNavKeys["eidQUICKLAUNCH_SITES"] = "1026";
    OOBNavKeys["eidQUICKLAUNCH_PEOPLE"] = "1027";
    OOBNavKeys["eidQUICKLAUNCH_APPS"] = "1030";
    OOBNavKeys["eidQUICKLAUNCH_HOME"] = "1031";
    OOBNavKeys["eidQUICKLAUNCH_RECENT"] = "1033";
    OOBNavKeys["eidQUICKLAUNCH_SITECONTENTS"] = "1034";
})(OOBNavKeys || (OOBNavKeys = {}));
/**
 * Returns whether a command is allowed for a link in its current context.
 * @param cmdType Type of command
 * @param link Link the command will operate on
 * @param siblings Siblings of the link the command will operate on
 * @param level Level the link is at (0-indexed)
 * @param maxLevelCount Maximum number of levels allowed
 * @param allowPromotion Whether to allow promoting. This has no affect on top level nodes.
 * @public
 */
function isCommandAllowed(cmdType, link, siblings, level, maxLevelCount, allowPromotion) {
    var linkIndex = siblings.indexOf(link);
    var siblingCount = siblings.length;
    switch (cmdType) {
        case _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].moveUp:
            return linkIndex > 0; // can't move the first link up
        case _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].moveDown:
            return linkIndex < siblingCount - 1; // can't move the last link down
        case _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].remove:
            return true;
        case _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].makeSubLink:
            // Can't make this link a sublink if it's the first or only link at this level,
            // or if it has too many levels of children (such that indenting them would cause
            // them to pass the max level)
            if (linkIndex > 0 && siblingCount > 1) {
                // +1 adjusts for `level` being 0-indexed
                var currentLevelCount = level + 1 + _countChildLevels(link);
                return currentLevelCount < maxLevelCount;
            }
            return false;
        case _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].promoteSubLink:
            return level > 0 && allowPromotion;
    }
}
function _countChildLevels(link) {
    if (link.links && link.links.length) {
        // This link has sublinks, therefore at least 1 child level.
        // Total child levels = this level + # levels of the sublink with the most child levels.
        return 1 + Math.max.apply(Math, link.links.map(_countChildLevels));
    }
    return 0;
}
function _getInsertId(link) {
    return link.elementId + '-insert';
}
/**
 * @public
 */
var EditNav = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNav, _super);
    function EditNav(props) {
        var _this = _super.call(this, props) || this;
        _this._draggedNavLinkLevel = -1;
        _this._onContextMenuClick = function (link) {
            // close current context menu (if any), then show the Edit callout
            _this.setState({ menuVisibleForLink: undefined }, function () {
                _this._onShowCalloutClicked(link, false);
            });
        };
        _this._onContextMenuItemClick = function (link, cmdType, siblings, linkIndex, ellipsisId) {
            _this._dataCache.processCommand(link, cmdType);
            _this.setState({ isSaveButtonDisabled: false, menuVisibleForLink: undefined }, function () {
                // After setting state, restore focus to the appropriate element.
                var elemIdToFocus;
                if (cmdType === _EditNav_Props__WEBPACK_IMPORTED_MODULE_16__["CtxMenuCommand"].remove) {
                    // Link was removed. Try restoring focus to its previous sibling.
                    var prevSibling = siblings[linkIndex - 1];
                    elemIdToFocus = prevSibling && prevSibling.elementId;
                }
                else {
                    // Link moved. Restore focus to the link in its new location.
                    elemIdToFocus = link.elementId;
                }
                // If we can't find a more appropriate element, use the root element
                var elemToFocus = (elemIdToFocus && document.getElementById(elemIdToFocus)) || _this._root.current;
                elemToFocus.focus();
            });
        };
        _this._onShowCalloutClicked = function (link, isInsert) {
            _this.setState({
                calloutVisibleForLink: link,
                menuVisibleForLink: undefined,
                insertMode: isInsert
            });
        };
        _this._onHideCalloutClicked = function () {
            _this.setState({
                calloutVisibleForLink: undefined,
                insertMode: undefined // unset insert mode
            });
        };
        _this._onShowHideMenuClicked = function (link) {
            if (_this.state.menuVisibleForLink === link) {
                // The ... was clicked again for the same link. Hide the menu.
                _this.setState({
                    menuVisibleForLink: undefined
                });
            }
            else {
                // Menu is either hidden entirely or shown for a different link--switch to showing
                // this link's menu, and hide the callout to be safe.
                _this.setState({
                    menuVisibleForLink: link,
                    calloutVisibleForLink: undefined,
                    insertMode: undefined
                });
            }
        };
        _this._onAudienceTargetingSettingChange = function (ev, audienceTargetingEnabled) {
            _this.setState({ isSaveButtonDisabled: false, audienceTargetingEnabled: audienceTargetingEnabled });
            _this._dataCache.updateAudienceTargetingEnabled(audienceTargetingEnabled);
        };
        _this._onSaveClick = function (ev) {
            _this.props.onSave(_this._dataCache);
            ev.stopPropagation();
            ev.preventDefault();
            _this.setState({
                isSaving: true,
                errorMessage: undefined
            });
        };
        _this._onCancelClick = function (ev) {
            _this.props.onCancel();
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onDismissMenu = function (ev) {
            _this.setState({ menuVisibleForLink: undefined });
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._updateDroppingState = function (isDropping, event) {
            if (_this._draggedNavLink && event.type !== 'drop' && !isDropping) {
                _this._resetDropHints();
            }
        };
        _this._onDragOver = function (item, event) {
            if (_this._draggedNavLink) {
                event.stopPropagation();
                _this._computeDropHintToBeShown(event.clientY);
            }
        };
        _this._onDrop = function (item, event) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_20__["Engagement"].logData({
                name: 'EditNav.DragDrop.OnDrop',
                extraData: { action: 'OnDrop', feature: FEATURE_NAME }
            });
            if (_this._draggedNavLink && event) {
                event.stopPropagation();
                if (_this._isValidCurrentDropHintIndex()) {
                    _this._processDragDropCommand(_this._draggedNavLink, _this._currentDropHintIndex);
                }
            }
            _this._resetDropHints();
            _this._dropHintDetails = [];
            _this._draggedNavLink = null;
            _this._draggedNavLinkLevel = -1;
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         *
         */
        _this._computeDropHintToBeShown = function (clientY) {
            try {
                if (_this._editNavLinkContainer) {
                    var clientRect = _this._editNavLinkContainer.current.getBoundingClientRect();
                    var headerOriginY = clientRect.top;
                    var eventYRelativePosition = clientY - headerOriginY;
                    var currentDropHintIndex = _this._currentDropHintIndex;
                    if (_this._isValidCurrentDropHintIndex()) {
                        if (eventYRelativePosition >= _this._dropHintDetails[currentDropHintIndex].yCoordinateRange.start &&
                            eventYRelativePosition <= _this._dropHintDetails[currentDropHintIndex].yCoordinateRange.end) {
                            return;
                        }
                    }
                    var currentIndex = 0;
                    var lastValidColumn = _this._dropHintDetails.length - 1;
                    var maxLoopCount = Math.ceil(Math.log(lastValidColumn) / Math.log(2)) + 1;
                    var isResetDropHint = false;
                    var indexToUpdate = -1;
                    if (eventYRelativePosition <= _this._dropHintDetails[currentIndex].yCoordinateRange.end) {
                        indexToUpdate = currentIndex;
                    }
                    else if (eventYRelativePosition >= _this._dropHintDetails[lastValidColumn].yCoordinateRange.start) {
                        indexToUpdate = lastValidColumn;
                    }
                    else if (_this._isValidCurrentDropHintIndex()) {
                        if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                            eventYRelativePosition >=
                                _this._dropHintDetails[currentDropHintIndex + 1].yCoordinateRange.start &&
                            eventYRelativePosition <= _this._dropHintDetails[currentDropHintIndex + 1].yCoordinateRange.end) {
                            indexToUpdate = currentDropHintIndex + 1;
                        }
                        else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                            eventYRelativePosition >=
                                _this._dropHintDetails[currentDropHintIndex - 1].yCoordinateRange.start &&
                            eventYRelativePosition <= _this._dropHintDetails[currentDropHintIndex - 1].yCoordinateRange.end) {
                            indexToUpdate = currentDropHintIndex - 1;
                        }
                    }
                    if (indexToUpdate === -1) {
                        var startIndex = 0;
                        var endIndex = lastValidColumn;
                        while (maxLoopCount > 0 && startIndex < endIndex) {
                            var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                            if (eventYRelativePosition >= _this._dropHintDetails[middleIndex].yCoordinateRange.start &&
                                eventYRelativePosition <= _this._dropHintDetails[middleIndex].yCoordinateRange.end) {
                                indexToUpdate = middleIndex;
                                break;
                            }
                            else if (eventYRelativePosition < _this._dropHintDetails[middleIndex].yCoordinateRange.start) {
                                endIndex = middleIndex;
                            }
                            else if (eventYRelativePosition > _this._dropHintDetails[middleIndex].yCoordinateRange.end) {
                                startIndex = middleIndex;
                            }
                            else if (middleIndex - 1 >= startIndex &&
                                eventYRelativePosition > _this._dropHintDetails[middleIndex - 1].yCoordinateRange.end) {
                                //Break the loop in case of mouse pointed on dead area
                                isResetDropHint = true;
                                break;
                            }
                            else if (middleIndex + 1 <= endIndex &&
                                eventYRelativePosition < _this._dropHintDetails[middleIndex + 1].yCoordinateRange.start) {
                                //Break the loop in case of mouse pointed on dead area
                                isResetDropHint = true;
                                break;
                            }
                            //This is used to break the infinite loop in case of non sorted drophint calculation
                            maxLoopCount--;
                        }
                    }
                    if (_this._isDropHintBeReset(indexToUpdate) || isResetDropHint || maxLoopCount <= 0) {
                        if (_this._isValidCurrentDropHintIndex()) {
                            _this._resetDropHints();
                        }
                    }
                    else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                        _this._resetDropHints();
                        var _a = _this._dropHintDetails[indexToUpdate], showDropHintCss = _a.showDropHintCss, dropHintElementRef = _a.dropHintElementRef;
                        dropHintElementRef.classList.add(showDropHintCss);
                        _this._currentDropHintIndex = indexToUpdate;
                    }
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_19__["default"].logError(error, {
                    eventName: 'EditNav.DragDrop._computeDropHintToBeShown',
                    feature: FEATURE_NAME
                });
                throw error;
            }
        };
        _this._isDropAllowed = function (draggedItem, droppedOnItem, newLinkLevel, droppedOnItemLevel) {
            if (_this._draggedNavLinkLevel <= droppedOnItemLevel) {
                //Compute the level and compare with max level allowed
                if (_countChildLevels(draggedItem) + newLinkLevel + 1 > _this._maxLevelCount) {
                    return false;
                }
                //This verify that item is not dropped on the child element
                var childItem = droppedOnItem;
                var childLevel = droppedOnItemLevel;
                while (_this._draggedNavLinkLevel < childLevel) {
                    if (childItem.parentNode === _this._draggedNavLink) {
                        return false;
                    }
                    childItem = childItem.parentNode;
                    childLevel = childLevel - 1;
                }
            }
            return true;
        };
        _this._getDropHintPositions = function (links, dropHintDetails, level) {
            try {
                if (links && links.length !== 0) {
                    for (var i = 0; i < links.length; i++) {
                        if (_this._editNavLinkContainer) {
                            var dropHintElementId = '#' + DROP_HINT_ID_PREFIX + links[i].elementId;
                            var editNavElementId = '#' + MAKE_CHILD_DROP_HINT_ID_PREFIX + links[i].elementId;
                            var newSiblingDest = {
                                newParent: links[i].parentNode /**newParent */,
                                newIndex: i /**newIndex */,
                                newParentLevel: level - 1 /**newParentLevel */
                            };
                            var isNewSiblingAllowed = _this._isDropAllowed(_this._draggedNavLink, links[i], level, level);
                            if (isNewSiblingAllowed) {
                                dropHintDetails.push(_this._createDropHintDetail(dropHintElementId, links[i] /** droppedOnLink */, newSiblingDest, -DROP_HINT_ADJ_HEIGHT /** startYCoordAdjustment */, DROP_HINT_ADJ_HEIGHT /** endYCoordAdjustment */, MAKE_SIBLING_DROP_HINT_CLASS));
                            }
                            var newChildDest = {
                                newParent: links[i] /**newParent */,
                                newIndex: null /**newIndex */,
                                newParentLevel: level + 1 /**newParentLevel */
                            };
                            var isNewChildAllowed = _this._isDropAllowed(_this._draggedNavLink, links[i], level + 1, level);
                            if (isNewChildAllowed) {
                                dropHintDetails.push(_this._createDropHintDetail(editNavElementId, links[i] /** droppedOnLink */, newChildDest, DROP_HINT_ADJ_HEIGHT /** startYCoordAdjustment */, -DROP_HINT_ADJ_HEIGHT /** endYCoordAdjustment */, MAKE_CHILD_DROP_HINT_CLASS));
                            }
                            if (links[i].links && links[i].links.length > 0) {
                                _this._getDropHintPositions(links[i].links, dropHintDetails, level + 1);
                            }
                        }
                    }
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_19__["default"].logError(error, {
                    eventName: 'EditNav.DragDrop._getDropHintPositions',
                    feature: FEATURE_NAME
                });
                throw error;
            }
        };
        _this._updateDragInfo = function (props, event) {
            var link = props.link, level = props.level;
            if (link) {
                _this._draggedNavLink = link;
                _this._draggedNavLinkLevel = level;
                _this._getDropHintDetails();
            }
            else if (event) {
                _this._resetDropHints();
                _this._dropHintDetails = [];
                _this._draggedNavLink = null;
                _this._draggedNavLinkLevel = -1;
            }
        };
        _this._getDistanceFromTop = function (currElem) {
            var distance = 0;
            var container = _this._editNavLinkContainer.current;
            if (currElem) {
                while (currElem && currElem.offsetParent !== container) {
                    distance += currElem.offsetTop;
                    currElem = currElem.offsetParent;
                }
                if (currElem && currElem.offsetParent === container) {
                    distance += currElem.offsetTop;
                }
            }
            return distance;
        };
        _this.state = {
            isSaveButtonDisabled: true,
            isLoading: props.isLoading,
            audienceTargetingEnabled: props.audienceTargetingEnabled
        };
        _this._root = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this._parentElement = document.activeElement;
        _this._editNavLinkContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        _this._maxLevelCount = props.maxLevelCount || DEFAULT_MAX_LEVELS;
        _this._dataCache = new _EditNavDataCache__WEBPACK_IMPORTED_MODULE_15__["EditNavDataCache"](props.group, _this._maxLevelCount, props.audienceTargetingEnabled, props.linkLimit);
        _this._group = _this._dataCache && _this._dataCache.getGroupToEdit();
        _this._dragDropHelper = new office_ui_fabric_react_lib_utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
            selection: {
                getSelection: function () {
                    return [];
                }
            }
        });
        _this._currentDropHintIndex = -1;
        _this._createDropHintDetail = _this._createDropHintDetail.bind(_this);
        _this._audiencesDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_22__["AudiencesDataSource"].getInstance(props.pageContext);
        return _this;
    }
    EditNav.prototype.componentDidMount = function () {
        // If the component mounts in already-loaded state, set focus to the root element
        // (otherwise see componentDidUpdate)
        this._focusIfNeeded();
        if (this._isSiteNavReorderDragDropFlightOn &&
            this._dragDropHelper &&
            this._editNavLinkContainer &&
            this._editNavLinkContainer.current) {
            this._editNavLinkcontainerSubscriptionObject = this._dragDropHelper.subscribe(this._editNavLinkContainer.current, this._events, this._getEditNavDragDropOptions());
        }
    };
    EditNav.prototype.componentDidUpdate = function () {
        // In case the component initially mounted in loading state, and it just finished loading,
        // set the focus to the root element (will only be done once)
        this._focusIfNeeded();
        if (this._isSiteNavReorderDragDropFlightOn &&
            !this._editNavLinkcontainerSubscriptionObject &&
            this._dragDropHelper &&
            this._editNavLinkContainer &&
            this._editNavLinkContainer.current) {
            this._editNavLinkcontainerSubscriptionObject = this._dragDropHelper.subscribe(this._editNavLinkContainer.current, this._events, this._getEditNavDragDropOptions());
        }
    };
    EditNav.prototype.componentWillUnmount = function () {
        if (this._isSiteNavReorderDragDropFlightOn && this._editNavLinkcontainerSubscriptionObject) {
            this._editNavLinkcontainerSubscriptionObject.dispose();
            delete this._editNavLinkcontainerSubscriptionObject;
        }
        if (this._parentElement) {
            this._parentElement.focus();
        }
    };
    EditNav.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var props = this.props;
        if (props.isLoading && !nextProps.isLoading && nextProps.group) {
            // Finished loading. Set the group.
            this._dataCache = new _EditNavDataCache__WEBPACK_IMPORTED_MODULE_15__["EditNavDataCache"](nextProps.group, this._maxLevelCount, nextProps.audienceTargetingEnabled, this.props.linkLimit);
            this._group = this._dataCache && this._dataCache.getGroupToEdit();
            this.setState({ isLoading: false }, function () {
                // If the group has no links, display the add link callout (wait until after things have
                // rendered for the first time so the callout will position correctly)
                if (!nextProps.group.links.length) {
                    _this.setState({ calloutVisibleForLink: EMPTY_LINK, insertMode: true });
                }
            });
        }
    };
    EditNav.prototype.render = function () {
        var group = this._group;
        var title = this.props.title;
        var state = this.state;
        var isOnTop = this.props.isOnTop;
        var parentClassName = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])('ms-EditNav', isOnTop && 'is-onTop ms-u-slideRightIn40');
        var buttonContainerClassNames = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])('ms-EditNav-Buttons', this._shouldShowAudienceTargetingToggle() && 'ms-EditNav-Buttons--withATSetting');
        var content = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNav-links', ref: this._editNavLinkContainer }, this._renderLinks(group.links, 0 /*level*/)));
        var buttons = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: buttonContainerClassNames },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], { disabled: state.isSaveButtonDisabled, className: 'ms-EditNav-SaveButton', "data-logging-id": 'EditNav.Save', "data-automationid": 'EditNav-SaveButton', ariaLabel: _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.ArialLabelSaveButtonDescription, onClick: this._onSaveClick }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.SaveButtonLabel),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_4__["DefaultButton"], { className: 'ms-EditNav-CancelButton', onClick: this._onCancelClick }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.CancelButtonLabel)));
        if (!group || state.isLoading) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: parentClassName },
                this._renderNavigationSetting(),
                buttons));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical, componentRef: this._root },
                title && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", { className: 'ms-EditNav-title' }, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("nav", { role: 'region', "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAriaLabel, className: parentClassName },
                    content,
                    isFixAudienceSectionAccessibilityKillSwitchActivated() && this._renderNavigationSetting())),
            !isFixAudienceSectionAccessibilityKillSwitchActivated() && this._renderNavigationSetting(),
            buttons));
    };
    EditNav.prototype.processCommands = function (linkToUpdate, cmdType) {
        this._dataCache.processCommand(linkToUpdate, cmdType);
    };
    EditNav._isOOBorDocLibLink = function (link) {
        return link.isDocLib || Object.keys(OOBNavKeys).some(function (key) { return OOBNavKeys[key] === link.key; });
    };
    EditNav.prototype._renderLinks = function (links, level, parentLinkHasAudience) {
        var _this = this;
        var _a;
        var _b = this, props = _b.props, state = _b.state;
        if (!links || !links.length) {
            // If there are no links at this level and it's NOT the first level, nothing to render.
            if (level > 0) {
                return undefined;
            }
            // This is the first level and the nav is totally empty.
            // Render just an insert line for adding a link (potentially with callout).
            var insertId = _getInsertId(EMPTY_LINK);
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNav-link' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNav-insertLine is-visible', id: insertId, role: 'button', tabIndex: -1, "data-is-focusable": true, "data-automationid": 'EditNav-insertLine', "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.CalloutAddLinkAriaLabel, title: _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.CalloutAddLinkAriaLabel, onClick: this._onShowCalloutClicked.bind(this, EMPTY_LINK, true) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: isFixEditNavAddIconKillSwitchActivated() ? 'CircleAdditionSolid' : 'Add', className: 'ms-EditNav-plusIcon' })),
                state.calloutVisibleForLink ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_14__["EditNavCallout"], { target: document.getElementById(insertId), onOKClicked: this._onCalloutOkClicked.bind(this, undefined, level), onCancelClicked: this._onHideCalloutClicked, resourceLinks: props.resourceLinks, insertMode: true, pageContext: props.pageContext, isHeaderOptionEnabled: props.navPlacement === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_11__["NavPlacementType"].HORIZONTAL || props.isHubSite, onSelectionChanged: props.onSelectionChanged, isOkButtonDisabled: props.isOKDisabled, isNavAudienceTargetingEnabled: this.state.audienceTargetingEnabled, currentLCID: (_a = this.props.pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage, translatedTitles: state.calloutVisibleForLink.translatedTitles, webDefaultTitle: state.calloutVisibleForLink.webDefaultTitle })) : undefined));
        }
        // Normal case: render each link at this level
        var linkElements = links.map(function (link) {
            return !_this._shouldHideLink(link, level)
                ? _this._renderLink(link, links, level, parentLinkHasAudience)
                : undefined;
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { role: 'list' },
            linkElements,
            this._isSiteNavReorderDragDropFlightOn &&
                level === 0 &&
                this._renderDropHint(true /*isLastDropHint*/, null /*navLinkKey*/)));
    };
    /**
     * Check whether the specified link and its children should be rendered in the EditNav UI.
     * This is for cases where we don't want users to edit some links such as some cases in the footer.
     * @param link Link to check
     */
    EditNav.prototype._shouldHideLink = function (link, linkLevel) {
        return (this.props.hideLinksAboveMaxLevel &&
            this.props.maxLevelCount !== undefined &&
            linkLevel >= this.props.maxLevelCount);
    };
    EditNav.prototype._renderNavigationSetting = function () {
        if (!this._shouldShowAudienceTargetingToggle()) {
            return false;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", { className: 'ms-EditNav-splitline' }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNav-AudienceTargetInner' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNav-AudienceTargetingTitle' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNav-AudienceTargetingText' }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingTitleText),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHost"], { content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                            _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingInfoText,
                            isAudienceLinkOnInfoIconKillSwitchActivatd() && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], { href: AUDIENCE_TARGETING_SUPPORT_URL, target: '_blank', styles: { root: [{ marginLeft: 5 }] } }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingLearnMore))), 
                        // provide some time for user to interact with anchor
                        closeDelay: 1000, delay: office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipDelay"].zero }, isAudienceLinkOnInfoIconKillSwitchActivatd() ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info', className: 'ms-EditNav-AudienceTargetingInfoIcon' })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], { className: 'ms-EditNav-AudienceTargetingInfoIcon', href: AUDIENCE_TARGETING_SUPPORT_URL, target: '_blank', "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingInfoText },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: 'Info' }))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Toggle__WEBPACK_IMPORTED_MODULE_6__["Toggle"], { styles: {
                        root: {
                            margin: '8px 0'
                        }
                    }, ariaLabel: _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingInfoText, checked: this.state.audienceTargetingEnabled, onText: _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingOn, offText: _EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.EditNavAudienceTargetingOff, onChange: this._onAudienceTargetingSettingChange }))));
    };
    EditNav.prototype._renderLink = function (link, siblings, level, parentLinkHasAudience) {
        // render a link (note: in React, each <li> must have a unique, stable "key" property)
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: 'ms-EditNav-linkRow', key: link.elementId, role: 'listitem' },
            this._renderCompositeLink(link, siblings, level, parentLinkHasAudience),
            link.isExpanded
                ? this._renderLinks(link.links, level + 1, 
                // check grand parent and parent audiences
                !!parentLinkHasAudience || this._audiencesDataSource.containsAudiences([link]))
                : undefined));
    };
    EditNav.prototype._renderCompositeLink = function (link, siblings, level, parentLinkHasAudience) {
        var _a;
        // Each link is composed of link display text, a context menu button (...), and an
        // insert line immediately afterward for adding a new link at that position.
        var _b = this, props = _b.props, state = _b.state;
        var insertMode = state.insertMode;
        var insertId = _getInsertId(link);
        var hasCallout = state.calloutVisibleForLink === link;
        var hasContextMenu = state.menuVisibleForLink === link;
        // Don't include an insert line if the link has children. Logically, the insert line after a
        // parent link should insert a link before the first child--but the way it's programmed now,
        // it would insert a sibling (after the children). Therefore, it's better to just not display
        // the line (until there's time to make it do the right thing).
        var hasChildren = this.props.hideLinksAboveMaxLevel
            ? link.links &&
                link.links.length &&
                this.props.maxLevelCount !== undefined &&
                level + 1 < this.props.maxLevelCount
            : !!(link.links && link.links.length);
        var linkLimitReached = this.props.linkLimit !== undefined
            ? this._dataCache.getGroupToEdit().links.length >= this.props.linkLimit
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            this._isSiteNavReorderDragDropFlightOn &&
                this._renderDropHint(false /*isLastDropHint*/, link.elementId),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: MAKE_CHILD_DROP_HINT_ID_PREFIX + link.elementId },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EditNavLink_index__WEBPACK_IMPORTED_MODULE_17__["EditNavLink"], { onShowCalloutClicked: this._onShowCalloutClicked, onShowHideMenuClicked: this._onShowHideMenuClicked, siblings: siblings, isInsertMode: insertMode, hasCallout: hasCallout, hasContextMenu: hasContextMenu, hasChildren: hasChildren, isLinkLimitReached: linkLimitReached, onContextMenuClick: this._onContextMenuClick, onContextMenuItemClick: this._onContextMenuItemClick, dragDropHelper: this._dragDropHelper, insertId: insertId, level: level, maxLevelCount: this._maxLevelCount, link: link, key: link.key, onDismissMenu: this._onDismissMenu, isDraggable: true, updateDragInfo: this._updateDragInfo, isNavAudienceTargetingEnabled: this.state.audienceTargetingEnabled, topLevelLinkLimit: this.props.linkLimit })),
            hasCallout && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_14__["EditNavCallout"], { target: document.getElementById(!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__["Killswitch"].isActivated('a18c31c2-2fc1-4374-bdd9-25f676dbdce9', '12/2/2020', 'fix callout location')
                    ? insertMode
                        ? insertId
                        : link.elementId
                    : insertId), address: insertMode ? '' : link.url, display: insertMode ? '' : link.name, audiences: insertMode ? undefined : link.audiences, onOKClicked: this._onCalloutOkClicked.bind(this, link, level), onCancelClicked: this._onHideCalloutClicked, resourceLinks: props.resourceLinks, defaultSelectedKey: this._getDefaultSelectedKey(link.url), insertMode: insertMode, pageContext: props.pageContext, isHeaderOptionEnabled: (props.navPlacement === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_11__["NavPlacementType"].HORIZONTAL || props.isHubSite) &&
                    (insertMode || !EditNav._isOOBorDocLibLink(link)), onSelectionChanged: props.onSelectionChanged, isOkButtonDisabled: props.isOKDisabled, isNavAudienceTargetingEnabled: this.state.audienceTargetingEnabled, showChildAudienceTargetingMessage: level > 0 && parentLinkHasAudience, showParentAudienceTargetingMessage: (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__["Killswitch"].isActivated('93341426-8096-46d4-aa1f-27becb848e87', '12/2/2020', 'fix audience targeting message') ||
                    !insertMode) &&
                    level === 0 &&
                    !!link.links, navNodeId: insertMode ? undefined : link.key, currentLCID: insertMode || !link.currentLCID /** new node or not saved yet */
                    ? (_a = this.props.pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage : link.currentLCID, translatedTitles: insertMode ? undefined : link.translatedTitles, webDefaultTitle: insertMode ? undefined : link.webDefaultTitle }))));
    };
    EditNav.prototype._getDefaultSelectedKey = function (linkUrl) {
        var resourceLinks = this.props.resourceLinks;
        if (linkUrl && resourceLinks && !this.state.insertMode) {
            // Determine if the link being edited has the same URL as one of the pre-defined resources.
            // If so, that resource should be the default selection in the callout's dropdown.
            // ("Same" is defined as matching host, path, and query.)
            var linkUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_10__["default"](linkUrl);
            var linkMainUrl = linkUri.getStringWithoutQueryAndFragment();
            var linkQuery = linkUri.getQuery();
            for (var _i = 0, resourceLinks_1 = resourceLinks; _i < resourceLinks_1.length; _i++) {
                var resourceLink = resourceLinks_1[_i];
                var resourceUrl = resourceLink.url;
                var resourceUri = new _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_10__["default"](resourceUrl);
                if (linkUrl === resourceUrl ||
                    (linkMainUrl === resourceUri.getStringWithoutQueryAndFragment() &&
                        linkQuery === resourceUri.getQuery())) {
                    return resourceUrl;
                }
            }
        }
        return undefined;
    };
    EditNav.prototype._onCalloutOkClicked = function (originalLink, originalLinkLevel, address, display, audiences, selectedKey, translatedTitles, webDefaultTitle, currentLCID) {
        var newLinkElementId;
        var _hubs = this.props.hubs;
        var _hub = this.props.hub;
        if (this.state.insertMode) {
            var forceAddLinkAsSibling = this.props.hideLinksAboveMaxLevel &&
                this.props.maxLevelCount !== undefined &&
                originalLinkLevel + 1 >= this.props.maxLevelCount;
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__["default"].isFeatureEnabled({ ODB: 1631 }) && _hubs && _hubs.length > 0) {
                var root_1 = {
                    name: '',
                    url: '',
                    links: [],
                    parentNode: null,
                    isExpanded: true
                };
                var insertedNavName = _hub && _hub.name;
                if (selectedKey === _EditNavCallout_index__WEBPACK_IMPORTED_MODULE_14__["PARENT_SIBLING_HUBS_OPTION"]) {
                    root_1.name = display || _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_21__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.ParentSiblingNavNodeName, insertedNavName);
                }
                else if (selectedKey === _EditNavCallout_index__WEBPACK_IMPORTED_MODULE_14__["CHILDREN_HUBS_OPTION"]) {
                    root_1.name = display || _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_21__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_13___default.a.ChildrenNavNodeName, insertedNavName);
                }
                _hubs.forEach(function (hub) {
                    root_1.links.push({
                        name: hub.name,
                        url: hub.siteUrl || '',
                        parentNode: root_1,
                        isExpanded: true
                    });
                });
                newLinkElementId = this._dataCache.addNewLink(originalLink, root_1, forceAddLinkAsSibling);
            }
            else {
                // Insert the new link after the current link
                newLinkElementId = this._dataCache.addLink(originalLink, display, address, undefined, audiences, forceAddLinkAsSibling, translatedTitles, webDefaultTitle, currentLCID);
            }
        }
        else if (originalLink) {
            // Not in insert mode, so update the current link
            originalLink.name = display;
            originalLink.url = address;
            originalLink.audiences = audiences;
            originalLink.translatedTitles = translatedTitles;
            originalLink.currentLCID = currentLCID;
        }
        this.setState({
            isSaveButtonDisabled: false,
            calloutVisibleForLink: undefined,
            newLinkElementId: newLinkElementId
        });
    };
    EditNav.prototype._focusIfNeeded = function () {
        if (!this._hasFocused && this._root.current) {
            this._root.current.focus();
            this._hasFocused = true;
        }
        if (this.state.newLinkElementId) {
            var newLinkElement = document.getElementById(this.state.newLinkElementId);
            if (newLinkElement) {
                newLinkElement.focus();
                this.setState({ newLinkElementId: undefined });
            }
        }
    };
    Object.defineProperty(EditNav.prototype, "_isSiteNavReorderDragDropFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_18__["default"].isFeatureEnabled({ ODB: 1345 });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create drophint element
     *
     * @param isLastDropHint, true if its the last drop hint on group.links[] else false
     * @param navLinkKey, unique key for the drophint
     * @returns ReactElement containing the drophint element
     *
     */
    EditNav.prototype._renderDropHint = function (isLastDropHint, navLinkKey) {
        var dropHintId = DROP_HINT_ID_PREFIX + navLinkKey;
        if (isLastDropHint) {
            dropHintId = LAST_DROP_HINT_ID_PREFIX;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: dropHintId, key: dropHintId, "aria-hidden": true, "data-is-focusable": false, className: 'ms-EditNav-DropHintline' }));
    };
    /**
     * Process drag drop command to perform MakeSubLink/MoveBefore
     * action on the nav link and update the state to enable the save button.
     *
     * @param draggedItem, dragged nav link
     * @param currentDropHintIndex, Index of dropHint range on which the dragged item is dropped
     *
     */
    EditNav.prototype._processDragDropCommand = function (draggedItem, currentDropHintIndex) {
        try {
            var linkDestination = this._dropHintDetails[currentDropHintIndex].linkDestination;
            var isValidDrop = this._validateMoveLinkParams(draggedItem, linkDestination.newParent);
            if (isValidDrop &&
                this._dataCache.moveLink(draggedItem, linkDestination.newParent, linkDestination.newIndex)) {
                this.setState({ isSaveButtonDisabled: false, calloutVisibleForLink: undefined });
            }
        }
        catch (error) {
            _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_19__["default"].logError(error, {
                eventName: 'EditNav.DragDrop._processDragDropCommand',
                feature: FEATURE_NAME
            });
            throw error;
        }
    };
    EditNav.prototype._validateMoveLinkParams = function (draggedItem, newParent) {
        //Depth of the tree after move link should be less than the max level count
        var moveItemLevel = _countChildLevels(draggedItem) + 1;
        var newParentDepth = newParent ? this._calculateLinkDepth(newParent) : -1;
        if (moveItemLevel + newParentDepth + 1 <= this._maxLevelCount) {
            return true;
        }
        return false;
    };
    EditNav.prototype._getEditNavDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver
        };
        return options;
    };
    EditNav.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    EditNav.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            var _a = this._dropHintDetails[this._currentDropHintIndex], showDropHintCss = _a.showDropHintCss, dropHintElementRef = _a.dropHintElementRef;
            dropHintElementRef.classList.remove(showDropHintCss);
            this._currentDropHintIndex = -1;
        }
    };
    EditNav.prototype._isDropHintBeReset = function (indexToUpdate) {
        try {
            var currentDropHintDetail = this._dropHintDetails[indexToUpdate];
            if (currentDropHintDetail) {
                var linkDestination = currentDropHintDetail.linkDestination, droppedOnItem = currentDropHintDetail.link;
                //Dont drop the item on itself
                if (this._draggedNavLink === droppedOnItem) {
                    return true;
                }
                //Dont show drop hint of next below link
                if (indexToUpdate > 0 &&
                    droppedOnItem &&
                    droppedOnItem.parentNode === this._draggedNavLink.parentNode &&
                    this._dropHintDetails[indexToUpdate - 1].link === this._draggedNavLink) {
                    return true;
                }
                //If a last child of a link is dropped on its own parent
                //In case of on link drop, droppedOnItem becomes the new parent
                if (droppedOnItem &&
                    droppedOnItem.links &&
                    droppedOnItem === linkDestination.newParent &&
                    droppedOnItem.links.length > 0 &&
                    droppedOnItem.links[droppedOnItem.links.length - 1] === this._draggedNavLink) {
                    return true;
                }
            }
        }
        catch (error) {
            _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_19__["default"].logError(error, {
                eventName: 'EditNav.DragDrop._isDropHintBeReset',
                feature: FEATURE_NAME
            });
            return true;
        }
        return false;
    };
    EditNav.prototype._getDropHintDetails = function () {
        var dropHintDetails = [];
        this._getDropHintPositions(this._group.links, dropHintDetails, 0 /**initialLevel */);
        //Last link is added after the recurssion as we want to add this extra drop hint after traversing all the links
        var link = this._group.links[this._group.links.length - 1];
        if (this._isDropAllowed(this._draggedNavLink, link, 0 /**newLinkLevel */, 0 /**groupLinkLevel */)) {
            var lastDropHintElementId = '#' + LAST_DROP_HINT_ID_PREFIX;
            dropHintDetails.push(this._createDropHintDetail(lastDropHintElementId, link /** droppedOnLink */, {
                newParent: link.parentNode /**newParent */,
                newIndex: this._group.links.length /**newIndex */,
                newParentLevel: -1 /**newParentLevel */
            }, -DROP_HINT_ADJ_HEIGHT /** startYCoordAdjustment */, 0 /*LastDropHintEndPositionAdjustment */, MAKE_SIBLING_DROP_HINT_CLASS));
        }
        this._dropHintDetails = dropHintDetails;
    };
    EditNav.prototype._createDropHintDetail = function (elementId, link, linkDestination, startIndexAdj, endIndexAdj, dropHintCss) {
        var dropHintElement = this._editNavLinkContainer.current.querySelector(elementId);
        var dropHintDistanceFromTop = this._getDistanceFromTop(dropHintElement);
        return {
            originYCoordinate: dropHintDistanceFromTop,
            yCoordinateRange: {
                start: dropHintDistanceFromTop + startIndexAdj,
                end: dropHintDistanceFromTop + dropHintElement.offsetHeight + endIndexAdj
            },
            dropHintElementRef: dropHintElement,
            linkDestination: linkDestination,
            link: link,
            showDropHintCss: dropHintCss
        };
    };
    /**
     * Calculcate the depth of the node from base node(Group.links)
     * @param link link for depth calculation
     */
    EditNav.prototype._calculateLinkDepth = function (link) {
        if (link.parentNode) {
            return 1 + this._calculateLinkDepth(link.parentNode);
        }
        return 0;
    };
    EditNav.prototype._shouldShowAudienceTargetingToggle = function () {
        return (this.props.pageContext &&
            _ms_odsp_datasources_lib_utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_23__["PermissionMask"].hasPermission(this.props.pageContext.webPermMasks, _ms_odsp_datasources_lib_utilities_permissions_PermissionMask__WEBPACK_IMPORTED_MODULE_23__["PermissionMask"].manageWeb));
    };
    EditNav.defaultProps = {
        group: undefined,
        onSave: undefined,
        onCancel: undefined,
        onRenderLink: function (link) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNav-linkText' }, link.name); }
    };
    return EditNav;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

function isAudienceLinkOnInfoIconKillSwitchActivatd() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__["Killswitch"].isActivated('1c3815f2-1cc1-450b-b347-ae788989c259', '2020-08-24', 'Move the audience targeting learn more link on info icon');
}
function isFixAudienceSectionAccessibilityKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__["Killswitch"].isActivated('5a6ebd84-975a-4e6a-be55-cf1c3007f85f', '2020-09-04', 'Move the audience section out of focus zone to make them accessible from Tab key');
}
function isFixEditNavAddIconKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_24__["Killswitch"].isActivated('a810a451-63dd-4ce8-b596-db6c86184d4a', '12/08/2020', 'Fix Edit Nav insert plus icon, match with plus icon in edit nav link');
}
//# sourceMappingURL=EditNav.js.map

/***/ }),

/***/ "0aO2":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavDataCache.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavDataCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavDataCache", function() { return EditNavDataCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditNav */ "/BpS");
/* harmony import */ var _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditNav.Props */ "pAih");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");







var _uniqueId = 1;
function getNextId() {
    return 'EditNavLink-' + _uniqueId++;
}
var FEATURE_NAME = 'SideNavReorderDragDrop';
var MOVED_LINK_NOT_FOUND_ERROR = 'MovedLinkNotFound';
/**
 * EditNavDataCache is a data source-agnostic module that keeps a record of the
 * EditNav component's updates of nav links and audience targeting setting state. When the user clicks the button to
 * save changes, the data cache's owner can call getLinksToSave to get the cached
 * edit data for saving to the server.
 *
 * The data cache's lifecycle is from EditNav component mount to unmount.
 * @public
 */
var EditNavDataCache = /** @class */ (function () {
    function EditNavDataCache(group, maxLevelCount, isNavAudienceTargetingEnabled, linkLimit) {
        this._maxLevelCount = maxLevelCount;
        this._isNavAudienceTargetingEnabled = !!isNavAudienceTargetingEnabled;
        this._linkLimit = linkLimit;
        this.init(group);
    }
    /** Public for testing only */
    EditNavDataCache.prototype.init = function (group, addKeys) {
        this._clientLinks = [];
        this._deletedLinks = [];
        // make a copy of the group and its links for editing
        this._group = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, group), { links: this._getLinksToEdit(group.links, false) });
    };
    EditNavDataCache.resetUniqueId = function (seed) {
        _uniqueId = seed;
    };
    EditNavDataCache.prototype.getGroupToEdit = function () {
        return this._group;
    };
    EditNavDataCache.prototype.updateAudienceTargetingEnabled = function (enabled) {
        this._isNavAudienceTargetingEnabled = enabled;
    };
    EditNavDataCache.prototype.getAudienceTargetingEnabled = function () {
        return this._isNavAudienceTargetingEnabled;
    };
    /**
     * Gets the result of any edits the user made to the nav links, including any links which
     * were deleted (so the server can delete those links as well).
     */
    EditNavDataCache.prototype.getLinksToSave = function () {
        return this._group.links.concat(this._deletedLinks);
    };
    /**
     * Gets the result of any edits the user made to the nav links PLUS any client-only links that
     * existed in the group passed in to the data cache.
     *
     * ASSUMPTION: Any client-only nodes (recycle bin, edit) will be at the end of the original
     * set of links passed in.
     *
     * @todo This will incorrectly move "Shared with us" (groups only, odsp-next only) to the end
     * rather than after Documents. However, even with the old approach that put it back in the right
     * place immediately after editing, it would disappear as soon as the updated links were fetched
     * from the server (which it still does)...so a more comprehensive solution is needed.
     */
    EditNavDataCache.prototype.getViewLinks = function () {
        return this._getViewLinks(this._group.links).concat(this._clientLinks);
    };
    EditNavDataCache.prototype.updateLink = function (link, name, url, target) {
        link.name = name;
        link.url = url;
        link.target = target;
    };
    /**
     * The original `addLink` method is to add a new link by providing necessary properties, but can only add one link at a time.
     * With this method, you can create a new link by providing an IEditNavLink instance. Personally I prefer this API.
     */
    EditNavDataCache.prototype.addNewLink = function (afterLink, newLink, forceAddAsSibling) {
        if (this._isSiteNavReorderDragDropFlightOn) {
            if (afterLink) {
                newLink.parentNode = afterLink.parentNode;
            }
            else {
                //If the link get added in groups.links then parentNode should be initialized to null
                newLink.parentNode = null;
            }
        }
        newLink.elementId = getNextId();
        this._addLink(this._group.links, afterLink, newLink, forceAddAsSibling);
        return newLink.elementId;
    };
    EditNavDataCache.prototype.addLink = function (afterLink, name, url, target, audiences, forceAddAsSibling, translatedTitles, webDefaultTitle, currentLCID) {
        var newLink = {
            name: name,
            url: url,
            target: target,
            isExpanded: true,
            elementId: getNextId(),
            audiences: audiences,
            translatedTitles: translatedTitles,
            webDefaultTitle: webDefaultTitle,
            currentLCID: currentLCID
        };
        if (this._isSiteNavReorderDragDropFlightOn) {
            if (afterLink) {
                newLink.parentNode = afterLink.parentNode;
            }
            else {
                //If the link get added in groups.links then parentNode should be initialized to null
                newLink.parentNode = null;
            }
        }
        this._addLink(this._group.links, afterLink, newLink, forceAddAsSibling);
        return newLink.elementId;
    };
    /**
     * Process context menu command on a nav link.
     */
    EditNavDataCache.prototype.processCommand = function (linkToUpdate, cmdType) {
        this._processCommand(cmdType, linkToUpdate, this._group, 0);
    };
    /**
     * Return the parent Links array of the given link
     * In case of null link/link's parent
     *  then this method return Group.links
     * @param link Child link
     */
    EditNavDataCache.prototype.getParent = function (link) {
        //The 0 level item has parent node as null as they are in EditNavLinkGroup.Links[]
        //In case of null link(empty nav link group) or last drophint on 0 level this return the IEditNavLinkGroup(this._group.links) links[]
        return link === null || link.parentNode === null ? this._group.links : link.parentNode.links;
    };
    /**
     * Move item from the one old link location to new location
     * @param link link which got moved
     * @param newParent new parent of the move link
     * @param newIndex index of the link corresponding to the new parent,
     * In case of null newIndex, Link would be added at the end
     * @returns true if command executed successfully, false if not
     */
    EditNavDataCache.prototype.moveLink = function (link, newParent, newIndex) {
        var oldParentLinks, oldIndex, newParentLinks;
        try {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                name: 'EditNavDataCache.MoveLink',
                extraData: { action: 'MoveLink', feature: FEATURE_NAME }
            });
            var isValid = this._validateMoveLink(link, newParent, newIndex);
            if (!isValid) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_5__["default"].logError(new Error('Invalid params for moveLink'), {
                    eventName: 'EditNavDataCache.MoveItem.Validate',
                    action: 'MoveItem',
                    feature: FEATURE_NAME
                });
                return false;
            }
            var linkCountBeforeMoveLink = this._getTotalLinkCount(this._group.links);
            oldParentLinks = this.getParent(link);
            //if the parent is null then this implies that the newParentLinks should be assiged to group.links[]
            //Because all the links on 0 level has null as parentNode
            newParentLinks = newParent === null ? this._group.links : newParent.links;
            oldIndex = oldParentLinks.indexOf(link);
            //Moved link not found in the parent array
            if (oldIndex === -1) {
                _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({
                    name: MOVED_LINK_NOT_FOUND_ERROR,
                    extraData: { action: 'MoveLink', feature: FEATURE_NAME }
                });
                return false;
            }
            //Move dragged item just before on-drop item
            oldParentLinks.splice(oldIndex, 1);
            if (oldParentLinks === newParentLinks && oldIndex < newIndex) {
                //This is required as move link index was before destination index with same parent
                // and moved link is already removed in previous step
                newIndex = newIndex - 1;
            }
            if (!newParentLinks) {
                newParentLinks = [];
                if (newParent) {
                    newParent.links = newParentLinks;
                }
            }
            //If newIndex is defined and between the range of newParentLinks Array
            //then we add the moved item on the specified index
            //else we add the move link at the bottom of the array
            if (typeof newIndex === 'number' && newIndex >= 0 && newIndex < newParentLinks.length) {
                newParentLinks.splice(newIndex, 0, link);
                link.parentNode = newParent;
            }
            else {
                newParentLinks.push(link);
                link.parentNode = newParent;
            }
            var linkCountAfterMoveLink = this._getTotalLinkCount(this._group.links);
            //Validate that the count of links before and after move link call are same
            if (linkCountAfterMoveLink !== linkCountBeforeMoveLink) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_5__["default"].logError(new Error('Invalid state of EditNav'), {
                    eventName: 'EditNavDataCache.MoveItem.NodeCountCheck',
                    action: 'MoveItem',
                    feature: FEATURE_NAME
                });
                return false;
            }
            return true;
        }
        catch (error) {
            //Recover moved item if exception occured after de-parenting it from the old parent
            if (oldParentLinks && oldParentLinks.indexOf(link) === -1 && oldIndex) {
                oldParentLinks.splice(oldIndex, 0, link);
            }
            _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_5__["default"].logError(error, {
                eventName: 'EditNavDataCache.MoveItem',
                action: 'MoveItem',
                feature: FEATURE_NAME
            });
            return false;
        }
    };
    /**
     * Search at this level and below for `afterLink`, and insert `newLink` after it.
     *
     * @param links List of links at this level
     * @param afterLink Find this link and insert newLink after it
     * @param newLink New link to insert after afterLink
     * @param forceAddAsSibling Add newLink as a sibling to afterLink rather than as a child of afterLink
     * @returns true if the correct insertion position has been found
     */
    EditNavDataCache.prototype._addLink = function (links, afterLink, newLink, forceAddAsSibling) {
        if (links.length === 0) {
            // insert into empty list
            links.push(newLink);
            return true;
        }
        for (var i = 0; i < links.length; i++) {
            var currentLink = links[i];
            var childLinks = currentLink.links;
            var hasChildren = childLinks && childLinks.length;
            if (currentLink === afterLink) {
                // Should insert the new link after this one
                if (hasChildren && !forceAddAsSibling) {
                    // If link has children, insert as first child
                    childLinks.unshift(newLink);
                }
                else {
                    // Otherwise insert as sibling
                    links.splice(i + 1, 0, newLink);
                }
                return true;
            }
            else if (hasChildren) {
                // Check whether afterLink is one of currentLink's children
                if (this._addLink(childLinks, afterLink, newLink, forceAddAsSibling)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Look for linkToUpdate at and below a given level of links (call it N), and process the commmand
     * if linkToUpdate is found.
     *
     * @param cmdType Type of update to make
     * @param linkToUpdate Move/delete this link
     * @param parent Parent containing the links at level N
     * @param level Link level being processed (0-indexed)
     * @param linksLevelAbove List of links at level N - 1 (only needed for promoting a sublink)
     * @returns true if link is found, false if not
     */
    EditNavDataCache.prototype._processCommand = function (cmdType, linkToUpdate, parent, level, linksLevelAbove) {
        var links = parent.links;
        for (var i = 0; i < links.length; i++) {
            var currentLink = links[i];
            var hasChildren = currentLink.links && currentLink.links.length;
            if (currentLink === linkToUpdate) {
                var allowPromote = !(level === 1 && linksLevelAbove.length >= this._linkLimit);
                if (!Object(_EditNav__WEBPACK_IMPORTED_MODULE_1__["isCommandAllowed"])(cmdType, linkToUpdate, parent.links, level, this._maxLevelCount, allowPromote)) {
                    // Requested update isn't allowed, but stop searching for the link
                    return true;
                }
                switch (cmdType) {
                    case _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__["CtxMenuCommand"].moveUp:
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'EditNav.MoveUp.Click' });
                        // Swap link with previous
                        links[i] = links[i - 1];
                        links[i - 1] = linkToUpdate;
                        break;
                    case _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__["CtxMenuCommand"].moveDown:
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'EditNav.MoveDown.Click' });
                        // Swap link with next
                        links[i] = links[i + 1];
                        links[i + 1] = linkToUpdate;
                        break;
                    case _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__["CtxMenuCommand"].remove:
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'EditNav.Remove.Click' });
                        // Remove link
                        links.splice(i, 1)[0];
                        if (linkToUpdate.key) {
                            // Presence of a key means this is a server node, which we must mark as deleted.
                            // (Newly-added nodes can just be removed from memory, no further action needed.)
                            linkToUpdate.isDeleted = true;
                            this._deletedLinks.push(linkToUpdate);
                        }
                        break;
                    case _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__["CtxMenuCommand"].makeSubLink:
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'EditNav.MakeSubLink.Click' });
                        // Make link a child of the previous link
                        var newParent = links[i - 1];
                        if (!newParent.links) {
                            newParent.links = [];
                        }
                        newParent.links.push(linkToUpdate);
                        links.splice(i, 1);
                        if (this._isSiteNavReorderDragDropFlightOn) {
                            linkToUpdate.parentNode = newParent;
                        }
                        break;
                    case _EditNav_Props__WEBPACK_IMPORTED_MODULE_2__["CtxMenuCommand"].promoteSubLink:
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_3__["Engagement"].logData({ name: 'EditNav.PromoteSubLink.Click' });
                        // Make link the next sibling of its current parent
                        var parentIndex = linksLevelAbove.indexOf(parent);
                        linksLevelAbove.splice(parentIndex + 1, 0, linkToUpdate);
                        links.splice(i, 1);
                        if (this._isSiteNavReorderDragDropFlightOn) {
                            linkToUpdate.parentNode = linksLevelAbove[parentIndex].parentNode;
                        }
                        break;
                }
                return true;
            }
            else if (hasChildren && this._processCommand(cmdType, linkToUpdate, currentLink, level + 1, links)) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(EditNavDataCache.prototype, "_isSiteNavReorderDragDropFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled({ ODB: 1345 });
        },
        enumerable: true,
        configurable: true
    });
    EditNavDataCache.prototype._getLinksToEdit = function (links, isChildLink, parentNode) {
        var _this = this;
        if (isChildLink === void 0) { isChildLink = false; }
        if (parentNode === void 0) { parentNode = null; }
        // Remove any non-editable links.
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_6__["Killswitch"].isActivated('6ebb07cc-3dd9-49ba-9aa9-be25c606bc29', '5/29/2019', 'EditLinksNullCheck') &&
            !links) {
            return [];
        }
        return links
            .filter(function (link) {
            if (!link) {
                return false;
            }
            else if (link.key === undefined || Number(link.key) >= 0) {
                return true;
            }
            // This link has a key < 0, which means it's a link added client-side (such as the recycle bin).
            // Don't display it in the list of links to edit, but make a record of it so it can be added
            // back to the view-only links after editing/saving.
            _this._clientLinks.push(link);
            return false;
        })
            .map(function (link) {
            var updatedLink = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), { isDeleted: false, isExpanded: true, 
                // Assign the link a unique ID which is used to generate IDs for related DOM elements
                // (the link itself, its ..., and the following insertion line).
                elementId: getNextId() });
            if (_this._isSiteNavReorderDragDropFlightOn) {
                updatedLink.parentNode = parentNode;
                updatedLink.links = link.links ? _this._getLinksToEdit(link.links, true, updatedLink) : null;
            }
            else {
                updatedLink.links = link.links ? _this._getLinksToEdit(link.links, true) : null;
            }
            return updatedLink;
        });
    };
    EditNavDataCache.prototype._getViewLinks = function (links) {
        var _this = this;
        return links
            .filter(function (link) { return !link.isDeleted; })
            .map(function (link) {
            var updatedLink = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), { links: link.links ? _this._getViewLinks(link.links) : null, isExpanded: false, 
                // Clear some properties that are only used for editing
                isDeleted: undefined, elementId: undefined });
            if (_this._isSiteNavReorderDragDropFlightOn) {
                updatedLink.parentNode = link.parentNode;
            }
            return updatedLink;
        });
    };
    EditNavDataCache.prototype._validateMoveLink = function (moveLink, newParent, newIndex) {
        //Move link should be valid node
        if (!moveLink) {
            return false;
        }
        //Null newParent mean that the item should be moved to group.links
        //but undefined parent should be invalidated
        if (newParent === undefined) {
            return false;
        }
        //Move link should not be dropped on its own child
        if (this._isAncestor(moveLink, newParent)) {
            return false;
        }
        return true;
    };
    EditNavDataCache.prototype._isAncestor = function (ancestor, child) {
        if (ancestor === child) {
            return true;
        }
        if (!child || !child.parentNode) {
            return false;
        }
        return this._isAncestor(ancestor, child.parentNode);
    };
    /**
     * Count total number of links in a array of IEditNavLink[]
     * Filter only the links which has positive keys/already saved on server
     * @param links
     */
    EditNavDataCache.prototype._getTotalLinkCount = function (links) {
        var _this = this;
        var count = 0;
        links.forEach(function (link) {
            if (link && (link.key === undefined || Number(link.key) >= 0)) {
                if (link.links && link.links.length > 0) {
                    count += _this._getTotalLinkCount(link.links);
                }
                count++;
            }
        });
        return count;
    };
    return EditNavDataCache;
}());

//# sourceMappingURL=EditNavDataCache.js.map

/***/ }),

/***/ "1oJD":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/multilingual/MultilingualInputs.resx.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"DefaultLanguageLabel":"[!!--##{0} (ďēƒàũĺţ)##--!!]","SaveButtonLabel":"[!!--##Śàvē##--!!]","CancelButtonLabel":"[!!--##Ćàńćēĺ##--!!]","EnterDefaultLanguageErrorMessage":"[!!--##Ēńţēŕ à ďēƒàũĺţ ĺàńĝũàĝē ďĩśƥĺàŷ ńàmē##--!!]","LoadingLabel":"[!!--##Ĺōàďĩńĝ##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "3IVS":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/TextField/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/TextField/index.js


/***/ }),

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

/***/ "58+N":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/containers/EditNav/EditNavContainer.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavContainer", function() { return EditNavContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EditNav_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/EditNav/index */ "bt9q");
/* harmony import */ var _EditNavStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditNavStateManager */ "ToNz");




/**
 * @public
 */
var EditNavContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNavContainer, _super);
    function EditNavContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isLoading: true };
        _this._state = new _EditNavStateManager__WEBPACK_IMPORTED_MODULE_3__["EditNavStateManager"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { isLoading: true, container: _this }));
        return _this;
    }
    EditNavContainer.prototype.UNSAFE_componentWillMount = function () {
        this._state.UNSAFE_componentWillMount();
    };
    EditNavContainer.prototype.render = function () {
        var props = this._state.getEditNavProps();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_EditNav_index__WEBPACK_IMPORTED_MODULE_2__["EditNav"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    return EditNavContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=EditNavContainer.js.map

/***/ }),

/***/ "8Lop":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavCallout/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: PARENT_SIBLING_HUBS_OPTION, CHILDREN_HUBS_OPTION, EditNavCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditNavCallout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditNavCallout */ "ZLTs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARENT_SIBLING_HUBS_OPTION", function() { return _EditNavCallout__WEBPACK_IMPORTED_MODULE_0__["PARENT_SIBLING_HUBS_OPTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHILDREN_HUBS_OPTION", function() { return _EditNavCallout__WEBPACK_IMPORTED_MODULE_0__["CHILDREN_HUBS_OPTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavCallout", function() { return _EditNavCallout__WEBPACK_IMPORTED_MODULE_0__["EditNavCallout"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "9Ygb":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MultilingualInputs/MultilingualInputs.scss.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-MultilingualInputs-Links{overflow-y:auto;max-height:80vh;margin-bottom:16px}.ms-MultilingualInputs-Link{margin-bottom:16px}.ms-MultilingualInputs-Link:last-child{margin-bottom:0}.ms-MUIEditingCustomization{height:80vh}.ms-MultilingualInputs-ButtonArea{vertical-align:top;display:inline-block;width:100%}[dir='ltr'] .ms-MultilingualInputs-ButtonArea{text-align:left}[dir='rtl'] .ms-MultilingualInputs-ButtonArea{text-align:right}[dir='ltr'] .ms-MultilingualInputs-SaveButton{margin-right:8px}[dir='rtl'] .ms-MultilingualInputs-SaveButton{margin-left:8px}[dir='ltr'] .ms-MultilingualInputs-CancelButton{margin-left:0}[dir='rtl'] .ms-MultilingualInputs-CancelButton{margin-right:0}\n" }]);
//# sourceMappingURL=MultilingualInputs.scss.js.map

/***/ }),

/***/ "B5pZ":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/Callout/index.js


/***/ }),

/***/ "CHbd":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Button/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/Button/index.js


/***/ }),

/***/ "CjIM":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNav.scss.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-EditNav{overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-bottom:14px}.ms-EditNav.is-onTop{position:absolute}.ms-EditNav ul{list-style-type:none}.ms-EditNav ul,.ms-EditNav ul>li{padding:0}[dir='ltr'] .ms-EditNav li>ul{margin-left:14px}[dir='rtl'] .ms-EditNav li>ul{margin-right:14px}.ms-EditNav-links{display:block;margin-bottom:16px}.ms-EditNav-Icon{padding:0px;color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": ";-webkit-transition:-webkit-transform 0.1s linear;transition:-webkit-transform 0.1s linear;transition:transform 0.1s linear;transition:transform 0.1s linear, -webkit-transform 0.1s linear}.ms-EditNav-title{font-weight:600;font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:" }, { "theme": "xLargeFontWeight", "defaultValue": "600" }, { "rawString": ";margin:0;padding:20px 20px 0}.ms-EditNav-links{display:block;position:relative}.ms-EditNav-chevronButton{display:block;font-weight:400;font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";line-height:40px;margin:5px 0;padding:0 40px;border:none;text-transform:uppercase;cursor:pointer;color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": "}[dir='ltr'] .ms-EditNav-chevronButton{text-align:left}[dir='rtl'] .ms-EditNav-chevronButton{text-align:right}.ms-EditNav-chevronButton:visited{color:inherit}.ms-EditNav-chevronButton:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": "}.ms-EditNav-chevronButton.ms-EditNav-chevronButton--group{width:100%;height:40px;border-bottom:1px solid " }, { "theme": "bodyDivider", "defaultValue": "#edebe9" }, { "rawString": "}.ms-EditNav-chevron.ms-Icon{position:absolute;height:40px;line-height:40px;font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";-webkit-transition:-webkit-transform 0.1s linear;transition:-webkit-transform 0.1s linear;transition:transform 0.1s linear;transition:transform 0.1s linear, -webkit-transform 0.1s linear}[dir='ltr'] .ms-EditNav-chevron.ms-Icon{left:15px}[dir='rtl'] .ms-EditNav-chevron.ms-Icon{right:15px}.ms-EditNav-linkText{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:" }, { "theme": "mediumFontWeight", "defaultValue": "400" }, { "rawString": ";color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";vertical-align:middle}.ms-EditNav-linkButton{position:absolute;top:0px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";height:40px;width:40px;text-align:center;line-height:40px}[dir='ltr'] .ms-EditNav-linkButton{right:0px}[dir='rtl'] .ms-EditNav-linkButton{left:0px}.ms-EditNav-linkButton:hover,.ms-EditNav-linkButton.is-visible{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";cursor:pointer}.ms-EditNav-linkRow{position:relative;cursor:pointer}.ms-EditNav-link{display:block;position:relative;padding:9px 40px 10px 20px;cursor:pointer;word-wrap:break-word;text-decoration:none;font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "bodyText", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "bodyBackground", "defaultValue": "#ffffff" }, { "rawString": "}html[dir='rtl'] .ms-EditNav-link{padding:9px 20px 10px 40px}.ms-EditNav-link:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#faf9f8" }, { "rawString": "}.ms-EditNav-link.is-selected{position:relative;color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.ms-EditNav-link.is-selected:hover{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": ";background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-EditNav-link.is-selected:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0}[dir='ltr'] .ms-EditNav-link.is-selected:after{border-left:2px solid " }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}[dir='rtl'] .ms-EditNav-link.is-selected:after{border-right:2px solid " }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-EditNav-link--AudienceTargetIcon{padding:9px 56px 10px 20px}html[dir='rtl'] .ms-EditNav-link--AudienceTargetIcon{padding:9px 20px 10px 56px}.ms-EditNav-chevronButton,.ms-EditNav-chevronButton--group,.ms-EditNav-chevronButton--link,.ms-EditNav-link{outline:transparent;position:relative}.ms-EditNav-chevronButton::-moz-focus-inner,.ms-EditNav-chevronButton--group::-moz-focus-inner,.ms-EditNav-chevronButton--link::-moz-focus-inner,.ms-EditNav-link::-moz-focus-inner{border:0}.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton--group:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton--link:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton--group:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-chevronButton--link:focus:after,.ms-Fabric--isFocusVisible .ms-EditNav-link:focus:after{border-color:ActiveBorder}}.ms-EditNav-insertLine{display:block;padding:0 40px;height:16px;opacity:0;position:absolute;z-index:1;bottom:-10px;left:0;right:0;-webkit-transition:opacity 0.367s ease;transition:opacity 0.367s ease;outline:none;cursor:pointer}.ms-EditNav-insertLine .ms-EditNav-plusIcon{font-size:12px;position:absolute;top:0;left:50%;background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-radius:50%;z-index:1;padding:2px;cursor:pointer}[dir='ltr'] .ms-EditNav-insertLine .ms-EditNav-plusIcon{margin-left:-7px}[dir='rtl'] .ms-EditNav-insertLine .ms-EditNav-plusIcon{margin-right:-7px}.ms-EditNav-insertLine .ms-EditNav-plusIcon.link-limit-reached{background-color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.ms-EditNav-insertLine .ms-EditNav-plusIcon{color:HighlightText;border:1px solid ActiveBorder}}.ms-EditNav-insertLine::after{content:'';background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";position:absolute;left:0;right:0;height:2px;top:7px}@media screen and (-ms-high-contrast: active){.ms-EditNav-insertLine::after{color:ActiveBorder;border:1px solid HighlightText}}.ms-EditNav-insertLine.link-limit-reached::after{background-color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.ms-EditNav-insertLine:hover,.ms-EditNav-insertLine:focus,.ms-EditNav-insertLine.is-visible{opacity:1}.ms-EditNav-Buttons,.ms-EditNav-Buttons--withATSetting{margin-top:40px;display:-webkit-box;display:-ms-flexbox;display:flex}[dir='ltr'] .ms-EditNav-Buttons,[dir='ltr'] .ms-EditNav-Buttons--withATSetting{margin-left:10px}[dir='rtl'] .ms-EditNav-Buttons,[dir='rtl'] .ms-EditNav-Buttons--withATSetting{margin-right:10px}.ms-EditNav-Buttons--withATSetting{margin-top:24px}[dir='ltr'] .ms-EditNav-SaveButton{margin-right:8px}[dir='rtl'] .ms-EditNav-SaveButton{margin-left:8px}[dir='ltr'] .ms-EditNav-CancelButton{margin-left:0}[dir='rtl'] .ms-EditNav-CancelButton{margin-right:0}.ms-EditNav_contextMenu{display:block}.ms-EditNav_contextMenu .ms-ContextualMenu.is-open{position:relative;-webkit-box-shadow:none;box-shadow:none;border:none}.ms-EditNav_contextMenu .ms-ContextualMenu.is-open .ms-ContextualMenu-link{height:36px}.ms-EditNav-link-root.ms-EditNav-DragEnter{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-EditNav-link-root.ms-EditNav-DragEnter div{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#e1dfdd" }, { "rawString": "}.ms-EditNav-link-root.ms-EditNav-DragEnter .ms-EditNav-link-drag-icon{opacity:1}.ms-EditNav-DropHintline{height:1px;background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";visibility:hidden}.ms-EditNavLink-DropHint{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.ms-EditNavLink-DropHint div{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.ms-EditNav-ShowDropHint{visibility:visible}.ms-EditNav-link-root{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);cursor:pointer}.ms-EditNav-link-root:focus .ms-EditNav-link-drag-icon,.ms-EditNav-link-root:hover .ms-EditNav-link-drag-icon{opacity:1}.ms-EditNav-link-root .ms-EditNav-link-drag-icon{opacity:0;position:absolute;top:0px;color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";height:40px;width:10px;text-align:center;line-height:40px;z-index:1;padding-top:1px}.ms-EditNav-link-root .ms-EditNav-link-drag-icon.is-visible{opacity:1}.ms-EditNav-link-root .ms-EditNav-AudienceTargetIcon{font-size:16px;position:absolute;right:40px;top:0px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";line-height:40px;width:16px;cursor:default}.ms-EditNav-splitline{height:1px;border:0;outline:0;background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-EditNav-AudienceTargetingTitle{font-size:400;line-height:20px;font-weight:600}[dir='ltr'] .ms-EditNav-AudienceTargetInner{padding-left:20px}[dir='rtl'] .ms-EditNav-AudienceTargetInner{padding-right:20px}[dir='ltr'] .ms-EditNav-AudienceTargetInner{padding-right:8px}[dir='rtl'] .ms-EditNav-AudienceTargetInner{padding-left:8px}.ms-EditNav-AudienceTargetingInfoIcon{vertical-align:middle;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}[dir='ltr'] .ms-EditNav-AudienceTargetingInfoIcon{margin-left:5px}[dir='rtl'] .ms-EditNav-AudienceTargetingInfoIcon{margin-right:5px}.ms-EditNav-error{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "redDark", "defaultValue": "#a4262c" }, { "rawString": ";margin:14px 0}.ms-EditNav-loading{margin:14px auto 0 auto}.ms-EditNav-status{display:inline-block}\n" }]);
//# sourceMappingURL=EditNav.scss.js.map

/***/ }),

/***/ "DF9w":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNav.resx.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"SaveButtonLabel":"[!!--##Śàvē##--!!]","CancelButtonLabel":"[!!--##Ćàńćēĺ##--!!]","CalloutAddLinkTitle":"[!!--##Àďď##--!!]","CalloutAddLinkAriaLabel":"[!!--##Àďď à ĺĩńķ ōŕ ĺàƀēĺ ţō ńàvĩĝàţĩōń##--!!]","CalloutEditLinkTitle":"[!!--##Ēďĩţ##--!!]","CalloutAddressLabel":"[!!--##Àďďŕēśś##--!!]","CalloutDisplayLabel":"[!!--##Ďĩśƥĺàŷ ńàmē##--!!]","CalloutDisplayLabelWithDefaultLocale":"[!!--##Ďĩśƥĺàŷ ńàmē ({0})##--!!]","CalloutOkButton":"[!!--##ŌĶ##--!!]","CalloutAddressPlacehold":"[!!--##Ēńţēŕ ōŕ ƥàśţē à ĺĩńķ##--!!]","CalloutDisplayPlacehold":"[!!--##Ţŷƥē ţĥē ďĩśƥĺàŷ ţēxţ##--!!]","CalloutAudienceLabel":"[!!--##Àũďĩēńćē ţàŕĝēţĩńĝ##--!!]","CalloutAudienceMaximumGroupLabel":"[!!--##Ēńţēŕ ũƥ ţō {0} ĝŕōũƥś ##--!!]","ContextMenuMoveUp":"[!!--##Mōvē ũƥ##--!!]","ContextMenuMoveDown":"[!!--##Mōvē ďōŵń##--!!]","ContextMenuUnpin":"[!!--##Ŕēmōvē##--!!]","ContextMenuIndentLink":"[!!--##Màķē śũƀ ĺĩńķ##--!!]","ContextMenuPromoteLink":"[!!--##Ƥŕōmōţē śũƀ ĺĩńķ##--!!]","UrlErrorMessage":"[!!--##Ƥĺēàśē ţŷƥē ĩń vàĺĩď ũŕĺ.##--!!]","ContextMenuEdit":"[!!--##Ēďĩţ##--!!]","ContextMenuAriaLabel":"[!!--##{0} ĺĩńķ ćōńţēxţ mēńũ##--!!]","CheckBoxOpenInNewTabText":"[!!--##Ōƥēń ĩń à ńēŵ ƀŕōŵśēŕ ţàƀ##--!!]","LinkTo":"[!!--##Ćĥōōśē àń ōƥţĩōń##--!!]","EditNavAriaLabel":"[!!--##Ēďĩţ ńàvĩĝàţĩōń ƥàńēĺ. Ũśē àŕŕōŵ ķēŷś ţō ńàvĩĝàţē##--!!]","Loading":"[!!--##Ĺōàďĩńĝ...##--!!]","Saving":"[!!--##Śàvĩńĝ...##--!!]","ParentSiblingHubsOptionName":"[!!--##Ƥēēŕ àśśōćĩàţēď ĥũƀś##--!!]","ParentSiblingHubsLabel":"[!!--##À ĺĩśţ ōƒ ĥũƀś ŕēĺàţēď ţō ţĥĩś ĥũƀ ŵĩĺĺ ƀē àďďēď ĩń ţĥē ńàvĩĝàţĩōń##--!!]","ChildrenHubsLabel":"[!!--##À ĺĩśţ ōƒ ĥũƀś àśśōćĩàţēď ŵĩţĥ ţĥĩś ĥũƀ ŵĩĺĺ ƀē àďďēď ĩń ţĥē ńàvĩĝàţĩōń##--!!]","ParentSiblingNavNodeName":"[!!--##{0} ƥēēŕ àśśōćĩàţēď ĥũƀś##--!!]","ChildrenHubsOptionName":"[!!--##Àśśōćĩàţēď ĥũƀś##--!!]","ChildrenNavNodeName":"[!!--##{0} àśśōćĩàţēď ĥũƀś##--!!]","ChildrenHubsOptionLabel":"[!!--##À ĺĩśţ ōƒ ĥũƀś ţĥàţ ţĥĩś ĥũƀ ĩś ćōńńēćţēď ţō ŵĩĺĺ ƀē àďďēď ĩń ţĥē ńàvĩĝàţĩōń##--!!]","DefaultError":"[!!--##Śōmēţĥĩńĝ ŵēńţ ŵŕōńĝ. Ƥĺēàśē ţŕŷ àĝàĩń.##--!!]","CalloutAudiencePleaseSelectAGroup":"[!!--##Ƥĺēàśē śēĺēćţ à ĝŕōũƥ##--!!]","CalloutAudienceOneOrMoreGroupInvalid":"[!!--##Ōńē ōŕ mōŕē ĝŕōũƥś àŕē ĩńvàĺĩď##--!!]","EditNavAudienceTargetingTitleText":"[!!--##Ēńàƀĺē śĩţē ńàvĩĝàţĩōń àũďĩēńćē ţàŕĝēţĩńĝ##--!!]","EditNavAudienceTargetingOn":"[!!--##Ōń##--!!]","EditNavAudienceTargetingOff":"[!!--##Ōƒƒ##--!!]","EditNavNodeHasAudienceTargeted":"[!!--##Àũďĩēńćē ţàŕĝēţēď##--!!]","EditNavPeoplePickerRemoveGroup":"[!!--##Ŕēmōvē ĝŕōũƥ##--!!]","EditNavAudienceTargetingInfoText":"[!!--##Ţũŕń ōń àũďĩēńćē ţàŕĝēţĩńĝ ţō ƥŕōmōţē ćōńţēńţ ţō śƥēćĩƒĩć àũďĩēńćēś àćŕōśś ţĥē ńàvĩĝàţĩōń ōƒ ţĥĩś śĩţē ĩńćĺũďĩńĝ ĥũƀ àńď ƒōōţēŕ ńàvĩĝàţĩōń.##--!!]","EditNavAudienceTargetingLearnMore":"[!!--##Ĺēàŕń mōŕē##--!!]","EditNavAudienceInheritSubLink":"[!!--##Ţĥĩś śũƀ ĺĩńķ ĩńĥēŕĩţś àũďĩēńćē ţàŕĝēţĩńĝ ƒŕōm ţĥē ƥàŕēńţ ĺĩńķ.##--!!]","EditNavAudienceInheritParentLink":"[!!--##Àũďĩēńćē ţàŕĝēţĩńĝ àƥƥĺĩēś ţō àĺĺ śũƀ ĺĩńķś.##--!!]","EditNavLinkOption":"[!!--##Ĺĩńķ##--!!]","EditNavLabelOption":"[!!--##Ĺàƀēĺ##--!!]","backButtonLabel":"[!!--##ßàćķ##--!!]","ArialLabelSaveButtonDescription":"[!!--##Śàvē ćũŕŕēńţ ćĥàńĝēś ōƒ ńàvĩĝàţĩōń ĺĩńķś##--!!]","Translations":"[!!--##Ţŕàńśĺàţĩōńś##--!!]","TranslationInfoTextUpdateTranslations":"[!!--##{0} ĩś ţĥē ďēƒàũĺţ ĺàńĝũàĝē ƒōŕ ţĥĩś śĩţē. Ţō màńũàĺĺŷ àďď ōŕ ũƥďàţē ţŕàńśĺàţĩōńś ƒōŕ śũƥƥōŕţēď ĺàńĝũàĝēś, śēĺēćţ Ţŕàńśĺàţĩōńś ũńďēŕ ţĥē Ďĩśƥĺàŷ ńàmē ƀōx.##--!!]","TranslationInfoTextDefaultLanguage":"[!!--##Ţō màńũàĺĺŷ àďď ōŕ ũƥďàţē ţŕàńśĺàţĩōńś, śēĺēćţ Ţŕàńśĺàţĩōńś ũńďēŕ ţĥē Ďĩśƥĺàŷ ńàmē ƀōx.##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "DY2p":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/multilingual/loc/LanguageNames.resx.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"Arabic":"[!!--##Àŕàƀĩć##--!!]","Azerbaijani":"[!!--##ÀźēŕƀàĩĴàńĩ (Ĺàţĩń)##--!!]","Bosnian":"[!!--##ßōśńĩàń##--!!]","Bulgarian":"[!!--##ßũĺĝàŕĩàń##--!!]","Catalan":"[!!--##Ćàţàĺàń##--!!]","Czech":"[!!--##Ćźēćĥ##--!!]","Welsh":"[!!--##Ŵēĺśĥ##--!!]","Danish":"[!!--##Ďàńĩśĥ##--!!]","German":"[!!--##Ĝēŕmàń##--!!]","Greek":"[!!--##Ĝŕēēķ##--!!]","English":"[!!--##Ēńĝĺĩśĥ##--!!]","Spanish":"[!!--##Śƥàńĩśĥ##--!!]","Estonian":"[!!--##Ēśţōńĩàń##--!!]","Basque":"[!!--##ßàśǫũē##--!!]","Finnish":"[!!--##Ƒĩńńĩśĥ##--!!]","French":"[!!--##Ƒŕēńćĥ##--!!]","Irish":"[!!--##Ĩŕĩśĥ##--!!]","Galician":"[!!--##Ĝàĺĩćĩàń##--!!]","Hebrew":"[!!--##Ĥēƀŕēŵ##--!!]","Hindi":"[!!--##Ĥĩńďĩ##--!!]","Croatian":"[!!--##Ćŕōàţĩàń##--!!]","Hungarian":"[!!--##Ĥũńĝàŕĩàń##--!!]","Indonesian":"[!!--##Ĩńďōńēśĩàń##--!!]","Italian":"[!!--##Ĩţàĺĩàń##--!!]","Japanese":"[!!--##ĵàƥàńēśē##--!!]","Kazakh":"[!!--##Ķàźàķĥ##--!!]","Korean":"[!!--##Ķōŕēàń##--!!]","Lithuanian":"[!!--##Ĺĩţĥũàńĩàń##--!!]","Latvian":"[!!--##Ĺàţvĩàń##--!!]","Macedonian":"[!!--##Màćēďōńĩàń##--!!]","Malay":"[!!--##Màĺàŷ##--!!]","Norwegian":"[!!--##Ńōŕŵēĝĩàń##--!!]","Dutch":"[!!--##Ďũţćĥ##--!!]","Polish":"[!!--##Ƥōĺĩśĥ##--!!]","Dari":"[!!--##Ďàŕĩ##--!!]","PortugueseBR":"[!!--##Ƥōŕţũĝũēśē (ßŕàźĩĺ)##--!!]","PortuguesePT":"[!!--##Ƥōŕţũĝũēśē (Ƥōŕţũĝàĺ)##--!!]","Romanian":"[!!--##Ŕōmàńĩàń##--!!]","Russian":"[!!--##Ŕũśśĩàń##--!!]","Slovak":"[!!--##Śĺōvàķ##--!!]","Slovene":"[!!--##Śĺōvēńē##--!!]","SerbianCRS":"[!!--##Śēŕƀĩàń (Ćŷŕĩĺĺĩć)##--!!]","SerbianLCS":"[!!--##Śēŕƀĩàń (Ĺàţĩń)##--!!]","Swedish":"[!!--##Śŵēďĩśĥ##--!!]","Thai":"[!!--##Ţĥàĩ##--!!]","Turkish":"[!!--##Ţũŕķĩśĥ##--!!]","Ukrainian":"[!!--##Ũķŕàĩńĩàń##--!!]","Vietnamese":"[!!--##Vĩēţńàmēśē##--!!]","ChineseCN":"[!!--##Ćĥĩńēśē (Śĩmƥĺĩƒĩēď)##--!!]","ChineseTW":"[!!--##Ćĥĩńēśē (Ţŕàďĩţĩōńàĺ)##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "EAcr":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavLink/EditNavLink.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavLink", function() { return EditNavLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var _EditNav_Props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditNav.Props */ "pAih");
/* harmony import */ var _EditNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../EditNav */ "/BpS");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/ContextualMenu */ "u4xd");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusZone */ "NMYH");
/* harmony import */ var _EditNav_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../EditNav.scss */ "CjIM");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../EditNav.resx */ "DF9w");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_EditNav_resx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_utilities_objects_lib_areShallowEqual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/utilities-objects/lib/areShallowEqual */ "VMIJ");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");











// odsp-shared-react







function _getEllipsisId(link) {
    return link.elementId + '-ellipsis';
}
/** Ordered list of possible context menu commands (besides Edit) for each link. */
var CONTEXT_MENU_COMMANDS = [
    { key: String(_EditNav_Props__WEBPACK_IMPORTED_MODULE_4__["CtxMenuCommand"].moveUp), name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuMoveUp },
    { key: String(_EditNav_Props__WEBPACK_IMPORTED_MODULE_4__["CtxMenuCommand"].moveDown), name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuMoveDown },
    { key: String(_EditNav_Props__WEBPACK_IMPORTED_MODULE_4__["CtxMenuCommand"].makeSubLink), name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuIndentLink },
    { key: String(_EditNav_Props__WEBPACK_IMPORTED_MODULE_4__["CtxMenuCommand"].promoteSubLink), name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuPromoteLink },
    { key: String(_EditNav_Props__WEBPACK_IMPORTED_MODULE_4__["CtxMenuCommand"].remove), name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuUnpin }
];
var DRAG_ENTER_CLASS = 'ms-EditNav-DragEnter';
var DRAG_ICON_VISIBLE_CLASS = 'is-visible';
var DRAG_ICON_CLASS = 'ms-EditNav-link-drag-icon';
var FEATURE_NAME = 'SideNavReorderDragDrop';
/**
 * @public
 */
var EditNavLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNavLink, _super);
    function EditNavLink(props) {
        var _this = _super.call(this, props) || this;
        _this._onDismissMenu = function (event) {
            _this.props.onDismissMenu(event);
        };
        _this._onDragStart = function (item, itemIndex, selectedItems, event) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__["Engagement"].logData({
                name: 'EditNavLink.DragDrop.DragStart',
                extraData: { action: 'OnDragStart', feature: FEATURE_NAME }
            });
            var link = _this.props.link;
            try {
                if (link) {
                    _this._updateEditNavGroupDragInfo(link);
                    _this._root.current.classList.add(DRAG_ENTER_CLASS);
                    var dragDropIcon = _this._root.current.querySelector('.' + DRAG_ICON_CLASS);
                    dragDropIcon.classList.add(DRAG_ICON_VISIBLE_CLASS);
                }
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_13__["default"].logError(error, { eventName: 'EditNavLink.DragDrop._onDragStart', feature: FEATURE_NAME });
                throw error;
            }
        };
        _this._onDragEnd = function (item, event) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_14__["Engagement"].logData({
                name: 'EditNavLink.DragDrop.DragEnd',
                extraData: { action: 'OnDragEnd', feature: FEATURE_NAME }
            });
            try {
                if (event) {
                    _this._updateEditNavGroupDragInfo(null, event);
                }
                _this._root.current.classList.remove(DRAG_ENTER_CLASS);
                var dragDropIcon = _this._root.current.querySelector('.' + DRAG_ICON_CLASS);
                dragDropIcon.classList.remove(DRAG_ICON_VISIBLE_CLASS);
            }
            catch (error) {
                _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_13__["default"].logError(error, { eventName: 'EditNavLink.DragDrop._onDragEnd', feature: FEATURE_NAME });
                throw error;
            }
        };
        _this._root = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
        return _this;
    }
    EditNavLink.prototype.componentDidMount = function () {
        if (this._isSiteNavReorderDragDropFlightOn &&
            this.props.dragDropHelper &&
            this.props.isDraggable &&
            this._root &&
            this._root.current) {
            this._subscriptionObject = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getEditNavLinkDragDropOptions());
        }
    };
    EditNavLink.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this._isSiteNavReorderDragDropFlightOn) {
            //This will avoid re-rendering of this component if there is no change in the props.
            //This will save the overall time in rendering parent EditNav Component
            return !Object(_ms_utilities_objects_lib_areShallowEqual__WEBPACK_IMPORTED_MODULE_15__["areShallowEqual"])(nextProps, this.props) || !Object(_ms_utilities_objects_lib_areShallowEqual__WEBPACK_IMPORTED_MODULE_15__["areShallowEqual"])(nextState, this.state);
        }
        return true;
    };
    EditNavLink.prototype.componentDidUpdate = function () {
        if (!this._isSiteNavReorderDragDropFlightOn) {
            return;
        }
        if (!this._subscriptionObject &&
            this.props.dragDropHelper &&
            this.props.isDraggable &&
            this._root &&
            this._root.current) {
            this._subscriptionObject = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getEditNavLinkDragDropOptions());
        }
        if (this._subscriptionObject && !this.props.isDraggable) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
    };
    EditNavLink.prototype.componentWillUnmount = function () {
        if (this._isSiteNavReorderDragDropFlightOn && this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
    };
    EditNavLink.prototype.render = function () {
        var ellipsisId = _getEllipsisId(this.props.link);
        var _a = this.props, link = _a.link, level = _a.level, hasContextMenu = _a.hasContextMenu, siblings = _a.siblings, hasChildren = _a.hasChildren, hasCallout = _a.hasCallout, isInsertMode = _a.isInsertMode, isLinkLimitReached = _a.isLinkLimitReached, isDraggable = _a.isDraggable, insertId = _a.insertId;
        var editNavDraggableComponent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])("ms-EditNav-link ms-EditNav-link-level" + level, this._shouldShowAudienceTargetIcon(link) && 'ms-EditNav-link--AudienceTargetIcon'), title: link.name, "aria-label": "" + (link.ariaLabel || link.title || '') + (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__["Killswitch"].isActivated('2ccae31e-7048-46b1-813d-7d6833afcf34', '1/7/2020', 'audience targeting accessibility fix') && this._shouldShowAudienceTargetIcon(link)
                    ? ' ' + _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavNodeHasAudienceTargeted
                    : ''), id: link.elementId, "data-is-focusable": true, role: 'button', onClick: this._onShowCalloutClicked.bind(this, link, false), tabIndex: -1 },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNav-linkText' }, link.name)),
            this._shouldShowAudienceTargetIcon(link) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipHost"], { content: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavNodeHasAudienceTargeted, calloutProps: { gapSpace: 0, target: "#peopleIcon" + link.elementId }, styles: { root: { display: 'block' } } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], { iconName: 'People', className: 'ms-EditNav-AudienceTargetIcon', id: "peopleIcon" + link.elementId }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], { iconName: 'More', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-EditNav-linkButton', hasContextMenu && 'is-visible'), id: ellipsisId, role: 'button', "aria-label": _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuAriaLabel, link.name), title: _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuAriaLabel, link.name), "data-is-focusable": true, "aria-expanded": hasContextMenu, "aria-haspopup": hasContextMenu, onClick: this._onShowHideMenuClicked.bind(this, link) }),
            hasContextMenu && this._renderContextMenu(link, siblings, level)));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            this._isSiteNavReorderDragDropFlightOn ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._root, "data-is-draggable": true, className: 'ms-EditNav-link-root', draggable: isDraggable },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], { iconName: 'GripperBarVertical', className: DRAG_ICON_CLASS }),
                editNavDraggableComponent)) : (editNavDraggableComponent),
            !hasChildren && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-EditNav-insertLine', hasCallout && isInsertMode && 'is-visible', isLinkLimitReached && 'link-limit-reached'), id: insertId, role: 'button', "data-is-focusable": true, "data-automationid": 'EditNav-insertLine', "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddLinkAriaLabel, title: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddLinkAriaLabel, onClick: !isLinkLimitReached ? this._onShowCalloutClicked.bind(this, link, true) : undefined },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], { iconName: 'Add', className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-EditNav-plusIcon', isLinkLimitReached && 'link-limit-reached') })))));
    };
    EditNavLink.prototype._onShowHideMenuClicked = function (link) {
        this.props.onShowHideMenuClicked(link);
    };
    EditNavLink.prototype._onShowCalloutClicked = function (link, isInsert) {
        this.props.onShowCalloutClicked(link, isInsert);
    };
    EditNavLink.prototype._renderContextMenu = function (link, siblings, level) {
        var _this = this;
        var menuItems = [
            {
                name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ContextMenuEdit,
                key: 'idEdit',
                onClick: function () {
                    _this.props.onContextMenuClick(link);
                }
            }
        ];
        // save original link index now in case it's needed later (after `siblings` is modified)
        var linkIndex = siblings.indexOf(link);
        var ellipsisId = _getEllipsisId(link);
        var _loop_1 = function (command) {
            var cmdType = Number(command.key);
            var allowPromotion = !(level === 1 && this_1.props.isLinkLimitReached);
            if (Object(_EditNav__WEBPACK_IMPORTED_MODULE_5__["isCommandAllowed"])(cmdType, link, siblings, level, this_1.props.maxLevelCount, allowPromotion)) {
                menuItems.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, command), { onClick: function () {
                        _this.props.onContextMenuItemClick(link, cmdType, siblings, linkIndex, ellipsisId);
                    } }));
            }
        };
        var this_1 = this;
        for (var _i = 0, CONTEXT_MENU_COMMANDS_1 = CONTEXT_MENU_COMMANDS; _i < CONTEXT_MENU_COMMANDS_1.length; _i++) {
            var command = CONTEXT_MENU_COMMANDS_1[_i];
            _loop_1(command);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZone"], { direction: office_ui_fabric_react_lib_FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZoneDirection"].vertical },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_7__["ContextualMenu"], { target: '#' + _getEllipsisId(link), directionalHint: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])() ? office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_7__["DirectionalHint"].bottomRightEdge : office_ui_fabric_react_lib_ContextualMenu__WEBPACK_IMPORTED_MODULE_7__["DirectionalHint"].bottomLeftEdge, items: menuItems, isBeakVisible: false, gapSpace: 0, onDismiss: this._onDismissMenu, className: 'ms-EditNav_contextMenu' })));
    };
    Object.defineProperty(EditNavLink.prototype, "_isSiteNavReorderDragDropFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_12__["default"].isFeatureEnabled({ ODB: 1345 });
        },
        enumerable: true,
        configurable: true
    });
    EditNavLink.prototype._shouldShowAudienceTargetIcon = function (link) {
        return this.props.isNavAudienceTargetingEnabled && link && link.audiences && link.audiences.length > 0;
    };
    EditNavLink.prototype._getEditNavLinkDragDropOptions = function () {
        var options = {
            selectionIndex: 0,
            context: { data: this.props.link.parentNode, index: 0 },
            canDrag: function () { return true; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd
        };
        return options;
    };
    EditNavLink.prototype._updateEditNavGroupDragInfo = function (link, event) {
        var _a = this.props, updateDragInfo = _a.updateDragInfo, level = _a.level;
        if (updateDragInfo) {
            updateDragInfo({ link: link, level: level }, event);
        }
    };
    return EditNavLink;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=EditNavLink.js.map

/***/ }),

/***/ "EMVx":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/MultilingualInputs/MultilingualInputs.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: MultilingualInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilingualInputs", function() { return MultilingualInputs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_components_TextField_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/TextField/index */ "3IVS");
/* harmony import */ var office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Button/index */ "CHbd");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/multilingual/TranslationsDataSource */ "OJqW");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/multilingual/MultilingualInputs.resx */ "1oJD");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../EditNav/EditNav.resx */ "DF9w");
/* harmony import */ var _EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_LanguageNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/multilingual/LanguageNames */ "T4kc");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MultilingualInputs_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultilingualInputs.scss */ "9Ygb");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");












var MultilingualInputs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultilingualInputs, _super);
    function MultilingualInputs(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this._insertMetaData = function (translations) {
            var defaultLanguageToDisplay = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_9__["format"](_ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6___default.a.DefaultLanguageLabel, _ms_odsp_datasources_lib_dataSources_multilingual_LanguageNames__WEBPACK_IMPORTED_MODULE_8__["LanguageNames"].getResourceByCode(_this._webLanguage) || '');
            return translations.map(function (translationInput) {
                return {
                    code: translationInput.code,
                    language: translationInput.code === _this._webLanguage
                        ? defaultLanguageToDisplay
                        : translationInput.language || '',
                    // replace current display in MUI Editing panel
                    value: translationInput.code === _this.props.currentLCID
                        ? _this.props.currentDisplay
                        : translationInput.value
                };
            });
        };
        _this._onChange = function (indexToReplace) { return function (event, value) {
            var newTranslations = _this.state.translations.map(function (translation, index) {
                if (indexToReplace === index) {
                    translation.value = value || '';
                }
                return translation;
            });
            if (_this.props.textUpdateCallback) {
                _this.props.textUpdateCallback(newTranslations);
            }
            _this.setState({ translations: newTranslations, errorState: _this._validateErrorState(newTranslations) });
        }; };
        _this._handleSaveClick = function () {
            if (_this.props.onSaveClick) {
                _this.props.onSaveClick(_this.state.translations);
            }
        };
        _this._handleCancelClick = function () {
            if (_this.props.onCancelClick) {
                _this.props.onCancelClick();
            }
        };
        _this._validateErrorState = function (translations) {
            if (!translations || translations.length === 0 || !!_this.props.multilineInput) {
                return;
            }
            return translations[0].value.trim().length === 0 ? _ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6___default.a.EnterDefaultLanguageErrorMessage : undefined;
        };
        _this._webLanguage = (_a = _this.props.pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage;
        var translations = props.translations
            ? _this._insertMetaData(props.translations)
            : undefined;
        _this.state = {
            errorState: translations ? _this._validateErrorState(translations) : undefined,
            translations: translations ? translations : undefined
        };
        return _this;
    }
    MultilingualInputs.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.state.translations || this.state.translations.length === 0) {
            var translationsDataSource = new _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__["TranslationsDataSource"](this.props.pageContext);
            switch (this.props.dataSourceType) {
                // retrieve existing translations
                case _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__["DataSourceType"].ExistingNavNode:
                case _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__["DataSourceType"].SiteTitle:
                case _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__["DataSourceType"].SiteDescription:
                    translationsDataSource
                        .getTranslations(this.props.dataSourceType, this.props.navNodeId)
                        .then(function (translations) {
                        _this.setState({ translations: _this._insertMetaData(translations) });
                    });
                    break;
                case _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_5__["DataSourceType"].NewNavNode:
                    translationsDataSource.getAllSupportedLanguages().then(function (translations) {
                        _this.setState({ translations: _this._insertMetaData(translations) });
                    });
                    break;
            }
        }
    };
    MultilingualInputs.prototype.render = function () {
        var _this = this;
        if (!this.state.translations) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], { styles: { root: { marginTop: '50vh' } }, ariaLabel: _ms_odsp_datasources_lib_dataSources_multilingual_MultilingualInputs_resx__WEBPACK_IMPORTED_MODULE_6___default.a.LoadingLabel, size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_4__["SpinnerSize"].large }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_11__["css"])('ms-MultilingualInputs-Links', this.props.contentClassNames) }, this.state.translations.map(function (translationInput, index) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_TextField_index__WEBPACK_IMPORTED_MODULE_2__["TextField"], { key: "MUIEditing_" + translationInput.language, className: 'ms-MultilingualInputs-Link', label: translationInput.language, multiline: _this.props.multilineInput, value: translationInput.value, required: index === 0, onChange: _this._onChange(index), styles: { root: { marginRight: '6px' } }, errorMessage: index === 0 && _this.state.errorState }));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-MultilingualInputs-ButtonArea' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { className: 'ms-MultilingualInputs-SaveButton', onClick: this._handleSaveClick, disabled: !!this.state.errorState, "data-automationid": 'MultilingualInputs-SaveTranslation' }, _EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.CalloutOkButton),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { className: 'ms-MultilingualInputs-CancelButton', onClick: this._handleCancelClick, "data-automationid": 'MultilingualInputs-CancelTranslation' }, _EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_7___default.a.CancelButtonLabel))));
    };
    return MultilingualInputs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=MultilingualInputs.js.map

/***/ }),

/***/ "Evel":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceForm.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: AudienceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceForm", function() { return AudienceForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/Label */ "wMNn");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _AudiencePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudiencePicker */ "m9Yg");
/* harmony import */ var _AudienceForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceForm.module.scss */ "wcWb");
/* harmony import */ var _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AudienceForm.resx */ "Y1W1");
/* harmony import */ var _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6__);







/**
 * @internal
 */
function AudienceForm(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _AudienceForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["label"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], { "aria-label": _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6___default.a.AudiencesLabel }, _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6___default.a.AudiencesLabel),
            props.helpLink && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipHost"], { content: _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6___default.a.AudiencesTooltip },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { ariaLabel: _AudienceForm_resx__WEBPACK_IMPORTED_MODULE_6___default.a.AudiencesTooltip, iconProps: { iconName: 'info' }, href: props.helpLink })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AudiencePicker__WEBPACK_IMPORTED_MODULE_4__["AudiencePicker"], { pageContext: props.pageContext, audiences: props.audiences, limit: props.limit, onChangeAudiences: props.onChangeAudiences })));
}
//# sourceMappingURL=AudienceForm.js.map

/***/ }),

/***/ "FYTj":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavCallout/EditNavCallout.scss.js ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": "[dir='ltr'] .ms-Dropdown-item.ms-Button+.ms-Button{margin-left:0}[dir='rtl'] .ms-Dropdown-item.ms-Button+.ms-Button{margin-right:0}.ms-EditNavCallout{width:320px}.ms-EditNavCallout-buttonArea{vertical-align:top;display:inline-block;margin-top:16px;width:100%}[dir='ltr'] .ms-EditNavCallout-buttonArea{text-align:left}[dir='rtl'] .ms-EditNavCallout-buttonArea{text-align:right}.ms-EditNavCallout-TranslationInfo{vertical-align:middle;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}[dir='ltr'] .ms-EditNavCallout-TranslationInfo{margin-left:5px}[dir='rtl'] .ms-EditNavCallout-TranslationInfo{margin-right:5px}.ms-EditNavCallout-inner{height:100%;padding:0 24px 20px}.ms-EditNavCallout-header{padding:18px 24px 12px}.ms-EditNavCallout-title{margin:0;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:" }, { "theme": "xLargeFontWeight", "defaultValue": "600" }, { "rawString": "}.ms-EditNavCallout-Spinner{padding:5px}.ms-EditNavCallout-ErrorMessage{color:#a4262c;font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;margin:0px;padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-EditNavCallout-GroupCount{color:#605e5c;font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400;font-weight:normal}.ms-EditNavCallout-inner-AudienceNav .ms-BasePicker-text span[role='list']{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}.ms-Dropdown-container .ms-Dropdown:after:focus{border-width:1px}.ms-BasePicker .ms-BasePicker-text{border-radius:2px}.ms-BasePicker .ms-BasePicker-text .ms-BasePicker-input{height:32px;font-size:14px}.ms-EditNavCallout-inner:not(.fix-AudiencePickerTheme) .ms-PickerPersona-container.is-selected{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.ms-EditNavCallout-inner:not(.fix-AudiencePickerTheme) .ms-PickerPersona-container.is-selected:hover{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.ms-EditNavCallout-AudienceTargeting-InheritInfo{font-size:" }, { "theme": "smallFontSize", "defaultValue": "12px" }, { "rawString": ";font-weight:400}.ms-EditNavCallout-LinkToDropdown{margin-bottom:16px}.ms-EditNavCallout-Address{margin-bottom:16px}.ms-EditNavCallout-Display{margin-bottom:16px}.ms-EditNavCallout-Display-translateLink{margin-bottom:0}\n" }]);
//# sourceMappingURL=EditNavCallout.scss.js.map

/***/ }),

/***/ "LSjO":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Signal.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Signal"]; });

// Loading @ms/odsp-utilities/./lib/async/Signal.js



/***/ }),

/***/ "O+k/":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/EditNavCallout.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: PARENT_SIBLING_HUBS_OPTION, CHILDREN_HUBS_OPTION, EditNavCallout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EditNav_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditNav/EditNavCallout/index */ "8Lop");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARENT_SIBLING_HUBS_OPTION", function() { return _components_EditNav_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_0__["PARENT_SIBLING_HUBS_OPTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHILDREN_HUBS_OPTION", function() { return _components_EditNav_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_0__["CHILDREN_HUBS_OPTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavCallout", function() { return _components_EditNav_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_0__["EditNavCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_EditNav_EditNavCallout_index__WEBPACK_IMPORTED_MODULE_0__["EditNavCallout"]; });



//# sourceMappingURL=EditNavCallout.js.map

/***/ }),

/***/ "OJqW":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/multilingual/TranslationsDataSource.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: DataSourceType, TranslationsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceType", function() { return DataSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsDataSource", function() { return TranslationsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "z71h");
/* harmony import */ var _LanguageNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LanguageNames */ "T4kc");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");





var MISSING_WEB_ID = 'MissingWebId';
var NAV_NODE_ID_PLACEHOLDER = '$NodeId';
var GET_WEB = '/_api/web/';
var GET_NAV_TRANSLATIONS = GET_WEB + "navigation/GetNodeById(" + NAV_NODE_ID_PLACEHOLDER + ")/TitleResource/GetResourceEntries";
var GET_SUPPORTED_LANGUAGES = GET_WEB + "/SupportedUILanguageIds";
var DataSourceType;
(function (DataSourceType) {
    DataSourceType[DataSourceType["NewNavNode"] = 0] = "NewNavNode";
    DataSourceType[DataSourceType["ExistingNavNode"] = 1] = "ExistingNavNode";
    DataSourceType[DataSourceType["SiteTitle"] = 2] = "SiteTitle";
    DataSourceType[DataSourceType["SiteDescription"] = 3] = "SiteDescription";
})(DataSourceType || (DataSourceType = {}));
var TranslationsDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TranslationsDataSource, _super);
    function TranslationsDataSource(pageContext) {
        var _a, _b;
        var _this = _super.call(this, {
            id: 'TranslationsDataSource',
            dataSourceName: 'TranslationsDataSource'
        }, {
            pageContext: pageContext
        }) || this;
        _this.clearCache = function () {
            _this.flushCache(_this._cacheRequestKey);
        };
        _this.getTranslations = function (dataSourceType, navNodeKey) {
            var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["Qos"]({ name: _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].PREFIX + ".MUIEditing.NAVGetResourceEntries" });
            return _this.getTranslationsPromise(dataSourceType, { navNodeKey: navNodeKey })
                .then(function (response) {
                qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Success });
                return _this.formatTranslations(response);
            })
                .catch(function (e) {
                qosEvent.end({
                    resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Failure,
                    error: e && e.message ? e.message.toString() : 'GetResourceEntries failed'
                });
                return [];
            });
        };
        _this.getAllSupportedLanguages = function () {
            var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["Qos"]({ name: _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].PREFIX + ".MUIEditing.GetSupportedLanguages" });
            return _this.getAllSupportedLanguagesPromise()
                .then(function (response) {
                qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Success });
                return _this._getAllSupportedLanguagesWithDefaultValue(response);
            })
                .catch(function (e) {
                qosEvent.end({
                    resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_4__["ResultTypeEnum"].Failure,
                    error: e && e.message ? e.message.toString() : 'GetSupportedLanguages failed'
                });
                return [];
            });
        };
        _this.formatTranslations = function (translations) {
            if (!translations) {
                return [];
            }
            var supportedLanguage = translations.map(function (entry) { return ({
                code: entry.LCID,
                language: _LanguageNames__WEBPACK_IMPORTED_MODULE_3__["LanguageNames"].getResourceByCode(entry.LCID) || '',
                value: entry.Value
            }); });
            return supportedLanguage;
        };
        _this.getTranslationsPromise = function (dataSourceType, options) {
            if (!_this._pageContext || !_this._pageContext.webId) {
                return Promise.reject(MISSING_WEB_ID);
            }
            var baseURL = _this._pageContext.webAbsoluteUrl;
            var qosName = '';
            var apiUrl = '';
            switch (dataSourceType) {
                case DataSourceType.ExistingNavNode:
                    apiUrl = baseURL + GET_NAV_TRANSLATIONS.replace(NAV_NODE_ID_PLACEHOLDER, options.navNodeKey);
                    qosName = 'MUIEditingGetNavTranslations';
                    break;
                case DataSourceType.SiteTitle:
                    apiUrl = baseURL + GET_WEB + 'TitleTranslations';
                    qosName = 'MUIEditingGetSiteTitleTranslations';
                    break;
                case DataSourceType.SiteDescription:
                    apiUrl = baseURL + GET_WEB + 'DescriptionTranslations';
                    qosName = 'MUIEditingGetSiteDescriptionTranslations';
                    break;
                default:
                    break;
            }
            var paramsForGetData = {
                url: apiUrl,
                qosName: qosName,
                parseResponse: function (responseText) {
                    return responseText && JSON.parse(responseText).value;
                },
                method: 'GET',
                additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1,
                cachingStrategy: 3 /* bypassCache */
            };
            return _this.getDataUtilizingPersistentCache(paramsForGetData).catch(function (error) {
                throw error;
            });
        };
        _this.getAllSupportedLanguagesPromise = function () {
            if (!_this._pageContext || !_this._pageContext.webId) {
                return Promise.reject(MISSING_WEB_ID);
            }
            var baseURL = _this._pageContext.webAbsoluteUrl;
            var apiURL = baseURL + GET_SUPPORTED_LANGUAGES;
            var paramsForGetData = {
                url: apiURL,
                qosName: 'GetAllSupportedLanguagesMUIEditing',
                parseResponse: function (responseText) {
                    return responseText && JSON.parse(responseText).value;
                },
                method: 'GET',
                additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
                contentType: 'application/json; odata.metadata=minimal',
                maxRetries: 1,
                cachingStrategy: 3 /* bypassCache */
            };
            return _this.getDataUtilizingPersistentCache(paramsForGetData).catch(function (error) {
                throw error;
            });
        };
        _this._getAllSupportedLanguagesWithDefaultValue = function (languageCodes) {
            var supportedLanguages = languageCodes.map(function (code) {
                return { code: code, language: _LanguageNames__WEBPACK_IMPORTED_MODULE_3__["LanguageNames"].getResourceByCode(code) || '', value: '' };
            });
            return supportedLanguages;
        };
        _this._cacheRequestKey = "TranslationsDataSource_" + ((_a = pageContext) === null || _a === void 0 ? void 0 : _a.siteId) + "_" + ((_b = pageContext) === null || _b === void 0 ? void 0 : _b.webId);
        return _this;
    }
    TranslationsDataSource.convertTranslationInputToSPResourceEntry = function (translations) {
        return translations.map(function (translation) {
            return {
                LCID: translation.code,
                Value: translation.value
            };
        });
    };
    TranslationsDataSource.getDisplayLanguage = function (translatedTitles, pageContext) {
        var preferredLanguageResourceEntry = translatedTitles.filter(function (t) { var _a; return t.code === ((_a = pageContext) === null || _a === void 0 ? void 0 : _a.currentLanguage); });
        var webDefaultLanguageResourceEntry = translatedTitles.filter(function (t) { var _a; return t.code === ((_a = pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage); });
        var displayLanguageResourceEntry;
        if (preferredLanguageResourceEntry.length === 1 &&
            preferredLanguageResourceEntry[0].value.trim().length > 0) {
            // first check if this list contains user preferred language label
            displayLanguageResourceEntry = preferredLanguageResourceEntry[0];
        }
        else {
            // if not, display title will use the label from web default language
            displayLanguageResourceEntry = webDefaultLanguageResourceEntry[0];
        }
        return [displayLanguageResourceEntry, webDefaultLanguageResourceEntry[0]];
    };
    return TranslationsDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]));

//# sourceMappingURL=TranslationsDataSource.js.map

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

/***/ "P2cQ":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/index.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "Qbl6":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Retry.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_0__["Retry"]; });

// Loading @ms/odsp-utilities/./lib/async/Retry.js



/***/ }),

/***/ "R6AV":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: AudienceForm, AudiencePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudienceForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudienceForm */ "Evel");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudienceForm", function() { return _AudienceForm__WEBPACK_IMPORTED_MODULE_0__["AudienceForm"]; });

/* harmony import */ var _AudiencePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiencePicker */ "m9Yg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiencePicker", function() { return _AudiencePicker__WEBPACK_IMPORTED_MODULE_1__["AudiencePicker"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "T4kc":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/multilingual/LanguageNames.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: LanguageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageNames", function() { return LanguageNames; });
/* harmony import */ var _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loc/LanguageNames.resx */ "DY2p");
/* harmony import */ var _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0__);

var LANGUAGE_NAMES = !_loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a
    ? {}
    : {
        // this list should be in sync with the available languages choices in MultilingualColumns.xms
        'ar-sa': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Arabic, name: 'العربية', code: 1025 },
        'az-latn-az': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Azerbaijani, name: 'آذربایجان دیلی', code: 1068 },
        'bg-bg': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Bulgarian, name: 'български език', code: 1026 },
        'bs-latn-ba': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Bosnian, name: 'Bosanski', code: 5146 },
        'ca-es': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Catalan, name: 'Català', code: 1027 },
        'cs-cz': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Czech, name: 'Český Jazyk', code: 1029 },
        'cy-gb': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Welsh, name: 'Cymraeg', code: 1106 },
        'da-dk': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Danish, name: 'Dansk', code: 1030 },
        'de-de': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.German, name: 'Deutsche', code: 1031 },
        'el-gr': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Greek, name: 'Ελληνικά', code: 1032 },
        'en-us': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.English, name: 'English', code: 1033 },
        'es-es': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Spanish, name: 'Español', code: 3082 },
        'et-ee': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Estonian, name: 'Eesti', code: 1061 },
        'eu-es': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Basque, name: 'Euskara', code: 1069 },
        'fi-fi': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Finnish, name: 'Suomi', code: 1035 },
        'fr-fr': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.French, name: 'Français', code: 1036 },
        'ga-ie': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Irish, name: 'Gaeilge', code: 2108 },
        'gl-es': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Galician, name: 'Galego', code: 1110 },
        'he-il': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hebrew, name: 'עברית', code: 1037 },
        'hi-in': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hindi, name: 'हिंदी', code: 1081 },
        'hr-hr': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Croatian, name: 'Hrvatski', code: 1050 },
        'hu-hu': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hungarian, name: 'Magyar', code: 1038 },
        'id-id': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Indonesian, name: 'Bahasa Indonesia', code: 1057 },
        'it-it': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Italian, name: 'Italiano', code: 1040 },
        'ja-jp': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Japanese, name: '日本語', code: 1041 },
        'kk-kz': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Kazakh, name: 'Қазақ Tілі', code: 1087 },
        'ko-kr': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Korean, name: '조선말, 한국어', code: 1042 },
        'lt-lt': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Lithuanian, name: 'Lietuvių', code: 1063 },
        'lv-lv': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Latvian, name: 'Latviešu', code: 1062 },
        'mk-mk': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Macedonian, name: 'Mакедонски', code: 1071 },
        'ms-my': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Malay, name: 'Bahasa Melayu', code: 1086 },
        'nb-no': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Norwegian, name: 'Norsk', code: 1044 },
        'nl-nl': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Dutch, name: 'Nederlands', code: 1043 },
        'pl-pl': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Polish, name: 'Polski', code: 1045 },
        'prs-af': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Dari, name: 'درى', code: 1164 },
        'pt-br': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.PortugueseBR, name: 'Português Brasil', code: 1046 },
        'pt-pt': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.PortuguesePT, name: 'Português', code: 2070 },
        'ro-ro': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Romanian, name: 'Română', code: 1048 },
        'ru-ru': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Russian, name: 'Русский', code: 1049 },
        'sk-sk': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Slovak, name: 'Slovenčina', code: 1051 },
        'sl-si': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Slovene, name: 'Slovenščina', code: 1060 },
        'sr-cyrl-rs': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.SerbianCRS, name: 'Српски', code: 10266 },
        'sr-latn-cs': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.SerbianLCS, name: 'Srpski', code: 2074 },
        'sv-se': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Swedish, name: 'Svenska', code: 1053 },
        'th-th': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Thai, name: 'ภาษาไทย', code: 1054 },
        'tr-tr': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Turkish, name: 'Türkçe', code: 1055 },
        'uk-ua': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Ukrainian, name: 'Українська', code: 1058 },
        'vi-vn': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Vietnamese, name: 'Tiếng Việt Nam', code: 1066 },
        'zh-cn': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.ChineseCN, name: '简体中文', code: 2052 },
        'zh-tw': { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.ChineseTW, name: '繁體中文', code: 1028 } // Chinese (Traditional, Taiwan)
    };
var LANGUAGE_NAMES_BY_CODES = !_loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a
    ? {}
    : {
        1025: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Arabic, languageCode: 'ar-sa' },
        1068: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Azerbaijani, languageCode: 'az-latn-az' },
        1026: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Bulgarian, languageCode: 'bg-bg' },
        5146: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Bosnian, languageCode: 'bs-latn-ba' },
        1027: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Catalan, languageCode: 'ca-es' },
        1029: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Czech, languageCode: 'cs-cz' },
        1106: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Welsh, languageCode: 'cy-gb' },
        1030: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Danish, languageCode: 'da-dk' },
        1031: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.German, languageCode: 'de-de' },
        1032: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Greek, languageCode: 'el-gr' },
        1033: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.English, languageCode: 'en-us' },
        3082: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Spanish, languageCode: 'es-es' },
        1061: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Estonian, languageCode: 'et-ee' },
        1069: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Basque, languageCode: 'eu-es' },
        1035: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Finnish, languageCode: 'fi-fi' },
        1036: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.French, languageCode: 'fr-fr' },
        2108: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Irish, languageCode: 'ga-ie' },
        1110: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Galician, languageCode: 'gl-es' },
        1037: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hebrew, languageCode: 'he-il' },
        1081: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hindi, languageCode: 'hi-in' },
        1050: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Croatian, languageCode: 'hr-hr' },
        1038: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Hungarian, languageCode: 'hu-hu' },
        1057: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Indonesian, languageCode: 'id-id' },
        1040: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Italian, languageCode: 'it-it' },
        1041: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Japanese, languageCode: 'ja-jp' },
        1087: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Kazakh, languageCode: 'kk-kz' },
        1042: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Korean, languageCode: 'ko-kr' },
        1063: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Lithuanian, languageCode: 'lt-lt' },
        1062: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Latvian, languageCode: 'lv-lv' },
        1071: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Macedonian, languageCode: 'mk-mk' },
        1086: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Malay, languageCode: 'ms-my' },
        1044: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Norwegian, languageCode: 'nb-no' },
        1043: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Dutch, languageCode: 'nl-nl' },
        1045: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Polish, languageCode: 'pl-pl' },
        1164: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Dari, languageCode: 'prs-af' },
        1046: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.PortugueseBR, languageCode: 'pt-br' },
        2070: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.PortuguesePT, languageCode: 'pt-pt' },
        1048: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Romanian, languageCode: 'ro-ro' },
        1049: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Russian, languageCode: 'ru-ru' },
        1051: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Slovak, languageCode: 'sk-sk' },
        1060: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Slovene, languageCode: 'sl-si' },
        10266: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.SerbianCRS, languageCode: 'sr-cyrl-rs' },
        2074: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.SerbianLCS, languageCode: 'sr-latn-cs' },
        1053: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Swedish, languageCode: 'sv-se' },
        1054: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Thai, languageCode: 'th-th' },
        1055: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Turkish, languageCode: 'tr-tr' },
        1058: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Ukrainian, languageCode: 'uk-ua' },
        1066: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.Vietnamese, languageCode: 'vi-vn' },
        2052: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.ChineseCN, languageCode: 'zh-cn' },
        1028: { resource: _loc_LanguageNames_resx__WEBPACK_IMPORTED_MODULE_0___default.a.ChineseTW, languageCode: 'zh-tw' } // Chinese (Traditional, Taiwan)
    };
var LanguageNames = /** @class */ (function () {
    function LanguageNames() {
    }
    LanguageNames.getName = function (languageCode) {
        var names = LanguageNames._getLanguageName(languageCode);
        return (names && names.name) || '';
    };
    LanguageNames.getLocalizedName = function (languageCode) {
        var names = LanguageNames._getLanguageName(languageCode);
        return (names && names.resource) || '';
    };
    LanguageNames.getCode = function (languageCode) {
        var names = LanguageNames._getLanguageName(languageCode);
        return names && names.code;
    };
    LanguageNames.getLanguageByCode = function (code) {
        return LANGUAGE_NAMES_BY_CODES[code].languageCode;
    };
    LanguageNames.getResourceByCode = function (code) {
        return LANGUAGE_NAMES_BY_CODES[code].resource;
    };
    LanguageNames.getLanguagesByCode = function () {
        return LANGUAGE_NAMES_BY_CODES;
    };
    LanguageNames._getLanguageName = function (languageCode) {
        var code = languageCode.toLowerCase();
        return LANGUAGE_NAMES[code];
    };
    return LanguageNames;
}());

//# sourceMappingURL=LanguageNames.js.map

/***/ }),

/***/ "ToNz":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/containers/EditNav/EditNavStateManager.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavStateManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavStateManager", function() { return EditNavStateManager; });
/* harmony import */ var _components_EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/EditNav/EditNav.resx */ "DF9w");
/* harmony import */ var _components_EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _ms_odsp_datasources_lib_EditNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/EditNav */ "Wu8F");
/* harmony import */ var _ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/DesignPackage */ "cGzF");
/* harmony import */ var _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ChromeOptions */ "XnGw");
/* harmony import */ var _ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Retry */ "Qbl6");
/* harmony import */ var _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Signal */ "LSjO");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-datasources/lib/Hub */ "rdJO");
/* harmony import */ var _EditNavCallout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../EditNavCallout */ "O+k/");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-datasources/lib/ViewNav */ "Qjmx");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage

/* odsp-datasources */




/* odsp-utilities */








var MAX_FOOTER_LINKS = 8;
/**
 * This class manages the state of the EditNav.
 * @public
 */
var EditNavStateManager = /** @class */ (function () {
    function EditNavStateManager(params) {
        var _this = this;
        /** hub sites based on EditNavCallout selection. It can be chidren hubs or parent+siblings hubs */
        this._hubs = [];
        this._onSelectionChanged = function (selectedKey) {
            // When hubs related selection changes, give it a initial loading state.
            _this._isHubsLoading = true;
            _this._setState({});
            if (selectedKey === _EditNavCallout__WEBPACK_IMPORTED_MODULE_9__["PARENT_SIBLING_HUBS_OPTION"]) {
                _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_10__["default"].all({
                    parentHub: _this._hubDataSource.getConnectedHubs(_this._params.pageContext.hubSiteId, _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_8__["HubSiteQueryOption"].Parent),
                    siblingHubs: _this._hubDataSource.getConnectedHubs(_this._params.pageContext.hubSiteId, _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_8__["HubSiteQueryOption"].Siblings)
                }).then(function (dataResults) {
                    var parentHub = dataResults.parentHub, siblingHubs = dataResults.siblingHubs;
                    _this._hub = parentHub ? parentHub[0] : null;
                    _this._hubs = _this._hub ? [_this._hub].concat(siblingHubs) : siblingHubs;
                    _this._isHubsLoading = false;
                    _this._setState({});
                });
            }
            else if (selectedKey === _EditNavCallout__WEBPACK_IMPORTED_MODULE_9__["CHILDREN_HUBS_OPTION"]) {
                _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_10__["default"].all({
                    currentHub: _this._hubDataSource.getHubSite(_this._params.pageContext.hubSiteId),
                    childrenHubs: _this._hubDataSource.getConnectedHubs(_this._params.pageContext.hubSiteId, _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_8__["HubSiteQueryOption"].Children)
                }).then(function (dataResults) {
                    var currentHub = dataResults.currentHub, childrenHubs = dataResults.childrenHubs;
                    _this._hubs = childrenHubs;
                    _this._hub = currentHub;
                    _this._isHubsLoading = false;
                    _this._setState({});
                });
            }
        };
        this._onSaveClick = function (data) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__["Engagement"].logData({ name: 'EditNav.Save.Click' });
            var originalGroup = _this._params.group;
            var saveToTopNav = originalGroup.key === "GlobalNav" /* globalNav */ || originalGroup.key === "HubNav" /* hubNav */;
            var groupName;
            var isFooter = originalGroup.key === "Footer" /* footer */ ||
                originalGroup.name === "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */ ||
                originalGroup.name === "47a59018-dcc3-4e98-a14e-146bc4001628" /* footerNavSections */;
            // name contains the specific footer link key, i.e footer links or footer sections
            groupName = isFooter ? originalGroup.name : undefined;
            // Save changes to the server.
            // This call must include all original links (including deleted ones) and any new links.
            // If it doesn't include the deleted links (which EditNavDataCache.getViewLinks removes),
            // those nodes won't be deleted by the server.
            var linksToSave = data.getLinksToSave();
            var saveSignal = new _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_6__["default"]();
            _this._editNavDataSource.onSave(linksToSave, saveToTopNav, groupName).then(function (result) { return (result ? saveSignal.complete() : saveSignal.error()); }, function (error) { return saveSignal.error(error); });
            saveSignal.getPromise().then(
            /*onComplete*/ function () {
                // Get new links from the server, then display them.
                // (Retry multiple times, since the fallback behavior is not very good.)
                var newLinksPromise = Object(_ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_5__["default"])({
                    retries: 2,
                    callback: function () {
                        return originalGroup.getNewLinks
                            ? originalGroup.getNewLinks()
                            : _this._editNavDataSource
                                .getMenuState({
                                isGlobalNav: saveToTopNav,
                                useCache: true,
                                forceRefresh: true,
                                skipAudienceFiltering: true,
                                menuNodeKey: groupName
                            })
                                .then(function (result) { return result.links; });
                    }
                });
                var shouldUpdateAudienceTargetState = data.getAudienceTargetingEnabled() !==
                    (isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                        ? _this._audienceTargetingEnabled
                        : _this._editNavDataSource.isNavAudienceTargetedEnabled());
                var ret = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_10__["default"].resolve();
                if (shouldUpdateAudienceTargetState) {
                    ret = _this._updateAudienceTargetingSetting(data.getAudienceTargetingEnabled()).then(function () {
                        return _this._updateNewsLink(originalGroup, newLinksPromise);
                    });
                }
                else {
                    ret = _this._updateNewsLink(originalGroup, newLinksPromise);
                }
                return ret.then(_this._params.onEditNavSaved || (function () { }));
            }, 
            /*onError*/ function (error) {
                // Something went wrong saving the links. display and screen reader announce error message.
                _this._setState({
                    isSaving: false,
                    errorMessage: (error && error.message) || _components_EditNav_EditNav_resx__WEBPACK_IMPORTED_MODULE_0___default.a.DefaultError
                });
            });
        };
        this._updateNewsLink = function (originalGroup, newLinksPromise) {
            return newLinksPromise.then(
            /*onComplete*/ function (links) {
                // Success! Display the new links and exit edit mode.
                // TODO: set focus?
                if (originalGroup.augmentLinks) {
                    originalGroup.augmentLinks(links);
                }
                _this._params.updateDisplayedLinks(links);
                _this._params.exitEditMode();
            }, 
            /*onError*/ function () {
                // Something went wrong getting new links. Refresh the page so hopefully
                // the links will load that way.
                window.location.reload();
            });
        };
        this._onCancelClick = function () {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__["Engagement"].logData({ name: 'EditNav.Cancel.Click' });
            _this._params.exitEditMode();
        };
        this.updateParams(params);
    }
    EditNavStateManager.prototype.UNSAFE_componentWillMount = function () {
        var _this = this;
        var _a = this._params, navLinkGroup = _a.group, getGroupsProvider = _a.getGroupsProvider, resourceLinkInfo = _a.resourceLinkInfo, pageContext = _a.pageContext;
        // Figure out if we need to load either updated nav data or group metadata before editing
        var isGroup = Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_1__["isGroupWebContext"])(pageContext);
        var isHubNav = navLinkGroup.key === "HubNav" /* hubNav */;
        // Only do this if we're using the new edit nav which supports loading/saving states
        // Called after promises finish to set isLoading=false
        var setNotLoading = function () { return _this._setState({ isLoading: false }); };
        if (isHubNav) {
            // For the hub nav only, load updated data right before editing.
            this._setState({ isLoading: true });
            navLinkGroup.getNewLinks(true).then(function (links) {
                if (_this._fixEditNavExpKSActivated()) {
                    navLinkGroup.links = links;
                }
                else {
                    _this._allLinks = links;
                }
                setNotLoading();
            });
        }
        else if (isGroup && getGroupsProvider && resourceLinkInfo) {
            // For a group, we should get links to group resources if possible, but go ahead and
            // say we're done loading in case there's an issue loading group info.
            // (It's possible with GroupsProvider.getGroup that neither the complete nor error callback
            // will ever be called, if the event indicating group info has arrived never fires.)
            setNotLoading();
            getGroupsProvider().then(function (groupsProvider) {
                if (groupsProvider && groupsProvider.group) {
                    // Info about the group may not be fully loaded.
                    // Ensure info is loaded, then fill out the resource links.
                    return groupsProvider.getGroup().then(function (group) {
                        _this._updateO365GroupsInfo(group);
                    });
                }
            });
        }
        else {
            setNotLoading();
        }
    };
    /**
     * Update the referenced groups/etc. Must be called while EditNav component is unmounted.
     * @deprecated in favor of using an EditNavContainer
     */
    EditNavStateManager.prototype.updateParams = function (params) {
        this._params = params;
        this._resourceLinks = undefined;
        this._editNavDataSource = new _ms_odsp_datasources_lib_EditNav__WEBPACK_IMPORTED_MODULE_2__["EditNavDataSource"](params.pageContext);
        this._hubDataSource = new _ms_odsp_datasources_lib_Hub__WEBPACK_IMPORTED_MODULE_8__["HubDataSource"](params.pageContext);
    };
    EditNavStateManager.prototype.getEditNavProps = function () {
        var params = this._params;
        var state = params.container && params.container.state;
        var chromeOptions = Object(_ms_odsp_datasources_lib_DesignPackage__WEBPACK_IMPORTED_MODULE_3__["getCurrentChromeOptions"])(this._params.pageContext);
        var isFooter = params.group &&
            (params.group.key === "Footer" /* footer */ || params.group.name === "3a94b35f-030b-468e-80e3-b75ee84ae0ad" /* footerNavLinks */);
        var maxLevelCount = params.maxLevelCount;
        var linkLimit = params.linkLimit;
        var hideLinksAboveMaxLevel = false;
        if (isFooter) {
            var footerLayout = chromeOptions.footer.layout !== undefined ? chromeOptions.footer.layout : _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].SIMPLE;
            linkLimit = MAX_FOOTER_LINKS;
            hideLinksAboveMaxLevel = true;
            if (footerLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].SIMPLE) {
                maxLevelCount = 1;
            }
            else if (footerLayout === _ms_odsp_datasources_lib_ChromeOptions__WEBPACK_IMPORTED_MODULE_4__["FooterLayout"].EXTENDED) {
                maxLevelCount = 2;
            }
        }
        var group = params.group;
        if (!this._fixEditNavExpKSActivated() &&
            this._params.group.key === "HubNav" /* hubNav */ &&
            this._allLinks) {
            // for hubnav, substitute links with unfiltered links on edit,
            // reconstruct a new object here to avoid modify original group
            // use object.create for IE and Edge support
            group = Object.create(group);
            group.links = this._allLinks;
        }
        return {
            isOnTop: params.isOnTop,
            group: group,
            onSave: this._onSaveClick,
            onCancel: this._onCancelClick,
            resourceLinks: this._resourceLinks,
            // params for only new version (ignored by v1)
            maxLevelCount: maxLevelCount,
            isLoading: state && state.isLoading,
            isSaving: state && state.isSaving,
            errorMessage: state && state.errorMessage,
            navPlacement: chromeOptions && chromeOptions.nav.placement,
            isHubSite: this._params.pageContext.isHubSite,
            pageContext: params.pageContext,
            title: this._params.title,
            hub: this._hub,
            hubs: this._hubs,
            onSelectionChanged: this._onSelectionChanged,
            isOKDisabled: this._isHubsLoading,
            audienceTargetingEnabled: isCheckNavAudienceTargetInViewNavKillSwitchActivated()
                ? this._audienceTargetingEnabled
                : this._editNavDataSource.isNavAudienceTargetedEnabled(),
            linkLimit: linkLimit,
            hideLinksAboveMaxLevel: hideLinksAboveMaxLevel
        };
    };
    EditNavStateManager.prototype._setState = function (state) {
        this._params.container.setState(state);
    };
    EditNavStateManager.prototype._updateO365GroupsInfo = function (group) {
        // fill the Group resources links.
        if (group) {
            this._resourceLinks = [];
            for (var _i = 0, _a = this._params.resourceLinkInfo; _i < _a.length; _i++) {
                var link = _a[_i];
                var url = group[link.keyName];
                if (url) {
                    this._resourceLinks.push({
                        name: link.title,
                        icon: link.icon,
                        url: url,
                        engagementName: link.keyName
                    });
                }
            }
            if (this._resourceLinks.length) {
                this._setState({}); // force update
            }
        }
    };
    EditNavStateManager.prototype._updateAudienceTargetingSetting = function (audienceTargetStateInUI) {
        var _this = this;
        if (!this._logAudienceTargetLogKSActivated) {
            _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__["Engagement"].logData({
                name: audienceTargetStateInUI ? 'EditNav.AudienceTarget.Enable' : 'EditNav.AudienceTarget.Disable'
            });
        }
        if (this._params && this._params.pageContext) {
            var audienceTargetingDataSource = _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_11__["AudiencesDataSource"].getInstance(this._params.pageContext);
            return (isUseSaveAudienceTargetFromEditNavKillSwitchActivated()
                ? audienceTargetingDataSource.saveAudienceTargetSetting(audienceTargetStateInUI)
                : this._editNavDataSource.saveAudienceTargetSetting(audienceTargetStateInUI)).then(function () {
                if (isUseSaveAudienceTargetFromEditNavKillSwitchActivated()) {
                    _this._updateAudienceTargetingEnabledFlag(audienceTargetStateInUI);
                }
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_10__["default"].reject('pageContext does not exist');
    };
    /** @deprecated Remove it when graduate the UseSaveAudienceTargetFromEditNav kill switch (1339886e-5fd0-4d01-bd63-6dcd3f3537d2) */
    EditNavStateManager.prototype._updateAudienceTargetingEnabledFlag = function (enabled) {
        if (!this._params.pageContext || isNaN(this._params.pageContext.webPropertyFlags2)) {
            return;
        }
        if (enabled) {
            this._params.pageContext.webPropertyFlags2 |= _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_11__["AudiencesDataSource"].NAV_AUDIENCE_TARGETING_ENABLED;
        }
        else {
            this._params.pageContext.webPropertyFlags2 &= ~_ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_11__["AudiencesDataSource"].NAV_AUDIENCE_TARGETING_ENABLED;
        }
    };
    Object.defineProperty(EditNavStateManager.prototype, "_audienceTargetingEnabled", {
        /** @deprecated Remove it when graduate the CheckNavAudienceTargetInViewNav kill switch (71980d68-1e8b-44e4-84a5-19370f97ec10) */
        get: function () {
            if (!this._params || !this._params.pageContext || !this._params.pageContext.webPropertyFlags2) {
                return false;
            }
            return ((this._params.pageContext.webPropertyFlags2 & _ms_odsp_datasources_lib_ViewNav__WEBPACK_IMPORTED_MODULE_11__["AudiencesDataSource"].NAV_AUDIENCE_TARGETING_ENABLED) !==
                0x00);
        },
        enumerable: true,
        configurable: true
    });
    EditNavStateManager.prototype._fixEditNavExpKSActivated = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('d0ca7767-8cee-4ef3-8750-f85c29b10f30'
        /* '02/06/2020', 'Fix nav edit experience' */
        );
    };
    EditNavStateManager.prototype._logAudienceTargetLogKSActivated = function () {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('86939665-5b2e-4faf-ace4-3716b092ba81'
        /* '08/03/2020', 'Log the audience target engagement log' */
        );
    };
    return EditNavStateManager;
}());

function isUseSaveAudienceTargetFromEditNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('1339886e-5fd0-4d01-bd63-6dcd3f3537d2'
    /* '2020-09-16', 'Use saveAudienceTargetSetting API from EditNavDataSource class' */
    );
}
function isCheckNavAudienceTargetInViewNavKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_12__["Killswitch"].isActivated('71980d68-1e8b-44e4-84a5-19370f97ec10'
    /* '2020-12-15', 'Leverage the check nav audience target method from ViewNavDataSource' */
    );
}
/* harmony default export */ __webpack_exports__["default"] = (EditNavStateManager);
//# sourceMappingURL=EditNavStateManager.js.map

/***/ }),

/***/ "Wu8F":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/EditNav.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: EditNavDataSource, NavNodeKeys, NavigationProvider, EditNavLinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataSources_editNav_EditNavDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataSources/editNav/EditNavDataSource */ "rIcy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavDataSource", function() { return _dataSources_editNav_EditNavDataSource__WEBPACK_IMPORTED_MODULE_0__["EditNavDataSource"]; });

/* harmony import */ var _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSources/editNav/IEditNavDataSource */ "ZH1b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavNodeKeys", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavNodeKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationProvider", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["NavigationProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavLinkType", function() { return _dataSources_editNav_IEditNavDataSource__WEBPACK_IMPORTED_MODULE_1__["EditNavLinkType"]; });

// Everything related to the EditNav datasource


//# sourceMappingURL=EditNav.js.map

/***/ }),

/***/ "Y1W1":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceForm.resx.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"AudiencesLabel":"[!!--##Àũďĩēńćēś ţō ţàŕĝēţ##--!!]","AudiencesTooltip":"[!!--##Śēĺēćţ àũďĩēńćēś ţō ţàŕĝēţ ţĥĩś ĺĩńķ ţō.##--!!]"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "ZLTs":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavCallout/EditNavCallout.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: PARENT_SIBLING_HUBS_OPTION, CHILDREN_HUBS_OPTION, EditNavCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARENT_SIBLING_HUBS_OPTION", function() { return PARENT_SIBLING_HUBS_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHILDREN_HUBS_OPTION", function() { return CHILDREN_HUBS_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavCallout", function() { return EditNavCallout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_components_Callout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Callout/index */ "B5pZ");
/* harmony import */ var office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Button/index */ "CHbd");
/* harmony import */ var office_ui_fabric_react_lib_components_TextField_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/TextField/index */ "3IVS");
/* harmony import */ var office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusTrapZone */ "Qiuu");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dropdown */ "6yAV");
/* harmony import */ var office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/Label */ "wMNn");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var _EditNavCallout_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditNavCallout.scss */ "FYTj");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../EditNav.resx */ "DF9w");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_EditNav_resx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utilities/nav/NavCommon */ "qBs0");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _EditNavTranslationContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EditNavTranslationContainer */ "jYVv");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/multilingual/TranslationsDataSource */ "OJqW");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_multilingual_LanguageNames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/multilingual/LanguageNames */ "T4kc");
/* harmony import */ var office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! office-ui-fabric-react/lib/Link */ "F3Wv");
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_SPFeatureInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/SPFeatureInfo */ "eDfq");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var _AudiencePicker_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../AudiencePicker/index */ "R6AV");
/* harmony import */ var _AudiencePicker_AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../AudiencePicker/AudienceKillSwitches */ "hl+O");

























var URL_OPTION = 'URL';
var HEADER_OPTION = 'Header';
/**
 * @internal
 */
var PARENT_SIBLING_HUBS_OPTION = 'ParentSiblingHubsOption';
/**
 * @internal
 */
var CHILDREN_HUBS_OPTION = 'ChildrenHubsOption';
var URL_START_REGEX = /^(https?:\/\/|mailto:|\/|#)/i;
var PROTOCOL_ONLY_REGEX = /^(https?:\/\/|mailto:)$/i;
var MAX_AUDIENCES_IN_PICKER = 10;
var EDIT_NAV_CALLOUT_ZINDEX = 299; // same as $zIndex-ContextMenu
/**
 * @public
 */
var EditNavCallout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNavCallout, _super);
    function EditNavCallout(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderDisplayNameLabel = function (props, defaultRender) {
            var _a, _b, _c, _d;
            if (!((_a = _this.props.pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage)) {
                return undefined;
            }
            var preferredLanguageText = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.TranslationInfoTextUpdateTranslations, _ms_odsp_datasources_lib_dataSources_multilingual_LanguageNames__WEBPACK_IMPORTED_MODULE_19__["LanguageNames"].getResourceByCode((_b = _this.props.pageContext) === null || _b === void 0 ? void 0 : _b.webLanguage));
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                defaultRender(props),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_22__["TooltipHost"], { content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _this.state.currentLCID === ((_c = _this.props.pageContext) === null || _c === void 0 ? void 0 : _c.webLanguage) &&
                        _this.state.currentLCID !== ((_d = _this.props.pageContext) === null || _d === void 0 ? void 0 : _d.currentLanguage)
                        ? preferredLanguageText
                        : _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.TranslationInfoTextDefaultLanguage) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { iconProps: { iconName: 'Info' }, className: 'ms-EditNavCallout-TranslationInfo' }))));
        };
        _this._toggleTranslationpanel = function (showTranslationPanel, dataSourceType, navNodeKey) { return function () {
            _this.setState({ isLoadingTranslation: true });
            if (showTranslationPanel && !_this.state.translatedTitles /** Don't fetch again if already fetched */) {
                // need to fetch translations on-demand before rendering callout
                // in order to let callout component to pre-calculate height:
                var translationsDataSource = new _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["TranslationsDataSource"](_this.props.pageContext);
                if (!_this.props.insertMode && navNodeKey) {
                    translationsDataSource
                        .getTranslations(dataSourceType, navNodeKey)
                        .then(function (response) {
                        _this.setState({
                            showTranslationPanel: true,
                            translatedTitles: response,
                            isLoadingTranslation: false
                        });
                    })
                        .catch(function (error) {
                        _this.setState({ showTranslationPanel: false, isLoadingTranslation: false });
                    });
                }
                else {
                    translationsDataSource
                        .getAllSupportedLanguages()
                        .then(function (response) {
                        _this.setState({
                            showTranslationPanel: true,
                            translatedTitles: response,
                            isLoadingTranslation: false
                        });
                    })
                        .catch(function (error) {
                        _this.setState({ showTranslationPanel: false, isLoadingTranslation: false });
                    });
                }
            }
            else {
                _this.setState({ showTranslationPanel: showTranslationPanel, isLoadingTranslation: false });
            }
        }; };
        _this._onDropdownRef = function (dropdown) {
            if (dropdown) {
                dropdown.focus();
            }
        };
        _this._onClickMUIEditingSave = function (translatedTitles) {
            var displayLanguageResourceEntry = _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["TranslationsDataSource"].getDisplayLanguage(translatedTitles, _this.props.pageContext);
            _this.setState({
                display: displayLanguageResourceEntry[0].value,
                translatedTitles: translatedTitles,
                showTranslationPanel: false,
                currentLCID: displayLanguageResourceEntry[0].code
            });
            _this._webDefaultTitle = displayLanguageResourceEntry[1].value;
        };
        _this._onAddressChanged = function (event, address) {
            if (address === void 0) { address = ''; }
            var newAddress;
            if (_this._shouldPrependHttp(address)) {
                newAddress = 'http://' + address.trim();
            }
            else {
                newAddress = address;
            }
            _this.setState({ address: newAddress });
        };
        _this._onBlur = function () {
            // This handles the case where the user tabs out of the field with a value entered
            // that isn't actually a valid URL, but should return false for _shouldPrependHttp
            // (for example, "htt")
            var address = (_this.state.address || '').trim();
            if (address && !URL_START_REGEX.test(address)) {
                address = 'http://' + address;
                _this.setState({ address: address });
            }
        };
        _this._onOkClick = function (ev) {
            _this._logEngagement();
            var state = _this.state;
            var address = state.address.trim();
            if (_this._useHeaderLinkURL && _this.state.selectedKey === HEADER_OPTION) {
                address = _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_12__["HEADER_LINK_URL"];
            }
            var audiences = _this.props.isNavAudienceTargetingEnabled
                ? _this.state.audiences
                : undefined;
            var webDefaultTitle;
            if (_this._shouldDisplayMUIEditing && _this._webDefaultTitle) {
                webDefaultTitle = _this._webDefaultTitle.trim();
            }
            _this.props.onOKClicked(address, state.display.trim(), audiences, _this.state.selectedKey, _this.state.translatedTitles, webDefaultTitle, _this.state.currentLCID);
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onCancelClick = function (ev) {
            if (_this.props.onCancelClicked) {
                _this.props.onCancelClicked();
            }
        };
        _this._onOptionChanged = function (option) {
            var selectedResource = option.data;
            var isPredefinedResource = option !== _this._dropdownOptions[0]; // [0] is the custom URL option
            if (_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_13__["default"].isFeatureEnabled({ ODB: 1631 }) &&
                (option.key === PARENT_SIBLING_HUBS_OPTION || option.key === CHILDREN_HUBS_OPTION)) {
                if (_this.props.onSelectionChanged) {
                    _this.props.onSelectionChanged(option.key);
                }
            }
            _this.setState({
                address: selectedResource.url,
                display: selectedResource.name || _this.state.display,
                selectedKey: option.key,
                // If this is a pre-defined resource (such as group conversations), the address entry
                // field should be disabled
                addressDisabled: isPredefinedResource
            });
        };
        _this._onKeyDown = function (ev) {
            if (_this._showDropdown()) {
                return; // If the dropdown is open, let it process keys
            }
            var isHandled = false;
            if (ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["KeyCodes"].enter && !_this._isOKDisabled()) {
                _this._onOkClick(ev);
                isHandled = true;
            }
            else if (ev.which === office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["KeyCodes"].escape) {
                _this._onCancelClick(ev);
                isHandled = true;
            }
            if (isHandled) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this._onDisplayChanged = function (event, display) {
            if (display === void 0) { display = ''; }
            var _a;
            if (_this._shouldDisplayMUIEditing && _this.state.translatedTitles) {
                var translatedTitles = _this.state.translatedTitles.map(function (input) {
                    if (input.code === _this.state.currentLCID) {
                        input.value = display;
                    }
                    return input;
                });
                _this.setState({ display: display, translatedTitles: translatedTitles });
                if (_this.state.currentLCID === ((_a = _this.props.pageContext) === null || _a === void 0 ? void 0 : _a.webLanguage)) {
                    _this._webDefaultTitle = display;
                }
            }
            else {
                _this.setState({ display: display });
            }
        };
        _this._handleChangeAudiences = function (audiences) {
            _this.setState({ audiences: audiences });
        };
        var resourceLinks = props.resourceLinks;
        _this._dropdownOptions = [_this._urlDropdownOption];
        // Only hub can have these two options. It can be more smart, for example, root
        // can only have children option. Now, hub site check is good enough.
        if (_this._isHubToHubConnectionFlightOn && _this.props.pageContext.isHubSite) {
            _this._dropdownOptions.push(_this._childrenHubsDropDownOption);
            _this._dropdownOptions.push(_this._parentSiblingHubsDropDownOption);
        }
        if (props.isHeaderOptionEnabled) {
            _this._dropdownOptions.push(_this._headerDropdownOption);
        }
        if (resourceLinks && resourceLinks.length) {
            // If resourceLinks are provided, the user has the option of creating a link to some
            // pre-defined resource (such as group conversations), or entering a URL as usual.
            // The URL option (added below) and the other resource links are displayed in a dropdown.
            _this._dropdownOptions = _this._dropdownOptions.concat(resourceLinks
                .filter(function (link) { return !!link.name; })
                .map(function (link) { return ({
                key: link.url,
                text: link.name,
                data: link // save the whole link for easy access in click handlers/etc
            }); }));
        }
        var isHeader = props.isHeaderOptionEnabled &&
            props.display /* existing node */ &&
            (!props.address /* no url */ || props.address === _utilities_nav_NavCommon__WEBPACK_IMPORTED_MODULE_12__["HEADER_LINK_URL"]); /* header url */
        _this.state = {
            address: isHeader ? '' : props.address || 'http://',
            display: props.display || '',
            selectedKey: props.defaultSelectedKey || (isHeader ? HEADER_OPTION : URL_OPTION),
            audiences: props.audiences || [],
            currentLCID: _this.props.currentLCID,
            translatedTitles: _this.props.translatedTitles
        };
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__["Killswitch"].isActivated('6fc4daed-774d-471e-87c8-3599d591a8a0', '05/28/2020', 'check multilingual feature') &&
            _this._isMUIEditingFlightOn &&
            _this.props.pageContext) {
            var features = new _ms_odsp_datasources_lib_interfaces_SPFeatureInfo__WEBPACK_IMPORTED_MODULE_21__["default"](_this.props.pageContext.featureInfo);
            if (features) {
                var feature = features.get('MultilingualPages');
                _this._multilingualFeatureOn = !!feature && feature.enabled;
            }
        }
        _this._webDefaultTitle = _this.props.webDefaultTitle;
        return _this;
    }
    EditNavCallout.prototype.componentDidMount = function () {
        this._events.on(window, 'keydown', this._onKeyDown);
    };
    EditNavCallout.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        var isButtonDisabled = this._isOKDisabled();
        var isRTL = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["getRTL"])();
        var insertMode = props.insertMode;
        var showDropdown = this._showDropdown();
        var isHeader = state.selectedKey === HEADER_OPTION;
        var isParentSiblingHubs = state.selectedKey === PARENT_SIBLING_HUBS_OPTION;
        var isChildrenHubs = state.selectedKey === CHILDREN_HUBS_OPTION;
        var innerClassNames = Object(_AudiencePicker_AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_24__["isFixAudiencePickerThemeKillSwitchActivated"])()
            ? this._fixDuplicateSuggestionItems && this.props.isNavAudienceTargetingEnabled
                ? 'ms-EditNavCallout-inner ms-EditNavCallout-inner-AudienceNav'
                : 'ms-EditNavCallout-inner'
            : 'ms-EditNavCallout-inner fix-AudiencePickerTheme';
        var displayName = this._shouldDisplayMUIEditing && this.state.currentLCID
            ? _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutDisplayLabelWithDefaultLocale, _ms_odsp_datasources_lib_dataSources_multilingual_LanguageNames__WEBPACK_IMPORTED_MODULE_19__["LanguageNames"].getResourceByCode(this.state.currentLCID))
            : _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutDisplayLabel;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Callout_index__WEBPACK_IMPORTED_MODULE_2__["Callout"], { target: props.target, className: 'ms-EditNavCallout', isBeakVisible: true, beakWidth: 15, gapSpace: 0, directionalHint: isRTL ? office_ui_fabric_react_lib_components_Callout_index__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].leftCenter : office_ui_fabric_react_lib_components_Callout_index__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].rightCenter, onDismiss: this._onCancelClick, shouldRestoreFocus: true, styles: { container: { zIndex: EDIT_NAV_CALLOUT_ZINDEX } }, preventDismissOnScroll: this._shouldDisplayMUIEditing && this.state.showTranslationPanel }, this._shouldDisplayMUIEditing && this.state.showTranslationPanel ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EditNavTranslationContainer__WEBPACK_IMPORTED_MODULE_17__["EditNavTranslationContainer"], { currentDisplay: this.state.display, currentLCID: this.state.currentLCID, navNodeId: this.props.navNodeId, dataSourceType: insertMode ? _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["DataSourceType"].NewNavNode : _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["DataSourceType"].ExistingNavNode, translations: this.state.translatedTitles, pageContext: this.props.pageContext, onSaveClick: this._onClickMUIEditingSave, onCancelClick: this._toggleTranslationpanel(false) })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_5__["FocusTrapZone"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNavCallout-header ms-EditNavCallout-title' }, insertMode ? _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddLinkTitle : _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutEditLinkTitle),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: innerClassNames, "data-automationid": 'EditNavCallout-inner' },
                showDropdown ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], { options: this._dropdownOptions, selectedKey: state.selectedKey, onChanged: this._onOptionChanged, label: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.LinkTo, componentRef: this._onDropdownRef, className: 'ms-EditNavCallout-LinkToDropdown' })) : null,
                this._isHubToHubConnectionFlightOn && isParentSiblingHubs && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], { key: 'ParentSiblingHubsLabel' }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ParentSiblingHubsLabel)),
                this._isHubToHubConnectionFlightOn && isChildrenHubs && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], { key: 'ChildrenHubsLabel' }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ChildrenHubsLabel)),
                !(isParentSiblingHubs || isChildrenHubs) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_TextField_index__WEBPACK_IMPORTED_MODULE_4__["TextField"], { label: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddressLabel, placeholder: insertMode && !isHeader ? _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddressPlacehold : '', ariaLabel: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddressLabel, onChange: this._onAddressChanged, onBlur: this._onBlur, value: state.address, disabled: showDropdown && (!state.selectedKey || isHeader), className: 'ms-EditNavCallout-Address', multiline: true })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_TextField_index__WEBPACK_IMPORTED_MODULE_4__["TextField"], { label: displayName, placeholder: insertMode ? _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutDisplayPlacehold : '', ariaLabel: displayName, value: state.display, onChange: this._onDisplayChanged, disabled: showDropdown && !state.selectedKey, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["css"])('ms-EditNavCallout-Display', {
                        'ms-EditNavCallout-Display-translateLink': this._shouldDisplayMUIEditing
                    }), styles: this._shouldDisplayMUIEditing
                        ? { subComponentStyles: { label: { root: { display: 'inline-block' } } } }
                        : undefined, onRenderLabel: this._shouldDisplayMUIEditing ? this._onRenderDisplayNameLabel : undefined }),
                this._shouldDisplayMUIEditing && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Link__WEBPACK_IMPORTED_MODULE_20__["Link"], { onClick: this._toggleTranslationpanel(true, insertMode
                        ? _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["DataSourceType"].NewNavNode
                        : _ms_odsp_datasources_lib_dataSources_multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_18__["DataSourceType"].ExistingNavNode, this.props.navNodeId), "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Translations, styles: { root: { marginBottom: '4px' } } }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Translations)),
                this._shouldDisplayMUIEditing && this.state.isLoadingTranslation && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"], { size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerSize"].xSmall, ariaLabel: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Loading })),
                this.props.isNavAudienceTargetingEnabled && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_AudiencePicker_index__WEBPACK_IMPORTED_MODULE_23__["AudienceForm"], { audiences: this.state.audiences || [], limit: MAX_AUDIENCES_IN_PICKER, pageContext: this.props.pageContext, onChangeAudiences: this._handleChangeAudiences }),
                    this.props.showChildAudienceTargetingMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNavCallout-AudienceTargeting-InheritInfo' }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavAudienceInheritSubLink)),
                    this.props.showParentAudienceTargetingMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-EditNavCallout-AudienceTargeting-InheritInfo' }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavAudienceInheritParentLink)))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNavCallout-buttonArea' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { className: 'ms-EditNav-SaveButton', disabled: isButtonDisabled, onClick: this._onOkClick }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutOkButton),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_components_Button_index__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { className: 'ms-EditNav-CancelButton', onClick: this._onCancelClick }, _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CancelButtonLabel)))))));
    };
    EditNavCallout.prototype._isOKDisabled = function () {
        if (this.state.selectedKey === PARENT_SIBLING_HUBS_OPTION ||
            this.state.selectedKey === CHILDREN_HUBS_OPTION) {
            return this.props.isOkButtonDisabled;
        }
        var _a = this.state, address = _a.address, display = _a.display;
        display = (display || '').trim();
        if (this.state.selectedKey !== HEADER_OPTION) {
            address = (address || '').trim();
            return (!address ||
                !display ||
                address === _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.CalloutAddressPlacehold ||
                PROTOCOL_ONLY_REGEX.test(address));
        }
        else {
            return !display;
        }
    };
    Object.defineProperty(EditNavCallout.prototype, "_isHubToHubConnectionFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_13__["default"].isFeatureEnabled({ ODB: 1631 } /* EnableHubToHubConnection */);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_isMUIEditingFlightOn", {
        get: function () {
            return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_13__["default"].isFeatureEnabled({ ODB: 675 } /* MUIEditing */);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_shouldDisplayMUIEditing", {
        get: function () {
            return this._isMUIEditingFlightOn && this._multilingualFeatureOn;
        },
        enumerable: true,
        configurable: true
    });
    EditNavCallout.prototype._logEngagement = function () {
        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_15__["Engagement"].logData({
            name: this.props.insertMode ? 'EditNav.AddLink' : 'EditNav.EditLink',
            isIntentional: true
        });
        // Log the type of link created (if resource links are available)
        if (this._dropdownOptions) {
            for (var _i = 0, _a = this._dropdownOptions; _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.key === this.state.selectedKey) {
                    var selectedResource = option.data;
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_15__["Engagement"].logData({
                        name: 'EditNav.AddLink.Option.' + selectedResource.engagementName,
                        isIntentional: true
                    });
                    break;
                }
            }
        }
    };
    /**
     * Returns true if we should prepend http:// to the url
     */
    EditNavCallout.prototype._shouldPrependHttp = function (url) {
        // These values of url should return false:
        // {empty string}, /, #, /xxx, htt, http, https, https://, https://bing.com, http://bing.com
        // and values starting with /, #, mailto:
        // These values of url should return true:
        // http., www.youtube.com, htps
        url = (url || '').trim();
        return (url &&
            !URL_START_REGEX.test(url) &&
            !/^h(t(t(ps?(:(\/\/?)?)?)?)?)?$/i.test(url) &&
            !/^m(a(i(l(t(o:?)?)?)?)?)?$/i.test(url));
    };
    Object.defineProperty(EditNavCallout.prototype, "_urlDropdownOption", {
        get: function () {
            var urlResourceLink = {
                url: 'http://',
                name: '',
                engagementName: URL_OPTION
            };
            return {
                key: URL_OPTION,
                text: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavLinkOption,
                data: urlResourceLink
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_headerDropdownOption", {
        get: function () {
            var headerResourceLink = {
                url: '',
                name: ''
            };
            return {
                key: HEADER_OPTION,
                text: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.EditNavLabelOption,
                data: headerResourceLink
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_parentSiblingHubsDropDownOption", {
        get: function () {
            var _resourceLink = {
                url: '',
                name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ParentSiblingHubsOptionName,
                engagementName: PARENT_SIBLING_HUBS_OPTION
            };
            return {
                key: PARENT_SIBLING_HUBS_OPTION,
                text: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ParentSiblingHubsOptionName,
                data: _resourceLink
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_childrenHubsDropDownOption", {
        get: function () {
            var _resouceLink = {
                url: '',
                name: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ChildrenHubsOptionName,
                engagementName: CHILDREN_HUBS_OPTION
            };
            return {
                key: CHILDREN_HUBS_OPTION,
                text: _EditNav_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ChildrenHubsOptionName,
                data: _resouceLink
            };
        },
        enumerable: true,
        configurable: true
    });
    EditNavCallout.prototype._showDropdown = function () {
        return !!this._dropdownOptions && this._dropdownOptions.length > 1;
    };
    Object.defineProperty(EditNavCallout.prototype, "_useHeaderLinkURL", {
        get: function () {
            return !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__["Killswitch"].isActivated('f083f7e1-92f5-46e4-96d9-c4b5b0ec4527', '05/02/2019', 'Use predefined header link as header address instead of empty');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditNavCallout.prototype, "_fixDuplicateSuggestionItems", {
        get: function () {
            return !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_16__["Killswitch"].isActivated('5beae876-505f-42a5-a5ee-094759a843c4', '10/24/2019', 'filter duplicate suggestion items');
        },
        enumerable: true,
        configurable: true
    });
    return EditNavCallout;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));

//# sourceMappingURL=EditNavCallout.js.map

/***/ }),

/***/ "bt9q":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: DROP_HINT_ID_PREFIX, MAKE_CHILD_DROP_HINT_ID_PREFIX, LAST_DROP_HINT_ID_PREFIX, isCommandAllowed, EditNav, CtxMenuCommand, EditNavDataCache, EditNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditNav */ "/BpS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_HINT_ID_PREFIX", function() { return _EditNav__WEBPACK_IMPORTED_MODULE_0__["DROP_HINT_ID_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAKE_CHILD_DROP_HINT_ID_PREFIX", function() { return _EditNav__WEBPACK_IMPORTED_MODULE_0__["MAKE_CHILD_DROP_HINT_ID_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAST_DROP_HINT_ID_PREFIX", function() { return _EditNav__WEBPACK_IMPORTED_MODULE_0__["LAST_DROP_HINT_ID_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCommandAllowed", function() { return _EditNav__WEBPACK_IMPORTED_MODULE_0__["isCommandAllowed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNav", function() { return _EditNav__WEBPACK_IMPORTED_MODULE_0__["EditNav"]; });

/* harmony import */ var _EditNav_Props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditNav.Props */ "pAih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CtxMenuCommand", function() { return _EditNav_Props__WEBPACK_IMPORTED_MODULE_1__["CtxMenuCommand"]; });

/* harmony import */ var _EditNavDataCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditNavDataCache */ "0aO2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavDataCache", function() { return _EditNavDataCache__WEBPACK_IMPORTED_MODULE_2__["EditNavDataCache"]; });

/* harmony import */ var _EditNavLink_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditNavLink/index */ "mzwG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavLink", function() { return _EditNavLink_index__WEBPACK_IMPORTED_MODULE_3__["EditNavLink"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "djxO":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudiencePicker.resx.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"Audiences":"[!!--##Àũďĩēńćēś##--!!]","Placeholder":"[!!--##Śţàŕţ ţŷƥĩńĝ ţō śēĺēćţ ĝŕōũƥś ţō ţàŕĝēţ.##--!!]","NoResultsFound":"[!!--##Ńō ŕēśũĺţś ƒōũńď##--!!]"};
strings.default = strings;
module.exports = strings;

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


/***/ }),

/***/ "gj+l":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudiencePicker.module.scss.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: spinner, pickerInput, pickerInError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spinner", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerInput", function() { return pickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerInError", function() { return pickerInError; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".spinner_e5dbc6f7{border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";padding:2px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.pickerInput_e5dbc6f7{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";background-color:transparent}.pickerInput_e5dbc6f7::-webkit-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput_e5dbc6f7::-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput_e5dbc6f7::-ms-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput::-webkit-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput::-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput::-ms-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInput_e5dbc6f7::placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": "}.pickerInError_e5dbc6f7 div[role='combobox'] .ms-BasePicker-text{border-color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}\n" }]);
var spinner = "spinner_e5dbc6f7";
var pickerInput = "pickerInput_e5dbc6f7";
var pickerInError = "pickerInError_e5dbc6f7";
//# sourceMappingURL=AudiencePicker.module.scss.js.map

/***/ }),

/***/ "hl+O":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceKillSwitches.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: isFixAudiencePickerThemeKillSwitchActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixAudiencePickerThemeKillSwitchActivated", function() { return isFixAudiencePickerThemeKillSwitchActivated; });
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");

function isFixAudiencePickerThemeKillSwitchActivated() {
    return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_0__["Killswitch"].isActivated('09877275-f2e7-4bdb-b924-6a5b4616cfc4' /* '2021-01-19', 'FixAudiencePickerTheme' */);
}
//# sourceMappingURL=AudienceKillSwitches.js.map

/***/ }),

/***/ "jYVv":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavCallout/EditNavTranslationContainer.js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavTranslationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavTranslationContainer", function() { return EditNavTranslationContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/FocusTrapZone */ "Qiuu");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditNav.resx */ "DF9w");
/* harmony import */ var _EditNav_resx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EditNav_resx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MultilingualInputs_MultilingualInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MultilingualInputs/MultilingualInputs */ "EMVx");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");







var EditNavTranslationContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNavTranslationContainer, _super);
    function EditNavTranslationContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditNavTranslationContainer.prototype.render = function () {
        var isRTL = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'dialog', "aria-label": _EditNav_resx__WEBPACK_IMPORTED_MODULE_4___default.a.Translations },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_FocusTrapZone__WEBPACK_IMPORTED_MODULE_2__["FocusTrapZone"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-EditNavCallout-header ms-EditNavCallout-title' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], { iconProps: { iconName: isRTL ? 'Forward' : 'Back' }, onClick: this.props.onCancelClick, styles: { root: { marginRight: '12px' } }, ariaLabel: _EditNav_resx__WEBPACK_IMPORTED_MODULE_4___default.a.backButtonLabel }),
                    _EditNav_resx__WEBPACK_IMPORTED_MODULE_4___default.a.Translations),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ms-EditNavCallout-inner", "data-automationid": 'EditNavCallout-inner' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MultilingualInputs_MultilingualInputs__WEBPACK_IMPORTED_MODULE_5__["MultilingualInputs"], { currentDisplay: this.props.currentDisplay, currentLCID: this.props.currentLCID, dataSourceType: this.props.dataSourceType, navNodeId: this.props.navNodeId, pageContext: this.props.pageContext, onCancelClick: this.props.onCancelClick, onSaveClick: this.props.onSaveClick, translations: this.props.translations })))));
    };
    return EditNavTranslationContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=EditNavTranslationContainer.js.map

/***/ }),

/***/ "lmjA":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/ErrorHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/odsp-utilities/./lib/logging/ErrorHelper.js



/***/ }),

/***/ "m9Yg":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudiencePicker.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: AudiencePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiencePicker", function() { return AudiencePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/PeoplePicker */ "sQJ6");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Spinner */ "fyAn");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudienceKillSwitches */ "hl+O");
/* harmony import */ var _AudiencePicker_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AudiencePicker.module.scss */ "gj+l");
/* harmony import */ var _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AudiencePicker.resx */ "djxO");
/* harmony import */ var _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7__);








var GUID_STRING_LEN = 36;
function useChunkLoader() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](), chunkLoader = _a[0], setChunkLoader = _a[1];
    var unmounted = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        Promise.all(/*! import() | audience-picker-chunk */[__webpack_require__.e("vendors~audience-picker-chunk~sp-pages-pa~f202f0ab"), __webpack_require__.e("vendors~audience-picker-chunk~spcx-panels"), __webpack_require__.e("audience-picker-chunk")]).then(__webpack_require__.bind(null, /*! ./ChunkLoader */ "4QBU")).then(function (module) {
            if (!unmounted.current) {
                setChunkLoader(module);
            }
        });
        return function () {
            unmounted.current = true;
        };
    }, []);
    return chunkLoader;
}
var inputProps = {
    'aria-label': _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7___default.a.Audiences,
    'aria-placeholder': _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7___default.a.Placeholder,
    className: Object(_AudienceKillSwitches__WEBPACK_IMPORTED_MODULE_5__["isFixAudiencePickerThemeKillSwitchActivated"])() ? undefined : _AudiencePicker_module_scss__WEBPACK_IMPORTED_MODULE_6__["pickerInput"],
    placeholder: _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7___default.a.Placeholder
};
/**
 * @internal
 */
function AudiencePicker(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), error = _a[0], setError = _a[1];
    var chunkLoader = useChunkLoader();
    var pageContext = props.pageContext;
    var dataProvider = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
        return chunkLoader ? new chunkLoader.PeoplePickerProvider({ pageContext: pageContext }) : undefined;
    }, [chunkLoader, pageContext]);
    if (!chunkLoader) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { className: _AudiencePicker_module_scss__WEBPACK_IMPORTED_MODULE_6__["spinner"], size: office_ui_fabric_react_lib_Spinner__WEBPACK_IMPORTED_MODULE_3__["SpinnerSize"].small });
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](chunkLoader.PeoplePicker, { context: props.pageContext, className: Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_4__["css"])(Boolean(error) && _AudiencePicker_module_scss__WEBPACK_IMPORTED_MODULE_6__["pickerInError"]), onSelectedPersonasChange: handleSelectedPersonasChange, onRenderItem: renderItem, inputProps: inputProps, noResultsFoundText: _AudiencePicker_resx__WEBPACK_IMPORTED_MODULE_7___default.a.NoResultsFound, onResolvedSuggestions: handleFilterSuggestion, selectedItems: props.audiences.map(function (userId) { return ({ userId: userId }); }), itemLimit: props.limit }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](chunkLoader.AudienceHint, { limit: props.limit, audienceCount: props.audiences.length, error: error })));
    }
    function handleSelectedPersonasChange(groups) {
        setError('');
        props.onChangeAudiences(groups.map(getAudienceId));
    }
    function handleFilterSuggestion(groups) {
        // Once audience is selected, it will not be suggested again.
        return groups.filter(function (group) {
            return group.principalType === _ms_odsp_datasources_lib_PeoplePicker__WEBPACK_IMPORTED_MODULE_1__["PrincipalType"].securityGroup &&
                props.audiences.indexOf(getAudienceId(group)) === -1 &&
                // The claim type and claim value type filtering is aligned with the server-side GetCurrentUserMembership API.
                // https://onedrive.visualstudio.com/SharePoint%20Online/_git/SPO?path=/sts/stsom/Utilities/AudienceTargetingUtilities.cs&version=GBmaster&line=411&lineEnd=413&lineStartColumn=25&lineEndColumn=59&lineStyle=plain
                (isOnlyIncludeSecurityGroupAndModernGroupKillSwitchActivated() ||
                    (isClaimTypeSupported(group.userId) && isClaimValueTypeString(group.userId)));
        });
    }
    function getAudienceId(group) {
        // Group userId looks like `c:0t.c|tenant|63fba586-ae30-4cad-86bf-a9f62734e8f2`
        // Extract the audience ID like `63fba586-ae30-4cad-86bf-a9f62734e8f2`
        if (group.userId && group.userId.length >= GUID_STRING_LEN) {
            return group.userId.substr(group.userId.length - GUID_STRING_LEN);
        }
        else {
            return '';
        }
    }
    function isClaimTypeSupported(claim) {
        // The claim looks like `c:0t.c|tenant|63fba586-ae30-4cad-86bf-a9f62734e8f2` or `c:0o.c|federateddirectoryclaimprovider|3d1f825f-7385-4b14-aae4-c33a8b1d5f62`
        // Here is the character mapping for claim type
        // https://onedrive.visualstudio.com/SharePoint%20Online/_git/SPO?path=/sts/stsom/IdentityServices/SPClaimEncodingManager.cs&version=GBmaster&line=2695&lineEnd=2695&lineStartColumn=21&lineEndColumn=72&lineStyle=plain
        return (claim.length > 3 &&
            (claim[3] === 't' || // SPClaimTypes.GroupObjectId, which represent the security group.
                claim[3] === 'o') // SPClaimTypes.ModernGroupClaimType, which represent the Microsoft 365 group.
        );
    }
    function isClaimValueTypeString(claim) {
        // The claim looks like `c:0t.c|tenant|63fba586-ae30-4cad-86bf-a9f62734e8f2`
        // Here is the character mapping for claim value type
        // https://onedrive.visualstudio.com/SharePoint%20Online/_git/SPO?path=/sts/stsom/IdentityServices/SPClaimEncodingManager.cs&version=GBmaster&line=2916&lineEnd=2916&lineStartColumn=21&lineEndColumn=70&lineStyle=plain
        return claim.length > 4 && claim[4] === '.'; // SPClaimValueTypes.String
    }
    function renderItem(pickerItem) {
        if (chunkLoader && dataProvider) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](chunkLoader.AudienceItem, { key: pickerItem.item.userId, audienceId: pickerItem.item.userId, dataProvider: dataProvider, index: pickerItem.index, selected: pickerItem.selected, onRemoveItem: pickerItem.onRemoveItem, onError: setError }));
        }
        else {
            // Technically, it should not go to here.
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
        }
    }
    function isOnlyIncludeSecurityGroupAndModernGroupKillSwitchActivated() {
        return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_2__["Killswitch"].isActivated('dfbbf1f7-6f03-4a2e-86c8-0f88527bcaef'
        /* '2021-01-07', 'Filter down security group and modern group in audience picker' */
        );
    }
}
//# sourceMappingURL=AudiencePicker.js.map

/***/ }),

/***/ "mzwG":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNavLink/index.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditNavLink */ "EAcr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavLink", function() { return _EditNavLink__WEBPACK_IMPORTED_MODULE_0__["EditNavLink"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pAih":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/EditNav/EditNav.Props.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: CtxMenuCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtxMenuCommand", function() { return CtxMenuCommand; });
/**
 * @public
 */
var CtxMenuCommand;
(function (CtxMenuCommand) {
    CtxMenuCommand[CtxMenuCommand["moveUp"] = 0] = "moveUp";
    CtxMenuCommand[CtxMenuCommand["moveDown"] = 1] = "moveDown";
    CtxMenuCommand[CtxMenuCommand["makeSubLink"] = 2] = "makeSubLink";
    CtxMenuCommand[CtxMenuCommand["promoteSubLink"] = 3] = "promoteSubLink";
    CtxMenuCommand[CtxMenuCommand["remove"] = 4] = "remove";
})(CtxMenuCommand || (CtxMenuCommand = {}));
//# sourceMappingURL=EditNav.Props.js.map

/***/ }),

/***/ "rIcy":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/editNav/EditNavDataSource.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: EditNavDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavDataSource", function() { return EditNavDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ViewNavDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewNavDataSource */ "NuUw");
/* harmony import */ var _multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../multilingual/TranslationsDataSource */ "OJqW");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__);







/**
 * This datasource calls SP NavigationService REST API to do update.
 */
var EditNavDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditNavDataSource, _super);
    function EditNavDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditNavDataSource.prototype.onSave = function (links, isGlobalNav, footerNodeTitle) {
        // convert groups into SharePoint EditableMenuState schema
        // then Stringfy to Json before REST API post call.
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('A2A5E79F-1693-4F8A-BA23-8BDB65BE02B2', '08/10/2018') && footerNodeTitle) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(false);
        }
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["Qos"]({ name: 'NavigationSaveMenuState' });
        var editNavPostData = this._transformToEditableMenuState(links, isGlobalNav, footerNodeTitle);
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + '/_api/navigation/SaveMenuState',
            parseResponse: function (responseText) {
                try {
                    var result = JSON.parse(responseText);
                    if (result.value === 200) {
                        qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Success });
                        return true;
                    }
                    else {
                        qosEvent.end({
                            resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure,
                            error: 'SaveMenuState response:' + result.value.toString()
                        });
                        return false;
                    }
                }
                catch (e) {
                    qosEvent.end({
                        resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure,
                        error: e ? e.toString() : 'SaveMenuState failed'
                    });
                    return false;
                }
            },
            qosName: 'SaveEditNavData',
            additionalPostData: editNavPostData,
            method: 'POST',
            additionalHeaders: { 'ODATA-VERSION': '4.0', Accept: '*/*, application/json; odata.metadata=minimal' },
            contentType: 'application/json; odata.metadata=minimal',
            maxRetries: 1
        });
    };
    EditNavDataSource.prototype.addLinkToQuickLaunch = function (title, url, isExternal) {
        if (isExternal === void 0) { isExternal = true; }
        var qosEvent = new _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["Qos"]({ name: 'addLinkToQuickLaunch' });
        var body = {
            __metadata: { type: 'SP.NavigationNode' },
            IsExternal: isExternal,
            Title: title,
            Url: url
        };
        return this.dataRequestor.getData({
            url: this._pageContext.webAbsoluteUrl + '/_api/web/navigation/quicklaunch',
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                if (response.d && response.d.Id !== undefined) {
                    qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Success });
                    return {
                        key: String(response.d.Id),
                        name: response.d.Title,
                        url: response.d.Url,
                        target: _ViewNavDataSource__WEBPACK_IMPORTED_MODULE_2__["ViewNavDataSource"].shouldLinkOpenInSameWindow(response.d.Url) ? '' : '_blank'
                    };
                }
                // there was likely an error, no node is added.
                qosEvent.end({ resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_5__["ResultTypeEnum"].Failure, error: 'addLinkToQuickLaunch failed' });
                return null;
            },
            qosName: 'AddToQuickLaunch',
            additionalPostData: JSON.stringify(body),
            method: 'POST'
        });
    };
    /**
     * Save audience targeting toggle setting.
     */
    EditNavDataSource.prototype.saveAudienceTargetSetting = function (checked) {
        var _this = this;
        return this.dataRequestor
            .getData({
            url: this._pageContext.webAbsoluteUrl + '/_api/web',
            qosName: 'saveNavAudienceTargetingEnabled',
            method: 'POST',
            additionalHeaders: {
                'X-HTTP-Method': 'MERGE'
            },
            additionalPostData: JSON.stringify({
                NavAudienceTargetingEnabled: checked,
                __metadata: { type: 'SP.Web' }
            })
        })
            .then(function (results) {
            if (checked) {
                _this._pageContext.webPropertyFlags2 |= _ViewNavDataSource__WEBPACK_IMPORTED_MODULE_2__["ViewNavDataSource"].NAV_AUDIENCE_TARGET_FLAG;
            }
            else {
                _this._pageContext.webPropertyFlags2 &= ~_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_2__["ViewNavDataSource"].NAV_AUDIENCE_TARGET_FLAG;
            }
            return results;
        });
    };
    EditNavDataSource.prototype._transformToEditableMenuState = function (links, isGlobalNav, footerNodeTitle) {
        // convert DateTime to UTC format for GT operation. regular datetime value will fail CAML query.
        var dateTime = new Date();
        var value = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_6__["format"]('{0}-{1}-{2}T{3}:{4}:{5}Z', dateTime.getUTCFullYear(), dateTime.getUTCMonth() + 1, dateTime.getUTCDate(), dateTime.getUTCHours(), dateTime.getUTCMinutes(), dateTime.getUTCSeconds());
        var pageContext = this._pageContext;
        var menuState;
        if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('A2A5E79F-1693-4F8A-BA23-8BDB65BE02B2', '08/10/2018') && footerNodeTitle) {
            menuState = {
                Version: value,
                StartingNodeKey: undefined,
                StartingNodeTitle: footerNodeTitle,
                SPSitePrefix: isGlobalNav ? pageContext.siteServerRelativeUrl : '/',
                SPWebPrefix: pageContext.webServerRelativeUrl,
                FriendlyUrlPrefix: '',
                SimpleUrl: '',
                Nodes: this._getEditableNodesFromLinks(links)
            };
        }
        else {
            menuState = {
                Version: value,
                StartingNodeKey: isGlobalNav ? "1002" /* globalNavParent */ : "1025" /* quickLaunchParent */,
                // This appears to be a localized string, but I can't find anywhere it's displayed in the UI.
                // So continue overwriting it with English unless a customer complains...
                StartingNodeTitle: isGlobalNav ? 'SharePoint Top Navigation Bar' : 'Quick launch',
                SPSitePrefix: isGlobalNav ? pageContext.siteServerRelativeUrl : '/',
                SPWebPrefix: pageContext.webServerRelativeUrl,
                FriendlyUrlPrefix: '',
                SimpleUrl: '',
                Nodes: this._getEditableNodesFromLinks(links)
            };
        }
        return JSON.stringify({
            menuState: menuState,
            // Will be omitted from string if this._mapProviderName is undefined
            mapProviderName: this._mapProviderName
        });
    };
    EditNavDataSource.prototype._getEditableNodesFromLinks = function (links) {
        if (!links || links.length <= 0) {
            return undefined;
        }
        var nodes = [];
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            // link key with negative value are client side added or special button non editable nodes
            // link key is undefined for newly added node, therefore it could be 0 on some browser.
            if (link.key === undefined || Number(link.key) >= 0) {
                nodes.push({
                    NodeType: 0,
                    Key: link.key,
                    // In multilingual scenario, existing save flow on server side doesn't respect user culture for new node,
                    // it only saves to web default culture label. Use webDefaultTitle instead of name in this case
                    Title: link.webDefaultTitle || link.name,
                    SimpleUrl: link.url,
                    FriendlyUrlSegment: '',
                    IsDeleted: link.isDeleted,
                    AudienceIds: link.audiences || undefined,
                    Translations: link.translatedTitles
                        ? _multilingual_TranslationsDataSource__WEBPACK_IMPORTED_MODULE_3__["TranslationsDataSource"].convertTranslationInputToSPResourceEntry(link.translatedTitles)
                        : undefined,
                    Nodes: this._getEditableNodesFromLinks(link.links)
                });
            }
        }
        return nodes;
    };
    return EditNavDataSource;
}(_ViewNavDataSource__WEBPACK_IMPORTED_MODULE_2__["ViewNavDataSource"]));

/* harmony default export */ __webpack_exports__["default"] = (EditNavDataSource);
//# sourceMappingURL=EditNavDataSource.js.map

/***/ }),

/***/ "v64A":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/containers/EditNav/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: EditNavStateManager, EditNavContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditNavStateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditNavStateManager */ "ToNz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavStateManager", function() { return _EditNavStateManager__WEBPACK_IMPORTED_MODULE_0__["EditNavStateManager"]; });

/* harmony import */ var _EditNavContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditNavContainer */ "58+N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNavContainer", function() { return _EditNavContainer__WEBPACK_IMPORTED_MODULE_1__["EditNavContainer"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vmDi":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/alternativeUrls/SPAlternativeUrls.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SPAlternativeUrls;

/***/ }),

/***/ "wcWb":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/AudiencePicker/AudienceForm.module.scss.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".label_8fc99660{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}\n" }]);
var label = "label_8fc99660";
//# sourceMappingURL=AudienceForm.module.scss.js.map

/***/ }),

/***/ "z71h":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/multilingual/Constants.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants;
(function (Constants) {
    Constants["PREFIX"] = "MultilingualPages";
    Constants["Page"] = "Page";
    Constants["Settings"] = "MuiSettings";
    Constants["Panel"] = "TranslationPanel";
    Constants["LangSelector"] = "LanguageSelector";
})(Constants || (Constants = {}));
//# sourceMappingURL=Constants.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~editnavchunk_[locale].js.map