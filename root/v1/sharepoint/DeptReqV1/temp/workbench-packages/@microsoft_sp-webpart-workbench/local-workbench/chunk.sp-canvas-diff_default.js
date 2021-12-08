(window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] = window["webpackJsonp_85093aa7_8c12_4683_91aa_47cd5e2654db_2_5_0"] || []).push([["sp-canvas-diff"],{

/***/ "7+pw":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMessage.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./DiffMessage.module.css */ "Nq8Z");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "FoRe":
/*!************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/getDomDiffStrings.js ***!
  \************************************************************************/
/*! exports provided: getDomDiffStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomDiffStrings", function() { return getDomDiffStrings; });
/* harmony import */ var visual_dom_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! visual-dom-diff */ "CYyn");
/* harmony import */ var visual_dom_diff__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(visual_dom_diff__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WordDiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordDiff */ "RP9g");
/* harmony import */ var _getDomDiffStrings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDomDiffStrings.resx */ "jdQh");
var _getDomDiffStrings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./getDomDiffStrings.resx */ "jdQh", 1);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);




function getDomDiff(leftNode, rightNode) {
    return Object(visual_dom_diff__WEBPACK_IMPORTED_MODULE_0__["visualDomDiff"])(leftNode, rightNode, {
        diffText: _WordDiff__WEBPACK_IMPORTED_MODULE_1__["WordDiff"].getWordDiff
    });
}
function getDomDiffStrings(leftNodeString, rightNodeString) {
    var leftNode = document.createElement('div');
    var rightNode = document.createElement('div');
    leftNode.innerHTML = leftNodeString || '';
    rightNode.innerHTML = rightNodeString || '';
    var diffRoot = document.createElement('div');
    diffRoot.appendChild(getDomDiff(leftNode, rightNode));
    // Make text diff elements focusable.
    var domDiffElements = diffRoot.querySelectorAll('ins, del');
    domDiffElements.forEach(function (element) {
        element.tabIndex = 0;
        var className = element.className;
        var hintText;
        if (className.indexOf("vdd-added" /* Insert */) !== -1) {
            hintText = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_getDomDiffStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TextInsertTooltip"], element.textContent);
        }
        else if (className.indexOf("vdd-removed" /* Remove */) !== -1) {
            hintText = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_getDomDiffStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TextRemoveTooltip"], element.textContent);
        }
        else {
            hintText = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Text"].format(_getDomDiffStrings_resx__WEBPACK_IMPORTED_MODULE_2__["TextModifiedTooltip"], element.textContent);
        }
        element.setAttribute('aria-label', hintText);
    });
    return diffRoot.innerHTML;
}


/***/ }),

/***/ "MuQK":
/*!***************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/ControlDiffIndicator.js ***!
  \***************************************************************************/
/*! exports provided: ControlDiffIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlDiffIndicator", function() { return ControlDiffIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiffIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffIndicator */ "rL3y");
/* harmony import */ var _canvasLayout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../canvasLayout/index */ "yPt8");



function ControlDiffIndicator(props) {
    var control = props.control, store = props.store, theme = props.theme, controlDiff = props.controlDiff;
    if (control.position.sectionFactor === 0) {
        // If it's full bleed web part, and there is a change on the CanvasZone as well, we should not
        // render the diff indicator separately as the borders of web part and canvas zone are same.
        // In this case, we will merge the changes that will be displayed and render indicator inside control.
        var zoneDiff = store.canvasFields.zoneDiffMap
            ? store.canvasFields.zoneDiffMap.get(Object(_canvasLayout_index__WEBPACK_IMPORTED_MODULE_2__["getZonePositionUniqString"])({
                layoutIndex: control.position.layoutIndex || 1,
                zoneIndex: control.position.zoneIndex
            }))
            : undefined;
        if (zoneDiff) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DiffIndicator__WEBPACK_IMPORTED_MODULE_1__["DiffIndicator"], { theme: theme, primaryDiff: zoneDiff, secondaryDiff: controlDiff });
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DiffIndicator__WEBPACK_IMPORTED_MODULE_1__["DiffIndicator"], { theme: theme, primaryDiff: controlDiff });
}


/***/ }),

/***/ "Nq8Z":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMessage.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".u_e_32f825c4{font-weight:700}", ""]);


/***/ }),

/***/ "P59B":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffIndicatorStyles.js ***!
  \**************************************************************************/
