define("5f4cceb9-6310-47e8-85d4-8149fc59b546_0.1.0", ["tslib","@ms/sp-telemetry","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "0Obm":
/*!*************************************************!*\
  !*** ./lib/viewPortUtilities/ViewPortLogger.js ***!
  \*************************************************/
/*! exports provided: ViewPortLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPortLogger", function() { return ViewPortLogger; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);

var ViewPortLogger = /** @class */ (function () {
    function ViewPortLogger() {
    }
    ViewPortLogger.isComponentWebPart = function (id) {
        return id.indexOf('WebPart.') === 0;
    };
    ViewPortLogger.onComponentReleased = function (id) {
        if (!ViewPortLogger.isComponentWebPart(id)) {
            // Mark start for non-web-part components. Web parts are automatically marked by web part host.
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].startMarkForComponent(id);
        }
    };
    ViewPortLogger.onComponentEnd = function (id) {
        if (!ViewPortLogger.isComponentWebPart(id)) {
            // Mark end for non-web-part components. Web parts are automatically marked by web part host.
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].endMarkForComponent(id);
        }
    };
    ViewPortLogger.onViewPortRendered = function () {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].measurePreloadImageUsage();
    };
    ViewPortLogger.onRegistrationFinish = function () {
        // Here it means all web parts in view port are added instead of all web parts are added because allWebPartsAdded
        // is the name of an old perf property and we want to keep using it to ensure metrics on dashboard still correct.
        // allWebPartsAdded property is used to calculate following two perf metrics.
        // pageLoad = allWebPartsAdded - appStart
        // WebPartRender = EUPL - allWebPartsAdded.
        // In new view port loader logic, we no longer wait for all web parts to start loading before actually rendering.
        // So marking the property at the time when web part logic start working will keep `pageLoad` and `WebPartRender`
        // the same meaning as before.
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].setPerformanceProperty(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].allWebPartsAddedKey, _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].now());
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].allWebPartsAddedKey);
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].measureSpeedOfLight();
    };
    ViewPortLogger.addComponentToEUPL = function (id) {
        // This is a temporary hack to remove page level components below canvas from EUPL calculation.
        // Because the old view port loader is not counting them as well, we want to compare the metrics
        // apple to apple so we know the improvements/regressions without bias.
        // We should in future remove this hack and let EUPL reports what are actually inside view port.
        // VSO#889878 Adding page components (recommended items, social, etc) to EUPL if necessary.
        // VSO#858690 Adding workarounds when opt-in social bar, comments, and footer.
        var shouldSkipAddingToEUPl = id.indexOf('RecommendedItemsWebPart') > -1 || id.indexOf('Page.') === 0;
        if (!shouldSkipAddingToEUPl) {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].addComponent(id);
        }
        else {
            // For components that are in viewport but skipped, log a special breakdown marker so we can know
            // later from queries how often the component is in viewport.
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].addComponentBreakdown(id, 'inViewPortReleaseIgnored', _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].now());
        }
    };
    return ViewPortLogger;
}());



/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "5HNb":
/*!**************************************!*\
  !*** ./lib/viewPortManager/index.js ***!
  \**************************************/
/*! exports provided: ViewPortManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPortManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPortManager */ "VW4d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPortManager", function() { return _ViewPortManager__WEBPACK_IMPORTED_MODULE_0__["ViewPortManager"]; });




/***/ }),

/***/ "6N9o":
/*!**********************************************!*\
  !*** ./lib/viewPortLoader/ViewportLoader.js ***!
  \**********************************************/
/*! exports provided: ViewportLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportLoader", function() { return ViewportLoader; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smoothTasksQueue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smoothTasksQueue */ "WSQ/");
/* harmony import */ var _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewPortUtilities */ "y/ZY");
/* harmony import */ var _ViewPortObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewPortObserver */ "jvM4");
// Copyright (c) Microsoft. All rights reserved.





var INTERSECTION_OBSERVER = 'IntersectionObserver';
/**
 * Class that helps lazy loading of components. This class centrally manages
 * registered components to be rendered lazily when in the viewport, i.e. Components
 * that are not in the viewport will not be rendered on the initial load. They will
 * be rendered only when the user scrolls to the component. This class manages the
 * scroll/resize event handling and notification to the components to render when
 * they are near the viewport.
 *
 * E.g. Modern pages' components in viewport will be loaded. All other components are
 * lazily loaded when the user scrolls the viewport and that particular component is
 * in the view.
 *
 * @internal
 */
