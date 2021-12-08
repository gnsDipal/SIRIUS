(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~sp-pages-panels~spcx-panels"],{

/***/ "+m1z":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.styles.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: CHECK_CELL_WIDTH, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_CELL_WIDTH", function() { return CHECK_CELL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");
/* harmony import */ var _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Check/Check.styles */ "gwC2");




var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
var CHECK_CELL_WIDTH = 48;
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var rowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].rowHeight, compactRowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
    var height = isHeader ? _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["HEADER_HEIGHT"] : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.small,
            _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__["CheckGlobalClassNames"].checkHost,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: isCheckVisible ? 1 : 0,
                height: height,
                width: CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map

/***/ }),

/***/ "0ol6":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/UserExpiration/UserExpirationProvider.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationProvider", function() { return UserExpirationProvider; });
/**
 * @inheritdoc
 */
var UserExpirationProvider = /** @class */ (function () {
    function UserExpirationProvider(params) {
        this._dataSource = params.dataSource;
    }
    /**
     * @inheritdoc
     */
    UserExpirationProvider.prototype.getUsersWithExpirations = function (orderBy, ascending, top, skip, filter) {
        return this._dataSource.getUsersWithExpirations(orderBy, ascending, top, skip, filter);
    };
    /**
     * @inheritdoc
     */
    UserExpirationProvider.prototype.getUsersWithExpirationsWithCache = function (orderBy, ascending, top, skip, filter, cachingStrategy) {
        return this._dataSource.getUsersWithExpirationsWithCache(orderBy, ascending, top, skip, filter, cachingStrategy);
    };
    /**
     * @inheritdoc
     */
    UserExpirationProvider.prototype.setUserExpiration = function (users, date) {
        return this._dataSource.setUserExpiration(users, date);
    };
    /**
     * @inheritdoc
     */
    UserExpirationProvider.prototype.expireUser = function (users) {
        return this._dataSource.expireUser(users);
    };
    /**
     * @inheritdoc
     */
    UserExpirationProvider.prototype.getExternalUserExpirationPolicy = function () {
        return this._dataSource.getExternalUserExpirationPolicy();
    };
    return UserExpirationProvider;
}());

/* harmony default export */ __webpack_exports__["default"] = (UserExpirationProvider);
//# sourceMappingURL=UserExpirationProvider.js.map

/***/ }),

/***/ "0q4O":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/DetailsList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DetailsList/index */ "7YZ5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeaderBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["buildColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CheckboxVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["getDetailsRowStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsColumnBase"]; });


//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "1xj0":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsListBase, buildColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return DetailsListBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return buildColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailsList/DetailsHeader */ "tApQ");
/* harmony import */ var _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailsList/DetailsHeader.types */ "9ehK");
/* harmony import */ var _DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow */ "wqXl");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/dragdrop/DragDropHelper */ "uGAW");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/decorators/withViewport */ "AiA5");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/groupedList/GroupedListUtility */ "TUa0");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uifabric/react-hooks */ "v+W9");
















// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
/**
 * Hooks-based implementation of DetailsList.
 * Since many existing consumers of DetailsList expect `ref` to return a `DetailsList`,
 * this inner component handles rendering while the outer maintains compatibility.
 */
var DetailsListInner = function (props) {
    var selection = props.selection;
    var ariaLabelForListHeader = props.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = props.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = props.ariaLabelForSelectionColumn, className = props.className, checkboxVisibility = props.checkboxVisibility, compact = props.compact, constrainMode = props.constrainMode, dragDropEvents = props.dragDropEvents, groups = props.groups, groupProps = props.groupProps, indentWidth = props.indentWidth, items = props.items, isPlaceholderData = props.isPlaceholderData, isHeaderVisible = props.isHeaderVisible, layoutMode = props.layoutMode, onItemInvoked = props.onItemInvoked, onItemContextMenu = props.onItemContextMenu, onColumnHeaderClick = props.onColumnHeaderClick, onColumnHeaderContextMenu = props.onColumnHeaderContextMenu, _a = props.selectionMode, selectionMode = _a === void 0 ? selection.mode : _a, selectionPreservedOnEmptyClick = props.selectionPreservedOnEmptyClick, selectionZoneProps = props.selectionZoneProps, ariaLabel = props.ariaLabel, ariaLabelForGrid = props.ariaLabelForGrid, rowElementEventMap = props.rowElementEventMap, _b = props.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b, getKey = props.getKey, listProps = props.listProps, usePageCache = props.usePageCache, onShouldVirtualize = props.onShouldVirtualize, viewport = props.viewport, minimumPixelsForDrag = props.minimumPixelsForDrag, getGroupHeight = props.getGroupHeight, styles = props.styles, theme = props.theme, _c = props.cellStyleProps, cellStyleProps = _c === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _c, onRenderCheckbox = props.onRenderCheckbox, useFastIcons = props.useFastIcons, dragDropHelper = props.dragDropHelper, adjustedColumns = props.adjustedColumns, isCollapsed = props.isCollapsed, isSizing = props.isSizing, isSomeGroupExpanded = props.isSomeGroupExpanded, version = props.version, rootRef = props.rootRef, listRef = props.listRef, focusZoneRef = props.focusZoneRef, columnReorderOptions = props.columnReorderOptions, groupedListRef = props.groupedListRef, headerRef = props.headerRef, onGroupExpandStateChanged = props.onGroupExpandStateChanged, onColumnIsSizingChanged = props.onColumnIsSizingChanged, onRowDidMount = props.onRowDidMount, onRowWillUnmount = props.onRowWillUnmount, disableSelectionZone = props.disableSelectionZone, onColumnResized = props.onColumnResized, onColumnAutoResized = props.onColumnAutoResized, onToggleCollapse = props.onToggleCollapse, onActiveRowChanged = props.onActiveRowChanged, onBlur = props.onBlur, eventsToRegister = props.rowElementEventMap, onRenderMissingItem = props.onRenderMissingItem, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, getRowAriaLabel = props.getRowAriaLabel, getRowAriaDescribedBy = props.getRowAriaDescribedBy, checkButtonAriaLabel = props.checkButtonAriaLabel, checkboxCellClassName = props.checkboxCellClassName, useReducedRowRenderer = props.useReducedRowRenderer, enableUpdateAnimations = props.enableUpdateAnimations, enterModalSelectionOnTouch = props.enterModalSelectionOnTouch, onRenderDefaultRow = props.onRenderDefaultRow, selectionZoneRef = props.selectionZoneRef;
    var groupNestingDepth = getGroupNestingDepth(groups);
    var additionalListProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey,
            version: version }, listProps);
    }, [isSizing, getKey, version, listProps]);
    var selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none; // for SelectionMode.none
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].single) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple) {
        // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
        var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
        if (isCollapsedGroupSelectVisible === undefined) {
            isCollapsedGroupSelectVisible = true;
        }
        var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
        selectAllVisibility = isSelectAllVisible ? _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].visible : _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (checkboxVisibility === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none;
    }
    var defaultOnRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (detailsHeaderProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__["DetailsHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsHeaderProps));
    }, []);
    var defaultOnRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
        return null;
    }, []);
    var propsOnRenderDetailsHeader = props.onRenderDetailsHeader;
    var onRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsHeader
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader)
            : defaultOnRenderDetailsHeader;
    }, [propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader]);
    var propsOnRenderDetailsFooter = props.onRenderDetailsFooter;
    var onRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsFooter
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter)
            : defaultOnRenderDetailsFooter;
    }, [propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter]);
    var detailsFooterProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return {
            columns: adjustedColumns,
            groupNestingDepth: groupNestingDepth,
            selection: selection,
            selectionMode: selectionMode,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
        };
    }, [
        adjustedColumns,
        groupNestingDepth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        indentWidth,
        cellStyleProps,
    ]);
    var columnReorderOnDragEnd = columnReorderOptions && columnReorderOptions.onDragEnd;
    var onColumnDragEnd = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (_a, event) {
        var dropLocation = _a.dropLocation;
        var finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].outside;
        if (columnReorderOnDragEnd) {
            if (dropLocation && dropLocation !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header) {
                finalDropLocation = dropLocation;
            }
            else if (rootRef.current) {
                var clientRect = rootRef.current.getBoundingClientRect();
                if (event.clientX > clientRect.left &&
                    event.clientX < clientRect.right &&
                    event.clientY > clientRect.top &&
                    event.clientY < clientRect.bottom) {
                    finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].surface;
                }
            }
            columnReorderOnDragEnd(finalDropLocation);
        }
    }, [columnReorderOnDragEnd, rootRef]);
    var columnReorderProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        if (columnReorderOptions) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: onColumnDragEnd });
        }
    }, [columnReorderOptions, onColumnDragEnd]);
    var rowCount = (isHeaderVisible ? 1 : 0) + Object(_utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__["GetGroupCount"])(groups) + (items ? items.length : 0);
    var colCount = (selectAllVisibility !== _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none ? 1 : 0) +
        (adjustedColumns ? adjustedColumns.length : 0) +
        (groups ? 1 : 0);
    var classNames = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return getClassNames(styles, {
            theme: theme,
            compact: compact,
            isFixed: layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns,
            isHorizontalConstrained: constrainMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
            className: className,
        });
    }, [styles, theme, compact, layoutMode, constrainMode, className]);
    var onRenderDetailsGroupFooter = groupProps && groupProps.onRenderFooter;
    var finalOnRenderDetailsGroupFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupFooter
            ? function (groupFooterProps, defaultRender) {
                return onRenderDetailsGroupFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupFooterProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
    }, [
        onRenderDetailsGroupFooter,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var onRenderDetailsGroupHeader = groupProps && groupProps.onRenderHeader;
    var finalOnRenderDetailsGroupHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupHeader
            ? function (groupHeaderProps, defaultRender) {
                return onRenderDetailsGroupHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps, ariaColSpan: adjustedColumns.length }), defaultRender);
            }
            : function (groupHeaderProps, defaultRender) {
                return defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { ariaColSpan: adjustedColumns.length }));
            };
    }, [
        onRenderDetailsGroupHeader,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var finalGroupProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps), { onRenderFooter: finalOnRenderDetailsGroupFooter, onRenderHeader: finalOnRenderDetailsGroupHeader });
    }, [groupProps, finalOnRenderDetailsGroupFooter, finalOnRenderDetailsGroupHeader]);
    var sumColumnWidths = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useConst"])(function () {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (columns) {
            var totalWidth = 0;
            columns.forEach(function (column) { return (totalWidth += column.calculatedWidth || column.minWidth); });
            return totalWidth;
        });
    });
    var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
    var rowWidth = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return sumColumnWidths(adjustedColumns);
    }, [adjustedColumns, sumColumnWidths]);
    var onRenderCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth, item, index) {
        var finalOnRenderRow = props.onRenderRow
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(props.onRenderRow, onRenderDefaultRow)
            : onRenderDefaultRow;
        var rowProps = {
            item: item,
            itemIndex: index,
            compact: compact,
            columns: adjustedColumns,
            groupNestingDepth: nestingDepth,
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: onRowDidMount,
            onWillUnmount: onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            getCellValueKey: getCellValueKey,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            getRowAriaDescribedBy: getRowAriaDescribedBy,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
            useReducedRowRenderer: useReducedRowRenderer,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
            onRenderDetailsCheckbox: onRenderCheckbox,
            enableUpdateAnimations: enableUpdateAnimations,
            rowWidth: rowWidth,
            useFastIcons: useFastIcons,
        };
        if (!item) {
            if (onRenderMissingItem) {
                return onRenderMissingItem(index, rowProps);
            }
            return null;
        }
        return finalOnRenderRow(rowProps);
    }, [
        compact,
        adjustedColumns,
        selectionMode,
        selection,
        onRowDidMount,
        onRowWillUnmount,
        onRenderItemColumn,
        getCellValueKey,
        eventsToRegister,
        dragDropEvents,
        dragDropHelper,
        viewport,
        checkboxVisibility,
        collapseAllVisibility,
        getRowAriaLabel,
        getRowAriaDescribedBy,
        checkButtonAriaLabel,
        checkboxCellClassName,
        useReducedRowRenderer,
        indentWidth,
        cellStyleProps,
        onRenderCheckbox,
        enableUpdateAnimations,
        useFastIcons,
        onRenderDefaultRow,
        onRenderMissingItem,
        props.onRenderRow,
        rowWidth,
    ]);
    var onRenderListCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(nestingDepth, item, itemIndex);
        };
    }, [onRenderCell]);
    var isRightArrow = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
        return event.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, theme);
    }, [theme]);
    var focusZoneProps = {
        componentRef: focusZoneRef,
        className: classNames.focusZone,
        direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical,
        shouldEnterInnerZone: isRightArrow,
        onActiveElementChanged: onActiveRowChanged,
        shouldRaiseClicks: false,
        onBlur: onBlur,
    };
    var list = groups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList__WEBPACK_IMPORTED_MODULE_10__["GroupedList"], { focusZoneProps: focusZoneProps, componentRef: groupedListRef, groups: groups, groupProps: finalGroupProps, items: items, onRenderCell: onRenderCell, role: "presentation", selection: selection, selectionMode: checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? selectionMode : _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, focusZoneProps),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_11__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: listRef, role: "presentation", items: items, onRenderCell: onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps))));
    var onHeaderKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
            if (focusZoneRef.current && focusZoneRef.current.focus()) {
                // select the first item in list after down arrow key event
                // only if nothing was selected; otherwise start with the already-selected item
                if (selection.getSelectedIndices().length === 0) {
                    selection.setIndexSelected(0, true, false);
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [selection, focusZoneRef]);
    var onContentKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up && !ev.altKey) {
            if (headerRef.current && headerRef.current.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [headerRef]);
    return (
    // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
    // with JAWS.
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: rootRef, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false", "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "grid", "aria-label": ariaLabelForGrid, "aria-rowcount": isPlaceholderData ? -1 : rowCount, "aria-colcount": colCount, "aria-readonly": "true", "aria-busy": isPlaceholderData },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                onRenderDetailsHeader({
                    componentRef: headerRef,
                    selectionMode: selectionMode,
                    layoutMode: layoutMode,
                    selection: selection,
                    columns: adjustedColumns,
                    onColumnClick: onColumnHeaderClick,
                    onColumnContextMenu: onColumnHeaderContextMenu,
                    onColumnResized: onColumnResized,
                    onColumnIsSizingChanged: onColumnIsSizingChanged,
                    onColumnAutoResized: onColumnAutoResized,
                    groupNestingDepth: groupNestingDepth,
                    isAllCollapsed: isCollapsed,
                    onToggleCollapseAll: onToggleCollapse,
                    ariaLabel: ariaLabelForListHeader,
                    ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                    ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                    selectAllVisibility: selectAllVisibility,
                    collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                    viewport: viewport,
                    columnReorderProps: columnReorderProps,
                    minimumPixelsForDrag: minimumPixelsForDrag,
                    cellStyleProps: cellStyleProps,
                    checkboxVisibility: checkboxVisibility,
                    indentWidth: indentWidth,
                    onRenderDetailsCheckbox: onRenderCheckbox,
                    rowWidth: sumColumnWidths(adjustedColumns),
                    useFastIcons: useFastIcons,
                }, onRenderDetailsHeader)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onContentKeyDown, role: "presentation", className: classNames.contentWrapper }, !disableSelectionZone ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: selectionZoneRef, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: enterModalSelectionOnTouch }, (selectionZoneProps || {})), list)) : (list)),
            onRenderDetailsFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsFooterProps)))));
};
var DetailsListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsListBase, _super);
    function DetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._header = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._groupedList = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._selectionZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderRow = function (props, defaultRender) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__["DetailsRow"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._getDerivedStateFromProps = function (nextProps, previousState) {
            var _a = _this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? _this._selection.mode : _b, columns = _a.columns, viewport = _a.viewport, compact = _a.compact, dragDropEvents = _a.dragDropEvents;
            var _c = (_this.props.groupProps || {}).isAllGroupsCollapsed, isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
            var newViewportWidth = (nextProps.viewport && nextProps.viewport.width) || 0;
            var oldViewportWidth = (viewport && viewport.width) || 0;
            var shouldResetSelection = nextProps.setKey !== setKey || nextProps.setKey === undefined;
            var shouldForceUpdates = false;
            if (nextProps.layoutMode !== _this.props.layoutMode) {
                shouldForceUpdates = true;
            }
            var nextState = previousState;
            if (shouldResetSelection) {
                _this._initialFocusedIndex = nextProps.initialFocusedIndex;
                // reset focusedItemIndex when setKey changes
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { focusedItemIndex: _this._initialFocusedIndex !== undefined ? _this._initialFocusedIndex : -1 });
            }
            if (!_this.props.disableSelectionZone && nextProps.items !== items) {
                _this._selection.setItems(nextProps.items, shouldResetSelection);
            }
            if (nextProps.checkboxVisibility !== checkboxVisibility ||
                nextProps.columns !== columns ||
                newViewportWidth !== oldViewportWidth ||
                nextProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), _this._adjustColumns(nextProps, nextState, true));
            if (nextProps.selectionMode !== selectionMode) {
                shouldForceUpdates = true;
            }
            if (isAllGroupsCollapsed === undefined &&
                nextProps.groupProps &&
                nextProps.groupProps.isAllGroupsCollapsed !== undefined) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { isCollapsed: nextProps.groupProps.isAllGroupsCollapsed, isSomeGroupExpanded: !nextProps.groupProps.isAllGroupsCollapsed });
            }
            if (nextProps.dragDropEvents !== dragDropEvents) {
                _this._dragDropHelper && _this._dragDropHelper.dispose();
                _this._dragDropHelper = nextProps.dragDropEvents
                    ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                        selection: _this._selection,
                        minimumPixelsForDrag: nextProps.minimumPixelsForDrag,
                    })
                    : undefined;
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
            }
            return nextState;
        };
        _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
            _this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
        };
        _this._onColumnIsSizingChanged = function (column, isSizing) {
            _this.setState({ isSizing: isSizing });
        };
        _this._onRowDidMount = function (row) {
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            _this._activeRows[itemKey] = row; // this is used for column auto resize
            _this._setFocusToRowIfPending(row);
            var onRowDidMount = _this.props.onRowDidMount;
            if (onRowDidMount) {
                onRowDidMount(item, itemIndex);
            }
        };
        _this._onRowWillUnmount = function (row) {
            var onRowWillUnmount = _this.props.onRowWillUnmount;
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            delete _this._activeRows[itemKey];
            if (onRowWillUnmount) {
                onRowWillUnmount(item, itemIndex);
            }
        };
        _this._onToggleCollapse = function (collapsed) {
            _this.setState({
                isCollapsed: collapsed,
            });
            if (_this._groupedList.current) {
                _this._groupedList.current.toggleCollapseAll(collapsed);
            }
        };
        _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
            var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
            }
            _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
            _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._adjustColumns(_this.props, _this.state, true, resizingColumnIndex)), { version: {} }));
        };
        /**
         * Callback function when double clicked on the details header column resizer
         * which will measure the column cells of all the active rows and resize the
         * column to the max cell width.
         *
         * @param column - double clicked column definition
         * @param columnIndex - double clicked column index
         * TODO: min width 100 should be changed to const value and should be consistent with the
         * value used on _onSizerMove method in DetailsHeader
         */
        _this._onColumnAutoResized = function (column, columnIndex) {
            var max = 0;
            var count = 0;
            var totalCount = Object.keys(_this._activeRows).length;
            for (var key in _this._activeRows) {
                if (_this._activeRows.hasOwnProperty(key)) {
                    var currentRow = _this._activeRows[key];
                    currentRow.measureCell(columnIndex, function (width) {
                        max = Math.max(max, width);
                        count++;
                        if (count === totalCount) {
                            _this._onColumnResized(column, max, columnIndex);
                        }
                    });
                }
            }
        };
        /**
         * Call back function when an element in FocusZone becomes active. It will translate it into item
         * and call onActiveItemChanged callback if specified.
         *
         * @param row - element that became active in Focus Zone
         * @param focus - event from Focus Zone
         */
        _this._onActiveRowChanged = function (el, ev) {
            var _a = _this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
            if (!el) {
                return;
            }
            // Check and assign index only if the event was raised from any DetailsRow element
            if (el.getAttribute('data-item-index')) {
                var index = Number(el.getAttribute('data-item-index'));
                if (index >= 0) {
                    if (onActiveItemChanged) {
                        onActiveItemChanged(items[index], index, ev);
                    }
                    _this.setState({
                        focusedItemIndex: index,
                    });
                }
            }
        };
        _this._onBlur = function (event) {
            _this.setState({
                focusedItemIndex: -1,
            });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this.state = {
            focusedItemIndex: -1,
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props, undefined),
            isSizing: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
            version: {},
            getDerivedStateFromProps: _this._getDerivedStateFromProps,
        };
        _this._selection =
            props.selection ||
                new _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["Selection"]({
                    onSelectionChanged: undefined,
                    getKey: props.getKey,
                    selectionMode: props.selectionMode,
                });
        if (!_this.props.disableSelectionZone) {
            _this._selection.setItems(props.items, false);
        }
        _this._dragDropHelper = props.dragDropEvents
            ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                selection: _this._selection,
                minimumPixelsForDrag: props.minimumPixelsForDrag,
            })
            : undefined;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return previousState.getDerivedStateFromProps(nextProps, previousState);
    };
    DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
    };
    DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var item = this.props.items[index];
        if (item) {
            this.scrollToIndex(index, measureItem, scrollToMode);
            var itemKey = this._getItemKey(item, index);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row, forceIntoFirstElement);
            }
        }
    };
    DetailsListBase.prototype.getStartItemIndexInView = function () {
        if (this._list && this._list.current) {
            return this._list.current.getStartItemIndexInView();
        }
        else if (this._groupedList && this._groupedList.current) {
            return this._groupedList.current.getStartItemIndexInView();
        }
        return 0;
    };
    DetailsListBase.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
            this._dragDropHelper.dispose();
        }
        this._async.dispose();
    };
    DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._notifyColumnsResized();
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.items !== prevProps.items &&
            this.props.items.length > 0 &&
            this.state.focusedItemIndex !== -1 &&
            !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, document.activeElement, false)) {
            // Item set has changed and previously-focused item is gone.
            // Set focus to item at index of previously-focused item if it is in range,
            // else set focus to the last item.
            var index = this.state.focusedItemIndex < this.props.items.length
                ? this.state.focusedItemIndex
                : this.props.items.length - 1;
            var item = this.props.items[index];
            var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row);
            }
            else {
                this._initialFocusedIndex = index;
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsListBase.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DetailsListInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, this.state, { selection: this._selection, dragDropHelper: this._dragDropHelper, rootRef: this._root, listRef: this._list, groupedListRef: this._groupedList, focusZoneRef: this._focusZone, headerRef: this._header, selectionZoneRef: this._selectionZone, onGroupExpandStateChanged: this._onGroupExpandStateChanged, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onRowDidMount: this._onRowDidMount, onRowWillUnmount: this._onRowWillUnmount, onColumnResized: this._onColumnResized, onColumnAutoResized: this._onColumnAutoResized, onToggleCollapse: this._onToggleCollapse, onActiveRowChanged: this._onActiveRowChanged, onBlur: this._onBlur, onRenderDefaultRow: this._onRenderRow })));
    };
    DetailsListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            this._setFocusToRow(row);
            delete this._initialFocusedIndex;
        }
    };
    DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._selectionZone.current) {
            this._selectionZone.current.ignoreNextFocus();
        }
        this._async.setTimeout(function () {
            row.focus(forceIntoFirstElement);
        }, 0);
    };
    DetailsListBase.prototype._forceListUpdates = function () {
        if (this._groupedList.current) {
            this._groupedList.current.forceUpdate();
        }
        if (this._list.current) {
            this._list.current.forceUpdate();
        }
    };
    DetailsListBase.prototype._notifyColumnsResized = function () {
        this.state.adjustedColumns.forEach(function (column) {
            if (column.onColumnResize) {
                column.onColumnResize(column.currentWidth);
            }
        });
    };
    DetailsListBase.prototype._adjustColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var adjustedColumns = this._getAdjustedColumns(newProps, previousState, forceUpdate, resizingColumnIndex);
        var viewport = this.props.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { adjustedColumns: adjustedColumns, lastWidth: viewportWidth });
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsListBase.prototype._getAdjustedColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var _this = this;
        var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode, viewport = newProps.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        var newColumns = newProps.columns;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = previousState ? previousState.lastWidth : -1;
        var lastSelectionMode = previousState ? previousState.lastSelectionMode : undefined;
        if (!forceUpdate &&
            lastWidth === viewportWidth &&
            lastSelectionMode === selectionMode &&
            (!columns || newColumns === columns)) {
            return newColumns || [];
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            if (resizingColumnIndex !== undefined) {
                adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
            }
            else {
                adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
            }
            adjustedColumns.forEach(function (column) {
                _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
            });
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsListBase.prototype._getFixedColumns = function (newColumns) {
        var _this = this;
        return newColumns.map(function (column) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), _this._columnOverrides[column.key]);
            if (!newColumn.calculatedWidth) {
                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
            }
            return newColumn;
        });
    };
    DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
        var _this = this;
        var fixedColumns = newColumns.slice(0, resizingColumnIndex);
        fixedColumns.forEach(function (column) { return (column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth); });
        var fixedWidth = fixedColumns.reduce(function (total, column, i) { return total + getPaddedWidth(column, i === 0, props); }, 0);
        var remainingColumns = newColumns.slice(resizingColumnIndex);
        var remainingWidth = viewportWidth - fixedWidth;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(fixedColumns, this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
        var _this = this;
        var _a = props.selectionMode, selectionMode = _a === void 0 ? this._selection.mode : _a, checkboxVisibility = props.checkboxVisibility;
        var rowCheckWidth = selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__["CHECK_CELL_WIDTH"] : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__["SPACER_WIDTH"];
        var totalWidth = 0; // offset because we have one less inner padding.
        var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH }), _this._columnOverrides[column.key]);
            var isFirst = i + firstIndex === 0;
            totalWidth += getPaddedWidth(newColumn, isFirst, props);
            return newColumn;
        });
        var lastIndex = adjustedColumns.length - 1;
        // Shrink or remove collapsable columns.
        while (lastIndex > 0 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
            var overflowWidth = totalWidth - availableWidth;
            // eslint-disable-next-line deprecation/deprecation
            if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
                var originalWidth = column.calculatedWidth;
                column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                totalWidth -= originalWidth - column.calculatedWidth;
            }
            else {
                totalWidth -= getPaddedWidth(column, false, props);
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var isLast = i === adjustedColumns.length - 1;
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth && !isLast) {
                continue;
            }
            var spaceLeft = availableWidth - totalWidth;
            var increment = void 0;
            if (isLast) {
                increment = spaceLeft;
            }
            else {
                var maxWidth = column.maxWidth;
                var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        return adjustedColumns;
    };
    DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._getColumnOverride(column.key);
        overrides.calculatedWidth = newCalculatedWidth;
        overrides.currentWidth = newCalculatedWidth;
    };
    DetailsListBase.prototype._getColumnOverride = function (key) {
        return (this._columnOverrides[key] = this._columnOverrides[key] || {});
    };
    DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsListBase.defaultProps = {
        layoutMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].justified,
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple,
        constrainMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
        checkboxVisibility: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].onHover,
        isHeaderVisible: true,
        compact: false,
        useFastIcons: true,
    };
    DetailsListBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__["withViewport"]
    ], DetailsListBase);
    return DetailsListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsable: !!columns.length,
                    isCollapsible: !!columns.length,
                    isMultiline: isMultiline === undefined ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnActionsMode"].clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName,
                });
            }
        }
    }
    return columns;
}
function getPaddedWidth(column, isFirst, props) {
    var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    return (column.calculatedWidth +
        cellStyleProps.cellLeftPadding +
        cellStyleProps.cellRightPadding +
        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
}
function getGroupNestingDepth(groups) {
    var level = 0;
    var groupsInLevel = groups;
    while (groupsInLevel && groupsInLevel.length > 0) {
        level++;
        groupsInLevel = groupsInLevel[0].children;
    }
    return level;
}
//# sourceMappingURL=DetailsList.base.js.map

/***/ }),