/*! exports provided: DiffIndicatorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffIndicatorStyles", function() { return DiffIndicatorStyles; });
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__);


var ICON_SIZE = 14;
var ICON_PADDING = 4;
var ICON_BORDER_WIDTH = 2;
var GAP_BETWEEN_ICONS = ICON_PADDING + ICON_BORDER_WIDTH;
var ICON_BORDER_INSET = 2;
// The size of the icon wrapper when there is only one icon is rendered.
var SINGLE_ICON_WRAPPER_SIZE = ICON_SIZE + GAP_BETWEEN_ICONS * 2;
var DiffIndicatorStyles = /** @class */ (function () {
    function DiffIndicatorStyles() {
    }
    DiffIndicatorStyles.getClassNames = function (props) {
        return Object(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_1__["getClassNames"])(DiffIndicatorStyles._getStyle, props);
    };
    DiffIndicatorStyles._getStyle = function (props) {
        var primaryDiff = props.primaryDiff, root = props.root, theme = props.theme, primaryIconsCount = props.primaryIconsCount, secondaryIconsCount = props.secondaryIconsCount;
        var palette = theme.palette, semanticColors = theme.semanticColors;
        var diffColor = DiffIndicatorStyles._getDiffColor(theme, primaryDiff.type);
        return {
            root: [
                root,
                {
                    position: 'absolute',
                    bottom: '100%',
                    left: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getRTL"])() ? undefined : 8,
                    right: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__["getRTL"])() ? 8 : undefined,
                    zIndex: 1
                }
            ],
            canvasControlBorder: [
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    border: '2px solid',
                    borderColor: diffColor,
                    zIndex: 1
                }
            ],
            iconWrapper: [
                {
                    position: 'absolute',
                    bottom: -SINGLE_ICON_WRAPPER_SIZE / 2 - ICON_BORDER_INSET,
                    height: SINGLE_ICON_WRAPPER_SIZE + 2 * ICON_BORDER_INSET,
                    padding: ICON_BORDER_INSET,
                    boxSizing: 'border-box',
                    background: 'transparent',
                    selectors: {
                        '&:focus': {
                            outline: 'none',
                            borderWidth: 1,
                            padding: ICON_BORDER_INSET - 1,
                            borderStyle: 'solid',
                            borderColor: palette.neutralPrimary,
                            borderRadius: (SINGLE_ICON_WRAPPER_SIZE + ICON_BORDER_INSET) / 2,
                            backgroundColor: semanticColors.bodyStandoutBackground
                        }
                    }
                }
            ],
            iconDecorator: [
                {
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: ICON_PADDING,
                    backgroundColor: semanticColors.bodyStandoutBackground,
                    border: '2px solid',
                    borderColor: diffColor,
                    borderRadius: SINGLE_ICON_WRAPPER_SIZE / 2,
                    height: SINGLE_ICON_WRAPPER_SIZE
                }
            ],
            primaryIconWrapper: [
                {
                    left: -ICON_BORDER_INSET
                }
            ],
            primaryIconDecorator: [
                {
                    width: SINGLE_ICON_WRAPPER_SIZE + (primaryIconsCount - 1) * (GAP_BETWEEN_ICONS + ICON_SIZE)
                }
            ],
            secondaryIconWrapper: [
                {
                    left: SINGLE_ICON_WRAPPER_SIZE + 8 - ICON_BORDER_INSET
                }
            ],
            secondaryIconDecorator: [
                {
                    width: SINGLE_ICON_WRAPPER_SIZE + (secondaryIconsCount - 1) * (GAP_BETWEEN_ICONS + ICON_SIZE)
                }
            ],
            icon: [
                {
                    flex: '0 0',
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    fontSize: ICON_SIZE,
                    lineHeight: ICON_SIZE,
                    color: semanticColors.bodyText
                }
            ],
            split: [
                {
                    position: 'absolute',
                    width: 1,
                    top: ICON_PADDING,
                    bottom: ICON_PADDING,
                    backgroundColor: palette.neutralTertiaryAlt,
                    left: primaryIconsCount * SINGLE_ICON_WRAPPER_SIZE
                }
            ],
            controlBorder: [
                {
                    border: '2px solid',
                    borderColor: diffColor
                }
            ],
            tooltipContent: [
                {
                    maxWidth: 320
                }
            ]
        };
    };
    DiffIndicatorStyles._getDiffColor = function (theme, diffType) {
        var palette = theme.palette;
        switch (diffType) {
            case 'Add':
                return palette.greenDark;
            case 'Remove':
                return palette.redDark;
            case 'Move':
            case 'Modify':
            case 'MoveAndModify':
            case 'SectionEmphasis':
                return palette.yellowDark;
            default:
                return undefined;
        }
    };
    return DiffIndicatorStyles;
}());



/***/ }),

/***/ "RP9g":
/*!***************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/WordDiff.js ***!
  \***************************************************************/
/*! exports provided: WordDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDiff", function() { return WordDiff; });
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diff-match-patch */ "++Fs");
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diff_match_patch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiffMatchPatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffMatchPatch */ "lqNG");

// import { cleanUpWordDiff } from './cleanUpWordDiff';

// The regex used by word-count library to detect words in respect to CJK languages
// @see - https://github.com/yuehu/word-count/blob/master/index.js
// tslint:disable-next-line:max-line-length
var WORD_PATTERN = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
/**
 * Convert a string into an array of words in respect to CJK languages.
 * @see - https://github.com/yuehu/word-count/blob/master/index.js
 */
function stringToWords(text) {
    var matchedWords = text.match(WORD_PATTERN);
    var wordsInRespectToCJK = [];
    if (matchedWords) {
        matchedWords.forEach(function (matchedWord) {
            if (matchedWord.charCodeAt(0) >= 0x4e00) {
                // 0x4E00 - 0x9FFF : CJK Unified Ideographs
                wordsInRespectToCJK.push.apply(wordsInRespectToCJK, matchedWord.split(''));
            }
            else {
                wordsInRespectToCJK.push(matchedWord);
            }
        });
    }
    return wordsInRespectToCJK;
}
/**
 * Customized solution to achieve word-diff above diff-match-patch
 * @see - https://github.com/google/diff-match-patch/wiki/Line-or-Word-Diffs
 */