var ViewportLoader = /** @class */ (function () {
    /**
     * Constructor of class.
     */
    function ViewportLoader() {
        var _this = this;
        /**
         * Registered components.
         */
        this._components = new Set();
        this._observerMap = new Map();
        /**
         * This attribute managed the number of scroll event handlers that are registered to
         * a scrollable parent. When the number of events becomes zero, the event handler is
         * unregistered.
         */
        this.LAZY_LOADED_TRACKER_ATTRIBUTE = 'data-sp-component-lazycount';
        this.RESIZE = 'resize';
        this._isInitialized = false;
        this._isListeningWindow = false;
        /**
         * These are the components being loaded proactively by increasing viewport offset.
         * It is used to track when all are rendered so viewport offset can be increased further.
         */
        this._offsetComponentsToLoad = [];
        /**
         * Components that are not intersecting with view port but in the preload area.
         * They're held off releasing until EUPL to prioritize rendering inside view port.
         */
        this._componentsPendingRelease = new Set();
        /**
         * Determines if a component should be lazily loaded and registers such components.
         */
        this.register = function (component, scrollableParent) {
            component.registeredInViewport = false;
            if (!_this._isInitialized) {
                _this._initialize();
            }
            _this._checkVisibilityAndRender(component, 1 /* viewport */);
            // The component is in the viewport and has started rendering.
            if (component.registeredInViewport) {
                return;
            }
            var parents;
            // Use if scrollable parent is provided, as that is more performant.
            if (scrollableParent) {
                parents = [scrollableParent];
            }
            else {
                // Look-up root scrollable container to avoid expensive browser style recalculation.
                var parentScrollableElement = Object(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["findScrollableParent"])(component.domElement.parentElement);
                parents = parentScrollableElement ? [parentScrollableElement] : [];
            }
            // Listen to scroll and resize events only when IntersectionObserver is not supported to make sure
            // Components can be detected when they move into the viewport.
            if (!_this.optimizeViewportLoader) {
                // We want to listen to the scrollable parent's scroll event, if one exists.
                parents.forEach(function (parent) {
                    var count = _this._updateRegisteredChildren(parent, 1);
                    // We want to add event listener once per common scrollable parent of components.
                    if (count === 1) {
                        _this._listenEvents(parent);
                    }
                });
                _this._listenEvents(window);
            }
            _this._components.add(component);
        };
        /**
         * Unregister a loaded component which should not be tracked any more.
         */
        this.unregister = function (component) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(component, 'unregister component');
            if (!_this._components.has(component)) {
                return;
            }
            _this._components.delete(component);
            // Look-up root scrollable container to avoid expensive browser style recalculation.
            var parentScrollableElement = Object(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["findScrollableParent"])(component.domElement.parentElement);
            var parents = parentScrollableElement ? [parentScrollableElement] : [];
            parents.forEach(function (parent) {
                var count = _this._updateRegisteredChildren(parent, -1);
                if (count <= 0) {
                    _this._unlistenEvents(parent);
                }
            });
            if (_this._components.size === 0 && !!_this._isViewportLoaded) {
                // Done loading all lazily loaded components.
                _this._unlistenEvents(window);
                _this.dispose();
            }
        };
        /**
         * Load registered components not in the viewport by gradually increasing viewport offset.
         */
        this.loadOutsideViewport = function () {
            _this._loadOutsideViewport();
        };
        this.releaseComponentsInPreloadArea = function () {
            _this._isViewportLoaded = true;
            // Releasing components below the viewport that are in the pre-load area.
            _this._componentsPendingRelease.forEach(function (element) { return _this._releaseTarget(element); });
        };
        this.dispose = function () {
            var _a;
            _this._components.clear();
            _this._isInitialized = false;
            (_a = _this._observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
        /**
         * Render component if in the waiting queue of viewport loader
         */
        this.release = function (component) {
            if (_this._components.has(component)) {
                _this._renderComponentInViewport(component, 1 /* viewport */);
                _this.unregister(component);
                return true;
            }
            return false;
        };
        this._releaseTarget = function (target) {
            _this._observer.unobserve(target);
            _this._componentsPendingRelease.delete(target);
            var component = _this._observerMap.get(target);
            if (component) {
                _this._observerMap.delete(target);
                _this.release(component);
            }
        };
        /**
         * Event handler which is called upon scroll and resize events.
         */
        this._lazyLoaderEventHandler = function () {
            _this._loadComponentsInViewport(2 /* scroll */);
        };
        this._loadComponentsInViewport = function (loadSource) {
            if (!_this._components || _this._components.size === 0) {
                return;
            }
            _this._components.forEach(function (value) {
                _this._checkVisibilityAndRender(value, loadSource);
            });
        };
        /**
         * Handler to start rendering component if it is close enough to the viewport.
         */
        this._checkVisibilityAndRender = function (component, loadSource) {
            // This component has already been loaded, just unregister if not already.
            if (component.registeredInViewport) {
                _this.unregister(component);
                return;
            }
            if (component.forceInViewPort || Object(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["isCloseToViewport"])(component.domElement, _this._offset)) {
                _this._renderComponentInViewport(component, loadSource);
                _this.unregister(component);
            }
            else if (_this.optimizeViewportLoader) {
                _this._observerMap.set(component.domElement, component);
                _this._observer.observe(component.domElement);
            }
        };
        this._onObserved = function (observedEntries) {
            observedEntries.forEach(function (entry) {
                var shouldRelease;
                var isIntersectingViewport = false;
                if (!entry.isIntersecting) {
                    shouldRelease = false;
                }
                else {
                    isIntersectingViewport =
                        entry.boundingClientRect.top <= entry.rootBounds.bottom - _ViewPortObserver__WEBPACK_IMPORTED_MODULE_4__["VIEWPORT_PRELOAD_HEIGHT"];
                    if (isIntersectingViewport || _this._isViewportLoaded) {
                        shouldRelease = true;
                    }
                    else {
                        shouldRelease = false;
                        // The components in viewport are not fully rendered yet, and target component is in the preloading area.
                        // To avoid interfering with viewport rendering, We will add it to the pending release queue so it can be
                        // released right after view port render complete.
                        _this._componentsPendingRelease.add(entry.target);
                    }
                }
                if (shouldRelease) {
                    _this._releaseTarget(entry.target);
                }
            });
        };
        this._initialize = function () {
            _this._offset = 0;
            _this._lazyHandler = _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["throttle"](_this._lazyLoaderEventHandler, 100).bind(_this);
            _this._isInitialized = true;
        };
        /**
         * Start listening to scroll and resize events. It is safe to call this API multiple times on a DOM
         * element, it does not lead to multiple attached events.
         */
        this._listenEvents = function (parent) {
            if (!parent) {
                return;
            }
            var isWindow = parent === window;
            if (!isWindow || (isWindow && !_this._isListeningWindow)) {
                _this._addEventListener(parent);
                if (isWindow) {
                    _this._isListeningWindow = true;
                }
            }
        };
        /**
         * Add Listener to scroll and resize events for given element or window
         */
        this._addEventListener = function (element) {
            element.addEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], _this._lazyHandler, false);
            element.addEventListener(_this.RESIZE, _this._lazyHandler, false);
        };
        /**
         * Stop listening to scroll and resize events.
         */
        this._unlistenEvents = function (parent) {
            if (!parent) {
                return;
            }
            var isWindow = parent === window;
            if (!isWindow || (isWindow && _this._isListeningWindow)) {
                _this._removeEventListener(parent);
                if (isWindow) {
                    _this._isListeningWindow = false;
                }
            }
        };
        /**
         * Remove Listeners from scroll and resize events for given element or window
         */
        this._removeEventListener = function (element) {
            element.removeEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], _this._lazyHandler);
            element.removeEventListener(_this.RESIZE, _this._lazyHandler);
        };
        /**
         * It keeps track of how many lazily loaded children are registered to a scrollable parent.
         * This record keeping is required to deregister event handler from the parent when there
         * are no children listening to events.
         */
        this._updateRegisteredChildren = function (element, count) {
            var lazyChilds = count + Number(element.getAttribute(_this.LAZY_LOADED_TRACKER_ATTRIBUTE));
            if (count !== 0) {
                element.setAttribute(_this.LAZY_LOADED_TRACKER_ATTRIBUTE, lazyChilds.toString());
            }
            return lazyChilds;
        };
        /**
         * Ask component to load.
         */
        this._renderComponentInViewport = function (component, loadSource) {
            if (component && !component.registeredInViewport) {
                component.onInViewport();
                if (loadSource === 1 /* viewport */) {
                    component.registeredInViewport = true;
                }
            }
        };
        /**
         * Load registered components not in the viewport, by gradually increasing viewport offset.
         * It also tracks when components are rendered to reduce the gap between increasing offset
         */
        this._loadOutsideViewport = function () {
            if (!_this._components || _this._components.size === 0) {
                // Done loading all components, take note of this state.
                _this._isViewportLoaded = true;
                return;
            }
            if (_this.optimizeViewportLoader) {
                var tasks_1 = [];
                _this._components.forEach(function (component) {
                    tasks_1.push(function () { return _this.release(component); });
                });
                void Object(_smoothTasksQueue__WEBPACK_IMPORTED_MODULE_2__["runTasksWithoutBlockingAnimation"])(tasks_1).then(function () {
                    _this._isViewportLoaded = true;
                    _this._postLoadOutsideViewport();
                });
            }
            else {
                _this._postLoadOutsideViewport();
            }
        };
        this._postLoadOutsideViewport = function () {
            // All components rendered, empty the array for next lot and increase offset by 2 page height
            _this._offsetComponentsToLoad = [];
            var documentHeight = window.innerHeight || document.documentElement.clientHeight;
            _this._offset = _this._offset + documentHeight * 2;
            _this._components.forEach(function (component) {
                if (Object(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["isCloseToViewport"])(component.domElement, _this._offset)) {
                    _this._offsetComponentsToLoad.push(component);
                }
            });
            // We are done increasing the offset, let viewport loader do its job now.
            _this._loadComponentsInViewport(3 /* release */);
            // Check if more to be done
            if (_this._components.size > 0) {
                // Not using setTimeout here to reduce wait period when components already rendered,
                // say because they are sync rendered.
                _this._loadOutsideViewport();
            }
            else {
                // Done loading all components, take note of this state.
                _this._isViewportLoaded = true;
            }
        };
        if (!!window[INTERSECTION_OBSERVER]) {
            this._isObserverSupported = true;
            this._observer = new _ViewPortObserver__WEBPACK_IMPORTED_MODULE_4__["ViewPortObserver"]({
                root: document.querySelector('[data-is-scrollable]'),
                onObserved: this._onObserved
            });
        }
        else {
            this._isObserverSupported = false;
        }
    }
    Object.defineProperty(ViewportLoader.prototype, "optimizeViewportLoader", {
        get: function () {
            return this._isObserverSupported;
        },
        enumerable: true,
        configurable: true
    });
    return ViewportLoader;
}());



