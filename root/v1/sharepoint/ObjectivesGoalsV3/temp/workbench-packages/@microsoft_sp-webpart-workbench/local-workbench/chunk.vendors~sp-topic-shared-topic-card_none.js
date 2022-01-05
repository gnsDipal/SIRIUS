(window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || []).push([["vendors~sp-topic-shared-topic-card"],{

/***/ "+8+F":
/*!***********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/component/clear.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = (function () {
        function default_1() {
        }
        default_1.prototype.render = function (canvas) {
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.closePath();
        };
        return default_1;
    }());
    exports.default = default_1;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "1RX4":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: DeferredSpLivePersonaCard, wrapWithDeferredSpLivePersonaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredSpLivePersonaCard", function() { return DeferredSpLivePersonaCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithDeferredSpLivePersonaCard", function() { return wrapWithDeferredSpLivePersonaCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeferredSpLivePersonaCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeferredSpLivePersonaCard.scss */ "jvbC");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "mkpW");
/* harmony import */ var _ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReactDeferredComponent/index */ "9lav");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");






var DelayLoadLPC = { ODB: 1596 };
/**
 * Defer-loads SpLivePersonaCard, that's it.
 * @public
 */
var DeferredSpLivePersonaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeferredSpLivePersonaCard, _super);
    function DeferredSpLivePersonaCard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._onActivate = function () {
            var hovered = _this.state.hovered;
            if (!hovered) {
                _this.setState({
                    hovered: true
                });
            }
        };
        _this.modulePath = './SpLivePersonaCard';
        _this.moduleLoader = {
            load: function () {
                return __webpack_require__.e(/*! import() | shared-react-splivepersonacard */ "vendors~shared-react-splivepersonacard").then(__webpack_require__.bind(null, /*! ./SpLivePersonaCard */ "INZn")).then(function (module) {
                    return module.SpLivePersonaCard;
                });
            }
        };
        _this.state = {
            hovered: !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_5__["default"].isFeatureEnabled(DelayLoadLPC) || props.forceLoad
        };
        return _this;
    }
    DeferredSpLivePersonaCard.prototype.render = function () {
        var hovered = this.state.hovered;
        // Need to ensure _deferredComponentProps get the current this.props before render.
        this._deferredComponentProps = {
            modulePath: this.modulePath,
            moduleLoader: this.moduleLoader,
            props: this.props,
            customWaiter: this.props.customWaiter,
            placeHolder: this.props.placeHolder
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onMouseOver: this._onActivate, onClick: this._onActivate, onFocus: this._onActivate, onMouseDown: this._onActivate, onKeyDown: this._onActivate, className: 'sp-deferredLivePersonaCard-root', tabIndex: -1 }, hovered ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ReactDeferredComponent_index__WEBPACK_IMPORTED_MODULE_4__["ReactDeferredComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._deferredComponentProps), this.props.children)) : (this.props.children)));
    };
    return DeferredSpLivePersonaCard;
}(office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

/**
 * @public
 */
function wrapWithDeferredSpLivePersonaCard(cardProps, childElement) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DeferredSpLivePersonaCard, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cardProps), childElement);
}
//# sourceMappingURL=DeferredSpLivePersonaCard.js.map

/***/ }),

/***/ "41cb":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/acronym/drawAcronym.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawAcronym(canvas, acronym, color, opacity) {
        if (opacity === void 0) { opacity = 1; }
        var ctx = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        ctx.fillStyle = "rgb(" + color + ")";
        ctx.fillRect(0, 0, width, height);
        ctx.font = (height * (21 / 55)) + "px Segoe UI";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        ctx.textBaseline = "middle";
        ctx.fillText(acronym, width / 2, height / 2);
    }
    exports.default = drawAcronym;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "4Nwi":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/ReactDeferredComponent.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return ReactDeferredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/hoist */ "ybkr");
/* harmony import */ var _uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__);
// OneDrive:IgnoreCodeCoverage



/**
 * People can use this component as a wrapper to wrap their components that need to be delay loaded.
 * Then they put this component into their before glass code. It contains logic to delay load the real target
 * components and will render them accordingly.
 * This ReactDeferredComponent works for both AMD and common js/web pack code base.
 * Please check how do we defer loading EditNav in odsp-next/controls/leftNav/react/ReactLeftNav
 * and defer loading ContextualManu and GroupCard in SiteHeaderHost of sp-client/sp-pages
 *
 * @public
 *
 * @example
 * render() {
 *   let deferredComponentProps: IReactDeferredComponentProps = {
 *    modulePath: target_module_path,
 *    moduleLoader: implementation of IReactDeferredComponentModuleLoader,
 *    customWaiter: Promise<void>, // start defer loading component until this custom waiter promise is resolved.
 *    props: properties of the defer loaded component.
 *  };
 *  let deferredComponent = <ReactDeferredComponent { ...deferredComponentProps } />;
 *  return (
 *      <div>
 *          <before glass components>
 *          {deferredComponent}
 *      </div>
 *  );
 * }
 */
var ReactDeferredComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReactDeferredComponent, _super);
    function ReactDeferredComponent(props) {
        var _this = _super.call(this, props) || this;
        _this._deferLoadComponent = function () {
            var ComponentModule = _this.state.ComponentModule;
            if (!ComponentModule && _this.props.moduleLoader && _this.props.modulePath) {
                _this.props.moduleLoader.load(_this.props.modulePath, _this.props.getModule).then(function (reactComp) {
                    if (_this.props.moduleLoader.parse) {
                        reactComp = _this.props.moduleLoader.parse(reactComp);
                    }
                    if (!reactComp) {
                        var error = "ReactDeferredComponent: component not found when loading " + _this.props.modulePath + " " +
                            '- check your load and parse functions';
                        console.error(error);
                    }
                    if (_this._mounted) {
                        _this.setState({ ComponentModule: reactComp });
                    }
                    else {
                        _this.state = {
                            ComponentModule: reactComp
                        };
                    }
                });
            }
        };
        _this._mounted = false;
        _this.state = {
            ComponentModule: undefined
        };
        _this._setupDeferLoadCallback(props);
        return _this;
    }
    ReactDeferredComponent.prototype.render = function () {
        var _this = this;
        var ComponentModule = this.state.ComponentModule;
        if (ComponentModule) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComponentModule, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: function (deferredComponentInstance) {
                    if (deferredComponentInstance) {
                        Object(_uifabric_utilities_lib_hoist__WEBPACK_IMPORTED_MODULE_2__["hoistMethods"])(_this, deferredComponentInstance);
                    }
                } }, this.props.props), this.props.children));
        }
        else {
            return this.props.placeHolder || null;
        }
    };
    ReactDeferredComponent.prototype.componentDidMount = function () {
        if (!this._mounted) {
            this._mounted = true;
        }
    };
    ReactDeferredComponent.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        this._setupDeferLoadCallback(newProps);
    };
    ReactDeferredComponent.prototype._setupDeferLoadCallback = function (props) {
        var customWaiter = props.customWaiter;
        if (customWaiter) {
            customWaiter.then(this._deferLoadComponent);
        }
        else {
            this._deferLoadComponent();
        }
    };
    return ReactDeferredComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ReactDeferredComponent.js.map

/***/ }),