var WordDiff = /** @class */ (function () {
    function WordDiff(oldText, newText) {
        this._words = []; // e.g. wordArray[4] == 'Hello'
        this._wordsToIndexMap = {}; // e.g. wordHash['Hello'] = 4
        // Keeping our own length is faster than looking it up.
        this._wordArrayLength = this._words.length;
        this._oldText = oldText;
        this._newText = newText;
    }
    WordDiff.getWordDiff = function (oldText, newText) {
        return new WordDiff(oldText, newText).diffWord();
    };
    WordDiff.cleanUpMerge = function (diffs) {
        if (!diffs.length) {
            return diffs;
        }
        var result = [];
        var lastDiffType = diffs[0][0];
        var lastDiffString = diffs[0][1];
        for (var i = 1; i < diffs.length; i++) {
            var diff = diffs[i];
            if (diff[0] === lastDiffType) {
                lastDiffString += diff[1];
            }
            else {
                result.push([lastDiffType, lastDiffString]);
                lastDiffType = diff[0];
                lastDiffString = diff[1];
            }
        }
        result.push([lastDiffType, lastDiffString]);
        return result;
    };
    /**
     * Reduce the number of edits by eliminating semantically trivial equalities.
     * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
     */
    WordDiff.cleanUpSemantic = function (diffs) {
        var equalities = []; // Stack of indices where equalities are found.
        var equalitiesLength = 0; // Keeping our own length let is faster in JS.
        var lastEquality; // Always equal to diffs[equalities[equalitiesLength - 1]][1]
        var pointer = 0; // Index of current position.
        // Number of characters that changed prior to the equality.
        var lengthInsertions1 = 0;
        var lengthDeletions1 = 0;
        // Number of characters that changed after the equality.
        var lengthInsertions2 = 0;
        var lengthDeletions2 = 0;
        while (pointer < diffs.length) {
            if (diffs[pointer][0] === diff_match_patch__WEBPACK_IMPORTED_MODULE_0__["DIFF_EQUAL"]) {
                // Equality found.
                equalities[equalitiesLength++] = pointer;
                lengthInsertions1 = lengthInsertions2;
                lengthDeletions1 = lengthDeletions2;
                lengthInsertions2 = 0;
                lengthDeletions2 = 0;
                lastEquality = diffs[pointer][1];
            }
            else {
                // An insertion or deletion.
                if (diffs[pointer][0] === diff_match_patch__WEBPACK_IMPORTED_MODULE_0__["DIFF_INSERT"]) {
                    lengthInsertions2 += diffs[pointer][1].length;
                }
                else {
                    lengthDeletions2 += diffs[pointer][1].length;
                }
                // Eliminate an equality that is smaller or equal to the edits on both
                // sides of it.
                if (lastEquality &&
                    lastEquality.length <= Math.max(lengthInsertions1, lengthDeletions1) / 2 &&
                    lastEquality.length <= Math.max(lengthInsertions2, lengthDeletions2) / 2) {
                    // Duplicate record.
                    diffs.splice(equalities[equalitiesLength - 1], 0, [diff_match_patch__WEBPACK_IMPORTED_MODULE_0__["DIFF_DELETE"], lastEquality]);
                    // Change second copy to insert.
                    diffs[equalities[equalitiesLength - 1] + 1][0] = diff_match_patch__WEBPACK_IMPORTED_MODULE_0__["DIFF_INSERT"];
                    // Throw away the equality we just deleted.
                    equalitiesLength--;
                    // Throw away the previous equality (it needs to be reevaluated).
                    equalitiesLength--;
                    pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                    lengthInsertions1 = 0; // Reset the counters.
                    lengthDeletions1 = 0;
                    lengthInsertions2 = 0;
                    lengthDeletions2 = 0;
                    lastEquality = undefined;
                }
            }
            pointer++;
        }
        return diffs;
    };
    WordDiff.prototype.diffWord = function () {
        var wordsToCharsResult = this._wordsToChars();
        var chars1 = wordsToCharsResult.chars1, chars2 = wordsToCharsResult.chars2;
        var diffs = _DiffMatchPatch__WEBPACK_IMPORTED_MODULE_1__["DiffMatchPatch"].diff_main(chars1, chars2);
        var wordDiffs = this._charsToWords(diffs);
        var mergedWordDiffs = WordDiff.cleanUpMerge(wordDiffs);
        return WordDiff.cleanUpSemantic(mergedWordDiffs);
    };
    WordDiff.prototype._wordsToCharsMunge = function (text) {
        var words = stringToWords(text);
        this._currentWordEnd = -1;
        var wordIndex = 0;
        var chars = [];
        while (this._currentWordEnd < text.length - 1 && wordIndex < words.length) {
            var word = words[wordIndex++];
            var wordStart = text.indexOf(word, this._currentWordEnd + 1);
            if (wordStart === -1) {
                // The word extracted from the string is not found in the string, unexpected.
                throw new Error('Unexpected: Word is not found in the string where it is extracted.');
            }
            if (wordStart > this._currentWordEnd + 1) {
                // Treat all unmatched characters before the word as separate words.
                for (var i = this._currentWordEnd + 1; i < wordStart; i++) {
                    chars.push(this._hashWordToChar(text, i, i + 1));
                    if (this._currentWordEnd >= text.length) {
                        return chars;
                    }
                }
            }
            chars.push(this._hashWordToChar(text, wordStart, wordStart + word.length));
            this._currentWordEnd = wordStart + word.length - 1;
        }
        if (this._currentWordEnd < text.length - 1) {
            for (var i = this._currentWordEnd + 1; i < text.length; i++) {
                // Collect all strings after the last word as separate words to avoid missing
                // any strings in the diff or final output.
                chars.push(this._hashWordToChar(text, i, i + 1));
                if (this._currentWordEnd >= text.length) {
                    return chars;
                }
            }
        }
        return chars;
    };
    WordDiff.prototype._wordsToChars = function () {
        // '\x00' is a valid character, but letious debuggers don't like it.
        // So we'll insert a junk entry to avoid generating a null character.
        this._words[0] = '';
        // Allocate 2/3rds of the space for oldText, the unused space and the rest 1/3rd for newText.
        this._maxUniqueWordCount = 40000;
        var chars1 = this._wordsToCharsMunge(this._oldText).join('');
        this._maxUniqueWordCount = 65536;
        var chars2 = this._wordsToCharsMunge(this._newText).join('');
        return { chars1: chars1, chars2: chars2 };
    };
    /**
     * Map the characters back to words.
     */
    WordDiff.prototype._charsToWords = function (diffs) {
        var _this = this;
        var wordDiffs = [];
        diffs.forEach(function (diff) {
            var chars = diff[1];
            wordDiffs.push.apply(wordDiffs, chars.split('').map(function (char) {
                return [diff[0], _this._words[char.charCodeAt(0)]];
            }));
        });
        return wordDiffs;
    };
    /**
     * Return the hash value for the word.
     */
    WordDiff.prototype._hashWordToChar = function (text, startIndex, endIndex) {
        var word = text.substring(startIndex, endIndex);
        var char;
        if (this._wordsToIndexMap[word] !== undefined) {
            char = String.fromCharCode(this._wordsToIndexMap[word]);
        }
        else {
            if (this._wordArrayLength === this._maxUniqueWordCount - 1) {
                // Bail out at 65535 because
                // String.fromCharCode(65536) == String.fromCharCode(0)
                word = text.substring(startIndex);
                this._currentWordEnd = text.length;
            }
            char = String.fromCharCode(this._wordArrayLength);
            this._wordsToIndexMap[word] = this._wordArrayLength;
            this._words[this._wordArrayLength++] = word;
        }
        return char;
    };
    return WordDiff;
}());



/***/ }),

/***/ "V1/i":
/*!*******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/CanvasDiff.resx ***!
  \*******************************************************************/
/*! exports provided: RTETitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RTETitle\":\"RTETitle\"}");

/***/ }),