/***/ }),

/***/ "DU1L":
/*!****************************************************!*\
  !*** ./lib/viewPortUtilities/ViewPortUtilities.js ***!
  \****************************************************/
/*! exports provided: SCROLL_NAME, isCloseToViewport, findScrollableParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_NAME", function() { return SCROLL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCloseToViewport", function() { return isCloseToViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return findScrollableParent; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);

var SCROLL_NAME = 'scroll';
var LOG_SOURCE = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('ViewportLoader');
/**
 * Check if component is close enough to the viewport to be shown.
 */
function isCloseToViewport(componentNode, offset) {
    try {
        var parent_1 = findScrollableParent(componentNode);
        var _a = componentNode.getBoundingClientRect(), top_1 = _a.top, height = _a.height;
        var documentHeight = window.innerHeight || document.documentElement.clientHeight;
        if (!parent_1) {
            // There is no overflow parent, check distance from window
            var topInOrAboveViewport = top_1 - offset <= documentHeight;
            var bottomNotAboveViewport = top_1 + height + offset >= 0;
            return topInOrAboveViewport && bottomNotAboveViewport;
        }
        // tslint:disable-next-line:no-use-before-declare
        var _b = parent_1.getBoundingClientRect(), parentTop = _b.top, parentHeight = _b.height;
        // Parent and viewport's intersection. 0 is top of the viewport
        var parentIntersectionTop = Math.max(0, parentTop);
        var parentIntersectionHeight = Math.min(parentTop + parentHeight, documentHeight) - parentIntersectionTop;
        // element's top relative to intersection
        var offsetTop = top_1 - parentIntersectionTop;
        var parentTopInOrAboveViewport = offsetTop - offset <= parentIntersectionHeight;
        var parentBottomNotAboveViewport = offsetTop + height + offset >= 0;
        return parentTopInOrAboveViewport && parentBottomNotAboveViewport;
    }
    catch (error) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(LOG_SOURCE, error);
        // We want to avoid lazy loading as a fallback
        return true;
    }
}
/**
 * Traverses up the DOM tree for the element with the data-is-scrollable=true attribute,
 * or return the window object.
 */
function findScrollableParent(startingElement) {
    var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
    var el = startingElement;
    var body = document.body;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, then use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var styles = getComputedStyle(el);
            if (styles) {
                var overflowY = styles.getPropertyValue('overflow-y');
                if (overflowY && (overflowY === SCROLL_NAME || overflowY === 'auto')) {
                    return el;
                }
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === body) {
        el = undefined;
    }
    return el;
}


/***/ }),

/***/ "OtL5":
/*!*********************************************!*\
  !*** ./lib/withViewPortIntegrated/index.js ***!
  \*********************************************/
/*! exports provided: withViewPortIntegrated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withViewPortIntegrated */ "ttMi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withViewPortIntegrated", function() { return _withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_0__["withViewPortIntegrated"]; });