/***/ "7PAD":
/*!*****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/utils/max.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function max(numbers) {
        return Math.max.apply(null, numbers);
    }
    exports.default = max;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "9SkL":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/image/getDataURL.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets a base64-encoded representation of the PNG data for the given HTML image
     * element.
     *
     * @param {HTMLImageElement} img The image element.
     * @returns {string} The image data, as a base64-encoded string.
     */
    function getDataURL(img) {
        if (!img) {
            return "";
        }
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        try {
            return canvas.toDataURL("image/png");
        }
        catch (error) {
            // The canvas is probably tainted, due to an image from another domain.
            return "";
        }
    }
    exports.default = getDataURL;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "9e5c":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/utils/values.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function values(object) {
        return Object
            .keys(object)
            .reduce(function (acc, next) { return (acc.push(object[next]), acc); }, []);
    }
    exports.default = values;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "9lav":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/ReactDeferredComponent/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: ReactDeferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactDeferredComponent */ "4Nwi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactDeferredComponent", function() { return _ReactDeferredComponent__WEBPACK_IMPORTED_MODULE_0__["ReactDeferredComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "CmGX":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/image/cropTo.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates information needed to crop a source rectangle so that it is
     * horizontally and vertically centered and fits into a destination rectangle.
     * If the height is not specified the height is calculated using the source
     * image width/height ratio.
     *
     * @example
     * var cropInfo = cropTo(120, 100, 110, 100);
     *
     * // Result:
     * // {
     * //     x: 5, y: 0,
     * //     sWidth: 110, sHeight: 100,
     * //     dWidth: 110, dHeight: 100
     * // }
     *
     * @param {number} sourceWidth The width of the source rectangle.
     * @param {number} sourceHeight The height of the source rectangle.
     * @param {number} destinationWidth The width of the destination rectangle.
     * @param {number} destinationHeight The height of the destination rectangle.
     * @returns {ICropInfo} The crop information.
     *
     * @see module:lib/image~cropToImg
     * @see module:lib/image~cropToCanvas
     */
    function cropTo(sourceWidth, sourceHeight, destinationWidth, destinationHeight) {
        var sourceRatio = sourceWidth / sourceHeight;
        if (!destinationHeight) {
            destinationHeight = destinationWidth / sourceRatio;
        }
        var dRatio = destinationWidth / destinationHeight;
        var width = sourceWidth;
        var height = sourceHeight;
        sourceRatio > dRatio ?
            width = Math.round(sourceHeight * dRatio) :
            height = Math.round(sourceWidth / dRatio);
        return {
            x: (sourceWidth - width) / 2,
            y: (sourceHeight - height) / 2,
            sWidth: width,
            sHeight: height,
            dWidth: destinationWidth,
            dHeight: destinationHeight
        };
    }
    exports.default = cropTo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "KSQo":
/*!*****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/TaskQueue.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TaskState;
    (function (TaskState) {
        TaskState[TaskState["Pending"] = 0] = "Pending";
        TaskState[TaskState["Active"] = 1] = "Active";
        TaskState[TaskState["Aborted"] = 2] = "Aborted";
        TaskState[TaskState["Done"] = 3] = "Done";
    })(TaskState = exports.TaskState || (exports.TaskState = {}));
    var Task = (function () {
        function Task(id, priority, start, state) {
            this.id = id;
            this.priority = priority;
            this.start = start;
            this.state = state;
        }
        Task.prototype.getPriority = function () {
            if (this.priority)
                return this.priority();
            return 0;
        };
        return Task;
    }());
    exports.Task = Task;
    /*
     * Implements a prioritized queue of tasks with a cap on the number of tasks that can execute concurrently.
     */
    var TaskQueue = (function () {
        function TaskQueue(maxConcurrentTasks, name) {
            this.pending = [];
            this.started = [];
            this.nextTaskId = 1;
            this.maxConcurrentTasks = maxConcurrentTasks;
            this.name = name || "TaskQueue";
        }
        TaskQueue.prototype.addTask = function (start, priority) {
            var _this = this;
            var task = new Task(this.nextTaskId++, priority, start, TaskState.Pending);
            this.pending.push(task);
            setTimeout(function () { return _this.schedule(); }, 0);
            return function () { return _this.abortTask(task); };
        };
        TaskQueue.prototype.pendingCount = function () {
            return this.pending.length;
        };
        TaskQueue.prototype.activeCount = function () {
            return this.started.length;
        };
        TaskQueue.prototype.schedule = function () {
            var _this = this;
            var _loop_1 = function () {
                var best = 0, i = 0;
                while (++i < this_1.pending.length) {
                    if (this_1.pending[i].getPriority() > this_1.pending[best].getPriority()) {
                        best = i;
                    }
                }
                var task = this_1.pending.splice(best, 1)[0];
                task.state = TaskState.Active;
                this_1.started.push(task);
                task.start(function () { return _this.taskDone(task); });
            };
            var this_1 = this;
            while (this.pending.length > 0 && this.started.length < this.maxConcurrentTasks) {
                _loop_1();
            }
        };
        TaskQueue.removeFrom = function (task, queue) {
            for (var i = 0; i < queue.length; i++) {
                if (queue[i].id === task.id) {
                    queue.splice(i, 1);
                    break;
                }
            }
        };
        TaskQueue.prototype.taskDone = function (task) {
            var _this = this;
            if (task.state === TaskState.Active) {
                TaskQueue.removeFrom(task, this.started);
                task.state = TaskState.Done;
                setTimeout(function () { return _this.schedule(); }, 0);
            }
        };
        TaskQueue.prototype.abortTask = function (task) {
            var _this = this;
            // Once a task has started, it's too late to abort it.
            if (task.state === TaskState.Pending) {
                TaskQueue.removeFrom(task, this.pending);
                task.state = TaskState.Aborted;
                setTimeout(function () { return _this.schedule(); }, 0);
            }
        };
        return TaskQueue;
    }());
    exports.TaskQueue = TaskQueue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "OPdo":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/acronym/AcronymImageLoader.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "17wl"), __webpack_require__(/*! ../ImageLoader */ "SpfV"), __webpack_require__(/*! ../animation */ "c5Gn"), __webpack_require__(/*! ../component/clear */ "+8+F"), __webpack_require__(/*! ./drawAcronym */ "41cb"), __webpack_require__(/*! ../image/cropToCanvas */ "RFpI"), __webpack_require__(/*! ../doughboyDetection/isDoughboy */ "ZO1j")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, ImageLoader_1, animation_1, clear_1, drawAcronym_1, cropToCanvas_1, isDoughboy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var animationDuration = 500;
    var AcronymImageLoader = (function (_super) {
        tslib_1.__extends(AcronymImageLoader, _super);
        function AcronymImageLoader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AcronymImageLoader.prototype.propsAreEqual = function (newProps) {
            return this.props.acronym === newProps.acronym &&
                this.props.color === newProps.color;
        };
        AcronymImageLoader.prototype.renderFallback = function (canvas) {
            if (this.animation) {
                this.animation.pause();
            }
            var animation = this.animation = new animation_1.default(canvas);
            animation.addComponent(new clear_1.default());
            animation.addComponent(new Acronym(this.props.acronym, this.props.color));
            animation.to(0);
        };
        AcronymImageLoader.prototype.renderImage = function (canvas, image) {
            if (isDoughboy_1.default(image)) {
                this.renderFallback(canvas);
                return;
            }
            var _a = this.dimensions = this.getCanvasDimensions(), width = _a.width, height = _a.height;
            if (!this.animation) {
                // The image synchronously finished loading. Just draw it.
                canvas.getContext("2d").drawImage(cropToCanvas_1.default(image, width, height), 0, 0);
            }
            else {
                // Animate the transition from the fallback image to the loaded image.
                this.animation.addComponent(new ImageOpacity(width, height, image));
                this.animation.play();
            }
        };
        AcronymImageLoader.prototype.renderFailed = function (canvas) { };
        AcronymImageLoader.prototype.dispose = function () {
            this.animation && this.animation.pause();
            delete this.animation;
        };
        return AcronymImageLoader;
    }(ImageLoader_1.default));
    exports.default = AcronymImageLoader;
    var Acronym = (function () {
        function Acronym(acronym, color) {
            this.acronym = acronym;
            this.color = color;
            this.transitions = {
                opacity: {
                    from: 1,
                    to: 0,
                    duration: animationDuration / 2
                }
            };
        }
        Acronym.prototype.render = function (canvas, props, now) {
            if (now < animationDuration) {
                drawAcronym_1.default(canvas, this.acronym, this.color, props.opacity);
            }
        };
        return Acronym;
    }());
    var ImageOpacity = (function () {
        function ImageOpacity(width, height, image) {
            this.width = width;
            this.height = height;
            this.transitions = {
                opacity: {
                    from: 0,
                    to: 1,
                    duration: animationDuration,
                    timing: function (x) { return 0.3 * x + 0.7 * Math.pow(x, 5); }
                }
            };
            this.image = cropToCanvas_1.default(image, width, height);
        }
        ImageOpacity.prototype.render = function (canvas, props) {
            var ctx = canvas.getContext("2d");
            ctx.save();
            ctx.globalAlpha = props.opacity;
            ctx.drawImage(this.image, 0, 0);
            ctx.restore();
        };
        return ImageOpacity;
    }());
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "PHbz":
/*!***********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/utils/mapObject.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(object, iteratee) {
        return Object
            .keys(object)
            .reduce(function (acc, next) { return (acc[next] = iteratee(object[next]),
            acc); }, {});
    }
    exports.default = default_1;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "RFpI":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/image/cropToCanvas.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./cropTo */ "CmGX")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, cropTo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The `cropToCanvas` function:
     *
     * 1. Gets the width and height of the specified source image
     * 2. Uses that to get crop information with the [[cropTo|`cropTo`]] function
     * 3. Creates a new canvas with the specified width and optional height
     * 4. Draws the original image onto the new canvas using the crop information
     *
     * Also note the [[cropToImg|`cropToImg`]] function.
     *
     * @param sourceImg The source image.
     * @param destinationWidth The width of the new canvas.
     * @param destinationHeight The height of the new canvas.
     * @returns The new canvas.
     */
    function cropToCanvas(sourceImg, destinationWidth, destinationHeight) {
        var cropInfo = cropTo_1.default(sourceImg.naturalWidth, sourceImg.naturalHeight, destinationWidth, destinationHeight), localCanvas = document.createElement("canvas"), localCtx = localCanvas.getContext("2d");
        localCanvas.width = cropInfo.dWidth;
        localCanvas.height = cropInfo.dHeight;
        localCtx.drawImage(sourceImg, cropInfo.x, cropInfo.y, cropInfo.sWidth, cropInfo.sHeight, 0, 0, cropInfo.dWidth, cropInfo.dHeight);
        return localCanvas;
    }
    exports.default = cropToCanvas;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "SpfV":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/ImageLoader.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * The `ImageLoader` module with the abstract [[ImageLoader|`ImageLoader`]]
 * component. See module index below for all module members.
 */ /***/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "17wl"), __webpack_require__(/*! react */ "cDcd"), __webpack_require__(/*! ./ImageLoadManager */ "ZZ9d"), __webpack_require__(/*! ./ImageLoadManager */ "ZZ9d"), __webpack_require__(/*! ./image/removeUnit */ "t7Cy")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, React, ImageLoadManager_1, ImageLoadManager_2, removeUnit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * [[include:src/ImageLoader.md]]
     */
    var ImageLoader = (function (_super) {
        tslib_1.__extends(ImageLoader, _super);
        function ImageLoader(props) {
            var _this = _super.call(this, props) || this;
            _this.shouldUpdateImage = false;
            _this.hasUnmounted = false;
            _this.state = {
                imageState: "queued",
                fingerprint: "",
                outcome: "none"
            };
            return _this;
        }
        ImageLoader.prototype.render = function () {
            var _this = this;
            var childImage = React.Children.toArray(this.props.children)[0];
            var _a = childImage.props, src = _a.src, alt = _a.alt, crossOrigin = _a.crossOrigin, restOfChildProps = tslib_1.__rest(_a, ["src", "alt", "crossOrigin"]);
            var canvasProps = tslib_1.__assign({}, restOfChildProps, { 
                // The "real" source; not necessarily the one rendered.
                "data-src": src || "", "data-status": this.getImageStatus(), "data-fingerprint": this.state.fingerprint });
            return (React.createElement("canvas", tslib_1.__assign({ ref: function (e) { return _this.canvasElement = e; } }, canvasProps), alt || null));
        };
        ImageLoader.prototype.componentDidMount = function () {
            var _a = this.getCanvasDimensions(), width = _a.width, height = _a.height;
            this.canvasElement.width = width;
            this.canvasElement.height = height;
            this.fetchImage();
        };
        ImageLoader.prototype.fetchImage = function () {
            var imageElement = getReactImageElement(this.props);
            var src = imageElement.props.src;
            var state = ImageLoadManager_1.ImageState.Queued;
            if (src) {
                state = ImageLoadManager_1.default.register(src, this.props.priority === undefined ?
                    ImageLoadManager_2.ImagePriority.Medium :
                    this.props.priority, this, imageElement.props.crossOrigin);
            }
            if (state !== ImageLoadManager_1.ImageState.Loaded) {
                this.renderFallback(this.canvasElement);
            }
        };
        ImageLoader.prototype.componentWillReceiveProps = function (newProps) {
            this.shouldUpdateImage =
                this.shouldUpdateImage ||
                    getReactImageElement(this.props) !== getReactImageElement(newProps) ||
                    !this.propsAreEqual(newProps);
        };
        ImageLoader.prototype.componentDidUpdate = function (prevProps) {
            if (this.shouldUpdateImage) {
                this.shouldUpdateImage = false;
                ImageLoadManager_1.default.unregister(getReactImageElement(prevProps).props.src, this);
                this.fetchImage();
            }
        };
        ImageLoader.prototype.componentWillUnmount = function () {
            this.hasUnmounted = true;
            ImageLoadManager_1.default.unregister(getReactImageElement(this.props).props.src, this);
            this.dispose();
        };
        /**
         * Image status to be assigned as an attribute of the output DOM element for
         * debugging purposes.
         */
        ImageLoader.prototype.getImageStatus = function () {
            return this.state.imageState === "finished" ?
                this.state.outcome :
                this.state.imageState;
        };
        ImageLoader.prototype.imageStartedLoading = function (source) {
            if (!this.hasUnmounted) {
                this.setState({ imageState: "loading" });
            }
        };
        ImageLoader.prototype.imageFinishedLoading = function (source, error, image) {
            // Note that this may occur after the component is unmounted.
            if (this.hasUnmounted) {
                return;
            }
            this.setState({
                imageState: "finished",
                fingerprint: image && image.getAttribute("data-fingerprint"),
                outcome: error ? "load-error" : "success"
            });
            if (!error && image) {
                this.renderImage(this.canvasElement, image);
            }
            else if (error) {
                this.renderFailed(this.canvasElement);
            }
        };
        ImageLoader.prototype.getTargetElement = function () {
            return this.canvasElement;
        };
        ImageLoader.prototype.getCanvasDimensions = function () {
            if (this.props.dimensions) {
                return this.props.dimensions;
            }
            var _a = getComputedStyle(this.canvasElement), width = _a.width, height = _a.height;
            return {
                width: removeUnit_1.default(width, 100),
                height: removeUnit_1.default(height, 100)
            };
        };
        return ImageLoader;
    }(React.Component));
    exports.ImageLoader = ImageLoader;
    function getReactImageElement(props) {
        var child = React.Children.toArray(props.children)[0];
        if (!React.isValidElement(child)) {
            throw new Error("ImageLoader: Child must be a valid React element.");
        }
        if (child.type !== "img") {
            throw new Error("ImageLoader: Child must be an image element.");
        }
        return child;
    }
    exports.default = ImageLoader;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "T75O":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/acronym/getColor.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The RGB color swatches.
     */
    var colorSwatches = [
        "153, 180, 51",
        "107, 165, 231",
        "231, 115, 189",
        "0, 163, 0",
        "30, 113, 69",
        "255, 0, 151",
        "126, 56, 120",
        "96, 60, 186",
        "29, 29, 29",
        "0, 171, 169",
        "45, 137, 239",
        "43, 87, 151",
        "218, 83, 44",
        "185, 29, 71",
        "238, 17, 17",
    ];
    var numberOfColorSwatches = colorSwatches.length;
    function getColor(displayName) {
        var color = "0, 0, 0";
        var hashCode = 0;
        for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
            var ch = displayName.charCodeAt(iLen);
            var shift = iLen % 8;
            hashCode ^= (ch << shift) + (ch >> (8 - shift));
        }
        color = colorSwatches[hashCode % numberOfColorSwatches];
        return color;
    }
    exports.default = getColor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "TtRq":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/acronym/getAcronym.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uifabric/utilities/lib-amd/initials */ "u4q3"), __webpack_require__(/*! @uifabric/utilities/lib-amd/rtl */ "f251")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, initials_1, rtl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates an acronym with up to two characters based on the specified person
     * display name. Uses the [`getInitials`][d1] function from the
     * [`@uifabric/utilities` npm package][d2].
     * [d1]: https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/utilities/src/initials.ts
     * [d2]: https://www.npmjs.com/package/@uifabric/utilities
     *
     * @param displayName The person display name.
     */
    function getAcronym(displayName) {
        return initials_1.getInitials(displayName, rtl_1.getRTL());
    }
    exports.default = getAcronym;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Vnag":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/icons/OfficeFileNameHelper.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: wordType, onenoteType, powerpointType, excelType, visioType, OfficeAppToExtensionsMap, OfficeIconFileTypeMap, getOfficeAppFriendlyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordType", function() { return wordType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onenoteType", function() { return onenoteType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerpointType", function() { return powerpointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelType", function() { return excelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visioType", function() { return visioType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeAppToExtensionsMap", function() { return OfficeAppToExtensionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeIconFileTypeMap", function() { return OfficeIconFileTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfficeAppFriendlyName", function() { return getOfficeAppFriendlyName; });
// OneDrive:IgnoreCodeCoverage
var _a;
var doc = 'ms-word';
var one = 'onenote|UsePlain';
var ppt = 'ms-powerpoint';
var xls = 'ms-excel';
var vsd = 'ms-visio';
var pub = 'ms-publisher';
var accdb = 'ms-access';
var mpp = 'ms-project';
var wordType = doc;
var onenoteType = one;
var powerpointType = ppt;
var excelType = xls;
var visioType = vsd;
var OfficeAppToExtensionsMap = {
    'ms-access': ['accdb'],
    'ms-word': ['doc', 'docm', 'docx', 'dot', 'dotm', 'dotx', 'odt'],
    'ms-project': ['mpp'],
    'onenote|UsePlain': ['one', 'onepkg', 'onetoc2', 'notebook'],
    'ms-powerpoint': [
        'odp',
        'pot',
        'potm',
        'potx',
        'ppa',
        'ppam',
        'pps',
        'ppsm',
        'ppsx',
        'ppt',
        'pptm',
        'pptx'
    ],
    'ms-publisher': ['pub'],
    'ms-excel': ['csv', 'ods', 'xla', 'xlam', 'xll', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlt', 'xltm', 'xltx'],
    'ms-visio': ['vdw', 'vsd', 'vsdm', 'vsdx', 'vsl', 'vss', 'vssm', 'vssx', 'vst', 'vstm', 'vstx']
};
var OfficeIconFileTypeMap = {
    accdb: accdb,
    csv: xls,
    doc: doc,
    docm: doc,
    docx: doc,
    dot: doc,
    dotm: doc,
    dotx: doc,
    odp: ppt,
    ods: xls,
    odt: doc,
    one: one,
    onepkg: one,
    onetoc2: one,
    mpp: mpp,
    notebook: one,
    pot: ppt,
    potm: ppt,
    potx: ppt,
    ppa: ppt,
    ppam: ppt,
    pps: ppt,
    ppsm: ppt,
    ppsx: ppt,
    ppt: ppt,
    pptm: ppt,
    pptx: ppt,
    pub: pub,
    vdw: vsd,
    vsd: vsd,
    vsdm: vsd,
    vsdx: vsd,
    vsl: vsd,
    vss: vsd,
    vssm: vsd,
    vssx: vsd,
    vst: vsd,
    vstm: vsd,
    vstx: vsd,
    xla: xls,
    xlam: xls,
    xll: xls,
    xls: xls,
    xlsb: xls,
    xlsm: xls,
    xlsx: xls,
    xlt: xls,
    xltm: xls,
    xltx: xls
};
var officeFriendlyNameMap = (_a = {},
    _a[accdb] = 'Access',
    _a[doc] = 'Word',
    _a[one] = 'OneNote',
    _a[ppt] = 'PowerPoint',
    _a[xls] = 'Excel',
    _a[vsd] = 'Visio',
    _a[pub] = 'Publisher',
    _a[mpp] = 'Project',
    _a);
function getOfficeAppFriendlyName(app) {
    return officeFriendlyNameMap[app] || app;
}
//# sourceMappingURL=OfficeFileNameHelper.js.map

/***/ }),

/***/ "YM3A":
/*!*********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/timing/linear.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Linear timing function.
     */
    function default_1(at) {
        return at;
    }
    exports.default = default_1;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ZO1j":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/doughboyDetection/isDoughboy.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./getFingerprint */ "iOpL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, getFingerprint_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A map with the result of doughboy detections. True means that the image
     * source has been detected to be a doughboy. False means that the image source
     * has been confirmed to not be a doughboy.
     */
    exports.doughboyDetections = {};
    exports.fingerprints = [
        // Keep it sorted to spot duplicates easily.
        "03590920bdfd864322cf7e8cca891bb4",
        "0381c1bcfc0b809623b805e322dd9fa1",
        "03d374b16722d252588fa2d58a3e828d",
        "0540187fe91e3b78e3b5d06999eebf80",
        "083313c7a8083e625c0def330dbd7cdd",
        "0974242efa7f7b9bb52240ee615b931b",
        "0bbb13911b2ce26da17bbdf2ea3404b6",
        "0d827eba349aa0591be57331540fc4f4",
        "0e47add0cdf9530b9e30ddef0c489a40",
        "0f78c3aa1a3da070d8f62bb9a2ee76ae",
        "0fe8fe2f5220263be4cbd5f61d9cf23c",
        "178a70df6ddfa637e3d4f0ea9a80fbdd",
        "1a960363e8daa165d3b82144b0d68c03",
        "1e033e719ef573ec796c38bf8ac41dfc",
        "1f420b466365299439abf6fe2f8bff6a",
        "20f0b5fb7de21fa889b002714ec58f20",
        "23d161d98611bae938697c4d0af3bfd4",
        "241b2579d59d10255b2e405fbcbb9117",
        "26736ef07954f237039d261c357f06e5",
        "2fce211aefcaec7742455aa616edfa32",
        "2f73a4291c58a29acc783b73fa88c282",
        "3178a5744ef0cd2b61757583d7b7ccf1",
        "319f83a0e835d32ce2660a4de654a7c0",
        "3a9c8d1a8fae79004ed36c0147bdd71b",
        "3fa3e0b2e84cb77f00799dca10f1a03e",
        "4a48f26592f4e1498d7a478a4c48609c",
        "4312d1e9ec65cb2412e83a64f50fcdd1",
        "44f2e736a8f04d1b47a1151eb37e0a64",
        "48e8c755618be2d66c67976910bac81f",
        "49fe29d48bd08304cb7a9be0a4256b8a",
        "5b60516651aebbbc796eafdee967ef2c",
        "613c9c11d6bfdec3dd2a568412b79762",
        "68df1aaa4d4d20f6749dcf0cbcbfd182",
        "6c06b3944a82b194dd56b848d5c1e53f",
        "6fe016add870f202c0a30c70ee943c73",
        "7ad602295f8386b7615b582d87bcc294",
        "7f25de15c2e701c901252f81c1911af2",
        "8193ab3946149e9175a3c3d44219e9e1",
        "8a2bceaca7e84b8f4da535d772625c6f",
        "8a430e2d85dc31b60c0c6f68d7cc4c20",
        "8b02cb6c9f9d7a7e895970d94317e20a",
        "8f296bb8aac7be4f08409d8dbbbc8714",
        "90ac8c284c2ac3a6f6b7e6518dbb6227",
        "98f88501895b89e844d24793dadc8a9f",
        "9a85f4ab720503d37748e2d854a238dc",
        "9aae9266066558e0e42223ed4d82b1f8",
        "a284f85a5a3096a5e90f670316993365",
        "a3f3c88a874da09d43c8f88deb9246b6",
        "ab08afa407a9c009513a07525fadf367",
        "ba3cc3f8be4b187472e2f5f7d5376bb9",
        "b3b9212834745aa4457f459f12e56653",
        "b8a930a9d063513ea9bba50a34aaaba5",
        "b8f6d5994ef9e9a96180ea43dbb00ed6",
        "baa367f8c4aef7abdcb912c61f53ed10",
        "bc4fab3f78291f699922e57650be557f",
        "c065f1d4e77c3678be1ff6aa835dda69",
        "c4ae58fb4e94e08cfff98beddeb615ac",
        "c63681d72227d0813a5cdfccb62be638",
        "c903233a37600953361096a5c28d0d46",
        "c9dc379c327bef6f8db124f5f013fe22",
        "cbcecad0b1eb14fe8186c566f22b0fa1",
        "cd26d43c2fabf764bfc054d06462f64f",
        "cd849e71a1785cc1f046b181e68bbec3",
        "d283507fbbeb97715a321ddbd2442164",
        "d6c8114c17555266c90ad015c2acd8b9",
        "dacd2fb8ace0a4176a74a228539b3d33",
        "e6ede0691f3312bd6fd9f1066153a868",
        "e72abfe847c8792f99bc8b2cbeb65886",
        "ea754dbc9eba7d06ae4b444f722c24df",
        "f0d90ca687e974534dfc12798166c7e6",
        "ffb18190d6e56748b5d6d743ff7421ad"
    ]
        .reduce(function (map, fingerprint) { return (map[fingerprint] = true, map); }, {});
    /**
     * Returns true if the given image is a known "doughboy" image; i.e., a default
     * profile image.
     *
     * @param img The image in question.
     */
    function isDoughboy(img) {
        return img.src in exports.doughboyDetections ?
            exports.doughboyDetections[img.src] :
            exports.doughboyDetections[img.src] =
                (exports.fingerprints[getFingerprint_1.default(img)] || false);
    }
    exports.default = isDoughboy;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ZZ9d":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/ImageLoadManager.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module ImageLoadManager
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./TaskQueue */ "KSQo"), __webpack_require__(/*! ./createImage */ "uY+L")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, TaskQueue_1, createImage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImagePriority;
    (function (ImagePriority) {
        ImagePriority[ImagePriority["High"] = 0] = "High";
        ImagePriority[ImagePriority["Medium"] = 1] = "Medium";
        ImagePriority[ImagePriority["Low"] = 2] = "Low";
    })(ImagePriority = exports.ImagePriority || (exports.ImagePriority = {}));
    var ImageState;
    (function (ImageState) {
        ImageState[ImageState["Queued"] = 0] = "Queued";
        ImageState[ImageState["Loading"] = 1] = "Loading";
        ImageState[ImageState["Loaded"] = 2] = "Loaded";
        ImageState[ImageState["Failed"] = 3] = "Failed";
    })(ImageState = exports.ImageState || (exports.ImageState = {}));
    function insideViewport(elem) {
        var rect = elem.getBoundingClientRect();
        return (elem && rect && rect.bottom >= 0 && rect.right >= 0
            && rect.top < Math.min(window.innerHeight, document.body.clientHeight)
            && rect.left < Math.min(window.innerWidth, document.body.clientWidth));
    }
    var QueuedImage = (function () {
        function QueuedImage(source, priority, state, crossOrigin) {
            this.source = source;
            this.priority = priority;
            this.state = state;
            this.crossOrigin = crossOrigin;
            this.listeners = [];
            this.abort = null;
            this.loader = null;
        }
        QueuedImage.prototype.addListener = function (listener) {
            this.listeners.push(listener);
        };
        QueuedImage.prototype.removeListener = function (listener) {
            this.listeners = this.listeners.filter(function (x) { return x !== listener; });
        };
        QueuedImage.prototype.getPriority = function () {
            // TODO: Maybe let the size of images factor into their priority?
            var p = 0;
            this.listeners.forEach(function (l) {
                var elem = l.getTargetElement();
                if (elem) {
                    if (insideViewport(elem)) {
                        // Images inside the viewport are important
                        p += 5;
                    }
                    else {
                        // Those outside the viewport are less important
                        p += 1;
                    }
                }
            });
            switch (this.priority) {
                case ImagePriority.High:
                    return p * 3;
                case ImagePriority.Medium:
                    return p * 2;
                default:
                    return p;
            }
        };
        return QueuedImage;
    }());
    exports.QueuedImage = QueuedImage;
    var ImageLoadManager = (function () {
        function ImageLoadManager() {
            this.tasks = new TaskQueue_1.TaskQueue(6, "ImageLoadManager");
            this.images = {};
        }
        /**
         * Schedules an image source to be downloaded with a certain priority, and
         * registers a listener to be notified of status changes for that image.
         */
        ImageLoadManager.prototype.register = function (source, priority, listener, crossOrigin) {
            if (!source) {
                return;
            }
            if (source.match(/^data:/i)) {
                // Data URLs will be able to load instantly, without using a connection,
                // so we can view them as already loaded
                listener.imageFinishedLoading(source, false, null);
            }
            var image = this.images[source];
            // If the image is queued.
            if (image) {
                image.addListener(listener);
                switch (image.state) {
                    case ImageState.Loading:
                        listener.imageStartedLoading(source);
                        break;
                    case ImageState.Loaded:
                        listener.imageFinishedLoading(source, false, image.loader);
                        break;
                    case ImageState.Failed:
                        listener.imageFinishedLoading(source, true, image.loader);
                        break;
                    case ImageState.Queued:
                        break;
                    default:
                        throw new Error("Bad image state: " + image.state);
                }
                // If the image is not queued.
            }
            else {
                image = new QueuedImage(source, priority, ImageState.Queued, crossOrigin);
                image.addListener(listener);
                this.images[source] = image;
                this.addImageTask(image);
            }
            return image.state;
        };
        ImageLoadManager.prototype.addImageTask = function (image) {
            var _this = this;
            image.abort && image.abort();
            image.abort = this.tasks.addTask(function (taskDone) { return _this.startLoadingImage(image, taskDone); }, function () { return image.getPriority(); });
        };
        ImageLoadManager.prototype.startLoadingImage = function (queuedImage, taskDone) {
            var _this = this;
            queuedImage.state = ImageState.Loading;
            var image = createImage_1.default();
            queuedImage.loader = image;
            if (queuedImage.crossOrigin) {
                image.setAttribute("crossOrigin", queuedImage.crossOrigin);
            }
            image.onload = function () {
                return _this.finishedLoadingImage(queuedImage, false, taskDone);
            };
            image.onerror = function () {
                return _this.finishedLoadingImage(queuedImage, true, taskDone);
            };
            image.src = queuedImage.source;
            queuedImage.listeners.forEach(function (f) { return f.imageStartedLoading(queuedImage.source); });
        };
        ImageLoadManager.prototype.finishedLoadingImage = function (image, error, taskDone) {
            if (image.state === ImageState.Loading) {
                image.state = error ? ImageState.Failed : ImageState.Loaded;
                if (error) {
                    image.loader = null;
                }
                image.listeners.forEach(function (f) { return f.imageFinishedLoading(image.source, error, image.loader); });
            }
            taskDone();
        };
        /**
         * Unregisters a listener that was previously registered. If all listeners
         * for an image are unregistered, and the image has not yet started to load,
         * the download will be canceled.
         */
        ImageLoadManager.prototype.unregister = function (source, listener) {
            var image = this.images[source];
            if (image) {
                image.removeListener(listener);
                if (image.state === ImageState.Queued && image.listeners.length === 0) {
                    if (image.abort) {
                        image.abort();
                        image.abort = null;
                    }
                    delete this.images[source];
                }
            }
        };
        return ImageLoadManager;
    }());
    exports.ImageLoadManager = ImageLoadManager;
    exports.default = new ImageLoadManager();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "c5Gn":
/*!*****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/animation.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "17wl"), __webpack_require__(/*! ./utils/mapObject */ "PHbz"), __webpack_require__(/*! ./utils/max */ "7PAD"), __webpack_require__(/*! ./utils/flatten */ "ip+5"), __webpack_require__(/*! ./utils/values */ "9e5c"), __webpack_require__(/*! ./timing/linear */ "YM3A"), __webpack_require__(/*! ./now */ "ne4z")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, mapObject_1, max_1, flatten_1, values_1, linear_1, now_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Animation = (function () {
        function Animation(canvas) {
            this._durationCalculated = true;
            this._duration = 0;
            this._now = 0;
            this.components = [];
            this._speed = 1;
            this.canvas = canvas;
        }
        Animation.prototype.addComponent = function (component) {
            this._durationCalculated = false;
            component.transitions = mapObject_1.default(component.transitions || {}, function (t) { return (tslib_1.__assign({ from: 0, to: 0, duration: 0, delay: 0, timing: linear_1.default }, t)); });
            this.components.push(component);
        };
        /**
         * Renders the animation at the specified location. The specified now
         * parameter argument is normalized. The normalized value is returned.
         */
        Animation.prototype.to = function (now) {
            var _this = this;
            var normalizedNow = Math.min(Math.max(now, 0), this.duration());
            var self = this;
            self._now = normalizedNow;
            this.components.forEach(function (c) {
                return c.render(_this.canvas, calculateProps(c.transitions || [], normalizedNow), normalizedNow);
            });
            return normalizedNow;
        };
        Animation.prototype.duration = function () {
            if (this._durationCalculated) {
                return this._duration;
            }
            this._durationCalculated = true;
            return this._duration = max_1.default(flatten_1.default(this.components
                .map(function (c) { return c.transitions; })
                .map(values_1.default))
                .map(function (t) { return t.duration + t.delay; }));
        };
        Animation.prototype.prevFrame = function () {
            this.to(this._now - 1000 / 60);
        };
        Animation.prototype.nextFrame = function () {
            this.to(this._now + 1000 / 60);
        };
        Animation.prototype.play = function (done) {
            this.pause();
            var prevAnimTime = this._now;
            var prevTime = now_1.default();
            var numFrames = 0;
            var self = this;
            function render(currentTime) {
                numFrames++;
                // Calculating current times.
                var elapsed = currentTime - prevTime;
                var currentAnimTime = prevAnimTime + elapsed * self._speed;
                // Updating animation and time related variables
                // according to new calculated times.
                prevAnimTime = self.to(currentAnimTime);
                prevTime = currentTime;
                // Checking to see if animation is done. If so an
                // animation report will be created. If not a new
                // animation frame will be requested.
                var isDone = self._speed > 0 ?
                    self._now >= self.duration() :
                    self._now <= 0;
                if (!isDone) {
                    self._cancelToken = requestAnimationFrame(render);
                }
                else {
                    done && done({
                        frames: numFrames,
                        duration: now_1.default() - prevTime
                    });
                }
            }
            this._cancelToken = requestAnimationFrame(function (now) {
                if (now <= prevTime) {
                    self._cancelToken = requestAnimationFrame(render);
                }
                else {
                    render(now);
                }
            });
            return this.pause.bind(this);
        };
        Animation.prototype.pause = function () {
            cancelAnimationFrame(this._cancelToken);
        };
        Animation.prototype.speed = function (speed) {
            this._speed = speed;
        };
        Animation.prototype.dump = function (width, height, step, numberOfColumns) {
            if (step === void 0) { step = 16; }
            if (numberOfColumns === void 0) { numberOfColumns = -1; }
            var numberOfFrames = Math.floor(this.duration() / step);
            if (numberOfFrames * step < this.duration()) {
                numberOfFrames++;
            }
            // We also want the last frame.
            numberOfFrames++;
            if (numberOfColumns < 1) {
                numberOfColumns = Math.floor(Math.sqrt(numberOfFrames));
            }
            var numberOfRows = Math.ceil(numberOfFrames / numberOfColumns);
            console.log(numberOfFrames, numberOfColumns, numberOfRows);
            var canvas = document.createElement("canvas");
            canvas.width = width * numberOfColumns + numberOfColumns + 1;
            canvas.height = height * numberOfRows + numberOfRows + 1;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "#666";
            ctx.fillRect(0, 0, canvas.width, 1);
            ctx.fillRect(0, 0, 1, canvas.height);
            for (var i = 1; i <= numberOfColumns; i++) {
                ctx.fillRect(width * i + 1 * i, 0, 1, canvas.height);
            }
            for (var i = 1; i <= numberOfRows; i++) {
                ctx.fillRect(0, height * i + 1 * i, canvas.width, 1);
            }
            for (var i = 0; i < numberOfFrames; i++) {
                this.to(step * i);
                ctx.drawImage(this.canvas, (i % numberOfColumns) * width + i % numberOfColumns + 1, Math.floor(i / numberOfColumns) * height +
                    Math.floor(i / numberOfColumns) + 1);
            }
            return canvas;
        };
        return Animation;
    }());
    exports.default = Animation;
    function calculateProps(transitions, now) {
        return mapObject_1.default(transitions, function (t) {
            if (now <= t.delay) {
                return t.from;
            }
            if (now >= t.delay + t.duration) {
                return t.to;
            }
            return t.from + (t.to - t.from) * t.timing((now - t.delay) / t.duration);
        });
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "f251":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@1.10.4_react-dom@16.9.0+react@16.9.0/node_modules/@uifabric/utilities/lib-amd/rtl.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./KeyCodes */ "gPvg"), __webpack_require__(/*! ./dom */ "oAgv")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, KeyCodes_1, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Default to undefined so that we initialize on first read.
    var _isRTL;
    /**
     * Gets the rtl state of the page (returns true if in rtl.)
     */
    function getRTL() {
        var isRTL = _isRTL;
        if (isRTL === undefined) {
            var doc = dom_1.getDocument();
            if (doc && doc.documentElement) {
                isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            }
        }
        return isRTL;
    }
    exports.getRTL = getRTL;
    /**
     * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
     */
    function setRTL(isRTL) {
        var doc = dom_1.getDocument();
        if (doc && doc.documentElement) {
            doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        }
        _isRTL = isRTL;
    }
    exports.setRTL = setRTL;
    /**
     * Returns the given key, but flips right/left arrows if necessary.
     */
    function getRTLSafeKeyCode(key) {
        if (getRTL()) {
            if (key === KeyCodes_1.KeyCodes.left) {
                key = KeyCodes_1.KeyCodes.right;
            }
            else if (key === KeyCodes_1.KeyCodes.right) {
                key = KeyCodes_1.KeyCodes.left;
            }
        }
        return key;
    }
    exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//# sourceMappingURL=rtl.js.map


/***/ }),