/***/ "3OK7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return GroupShowAll; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupShowAll.styles */ "K2Cj");
/* harmony import */ var _GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupShowAll.base */ "9/iP");



var GroupShowAll = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__["GroupShowAllBase"], _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, { scope: 'GroupShowAll' });
//# sourceMappingURL=GroupShowAll.js.map

/***/ }),

/***/ "4YcF":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ScrollablePane.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: ScrollablePane, ScrollablePaneBase, ScrollbarVisibility, ScrollablePaneContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScrollablePane_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ScrollablePane/index */ "69yM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePane", function() { return _components_ScrollablePane_index__WEBPACK_IMPORTED_MODULE_0__["ScrollablePane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneBase", function() { return _components_ScrollablePane_index__WEBPACK_IMPORTED_MODULE_0__["ScrollablePaneBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVisibility", function() { return _components_ScrollablePane_index__WEBPACK_IMPORTED_MODULE_0__["ScrollbarVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneContext", function() { return _components_ScrollablePane_index__WEBPACK_IMPORTED_MODULE_0__["ScrollablePaneContext"]; });


//# sourceMappingURL=ScrollablePane.js.map

/***/ }),

/***/ "69yM":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ScrollablePane/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollablePane, ScrollablePaneBase, ScrollbarVisibility, ScrollablePaneContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollablePane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollablePane */ "qNG2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePane", function() { return _ScrollablePane__WEBPACK_IMPORTED_MODULE_0__["ScrollablePane"]; });

/* harmony import */ var _ScrollablePane_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollablePane.base */ "q1YR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneBase", function() { return _ScrollablePane_base__WEBPACK_IMPORTED_MODULE_1__["ScrollablePaneBase"]; });

/* harmony import */ var _ScrollablePane_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollablePane.types */ "rpk9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVisibility", function() { return _ScrollablePane_types__WEBPACK_IMPORTED_MODULE_2__["ScrollbarVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneContext", function() { return _ScrollablePane_types__WEBPACK_IMPORTED_MODULE_2__["ScrollablePaneContext"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "7YZ5":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony import */ var _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GroupedList/GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__["CollapseAllVisibility"]; });

/* harmony import */ var _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader */ "tApQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__["DetailsHeader"]; });

/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__["DetailsHeaderBase"]; });

/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__["SelectAllVisibility"]; });

/* harmony import */ var _DetailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsList */ "WEXx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _DetailsList__WEBPACK_IMPORTED_MODULE_5__["DetailsList"]; });

/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["buildColumns"]; });

/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["CheckboxVisibility"]; });

/* harmony import */ var _DetailsRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailsRow */ "wqXl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _DetailsRow__WEBPACK_IMPORTED_MODULE_8__["DetailsRow"]; });

/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__["DetailsRowBase"]; });

/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["getDetailsRowStyles"]; });

/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__["DetailsRowCheck"]; });

/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__["DetailsRowFields"]; });

/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__["DetailsColumnBase"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "9/iP":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.base.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAllBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAllBase", function() { return GroupShowAllBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "F3Wv");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupShowAllBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, _a = props.showAllLinkText, showAllLinkText = _a === void 0 ? 'Show All' : _a, styles = props.styles, theme = props.theme, onToggleSummarize = props.onToggleSummarize;
    var classNames = getClassNames(styles, { theme: theme });
    var memoizedOnClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (ev) {
        onToggleSummarize(group);
        ev.stopPropagation();
        ev.preventDefault();
    }, [onToggleSummarize, group]);
    if (group) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["GroupSpacer"], { count: groupLevel }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], { onClick: memoizedOnClick }, showAllLinkText)));
    }
    return null;
};
//# sourceMappingURL=GroupShowAll.base.js.map

/***/ }),

/***/ "9ehK":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.types.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: SelectAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return SelectAllVisibility; });
/**
 * {@docCategory DetailsList}
 */
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));
//# sourceMappingURL=DetailsHeader.types.js.map

/***/ }),

/***/ "9jil":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell',
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                selectors: (_a = {},
                    _a["." + classNames.listCell] = {
                        minHeight: 38,
                    },
                    _a),
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            className,
        ],
        group: [
            classNames.group,
            {
                transition: "background-color " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInOutSine,
            },
        ],
        groupIsDropping: {
            backgroundColor: palette.neutralLight,
        },
    };
};
//# sourceMappingURL=GroupedList.styles.js.map

/***/ }),

/***/ "9lkW":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return GroupedListBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].rowHeight, COMPACT_ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
var GroupedListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListBase, _super);
    function GroupedListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
            // override group header/footer props as needed
            var dividerProps = {
                onToggleSelectGroup: _this._onToggleSelectGroup,
                onToggleCollapse: _this._onToggleCollapse,
                onToggleSummarize: _this._onToggleSummarize,
            };
            var headerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.headerProps), dividerProps);
            var showAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.showAllProps), dividerProps);
            var footerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.footerProps), dividerProps);
            var groupNestingDepth = _this._getGroupNestingDepth();
            if (!groupProps.showEmptyGroups && group && group.count === 0) {
                return null;
            }
            var finalListProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (listProps || {})), { version: _this.state.version });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedListSection__WEBPACK_IMPORTED_MODULE_3__["GroupedListSection"], { key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: finalListProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
        };
        _this._getDefaultGroupItemLimit = function (group) {
            return group.count;
        };
        _this._getGroupItemLimit = function (group) {
            var groupProps = _this.props.groupProps;
            var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
            return getGroupItemLimit(group);
        };
        _this._getGroupHeight = function (group) {
            var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
            return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
        };
        _this._getPageHeight = function (itemIndex) {
            var groups = _this.state.groups;
            var _a = _this.props.getGroupHeight, getGroupHeight = _a === void 0 ? _this._getGroupHeight : _a;
            var pageGroup = groups && groups[itemIndex];
            if (pageGroup) {
                return getGroupHeight(pageGroup, itemIndex);
            }
            else {
                return 0;
            }
        };
        _this._onToggleCollapse = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
            if (group) {
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                group.isCollapsed = !group.isCollapsed;
                _this._updateIsSomeGroupExpanded();
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectGroup = function (group) {
            var _a = _this.props, selection = _a.selection, selectionMode = _a.selectionMode;
            if (group && selection && selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple) {
                selection.toggleRangeSelected(group.startIndex, group.count);
            }
        };
        _this._isInnerZoneKeystroke = function (ev) {
            return ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right);
        };
        _this._onToggleSummarize = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
            if (onToggleSummarize) {
                onToggleSummarize(group);
            }
            else {
                if (group) {
                    group.isShowingAll = !group.isShowingAll;
                }
                _this.forceUpdate();
            }
        };
        _this._getPageSpecification = function (itemIndex) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return {
                key: pageGroup && pageGroup.key,
            };
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        var _a = props.listProps, _b = (_a === void 0 ? {} : _a).version, version = _b === void 0 ? {} : _b;
        _this.state = {
            groups: props.groups,
            items: props.items,
            listProps: props.listProps,
            version: version,
        };
        return _this;
    }
    GroupedListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        var groups = nextProps.groups, selectionMode = nextProps.selectionMode, compact = nextProps.compact, items = nextProps.items, listProps = nextProps.listProps;
        var listVersion = listProps && listProps.version;
        var nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionMode: selectionMode,
            compact: compact,
            groups: groups,
            listProps: listProps });
        var shouldForceUpdates = false;
        var previousListVersion = previousState.listProps && previousState.listProps.version;
        if (listVersion !== previousListVersion ||
            items !== previousState.items ||
            groups !== previousState.groups ||
            selectionMode !== previousState.selectionMode ||
            compact !== previousState.compact) {
            // If there are any props not passed explicitly to `List` which have an impact on the behavior of `onRenderCell`,
            // these need to 'force-update' this component by revving the version. Otherwise, the List might render with stale
            // data.
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
        }
        return nextState;
    };
    GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (this._list.current) {
            this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        }
    };
    GroupedListBase.prototype.getStartItemIndexInView = function () {
        return this._list.current.getStartItemIndexInView() || 0;
    };
    GroupedListBase.prototype.componentDidMount = function () {
        var _a = this.props, groupProps = _a.groupProps, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        if (groupProps && groupProps.isAllGroupsCollapsed) {
            this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
        }
    };
    GroupedListBase.prototype.render = function () {
        var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, theme = _a.theme, _b = _a.role, role = _b === void 0 ? 'treegrid' : _b, styles = _a.styles, compact = _a.compact, _c = _a.focusZoneProps, focusZoneProps = _c === void 0 ? {} : _c, _d = _a.rootListProps, rootListProps = _d === void 0 ? {} : _d;
        var _e = this.state, groups = _e.groups, version = _e.version;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            compact: compact,
        });
        var _f = focusZoneProps.shouldEnterInnerZone, shouldEnterInnerZone = _f === void 0 ? this._isInnerZoneKeystroke : _f;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" }, focusZoneProps, { shouldEnterInnerZone: shouldEnterInnerZone, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.root, focusZoneProps.className) }), !groups ? (this._renderGroup(undefined, 0)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_4__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._list, role: role, items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: this._getPageHeight, getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, version: version }, rootListProps)))));
    };
    GroupedListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups.length > 0) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            this._setGroupsCollapsedState(groups, allCollapsed);
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
        for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            groups[groupIndex].isCollapsed = isCollapsed;
        }
    };
    GroupedListBase.prototype._returnOne = function () {
        return 1;
    };
    GroupedListBase.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(index));
    };
    GroupedListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedListBase.prototype._forceListUpdates = function (groups) {
        this.setState({
            version: {},
        });
    };
    GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups &&
            groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
    };
    GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedListBase.defaultProps = {
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple,
        isHeaderVisible: true,
        groupProps: {},
        compact: false,
    };
    return GroupedListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedList.base.js.map

/***/ }),

/***/ "AiA5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withViewport.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withViewport.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withViewport;

/***/ }),

/***/ "DsUK":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.base.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return DetailsRowBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");











var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var NO_COLUMNS = [];
var DetailsRowBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._cellMeasurer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onSelectionChanged = function () {
            var selectionState = getSelectionState(_this.props);
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(selectionState, _this.state.selectionState)) {
                _this.setState({
                    selectionState: selectionState,
                });
            }
        };
        /**
         * update isDropping state based on the input value, which is used to change style during drag and drop
         *
         * when change to true, that means drag enter. we will add default dropping class name
         * or the custom dropping class name (return result from onDragEnter) to the root elemet.
         *
         * when change to false, that means drag leave. we will remove the dropping class name from root element.
         *
         * @param newValue - New isDropping state value
         * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newValue, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, item = _a.item;
            if (!newValue) {
                if (dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(item, event);
                }
            }
            else if (dragDropEvents.onDragEnter) {
                _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
            if (isDropping !== newValue) {
                _this.setState({ isDropping: newValue });
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            selectionState: getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
        };
        _this._droppingClassNames = '';
        return _this;
    }
    DetailsRowBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionState: getSelectionState(nextProps) });
    };
    DetailsRowBase.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection, item = _a.item, onDidMount = _a.onDidMount;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SELECTION_CHANGE"], this._onSelectionChanged);
        }
        if (onDidMount && item) {
            // If the item appears later, we should wait for it before calling this method.
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined,
            });
        }
        if (item && onDidMount && !this._onDidMountCalled) {
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._events.dispose();
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            var newSelectionState = getSelectionState(nextProps);
            if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                return true;
            }
            return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _c = _a.onRenderCheck, onRenderCheck = _c === void 0 ? this._onRenderCheck : _c, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, onRenderItemColumn = _a.onRenderItemColumn, getCellValueKey = _a.getCellValueKey, selectionMode = _a.selectionMode, _d = _a.rowWidth, rowWidth = _d === void 0 ? 0 : _d, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        _e = _a.rowFieldsAs, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        RowFields = _e === void 0 ? _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__["DetailsRowFields"] : _e, selection = _a.selection, indentWidth = _a.indentWidth, enableUpdateAnimations = _a.enableUpdateAnimations, compact = _a.compact, theme = _a.theme, styles = _a.styles, cellsByColumn = _a.cellsByColumn, groupNestingDepth = _a.groupNestingDepth, _f = _a.useFastIcons, useFastIcons = _f === void 0 ? true : _f, cellStyleProps = _a.cellStyleProps;
        var _g = this.state, columnMeasureInfo = _g.columnMeasureInfo, isDropping = _g.isDropping;
        var _h = this.state.selectionState, _j = _h.isSelected, isSelected = _j === void 0 ? false : _j, _k = _h.isSelectionModal, isSelectionModal = _k === void 0 ? false : _k;
        var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
        var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
        var isContentUnselectable = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple;
        var showCheckbox = selectionMode !== _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
        var ariaSelected = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none ? undefined : isSelected;
        this._classNames = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._classNames), getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact,
            enableUpdateAnimations: enableUpdateAnimations,
            cellStyleProps: cellStyleProps,
        }));
        var rowClassNames = {
            isMultiline: this._classNames.isMultiline,
            isRowHeader: this._classNames.isRowHeader,
            cell: this._classNames.cell,
            cellAnimation: this._classNames.cellAnimation,
            cellPadded: this._classNames.cellPadded,
            cellUnpadded: this._classNames.cellUnpadded,
            fields: this._classNames.fields,
        };
        // Only re-assign rowClassNames when classNames have changed.
        // Otherwise, they will cause DetailsRowFields to unnecessarily
        // re-render, see https://github.com/microsoft/fluentui/pull/8799.
        // Refactor DetailsRowFields to generate own styles to remove need for this.
        if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this._rowClassNames || {}, rowClassNames)) {
            this._rowClassNames = rowClassNames;
        }
        var rowFields = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, cellsByColumn: cellsByColumn, columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0), onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey, enableUpdateAnimations: enableUpdateAnimations, cellStyleProps: cellStyleProps }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": true }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), (typeof isDraggable === 'boolean'
            ? {
                'data-is-draggable': isDraggable,
                draggable: isDraggable,
            }
            : {}), { direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].horizontal, elementRef: this._root, componentRef: this._focusZone, role: "row", "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, className: this._classNames.root, "data-selection-index": itemIndex, "data-selection-touch-invoke": true, "data-item-index": itemIndex, "aria-rowindex": itemIndex + 1, "aria-level": (groupNestingDepth && groupNestingDepth + 1) || undefined, "data-automationid": "DetailsRow", style: { minWidth: rowWidth }, "aria-selected": ariaSelected, allowFocusRoot: true }),
            showCheckbox && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell", "aria-colindex": 1, "data-selection-toggle": true, className: this._classNames.checkCell }, onRenderCheck({
                selected: isSelected,
                anySelected: isSelectionModal,
                'aria-label': checkButtonAriaLabel,
                canSelect: canSelect,
                compact: compact,
                className: this._classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always,
                onRenderDetailsCheckbox: onRenderDetailsCheckbox,
                useFastIcons: useFastIcons,
            }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - (this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_9__["CollapseAllVisibility"].hidden ? 1 : 0) }),
            item && rowFields,
            columnMeasureInfo && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.cellMeasurer, this._classNames.cell), ref: this._cellMeasurer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "checkbox", className: this._classNames.checkCover, "aria-checked": isSelected, "data-selection-toggle": true })));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone,
            },
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var _a;
        return !!((_a = this._focusZone.current) === null || _a === void 0 ? void 0 : _a.focus(forceIntoFirstElement));
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__["DetailsRowCheck"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
            onDragOver: dragDropEvents.onDragOver,
        };
        return options;
    };
    return DetailsRowBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getSelectionState(props) {
    var _a, _b, _c, _d;
    var itemIndex = props.itemIndex, selection = props.selection;
    return {
        isSelected: !!((_a = selection) === null || _a === void 0 ? void 0 : _a.isIndexSelected(itemIndex)),
        isSelectionModal: !!((_d = (_b = selection) === null || _b === void 0 ? void 0 : (_c = _b).isModal) === null || _d === void 0 ? void 0 : _d.call(_c)),
    };
}
//# sourceMappingURL=DetailsRow.base.js.map

/***/ }),

/***/ "E8BK":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedListSection.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return GroupedListSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../List */ "HP5x");








var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._subGroupRefs = {};
        _this._droppingClassName = '';
        _this._onRenderGroupHeader = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupHeader__WEBPACK_IMPORTED_MODULE_4__["GroupHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupShowAll = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupFooter = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupFooter__WEBPACK_IMPORTED_MODULE_6__["GroupFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._renderSubGroup = function (subGroup, subGroupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, groupProps = _a.groupProps, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter, onShouldVirtualize = _a.onShouldVirtualize, group = _a.group, compact = _a.compact;
            var nestingDepth = subGroup.level ? subGroup.level + 1 : groupNestingDepth;
            return !subGroup || subGroup.count > 0 || (groupProps && groupProps.showEmptyGroups) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GroupedListSection, { ref: function (ref) { return (_this._subGroupRefs['subGroup_' + subGroupIndex] = ref); }, key: _this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: nestingDepth, groupProps: groupProps, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter, onShouldVirtualize: onShouldVirtualize, groups: group ? group.children : [], compact: compact })) : null;
        };
        /**
         * collect all the data we need to enable drag/drop for a group
         */
        _this._getGroupDragDropOptions = function () {
            var _a = _this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
            var options = {
                eventMap: eventsToRegister,
                selectionIndex: -1,
                context: { data: group, index: groupIndex, isGroup: true },
                updateDropState: _this._updateDroppingState,
                canDrag: dragDropEvents.canDrag,
                canDrop: dragDropEvents.canDrop,
                onDrop: dragDropEvents.onDrop,
                onDragStart: dragDropEvents.onDragStart,
                onDragEnter: dragDropEvents.onDragEnter,
                onDragLeave: dragDropEvents.onDragLeave,
                onDragEnd: dragDropEvents.onDragEnd,
                onDragOver: dragDropEvents.onDragOver,
            };
            return options;
        };
        /**
         * update groupIsDropping state based on the input value, which is used to change style during drag and drop
         *
         * @param newValue - new isDropping state value
         * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newIsDropping, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, group = _a.group;
            if (isDropping !== newIsDropping) {
                if (isDropping) {
                    if (dragDropEvents && dragDropEvents.onDragLeave) {
                        dragDropEvents.onDragLeave(group, event);
                    }
                }
                else {
                    if (dragDropEvents && dragDropEvents.onDragEnter) {
                        _this._droppingClassName = dragDropEvents.onDragEnter(group, event);
                    }
                }
                _this.setState({ isDropping: newIsDropping });
            }
        };
        var selection = props.selection, group = props.group;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('GroupedListSection');
        _this.state = {
            isDropping: false,
            isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false,
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SELECTION_CHANGE"], this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        this._events.dispose();
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d, onShouldVirtualize = _a.onShouldVirtualize, groupedListClassNames = _a.groupedListClassNames, groups = _a.groups, compact = _a.compact, _e = _a.listProps, listProps = _e === void 0 ? {} : _e;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group &&
            !group.children &&
            !group.isCollapsed &&
            !group.isShowingAll &&
            (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var version = listProps.version;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            selected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode,
            groups: groups,
            compact: compact,
        };
        var ariaControlsProps = {
            groupedListId: this._id,
            ariaSetSize: groups ? groups.length : undefined,
            ariaPosInSet: groupIndex !== undefined ? groupIndex + 1 : undefined,
        };
        var groupHeaderProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headerProps), dividerProps), ariaControlsProps);
        var groupShowAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, showAllProps), dividerProps);
        var groupFooterProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps), dividerProps);
        var isDraggable = !!this.props.dragDropHelper &&
            this._getGroupDragDropOptions().canDrag(group) &&
            !!this.props.dragDropEvents.canDragGroups;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._root }, (isDraggable && { draggable: true }), { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()), role: "presentation" }),
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ? null : hasNestedGroups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], { role: "presentation", ref: this._list, items: group ? group.children : [], onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne, onShouldVirtualize: onShouldVirtualize, version: version, id: this._id })) : (this._onRenderGroup(renderCount)),
            group && group.isCollapsed
                ? null
                : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this._list.current) {
            this._list.current.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this._list.current.pageRefs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this._subGroupRefs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        if (selection && group) {
            var isSelected = selection.isRangeSelected(group.startIndex, group.count);
            if (isSelected !== this.state.isSelected) {
                this.setState({ isSelected: isSelected });
            }
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth, onShouldVirtualize = _a.onShouldVirtualize, groupProps = _a.groupProps;
        var count = group && !group.isShowingAll ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ role: groupProps && groupProps.role ? groupProps.role : 'presentation', items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth), ref: this._list, renderCount: Math.min(count, renderCount), startIndex: startIndex, onShouldVirtualize: onShouldVirtualize, id: this._id }, listProps)));
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var _a = this.props, group = _a.group, groupedListClassNames = _a.groupedListClassNames;
        isDropping = !!(group && isDropping);
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(isDropping && this._droppingClassName, isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
    };
    return GroupedListSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedListSection.js.map

/***/ }),

/***/ "Et2q":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/SearchBox.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: SearchBox, SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchBox/index */ "kMLv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__["SearchBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return _components_SearchBox_index__WEBPACK_IMPORTED_MODULE_0__["SearchBoxBase"]; });


//# sourceMappingURL=SearchBox.js.map

/***/ }),

/***/ "G9th":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return GroupHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupHeader.styles */ "HKbE");
/* harmony import */ var _GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupHeader.base */ "pf3H");



var GroupHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__["GroupHeaderBase"], _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupHeader',
});
//# sourceMappingURL=GroupHeader.js.map

/***/ }),

/***/ "GDPH":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return GroupedList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.styles */ "9jil");
/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");



var GroupedList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupedList_base__WEBPACK_IMPORTED_MODULE_2__["GroupedListBase"], _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupedList',
});
//# sourceMappingURL=GroupedList.js.map

/***/ }),

/***/ "HKbE":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");




// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    root: 'ms-GroupHeader',
    compact: 'ms-GroupHeader--compact',
    check: 'ms-GroupHeader-check',
    dropIcon: 'ms-GroupHeader-dropIcon',
    expand: 'ms-GroupHeader-expand',
    isCollapsed: 'is-collapsed',
    title: 'ms-GroupHeader-title',
    isSelected: 'is-selected',
    iconTag: 'ms-Icon--Tag',
    group: 'ms-GroupedList-group',
    isDropping: 'is-dropping',
};
var beziers = {
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
};
var DEFAULT_GROUP_HEADER_HEIGHT = 48;
var COMPACT_GROUP_HEADER_HEIGHT = 40;
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
    // padding from the source to align GroupHeader title with DetailsRow's first cell.
    var cellLeftPadding = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"].cellLeftPadding;
    var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var checkExpandResetStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            cursor: 'default',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
        },
    ];
    return {
        root: [
            classNames.root,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.medium,
            {
                // keep the border for height but color it so it's invisible.
                borderBottom: "1px solid " + semanticColors.listBackground,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {
                        ':hover': {
                            background: semanticColors.listItemBackgroundHovered,
                            color: semanticColors.actionLinkHovered,
                        }
                    },
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
                        selectors: (_b = {},
                            _b["& > ." + classNames.root + " ." + classNames.dropIcon] = {
                                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutCirc + " " +
                                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1 + " " + beziers.easeOutSine),
                                transitionDelay: _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue3,
                                opacity: 1,
                                transform: "rotate(0.2deg) scale(1);",
                            },
                            _b["." + classNames.check] = {
                                opacity: 0,
                            },
                            _b),
                    },
                    _a),
            },
            selected && [
                classNames.isSelected,
                {
                    background: semanticColors.listItemBackgroundChecked,
                    selectors: (_c = {
                            ':hover': {
                                background: semanticColors.listItemBackgroundCheckedHovered,
                            }
                        },
                        _c["" + classNames.check] = {
                            opacity: 1,
                        },
                        _c),
                },
            ],
            compact && [classNames.compact, { border: 'none' }],
            className,
        ],
        groupHeaderContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                height: finalRowHeight,
            },
        ],
        headerCount: [
            {
                padding: '0px 4px',
            },
        ],
        check: [
            classNames.check,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                opacity: 0,
                width: _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__["CHECK_CELL_WIDTH"],
                height: finalRowHeight,
                selectors: (_d = {},
                    _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _d),
            },
        ],
        expand: [
            classNames.expand,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                width: _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__["SPACER_WIDTH"],
                height: finalRowHeight,
                color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight,
                    },
                    ':active': {
                        backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt,
                    },
                },
            },
        ],
        expandIsCollapsed: [
            isCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear',
                },
        ],
        title: [
            classNames.title,
            {
                paddingLeft: cellLeftPadding,
                fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
                fontWeight: isCollapsed ? _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular : _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
                cursor: 'pointer',
                outline: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        ],
        dropIcon: [
            classNames.dropIcon,
            {
                position: 'absolute',
                left: -26,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].large,
                color: palette.neutralSecondary,
                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInBack + ", " +
                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutSine),
                opacity: 0,
                transform: 'rotate(0.2deg) scale(0.65)',
                transformOrigin: '10px 10px',
                selectors: (_e = {},
                    _e[":global(." + classNames.iconTag + ")"] = {
                        position: 'absolute',
                    },
                    _e),
            },
        ],
    };
};
//# sourceMappingURL=GroupHeader.styles.js.map

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

/***/ "HbnO":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/UserExpiration/UserExpirationDataSource.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationDataSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationDataSource", function() { return UserExpirationDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_DataRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/DataRequestor */ "PayJ");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/DataBatchOperationHelper */ "zMwE");
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _base_CachedDataSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/CachedDataSource */ "zpEg");
// OneDrive:IgnoreCodeCoverage







var GetExpiringUsersUrlEndpoint = '/_api/web/SiteUserInfoList/GetItems';
var SetUserExpirationUrlEndpoint = '/_api/web/SiteUsers/GetById(@a)';
var ExpireUserEndpoint = '/_api/web/SiteUsers/GetById(@a)/Expire';
var GetExternalUserExpirationPolicyEndpoint = '/_api/Site/ExternalUserExpirationInDays';
/**
 * @inheritdoc
 */
var UserExpirationDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserExpirationDataSource, _super);
    function UserExpirationDataSource(params) {
        var _this = _super.call(this, {
            dataSourceName: 'UserExpirationDataSource',
            id: 'UserExpirationDataSource'
        }, {
            pageContext: params.pageContext
        }) || this;
        _this._dataRequestor = new _base_DataRequestor__WEBPACK_IMPORTED_MODULE_1__["default"]({
            qosName: 'UserExpirationDataSource',
            pageContext: params.pageContext
        });
        var webUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_3__["getSafeWebServerRelativeUrl"])(params.pageContext);
        _this._getExpiringUsersUrl = webUrl + GetExpiringUsersUrlEndpoint;
        _this._setUserExpirationUrl = webUrl + SetUserExpirationUrlEndpoint;
        _this._expireUserUrl = webUrl + ExpireUserEndpoint;
        _this._externalUserExpirationPolicyUrl = webUrl + GetExternalUserExpirationPolicyEndpoint;
        return _this;
    }
    /**
     * @inheritdoc
     */
    UserExpirationDataSource.prototype.setUserExpiration = function (users, date) {
        var _this = this;
        if (!users || users.length < 1) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].reject([false]);
        }
        if (users.length > 1) {
            var batchGuid = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_5__["default"].generate();
            var contentType = 'multipart/mixed; boundary=batch_' + batchGuid;
            var endpointSets_1 = [];
            var perEndpointData_1 = [];
            var perEndpointRequestMethod_1 = [];
            users.forEach(function (user) {
                endpointSets_1.push(_this._setUserExpirationUrl + '?@a=' + user.id);
                perEndpointData_1.push(JSON.stringify({
                    __metadata: {
                        type: 'SP.User'
                    },
                    Expiration: date ? date.toISOString() : ''
                }));
                perEndpointRequestMethod_1.push('PATCH');
            });
            var batchRequestPromise = this._dataRequestor.getData({
                url: _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getBatchOperationUrl(this._pageContext.webAbsoluteUrl),
                parseResponse: function (responseText) {
                    return responseText;
                },
                qosName: 'SetUserExpirations',
                additionalPostData: _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getBatchContentExtended(batchGuid, endpointSets_1, 'PATCH', _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].defaultBatchRequestPostData, perEndpointData_1, _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].defaultBatchAcceptData, perEndpointRequestMethod_1),
                method: 'POST',
                contentType: contentType,
                noRedirect: true,
                needsRequestDigest: true
            });
            this.flushCache();
            return batchRequestPromise
                .then(function (responseText) {
                var result = _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].processBatchResponse(responseText);
                if (result.hasError) {
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].reject(result);
                }
                return result;
            })
                .then(function (result) {
                return result.items.map(function () { return true; });
            }, function (error) {
                return error.items.map(function (response) { return !response.error; });
            });
        }
        else {
            var userUrl = this._setUserExpirationUrl + '?@a=' + users[0].id;
            var postBody = {
                __metadata: {
                    type: 'SP.User'
                },
                Expiration: date ? date.toISOString() : ''
            };
            this.flushCache();
            return this._dataRequestor.getData({
                url: userUrl,
                parseResponse: function (responseText) {
                    return [!responseText];
                },
                qosName: 'SetUserExpiration',
                additionalPostData: JSON.stringify(postBody),
                method: 'POST',
                additionalHeaders: { 'X-HTTP-Method': 'PATCH' },
                noRedirect: true,
                needsRequestDigest: true
            });
        }
    };
    /**
     * @inheritdoc
     */
    UserExpirationDataSource.prototype.expireUser = function (users) {
        var _this = this;
        if (!users || users.length < 1) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].reject([false]);
        }
        if (users.length > 1) {
            var batchGuid = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_5__["default"].generate();
            var contentType = 'multipart/mixed; boundary=batch_' + batchGuid;
            var endpointSets_2 = [];
            var perEndpointData = [];
            var perEndpointRequestMethod_2 = [];
            users.forEach(function (user) {
                endpointSets_2.push(_this._expireUserUrl + '?@a=' + user.id);
                perEndpointRequestMethod_2.push('POST');
            });
            var batchRequestPromise = this._dataRequestor.getData({
                url: _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getBatchOperationUrl(this._pageContext.webAbsoluteUrl),
                parseResponse: function (responseText) {
                    return responseText;
                },
                qosName: 'BatchExpireUser',
                additionalPostData: _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getBatchContentExtended(batchGuid, endpointSets_2, 'POST', _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].defaultBatchRequestPostData, perEndpointData, _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].defaultBatchAcceptData, perEndpointRequestMethod_2),
                method: 'POST',
                contentType: contentType
            });
            this.flushCache();
            return batchRequestPromise
                .then(function (responseText) {
                var result = _base_DataBatchOperationHelper__WEBPACK_IMPORTED_MODULE_4__["default"].processBatchResponse(responseText);
                if (result.hasError) {
                    return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].reject(result);
                }
                return result;
            })
                .then(function (result) {
                return result.items.map(function () { return true; });
            }, function (error) {
                return error.items.map(function (response) { return !response.error; });
            });
        }
        else {
            var userUrl = this._expireUserUrl + '?@a=' + users[0].id;
            this.flushCache();
            return this._dataRequestor.getData({
                url: userUrl,
                parseResponse: function (responseText) {
                    if (responseText) {
                        var responseJson = JSON.parse(responseText);
                        if (responseJson && responseJson.d) {
                            return [true];
                        }
                    }
                    return [false];
                },
                qosName: 'ExpireUser',
                method: 'POST'
            });
        }
    };
    /**
     * @inheritdoc
     */
    UserExpirationDataSource.prototype.getUsersWithExpirationsWithCache = function (orderBy, ascending, top, skip, filter, cachingStrategy) {
        var queryParameters = [];
        if (top) {
            queryParameters.push('$top=' + top);
        }
        if (skip) {
            queryParameters.push('$skip=' + skip);
        }
        if (orderBy) {
            queryParameters.push("$orderby=" + orderBy + " " + (ascending ? 'asc' : 'desc'));
        }
        if (filter) {
            queryParameters.push('$filter=' + filter);
        }
        queryParameters.push('$select=Title,ID,Name,UserExpiration,IsSiteAdmin,EMail');
        var url = this._getExpiringUsersUrl;
        if (queryParameters.length > 0) {
            url += '?' + queryParameters.join('&');
        }
        var postBody = {
            query: {
                __metadata: {
                    type: 'SP.CamlQuery'
                },
                ViewXml: "<View><Query><Where><IsNotNull><FieldRef Name='UserExpiration'/></IsNotNull></Where></Query></View>"
            }
        };
        return this.getDataUtilizingPersistentCache({
            url: url,
            parseResponse: function (responseText) {
                var src = JSON.parse(responseText);
                return src && src.d && src.d.results
                    ? src.d.results.map(function (o) {
                        return {
                            id: o.ID,
                            loginName: o.Name,
                            email: o.EMail,
                            expiration: new Date(o.UserExpiration),
                            title: o.Title,
                            isSiteAdmin: o.IsSiteAdmin
                        };
                    })
                    : responseText;
            },
            qosName: 'GetUsersWithExpirations',
            additionalPostData: JSON.stringify(postBody),
            method: 'POST',
            cachingStrategy: cachingStrategy
        });
    };
    /**
     * @inheritdoc
     */
    UserExpirationDataSource.prototype.getUsersWithExpirations = function (orderBy, ascending, top, skip, filter) {
        return this.getUsersWithExpirationsWithCache(orderBy, ascending, top, skip, filter, 1 /* useCacheIfNotExpired */);
    };
    /**
     * @inheritdoc
     */
    UserExpirationDataSource.prototype.getExternalUserExpirationPolicy = function () {
        return this._dataRequestor.getData({
            url: this._externalUserExpirationPolicyUrl,
            parseResponse: function (responseText) {
                if (responseText) {
                    var responseJson = JSON.parse(responseText);
                    if (responseJson && responseJson.d && responseJson.d.ExternalUserExpirationInDays) {
                        return responseJson.d.ExternalUserExpirationInDays;
                    }
                }
                return 0;
            },
            qosName: 'GetExternalUserExpirationPolicy',
            method: 'GET',
            needsRequestDigest: true
        });
    };
    return UserExpirationDataSource;
}(_base_CachedDataSource__WEBPACK_IMPORTED_MODULE_6__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (UserExpirationDataSource);
//# sourceMappingURL=UserExpirationDataSource.js.map

/***/ }),

/***/ "I5L8":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-groupFooter',
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                position: 'relative',
                padding: '5px 38px',
            },
            className,
        ],
    };
};
//# sourceMappingURL=GroupFooter.styles.js.map

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

/***/ "JBVq":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-DetailsList',
    compact: 'ms-DetailsList--Compact',
    contentWrapper: 'ms-DetailsList-contentWrapper',
    headerWrapper: 'ms-DetailsList-headerWrapper',
    isFixed: 'is-fixed',
    isHorizontalConstrained: 'is-horizontalConstrained',
    listCell: 'ms-List-cell',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                color: semanticColors.listText,
                selectors: (_a = {},
                    _a["& ." + classNames.listCell] = {
                        minHeight: 38,
                        wordBreak: 'break-word',
                    },
                    _a),
            },
            isFixed && classNames.isFixed,
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            isHorizontalConstrained && [
                classNames.isHorizontalConstrained,
                {
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch',
                },
            ],
            className,
        ],
        focusZone: [
            {
                display: 'inline-block',
                minWidth: '100%',
                minHeight: 1,
            },
        ],
        headerWrapper: classNames.headerWrapper,
        contentWrapper: classNames.contentWrapper,
    };
};
//# sourceMappingURL=DetailsList.styles.js.map

/***/ }),

/***/ "K2Cj":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.styles.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupShowAll',
    link: 'ms-Link',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme;
    var fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                padding: '10px 84px',
                cursor: 'pointer',
                selectors: (_a = {},
                    _a["." + classNames.link] = {
                        fontSize: fonts.small.fontSize,
                    },
                    _a),
            },
        ],
    };
};
//# sourceMappingURL=GroupShowAll.styles.js.map

/***/ }),

/***/ "Ldz5":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.base */ "gS4/");
/* harmony import */ var _SearchBox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBox.styles */ "ZdOb");



var SearchBox = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_SearchBox_base__WEBPACK_IMPORTED_MODULE_1__["SearchBoxBase"], _SearchBox_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'SearchBox' });
//# sourceMappingURL=SearchBox.js.map

/***/ }),

/***/ "Ml3t":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationPanel.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationPanelBase, UserExpirationPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationPanelBase", function() { return UserExpirationPanelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationPanel", function() { return UserExpirationPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Panel */ "p6C6");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _UserExpirationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserExpirationList */ "RlGj");
/* harmony import */ var _UserExpirationPanel_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserExpirationPanel.scss */ "Nlan");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserExpirationPanel_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserExpirationPanel.styles */ "MlsC");
/* harmony import */ var _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserExpiration.resx */ "qvd/");
/* harmony import */ var _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10__);











/**
 * @public
 */
var UserExpirationPanelBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserExpirationPanelBase, _super);
    function UserExpirationPanelBase(props) {
        var _this = _super.call(this, props) || this;
        _this._renderCloseButton = function () {
            var iconStyles = {
                root: 'ms-UserExpiration-CloseButton'
            };
            var iconProps = {
                iconName: 'cancel',
                styles: iconStyles
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpiration-Navigation' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], { "data-is-focusable": true, ariaLabel: 'Close panel', iconProps: iconProps, onClick: _this._closePanel })));
        };
        _this._renderHeader = function () {
            var userExpirationPolicyDays = _this.props.userExpirationPolicyDays;
            var hideNoExpirationPolicyInfo = _this.state.hideNoExpirationPolicyInfo;
            var iconStyles = {
                root: 'ms-UserExpirationPanel-Back'
            };
            var iconProps = {
                iconName: 'Back',
                styles: iconStyles
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationPanel-Header' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationPanel-TitleRow' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationPanel-Title' },
                        _this.props.onBackButton && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], { "data-is-focusable": true, className: 'ms-UserExpiration-BackButton', ariaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default.a.Back, iconProps: iconProps, onClick: _this._onBackButton })),
                        _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default.a.userExpiration),
                    _this._renderCloseButton()),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationPanel-HeaderText' }, _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_8__["formatWithLocalizedCountValue"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default.a.Header, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default.a.userExpirationHeaderInterval, userExpirationPolicyDays)),
                !hideNoExpirationPolicyInfo && _this._renderNoExpirationPolicyInfo()));
        };
        _this._renderGuestExpiration = function () {
            var _a = _this.props, userExpirationPolicyDays = _a.userExpirationPolicyDays, userExpirationPolicyEnabled = _a.userExpirationPolicyEnabled;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationList' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UserExpirationList__WEBPACK_IMPORTED_MODULE_4__["UserExpirationList"], { userExpirationProvider: _this.props.userExpirationProvider, userExpirationPolicyDays: userExpirationPolicyDays, userExpirationPolicyEnabled: userExpirationPolicyEnabled, pageSize: 50 })));
        };
        _this._renderNoExpirationPolicyInfo = function () {
            var userExpirationPolicyEnabled = _this.props.userExpirationPolicyEnabled;
            if (!userExpirationPolicyEnabled) {
                var iconProps = {
                    iconName: 'cancel'
                };
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpiration-NoPolicy' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_7__["Icon"], { iconName: 'Error', className: 'ms-UserExpiration-Warning' }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpiration-NoPolicyText' }, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_10___default.a.NoPolicySetInfo),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], { "data-is-focusable": true, className: 'ms-UserExpiration-HideNoPolicyInfo', ariaLabel: 'hide no policy info', menuIconProps: iconProps, onClick: _this._hideNoPolicyInfo })));
            }
        };
        _this._hideNoPolicyInfo = function () {
            _this.setState({ hideNoExpirationPolicyInfo: true });
        };
        _this._closePanel = function () {
            _this.setState({ showPanel: false });
            if (_this.props.onDismiss) {
                _this.props.onDismiss();
            }
        };
        _this._onBackButton = function () {
            _this.setState({ showPanel: false });
            if (_this.props.onBackButton) {
                _this.props.onBackButton();
            }
        };
        _this.state = {
            showPanel: true,
            hideNoExpirationPolicyInfo: false
        };
        return _this;
    }
    UserExpirationPanelBase.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], { className: 'ms-UserExpirationPanel', isOpen: this.props.isOpen, type: office_ui_fabric_react_lib_Panel__WEBPACK_IMPORTED_MODULE_2__["PanelType"].smallFixedFar, onDismiss: this._closePanel, isLightDismiss: true, forceFocusInsideTrap: false, styles: {
                content: 'ms-UserExpirationPanel-content',
                scrollableContent: 'ms-UserExpirationPanel-ScrollableContent'
            }, onRenderHeader: this._renderHeader, hasCloseButton: false, onRenderBody: this._renderGuestExpiration }));
    };
    return UserExpirationPanelBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * @public
 */
var UserExpirationPanel = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["styled"])(UserExpirationPanelBase, _UserExpirationPanel_styles__WEBPACK_IMPORTED_MODULE_9__["getStyles"]);
//# sourceMappingURL=UserExpirationPanel.js.map

/***/ }),

/***/ "MlsC":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationPanel.styles.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    return {
        root: [],
        label: {}
    };
};
//# sourceMappingURL=UserExpirationPanel.styles.js.map

/***/ }),

/***/ "MnMY":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: CollapseAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return CollapseAllVisibility; });
/**
 * {@docCategory GroupedList}
 */
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));
//# sourceMappingURL=GroupedList.types.js.map

/***/ }),

/***/ "NR7x":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationList.styles.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    return {
        root: [],
        label: {}
    };
};
//# sourceMappingURL=UserExpirationList.styles.js.map

/***/ }),

/***/ "Nlan":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationPanel.scss.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-UserExpirationPanel{padding:5px}.ms-UserExpirationPanel-content{margin-top:8px}.ms-UserExpirationPanel-ScrollableContent{height:100%}.ms-UserExpirationPanel-Header{padding:0px 16px 16px 16px}[dir='rtl'] .ms-UserExpirationPanel-Header{padding:0px 16px 16px 16px}.ms-UserExpirationPanel-TitleRow{display:-webkit-box;display:-ms-flexbox;display:flex}.ms-UserExpirationPanel-Title{font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:600;padding-bottom:24px;width:100%}.ms-UserExpirationPanel-Title-Container{margin-top:8px}.ms-UserExpirationPanel-Title{font-size:" }, { "theme": "xLargeFontSize", "defaultValue": "20px" }, { "rawString": ";font-weight:" }, { "theme": "xLargeFontWeight", "defaultValue": "600" }, { "rawString": ";position:relative}.ms-UserExpirationPanel-HeaderText{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";padding-bottom:20px}.ms-UserExpirationPanel-BackButton{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";position:absolute;left:16px;margin-top:7px}.ms-UserExpiration-NoPolicy{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;min-height:80px}.ms-UserExpiration-NoPolicyText{font-size:12px;padding:8px 0 8px 0;width:100%}[dir='rtl'] .ms-UserExpiration-NoPolicyText{padding:8px 0 8px 0}.ms-UserExpiration-Warning{width:32px;font-size:16px;padding:8px 8px 8px 8px}[dir='rtl'] .ms-UserExpiration-Warning{padding:8px 8px 8px 8px}.ms-UserExpiration-HideNoPolicyInfo{width:32px;font-size:16px;padding:8px 8px 8px 8px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}[dir='rtl'] .ms-UserExpiration-HideNoPolicyInfo{padding:8px 8px 8px 8px}.ms-UserExpiration-CloseButton{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";font-size:16px}.ms-UserExpirationList{height:100%}\n" }]);
//# sourceMappingURL=UserExpirationPanel.scss.js.map

/***/ }),

/***/ "QrTI":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/ShimmeredDetailsList.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: ShimmeredDetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShimmeredDetailsList", function() { return ShimmeredDetailsList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ShimmeredDetailsList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShimmeredDetailsList.base */ "yVEV");
/* harmony import */ var _ShimmeredDetailsList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShimmeredDetailsList.styles */ "v+bP");



var ShimmeredDetailsList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ShimmeredDetailsList_base__WEBPACK_IMPORTED_MODULE_1__["ShimmeredDetailsListBase"], _ShimmeredDetailsList_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ShimmeredDetailsList' });
//# sourceMappingURL=ShimmeredDetailsList.js.map

/***/ }),

/***/ "R7/2":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooterBase", function() { return GroupFooterBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupFooterBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, footerText = props.footerText, indentWidth = props.indentWidth, styles = props.styles, theme = props.theme;
    var classNames = getClassNames(styles, { theme: theme });
    if (group && footerText) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_2__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
            footerText));
    }
    return null;
};
//# sourceMappingURL=GroupFooter.base.js.map

/***/ }),

/***/ "RlGj":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationList.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: UserExpirationListBase, UserExpirationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationListBase", function() { return UserExpirationListBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExpirationList", function() { return UserExpirationList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Fabric */ "OBNh");
/* harmony import */ var office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/DetailsList */ "0q4O");
/* harmony import */ var office_ui_fabric_react_lib_ShimmeredDetailsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/ShimmeredDetailsList */ "yRr/");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "epn0");
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/Tooltip */ "c4qa");
/* harmony import */ var office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dialog */ "wPGM");
/* harmony import */ var _UserExpirationList_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserExpirationList.scss */ "uJwK");
/* harmony import */ var _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserExpiration.resx */ "qvd/");
/* harmony import */ var _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var office_ui_fabric_react_lib_SearchBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! office-ui-fabric-react/lib/SearchBox */ "Et2q");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "56LG");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _UserExpirationList_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UserExpirationList.styles */ "NR7x");
/* harmony import */ var office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! office-ui-fabric-react/lib/Sticky */ "vsgo");
/* harmony import */ var office_ui_fabric_react_lib_ScrollablePane__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! office-ui-fabric-react/lib/ScrollablePane */ "4YcF");





















var UserExpirationListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserExpirationListBase, _super);
    function UserExpirationListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._getColumns = function (isPolicyEnabled, orderBy, descending) {
            var columns = [
                {
                    key: 'column1',
                    name: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Name,
                    fieldName: 'Title',
                    minWidth: 1,
                    isRowHeader: true,
                    isResizable: false,
                    isSorted: orderBy === 'Title',
                    isSortedDescending: descending,
                    sortAscendingAriaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.AscendingName,
                    sortDescendingAriaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.DescendingName,
                    onRender: _this._renderNameColumn,
                    onColumnClick: _this._onColumnClick,
                    data: 'string',
                    isPadded: false,
                    ariaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Name
                },
                {
                    key: 'column2',
                    name: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Expiration,
                    fieldName: 'UserExpiration',
                    minWidth: 95,
                    maxWidth: 105,
                    isSorted: orderBy === 'UserExpiration',
                    isSortedDescending: descending,
                    isResizable: false,
                    sortAscendingAriaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.AscendingDate,
                    sortDescendingAriaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.DescendingDate,
                    onColumnClick: _this._onColumnClick,
                    data: 'number',
                    className: 'ms-UserExpirationList-ExpirationColumn',
                    onRender: _this._renderExpirationDate,
                    isPadded: false,
                    ariaLabel: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Expiration
                },
                {
                    key: 'column3',
                    name: '',
                    isResizable: false,
                    onRender: function (item) { return _this._renderOptionsBox(item, isPolicyEnabled); },
                    minWidth: 10,
                    maxWidth: 10,
                    isPadded: false
                }
            ];
            return columns;
        };
        _this._renderNoUsersMessage = function () {
            var filterText = _this.state.filterText;
            if (filterText) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["Sticky"], { stickyPosition: office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["StickyPositionType"].Header },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.NoUsersFound)));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["Sticky"], { stickyPosition: office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["StickyPositionType"].Header },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.NoUsers)));
            }
        };
        _this._renderButtonArea = function () {
            var isUserSelected = _this.state.isUserSelected;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationList-ButtonAreaPadding' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationList-ButtonArea' },
                    !isUserSelected && _this._renderSearch(),
                    isUserSelected && _this._renderButtons())));
        };
        _this._renderSearch = function () {
            var filterText = _this.state.filterText;
            var styles = {
                field: 'ms-UserExpirationList-SearchField'
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_SearchBox__WEBPACK_IMPORTED_MODULE_12__["SearchBox"], { placeholder: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Search, className: 'ms-UserExpirationList-Search', value: filterText, onChange: function (ev, text) { return _this._searchForUser(text); }, styles: styles }));
        };
        _this._renderButtons = function () {
            var userExpirationPolicyEnabled = _this.props.userExpirationPolicyEnabled;
            var styles = {
                root: 'ms-UserExpirationList-ButtonAreaButton'
            };
            if (userExpirationPolicyEnabled) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationList-ButtonArea' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["CommandBarButton"], { "data-automation-id": 'CommandBarExtend', iconProps: { iconName: 'DateTime2' }, text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Extend, onClick: _this._showExtendDialog, styles: styles }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["CommandBarButton"], { "data-automation-id": 'CommandBarExpire', iconProps: { iconName: 'UserRemove' }, text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.RemoveAccess, onClick: _this._showExpireDialog, styles: styles })));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-UserExpirationList-ButtonArea' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["CommandBarButton"], { "data-automation-id": 'CommandBarClear', iconProps: { iconName: 'RemoveEvent' }, text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearExpiration, onClick: _this._showClearDialog, styles: styles }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["CommandBarButton"], { "data-automation-id": 'CommandBarExpire', iconProps: { iconName: 'UserRemove' }, text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.RemoveAccess, onClick: _this._showExpireDialog, styles: styles })));
            }
        };
        _this._renderList = function () {
            var _a = _this.state, users = _a.users, columns = _a.columns, hasMoreUsers = _a.hasMoreUsers;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Fabric__WEBPACK_IMPORTED_MODULE_2__["Fabric"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ShimmeredDetailsList__WEBPACK_IMPORTED_MODULE_4__["ShimmeredDetailsList"], { "data-automation-id": 'UserExpirationDetailsList', className: 'ms-UserExpiration-UserExpirationList', checkboxCellClassName: 'ms-UserExpirationList-Checkbox', items: users ? users : [], compact: false, columns: columns, selectionMode: users && users.length > 0 ? office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple : office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none, layoutMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].justified, isHeaderVisible: true, selection: _this._selection, selectionPreservedOnEmptyClick: true, enterModalSelectionOnTouch: true, ariaLabelForSelectionColumn: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ToggleSelection, ariaLabelForSelectAllCheckbox: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.SelectAll, onRowDidMount: function (item, index) {
                        _this._onRenderItem(item, index);
                    }, constrainMode: office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained, enableShimmer: users ? users.length === 0 && hasMoreUsers : hasMoreUsers, onRenderDetailsHeader: _this._onRenderDetailsHeader, onRenderRow: _this._onRenderRow })));
        };
        _this._onRenderRow = function (detailsRowProps, defaultRender) {
            return defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (detailsRowProps || {})), { onRenderCheck: _this._onRenderCheck }));
        };
        _this._onRenderCheck = function (detailsCheckBoxProps, DefaultRender) {
            if (DefaultRender === void 0) { DefaultRender = office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["DetailsRowCheck"]; }
            var styles = {
                root: 'ms-UserExpirationList-CheckBoxRoot',
                check: 'ms-UserExpirationList-CheckBoxCheck',
                isDisabled: 'ms-UserExpirationList-CheckBoxDisabled'
            };
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DefaultRender, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsCheckBoxProps, { styles: styles }));
        };
        _this._onRenderDetailsHeader = function (detailsHeaderProps, defaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["Sticky"], { stickyPosition: office_ui_fabric_react_lib_Sticky__WEBPACK_IMPORTED_MODULE_16__["StickyPositionType"].Header }, defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (detailsHeaderProps || {})), { onRenderColumnHeaderTooltip: _this._onRenderDetailsHeaderTooltip, onRenderDetailsCheckbox: _this._onRenderDetailsCheckbox, styles: {
                    cellIsCheck: 'ms-UserExpirationList-CheckBoxRoot',
                    check: 'ms-UserExpirationList-CheckBoxRoot'
                } }))));
        };
        _this._onRenderDetailsCheckbox = function (detailsCheckboxProps, defaultRender) {
            return defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsCheckboxProps));
        };
        _this._onRenderDetailsHeaderTooltip = function (iTooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipHost"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, iTooltipHostProps));
        };
        _this._renderNameColumn = function (user) {
            var _a = _this.state, isNameTooltipVisible = _a.isNameTooltipVisible, isEmailTooltipVisible = _a.isEmailTooltipVisible;
            if (user) {
                var nameId = user.uniqueId + 'name';
                var nameTooltipId = user.uniqueId + 'nameTooltip';
                var emailId = user.uniqueId + 'email';
                var emailTooltipId = user.uniqueId + 'emailTooltip';
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipHost"], { content: user.title, overflowMode: office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipOverflowMode"].Parent, id: nameTooltipId, onTooltipToggle: _this._onNameTooltip, calloutProps: {
                                gapSpace: 0,
                                target: "#" + nameId
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-UserExpirationList-UserName', "aria-labelledby": isNameTooltipVisible ? nameTooltipId : undefined, id: nameId }, user.title))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipHost"], { content: user.email, overflowMode: office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipOverflowMode"].Parent, id: emailTooltipId, onTooltipToggle: _this._onEmailTooltip, calloutProps: {
                                gapSpace: 0,
                                target: "#" + emailId
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: 'ms-UserExpiratinLIst-UserEmail', "aria-labelledby": isEmailTooltipVisible ? emailTooltipId : undefined, id: emailId }, user.email ? user.email : '')))));
            }
        };
        _this._renderOptionsBox = function (item, isPolicyEnabled) {
            var contextMenuItems = isPolicyEnabled
                ? [
                    {
                        key: 'extend',
                        text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendAccess,
                        onClick: function () {
                            _this.setState({ selectedUser: item, isExtendDialogVisible: true });
                        }
                    },
                    {
                        key: 'expire',
                        text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.RemoveAccess,
                        onClick: function () {
                            _this.setState({ selectedUser: item, isExpireDialogVisible: true });
                        }
                    }
                ]
                : [
                    {
                        key: 'clear',
                        text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearExpiration,
                        onClick: function () {
                            _this.setState({ selectedUser: item, isClearDialogVisible: true });
                        }
                    },
                    {
                        key: 'expire',
                        text: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.RemoveAccess,
                        onClick: function () {
                            _this.setState({ selectedUser: item, isExpireDialogVisible: true });
                        }
                    }
                ];
            var iconStyles = {
                root: { fontSize: '16px' }
            };
            var iconProps = {
                iconName: 'MoreVertical',
                styles: iconStyles
            };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["IconButton"], { "data-is-focusable": true, className: 'ms-UserExpiration-actionButton', ariaLabel: 'stringsResx.moreOptionsLabel', menuIconProps: iconProps, menuProps: {
                    shouldFocusOnMount: true,
                    items: contextMenuItems
                } }));
        };
        _this._renderExpirationDate = function (user) {
            var isExpirationTooltipVisible = _this.state.isExpirationTooltipVisible;
            if (user.isExpiring) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Expiring);
            }
            else if (user.isExtending) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Extending);
            }
            else if (user.isClearing) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Clearing);
            }
            else {
                var daysAway = _this.daysAway(user.expiration);
                var className = 'ms-UserExpirationList-Expiration' +
                    (daysAway < 7 && daysAway > 0 ? ' Soon' : '') +
                    (user.isSiteAdmin ? ' Admin' : '');
                var expirationId = user.uniqueId + 'expiration';
                var tooltipId = expirationId + 'tooltip';
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipHost"], { content: _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpiresTooltip, user.expiration.toLocaleDateString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })), id: tooltipId, onTooltipToggle: _this._onExpirationTooltip, calloutProps: {
                            gapSpace: 0,
                            target: "#" + expirationId
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: className, id: expirationId, "aria-labelledby": isExpirationTooltipVisible ? tooltipId : undefined }, _this._ExpirationDate(user))),
                    user.isSiteAdmin && _this._renderAdminNotification(expirationId)));
            }
        };
        _this._renderAdminNotification = function (expirationId) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipHost"], { content: _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.AdminWontExpireInfo, calloutProps: {
                    gapSpace: 0,
                    target: "#" + (expirationId + 'test')
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_13__["Icon"], { id: expirationId + 'test', iconName: 'Info', className: 'ms-UserExpirationList-AdminWarning' })));
        };
        _this._renderDialog = function () {
            var _a = _this.state, isExpireDialogVisible = _a.isExpireDialogVisible, isExtendDialogVisible = _a.isExtendDialogVisible, isClearDialogVisible = _a.isClearDialogVisible, selectedUser = _a.selectedUser;
            var userExpirationPolicyDays = _this.props.userExpirationPolicyDays;
            var title;
            var subText;
            var primaryButtonText;
            var secondaryButtonText;
            var userName;
            var userEmail;
            var onClick;
            var selectionCount = _this._selection.getSelectedCount();
            if (selectedUser) {
                userName = selectedUser.title;
                userEmail = selectedUser.email;
            }
            else {
                if (selectionCount === 1) {
                    var user = _this._selection.getSelection()[0];
                    userName = user.title;
                    userEmail = user.email;
                }
            }
            if (isExpireDialogVisible) {
                title = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpireTitle;
                subText =
                    selectionCount <= 1
                        ? _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpireMessage, userName, userEmail)
                        : _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["formatWithLocalizedCountValue"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpireMessagePlural, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpireMessageInterval, selectionCount);
                primaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExpireConfirm;
                secondaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Cancel;
                if (selectedUser) {
                    var users_1 = [];
                    users_1.push(selectedUser);
                    onClick = function () {
                        _this._expireNow(users_1);
                        _this._closeDialog();
                    };
                }
                else {
                    onClick = function () {
                        _this._expireNow(_this._selection.getSelection());
                        _this._selection.setItems(_this._selection.getSelection(), true /*shouldClear*/);
                        _this._closeDialog();
                    };
                }
            }
            else if (isExtendDialogVisible) {
                var newExpirationDate_1 = new Date();
                newExpirationDate_1.setDate(newExpirationDate_1.getDate() + userExpirationPolicyDays);
                title = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendTitle;
                subText =
                    selectionCount <= 1
                        ? _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendMessage, userName, userEmail, newExpirationDate_1.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }))
                        : _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["getLocalizedCountValue"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendMessagePlural, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendMessageInterval, selectionCount), selectionCount, newExpirationDate_1.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }));
                primaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ExtendConfirm;
                secondaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Cancel;
                if (selectedUser) {
                    var users_2 = [];
                    users_2.push(selectedUser);
                    onClick = function () {
                        _this._setUserExpiration(users_2, newExpirationDate_1);
                        _this._closeDialog();
                    };
                }
                else {
                    onClick = function () {
                        _this._setUserExpiration(_this._selection.getSelection(), newExpirationDate_1);
                        _this._selection.setItems(_this._selection.getSelection(), true /*shouldClear*/);
                        _this._closeDialog();
                    };
                }
            }
            else if (isClearDialogVisible) {
                title = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearTitle;
                subText =
                    selectionCount <= 1
                        ? _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["format"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearMessage, userName, userEmail)
                        : _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["formatWithLocalizedCountValue"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearMessagePlural, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearMessageInterval, selectionCount);
                primaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.ClearConfirm;
                secondaryButtonText = _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.Cancel;
                if (selectedUser) {
                    var users_3 = [{}];
                    users_3.push(selectedUser);
                    onClick = function () {
                        _this._clearExpiration(users_3);
                        _this._closeDialog();
                    };
                }
                else {
                    onClick = function () {
                        _this._clearExpiration(_this._selection.getSelection());
                        _this._selection.setItems(_this._selection.getSelection(), true /*shouldClear*/);
                        _this._closeDialog();
                    };
                }
            }
            else {
                _this._closeDialog();
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_9__["Dialog"], { hidden: false, onDismiss: _this._closeDialog, dialogContentProps: {
                    type: office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogType"].normal,
                    title: title,
                    subText: subText
                }, modalProps: {
                    isBlocking: false,
                    containerClassName: 'ms-dialogMainOverride'
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dialog__WEBPACK_IMPORTED_MODULE_9__["DialogFooter"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["PrimaryButton"], { onClick: onClick, text: primaryButtonText }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_6__["DefaultButton"], { onClick: _this._closeDialog, text: secondaryButtonText }))));
        };
        _this._onNameTooltip = function (isVisible) {
            _this.setState({ isNameTooltipVisible: isVisible });
        };
        _this._onEmailTooltip = function (isVisible) {
            _this.setState({ isEmailTooltipVisible: isVisible });
        };
        _this._onExpirationTooltip = function (isVisible) {
            _this.setState({ isExpirationTooltipVisible: isVisible });
        };
        _this._showExtendDialog = function () {
            _this.setState({ isExtendDialogVisible: true });
        };
        _this._showClearDialog = function () {
            _this.setState({ isClearDialogVisible: true });
        };
        _this._showExpireDialog = function () {
            _this.setState({ isExpireDialogVisible: true });
        };
        /*
        Clears the expiration for the site users and removes them from the list
        */
        _this._clearExpiration = function (users) {
            users.forEach(function (user) {
                user.isClearing = true;
            });
            _this._updateUsers(users);
            _this._userExpirationProvider
                .setUserExpiration(users, undefined)
                .then(function (success) {
                var clearedUsers = [];
                success.forEach(function (value, index) {
                    if (value) {
                        clearedUsers.push(users[index]);
                    }
                    else {
                        users[index].isClearing = false;
                    }
                });
                _this._removeUsers(clearedUsers);
                return users.filter(function (user, index) {
                    return !success[index];
                });
            })
                .then(function (users) {
                if (users.length > 0) {
                    users.forEach(function (user, index) {
                        users[index].isExpiring = false;
                    });
                    _this._updateUsers(users);
                }
            });
        };
        /**
         * Fetches the next page of expiring users from the site, and keeps fetching more until the
         * number of currently displayed users reaches the page size
         */
        _this._fetchExpiringUsers = function () {
            var _a = _this.state, orderBy = _a.orderBy, ascending = _a.ascending, filterText = _a.filterText, hasMoreUsers = _a.hasMoreUsers, allUsers = _a.allUsers;
            var pageSize = _this.props.pageSize;
            if (hasMoreUsers) {
                var currentUsers_1;
                if (allUsers) {
                    currentUsers_1 = _this.state.allUsers;
                }
                else {
                    currentUsers_1 = [];
                }
                _this._userExpirationProvider
                    .getUsersWithExpirationsWithCache(orderBy, ascending, pageSize, currentUsers_1.length, undefined, 3 /* bypassCache */)
                    .then(function (response) {
                    if (Array.isArray(response) && response.length > 0) {
                        response.forEach(function (user) {
                            user.uniqueId = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])();
                            currentUsers_1.push(user);
                        });
                        var allUsers_1 = _this._mergeInNewUsers(response);
                        var filteredUsers = _this.filterUsers(filterText, allUsers_1);
                        var fetchMoreUsers = response.length === pageSize && filteredUsers && filteredUsers.length < pageSize;
                        _this.setState({
                            allUsers: allUsers_1,
                            users: filteredUsers,
                            hasMoreUsers: response.length === pageSize
                        });
                        return fetchMoreUsers;
                    }
                    else {
                        _this.setState({
                            hasMoreUsers: false
                        });
                        return false;
                    }
                })
                    .then(function (fetchMoreUsers) {
                    if (fetchMoreUsers) {
                        _this._fetchExpiringUsers();
                    }
                })
                    .catch(function (error) {
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_7__["default"].logData({ name: 'error fetching users' });
                });
            }
        };
        /**
         * Sets the expiration for the users on the site
         * @param users set of users
         * @param date date to set
         */
        _this._setUserExpiration = function (users, date) {
            users.forEach(function (user) {
                user.isExtending = true;
            });
            _this._updateUsers(users);
            _this._userExpirationProvider
                .setUserExpiration(users, date)
                .then(function (success) {
                var hadError = false;
                success.forEach(function (updated, index) {
                    if (updated) {
                        users[index].expiration = date;
                    }
                    else {
                        hadError = true;
                    }
                    users[index].isExtending = false;
                });
                _this._updateUsers(users);
                return hadError;
            })
                .then(function (success) {
                //error case
            });
        };
        /**
         * Removes the users from the site, marking them as expired
         * @param users the set of users
         */
        _this._expireNow = function (users) {
            users.forEach(function (user) {
                user.isExpiring = true;
            });
            _this._updateUsers(users);
            _this._userExpirationProvider
                .expireUser(users)
                .then(function (success) {
                var expiredUsers = users.filter(function (user, index) {
                    return success[index];
                });
                _this._removeUsers(expiredUsers);
                return users.filter(function (user, index) {
                    return !success[index];
                });
            })
                .then(function (users) {
                if (users.length > 0) {
                    users.forEach(function (user, index) {
                        users[index].isExpiring = false;
                    });
                    _this._updateUsers(users);
                }
            });
        };
        /**
         * Removes the users from the list of fetched users
         * @param users
         */
        _this._removeUsers = function (users) {
            var _a = _this.state, allUsers = _a.allUsers, filterText = _a.filterText;
            var map = _this._mapUsers(users);
            var newUsers = allUsers.filter(function (user) { return !(user.id in map); });
            _this.setState({ allUsers: newUsers.concat(), users: _this.filterUsers(filterText, newUsers) }, function () {
                if (newUsers.length <= 10) {
                    _this._fetchExpiringUsers();
                }
            });
        };
        /**
         * Updates properties on the indicated users within the list of fetched users
         * Forces a re-render
         * @param users
         */
        _this._updateUsers = function (users) {
            var _a = _this.state, allUsers = _a.allUsers, filterText = _a.filterText;
            var map = _this._mapUsers(users);
            var newUsers = allUsers.map(function (user) {
                return map[user.id] || user;
            });
            _this.setState({
                allUsers: newUsers,
                users: _this.filterUsers(filterText, newUsers)
            });
        };
        /**
         * Adds users to the end of the list, if they don't already exist in the list
         * Used to avoid duplicates due to changing expiration dates
         * @param users
         */
        _this._mergeInNewUsers = function (users) {
            var allUsers = _this.state.allUsers;
            if (allUsers && allUsers.length > 0) {
                var map_1 = _this._mapUsers(allUsers);
                var newUsers = users.filter(function (user) { return !(user.id in map_1); });
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(allUsers, newUsers);
            }
            else {
                return users;
            }
        };
        _this._mapUsers = function (users) {
            var map = {};
            for (var _i = 0, users_4 = users; _i < users_4.length; _i++) {
                var user = users_4[_i];
                map[user.id] = user;
            }
            return map;
        };
        _this._sort = function (users, orderByTitle, ascending) {
            var sortFunction = orderByTitle
                ? function (a, b) {
                    return a.title.toLocaleUpperCase().localeCompare(b.title.toLocaleUpperCase());
                }
                : function (a, b) {
                    return a.expiration.valueOf() - b.expiration.valueOf();
                };
            users.sort(sortFunction);
            if (ascending) {
                users.reverse();
            }
            return users;
        };
        _this._closeDialog = function () {
            _this.setState({
                isExpireDialogVisible: false,
                isExtendDialogVisible: false,
                isClearDialogVisible: false,
                selectedUser: undefined
            });
        };
        /**
         * Fetches new items when rendering near the end of the list
         */
        _this._onRenderItem = function (item, index) {
            var users = _this.state.users;
            if (index === users.length - 10 || (users.length < 10 && index === users.length - 1)) {
                _this._fetchExpiringUsers();
            }
        };
        /**
         * returns the date string for the user for the expiration column
         * @param user
         */
        _this._ExpirationDate = function (user) {
            var expirationDate = user.expiration;
            var daysAway = _this.daysAway(expirationDate);
            var dateString = '';
            if (daysAway < 7 && daysAway > 0) {
                dateString = _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_14__["formatWithLocalizedCountValue"](_UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.DaysLeft, _UserExpiration_resx__WEBPACK_IMPORTED_MODULE_11___default.a.DaysLeftInterval, daysAway);
            }
            else {
                dateString = expirationDate.toLocaleString('en-us', { month: 'short', day: 'numeric' });
            }
            return dateString;
        };
        _this.daysAway = function (expiration) {
            var utcTime = expiration.getTime();
            var currentTime = Date.now();
            return Math.ceil((utcTime - currentTime) / (1000 * 60 * 60 * 24));
        };
        _this._getSelectionDetails = function () {
            var selectionCount = _this._selection.getSelectedCount();
            return selectionCount > 0;
        };
        _this._onColumnClick = function (ev, column) {
            var _a = _this.state, columns = _a.columns, hasMoreUsers = _a.hasMoreUsers, users = _a.users;
            var newColumns = columns.map(function (oldColumn) {
                var isMatch = oldColumn.key === column.key;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldColumn), { isSorted: isMatch, isSortedDescending: isMatch && !oldColumn.isSortedDescending });
            });
            if (hasMoreUsers) {
                _this.setState({
                    allUsers: [],
                    hasMoreUsers: true,
                    orderBy: column.fieldName,
                    ascending: !column.isSortedDescending,
                    columns: newColumns
                }, function () { return _this._fetchExpiringUsers(); });
            }
            else {
                _this.setState({
                    users: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this._sort(users, column.fieldName === 'Title', !column.isSortedDescending)),
                    orderBy: column.fieldName,
                    ascending: !column.isSortedDescending,
                    columns: newColumns
                });
            }
        };
        /**
         * Updates the displayed users by filtering out users that don't match the filter text
         * @param text the filter text
         */
        _this._searchForUser = function (text) {
            var allUsers = _this.state.allUsers;
            if (allUsers && allUsers.length > 0) {
                _this.setState({
                    filterText: text,
                    users: _this.filterUsers(text, allUsers)
                }, function () {
                    var users = _this.state.users;
                    if (users && users.length < 10) {
                        _this._fetchExpiringUsers();
                    }
                });
            }
            else {
                _this.setState({
                    filterText: text
                });
            }
        };
        /**
         * filters out users based on their email or name containing the filter text
         * @param filter
         * @param users
         */
        _this.filterUsers = function (filter, users) {
            var lowerCaseText = filter.toLocaleUpperCase();
            if (users && users.length > 0) {
                return users.filter(function (user) {
                    return ((user && user.email && user.email.toLocaleUpperCase().indexOf(lowerCaseText) > -1) ||
                        (user && user.title && user.title.toLocaleUpperCase().indexOf(lowerCaseText) > -1));
                });
            }
            else {
                return users;
            }
        };
        _this._userExpirationProvider = props.userExpirationProvider;
        var columns = _this._getColumns(props.userExpirationPolicyEnabled, 'UserExpiration', false);
        _this._selection = new office_ui_fabric_react_lib_DetailsList__WEBPACK_IMPORTED_MODULE_3__["Selection"]({
            onSelectionChanged: function () {
                _this.setState({
                    isUserSelected: _this._getSelectionDetails()
                });
            }
        });
        var users;
        _this.state = {
            users: users,
            allUsers: users,
            columns: columns,
            isUserSelected: _this._getSelectionDetails(),
            isNameTooltipVisible: false,
            isEmailTooltipVisible: false,
            isExpirationTooltipVisible: false,
            isClearDialogVisible: false,
            isExpireDialogVisible: false,
            isExtendDialogVisible: false,
            selectedUser: undefined,
            hasMoreUsers: true,
            orderBy: 'UserExpiration',
            ascending: true,
            filterText: ''
        };
        return _this;
    }
    UserExpirationListBase.prototype.render = function () {
        var _a = this.state, users = _a.users, isExtendDialogVisible = _a.isExtendDialogVisible, isClearDialogVisible = _a.isClearDialogVisible, isExpireDialogVisible = _a.isExpireDialogVisible, hasMoreUsers = _a.hasMoreUsers;
        var renderNoUserMessage = (!users || users.length === 0) && !hasMoreUsers;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'ms-userExpirationList' },
            this._renderButtonArea(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_ScrollablePane__WEBPACK_IMPORTED_MODULE_17__["ScrollablePane"], { scrollbarVisibility: office_ui_fabric_react_lib_ScrollablePane__WEBPACK_IMPORTED_MODULE_17__["ScrollbarVisibility"].always, className: 'ms-userExpirationList-ScrollablePane' },
                this._renderList(),
                renderNoUserMessage && this._renderNoUsersMessage()),
            (isExpireDialogVisible || isExtendDialogVisible || isClearDialogVisible) && this._renderDialog()));
    };
    UserExpirationListBase.prototype.componentDidMount = function () {
        this._fetchExpiringUsers();
    };
    UserExpirationListBase.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.userExpirationPolicyEnabled !== this.props.userExpirationPolicyEnabled) {
            this.setState({
                columns: this._getColumns(this.props.userExpirationPolicyEnabled, this.state.orderBy, this.state.ascending)
            });
        }
    };
    return UserExpirationListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var UserExpirationList = Object(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_5__["styled"])(UserExpirationListBase, _UserExpirationList_styles__WEBPACK_IMPORTED_MODULE_15__["getStyles"]);
//# sourceMappingURL=UserExpirationList.js.map

/***/ }),

/***/ "TRok":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return DetailsColumnBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");






