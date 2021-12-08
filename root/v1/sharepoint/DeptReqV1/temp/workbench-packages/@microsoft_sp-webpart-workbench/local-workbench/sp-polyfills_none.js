define("1e384972-6346-49b4-93c7-b2e6763938e6_1.12.1", [], function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "+xXQ");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xXQ":
/*!*******************************!*\
  !*** ./lib-commonjs/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @copyright Microsoft Corporation. All rights reserved.
// @file This file contains an inventory of all of our framework's polyfills.
// All webpart and application code can rely on these libraries being polyfilled by our framework.
Object.defineProperty(exports, "__esModule", { value: true });
// ES6 Harmony Collections Polyfill
// ES6 Harmony Collections  was added as a polyfill to provide a lightweight unobtrusive shim for
// ES2015 collections. The implementations of Map, Set, and WeakMap provided by this polyfill
// adhere to the ES2015 standard. Functions that abide by the ES2015 standard such as Map.get()
// and Set.has() are guaranteed to run in sublinear time rather than the expected constant time
// for a standard hashmap implementation. (See http://stackoverflow.com/a/31092145) The alternative
// popular library to ES6 Harmony Collections is ES6 shim. After running some samples tests, we have
// determined that ES6 Harmony Collections performs better on a larger set of operations than
// the es6-shim. (Tests were run here: https://jsperf.com/es6-shim-vs-es6-collections/2 ).
// ES6 shim is also a much larger library in size. Included the code from github repo to
// sp client package in order to maintain it.
// https://github.com/WebReflection/es6-collections
// IE11 has a bug in its native implementation of WeakMap.
// By setting the 'WeakMap' property of the window object to 'undefined',
// we will fallback to the use of the WeakMap polyfill.
// tslint:disable-next-line:no-string-literal
if (!!window['MSInputMethodContext'] && !!document['documentMode']) {
    try {
        window['WeakMap'] = undefined; // tslint:disable-line:no-string-literal no-any
    }
    catch (e) {
        /* do nothing */
    }
}
var es6Collections = __webpack_require__(/*! ./es6-collections */ "udjm");
es6Collections.polyfill();
// ES6 Promise Polyfill
// Adds an implementation of the ES2015-Promise to the browser. The implementation is a subset
// of rsvp.js.
// (See: https://github.com/tildeio/rsvp.js) ES6 Promise is compliant with Promises/A+
// (See: https://promisesaplus.com/)
// Very useful for using Promise in the Safari/IE/Edge (already supported by Chrome/Firefox)
// https://github.com/jakearchibald/es6-promise
var es6promise = __webpack_require__(/*! es6-promise */ "YOmx");
es6promise.polyfill();
// Hack to unblock prod rollout due to LPC breaking IE onload
__webpack_require__(/*! es6-symbol/implement */ "FlDN");
// Window.Fetch PolyFill
// Adds an implementation of the Fetch standard to the browser.
// Very useful for using the fetch api in the Safari/IE (already supported by Chrome/Firefox/Edge)
// https://github.com/github/fetch
__webpack_require__(/*! whatwg-fetch */ "bV/n");
// Fill utility for URL types
var UrlFillHelper = __webpack_require__(/*! ./url/UrlFillHelper */ "V+G9");
UrlFillHelper.fillUrlIfNecessary(function () { return __webpack_require__(/*! ./url/URL */ "kGHh").default; });
UrlFillHelper.fillUrlSearchParamsIfNecessary(function () { return __webpack_require__(/*! ./url/URLSearchParams */ "NzIA").default; });
// TypeScript 2.0 Typings have location.origin and performance as readonly properties.
// This is a polyfill for window.location.origin, which is not supported by the IE browser
if (!window.location.origin) {
    window.location.origin = // tslint:disable-line:no-any
        window.location.protocol +
            '//' +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port : '');
}
// IE9 doesn't support performance.now(), so we need to polyfill that
if (!window.performance) {
    window.performance = {}; // tslint:disable-line:no-any
}
if (!window.performance.now) {
    // Polyfill performance.now with a function that returns the number of milliseconds since the module loader loaded.
    // Not as accurate as the real performance.now() function, but as accurate as we're able to get with a polyfill.
    var pageLoadTime_1 = Date.now();
    window.performance.now = function () { return Date.now() - pageLoadTime_1; };
}
// ES6 Collection Polyfill does not provide toString function for Set Object, which may cause false negative when
// checking implementation of Set if other polyfill for Set is bundled.
// Check whether toString() is implemented right, if not, provide toString for Set.
if (new Set().toString() === '[object Object]') {
    window.Set.prototype.toString = function () { return '[object Set]'; }; // tslint:disable-line:no-any
}
// IE11 does not support string startswith endswith, so we need to polyfill that
var StringPolyfill = __webpack_require__(/*! ./string/stringPolyfill */ "sxx9");
StringPolyfill.stringPolyfill();
// Object.assign is not supported by IE11 and needs to be filled for the marksy library.
var ObjectAssignPolyfill = __webpack_require__(/*! ./object/createAssignPolyfill */ "MJ5c");
ObjectAssignPolyfill.createAssignPolyfill();
var ObjectPolyfill = __webpack_require__(/*! ./object/objectPolyfill */ "4NOt");
ObjectPolyfill.objectPolyfill();
var ArrayPolyfill = __webpack_require__(/*! ./array/arrayPolyfill */ "9kiX");
ArrayPolyfill.arrayPolyfill();
// IE11 does not support CustomEvent natively
var CustomEventPolyfill = __webpack_require__(/*! ./event/customEventPolyfill */ "cdCt");
CustomEventPolyfill.customEventPolyfill();


