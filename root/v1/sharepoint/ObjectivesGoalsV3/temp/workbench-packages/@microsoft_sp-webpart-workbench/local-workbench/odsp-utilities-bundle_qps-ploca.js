define("cc2cc925-b5be-41bb-880a-f0f8030c6aff_5.3.140", ["tslib","@ms/odsp-core-bundle"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_K9kD__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
var UriEncoding = /** @class */ (function () {
    function UriEncoding() {
    }
    /////////////////////////////
    // This file is more clean of all unneeded pollutants. It only contains the minimum amount of code required for someone to use the URI class.
    // You should think twice before adding anything else into this file because you will be causing unneeded bloat from someone else.
    /////////////////////////////
    /**
     * This function performs an aggressive unicode URL-encoding.
     * Convert non alphanum character into UTF-8 code string in format %XX%XX%XX.
     *
     * Escape unsafe characters
     *   CTL | SP | <"> | "#" | "%" | "<" | ">" | "'" | "&"
     * in the URL path (before "?", "#")
     * No encoding on query string.
     *
     * @param {string} str - String to encode
     * @param {boolean} bAsUrl - Encode in the same way as the code in unmanaged (Url::UrlEncode) code and
     *                           SP OM (SPHttpUtility.UrlKeyValueEncode and SPHttpUtility.UrlPathEncode).
     * @param {boolean} bForFilterQuery
     * @param {boolean} bForCallback - Only escape the characters after 0x7F to workaround bug O12: 452191
     */
    UriEncoding.encodeURIComponent = function (str, bAsUrl, bForFilterQuery, bForCallback) {
        var strOut = '';
        var strByte;
        var ix = 0;
        var strEscaped = ' "%<>\'&';
        if (!str) {
            // making this more robust
            return '';
        }
        var len = str.length;
        for (ix = 0; ix < len; ix++) {
            var charCode = str.charCodeAt(ix);
            var curChar = str.charAt(ix);
            if (bAsUrl && (curChar === '#' || curChar === '?')) {
                strOut += str.substr(ix);
                break;
            }
            if (bForFilterQuery && curChar === '&') {
                strOut += curChar;
                continue;
            }
            if (charCode <= 0x7f) {
                if (bForCallback) {
                    strOut += curChar;
                }
                else {
                    if ((charCode >= 97 && charCode <= 122) ||
                        (charCode >= 65 && charCode <= 90) ||
                        (charCode >= 48 && charCode <= 57) ||
                        (bAsUrl && charCode >= 32 && charCode <= 95 && strEscaped.indexOf(curChar) < 0)) {
                        strOut += curChar;
                    }
                    else if (charCode <= 0x0f) {
                        strOut += '%0' + charCode.toString(16).toUpperCase();
                    }
                    else if (charCode <= 0x7f) {
                        strOut += '%' + charCode.toString(16).toUpperCase();
                    }
                }
            }
            else if (charCode <= 0x07ff) {
                strByte = 0xc0 | (charCode >> 6);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f);
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if ((charCode & 0xfc00) !== 0xd800) {
                strByte = 0xe0 | (charCode >> 12);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if (ix < str.length - 1) {
                charCode = (charCode & 0x03ff) << 10; // lower 10 bits of first char
                ix++;
                var nextCharCode = str.charCodeAt(ix);
                charCode |= nextCharCode & 0x03ff; // lower 10 bits of second char
                charCode += 0x10000;
                strByte = 0xf0 | (charCode >> 18);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x3f000) >> 12); // upper 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
        }
        return strOut;
    };
    /**
     * Callbacks do not work if a #bookmark is in the URL. If there is a bookmark then we need to remove it. We also need to
     * deal with the scenario where there is not a bookmark but there is an unencoded # as a part of a name/value after the '?'.
     * This is how things should work here:
     * .../foo.aspx -> .../foo.aspx (unchanged)
     * .../foo.aspx#bookmark -> .../foo.aspx (bookmark is removed)
     * .../foo.aspx#bookmark?name=value -> .../foo.aspx?name=value (bookmark is removed)
     * .../foo.aspx#bookmark?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (only the bookmark # is removed)
     * .../foo.aspx?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (unchanged)
     */
    UriEncoding.escapeUrlForCallback = function (str) {
        var iPound = str.indexOf('#');
        var iQues = str.indexOf('?');
        if (iPound > 0 && (iQues === -1 || iPound < iQues)) {
            var strNew = str.substr(0, iPound);
            if (iQues > 0) {
                strNew += str.substr(iQues); // Need to include the '?' along with the "name=value" pairs.
            }
            str = strNew;
        }
        return UriEncoding.encodeURIComponent(str, true, false, true);
    };
    /**
     * SharePoint REST processor expect single quote ' to be escaped to '' in tokens (this applies to %27 too).
     * See example for usage.
     * @example
     * "getFolderByServerRelativeUrl('"+encodeRestUriStringToken("don't know.txt")+"')" should became "getFolderByServerRelativeUrl('don''t know.txt')""
     */
    UriEncoding.encodeRestUriStringToken = function (stringToken) {
        if (stringToken) {
            stringToken = stringToken.replace(/'/g, "''");
            stringToken = stringToken.replace(/%27/g, '%27%27');
            stringToken = UriEncoding.encodeURIComponent(stringToken);
        }
        return stringToken;
    };
    return UriEncoding;
}());
/* harmony default export */ __webpack_exports__["default"] = (UriEncoding);
//# sourceMappingURL=UriEncoding.js.map

/***/ }),

/***/ "+7kh":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/navigation/AddressParser.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/navigation/AddressParser.js


/***/ }),

/***/ "0sdQ":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHRPromise.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XHR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XHR */ "KaEC");
/* harmony import */ var _async_Promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../async/Promise */ "7Ihg");
// OneDrive:IgnoreCodeCoverage


var XHRPromise = /** @class */ (function () {
    function XHRPromise() {
    }
    XHRPromise.start = function (options) {
        var xhr = new _XHR__WEBPACK_IMPORTED_MODULE_0__["default"](options);
        return new _async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"](function (complete, error) {
            xhr.start(complete, error);
        }, function () {
            xhr.abort(true);
        });
    };
    XHRPromise.startAndPostProcess = function (options, postProcessor) {
        var xhr = new _XHR__WEBPACK_IMPORTED_MODULE_0__["default"](options);
        return new _async_Promise__WEBPACK_IMPORTED_MODULE_1__["default"](function (complete, error) {
            xhr.start(function (xhr, status) {
                complete(postProcessor(xhr, status));
            }, error);
        }, function () {
            xhr.abort(true);
        });
    };
    return XHRPromise;
}());
/* harmony default export */ __webpack_exports__["default"] = (XHRPromise);
//# sourceMappingURL=XHRPromise.js.map

/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "1hLk":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/locale/Locale.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Locale"]; });

// Loading @ms/odsp-utilities/./lib/locale/Locale.js



/***/ }),

/***/ "2h7V":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-strings@1.0.1/node_modules/@ms/utilities-strings/lib/index.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/utilities-strings/./lib/index.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "3nV3":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/iso.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: iso8601DateTimeToJsDate, convertDateToISOString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iso8601DateTimeToJsDate", function() { return iso8601DateTimeToJsDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateToISOString", function() { return convertDateToISOString; });
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated We no longer support IE 8, so this just returns `new Date(dateTime)`
 */
function iso8601DateTimeToJsDate(dateTime) {
    return new Date(dateTime);
}
/**
 * @param dateString Date string
 * @param extended Selects extended format with date and time delimiters
 * @deprecated Use `date.toISOString()` instead. Though note that this method's return value
 * does NOT match the standard ISO string format, which ends with milliseconds, whereas this
 * ends with the time zone offset...
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */
function convertDateToISOString(dateString, extended) {
    if (extended === void 0) { extended = false; }
    var date = new Date(dateString);
    // For more info on the time zone offset and its signage, see:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
    var isOffsetNegative = date.getTimezoneOffset() < 0;
    var year = date.getFullYear() + '';
    var month = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(date.getMonth() + 1 + '', 2); // zero based month
    var day = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(date.getDate() + '', 2);
    var hours = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(date.getHours() + '', 2);
    var minutes = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(date.getMinutes() + '', 2);
    var seconds = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(date.getSeconds() + '', 2);
    var offsetHours = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])(isOffsetNegative
        ? (Math.ceil(date.getTimezoneOffset() / 60) + '').replace('-', '')
        : Math.floor(date.getTimezoneOffset() / 60) + '', 2);
    var offsetMinutes = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["leftPad"])((date.getTimezoneOffset() % 60).toString().replace('-', ''), 2);
    var timezoneOffset = (isOffsetNegative ? '+' : '-') + offsetHours + offsetMinutes;
    if (extended) {
        return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + timezoneOffset;
    }
    else {
        return year + month + day + 'T' + hours + minutes + seconds + timezoneOffset;
    }
}
//# sourceMappingURL=iso.js.map

/***/ }),

/***/ "70sN":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/ABExperiment.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/ABExperiment.js


/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



/***/ }),

/***/ "BY+f":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/StringHelper.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/string/StringHelper.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.StringHelper;

/***/ }),

/***/ "BgFM":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/ResultTypeEnum.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/events/ResultTypeEnum.js


/***/ }),

/***/ "EBPj":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/HtmlEncoding.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// encode <>&'"
var ENCODE_HTML_TEXT_REGEX = /[<>&'"\\]/g;
var CODES = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
    '\\': '&#92;'
};
function replacer(match) {
    return CODES[match];
}
var HtmlEncoding = /** @class */ (function () {
    function HtmlEncoding() {
    }
    /**
     * Encodes a string for use in HTML text. Not recommended for attribute values
     * or anything that might be used in a URL.
     */
    HtmlEncoding.encodeText = function (inputString) {
        if (!inputString) {
            return '';
        }
        return inputString.replace(ENCODE_HTML_TEXT_REGEX, replacer);
    };
    return HtmlEncoding;
}());
/* harmony default export */ __webpack_exports__["default"] = (HtmlEncoding);
//# sourceMappingURL=HtmlEncoding.js.map

/***/ }),

/***/ "EiK5":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: getDateFromDotNetTicks, getRelativeDateTimeStringPast, getRelativeDateTimeStringPastWithHourMinute, getRelativeDateTimeResx, getRelativeDateTimeIntervalString, ONE_SECOND, ONE_MINUTE, TWO_MINUTES, ONE_HOUR, TWO_HOURS, ONE_DAY, TWO_DAYS, ONE_WEEK, ONE_MONTH, isSameDay, isSameMonth, isSameYear, isThisWeek, isLastWeek, getLastDayOfMonth, toLocaleDateString, toLocaleTimeString, isLastAFewDays, convert24Timeto00Format, iso8601DateTimeToJsDate, convertDateToISOString, getRelativeDateTimeStringForLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dotNet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dotNet */ "Rq9P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateFromDotNetTicks", function() { return _dotNet__WEBPACK_IMPORTED_MODULE_0__["getDateFromDotNetTicks"]; });

