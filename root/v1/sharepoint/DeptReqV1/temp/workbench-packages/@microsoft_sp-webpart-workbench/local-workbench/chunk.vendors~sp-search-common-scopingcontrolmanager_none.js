(window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] = window["webpackJsonp_8502035a_8180_4e8d_9513_07d22f75b15c_0_1_0"] || []).push([["vendors~sp-search-common-scopingcontrolmanager"],{

/***/ "+klg":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-plugin-scoping-control-api@0.0.34_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-plugin-scoping-control-api/lib/index.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: deactivateScopingControl, configureScopingControl, setActiveScopeId, getActiveScopeId, getScopes, getConfiguration, subscribeToChange, releaseSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScopingControlAPI */ "Nfnc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deactivateScopingControl", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["deactivateScopingControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScopingControl", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["configureScopingControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActiveScopeId", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["setActiveScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveScopeId", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["getActiveScopeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScopes", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["getScopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["getConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToChange", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["subscribeToChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "releaseSubscription", function() { return _ScopingControlAPI__WEBPACK_IMPORTED_MODULE_0__["releaseSubscription"]; });


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxxQkFBcUIsQ0FBQyJ9

/***/ }),

/***/ "Nfnc":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@1js/search-plugin-scoping-control-api@0.0.34_react-native@0.63.4+react@16.9.0/node_modules/@1js/search-plugin-scoping-control-api/lib/ScopingControlAPI.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: configureScopingControl, deactivateScopingControl, setActiveScopeId, getActiveScopeId, getScopes, getConfiguration, subscribeToChange, releaseSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureScopingControl", function() { return configureScopingControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateScopingControl", function() { return deactivateScopingControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveScopeId", function() { return setActiveScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveScopeId", function() { return getActiveScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopes", function() { return getScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToChange", function() { return subscribeToChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseSubscription", function() { return releaseSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

var _instrumenter;
/**
 * We want to hide the usage of the instrumenter from the host app so that we later
 * can change the implementation without the host app having to adapt, e.g. when
 * removing the use of the instrumenter.
 *
 * @remarks
 * For any host app using OneShell with the search box, the instrumenter will always
 * be available on window once OneShell has finished initial loading
 *
 * ```ts
 * window.mssearchux.header
 * ```
 */
var getInstrumenter = function () {
    var _a, _b, _c;
    if (!_instrumenter) {
        /* tslint:disable-next-line:no-any */
        _instrumenter = (_c = (_b = (_a = window["mssearchux"]) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.getInstrumenter) === null || _c === void 0 ? void 0 : _c.call(_b);
    }
    return _instrumenter;
};
/**
 * Get the active scope for either what exists in the instrumenter, or via own
 * passed activeScopeId and scopes.
 *
 * @param ownActiveScopeId
 * @param ownScopes
 */
var getActiveScope = function (ownActiveScopeId, ownScopes) {
    var e_1, _a;
    var scopes = ownScopes || getScopes();
    var activeScopeId = ownActiveScopeId || getConfiguration().activeScopeId;
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(scopes || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var value = _c.value;
            if (value.id === activeScopeId) {
                return value;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return undefined;
};
/*
 * Sets the initial config to be used by the Scoping Control plugin and is
 * required for scoping control to work
 *
 * @param config
 * @param instrumenter
 */
var configureScopingControl = function (config, instrumenter) {
    var _a;
    if (instrumenter) {
        _instrumenter = instrumenter;
    }
    var instrumenterInstance = getInstrumenter();
    if (!instrumenterInstance) {
        return;
    }
    instrumenterInstance.setProps({
        hostAppInfo: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenterInstance.props.hostAppInfo), { scopeId: (_a = getActiveScope(config.activeScopeId, config.scopes)) === null || _a === void 0 ? void 0 : _a.searchBoxScopeId }),
        scopingControl: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config),
    });
};
/**
 * Safely deactivate the scoping control plugin
 *
 * @returns boolean
 */
var deactivateScopingControl = function () {
    var instrumenter = getInstrumenter();
    if (!instrumenter) {
        return false;
    }
    if (!instrumenter.props.scopingControl) {
        return true;
    }
    instrumenter.setProps({
        scopingControl: undefined,
    });
    return true;
};
/**
 * Programmatically set the current active scope by it's ID
 * and returns a boolean if the scope was changed successfully.
 *
 * @remarks
 * If the current list of scopes does not contain an ID which matches
 * the scope ID passed a false value will be returned.
 *
 * @param activeScopeId
 * @returns boolean if change was successful
 */
var setActiveScopeId = function (activeScopeId) {
    var _a, _b;
    var instrumenter = getInstrumenter();
    var scopeIds = (_a = getScopes()) === null || _a === void 0 ? void 0 : _a.map(function (scope) { return scope.id; });
    if (scopeIds && scopeIds.indexOf(activeScopeId) === -1) {
        return false;
    }
    instrumenter === null || instrumenter === void 0 ? void 0 : instrumenter.setProps({
        hostAppInfo: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.hostAppInfo), { scopeId: (_b = getActiveScope(activeScopeId)) === null || _b === void 0 ? void 0 : _b.searchBoxScopeId }),
        scopingControl: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instrumenter.props.scopingControl), { activeScopeId: activeScopeId }),
    });
    return true;
};
/**
 * Find out which scope is currently active
 *
 * @returns current active scope ID
 */
var getActiveScopeId = function () {
    var _a;
    return (_a = getConfiguration()) === null || _a === void 0 ? void 0 : _a.activeScopeId;
};
/**
 * Get list of available scopes
 *
 * @returns current list of available scopes which have been registered with Scoping Control
 */
var getScopes = function () {
    var _a;
    return (_a = getConfiguration()) === null || _a === void 0 ? void 0 : _a.scopes;
};
/**
 * Get Scoping Control configuration
 *
 * @returns current scoping control configuration
 */
var getConfiguration = function () {
    var _a;
    return (_a = getInstrumenter()) === null || _a === void 0 ? void 0 : _a.props.scopingControl;
};
/**
 * Subscribe to changes from Scoping Control
 *
 * @remarks
 * The subscriptionId should be used to un-subscribe listening
 * to changes on the instrumenter and prevent memory leaks in your app
 *
 * @param callback Called each time with Scoping Control data each time the plugin updates
 * @returns a string which is the id of the listener to use in un-subscribing
 * */
var subscribeToChange = function (callback) {
    var instrumenter = getInstrumenter();
    var subscriptionId = instrumenter === null || instrumenter === void 0 ? void 0 : instrumenter.register(function (data) {
        if (!data.scopingControl) {
            return;
        }
        callback(data.scopingControl);
    });
    return subscriptionId;
};
/**
 * Unsubscribes from the instrumenter
 *
 * @remarks
 * The subscriptionId should be used to un-subscribe listening
 * to changes on the instrumenter and prevent memory leaks in your app
 *
 * @param subscriptionId
 */
var releaseSubscription = function (subscriptionId) {
    var _a;
    subscriptionId && ((_a = getInstrumenter()) === null || _a === void 0 ? void 0 : _a.unregister(subscriptionId));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NvcGluZ0NvbnRyb2xBUEkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvU2NvcGluZ0NvbnRyb2xBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLElBQUksYUFBaUMsQ0FBQztBQUV0Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxJQUFNLGVBQWUsR0FBRzs7SUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNsQixxQ0FBcUM7UUFDckMsYUFBYSxxQkFBSSxNQUFjLENBQUMsWUFBWSxDQUFDLDBDQUFFLE1BQU0sMENBQUUsZUFBZSxrREFBSSxDQUFDO0tBQzVFO0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsSUFBTSxjQUFjLEdBQUcsVUFDckIsZ0JBQXlCLEVBQ3pCLFNBQWlDOztJQUVqQyxJQUFNLE1BQU0sR0FBRyxTQUFTLElBQUksU0FBUyxFQUFFLENBQUM7SUFDeEMsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUM7O1FBRTNFLEtBQW9CLElBQUEsS0FBQSxTQUFBLE1BQU0sSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7WUFBN0IsSUFBTSxLQUFLLFdBQUE7WUFDZCxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO2dCQUM5QixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7Ozs7Ozs7OztJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLFVBQ3JDLE1BQTRCLEVBQzVCLFlBQTZDOztJQUU3QyxJQUFJLFlBQVksRUFBRTtRQUNoQixhQUFhLEdBQUcsWUFBWSxDQUFDO0tBQzlCO0lBRUQsSUFBTSxvQkFBb0IsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUUvQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7UUFDekIs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

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-search-common-scopingcontrolmanager_[locale].js.map