/***/ "hdyk":
/*!******************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMessage.module.scss.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DiffMessage.module.css */ "7+pw");
var styles = {
    bold: 'u_e_32f825c4'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "iYHv":
/*!*****************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/CanvasDiff.js ***!
  \*****************************************************************/
/*! exports provided: getControlDiffInfo, getZoneDiffInfo, getCanvasContentToRender, convertControlDiffToMap, convertZoneDiffToMap, sortDiffs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlDiffInfo", function() { return getControlDiffInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneDiffInfo", function() { return getZoneDiffInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasContentToRender", function() { return getCanvasContentToRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertControlDiffToMap", function() { return convertControlDiffToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertZoneDiffToMap", function() { return convertZoneDiffToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDiffs", function() { return sortDiffs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/theming/SPVariantThemeType */ "2R/J");
/* harmony import */ var _ms_sp_canvas_diff_lib_utilities_getDisambiguatedWebPartName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-canvas-diff/lib/utilities/getDisambiguatedWebPartName */ "qKKy");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-canvas-read */ "sSDQ");
/* harmony import */ var _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _canvasLayout_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../canvasLayout/index */ "yPt8");
/* harmony import */ var _getDomDiffStrings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getDomDiffStrings */ "FoRe");
/* harmony import */ var _CanvasDiff_resx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CanvasDiff.resx */ "V1/i");
var _CanvasDiff_resx__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CanvasDiff.resx */ "V1/i", 1);
/* harmony import */ var _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canvasZonePropertyPane/canvasZonePropertyPaneStrings.resx */ "svZL");
var _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../canvasZonePropertyPane/canvasZonePropertyPaneStrings.resx */ "svZL", 1);










var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('CanvasDiff');
function isControlDataIdentical(controlCompareFrom, controlComparedTo) {
    if (controlCompareFrom.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].WebPartZone &&
        controlComparedTo.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].WebPartZone) {
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(controlCompareFrom.webPartData, controlComparedTo.webPartData);
    }
    else if (controlCompareFrom.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].RTE &&
        controlComparedTo.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].RTE) {
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(controlCompareFrom.innerHTML, controlComparedTo.innerHTML);
    }
    else {
        var positionCompareFrom = controlCompareFrom.position, dataCompareFrom = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(controlCompareFrom, ["position"]);
        var positionCompareTo = controlComparedTo.position, dataCompareTo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(controlComparedTo, ["position"]);
        // This code should not be hit. Just in case it returns the comparison of the control without position.
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(dataCompareFrom, dataCompareTo);
    }
}
function isControlPositionIdentical(controlCompareFrom, controlComparedTo) {
    return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(controlCompareFrom.position, controlComparedTo.position);
}
function getControlDiffInfo(canvasContentComparedFrom, canvasContentComparedTo, manifestMap, cultureName) {
    var controlDiffs = [];
    var allInstanceIds = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["uniq"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(canvasContentComparedFrom.map(function (control) { return control.id; }), canvasContentComparedTo.map(function (control) { return control.id; })));
    allInstanceIds.forEach(function (id) {
        var controlComparedFrom = canvasContentComparedFrom.filter(function (control) { return control.id === id; })[0];
        var controlComparedTo = canvasContentComparedTo.filter(function (control) { return control.id === id; })[0];
        var diffType;
        if (controlComparedFrom && controlComparedTo) {
            // Modified or identical
            var isDataIdentical = isControlDataIdentical(controlComparedFrom, controlComparedTo);
            var isPositionIdentical = isControlPositionIdentical(controlComparedFrom, controlComparedTo);
            if (!isDataIdentical && !isPositionIdentical) {
                diffType = 'MoveAndModify';
            }
            else if (isDataIdentical && !isPositionIdentical) {
                diffType = 'Move';
            }
            else if (!isDataIdentical && isPositionIdentical) {
                diffType = 'Modify';
            }
            else {
                diffType = 'Identical';
            }
        }
        else if (!controlComparedFrom && controlComparedTo) {
            // Add
            diffType = 'Add';
        }
        else {
            // Remove
            diffType = 'Remove';
        }
        // Pick any one available as we only need web part title from the web part data.
        var targetControl = controlComparedTo || controlComparedFrom;
        if (targetControl &&
            // Only messages of web part and RTE is meaningful to display
            (targetControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].WebPartZone ||
                targetControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].RTE)) {
            controlDiffs.push({
                type: diffType,
                instanceId: targetControl.id,
                message: [],
                webPartName: targetControl.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].RTE
                    ? _CanvasDiff_resx__WEBPACK_IMPORTED_MODULE_8__["RTETitle"]
                    : Object(_ms_sp_canvas_diff_lib_utilities_getDisambiguatedWebPartName__WEBPACK_IMPORTED_MODULE_4__["getDisambiguatedWebPartName"])(targetControl, manifestMap, cultureName),
                position: targetControl.position
            });
        }
    });
    return controlDiffs;
}
function getZoneEmphasisFromControl(control) {
    var emphasis = control && control.emphasis;
    return (emphasis && emphasis.zoneEmphasis) || _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__["SPVariantThemeType"].None;
}
function getEmphasisName(emphasisType) {
    switch (emphasisType) {
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__["SPVariantThemeType"].None:
            return _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9__["SectionBackgroundNoneButtonLabel"];
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__["SPVariantThemeType"].Neutral:
            return _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9__["SectionBackgroundNeutralButtonLabel"];
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__["SPVariantThemeType"].Soft:
            return _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9__["SectionBackgroundSoftButtonLabel"];
        case _ms_odsp_datasources_lib_interfaces_theming_SPVariantThemeType__WEBPACK_IMPORTED_MODULE_3__["SPVariantThemeType"].Strong:
            return _canvasZonePropertyPane_canvasZonePropertyPaneStrings_resx__WEBPACK_IMPORTED_MODULE_9__["SectionBackgroundStrongButtonLabel"];
    }
}
function getZonePositionFromControl(control) {
    return {
        layoutIndex: control.position.layoutIndex || 1,
        zoneIndex: control.position.zoneIndex
    };
}
function getUniqueZonePositionsFromControls(controls) {
    return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["uniqBy"])(controls.map(getZonePositionFromControl), _canvasLayout_index__WEBPACK_IMPORTED_MODULE_6__["getZonePositionUniqString"]);
}
function compareZonePosition(positionA, positionB) {
    var layoutIndexCompareResult = (positionA.layoutIndex || 1) - (positionB.layoutIndex || 1);
    if (layoutIndexCompareResult !== 0) {
        return layoutIndexCompareResult;
    }
    if (positionA.zoneIndex !== positionB.zoneIndex) {
        return positionA.zoneIndex - positionB.zoneIndex;
    }
    return 0;
}
/**
 * Sort function to compare two arbitrary positions.
 */
