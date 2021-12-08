(window["webpackJsonp_2e09fb9b_13bb_48f2_859f_97d6fff71176_1_1_13"] = window["webpackJsonp_2e09fb9b_13bb_48f2_859f_97d6fff71176_1_1_13"] || []).push([["rumone-fci"],{

/***/ "8+rL":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/rumone-fci@1.0.1/node_modules/@ms/rumone-fci/lib/FCI.js ***!
  \*******************************************************************************************************************/
/*! exports provided: FCIMeasurer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCIMeasurer", function() { return FCIMeasurer; });
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ "b6fa");

function mark(name) {
    if (window.performance && performance.mark) {
        performance.mark(name);
    }
}
var FCIMeasurer = /** @class */ (function () {
    /* tslint:enable:no-inferrable-types */
    function FCIMeasurer(options) {
        /* tslint:disable:no-inferrable-types */
        this._longTaskId = 0;
        this._checkFCIRunId = 0;
        this._isDisposed = false;
        var requiredMainThreadCPUIdleDurationInMilliseconds = options.requiredMainThreadCPUIdleDurationInMilliseconds, measurementStartTime = options.measurementStartTime;
        this._measurementStartTime = measurementStartTime;
        this._requiredMainThreadCPUIdleDurationInMilliseconds = requiredMainThreadCPUIdleDurationInMilliseconds;
        this._resultResolver = {
            resolve: undefined,
            reject: undefined
        };
        this._fciPromise = undefined;
        this._longTasks = [];
        this._processLongTaskPreQueue();
        this._registerLongTaskObserver();
    }
    /**
     * Measure First CPU idle
     */
    FCIMeasurer.prototype.measureFCI = function () {
        var _this = this;
        if (this._isDisposed) {
            throw 'FCIMeasurer is disposed.';
        }
        if (!this._fciPromise) {
            this._fciPromise = new Promise(function (resolve, reject) {
                _this._resultResolver.resolve = resolve;
                _this._resultResolver.reject = reject;
            });
        }
        this._tryScheduleNextCheck();
        return this._fciPromise;
    };
    FCIMeasurer.prototype._tryScheduleNextCheck = function () {
        var _this = this;
        if (this._checkFCIRunId) {
            // clear previously schduled run if it has not been done yet
            clearTimeout(this._checkFCIRunId);
        }
        var earliestPossibleCheckTime = this._findEarlestPossibleCheckTime();
        var now = performance.now();
        var nextCheckTime = Math.max(0, earliestPossibleCheckTime - now);
        this._checkFCIRunId = setTimeout(function () {
            _this._checkFCI();
        }, nextCheckTime);
    };
    FCIMeasurer.prototype._findEarlestPossibleCheckTime = function () {
        var latestLongTask = this._getLatestLongTask();
        var latestLongTaskEndTime = (latestLongTask && latestLongTask.end) || -Infinity;
        return Math.max(latestLongTaskEndTime + this._requiredMainThreadCPUIdleDurationInMilliseconds, this._measurementStartTime, performance.now());
    };
    FCIMeasurer.prototype._checkFCI = function () {
        var latestLongTask = this._getLatestLongTask();
        var latestLongTaskEndTime = (latestLongTask && latestLongTask.end) || -Infinity;
        var currentTime = performance.now();
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("Running checkFCI:");
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("Measurement start time", this._measurementStartTime);
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("Current time", currentTime);
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("Long tasks", this._longTasks);
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("latestLongTaskEndTime", latestLongTaskEndTime);
        if (currentTime - latestLongTaskEndTime >= this._requiredMainThreadCPUIdleDurationInMilliseconds) {
            var possibleFCI = Math.max(latestLongTaskEndTime, this._measurementStartTime);
            if (possibleFCI && latestLongTask) {
                var endMarkName = latestLongTask.endMarkName;
                if (endMarkName) {
                    // looks like we have found FCI caused by long task, show it in profile
                    performance.measure('FCI', undefined, endMarkName);
                }
            }
            Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("possibleFCI:", possibleFCI);
            this._resultResolver.resolve &&
                this._resultResolver.resolve({
                    fci: possibleFCI,
                    longTasks: this._longTasks
                });
            this._dispose();
        }
    };
    FCIMeasurer.prototype._dispose = function () {
        clearTimeout(this._checkFCIRunId);
        this._longTaskObserver.disconnect();
        this._isDisposed = true;
    };
    FCIMeasurer.prototype._getLatestLongTask = function () {
        var ret = undefined;
        for (var _i = 0, _a = this._longTasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (!ret || task.end > ret.end) {
                ret = task;
            }
        }
        return ret;
    };
    FCIMeasurer.prototype._processLongTaskPreQueue = function () {
        var observer = window.__tti.o;
        var entries = window.__tti.e;
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (entry.entryType === 'longtask') {
                var longtask = this._createLongTask(entry);
                this._longTasks.push(longtask);
            }
        }
        observer.disconnect();
    };
    FCIMeasurer.prototype._registerLongTaskObserver = function () {
        var _this = this;
        this._longTaskObserver = new PerformanceObserver(function (entryList) {
            var entries = entryList.getEntries();
            for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                var entry = entries_2[_i];
                if (entry.entryType === 'longtask') {
                    _this._longTaskFinishedCallback(entry);
                }
            }
        });
        this._longTaskObserver.observe({ entryTypes: ['longtask'] });
    };
    FCIMeasurer.prototype._createLongTask = function (performanceEntry) {
        var taskEndTime = performanceEntry.startTime + performanceEntry.duration;
        var task = {
            attribution: performanceEntry.attribution,
            name: performanceEntry.name,
            start: Math.round(performanceEntry.startTime),
            end: Math.round(taskEndTime),
            id: this._longTaskId++
        };
        return task;
    };
    FCIMeasurer.prototype._longTaskFinishedCallback = function (performanceEntry) {
        Object(_Log__WEBPACK_IMPORTED_MODULE_0__["log"])("Long task finished: ", performanceEntry);
        var task = this._createLongTask(performanceEntry);
        var markName = "longTaskEnd" + task.id;
        mark(markName);
        task.endMarkName = markName;
        this._longTasks.push(task);
        this._tryScheduleNextCheck();
    };
    return FCIMeasurer;
}());

//# sourceMappingURL=FCI.js.map

/***/ }),