/***/ }),

/***/ "/DvU":
/*!****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/keys/shim.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "3AJo");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "2N2e":
/*!*********************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/type@1.2.0/node_modules/type/plain-function/is.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "YqD1");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "3AJo":
/*!***************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/is-value.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "z05t")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "4Fcv":
/*!******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/is-implemented.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global     = __webpack_require__(/*! ext/global-this */ "C39H")
  , validTypes = { object: true, symbol: true };

module.exports = function () {
	var Symbol = global.Symbol;
	var symbol;
	if (typeof Symbol !== "function") return false;
	symbol = Symbol("test symbol");
	try { String(symbol); }
	catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "4NOt":
/*!***********************************************!*\
  !*** ./lib-commonjs/object/objectPolyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.objectPolyfill = void 0;
function objectPolyfill() {
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    // tslint:disable-next-line:no-any
    if (typeof Object.values !== 'function') {
        Object.defineProperty(Object, 'values', {
            value: function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); }
        });
    }
}
exports.objectPolyfill = objectPolyfill;


/***/ }),

/***/ "7frF":
/*!***********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/string/#/contains/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "RgVX")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "KEEH");


/***/ }),

/***/ "9kiX":
/*!*********************************************!*\
  !*** ./lib-commonjs/array/arrayPolyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPolyfill = void 0;
function arrayPolyfill() {
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    // tslint:disable-next-line:no-any
    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function (search) {
                return this.indexOf(search) !== -1;
            },
            configurable: true
        });
    }
}
exports.arrayPolyfill = arrayPolyfill;


/***/ }),

/***/ "C39H":
/*!*******************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/ext@1.4.0/node_modules/ext/global-this/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "YohY")() ? globalThis : __webpack_require__(/*! ./implementation */ "zYft");


/***/ }),

/***/ "CIoX":
/*!**************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d            = __webpack_require__(/*! d */ "Ztsx")
  , NativeSymbol = __webpack_require__(/*! ext/global-this */ "C39H").Symbol;

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		// To ensure proper interoperability with other native functions (e.g. Array.from)
		// fallback to eventual native implementation of given symbol
		hasInstance: d(
			"", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill("hasInstance")
		),
		isConcatSpreadable: d(
			"",
			(NativeSymbol && NativeSymbol.isConcatSpreadable) ||
				SymbolPolyfill("isConcatSpreadable")
		),
		iterator: d("", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill("iterator")),
		match: d("", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill("match")),
		replace: d("", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill("replace")),
		search: d("", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill("search")),
		species: d("", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill("species")),
		split: d("", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill("split")),
		toPrimitive: d(
			"", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill("toPrimitive")
		),
		toStringTag: d(
			"", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill("toStringTag")
		),
		unscopables: d(
			"", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill("unscopables")
		)
	});
};


/***/ }),

/***/ "FToB":
/*!************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/type@1.2.0/node_modules/type/value/is.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "FlDN":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/implement.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!__webpack_require__(/*! ./is-implemented */ "4Fcv")()) {
	Object.defineProperty(__webpack_require__(/*! ext/global-this */ "C39H"), "Symbol", {
		value: __webpack_require__(/*! ./polyfill */ "MKRt"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}


/***/ }),

/***/ "GjOh":
/*!*************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/type@1.2.0/node_modules/type/object/is.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../value/is */ "FToB");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "J6uv":
/*!******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/valid-value.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "3AJo");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "KCz+":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/assign/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "cTj0")() ? Object.assign : __webpack_require__(/*! ./shim */ "yQpW");


/***/ }),

/***/ "KEEH":
/*!**********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/string/#/contains/shim.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "MJ5c":
/*!*****************************************************!*\
  !*** ./lib-commonjs/object/createAssignPolyfill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssignPolyfill = void 0;
// based on reference polyfill on MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
function createAssignPolyfill() {
    if (typeof Object.assign !== 'function') {
        Object.defineProperty(Object, 'assign', {
            // tslint:disable-next-line:no-any
            value: function (target) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!target) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var to = Object(target);
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var nextSource = args_1[_a];
                    if (nextSource) {
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }
}
exports.createAssignPolyfill = createAssignPolyfill;


/***/ }),