/***/ "gPvg":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@1.10.4_react-dom@16.9.0+react@16.9.0/node_modules/@uifabric/utilities/lib-amd/KeyCodes.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["a"] = 65] = "a";
        KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
        KeyCodes[KeyCodes["comma"] = 188] = "comma";
        KeyCodes[KeyCodes["del"] = 46] = "del";
        KeyCodes[KeyCodes["down"] = 40] = "down";
        KeyCodes[KeyCodes["end"] = 35] = "end";
        KeyCodes[KeyCodes["enter"] = 13] = "enter";
        KeyCodes[KeyCodes["escape"] = 27] = "escape";
        KeyCodes[KeyCodes["home"] = 36] = "home";
        KeyCodes[KeyCodes["left"] = 37] = "left";
        KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
        KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
        KeyCodes[KeyCodes["right"] = 39] = "right";
        KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
        KeyCodes[KeyCodes["space"] = 32] = "space";
        KeyCodes[KeyCodes["tab"] = 9] = "tab";
        KeyCodes[KeyCodes["up"] = 38] = "up";
    })(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//# sourceMappingURL=KeyCodes.js.map


/***/ }),

/***/ "iOpL":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/doughboyDetection/getFingerprint.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! blueimp-md5 */ "ul1S"), __webpack_require__(/*! ../image/getDataURL */ "9SkL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, md5, getDataURL_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Computes an md5 hash of the image data for the given HTML image element.
     *
     * @param {HTMLImageElement} img The image element.
     * @returns {string} The md5 hash as a hexadecimal string.
     */
    function getFingerprint(img) {
        if (!img) {
            return null;
        }
        var previouslyCalculatedFingerprint = img.getAttribute("data-fingerprint");
        if (previouslyCalculatedFingerprint) {
            return previouslyCalculatedFingerprint;
        }
        var fingerprint = md5(getDataURL_1.default(img))
            .replace(/^data:image\/png;base64,/, "");
        img.setAttribute("data-fingerprint", fingerprint);
        return fingerprint;
    }
    exports.default = getFingerprint;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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

/***/ "ip+5":
/*!*********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/utils/flatten.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function flatten(list) {
        return list.reduce(function (acc, next) { return acc.concat(next); }, []);
    }
    exports.default = flatten;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "jvbC":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_128c93e743f3bc9a86e8e34a0882fce7/node_modules/@ms/odsp-shared-react/lib/components/LivePersonaCardAdapter/DeferredSpLivePersonaCard.scss.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"])([{ "rawString": ".sp-deferredLivePersonaCard-root{display:inline-block}\n" }]);
//# sourceMappingURL=DeferredSpLivePersonaCard.scss.js.map

/***/ }),