function comparePosition(positionA, positionB) {
    var zonePositionCompareResult = compareZonePosition(positionA, positionB);
    if (zonePositionCompareResult !== 0) {
        return zonePositionCompareResult;
    }
    // If section index is undefined, it's zone-level position, make it in front.
    var sectionIndexCompareResult = (positionA.sectionIndex || -1) -
        (positionB.sectionIndex || -1);
    if (sectionIndexCompareResult !== 0) {
        return sectionIndexCompareResult;
    }
    // If control index is undefined, it's section-level position, make it in front.
    var controlIndexCompareResult = (positionA.controlIndex || -1) -
        (positionB.controlIndex || -1);
    return controlIndexCompareResult;
}
function getZoneDiffInfo(canvasContentComparedFrom, canvasContentComparedTo) {
    var zoneDiffs = [];
    var zonePositionsComparedFrom = getUniqueZonePositionsFromControls(canvasContentComparedFrom);
    var zonePositionsComparedTo = getUniqueZonePositionsFromControls(canvasContentComparedTo);
    // Calculate for each if the zone emphasis has been changed and add to the canvasDiffs.
    zonePositionsComparedTo.forEach(function (zonePosition) {
        var sameZoneExistsInBothVersions = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(zonePositionsComparedFrom, function (position) { return compareZonePosition(position, zonePosition) === 0; }) >
            -1;
        if (sameZoneExistsInBothVersions) {
            var controlComparedFrom = canvasContentComparedFrom.filter(function (control) { return compareZonePosition(control.position, zonePosition) === 0; })[0];
            var zoneEmphasisComparedFrom = getZoneEmphasisFromControl(controlComparedFrom);
            var controlComparedTo = canvasContentComparedTo.filter(function (control) { return compareZonePosition(control.position, zonePosition) === 0; })[0];
            var zoneEmphasisComparedTo = getZoneEmphasisFromControl(controlComparedTo);
            if (zoneEmphasisComparedFrom !== zoneEmphasisComparedTo) {
                zoneDiffs.push({
                    type: 'SectionEmphasis',
                    fromEmphasisString: getEmphasisName(zoneEmphasisComparedFrom),
                    toEmphasisString: getEmphasisName(zoneEmphasisComparedTo),
                    zonePosition: zonePosition,
                    topControlInstanceId: controlComparedTo.id
                });
            }
        }
    });
    return zoneDiffs;
}
/**
 * Calculate the best position to render the deleted control. We can't just render the deleted control into the canvas
 * because it might conflict with the controls in the new versions.
 * @param removedControl - The control that is removed from the old version, not exists any more in the new version.
 * @param canvasContentComparedTo - All the controls in the new version.
 */
function calcPositionForRemovedControl(removedControl, canvasContentComparedTo) {
    var position = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(removedControl.position);
    var controlWithSameLayoutIndex = canvasContentComparedTo
        .filter(function (control) { return !!control.position; }) // Filter out controls without position.
        .filter(function (control) { return (control.position.layoutIndex || 1) === (position.layoutIndex || 1); });
    if (controlWithSameLayoutIndex.length === 0) {
        // No conflicts. The removed control is in a layout that is not in the current canvas content.
        return position;
    }
    var controlWithSameZoneIndex = controlWithSameLayoutIndex.filter(function (control) { return control.position.zoneIndex === position.zoneIndex; });
    if (controlWithSameZoneIndex.length === 0) {
        // No conflicts. The removed control is in a zone that is not in the current canvas content.
        return position;
    }
    var controlWithSameSectionIndex = controlWithSameZoneIndex.filter(function (control) { return control.position.sectionIndex === position.sectionIndex; });
    if (controlWithSameSectionIndex.length === 0) {
        // If removed control was in a section that doesn't exist anymore, move it to the first available section.
        // Otherwise the zone will not render sections properly.
        position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, position), { sectionIndex: controlWithSameZoneIndex[0].position.sectionIndex, sectionFactor: controlWithSameZoneIndex[0].position.sectionFactor });
        // Recalculate controls
        controlWithSameSectionIndex = controlWithSameZoneIndex.filter(function (control) { return control.position.sectionIndex === position.sectionIndex; });
    }
    else if (position.sectionFactor !== controlWithSameSectionIndex[0].position.sectionFactor) {
        // Adjust section factor if it has changed.
        position = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, position), { sectionFactor: controlWithSameSectionIndex[0].position.sectionFactor });
    }
    controlWithSameSectionIndex = controlWithSameSectionIndex.sort(function (controlA, controlB) {
        return (controlA.position.controlIndex || 0) - (controlB.position.controlIndex || 0);
    });
    var indexOfConflictControl = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(controlWithSameSectionIndex, function (control) { return control.position.controlIndex === position.controlIndex; });
    if (indexOfConflictControl === -1) {
        // There is not conflicts on rendering the control, use the original position.
        return position;
    }
    else {
        // The control index of the removed control is already taken by the control in the new version.
        // We will calculate a position to insert the removed control and render it.
        var controlIndex = position.controlIndex || 0;
        var previousControlIndex = indexOfConflictControl === 0
            ? Math.min(controlIndex - 1, 0)
            : controlWithSameSectionIndex[indexOfConflictControl - 1].position.controlIndex || 0;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, position), { controlIndex: (controlIndex + previousControlIndex) / 2 });
    }
}
/**
 * Get the canvas content that will be rendered in diff mode.
 */