/***/ "MKRt":
/*!************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/polyfill.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d                    = __webpack_require__(/*! d */ "Ztsx")
  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ "bHmm")
  , NativeSymbol         = __webpack_require__(/*! ext/global-this */ "C39H").Symbol
  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ "QsRz")
  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ "CIoX")
  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ "bu2B");

var create = Object.create
  , defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty;

var SymbolPolyfill, HiddenSymbol, isNativeSafe;

if (typeof NativeSymbol === "function") {
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
} else {
	NativeSymbol = null;
}

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = description === undefined ? "" : String(description);
	return defineProperties(symbol, {
		__description__: d("", description),
		__name__: d("", generateName(description))
	});
};

setupStandardSymbols(SymbolPolyfill);
setupSymbolRegistry(SymbolPolyfill);

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d("", function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return "Symbol (" + validateSymbol(this).__description__ + ")"; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(
	SymbolPolyfill.prototype,
	SymbolPolyfill.toPrimitive,
	d("", function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === "symbol") return symbol;
		return symbol.toString();
	})
);
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
);

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
);


/***/ }),

/***/ "NzIA":
/*!*********************************************!*\
  !*** ./lib-commonjs/url/URLSearchParams.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Polyfill for the URLSearchParams class.
 *
 * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 *
 * WhatWG Spec: https://url.spec.whatwg.org/
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isIterable = typeof window === 'undefined' || ('Symbol' in window && 'iterator' in Symbol);
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(init) {
        this._initialize(init);
    }
    /**
     * Parser following this spec: https://url.spec.whatwg.org/#concept-urlencoded-parser
     */
    URLSearchParams._getParamterPairsFromString = function (str) {
        var strMatches = str.match(/\??(.*)/);
        if (strMatches) {
            str = strMatches[1];
        }
        else {
            // Unexpected format. Return nothing
            return [];
        }
        return (str.split('&') || [])
            .filter(function (token) { return token; })
            .map(function (token) {
            var splitIndex = token.indexOf('=');
            var key = '';
            var value = '';
            if (splitIndex === -1) {
                // No "=" -> Empty value
                key = token;
            }
            else if (splitIndex === 0) {
                // "=" is the first character -> empty key
                value = token.substr(1);
            }
            else {
                key = token.substring(0, splitIndex);
                value = token.substr(splitIndex + 1);
            }
            // Replace "+" with space
            key = key.replace(/\+/g, ' ');
            value = value.replace(/\+/g, ' ');
            // Decode the key and value
            key = decodeURIComponent(key);
            value = decodeURIComponent(value);
            return { key: key, value: value };
        });
    };
    URLSearchParams.prototype.append = function (key, value) {
        this._queryParameterList.push({ key: key, value: value });
        this._update();
    };
    URLSearchParams.prototype.delete = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                this._queryParameterList.splice(i, 1);
                i--;
            }
        }
        this._update();
    };
    URLSearchParams.prototype.entries = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return [pair.key, pair.value]; }));
    };
    URLSearchParams.prototype.get = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                return this._queryParameterList[i].value;
            }
        }
        return null; // tslint:disable-line:no-null-keyword
    };
    URLSearchParams.prototype.getAll = function (key) {
        var result = [];
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                result.push(this._queryParameterList[i].value);
            }
        }
        return result;
    };
    URLSearchParams.prototype.has = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                return true;
            }
        }
        return false; // tslint:disable-line:no-null-keyword
    };
    URLSearchParams.prototype.keys = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return pair.key; }));
    };
    URLSearchParams.prototype.set = function (key, value) {
        var found = false;
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                if (found) {
                    // Already found a matching key - remove the rest
                    this._queryParameterList.splice(i, 1);
                    i--;
                }
                else {
                    found = true;
                    this._queryParameterList[i].value = value;
                }
            }
        }
        if (!found) {
            this.append(key, value);
            // No need to call _update() here because append() calls it.
        }
        else {
            this._update();
        }
    };
    URLSearchParams.prototype.sort = function () {
        this._queryParameterList.sort(function (a, b) { return a.key.localeCompare(b.key); });
        this._update();
    };
    URLSearchParams.prototype.forEach = function (callbackfn) {
        var _this = this;
        this._queryParameterList.forEach(function (pair) { return callbackfn(pair.value, pair.key, _this); });
    };
    URLSearchParams.prototype.toString = function () {
        return this._queryParameterList
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        })
            .join('&');
    };
    URLSearchParams.prototype.values = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return pair.value; }));
    };
    URLSearchParams.prototype._update = function () {
        if (this._url) {
            this._url.search = this.toString();
        }
    };
    URLSearchParams.prototype._initialize = function (init) {
        this._queryParameterList = [];
        if (Array.isArray(init)) {
            // Array
            for (var _i = 0, init_1 = init; _i < init_1.length; _i++) {
                var element = init_1[_i];
                if (!Array.isArray(element) || element.length !== 2) {
                    // Must be an array of two-element arrays
                    throw new TypeError('All elements in init sequence must have exactly two elements');
                }
                else {
                    this._queryParameterList.push({
                        key: element[0],
                        value: element[1]
                    });
                }
            }
        }
        else if (typeof init === 'object') {
            // Dictionary
            for (var key in init) {
                if (init.hasOwnProperty(key)) {
                    this._queryParameterList.push({
                        key: key,
                        value: init[key]
                    });
                }
            }
        }
        else if (typeof init === 'string') {
            // String
            this._queryParameterList = URLSearchParams._getParamterPairsFromString(init);
        }
        else {
            // do nothing
        }
    };
    URLSearchParams.prototype._iteratorFor = function (items) {
        var index = 0;
        var iterator = {
            next: function () {
                var value = items[index++];
                return { done: value === undefined, value: value };
            }
        };
        if (isIterable) {
            iterator[Symbol.iterator] = function () { return iterator; };
        }
        return iterator;
    };
    return URLSearchParams;
}());
exports.default = URLSearchParams;