/***/ "mkpW":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Utilities.js


/***/ }),

/***/ "ne4z":
/*!***********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/now.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var loadedAt = new Date().valueOf();
    /**
     * A proxy for [`performance.now()`](
     * https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) method.
     */
    exports.now = window.performance && performance.now ?
        performance.now.bind(performance) :
        function () { return new Date().valueOf() - loadedAt; };
    exports.default = exports.now;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "oAgv":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@1.10.4_react-dom@16.9.0+react@16.9.0/node_modules/@uifabric/utilities/lib-amd/dom.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Sets the virtual parent of an element.
     * Pass `undefined` as the `parent` to clear the virtual parent.
     */
    function setVirtualParent(child, parent) {
        var virtualChild = child;
        var virtualParent = parent;
        if (!virtualChild._virtual) {
            virtualChild._virtual = {
                children: []
            };
        }
        var oldParent = virtualChild._virtual.parent;
        if (oldParent && oldParent !== parent) {
            // Remove the child from its old parent.
            var index = oldParent._virtual.children.indexOf(virtualChild);
            if (index > -1) {
                oldParent._virtual.children.splice(index, 1);
            }
        }
        virtualChild._virtual.parent = virtualParent || undefined;
        if (virtualParent) {
            if (!virtualParent._virtual) {
                virtualParent._virtual = {
                    children: []
                };
            }
            virtualParent._virtual.children.push(virtualChild);
        }
    }
    exports.setVirtualParent = setVirtualParent;
    function getVirtualParent(child) {
        var parent;
        if (child && isVirtualElement(child)) {
            parent = child._virtual.parent;
        }
        return parent;
    }
    exports.getVirtualParent = getVirtualParent;
    /**
     * Gets the element which is the parent of a given element.
     * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
     * real DOM parent when present.
     */
    function getParent(child, allowVirtualParents) {
        if (allowVirtualParents === void 0) { allowVirtualParents = true; }
        return child && (allowVirtualParents && getVirtualParent(child) ||
            child.parentNode && child.parentNode);
    }
    exports.getParent = getParent;
    /**
     * Determines whether or not a parent element contains a given child element.
     * If `allowVirtualParents` is true, this method may return `true` if the child
     * has the parent in its virtual element hierarchy.
     */
    function elementContains(parent, child, allowVirtualParents) {
        if (allowVirtualParents === void 0) { allowVirtualParents = true; }
        var isContained = false;
        if (parent && child) {
            if (allowVirtualParents) {
                isContained = false;
                while (child) {
                    var nextParent = getParent(child);
                    if (nextParent === parent) {
                        isContained = true;
                        break;
                    }
                    child = nextParent;
                }
            }
            else if (parent.contains) {
                isContained = parent.contains(child);
            }
        }
        return isContained;
    }
    exports.elementContains = elementContains;
    var _isSSR = false;
    /**
     * Helper to set ssr mode to simulate no window object returned from getWindow helper.
     */
    function setSSR(isEnabled) {
        _isSSR = isEnabled;
    }
    exports.setSSR = setSSR;
    /** Helper to get the window object. */
    function getWindow(rootElement) {
        if (_isSSR) {
            return undefined;
        }
        else {
            return (rootElement &&
                rootElement.ownerDocument &&
                rootElement.ownerDocument.defaultView ?
                rootElement.ownerDocument.defaultView :
                window);
        }
    }
    exports.getWindow = getWindow;
    /**
     * Helper to get the document object.
     */
    function getDocument(rootElement) {
        if (_isSSR) {
            return undefined;
        }
        else {
            return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
        }
    }
    exports.getDocument = getDocument;
    /**
     * Helper to get bounding client rect, works with window.
     */
    function getRect(element) {
        var rect;
        if (element) {
            if (element === window) {
                rect = {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    right: window.innerWidth,
                    bottom: window.innerHeight
                };
            }
            else if (element.getBoundingClientRect) {
                rect = element.getBoundingClientRect();
            }
        }
        return rect;
    }
    exports.getRect = getRect;
    /**
     * Determines whether or not an element has the virtual hierarchy extension.
     */
    function isVirtualElement(element) {
        return element && !!element._virtual;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//# sourceMappingURL=dom.js.map


/***/ }),