function getCanvasContentToRender(canvasContentComparedFrom, canvasContentComparedTo, controlDiffInfo) {
    var canvasContentToRender = [];
    // Filter and clone controls that will be rendered.
    controlDiffInfo.forEach(function (controlDiff) {
        switch (controlDiff.type) {
            case 'Identical':
            case 'Modify':
            case 'Add':
            case 'Move':
            case 'MoveAndModify':
                var controlToRender = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(canvasContentComparedTo.filter(function (control) { return control.id === controlDiff.instanceId; })[0]);
                if (controlToRender) {
                    canvasContentToRender.push(controlToRender);
                }
                else {
                    // Unexpected. If control diff type is not 'Remove', it should always be in canvasContentCompareTo.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(logSource, new Error('control not found in canvasContentCompareTo'));
                }
                break;
            case 'Remove':
                var removedControl = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(canvasContentComparedFrom.filter(function (control) { return control.id === controlDiff.instanceId; })[0]);
                if (removedControl) {
                    removedControl.position = calcPositionForRemovedControl(removedControl, canvasContentComparedTo);
                    canvasContentToRender.push(removedControl);
                }
                else {
                    // Unexpected. If control diff type is 'Remove', it should always be in canvasContentComparedFrom.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(logSource, new Error('control not found in canvasContentComparedFrom'));
                }
        }
    });
    // Update RTE controls to show dom diff if it's modified.
    canvasContentToRender
        .filter(function (control) { return control.controlType === _ms_sp_canvas_read__WEBPACK_IMPORTED_MODULE_5__["CanvasControlType"].RTE; })
        .filter(function (rte) {
        var rteDiffInfo = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["find"])(controlDiffInfo, function (controlDiff) { return controlDiff.instanceId === rte.id; });
        // Check RTE is modified.
        return rteDiffInfo && (rteDiffInfo.type === 'Modify' || rteDiffInfo.type === 'MoveAndModify');
    })
        .forEach(function (rte) {
        var rteCompareFrom = canvasContentComparedFrom.filter(function (controlCompareFrom) { return controlCompareFrom.id === rte.id; })[0];
        if (rteCompareFrom) {
            rte.innerHTML = Object(_getDomDiffStrings__WEBPACK_IMPORTED_MODULE_7__["getDomDiffStrings"])(rteCompareFrom.innerHTML, rte.innerHTML);
        }
    });
    return canvasContentToRender;
}
function convertControlDiffToMap(controlDiffs) {
    var map = new Map();
    controlDiffs.forEach(function (controlDiff) {
        map.set(controlDiff.instanceId, controlDiff);
    });
    return map;
}
function convertZoneDiffToMap(zoneDiffs) {
    var map = new Map();
    zoneDiffs.forEach(function (zoneDiff) {
        map.set(Object(_canvasLayout_index__WEBPACK_IMPORTED_MODULE_6__["getZonePositionUniqString"])(zoneDiff.zonePosition), zoneDiff);
    });
    return map;
}
function getPositionFromDiffForCompare(diff) {
    return diff.type === 'SectionEmphasis' ? diff.zonePosition : diff.position;
}
/**
 * Sort the diffs to be ordered by their positions from top to bottom.
 * @param diffs - The diffs need to be sorted
 */
function sortDiffs(diffs) {
    return diffs.sort(function (diffA, diffB) {
        return comparePosition(getPositionFromDiffForCompare(diffA), getPositionFromDiffForCompare(diffB));
    });
}


/***/ }),

/***/ "jdQh":
/*!**************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/getDomDiffStrings.resx ***!
  \**************************************************************************/
/*! exports provided: TextInsertTooltip, TextRemoveTooltip, TextModifiedTooltip, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"TextInsertTooltip\":\"TextInsertTooltip\",\"TextRemoveTooltip\":\"TextRemoveTooltip\",\"TextModifiedTooltip\":\"TextModifiedTooltip\"}");

/***/ }),

/***/ "lqNG":
/*!*********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMatchPatch.js ***!
  \*********************************************************************/
/*! exports provided: DiffMatchPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffMatchPatch", function() { return DiffMatchPatch; });
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diff-match-patch */ "++Fs");
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diff_match_patch__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line:variable-name
var DiffMatchPatch = new diff_match_patch__WEBPACK_IMPORTED_MODULE_0__["diff_match_patch"]();


/***/ }),

/***/ "qKKy":
/*!***********************************************************!*\
  !*** .-diff/lib/utilities/getDisambiguatedWebPartName.js ***!
  \***********************************************************/
/*! exports provided: getDisambiguatedWebPartName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisambiguatedWebPartName", function() { return getDisambiguatedWebPartName; });
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);

function getDisambiguatedWebPartName(control, manifestMap, cultureName) {
    var manifest = manifestMap.get(control.webPartId);
    // The title persisted with canvas control which matches the locale when the web part is added.
    // This title won't reflect the culture of the page.
    var persistedTitle = control.webPartData.title;
    if (!manifest || !manifest.preconfiguredEntries || !manifest.preconfiguredEntries.length) {
        // Pick the persisted title when manifest is not available.
        // It might differ with the current culture but we don't have other options.
        return persistedTitle;
    }
    var entryLength = manifest.preconfiguredEntries.length;
    var matchedEntryIndex = 0;
    if (entryLength > 1) {
        var _loop_1 = function (entryIndex) {
            // This contains the web part title in all supported locales.
            var localizedTitle = manifest.preconfiguredEntries[entryIndex].title;
            var isWebPartCreatedFromThisEntry = Object.keys(localizedTitle).some(function (locale) { return localizedTitle[locale] === persistedTitle; });
            if (isWebPartCreatedFromThisEntry) {
                matchedEntryIndex = entryIndex;
                return "break";
            }
        };
        // Figure out which entry matches the current web part.
        for (var entryIndex = 0; entryIndex < entryLength; entryIndex++) {
            var state_1 = _loop_1(entryIndex);
            if (state_1 === "break")
                break;
        }
    }
    // This contains the web part title in all supported locales.
    var matchedLocalizedTitle = manifest.preconfiguredEntries[matchedEntryIndex].title;
    var localeInRespectToPageCulture = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["find"])(Object.keys(matchedLocalizedTitle), function (locale) { return locale.toLowerCase() === cultureName; });
    return ((localeInRespectToPageCulture && matchedLocalizedTitle[localeInRespectToPageCulture]) || persistedTitle);
}


/***/ }),

