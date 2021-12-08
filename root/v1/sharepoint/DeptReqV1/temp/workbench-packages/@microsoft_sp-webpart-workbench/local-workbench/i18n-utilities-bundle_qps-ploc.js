define("c83d5509-ccd5-4c67-919f-2440f237927a_0.2.231", ["@ms/globalize-bundle"], function(__WEBPACK_EXTERNAL_MODULE__68mV__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "+NlS":
/*!********************************************!*\
  !*** ./lib/fabricSupport/FabricSupport.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../LocaleFormat/LocaleFormat */ "3+oh");
/* harmony import */ var _FabricSupport_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FabricSupport.resx */ "mAtM");
var _FabricSupport_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./FabricSupport.resx */ "mAtM", 1);


/**
 * Helper data for office-ui-fabric-react controls.
 * @alpha
 */
var FabricSupport = /** @class */ (function () {
    function FabricSupport() {
    }
    Object.defineProperty(FabricSupport, "datePickerStrings", {
        /**
         * The strings for the DatePicker control (http://dev.office.com/fabric#/components/datepicker)
         */
        get: function () {
            if (!FabricSupport._datePickerStrings) {
                var months = [
                    new Date(0, 0),
                    new Date(0, 1),
                    new Date(0, 2),
                    new Date(0, 3),
                    new Date(0, 4),
                    new Date(0, 5),
                    new Date(0, 6),
                    new Date(0, 7),
                    new Date(0, 8),
                    new Date(0, 9),
                    new Date(0, 10),
                    new Date(0, 11)
                ];
                var days = [
                    new Date(0, 0, 0),
                    new Date(0, 0, 1),
                    new Date(0, 0, 2),
                    new Date(0, 0, 3),
                    new Date(0, 0, 4),
                    new Date(0, 0, 5),
                    new Date(0, 0, 6)
                ];
                FabricSupport._datePickerStrings = {
                    months: months.map(function (month) { return _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(month, { raw: 'LLLL' }); }),
                    shortMonths: months.map(function (month) { return _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(month, { raw: 'LLL' }); }),
                    days: days.map(function (day) { return _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(day, { raw: 'cccc' }); }),
                    shortDays: days.map(function (day) { return _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(day, { raw: 'ccc' }); }),
                    goToToday: _FabricSupport_resx__WEBPACK_IMPORTED_MODULE_1__["datePickerGoToToday"]
                };
            }
            return FabricSupport._datePickerStrings;
        },
        enumerable: false,
        configurable: true
    });
    FabricSupport._datePickerStrings = undefined;
    return FabricSupport;
}());
/* harmony default export */ __webpack_exports__["default"] = (FabricSupport);


/***/ }),

/***/ "3+oh":
/*!******************************************!*\
  !*** ./lib/LocaleFormat/LocaleFormat.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/globalize-bundle */ "68mV");
/* harmony import */ var _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timeConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../timeConstants */ "JLfl");
/* harmony import */ var _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocaleFormatStrings.resx */ "VPLd");
var _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LocaleFormatStrings.resx */ "VPLd", 1);
/**
 * This is a set of tools for internationalization, including support for formatting and parsing numbers and
 *  dates and times, and formatting relative times.
 */



var RelativeTimeLengthForm;
(function (RelativeTimeLengthForm) {
    RelativeTimeLengthForm[RelativeTimeLengthForm["short"] = 0] = "short";
    RelativeTimeLengthForm[RelativeTimeLengthForm["narrow"] = 1] = "narrow";
    RelativeTimeLengthForm[RelativeTimeLengthForm["long"] = 2] = "long";
})(RelativeTimeLengthForm || (RelativeTimeLengthForm = {}));
/**
 * A set of utility functions for localizing dates and numbers.
 *
 * @alpha
 */