/* harmony import */ var _relativePast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relativePast */ "ZRaF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPast", function() { return _relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeStringPast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPastWithHourMinute", function() { return _relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeStringPastWithHourMinute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeResx", function() { return _relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeIntervalString", function() { return _relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeIntervalString"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "PgVY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_SECOND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_MINUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_MINUTES", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["TWO_MINUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_HOUR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_HOURS", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["TWO_HOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_DAY", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_DAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_DAYS", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["TWO_DAYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_WEEK", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MONTH", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["ONE_MONTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisWeek", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isThisWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastWeek", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isLastWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastDayOfMonth", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["getLastDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateString", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["toLocaleDateString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeString", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["toLocaleTimeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastAFewDays", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["isLastAFewDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convert24Timeto00Format", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["convert24Timeto00Format"]; });

/* harmony import */ var _iso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iso */ "3nV3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iso8601DateTimeToJsDate", function() { return _iso__WEBPACK_IMPORTED_MODULE_3__["iso8601DateTimeToJsDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDateToISOString", function() { return _iso__WEBPACK_IMPORTED_MODULE_3__["convertDateToISOString"]; });

/* harmony import */ var _sharePoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharePoint */ "IIUv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return _sharePoint__WEBPACK_IMPORTED_MODULE_4__["getRelativeDateTimeStringForLists"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



/***/ }),

/***/ "FAc7":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/icons/ItemType.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["ItemType"]; });

// Loading @ms/odsp-utilities/./lib/icons/ItemType.js



/***/ }),

/***/ "G4wV":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/path/Path.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: splitFileName, getFileExtension, encodePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitFileName", function() { return splitFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileExtension", function() { return getFileExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePath", function() { return encodePath; });
// OneDrive:IgnoreCodeCoverage
// Split from odsp-next/src/local/utilities/path/Path.ts
// Contains non SP utility methods
function splitFileName(fileName) {
    var extension = getFileExtension(fileName);
    var name = extension ? fileName.substring(0, fileName.length - extension.length) : fileName;
    return {
        name: name,
        extension: extension
    };
}
/**
 * Given a filename (without directory path), return the file extension or the empty string if one is not present.
 */
function getFileExtension(fileName, removeDot) {
    if (removeDot === void 0) { removeDot = false; }
    var extension = '';
    if (fileName) {
        var index = fileName.lastIndexOf('.');
        if (index >= 0) {
            if (removeDot) {
                extension = fileName.substr(index + 1);
            }
            else {
                extension = fileName.substr(index);
            }
        }
    }
    return extension;
}
function encodePath(url, encodeHash) {
    if (encodeHash === void 0) { encodeHash = true; }
    url = encodeURI(url);
    if (encodeHash) {
        // encodeURI API doesn't encode # path. Here for openUrl we know # is path, not Hash, so encode it properly "manually".
        if (url) {
            url = url.replace(/#/g, '%23');
        }
    }
    return url;
}
//# sourceMappingURL=Path.js.map

/***/ }),

/***/ "GbJQ":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/string/EmailAddressParser.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
/**
 * Matches strings that look like email addresses.
 * Note that this regex will also match surrounding brackets and double-quotes; e.g. all of the following will match:
 * a@b.com "a@b.com" <a@b.com> 'a@b.com "a@b.com> a@b.com> <a@b.com etc.
 */
var EmailAddressParser = /** @class */ (function () {
    /**
     * Parses text input into name and address properties.
     * @param {string} text - The string to parse.
     * @returns {EmailAddressParser} EmailAddressParser instances.
     */
    function EmailAddressParser(text) {
        var email;
        this._raw = text;
        if (!text) {
            return;
        }
        // WinLive: 656427: AutoComplete: Replying to message with no friendly name fails to populate the reply-to address in the To box for BiDi languages
        // Remove Unicode left-to-right and right-to-left markers (invisible chars)
        text = text.replace(/\u200e|\u200f/g, '');
        text = text.trim();
        // Match an email address out of the string.
        // In order to do iterative matching, we need a regex with the global flag which is private to this method.
        // There would be errors in subsequent uses of the regex if EmailRegex had the global flag.
        var emailRegex = new RegExp(EmailAddressParser.EmailRegexPattern, 'gi');
        var addrMatch;
        var currMatch;
        var addrMatchType = EmailAddressParser.EmailMatchTypes.None;
        var currMatchType = EmailAddressParser.EmailMatchTypes.None;
        while ((currMatch = emailRegex.exec(text)) !== null) {
            var currMatchString = currMatch[0];
            var firstChar = currMatchString.charAt(0);
            var lastChar = currMatchString.charAt(currMatchString.length - 1);
            // Figure out what kind of email address we have
            if (firstChar === '<' && lastChar === '>') {
                currMatchType = EmailAddressParser.EmailMatchTypes.Bracketed;
            }
            else if (firstChar === '"' && lastChar === '"') {
                currMatchType = EmailAddressParser.EmailMatchTypes.Quoted;
            }
            else {
                currMatchType = EmailAddressParser.EmailMatchTypes.Bare;
            }
            if (currMatchType > addrMatchType) {
                // If this address is more desirable than what we currently have, replace it.
                addrMatch = currMatch;
                addrMatchType = currMatchType;
                if (currMatchType === EmailAddressParser.EmailMatchTypes.Bracketed) {
                    // Since Bracketed emails are the most desirable, we break on the first one we find
                    // to avoid unneccesary processing.
                    break;
                }
            }
        }
        // Clean up the email address and parse out the name, if possible.
        var rawName = text;
        if (addrMatch) {
            email = addrMatch[0];
            // Split the text into three parts based on the address (before/address/after):
            var startIndex = addrMatch.index;
            var endIndex = startIndex + email.length;
            var before = startIndex > 0 ? text.substr(0, startIndex).trim() : '';
            var after = endIndex < text.length ? text.substr(endIndex) : '';
            // Remove surrounding quote marks and brackets.
            var cleanEmail = EmailAddressParser.StripBracketsAndQuotesRegex.exec(email);
            email = cleanEmail[1];
            // Remove leading quote mark if there's also a trailing quote mark.
            if (email.charAt(0) === "'" && after && after.charAt(0) === "'") {
                email = email.slice(1);
                after = after.slice(1).trim();
            }
            // Choose the first non-empty string to parse the name from:
            rawName = before === '' ? after : before;
            this._email = email.trim();
        }
        // Clean up the name next...
        rawName = rawName.replace(/^\s*"\s*/, '').trim();
        if (rawName.length > 1 && rawName.charAt(rawName.length - 2) !== '/') {
            // Last double-quote is not escaped; remove it:
            rawName = rawName.replace(/\s*"$/, '');
        }
        // Remove all escapes:
        rawName = rawName.replace(/\//g, '');
        if (rawName !== '' && rawName !== email) {
            this._name = rawName;
        }
    }
    /**
     * Checks if the given string is a valid email address format.
     * @param {string} token - A string (potentially) containing an email address.
     * @param {boolean} checkRfcCompliant - If true, also checks to make sure that the
     * string contains an address that is nominally RFC822-compliant. Otherwise, only checks whether the
     * EmailAddressParser recognizes a parsable email address inside the string. Defaults to false
     * @returns {boolean} True if the string represents a parsable email address.
     */
    EmailAddressParser.isValidEmailSyntax = function (token, checkRfcCompliant) {
        if (!token) {
            return false;
        }
        return !!(checkRfcCompliant ? EmailAddressParser.ValidEmailRegex : EmailAddressParser.EmailRegex).exec(token.trim());
    };
    /**
     * Factory method that parses a text string into an array of EmailAddressParser instances.
     * @param {string} text - The string to parse.
     * @returns {EmailAddressParser} An array of EmailAddressParser instances.
     */
    EmailAddressParser.parse = function (text) {
        if (!text) {
            return [];
        }
        var entries = EmailAddressParser._splitAddresses(text);
        var addresses = [];
        for (var i = 0, len = entries.length; i < len; i++) {
            addresses.push(new EmailAddressParser(entries[i]));
        }
        return addresses;
    };
    /**
     * Answers whether the last email address has a delimiter at the end of it.
     * @param {string} text - The string to parse.
     * @returns {boolean} True if the last email address ends with a delimiter, false otherwise
     */
    EmailAddressParser.endsWithDelimiter = function (text) {
        if (text) {
            var parts = text.split(EmailAddressParser.DelimiterRegex);
            return !parts[parts.length - 1].trim();
        }
        else {
            return false;
        }
    };
    /**
     * Parses a string containing semicolon- or comma-delimited email addresses into entries.
     * Separators within double-quotes are not active, allowing names such as "Last, First".
     * @param {string} s - The string to parse.
     * @returns {String} An array of address strings
     */
    EmailAddressParser._splitAddresses = function (s) {
        var parts = s.split(EmailAddressParser.DelimiterRegex);
        // Trim entries of whitespace and remove empty entries:
        for (var i = parts.length - 1; i >= 0; i--) {
            parts[i] = parts[i].trim();
            if (parts[i].length === 0) {
                parts.splice(i, 1);
            }
        }
        return parts;
    };
    /**
     * Gets the parsed email address of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getEmail = function () {
        return this._email;
    };
    /**
     * Gets the display name of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getName = function () {
        return this._name;
    };
    /**
     * Gets the raw value of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getRaw = function () {
        return this._raw;
    };
    // WinLive 839729 - In order to avoid parsing issues with characters above ASCII range, the regex accepts any unicode
    // charactes above ASCII range wherever it would also accept alphanumeric characters. Ideally, it'd exclude
    // non-word characters, but the regex engine in Javascript doesn't provide enough unicode support for that,
    // so we use the blunt instrument of including \u0080-\uFFFF as valid.
    // Email addresses that contain characters in the \u0080-\uFFFF range aren't actually valid, but we still want to
    // recognize them as part of the email address so that it's even possible to detect the email address as invalid.
    // Otherwise, the algorithm would merely truncate to the valid part of the email address.
    // It is up to clients to validate their email addresses if they want stricter checking.
    EmailAddressParser.EmailRegexPattern = '(?:[<"]\\s*)?[a-z0-9\\u0080-\\uFFFF!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9\\u0080-\\uFFFF!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9\\u0080-\\uFFFF](?:[a-z0-9\\u0080-\\uFFFF-]*[a-z0-9\\u0080-\\uFFFF])?\\.)+[a-z0-9\\u0080-\\uFFFF](?:[a-z0-9\\u0080-\\uFFFF-]*[a-z0-9\\u0080-\\uFFFF])?(?:\\s*[>"])?';
    EmailAddressParser.EmailRegex = new RegExp(EmailAddressParser.EmailRegexPattern, 'i');
    // RegEx pattern used to test if a string has valid email syntax (RFC822).
    EmailAddressParser.ValidEmailRegexPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)";
    EmailAddressParser.ValidEmailRegex = new RegExp(EmailAddressParser.ValidEmailRegexPattern, 'i');
    // Regex used for stripping off the extra quote marks and brackets that the above regex matches
    EmailAddressParser.StripBracketsAndQuotesRegex = /^[<"]?([^<>"]*)[>"]?$/;
    EmailAddressParser.DelimiterRegex = /[,;](?=(?:[^"]*"[^"]*")*(?![^"]*"))/;
    EmailAddressParser.EmailMatchTypes = { None: 0, Quoted: 1, Bare: 2, Bracketed: 3 };
    return EmailAddressParser;
}());
/* harmony default export */ __webpack_exports__["default"] = (EmailAddressParser);
//# sourceMappingURL=EmailAddressParser.js.map

/***/ }),

/***/ "HddE":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/performance/PerformanceMarker.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/performance/PerformanceMarker.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.PerformanceMarker;

/***/ }),

/***/ "I5DX":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/Uri.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Uri"]; });

// Loading @ms/odsp-utilities/./lib/uri/Uri.js



/***/ }),

/***/ "I844":
/*!*************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/signal/CancelableSignal.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../promise/CancelablePromise */ "XnbY");
// OneDrive:IgnoreCodeCoverage

/**
 * Signal is used to manage a promise without having to pass a function to the Promise constructor.
 * Example:
 * var s = new Signal<boolean>();
 * setTimeout(() => {
 *    s.complete(true);
 * }, 1000);
 * return s.promise;
 */
var Signal = /** @class */ (function () {
    /**
     * Create a new Signal (also known as a Deferred in some circles.)
     * @param: oncancel A function to be called when the promise is cancelled.
     */
    function Signal(oncancel) {
        this._promise = new _promise_CancelablePromise__WEBPACK_IMPORTED_MODULE_0__["SignalPromise"](oncancel);
    }
    /**
     * The underlying promise that the Signal manages.
     */
    Signal.prototype.getPromise = function () {
        return this._promise;
    };
    /**
     * Cancel the underlying promise.
     */
    Signal.prototype.cancel = function () {
        this._promise.cancel();
    };
    /**
     * Complete the underlying promise with the given value.
     */
    Signal.prototype.complete = function (value) {
        this._promise._completed(value);
    };
    /**
     * Put the underlying promise into the error state with the given value.
     */
    // tslint:disable-next-line: no-any
    Signal.prototype.error = function (value) {
        this._promise._error(value);
    };
    return Signal;
}());
/* harmony default export */ __webpack_exports__["default"] = (Signal);
//# sourceMappingURL=CancelableSignal.js.map

/***/ }),

/***/ "IIUv":
/*!********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/sharePoint.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: getRelativeDateTimeStringForLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return getRelativeDateTimeStringForLists; });
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _relativePast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relativePast */ "ZRaF");
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTime.resx */ "lnCR");
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2__);



/**
 * For use with lists' server-processed date value.
 * @param relativeDateTimeJSString list server-processed date value string
 * @param startWithLowerCase use this option when the return string is not at beginning of the sentence.
 */
function getRelativeDateTimeStringForLists(relativeDateTimeJSString, startWithLowerCase) {
    if (startWithLowerCase === void 0) { startWithLowerCase = false; }
    var codes = relativeDateTimeJSString.split('|');
    // Passthrough case
    if (codes[0] === '0') {
        return relativeDateTimeJSString.substring(2);
    }
    var isFuture = codes[1] === '1';
    var timeBucket = codes[2];
    var timeValue = codes[3] || '';
    var timeValue2 = codes[4] || '';
    switch (timeBucket) {
        // a few seconds
        case '1':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])('AFewSeconds', startWithLowerCase, isFuture);
        // about a minute
        case '2':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])('AboutAMinute', startWithLowerCase, isFuture);
        // x minutes
        case '3':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeIntervalString"])(Number(timeValue), 'XMinutes', startWithLowerCase, isFuture);
        // about an hour
        case '4':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])('AboutAnHour', startWithLowerCase, isFuture);
        // yesterday / tomorrow
        case '5':
            if (!timeValue) {
                return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])(isFuture ? 'Tomorrow' : 'Yesterday', startWithLowerCase);
            }
            return Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])(isFuture ? 'TomorrowAndTime' : 'YesterdayAndTime', startWithLowerCase), timeValue);
        // x hours
        case '6':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeIntervalString"])(Number(timeValue), 'XHours', startWithLowerCase, isFuture);
        // day and time
        case '7':
            if (timeValue2) {
                return Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["format"])(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.RelativeDateTime_DayAndTime, timeValue, timeValue2);
            }
            return timeValue;
        // <Days> days
        case '8':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeIntervalString"])(Number(timeValue), 'XDays', startWithLowerCase, isFuture);
        // today
        case '9':
            return Object(_relativePast__WEBPACK_IMPORTED_MODULE_1__["getRelativeDateTimeResx"])('Today', startWithLowerCase);
    }
    return null;
}
//# sourceMappingURL=sharePoint.js.map

/***/ }),

/***/ "Joik":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Api.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: ResultTypeEnum, Api, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PairedEventBase */ "g/c1");
/* harmony import */ var _PairedEventBase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Qos.event */ "c09w");
/* harmony import */ var _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultTypeEnum */ "BgFM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ResultTypeEnum__WEBPACK_IMPORTED_MODULE_2__["ResultTypeEnum"]; });

// OneDrive:IgnoreCodeCoverage




var Api = Object(_PairedEventBase__WEBPACK_IMPORTED_MODULE_0__["createPairedEvent"])({
    eventName: 'Api,Qos,',
    shortEventName: 'Api'
}, {
    url: 1 /* String */,
    privacyClassification: {
        isPrefixingDisabled: true,
        type: 1 /* String */
    }
}, _Qos_event__WEBPACK_IMPORTED_MODULE_1__["Qos"]).withData({ privacyClassification: "requiredService" /* requiredService */ });
/* harmony default export */ __webpack_exports__["default"] = (Api);
//# sourceMappingURL=Api.event.js.map

/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "KaEC":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/xhr/XHR.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["XHR"]; });

// Loading @ms/odsp-utilities/./lib/xhr/XHR.js



/***/ }),

/***/ "LSjO":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Signal.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_signal_CancelableSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/signal/CancelableSignal */ "I844");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_utilities_async_lib_signal_CancelableSignal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



//# sourceMappingURL=Signal.js.map

/***/ }),

/***/ "Nsau":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/object/ObjectUtil.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/object/ObjectUtil.js


/***/ }),

/***/ "Oa+Z":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/events/EventGroup.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: EventGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging/ErrorHelper */ "lmjA");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "dcNl");


function logToErrorHelper(error) {
    _logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_0__["default"].log(error);
}
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent, onError) {
        if (onError === void 0) { onError = logToErrorHelper; }
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._onError = onError;
        this._eventRecords = [];
    }
    /**
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        return _Events__WEBPACK_IMPORTED_MODULE_1__["raise"](target, eventName, eventArgs, bubbleEvent);
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            this.on(target, eventName, events[eventName], useCapture);
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent,
                callback: callback,
                objectCallback: null,
                elementCallback: null,
                useCapture: useCapture
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events_1 = (target.__events__ = target.__events__ || {});
            events_1[eventName] =
                events_1[eventName] ||
                    {
                        count: 0
                    };
            events_1[eventName][this._id] = events_1[eventName][this._id] || [];
            events_1[eventName][this._id].push(eventRecord);
            events_1[eventName].count++;
            if (_Events__WEBPACK_IMPORTED_MODULE_1__["isDOMEventTarget"](target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    try {
                        var result = callback.apply(parent, args);
                        if (result === false && args[0] && args[0].preventDefault) {
                            var e = args[0];
                            e.preventDefault();
                            EventGroup.stopPropagation(e);
                        }
                    }
                    catch (e) {
                        _this._onError(e);
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                /* tslint:disable:ban-native-functions */
                target.addEventListener(eventName, processElementEvent, useCapture);
                /* tslint:enable:ban-native-functions */
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof useCapture !== 'boolean' || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());