/***/ "rL3y":
/*!********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffIndicator.js ***!
  \********************************************************************/
/*! exports provided: DiffIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffIndicator", function() { return DiffIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DiffIndicatorStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiffIndicatorStyles */ "P59B");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DeferredDiffMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeferredDiffMessage */ "kel/");






var DiffIndicator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DiffIndicator, _super);
    function DiffIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._primaryHostId = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getId"])('primaryHost');
        _this._secondaryHostId = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getId"])('secondaryHost');
        _this._primaryId = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getId"])('primary');
        _this._secondaryId = Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getId"])('secondary');
        _this._primaryRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._secondaryRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._listenerEvents = new _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        return _this;
    }
    DiffIndicator.prototype.componentDidMount = function () {
        var _this = this;
        this._listenerEvents.on(window, 'focusDiffIndicator', function (event) {
            if (event.detail) {
                var _a = _this.props, primaryDiff = _a.primaryDiff, secondaryDiff = _a.secondaryDiff;
                if (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(event.detail.diff, primaryDiff) && _this._primaryRef.current) {
                    _this._primaryRef.current.focus();
                }
                else if (Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(event.detail.diff, secondaryDiff) && _this._secondaryRef.current) {
                    _this._secondaryRef.current.focus();
                }
            }
        });
    };
    DiffIndicator.prototype.componentWillUnmount = function () {
        this._listenerEvents.dispose();
    };
    DiffIndicator.prototype.render = function () {
        var _a = this.props, primaryDiff = _a.primaryDiff, secondaryDiff = _a.secondaryDiff, theme = _a.theme;
        var icons = this._getIcons(primaryDiff.type);
        var secondaryIcons = secondaryDiff ? this._getIcons(secondaryDiff.type) : [];
        if (!icons.length && !secondaryIcons.length) {
            return false;
        }
        var themedClassNames = _DiffIndicatorStyles__WEBPACK_IMPORTED_MODULE_3__["DiffIndicatorStyles"].getClassNames(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { root: '', primaryIconsCount: icons.length, secondaryIconsCount: secondaryIcons.length, theme: theme || Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["getTheme"])() }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: themedClassNames.canvasControlBorder }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: themedClassNames.root, "data-automation-id": 'diff-indicator' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["TooltipHost"], { id: this._primaryHostId, content: this._renderDiffTooltipContent(themedClassNames.tooltipContent, primaryDiff), calloutProps: { gapSpace: 0, target: "#" + this._primaryId } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(themedClassNames.iconWrapper, themedClassNames.primaryIconWrapper), "aria-labelledby": this._primaryHostId, id: this._primaryId, tabIndex: 0, role: 'button', ref: this._primaryRef },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(themedClassNames.iconDecorator, themedClassNames.primaryIconDecorator) }, icons.map(function (icon) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { key: icon, iconName: icon, className: themedClassNames.icon })); })))),
                secondaryDiff && Boolean(icons.length && secondaryIcons.length) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["TooltipHost"], { id: this._secondaryHostId, content: this._renderDiffTooltipContent(themedClassNames.tooltipContent, secondaryDiff), calloutProps: { gapSpace: 0, target: "#" + this._secondaryId } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(themedClassNames.iconWrapper, themedClassNames.secondaryIconWrapper), "aria-labelledby": this._secondaryHostId, id: this._secondaryId, tabIndex: 0, role: 'button', ref: this._secondaryRef },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["css"])(themedClassNames.iconDecorator, themedClassNames.secondaryIconDecorator) }, secondaryIcons.map(function (icon) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_2__["Icon"], { key: icon, iconName: icon, className: themedClassNames.icon })); }))))))));
    };
    DiffIndicator.prototype._getIcons = function (diffType) {
        switch (diffType) {
            case 'Add':
                return ['CalculatorAddition'];
            case 'Remove':
                return ['Delete'];
            case 'Modify':
                return ['Edit'];
            case 'Move':
                return ['Move'];
            case 'MoveAndModify':
                return ['Edit', 'Move'];
            case 'SectionEmphasis':
                return ['Color'];
            case 'Identical':
            default:
                return [];
        }
    };
    DiffIndicator.prototype._renderDiffTooltipContent = function (className, diff) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: className },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DeferredDiffMessage__WEBPACK_IMPORTED_MODULE_5__["DeferredDiffMessage"], { diff: diff })));
    };
    return DiffIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "sO6Y":
/*!*********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/index-deferred.js ***!
  \*********************************************************************/
/*! exports provided: getControlDiffInfo, getZoneDiffInfo, getCanvasContentToRender, convertControlDiffToMap, convertZoneDiffToMap, sortDiffs, ControlDiffIndicator, DiffIndicator, DiffIndicatorStyles, getDiffMessageComponent, getDomDiffStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasDiff */ "iYHv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getControlDiffInfo", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["getControlDiffInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZoneDiffInfo", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["getZoneDiffInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanvasContentToRender", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["getCanvasContentToRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertControlDiffToMap", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["convertControlDiffToMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertZoneDiffToMap", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["convertZoneDiffToMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortDiffs", function() { return _CanvasDiff__WEBPACK_IMPORTED_MODULE_0__["sortDiffs"]; });

/* harmony import */ var _ControlDiffIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlDiffIndicator */ "MuQK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlDiffIndicator", function() { return _ControlDiffIndicator__WEBPACK_IMPORTED_MODULE_1__["ControlDiffIndicator"]; });

/* harmony import */ var _DiffIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiffIndicator */ "rL3y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiffIndicator", function() { return _DiffIndicator__WEBPACK_IMPORTED_MODULE_2__["DiffIndicator"]; });

/* harmony import */ var _DiffIndicatorStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiffIndicatorStyles */ "P59B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiffIndicatorStyles", function() { return _DiffIndicatorStyles__WEBPACK_IMPORTED_MODULE_3__["DiffIndicatorStyles"]; });

/* harmony import */ var _DiffMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiffMessage */ "uHMl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDiffMessageComponent", function() { return _DiffMessage__WEBPACK_IMPORTED_MODULE_4__["getDiffMessageComponent"]; });