var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])();
var TRANSITION_DURATION_DRAG = 200; // ms
var TRANSITION_DURATION_DROP = 1500; // ms
var CLASSNAME_ADD_INTERVAL = 20; // ms
/**
 * Component for rendering columns in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsColumnBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsColumnBase, _super);
    function DetailsColumnBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        _this._onColumnClick = function (ev) {
            var _a = _this.props, onColumnClick = _a.onColumnClick, column = _a.column;
            if (column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled) {
                return;
            }
            if (column.onColumnClick) {
                column.onColumnClick(ev, column);
            }
            if (onColumnClick) {
                onColumnClick(ev, column);
            }
        };
        _this._onDragStart = function (item, itemIndex, selectedItems, event) {
            var classNames = _this._classNames;
            if (itemIndex) {
                _this._updateHeaderDragInfo(itemIndex);
                _this._root.current.classList.add(classNames.borderWhileDragging);
                _this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderWhileDragging);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
        };
        _this._onDragEnd = function (item, event) {
            var classNames = _this._classNames;
            if (event) {
                _this._updateHeaderDragInfo(-1, event);
            }
            _this._root.current.classList.remove(classNames.borderWhileDragging);
            _this._root.current.classList.remove(classNames.noBorderWhileDragging);
        };
        _this._updateHeaderDragInfo = function (itemIndex, event) {
            /* eslint-disable deprecation/deprecation */
            if (_this.props.setDraggedItemIndex) {
                _this.props.setDraggedItemIndex(itemIndex);
            }
            /* eslint-enable deprecation/deprecation */
            if (_this.props.updateDragInfo) {
                _this.props.updateDragInfo({ itemIndex: itemIndex }, event);
            }
        };
        _this._onColumnContextMenu = function (ev) {
            var _a = _this.props, onColumnContextMenu = _a.onColumnContextMenu, column = _a.column;
            if (column.onColumnContextMenu) {
                column.onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
            if (onColumnContextMenu) {
                onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var isDraggable = _this.props.isDraggable;
            // Ignore anything except the primary button.
            if (isDraggable && ev.button === MOUSEDOWN_PRIMARY_BUTTON) {
                ev.stopPropagation();
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](_this);
        return _this;
    }
    DetailsColumnBase.prototype.render = function () {
        var _a = this.props, column = _a.column, columnIndex = _a.columnIndex, parentId = _a.parentId, isDraggable = _a.isDraggable, styles = _a.styles, theme = _a.theme, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CELL_STYLE_PROPS"] : _b, _c = _a.useFastIcons, useFastIcons = _c === void 0 ? true : _c;
        var _d = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d;
        this._classNames = getClassNames(styles, {
            theme: theme,
            headerClassName: column.headerClassName,
            iconClassName: column.iconClassName,
            isActionable: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled,
            isEmpty: !column.name,
            isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
            isPadded: column.isPadded,
            isIconOnly: column.isIconOnly,
            cellStyleProps: cellStyleProps,
            transitionDurationDrag: TRANSITION_DURATION_DRAG,
            transitionDurationDrop: TRANSITION_DURATION_DROP,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_2__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key, ref: this._root, role: 'columnheader', "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "aria-colindex": columnIndex, className: classNames.root, "data-is-draggable": isDraggable, draggable: isDraggable, style: {
                    width: column.calculatedWidth +
                        cellStyleProps.cellLeftPadding +
                        cellStyleProps.cellRightPadding +
                        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                }, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key },
                isDraggable && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: "GripperBarVertical", className: classNames.gripperBarVerticalStyle })),
                onRenderColumnHeaderTooltip({
                    hostClassName: classNames.cellTooltip,
                    id: parentId + "-" + column.key + "-tooltip",
                    setAriaDescribedBy: false,
                    column: column,
                    content: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled ? column.ariaLabel : '',
                    children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key, "aria-label": column.isIconOnly ? column.name : undefined, "aria-labelledby": column.isIconOnly ? undefined : parentId + "-" + column.key + "-name", className: classNames.cellTitle, "data-is-focusable": column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled, role: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled &&
                            (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined)
                            ? 'button'
                            : undefined, "aria-describedby": !this.props.onRenderColumnHeaderTooltip && this._hasAccessibleLabel()
                            ? parentId + "-" + column.key + "-tooltip"
                            : undefined, onContextMenu: this._onColumnContextMenu, onClick: this._onColumnClick, "aria-haspopup": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown, "aria-expanded": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown ? !!column.isMenuOpen : undefined },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key + "-name", className: classNames.cellName },
                            (column.iconName || column.iconClassName) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.iconClassName, iconName: column.iconName })),
                            column.isIconOnly ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.accessibleLabel }, column.name)) : (column.name)),
                        column.isFiltered && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "Filter" }),
                        column.isSorted && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.sortIcon, iconName: column.isSortedDescending ? 'SortDown' : 'SortUp' })),
                        column.isGrouped && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "GroupedDescending" }),
                        column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown && !column.isIconOnly && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { "aria-hidden": true, className: classNames.filterChevron, iconName: "ChevronDown" })))),
                }, this._onRenderColumnHeaderTooltip)),
            !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleLabel() : null));
    };
    DetailsColumnBase.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        var classNames = this._classNames;
        if (this.props.isDropped) {
            if (this._root.current) {
                this._root.current.classList.add(classNames.borderAfterDropping);
                this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderAfterDropping);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.remove(classNames.borderAfterDropping);
                    _this._root.current.classList.remove(classNames.noBorderAfterDropping);
                }
            }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._async.dispose();
        this._events.dispose();
    };
    DetailsColumnBase.prototype.componentDidUpdate = function () {
        if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        if (this._dragDropSubscription && !this.props.isDraggable) {
            this._dragDropSubscription.dispose();
            this._events.off(this._root.current, 'mousedown');
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
        var _this = this;
        var columnIndex = this.props.columnIndex;
        var options = {
            selectionIndex: columnIndex,
            context: { data: columnIndex, index: columnIndex },
            canDrag: function () { return _this.props.isDraggable; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd,
        };
        return options;
    };
    DetailsColumnBase.prototype._hasAccessibleLabel = function () {
        var column = this.props.column;
        return !!(column.ariaLabel ||
            column.filterAriaLabel ||
            column.sortAscendingAriaLabel ||
            column.sortDescendingAriaLabel ||
            column.groupAriaLabel);
    };
    DetailsColumnBase.prototype._renderAccessibleLabel = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId;
        var classNames = this._classNames;
        return this._hasAccessibleLabel() && !this.props.onRenderColumnHeaderTooltip ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: column.key + "_label", id: parentId + "-" + column.key + "-tooltip", className: classNames.accessibleLabel },
            column.ariaLabel,
            (column.isFiltered && column.filterAriaLabel) || null,
            (column.isSorted &&
                (column.isSortedDescending ? column.sortDescendingAriaLabel : column.sortAscendingAriaLabel)) ||
                null,
            (column.isGrouped && column.groupAriaLabel) || null)) : null;
    };
    DetailsColumnBase.prototype._addDragDropHandling = function () {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
        // We need to use native on this to prevent MarqueeSelection from handling the event before us.
        this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
    };
    return DetailsColumnBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DetailsColumn.base.js.map

/***/ }),

/***/ "TUa0":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/groupedList/GroupedListUtility.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GetGroupCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGroupCount", function() { return GetGroupCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */
var GetGroupCount = function (groups) {
    var total = 0;
    if (groups) {
        var remainingGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(groups);
        var currentGroup = void 0;
        while (remainingGroups && remainingGroups.length > 0) {
            ++total;
            currentGroup = remainingGroups.pop();
            if (currentGroup && currentGroup.children) {
                remainingGroups.push.apply(remainingGroups, currentGroup.children);
            }
        }
    }
    return total;
};
//# sourceMappingURL=GroupedListUtility.js.map

/***/ }),

/***/ "WEXx":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return DetailsList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony import */ var _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsList.styles */ "JBVq");



var DetailsList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsList_base__WEBPACK_IMPORTED_MODULE_1__["DetailsListBase"], _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'DetailsList',
});
//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "Z1BT":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.styles.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-ScrollablePane',
    contentContainer: 'ms-ScrollablePane--contentContainer',
};
var getStyles = function (props) {
    var _a, _b;
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var AboveAndBelowStyles = {
        position: 'absolute',
        pointerEvents: 'none',
    };
    var positioningStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        WebkitOverflowScrolling: 'touch',
    };
    return {
        root: [classNames.root, theme.fonts.medium, positioningStyle, className],
        contentContainer: [
            classNames.contentContainer,
            {
                overflowY: props.scrollbarVisibility === 'always' ? 'scroll' : 'auto',
            },
            positioningStyle,
        ],
        stickyAbove: [
            {
                top: 0,
                zIndex: 1,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
            AboveAndBelowStyles,
        ],
        stickyBelow: [
            {
                bottom: 0,
                selectors: (_b = {},
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderTop: '1px solid WindowText',
                    },
                    _b),
            },
            AboveAndBelowStyles,
        ],
        stickyBelowItems: [
            {
                bottom: 0,
            },
            AboveAndBelowStyles,
            {
                width: '100%',
            },
        ],
    };
};
//# sourceMappingURL=ScrollablePane.styles.js.map

/***/ }),

/***/ "Z9S6":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumn", function() { return DetailsColumn; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony import */ var _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsColumn.styles */ "lbay");



var DetailsColumn = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__["DetailsColumnBase"], _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsColumn' });
//# sourceMappingURL=DetailsColumn.js.map

/***/ }),

/***/ "ZdOb":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var GlobalClassNames = {
    root: 'ms-SearchBox',
    iconContainer: 'ms-SearchBox-iconContainer',
    icon: 'ms-SearchBox-icon',
    clearButton: 'ms-SearchBox-clearButton',
    field: 'ms-SearchBox-field',
};
function getStyles(props) {
    var _a, _b, _c, _d;
    var theme = props.theme, underlined = props.underlined, disabled = props.disabled, hasFocus = props.hasFocus, className = props.className, hasInput = props.hasInput, disableAnimation = props.disableAnimation;
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors, effects = theme.effects;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    // placeholder style constants
    var placeholderStyles = {
        color: semanticColors.inputPlaceholderText,
        opacity: 1,
    };
    var inputIconAlt = palette.neutralSecondary;
    var inputIconAltHovered = palette.neutralPrimary;
    var inputBorderDisabled = palette.neutralLighter;
    var inputBackgroundHovered = palette.neutralLighter;
    var inputBackgroundDisabled = palette.neutralLighter;
    return {
        root: [
            classNames.root,
            fonts.medium,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            {
                color: semanticColors.inputText,
                backgroundColor: semanticColors.inputBackground,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                // The 1px top and bottom padding ensure the input field does not overlap the border
                padding: '1px 0 1px 4px',
                borderRadius: effects.roundedCorner2,
                border: "1px solid " + semanticColors.inputBorder,
                height: 32,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderColor: 'WindowText',
                    },
                    _a[':hover'] = {
                        borderColor: semanticColors.inputBorderHovered,
                        selectors: (_b = {},
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                borderColor: 'Highlight',
                            },
                            _b),
                    },
                    _a[":hover ." + classNames.iconContainer] = {
                        color: semanticColors.inputIconHovered,
                    },
                    _a),
            },
            !hasFocus &&
                hasInput && {
                selectors: (_c = {},
                    _c[":hover ." + classNames.iconContainer] = {
                        width: 4,
                    },
                    _c[":hover ." + classNames.icon] = {
                        opacity: 0,
                    },
                    _c),
            },
            hasFocus && [
                'is-active',
                {
                    position: 'relative',
                },
                Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getInputFocusStyle"])(semanticColors.inputFocusBorderAlt, underlined ? 0 : effects.roundedCorner2, underlined ? 'borderBottom' : 'border'),
            ],
            disabled && [
                'is-disabled',
                {
                    borderColor: inputBorderDisabled,
                    backgroundColor: inputBackgroundDisabled,
                    pointerEvents: 'none',
                    cursor: 'default',
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            borderColor: 'GrayText',
                        },
                        _d),
                },
            ],
            underlined && [
                'is-underlined',
                {
                    borderWidth: '0 0 1px 0',
                    borderRadius: 0,
                    // Underlined SearchBox has a larger padding left to vertically align with the waffle in product
                    padding: '1px 0 1px 8px',
                },
            ],
            underlined &&
                disabled && {
                backgroundColor: 'transparent',
            },
            hasInput && 'can-clear',
            className,
        ],
        iconContainer: [
            classNames.iconContainer,
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                width: 32,
                textAlign: 'center',
                color: semanticColors.inputIcon,
                cursor: 'text',
            },
            hasFocus && {
                width: 4,
            },
            disabled && {
                color: semanticColors.inputIconDisabled,
            },
            !disableAnimation && {
                transition: "width " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1,
            },
        ],
        icon: [
            classNames.icon,
            {
                opacity: 1,
            },
            hasFocus && {
                opacity: 0,
            },
            !disableAnimation && {
                transition: "opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1 + " 0s",
            },
        ],
        clearButton: [
            classNames.clearButton,
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                flexBasis: '32px',
                flexShrink: 0,
                padding: 0,
                margin: '-1px 0px',
                selectors: {
                    '&:hover .ms-Button': {
                        backgroundColor: inputBackgroundHovered,
                    },
                    '&:hover .ms-Button-icon': {
                        color: inputIconAltHovered,
                    },
                    '.ms-Button': {
                        borderRadius: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? '1px 0 0 1px' : '0 1px 1px 0',
                    },
                    '.ms-Button-icon': {
                        color: inputIconAlt,
                    },
                },
            },
        ],
        field: [
            classNames.field,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderStyles"])(placeholderStyles),
            {
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: semanticColors.inputText,
                flex: '1 1 0px',
                // The default implicit value of 'auto' prevents the input from shrinking. Setting min-width to
                // 0px allows the input element to shrink to fit the container.
                minWidth: '0px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // This padding forces the text placement to round up.
                paddingBottom: 0.5,
                // This removes the IE specific clear button in the input since we implimented our own
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            disabled && {
                color: semanticColors.disabledText,
            },
        ],
    };
}
//# sourceMappingURL=SearchBox.styles.js.map

/***/ }),

/***/ "a+oq":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: HEADER_HEIGHT, getCellStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_HEIGHT", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellStyles", function() { return getCellStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");



// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    tooltipHost: 'ms-TooltipHost',
    root: 'ms-DetailsHeader',
    cell: 'ms-DetailsHeader-cell',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical',
    checkTooltip: 'ms-DetailsHeader-checkTooltip',
    check: 'ms-DetailsHeader-check',
};
var HEADER_HEIGHT = 42;
var getCellStyles = function (props) {
    var theme = props.theme, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return [
        classNames.cell,
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            color: semanticColors.bodyText,
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px",
            lineHeight: 'inherit',
            margin: '0',
            height: HEADER_HEIGHT,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
        },
    ];
};
var getStyles = function (props) {
    var _a, _b, _c, _d;
    var theme = props.theme, className = props.className, isAllSelected = props.isAllSelected, isResizingColumn = props.isResizingColumn, isSizing = props.isSizing, isAllCollapsed = props.isAllCollapsed, _e = props.cellStyleProps, cellStyleProps = _e === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _e;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var cellSizerFadeInStyles = {
        opacity: 1,
        transition: 'opacity 0.3s linear',
    };
    var cellStyles = getCellStyles(props);
    return {
        root: [
            classNames.root,
            fonts.small,
            {
                display: 'inline-block',
                background: colors.headerBackgroundColor,
                position: 'relative',
                minWidth: '100%',
                verticalAlign: 'top',
                height: HEADER_HEIGHT,
                lineHeight: HEADER_HEIGHT,
                whiteSpace: 'nowrap',
                boxSizing: 'content-box',
                paddingBottom: '1px',
                paddingTop: '16px',
                borderBottom: "1px solid " + semanticColors.bodyDivider,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {},
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["& ." + classNames.tooltipHost + " ." + classNames.checkTooltip] = {
                        display: 'block',
                    },
                    _a),
            },
            isAllSelected && classNames.isAllSelected,
            isResizingColumn && classNames.isResizingColumn,
            className,
        ],
        check: [
            classNames.check,
            {
                height: HEADER_HEIGHT,
            },
            {
                selectors: (_b = {},
                    _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _b),
            },
        ],
        cellWrapperPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
        },
        cellIsCheck: [
            cellStyles,
            classNames.cellIsCheck,
            {
                position: 'relative',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
            },
            isAllSelected && {
                opacity: 1,
            },
        ],
        cellIsGroupExpander: [
            cellStyles,
            {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                padding: 0,
                border: 'none',
                width: _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["SPACER_WIDTH"],
                color: palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: palette.neutralLighter,
                    },
                    ':active': {
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        cellIsActionable: {
            selectors: {
                ':hover': {
                    color: semanticColors.bodyText,
                    background: semanticColors.listHeaderBackgroundHovered,
                },
                ':active': {
                    background: semanticColors.listHeaderBackgroundPressed,
                },
            },
        },
        cellIsEmpty: {
            textOverflow: 'clip',
        },
        cellSizer: [
            classNames.cellSizer,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(),
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'ew-resize',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 'inherit',
                background: 'transparent',
                zIndex: 1,
                width: 16,
                selectors: (_c = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: colors.resizerColor,
                            opacity: 0,
                            left: '50%',
                        },
                        ':focus:after': cellSizerFadeInStyles,
                        ':hover:after': cellSizerFadeInStyles
                    },
                    _c["&." + classNames.isResizing + ":after"] = [
                        cellSizerFadeInStyles,
                        {
                            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                        },
                    ],
                    _c),
            },
        ],
        cellIsResizing: classNames.isResizing,
        cellSizerStart: {
            margin: '0 -8px',
        },
        cellSizerEnd: {
            margin: 0,
            marginLeft: -16,
        },
        collapseButton: [
            classNames.collapseButton,
            {
                transformOrigin: '50% 50%',
                transition: 'transform .1s linear',
            },
            isAllCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                },
        ],
        checkTooltip: classNames.checkTooltip,
        sizingOverlay: isSizing && {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            cursor: 'ew-resize',
            background: 'rgba(255, 255, 255, 0)',
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    background: 'transparent',
                    MsHighContrastAdjust: 'none',
                },
                _d),
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"],
        dropHintCircleStyle: [
            classNames.dropHintCircleStyle,
            {
                display: 'inline-block',
                visibility: 'hidden',
                position: 'absolute',
                bottom: 0,
                height: 9,
                width: 9,
                borderRadius: '50%',
                marginLeft: -5,
                top: 34,
                overflow: 'visible',
                zIndex: 10,
                border: "1px solid " + palette.themePrimary,
                background: palette.white,
            },
        ],
        dropHintCaretStyle: [
            classNames.dropHintCaretStyle,
            {
                display: 'none',
                position: 'absolute',
                top: -28,
                left: -6.5,
                fontSize: fonts.medium.fontSize,
                color: palette.themePrimary,
                overflow: 'visible',
                zIndex: 10,
            },
        ],
        dropHintLineStyle: [
            classNames.dropHintLineStyle,
            {
                display: 'none',
                position: 'absolute',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 42,
                width: 1,
                background: palette.themePrimary,
                zIndex: 10,
            },
        ],
        dropHintStyle: {
            display: 'inline-block',
            position: 'absolute',
        },
    };
};
//# sourceMappingURL=DetailsHeader.styles.js.map

/***/ }),

/***/ "ddaB":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return ColumnActionsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return ConstrainMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return ColumnDragEndLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return DetailsListLayoutMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return CheckboxVisibility; });
/**
 * Enum to describe how a particular column header behaves.
 * This is used to to specify the property `IColumn.columnActionsMode`.
 * If `IColumn.columnActionsMode` is undefined, it's equivalent to `ColumnActionsMode.clickable`.
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /** Renders the column header as disabled. */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /** Renders the column header as clickable. Default value. */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /** Renders the column header as clickable and displays the dropdown chevron. */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */
var ConstrainMode;
(function (ConstrainMode) {
    /** Lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /** Constrains the list to the given layout space. */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /** Drag ended outside of current list */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /** Drag ended within current list */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /** Drag ended on header */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /** Visible on hover. */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /** Visible always. */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /** Hide checkboxes. */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));
//# sourceMappingURL=DetailsList.types.js.map

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

/***/ "gS4/":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return SearchBoxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_4__);





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'SearchBox';
var SearchBoxBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SearchBoxBase, _super);
    function SearchBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._inputElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onClickFocus = function () {
            var inputElement = _this._inputElement.current;
            if (inputElement) {
                _this.focus();
                inputElement.selectionStart = inputElement.selectionEnd = 0;
            }
        };
        _this._onFocusCapture = function (ev) {
            _this.setState({
                hasFocus: true,
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this._onClearClick = function (ev) {
            var clearButtonProps = _this.props.clearButtonProps;
            if (clearButtonProps && clearButtonProps.onClick) {
                clearButtonProps.onClick(ev);
            }
            if (!ev.defaultPrevented) {
                _this._onClear(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    _this.props.onEscape && _this.props.onEscape(ev);
                    // Only call onClear if the search box has a value to clear. Otherwise, allow the Esc key
                    // to propagate from the empty search box to a parent element such as a dialog, etc.
                    if (_this.state.value && !ev.defaultPrevented) {
                        _this._onClear(ev);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter:
                    if (_this.props.onSearch) {
                        _this.props.onSearch(_this.state.value);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                default:
                    _this.props.onKeyDown && _this.props.onKeyDown(ev);
                    if (ev.defaultPrevented) {
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this._onBlur = function (ev) {
            _this.setState({
                hasFocus: false,
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onInputChange = function (ev) {
            var value = ev.target.value;
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value });
            _this._callOnChange(ev, value);
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            labelText: 'placeholder',
            defaultValue: 'value',
        });
        _this._latestValue = props.value || '';
        _this._fallbackId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])(COMPONENT_NAME);
        _this.state = {
            value: _this._latestValue,
            hasFocus: false,
        };
        return _this;
    }
    SearchBoxBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            // If the user passes in null, substitute an empty string
            // (passing null is not allowed per typings, but users might do it anyway)
            this.setState({
                value: newProps.value || '',
            });
        }
    };
    SearchBoxBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, className = _a.className, disabled = _a.disabled, underlined = _a.underlined, styles = _a.styles, 
        // eslint-disable-next-line deprecation/deprecation
        labelText = _a.labelText, theme = _a.theme, clearButtonProps = _a.clearButtonProps, disableAnimation = _a.disableAnimation, iconProps = _a.iconProps, role = _a.role, _b = _a.id, id = _b === void 0 ? this._fallbackId : _b;
        var _c = this.state, value = _c.value, hasFocus = _c.hasFocus;
        var placeholderValue = placeholder !== undefined ? placeholder : labelText;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0,
            disableAnimation: disableAnimation,
        });
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["inputProperties"], [
            'className',
            'placeholder',
            'onFocus',
            'onBlur',
            'value',
            'role',
        ]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: role, ref: this._rootElement, className: classNames.root, onFocusCapture: this._onFocusCapture },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.iconContainer, onClick: this._onClickFocus, "aria-hidden": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ iconName: "Search" }, iconProps, { className: classNames.icon }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nativeProps, { id: id, className: classNames.field, placeholder: placeholderValue, onChange: this._onInputChange, onInput: this._onInputChange, onBlur: this._onBlur, onKeyDown: this._onKeyDown, value: value, disabled: disabled, role: "searchbox", "aria-label": ariaLabel, ref: this._inputElement })),
            value.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.clearButton },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ onBlur: this._onBlur, styles: { root: { height: 'auto' }, icon: { fontSize: '12px' } }, iconProps: { iconName: 'Clear' } }, clearButtonProps, { onClick: this._onClearClick }))))));
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBoxBase.prototype.focus = function () {
        if (this._inputElement.current) {
            this._inputElement.current.focus();
        }
    };
    /**
     * Returns whether or not the SearchBox has focus
     */
    SearchBoxBase.prototype.hasFocus = function () {
        return !!this.state.hasFocus;
    };
    SearchBoxBase.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: '',
            });
            this._callOnChange(undefined, '');
            ev.stopPropagation();
            ev.preventDefault();
            this.focus();
        }
    };
    SearchBoxBase.prototype._callOnChange = function (ev, newValue) {
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(ev, newValue);
        }
    };
    SearchBoxBase.defaultProps = {
        disableAnimation: false,
        clearButtonProps: { ariaLabel: 'Clear text' },
    };
    return SearchBoxBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SearchBox.base.js.map

/***/ }),

/***/ "gwC2":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Check/Check.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: CheckGlobalClassNames, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckGlobalClassNames", function() { return CheckGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var CheckGlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check',
    /** Must be manually applied to the parent element of the check. */
    checkHost: 'ms-Check-checkHost',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    // eslint-disable-next-line deprecation/deprecation
    var _f = props.height, height = _f === void 0 ? props.checkBoxHeight || '18px' : _f, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(CheckGlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: height,
        position: 'absolute',
        left: 0,
        top: 0,
        width: height,
        height: height,
        textAlign: 'center',
        verticalAlign: 'middle',
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: height,
                height: height,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: (_a = {
                        ':before': {
                            content: '""',
                            position: 'absolute',
                            top: '1px',
                            right: '1px',
                            bottom: '1px',
                            left: '1px',
                            borderRadius: '50%',
                            opacity: 1,
                            background: semanticColors.bodyBackground,
                        }
                    },
                    _a["." + classNames.checkHost + ":hover &, ." + classNames.checkHost + ":focus &, &:hover, &:focus"] = {
                        opacity: 1,
                    },
                    _a),
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    background: 'Window',
                                },
                                _b),
                        },
                    },
                },
            ],
            className,
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralSecondary,
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            checked && {
                color: palette.white,
            },
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralSecondary,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].medium,
                left: isRTL ? '-0.5px' : '.5px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1,
                        }
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        MsHighContrastAdjust: 'none',
                    },
                    _d),
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: 'none',
                        color: 'WindowText',
                    },
                    _e),
            },
        ],
        checkHost: classNames.checkHost,
    };
};
//# sourceMappingURL=Check.styles.js.map

/***/ }),

/***/ "jkXB":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return DetailsRowCheck; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__);






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DetailsRowCheckBase = function (props) {
    var _a = props.isVisible, isVisible = _a === void 0 ? false : _a, _b = props.canSelect, canSelect = _b === void 0 ? false : _b, _c = props.anySelected, anySelected = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, _e = props.isHeader, isHeader = _e === void 0 ? false : _e, className = props.className, checkClassName = props.checkClassName, styles = props.styles, theme = props.theme, compact = props.compact, onRenderDetailsCheckbox = props.onRenderDetailsCheckbox, _f = props.useFastIcons, useFastIcons = _f === void 0 ? true : _f, // must be removed from buttonProps
    buttonProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["isVisible", "canSelect", "anySelected", "selected", "isHeader", "className", "checkClassName", "styles", "theme", "compact", "onRenderDetailsCheckbox", "useFastIcons"]);
    var defaultCheckboxRender = useFastIcons ? _fastDefaultCheckboxRender : _defaultCheckboxRender;
    var onRenderCheckbox = onRenderDetailsCheckbox
        ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__["composeRenderFunction"])(onRenderDetailsCheckbox, defaultCheckboxRender)
        : defaultCheckboxRender;
    var classNames = getClassNames(styles, {
        theme: theme,
        canSelect: canSelect,
        selected: selected,
        anySelected: anySelected,
        className: className,
        isHeader: isHeader,
        isVisible: isVisible,
        compact: compact,
    });
    var detailsCheckboxProps = {
        checked: selected,
        theme: theme,
    };
    return canSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { role: "checkbox", 
        // eslint-disable-next-line deprecation/deprecation
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check), "aria-checked": selected, "data-selection-toggle": true, "data-automationid": "DetailsRowCheck" }), onRenderCheckbox(detailsCheckboxProps))) : (
    // eslint-disable-next-line deprecation/deprecation
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check) })));
};
var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
function _defaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { checked: checkboxProps.checked });
}
function _fastDefaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
}
var DetailsRowCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(DetailsRowCheckBase, _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], undefined, { scope: 'DetailsRowCheck' }, true);
//# sourceMappingURL=DetailsRowCheck.js.map