/***/ "t7Cy":
/*!************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/image/removeUnit.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function removeUnit(size, fallback) {
        return parseInt((size || "").replace("px", ""), 0) || fallback;
    }
    exports.default = removeUnit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "u4q3":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@1.10.4_react-dom@16.9.0+react@16.9.0/node_modules/@uifabric/utilities/lib-amd/initials.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Regular expression matching characters to ignore when calculating the initials.
     * The first part matches characters within parenthesis, including the parenthesis.
     * The second part matches special ASCII characters except space, plus some unicode special characters.
     */
    var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
    /** Regular expression matching one or more spaces. */
    var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
    /**
     * Regular expression matching languages for which we currently don't support initials.
     * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
     * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
     * Japanese: Hiragana, Katakana.
     * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
     */
    /* tslint:disable:max-line-length */
    var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
    /* tslint:enable:max-line-length */
    function getInitialsLatin(displayName, isRtl) {
        var initials = '';
        var splits = displayName.split(' ');
        if (splits.length === 2) {
            initials += splits[0].charAt(0).toUpperCase();
            initials += splits[1].charAt(0).toUpperCase();
        }
        else if (splits.length === 3) {
            initials += splits[0].charAt(0).toUpperCase();
            initials += splits[2].charAt(0).toUpperCase();
        }
        else if (splits.length !== 0) {
            initials += splits[0].charAt(0).toUpperCase();
        }
        if (isRtl && initials.length > 1) {
            return initials.charAt(1) + initials.charAt(0);
        }
        return initials;
    }
    function cleanupDisplayName(displayName) {
        displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
        displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
        displayName = displayName.trim();
        return displayName;
    }
    /** Get (up to 2 characters) initials based on display name of the persona. */
    function getInitials(displayName, isRtl) {
        if (displayName == null) {
            return '';
        }
        displayName = cleanupDisplayName(displayName);
        if (UNSUPPORTED_TEXT_REGEX.test(displayName)) {
            return '';
        }
        return getInitialsLatin(displayName, isRtl);
    }
    exports.getInitials = getInitials;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//# sourceMappingURL=initials.js.map