/* harmony default export */ __webpack_exports__["default"] = (EventGroup);
//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ "PgVY":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/helpers.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ONE_SECOND, ONE_MINUTE, TWO_MINUTES, ONE_HOUR, TWO_HOURS, ONE_DAY, TWO_DAYS, ONE_WEEK, ONE_MONTH, isSameDay, isSameMonth, isSameYear, isThisWeek, isLastWeek, getLastDayOfMonth, toLocaleDateString, toLocaleTimeString, isLastAFewDays, convert24Timeto00Format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function() { return ONE_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function() { return ONE_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_MINUTES", function() { return TWO_MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function() { return ONE_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_HOURS", function() { return TWO_HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_DAY", function() { return ONE_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_DAYS", function() { return TWO_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_WEEK", function() { return ONE_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_MONTH", function() { return ONE_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return isSameYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThisWeek", function() { return isThisWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLastWeek", function() { return isLastWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastDayOfMonth", function() { return getLastDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateString", function() { return toLocaleDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeString", function() { return toLocaleTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLastAFewDays", function() { return isLastAFewDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert24Timeto00Format", function() { return convert24Timeto00Format; });
// number of milliseconds for the given timespan
var ONE_SECOND = 1000;
var ONE_MINUTE = 60 * ONE_SECOND;
var TWO_MINUTES = 2 * ONE_MINUTE;
var ONE_HOUR = 60 * ONE_MINUTE;
var TWO_HOURS = 2 * ONE_HOUR;
var ONE_DAY = 24 * ONE_HOUR;
var TWO_DAYS = 2 * ONE_DAY;
var ONE_WEEK = 7 * ONE_DAY;
// This is for friendly estimates.
var ONE_MONTH = 32 * ONE_DAY;
/**
 * True if the given dates have the same day month and year.
 */
function isSameDay(a, b) {
    return a.getDate() === b.getDate() && Math.abs(b.getTime() - a.getTime()) < ONE_DAY;
}
/**
 * True if the given dates have the same month and year.
 */
function isSameMonth(a, b) {
    return a.getFullYear() === b.getFullYear() && b.getMonth() === a.getMonth();
}
function isSameYear(a, b) {
    return a.getFullYear() === b.getFullYear();
}
/**
 * True if the date is on or between the first and last day of the current week. This uses the Date function getDay()
 * which returns the day of the week for the specified date according to local time, where 0 represents Sunday.
 * You can optionally specify the date to use as the current date/time.
 */
function isThisWeek(pastTime, now) {
    now = now || new Date();
    var start = new Date(now.getTime() - now.getDay() * ONE_DAY);
    var end = new Date(start.getTime() + ONE_WEEK - ONE_DAY);
    return start.getTime() <= pastTime.getTime() && pastTime.getTime() <= end.getTime();
}
/**
 * True if the date is on or between the first and last day of the previous week. This uses the Date function getDay()
 * which returns the day of the week for the specified date according to local time, where 0 represents Sunday.
 * You can optionally specify the date to use as the current date/time.
 */
function isLastWeek(pastTime, now) {
    now = now || new Date();
    var start = new Date(now.getTime() - now.getDay() * ONE_DAY - ONE_WEEK);
    var end = new Date(start.getTime() + ONE_WEEK - ONE_DAY);
    return start.getTime() <= pastTime.getTime() && pastTime.getTime() <= end.getTime();
}
/**
 * get the last day of the month based on the input date
 */
function getLastDayOfMonth(date) {
    var lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1, 0, 0, 0, 0));
    // To get the last day of the month we will increment the month
    lastDay.setUTCMonth(lastDay.getUTCMonth() + 1);
    // Then subtract a day
    lastDay.setUTCDate(lastDay.getUTCDate() - 1);
    // Then set the time to be the last second of the day
    lastDay.setUTCHours(23, 59, 59, 999);
    return lastDay;
}
/**
 * Gets a string of the given date in the given locale, falling back to the browser's
 * current/default locale if needed.
 */
function toLocaleDateString(date, language, options) {
    if (!date) {
        return undefined;
    }
    try {
        return date.toLocaleDateString(language, options);
    }
    catch (e) {
        // in case 'lang' is invalid for browser, let browser use its own logic for determining language
        return date.toLocaleDateString([], options);
    }
}
/**
 * Gets a string of the given time in the given locale, falling back to the browser's
 * current/default locale if needed.
 */
function toLocaleTimeString(date, language, options) {
    if (!date) {
        return undefined;
    }
    try {
        return date.toLocaleTimeString(language, options);
    }
    catch (e) {
        // in case 'lang' is invalid for browser, let browser use its own logic for determining language
        return date.toLocaleTimeString([], options);
    }
}
/**
 * True if the date is in the range of last a few days specified.
 * You can optionally specify the date to use as the current date/time.
 */
function isLastAFewDays(pastTime, duration, now) {
    now = now || new Date();
    var start = new Date(now.getTime() - ONE_DAY * duration);
    return start.getTime() <= pastTime.getTime() && pastTime.getTime() <= now.getTime();
}
/**
 * toLocaleTimeString defaults to display 24hr time as times 1:00 - 24:59
 * Converts 24:-- times to 00:--
 * Ideally, we'd use hourCycle to specify 'h23', but DateTimeFormatOptions does not yet support it
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 */
function convert24Timeto00Format(time) {
    if (time.indexOf('24:') !== -1) {
        return time.replace('24:', '00:');
    }
    return time;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


/***/ }),

/***/ "Qbl6":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Retry.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Retry; });
/* harmony import */ var _Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signal */ "LSjO");

/**
 * Retry allows you to invoke a callback a configurable number of times before giving up.
 */
function Retry(config) {
    var adjustRetries = config.adjustRetries, async = config.async, beforeRetry = config.beforeRetry, callback = config.callback, _a = config.canRetry, canRetry = _a === void 0 ? function () { return true; } : _a, delay = config.delay, resetAttemptsOnRestart = config.resetAttemptsOnRestart, retries = config.retries, shouldRestart = config.shouldRestart;
    var attempts = 0;
    var promise;
    var signal = new _Signal__WEBPACK_IMPORTED_MODULE_0__["default"](function () {
        promise.cancel();
    });
    function onSuccess(value) {
        if (shouldRestart && shouldRestart()) {
            if (resetAttemptsOnRestart) {
                attempts = 0;
            }
            callCallback();
        }
        else {
            signal.complete(value);
        }
    }
    function onError(error) {
        if (adjustRetries) {
            retries = adjustRetries(error);
        }
        if (attempts < retries && canRetry(error)) {
            attempts++;
            if (beforeRetry) {
                beforeRetry();
            }
            if (typeof delay === 'number' && async) {
                async.setTimeout(callCallback, delay);
            }
            else {
                callCallback();
            }
        }
        else {
            signal.error(error);
        }
    }
    function callCallback() {
        promise = callback();
        promise.then(onSuccess, onError);
    }
    callCallback();
    return signal.getPromise();
}
//# sourceMappingURL=Retry.js.map

/***/ }),

/***/ "Rq9P":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/dotNet.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: getDateFromDotNetTicks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFromDotNetTicks", function() { return getDateFromDotNetTicks; });
// this is the difference between the .net ticks and the javascript Date ticks
var TICKS_CONVERSION_CONSTANT = 62135596800000;
/**
 * Given the .Net ticks of a date, convert it to a Date
 */
function getDateFromDotNetTicks(dotNetTicks) {
    var ticksInMilliseconds = dotNetTicks / 10000 - TICKS_CONVERSION_CONSTANT;
    return new Date(ticksInMilliseconds);
}
//# sourceMappingURL=dotNet.js.map

/***/ }),

/***/ "UKDt":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/rumone/RUMOneLogger.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["RumOneLogger"]; });

// Loading @ms/odsp-utilities/./lib/logging/rumone/RUMOneLogger.js



/***/ }),

/***/ "UaHH":
/*!************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-disposables@1.0.0/node_modules/@ms/utilities-disposables/lib/Disposable.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: isDisposable, hook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hook", function() { return hook; });
var DisposalChain = /** @class */ (function () {
    function DisposalChain(owner) {
        this._callbacks = [];
        this._owner = owner;
    }
    DisposalChain.prototype.addCallback = function (callback) {
        this._callbacks.push(callback);
    };
    DisposalChain.prototype.dispose = function () {
        // Handle dispose callbacks is the reverse order from when they were attached.
        var callback;
        while ((callback = this._callbacks.pop())) {
            callback.call(this._owner);
        }
    };
    return DisposalChain;
}());
/**
 * Determines whether not an object requires is disposable.
 *
 * @export
 * @template T
 * @param {(T | IDisposable)} object
 * @returns {object is IDisposable}
 */
function isDisposable(object) {
    return typeof object.dispose === 'function';
}
function hook(instance, onDispose) {
    var disposable = instance;
    var dispose = disposable.dispose;
    var disposalChain = (typeof dispose === 'function' && dispose.disposalChain) || createDisposalChain(disposable);
    disposalChain.addCallback(onDispose);
    return disposable;
}
function createDisposalChain(disposable) {
    var disposalChain = new DisposalChain(disposable);
    var dispose = disposable.dispose;
    var disposeHook = (function () {
        disposalChain.dispose();
        if (dispose) {
            // Restore the old dispose method and clean up modifications.
            disposable.dispose = dispose;
            disposable.dispose();
        }
    });
    disposable.dispose = disposeHook;
    disposeHook.disposalChain = disposalChain;
    return disposalChain;
}
//# sourceMappingURL=Disposable.js.map

/***/ }),

/***/ "V87q":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/aria/AriaLoggerCore.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["AriaLoggerCore"]; });

// Loading @ms/odsp-utilities/./lib/aria/AriaLoggerCore.js



/***/ }),

/***/ "VW2E":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-disposables@1.0.0/node_modules/@ms/utilities-disposables/lib/Scope.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _Disposable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disposable */ "UaHH");

/**
 * Lifetime manager for scoping components.
 *
 * @export
 * @class Scope
 * @implements {IDisposable}
 *
 * @example
 *  const scope = new Scope();
 *
 *  let instance = new (scope.attached(MyComponent))();
 *
 *  scope.dispose();
 */
var Scope = /** @class */ (function () {
    /**
     * Creates an instance of Scope.
     */
    function Scope() {
        this._disposables = {};
        this._lastDisposableId = 0;
        this.isDisposed = false;
    }
    Scope.prototype.attach = function (instance) {
        var _this = this;
        var id = "" + ++this._lastDisposableId;
        var disposable = Object(_Disposable__WEBPACK_IMPORTED_MODULE_0__["hook"])(instance, function () {
            delete _this._disposables[id];
        });
        this._disposables[id] = disposable;
        return disposable;
    };
    /**
     * Disposes this scope and any attached objects.
     */
    Scope.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
        }
        var disposables = this._disposables;
        for (var _i = 0, _a = Object.keys(disposables); _i < _a.length; _i++) {
            var id = _a[_i];
            var disposable = disposables[id];
            if (disposable && Object(_Disposable__WEBPACK_IMPORTED_MODULE_0__["isDisposable"])(disposable)) {
                disposable.dispose();
            }
            delete disposables[id];
        }
    };
    return Scope;
}());

//# sourceMappingURL=Scope.js.map

/***/ }),

/***/ "WgxZ":
/*!*********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@1.0.0/node_modules/@ms/sp-resource-path/lib/index.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: SPResourcePath, SPResourcePathFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPResourcePath */ "nF3k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return _SPResourcePath__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "WquY":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/EventBase.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/EventBase.js


/***/ }),

/***/ "XnbY":
/*!***************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/promise/CancelablePromise.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: SignalPromise, CancelablePromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalPromise", function() { return SignalPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelablePromise", function() { return CancelablePromise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Events */ "fDs1");
// This file was originally ported from WinJS.