/* harmony import */ var _getDomDiffStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDomDiffStrings */ "FoRe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomDiffStrings", function() { return _getDomDiffStrings__WEBPACK_IMPORTED_MODULE_5__["getDomDiffStrings"]; });









/***/ }),

/***/ "srBE":
/*!********************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMessage.resx ***!
  \********************************************************************/
/*! exports provided: AddedTemplate, DeletedTemplate, EditedTemplate, MovedTemplate, EditedAndMovedTemplate, EmphasisChangeTemplate, AddedCuratedTemplate, RemovedCuratedTemplate, CuratedItemNamePlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AddedTemplate\":\"AddedTemplate\",\"DeletedTemplate\":\"DeletedTemplate\",\"EditedTemplate\":\"EditedTemplate\",\"MovedTemplate\":\"MovedTemplate\",\"EditedAndMovedTemplate\":\"EditedAndMovedTemplate\",\"EmphasisChangeTemplate\":\"EmphasisChangeTemplate\",\"AddedCuratedTemplate\":\"AddedCuratedTemplate\",\"RemovedCuratedTemplate\":\"RemovedCuratedTemplate\",\"CuratedItemNamePlaceholder\":\"CuratedItemNamePlaceholder\"}");

/***/ }),

/***/ "svZL":
/*!**************************************************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasZonePropertyPane/canvasZonePropertyPaneStrings.resx ***!
  \**************************************************************************************************/
/*! exports provided: SectionPropertyPaneTitle, SectionPropertyPaneColumnGroupName, SectionBackgroundPropertyColumnGroupName, SectionBackgroundNeutralButtonLabel, SectionBackgroundSoftButtonLabel, SectionBackgroundStrongButtonLabel, SectionBackgroundNoneButtonLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SectionPropertyPaneTitle\":\"SectionPropertyPaneTitle\",\"SectionPropertyPaneColumnGroupName\":\"SectionPropertyPaneColumnGroupName\",\"SectionBackgroundPropertyColumnGroupName\":\"SectionBackgroundPropertyColumnGroupName\",\"SectionBackgroundNeutralButtonLabel\":\"SectionBackgroundNeutralButtonLabel\",\"SectionBackgroundSoftButtonLabel\":\"SectionBackgroundSoftButtonLabel\",\"SectionBackgroundStrongButtonLabel\":\"SectionBackgroundStrongButtonLabel\",\"SectionBackgroundNoneButtonLabel\":\"SectionBackgroundNoneButtonLabel\"}");

/***/ }),

/***/ "uHMl":
/*!******************************************************************!*\
  !*** ./lib/sp-canvas/canvas/editChunk/canvasDiff/DiffMessage.js ***!
  \******************************************************************/
/*! exports provided: getDiffMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiffMessageComponent", function() { return getDiffMessageComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/KillSwitches */ "17t3");
/* harmony import */ var _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiffMessage.resx */ "srBE");
var _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./DiffMessage.resx */ "srBE", 1);
/* harmony import */ var _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiffMessage.module.scss */ "hdyk");





function getFirstLineOfTextHtml(safeHtml, diff, stringTemplate) {
    // @todo: get rid of stringTemplate param and pass it everywhere as a part of ICanvasDiff/IControlDiff
    // VSO link: https://onedrive.visualstudio.com/CSI/_workitems/edit/896711
    if (diff.type === 'SectionEmphasis') {
        var fromEmphasisHtml = "<span class='" + _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bold + "'>" + diff.fromEmphasisString + "</span>";
        var toEmphasisHtml = "<span class='" + _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bold + "'>" + diff.toEmphasisString + "</span>";
        // Action and the emphasis names are logically connected strings.
        // The string context will be lost if we use separate DOMs without going through string template.
        return safeHtml.clean(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(stringTemplate, fromEmphasisHtml, toEmphasisHtml));
    }
    else if (diff.type === 'AddedCurated' || diff.type === 'RemovedCurated') {
        var template = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["KillSwitches"].topicCustomStringsActivityLog.isActivated()
            ? diff.stringTemplate || stringTemplate
            : stringTemplate;
        var item = !_common_KillSwitches__WEBPACK_IMPORTED_MODULE_2__["KillSwitches"].topicCustomStringsActivityLog.isActivated()
            ? diff.stringItem || diff.message[0]
            : diff.message[0];
        var webPartNameHtml = "<span class='" + _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bold + "'>" + diff.webPartName + "</span>";
        var itemNameHtml = "<span class='" + _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bold + "'>" + (item || _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["CuratedItemNamePlaceholder"]) + "</span>";
        // Action and the web part name are logically connected strings.
        // The string context will be lost if we use separate DOMs without going through string template.
        return safeHtml.clean(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(template, webPartNameHtml, itemNameHtml));
    }
    else {
        var webPartNameHtml = "<span class='" + _DiffMessage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bold + "'>" + diff.webPartName + "</span>";
        // Action and the web part name are logically connected strings.
        // The string context will be lost if we use separate DOMs without going through string template.
        return safeHtml.clean(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(stringTemplate, webPartNameHtml));
    }
}
function getStringTemplate(diff) {
    switch (diff.type) {
        case 'Add':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["AddedTemplate"];
        case 'AddedCurated':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["AddedCuratedTemplate"];
        case 'RemovedCurated':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["RemovedCuratedTemplate"];
        case 'Remove':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["DeletedTemplate"];
        case 'Modify':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["EditedTemplate"];
        case 'Move':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["MovedTemplate"];
        case 'MoveAndModify':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["EditedAndMovedTemplate"];
        case 'SectionEmphasis':
            return _DiffMessage_resx__WEBPACK_IMPORTED_MODULE_3__["EmphasisChangeTemplate"];
    }
}
// tslint:disable-next-line:export-name
function getDiffMessageComponent(safeHtml) {
    return function (props) {
        var diff = props.diff;
        var stringTemplate = getStringTemplate(diff);
        if (!stringTemplate) {
            return null; // tslint:disable-line:no-null-keyword
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: props.className, dangerouslySetInnerHTML: { __html: getFirstLineOfTextHtml(safeHtml, diff, stringTemplate) } }));
    };
}


/***/ })

}]);
//# sourceMappingURL=chunk.sp-canvas-diff_[locale].js.map