/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "UUTp":
/*!****************************************************!*\
  !*** ./lib/viewPortIntegratedWebPartHost/index.js ***!
  \****************************************************/
/*! exports provided: ViewPortAwareWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPortAwareWebPartHost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPortAwareWebPartHost */ "nmiH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPortAwareWebPartHost", function() { return _ViewPortAwareWebPartHost__WEBPACK_IMPORTED_MODULE_0__["ViewPortAwareWebPartHost"]; });




/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VW4d":
/*!************************************************!*\
  !*** ./lib/viewPortManager/ViewPortManager.js ***!
  \************************************************/
/*! exports provided: ViewPortManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPortManager", function() { return ViewPortManager; });
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _viewPortLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewPortLoader */ "sxJO");
/* harmony import */ var _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewPortUtilities */ "y/ZY");
/* harmony import */ var _withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withViewPortIntegrated */ "OtL5");





var LOAD_ON_DEMAND_NAME = 'LoadedOnDemandOutsideViewport';
/**
 * @internal
 *
 * Ultimately view port loader should be managed at page level, this is an experiment scoped to canvas for the smooth
 * transition to page level ViewPortManager.
 *
 * ViewPortManager hooks up with the generic ViewPortLoader and integrated performance logger to log metrics.
 */
var ViewPortManager = /** @class */ (function () {
    function ViewPortManager(options) {
        var _this = this;
        /**
         * The set of components that have called `reserve` API.
         */
        this._initialReservations = new Set();
        /**
         * The IDs of components that are REQUIRED to be registered.
         * The view port loader won't finish if one or more reserved components are not registered.
         */
        this._componentsPendingRegistration = new Set();
        /**
         * Stores all the components that are in the initial view port and have not been render completed.
         * Key "string" refers to the performance tag of the component which is unique per instance.
         */
        this._unRenderedComponentsInViewPort = new Set();
        /**
         * Stores all the components that are outside the initial view port and have not been render completed.
         * Key "string" refers to the performance tag of the component which is unique per instance.
         */
        this._unRenderedComponentsOutsideViewPort = new Set();
        this._registeredComponents = new Map();
        this._componentsDelayedRegistration = new Map();
        this._hasPageScrolled = false;
        /**
         * Indicates whether all components have been registered into ViewPortManager.
         * This flags turns into true when the count of registered components is same with this._expectedComponentCount
         */
        this._isRegistrationComplete = false;
        /**
         * Whether all the components that are initially in the view port have been render completed.
         */
        this._hasViewPortRendered = false;
        /**
         * The list of callbacks that will be fired when view port is rendered.
         */
        this._viewPortRenderedListeners = new Set();
        /**
         * The list of callbacks that will be fired when all registered components render complete.
         */
        this._allReservedComponentsRenderedListeners = new Set();
        /**
         * The object of error report for components in view port.
         */
        this._componentsErrorsInViewPort = {};
        /**
         * The object of error report for all registered components.
         */
        this._allReservedComponentsErrors = {};
        /**
         * The iteration counter which is increased when in-place nav occurs
         */
        this._iterationIndex = 1;
        this._isReduceCheckExpOn = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_SPPerfExperiment"].getVariantAndTrackExperiment(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceExperiment"].WEXViewPortReducePositionCheck) ===
            1;
        /**
         * Subscribe to view port event such as view port render complete or all web parts render complete.
         * The view port events are one-time events so the listeners will be removed once the event it listens to
         * is fired.
         * @param event - The type of the event.
         * @param listener - The callback that will be fired when corresponding event triggers.
         */
        this.once = function (event, listener) {
            switch (event) {
                case 'ViewPortRendered':
                    _this._viewPortRenderedListeners.add(listener);
                    break;
                case 'AllReservedComponentsRendered':
                    _this._allReservedComponentsRenderedListeners.add(listener);
                    break;
            }
        };
        /**
         * Reserve a particular component. The reservation of the component will be consumed either by calling `register` API
         * or calling consumeReservation to manually consume it if the component is not going to be registered.
         * (e.g. CanvasComponent).
         * The ViewPortManager will NOT
         * mark completion of view port rendering until all the reserved components that impact EUPL are **registered**.
         * @param id - The unique id of the component that will be registered.
         */
        this.reserve = function (id) {
            _this._componentsPendingRegistration.add(id);
            _this._initialReservations.add(id);
        };
        /**
         * Call consumeReservation to consume/cancel the the reservation for given component so ViewPortManager
         * can release the registration for components that are not reserved.
         * If the component is not reserved yet, this method results in no-op.
         * @param id - The id of the component.
         */
        this.consumeReservation = function (id) {
            if (_this._componentsPendingRegistration.has(id)) {
                _this._componentsPendingRegistration.delete(id);
                if (_this._componentsPendingRegistration.size === 0) {
                    _this._finishReservedRegistration();
                }
            }
        };
        /**
         * Register a component into view port loading.
         * @param component - The component that opts-in view port loading.
         */
        this.register = function (component) {
            if (!component) {
                _this._getRegisterQos().writeUnexpectedFailure('EmptyComponent', undefined);
                throw new Error('Registered component cannot be null or undefined');
            }
            var id = component.id;
            if (_this._registeredComponents.has(id)) {
                _this._getRegisterQos().writeUnexpectedFailure('DuplicateRegistration', undefined, {
                    performanceTag: id
                });
                // no-op upon re-registration.
                return;
            }
            if (_this._componentsPendingRegistration.has(id) ||
                _this._isRegistrationComplete ||
                component.forceInViewPort) {
                _this._register(component);
            }
            else {
                // Defer registration because we don't want to immediately register the component if it's not reserved.
                // Depending on the design of the app the consumes ViewPortManager, the registration order of components
                // is not guaranteed to be from top to bottom.
                // If component below the view port is registered too early before viewport components preserving the space,
                // the component outside the view port might be released too early.
                // Thus we want to defer the registration for component that is not reserved (view port low-pri component)
                // Until all reserved components are registered.
                _this._componentsDelayedRegistration.set(component.id, component);
            }
        };
        /**
         * Unregister a component. Call it when the component no longers needs to be rendered, like unmounted.
         * @param id -  The unique id for this component instance.
         */
        this.unregister = function (id) {
            var component = _this._registeredComponents.get(id);
            if (component) {
                _this._viewPortLoader.unregister(component);
                if (component.onAllComponentsRenderComplete) {
                    _this._allReservedComponentsRenderedListeners.delete(component.onAllComponentsRenderComplete);
                }
                _this._registeredComponents.delete(id);
                if (_this._unRenderedComponentsInViewPort.has(id)) {
                    _this._unRenderedComponentsInViewPort.delete(id);
                }
                if (_this._unRenderedComponentsOutsideViewPort.has(id)) {
                    _this._unRenderedComponentsOutsideViewPort.delete(id);
                }
            }
            if (_this._componentsDelayedRegistration.has(id)) {
                _this._componentsDelayedRegistration.delete(id);
            }
        };
        /**
         * In cases where a new page life cycle happens, we need to reset the view port manager to be ready for
         * a new set of components.
         */
        this.reset = function () {
            _this.dispose();
            _this._iterationIndex++;
            window.addEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], _this._handleScroll, true /* useCapture */);
            _this._hasViewPortRendered = false;
            _this._isRegistrationComplete = false;
            _this._hasPageScrolled = false;
            _this._viewPortRenderedListeners.clear();
            _this._allReservedComponentsRenderedListeners.clear();
        };
        /**
         * Dispose resources occupied by ViewPortManager.
         */
        this.dispose = function () {
            window.removeEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], _this._handleScroll, true /* useCapture */);
            if (_this._internalViewPortLoader && !_this._internalViewPortLoader.isDisposed) {
                _this._internalViewPortLoader.dispose();
                _this._internalViewPortLoader = undefined;
            }
            _this._componentsErrorsInViewPort = {};
            _this._allReservedComponentsErrors = {};
            _this._componentsPendingRegistration.clear();
            _this._registeredComponents.clear();
            _this._unRenderedComponentsInViewPort.clear();
            _this._unRenderedComponentsOutsideViewPort.clear();
            _this._allReservedComponentsRenderedListeners.clear();
            if (_this._loadOutsideViewportTimeout !== undefined) {
                clearTimeout(_this._loadOutsideViewportTimeout);
                _this._loadOutsideViewportTimeout = undefined;
            }
        };
        /**
         * This should be called right after the component asynchronous render is complete.
         */
        this.onAfterComponentRenderOrError = function (id, error) {
            var _a;
            _this._onComponentFinish(id, error);
            var component = _this._registeredComponents.get(id);
            (_a = component) === null || _a === void 0 ? void 0 : _a.onRenderComplete();
            _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].onComponentEnd(id);
        };
        /**
         * To notify ViewPortManager that the component of given id is finished.
         */
        this._onComponentFinish = function (id, error) {
            if (_this._unRenderedComponentsInViewPort.has(id)) {
                _this._unRenderedComponentsInViewPort.delete(id);
                if (error) {
                    _this._componentsErrorsInViewPort[id] = error;
                }
            }
            else if (_this._unRenderedComponentsOutsideViewPort.has(id)) {
                _this._unRenderedComponentsOutsideViewPort.delete(id);
            }
            if (_this._initialReservations.has(id) && error) {
                _this._allReservedComponentsErrors[id] = error;
            }
            var component = _this._registeredComponents.get(id);
            if (!component) {
                return;
            }
            if (!_this._hasViewPortRendered &&
                !_this._isAnyComponentInInitialViewport() && // No unreleased component in the view port.
                _this._isRegistrationComplete // All components have been registered. Make sure no EUPL component is missed.
            ) {
                var endTime = _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].getComponentEndTime(id) || _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].now();
                // All in-viewport components have been registered, and this is the last component rendered in the view port.
                // It is safe to use the end time of this component to mark view port render complete.
                _this._tryLoadOutsideViewport(endTime);
            }
            if (!_this._hasValueInInitialReservation(_this._unRenderedComponentsInViewPort) &&
                !_this._hasValueInInitialReservation(_this._unRenderedComponentsOutsideViewPort)) {
                // All reserved components have been rendered.
                _this._handleAllReservedComponentsRendered(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].getComponentEndTime(id));
            }
        };
        this._hasValueInInitialReservation = function (set) {
            var hasValueInInitialReservation = false;
            set.forEach(function (value) {
                if (!hasValueInInitialReservation) {
                    hasValueInInitialReservation = _this._initialReservations.has(value);
                }
            });
            return hasValueInInitialReservation;
        };
        this._register = function (component) {
            var id = component.id;
            try {
                _this._viewPortLoader.register(component);
                _this._registeredComponents.set(id, component);
                var onAllComponentsRenderComplete = component.onAllComponentsRenderComplete, registeredInViewport = component.registeredInViewport;
                if (onAllComponentsRenderComplete) {
                    _this._allReservedComponentsRenderedListeners.add(onAllComponentsRenderComplete);
                }
                if (registeredInViewport) {
                    // The component is in initial view port.
                    _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].addComponentToEUPL(id);
                    _this._unRenderedComponentsInViewPort.add(id);
                }
                else {
                    _this._unRenderedComponentsOutsideViewPort.add(id);
                }
                _this.consumeReservation(id);
            }
            catch (error) {
                _this._getRegisterQos().writeUnexpectedFailure('Unexpected', error, {
                    performanceTag: id
                });
            }
        };
        /**
         * Before components outside the view port are explicitly released, check if there is any component
         * has "moved" into the initial view port. This could happen when some components above are rendered
         * smaller than the expected size.
         * However, if user has scrolled page, the view port will be changed so we can't be sure if the component
         * was in the initial view port or not.
         */
        this._isAnyComponentInInitialViewport = function () {
            if (_this._hasPageScrolled) {
                return false;
            }
            if (_this._isReduceCheckExpOn && _this._unRenderedComponentsInViewPort.size) {
                return true;
            }
            var componentsMovedToInitialViewPort = [];
            // Re-check through components outside viewport to see if they are intersecting with the view port
            // after in-viewport component is rendered.
            _this._unRenderedComponentsOutsideViewPort.forEach(function (id) {
                var component = _this._registeredComponents.get(id);
                if (component && Object(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["isCloseToViewport"])(component.domElement, 0 /* offset */)) {
                    componentsMovedToInitialViewPort.push(id);
                }
            });
            if (componentsMovedToInitialViewPort.length) {
                componentsMovedToInitialViewPort.forEach(function (id) {
                    _this._unRenderedComponentsInViewPort.add(id);
                    _this._unRenderedComponentsOutsideViewPort.delete(id);
                    _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].addComponentToEUPL(id);
                    var component = _this._registeredComponents.get(id);
                    if (component) {
                        _this._viewPortLoader.release(component);
                    }
                });
                if (_this._isReduceCheckExpOn) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].onExtraEuplComponentsAdded();
                }
                return true;
            }
            return false;
        };
        this._finishReservedRegistration = function () {
            _this._isRegistrationComplete = true;
            _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].onRegistrationFinish();
            _this._componentsDelayedRegistration.forEach(function (component) {
                _this._register(component);
            });
            _this._componentsDelayedRegistration.clear();
            _this._tryLoadOutsideViewport(performance.now());
        };
        this._tryLoadOutsideViewport = function (endTime) {
            if (_this._unRenderedComponentsInViewPort.size === 0 && !_this._hasViewPortRendered) {
                _this._hasViewPortRendered = true;
                // Render all controls outside the view port after in-viewport components render complete.
                if (!_this._shouldReleaseComponentsOnDemand()) {
                    _this._viewPortLoader.loadOutsideViewport();
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].setPerformanceProperty(LOAD_ON_DEMAND_NAME, 'false');
                }
                else {
                    _this._viewPortLoader.releaseComponentsInPreloadArea();
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].setPerformanceProperty(LOAD_ON_DEMAND_NAME, 'true');
                }
                _this._handleViewPortRendered(endTime);
            }
        };
        this._handleScroll = function () {
            _this._hasPageScrolled = true;
            // User starts to scroll, we should release the components in preload area
            // otherwise the component will keep waiting on components in the viewport because intersection observer
            // doesn't fire again when component is scrolled from preload area into viewport.
            _this._viewPortLoader.releaseComponentsInPreloadArea();
            window.removeEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], _this._handleScroll, true /* useCapture */);
        };
        this._handleViewPortRendered = function (endTime) {
            _this._viewPortRenderedListeners.forEach(function (listener) {
                try {
                    listener(endTime, _this._componentsErrorsInViewPort);
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ViewPortManager._logSource, error);
                }
            });
            _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].onViewPortRendered();
            _this._viewPortRenderedListeners.clear();
        };
        this._handleAllReservedComponentsRendered = function (endTime) {
            _this._allReservedComponentsRenderedListeners.forEach(function (listener) {
                try {
                    listener(endTime, _this._allReservedComponentsErrors);
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ViewPortManager._logSource, error);
                }
            });
            _this._allReservedComponentsRenderedListeners.clear();
        };
        this._getRegisterQos = function () {
            return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ViewPortManager.RegisterError');
        };
        this._shouldReleaseComponentsOnDemand = options.shouldReleaseComponentsOnDemand;
        window.addEventListener(_viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["SCROLL_NAME"], this._handleScroll, true /* useCapture */);
    }
    /**
     * Re-expose withViewPortIntegrated HOC function so consumers can generate HOC without taking direct dependency on
     * sp-viewport-loader library.
     * @param component - The component that needs to be integrated into view port loader.
     */
    ViewPortManager.prototype.getViewPortIntegratedComponent = function (component) {
        return Object(_withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_4__["withViewPortIntegrated"])(component);
    };
    Object.defineProperty(ViewPortManager.prototype, "iterationIndex", {
        get: function () {
            return this._iterationIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPortManager.prototype, "hasViewPortRendered", {
        get: function () {
            return this._hasViewPortRendered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPortManager.prototype, "_viewPortLoader", {
        get: function () {
            if (!this._internalViewPortLoader) {
                this._internalViewPortLoader = new _viewPortLoader__WEBPACK_IMPORTED_MODULE_2__["ViewportLoader"]();
            }
            return this._internalViewPortLoader;
        },
        enumerable: true,
        configurable: true
    });
    ViewPortManager._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ViewPortManager');
    return ViewPortManager;
}());



/***/ }),