// tslint:disable-next-line: no-any
function doneHandler(value) {
    /* tslint:disable-next-line:ban-native-functions */
    window.setTimeout(function () {
        _events_Events__WEBPACK_IMPORTED_MODULE_1__["raise"](CancelablePromiseImplementation, errorET, { error: value });
    }, 0);
}
var errorET = 'error';
var canceledName = 'Canceled';
//
// Global error counter, for each error which enters the system we increment this once and then
// the error number travels with the error as it traverses the tree of potential handlers.
//
// When someone has registered to be told about error [using EventGroup.on(Promise, 'error')] promises
// which are in error will get tagged with a ._errorId field. This tagged field is the
// contract by which nested promises with errors will be identified as chaining for the
// purposes of the callonerror semantics. If a nested promise in error is encountered without
// a ._errorId it will be assumed to be foreign and treated as an interop boundary and
// a new error id will be minted.
//
// tslint:disable-next-line: variable-name
var error_number = 1;
// tslint:disable-next-line: variable-name
var state_created; // -> working
// tslint:disable-next-line: variable-name
var state_working; // -> error | error_notify | success | success_notify | canceled | waiting
// tslint:disable-next-line: variable-name
var state_waiting; // -> error | error_notify | success | success_notify | waiting_canceled
// tslint:disable-next-line: variable-name
var state_waiting_canceled; // -> error | error_notify | success | success_notify | canceling
// tslint:disable-next-line: variable-name
var state_canceled; // -> error | error_notify | success | success_notify | canceling
// tslint:disable-next-line: variable-name
var state_canceling; // -> error_notify
// tslint:disable-next-line: variable-name
var state_success_notify; // -> success
// tslint:disable-next-line: variable-name
var state_success; // -> .
// tslint:disable-next-line: variable-name
var state_error_notify; // -> error
// tslint:disable-next-line: variable-name
var state_error; // -> .
// Noop function, used in the various states to indicate that they don't support a given
// message. Named with the somewhat cute name '_' because it reads really well in the states.
// tslint:disable-next-line: no-any
function noop() {
    /* No-op */
}
// Initial state
//
state_created = {
    name: 'created',
    enter: function (promise) {
        promise._setState(state_working);
    },
    cancel: noop,
    done: noop,
    then: noop,
    _completed: noop,
    _error: noop,
    _notify: noop,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Ready state, waiting for a message (completed/error), able to be canceled
//
state_working = {
    name: 'working',
    enter: noop,
    cancel: function (promise) {
        promise._setState(state_canceled);
    },
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Waiting state, if a promise is completed with a value which is itself a promise
// (has a then() method) it signs up to be informed when that child promise is
// fulfilled at which point it will be fulfilled with that value.
//
state_waiting = {
    name: 'waiting',
    enter: function (promise) {
        var waitedUpon = promise._value;
        // We can special case our own intermediate promises which are not in a
        //  terminal state by just pushing this promise as a listener without
        //  having to create new indirection functions
        if (waitedUpon instanceof ThenPromise &&
            waitedUpon._state !== state_error &&
            waitedUpon._state !== state_success) {
            pushListener(waitedUpon, { promise: promise });
        }
        else {
            // tslint:disable-next-line: no-shadowed-variable
            var error_1 = function (value) {
                if (waitedUpon._errorId) {
                    promise._chainedError(value, waitedUpon);
                }
                else {
                    // Because this is an interop boundary we want to indicate that this
                    //  error has been handled by the promise infrastructure before we
                    //  begin a new handling chain.
                    //
                    callonerror(promise, value, detailsForHandledError, waitedUpon, error_1);
                    promise._error(value);
                }
            };
            error_1.handlesOnError = true;
            waitedUpon.then(promise._completed.bind(promise), error_1);
        }
    },
    cancel: function (promise) {
        promise._setState(state_waiting_canceled);
    },
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Waiting canceled state, when a promise has been in a waiting state and receives a
// request to cancel its pending work it will forward that request to the child promise
// and then waits to be informed of the result. This promise moves itself into the
// canceling state but understands that the child promise may instead push it to a
// different state.
//
state_waiting_canceled = {
    name: 'waiting_canceled',
    enter: function (promise) {
        // Initiate a transition to canceling. Triggering a cancel on the promise
        // that we are waiting upon may result in a different state transition
        // before the state machine pump runs again.
        promise._setState(state_canceling);
        var waitedUpon = promise._value;
        if (CancelablePromiseImplementation.is(waitedUpon)) {
            waitedUpon.cancel();
        }
    },
    cancel: noop,
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Canceled state, moves to the canceling state and then tells the promise to do
// whatever it might need to do on cancelation.
//
state_canceled = {
    name: 'canceled',
    enter: function (promise) {
        // Initiate a transition to canceling. The _cancelAction may change the state
        // before the state machine pump runs again.
        promise._setState(state_canceling);
        promise._cancelAction();
    },
    cancel: noop,
    done: done,
    then: then,
    _completed: completed,
    _error: error,
    _notify: noop,
    _setCompleteValue: setCompleteValue,
    _setErrorValue: setErrorValue
};
// Canceling state, commits to the promise moving to an error state with an error
// object whose 'name' and 'message' properties contain the string "Canceled"
//
state_canceling = {
    name: 'canceling',
    // tslint:disable-next-line: no-any
    enter: function (promise) {
        // tslint:disable-next-line: no-shadowed-variable
        var error = new Error(canceledName);
        error.name = error.message;
        error._handled = true;
        promise._value = error;
        promise._setState(state_error_notify);
    },
    cancel: noop,
    done: noop,
    then: noop,
    _completed: noop,
    _error: noop,
    _notify: noop,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Success notify state, moves a promise to the success state and notifies all children
//
state_success_notify = {
    name: 'complete_notify',
    enter: function (promise) {
        if (promise._listeners) {
            var queue = [promise];
            var p = void 0;
            while (queue.length) {
                p = queue.shift();
                if (p) {
                    p._state._notify(p, queue);
                }
            }
        }
        promise._setState(state_success);
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return CompletePromise.prototype.done.call(promise, onComplete); },
    then: function (promise, onComplete, onError) {
        return CompletePromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifySuccess,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Success state, moves a promise to the success state and does NOT notify any children.
// Some upstream promise is owning the notification pass.
//
state_success = {
    name: 'success',
    enter: function (promise) {
        promise._cleanupAction();
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return CompletePromise.prototype.done.call(promise, onComplete); },
    then: function (promise, onComplete, onError) {
        return CompletePromise.prototype.then.call(promise, onComplete);
    },
    _completed: noop,
    _error: noop,
    _notify: notifySuccess,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Error notify state, moves a promise to the error state and notifies all children
//
state_error_notify = {
    name: 'error_notify',
    enter: function (promise) {
        if (promise._listeners) {
            var queue = [promise];
            var p = void 0;
            while (queue.length) {
                p = queue.shift();
                if (p) {
                    p._state._notify(p, queue);
                }
            }
        }
        promise._setState(state_error);
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return ErrorPromise.prototype.done.call(promise, onComplete, onError); },
    then: function (promise, onComplete, onError) {
        return ErrorPromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifyError,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
// Error state, moves a promise to the error state and does NOT notify any children.
// Some upstream promise is owning the notification pass.
//
state_error = {
    name: 'error',
    enter: function (promise) {
        promise._cleanupAction();
    },
    cancel: noop,
    done: function (promise, onComplete, onError) { return ErrorPromise.prototype.done.call(promise, onComplete, onError); },
    then: function (promise, onComplete, onError) {
        return ErrorPromise.prototype.then.call(promise, onComplete, onError);
    },
    _completed: noop,
    _error: noop,
    _notify: notifyError,
    _setCompleteValue: noop,
    _setErrorValue: noop
};
//
// The statemachine implementation follows a very particular pattern, the states are specified
// as static stateless bags of functions which are then indirected through the state machine
// instance (a Promise). As such all of the functions on each state have the promise instance
// passed to them explicitly as a parameter and the Promise instance members do a little
// dance where they indirect through the state and insert themselves in the argument list.
//
// We could instead call directly through the promise states however then every caller
// would have to remember to do things like pumping the state machine to catch state transitions.
//
//
// Implementations of shared state machine code.
//
function completed(promise, value) {
    promise._value = value;
    promise._setState(CancelablePromiseImplementation.isPromise(value) ? state_waiting : state_success_notify);
}
function createErrorDetails(
// tslint:disable-next-line: no-any
exception, 
// tslint:disable-next-line: no-shadowed-variable no-any
error, 
// tslint:disable-next-line: no-any
promise, id, parent, 
// tslint:disable-next-line: no-any
handler) {
    return {
        exception: exception,
        error: error,
        promise: promise,
        handler: handler,
        id: id,
        parent: parent
    };
}
function detailsForHandledError(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
errorValue, context, 
// tslint:disable-next-line: no-any
handler) {
    var _a, _b;
    var exception = (_a = context) === null || _a === void 0 ? void 0 : _a._isException;
    var errorId = (_b = context) === null || _b === void 0 ? void 0 : _b._errorId;
    return createErrorDetails(exception ? errorValue : null, exception ? null : errorValue, promise, errorId, context, handler);
}
function detailsForChainedError(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
errorValue, context) {
    var _a, _b;
    var exception = (_a = context) === null || _a === void 0 ? void 0 : _a._isException;
    var errorId = (_b = context) === null || _b === void 0 ? void 0 : _b._errorId;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId, exception);
    }
    return createErrorDetails(exception ? errorValue : null, exception ? null : errorValue, promise, errorId, context);
}
// tslint:disable-next-line: no-any
function detailsForError(promise, errorValue) {
    var errorId = ++error_number;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId);
    }
    return createErrorDetails(null, errorValue, promise, errorId);
}
function detailsForException(
// tslint:disable-next-line: no-any
promise, 
// tslint:disable-next-line: no-any
exceptionValue) {
    var errorId = ++error_number;
    if (promise instanceof CancelablePromiseImplementation) {
        setErrorInfo(promise, errorId, true);
    }
    return createErrorDetails(exceptionValue, null, promise, errorId);
}
function done(promise, onComplete, onError) {
    pushListener(promise, { c: onComplete, e: onError });
}
function error(
// tslint:disable-next-line: no-any
promise, value, onerrorDetails, context) {
    promise._value = value;
    callonerror(promise, value, onerrorDetails, context);
    promise._setState(state_error_notify);
}
function notifySuccess(promise, queue) {
    var value = promise._value;
    var listeners = promise._listeners;
    if (!listeners) {
        return;
    }
    promise._listeners = null;
    var i;
    var len;
    for (i = 0, len = listeners.length; i < len; i++) {
        var listener = listeners[i];
        var onComplete = listener.c;
        var target = listener.promise;
        if (target) {
            try {
                target._setCompleteValue(onComplete ? onComplete(value) : value);
            }
            catch (ex) {
                target._setExceptionValue(ex);
            }
            if (target._state !== state_waiting && target._listeners) {
                queue.push(target);
            }
        }
        else {
            CompletePromise.prototype.done.call(promise, onComplete);
        }
    }
}
function notifyError(promise, 
// tslint:disable-next-line: no-any
queue) {
    var value = promise._value;
    var listeners = promise._listeners;
    if (!listeners) {
        return;
    }
    promise._listeners = null;
    var i;
    var len;
    for (i = 0, len = listeners.length; i < len; i++) {
        var listener = listeners[i];
        var onError = listener.e;
        var target = listener.promise;
        if (target) {
            try {
                if (onError) {
                    if (!onError.handlesOnError) {
                        callonerror(target, value, detailsForHandledError, promise, onError);
                    }
                    target._setCompleteValue(onError(value));
                }
                else {
                    target._setChainedErrorValue(value, promise);
                }
            }
            catch (ex) {
                target._setExceptionValue(ex);
            }
            if (target._state !== state_waiting && target._listeners) {
                queue.push(target);
            }
        }
        else {
            ErrorPromise.prototype.done.call(promise, undefined, onError);
        }
    }
}
function callonerror(promise, value, onerrorDetailsGenerator, context, 
// tslint:disable-next-line: no-any
handler) {
    if (value instanceof Error && value.message === canceledName) {
        return;
    }
    _events_Events__WEBPACK_IMPORTED_MODULE_1__["raise"](CancelablePromiseImplementation, errorET, onerrorDetailsGenerator(promise, value, context, handler));
}
function pushListener(promise, listener) {
    var listeners = promise._listeners;
    if (listeners) {
        listeners.push(listener);
    }
    else {
        listeners = [listener];
    }
    promise._listeners = listeners;
}
// The difference beween setCompleteValue()/setErrorValue() and complete()/error() is that setXXXValue() moves
// a promise directly to the success/error state without starting another notification pass (because one
// is already ongoing).
function setErrorInfo(promise, errorId, isException) {
    promise._isException = isException || false;
    promise._errorId = errorId;
}
function setErrorValue(promise, 
// tslint:disable-next-line: no-any
value, onerrorDetails, context) {
    promise._value = value;
    callonerror(promise, value, onerrorDetails, context);
    promise._setState(state_error);
}
function setCompleteValue(promise, value) {
    var targetState;
    if (CancelablePromiseImplementation.isPromise(value)) {
        targetState = state_waiting;
    }
    else {
        targetState = state_success;
    }
    promise._value = value;
    promise._setState(targetState);
}
function then(promise, onComplete, onError) {
    var result = new ThenPromise(promise);
    pushListener(promise, { promise: result, c: onComplete, e: onError });
    return result;
}
//
// Slim promise implementations for already completed promises, these are created
// under the hood on synchronous completion paths as well as by Promise.wrap
// and Promise.wrapError.
//
var ErrorPromise = /** @class */ (function () {
    function ErrorPromise(value, errorFunc) {
        if (errorFunc === void 0) { errorFunc = detailsForError; }
        this._value = value;
        callonerror(this, value, errorFunc);
    }
    ErrorPromise.prototype.cancel = function () {
        /* No-op */
    };
    // tslint:disable-next-line: no-any
    ErrorPromise.prototype.done = function (onComplete, onError) {
        var value = this._value;
        if (onError) {
            try {
                if (!onError.handlesOnError) {
                    callonerror(this, value, detailsForHandledError, this, onError);
                }
                var result = onError(value);
                if (CancelablePromiseImplementation.is(result)) {
                    // If a promise is returned we need to wait on it.
                    result.done();
                }
                return;
            }
            catch (ex) {
                value = ex;
            }
        }
        if (value instanceof Error && value.message === canceledName) {
            // suppress cancel
            return;
        }
        // force the exception to be thrown asyncronously to avoid any try/catch blocks
        //
        doneHandler(value);
    };
    ErrorPromise.prototype.then = function (onComplete, onError) {
        // If the promise is already in a error state and no error handler is provided
        // we optimize by simply returning the promise instead of creating a new one.
        //
        if (!onError) {
            return this;
        }
        var result;
        var value = this._value;
        try {
            if (!onError.handlesOnError) {
                callonerror(this, value, detailsForHandledError, this, onError);
            }
            result = new CompletePromise(onError(value));
        }
        catch (ex) {
            // If the value throw from the error handler is the same as the value
            // provided to the error handler then there is no need for a new promise.
            //
            if (ex === value) {
                result = this;
            }
            else {
                result = new ExceptionPromise(ex);
            }
        }
        return result;
    };
    ErrorPromise.prototype.catch = function (onError) {
        return this.then(undefined, onError);
    };
    return ErrorPromise;
}());
var ExceptionPromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ExceptionPromise, _super);
    // tslint:disable-next-line: no-any
    function ExceptionPromise(value) {
        return _super.call(this, value, detailsForException) || this;
    }
    return ExceptionPromise;
}(ErrorPromise));
var CompletePromise = /** @class */ (function () {
    function CompletePromise(value) {
        if (CancelablePromiseImplementation.isPromise(value)) {
            var result = new ThenPromise(null);
            result._setCompleteValue(value);
            return result;
        }
        this._value = value;
    }
    CompletePromise.prototype.cancel = function () {
        /* No-op */
    };
    // tslint:disable-next-line: no-any
    CompletePromise.prototype.done = function (onComplete, onError) {
        if (!onComplete) {
            return;
        }
        try {
            var result = onComplete(this._value);
            if (CancelablePromiseImplementation.is(result)) {
                result.done();
            }
        }
        catch (ex) {
            // force the exception to be thrown asynchronously to avoid any try/catch blocks
            doneHandler(ex);
        }
    };
    CompletePromise.prototype.then = function (onComplete, onError) {
        var resultPromise;
        try {
            // If the value returned from the completion handler is the same as the value
            // provided to the completion handler then there is no need for a new promise.
            //
            var newValue = onComplete ? onComplete(this._value) : this._value;
            var promise = this;
            resultPromise = this._isSameValue(newValue, promise) ? promise : new CompletePromise(newValue);
        }
        catch (ex) {
            resultPromise = new ExceptionPromise(ex);
        }
        return resultPromise;
    };
    CompletePromise.prototype.catch = function (onError) {
        return this.then(undefined);
    };
    // tslint:disable-next-line:function-name
    CompletePromise.prototype._isSameValue = function (value, promise) {
        return value === this._value;
    };
    return CompletePromise;
}());
function timeout(timeoutMS) {
    var id;
    return new CancelablePromiseImplementation(function (c) {
        /* tslint:disable-next-line:ban-native-functions */
        id = window.setTimeout(c, timeoutMS);
    }, function () {
        if (id) {
            /* tslint:disable-next-line:ban-native-functions */
            window.clearTimeout(id);
        }
    });
}
// tslint:disable-next-line: no-shadowed-variable
function timeoutWithPromise(
// tslint:disable-next-line: no-shadowed-variable
timeout, promise) {
    var cancelPromise = function () {
        promise.cancel();
    };
    var cancelTimeout = function () {
        timeout.cancel();
    };
    timeout.then(cancelPromise);
    promise.then(cancelTimeout, cancelTimeout);
    return promise;
}
function getCancelAll(values) {
    var valuesIndexable = values;
    return function () {
        for (var _i = 0, _a = Object.keys(valuesIndexable); _i < _a.length; _i++) {
            var key = _a[_i];
            var promise = CancelablePromiseImplementation.as(valuesIndexable[key]);
            promise.cancel();
        }
    };
}
// tslint:disable-next-line: no-any
var staticCanceledPromise;
var CancelablePromiseImplementation = /** @class */ (function () {
    // tslint:disable-next-line: no-any
    function CancelablePromiseImplementation(init, oncancel) {
        this._init(init, oncancel);
    }
    Object.defineProperty(CancelablePromiseImplementation, "cancel", {
        // tslint:disable-next-line: no-any
        get: function () {
            return staticCanceledPromise || (staticCanceledPromise = new ErrorPromise(new Error(canceledName)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise that is fulfilled when one of the input promises
     * has been fulfilled.
     */
    CancelablePromiseImplementation.any = function (values) {
        return new CancelablePromiseImplementation(function (complete, 
        // tslint:disable-next-line: no-shadowed-variable no-any
        error) {
            var keys = Object.keys(values);
            var pending = keys.length;
            if (pending === 0) {
                complete();
            }
            var valuesIndexable = values;
            var _loop_1 = function (key) {
                var valueAsCancelable = CancelablePromiseImplementation.as(valuesIndexable[key]);
                valueAsCancelable.then(function () {
                    complete({ key: key, value: valueAsCancelable });
                }, 
                // tslint:disable-next-line: no-any
                function (e) {
                    if (e instanceof Error && e.name === canceledName) {
                        if (--pending === 0) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        return;
                    }
                    error({ key: key, value: valueAsCancelable });
                });
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.race = function (values) {
        // tslint:disable-next-line: no-shadowed-variable no-any
        return new CancelablePromiseImplementation(function (complete, error) {
            var keys = Object.keys(values);
            var pending = keys.length;
            if (pending === 0) {
                complete();
            }
            var valuesIndexable = values;
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                // tslint:disable-next-line: no-any
                CancelablePromiseImplementation.as(valuesIndexable[key]).then(complete, function (e) {
                    if (e instanceof Error && e.name === canceledName) {
                        if (--pending === 0) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        return;
                    }
                    error(e);
                });
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.as = function (value) {
        return CancelablePromiseImplementation.is(value) ? value : new CompletePromise(value);
    };
    /**
     * Determines whether a value fulfills the promise contract.
     */
    CancelablePromiseImplementation.is = function (value) {
        return (CancelablePromiseImplementation.isPromise(value) &&
            typeof value.cancel === 'function');
    };
    CancelablePromiseImplementation.isPromise = function (value) {
        return !!value && typeof value === 'object' && typeof value.then === 'function';
    };
    /**
     * Determines whether an error value represents a promise cancellation.
     */
    CancelablePromiseImplementation.isCanceled = function (e) {
        return e instanceof Error && e.name === canceledName;
    };
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.all = function (values) {
        // tslint:disable-next-line: no-any no-shadowed-variable
        return new CancelablePromiseImplementation(function (complete, error) {
            var keys = Object.keys(values);
            // tslint:disable-next-line: no-any
            var errors = Array.isArray(values) ? [] : {};
            // tslint:disable-next-line: no-any
            var results = Array.isArray(values) ? [] : {};
            var pending = keys.length;
            var argDone = function () {
                if (--pending === 0) {
                    var errorKeys = Object.keys(errors);
                    var errorCount = errorKeys.length;
                    if (errorCount === 0) {
                        complete(results);
                    }
                    else {
                        if (errorKeys.every(function (key) { return CancelablePromiseImplementation.isCanceled(errors[key]); })) {
                            complete(CancelablePromiseImplementation.cancel);
                        }
                        else {
                            error(errors);
                        }
                    }
                }
            };
            var _loop_2 = function (key) {
                var value = values[key];
                if (value === undefined) {
                    pending--;
                }
                else {
                    CancelablePromiseImplementation.then(value, 
                    // tslint:disable-next-line: no-any
                    function (result) {
                        results[key] = result;
                        argDone();
                    }, 
                    // tslint:disable-next-line: no-any no-shadowed-variable
                    function (error) {
                        errors[key] = error;
                        argDone();
                    });
                }
            };
            for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
                var key = keys_3[_i];
                _loop_2(key);
            }
            if (pending === 0) {
                complete(results);
            }
        }, getCancelAll(values));
    };
    CancelablePromiseImplementation.then = function (value, onComplete, onError) {
        return CancelablePromiseImplementation.as(value).then(onComplete, onError);
    };
    CancelablePromiseImplementation.thenEach = function (values, onComplete, onError) {
        // tslint:disable-next-line: no-any
        var result = Array.isArray(values) ? [] : {};
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var key = _a[_i];
            result[key] = CancelablePromiseImplementation.then(values[key], onComplete, onError);
        }
        return CancelablePromiseImplementation.all(result);
    };
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.serial = function (tasks) {
        // tslint:disable-next-line: no-any
        return tasks.reduce(function (previous, task) {
            return previous.then(task);
        }, CancelablePromiseImplementation.wrap());
    };
    CancelablePromiseImplementation.timeout = function (time, promise) {
        var to = timeout(time);
        return promise ? timeoutWithPromise(to, promise) : to;
    };
    /**
     * Wraps a non-promise value in a promise. You can use this function if you need
     * to pass a value to a function that requires a promise.
     */
    CancelablePromiseImplementation.wrap = function (value) {
        return new CompletePromise(value);
    };
    CancelablePromiseImplementation.resolve = function (value) {
        return CancelablePromiseImplementation.wrap(value);
    };
    /**
     * Wraps a non-promise error value in a promise. You can use this function if you need
     * to pass an error to a function that requires a promise.
     */
    // tslint:disable-next-line: no-shadowed-variable no-any
    CancelablePromiseImplementation.wrapError = function (error) {
        return new ErrorPromise(error);
    };
    // tslint:disable-next-line: no-shadowed-variable no-any
    CancelablePromiseImplementation.reject = function (error) {
        return CancelablePromiseImplementation.wrapError(error);
    };
    /**
     * Attempts to cancel the fulfillment of a promised value. If the promise hasn't
     * already been fulfilled and cancellation is supported, the promise enters
     * the error state with a value of Error("Canceled").
     */
    CancelablePromiseImplementation.prototype.cancel = function () {
        this._state.cancel(this);
        this._run();
    };
    /**
     * Allows you to specify the work to be done on the fulfillment of the promised value,
     * the error handling to be performed if the promise fails to fulfill
     * a value.
     *
     * After the handlers have finished executing, this function throws any error that would have been returned
     * from then() as a promise in the error state.
     *
     * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The fulfilled value is passed as the single argument. If the value is null, the fulfilled value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while executing the function, the promise returned by then moves into the error state.
     * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. If it is null, the error is forwarded. The value returned from the function is the fulfilled value of the promise returned by then.
     */
    // tslint:disable-next-line: no-any
    CancelablePromiseImplementation.prototype.done = function (onComplete, onError) {
        this._state.done(this, onComplete, onError);
    };
    CancelablePromiseImplementation.prototype.then = function (onComplete, onError) {
        return this._state.then(this, onComplete, onError);
    };
    CancelablePromiseImplementation.prototype.catch = function (onError) {
        return this.then(undefined, onError);
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._init = function (init, oncancel) {
        this._oncancel = oncancel;
        this._setState(state_created);
        this._run();
        try {
            if (init) {
                init(this._completed.bind(this), this._error.bind(this));
            }
            else {
                this._setExceptionValue(new Error('No init value for Promise'));
            }
        }
        catch (ex) {
            this._setExceptionValue(ex);
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._cancelAction = function () {
        if (this._oncancel) {
            try {
                this._oncancel();
            }
            catch (ex) {
                /* ignore */
            }
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._cleanupAction = function () {
        this._oncancel = undefined;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._chainedError = function (value, context) {
        var result = this._state._error(this, value, detailsForChainedError, context);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._completed = function (value) {
        var result = this._state._completed(this, value);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._error = function (value) {
        var result = this._state._error(this, value, detailsForError);
        this._run();
        return result;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setState = function (state) {
        this._nextState = state;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setCompleteValue = function (value) {
        this._state._setCompleteValue(this, value);
        this._run();
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setChainedErrorValue = function (value, context) {
        var result = this._state._setErrorValue(this, value, detailsForChainedError, context);
        this._run();
        return result;
    };
    // tslint:disable-next-line: no-any function-name
    CancelablePromiseImplementation.prototype._setExceptionValue = function (value) {
        var result = this._state._setErrorValue(this, value, detailsForException);
        this._run();
        return result;
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._run = function () {
        while (this._nextState) {
            this._state = this._nextState;
            this._nextState = undefined;
            this._state.enter(this);
        }
    };
    // tslint:disable-next-line:function-name
    CancelablePromiseImplementation.prototype._isSameValue = function (value, promise) {
        return value === this._value;
    };
    return CancelablePromiseImplementation;
}());
_events_Events__WEBPACK_IMPORTED_MODULE_1__["declare"](CancelablePromiseImplementation, errorET);
//
// Internal implementation detail promise, ThenPromise is created when a promise needs
// to be returned from a then() method.
//
var ThenPromise = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ThenPromise, _super);
    // tslint:disable-next-line: no-any
    function ThenPromise(creator) {
        var _this = _super.call(this) || this;
        _this._creator = creator;
        _this._initThen();
        return _this;
    }
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._init = function () {
        // Override to do nothing.
    };
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._cancelAction = function () {
        if (this._creator) {
            this._creator.cancel();
        }
    };
    // tslint:disable-next-line:function-name
    ThenPromise.prototype._cleanupAction = function () {
        this._creator = null;
    };
    ThenPromise.prototype._initThen = function () {
        this._setState(state_created);
        this._run();
    };
    return ThenPromise;
}(CancelablePromiseImplementation));
var SignalPromiseImplementation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SignalPromiseImplementation, _super);
    function SignalPromiseImplementation(cancel) {
        var _this = _super.call(this) || this;
        _this._oncancel = cancel;
        _this._initSignal();
        return _this;
    }
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._init = function () {
        // Override to do nothing.
    };
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._cancelAction = function () {
        if (this._oncancel) {
            this._oncancel();
        }
    };
    // tslint:disable-next-line:function-name
    SignalPromiseImplementation.prototype._cleanupAction = function () {
        this._oncancel = undefined;
    };
    SignalPromiseImplementation.prototype._initSignal = function () {
        this._setState(state_created);
        this._run();
    };
    return SignalPromiseImplementation;
}(CancelablePromiseImplementation));
/**
 * Represents a singal promise type and constructor.
 * This type is for legacy use only, and should not be used outside this source package.
 */
var SignalPromise = SignalPromiseImplementation;
/**
 * Represents a cancelable promise type and constructor.
 * This type is intended to be assignable to the ES6 `Promise` type for compatibility,
 * so that `CancelablePromise` may be a used as a polyfill for `Promise`.
 */
var CancelablePromise = CancelablePromiseImplementation;
/* harmony default export */ __webpack_exports__["default"] = (CancelablePromise);
//# sourceMappingURL=CancelablePromise.js.map

/***/ }),

/***/ "ZRaF":
/*!**********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/relativePast.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: getRelativeDateTimeStringPast, getRelativeDateTimeStringPastWithHourMinute, getRelativeDateTimeResx, getRelativeDateTimeIntervalString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPast", function() { return getRelativeDateTimeStringPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPastWithHourMinute", function() { return getRelativeDateTimeStringPastWithHourMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeResx", function() { return getRelativeDateTimeResx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeIntervalString", function() { return getRelativeDateTimeIntervalString; });
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "PgVY");
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTime.resx */ "lnCR");
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Get a string like "X minutes ago" that reflects the time elapsed since the input time.
 * Only works for past times, future times just return a browser-determined localized time string.
 */
function getRelativeDateTimeStringPast(pastTime, language, startWithLowerCase) {
    if (startWithLowerCase === void 0) { startWithLowerCase = false; }
    var timespan = Date.now() - pastTime.getTime(); // time elapsed in ms
    if (timespan < -5 * _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_MINUTE"]) {
        // in the future, with a 5m leeway
        return toLocaleDateString(pastTime, language);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_MINUTE"]) {
        // 1m ago to 5m in the future
        // "Less than a minute ago"
        return getRelativeDateTimeResx('LessThanAMinute', startWithLowerCase);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["TWO_MINUTES"]) {
        // "About a minute ago"
        return getRelativeDateTimeResx('AboutAMinute', startWithLowerCase);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_HOUR"]) {
        // "{0} minutes ago"
        var minutes = Math.floor(timespan / _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_MINUTE"]);
        return getRelativeDateTimeIntervalString(minutes, 'XMinutes');
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["TWO_HOURS"]) {
        // "About an hour ago"
        return getRelativeDateTimeResx('AboutAnHour', startWithLowerCase);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_DAY"]) {
        // "{0} hours ago"
        var hours = Math.floor(timespan / _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_HOUR"]);
        return getRelativeDateTimeIntervalString(hours, 'XHours');
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["TWO_DAYS"]) {
        // "Yesterday at {0}"
        var locTime = pastTime.toLocaleTimeString(language);
        return getRelativeDateTimeResx('YesterdayAndTime', startWithLowerCase).replace('{0}', locTime);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_MONTH"]) {
        // "{0} days ago" (in the past month-ish)
        var days = Math.floor(timespan / _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_DAY"]);
        return getRelativeDateTimeIntervalString(days, 'XDays');
    }
    // Any other time, just return the regular full original time
    return toLocaleDateString(pastTime, language); // browser-determined localized date (no time)
}
/**
 * This is a modified implementation of `DateTime.GetRelativeDateTimeStringPast(...)`.
 * The differences here are as follows:
 *   1. The time string for yesterday does not include the seconds
 *   2. Instead of showing 'X days ago' for dates older than a month, default to showing the full date
 *   3. The full date will also include the time (also without seconds)
 */
function getRelativeDateTimeStringPastWithHourMinute(pastTime, language) {
    var timespan = Date.now() - pastTime.getTime(); // time elapsed in ms
    var date = pastTime.toLocaleDateString(language); // browser-determined localized date
    var time = pastTime.toLocaleTimeString(language, { hour: 'numeric', minute: '2-digit' }); // time without seconds
    if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["ONE_DAY"]) {
        return getRelativeDateTimeStringPast(pastTime, language);
    }
    else if (timespan < _helpers__WEBPACK_IMPORTED_MODULE_1__["TWO_DAYS"]) {
        // "Yesterday at {0}" without seconds
        return Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["format"])(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.RelativeDateTime_YesterdayAndTime, time);
    }
    // Any other time, just return the regular full original date with time, without seconds
    return Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["format"])(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.DateTime_DateAndTime, date, time);
}
/**
 * Internal helper function to reduce verbosity of string names.
 */
function getRelativeDateTimeResx(name, startWithLowerCase, isFuture, isInterval) {
    // Example full string names:
    // RelativeDateTime_AboutAnHour
    // RelativeDateTime_AboutAnHour_StartWithLowerCase
    // RelativeDateTime_AboutAnHourFuture
    // RelativeDateTime_AboutAnHourFuture_StartWithLowerCase
    // tslint:disable-next-line:no-any
    return _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a[[
        'RelativeDateTime_',
        name,
        isFuture ? 'Future' : '',
        isInterval ? 'Intervals' : '',
        startWithLowerCase ? '_StartWithLowerCase' : ''
    ].join('')];
}
/**
 * Internal helper function to get a localized count value for an interval.
 */
function getRelativeDateTimeIntervalString(value, intervalType, startWithLowerCase, isFuture) {
    // Example full string names:
    // RelativeDateTime_XMinutes
    // RelativeDateTime_XMinutesFuture
    // RelativeDateTime_XMinutesFuture_StartWithLowerCase
    // (note non-future variant has no lowercase variant...so English-centric)
    var mainResx = getRelativeDateTimeResx(intervalType, isFuture ? startWithLowerCase : false, isFuture);
    // Example full string names:
    // RelativeDateTime_XMinutesIntervals
    // RelativeDateTime_XMinutesFutureIntervals
    var intervalResx = getRelativeDateTimeResx(intervalType, false /*lowercase*/, isFuture, true /*intervals*/);
    return (Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_0__["getLocalizedCountValue"])(mainResx, intervalResx, value) || '').replace('{0}', value + '');
}
var dateTimeFormat = {};
/**
 * Helper function formatting the given time with the given language.
 * In order to significantly speed up performance, a memoized instance of `Intl.DateTimeFormat`
 * (if available in the browser) is used for formatting.
 */
function toLocaleDateString(time, language) {
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
        if (!dateTimeFormat[language]) {
            dateTimeFormat[language] = new Intl.DateTimeFormat(language);
        }
        return dateTimeFormat[language].format(time);
    }
    else {
        return time.toLocaleDateString(language);
    }
}
//# sourceMappingURL=relativePast.js.map

/***/ }),

/***/ "ZjtH":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/scope/Scope.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_disposables_lib_Scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-disposables/lib/Scope */ "VW2E");


/**
 * Lifetime manager for scoping components.
 *
 * @export
 * @class Scope
 * @implements {IDisposable}
 *
 * @example
 *  const scope = new Scope();
 *
 *  let instance = new (scope.attached(MyComponent))();
 *
 *  scope.dispose();
 */
var Scope = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Scope, _super);
    function Scope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Produces a constructor for instances of a type which will be bound to the lifetime
     * of this scope.
     *
     * @template T the type of object to be created.
     * @param {T} the original constructor for the type.
     * @returns {T} a new constructor to invoke to create the object.
     */
    Scope.prototype.attached = function (type) {
        var scope = this;
        var Attached = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return scope.attach(type.apply(this, args) || this);
        };
        if (true) {
            // This pattern results in the correct type being displayed in the debugger
            var wrappedConstructor_1 = Attached;
            Attached = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return wrappedConstructor_1.apply(Object.create(type.prototype), args);
            };
        }
        Attached.prototype = type.prototype;
        return Attached;
    };
    return Scope;
}(_ms_utilities_disposables_lib_Scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]));
/* harmony default export */ __webpack_exports__["default"] = (Scope);
//# sourceMappingURL=Scope.js.map

/***/ }),

/***/ "ZqbN":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/dateTime/DateTime.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: createDateStringFormatter, getRelativeDateTimeStringPast, getFriendlyDateTimeStringPast, getRelativeDateTimeStringPastWithHourMinute, getShortDisplayDate, getFileSafeShortDate, getFullDisplayDate, toLocaleDateString, toLocaleTimeString, getBrowserSafeLocale, getDateFromDotNetTicks, getRelativeDateTimeResx, getRelativeDateTimeIntervalString, ONE_SECOND, ONE_MINUTE, TWO_MINUTES, ONE_HOUR, TWO_HOURS, ONE_DAY, TWO_DAYS, ONE_WEEK, ONE_MONTH, isSameDay, isSameMonth, isSameYear, isThisWeek, isLastWeek, getLastDayOfMonth, isLastAFewDays, convert24Timeto00Format, iso8601DateTimeToJsDate, convertDateToISOString, getRelativeDateTimeStringForLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateStringFormatter", function() { return createDateStringFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPast", function() { return getRelativeDateTimeStringPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyDateTimeStringPast", function() { return getFriendlyDateTimeStringPast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPastWithHourMinute", function() { return getRelativeDateTimeStringPastWithHourMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortDisplayDate", function() { return getShortDisplayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSafeShortDate", function() { return getFileSafeShortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullDisplayDate", function() { return getFullDisplayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateString", function() { return toLocaleDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeString", function() { return toLocaleTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserSafeLocale", function() { return getBrowserSafeLocale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_date_time_lib_DateTime_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-date-time/lib/DateTime.resx */ "lnCR");
/* harmony import */ var _ms_utilities_date_time_lib_DateTime_resx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_date_time_lib_DateTime_resx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTime.resx */ "ckxl");
/* harmony import */ var _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locale_Locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locale/Locale */ "1hLk");
/* harmony import */ var _string_StringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string/StringHelper */ "BY+f");
/* harmony import */ var _string_StringHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _features_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/Features */ "8G1T");
/* harmony import */ var _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/utilities-date-time/lib/index */ "EiK5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateFromDotNetTicks", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getDateFromDotNetTicks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeResx", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeResx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeIntervalString", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeIntervalString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_SECOND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_MINUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_MINUTES", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["TWO_MINUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_HOUR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_HOURS", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["TWO_HOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_DAY", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_DAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_DAYS", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["TWO_DAYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_WEEK", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MONTH", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_MONTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisWeek", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isThisWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastWeek", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isLastWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastDayOfMonth", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getLastDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastAFewDays", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isLastAFewDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convert24Timeto00Format", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["convert24Timeto00Format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iso8601DateTimeToJsDate", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["iso8601DateTimeToJsDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDateToISOString", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["convertDateToISOString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeStringForLists"]; });

// OneDrive:IgnoreCodeCoverage







var _getLocale;
var supportsTimeZoneDateOptions;
var shortDateFormat;
var shortTimeFormat;
var shortDateFormatUTC;
var shortTimeFormatUTC;
var formatShortDate;
var formatShortTime;
var formatShortDateUTC;
var formatShortTimeUTC;
var _chromiumDateFixFeatureEnabled = undefined;
var ChromiumDateFix = { ODB: 1469, ODC: 'ChromiumDateFix' };
/**
 * Generate a date formatter using the given Intl.DateTimeFormatOptions.
 * In order to speed up performance, a memoized instance of `Intl.DateTimeFormat`
 * (if available in the browser) is used for formatting.
 */
function createDateStringFormatter(formatOptions) {
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
        var formatter_1;
        return function (date) {
            if (!formatter_1) {
                // Do a lazy initialization so that we don't construct the formatter until
                // the first call to reduce the overhead of creating the formatters before using them.
                formatter_1 = new Intl.DateTimeFormat(getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language), formatOptions);
            }
            return formatter_1.format(date);
        };
    }
    else {
        return function (date) { return date.toLocaleDateString(getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language), formatOptions); };
    }
}
/**
 * Get a string like "X minutes ago" that reflects the time elapsed since the input time.
 * Only works for past times, future times just return a browser-determined localized time string.
 */
function getRelativeDateTimeStringPast(pastTime, startWithLowerCase) {
    if (startWithLowerCase === void 0) { startWithLowerCase = false; }
    return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeStringPast"](pastTime, getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language), startWithLowerCase);
}
/**
 * Get a string that reflects the time elapsed since the input time.
 * Only works for past times, future times just return a browser-determined localized time string.
 */
function getFriendlyDateTimeStringPast(pastTime, shortDate, startWithLowerCase, useUTCTimezone, options) {
    if (shortDate === void 0) { shortDate = false; }
    if (startWithLowerCase === void 0) { startWithLowerCase = false; }
    if (useUTCTimezone === void 0) { useUTCTimezone = false; }
    var timespan = Date.now() - pastTime.getTime(); // time elapsed in ms
    var todayMidnight = _getLocalMidnight();
    var yesterday = _addDays(todayMidnight, -1);
    var startOfWeek = _addDays(todayMidnight, -6);
    var _a = options || {}, _b = _a.displayMinutesToOneHour, displayMinutesToOneHour = _b === void 0 ? true : _b, _c = _a.displayHoursToOneDay, displayHoursToOneDay = _c === void 0 ? true : _c, _d = _a.displayHoursInDates, displayHoursInDates = _d === void 0 ? true : _d, _e = _a.displayShortenedWeekday, displayShortenedWeekday = _e === void 0 ? true : _e;
    var language = getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language);
    if (displayMinutesToOneHour && timespan < -5 * _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_MINUTE"]) {
        // in the future, with a 5m leeway
        return pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ month: 'short', day: 'numeric' }, useUTCTimezone));
    }
    else if (timespan < _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["TWO_MINUTES"]) {
        // "Just now"
        return startWithLowerCase
            ? _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.FriendlyDateTime_JustNow_withinSentence
            : _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.FriendlyDateTime_JustNow_asSentence;
    }
    else if (displayMinutesToOneHour && timespan < _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_HOUR"]) {
        // "{0}m ago"
        return _getTimespanString(timespan, _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.FriendlyDateTime_minutesShort, _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_MINUTE"]);
    }
    else if (_ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameDay"](todayMidnight, pastTime)) {
        if (!displayHoursToOneDay) {
            // "Today"
            return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeResx"]('Today', startWithLowerCase);
        }
        // "{0}h ago"
        return _getTimespanString(timespan, _DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.FriendlyDateTime_hoursShort, _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["ONE_HOUR"]);
    }
    else if (pastTime >= yesterday) {
        if (shortDate || !displayHoursInDates) {
            // yesterday or Yesterday
            return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeResx"]('Yesterday', startWithLowerCase);
        }
        // "Yesterday at {0}"
        return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeResx"]('YesterdayAndTime', startWithLowerCase).replace('{0}', pastTime.toLocaleTimeString(language, _computeFormatOptionsWithTimeZoneParam({ hour: 'numeric', minute: '2-digit' }, useUTCTimezone)));
    }
    else if (pastTime >= startOfWeek) {
        var shortWeekday = pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ weekday: 'short' }, useUTCTimezone));
        if (shortDate) {
            // weekday
            return shortWeekday;
        }
        else if (!displayShortenedWeekday && !displayHoursInDates) {
            return pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ weekday: 'long' }, useUTCTimezone));
        }
        // {0} at {1}  weekday at time
        return _ms_utilities_date_time_lib_DateTime_resx__WEBPACK_IMPORTED_MODULE_1___default.a.RelativeDateTime_DayAndTime.replace('{0}', shortWeekday).replace('{1}', pastTime.toLocaleTimeString(language, _computeFormatOptionsWithTimeZoneParam({ hour: 'numeric', minute: '2-digit' }, useUTCTimezone)));
    }
    else if (_ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameYear"](todayMidnight, pastTime)) {
        // This is a workaround for the IE/Edge bug that omits the month character when using option with { month: 'short', day: 'numeric' }
        // TODO: watch the bug logged on IE/Edge and remove this workaround when that bug is fixed.
        if (language.match(/(^ja$)|(^ja-{1})/i)) {
            return pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ month: 'long', day: 'numeric' }, useUTCTimezone));
        }
        return pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ month: 'short', day: 'numeric' }, useUTCTimezone));
    }
    // Any other time, just return the regular full original time
    return pastTime.toLocaleDateString(language, _computeFormatOptionsWithTimeZoneParam({ month: 'short', day: 'numeric', year: 'numeric' }, useUTCTimezone)); // browser-determined localized date (no time)
}
/**
 * This is a modified implementation of `DateTime.GetRelativeDateTimeStringPast(...)`.
 * The differences here are as follows:
 *
 *   1. The time string for yesterday does not include the seconds
 *   2. Instead of showing 'X days ago' for dates older than a month, default to showing the full date
 *   3. The full date will also include the time (also without seconds)
 */