/***/ }),

/***/ "uY+L":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/createImage.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createImage() {
        return new Image();
    }
    exports.default = createImage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ul1S":
/*!*************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/blueimp-md5@2.18.0/node_modules/blueimp-md5/js/md5.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

/* eslint-disable strict */

;(function ($) {
  'use strict'

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff)
    }
    return output
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32
    }
    return output
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input))
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s))
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return md5
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this)


/***/ }),

/***/ "wLiO":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/image-lib@2.2.2_react-dom@16.9.0+react@16.9.0/node_modules/@ms/image-lib/lib/acronym/TextboyImageLoader.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * The [[TextboyImageLoader|``TextboyImageLoader``]] stateless component renders
 * a textboy while waiting for a child image element to load. It is a wrapper
 * around the [[AcronymImageLoader|`AcronymImageLoader`]] which has built in
 * doughboy detection.
 *
 * `TextboyImageLoader` uses the:
 * * [[getAcronym|`getAcronym`]] function to generate the textboy acronym from
 *   the [[ITextboyImageLoaderProps.displayName|`displayName`]] property
 * * [[getColor|`getColor`]] function to generate the textboy background color
 *
 * Sample usage:
 * ```xml
 * <TextboyImageLoader displayName="Person Name">
 *    <img src="person.jpg" />
 * </TextboyImageLoader>
 * ```
 *
 * See the [[ITextboyImageLoaderProps|`ITextboyImageLoaderProps`]] interface for
 * more options.
 */ /***/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "17wl"), __webpack_require__(/*! react */ "cDcd"), __webpack_require__(/*! ./AcronymImageLoader */ "OPdo"), __webpack_require__(/*! ./getAcronym */ "TtRq"), __webpack_require__(/*! ./getColor */ "T75O")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, React, AcronymImageLoader_1, getAcronym_1, getColor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The `TextboyImageLoader` stateless component. See the
     * [[ITextboyImageLoaderProps|`ITextboyImageLoaderProps`]] interface for
     * options. See module documentation above for more information.
     */
    function TextboyImageLoader(_a) {
        var displayName = _a.displayName, rest = tslib_1.__rest(_a, ["displayName"]);
        return (React.createElement(AcronymImageLoader_1.default, tslib_1.__assign({ acronym: getAcronym_1.default(displayName), color: getColor_1.default(displayName) }, rest)));
    }
    exports.default = TextboyImageLoader;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ybkr":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/hoist.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/hoist.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~sp-topic-shared-topic-card_[locale].js.map