(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([[2],{

/***/ "0ve4":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useAsync.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConst */ "SKm6");



/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
function useAsync() {
    var async = Object(_useConst__WEBPACK_IMPORTED_MODULE_2__["useConst"])(function () { return new _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Async"](); });
    // Function that returns a function in order to dispose the async instance on unmount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}
//# sourceMappingURL=useAsync.js.map

/***/ }),

/***/ "33JT":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/version.js ***!
  \***********************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/react-hooks', '7.13.8');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "5GBt":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useTarget.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: useTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return useTarget; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-window-provider */ "uuEG");



/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
function useTarget(target, hostElement) {
    var _a;
    var previousTargetProp = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var targetRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__["useWindow"])();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = (_a = hostElement) === null || _a === void 0 ? void 0 : _a.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}
//# sourceMappingURL=useTarget.js.map

/***/ }),

/***/ "DA5T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useWarnings.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return useWarnings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/warn */ "k11K");
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConst */ "SKm6");





var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (true) {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
        var componentId = Object(_useConst__WEBPACK_IMPORTED_MODULE_4__["useConst"])(function () { return "useWarnings_" + warningId++; });
        var oldProps = Object(_usePrevious__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warn"])(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnConditionallyRequiredProps"])(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(name_1, props, deprecations);
            mutuallyExclusive && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
//# sourceMappingURL=useWarnings.js.map

/***/ }),

/***/ "ED3/":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetInterval.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useSetInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return useSetInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
var useSetInterval = function () {
    var intervalIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(intervalIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearInterval(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [intervalIds]);
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setInterval: function (func, duration) {
            var id = setInterval(func, duration);
            intervalIds[id] = 1;
            return id;
        },
        clearInterval: function (id) {
            delete intervalIds[id];
            clearInterval(id);
        },
    });
};
//# sourceMappingURL=useSetInterval.js.map

/***/ }),

/***/ "KjqC":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetTimeout.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useSetTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return useSetTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
 */
var useSetTimeout = function () {
    var timeoutIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    // Cleanup function.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(timeoutIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearTimeout(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [timeoutIds]);
    // Return wrapper which will auto cleanup.
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setTimeout: function (func, duration) {
            var id = setTimeout(func, duration);
            timeoutIds[id] = 1;
            return id;
        },
        clearTimeout: function (id) {
            delete timeoutIds[id];
            clearTimeout(id);
        },
    });
};
//# sourceMappingURL=useSetTimeout.js.map

/***/ }),

/***/ "Lbeb":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return WindowContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return useWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return useDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return WindowProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context for providing the window.
 */
var WindowContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WindowContext.Provider, { value: props }, props.children);
};
//# sourceMappingURL=WindowProvider.js.map

/***/ }),

/***/ "S37p":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useOnEvent.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useOnEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return useOnEvent; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
function useOnEvent(element, eventName, callback, useCapture) {
    // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
    var callbackRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](callback);
    callbackRef.current = callback;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var actualElement = element && 'current' in element ? element.current : element;
        if (!actualElement) {
            return;
        }
        var dispose = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["on"])(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
        return dispose;
    }, [element, eventName, useCapture]);
}
//# sourceMappingURL=useOnEvent.js.map

/***/ }),

/***/ "SKm6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConst.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return useConst; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
function useConst(initialValue) {
    // Use useRef to store the value because it's the least expensive built-in hook that works here
    // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive
    // internally due to reducer handling which we don't need)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (ref.current === undefined) {
        // Box the value in an object so we can tell if it's initialized even if the initializer
        // returns/is undefined
        ref.current = {
            value: typeof initialValue === 'function' ? initialValue() : initialValue,
        };
    }
    return ref.current.value;
}
//# sourceMappingURL=useConst.js.map

/***/ }),

/***/ "TbFi":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getId.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/getId.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "Z1Bs":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useForceUpdate.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to force update a function component by updating a dummy state.
 */
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    var forceUpdate = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return setValue(function (value) { return ++value; }); }; });
    return forceUpdate;
}
//# sourceMappingURL=useForceUpdate.js.map

/***/ }),

/***/ "aBU9":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/usePrevious.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
function usePrevious(value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = value;
    });
    return ref.current;
}
//# sourceMappingURL=usePrevious.js.map

/***/ }),

/***/ "cB7q":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useRefEffect.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: useRefEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return useRefEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a ref, and calls a callback whenever the ref changes to a non-null value. The callback can optionally return
 * a cleanup function that'll be called before the value changes, and when the ref is unmounted.
 *
 * This can be used to work around a limitation that useEffect cannot depend on `ref.current` (see
 * https://github.com/facebook/react/issues/14387#issuecomment-503616820).
 *
 * Usage example:
 * ```ts
 * const myRef = useRefEffect<HTMLElement>(element => {
 *  ...
 *  return () => { ... cleanup ... };
 * });
 * ```
 * ```jsx
 * <div ref={myRef} />
 * ```
 *
 * @param callback - Called whenever the ref's value changes to non-null. Can optionally return a cleanup function.
 * @param initial - (Optional) The initial value for the ref.
 *
 * @returns A function that should be called to set the ref's value. The object also has a `.current` member that can be
 * used to access the ref's value (like a normal RefObject). It can be hooked up to an element's `ref` property.
 */
function useRefEffect(callback, initial) {
    if (initial === void 0) { initial = null; }
    var data = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        ref: Object.assign(function (value) {
            if (data.ref.current !== value) {
                if (data.cleanup) {
                    data.cleanup();
                    data.cleanup = undefined;
                }
                data.ref.current = value;
                if (value !== null) {
                    data.cleanup = data.callback(value);
                }
            }
        }, {
            current: initial,
        }),
        callback: callback,
    }).current;
    data.callback = callback;
    return data.ref;
}
//# sourceMappingURL=useRefEffect.js.map