function getRelativeDateTimeStringPastWithHourMinute(pastTime) {
    return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["getRelativeDateTimeStringPastWithHourMinute"](pastTime, getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language));
}
function createShortDateFormatters() {
    var locale = _getLocale();
    var supportsUTC = _supportsTimeZoneDateOptions();
    if (window['Intl'] && window['Intl']['DateTimeFormat']) {
        var dateOptions = {};
        var timeOptions = { hour: '2-digit', minute: '2-digit' };
        shortDateFormat = new Intl.DateTimeFormat(locale, dateOptions);
        shortTimeFormat = new Intl.DateTimeFormat(locale, timeOptions);
        if (supportsUTC) {
            dateOptions.timeZone = 'UTC';
            timeOptions.timeZone = 'UTC';
        }
        shortDateFormatUTC = new Intl.DateTimeFormat(locale, dateOptions);
        shortTimeFormatUTC = new Intl.DateTimeFormat(locale, timeOptions);
        formatShortDate = shortDateFormat.format;
        formatShortTime = shortTimeFormat.format;
        formatShortDateUTC = shortDateFormatUTC.format;
        formatShortTimeUTC = shortTimeFormatUTC.format;
    }
    else {
        // No support for formatter objects.
        formatShortDate = formatShortDateUTC = function (date) {
            return date.toLocaleDateString(locale);
        };
        formatShortTime = formatShortTimeUTC = function (date) {
            return date.toLocaleTimeString(locale);
        };
    }
}
/**
 * Returns a short version of a date to display (e.g. 11:45 PM if today, or 11/2/2015 if not today)
 */
