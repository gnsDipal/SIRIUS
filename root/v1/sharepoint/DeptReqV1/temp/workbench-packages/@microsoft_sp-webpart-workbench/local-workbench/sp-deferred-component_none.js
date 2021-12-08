define("fa4155f6-2498-4a20-8406-5cb3b385b142_0.4.175", ["tslib","react"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_cDcd__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "lfoS":
/*!****************************************************!*\
  !*** ./lib/deferredComponent/DeferredComponent.js ***!
  \****************************************************/
/*! exports provided: DeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredComponent", function() { return DeferredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file Abstract React component for deferred component code.
 */


/**
 * `DeferredComponent` is a generic React component to define the pattern of React components loaded after
 * the initial code download.
 *
 * @remarks
 *
 * Example:
 * ```
 * class DeferredComponent extends Deferred<IComponentProps> {
 *   protected _internalLoad(): Promise<React.ComponentClass<IComponentProps>> {
 *     // code to lazy load e.g. require.ensure(...) or import(...)
 *   }
 * }
 * ```
 *
 * @param ComponentProps - The type of the props used to render the deferred component.
 *
 * @internal
 */
var DeferredComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredComponent, _super);
    /**
     * Construct a new instance of the DeferredComponent component.
     *
     * @param props - DeferredComponent props
     */
    function DeferredComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.load = _this.load.bind(_this);
        _this._handleComponentLoaded = _this._handleComponentLoaded.bind(_this);
        _this._setState = _this._setState.bind(_this);
        _this.state = {
            component: _this.constructor._loadedComponent
        };
        return _this;
    }
    Object.defineProperty(DeferredComponent.prototype, "_shouldLoad", {
        /**
         * @returns Whether or not the code should load. Value should not change during the lifecycle of an instance.
         */
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Register setState callback when the component will mount. If we loaded the component while it
     * was unmounted, then update the state before mounting.
     */
    DeferredComponent.prototype.UNSAFE_componentWillMount = function () {
        this._asyncSetState = this._setState;
        if (!this.state.component && this.constructor._loadedComponent) {
            this.setState({ component: this.constructor._loadedComponent });
        }
    };
    /**
     * Start component loading when the component mounts.
     */
    DeferredComponent.prototype.componentDidMount = function () {
        if (this.state.component) {
            return;
        }
        // if duration is undefined, it will be set to 0
        var duration = this.props.duration || 0;
        if (duration < 0) {
            return;
        }
        if (duration) {
            this._loadTimeoutId = setTimeout(this.load, this.props.duration);
        }
        else {
            this.load();
        }
    };
    /**
     * Unregister setState callback if the component unmounts.
     */
    DeferredComponent.prototype.componentWillUnmount = function () {
        this._asyncSetState = undefined;
    };
    /**
     * Attempt to load if nextProps.duration indicates we should try to load and we have no previous attempts.
     */
    DeferredComponent.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        /**
         * If _loadPromise does not exist then load was never called.
         * If _loadTimeoutId does not exist then we have never had a valid duration.
         * If both _loadPromise and _loadTimeoutId do not exist then we have never called load.
         */
        if (!this.constructor._loadPromise && !this._loadTimeoutId) {
            // if duration is undefined, it will be set to 0
            var duration = nextProps.duration || 0;
            if (duration < 0) {
                return;
            }
            if (duration) {
                this._loadTimeoutId = setTimeout(this.load, this.props.duration);
            }
            else {
                this.load();
            }
        }
    };
    /**
     * Render, if loaded, the deferred React component. If not loaded, skip rendering.
     *
     * @returns - The React component or false.
     */
    DeferredComponent.prototype.render = function () {
        /*
         * If component doesn't exist then this will return false, which will result in this
         * component not rendering (the same as null)
         */
        if (!this.state.component) {
            return this._renderPlaceHolder();
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.state.component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (this.props.deferredProps || {})), this.props.children));
    };
    /**
     * Invokes `_internalLoad` to download the deferred code. After the download is complete,
     * re-render with a new instance of the deferred component and invoke any `onAfterLoad` callbacks.
     *
     * @returns - A Promise yielding the deferred React `ComponentClass`
     */
    DeferredComponent.prototype.load = function () {
        if (!this.constructor._loadPromise) {
            // shouldLoad is not expected to change during the lifecycle of this instance
            if (this._shouldLoad) {
                this.constructor._loadPromise = this._internalLoad();
                this.constructor._loadPromise.then(this._handleComponentLoaded);
            }
            else {
                this.constructor._loadPromise = Promise.reject(new Error('_shouldLoad returns false'));
            }
        }
        else {
            // Deferred component was not loaded at the instantiation of this component
            this.constructor._loadPromise.then(this._handleComponentLoaded);
        }
        return this.constructor._loadPromise;
    };
    /**
     * Overload this method to render a place holder for the deferred component. If not overloaded, then
     * we return false and nothing will render.
     *
     * @returns - An element to be rendered in place of the deferred component.
     */
    DeferredComponent.prototype._renderPlaceHolder = function () {
        return false;
    };
    DeferredComponent.prototype._handleComponentLoaded = function (component) {
        var onAfterLoad = this.props.onAfterLoad;
        this.constructor._loadedComponent = component;
        if (this._asyncSetState) {
            this._asyncSetState({ component: component });
        }
        if (onAfterLoad) {
            onAfterLoad.forEach(function (fn) { return fn(); });
        }
    };
    /**
     * React.Component.setState should not be called if the component is not mounted. Due to the async component
     * loading we cannot guarantee the component is still mounted after the chunk is loaded. _asyncSetStateCallback
     * has a reference to this method when the component is mounted. Check and use _asyncSetStateCallback when you
     * are unsure if the component is mounted and want to invoke React.Component.setState.
     *
     * @param state - state The new state
     */
    DeferredComponent.prototype._setState = function (state) {
        this.setState(state);
    };
    return DeferredComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: _DeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deferredComponent_DeferredComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deferredComponent/DeferredComponent */ "lfoS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DeferredComponent", function() { return _deferredComponent_DeferredComponent__WEBPACK_IMPORTED_MODULE_0__["DeferredComponent"]; });

/**
 * An abstract React component for deferred component code.
 */



/***/ })

/******/ })});;
//# sourceMappingURL=sp-deferred-component_none.js.map