/***/ "WSQ/":
/*!***************************************!*\
  !*** ./lib/smoothTasksQueue/index.js ***!
  \***************************************/
/*! exports provided: runTasksWithoutBlockingAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmoothTasksQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmoothTasksQueue */ "XODz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runTasksWithoutBlockingAnimation", function() { return _SmoothTasksQueue__WEBPACK_IMPORTED_MODULE_0__["runTasksWithoutBlockingAnimation"]; });




/***/ }),

/***/ "XODz":
/*!**************************************************!*\
  !*** ./lib/smoothTasksQueue/SmoothTasksQueue.js ***!
  \**************************************************/
/*! exports provided: runTasksWithoutBlockingAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runTasksWithoutBlockingAnimation", function() { return runTasksWithoutBlockingAnimation; });
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);

var logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('Canvas.SmoothTasksQueue');
function _runTasks(tasks, onComplete) {
    var task = tasks.shift();
    if (task) {
        // Wrap the task into promise despite its return time.
        var taskResult_1 = Promise.resolve().then(task);
        // `requestAnimationFrame` ensures only one control's setDisplayMode is called  per frame. `setTimeout` make sure
        // the javascript execution will not block the rendering of the frame. After one tasks is run, it queues another
        // one after next animation frame. So users will be able to see frames rendered reliably while the synchronous
        // code is executed.
        requestAnimationFrame(function () {
            setTimeout(function () {
                void taskResult_1
                    .catch(function (error) {
                    // Ignore the error here for individual web part. The error of each setDisplayMode is recorded
                    // by WebPart's QOS. Here we should ensure one failure will not block rest of the web parts.
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(logSource, error);
                })
                    .then(function () {
                    _runTasks(tasks, onComplete);
                });
            }, 0);
        });
    }
    else {
        onComplete();
    }
}
/**
 * Distribute a list of tasks into separate animation frames to avoid javascript stack being stuck
 * by a huge javascript call.
 *
 * @param tasks - The tasks to run in separate call stacks
 * @internal
 */