var LocaleFormat = /** @class */ (function () {
    function LocaleFormat() {
    }
    /**
     * Format a number in the user's locale according to the specified options.
     *
     * @param value - The number to format.
     * @param options - Optional options for formatting.
     *
     * @returns The formatted number.
     */
    // See https://github.com/jquery/globalize/blob/master/doc/api/number/number-formatter.md
    LocaleFormat.formatNumber = function (value, options) {
        return _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__["globalize"].formatNumber(value, _sortAndScrubOptions(options));
    };
    /**
     * Parse a string into a number according to the specified options. The number is expected to be formatted according
     *  to the user's locale.
     *
     * @param value - The string value to parse.
     * @param options - Optional options for parsing.
     *
     * @returns The parsed number.
     */
    // See https://github.com/jquery/globalize/blob/master/doc/api/number/number-parser.md
    LocaleFormat.parseNumber = function (value, options) {
        return _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__["globalize"].parseNumber(value, _sortAndScrubOptions(options));
    };
    /**
     * Format a date in the user's locale according to the specified options.
     *
     * @param value - The date to format.
     * @param options - Optional options for formatting.
     *
     * @returns The formatted date.
     */
    // See  https://github.com/jquery/globalize/blob/master/doc/api/date/date-formatter.md
    LocaleFormat.formatDate = function (value, options) {
        return _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__["globalize"].formatDate(value, _sortAndScrubOptions(options));
    };
    /**
     * Parse a string into a Date according to the specified options. The date is expected to be formatted according
     *  to the user's locale.
     *
     * @param value - The string value to parse.
     * @param options - Optional options for parsing.
     *
     * @returns The parsed date.
     */
    // See https://github.com/jquery/globalize/blob/master/doc/api/date/date-parser.md
    LocaleFormat.parseDate = function (value, options) {
        return _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__["globalize"].parseDate(value, _sortAndScrubOptions(options));
    };
    /**
     * Format a number of specified time units in the user's locale according to the specified options as a relative date
     *  time.
     *
     * @param value - The number of units.
     * @param unit - The time unit. Valid options include "day", "week", "month", etc.
     * @param options - Optional options for formatting.
     *
     * @returns The formatted relative time.
     */
    // See https://github.com/jquery/globalize/blob/master/doc/api/relative-time/relative-time-formatter.md
    LocaleFormat.formatRelativeTime = function (value, unit, options) {
        _normalizeRelativeTimeFormatterOptions(options);
        return _ms_globalize_bundle__WEBPACK_IMPORTED_MODULE_0__["globalize"].formatRelativeTime(value, unit, options);
    };
    /**
     * Format a date as relative to the current time.
     *
     * @param value - The date.
     * @param options - Optional options for formatting.
     *
     * @returns The formatted relative time.
     */
    // See https://github.com/jquery/globalize/blob/master/doc/api/relative-time/relative-time-formatter.md
    LocaleFormat.formatRelativeTimeApproximate = function (value, options) {
        var formattingOptions = (options === null || options === void 0 ? void 0 : options.formattingOptions) || {};
        _normalizeRelativeTimeFormatterOptions(formattingOptions);
        if (!formattingOptions) {
            formattingOptions = {};
        }
        var timeDifference = value.getTime() - Date.now();
        var past = timeDifference < 0;
        var absoluteTimeDifference = timeDifference < 0 ? -timeDifference : timeDifference;
        var dailyCutoff = options && options.oneWeekCutoff ? _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_WEEK"] : _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_THIRTY_TWO_DAYS"];
        var length = formattingOptions.form
            ? formattingOptions.form === 'short'
                ? RelativeTimeLengthForm.short
                : RelativeTimeLengthForm.narrow
            : RelativeTimeLengthForm.long;
        if (absoluteTimeDifference < 1000) {
            // now
            return LocaleFormat.formatRelativeTime(0, 'second', formattingOptions);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_THIRTY_SECONDS"]) {
            // a few seconds ago/in a few seconds
            return _getFewSecondsRelative(length, past);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_MINUTE"]) {
            // less than a minute ago/in less than a minute
            return _getLessThanAMinuteRelative(length, past);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_TWO_MINUTES"]) {
            // about a minute ago/in about a minute
            return _getAboutAMinuteRelative(length, past);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_HOUR"]) {
            // {0} minutes ago/in {0} minutes
            var minuteCount = Math.round(timeDifference / _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_MINUTE"]);
            return LocaleFormat.formatRelativeTime(minuteCount, 'minute', formattingOptions);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_TWO_HOURS"]) {
            // about an hour ago/in about an hour
            return _getAboutAnHourRelative(length, past);
        }
        else if (absoluteTimeDifference < _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_DAY"]) {
            // {0} hours ago/in {0} hours
            var hourCount = Math.round(timeDifference / _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_HOUR"]);
            return LocaleFormat.formatRelativeTime(hourCount, 'hour', formattingOptions);
        }
        else if (absoluteTimeDifference < dailyCutoff) {
            // yesterday/tomorrow
            // or
            // {0} days ago/in {0} days
            var dayCount = Math.round(timeDifference / _timeConstants__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_IN_ONE_DAY"]);
            return LocaleFormat.formatRelativeTime(dayCount, 'day', formattingOptions);
        }
        else if (value.getFullYear() === new Date().getFullYear()) {
            // The date without the year
            return _getDateWithoutYear(value, length);
        }
        else {
            // The date
            return _getDateWithYear(value, length);
        }
    };
    return LocaleFormat;
}());
/* harmony default export */ __webpack_exports__["default"] = (LocaleFormat);
/**
 * Globalize has this weird caveat where the order of options matters, so we'll always put them
 *  in alphabetical order. We also need to scrub out undefined options.
 */
function _sortAndScrubOptions(options) {
    if (!options) {
        return options;
    }
    else {
        var result = {};
        var keys = Object.keys(options).sort();
        var emptyObject = true;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (options[key] !== undefined) {
                result[key] = options[key];
                emptyObject = false;
            }
        }
        return emptyObject ? undefined : result;
    }
}
function _getFewSecondsRelative(length, past) {
    // a few seconds ago/in a few seconds
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Past_Narrow"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Future_Narrow"];
        case RelativeTimeLengthForm.short:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Past_Short"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Future_Short"];
        case RelativeTimeLengthForm.long:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Past_Long"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AFewSeconds_Future_Long"];
    }
}
function _getLessThanAMinuteRelative(length, past) {
    // less than a minute ago/in less than a minute
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Past_Narrow"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Future_Narrow"];
        case RelativeTimeLengthForm.short:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Past_Short"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Future_Short"];
        case RelativeTimeLengthForm.long:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Past_Long"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["LessThanAMinute_Future_Long"];
    }
}
function _getAboutAMinuteRelative(length, past) {
    // about a minute ago/in about a minute
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Past_Narrow"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Future_Narrow"];
        case RelativeTimeLengthForm.short:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Past_Short"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Future_Short"];
        case RelativeTimeLengthForm.long:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Past_Long"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAMinute_Future_Long"];
    }
}
function _getAboutAnHourRelative(length, past) {
    // about an hour ago/in about an hour
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Past_Narrow"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Future_Narrow"];
        case RelativeTimeLengthForm.short:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Past_Short"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Future_Short"];
        case RelativeTimeLengthForm.long:
            return past ? _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Past_Long"] : _LocaleFormatStrings_resx__WEBPACK_IMPORTED_MODULE_2__["AboutAnHour_Future_Long"];
    }
}
function _getDateWithoutYear(value, length) {
    // The date without the year
    var skeleton;
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            skeleton = 'Md'; // 11/1
            break;
        case RelativeTimeLengthForm.short:
            skeleton = 'MMMd'; // Nov 1
            break;
        case RelativeTimeLengthForm.long:
        default:
            // tslint:disable-line:no-switch-case-fall-through
            skeleton = 'MMMMd'; // November 1
    }
    return LocaleFormat.formatDate(value, { skeleton: skeleton });
}
function _getDateWithYear(value, length) {
    // The date
    var dateFormat;
    switch (length) {
        case RelativeTimeLengthForm.narrow:
            dateFormat = 'short'; // 11/1/10
            break;
        case RelativeTimeLengthForm.short:
            dateFormat = 'medium'; // Nov 1, 2010
            break;
        case RelativeTimeLengthForm.long:
        default:
            // tslint:disable-line:no-switch-case-fall-through
            dateFormat = 'long'; // November 1, 2010
    }
    return LocaleFormat.formatDate(value, {
        date: dateFormat
    });
}
function _normalizeRelativeTimeFormatterOptions(options) {
    if (!options) {
        // No options, nothing to do
        return;
    }
    if (options.form === 'long') {
        // Globalize uses a falsy values as 'long'
        options.form = undefined;
    }
    options = _sortAndScrubOptions(options);
}