/***/ }),

/***/ "cuTR":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useId.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities/lib/getId */ "TbFi");
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](providedId);
    if (!ref.current) {
        ref.current = Object(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__["getId"])(prefix);
    }
    return ref.current;
}
//# sourceMappingURL=useId.js.map

/***/ }),

/***/ "k11K":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/warn.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "miSs":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useBoolean.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return useBoolean; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialState), value = _a[0], setValue = _a[1];
    // Storing the value in a ref is redundant but allows the `toggle` callback to have a
    // constant identity, which overall is probably better for consumers' perf.
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](value);
    var setTrue = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(true);
        valueRef.current = true;
    }; });
    var setFalse = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(false);
        valueRef.current = false;
    }; });
    var toggle = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return (valueRef.current ? setFalse() : setTrue()); }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map

/***/ }),

/***/ "nL6P":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConstCallback.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: useConstCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return useConstCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated Deprecated due to potential for misuse (see package readme).
 * Use `React.useCallback` instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useConstCallback(callback) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = callback;
    }
    return ref.current;
}
//# sourceMappingURL=useConstCallback.js.map

/***/ }),

/***/ "ngOG":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useControllableValue.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: useControllableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return useControllableValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


function useControllableValue(controlledValue, defaultUncontrolledValue, onChange) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultUncontrolledValue), value = _a[0], setValue = _a[1];
    var isControlled = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(controlledValue !== undefined);
    var currentValue = isControlled ? controlledValue : value;
    // Duplicate the current value and onChange in refs so they're accessible from
    // setValueOrCallOnChange without creating a new callback every time
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](currentValue);
    var onChangeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](onChange);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        valueRef.current = currentValue;
        onChangeRef.current = onChange;
    });
    // To match the behavior of the setter returned by React.useState, this callback's identity
    // should never change. This means it MUST NOT directly reference variables that can change.
    var setValueOrCallOnChange = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function (update, ev) {
        // Assuming here that TValue is not a function, because a controllable value will typically
        // be something a user can enter as input
        var newValue = typeof update === 'function' ? update(valueRef.current) : update;
        if (onChangeRef.current) {
            onChangeRef.current(ev, newValue);
        }
        if (!isControlled) {
            setValue(newValue);
        }
    }; });
    return [currentValue, setValueOrCallOnChange];
}
//# sourceMappingURL=useControllableValue.js.map

/***/ }),

/***/ "uuEG":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowProvider */ "Lbeb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowProvider"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "v+W9":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useAsync, useBoolean, useConst, useConstCallback, useControllableValue, useForceUpdate, useId, useMergedRefs, useOnEvent, usePrevious, useRefEffect, useSetInterval, useSetTimeout, useTarget, useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "33JT");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "0ve4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_1__["useAsync"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBoolean */ "miSs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_2__["useBoolean"]; });

/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConst */ "SKm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return _useConst__WEBPACK_IMPORTED_MODULE_3__["useConst"]; });

/* harmony import */ var _useConstCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConstCallback */ "nL6P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return _useConstCallback__WEBPACK_IMPORTED_MODULE_4__["useConstCallback"]; });

/* harmony import */ var _useControllableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useControllableValue */ "ngOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return _useControllableValue__WEBPACK_IMPORTED_MODULE_5__["useControllableValue"]; });

/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useForceUpdate */ "Z1Bs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useForceUpdate"]; });

/* harmony import */ var _useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useId */ "cuTR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return _useId__WEBPACK_IMPORTED_MODULE_7__["useId"]; });

/* harmony import */ var _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergedRefs */ "xzES");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__["useMergedRefs"]; });

/* harmony import */ var _useOnEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useOnEvent */ "S37p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return _useOnEvent__WEBPACK_IMPORTED_MODULE_9__["useOnEvent"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"]; });

/* harmony import */ var _useRefEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useRefEffect */ "cB7q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return _useRefEffect__WEBPACK_IMPORTED_MODULE_11__["useRefEffect"]; });

/* harmony import */ var _useSetInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useSetInterval */ "ED3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return _useSetInterval__WEBPACK_IMPORTED_MODULE_12__["useSetInterval"]; });

/* harmony import */ var _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useSetTimeout */ "KjqC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__["useSetTimeout"]; });

/* harmony import */ var _useTarget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useTarget */ "5GBt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return _useTarget__WEBPACK_IMPORTED_MODULE_14__["useTarget"]; });

/* harmony import */ var _useWarnings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useWarnings */ "DA5T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return _useWarnings__WEBPACK_IMPORTED_MODULE_15__["useWarnings"]; });

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xzES":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useMergedRefs.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useMergedRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return useMergedRefs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var mergedCallback = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) {
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(refs));
    return mergedCallback;
}
//# sourceMappingURL=useMergedRefs.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.2_[locale].js.map