/***/ }),

/***/ "QsRz":
/*!*****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/lib/private/generate-name.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d = __webpack_require__(/*! d */ "Ztsx");

var create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;

var created = create(null);
module.exports = function (desc) {
	var postfix = 0, name, ie11BugWorkaround;
	while (created[desc + (postfix || "")]) ++postfix;
	desc += postfix || "";
	created[desc] = true;
	name = "@@" + desc;
	defineProperty(
		objPrototype,
		name,
		d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		})
	);
	return name;
};


/***/ }),

/***/ "ROaw":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/is-symbol.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	if (!value) return false;
	if (typeof value === "symbol") return true;
	if (!value.constructor) return false;
	if (value.constructor.name !== "Symbol") return false;
	return value[value.constructor.toStringTag] === "Symbol";
};


/***/ }),

/***/ "RgVX":
/*!********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "V+G9":
/*!*******************************************!*\
  !*** ./lib-commonjs/url/UrlFillHelper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fillUrlSearchParamsIfNecessary = exports.fillUrlIfNecessary = void 0;
function urlIsPresent() {
    if (typeof window.URL === 'undefined') {
        return false;
    }
    try {
        var url = new window.URL('http://contoso.com?a=b');
        return url.searchParams.get('a') === 'b';
    }
    catch (e) {
        return false;
    }
}
function urlSearchParamsIsPresent() {
    // tslint:disable-next-line:no-string-literal
    if (typeof window['URLSearchParams'] === 'undefined') {
        return false;
    }
    try {
        new URLSearchParams('?a=b&c=d'); // tslint:disable-line:no-unused-expression
        // tslint:disable:no-string-literal
        return !!(URLSearchParams.prototype['keys'] &&
            URLSearchParams.prototype['values'] &&
            URLSearchParams.prototype['entries']);
        // tslint:enable:no-string-literal
    }
    catch (e) {
        return false;
    }
}
/**
 * Fills the window.URL class if it doesn't already exist or if its implementation is incorrect
 */
// tslint:disable-next-line:no-any
function fillUrlIfNecessary(URL) {
    // 'window' isn't defined in mocha test
    if (typeof window !== 'undefined' && (!urlIsPresent() || !urlSearchParamsIsPresent())) {
        window.URL = URL();
    }
}
exports.fillUrlIfNecessary = fillUrlIfNecessary;
/**
 * Fills the window.URLSearchParams class if it doesn't already exist or if its implementation is incorrect
 */
// tslint:disable-next-line:no-any variable-name
function fillUrlSearchParamsIfNecessary(URLSearchParams) {
    if (typeof window !== 'undefined' && (!urlIsPresent() || !urlSearchParamsIsPresent())) {
        window['URLSearchParams'] = URLSearchParams(); // tslint:disable-line:no-string-literal
    }
}
exports.fillUrlSearchParamsIfNecessary = fillUrlSearchParamsIfNecessary;


/***/ }),

/***/ "YOmx":
/*!**********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-promise@4.2.4/node_modules/es6-promise/dist/es6-promise.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process@0.11.10/node_modules/process/browser.js */ "gXI/"), __webpack_require__(/*! ./../../../../webpack@4.44.2/node_modules/webpack/buildin/global.js */ "c5Wh")))

/***/ }),

/***/ "YohY":
/*!****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/ext@1.4.0/node_modules/ext/global-this/is-implemented.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	if (typeof globalThis !== "object") return false;
	if (!globalThis) return false;
	return globalThis.Array === Array;
};


/***/ }),