function getShortDisplayDate(date, useUTCTimezone) {
    if (!date) {
        return '';
    }
    if (!formatShortDate) {
        createShortDateFormatters();
    }
    var isToday = _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["isSameDay"](new Date(), date);
    var formatter;
    if (useUTCTimezone) {
        if (isToday) {
            formatter = formatShortTimeUTC;
        }
        else {
            formatter = formatShortDateUTC;
        }
    }
    else {
        if (isToday) {
            formatter = formatShortTime;
        }
        else {
            formatter = formatShortDate;
        }
    }
    return formatter(date);
}
/**
 * Returns a short version of a date valid for use in a file name
 */
function getFileSafeShortDate(date, useUTCTimezone) {
    if (!date) {
        return '';
    }
    if (!formatShortDate) {
        createShortDateFormatters();
    }
    var formatter = useUTCTimezone ? formatShortDateUTC : formatShortDate;
    var formatted = formatter(date);
    // Replace characters that are not path-safe
    var safe = formatted.replace(/[:\/\\]/g, '-');
    return safe;
}
/**
 * Returns a full version of a date to display (e.g. 11/2/2015 11:45 PM)
 */
function getFullDisplayDate(date, useUTCTimezone) {
    if (!formatShortDate) {
        createShortDateFormatters();
    }
    var dateString = useUTCTimezone ? formatShortDateUTC(date) : formatShortDate(date);
    var timeString = useUTCTimezone ? formatShortTimeUTC(date) : formatShortTime(date);
    return Object(_string_StringHelper__WEBPACK_IMPORTED_MODULE_4__["format"])(_DateTime_resx__WEBPACK_IMPORTED_MODULE_2___default.a.DateAndTime, dateString, timeString);
}
/**
 * Gets a string of the given date in the current site's locale, falling back to the browser's
 * current/default locale if needed.
 */