/***/ "KhX7":
/*!*********************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/rumone-fci@1.0.1/node_modules/@ms/rumone-fci/lib/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: getFirstCPUIdle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstCPUIdle", function() { return getFirstCPUIdle; });
/* harmony import */ var _FCI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FCI */ "8+rL");

/**
 * Returns a promise that resolves to the first CPU Idle time
 * (in milliseconds) or null if the browser doesn't support the features
 * required for detection.
 * @return
 * @public
 */
function getFirstCPUIdle(options) {
    if ('PerformanceLongTaskTiming' in window) {
        var detector = new _FCI__WEBPACK_IMPORTED_MODULE_0__["FCIMeasurer"](options);
        return detector.measureFCI();
    }
    else {
        return Promise.resolve(null);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "b6fa":
/*!*******************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/rumone-fci@1.0.1/node_modules/@ms/rumone-fci/lib/Log.js ***!
  \*******************************************************************************************************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/**
 * Prints a log statement to the console if the DEBUG flag is true.
 * @param {...*} args
 */
// tslint:disable-next-line:no-any
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isFCILoggingEnabled()) {
        // eslint-disable-next-line no-console
        console.log.apply(console, args);
    }
}
function isFCILoggingEnabled() {
    try {
        if ('sessionStorage' in window && window.sessionStorage) {
            /* tslint:disable-next-line:no-string-literal */
            var debugStr = window.sessionStorage['enableFCILogging'];
            var debug = debugStr && debugStr.toLowerCase() === 'true';
            return debug && typeof console !== 'undefined' && !!console;
        }
    }
    catch (e) {
        // sessionStorage errors
    }
    return false;
}
//# sourceMappingURL=Log.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.rumone-fci_none.js.map