/***/ "YqD1":
/*!***************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/type@1.2.0/node_modules/type/function/is.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "vWap");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "Ztsx":
/*!***************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/d@1.0.1/node_modules/d/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue         = __webpack_require__(/*! type/value/is */ "FToB")
  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "2N2e")
  , assign          = __webpack_require__(/*! es5-ext/object/assign */ "KCz+")
  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ "w+/8")
  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ "7frF");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "bHmm":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/validate-symbol.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "ROaw");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "bV/n":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/whatwg-fetch@2.0.3/node_modules/whatwg-fetch/fetch.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "bu2B":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es6-symbol@3.1.3/node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d              = __webpack_require__(/*! d */ "Ztsx")
  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ "bHmm");

var registry = Object.create(null);

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (registry[key]) return registry[key];
			return (registry[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (symbol) {
			var key;
			validateSymbol(symbol);
			for (key in registry) {
				if (registry[key] === symbol) return key;
			}
			return undefined;
		})
	});
};


/***/ }),

/***/ "c5Wh":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cTj0":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/assign/is-implemented.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "cdCt":
/*!***************************************************!*\
  !*** ./lib-commonjs/event/customEventPolyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customEventPolyfill = void 0;
function customEventPolyfill() {
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    var customEventKey = 'CustomEvent';
    if (typeof window[customEventKey] === 'function' ||
        // Safari
        (this.CustomEvent && this.CustomEvent.toString().indexOf('CustomEventConstructor') > -1)) {
        return;
    }
    // tslint:disable-next-line:no-any
    function customEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent(customEventKey); // tslint:disable-line:no-any
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    var genericEventKey = 'Event';
    customEvent.prototype = window[genericEventKey].prototype;
    window[customEventKey] = customEvent;
}
exports.customEventPolyfill = customEventPolyfill;


/***/ }),

/***/ "gXI/":
/*!*******************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "gw6s":
/*!*****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/keys/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "iGOl")() ? Object.keys : __webpack_require__(/*! ./shim */ "/DvU");


/***/ }),

/***/ "iGOl":
/*!**************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/keys/is-implemented.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "kGHh":
/*!*********************************!*\
  !*** ./lib-commonjs/url/URL.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is an incomplete implementation of a URL polyfill. These things are not supported, or not fully supported:
 *  - baseURLString constructor property
 *      This means that `new URL('http://contoso.com/path/to/something', 'http://fabrikam.com')` will not work,
 *        but the same thing can be accomplished with:
 *      const url = new new URL('http://contoso.com/path/to/something');
 *      url.host = 'fabrikam.com';
 *
 *  - Username
 *      The username property is not supported and will always return the empty string. Setting the username has
 *        no effect.
 *
 *  - Password
 *      The password property is not supported and will always return the empty string. Setting the password has
 *        no effect.
 *
 *  - Setting the pathname property with a value containing encoded values will double-encode the encoded values.
 *      For example. myUrl.pathname = "path%2Bto/resource.json" => myUrl.pathname === "/path%252Bto/resource.json"
 *      To set the pathname to a value that contains a special character, set it with the un-encoded character.
 *      The encoded "/" character (%2F) is not supported
 *
 * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/URL
 *
 * WhatWG Spec: https://url.spec.whatwg.org/
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseURL_1 = __webpack_require__(/*! ./BaseURL */ "vo8M");
var SPECIAL_SCHEMES_AND_PORTS = {
    'ftp:': '21',
    'gopher:': '70',
    'http:': '80',
    'https:': '443',
    'ws:': '80',
    'wss:': '443'
};
/**
 * Ensures the URL has a scheme
 */
