(window["webpackJsonpf7fa85fe_da91_45cb_9813_5c31106cba7b_0_1_0"] = window["webpackJsonpf7fa85fe_da91_45cb_9813_5c31106cba7b_0_1_0"] || []).push([["dragzone-secondary-chunk"],{

/***/ "0hgw":
/*!*****************************!*\
  !*** ./lib/DragZoneTree.js ***!
  \*****************************/
/*! exports provided: DragZoneTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragZoneTree", function() { return DragZoneTree; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragZoneUtilities */ "BTj3");


var DATA_ATTRIBUTE = 'data-drag-tag';
var DATA_DISALLOWED_AREA_ATTRIBUTE = 'data-drag-disallowed-area-tag';
var DATA_DISALLOWED_ATTRIBUTE = 'data-drag-disallowed-tag';
var DATA_DRAG_HANDLE = 'data-drag-handle';
var DATA_DRAG_HIDDEN_EXTRA_ELEMENTS = 'data-drag-hidden-extra-elements';
var DATA_DRAG_HIDDEN = 'data-drag-hidden';
var DragZoneTree = /** @class */ (function () {
    function DragZoneTree(treeLevelTagsBottomUp, host) {
        var _this = this;
        this._bottomElements = new Map();
        this._positionMatrix = [];
        this._getElementFromPoint = function (x, y) {
            if (document.elementsFromPoint) {
                var elements = Array.prototype.slice.call(document.elementsFromPoint(x, y));
                return elements.filter(function (elem) { return _this._host.contains(elem); })[0];
            }
            else {
                return document.elementFromPoint(x, y);
            }
        };
        this._treeLevelTagsBottomUp = treeLevelTagsBottomUp;
        this._treeDepth = treeLevelTagsBottomUp.length;
        this._host = host;
        this._currentPosition = { x: undefined, y: undefined };
        this._startPosition = { x: undefined, y: undefined };
    }
    Object.defineProperty(DragZoneTree.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "startPosition", {
        get: function () {
            return this._startPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "depth", {
        get: function () {
            return this._treeDepth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneTree.prototype, "draggedItem", {
        get: function () {
            return this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        },
        enumerable: true,
        configurable: true
    });
    DragZoneTree.prototype.getHoverOverItemPosition = function (el) {
        var element = el || this.getBottomMostElementFromMousePosition();
        if (element) {
            return this._getElementPosition(element);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getDraggedItemPosition = function () {
        var draggedElement = this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        if (draggedElement) {
            return this._getElementPosition(draggedElement);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getLeafElementFromMousePosition = function () {
        return this._getLeafElementFromMousePosition(this._currentPosition.x, this._currentPosition.y);
    };
    DragZoneTree.prototype.getDraggedOverElement = function () {
        return document.elementFromPoint(this._currentPosition.x, this._currentPosition.y);
    };
    // This method checks whether the data-drag-disallowed-tag is set on dragged item
    // and the data-drag-disallowed-area-tag is set on hover area
    DragZoneTree.prototype.isDragAllowed = function (draggedItem, dragOverElement, dataDragDisallowed) {
        var hoverOverItemWithDisallowedTag;
        if (dragOverElement) {
            hoverOverItemWithDisallowedTag = this.getElementWithDataDisallowedAreaTag(dragOverElement, dataDragDisallowed);
        }
        if (!draggedItem ||
            !dragOverElement ||
            (hoverOverItemWithDisallowedTag &&
                _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(draggedItem, DATA_DISALLOWED_ATTRIBUTE, dataDragDisallowed))) {
            return false;
        }
        return true;
    };
    DragZoneTree.prototype.getBottomMostElementFromMousePosition = function (draggedItem, dataDragDisallowed) {
        var _this = this;
        var parents = [];
        var elem = document.elementFromPoint(this._currentPosition.x, this._currentPosition.y);
        // Do not move the line if element is undefined or drag is not allowed
        if (!elem || (draggedItem && !this.isDragAllowed(draggedItem, elem, dataDragDisallowed))) {
            return undefined;
        }
        do {
            parents.push(elem);
            elem = elem.parentElement;
        } while (elem && elem !== this._host);
        var _loop_1 = function (i) {
            var candidates = parents.filter(function (element) {
                return _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(element, DATA_ATTRIBUTE, _this._treeLevelTagsBottomUp[i]);
            });
            if (candidates && candidates.length > 0) {
                var lastLeaf = this_1._getLastLeaf(candidates[0]);
                if (lastLeaf) {
                    // if element contains leaves but the last leaf is above the mouse return the leaf
                    var rect = lastLeaf.getBoundingClientRect();
                    if (rect.bottom < this_1._currentPosition.y) {
                        return { value: lastLeaf };
                    }
                    return { value: undefined };
                }
                return { value: candidates[0] };
            }
        };
        var this_1 = this;
        // go up the tree and find the node with the tag closest to the leaf tag
        for (var i = 0; i < this._treeDepth; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return undefined;
    };
    DragZoneTree.prototype.isLeafElement = function (element) {
        return _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0]);
    };
    DragZoneTree.prototype.addDisallowedStyles = function (dataDragDisallowed, dataDragDisallowedCss, draggedItem) {
        if (!draggedItem) {
            draggedItem = this._getLeafElementFromMousePosition(this._startPosition.x, this._startPosition.y);
        }
        if (_DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(draggedItem, DATA_DISALLOWED_ATTRIBUTE, dataDragDisallowed)) {
            this.applyRemoveCssToDataDragDisallowed(dataDragDisallowed, true, dataDragDisallowedCss);
        }
    };
    DragZoneTree.prototype.applyRemoveCssToDataDragDisallowed = function (dataDragDisallowedTag, apply, cssClass) {
        var elements = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(this._host, DATA_DISALLOWED_AREA_ATTRIBUTE, dataDragDisallowedTag);
        for (var i = 0; i < elements.length; i++) {
            if (apply) {
                elements[i].classList.add(cssClass);
            }
            else {
                elements[i].classList.remove(cssClass);
            }
        }
    };
    DragZoneTree.prototype.getElementWithDataDisallowedAreaTag = function (elem, value) {
        var tempElement = elem;
        // look up the parent tree to find the element with data-drag-disallowed-area-tag
        while (tempElement && tempElement !== this._host) {
            if (_DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(tempElement, DATA_DISALLOWED_AREA_ATTRIBUTE, value)) {
                return tempElement;
            }
            tempElement = tempElement.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype.getIndexInPositionMatrix = function (position) {
        for (var i = 0; i < this._positionMatrix.length; i++) {
            var equals = true;
            for (var j = 0; j < position.length; j++) {
                if (position[j] !== this._positionMatrix[i][j]) {
                    equals = false;
                    break;
                }
            }
            if (equals) {
                return i;
            }
        }
        return -1;
    };
    DragZoneTree.prototype.getElementFromPosition = function (position, refreshMatrix) {
        if (refreshMatrix || this._bottomElements.size === 0) {
            this.refreshPositionMatrix();
        }
        var index = this.getIndexInPositionMatrix(position);
        if (index > -1 && index < this._bottomElements.size) {
            return this._bottomElements.get(index);
        }
        else {
            return undefined;
        }
    };
    DragZoneTree.prototype.getLeafElementFromHandle = function (handle) {
        var element = handle;
        while (element && element !== this._host) {
            if (_DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0])) {
                return element;
            }
            element = element.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype.getHandleFromLeafElement = function (draggedElement, value) {
        var dragHandles = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(draggedElement, DATA_DRAG_HANDLE, value);
        return dragHandles && dragHandles[0];
    };
    /**
     * Refreshes the array of positions for each branch of the tree. This is an array of arrays that are tree depth.
     * If one of the branches doesn't go all the way to the leaves, the values in the array will be -1 for any missing
     * node. So [0,0,0] is the first leaf, [0,1,-1] is what we get if the second node has no leaves.
     */
    DragZoneTree.prototype.refreshPositionMatrix = function () {
        var currentPosition = [];
        this._positionMatrix = [];
        this._bottomElements = new Map();
        this._traverse(this._host, this._treeDepth - 1, currentPosition);
        this._fixMatrix(this._positionMatrix);
        return this._positionMatrix;
    };
    /**
     * Method to add additional style to a specified element when another element/section is dragged over it.
     * @param addStyle boolean value to indicate if we want to add or remove specified style
     * @param classNameToApply New class name which adds specific styles to the element while dragging
     * @param elementSelector: Class name selector for the element which gets specified styles applied
     * @param treeLevelTagsBottomUp: Tags added to DOM elements that can be dragged
     */
    DragZoneTree.prototype.addOrRemoveStyleToSpecifiedElement = function (addStyle, classNameToApply, elementSelector) {
        if (addStyle &&
            _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(this.draggedItem, DATA_DRAG_HIDDEN_EXTRA_ELEMENTS, 'true')) {
            this._applyStyleToElement(addStyle, classNameToApply, this.draggedItem);
        }
        if (!addStyle) {
            var extraElements = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(this._host, DATA_DRAG_HIDDEN_EXTRA_ELEMENTS, 'true');
            for (var i = 0; i < extraElements.length; i++) {
                this._applyStyleToElement(addStyle, classNameToApply, extraElements[i]);
            }
        }
        var elements = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(this._host, DATA_DRAG_HIDDEN, 'true');
        for (var i = 0; i < elements.length; i++) {
            this._applyStyleToElement(addStyle, classNameToApply, elements[i]);
        }
    };
    DragZoneTree.prototype._applyStyleToElement = function (addStyle, classNameToApply, specifiedElement) {
        if (addStyle) {
            specifiedElement.classList.add(classNameToApply);
        }
        else {
            specifiedElement.classList.remove(classNameToApply);
        }
    };
    DragZoneTree.prototype._traverse = function (parent, tagLevel, currentPosition) {
        var children = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(parent, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[tagLevel]);
        if (children.length === 0 || tagLevel < 0) {
            this._positionMatrix.push(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentPosition));
            this._bottomElements.set(this._positionMatrix.length - 1, parent);
            return;
        }
        for (var i = 0; i < children.length; i++) {
            currentPosition.push(i);
            this._traverse(children[i], tagLevel - 1, currentPosition);
            currentPosition.pop();
        }
    };
    DragZoneTree.prototype._fixMatrix = function (positionMatrix) {
        for (var i = 0; i < positionMatrix.length; i++) {
            for (var j = 0; j < this._treeDepth; j++) {
                if (positionMatrix[i].length <= j) {
                    positionMatrix[i].push(-1);
                }
            }
            positionMatrix[i] = positionMatrix[i].reverse();
        }
    };
    /**
     * This method is guaranteed to return an array of numbers with length = this._treeDepth
     * @param element
     */
    DragZoneTree.prototype._getElementPosition = function (element) {
        var treeIndeces = [];
        var tempElement = element;
        var tagLevel = this._getElementTagLevel(tempElement);
        // the item indeces are calculated relative to the parent, except for the top level item
        for (var i = 0; i < this._treeDepth - 1; i++) {
            if (i < tagLevel) {
                treeIndeces[i] = 0;
                continue;
            }
            var thisLevelElement = tempElement;
            // look up the parent tree to find the first parent with the prev level tree tag
            while (tempElement.parentElement && tempElement !== this._host) {
                tempElement = tempElement.parentElement;
                if (_DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(tempElement, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[i + 1])) {
                    break;
                }
            }
            var siblings = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(tempElement, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[i]);
            treeIndeces[i] = siblings.indexOf(thisLevelElement);
            if (tempElement === this._host) {
                break;
            }
        }
        // the top level item index is calculated relative to the host
        if (tempElement !== this._host) {
            var tagListLastIndex = this._treeDepth - 1;
            var siblings = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(this._host, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[tagListLastIndex]);
            treeIndeces[tagListLastIndex] = siblings.indexOf(tempElement);
        }
        return treeIndeces;
    };
    DragZoneTree.prototype._getElementTagLevel = function (element) {
        var tag = element.getAttribute(DATA_ATTRIBUTE);
        if (!tag) {
            return undefined;
        }
        return this._treeLevelTagsBottomUp.indexOf(tag);
    };
    DragZoneTree.prototype._getLeafElementFromMousePosition = function (x, y) {
        var elem = this._getElementFromPoint(x, y);
        while (elem && elem.parentElement && elem.parentElement !== this._host) {
            if (_DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].hasAttributeValue(elem, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0])) {
                return elem;
            }
            elem = elem.parentElement;
        }
        return undefined;
    };
    DragZoneTree.prototype._getLastLeaf = function (element) {
        var leaves = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_1__["DragZoneUtilities"].getElementsWithAttribute(element, DATA_ATTRIBUTE, this._treeLevelTagsBottomUp[0]);
        if (leaves.length === 0) {
            return undefined;
        }
        else {
            return leaves[leaves.length - 1];
        }
    };
    return DragZoneTree;
}());



/***/ }),

/***/ "5ADk":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "7MdC":
/*!****************************************!*\
  !*** ./lib/DeferredDragZoneControl.js ***!
  \****************************************/
/*! exports provided: DeferredDragZoneControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredDragZoneControl", function() { return DeferredDragZoneControl; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DragZoneControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DragZoneControl */ "8LNs");




var DEFAULT_PROPS = {
    treeLevelTagsBottomUp: [],
    isEnabled: false,
    dropPositionOffsetTopPx: 0,
    dropPositionOffsetBottomPx: 0,
    dropPositionOffsetLeftPx: 0,
    dropPositionOffsetRightPx: 0,
    supportKeyboardAlternative: true
};
/**
 * The logic deferred out from DragZone.tsx to make sure we only load edit logic in edit mode.
 */
var DeferredDragZoneControl = /** @class */ (function () {
    function DeferredDragZoneControl() {
        var _this = this;
        this.init = function (containerRef, props) {
            var options = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["extend"])(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(DEFAULT_PROPS), {
                host: containerRef.current,
                getTheme: props.theme ? function () { return props.theme; } : _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getTheme"]
            }, props);
            _this._dragZoneControl = new _DragZoneControl__WEBPACK_IMPORTED_MODULE_3__["DragZoneControl"](options);
            return options;
        };
        this.onDragZonePropsUpdated = function (prevIsEnabled, isEnabled) {
            if (_this._dragZoneControl) {
                try {
                    if (!prevIsEnabled && isEnabled) {
                        _this._dragZoneControl.activate();
                    }
                    else if (prevIsEnabled && !isEnabled) {
                        _this._dragZoneControl.deactivate();
                    }
                    else if (isEnabled) {
                        _this._dragZoneControl.refreshHandles();
                    }
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(DeferredDragZoneControl._logSource, error, 'ensureOnUpdateRefresh');
                }
            }
        };
    }
    DeferredDragZoneControl._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('DeferredDragZoneControl');
    return DeferredDragZoneControl;
}());



/***/ }),

/***/ "8LNs":
/*!********************************!*\
  !*** ./lib/DragZoneControl.js ***!
  \********************************/
/*! exports provided: DragZoneControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragZoneControl", function() { return DragZoneControl; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DragZoneKeyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragZoneKeyboard */ "c/wX");
/* harmony import */ var _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DragZoneUtilities */ "BTj3");
/* harmony import */ var _DragZoneTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DragZoneTree */ "0hgw");
/* harmony import */ var _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/DragZone.module.scss */ "HZUo");
/* harmony import */ var _KillSwitches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KillSwitches */ "fCCa");