/***/ }),

/***/ "68mV":
/*!***************************************!*\
  !*** external "@ms/globalize-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__68mV__;

/***/ }),

/***/ "JLfl":
/*!******************************!*\
  !*** ./lib/timeConstants.js ***!
  \******************************/
/*! exports provided: MILLISECONDS_IN_ONE_SECOND, MILLISECONDS_IN_THIRTY_SECONDS, MILLISECONDS_IN_ONE_MINUTE, MILLISECONDS_IN_TWO_MINUTES, MILLISECONDS_IN_ONE_HOUR, MILLISECONDS_IN_TWO_HOURS, MILLISECONDS_IN_ONE_DAY, MILLISECONDS_IN_ONE_WEEK, MILLISECONDS_IN_THIRTY_TWO_DAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_ONE_SECOND", function() { return MILLISECONDS_IN_ONE_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_THIRTY_SECONDS", function() { return MILLISECONDS_IN_THIRTY_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_ONE_MINUTE", function() { return MILLISECONDS_IN_ONE_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_TWO_MINUTES", function() { return MILLISECONDS_IN_TWO_MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_ONE_HOUR", function() { return MILLISECONDS_IN_ONE_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_TWO_HOURS", function() { return MILLISECONDS_IN_TWO_HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_ONE_DAY", function() { return MILLISECONDS_IN_ONE_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_ONE_WEEK", function() { return MILLISECONDS_IN_ONE_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_IN_THIRTY_TWO_DAYS", function() { return MILLISECONDS_IN_THIRTY_TWO_DAYS; });
// number of milliseconds for the given timespan
// copied from SPRelativeDateTime, including 32 days to a month. After 32 days, we know a month has passed
var MILLISECONDS_IN_ONE_SECOND = 1000;
var MILLISECONDS_IN_THIRTY_SECONDS = MILLISECONDS_IN_ONE_SECOND * 30;
var MILLISECONDS_IN_ONE_MINUTE = 60 * MILLISECONDS_IN_ONE_SECOND;
var MILLISECONDS_IN_TWO_MINUTES = 2 * MILLISECONDS_IN_ONE_MINUTE;
var MILLISECONDS_IN_ONE_HOUR = 60 * MILLISECONDS_IN_ONE_MINUTE;
var MILLISECONDS_IN_TWO_HOURS = 2 * MILLISECONDS_IN_ONE_HOUR;
var MILLISECONDS_IN_ONE_DAY = 24 * MILLISECONDS_IN_ONE_HOUR;
var MILLISECONDS_IN_ONE_WEEK = 7 * MILLISECONDS_IN_ONE_DAY;
var MILLISECONDS_IN_THIRTY_TWO_DAYS = 32 * MILLISECONDS_IN_ONE_DAY;


/***/ }),

