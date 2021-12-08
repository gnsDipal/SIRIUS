(window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] = window["webpackJsonp_6da60671_741f_47c5_b35b_5078edaf312f_0_1_0"] || []).push([["sp-featurehostcontrol"],{

/***/ "/ZsA":
/*!*******************************************************!*\
  !*** ./lib/FeatureHostControl/loc/CoachmarkHost.resx ***!
  \*******************************************************/
/*! exports provided: CloseButtonAriaLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"CloseButtonAriaLabel\":\"[!!--##Ćĺōśē##--!!]\"}");

/***/ }),

/***/ "Mory":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!/agent/_work/1/s/common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./lib/FeatureHostControl/FeatureHostStyleOverrides.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js */ "5ADk")(false);
// Module
exports.push([module.i, ".a_a_6e28872b .ms-TeachingBubble-headline,.a_a_6e28872b .ms-TeachingBubble-subText{color:#fff!important}.a_a_6e28872b .ms-TeachingBubble-primaryButton{background-color:#fff!important;border-color:#fff!important}.a_a_6e28872b .ms-TeachingBubble-primaryButton .ms-Button-label{color:#0078d4!important}", ""]);


/***/ }),

/***/ "RSAw":
/*!***********************************************!*\
  !*** ./lib/FeatureHostControl/FeatureHost.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react_lib_Coachmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Coachmark */ "K9K9");
/* harmony import */ var office_ui_fabric_react_lib_TeachingBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/TeachingBubble */ "rpLR");
/* harmony import */ var _loc_CoachmarkHost_resx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/CoachmarkHost.resx */ "/ZsA");
var _loc_CoachmarkHost_resx__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/CoachmarkHost.resx */ "/ZsA", 1);
/* harmony import */ var _FeatureHostStyleOverrides_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureHostStyleOverrides.module.scss */ "qJiu");






var FeatureHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FeatureHost, _super);
    function FeatureHost(props) {
        return _super.call(this, props) || this;
    }
    FeatureHost.prototype.render = function () {
        if (this.props.type === "Coachmark" /* Coachmark */) {
            return this.renderCoachmark();
        }
        else if (this.props.type === "TeachingBubble" /* TeachingBubble */) {
            return this.renderTeachingBubble();
        }
        else {
            return undefined;
        }
    };
    FeatureHost.prototype.componentDidMount = function () {
        var onDidMount = this.props.onDidMount;
        if (onDidMount) {
            onDidMount();
        }
    };
    FeatureHost.prototype.renderCoachmark = function () {
        var _a = this
            .props, content = _a.content, onBeforeDismiss = _a.onBeforeDismiss, target = _a.target, teachingBubbleProps = _a.teachingBubbleProps;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Coachmark__WEBPACK_IMPORTED_MODULE_2__["Coachmark"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { target: target }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _FeatureHostStyleOverrides_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bodyOverride },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_TeachingBubble__WEBPACK_IMPORTED_MODULE_3__["TeachingBubbleContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, teachingBubbleProps, { closeButtonAriaLabel: _loc_CoachmarkHost_resx__WEBPACK_IMPORTED_MODULE_4__["CloseButtonAriaLabel"], hasCloseIcon: true, hasCondensedHeadline: true, isWide: false, onDismiss: onBeforeDismiss, targetElement: teachingBubbleProps.targetElement || target }), content))));
    };
    FeatureHost.prototype.renderTeachingBubble = function () {
        var _a = this
            .props, calloutProps = _a.calloutProps, content = _a.content, onBeforeDismiss = _a.onBeforeDismiss, targetElement = _a.targetElement;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _FeatureHostStyleOverrides_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bodyOverride },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_TeachingBubble__WEBPACK_IMPORTED_MODULE_3__["TeachingBubble"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { calloutProps: calloutProps, closeButtonAriaLabel: _loc_CoachmarkHost_resx__WEBPACK_IMPORTED_MODULE_4__["CloseButtonAriaLabel"], onDismiss: onBeforeDismiss, targetElement: targetElement }), content)));
    };
    return FeatureHost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FeatureHost);