/***/ }),

/***/ "kMLv":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/SearchBox/index.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: SearchBox, SearchBoxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox */ "Ldz5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _SearchBox__WEBPACK_IMPORTED_MODULE_0__["SearchBox"]; });

/* harmony import */ var _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.base */ "gS4/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return _SearchBox_base__WEBPACK_IMPORTED_MODULE_1__["SearchBoxBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kVD3":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/GroupedList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GroupedList/index */ "y86Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupShowAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupSpacer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListSection"]; });


//# sourceMappingURL=GroupedList.js.map

/***/ }),

/***/ "lbay":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");




var GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
    nearIcon: 'ms-DetailsColumn-nearIcon',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _b = props.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _b, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8,
    };
    var borderWhileDragging = {
        outline: "1px solid " + palette.themePrimary,
    };
    var borderAfterDragOrDrop = {
        outlineColor: 'transparent',
    };
    return {
        root: [
            Object(_DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__["getCellStyles"])(props),
            fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered,
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed,
                        },
                    },
                },
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip',
                },
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block',
                    },
                },
            },
            headerClassName,
        ],
        gripperBarVerticalStyle: {
            display: 'none',
            position: 'absolute',
            textAlign: 'left',
            color: palette.neutralTertiary,
            left: 1,
        },
        nearIcon: [classNames.nearIcon, nearIconStyle],
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1,
            },
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1,
            },
            iconClassName,
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 6,
                verticalAlign: 'middle',
                fontSize: fonts.small.fontSize,
            },
        ],
        cellTitle: [
            classNames.cellTitle,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px" }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse',
                }
                : {})),
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                fontSize: fonts.medium.fontSize,
            },
            isIconOnly && {
                selectors: (_a = {},
                    _a["." + classNames.nearIcon] = {
                        paddingLeft: 0,
                    },
                    _a),
            },
        ],
        cellTooltip: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"],
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline " + transitionDurationDrag + "ms ease" }],
        borderAfterDropping: borderWhileDragging,
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  " + transitionDurationDrop + "ms ease" }],
    };
};
//# sourceMappingURL=DetailsColumn.styles.js.map

/***/ }),

/***/ "oao7":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupSpacer.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: SPACER_WIDTH, GroupSpacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACER_WIDTH", function() { return SPACER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return GroupSpacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SPACER_WIDTH = 36;
var GroupSpacer = function (props) {
    var count = props.count, _a = props.indentWidth, indentWidth = _a === void 0 ? SPACER_WIDTH : _a, _b = props.role, role = _b === void 0 ? 'presentation' : _b;
    var width = count * indentWidth;
    return count > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-GroupSpacer', style: { display: 'inline-block', width: width }, role: role })) : null;
};
//# sourceMappingURL=GroupSpacer.js.map

/***/ }),

/***/ "pVr0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/dragdrop/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DragDropHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragDropHelper */ "uGAW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__["DragDropHelper"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pf3H":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeaderBase", function() { return GroupHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Spinner */ "fyAn");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var GroupHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupHeaderBase, _super);
    function GroupHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleCollapse = function () {
            var _a = _this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
            var isCollapsed = _this.state.isCollapsed;
            var newCollapsed = !isCollapsed;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
            _this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible,
            });
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
        };
        _this._onKeyUp = function (ev) {
            var _a = _this.props, group = _a.group, onGroupHeaderKeyUp = _a.onGroupHeaderKeyUp;
            if (onGroupHeaderKeyUp) {
                onGroupHeaderKeyUp(ev, group);
            }
            if (!ev.defaultPrevented) {
                var shouldOpen = _this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, _this.props.theme);
                var shouldClose = !_this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left, _this.props.theme);
                if (shouldClose || shouldOpen) {
                    _this._toggleCollapse();
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
        };
        _this._onToggleClick = function (ev) {
            _this._toggleCollapse();
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onToggleSelectGroupClick = function (ev) {
            var _a = _this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
            if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onHeaderClick = function () {
            var _a = _this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
            if (onGroupHeaderClick) {
                onGroupHeaderClick(group);
            }
            else if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
        };
        _this._onRenderTitle = function (props) {
            var group = props.group, ariaColSpan = props.ariaColSpan;
            if (!group) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.title, role: "gridcell", "aria-colspan": ariaColSpan },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, group.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.headerCount },
                    "(",
                    group.count,
                    group.hasMoreData && '+',
                    ")")));
        };
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false,
        };
        return _this;
    }
    GroupHeaderBase.getDerivedStateFromProps = function (nextProps, previousState) {
        if (nextProps.group) {
            var newCollapsed = nextProps.group.isCollapsed;
            var isGroupLoading = nextProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(nextProps.group);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { isCollapsed: newCollapsed || false, isLoadingVisible: newLoadingVisible || false });
        }
        return previousState;
    };
    GroupHeaderBase.prototype.render = function () {
        var _a = this.props, group = _a.group, _b = _a.groupLevel, groupLevel = _b === void 0 ? 0 : _b, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, 
        // eslint-disable-next-line deprecation/deprecation
        _c = _a.isSelected, 
        // eslint-disable-next-line deprecation/deprecation
        isSelected = _c === void 0 ? false : _c, _d = _a.selected, selected = _d === void 0 ? false : _d, indentWidth = _a.indentWidth, _e = _a.onRenderTitle, onRenderTitle = _e === void 0 ? this._onRenderTitle : _e, onRenderGroupHeaderCheckbox = _a.onRenderGroupHeaderCheckbox, _f = _a.isCollapsedGroupSelectVisible, isCollapsedGroupSelectVisible = _f === void 0 ? true : _f, expandButtonProps = _a.expandButtonProps, expandButtonIcon = _a.expandButtonIcon, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, compact = _a.compact, ariaPosInSet = _a.ariaPosInSet, ariaSetSize = _a.ariaSetSize, useFastIcons = _a.useFastIcons;
        var defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;
        var onRenderCheckbox = onRenderGroupHeaderCheckbox
            ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["composeRenderFunction"])(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
            : defaultCheckboxRender;
        var _g = this.state, isCollapsed = _g.isCollapsed, isLoadingVisible = _g.isLoadingVisible;
        var canSelectGroup = selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = selected || isSelected;
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            selected: currentlySelected,
            isCollapsed: isCollapsed,
            compact: compact,
        });
        if (!group) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, role: "row", "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, "data-is-focusable": true, onKeyUp: this._onKeyUp, "aria-label": group.ariaLabel || group.name, "aria-expanded": !this.state.isCollapsed, "aria-level": groupLevel + 1 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.groupHeaderContainer, role: "presentation" },
                isSelectionCheckVisible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.check, role: "checkbox", "aria-checked": currentlySelected, "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick }, selectAllButtonProps), onRenderCheckbox({ checked: currentlySelected, theme: theme }, onRenderCheckbox)))) : (selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: 1 })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.dropIcon, role: "presentation" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: "Tag" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.expand, onClick: this._onToggleClick, "aria-expanded": !this.state.isCollapsed }, expandButtonProps),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: this._classNames.expandIsCollapsed, iconName: expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed') }))),
                onRenderTitle(this.props, this._onRenderTitle),
                isLoadingVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], { label: loadingText }))));
    };
    GroupHeaderBase.prototype._defaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { checked: checkboxProps.checked });
    };
    GroupHeaderBase.prototype._fastDefaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
    };
    GroupHeaderBase.defaultProps = {
        expandButtonProps: { 'aria-label': 'expand collapse group' },
    };
    return GroupHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
//# sourceMappingURL=GroupHeader.base.js.map

/***/ }),

/***/ "q1YR":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.base.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollablePaneBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneBase", function() { return ScrollablePaneBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _ScrollablePane_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollablePane.types */ "rpk9");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var ScrollablePaneBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScrollablePaneBase, _super);
    function ScrollablePaneBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._stickyAboveRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._stickyBelowRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._contentContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.subscribe = function (handler) {
            _this._subscribers.add(handler);
        };
        _this.unsubscribe = function (handler) {
            _this._subscribers.delete(handler);
        };
        _this.addSticky = function (sticky) {
            _this._stickies.add(sticky);
            // If ScrollablePane is mounted, then sort sticky in correct place
            if (_this.contentContainer) {
                sticky.setDistanceFromTop(_this.contentContainer);
                _this.sortSticky(sticky);
            }
        };
        _this.removeSticky = function (sticky) {
            _this._stickies.delete(sticky);
            _this._removeStickyFromContainers(sticky);
            _this.notifySubscribers();
        };
        _this.sortSticky = function (sticky, sortAgain) {
            if (_this.stickyAbove && _this.stickyBelow) {
                if (sortAgain) {
                    _this._removeStickyFromContainers(sticky);
                }
                if (sticky.canStickyTop && sticky.stickyContentTop) {
                    _this._addToStickyContainer(sticky, _this.stickyAbove, sticky.stickyContentTop);
                }
                if (sticky.canStickyBottom && sticky.stickyContentBottom) {
                    _this._addToStickyContainer(sticky, _this.stickyBelow, sticky.stickyContentBottom);
                }
            }
        };
        _this.updateStickyRefHeights = function () {
            var stickyItems = _this._stickies;
            var stickyTopHeight = 0;
            var stickyBottomHeight = 0;
            stickyItems.forEach(function (sticky) {
                var _a = sticky.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
                if (sticky.nonStickyContent) {
                    if (isStickyTop) {
                        stickyTopHeight += sticky.nonStickyContent.offsetHeight;
                    }
                    if (isStickyBottom) {
                        stickyBottomHeight += sticky.nonStickyContent.offsetHeight;
                    }
                    _this._checkStickyStatus(sticky);
                }
            });
            _this.setState({
                stickyTopHeight: stickyTopHeight,
                stickyBottomHeight: stickyBottomHeight,
            });
        };
        _this.notifySubscribers = function () {
            if (_this.contentContainer) {
                _this._subscribers.forEach(function (handle) {
                    // this.stickyBelow is passed in for calculating distance to determine Sticky status
                    handle(_this.contentContainer, _this.stickyBelow);
                });
            }
        };
        _this.getScrollPosition = function () {
            if (_this.contentContainer) {
                return _this.contentContainer.scrollTop;
            }
            return 0;
        };
        _this.syncScrollSticky = function (sticky) {
            if (sticky && _this.contentContainer) {
                sticky.syncScroll(_this.contentContainer);
            }
        };
        _this._getScrollablePaneContext = function () {
            return {
                scrollablePane: {
                    subscribe: _this.subscribe,
                    unsubscribe: _this.unsubscribe,
                    addSticky: _this.addSticky,
                    removeSticky: _this.removeSticky,
                    updateStickyRefHeights: _this.updateStickyRefHeights,
                    sortSticky: _this.sortSticky,
                    notifySubscribers: _this.notifySubscribers,
                    syncScrollSticky: _this.syncScrollSticky,
                },
            };
        };
        _this._addToStickyContainer = function (sticky, stickyContainer, stickyContentToAdd) {
            // If there's no children, append child to list, otherwise, sort though array and append at correct position
            if (!stickyContainer.children.length) {
                stickyContainer.appendChild(stickyContentToAdd);
            }
            else {
                // If stickyContentToAdd isn't a child element of target container, then append
                if (!stickyContainer.contains(stickyContentToAdd)) {
                    var stickyChildrenElements_1 = [].slice.call(stickyContainer.children);
                    var stickyList_1 = [];
                    // Get stickies.  Filter by canStickyTop/Bottom, then sort by distance from top, and then
                    // filter by elements that are in the stickyContainer already.
                    _this._stickies.forEach(function (stickyItem) {
                        if (stickyContainer === _this.stickyAbove && sticky.canStickyTop) {
                            stickyList_1.push(stickyItem);
                        }
                        else if (sticky.canStickyBottom) {
                            stickyList_1.push(stickyItem);
                        }
                    });
                    var stickyListSorted = stickyList_1
                        .sort(function (a, b) {
                        return (a.state.distanceFromTop || 0) - (b.state.distanceFromTop || 0);
                    })
                        .filter(function (item) {
                        var stickyContent = stickyContainer === _this.stickyAbove ? item.stickyContentTop : item.stickyContentBottom;
                        if (stickyContent) {
                            return stickyChildrenElements_1.indexOf(stickyContent) > -1;
                        }
                        return false;
                    });
                    // Get first element that has a distance from top that is further than our sticky that is being added
                    var targetStickyToAppendBefore = undefined;
                    for (var _i = 0, stickyListSorted_1 = stickyListSorted; _i < stickyListSorted_1.length; _i++) {
                        var stickyListItem = stickyListSorted_1[_i];
                        if ((stickyListItem.state.distanceFromTop || 0) >= (sticky.state.distanceFromTop || 0)) {
                            targetStickyToAppendBefore = stickyListItem;
                            break;
                        }
                    }
                    // If target element to append before is known, grab respective stickyContentTop/Bottom element
                    // and insert before
                    var targetContainer = null;
                    if (targetStickyToAppendBefore) {
                        targetContainer =
                            stickyContainer === _this.stickyAbove
                                ? targetStickyToAppendBefore.stickyContentTop
                                : targetStickyToAppendBefore.stickyContentBottom;
                    }
                    stickyContainer.insertBefore(stickyContentToAdd, targetContainer);
                }
            }
        };
        _this._removeStickyFromContainers = function (sticky) {
            if (_this.stickyAbove && sticky.stickyContentTop && _this.stickyAbove.contains(sticky.stickyContentTop)) {
                _this.stickyAbove.removeChild(sticky.stickyContentTop);
            }
            if (_this.stickyBelow && sticky.stickyContentBottom && _this.stickyBelow.contains(sticky.stickyContentBottom)) {
                _this.stickyBelow.removeChild(sticky.stickyContentBottom);
            }
        };
        _this._onWindowResize = function () {
            var scrollbarWidth = _this._getScrollbarWidth();
            var scrollbarHeight = _this._getScrollbarHeight();
            _this.setState({
                scrollbarWidth: scrollbarWidth,
                scrollbarHeight: scrollbarHeight,
            });
            _this.notifySubscribers();
        };
        _this._getStickyContainerStyle = function (height, isTop) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ height: height }, (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)
                ? {
                    right: '0',
                    left: (_this.state.scrollbarWidth || _this._getScrollbarWidth() || 0) + "px",
                }
                : {
                    left: '0',
                    right: (_this.state.scrollbarWidth || _this._getScrollbarWidth() || 0) + "px",
                })), (isTop
                ? {
                    top: '0',
                }
                : {
                    bottom: (_this.state.scrollbarHeight || _this._getScrollbarHeight() || 0) + "px",
                }));
        };
        _this._onScroll = function () {
            var contentContainer = _this.contentContainer;
            if (contentContainer) {
                _this._stickies.forEach(function (sticky) {
                    sticky.syncScroll(contentContainer);
                });
            }
            _this._notifyThrottled();
        };
        _this._subscribers = new Set();
        _this._stickies = new Set();
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            stickyTopHeight: 0,
            stickyBottomHeight: 0,
            scrollbarWidth: 0,
            scrollbarHeight: 0,
        };
        _this._notifyThrottled = _this._async.throttle(_this.notifySubscribers, 50);
        return _this;
    }
    Object.defineProperty(ScrollablePaneBase.prototype, "root", {
        get: function () {
            return this._root.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "stickyAbove", {
        get: function () {
            return this._stickyAboveRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "stickyBelow", {
        get: function () {
            return this._stickyBelowRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "contentContainer", {
        get: function () {
            return this._contentContainer.current;
        },
        enumerable: true,
        configurable: true
    });
    ScrollablePaneBase.prototype.componentDidMount = function () {
        var _this = this;
        var initialScrollPosition = this.props.initialScrollPosition;
        this._events.on(this.contentContainer, 'scroll', this._onScroll);
        this._events.on(window, 'resize', this._onWindowResize);
        if (this.contentContainer && initialScrollPosition) {
            this.contentContainer.scrollTop = initialScrollPosition;
        }
        // Set sticky distances from top property, then sort in correct order and notify subscribers
        this.setStickiesDistanceFromTop();
        this._stickies.forEach(function (sticky) {
            _this.sortSticky(sticky);
        });
        this.notifySubscribers();
        if ('MutationObserver' in window) {
            this._mutationObserver = new MutationObserver(function (mutation) {
                // Function to check if mutation is occuring in stickyAbove or stickyBelow
                function checkIfMutationIsSticky(mutationRecord) {
                    if (this.stickyAbove !== null && this.stickyBelow !== null) {
                        return this.stickyAbove.contains(mutationRecord.target) || this.stickyBelow.contains(mutationRecord.target);
                    }
                    return false;
                }
                // Compute the scrollbar height, which might have changed if the content's width changed and caused overflow
                var scrollbarHeight = _this._getScrollbarHeight();
                // If the scrollbar height changed, update state so it's postioned correctly below sticky footer
                if (scrollbarHeight !== _this.state.scrollbarHeight) {
                    _this.setState({
                        scrollbarHeight: scrollbarHeight,
                    });
                }
                // Notify subscribers again to re-check whether Sticky should be Sticky'd or not
                _this.notifySubscribers();
                // If mutation occurs in sticky header or footer, then update sticky top/bottom heights
                if (mutation.some(checkIfMutationIsSticky.bind(_this))) {
                    _this.updateStickyRefHeights();
                }
                else {
                    // If mutation occurs in scrollable region, then find Sticky it belongs to and force update
                    var stickyList_2 = [];
                    _this._stickies.forEach(function (sticky) {
                        if (sticky.root && sticky.root.contains(mutation[0].target)) {
                            stickyList_2.push(sticky);
                        }
                    });
                    if (stickyList_2.length) {
                        stickyList_2.forEach(function (sticky) {
                            sticky.forceUpdate();
                        });
                    }
                }
            });
            if (this.root) {
                this._mutationObserver.observe(this.root, {
                    childList: true,
                    attributes: true,
                    subtree: true,
                    characterData: true,
                });
            }
        }
    };
    ScrollablePaneBase.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
        if (this._mutationObserver) {
            this._mutationObserver.disconnect();
        }
    };
    // Only updates if props/state change, just to prevent excessive setState with updateStickyRefHeights
    ScrollablePaneBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.children !== nextProps.children ||
            this.props.initialScrollPosition !== nextProps.initialScrollPosition ||
            this.props.className !== nextProps.className ||
            this.state.stickyTopHeight !== nextState.stickyTopHeight ||
            this.state.stickyBottomHeight !== nextState.stickyBottomHeight ||
            this.state.scrollbarWidth !== nextState.scrollbarWidth ||
            this.state.scrollbarHeight !== nextState.scrollbarHeight);
    };
    ScrollablePaneBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var initialScrollPosition = this.props.initialScrollPosition;
        if (this.contentContainer &&
            typeof initialScrollPosition === 'number' &&
            prevProps.initialScrollPosition !== initialScrollPosition) {
            this.contentContainer.scrollTop = initialScrollPosition;
        }
        // Update subscribers when stickyTopHeight/stickyBottomHeight changes
        if (prevState.stickyTopHeight !== this.state.stickyTopHeight ||
            prevState.stickyBottomHeight !== this.state.stickyBottomHeight) {
            this.notifySubscribers();
        }
        this._async.setTimeout(this._onWindowResize, 0);
    };
    ScrollablePaneBase.prototype.render = function () {
        var _a = this.props, className = _a.className, theme = _a.theme, styles = _a.styles;
        var _b = this.state, stickyTopHeight = _b.stickyTopHeight, stickyBottomHeight = _b.stickyBottomHeight;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            scrollbarVisibility: this.props.scrollbarVisibility,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), { ref: this._root, className: classNames.root }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-hidden": "true", ref: this._stickyAboveRef, className: classNames.stickyAbove, style: this._getStickyContainerStyle(stickyTopHeight, true) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._contentContainer, className: classNames.contentContainer, "data-is-scrollable": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ScrollablePane_types__WEBPACK_IMPORTED_MODULE_3__["ScrollablePaneContext"].Provider, { value: this._getScrollablePaneContext() }, this.props.children)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-hidden": "true", className: classNames.stickyBelow, style: this._getStickyContainerStyle(stickyBottomHeight, false) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._stickyBelowRef, className: classNames.stickyBelowItems }))));
    };
    ScrollablePaneBase.prototype.setStickiesDistanceFromTop = function () {
        var _this = this;
        if (this.contentContainer) {
            this._stickies.forEach(function (sticky) {
                sticky.setDistanceFromTop(_this.contentContainer);
            });
        }
    };
    ScrollablePaneBase.prototype.forceLayoutUpdate = function () {
        this._onWindowResize();
    };
    ScrollablePaneBase.prototype._checkStickyStatus = function (sticky) {
        if (this.stickyAbove && this.stickyBelow && this.contentContainer && sticky.nonStickyContent) {
            // If sticky is sticky, then append content to appropriate container
            if (sticky.state.isStickyTop || sticky.state.isStickyBottom) {
                if (sticky.state.isStickyTop &&
                    !this.stickyAbove.contains(sticky.nonStickyContent) &&
                    sticky.stickyContentTop) {
                    sticky.addSticky(sticky.stickyContentTop);
                }
                if (sticky.state.isStickyBottom &&
                    !this.stickyBelow.contains(sticky.nonStickyContent) &&
                    sticky.stickyContentBottom) {
                    sticky.addSticky(sticky.stickyContentBottom);
                }
            }
            else if (!this.contentContainer.contains(sticky.nonStickyContent)) {
                // Reset sticky if it's not sticky and not in the contentContainer element
                sticky.resetSticky();
            }
        }
    };
    ScrollablePaneBase.prototype._getScrollbarWidth = function () {
        var contentContainer = this.contentContainer;
        return contentContainer ? contentContainer.offsetWidth - contentContainer.clientWidth : 0;
    };
    ScrollablePaneBase.prototype._getScrollbarHeight = function () {
        var contentContainer = this.contentContainer;
        return contentContainer ? contentContainer.offsetHeight - contentContainer.clientHeight : 0;
    };
    return ScrollablePaneBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ScrollablePane.base.js.map

/***/ }),

/***/ "qNG2":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollablePane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollablePane", function() { return ScrollablePane; });
/* harmony import */ var _ScrollablePane_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollablePane.styles */ "Z1BT");
/* harmony import */ var _ScrollablePane_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollablePane.base */ "q1YR");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var ScrollablePane = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_ScrollablePane_base__WEBPACK_IMPORTED_MODULE_1__["ScrollablePaneBase"], _ScrollablePane_styles__WEBPACK_IMPORTED_MODULE_0__["getStyles"], undefined, { scope: 'ScrollablePane' });
//# sourceMappingURL=ScrollablePane.js.map

/***/ }),

/***/ "qvd/":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpiration.resx.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"userExpirationHeaderInterval":"0||1||2-","Header":"Your organization does not require guests to lose access based on an expiration date.||Your organization requires guests to lose access to this site after {0} day.||Your organization requires guests to lose access to this site after {0} days.","userExpiration":"Access Expiration","Back":"Back","Name":"Name","AscendingName":"Sorted A to Z","DescendingName":"Sorted Z to A","Expiration":"Expiration","AscendingDate":"Sorted closest to furthest expiration date.","DescendingDate":"Sorted furthest to closest expiration date.","NoUsers":"There are no guests expiring.","NoUsersFound":"No guests found. Try your search again.","Search":"Search","ToggleSelection":"Toggle Selection","SelectAll":"Toggle selection for all loaded users","Extend":"Extend","ClearExpiration":"Clear expiration","ExpireTitle":"Are you sure you want to remove access to this site?","ExpireMessage":"This will remove access for {0} ({1}) from this site and contents.","ExpireMessagePlural":"This will remove access for {0} user from this site and contents.||This will remove access for {0} users from this site and contents.","ExpireMessageInterval":"1||2-","ExpireConfirm":"Yes, remove","Cancel":"Cancel","ExtendTitle":"Are you sure you want to extend access to this site?","ExtendMessage":"This will extend access to this site and contents for {0} ({1}) to {2}.","ExtendMessagePlural":"This will extend access to this site and contents for {0} user to {1}.||This will extend access to this site and contents for {0} users to {1}.","ExtendMessageInterval":"1||2-","ExtendConfirm":"Yes, extend","ClearTitle":"Are you sure you want to clear the expiration date?","ClearMessage":"{0} ({1}) will continue to have access to this site and its contents and it will not expire.","ClearMessagePlural":"{0} user will continue to have access to this site and its contents and it will not expire.||{0} users will continue to have access to this site and its contents and it will not expire.","ClearMessageInterval":"1||2-","ClearConfirm":"Yes, clear","DaysLeft":"{0} day left||{0} days left","DaysLeftInterval":"1||2-","Expiring":"Removing...","Extending":"Extending...","Clearing":"Clearing...","ExpiresTooltip":"Expires {0}","RemoveAccess":"Remove access","ExtendAccess":"Extend access","NoPolicySetInfo":"Some guests will lose access through a previous expiration policy. You can clear these expirations individually or clear them all.","AdminWontExpireInfo":"This user is a site admin so they won\u0027t automatically be removed from the site."};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "r2Go":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowFields.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return DetailsRowFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var getCellText = function (item, column) {
    var value = item && column && column.fieldName ? item[column.fieldName] : '';
    if (value === null || value === undefined) {
        value = '';
    }
    if (typeof value === 'boolean') {
        return value.toString();
    }
    return value;
};
/**
 * Component for rendering a row's cells in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsRowFields = function (props) {
    var columns = props.columns, columnStartIndex = props.columnStartIndex, rowClassNames = props.rowClassNames, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a, item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, cellsByColumn = props.cellsByColumn, enableUpdateAnimations = props.enableUpdateAnimations;
    var cellValueKeysRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var cellValueKeys = cellValueKeysRef.current || (cellValueKeysRef.current = {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: rowClassNames.fields, "data-automationid": "DetailsRowFields", role: "presentation" }, columns.map(function (column, columnIndex) {
        var width = typeof column.calculatedWidth === 'undefined'
            ? 'auto'
            : column.calculatedWidth +
                cellStyleProps.cellLeftPadding +
                cellStyleProps.cellRightPadding +
                (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
        var _a = column.onRender, onRender = _a === void 0 ? onRenderItemColumn : _a, _b = column.getValueKey, getValueKey = _b === void 0 ? getCellValueKey : _b;
        var cellContentsRender = cellsByColumn && column.key in cellsByColumn
            ? cellsByColumn[column.key]
            : onRender
                ? onRender(item, itemIndex, column)
                : getCellText(item, column);
        var previousValueKey = cellValueKeys[column.key];
        var cellValueKey = enableUpdateAnimations && getValueKey ? getValueKey(item, itemIndex, column) : undefined;
        var showAnimation = false;
        if (cellValueKey !== undefined && previousValueKey !== undefined && cellValueKey !== previousValueKey) {
            showAnimation = true;
        }
        cellValueKeys[column.key] = cellValueKey;
        // generate a key that auto-dirties when content changes, to force the container to re-render,
        // to trigger animation
        var key = "" + column.key + (cellValueKey !== undefined ? "-" + cellValueKey : '');
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, role: column.isRowHeader ? 'rowheader' : 'gridcell', "aria-readonly": true, "aria-colindex": columnIndex + columnStartIndex + 1, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["css"])(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded, showAnimation && rowClassNames.cellAnimation), style: { width: width }, "data-automationid": "DetailsRowCell", "data-automation-key": column.key }, cellContentsRender));
    })));
};
//# sourceMappingURL=DetailsRowFields.js.map

/***/ }),