/***/ "KBBC":
/*!*******************************************!*\
  !*** ./lib/LocaleFormat/ILocaleFormat.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "VPLd":
/*!***************************************************!*\
  !*** ./lib/LocaleFormat/LocaleFormatStrings.resx ***!
  \***************************************************/
/*! exports provided: AFewSeconds_Past_Long, AFewSeconds_Past_Short, AFewSeconds_Past_Narrow, AFewSeconds_Future_Long, AFewSeconds_Future_Short, AFewSeconds_Future_Narrow, LessThanAMinute_Past_Long, LessThanAMinute_Past_Short, LessThanAMinute_Past_Narrow, LessThanAMinute_Future_Long, LessThanAMinute_Future_Short, LessThanAMinute_Future_Narrow, AboutAMinute_Past_Long, AboutAMinute_Past_Short, AboutAMinute_Past_Narrow, AboutAMinute_Future_Long, AboutAMinute_Future_Short, AboutAMinute_Future_Narrow, AboutAnHour_Past_Long, AboutAnHour_Past_Short, AboutAnHour_Past_Narrow, AboutAnHour_Future_Long, AboutAnHour_Future_Short, AboutAnHour_Future_Narrow, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AFewSeconds_Past_Long\":\"[!!--##à ƒēŵ śēćōńďś àĝō##--!!]\",\"AFewSeconds_Past_Short\":\"[!!--##à ƒēŵ śēćōńďś àĝō##--!!]\",\"AFewSeconds_Past_Narrow\":\"[!!--##à ƒēŵ śēćōńďś àĝō##--!!]\",\"AFewSeconds_Future_Long\":\"[!!--##ĩń à ƒēŵ śēćōńďś##--!!]\",\"AFewSeconds_Future_Short\":\"[!!--##ĩń à ƒēŵ śēćōńďś##--!!]\",\"AFewSeconds_Future_Narrow\":\"[!!--##ĩń à ƒēŵ śēćōńďś##--!!]\",\"LessThanAMinute_Past_Long\":\"[!!--##ĺēśś ţĥàń à mĩńũţē àĝō##--!!]\",\"LessThanAMinute_Past_Short\":\"[!!--##ĺēśś ţĥàń à mĩń. àĝō##--!!]\",\"LessThanAMinute_Past_Narrow\":\"[!!--##< 1 mĩń àĝō##--!!]\",\"LessThanAMinute_Future_Long\":\"[!!--##ĩń ĺēśś ţĥàń à mĩńũţē##--!!]\",\"LessThanAMinute_Future_Short\":\"[!!--##ĩń ĺēśś ţĥàń à mĩń.##--!!]\",\"LessThanAMinute_Future_Narrow\":\"[!!--##ĩń < 1 mĩń##--!!]\",\"AboutAMinute_Past_Long\":\"[!!--##àƀōũţ à mĩńũţē àĝō##--!!]\",\"AboutAMinute_Past_Short\":\"[!!--##àƀōũţ à mĩń. àĝō##--!!]\",\"AboutAMinute_Past_Narrow\":\"[!!--##~1 mĩń àĝō##--!!]\",\"AboutAMinute_Future_Long\":\"[!!--##ĩń àƀōũţ à mĩńũţē##--!!]\",\"AboutAMinute_Future_Short\":\"[!!--##ĩń àƀōũţ à mĩń.##--!!]\",\"AboutAMinute_Future_Narrow\":\"[!!--##ĩń ~1 mĩń##--!!]\",\"AboutAnHour_Past_Long\":\"[!!--##àƀōũţ àń ĥōũŕ àĝō##--!!]\",\"AboutAnHour_Past_Short\":\"[!!--##àƀōũţ àń ĥŕ. àĝō##--!!]\",\"AboutAnHour_Past_Narrow\":\"[!!--##~1 ĥŕ àĝō##--!!]\",\"AboutAnHour_Future_Long\":\"[!!--##ĩń àƀōũţ àń ĥōũŕ##--!!]\",\"AboutAnHour_Future_Short\":\"[!!--##ĩń àƀōũţ àń ĥŕ.##--!!]\",\"AboutAnHour_Future_Narrow\":\"[!!--##ĩń ~1 ĥŕ##--!!]\"}");

/***/ }),