var DATA_DRAG_HANDLE = 'data-drag-handle';
var DRAGSTART_TIMEOUT_MS = 100;
var ICON_MARGIN_PX = -25;
var DRAGOVER_INTERVAL_MS = 200;
var LINE_WIDTH_PX = 3;
var LINE_WIDTH_THIN_PX = 2;
/**
 * @internal
 */
var DragZoneControl = /** @class */ (function () {
    function DragZoneControl(options) {
        var _this = this;
        this._activatedHandles = new Set();
        this._onMouseMove = function (evt) {
            _this._mouseOut = false;
            _this._updateMousePosition(evt);
        };
        this._updateMousePosition = function (evt) {
            _this._tree.currentPosition.x = evt.clientX;
            _this._tree.currentPosition.y = evt.clientY;
        };
        this._onTouchMove = function (evt) {
            _this._mouseOut = false;
            if (evt.touches.length === 1) {
                var touch = evt.touches[0];
                _this._tree.currentPosition.x = touch.clientX;
                _this._tree.currentPosition.y = touch.clientY;
                evt.preventDefault();
            }
        };
        this._onMouseOut = function () {
            _this._mouseOut = true;
        };
        this._handleDragLeaveFromExternalSource = function (evt) {
            _this._removeLine();
            if (_this._options.getDropEffectFromDragEvent && evt) {
                _this._dragEventDropEffect = _this._options.getDropEffectFromDragEvent(evt);
            }
        };
        this._handleDropOverFromExternalSource = function (evt) {
            if (!evt || !evt.target) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            _this._updateMousePosition(evt);
            _this._removeLine();
            _this._isDragging = false;
            var element = _this._tree.getLeafElementFromMousePosition();
            var shouldAddAtTheEndOfSection = false;
            if (!element) {
                element = evt.target;
                // the plus button will sometimes block the web part event listener
                // and give an undefined drop position
                // by default we just add to the end but it's probably better
                // to just ignore it and not add the web part (it's a very thin div)
                if (element.className === 'CanvasToolboxHint-plusButtonWrapper') {
                    return;
                }
                shouldAddAtTheEndOfSection = true;
            }
            _this._updateHoverOverPosition(element);
            if (_this._hoverOverPosition) {
                if (evt.dataTransfer.files && evt.dataTransfer.files.length > 0) {
                    _this._triggerOnDropped(evt.dataTransfer.items, _this._hoverOverPosition, shouldAddAtTheEndOfSection);
                }
            }
            _this._reset();
        };
        this._triggerOnDropped = function (data, droppedPosition, shouldAddAtTheEndOfSection) {
            if (_this._options.onDropFromExternalSource) {
                _this._options.onDropFromExternalSource(data, droppedPosition, shouldAddAtTheEndOfSection);
            }
        };
        this._handleDragOverFromExternalSource = function (evt) {
            if (!evt || !evt.target) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            _this._updateMousePosition(evt);
            var element = _this._tree.getLeafElementFromMousePosition();
            if (!element) {
                _this._removeLine();
                element = evt.target;
            }
            if (evt.dataTransfer) {
                var shouldInsertBefore = _this._updateHoverOverPosition(element);
                var isLeaf = _this._tree.isLeafElement(element);
                // if this._hoverPosition[0] === -1, it might not necessarily be an undroppable target
                // but if this._hoverPosition === [-1] then it is definitely an undroppable target
                if (_this._hoverOverPosition &&
                    _this._hoverOverPosition.length !== 1 &&
                    _this._hoverOverPosition[0] !== -1) {
                    _this._moveLine(element, isLeaf, shouldInsertBefore);
                }
                if (_this._dragEventDropEffect) {
                    evt.dataTransfer.dropEffect = _this._dragEventDropEffect;
                }
            }
        };
        this._updateHoverOverPosition = function (element) {
            _this._hoverOverPosition = _this._tree.getHoverOverItemPosition(element);
            var shouldInsertBefore = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].shouldInsertBeforeElement(element, _this._tree.currentPosition.x, _this._tree.currentPosition.y, _this._supportHorizontalReorder);
            var isLeaf = _this._tree.isLeafElement(element);
            if (!shouldInsertBefore && isLeaf) {
                _this._hoverOverPosition[0]++;
            }
            return shouldInsertBefore;
        };
        /**
         * 1
         * Only consider this a drag if the mouse button has been pressed for DRAGSTART_TIMEOUT_MS. Also works for touch
         * Also get the start coordinates here because the mouse can move in DRAGSTART_TIMEOUT_MS and the dragged item
         * may change
         */
        this._onMouseDown = function (evt) {
            _this._mouseDown = true;
            // Start a timeout to figure out if it's a drag.
            _this._async.setTimeout(_this._startDrag, DRAGSTART_TIMEOUT_MS);
            var element = evt.target;
            var dragHandle = element.getAttribute('data-drag-handle');
            if (dragHandle) {
                _this._async.setTimeout(function () {
                    return _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_EngagementLogger"].logEvent(dragHandle);
                }, DRAGSTART_TIMEOUT_MS);
            }
            // get the start coordinates
            if (evt instanceof MouseEvent) {
                // Some browsers like Chrome have default behavior on drag and drop where user can directly drag an image
                // or text to another page or address bar. The default behavior will block the onMouseUp to be triggered.
                evt.preventDefault();
                var mouseEvent = evt;
                _this._tree.startPosition.x = mouseEvent.clientX;
                _this._tree.startPosition.y = mouseEvent.clientY;
                _this._tree.currentPosition.x = mouseEvent.clientX;
                _this._tree.currentPosition.y = mouseEvent.clientY;
            }
            else if (evt instanceof TouchEvent) {
                var touchEvent = evt;
                if (touchEvent && touchEvent.touches.length > 0) {
                    _this._tree.startPosition.x = touchEvent.touches[0].clientX;
                    _this._tree.startPosition.y = touchEvent.touches[0].clientY;
                    _this._tree.currentPosition.x = touchEvent.touches[0].clientX;
                    _this._tree.currentPosition.y = touchEvent.touches[0].clientY;
                }
            }
        };
        this._changeIconVisibility = function (visible) {
            _this._icon.classList.remove(visible ? _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconCollapsed : _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconVisible);
            _this._icon.classList.add(visible ? _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconVisible : _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconCollapsed);
        };
        this._internalMouseUp = function () {
            _this._mouseDown = false;
        };
        /**
         * 4
         * Depending on the actions that happened while dragging it can either do nothing, reset the state or trigger onMoved
         */
        this._onMouseUp = function () {
            // If it's not dragging return
            if (!_this._isDragging) {
                return;
            }
            _this._isDragging = false;
            _this._changeIconVisibility(false);
            document.body.classList.remove(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].noselect);
            if (_this._mouseOut || !_this._draggedElement || !_this._dragOverElement) {
                _this._resetCursorEvents();
                _this._reset();
                return;
            }
            _this._resetCursorEvents();
            _this._triggerOnMoved(_this._draggedItemPosition, _this._hoverOverPosition);
        };
        this._triggerOnMoved = function (draggedItemPosition, dropPosition) {
            if (_this._options.onMoved) {
                if (draggedItemPosition &&
                    draggedItemPosition.length === _this._tree.depth &&
                    dropPosition &&
                    dropPosition.length === _this._tree.depth) {
                    _this._options.onMoved(draggedItemPosition, dropPosition);
                }
            }
            _this._reset();
        };
        // Use the current position of the mouse relative to the items and draw the line for the new position if dropped
        this._emulateDragOver = function () {
            var disallowedTag = _this._options.disallowedTag;
            var plainElement = _this._options.canDropOnEmptyParent
                ? _this._tree.getBottomMostElementFromMousePosition(_this._draggedElement, disallowedTag)
                : _this._tree.getLeafElementFromMousePosition();
            var element = plainElement;
            if (!element) {
                return;
            }
            // there needs to be a short circuit here
            // VSO WEX!:323712
            _this._hoverOverPosition = _this._tree.getHoverOverItemPosition(element);
            var shouldInsertBefore = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].shouldInsertBeforeElement(element, _this._tree.currentPosition.x, _this._tree.currentPosition.y, _this._supportHorizontalReorder);
            var isLeaf = _this._tree.isLeafElement(element);
            if (!shouldInsertBefore && isLeaf) {
                _this._hoverOverPosition[0]++;
            }
            _this._moveLine(element, isLeaf, shouldInsertBefore);
        };
        this._moveLine = function (adjacentElement, isLeaf, shouldInsertBefore) {
            var _a, _b, _c, _d;
            var _e = _this._currentDragLineSettings || {}, element = _e.element, currentIsLeaf = _e.isLeaf, currentShouldInsertBefore = _e.shouldInsertBefore;
            if (adjacentElement.isSameNode(element) &&
                currentIsLeaf === isLeaf &&
                currentShouldInsertBefore === shouldInsertBefore) {
                // Avoid doing all the DOM operations which causes DOM reflow if the line is same as the one already drawn.
                return;
            }
            _this._removeLine();
            _this._currentDragLineSettings = {
                element: adjacentElement,
                isLeaf: isLeaf,
                shouldInsertBefore: shouldInsertBefore
            };
            _this._line = document.createElement('div');
            _this._line.className = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["css"])(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dropLocation, _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].customTheme, Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])({ backgroundColor: _this._options.getTheme().semanticColors.primaryButtonBackground }), (_a = _this._options.additionalDraggingDecoration) === null || _a === void 0 ? void 0 : _a.dropLocationThemeEmphasisName);
            _this._line.dataset.automationId = 'dropLocation';
            var _f = _this._options, supportHorizontalReorder = _f.supportHorizontalReorder, additionalDraggingDecoration = _f.additionalDraggingDecoration;
            if (supportHorizontalReorder) {
                _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].verticalLine);
            }
            else {
                if ((_b = additionalDraggingDecoration) === null || _b === void 0 ? void 0 : _b.thinDropHint) {
                    _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].horizontalLineThin);
                }
                else {
                    _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].horizontalLine);
                }
                if (((_c = additionalDraggingDecoration) === null || _c === void 0 ? void 0 : _c.hideDropHintsAroundElement) &&
                    _this._draggedElement &&
                    _this._draggedElement.isEqualNode(adjacentElement)) {
                    _this._line.classList.add(additionalDraggingDecoration.classNameToApply);
                }
            }
            // if element is not base one just add the line as first appendChild
            if (isLeaf) {
                _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].linePositionAbsolute);
                if (supportHorizontalReorder) {
                    if (Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getRTL"])()) {
                        if (!shouldInsertBefore) {
                            _this._line.style.marginRight = _this._getLineRightPosition(adjacentElement.parentElement, adjacentElement) + "px";
                        }
                        else {
                            _this._line.style.marginRight = -LINE_WIDTH_PX - _this._options.dropPositionOffsetLeftPx + "px";
                        }
                    }
                    else {
                        if (!shouldInsertBefore) {
                            _this._line.style.marginLeft = _this._getLineRightPosition(adjacentElement.parentElement, adjacentElement) + "px";
                        }
                        else {
                            _this._line.style.marginLeft = -LINE_WIDTH_PX - _this._options.dropPositionOffsetLeftPx + "px";
                        }
                    }
                }
                else {
                    if (!shouldInsertBefore) {
                        _this._line.style.marginTop = _this._getLineBottomPosition(adjacentElement.parentElement, adjacentElement) + "px";
                    }
                    else {
                        var lineWidth = LINE_WIDTH_PX;
                        if ((_d = additionalDraggingDecoration) === null || _d === void 0 ? void 0 : _d.thinDropHint) {
                            lineWidth = LINE_WIDTH_THIN_PX;
                        }
                        _this._line.style.marginTop = -lineWidth - _this._options.dropPositionOffsetTopPx + "px";
                    }
                }
                adjacentElement.parentElement.insertBefore(_this._line, adjacentElement);
            }
            else {
                if (_this._supportHorizontalReorder) {
                    _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].verticalLine);
                }
                else {
                    _this._line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].horizontalLine);
                }
                adjacentElement.appendChild(_this._line);
            }
            _this._dragOverElement = adjacentElement;
            return _this._line;
        };
        this._emulateMouseMove = function () {
            var _a = _this._options, disallowedTag = _a.disallowedTag, onMoving = _a.onMoving;
            // Redraw the icon for the new position of the mouse
            _this._moveIcon(_this._tree.currentPosition.x, _this._tree.currentPosition.y);
            if (onMoving && _this._isDragging) {
                onMoving(!_this._tree.isDragAllowed(_this._draggedElement, _this._tree.getDraggedOverElement(), disallowedTag));
            }
            _this._animationFrameHandle = _this._async.requestAnimationFrame(_this._emulateMouseMove);
        };
        this._moveIcon = function (x, y) {
            _this._icon.style.top = y + ICON_MARGIN_PX + "px";
            if (Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getRTL"])()) {
                var xPosition = _this._windowInnerWidth - x;
                _this._icon.style.right = xPosition + ICON_MARGIN_PX + "px";
            }
            else {
                _this._icon.style.left = x + ICON_MARGIN_PX + "px";
            }
        };
        /**
         * 2
         * If DRAGSTART_TIMEOUT_MS from mouse down have elapsed and the mouse button is still pressed, start the drag
         */
        this._startDrag = function () {
            if (_this._mouseDown) {
                _this._onDragStart();
            }
        };
        this._removeLine = function () {
            // if there was a previous _dragOverElement that means there was a previous line. Remove the line
            if (_this._dragOverElement) {
                if (_this._tree.isLeafElement(_this._dragOverElement) &&
                    _this._dragOverElement.parentElement.contains(_this._line)) {
                    _this._dragOverElement.parentElement.removeChild(_this._line);
                }
                else if (_this._dragOverElement.contains(_this._line)) {
                    _this._dragOverElement.removeChild(_this._line);
                }
            }
            _this._currentDragLineSettings = undefined;
        };
        this._updateWindowInnerWidth = function () {
            _this._windowInnerWidth = window.innerWidth;
        };
        if (!options.host) {
            throw Error('Need to specify a host control for the DragZone');
        }
        if (!(options.treeLevelTagsBottomUp && options.treeLevelTagsBottomUp.length > 0)) {
            throw Error('Need to have at least one level of tags for the DragZone');
        }
        this._options = options;
        if (options.icon) {
            this._icon = options.icon;
        }
        else {
            this._icon = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].getDefaultIcon();
            this._icon.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconCollapsed);
            this._icon.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].iconAdditionalStyle);
        }
        this._tree = new _DragZoneTree__WEBPACK_IMPORTED_MODULE_4__["DragZoneTree"](options.treeLevelTagsBottomUp, options.host);
    }
    DragZoneControl.prototype.activate = function () {
        var _this = this;
        // add all the event handlers
        var _a = this._options, host = _a.host, dragHandleTags = _a.dragHandleTags, scrollIntoView = _a.scrollIntoView, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, onMoveStart = _a.onMoveStart, onMoving = _a.onMoving;
        this._async = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["Async"]();
        host.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].host);
        if (dragHandleTags && dragHandleTags.length > 0) {
            dragHandleTags.forEach(function (tag) {
                _this._dragHandles = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].getElementsWithAttribute(host, DATA_DRAG_HANDLE, tag);
                _this._dragHandles.forEach(function (handle) {
                    if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isFixDragZoneStateKsActivated"])()) {
                        _this._activatedHandles.add(handle);
                    }
                    handle.addEventListener('mousedown', _this._onMouseDown);
                    handle.addEventListener('touchstart', _this._onMouseDown);
                    handle.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].handleGrab);
                    handle.addEventListener('touchmove', function (event) { return event.preventDefault(); });
                });
            });
        }
        else {
            host.addEventListener('mousedown', this._onMouseDown);
            host.addEventListener('touchstart', this._onMouseDown);
        }
        var dragZoneKeyboardOptions = {
            host: host,
            tree: this._tree,
            supportHorizontalReorder: this._supportHorizontalReorder,
            moveLine: this._moveLine,
            removeLine: this._removeLine,
            moveItem: this._triggerOnMoved,
            handles: this._dragHandles,
            strings: this._options.dragZoneStrings,
            handleTags: dragHandleTags,
            scrollIntoView: scrollIntoView,
            disallowedTag: disallowedTag,
            disallowedClassName: disallowedClassName,
            moveIcon: this._moveIcon,
            changeIconVisibility: this._changeIconVisibility,
            onMoveStart: onMoveStart,
            onMoving: onMoving
        };
        if (this._supportKeyboardAlternative) {
            this._dragZoneKeyboard = new _DragZoneKeyboard__WEBPACK_IMPORTED_MODULE_2__["default"](dragZoneKeyboardOptions);
        }
        host.addEventListener('mouseup', this._internalMouseUp);
        host.addEventListener('touchend', this._internalMouseUp);
        host.addEventListener('mouseleave', this._onMouseOut);
        host.addEventListener('touchout', this._onMouseOut);
        host.addEventListener('dragover', this._handleDragOverFromExternalSource);
        host.addEventListener('dragleave', this._handleDragLeaveFromExternalSource);
        host.addEventListener('drop', this._handleDropOverFromExternalSource);
        this._updateWindowInnerWidth();
        window.addEventListener('resize', this._updateWindowInnerWidth);
    };
    DragZoneControl.prototype.deactivate = function () {
        var _this = this;
        // remove everything set in the activate
        var _a = this._options, host = _a.host, dragHandleTags = _a.dragHandleTags;
        this._async.dispose();
        if (this._supportKeyboardAlternative && this._dragZoneKeyboard) {
            this._dragZoneKeyboard.dispose();
        }
        host.classList.remove(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].host);
        if (dragHandleTags && dragHandleTags.length > 0) {
            if (!Object(_KillSwitches__WEBPACK_IMPORTED_MODULE_6__["isFixDragZoneStateKsActivated"])()) {
                this._activatedHandles.forEach(function (handle) {
                    handle.removeEventListener('mousedown', _this._onMouseDown);
                    handle.removeEventListener('touchstart', _this._onMouseDown);
                    handle.classList.remove(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].handleGrab);
                    handle.removeEventListener('touchmove', function (event) { return event.preventDefault(); });
                });
                this._activatedHandles.clear();
            }
            else {
                dragHandleTags.forEach(function (tag) {
                    _this._dragHandles = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].getElementsWithAttribute(host, DATA_DRAG_HANDLE, tag);
                    _this._dragHandles.forEach(function (handle) {
                        handle.removeEventListener('mousedown', _this._onMouseDown);
                        handle.removeEventListener('touchstart', _this._onMouseDown);
                        handle.classList.remove(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].handleGrab);
                        handle.removeEventListener('touchmove', function (event) { return event.preventDefault(); });
                    });
                });
            }
        }
        else {
            host.removeEventListener('mousedown', this._onMouseDown);
            host.removeEventListener('touchstart', this._onMouseDown);
        }
        host.removeEventListener('mouseup', this._internalMouseUp);
        host.removeEventListener('touchend', this._internalMouseUp);
        host.removeEventListener('mouseleave', this._onMouseOut);
        host.removeEventListener('touchout', this._onMouseOut);
        host.removeEventListener('dragover', this._handleDragOverFromExternalSource);
        host.removeEventListener('dragleave', this._handleDragLeaveFromExternalSource);
        host.removeEventListener('drop', this._handleDropOverFromExternalSource);
        window.removeEventListener('resize', this._updateWindowInnerWidth);
    };
    /**
     * This happens very often so it should be quick.
     */
    DragZoneControl.prototype.refreshHandles = function () {
        var _this = this;
        var _a = this._options, host = _a.host, dragHandleTags = _a.dragHandleTags;
        if (dragHandleTags && dragHandleTags.length > 0) {
            dragHandleTags.forEach(function (tag) {
                var dragHandles = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].getElementsWithAttribute(host, DATA_DRAG_HANDLE, tag);
                var itemsAdded = _DragZoneUtilities__WEBPACK_IMPORTED_MODULE_3__["DragZoneUtilities"].getElementsNotInFirstArray(_this._dragHandles, dragHandles);
                if (itemsAdded.length > 0) {
                    itemsAdded.forEach(function (handle) {
                        _this._dragHandles.push(handle);
                        handle.addEventListener('mousedown', _this._onMouseDown);
                        handle.addEventListener('touchstart', _this._onMouseDown);
                        handle.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].handleGrab);
                    });
                }
                if (_this._supportKeyboardAlternative && _this._dragZoneKeyboard) {
                    _this._dragZoneKeyboard.addHandles(itemsAdded);
                }
            });
        }
    };
    /**
     * 3
     * Once we're sure it's a drag set the event listeners for mouse move (or touch since these are different).
     * Set the intervals for the drag over and mouse move since we emulate these and we don't use the actual events. Helps
     * with perf.
     */
    DragZoneControl.prototype._onDragStart = function () {
        var _a;
        var _b = this._options, disallowedTag = _b.disallowedTag, disallowedClassName = _b.disallowedClassName, additionalDraggingDecoration = _b.additionalDraggingDecoration;
        this._isDragging = true;
        if (window.getSelection()) {
            window.getSelection().removeAllRanges();
        }
        // add a noselect css class to the document body
        document.body.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].noselect);
        // Add a quick interval for the movement of the icon (better way?)
        // Add a slow interval to calculate the movement of the line
        this._animationFrameHandle = this._async.requestAnimationFrame(this._emulateMouseMove);
        this._dragOverInterval = this._async.setInterval(this._emulateDragOver, DRAGOVER_INTERVAL_MS);
        this._options.host.addEventListener('mousemove', this._onMouseMove);
        this._options.host.addEventListener('touchmove', this._onTouchMove);
        window.addEventListener('mouseup', this._onMouseUp);
        window.addEventListener('touchend', this._onMouseUp);
        this._autoScroll = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["AutoScroll"](this._options.host);
        // make the icon visible
        this._changeIconVisibility(true);
        this._options.host.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cursorDragging);
        // get the item that will be moved
        this._draggedItemPosition = this._tree.getDraggedItemPosition();
        this._draggedElement = this._tree.draggedItem;
        this._tree.addDisallowedStyles(disallowedTag, disallowedClassName);
        if ((_a = additionalDraggingDecoration) === null || _a === void 0 ? void 0 : _a.classNameToApply) {
            this._tree.addOrRemoveStyleToSpecifiedElement(true /* addStyle */, additionalDraggingDecoration.classNameToApply);
        }
        if (this._options.onMoveStart) {
            this._options.onMoveStart(this._draggedItemPosition);
        }
    };
    DragZoneControl.prototype._resetCursorEvents = function () {
        var _a;
        var _b = this._options, host = _b.host, additionalDraggingDecoration = _b.additionalDraggingDecoration;
        this._removeLine();
        this._tree.startPosition.x = undefined;
        this._tree.startPosition.y = undefined;
        this._async.cancelAnimationFrame(this._animationFrameHandle);
        this._async.clearInterval(this._dragOverInterval);
        host.removeEventListener('mousemove', this._onMouseMove);
        host.removeEventListener('touchmove', this._onTouchMove);
        window.removeEventListener('mouseup', this._onMouseUp);
        window.removeEventListener('touchend', this._onMouseUp);
        host.classList.remove(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cursorDragging);
        if ((_a = additionalDraggingDecoration) === null || _a === void 0 ? void 0 : _a.classNameToApply) {
            this._tree.addOrRemoveStyleToSpecifiedElement(false /* addStyle */, additionalDraggingDecoration.classNameToApply);
        }
        this._autoScroll.dispose();
    };
    DragZoneControl.prototype._reset = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName;
        this._draggedItemPosition = undefined;
        this._dragOverElement = undefined;
        this._tree.applyRemoveCssToDataDragDisallowed(disallowedTag, false, disallowedClassName);
    };
    DragZoneControl.prototype._getLineRightPosition = function (parent, element) {
        var childRect = element.getBoundingClientRect();
        var rightInsideParent = childRect.width + this._options.dropPositionOffsetRightPx;
        return rightInsideParent || 0;
    };
    DragZoneControl.prototype._getLineBottomPosition = function (parent, element) {
        var childRect = element.getBoundingClientRect();
        var bottomInsideParent = childRect.height + this._options.dropPositionOffsetBottomPx;
        return bottomInsideParent || 0;
    };
    Object.defineProperty(DragZoneControl.prototype, "_supportHorizontalReorder", {
        get: function () {
            return this._options.supportHorizontalReorder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragZoneControl.prototype, "_supportKeyboardAlternative", {
        get: function () {
            return this._options.supportKeyboardAlternative;
        },
        enumerable: true,
        configurable: true
    });
    return DragZoneControl;
}());