/***/ "ri7b":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Sticky/Sticky.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _ScrollablePane_ScrollablePane_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ScrollablePane/ScrollablePane.types */ "rpk9");
/* harmony import */ var _Sticky_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sticky.types */ "x+Ih");






var Sticky = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Sticky, _super);
    function Sticky(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._stickyContentTop = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._stickyContentBottom = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._nonStickyContent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._placeHolder = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.syncScroll = function (container) {
            var nonStickyContent = _this.nonStickyContent;
            if (nonStickyContent && _this.props.isScrollSynced) {
                nonStickyContent.scrollLeft = container.scrollLeft;
            }
        };
        // eslint-disable-next-line deprecation/deprecation
        _this._getContext = function () { return _this.context; };
        _this._onScrollEvent = function (container, footerStickyContainer) {
            if (_this.root && _this.nonStickyContent) {
                var distanceFromTop = _this._getNonStickyDistanceFromTop(container);
                var isStickyTop = false;
                var isStickyBottom = false;
                if (_this.canStickyTop) {
                    var distanceToStickTop = distanceFromTop - _this._getStickyDistanceFromTop();
                    isStickyTop = distanceToStickTop < container.scrollTop;
                }
                // Can sticky bottom if the scrollablePane - total sticky footer height is smaller than the sticky's distance
                // from the top of the pane
                if (_this.canStickyBottom && container.clientHeight - footerStickyContainer.offsetHeight <= distanceFromTop) {
                    isStickyBottom =
                        distanceFromTop - Math.floor(container.scrollTop) >=
                            _this._getStickyDistanceFromTopForFooter(container, footerStickyContainer);
                }
                if (document.activeElement &&
                    _this.nonStickyContent.contains(document.activeElement) &&
                    (_this.state.isStickyTop !== isStickyTop || _this.state.isStickyBottom !== isStickyBottom)) {
                    _this._activeElement = document.activeElement;
                }
                else {
                    _this._activeElement = undefined;
                }
                _this.setState({
                    isStickyTop: _this.canStickyTop && isStickyTop,
                    isStickyBottom: isStickyBottom,
                    distanceFromTop: distanceFromTop,
                });
            }
        };
        _this._getStickyDistanceFromTop = function () {
            var distance = 0;
            if (_this.stickyContentTop) {
                distance = _this.stickyContentTop.offsetTop;
            }
            return distance;
        };
        _this._getStickyDistanceFromTopForFooter = function (container, footerStickyVisibleContainer) {
            var distance = 0;
            if (_this.stickyContentBottom) {
                distance =
                    container.clientHeight - footerStickyVisibleContainer.offsetHeight + _this.stickyContentBottom.offsetTop;
            }
            return distance;
        };
        _this._getNonStickyDistanceFromTop = function (container) {
            var distance = 0;
            var currElem = _this.root;
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
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this.state = {
            isStickyTop: false,
            isStickyBottom: false,
            distanceFromTop: undefined,
        };
        _this._activeElement = undefined;
        return _this;
    }
    Object.defineProperty(Sticky.prototype, "root", {
        get: function () {
            return this._root.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "placeholder", {
        get: function () {
            return this._placeHolder.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "stickyContentTop", {
        get: function () {
            return this._stickyContentTop.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "stickyContentBottom", {
        get: function () {
            return this._stickyContentBottom.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "nonStickyContent", {
        get: function () {
            return this._nonStickyContent.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "canStickyTop", {
        get: function () {
            return (this.props.stickyPosition === _Sticky_types__WEBPACK_IMPORTED_MODULE_5__["StickyPositionType"].Both || this.props.stickyPosition === _Sticky_types__WEBPACK_IMPORTED_MODULE_5__["StickyPositionType"].Header);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "canStickyBottom", {
        get: function () {
            return (this.props.stickyPosition === _Sticky_types__WEBPACK_IMPORTED_MODULE_5__["StickyPositionType"].Both || this.props.stickyPosition === _Sticky_types__WEBPACK_IMPORTED_MODULE_5__["StickyPositionType"].Footer);
        },
        enumerable: true,
        configurable: true
    });
    Sticky.prototype.componentDidMount = function () {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        scrollablePane.subscribe(this._onScrollEvent);
        scrollablePane.addSticky(this);
    };
    Sticky.prototype.componentWillUnmount = function () {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        scrollablePane.unsubscribe(this._onScrollEvent);
        scrollablePane.removeSticky(this);
    };
    Sticky.prototype.componentDidUpdate = function (prevProps, prevState) {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        var _a = this.state, isStickyBottom = _a.isStickyBottom, isStickyTop = _a.isStickyTop, distanceFromTop = _a.distanceFromTop;
        var syncScroll = false;
        if (prevState.distanceFromTop !== distanceFromTop) {
            scrollablePane.sortSticky(this, true /*sortAgain*/);
            syncScroll = true;
        }
        if (prevState.isStickyTop !== isStickyTop || prevState.isStickyBottom !== isStickyBottom) {
            if (this._activeElement) {
                this._activeElement.focus();
            }
            scrollablePane.updateStickyRefHeights();
            syncScroll = true;
        }
        if (syncScroll) {
            // Sync Sticky scroll position with content container on each update
            scrollablePane.syncScrollSticky(this);
        }
    };
    Sticky.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        // eslint-disable-next-line deprecation/deprecation
        if (!this.context.scrollablePane) {
            return true;
        }
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom, distanceFromTop = _a.distanceFromTop;
        return (isStickyTop !== nextState.isStickyTop ||
            isStickyBottom !== nextState.isStickyBottom ||
            this.props.stickyPosition !== nextProps.stickyPosition ||
            this.props.children !== nextProps.children ||
            distanceFromTop !== nextState.distanceFromTop ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._stickyContentTop) ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._stickyContentBottom) ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._placeHolder));
    };
    Sticky.prototype.render = function () {
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
        var _b = this.props, stickyClassName = _b.stickyClassName, children = _b.children;
        // eslint-disable-next-line deprecation/deprecation
        if (!this.context.scrollablePane) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, this.props.children);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._root },
            this.canStickyTop && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._stickyContentTop, "aria-hidden": !isStickyTop, style: { pointerEvents: isStickyTop ? 'auto' : 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: this._getStickyPlaceholderHeight(isStickyTop) }))),
            this.canStickyBottom && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._stickyContentBottom, "aria-hidden": !isStickyBottom, style: { pointerEvents: isStickyBottom ? 'auto' : 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: this._getStickyPlaceholderHeight(isStickyBottom) }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: this._getNonStickyPlaceholderHeightAndWidth(), ref: this._placeHolder },
                (isStickyTop || isStickyBottom) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: _Styling__WEBPACK_IMPORTED_MODULE_3__["hiddenContentStyle"] }, children),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-hidden": isStickyTop || isStickyBottom, ref: this._nonStickyContent, className: isStickyTop || isStickyBottom ? stickyClassName : undefined, style: this._getContentStyles(isStickyTop || isStickyBottom) }, children))));
    };
    Sticky.prototype.addSticky = function (stickyContent) {
        if (this.nonStickyContent) {
            stickyContent.appendChild(this.nonStickyContent);
        }
    };
    Sticky.prototype.resetSticky = function () {
        if (this.nonStickyContent && this.placeholder) {
            this.placeholder.appendChild(this.nonStickyContent);
        }
    };
    Sticky.prototype.setDistanceFromTop = function (container) {
        var distanceFromTop = this._getNonStickyDistanceFromTop(container);
        this.setState({ distanceFromTop: distanceFromTop });
    };
    Sticky.prototype._getContentStyles = function (isSticky) {
        return {
            backgroundColor: this.props.stickyBackgroundColor || this._getBackground(),
            overflow: isSticky ? 'hidden' : '',
        };
    };
    Sticky.prototype._getStickyPlaceholderHeight = function (isSticky) {
        var height = this.nonStickyContent ? this.nonStickyContent.offsetHeight : 0;
        return {
            visibility: isSticky ? 'hidden' : 'visible',
            height: isSticky ? 0 : height,
        };
    };
    Sticky.prototype._getNonStickyPlaceholderHeightAndWidth = function () {
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
        if (isStickyTop || isStickyBottom) {
            var height = 0;
            var width = 0;
            // Why is placeholder width needed?
            // ScrollablePane's content container is reponsible for providing scrollbars depending on content overflow.
            // - If the overflow is caused by content of sticky component when it is in non-sticky state, the container will
            //   provide horizontal scrollbar.
            // - If the component becomes sticky, i.e., when state.isStickyTop || state.isStickyBottom becomes true,
            //   its actual content is no longer inside the container, so the container will see no need for horizontal
            //   scrollbar (assuming no other content is causing overflow). The complete content of sticky component will
            //   not be viewable. So it is necessary to provide a placeholder of a certain width (height is already being set)
            //   in the container, to get a horizontal scrollbar & be able to view the complete content of sticky component.
            if (this.nonStickyContent && this.nonStickyContent.firstElementChild) {
                height = this.nonStickyContent.offsetHeight;
                // What value should be substituted for placeholder width?
                // Assumptions:
                //    1. Content inside <Sticky> should always be wrapped in a single div.
                //        <Sticky><div id={'firstElementChild'}>{intended_content}</div><Sticky/>
                //    2. -ve padding, margin, etc. are not be used.
                //    3. scrollWidth of a parent is greater than or equal to max of scrollWidths of its children, and same holds
                //       for children.
                // placeholder width should be computed in the best possible way to prevent overscroll/underscroll.
                width =
                    this.nonStickyContent.firstElementChild.scrollWidth +
                        (this.nonStickyContent.firstElementChild.offsetWidth -
                            this.nonStickyContent.firstElementChild.clientWidth);
            }
            return {
                height: height,
                width: width,
            };
        }
        else {
            return {};
        }
    };
    // Gets background of nearest parent element that has a declared background-color attribute
    Sticky.prototype._getBackground = function () {
        if (!this.root) {
            return undefined;
        }
        var curr = this.root;
        while (window.getComputedStyle(curr).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' ||
            window.getComputedStyle(curr).getPropertyValue('background-color') === 'transparent') {
            if (curr.tagName === 'HTML') {
                // Fallback color if no element has a declared background-color attribute
                return undefined;
            }
            if (curr.parentElement) {
                curr = curr.parentElement;
            }
        }
        return window.getComputedStyle(curr).getPropertyValue('background-color');
    };
    Sticky.defaultProps = {
        stickyPosition: _Sticky_types__WEBPACK_IMPORTED_MODULE_5__["StickyPositionType"].Both,
        isScrollSynced: true,
    };
    Sticky.contextType = _ScrollablePane_ScrollablePane_types__WEBPACK_IMPORTED_MODULE_4__["ScrollablePaneContext"];
    return Sticky;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _isOffsetHeightDifferent(a, b) {
    return (a && b && a.current && b.current && a.current.offsetHeight !== b.current.offsetHeight);
}
//# sourceMappingURL=Sticky.js.map

/***/ }),

/***/ "rpk9":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.types.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollbarVisibility, ScrollablePaneContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarVisibility", function() { return ScrollbarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollablePaneContext", function() { return ScrollablePaneContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * {@docCategory ScrollablePane}
 */
var ScrollbarVisibility = {
    auto: 'auto',
    always: 'always',
};
var ScrollablePaneContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({ scrollablePane: undefined });
//# sourceMappingURL=ScrollablePane.types.js.map

/***/ }),

/***/ "surb":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return DetailsHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/dragdrop/index */ "pVr0");
/* harmony import */ var _components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DetailsList/DetailsColumn */ "Z9S6");
/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");














var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var NO_COLUMNS = [];
var DetailsHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsHeaderBase, _super);
    function DetailsHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._rootComponent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};
        _this._updateDroppingState = function (newValue, event) {
            if (_this._draggedColumnIndex >= 0 && event.type !== 'drop' && !newValue) {
                _this._resetDropHints();
            }
        };
        _this._onDragOver = function (item, event) {
            if (_this._draggedColumnIndex >= 0) {
                event.stopPropagation();
                _this._computeDropHintToBeShown(event.clientX);
            }
        };
        _this._onDrop = function (item, event) {
            // Safe to assume this is defined since we're handling a drop event
            var columnReorderProps = _this._getColumnReorderProps();
            // Target index will not get changed if draggeditem is after target item.
            if (_this._draggedColumnIndex >= 0 && event) {
                var targetIndex = _this._draggedColumnIndex > _this._currentDropHintIndex
                    ? _this._currentDropHintIndex
                    : _this._currentDropHintIndex - 1;
                var isValidDrop = _this._isValidCurrentDropHintIndex();
                event.stopPropagation();
                if (isValidDrop) {
                    _this._onDropIndexInfo.sourceIndex = _this._draggedColumnIndex;
                    _this._onDropIndexInfo.targetIndex = targetIndex;
                    if (columnReorderProps.onColumnDrop) {
                        var dragDropDetails = {
                            draggedIndex: _this._draggedColumnIndex,
                            targetIndex: targetIndex,
                        };
                        columnReorderProps.onColumnDrop(dragDropDetails);
                        /* eslint-disable deprecation/deprecation */
                    }
                    else if (columnReorderProps.handleColumnReorder) {
                        columnReorderProps.handleColumnReorder(_this._draggedColumnIndex, targetIndex);
                        /* eslint-enable deprecation/deprecation */
                    }
                }
            }
            _this._resetDropHints();
            _this._dropHintDetails = {};
            _this._draggedColumnIndex = -1;
        };
        _this._updateDragInfo = function (props, event) {
            // Safe to assume this is defined since we're handling a drag event
            var columnReorderProps = _this._getColumnReorderProps();
            var itemIndex = props.itemIndex;
            if (itemIndex >= 0) {
                // Column index is set based on the checkbox
                _this._draggedColumnIndex = _this._isCheckboxColumnHidden() ? itemIndex - 1 : itemIndex - 2;
                _this._getDropHintPositions();
                if (columnReorderProps.onColumnDragStart) {
                    columnReorderProps.onColumnDragStart(true);
                }
            }
            else if (event && _this._draggedColumnIndex >= 0) {
                _this._resetDropHints();
                _this._draggedColumnIndex = -1;
                _this._dropHintDetails = {};
                if (columnReorderProps.onColumnDragEnd) {
                    var columnDragEndLocation = _this._isEventOnHeader(event);
                    columnReorderProps.onColumnDragEnd({ dropLocation: columnDragEndLocation }, event);
                }
            }
        };
        _this._getDropHintPositions = function () {
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            // Safe to assume this is defined since we're handling a drag/drop event
            var columnReorderProps = _this._getColumnReorderProps();
            var prevX = 0;
            var prevMid = 0;
            var prevRef;
            var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
            var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
            for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
                if (_this._rootElement.current) {
                    var dropHintElement = _this._rootElement.current.querySelectorAll('#columnDropHint_' + i)[0];
                    if (dropHintElement) {
                        if (i === frozenColumnCountFromStart) {
                            prevX = dropHintElement.offsetLeft;
                            prevMid = dropHintElement.offsetLeft;
                            prevRef = dropHintElement;
                        }
                        else {
                            var newMid = (dropHintElement.offsetLeft + prevX) / 2;
                            _this._dropHintDetails[i - 1] = {
                                originX: prevX,
                                startX: prevMid,
                                endX: newMid,
                                dropHintElementRef: prevRef,
                            };
                            prevMid = newMid;
                            prevRef = dropHintElement;
                            prevX = dropHintElement.offsetLeft;
                            if (i === columns.length - frozenColumnCountFromEnd) {
                                _this._dropHintDetails[i] = {
                                    originX: prevX,
                                    startX: prevMid,
                                    endX: dropHintElement.offsetLeft,
                                    dropHintElementRef: prevRef,
                                };
                            }
                        }
                    }
                }
            }
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         */
        _this._computeDropHintToBeShown = function (clientX) {
            var isRtl = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme);
            if (_this._rootElement.current) {
                var clientRect = _this._rootElement.current.getBoundingClientRect();
                var headerOriginX = clientRect.left;
                var eventXRelativePosition = clientX - headerOriginX;
                var currentDropHintIndex = _this._currentDropHintIndex;
                if (_this._isValidCurrentDropHintIndex()) {
                    if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
                        return;
                    }
                }
                var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
                // Safe to assume this is defined since we're handling a drag/drop event
                var columnReorderProps = _this._getColumnReorderProps();
                var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
                var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
                var currentIndex = frozenColumnCountFromStart;
                var lastValidColumn = columns.length - frozenColumnCountFromEnd;
                var indexToUpdate = -1;
                if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
                    indexToUpdate = currentIndex;
                }
                else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
                    indexToUpdate = lastValidColumn;
                }
                else if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
                        indexToUpdate = currentDropHintIndex + 1;
                    }
                    else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
                        indexToUpdate = currentDropHintIndex - 1;
                    }
                }
                if (indexToUpdate === -1) {
                    var startIndex = frozenColumnCountFromStart;
                    var endIndex = lastValidColumn;
                    while (startIndex < endIndex) {
                        var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                        if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
                            indexToUpdate = middleIndex;
                            break;
                        }
                        else if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            endIndex = middleIndex;
                        }
                        else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            startIndex = middleIndex;
                        }
                    }
                }
                if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
                    if (_this._isValidCurrentDropHintIndex()) {
                        _this._resetDropHints();
                    }
                }
                else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                    _this._resetDropHints();
                    _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');
                    _this._currentDropHintIndex = indexToUpdate;
                }
            }
        };
        _this._renderColumnSizer = function (_a) {
            var _b;
            var columnIndex = _a.columnIndex;
            var _c = _this.props.columns, columns = _c === void 0 ? NO_COLUMNS : _c;
            var column = columns[columnIndex];
            var columnResizeDetails = _this.state.columnResizeDetails;
            var classNames = _this._classNames;
            return column.isResizable ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key + "_sizer", "aria-hidden": true, role: "button", "data-is-focusable": false, onClick: _stopPropagation, "data-sizer-index": columnIndex, onBlur: _this._onSizerBlur, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_b = {},
                    _b[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                    _b)), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex) })) : null;
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        /**
         * Called when the select all toggle is clicked.
         */
        _this._onSelectAllClicked = function () {
            var selection = _this.props.selection;
            if (selection) {
                selection.toggleAllSelected();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            var columnIndex = Number(columnIndexAttr);
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
                // Ignore anything except the primary button.
                return;
            }
            _this.setState({
                columnResizeDetails: {
                    columnIndex: columnIndex,
                    columnMinWidth: columns[columnIndex].calculatedWidth,
                    originX: ev.clientX,
                },
            });
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onRootMouseMove = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
                _this.setState({ isSizing: true });
            }
        };
        _this._onRootKeyDown = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            var _b = _this.props, _c = _b.columns, columns = _c === void 0 ? NO_COLUMNS : _c, onColumnResized = _b.onColumnResized;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            if (!columnIndexAttr || isSizing) {
                return;
            }
            var columnIndex = Number(columnIndexAttr);
            if (!columnResizeDetails) {
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: {
                            columnIndex: columnIndex,
                            columnMinWidth: columns[columnIndex].calculatedWidth,
                        },
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                var increment = void 0;
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: undefined,
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? 1 : -1;
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? -1 : 1;
                }
                if (increment) {
                    if (!ev.shiftKey) {
                        increment *= 10;
                    }
                    _this.setState({
                        columnResizeDetails: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnResizeDetails), { columnMinWidth: columnResizeDetails.columnMinWidth + increment }),
                    });
                    if (onColumnResized) {
                        onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * mouse move event handler in the header
         * it will set isSizing state to true when user clicked on the sizer and move the mouse.
         *
         * @param ev - mouse move event
         */
        _this._onSizerMouseMove = function (ev) {
            var 
            // use buttons property here since ev.button in some edge case is not upding well during the move.
            // but firefox doesn't support it, so we set the default value when it is not defined.
            buttons = ev.buttons;
            var _a = _this.props, onColumnIsSizingChanged = _a.onColumnIsSizingChanged, onColumnResized = _a.onColumnResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
                // cancel mouse down event and return early when the primary button is not pressed
                _this._onSizerMouseUp(ev);
                return;
            }
            if (ev.clientX !== columnResizeDetails.originX) {
                if (onColumnIsSizingChanged) {
                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
                }
            }
            if (onColumnResized) {
                var movement = ev.clientX - columnResizeDetails.originX;
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)) {
                    movement = -movement;
                }
                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
            }
        };
        _this._onSizerBlur = function (ev) {
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (columnResizeDetails) {
                _this.setState({
                    columnResizeDetails: undefined,
                    isSizing: false,
                });
            }
        };
        /**
         * mouse up event handler in the header
         * clear the resize related state.
         * This is to ensure we can catch double click event
         *
         * @param ev - mouse up event
         */
        _this._onSizerMouseUp = function (ev) {
            var _a = _this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
            var columnResizeDetails = _this.state.columnResizeDetails;
            _this.setState({
                columnResizeDetails: undefined,
                isSizing: false,
            });
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
            }
        };
        _this._onToggleCollapseAll = function () {
            var onToggleCollapseAll = _this.props.onToggleCollapseAll;
            var newCollapsed = !_this.state.isAllCollapsed;
            _this.setState({
                isAllCollapsed: newCollapsed,
            });
            if (onToggleCollapseAll) {
                onToggleCollapseAll(newCollapsed);
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            columnResizeDetails: undefined,
            isAllCollapsed: _this.props.isAllCollapsed,
            isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected(),
        };
        _this._onDropIndexInfo = {
            sourceIndex: -1,
            targetIndex: -1,
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('header');
        _this._currentDropHintIndex = -1;
        // The drag drop handler won't do any work until subscribe() is called,
        // so always set it up for convenience
        _this._dragDropHelper = new _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__["DragDropHelper"]({
            selection: {
                getSelection: function () {
                    return;
                },
            },
            minimumPixelsForDrag: _this.props.minimumPixelsForDrag,
        });
        return _this;
    }
    DetailsHeaderBase.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SELECTION_CHANGE"], this._onSelectionChanged);
        // this._rootElement.current will be null in tests using react-test-renderer
        if (this._rootElement.current) {
            // We need to use native on this to prevent MarqueeSelection from handling the event before us.
            this._events.on(this._rootElement.current, 'mousedown', this._onRootMouseDown);
            this._events.on(this._rootElement.current, 'keydown', this._onRootKeyDown);
            if (this._getColumnReorderProps()) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
    };
    DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
        if (this._getColumnReorderProps()) {
            if (!this._subscriptionObject && this._rootElement.current) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
        else if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
            var _a = prevProps.columns, previousColumns = _a === void 0 ? NO_COLUMNS : _a;
            var _b = this.props.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
                this._onDropIndexInfo = {
                    sourceIndex: -1,
                    targetIndex: -1,
                };
            }
        }
        if (this.props.isAllCollapsed !== prevProps.isAllCollapsed) {
            this.setState({ isAllCollapsed: this.props.isAllCollapsed });
        }
    };
    DetailsHeaderBase.prototype.componentWillUnmount = function () {
        if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        this._dragDropHelper.dispose();
        this._events.dispose();
    };
    DetailsHeaderBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, ariaLabel = _a.ariaLabel, ariaLabelForToggleAllGroupsButton = _a.ariaLabelForToggleAllGroupsButton, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, indentWidth = _a.indentWidth, onColumnClick = _a.onColumnClick, onColumnContextMenu = _a.onColumnContextMenu, _c = _a.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c, styles = _a.styles, selectionMode = _a.selectionMode, theme = _a.theme, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, groupNestingDepth = _a.groupNestingDepth, useFastIcons = _a.useFastIcons, checkboxVisibility = _a.checkboxVisibility, className = _a.className;
        var _d = this.state, isAllSelected = _d.isAllSelected, columnResizeDetails = _d.columnResizeDetails, isSizing = _d.isSizing, isAllCollapsed = _d.isAllCollapsed;
        var showCheckbox = selectAllVisibility !== _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].none;
        var isCheckboxHidden = selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden;
        var isCheckboxAlwaysVisible = checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always;
        var columnReorderProps = this._getColumnReorderProps();
        var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart
            ? columnReorderProps.frozenColumnCountFromStart
            : 0;
        var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd
            ? columnReorderProps.frozenColumnCountFromEnd
            : 0;
        this._classNames = getClassNames(styles, {
            theme: theme,
            isAllSelected: isAllSelected,
            isSelectAllHidden: selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden,
            isResizingColumn: !!columnResizeDetails && isSizing,
            isSizing: isSizing,
            isAllCollapsed: isAllCollapsed,
            isCheckboxHidden: isCheckboxHidden,
            className: className,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], { role: "row", "aria-label": ariaLabel, className: classNames.root, componentRef: this._rootComponent, elementRef: this._rootElement, onMouseMove: this._onRootMouseMove, "data-automationid": "DetailsHeader", direction: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal },
            showCheckbox
                ? [
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "__checkbox", className: classNames.cellIsCheck, "aria-labelledby": this._id + "-check", onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined, "aria-colindex": 1, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                        hostClassName: classNames.checkTooltip,
                        id: this._id + "-checkTooltip",
                        setAriaDescribedBy: false,
                        content: ariaLabelForSelectAllCheckbox,
                        children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__["DetailsRowCheck"], { id: this._id + "-check", "aria-label": selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].multiple
                                ? ariaLabelForSelectAllCheckbox
                                : ariaLabelForSelectionColumn, "aria-describedby": !isCheckboxHidden
                                ? ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined
                                : ariaLabelForSelectionColumn && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined, "data-is-focusable": !isCheckboxHidden || undefined, isHeader: true, selected: isAllSelected, anySelected: false, canSelect: !isCheckboxHidden, className: classNames.check, onRenderDetailsCheckbox: onRenderDetailsCheckbox, useFastIcons: useFastIcons, isVisible: isCheckboxAlwaysVisible })),
                    }, this._onRenderColumnHeaderTooltip)),
                    !this.props.onRenderColumnHeaderTooltip ? (ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectAllCheckbox)) : ariaLabelForSelectionColumn && isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectionColumn)) : null) : null,
                ]
                : null,
            groupNestingDepth > 0 && this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.cellIsGroupExpander, onClick: this._onToggleCollapseAll, "data-is-focusable": true, "aria-label": ariaLabelForToggleAllGroupsButton, "aria-expanded": !isAllCollapsed, role: "columnheader" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.collapseButton, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' }))) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                var _isDraggable = columnReorderProps
                    ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd
                    : false;
                return [
                    columnReorderProps &&
                        (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) &&
                        _this._renderDropHint(columnIndex),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__["DetailsColumn"], { column: column, styles: column.styles, key: column.key, columnIndex: (showCheckbox ? 2 : 1) + columnIndex, parentId: _this._id, isDraggable: _isDraggable, updateDragInfo: _this._updateDragInfo, dragDropHelper: _this._dragDropHelper, onColumnClick: onColumnClick, onColumnContextMenu: onColumnContextMenu, 
                        // Do not render tooltips by default, but allow for override via props.
                        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip, isDropped: _this._onDropIndexInfo.targetIndex === columnIndex, cellStyleProps: _this.props.cellStyleProps, useFastIcons: useFastIcons }),
                    _this._renderColumnDivider(columnIndex),
                ];
            }),
            columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length),
            isSizing && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_6__["Layer"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sizingOverlay, onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeaderBase.prototype.focus = function () {
        var _a;
        return !!((_a = this._rootComponent.current) === null || _a === void 0 ? void 0 : _a.focus());
    };
    /**
     * Gets column reorder props from this.props. If the calling code is part of setting up or
     * handling drag/drop events, it's safe to assume that this method's return value is defined
     * (because drag/drop handling will only be set up if reorder props are given).
     */
    DetailsHeaderBase.prototype._getColumnReorderProps = function () {
        var _a = this.props, columnReorderOptions = _a.columnReorderOptions, columnReorderProps = _a.columnReorderProps;
        return columnReorderProps || (columnReorderOptions && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: undefined }));
    };
    DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver,
        };
        return options;
    };
    DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
        var _a = this.props, selectionMode = _a.selectionMode, checkboxVisibility = _a.checkboxVisibility;
        return selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].none || checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
    };
    DetailsHeaderBase.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');
            this._currentDropHintIndex = -1;
        }
    };
    DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
        element.childNodes[1].style.display = displayProperty;
        element.childNodes[0].style.display = displayProperty;
    };
    DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
        if (this._rootElement.current) {
            var clientRect = this._rootElement.current.getBoundingClientRect();
            if (event.clientX > clientRect.left &&
                event.clientX < clientRect.right &&
                event.clientY > clientRect.top &&
                event.clientY < clientRect.bottom) {
                return _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header;
            }
        }
    };
    DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = columns[columnIndex];
        var onRenderDivider = column.onRenderDivider;
        return onRenderDivider
            ? onRenderDivider({ column: column, columnIndex: columnIndex }, this._renderColumnSizer)
            : this._renderColumnSizer({ column: column, columnIndex: columnIndex });
    };
    DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
        var classNames = this._classNames;
        var IconComponent = this.props.useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: 'dropHintKey', className: classNames.dropHintStyle, id: "columnDropHint_" + dropHintIndex },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "presentation", key: "dropHintCircleKey", className: classNames.dropHintCaretStyle, "data-is-focusable": false, "data-sizer-index": dropHintIndex, "aria-hidden": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: 'CircleShapeSolid' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "dropHintLineKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintLineStyle })));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @param columnIndex - index of the column user double clicked
     * @param ev - mouse double click event
     */
    DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    DetailsHeaderBase.prototype._onSelectionChanged = function () {
        var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected,
            });
        }
    };
    DetailsHeaderBase.defaultProps = {
        selectAllVisibility: _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].visible,
        collapseAllVisibility: _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible,
        useFastIcons: true,
    };
    return DetailsHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _liesBetween(rtl, target, left, right) {
    return rtl ? target <= left && target >= right : target >= left && target <= right;
}
function _isBefore(rtl, a, b) {
    return rtl ? a >= b : a <= b;
}
function _isAfter(rtl, a, b) {
    return rtl ? a <= b : a >= b;
}
function _stopPropagation(ev) {
    ev.stopPropagation();
}
//# sourceMappingURL=DetailsHeader.base.js.map