function runTasksWithoutBlockingAnimation(tasks) {
    return new Promise(function (resolve) {
        _runTasks(tasks, resolve);
    });
}


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "jvM4":
/*!************************************************!*\
  !*** ./lib/viewPortLoader/ViewPortObserver.js ***!
  \************************************************/
/*! exports provided: VIEWPORT_PRELOAD_HEIGHT, ViewPortObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_PRELOAD_HEIGHT", function() { return VIEWPORT_PRELOAD_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPortObserver", function() { return ViewPortObserver; });
/**
 * How many pixels of extra view port area should we preload components outside the view port.
 */
var VIEWPORT_PRELOAD_HEIGHT = 400;
/**
 * The view port observer that detects accurately on
 * 1. When component intersects with the preload area.
 * 2. When component intersects with view port.
 */
var ViewPortObserver = /** @class */ (function () {
    function ViewPortObserver(options) {
        this._preloadAreaObserver = new IntersectionObserver(options.onObserved, {
            root: options.root,
            rootMargin: "0px 0px " + VIEWPORT_PRELOAD_HEIGHT + "px 0px"
        });
        this._viewportObserver = new IntersectionObserver(options.onObserved, {
            root: options.root
        });
    }
    ViewPortObserver.prototype.observe = function (target) {
        this._viewportObserver.observe(target);
        this._preloadAreaObserver.observe(target);
    };
    ViewPortObserver.prototype.disconnect = function () {
        this._viewportObserver.disconnect();
        this._preloadAreaObserver.disconnect();
    };
    ViewPortObserver.prototype.unobserve = function (target) {
        this._viewportObserver.unobserve(target);
        this._preloadAreaObserver.unobserve(target);
    };
    return ViewPortObserver;
}());