function toLocaleDateString(date, options) {
    return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["toLocaleDateString"](date, getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language), options);
}
/**
 * Gets a string of the given time in the current site's locale, falling back to the browser's
 * current/default locale if needed.
 */
function toLocaleTimeString(date, options) {
    return _ms_utilities_date_time_lib_index__WEBPACK_IMPORTED_MODULE_6__["toLocaleTimeString"](date, getBrowserSafeLocale(_locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language), options);
}
/**
 * Checks against locales that are known to be unsupported, and returns "en" if that is the case.
 * Returns input locale unchanged otherwise.
 */
function getBrowserSafeLocale(locale) {
    if (_chromiumDateFixFeatureEnabled === undefined) {
        try {
            _chromiumDateFixFeatureEnabled = _features_Features__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(ChromiumDateFix);
        }
        catch (_a) {
            _chromiumDateFixFeatureEnabled = false;
        }
    }
    if (_chromiumDateFixFeatureEnabled && _isBrowserUnsupportedLocale(locale)) {
        return 'en';
    }
    return locale;
}
/**
 * Checks if date can be formatted properly for this locale in in the current browser runtime.
 * Currently only checks against known problematic locales in Chromium.
 */
function _isBrowserUnsupportedLocale(locale) {
    if (_chromiumUnsupportedLocalesMap === undefined) {
        _initializeChromiumUnsupportedLocales();
    }
    if (locale) {
        // This check can be removed if the following bug is fixed:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=935054
        locale = locale.toLowerCase();
        return _chromiumUnsupportedLocalesMap[locale];
    }
    return undefined;
}
_getLocale = function () {
    var validLocale;
    var locales = [
        window['$Config'] && window['$Config']['mkt'],
        _locale_Locale__WEBPACK_IMPORTED_MODULE_3__["default"].language,
        navigator.language,
        'en'
    ].filter(function (str) { return !!str; });
    for (var _i = 0, locales_1 = locales; _i < locales_1.length; _i++) {
        var locale = locales_1[_i];
        try {
            new Date().toLocaleDateString(locale);
            validLocale = locale;
            break;
        }
        catch (e) {
            // Fall back to next candidate locale. Eventually the locale will be undefined, if no valid locale exists
        }
    }
    validLocale = getBrowserSafeLocale(validLocale);
    _getLocale = function () { return validLocale; };
    return validLocale;
};
function _supportsTimeZoneDateOptions() {
    if (supportsTimeZoneDateOptions === void 0) {
        try {
            var locale = _getLocale();
            new Date().toLocaleDateString(locale, { timeZone: 'UTC' });
            supportsTimeZoneDateOptions = true;
        }
        catch (E) {
            // We know of some versions of IE 11 that fail when date options with a timezone is specified.
            supportsTimeZoneDateOptions = false;
        }
    }
    return supportsTimeZoneDateOptions;
}
/**
 * These are the language tags from our "supported list" that are officially unsupported by Chromium.
 */
var _chromiumUnsupportedLocales = [
    'eu-es',
    'af-za',
    'az-latn-az',
    'bs-latn-ba',
    'cy-gb',
    'ga-ie',
    'gl-es',
    'ha-latn-ng',
    'hy-am',
    'ig-ng',
    'is-is',
    'ka-ge',
    'kk-kz',
    'km-kh',
    'ky-kg',
    'mk-mk',
    'mn-mn',
    'mt-mt',
    'ne-np',
    'nn-no',
    'or-in',
    'pa-in',
    'si-lk',
    'sq-al',
    'ur-pk',
    'uz-latn-uz',
    'yo-ng',
    'zu-za',
    'pa-arab-pk',
    'ku-arab-iq',
    'be-by',
    'rw-rw',
    'ti-et',
    'tg-cyrl-tj',
    'eu',
    'af',
    'az',
    'bs',
    'cy',
    'ga',
    'gl',
    'ha',
    'hy',
    'ig',
    'is',
    'ka',
    'kk',
    'km',
    'ky',
    'mk',
    'mn',
    'mt',
    'ne',
    'nn',
    'or',
    'pa',
    'si',
    'sq',
    'ur',
    'uz',
    'yo',
    'zu',
    'pa',
    'ku',
    'be',
    'rw',
    'ti'
];
var _chromiumUnsupportedLocalesMap = undefined;
function _initializeChromiumUnsupportedLocales() {
    _chromiumUnsupportedLocalesMap = {};
    // See if the suspected locales are problematic in the current runtime.
    var date = new Date(1900, 0, 1);
    try {
        // Heuristic to recognize unsupported locales: Chromium returns "M01", "M02", etc as month (short/long)
        var options = { month: 'long' };
        for (var _i = 0, _chromiumUnsupportedLocales_1 = _chromiumUnsupportedLocales; _i < _chromiumUnsupportedLocales_1.length; _i++) {
            var locale = _chromiumUnsupportedLocales_1[_i];
            var formatted = date.toLocaleDateString(locale, options);
            if (formatted.match('M[0-9][0-9]')) {
                _chromiumUnsupportedLocalesMap[locale] = true;
            }
        }
    }
    catch (_a) {
        // Ignore errors
    }
}
function _getLocalMidnight() {
    var midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    return midnight;
}
function _addDays(day, days) {
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() + days, day.getHours(), day.getMinutes(), day.getSeconds(), day.getMilliseconds());
}
function _getTimespanString(timespan, locString, periodInSeconds) {
    var displayNumber = Math.round(timespan / periodInSeconds);
    return locString.replace('{0}', String(displayNumber));
}
function _computeFormatOptionsWithTimeZoneParam(options, useUTCTimezone) {
    if (_supportsTimeZoneDateOptions() && useUTCTimezone && options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { timeZone: 'UTC' });
    }
    return options;
}
// This needs to be after the other exports due to name collision. Exporting an existing name is invalid ESM.

//# sourceMappingURL=DateTime.js.map

/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "cDPE":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Engagement.event.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Engagement"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Engagement.event.js



/***/ }),

/***/ "ckxl":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/dateTime/DateTime.resx.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"DateAndTime":"{0} {1}","FriendlyDateTime_JustNow_withinSentence":"Ĵũśţ ńōŵ","FriendlyDateTime_JustNow_asSentence":"ĵũśţ ńōŵ","FriendlyDateTime_hoursShort":"{0}ĥ àĝō","FriendlyDateTime_minutesShort":"{0}m àĝō"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "dcNl":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/events/Events.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: isDOMEventTarget, isEventTarget, declare, raise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-async/lib/events/Events */ "fDs1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMEventTarget", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["isDOMEventTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventTarget", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["isEventTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["declare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return _ms_utilities_async_lib_events_Events__WEBPACK_IMPORTED_MODULE_0__["raise"]; });


//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "dv0D":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/browser/PlatformDetection.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["PlatformDetection"]; });

// Loading @ms/odsp-utilities/./lib/browser/PlatformDetection.js



/***/ }),

/***/ "fDs1":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-async@1.1.1/node_modules/@ms/utilities-async/lib/events/Events.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: isDOMEventTarget, isEventTarget, declare, raise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMEventTarget", function() { return isDOMEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventTarget", function() { return isEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return declare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
// NOTE: This module should have no dependencies!
function isDOMEventTarget(target) {
    return !!target && typeof target.addEventListener === 'function';
}
function isEventTarget(target) {
    return !!target && !!target.__events__;
}
function declare(parent, event) {
    var host = parent;
    var declaredEvents = (host.__declaredEvents = host.__declaredEvents || {});
    if (typeof event === 'string') {
        declaredEvents[event] = true;
    }
    else {
        for (var i = 0; i < event.length; i++) {
            declaredEvents[event[i]] = true;
        }
    }
}
function raise(target, eventName, eventArgs, bubbleEvent) {
    var finalTarget = target;
    var retVal;
    if (isDOMEventTarget(finalTarget)) {
        if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, bubbleEvent, true);
            ev.args = eventArgs;
            retVal = finalTarget.dispatchEvent(ev);
        }
    }
    else {
        while (finalTarget && retVal !== false) {
            if (isEventTarget(finalTarget)) {
                var events = finalTarget.__events__;
                var eventRecords = events[eventName];
                for (var id in eventRecords) {
                    if (Object.prototype.hasOwnProperty.call(eventRecords, id)) {
                        var eventRecordList = eventRecords[id];
                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                            var record = eventRecordList[listIndex];
                            if (record.objectCallback) {
                                retVal = record.objectCallback.call(record.parent, eventArgs);
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                finalTarget = bubbleEvent ? finalTarget.parent : null;
            }
            else {
                finalTarget = null;
            }
        }
    }
    return retVal;
}
//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "g/c1":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/PairedEventBase.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/logging/PairedEventBase.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.PairedEventBase;

/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



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

/***/ "lnCR":
/*!***********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-date-time@1.2.0/node_modules/@ms/utilities-date-time/lib/DateTime.resx.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"RelativeDateTime_AFewSeconds":"À ƒēŵ śēćōńďś àĝō","RelativeDateTime_AFewSeconds_StartWithLowerCase":"à ƒēŵ śēćōńďś àĝō","RelativeDateTime_AFewSecondsFuture":"Ĩń à ƒēŵ śēćōńďś","RelativeDateTime_AFewSecondsFuture_StartWithLowerCase":"ĩń à ƒēŵ śēćōńďś","RelativeDateTime_AboutAMinuteFuture":"Ĩń àƀōũţ à mĩńũţē","RelativeDateTime_AboutAMinuteFuture_StartWithLowerCase":"ĩń àƀōũţ à mĩńũţē","RelativeDateTime_LessThanAMinute":"Ĺēśś ţĥàń à mĩńũţē àĝō","RelativeDateTime_LessThanAMinute_StartWithLowerCase":"ĺēśś ţĥàń à mĩńũţē àĝō","RelativeDateTime_AboutAMinute":"Àƀōũţ à mĩńũţē àĝō","RelativeDateTime_AboutAMinute_StartWithLowerCase":"àƀōũţ à mĩńũţē àĝō","RelativeDateTime_XMinutesFuture":"Ĩń {0} mĩńũţē||Ĩń {0} mĩńũţēś","RelativeDateTime_XMinutesFuture_StartWithLowerCase":"ĩń {0} mĩńũţē||ĩń {0} mĩńũţēś","RelativeDateTime_XMinutesFutureIntervals":"1||2-","RelativeDateTime_XMinutesIntervals":"1||2-","RelativeDateTime_AboutAnHourFuture":"Ĩń àƀōũţ àń ĥōũŕ","RelativeDateTime_AboutAnHourFuture_StartWithLowerCase":"ĩń àƀōũţ àń ĥōũŕ","RelativeDateTime_AboutAnHour":"Àƀōũţ àń ĥōũŕ àĝō","RelativeDateTime_AboutAnHour_StartWithLowerCase":"àƀōũţ àń ĥōũŕ àĝō","RelativeDateTime_Tomorrow":"Ţōmōŕŕōŵ","RelativeDateTime_Tomorrow_StartWithLowerCase":"ţōmōŕŕōŵ","RelativeDateTime_Yesterday":"Ŷēśţēŕďàŷ","RelativeDateTime_Yesterday_StartWithLowerCase":"ŷēśţēŕďàŷ","RelativeDateTime_YesterdayAndTime":"Ŷēśţēŕďàŷ àţ {0}","RelativeDateTime_YesterdayAndTime_StartWithLowerCase":"ŷēśţēŕďàŷ àţ {0}","DateTime_DateAndTime":"{0} àţ {1}","RelativeDateTime_TomorrowAndTime":"Ţōmōŕŕōŵ àţ {0}","RelativeDateTime_TomorrowAndTime_StartWithLowerCase":"ţōmōŕŕōŵ àţ {0}","RelativeDateTime_XHoursFuture":"Ĩń {0} ĥōũŕ||Ĩń {0} ĥōũŕś","RelativeDateTime_XHoursFuture_StartWithLowerCase":"ĩń {0} ĥōũŕ||ĩń {0} ĥōũŕś","RelativeDateTime_XHours":"{0} ĥōũŕ àĝō||{0} ĥōũŕś àĝō","RelativeDateTime_XHoursFutureIntervals":"1||2-","RelativeDateTime_XHoursIntervals":"1||2-","RelativeDateTime_DayAndTime":"{0} àţ {1}","RelativeDateTime_XDaysFuture":"{0} ďàŷ ƒŕōm ńōŵ||{0} ďàŷś ƒŕōm ńōŵ","RelativeDateTime_XDays":"{0} ďàŷ àĝō||{0} ďàŷś àĝō","RelativeDateTime_XDaysFutureIntervals":"1||2-","RelativeDateTime_XDaysIntervals":"1||2-","RelativeDateTime_Today":"Ţōďàŷ","RelativeDateTime_Today_StartWithLowerCase":"ţōďàŷ","RelativeDateTime_XMinutes":"{0} mĩńũţē àĝō||{0} mĩńũţēś àĝō","MonthAndYear":"{0} {1}","today":"Ţōďàŷ","yesterday":"Ŷēśţēŕďàŷ"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "mbD+":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/uri/SimpleUri.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: SimpleUri, UriFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-resource-path */ "WgxZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleUri", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriFormat", function() { return _ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePathFormat"]; });