/***/ }),

/***/ "BTj3":
/*!**********************************!*\
  !*** ./lib/DragZoneUtilities.js ***!
  \**********************************/
/*! exports provided: DragZoneUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragZoneUtilities", function() { return DragZoneUtilities; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/DragZone.module.scss */ "HZUo");


var DragZoneUtilities = /** @class */ (function () {
    function DragZoneUtilities() {
    }
    DragZoneUtilities.getElementsWithAttribute = function (parent, tag, value) {
        if (!parent) {
            return [];
        }
        var querySelector = "[" + tag + (value ? "=\"" + value + "\"" : "") + "]";
        var tempEls = parent.querySelectorAll(querySelector);
        var elements = [];
        for (var index = 0; index < tempEls.length; index++) {
            elements.push(tempEls[index]);
        }
        return elements;
    };
    DragZoneUtilities.getElementsWithClassname = function (parent, className) {
        if (!parent) {
            return [];
        }
        var tempEls = parent.querySelectorAll(className);
        var elements = [];
        for (var index = 0; index < tempEls.length; index++) {
            elements.push(tempEls[index]);
        }
        return elements;
    };
    DragZoneUtilities.hasAttributeValue = function (elem, attribute, value) {
        return elem && elem.getAttribute(attribute) === value;
    };
    DragZoneUtilities.shouldInsertBeforeElement = function (element, x, y, isHorizontalReorder) {
        var rectangle = element.getBoundingClientRect();
        var center;
        if (isHorizontalReorder) {
            center = (rectangle.left + rectangle.right) / 2;
            return Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getRTL"])() ? x > center : x < center;
        }
        else {
            center = (rectangle.bottom + rectangle.top) / 2;
            return y < center;
        }
    };
    DragZoneUtilities.getDefaultIcon = function () {
        var icon = document.createElement('div');
        icon.innerText = 'icon';
        icon.className = _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].defaultIconClass;
        icon.hidden = true;
        document.body.appendChild(icon);
        return icon;
    };
    DragZoneUtilities.elementArrayEquals = function (array1, array2) {
        if (!array1 || !array2) {
            return false;
        }
        if (array1.length !== array2.length) {
            return false;
        }
        for (var i = 0; i < array1.length; i++) {
            if (!array1[i].isEqualNode(array2[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns all elements in the second array that are not in the first array
     * @param array1 - array that contains all "existing" elements
     * @param array2 - array containing "existing" elements and new ones that should be returned
     */
    DragZoneUtilities.getElementsNotInFirstArray = function (array1, array2) {
        if (!array1 || !array2 || array2.length === 0) {
            return [];
        }
        var addedElements = array2.filter(function (el) { return array1.indexOf(el) === -1; });
        return addedElements;
    };
    return DragZoneUtilities;
}());



/***/ }),

/***/ "HZUo":
/*!*****************************************!*\
  !*** ./lib/css/DragZone.module.scss.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DragZone.module.css */ "XEVl");
var styles = {
    defaultIconClass: 'a_a_fc275664',
    dropLocation: 'b_a_fc275664',
    horizontalLine: 'c_a_fc275664',
    horizontalLineThin: 'e_a_fc275664',
    verticalLine: 'f_a_fc275664',
    customTheme: 'g_a_fc275664',
    noselect: 'h_a_fc275664',
    linePositionAbsolute: 'i_a_fc275664',
    iconVisible: 'j_a_fc275664',
    iconCollapsed: 'k_a_fc275664',
    iconAdditionalStyle: 'l_a_fc275664',
    host: 'm_a_fc275664',
    cursorDragging: 'n_a_fc275664',
    handleGrab: 'o_a_fc275664',
    hideLine: 'p_a_fc275664'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "XEVl":
/*!*************************************!*\
  !*** ./lib/css/DragZone.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DragZone.module.css */ "cNM6");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "c/wX":
/*!*********************************!*\
  !*** ./lib/DragZoneKeyboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-a11y */ "ytfe");