/***/ "mAtM":
/*!**********************************************!*\
  !*** ./lib/fabricSupport/FabricSupport.resx ***!
  \**********************************************/
/*! exports provided: datePickerGoToToday, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"datePickerGoToToday\":\"[!!--##Ĝō ţō ţōďàŷ##--!!]\"}");

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocaleFormat/LocaleFormat */ "3+oh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleFormat", function() { return _LocaleFormat_LocaleFormat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LocaleFormat_ILocaleFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocaleFormat/ILocaleFormat */ "KBBC");
/* harmony import */ var _LocaleFormat_ILocaleFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LocaleFormat_ILocaleFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LocaleFormat_ILocaleFormat__WEBPACK_IMPORTED_MODULE_1__) if(["default","LocaleFormat","FabricSupport","SPDate"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LocaleFormat_ILocaleFormat__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fabricSupport_FabricSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fabricSupport/FabricSupport */ "+NlS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricSupport", function() { return _fabricSupport_FabricSupport__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _spDate_SPDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spDate/SPDate */ "nV5s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPDate", function() { return _spDate_SPDate__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/**
 * SharePoint Framework support for globalization of numbers and dates
 *
 * @remarks
 * This package privates support for formatting and parsing numbers and dates.
 *
 * @packagedocumentation
 */






/***/ }),

/***/ "nV5s":
/*!******************************!*\
  !*** ./lib/spDate/SPDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeConstants */ "JLfl");
// Copyright (c) Microsoft. All rights reserved.

/**
 * SPDate provides date and time components with time zone offset.
 *
 * @alpha
 */
var SPDate = /** @class */ (function () {
    /**
     * Constructs the SPDate with the given data object.
     * @param data - SPDateData object.
     */
    function SPDate(data) {
        this._fullYear = data.fullYear;
        this._month = data.month;
        this._date = data.date;
        this._hours = data.hours;
        this._minutes = data.minutes;
        this._seconds = data.seconds;
        this._milliseconds = data.milliseconds || 0;
        this._timezoneOffset = data.timezoneOffset || 0;
    }
    Object.defineProperty(SPDate.prototype, "fullYear", {
        /**
         * A four digit number corresponding to the year of the given date.
         */
        get: function () {
            return this._fullYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "month", {
        /**
         * A number, between 0 and 11, representing the month in the given date.
         * 0 corresponds to January, 1 to February, and so on.
         */
        get: function () {
            return this._month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "date", {
        /**
         * A number, between 1 and 31, representing the day of the month for the given date.
         */
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "hours", {
        /**
         * A number, between 0 and 23, representing the hour for the given date.
         */
        get: function () {
            return this._hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "minutes", {
        /**
         * A number, between 0 and 59, representing the minutes in the given date.
         */
        get: function () {
            return this._minutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "seconds", {
        /**
         * A number, between 0 and 59, representing the seconds in the given date.
         */
        get: function () {
            return this._seconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "milliseconds", {
        /**
         * A number, between 0 and 999, representing the milliseconds for the given date.
         */
        get: function () {
            return this._milliseconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPDate.prototype, "timezoneOffset", {
        /**
         * A number representing the time-zone offset from UTC, in minutes.
         */
        get: function () {
            return this._timezoneOffset;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the UTC date for the date specified during the object creation from the specified
     * time zone.
     *
     * @param date - localized date.
     */
    SPDate.prototype.convertToUTC = function (fromTimezone) {
        // UTC time for the given date.
        var utcMilliSeconds = Date.UTC(this.fullYear, this.month, this.date, this.hours, this.minutes, this.seconds, this.milliseconds);
        var preferredTimezoneMilliSeconds = utcMilliSeconds + this._getAdjustedTimezoneOffset(this, fromTimezone) * _timeConstants__WEBPACK_IMPORTED_MODULE_0__["MILLISECONDS_IN_ONE_MINUTE"];
        // create the date with the preferred time zome milliseconds, whose UTC is what is required.
        // Though this date is created in the current time zone, we don't worry about it
        // as we just need that date components.
        var newDate = new Date(preferredTimezoneMilliSeconds);
        return this._convertDateToSPDate(newDate, 0);
    };
    /**
     * Returns the date converted to the time zone specified, for the UTC date passed in during
     * the object creation.
     *
     * @param utcDate - UTC date to convert to the localized date.
     */
    SPDate.prototype.convertFromUTC = function (toTimezone) {
        var utcMilliseconds = Date.UTC(this.fullYear, this.month, this.date, this.hours, this.minutes, this.seconds, this.milliseconds);
        // Adjusted offset for the given timezone with taking DST into account.
        var adjustedOffset = this._getAdjustedTimezoneOffset(this, toTimezone);
        // calculating milliseconds difference with respect to the given time zone's offset.
        var timeInMilliSeconds = utcMilliseconds - adjustedOffset * _timeConstants__WEBPACK_IMPORTED_MODULE_0__["MILLISECONDS_IN_ONE_MINUTE"];
        var localizedDate = new Date(timeInMilliSeconds);
        return this._convertDateToSPDate(localizedDate, adjustedOffset);
    };
    SPDate.prototype.isSame = function (inputDate) {
        return (this.fullYear === inputDate.fullYear &&
            this.month === inputDate.month &&
            this.date === inputDate.date &&
            this.hours === inputDate.hours &&
            this.minutes === inputDate.minutes &&
            this.seconds === inputDate.seconds &&
            this.milliseconds === inputDate.milliseconds);
    };
    SPDate.prototype._getAdjustedTimezoneOffset = function (date, timezone) {
        var isStandardTime = this._isStandardTime(date, timezone);
        var adjustedOffset = timezone.offset + (isStandardTime ? timezone.standardOffset : timezone.daylightOffset);
        return adjustedOffset;
    };
    // This function takes the reasonable assumption that daylight time and
    // standard time will always vary by at least a month.
    SPDate.prototype._isStandardTime = function (date, timeZone) {
        // This is for the time zones where there is no daylight savings is observed.
        if (timeZone.standardDate.Month === timeZone.daylightDate.Month) {
            return true;
        }
        var isStandardDateEarlier = timeZone.standardDate.Month < timeZone.daylightDate.Month;
        var earlierDate = this._convertSystemTimeToDate(isStandardDateEarlier ? timeZone.standardDate : timeZone.daylightDate, date.fullYear);
        var laterDate = this._convertSystemTimeToDate(isStandardDateEarlier ? timeZone.daylightDate : timeZone.standardDate, date.fullYear);
        if (date._isSameOrAfter(earlierDate) && date._isBefore(laterDate)) {
            return isStandardDateEarlier;
        }
        else {
            return !isStandardDateEarlier;
        }
    };
    SPDate.prototype._convertSystemTimeToDate = function (time, currentYear) {
        var firstDayOfTheMonth = new Date(time.Year || currentYear, time.Month - 1, // Month parameter accepts a 0 based month value.
        1 // First day of the month
        );
        var firstDayOfNextMonth = new Date(time.Year || currentYear, time.Month, 1);
        // Calculate the day offset between target day and first day of this month in terms of day of week.
        // e.g. Friday(5) - Monday(1) = 4(day); Sunday(0) - TuesDay(2) = -2(days);
        var dayOfWeekOffset = time.DayOfWeek - firstDayOfTheMonth.getDay();
        // Calculate the offset in terms of number of weeks between target day and first day of week
        // For a given target day like 'the number nth TuesDay of current month',
        //    if current month starts with Sunday, Monday, or Tuesday, the target day is in the number n  week of month.
        //    if current month starts with Wednesday or later, the target day is actually the number n + 1 week of month.
        // In the two cases, the week offset against first week is (n - 1) weeks and (n + 1 - 1) = n weeks
        // Notes, for time with SystemDate type, time = { Day: n, dayOfWeek: Tuesday(or other day) } means
        // the number nth TuesDay in current month.
        var weekOffset = dayOfWeekOffset >= 0 ? time.Day - 1 : time.Day;
        // Calculating how many days between target day and first day of current month
        var dateOffset = weekOffset * 7 + dayOfWeekOffset;
        // Calculating the target date, and setting the hour, minute, seconds, milliseconds from system time.
        var targetDateTime = new Date(firstDayOfTheMonth.getTime());
        targetDateTime.setDate(targetDateTime.getDate() + dateOffset);
        targetDateTime.setHours(time.Hour);
        targetDateTime.setMinutes(time.Minute);
        targetDateTime.setSeconds(time.Second);
        targetDateTime.setMilliseconds(time.Milliseconds);
        while (targetDateTime.getTime() >= firstDayOfNextMonth.getTime()) {
            // Some system time (like the daylights saving ends date for Dublin time zone) is defined as
            // 'year: 2018, Month: 10, DayOfWeek: 0(Sunday), Day: 5(FIFTH Sunday)', but Oct. 2018 only has FOUR Sundays.
            // Actually this system time indicates `the LAST Sunday of Oct. 2018`.
            //  - Without this 'while' iteration to roll back, the calculated target date will be Nov. 4th (which is wrong).
            //  - With this 'while()' block, target date is rolled back by 1 week to be Oct. 28th (which is correct).
            targetDateTime = new Date(targetDateTime.getTime());
            targetDateTime.setDate(targetDateTime.getDate() - 7);
        }
        return targetDateTime;
    };
    SPDate.prototype._convertDateToSPDate = function (date, timezoneOffset) {
        return new SPDate({
            date: date.getUTCDate(),
            fullYear: date.getUTCFullYear(),
            hours: date.getUTCHours(),
            milliseconds: date.getUTCMilliseconds(),
            minutes: date.getUTCMinutes(),
            month: date.getUTCMonth(),
            seconds: date.getUTCSeconds(),
            timezoneOffset: timezoneOffset
        });
    };
    SPDate.prototype._isSameOrAfter = function (inputDate) {
        if (!inputDate) {
            throw new Error('Supplied date cannot be undefined or null.');
        }
        var thisDate = new Date(this.fullYear, this.month, this.date, this.hours, this.minutes, this.milliseconds);
        return thisDate >= inputDate;
    };
    SPDate.prototype._isBefore = function (date) {
        return !this._isSameOrAfter(date);
    };
    return SPDate;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPDate);


/***/ })

/******/ })});;
//# sourceMappingURL=i18n-utilities-bundle_[locale].js.map