/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: runTasksWithoutBlockingAnimation, ViewPortManager, withViewPortIntegrated, _ViewPortAwareWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smoothTasksQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothTasksQueue */ "WSQ/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runTasksWithoutBlockingAnimation", function() { return _smoothTasksQueue__WEBPACK_IMPORTED_MODULE_0__["runTasksWithoutBlockingAnimation"]; });

/* harmony import */ var _viewPortManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewPortManager */ "5HNb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPortManager", function() { return _viewPortManager__WEBPACK_IMPORTED_MODULE_1__["ViewPortManager"]; });

/* harmony import */ var _withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withViewPortIntegrated */ "OtL5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withViewPortIntegrated", function() { return _withViewPortIntegrated__WEBPACK_IMPORTED_MODULE_2__["withViewPortIntegrated"]; });

/* harmony import */ var _viewPortIntegratedWebPartHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewPortIntegratedWebPartHost */ "UUTp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ViewPortAwareWebPartHost", function() { return _viewPortIntegratedWebPartHost__WEBPACK_IMPORTED_MODULE_3__["ViewPortAwareWebPartHost"]; });







/***/ }),

/***/ "nmiH":
/*!***********************************************************************!*\
  !*** ./lib/viewPortIntegratedWebPartHost/ViewPortAwareWebPartHost.js ***!
  \***********************************************************************/
/*! exports provided: ViewPortAwareWebPartHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPortAwareWebPartHost", function() { return ViewPortAwareWebPartHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @internal
 */
var ViewPortAwareWebPartHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewPortAwareWebPartHost, _super);
    function ViewPortAwareWebPartHost(options) {
        var _this = _super.call(this, options.serviceScope) || this;
        _this._viewPortMechanism = options.viewPortMechanism;
        _this._viewPortManager = options.viewPortManager;
        return _this;
    }
    ViewPortAwareWebPartHost.prototype.onBeforeWebPartLoad = function (options) {
        _super.prototype.onBeforeWebPartLoad.call(this, options);
        // VSO#858670 Once View Port Loader is moved to page level, let ViewPortManager decides whether
        // title region is in view port, and remove HostViewPortType.Fixed.
        // For some pages we might want to keep the HostViewPortType.Always to avoid the view port loader overhead when
        // the page is simple with only one web part.
        switch (this._viewPortMechanism.type) {
            case 'Auto':
                /* no-op. It's controlled by ViewPortManager to add web parts into EUPL calculation */
                return;
            case 'Always':
                _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].addComponent(options.webPartTag);
                return;
            case 'Fixed':
                if (options.manifest && this._viewPortMechanism.webPartIds.has(options.manifest.id)) {
                    _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_PerformanceLogger"].addComponent(options.webPartTag);
                }
                return;
        }
    };
    ViewPortAwareWebPartHost.prototype.onAfterWebPartRender = function (options) {
        var _a;
        _super.prototype.onAfterWebPartRender.call(this, options);
        (_a = this._viewPortManager) === null || _a === void 0 ? void 0 : _a.onAfterComponentRenderOrError(options.webPartTag);
    };
    ViewPortAwareWebPartHost.prototype.onAfterWebPartLoadFailed = function (options, error) {
        var _a;
        _super.prototype.onAfterWebPartLoadFailed.call(this, options, error);
        if (this._getMarkFailureInPerformanceLoggerExperimentVariant() === 1) {
            (_a = this._viewPortManager) === null || _a === void 0 ? void 0 : _a.onAfterComponentRenderOrError(options.webPartTag, error);
        }
    };
    ViewPortAwareWebPartHost.prototype.onAfterWebPartInitializeFailed = function (options, error) {
        var _a;
        _super.prototype.onAfterWebPartInitializeFailed.call(this, options, error);
        if (this._getMarkFailureInPerformanceLoggerExperimentVariant() === 1) {
            (_a = this._viewPortManager) === null || _a === void 0 ? void 0 : _a.onAfterComponentRenderOrError(options.webPartTag, error);
        }
    };
    ViewPortAwareWebPartHost.prototype.onAfterWebPartRenderFailed = function (options, error) {
        var _a;
        _super.prototype.onAfterWebPartRenderFailed.call(this, options, error);
        if (this._getMarkFailureInPerformanceLoggerExperimentVariant() === 1) {
            (_a = this._viewPortManager) === null || _a === void 0 ? void 0 : _a.onAfterComponentRenderOrError(options.webPartTag, error);
        }
    };
    ViewPortAwareWebPartHost.prototype._getMarkFailureInPerformanceLoggerExperimentVariant = function () {
        return _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_2__["_SPPerfExperiment"].getVariantAndTrackExperiment(90036 /* MarkFailureInPerformanceLoggerV2 */);
    };
    return ViewPortAwareWebPartHost;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["_TeamsAwareWebPartHost"]));