/* harmony import */ var _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/DragZone.module.scss */ "HZUo");






// tslint:disable-next-line:typedef variable-name
var KeyCodes = {
    Enter: 13,
    Escape: 27,
    Space: 32,
    LeftArrow: 37,
    UpArrow: 38,
    RightArrow: 39,
    DownArrow: 40
};
var DRAG_ZONE = 'DragZone';
// this should also know the location where the move started happening and it should track the hoveroveritem separately?
// maybe?
var DragZoneKeyboard = /** @class */ (function () {
    function DragZoneKeyboard(options) {
        var _this = this;
        this._isMovingForward = false;
        this._viewModeKeyDown = function (evt) {
            var _a = _this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, changeIconVisibility = _a.changeIconVisibility, onMoveStart = _a.onMoveStart, moveIcon = _a.moveIcon, removeLine = _a.removeLine, strings = _a.strings, host = _a.host, tree = _a.tree;
            if (!_this._isMoving && (evt.keyCode === KeyCodes.Enter || evt.keyCode === KeyCodes.Space)) {
                _this._isMoving = true;
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveStarted);
                host.addEventListener('keydown', _this._moveModeKeyDown);
                _this._draggedElement = tree.getLeafElementFromHandle(evt.target);
                _this._draggedPosition = tree.getHoverOverItemPosition(_this._draggedElement);
                _this._treeMatrix = tree.refreshPositionMatrix();
                _this._currentLocationIndex = tree.getIndexInPositionMatrix(_this._draggedPosition);
                if (disallowedTag && disallowedClassName) {
                    tree.addDisallowedStyles(disallowedTag, disallowedClassName, _this._draggedElement);
                }
                if (onMoveStart) {
                    onMoveStart(_this._draggedPosition);
                }
                var iconPosition = _this._getIconPosition(_this._draggedElement);
                if (iconPosition) {
                    moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
                }
                changeIconVisibility(true);
                evt.stopPropagation();
                evt.preventDefault();
            }
            else if (evt.keyCode === KeyCodes.Escape) {
                removeLine();
                changeIconVisibility(false);
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveCancelled);
                _this._isMoving = false;
                _this._setFocusOnHandle(_this._draggedElement);
                host.removeEventListener('keydown', _this._moveModeKeyDown);
                _this._removeStylesFromDisallowedArea();
            }
        };
        this._moveModeKeyDown = function (evt) {
            var _a = _this._options, removeLine = _a.removeLine, host = _a.host, moveItem = _a.moveItem, strings = _a.strings, supportHorizontalReorder = _a.supportHorizontalReorder, tree = _a.tree, disallowedTag = _a.disallowedTag, changeIconVisibility = _a.changeIconVisibility;
            if (evt.keyCode === KeyCodes.Enter) {
                removeLine();
                changeIconVisibility(false);
                if (tree.isDragAllowed(_this._draggedElement, _this._dropOverElement, disallowedTag)) {
                    moveItem(_this._draggedPosition, _this._dropPosition);
                    var draggedElement = tree.getElementFromPosition(_this._dropPosition, true);
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(strings.moveComplete, _this._formatFullPosition(_this._draggedPosition), _this._formatFullPosition(_this._dropPosition)));
                    _this._setFocusOnHandle(draggedElement);
                }
                else {
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveNotAllowed);
                }
                _this._isMoving = false;
                var dropPosition = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["clone"])(_this._dropPosition);
                // While moving forward, the drop position increases an extra index because it indicates
                // the position of line. Each section would have two lines so we need to decrease it by
                // one to get the right dropped position for the section
                if (_this._isMovingForward && dropPosition && !dropPosition[1] && !dropPosition[2]) {
                    dropPosition[0]--;
                }
                var newDraggedElement = tree.getElementFromPosition(dropPosition, true);
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(strings.moveComplete, _this._formatFullPosition(_this._draggedPosition), _this._formatFullPosition(_this._dropPosition)));
                _this._setFocusOnHandle(newDraggedElement);
                host.removeEventListener('keydown', _this._moveModeKeyDown);
                _this._removeStylesFromDisallowedArea();
            }
            else if (evt.keyCode === KeyCodes.DownArrow ||
                (supportHorizontalReorder && KeyCodes.RightArrow === Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getRTLSafeKeyCode"])(evt.keyCode))) {
                _this._moveForward();
                _this._isMovingForward = true;
            }
            else if (evt.keyCode === KeyCodes.UpArrow ||
                (supportHorizontalReorder && KeyCodes.LeftArrow === Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_1__["getRTLSafeKeyCode"])(evt.keyCode))) {
                _this._moveBack();
                _this._isMovingForward = false;
            }
            evt.stopPropagation();
            evt.preventDefault();
        };
        options.strings = options.strings || {
            handleTitle: '',
            moveStarted: '',
            moveComplete: '',
            moveCancelled: '',
            moveNotAllowed: '',
            moveInsideLevel: []
        }; // In the consumer not passing the optional strings.
        this._options = options;
        var handles = options.handles;
        var host = options.host, strings = options.strings;
        if (handles) {
            handles.forEach(function (handle) {
                handle.addEventListener('keydown', _this._viewModeKeyDown);
                handle.title = strings.handleTitle;
            });
        }
        else {
            host.addEventListener('keydown', this._viewModeKeyDown);
            handles = [];
        }
    }
    DragZoneKeyboard.prototype.dispose = function () {
        var _this = this;
        var _a = this._options, handles = _a.handles, host = _a.host;
        if (handles) {
            handles.forEach(function (handle) {
                handle.removeEventListener('keydown', _this._viewModeKeyDown);
            });
        }
        else {
            host.removeEventListener('keydown', this._viewModeKeyDown);
        }
    };
    DragZoneKeyboard.prototype.addHandles = function (handles) {
        var _this = this;
        handles.forEach(function (handle) {
            handle.addEventListener('keydown', _this._viewModeKeyDown);
            handle.title = _this._options.strings.handleTitle;
            _this._options.handles.push(handle);
        });
    };
    DragZoneKeyboard.prototype._removeStylesFromDisallowedArea = function () {
        var _a = this._options, disallowedTag = _a.disallowedTag, disallowedClassName = _a.disallowedClassName, tree = _a.tree;
        if (disallowedTag && disallowedClassName) {
            tree.applyRemoveCssToDataDragDisallowed(disallowedTag, false, disallowedClassName);
        }
    };
    DragZoneKeyboard.prototype._setFocusOnHandle = function (element) {
        var _a = this._options, handleTags = _a.handleTags, tree = _a.tree;
        if (handleTags && handleTags.length > 0) {
            handleTags.forEach(function (tag) {
                var handle = tree.getHandleFromLeafElement(element, tag);
                if (handle) {
                    var tabIndex = handle.getAttribute('tabindex');
                    if (tabIndex !== '0') {
                        handle.setAttribute('tabindex', '0');
                        handle.focus();
                        // Reset the tab index after focus
                        if (!isNaN(+tabIndex)) {
                            handle.setAttribute('tabindex', tabIndex);
                        }
                    }
                    else {
                        handle.focus();
                    }
                }
            });
        }
    };
    DragZoneKeyboard.prototype._moveForward = function () {
        var _a = this._options, tree = _a.tree, moveLine = _a.moveLine, strings = _a.strings, scrollIntoView = _a.scrollIntoView, moveIcon = _a.moveIcon, onMoving = _a.onMoving, disallowedTag = _a.disallowedTag;
        var line;
        if (this._currentLocationIndex < this._treeMatrix.length - 1) {
            var newIndex = this._currentLocationIndex + 1;
            var newTentativeElement = tree.getElementFromPosition(this._treeMatrix[newIndex]);
            this._dropPosition = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["clone"])(this._treeMatrix[newIndex]);
            this._dropOverElement = newTentativeElement && newTentativeElement.parentElement;
            // if new empty section just add it as a child
            if (!tree.isLeafElement(newTentativeElement)) {
                this._dropPosition[0]++;
                line = moveLine(newTentativeElement, false, false, true);
                this._currentLocationIndex++;
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
            }
            else {
                if (this._indexNotChanged) {
                    this._indexNotChanged = false;
                    this._dropPosition[0]++;
                    line = moveLine(newTentativeElement, true, false, true);
                    this._currentLocationIndex++;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
                else if (this._upperLevelChange(this._treeMatrix[this._currentLocationIndex], this._treeMatrix[newIndex])) {
                    line = moveLine(newTentativeElement, true, true, true);
                    // when changing parents we first place the line before the first element
                    // the next operation does not need to change the element but just put the line after it
                    this._indexNotChanged = true;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
                }
                else {
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex++;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
            }
            scrollIntoView('partial', line, 500, 0);
            var iconPosition = this._getIconPosition(line);
            if (iconPosition) {
                if (onMoving) {
                    onMoving(!tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag));
                }
                moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
            }
        }
        else {
            _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
        this._checkMoveAllowed(line);
    };
    DragZoneKeyboard.prototype._moveBack = function () {
        var _a = this._options, tree = _a.tree, moveLine = _a.moveLine, strings = _a.strings, scrollIntoView = _a.scrollIntoView, moveIcon = _a.moveIcon, onMoving = _a.onMoving, disallowedTag = _a.disallowedTag;
        var line;
        if (this._currentLocationIndex > 0) {
            var newIndex = this._currentLocationIndex - 1;
            var newTentativeElement = tree.getElementFromPosition(this._treeMatrix[newIndex]);
            this._dropPosition = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["clone"])(this._treeMatrix[newIndex]);
            this._dropOverElement = newTentativeElement && newTentativeElement.parentElement;
            // if new empty section just add it as a child
            if (!tree.isLeafElement(newTentativeElement)) {
                // if new empty section just add it as a child
                this._dropPosition[0]++;
                line = moveLine(newTentativeElement, false, false, true);
                this._currentLocationIndex--;
                _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
            }
            else {
                if (this._indexNotChanged) {
                    this._indexNotChanged = false;
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex--;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
                else if (this._upperLevelChange(this._treeMatrix[this._currentLocationIndex], this._treeMatrix[newIndex])) {
                    this._dropPosition[0]++;
                    line = moveLine(newTentativeElement, true, false, true);
                    // when changing parents we first place the line before the first element
                    // the next operation does not need to change the element but just put the line after it
                    this._indexNotChanged = true;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatFullPosition(this._dropPosition));
                }
                else {
                    line = moveLine(newTentativeElement, true, true, true);
                    this._currentLocationIndex--;
                    _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, this._formatPosition(this._dropPosition));
                }
            }
            scrollIntoView('partial', line, 500, 0, true);
            var iconPosition = this._getIconPosition(line);
            if (iconPosition) {
                if (onMoving) {
                    onMoving(!tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag));
                }
                moveIcon(iconPosition.iconLeft, iconPosition.iconTop);
            }
        }
        else {
            _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
        this._checkMoveAllowed(line);
    };
    DragZoneKeyboard.prototype._checkMoveAllowed = function (line) {
        var _a = this._options, tree = _a.tree, strings = _a.strings, disallowedTag = _a.disallowedTag;
        // If the move is not allowed, we cannot remove the line for the keyboard because it controls scrolling,
        // so instead we would hide it so that the user knows that move is not allowed
        if (disallowedTag &&
            !tree.isDragAllowed(this._draggedElement, this._dropOverElement, disallowedTag) &&
            line) {
            line.classList.add(_css_DragZone_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hideLine);
            _ms_sp_a11y__WEBPACK_IMPORTED_MODULE_4__["ScreenReader"].alert(DRAG_ZONE, strings.moveNotAllowed);
        }
    };
    DragZoneKeyboard.prototype._upperLevelChange = function (oldPosition, newPosition) {
        if (oldPosition.length !== newPosition.length || oldPosition.length < 2 || newPosition.length < 2) {
            return false;
        }
        for (var i = 1; i < oldPosition.length; i++) {
            if (oldPosition[i] !== newPosition[i]) {
                return true;
            }
        }
        return false;
    };
    DragZoneKeyboard.prototype._formatFullPosition = function (position) {
        var moveInsideLevel = this._options.strings.moveInsideLevel;
        if (moveInsideLevel.length === 0 || position.length === 0) {
            return;
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format.apply(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([moveInsideLevel[moveInsideLevel.length - 1]], position.reverse().map(function (val) {
            return val + 1;
        })));
    };
    DragZoneKeyboard.prototype._getIconPosition = function (element) {
        var boundingRect = element && element.getBoundingClientRect();
        if (boundingRect) {
            var position = {
                iconLeft: boundingRect.left + boundingRect.width / 2,
                iconTop: boundingRect.top
            };
            return position;
        }
        return undefined;
    };
    DragZoneKeyboard.prototype._formatPosition = function (position) {
        var moveInsideLevel = this._options.strings.moveInsideLevel;
        if (moveInsideLevel.length === 0 || position.length === 0) {
            return;
        }
        return _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_3__["StringHelper"].format(moveInsideLevel[0], position[0] + 1);
    };
    return DragZoneKeyboard;
}());
/* harmony default export */ __webpack_exports__["default"] = (DragZoneKeyboard);