/***/ }),

/***/ "brtj":
/*!******************************************************!*\
  !*** ./lib/FeatureHostControl/FeatureHostControl.js ***!
  \******************************************************/
/*! exports provided: default, nonFocusDefaultPropsKSActive, allowLiteDismissKSActive, allFeaturesEnabled, avoidDetachedTargetKSActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonFocusDefaultPropsKSActive", function() { return nonFocusDefaultPropsKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowLiteDismissKSActive", function() { return allowLiteDismissKSActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFeaturesEnabled", function() { return allFeaturesEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avoidDetachedTargetKSActive", function() { return avoidDetachedTargetKSActive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeatureHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureHost */ "RSAw");
/* harmony import */ var _ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-mysitecache */ "ZVdo");
/* harmony import */ var _ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_6__);







/**
 * ONLY ONE Coachmark/Teaching bubble on screen at a time!
 * Feature hosts(Coachmark, TeachingBubble, etc) are therefore stored in a map,
 * grouped by the user defined group key. So new rendering request will be
 * processed on a first come first served basis while ensuring items in the
 * same group will always be shown continously. New requests will be prioritized
 * if its key is the same as the currently displayed
 */
var FeatureHostControl = /** @class */ (function () {
    function FeatureHostControl() {
        this._cacheEnabled = false;
        this._featureGroups = new Map();
        this._featureKeys = this._featureGroups.keys();
        this._cacheEnabled = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPFlight"].isEnabled(1348 /* CoachmarksWithLKG */);
    }
    Object.defineProperty(FeatureHostControl, "instance", {
        get: function () {
            // Lazy initialize the singleton
            if (this._instance === undefined) {
                this._instance = new FeatureHostControl();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureHostControl.prototype, "mySiteCacheManager", {
        get: function () {
            if (this._mySiteCacheManager === undefined) {
                this._mySiteCacheManager = this.serviceScope.consume(_ms_sp_mysitecache__WEBPACK_IMPORTED_MODULE_6__["mySiteCacheManagerServiceKey"]);
                this._mySiteCacheManager.setCacheConfiguration({
                    folderPath: FeatureHostControl.MYSITE_CACHE_PATH
                });
            }
            return this._mySiteCacheManager;
        },
        enumerable: true,
        configurable: true
    });
    FeatureHostControl.prototype.attachFeatureHost = function (hostProps) {
        var _this = this;
        if (!this._cacheEnabled) {
            return this.attachFeatureHostOriginal(hostProps);
        }
        if (this._isValid(hostProps)) {
            if (!hostProps.localStorageKey) {
                hostProps.localStorageKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString();
            }
            this._getMySiteCachePromise
                .then(function (result) {
                var _a;
                if (result && ((_a = result) === null || _a === void 0 ? void 0 : _a.value)) {
                    _this._cacheResultMap = new Map();
                    result.value.forEach(function (value) {
                        _this._writeToLocalStorage(value.CacheKey, JSON.parse(value.CacheValue).version);
                    });
                    if (_this._cacheQosMonitor) {
                        _this._cacheQosMonitor.writeSuccess();
                    }
                }
                if (!_this._hostElem) {
                    // render and set active feature host element
                    _this._renderFeatureHost(hostProps);
                }
                else {
                    _this._addToFeatureMap(hostProps);
                }
            })
                .catch(function (error) {
                _this._cacheResultMap = undefined;
                if (_this._cacheQosMonitor) {
                    _this._cacheQosMonitor.writeUnexpectedFailure('UnableToReadCache');
                }
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(FeatureHostControl._logSource, error);
            });
            return hostProps.localStorageKey;
        }
        return undefined;
    };
    FeatureHostControl.prototype.attachFeatureHostOriginal = function (hostProps) {
        if (this._isValid(hostProps)) {
            if (!this._hostElem) {
                // render and set active feature host element
                return this._renderFeatureHost(hostProps);
            }
            else {
                return this._addToFeatureMap(hostProps);
            }
        }
        return undefined;
    };
    FeatureHostControl.prototype.dismissFeatureHost = function (localStorageKey, shouldSetLocalStorageKey) {
        if (shouldSetLocalStorageKey === void 0) { shouldSetLocalStorageKey = true; }
        if (this._activeKey === localStorageKey) {
            this._dismissFeatureHost(shouldSetLocalStorageKey);
        }
    };
    FeatureHostControl.prototype.clearFeatureHosts = function () {
        if (this._activeKey) {
            this._dismissFeatureHost(false /* shouldSetLocalStorageKey */);
        }
        // reset feature groups
        this._featureGroups = new Map();
        this._featureKeys = this._featureGroups.keys();
    };
    FeatureHostControl.prototype.normalizeCoachmarkHostProps = function (origHostProps) {
        var nonFocusProps = {};
        if (!nonFocusDefaultPropsKSActive()) {
            nonFocusProps = {
                preventFocusOnMount: true,
                positioningContainerProps: {
                    setInitialFocus: false
                }
            };
        }
        var hostProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nonFocusProps), origHostProps);
        hostProps.version = hostProps.version || FeatureHostControl.DEFAULT_VERSION;
        hostProps.type = hostProps.type || "Coachmark" /* Coachmark */;
        return hostProps;
    };
    FeatureHostControl.prototype.normalizeTeachingBubbleProps = function (origHostProps) {
        var hostProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origHostProps);
        hostProps.version = hostProps.version || FeatureHostControl.DEFAULT_VERSION;
        hostProps.type = hostProps.type || "TeachingBubble" /* TeachingBubble */;
        return hostProps;
    };
    Object.defineProperty(FeatureHostControl.prototype, "serviceScope", {
        get: function () {
            return this._serviceScope;
        },
        set: function (serviceScope) {
            if (!this._serviceScope) {
                this._serviceScope = serviceScope;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureHostControl.prototype, "_getMySiteCachePromise", {
        get: function () {
            if (!this._cacheResultMap) {
                this._cacheQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"]('CoachmarkUtility.GetMySiteCache');
                return this.mySiteCacheManager.getCachedDataByFolder(FeatureHostControl.MYSITE_CACHE_PATH);
            }
            else {
                return Promise.resolve(undefined);
            }
        },
        enumerable: true,
        configurable: true
    });
    FeatureHostControl.prototype._isValid = function (hostProps) {
        if (allFeaturesEnabled()) {
            return true;
        }
        /**
         * The attach call should be ignored if:
         * 1. Found that newer/current version already dismissed in LocalStorage
         * 2. An instance with the same localStorageKey is being displayed
         */
        var isValid = false;
        if (hostProps.localStorageKey) {
            var dismissedVersionString = window.localStorage.getItem(hostProps.localStorageKey) || '0.0';
            var currentVersion = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(hostProps.version);
            try {
                // Already dismissed coachmarks will have integer 1 instead of 1.0 in localstorage causing Version exception
                var dismissedVersion = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(dismissedVersionString);
                isValid = dismissedVersion.lessThan(currentVersion) && this._activeKey !== hostProps.localStorageKey;
                if (this._cacheEnabled &&
                    !isValid &&
                    this._cacheResultMap &&
                    !this._cacheResultMap.has(hostProps.localStorageKey)) {
                    // Write localStorage to mySiteCache if a value is found locally but not on cache
                    // Meaning that it has been dismissed before cache is enabled
                    this._markFeatureCompletion(hostProps.localStorageKey, dismissedVersionString);
                }
            }
            catch (_a) {
                // Force display to correct localStorage value
                isValid = true;
            }
        }
        if (hostProps.displayEvaluator) {
            isValid = hostProps.displayEvaluator() || isValid;
        }
        return isValid;
    };
    FeatureHostControl.prototype._renderFeatureHost = function (hostProps) {
        var _a;
        if (this._isValid(hostProps)) {
            var coachmarkElement = document.createElement('div');
            if (hostProps.layerElement) {
                // set inline style for container element if doNotLayer to correct display width
                coachmarkElement.style.width = '100%';
                coachmarkElement.style.position = 'absolute';
                hostProps.layerElement.appendChild(coachmarkElement);
            }
            this._activeKey = hostProps.localStorageKey || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString();
            this._activeVersion = (_a = hostProps.version) === null || _a === void 0 ? void 0 : _a.toString();
            this._hostElem = coachmarkElement;
            this._currentGroupKey = hostProps.featureGroupKey || '';
            if (hostProps.type === "Coachmark" /* Coachmark */) {
                this._renderCoachmark(hostProps);
            }
            else if (hostProps.type === "TeachingBubble" /* TeachingBubble */) {
                this._renderTeachingBubble(hostProps);
            }
            return this._activeKey;
        }
        return undefined;
    };
    FeatureHostControl.prototype._renderCoachmark = function (hostProps) {
        var _this = this;
        var _a;
        var coachmark = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FeatureHost__WEBPACK_IMPORTED_MODULE_5__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hostProps), { onBeforeDismiss: function (ev) {
                if (hostProps.onBeforeDismiss) {
                    hostProps.onBeforeDismiss(ev);
                }
                var shouldSetLocalStorageKey = !allowLiteDismissKSActive()
                    ? hostProps.displayEvaluator === undefined
                    : true;
                _this._dismissFeatureHost(shouldSetLocalStorageKey, ev);
            } }));
        if (this._hostElem && (avoidDetachedTargetKSActive() || ((_a = document.body) === null || _a === void 0 ? void 0 : _a.contains(hostProps.target)))) {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](coachmark, this._hostElem);
        }
    };
    FeatureHostControl.prototype._renderTeachingBubble = function (hostProps) {
        var _this = this;
        var _a;
        var teachingBubble = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FeatureHost__WEBPACK_IMPORTED_MODULE_5__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hostProps), { onBeforeDismiss: function (ev) {
                if (hostProps.onBeforeDismiss) {
                    hostProps.onBeforeDismiss(ev);
                }
                var shouldSetLocalStorageKey = !allowLiteDismissKSActive()
                    ? hostProps.displayEvaluator === undefined
                    : true;
                _this._dismissFeatureHost(shouldSetLocalStorageKey, ev);
            } }));
        if (this._hostElem &&
            (avoidDetachedTargetKSActive() || ((_a = document.body) === null || _a === void 0 ? void 0 : _a.contains(hostProps.targetElement)))) {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](teachingBubble, this._hostElem);
        }
    };
    Object.defineProperty(FeatureHostControl.prototype, "_nextFeatureInMap", {
        get: function () {
            var _a;
            var currentGroup = this._featureGroups.get(this._currentGroupKey);
            if (currentGroup) {
                if (currentGroup.length > 0) {
                    // retrieve the first item from current group
                    return currentGroup.shift();
                }
                else {
                    this._featureGroups.delete(this._currentGroupKey);
                }
            }
            // go to next group
            this._currentGroupKey = this._featureKeys.next().value;
            if (this._currentGroupKey) {
                return (_a = this._featureGroups.get(this._currentGroupKey)) === null || _a === void 0 ? void 0 : _a.shift();
            }
            else {
                // iterator is empty, restart
                this._featureKeys = this._featureGroups.keys();
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    FeatureHostControl.prototype._addToFeatureMap = function (hostProps) {
        var _a;
        // push to queue if already an active one
        var featureGroupKey = hostProps.featureGroupKey || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString();
        var currentGroup = this._featureGroups.get(featureGroupKey);
        if (!currentGroup) {
            // add a new feature group if key is not found
            this._featureGroups.set(featureGroupKey, []);
            currentGroup = this._featureGroups.get(featureGroupKey);
        }
        if (!allowLiteDismissKSActive() && !hostProps.localStorageKey) {
            hostProps.localStorageKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid().toString();
        }
        // push the hostProps into existing group
        (_a = currentGroup) === null || _a === void 0 ? void 0 : _a.push(hostProps);
        return !allowLiteDismissKSActive()
            ? hostProps.localStorageKey
            : "" + featureGroupKey + (hostProps.localStorageKey || '');
    };
    FeatureHostControl.prototype._dismissFeatureHost = function (shouldSetLocalStorageKey, ev) {
        if (!this._hostElem) {
            return;
        }
        if (shouldSetLocalStorageKey && (!ev || ev.type !== 'scroll')) {
            // shouldSetLocalStorageKey as false will not set the local storage key.
            // Dismissing by scrolling doesn't set localstorage flag when shouldSetLocalStorageKey is true.
            var localStorageKey = this._activeKey;
            var versionString = this._activeVersion;
            if (localStorageKey && versionString) {
                if (this._cacheEnabled) {
                    this._markFeatureCompletion(localStorageKey, versionString);
                }
                else {
                    this._writeToLocalStorage(localStorageKey, versionString);
                }
            }
        }
        if (react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](this._hostElem)) {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this._hostElem);
            this._hostElem = undefined;
            this._activeKey = undefined;
            this._activeVersion = undefined;
        }
        var nextFeatureHost = this._nextFeatureInMap;
        if (nextFeatureHost) {
            this._renderFeatureHost(nextFeatureHost);
        }
    };
    FeatureHostControl.prototype._writeToLocalStorage = function (key, value) {
        var _a;
        (_a = this._cacheResultMap) === null || _a === void 0 ? void 0 : _a.set(key, value);
        try {
            window.localStorage.setItem(key, value);
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_TraceLogger"].logError(FeatureHostControl._logSource, error, 'CoachmarkUtility.localStorageSetItem');
        }
    };
    FeatureHostControl.prototype._markFeatureCompletion = function (storageKey, versionString) {
        this._writeToLocalStorage(storageKey, versionString);
        var writeCacheQosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_QosMonitor"]('CoachmarkUtility.WriteMySiteCache');
        this.mySiteCacheManager
            .setCachedData(storageKey, {
            version: versionString,
            lastDismissedTime: new Date().toISOString()
        }, undefined /* cacheOptions */)
            .then(function () {
            writeCacheQosMonitor.writeSuccess();
        })
            .catch(function (error) {
            writeCacheQosMonitor.writeUnexpectedFailure('UnabledToWriteCache', error);
        });
    };
    FeatureHostControl._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_4__["_LogSource"].create('CoachmarkUtility');
    FeatureHostControl.MYSITE_CACHE_PATH = 'FRE_Cached_Data';
    FeatureHostControl.DEFAULT_VERSION = '1.0';
    return FeatureHostControl;
}());
/* harmony default export */ __webpack_exports__["default"] = (FeatureHostControl);
function nonFocusDefaultPropsKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('10c06d62-83a9-4ac3-95d8-c72669f8a01b'
    /* '8/9/2019', 'nonFocusDefaultProps' */
    );
}
function allowLiteDismissKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('5d49a621-f361-4266-b428-06653e58bc69'
    /* '4/3/2020', 'allowLiteDismiss' */
    );
}
function allFeaturesEnabled() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('515f53e3-a760-4874-af2a-7dd390ffb239'
    /* 8/3/2020 , 'debug value to enabled all callouts' */
    );
}
function avoidDetachedTargetKSActive() {
    return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["_SPKillSwitch"].isActivated('8718291d-e813-4796-9277-356b6b363fa2'
    /* 8/23/2020 , 'avoid rendering coachmark on detached target' */
    );
}


/***/ }),

/***/ "qJiu":
/*!*************************************************************************!*\
  !*** ./lib/FeatureHostControl/FeatureHostStyleOverrides.module.scss.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./FeatureHostStyleOverrides.module.css */ "tl6t");
var styles = {
    bodyOverride: 'a_a_6e28872b'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "tl6t":
/*!*********************************************************************!*\
  !*** ./lib/FeatureHostControl/FeatureHostStyleOverrides.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/cjs.js!../../../../common/temp/node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./FeatureHostStyleOverrides.module.css */ "Mory");
var loader = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

}]);
//# sourceMappingURL=chunk.sp-featurehostcontrol_[locale].js.map