function urlIsValid(url) {
    return !!url.match(/^.+\:/);
}
var URL = /** @class */ (function (_super) {
    __extends(URL, _super);
    function URL(url, baseURLString) {
        var _this = _super.call(this, url, baseURLString) || this;
        if (baseURLString) {
            throw new Error('baseURLString parameter is not supported by the URL polyfill.');
        }
        _this._shadowDocument = document.implementation.createHTMLDocument('');
        _this._innerAnchorElement = _this._shadowDocument.createElement('a');
        // Reassigning url from the <a> tag's href absolutizes it
        _this._innerAnchorElement.href = url;
        if (!urlIsValid(_this._innerAnchorElement.href)) {
            throw new TypeError('Invalid URL');
        }
        _this._initializeSearchParams();
        return _this;
    }
    Object.defineProperty(URL.prototype, "href", {
        get: function () {
            var result = this._innerAnchorElement.href;
            if (this._hashHashBeenCleared) {
                if (result.match(/\#$/)) {
                    result = result.substr(0, result.length - 1);
                }
                if (this._searchHasBeenCleared && result.match(/\?$/)) {
                    result = result.substr(0, result.length - 1);
                }
            }
            else if (this._searchHasBeenCleared) {
                var firstIndexOfHash = result.indexOf('#');
                if (firstIndexOfHash === -1) {
                    // No fragment
                    if (result.match(/\?$/)) {
                        result = result.substr(0, result.length - 1);
                    }
                }
                else if (result.charAt(firstIndexOfHash - 1) === '?') {
                    result = result.substring(0, firstIndexOfHash - 1) + result.substr(firstIndexOfHash);
                }
            }
            return result;
        },
        set: function (newValue) {
            if (!urlIsValid(newValue)) {
                throw new TypeError('Invalid URL');
            }
            this._invalidate();
            this._innerAnchorElement.href = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "origin", {
        get: function () {
            if (SPECIAL_SCHEMES_AND_PORTS.hasOwnProperty(this.protocol)) {
                if (!this.port || SPECIAL_SCHEMES_AND_PORTS[this.protocol] === this.port) {
                    // Standard port, don't serialize the port
                    return this.protocol + "//" + this._innerAnchorElement.hostname;
                }
                else {
                    // Non-standard port, serialize the port
                    return this.protocol + "//" + this._innerAnchorElement.hostname + ":" + this.port;
                }
            }
            else {
                return 'null';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "protocol", {
        get: function () {
            return this._innerAnchorElement.protocol;
        },
        set: function (newValue) {
            // Trim the trailing ":" and serialize "null" or "undefined" as a weird caveat of the spec
            var protocolMatches = ("" + newValue).match(/^([^\:]+):?$/);
            if (protocolMatches) {
                this._invalidate();
                this._innerAnchorElement.protocol = protocolMatches[1] + ":";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "username", {
        get: function () {
            return ''; // Not supported
        },
        set: function (newValue) {
            // Not supported
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "password", {
        get: function () {
            return ''; // Not supported
        },
        set: function (newValue) {
            // Not supported
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "host", {
        get: function () {
            return this._innerAnchorElement.host;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.host = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "hostname", {
        get: function () {
            return this._innerAnchorElement.hostname;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.hostname = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "port", {
        get: function () {
            return this._innerAnchorElement.port;
        },
        set: function (newValue) {
            this._invalidate();
            if (newValue) {
                this._innerAnchorElement.port = newValue;
            }
            else {
                this._innerAnchorElement.port = SPECIAL_SCHEMES_AND_PORTS[this.protocol] || newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "pathname", {
        get: function () {
            return this._innerAnchorElement.pathname;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.pathname = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "hash", {
        get: function () {
            return this._innerAnchorElement.hash;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.hash = '';
            // Trim the leading "#" and serialize "null" or "undefined" as a weird caveat of the spec
            var fragmentMatches = ("" + newValue).match(/^#?(.*)/);
            if (fragmentMatches && !!fragmentMatches[1]) {
                this._innerAnchorElement.hash = fragmentMatches[1];
                this._hashHashBeenCleared = false;
            }
            else {
                this._hashHashBeenCleared = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "_query", {
        get: function () {
            // tslint:disable-line:no-null-keyword
            return this._innerAnchorElement.search;
        },
        set: function (newValue) {
            // tslint:disable-line:no-null-keyword
            this._innerAnchorElement.search = '';
            if (!!newValue) {
                this._innerAnchorElement.search = newValue;
                this._searchHasBeenCleared = false;
            }
            else {
                this._searchHasBeenCleared = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    URL.prototype._invalidate = function () {
        /* empty */
    };
    return URL;
}(BaseURL_1.default));
exports.default = URL;


/***/ }),

/***/ "sxx9":
/*!***********************************************!*\
  !*** ./lib-commonjs/string/stringPolyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringPolyfill = void 0;
function stringPolyfill() {
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    // @ts-ignore Workaround the TypeScript check on `String.prototype.endsWith`
    if (!String.prototype.endsWith) {
        // @ts-ignore
        String.prototype.endsWith = function (search, thisLen) {
            if (thisLen === undefined || thisLen > this.length) {
                thisLen = this.length;
            }
            return this.substring(thisLen - search.length, thisLen) === search;
        };
    }
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
    // @ts-ignore Workaround the TypeScript check on `String.prototype.startsWith`
    if (!String.prototype.startsWith) {
        Object.defineProperty(String.prototype, 'startsWith', {
            value: function (search, pos) {
                pos = !pos || pos < 0 ? 0 : +pos;
                return this.substring(pos, pos + search.length) === search;
            },
            configurable: true
        });
    }
    // based on reference polyfill on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    // tslint:disable-next-line:no-any
    if (!String.prototype.includes) {
        Object.defineProperty(String.prototype, 'includes', {
            value: function (search, pos) {
                if (typeof pos !== 'number') {
                    pos = 0;
                }
                if (pos + search.length > this.length) {
                    return false;
                }
                else {
                    return this.indexOf(search, pos) !== -1;
                }
            },
            configurable: true
        });
    }
}
exports.stringPolyfill = stringPolyfill;


/***/ }),

/***/ "udjm":
/*!*****************************************!*\
  !*** ./lib-commonjs/es6-collections.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfill = void 0;
/* tslint:disable */
function polyfill() {
    var i;
    // shortcuts
    var defineProperty = Object.defineProperty, is = function (a, b) {
        return a === b || (a !== a && b !== b);
    };
    // Polyfill global objects
    if (typeof WeakMap == 'undefined') {
        // tslint:disable-next-line:no-any
        window.WeakMap = createCollection({
            // WeakMap#delete(key:void*):boolean
            delete: sharedDelete,
            // WeakMap#clear():
            clear: sharedClear,
            // WeakMap#get(key:void*):void*
            get: sharedGet,
            // WeakMap#has(key:void*):boolean
            has: mapHas,
            // WeakMap#set(key:void*, value:void*):void
            set: sharedSet
        }, true);
    }
    if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
        // tslint:disable-next-line:no-any
        window.Map = createCollection({
            // WeakMap#delete(key:void*):boolean
            delete: sharedDelete,
            // :was Map#get(key:void*[, d3fault:void*]):void*
            // Map#has(key:void*):boolean
            has: mapHas,
            // Map#get(key:void*):boolean
            get: sharedGet,
            // Map#set(key:void*, value:void*):void
            set: sharedSet,
            // Map#keys(void):Iterator
            keys: sharedKeys,
            // Map#values(void):Iterator
            values: sharedValues,
            // Map#entries(void):Iterator
            entries: mapEntries,
            // Map#forEach(callback:Function, context:void*):void ==> callback.call(context, key, value, mapObject) === not in specs`
            forEach: sharedForEach,
            // Map#clear():
            clear: sharedClear
        });
    }
    if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
        // tslint:disable-next-line:no-any
        window.Set = createCollection({
            // Set#has(value:void*):boolean
            has: setHas,
            // Set#add(value:void*):boolean
            add: sharedAdd,
            // Set#delete(key:void*):boolean
            delete: sharedDelete,
            // Set#clear():
            clear: sharedClear,
            // Set#keys(void):Iterator
            keys: sharedValues,
            // Set#values(void):Iterator
            values: sharedValues,
            // Set#entries(void):Iterator
            entries: setEntries,
            // Set#forEach(callback:Function, context:void*):void ==> callback.call(context, value, index) === not in specs
            forEach: sharedForEach
        });
    }
    if (typeof WeakSet == 'undefined') {
        // tslint:disable-next-line:no-any
        window.WeakSet = createCollection({
            // WeakSet#delete(key:void*):boolean
            delete: sharedDelete,
            // WeakSet#add(value:void*):boolean
            add: sharedAdd,
            // WeakSet#clear():
            clear: sharedClear,
            // WeakSet#has(value:void*):boolean
            has: setHas
        }, true);
    }
    /**
     * ES6 collection constructor
     * @return {Function} a collection class
     */
    function createCollection(proto, objectOnly) {
        if (objectOnly === void 0) { objectOnly = false; }
        function Collection(a) {
            // removed the condition (this.constructor !== Collection) in comparison with actual
            // github code. Because the constructor for core js polyfill of weakmap will not have
            // the same constructor as Collection and it will throw Out of stack exception error.
            if (!this) {
                // tslint:disable-next-line:no-any
                return new Collection(a);
            }
            this._keys = [];
            this._values = [];
            this._itp = []; // iteration pointers
            this.objectOnly = objectOnly;
            // parse initial iterable argument passed
            if (a) {
                init.call(this, a);
            }
        }
        // define size for non object-only collections
        if (!objectOnly) {
            defineProperty(proto, 'size', {
                get: sharedSize
            });
        }
        // set prototype
        proto.constructor = Collection;
        Collection.prototype = proto;
        return Collection;
    }
    /** parse initial iterable argument passed */
    function init(a) {
        var i;
        // init Set argument, like `[1,2,3,{}]`
        if (this.add) {
            a.forEach(this.add, this);
        }
        // init Map argument like `[[1,2], [{}, 4]]`
        else {
            a.forEach(function (a) {
                this.set(a[0], a[1]);
            }, this);
        }
    }
    /** delete */
    function sharedDelete(key) {
        if (this.has(key)) {
            this._keys.splice(i, 1);
            this._values.splice(i, 1);
            // update iteration pointers
            this._itp.forEach(function (p) {
                if (i < p[0]) {
                    p[0]--;
                }
            });
        }
        // Aurora here does it while Canary doesn't
        return -1 < i;
    }
    function sharedGet(key) {
        return this.has(key) ? this._values[i] : undefined;
    }
    function has(list, key) {
        if (this.objectOnly && key !== Object(key)) {
            throw new TypeError('Invalid value used as weak collection key');
        }
        // NaN or 0 passed
        if (key != key || key === 0) {
            for (i = list.length; i-- && !is(list[i], key);) { }
        }
        else {
            i = list.indexOf(key);
        }
        return -1 < i;
    }
    function setHas(value) {
        return has.call(this, this._values, value);
    }
    function mapHas(value) {
        return has.call(this, this._keys, value);
    }
    /** @chainable */
    function sharedSet(key, value) {
        this.has(key) ? (this._values[i] = value) : (this._values[this._keys.push(key) - 1] = value);
        return this;
    }
    /** @chainable */
    function sharedAdd(value) {
        if (!this.has(value)) {
            this._values.push(value);
        }
        return this;
    }
    function sharedClear() {
        (this._keys || 0).length = this._values.length = 0;
    }
    /** keys, values, and iterate related methods */
    function sharedKeys() {
        return sharedIterator(this._itp, this._keys);
    }
    function sharedValues() {
        return sharedIterator(this._itp, this._values);
    }
    function mapEntries() {
        return sharedIterator(this._itp, this._keys, this._values);
    }
    function setEntries() {
        return sharedIterator(this._itp, this._values, this._values);
    }
    function sharedIterator(itp, array, array2) {
        var p = [0], done = false;
        itp.push(p);
        return {
            next: function () {
                var v, k = p[0];
                if (!done && k < array.length) {
                    v = array2 ? [array[k], array2[k]] : array[k];
                    p[0]++;
                }
                else {
                    done = true;
                    itp.splice(itp.indexOf(p), 1);
                }
                return { done: done, value: v };
            }
        };
    }
    function sharedSize() {
        return this._values.length;
    }
    function sharedForEach(callback, context) {
        var it = this.entries();
        for (;;) {
            var r = it.next();
            if (r.done) {
                break;
            }
            callback.call(context, r.value[1], r.value[0], this);
        }
    }
}
exports.polyfill = polyfill;


/***/ }),

/***/ "vWap":
/*!****************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/type@1.2.0/node_modules/type/prototype/is.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "GjOh");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "vo8M":
/*!*************************************!*\
  !*** ./lib-commonjs/url/BaseURL.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var URLSearchParams_1 = __webpack_require__(/*! ./URLSearchParams */ "NzIA");
// 'window' isn't defined in mocha test
var currentWindowUrl = window.URL;
/**
 * This class contains functionality that is common between the smaller "URL" class and the experimental
 *  complete "URL" class.
 */
var BaseURL = /** @class */ (function () {
    function BaseURL(url, base) {
        /* empty */
    }
    // tslint:disable-next-line:no-any
    BaseURL.createObjectURL = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (currentWindowUrl.createObjectURL) {
            // Passthrough to the existing currentWindowUrl if the browser supports it
            return currentWindowUrl.createObjectURL.apply(window, args);
        }
        else {
            throw new Error('createObjectURL not supported');
        }
    };
    // tslint:disable-next-line:no-any
    BaseURL.revokeObjectURL = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (currentWindowUrl.revokeObjectURL) {
            // Passthrough to the existing revokeObjectURL if the browser supports it
            currentWindowUrl.revokeObjectURL.apply(window, args);
        }
        else {
            throw new Error('revokeObjectURL not supported');
        }
    };
    Object.defineProperty(BaseURL.prototype, "search", {
        get: function () {
            return this._query || '';
        },
        set: function (newValue) {
            this._invalidate();
            // Trim the leading "?" and serialize "null" or "undefined" as a weird caveat of the spec
            var queryMatches = ("" + newValue).match(/^\??(.*)/);
            if (queryMatches && !!queryMatches[1]) {
                this._query = queryMatches[1];
            }
            else {
                this._query = null; // tslint:disable-line:no-null-keyword
            }
            var existingSearchParams = this._searchParams.toString();
            if (existingSearchParams !== this.search && "?" + existingSearchParams !== this.search) {
                // Update searchParams
                this._searchParams._initialize(this.search); // tslint:disable-line:no-any
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseURL.prototype, "searchParams", {
        get: function () {
            return this._searchParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseURL.prototype, "searchparams", {
        // Need to include this because the TypeScript lib.d.ts typings have the incorrect case
        // Remove when the TS typings are fixed. VSO#339963
        get: function () {
            throw new Error('This function does not exist.');
        },
        enumerable: false,
        configurable: true
    });
    BaseURL.prototype.toJSON = function () {
        // Same behavior as "href"
        return this.href;
    };
    BaseURL.prototype._initializeSearchParams = function () {
        this._searchParams = new URLSearchParams_1.default(this.search);
        // Ensure searchParams has a pointer to this object.
        this._searchParams._url = this; // tslint:disable-line:no-any
    };
    return BaseURL;
}());
exports.default = BaseURL;


/***/ }),

/***/ "w+/8":
/*!************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/normalize-options.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "3AJo");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "yQpW":
/*!******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/object/assign/shim.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "gw6s")
  , value = __webpack_require__(/*! ../valid-value */ "J6uv")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "z05t":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/es5-ext@0.10.53/node_modules/es5-ext/function/noop.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "zYft":
/*!****************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/ext@1.4.0/node_modules/ext/global-this/implementation.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ is resolved with global context, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ })

/******/ })});;
//# sourceMappingURL=sp-polyfills_none.js.map