/***/ }),

/***/ "cNM6":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/css/DragZone.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_fc275664{border:1px solid \"[theme:themeprimary, default: #0078d4]\";height:35px;position:absolute;width:35px}.b_a_fc275664{z-index:10}.b_a_fc275664.c_a_fc275664{height:3px}.b_a_fc275664.e_a_fc275664{height:2px}.b_a_fc275664.f_a_fc275664{width:3px}.b_a_fc275664:not(.g_a_fc275664){background-color:\"[theme:themePrimary, default: #0078d4]\"}.h_a_fc275664{-webkit-user-select:none;-ms-user-select:none;user-select:none}.i_a_fc275664{position:absolute}.i_a_fc275664.c_a_fc275664,.i_a_fc275664.e_a_fc275664{left:0;right:0}.i_a_fc275664.f_a_fc275664{top:0;bottom:0}.j_a_fc275664{visibility:visible}.k_a_fc275664{visibility:collapse}.l_a_fc275664{pointer-events:none;z-index:11}.m_a_fc275664 [data-drag-handle],.n_a_fc275664 *,.o_a_fc275664{cursor:move!important}.p_a_fc275664{display:none}", ""]);


/***/ }),

/***/ "fCCa":
/*!*****************************!*\
  !*** ./lib/KillSwitches.js ***!
  \*****************************/
/*! exports provided: isFixDragZoneStateKsActivated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFixDragZoneStateKsActivated", function() { return isFixDragZoneStateKsActivated; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line:export-name
function isFixDragZoneStateKsActivated() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f78033ec-3a15-4c6d-877c-cc67789837c1'
    /* '01/13/2021', 'Fix drag zone state update' */
    );
}


/***/ })

}]);
//# sourceMappingURL=chunk.dragzone-secondary-chunk_none.js.map