/* harmony default export */ __webpack_exports__["default"] = (_ms_sp_resource_path__WEBPACK_IMPORTED_MODULE_0__["SPResourcePath"]);
//# sourceMappingURL=SimpleUri.js.map

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/PageUsage.event */ "qRNb");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_events_PageUsage_event__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Qos.event */ "c09w");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qos", function() { return _ms_odsp_utilities_lib_logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_2__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engagement", function() { return _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/EventBase */ "WquY");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_3__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_EventBase__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/alternativeUrls/SPAlternativeUrls */ "vmDi");
/* harmony import */ var _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SPAlternativeUrls", function() { return _ms_odsp_utilities_lib_alternativeUrls_SPAlternativeUrls__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/aria/AriaLoggerCore */ "V87q");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_5__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AriaLoggerCore", function() { return _ms_odsp_utilities_lib_aria_AriaLoggerCore__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ABExperiment */ "70sN");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_6__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_ABExperiment__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/rumone/RUMOneLogger */ "UKDt");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_7__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RumOneLogger", function() { return _ms_odsp_utilities_lib_logging_rumone_RUMOneLogger__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_8__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureOverrides", function() { return _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-utilities/lib/performance/PerformanceMarker */ "HddE");
/* harmony import */ var _ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PerformanceMarker", function() { return _ms_odsp_utilities_lib_performance_PerformanceMarker__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/odsp-utilities/lib/navigation/AddressParser */ "+7kh");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_10__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/Uri */ "I5DX");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_11__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uri", function() { return _ms_odsp_utilities_lib_uri_Uri__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/DataStoreCachingType */ "EjJ3");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_12__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStoreCachingType", function() { return _ms_odsp_utilities_lib_models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ms/odsp-utilities/lib/models/store/BaseDataStore */ "18dJ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_13__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return _ms_odsp_utilities_lib_models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/ErrorHelper */ "lmjA");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_14__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_14__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdspErrorHelper", function() { return _ms_odsp_utilities_lib_logging_ErrorHelper__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ms/odsp-utilities/lib/icons/ItemType */ "FAc7");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_15__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_15__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return _ms_odsp_utilities_lib_icons_ItemType__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ms/odsp-utilities/lib/object/ObjectUtil */ "Nsau");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_16__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_object_ObjectUtil__WEBPACK_IMPORTED_MODULE_16__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_17__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_17__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/StringHelper */ "BY+f");
/* harmony import */ var _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "StringHelper", function() { return _ms_odsp_utilities_lib_string_StringHelper__WEBPACK_IMPORTED_MODULE_18__; });
/* harmony import */ var _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/UriEncoding */ "+35T");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriEncoding", function() { return _ms_odsp_utilities_lib_encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-utilities/lib/browser/PlatformDetection */ "dv0D");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_20__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_20__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return _ms_odsp_utilities_lib_browser_PlatformDetection__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-utilities/lib/locale/Locale */ "1hLk");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_21__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_21__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return _ms_odsp_utilities_lib_locale_Locale__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_encoding_HtmlEncoding__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ms/odsp-utilities/lib/encoding/HtmlEncoding */ "EBPj");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlEncoding", function() { return _ms_odsp_utilities_lib_encoding_HtmlEncoding__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Signal */ "LSjO");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return _ms_odsp_utilities_lib_async_Signal__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ms/odsp-utilities/lib/events/EventGroup */ "Oa+Z");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _ms_odsp_utilities_lib_events_EventGroup__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_25__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_25__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_26__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_26__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Api.event */ "Joik");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultTypeEnum", function() { return _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_27__["ResultTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return _ms_odsp_utilities_lib_logging_events_Api_event__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper */ "nXow");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequestEntryDurationMetrics", function() { return _ms_odsp_utilities_lib_logging_RequestDurationLoggingHelper__WEBPACK_IMPORTED_MODULE_28__["getRequestEntryDurationMetrics"]; });

/* harmony import */ var _ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Retry */ "Qbl6");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Retry", function() { return _ms_odsp_utilities_lib_async_Retry__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriFormat", function() { return _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_30__["UriFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleUri", function() { return _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/SingleEventBase */ "ruBb");
/* harmony import */ var _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_31__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SingleEventBase", function() { return _ms_odsp_utilities_lib_logging_SingleEventBase__WEBPACK_IMPORTED_MODULE_31__; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/PairedEventBase */ "g/c1");
/* harmony import */ var _ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PairedEventBase", function() { return _ms_odsp_utilities_lib_logging_PairedEventBase__WEBPACK_IMPORTED_MODULE_32__; });
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/ResultTypeEnum */ "BgFM");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_logging_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_33__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR","ResultTypeEnum","getRequestEntryDurationMetrics","UriFormat"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_logging_events_ResultTypeEnum__WEBPACK_IMPORTED_MODULE_33__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_scope_Scope__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ms/odsp-utilities/lib/scope/Scope */ "ZjtH");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _ms_odsp_utilities_lib_scope_Scope__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_10__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR","ResultTypeEnum","getRequestEntryDurationMetrics","UriFormat"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_navigation_AddressParser__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ms/odsp-utilities/lib/string/EmailAddressParser */ "GbJQ");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailAddressParser", function() { return _ms_odsp_utilities_lib_string_EmailAddressParser__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ms/odsp-utilities/lib/dateTime/DateTime */ "ZqbN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDateStringFormatter", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["createDateStringFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPast", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getRelativeDateTimeStringPast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFriendlyDateTimeStringPast", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getFriendlyDateTimeStringPast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringPastWithHourMinute", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getRelativeDateTimeStringPastWithHourMinute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShortDisplayDate", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getShortDisplayDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSafeShortDate", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getFileSafeShortDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullDisplayDate", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getFullDisplayDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateString", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["toLocaleDateString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeString", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["toLocaleTimeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrowserSafeLocale", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getBrowserSafeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateFromDotNetTicks", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getDateFromDotNetTicks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeResx", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getRelativeDateTimeResx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeIntervalString", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getRelativeDateTimeIntervalString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_SECOND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_MINUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_MINUTES", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["TWO_MINUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_HOUR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_HOURS", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["TWO_HOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_DAY", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_DAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TWO_DAYS", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["TWO_DAYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_WEEK", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONE_MONTH", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["ONE_MONTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThisWeek", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isThisWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastWeek", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isLastWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastDayOfMonth", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getLastDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLastAFewDays", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["isLastAFewDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convert24Timeto00Format", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["convert24Timeto00Format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iso8601DateTimeToJsDate", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["iso8601DateTimeToJsDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDateToISOString", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["convertDateToISOString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelativeDateTimeStringForLists", function() { return _ms_odsp_utilities_lib_dateTime_DateTime__WEBPACK_IMPORTED_MODULE_36__["getRelativeDateTimeStringForLists"]; });

/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHRPromise */ "0sdQ");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRPromise", function() { return _ms_odsp_utilities_lib_xhr_XHRPromise__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _ms_odsp_utilities_lib_path_Path__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ms/odsp-utilities/lib/path/Path */ "G4wV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitFileName", function() { return _ms_odsp_utilities_lib_path_Path__WEBPACK_IMPORTED_MODULE_38__["splitFileName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileExtension", function() { return _ms_odsp_utilities_lib_path_Path__WEBPACK_IMPORTED_MODULE_38__["getFileExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodePath", function() { return _ms_odsp_utilities_lib_path_Path__WEBPACK_IMPORTED_MODULE_38__["encodePath"]; });

/* harmony import */ var _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ms/odsp-utilities/lib/xhr/XHR */ "KaEC");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_39__) if(["default","Qos","Engagement","SPAlternativeUrls","AriaLoggerCore","RumOneLogger","FeatureOverrides","PerformanceMarker","Uri","DataStoreCachingType","DataStore","OdspErrorHelper","ItemType","Promise","StringHelper","UriEncoding","PlatformDetection","Locale","HtmlEncoding","Signal","EventGroup","Features","Api","Retry","SimpleUri","SingleEventBase","PairedEventBase","Scope","EmailAddressParser","XHRPromise","XHR","ResultTypeEnum","getRequestEntryDurationMetrics","UriFormat","createDateStringFormatter","getRelativeDateTimeStringPast","getFriendlyDateTimeStringPast","getRelativeDateTimeStringPastWithHourMinute","getShortDisplayDate","getFileSafeShortDate","getFullDisplayDate","toLocaleDateString","toLocaleTimeString","getBrowserSafeLocale","getDateFromDotNetTicks","getRelativeDateTimeResx","getRelativeDateTimeIntervalString","ONE_SECOND","ONE_MINUTE","TWO_MINUTES","ONE_HOUR","TWO_HOURS","ONE_DAY","TWO_DAYS","ONE_WEEK","ONE_MONTH","isSameDay","isSameMonth","isSameYear","isThisWeek","isLastWeek","getLastDayOfMonth","isLastAFewDays","convert24Timeto00Format","iso8601DateTimeToJsDate","convertDateToISOString","getRelativeDateTimeStringForLists","splitFileName","getFileExtension","encodePath"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_39__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHR", function() { return _ms_odsp_utilities_lib_xhr_XHR__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/**
 * A series of exports to be used by the rest of sp-client
 *
 * @remarks
 * If you are using API Extractor for this library, the documentation in this comment
 * will be used for the entire package.
 *
 * @packagedocumentation
 */
// sp-telemetry













// theme bundle





// sp-search-common


// sp-suite-nav




// sp-teams-lib




// sp-home-core

// application-base


// lots


// client webpart


// sp-component-utilities


// datasource providers




// sp-pages







// live persona card














// pages preloads











/***/ }),

/***/ "nF3k":
/*!******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/sp-resource-path@1.0.0/node_modules/@ms/sp-resource-path/lib/SPResourcePath.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: SPResourcePathFormat, SPResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePathFormat", function() { return SPResourcePathFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPResourcePath", function() { return SPResourcePath; });
/**
 * @public
 */
var SPResourcePathFormat;
(function (SPResourcePathFormat) {
    SPResourcePathFormat[SPResourcePathFormat["absolute"] = 0] = "absolute";
    SPResourcePathFormat[SPResourcePathFormat["relative"] = 1] = "relative";
    SPResourcePathFormat[SPResourcePathFormat["serverRelative"] = 2] = "serverRelative";
})(SPResourcePathFormat || (SPResourcePathFormat = {}));
/**
 * Simplified implementation of a URI parser which does not attempt decoding of segments,
 * handling of query strings, or separation of the fragment. Intended for use on SharePoint
 * Resource Paths or other URL-like entities which may not actually conform to the URL
 * specification, but may be used for simple transformations of URLs.
 *
 * This class makes several assumptions about the format of input URLs:
 * - Absolute URLs begin with '<scheme>://<host>'
 * - Relative URLs being with '/'
 * - URLs never have a trailing '/'
 *
 * @public
 */
var SPResourcePath = /** @class */ (function () {
    /**
     * Creates an instance of SPResourcePath.
     *
     * @param value - A string representing a well-formed, decoded SharePoint resource path.
     */
    function SPResourcePath(value) {
        if (value === void 0) { value = ''; }
        var rootDelimeter = '//';
        var indexOfRootDelimeter = value.indexOf(rootDelimeter);
        var indexOfPathDelimeter = value.indexOf('/');
        // The root delimeter is the first instance of '//', unless preceded by a lone '/'
        var endIndexOfRootDelimeter = indexOfRootDelimeter > -1 && indexOfRootDelimeter <= indexOfPathDelimeter
            ? indexOfRootDelimeter + rootDelimeter.length
            : -1;
        var authority = getAuthority(value, endIndexOfRootDelimeter);
        var domain = authority && authority.slice(endIndexOfRootDelimeter);
        // By definition, everything after the authority is the path
        var path = value.slice(authority.length);
        var format = authority
            ? SPResourcePathFormat.absolute
            : path[0] === '/'
                ? SPResourcePathFormat.serverRelative
                : SPResourcePathFormat.relative;
        var segments = path.split('/');
        this.authority = authority;
        this.domain = domain;
        this.format = format;
        this.path = path;
        this.segments = segments;
        this.value = value;
    }
    return SPResourcePath;
}());

function getAuthority(value, endIndexOfRootDelimeter) {
    if (endIndexOfRootDelimeter > -1) {
        var indexOfNextSegment = value.indexOf('/', endIndexOfRootDelimeter);
        if (indexOfNextSegment > -1) {
            return value.slice(0, indexOfNextSegment);
        }
        else {
            return value;
        }
    }
    else {
        return '';
    }
}
//# sourceMappingURL=SPResourcePath.js.map

/***/ }),

/***/ "nXow":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/RequestDurationLoggingHelper.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: getRequestEntryDurationMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestEntryDurationMetrics", function() { return getRequestEntryDurationMetrics; });
/* harmony import */ var _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uri/SimpleUri */ "mbD+");
// OneDrive:IgnoreCodeCoverage

/**
 * This function returns the request duration recording by the browser via window.performance.getEntries().
 * @param url
 * @param executeTimeStamp
 * @param overrideWindow allows passing in a override window object, i.e. iframe window
 */
function getRequestEntryDurationMetrics(url, requestPerformanceStartTime, overrideWindow) {
    var currentWindow = overrideWindow || window;
    if (!currentWindow || !currentWindow.performance || !url || !requestPerformanceStartTime) {
        return { duration: -1 };
    }
    try {
        var entries = performance.getEntriesByType('resource');
        // If targetOrigin is missing it means the url is relative. In order to compare urls with the ones we get from performance.getEntries()
        // we need to have a complete url, so pre-pend current origin to relative url.
        var targetOrigin = new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"](url).authority;
        if (!targetOrigin) {
            var currentOrigin = currentWindow.location && new _uri_SimpleUri__WEBPACK_IMPORTED_MODULE_0__["SimpleUri"](currentWindow.location.href).authority;
            url = currentOrigin + url;
        }
        var entry = void 0;
        // Performance entries are in chronological order of request starttime, we look back from end of the list to start from most recent entry.
        for (var i = entries.length - 1; i >= 0; i--) {
            var currentEntry = entries[i];
            // We want to find the request record that was made most-immediately after client initiated the request
            if (currentEntry.startTime < requestPerformanceStartTime) {
                break;
            }
            // Filter to entry that matches the request url
            if (decodeURIComponent(currentEntry.name) === decodeURIComponent(url)) {
                entry = currentEntry;
            }
        }
        if (entry) {
            var pickedMetrics = (function (_a) {
                var connectEnd = _a.connectEnd, connectStart = _a.connectStart, decodedBodySize = _a.decodedBodySize, domainLookupend = _a.domainLookupend, domainLookupStart = _a.domainLookupStart, _b = _a.duration, duration = _b === void 0 ? -1 : _b, // Default to -1 if not available to indicate error
                encodedBodySize = _a.encodedBodySize, fetchStart = _a.fetchStart, nextHopProtocol = _a.nextHopProtocol, redirectEnd = _a.redirectEnd, redirectStart = _a.redirectStart, requestStart = _a.requestStart, responseEnd = _a.responseEnd, responseStart = _a.responseStart, secureConnectionStart = _a.secureConnectionStart, startTime = _a.startTime, transferSize = _a.transferSize, workerStart = _a.workerStart;
                return ({
                    connectEnd: connectEnd,
                    connectStart: connectStart,
                    decodedBodySize: decodedBodySize,
                    domainLookupend: domainLookupend,
                    domainLookupStart: domainLookupStart,
                    duration: duration,
                    encodedBodySize: encodedBodySize,
                    fetchStart: fetchStart,
                    nextHopProtocol: nextHopProtocol,
                    redirectEnd: redirectEnd,
                    redirectStart: redirectStart,
                    requestStart: requestStart,
                    responseEnd: responseEnd,
                    responseStart: responseStart,
                    secureConnectionStart: secureConnectionStart,
                    startTime: startTime,
                    transferSize: transferSize,
                    workerStart: workerStart
                });
            })(entry);
            return pickedMetrics;
        }
        else {
            return { duration: -1 /* Default to -1 if not available to indicate error */ };
        }
    }
    catch (ex) {
        return { duration: -1 /* Default to -1 if not available to indicate error */ };
    }
}
//# sourceMappingURL=RequestDurationLoggingHelper.js.map

/***/ }),

/***/ "qRNb":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/PageUsage.event.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/logging/events/PageUsage.event.js


/***/ }),

/***/ "ruBb":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/SingleEventBase.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @ms/odsp-utilities/./lib/logging/SingleEventBase.js
var pkg = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
module.exports = pkg.SingleEventBase;

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

/***/ })

/******/ })});;
//# sourceMappingURL=odsp-utilities-bundle_[locale].js.map