/***/ }),

/***/ "tApQ":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return DetailsHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");



var DetailsHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__["DetailsHeaderBase"], _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsHeader' });
//# sourceMappingURL=DetailsHeader.js.map

/***/ }),

/***/ "tCYI":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.styles.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return DetailsRowGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return DEFAULT_CELL_STYLE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return DEFAULT_ROW_HEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return getDetailsRowStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var DetailsRowGlobalClassNames = {
    root: 'ms-DetailsRow',
    // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellAnimation: 'ms-DetailsRow-cellAnimation',
    cellCheck: 'ms-DetailsRow-cellCheck',
    check: 'ms-DetailsRow-check',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    isRowHeader: 'is-row-header',
    fields: 'ms-DetailsRow-fields',
};
var IsFocusableSelector = "[data-is-focusable='true']";
var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24,
};
// Source of default row heights to share.
var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32,
};
// Constant values
var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_ROW_HEIGHTS), { rowVerticalPadding: 11, compactRowVerticalPadding: 6 });
var getDetailsRowStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, anySelected = props.anySelected, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _o = props.cellStyleProps, cellStyleProps = _o === void 0 ? DEFAULT_CELL_STYLE_PROPS : _o, enableUpdateAnimations = props.enableUpdateAnimations;
    var palette = theme.palette, fonts = theme.fonts;
    var neutralPrimary = palette.neutralPrimary, white = palette.white, neutralSecondary = palette.neutralSecondary, neutralLighter = palette.neutralLighter, neutralLight = palette.neutralLight, neutralDark = palette.neutralDark, neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
    var focusBorder = theme.semanticColors.focusBorder;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(DetailsRowGlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderText: neutralPrimary,
        defaultMetaText: neutralSecondary,
        defaultBackground: white,
        // Default Hover
        defaultHoverHeaderText: neutralDark,
        defaultHoverMetaText: neutralPrimary,
        defaultHoverBackground: neutralLighter,
        // Selected
        selectedHeaderText: neutralDark,
        selectedMetaText: neutralPrimary,
        selectedBackground: neutralLight,
        // Selected Hover
        selectedHoverHeaderText: neutralDark,
        selectedHoverMetaText: neutralPrimary,
        selectedHoverBackground: neutralQuaternaryAlt,
        // Focus
        focusHeaderText: neutralDark,
        focusMetaText: neutralPrimary,
        focusBackground: neutralLight,
        focusHoverBackground: neutralQuaternaryAlt,
    };
    // Selected row styles
    var selectedStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: focusBorder, outlineColor: white }),
        classNames.isSelected,
        {
            color: colors.selectedMetaText,
            background: colors.selectedBackground,
            borderBottom: "1px solid " + white,
            selectors: (_a = {
                    '&:before': {
                        position: 'absolute',
                        display: 'block',
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '',
                        borderTop: "1px solid " + white,
                    },
                    // Selected State hover
                    '&:hover': {
                        background: colors.selectedHoverBackground,
                        color: colors.selectedHoverMetaText,
                        selectors: (_b = {},
                            // Selected State hover meta cell
                            _b["." + classNames.cell + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                color: 'HighlightText',
                                selectors: {
                                    '> a': {
                                        color: 'HighlightText',
                                    },
                                },
                            },
                            // Selected State hover Header cell
                            _b["." + classNames.isRowHeader] = {
                                color: colors.selectedHoverHeaderText,
                                selectors: (_c = {},
                                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _c),
                            },
                            // Ensure high-contrast mode overrides default hover background
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _b),
                    },
                    // Focus state
                    '&:focus': {
                        background: colors.focusBackground,
                        selectors: (_d = {},
                            // Selected State hover meta cell
                            _d["." + classNames.cell] = {
                                color: colors.focusMetaText,
                                selectors: (_e = {},
                                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                        selectors: {
                                            '> a': {
                                                color: 'HighlightText',
                                            },
                                        },
                                    },
                                    _e),
                            },
                            // Row header cell
                            _d["." + classNames.isRowHeader] = {
                                color: colors.focusHeaderText,
                                selectors: (_f = {},
                                    _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _f),
                            },
                            // Ensure high-contrast mode overrides default focus background
                            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _d),
                    }
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                // Focus and hover state
                _a['&:focus:hover'] = {
                    background: colors.focusHoverBackground,
                },
                _a),
        },
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default',
        },
    ];
    var rootCompactStyles = {
        minHeight: values.compactRowHeight,
        border: 0,
    };
    var cellCompactStyles = {
        minHeight: values.compactRowHeight,
        paddingTop: values.compactRowVerticalPadding,
        paddingBottom: values.compactRowVerticalPadding,
        paddingLeft: cellStyleProps.cellLeftPadding + "px",
    };
    var defaultCellStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1 }),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: values.rowVerticalPadding,
            paddingBottom: values.rowVerticalPadding,
            paddingLeft: cellStyleProps.cellLeftPadding + "px",
            selectors: (_g = {
                    '& > button': {
                        maxWidth: '100%',
                    }
                },
                _g[IsFocusableSelector] = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),
                _g),
        },
        isSelected && {
            selectors: (_h = {},
                _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                _h),
        },
        compact && cellCompactStyles,
    ];
    return {
        root: [
            classNames.root,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationClassNames"].fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { borderColor: focusBorder, outlineColor: white }),
            {
                borderBottom: "1px solid " + neutralLighter,
                background: colors.defaultBackground,
                color: colors.defaultMetaText,
                // This ensures that the row always tries to consume is minimum width and does not compress.
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_j = {},
                    _j["." + classNames.listCellFirstChild + " &:before"] = {
                        display: 'none',
                    },
                    _j['&:hover'] = {
                        background: colors.defaultHoverBackground,
                        color: colors.defaultHoverMetaText,
                        selectors: (_k = {},
                            _k["." + classNames.isRowHeader] = {
                                color: colors.defaultHoverHeaderText,
                            },
                            _k),
                    },
                    _j["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j),
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className,
        ],
        cellUnpadded: {
            paddingRight: cellStyleProps.cellRightPadding + "px",
        },
        cellPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
            selectors: (_l = {},
                _l["&." + classNames.cellCheck] = {
                    paddingRight: 0,
                },
                _l),
        },
        cell: defaultCellStyles,
        cellAnimation: enableUpdateAnimations && _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"].slideLeftIn40,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap',
            },
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0,
            },
        ],
        checkCover: {
            position: 'absolute',
            top: -1,
            left: 0,
            bottom: 0,
            right: 0,
            display: anySelected ? 'block' : 'none',
        },
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        isRowHeader: [
            classNames.isRowHeader,
            {
                color: colors.defaultHeaderText,
                fontSize: fonts.medium.fontSize,
            },
            isSelected && {
                color: colors.selectedHeaderText,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                selectors: (_m = {},
                    _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'HighlightText',
                    },
                    _m),
            },
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip',
            },
        ],
        check: [classNames.check],
    };
};
//# sourceMappingURL=DetailsRow.styles.js.map

/***/ }),

/***/ "taiU":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Sticky/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Sticky, StickyPositionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sticky */ "ri7b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _Sticky__WEBPACK_IMPORTED_MODULE_0__["Sticky"]; });

/* harmony import */ var _Sticky_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sticky.types */ "x+Ih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StickyPositionType", function() { return _Sticky_types__WEBPACK_IMPORTED_MODULE_1__["StickyPositionType"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "uJwK":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/UserExpirationPanel/UserExpirationList.scss.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".ms-userExpirationList{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0px 0px 0px 16px}[dir='rtl'] .ms-userExpirationList{padding:0px 16px 0px 0px}.ms-UserExpirationList-UserName{color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": ";font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400}.ms-UserExpiratinLIst-UserEmail{font-size:" }, { "theme": "xSmallFontSize", "defaultValue": "10px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}html[dir='ltr'] .ms-UserExpiratinLIst-UserEmail{float:left}html[dir='rtl'] .ms-UserExpiratinLIst-UserEmail{float:right}.ms-UserExpirationList-ButtonArea{height:48px;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.ms-UserExpirationList-ButtonAreaPadding{padding:0px 16px 0px 0px}[dir='rtl'] .ms-UserExpirationList-ButtonAreaPadding{padding:0px 0px 0px 16px}.ms-UserExpirationList-ButtonAreaButton{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": ";padding:0px 8px 0px 8px}[dir='rtl'] .ms-UserExpirationList-ButtonAreaButton{padding:0px 8px 0px 8px}.ms-UserExpirationList-ButtonAreaButton:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.ms-UserExpirationList-Checkbox{-ms-flex-item-align:center;align-self:center}html[dir='ltr'] .ms-UserExpirationList-ExpirationColumn{text-align:right}html[dir='rtl'] .ms-UserExpirationList-ExpirationColumn{text-align:left}.ms-UserExpirationList-ExpirationColumnHeader{padding:0 3px 0 3px}[dir='rtl'] .ms-UserExpirationList-ExpirationColumnHeader{padding:0 3px 0 3px}.ms-UserExpirationList-Expiration{font-size:" }, { "theme": "mediumFontSize", "defaultValue": "14px" }, { "rawString": ";font-weight:400;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": ";width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}[dir='ltr'] .ms-UserExpirationList-Expiration{padding-right:18px}[dir='rtl'] .ms-UserExpirationList-Expiration{padding-left:18px}.ms-UserExpirationList-Expiration.Soon{color:" }, { "theme": "redDark", "defaultValue": "#a4262c" }, { "rawString": "}[dir='ltr'] .ms-UserExpirationList-Expiration.Admin{padding-right:6px}[dir='rtl'] .ms-UserExpirationList-Expiration.Admin{padding-left:6px}.ms-UserExpirationList-Search{width:100%;-ms-flex-item-align:center;align-self:center;margin:8px 12px 8px 12px}html[dir='rtl'] .ms-UserExpirationList-Search{margin:8px 12px 8px 12px}[dir='ltr'] .ms-UserExpirationList-Search{padding-left:0px}[dir='rtl'] .ms-UserExpirationList-Search{padding-right:0px}.ms-UserExpiration-actionButton{font-size:16px}[dir='ltr'] .ms-UserExpirationList-SearchField{padding-left:6px}[dir='rtl'] .ms-UserExpirationList-SearchField{padding-right:6px}.ms-userExpirationList-ScrollablePane{position:relative;height:100%}.ms-UserExpirationList-CheckBoxRoot{width:36px}\n" }]);
//# sourceMappingURL=UserExpirationList.scss.js.map

/***/ }),

/***/ "v+bP":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/ShimmeredDetailsList.styles.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var theme = props.theme;
    var palette = theme.palette;
    return {
        root: {
            position: 'relative',
            selectors: {
                ':after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    // eslint-disable-next-line @fluentui/max-len
                    backgroundImage: "linear-gradient(to bottom, transparent 30%, " + palette.whiteTranslucent40 + " 65%," + palette.white + " 100%)",
                },
            },
        },
    };
};
//# sourceMappingURL=ShimmeredDetailsList.styles.js.map

/***/ }),

/***/ "vsgo":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Sticky.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: Sticky, StickyPositionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sticky_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Sticky/index */ "taiU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _components_Sticky_index__WEBPACK_IMPORTED_MODULE_0__["Sticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StickyPositionType", function() { return _components_Sticky_index__WEBPACK_IMPORTED_MODULE_0__["StickyPositionType"]; });


//# sourceMappingURL=Sticky.js.map

/***/ }),

/***/ "wqXl":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return DetailsRow; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var DetailsRow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__["DetailsRowBase"], _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["getDetailsRowStyles"], undefined, {
    scope: 'DetailsRow',
});
//# sourceMappingURL=DetailsRow.js.map

/***/ }),

/***/ "x+Ih":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Sticky/Sticky.types.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: StickyPositionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyPositionType", function() { return StickyPositionType; });
var StickyPositionType;
(function (StickyPositionType) {
    StickyPositionType[StickyPositionType["Both"] = 0] = "Both";
    StickyPositionType[StickyPositionType["Header"] = 1] = "Header";
    StickyPositionType[StickyPositionType["Footer"] = 2] = "Footer";
})(StickyPositionType || (StickyPositionType = {}));
//# sourceMappingURL=Sticky.types.js.map

/***/ }),

/***/ "y86Q":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupedList */ "GDPH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _GroupedList__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__["GroupedListBase"]; });

/* harmony import */ var _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__["CollapseAllVisibility"]; });

/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _GroupHeader__WEBPACK_IMPORTED_MODULE_3__["GroupHeader"]; });

/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _GroupFooter__WEBPACK_IMPORTED_MODULE_4__["GroupFooter"]; });

/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"]; });

/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"]; });

/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__["GroupedListSection"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "yRr/":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/ShimmeredDetailsList.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: ShimmeredDetailsList, ShimmeredDetailsListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DetailsList_ShimmeredDetailsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DetailsList/ShimmeredDetailsList */ "QrTI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShimmeredDetailsList", function() { return _components_DetailsList_ShimmeredDetailsList__WEBPACK_IMPORTED_MODULE_0__["ShimmeredDetailsList"]; });

/* harmony import */ var _components_DetailsList_ShimmeredDetailsList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DetailsList/ShimmeredDetailsList.base */ "yVEV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShimmeredDetailsListBase", function() { return _components_DetailsList_ShimmeredDetailsList_base__WEBPACK_IMPORTED_MODULE_1__["ShimmeredDetailsListBase"]; });



//# sourceMappingURL=ShimmeredDetailsList.js.map

/***/ }),

/***/ "yVEV":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/ShimmeredDetailsList.base.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: ShimmeredDetailsListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShimmeredDetailsListBase", function() { return ShimmeredDetailsListBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _DetailsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsList */ "WEXx");
/* harmony import */ var _Shimmer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shimmer */ "dgKW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var SHIMMER_INITIAL_ITEMS = 10;
var DEFAULT_SHIMMER_HEIGHT = 7;
var SHIMMER_LINE_VS_CELL_WIDTH_RATIO = 0.95;
var ShimmeredDetailsListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShimmeredDetailsListBase, _super);
    function ShimmeredDetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderShimmerPlaceholder = function (index, rowProps) {
            var onRenderCustomPlaceholder = _this.props.onRenderCustomPlaceholder;
            var placeholderElements = onRenderCustomPlaceholder
                ? onRenderCustomPlaceholder(rowProps, index, _this._renderDefaultShimmerPlaceholder)
                : _this._renderDefaultShimmerPlaceholder(rowProps);
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Shimmer__WEBPACK_IMPORTED_MODULE_5__["Shimmer"], { customElementsGroup: placeholderElements });
        };
        _this._renderDefaultShimmerPlaceholder = function (rowProps) {
            var columns = rowProps.columns, compact = rowProps.compact, selectionMode = rowProps.selectionMode, checkboxVisibility = rowProps.checkboxVisibility, _a = rowProps.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_CELL_STYLE_PROPS"] : _a;
            var rowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_ROW_HEIGHTS"].rowHeight, compactRowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
            // 1px to take into account the border-bottom of DetailsRow.
            var gapHeight = compact ? compactRowHeight : rowHeight + 1;
            var shimmerElementsRow = [];
            var showCheckbox = selectionMode !== _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none && checkboxVisibility !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_6__["CheckboxVisibility"].hidden;
            if (showCheckbox) {
                shimmerElementsRow.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementsGroup"], { key: 'checkboxGap', shimmerElements: [{ type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].gap, width: '40px', height: gapHeight }] }));
            }
            columns.forEach(function (column, columnIdx) {
                var shimmerElements = [];
                var groupWidth = cellStyleProps.cellLeftPadding +
                    cellStyleProps.cellRightPadding +
                    column.calculatedWidth +
                    (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
                shimmerElements.push({
                    type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].gap,
                    width: cellStyleProps.cellLeftPadding,
                    height: gapHeight,
                });
                if (column.isIconOnly) {
                    shimmerElements.push({
                        type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].line,
                        width: column.calculatedWidth,
                        height: column.calculatedWidth,
                    });
                    shimmerElements.push({
                        type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].gap,
                        width: cellStyleProps.cellRightPadding,
                        height: gapHeight,
                    });
                }
                else {
                    shimmerElements.push({
                        type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].line,
                        width: column.calculatedWidth * SHIMMER_LINE_VS_CELL_WIDTH_RATIO,
                        height: DEFAULT_SHIMMER_HEIGHT,
                    });
                    shimmerElements.push({
                        type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].gap,
                        width: cellStyleProps.cellRightPadding +
                            (column.calculatedWidth - column.calculatedWidth * SHIMMER_LINE_VS_CELL_WIDTH_RATIO) +
                            (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                        height: gapHeight,
                    });
                }
                shimmerElementsRow.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementsGroup"], { key: columnIdx, width: groupWidth + "px", shimmerElements: shimmerElements }));
            });
            // When resizing the window from narrow to wider, we need to cover the exposed Shimmer wave
            // until the column resizing logic is done.
            shimmerElementsRow.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementsGroup"], { key: 'endGap', width: '100%', shimmerElements: [{ type: _Shimmer__WEBPACK_IMPORTED_MODULE_5__["ShimmerElementType"].gap, width: '100%', height: gapHeight }] }));
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'flex' } }, shimmerElementsRow);
        };
        _this._shimmerItems = props.shimmerLines ? new Array(props.shimmerLines) : new Array(SHIMMER_INITIAL_ITEMS);
        return _this;
    }
    ShimmeredDetailsListBase.prototype.render = function () {
        var _a = this.props, detailsListStyles = _a.detailsListStyles, enableShimmer = _a.enableShimmer, items = _a.items, listProps = _a.listProps, onRenderCustomPlaceholder = _a.onRenderCustomPlaceholder, removeFadingOverlay = _a.removeFadingOverlay, shimmerLines = _a.shimmerLines, styles = _a.styles, theme = _a.theme, ariaLabelForGrid = _a.ariaLabelForGrid, ariaLabelForShimmer = _a.ariaLabelForShimmer, restProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["detailsListStyles", "enableShimmer", "items", "listProps", "onRenderCustomPlaceholder", "removeFadingOverlay", "shimmerLines", "styles", "theme", "ariaLabelForGrid", "ariaLabelForShimmer"]);
        var listClassName = listProps && listProps.className;
        this._classNames = getClassNames(styles, {
            theme: theme,
        });
        var newListProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listProps), { 
            // Adds to the optional listProp className a fading out overlay className only when `enableShimmer` toggled on
            // and the overlay is not disabled by `removeFadingOverlay` prop.
            className: enableShimmer && !removeFadingOverlay ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.root, listClassName) : listClassName });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList__WEBPACK_IMPORTED_MODULE_4__["DetailsList"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, restProps, { styles: detailsListStyles, items: enableShimmer ? this._shimmerItems : items, isPlaceholderData: enableShimmer, ariaLabelForGrid: (enableShimmer && ariaLabelForShimmer) || ariaLabelForGrid, onRenderMissingItem: this._onRenderShimmerPlaceholder, listProps: newListProps })));
    };
    return ShimmeredDetailsListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ShimmeredDetailsList.base.js.map

/***/ }),

/***/ "ym2C":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return GroupFooter; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupFooter.styles */ "I5L8");
/* harmony import */ var _GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupFooter.base */ "R7/2");



var GroupFooter = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__["GroupFooterBase"], _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupFooter',
});
//# sourceMappingURL=GroupFooter.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-pages-panels~spcx-panels_[locale].js.map