/***/ }),

/***/ "sxJO":
/*!*************************************!*\
  !*** ./lib/viewPortLoader/index.js ***!
  \*************************************/
/*! exports provided: ViewportLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewportLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportLoader */ "6N9o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportLoader", function() { return _ViewportLoader__WEBPACK_IMPORTED_MODULE_0__["ViewportLoader"]; });




/***/ }),

/***/ "ttMi":
/*!**************************************************************!*\
  !*** ./lib/withViewPortIntegrated/withViewPortIntegrated.js ***!
  \**************************************************************/
/*! exports provided: withViewPortIntegrated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withViewPortIntegrated", function() { return withViewPortIntegrated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewPortUtilities */ "y/ZY");




/**
 * The high order component which makes it convenience for arbitrary component to benefit from ViewPortLoader
 *
 * @internal
 */
function withViewPortIntegrated(component) {
    var _this = this;
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
        var rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        // State indicates whether this component has been released by the view port loader.
        var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), inViewPort = _a[0], setInViewPort = _a[1];
        // State indicates whether this component and its core content is fully render complete.
        // props.renderCompleteReportType defines when this component should be marked as render complete.
        var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), renderComplete = _b[0], setRenderComplete = _b[1];
        var id = props.id, renderCompleteReportType = props.renderCompleteReportType, preservedHeight = props.preservedHeight, originalComponentProps = props.originalComponentProps, forceInViewPort = props.forceInViewPort, viewPortManager = props.viewPortManager;
        var onRenderComplete = function () {
            if (!renderComplete) {
                setRenderComplete(true);
                viewPortManager.onAfterComponentRenderOrError(id);
            }
        };
        var onRenderFail = function (error) {
            if (!renderComplete) {
                setRenderComplete(true);
                // @todo Consider to merge the `onRenderComplete` and `onRenderFail` when graduate the experiment.
                if (_this._getMarkFailureInPerformanceLoggerExperimentVariant() === 1) {
                    viewPortManager.onAfterComponentRenderOrError(id);
                }
            }
        };
        // Hook the registration in `useLayoutEffect` so the component can be registered without a delay.
        // See React article https://reactjs.org/docs/hooks-reference.html#timing-of-effects
        // UseLayout is fired after layout and paint which means the registration might be deferred
        // We need to use `useLayoutEffect` so CPU can start working on the component if it's inside viewport.
        react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
            if (rootRef.current && !inViewPort) {
                viewPortManager.register({
                    id: id,
                    registeredInViewport: false,
                    domElement: rootRef.current,
                    forceInViewPort: forceInViewPort,
                    onInViewport: function () {
                        _viewPortUtilities__WEBPACK_IMPORTED_MODULE_3__["ViewPortLogger"].onComponentReleased(id);
                        setInViewPort(true);
                    },
                    onRenderComplete: function () { return setRenderComplete(true); },
                    onAllComponentsRenderComplete: function () {
                        if (rootRef.current && preservedHeight) {
                            var height = rootRef.current.clientHeight;
                            var heightOffset = Math.round(preservedHeight - height);
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_EngagementLogger"].logEventWithLogEntry(new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogEntry"]('ViewPortLoader', 'VerifyReservedSize', _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_LogType"].Event, {
                                heightOffset: String(heightOffset),
                                heightOffsetRatio: height ? String(heightOffset / height) : '-1',
                                id: id
                            }));
                        }
                    }
                });
            }
            // Unregister the component when component unmounts.
            // Note: It's important that the second paramter of useEffect is `[]` so the clean-up only runs upon unmount.
            return function () {
                viewPortManager.unregister(id);
            };
        }, [viewPortManager.iterationIndex]);
        // This effect runs after each rendering.
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            if (renderCompleteReportType === 'ComponentRender' && inViewPort) {
                // When render complete signal is not customized, mark render complete when the original component is mounted.
                onRenderComplete();
            }
        }, [inViewPort]);
        var componentProps = renderCompleteReportType === 'CallbackProps'
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalComponentProps), { onRenderComplete: onRenderComplete,
                onRenderFail: onRenderFail }) : originalComponentProps;
        // Before render complete, assign reserved spaces.
        var styles = renderComplete
            ? undefined
            : {
                width: '100%',
                minHeight: preservedHeight,
                flex: 'none'
            };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: rootRef, style: styles, "data-viewport-id": id }, inViewPort && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](component, componentProps)));
    });
}


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "y/ZY":
/*!****************************************!*\
  !*** ./lib/viewPortUtilities/index.js ***!
  \****************************************/
/*! exports provided: SCROLL_NAME, isCloseToViewport, findScrollableParent, ViewPortLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPortUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPortUtilities */ "DU1L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCROLL_NAME", function() { return _ViewPortUtilities__WEBPACK_IMPORTED_MODULE_0__["SCROLL_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCloseToViewport", function() { return _ViewPortUtilities__WEBPACK_IMPORTED_MODULE_0__["isCloseToViewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _ViewPortUtilities__WEBPACK_IMPORTED_MODULE_0__["findScrollableParent"]; });

/* harmony import */ var _ViewPortLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewPortLogger */ "0Obm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPortLogger", function() { return _ViewPortLogger__WEBPACK_IMPORTED_MODULE_1__["ViewPortLogger"]; });





/***/ })

/******/ })});;
//# sourceMappingURL=sp-viewport-loader_none.js.map