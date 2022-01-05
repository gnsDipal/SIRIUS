(window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] = window["webpackJsonp_49d290fb_a38e_4001_97d3_a2db486db2fa_0_1_0"] || []).push([["vendors~data-sync-nucleus"],{

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

/***/ "6Tvd":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/decorators/withPrivacyClassification.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: withPrivacyClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPrivacyClassification", function() { return withPrivacyClassification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Decorator for an `AriaTelemetryHandler` which ensures all events have a specified `privacyClassification` field
 * before being recorded to Aria.
 * @internal
 */
function withPrivacyClassification(privacyClassification) {
    return function (create) {
        var getPrivacyClassification = typeof privacyClassification === 'function' ? privacyClassification : function () { return privacyClassification; };
        return /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WithPrivacyClassification, _super);
            function WithPrivacyClassification(params) {
                var _this = this;
                var baseOnLogEvent = params.onLogEvent;
                _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { onLogEvent: function (clonedEvent) {
                        var event = baseOnLogEvent ? baseOnLogEvent(clonedEvent) : clonedEvent;
                        if (event.data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.data), { privacyClassification: getPrivacyClassification(event) }) });
                        }
                    } })) || this;
                return _this;
            }
            return WithPrivacyClassification;
        }(create));
    };
}
//# sourceMappingURL=withPrivacyClassification.js.map

/***/ }),

/***/ "6e34":
/*!**********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/ApiError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomError */ "unYt");


/**
 * Custom error base class for the common scenario of generic errors that should be reported in
 * Quality of Service metrics.
 * @public
 */
var ApiError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApiError, _super);
    function ApiError(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ApiError';
        var innerError = props.innerError;
        var innerErrorAsApiError = innerError ? innerError : undefined;
        var errorData = innerErrorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof innerErrorAsApiError.correlationId === 'string'
                ? { correlationId: innerErrorAsApiError.correlationId }
                : {})), (typeof innerErrorAsApiError.isExpected === 'boolean'
                ? { isExpected: innerErrorAsApiError.isExpected }
                : {})), (typeof innerErrorAsApiError.name === 'string' ? { code: innerErrorAsApiError.name } : {})), (typeof innerErrorAsApiError.code === 'string' ? { code: innerErrorAsApiError.code } : {})), (typeof innerErrorAsApiError.extraData === 'object'
                ? { extraData: innerErrorAsApiError.extraData }
                : {})) : {};
        var _a = props.correlationId, correlationId = _a === void 0 ? errorData.correlationId : _a, _b = props.isExpected, isExpected = _b === void 0 ? errorData.isExpected : _b, extraData = props.extraData;
        _this.correlationId = correlationId;
        _this.isExpected = !!isExpected;
        _this.code = props.code || errorData.code || '';
        _this.extraData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (errorData.extraData || {})), (extraData || {}));
        return _this;
    }
    return ApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_1__["CustomError"]));

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ "71Qj":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/NucleusTelemetry.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: NucleusAriaTelemetryHandler, QosEvent, initNucleusTelemetry, wrapQos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusAriaTelemetryHandler", function() { return NucleusAriaTelemetryHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QosEvent", function() { return QosEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNucleusTelemetry", function() { return initNucleusTelemetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapQos", function() { return wrapQos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ms_telemetry_addon_aria_lib_AriaTelemetryHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/AriaTelemetryHandler */ "yBP4");
/* harmony import */ var _NucleusLogging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NucleusLogging */ "QLOS");
/* harmony import */ var _ms_telemetry_addon_aria_lib_decorators_fromWebPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/decorators/fromWebPlatform */ "KqWT");
/* harmony import */ var _ms_telemetry_addon_aria_lib_decorators_withAriaLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/decorators/withAriaLoader */ "qWdj");
/* harmony import */ var _ms_telemetry_addon_aria_lib_decorators_withPrivacyClassification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/telemetry-addon-aria/lib/decorators/withPrivacyClassification */ "6Tvd");
/* harmony import */ var _ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/telemetry-manager/lib/Manager */ "wq9f");
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony import */ var _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/telemetry-manager/lib/events/Qos.event */ "eT67");
/* harmony import */ var _ms_telemetry_manager_lib_utilities_getQosEndSchemaFromError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ms/telemetry-manager/lib/utilities/getQosEndSchemaFromError */ "JKig");











/**
 * Telemetry handler which bakes in the configuration for using the Nucleus ARIA tenant.
 */
var NucleusAriaTelemetryHandler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NucleusAriaTelemetryHandler, _super);
    function NucleusAriaTelemetryHandler(params) {
        var _this = this;
        var _a = params.context, context = _a === void 0 ? {} : _a;
        _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), tenantToken: '8255342a9a4d4b069b7adbf4798cf544-bf74f026-b3db-4745-a135-a4ad2ba90b51-7489' })) || this;
        return _this;
    }
    return NucleusAriaTelemetryHandler;
}(Object(_ms_telemetry_addon_aria_lib_decorators_withAriaLoader__WEBPACK_IMPORTED_MODULE_5__["withAriaLoader"])()(Object(_ms_telemetry_addon_aria_lib_decorators_fromWebPlatform__WEBPACK_IMPORTED_MODULE_4__["fromWebPlatform"])()(!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('5502ec9e-0fd0-4af9-9df8-ecd6e6b0022c', '1/7/2021', 'Treat nucleus internal telemetry as RequiredService')
    ? Object(_ms_telemetry_addon_aria_lib_decorators_withPrivacyClassification__WEBPACK_IMPORTED_MODULE_6__["withPrivacyClassification"])("requiredService" /* requiredService */)(_ms_telemetry_addon_aria_lib_AriaTelemetryHandler__WEBPACK_IMPORTED_MODULE_2__["AriaTelemetryHandler"])
    : _ms_telemetry_addon_aria_lib_AriaTelemetryHandler__WEBPACK_IMPORTED_MODULE_2__["AriaTelemetryHandler"]))));

var nucleusTelemetryKillswitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('5502ec9e-0fd0-4af9-9df8-ecd6e6b0022c', '1/7/2021', 'Disable Nucleus Telemetry');
var manager = Object(_ms_telemetry_manager_lib_Manager__WEBPACK_IMPORTED_MODULE_7__["createManager"])();
var QosEvent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QosEvent, _super);
    function QosEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QosEvent;
}(_ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__["Qos"].withManager(manager)));
var nucleusAria = undefined;
var initialized = false;
/**
 * Initializes the Nucleus telemetry state. Only the first call has an effect.
 * @param context common datapoints for the aria event.
 * @param override for unit tests, an override for the default manager implementation.
 */
function initNucleusTelemetry(context) {
    if (nucleusTelemetryKillswitch) {
        return;
    }
    if (!initialized) {
        initialized = true;
        if (!process.env.JEST_WORKER_ID) {
            // outside of jest, use aria
            nucleusAria = new NucleusAriaTelemetryHandler({ context: context });
            nucleusAria.attach(manager);
        }
        // Add console logging of Qos events if we're in a debug build.
        if (true) {
            var endMap_1 = new WeakMap();
            manager.addLogHandler(function (clonedEvent) {
                if (clonedEvent.eventType === _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_8__["ClonedEventType"].End) {
                    var qosName = endMap_1.get(clonedEvent.vector);
                    if (qosName) {
                        var message = 'Nucleus QoS end: ';
                        var endData = clonedEvent.data;
                        if (endData) {
                            switch (endData.resultType) {
                                case _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__["ResultTypeEnum"].Success:
                                    message = 'Nucleus QoS success: ';
                                    break;
                                case _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__["ResultTypeEnum"].Failure:
                                    message = 'Nucleus QoS failure: ';
                                    break;
                                case _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__["ResultTypeEnum"].ExpectedFailure:
                                    message = 'Nucleus QoS expected failure: ';
                                    break;
                            }
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_3__["log"])("" + message + qosName + " (" + (clonedEvent.endTime - clonedEvent.startTime) + "ms)");
                    }
                    endMap_1.delete(clonedEvent.vector);
                }
                else if (clonedEvent.eventType === _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_8__["ClonedEventType"].Start) {
                    var startData = clonedEvent.data;
                    var qosName = startData && startData.name ? startData.name : "" + Math.random();
                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_3__["log"])('Nucleus QoS start: ' + qosName);
                    endMap_1.set(clonedEvent.vector, qosName);
                }
            });
        }
    }
}
function wrapQos(options, operation) {
    var name = options.name, onFailure = options.onFailure;
    try {
        var qosInfo_1 = {};
        var getCompleteSchema = function () {
            return {
                extraData: qosInfo_1,
                resultType: _ms_telemetry_manager_lib_events_Qos_event__WEBPACK_IMPORTED_MODULE_9__["ResultTypeEnum"].Success
            };
        };
        // tslint:disable-next-line:no-any
        var getError = function (e) {
            var base = Object(_ms_telemetry_manager_lib_utilities_getQosEndSchemaFromError__WEBPACK_IMPORTED_MODULE_10__["getQosEndSchemaFromError"])(e);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, base), { extraData: base.extraData ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, base.extraData), qosInfo_1) : qosInfo_1 });
        };
        return !nucleusTelemetryKillswitch
            ? QosEvent.instrumentPromise({ name: name }, function () { return operation(qosInfo_1); }, getCompleteSchema, getError)
            : operation(qosInfo_1);
    }
    catch (error) {
        if (onFailure) {
            return Promise.resolve(onFailure.result);
        }
        else {
            throw error;
        }
    }
}
//# sourceMappingURL=NucleusTelemetry.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../process@0.11.10/node_modules/process/browser.js */ "gXI/")))

/***/ }),

/***/ "AqOT":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/NucleusInternal.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: unwrapPromise, mapExceptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapPromise", function() { return unwrapPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapExceptions", function() { return mapExceptions; });
function unwrapPromise(f) {
    return f().catch(function () { return undefined; });
}
function mapExceptions(f, e) {
    try {
        return f();
    }
    catch (_a) {
        throw e();
    }
}
//# sourceMappingURL=NucleusInternal.js.map

/***/ }),

/***/ "Fb2z":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/AriaEventBuilder.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: getAriaEventInfo, buildAriaEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaEventInfo", function() { return getAriaEventInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAriaEvent", function() { return buildAriaEvent; });
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");



/**
 * Receives an event produced by the telemetry system and extracts and formats the data suitable
 * for logging to Aria.
 * @internal
 */
function getAriaEventInfo(event) {
    var values = {
        CorrelationVector: event.vector.toString(),
        ValidationErrors: event.validationErrors,
        WebLog_FullName: event.eventName,
        WebLog_EventType: _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_0__["ClonedEventType"][event.eventType]
    };
    var names = event.eventName.split(',');
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1) {
            values["WebLog_Type_" + name_1] = 1;
        }
    }
    var data = event.data, context = event.context;
    if (context) {
        for (var key in context) {
            if (Object.prototype.hasOwnProperty.call(context, key)) {
                var value = context[key];
                if (value === undefined || value === null) {
                    continue;
                }
                var loggingName = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(key);
                values[loggingName] = value;
            }
        }
    }
    if (data) {
        for (var field in data) {
            if (Object.prototype.hasOwnProperty.call(data, field)) {
                var value = data[field];
                if (value === undefined || value === null) {
                    continue;
                }
                var propertyMetadata = event.metadata[field];
                if (propertyMetadata) {
                    var loggingName = propertyMetadata.isPrefixingDisabled
                        ? Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(field)
                        : Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(propertyMetadata.definedInName) + "_" + field;
                    var type = propertyMetadata.type;
                    if (type === 4 /* Object */) {
                        for (var subField in value) {
                            if (Object.prototype.hasOwnProperty.call(value, subField)) {
                                var subValue = value[subField];
                                if (subValue !== undefined && subValue !== null && subValue !== '') {
                                    var serializedValue = void 0;
                                    // Do not write values which would serialize as empty since they do not provide meaningful
                                    // information in instrumentation back-ends.
                                    if (typeof subValue === 'object') {
                                        // Value has already been checked for null.
                                        try {
                                            serializedValue = JSON.stringify(subValue);
                                        }
                                        catch (e) {
                                            serializedValue = subValue;
                                        }
                                    }
                                    else {
                                        serializedValue = subValue;
                                    }
                                    values[loggingName + "_" + subField.replace(/\./g, '_')] = serializedValue;
                                }
                            }
                        }
                    }
                    else {
                        values[loggingName] = type === 6 /* Enum */ ? propertyMetadata.typeRef[value] : value;
                    }
                }
            }
        }
    }
    return {
        name: event.isEventTypePrefixingDisabled ? names[names.length - 2] : "ev_" + names[names.length - 2],
        values: values
    };
}
/**
 * Given an Aria implementation, builds an event suitable for logging.
 * @internal
 */
function buildAriaEvent(ariaTelemetry, event) {
    var _a = getAriaEventInfo(event), name = _a.name, values = _a.values;
    var eventProperties = new ariaTelemetry.EventProperties();
    eventProperties.name = name;
    setProperties(ariaTelemetry, eventProperties, values);
    return eventProperties;
}
function setProperties(ariaTelemetry, properties, values) {
    // We are getting a lot of errorCode 3 aria errors complaining about invalid property keys
    // In order to fix the problem we need to know what the problematic keys are
    var lastKey;
    try {
        for (var key in values) {
            if (Object.prototype.hasOwnProperty.call(values, key)) {
                lastKey = key;
                properties.setProperty(key, values[key]);
            }
        }
    }
    catch (exception) {
        var errorCode = void 0;
        var error = void 0;
        if (exception instanceof ariaTelemetry.Exception) {
            errorCode = exception.ErrorCode();
            error = new Error("Aria error: " + exception.toString());
        }
        if (error) {
            // If it is an aria error that is thrown then log it with the error code and the key we tried to set
            exception.handled = true;
            _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_2__["logError"](error, {
                errorCode: errorCode,
                propertyKey: lastKey
            });
        }
        // Regardless of what kind of error it was, rethrow the error so we don't try to log the event
        throw exception;
    }
}
//# sourceMappingURL=AriaEventBuilder.js.map

/***/ }),

/***/ "HMXl":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/EventBase.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: ClonedEventType, ValidationErrorType, AccountType, addEventProps, EventBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonedEventType", function() { return ClonedEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorType", function() { return ValidationErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventProps", function() { return addEventProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBase", function() { return EventBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "wq9f");
/* harmony import */ var _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CorrelationVector */ "L3+i");
/* harmony import */ var _ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/utilities-objects/lib/assign */ "Xdo2");




// tslint:disable:no-bitwise
var _id = 0;
/**
 * @public
 */
var ClonedEventType;
(function (ClonedEventType) {
    ClonedEventType[ClonedEventType["Single"] = 0] = "Single";
    ClonedEventType[ClonedEventType["Start"] = 1] = "Start";
    ClonedEventType[ClonedEventType["End"] = 2] = "End";
})(ClonedEventType || (ClonedEventType = {}));
/**
 * @public
 */
var ValidationErrorType;
(function (ValidationErrorType) {
    ValidationErrorType[ValidationErrorType["NoParent"] = 1] = "NoParent";
})(ValidationErrorType || (ValidationErrorType = {}));
/**
 * @public
 */
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Consumer"] = 0] = "Consumer";
    AccountType[AccountType["ConsumerAnonymous"] = 1] = "ConsumerAnonymous";
    AccountType[AccountType["Business"] = 2] = "Business";
    AccountType[AccountType["BusinessAnonymous"] = 3] = "BusinessAnonymous";
    AccountType[AccountType["Unknown"] = 4] = "Unknown";
})(AccountType || (AccountType = {}));
/**
 * @public
 */
function addEventProps(eventPrototype, props, metadata, baseClass) {
    Object(_ms_utilities_objects_lib_assign__WEBPACK_IMPORTED_MODULE_3__["assign"])(eventPrototype, props);
    var resultMetadata = {};
    for (var key in metadata) {
        if (Object.prototype.hasOwnProperty.call(metadata, key)) {
            var item = metadata[key];
            var result = (resultMetadata[key] = ((typeof item === 'number' ? { type: item } : item)));
            result.definedInName = props.shortEventName;
            if (result.type === 2 /* Number */) {
                result.isMetric = true;
            }
        }
    }
    eventPrototype.metadata = baseClass
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseClass.prototype.metadata), resultMetadata) : resultMetadata;
}
var managerSpecificEventTypes = new WeakMap(); // tslint:disable-line:no-any
/**
 * @public
 */
var EventBase = /** @class */ (function () {
    function EventBase(data, startType, parent) {
        this.context = {};
        this.validationErrors = 0;
        this.data = {};
        this.context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.addContext({}));
        this.id = _id++;
        this.enabled = this._isEnabled();
        // Set the parent id if needed
        if (parent) {
            this.parentId = parent.id;
        }
        else if (this.requiresParent) {
            this._addValidationError(ValidationErrorType.NoParent);
        }
        // Set the start time
        this.startTime = (data && data.startTimeOverride) || _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"].getTime();
        this.vector = new _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__["CorrelationVector"](parent ? parent.vector : _CorrelationVector__WEBPACK_IMPORTED_MODULE_2__["CorrelationVector"].RootVector);
        // Set the data if we have it
        if (data) {
            this._setData(data);
        }
        // Send the start event
        this._logEvent(startType);
    }
    /**
     * This will return true if the event is enabled
     */
    EventBase.enabled = function () {
        return this.prototype._isEnabled();
    };
    /**
     * This will return true if the event is of this type
     * @param event {IEvent} The event to compare
     */
    EventBase.isTypeOf = function (event) {
        return event.eventName.indexOf(this.prototype.shortEventName + ',') >= 0;
    };
    // tslint:disable-next-line:no-any
    EventBase.withManager = function (manager) {
        if (!manager || manager === _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"]) {
            return this;
        }
        var eventTypesForManager = managerSpecificEventTypes.get(manager);
        if (!eventTypesForManager) {
            eventTypesForManager = new WeakMap();
            managerSpecificEventTypes.set(manager, eventTypesForManager);
        }
        var eventType = eventTypesForManager.get(this);
        if (eventType) {
            return eventType;
        }
        // @ts-ignore
        var EventWithManager = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithManager, _super);
            function EventWithManager() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EventWithManager;
        }(this));
        // @ts-ignore
        EventWithManager.prototype.manager = manager;
        eventType = EventWithManager;
        eventTypesForManager.set(this, eventType);
        return eventType;
    };
    // tslint:disable-next-line:no-any
    EventBase.withData = function (modifier) {
        if (!modifier) {
            return this;
        }
        var addData = typeof modifier !== 'function'
            ? // tslint:disable-next-line:no-any
                function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modifier), data)); }
            : modifier;
        // @ts-ignore
        var EventWithData = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithData, _super);
            function EventWithData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // tslint:disable-next-line:no-any
            EventWithData.prototype.addData = function (data) {
                var localData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), addData(data));
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localData), _super.prototype.addData.call(this, localData));
            };
            return EventWithData;
        }(this));
        return EventWithData;
    };
    // tslint:disable-next-line:no-any
    EventBase.withContext = function (modifier) {
        if (!modifier) {
            return this;
        }
        var addContext = typeof modifier !== 'function'
            ? function (context) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modifier), context)); }
            : modifier;
        // @ts-ignore
        var EventWithContext = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventWithContext, _super);
            function EventWithContext() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EventWithContext.prototype.addContext = function (context) {
                var localContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), addContext(context));
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localContext), _super.prototype.addContext.call(this, localContext));
            };
            return EventWithContext;
        }(this));
        return EventWithContext;
    };
    // tslint:disable-next-line:no-any
    EventBase.from = function (sourceEventType) {
        if (!sourceEventType) {
            return this;
        }
        return this.withManager(sourceEventType.prototype.manager)
            .withContext(function (context) { return sourceEventType.prototype.addContext(context); })
            .withData(function (data) { return sourceEventType.prototype.addData(data); }); // tslint:disable-line:no-any
    };
    EventBase.prototype.addContext = function (context) {
        return copyObject(this.manager, context, {});
    };
    EventBase.prototype.addData = function (data) {
        return data;
    };
    EventBase.prototype._isEnabled = function () {
        // All events are enabled by default
        return !this.samplingFeature || _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"].isFeatureEnabled(this.samplingFeature);
    };
    EventBase.prototype._setData = function (data) {
        var localData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.addData(this.data)), data);
        processData(this.manager, this.metadata, localData, this.data);
    };
    EventBase.prototype._logEvent = function (eventType) {
        this.manager.logEvent(this, eventType);
    };
    EventBase.prototype._addValidationError = function (type) {
        this.validationErrors = this.validationErrors | type;
        this.manager.logValidationError(this, type);
    };
    return EventBase;
}());

function processData(manager, metadata, source, target) {
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key in metadata) {
            var declaration = metadata[key];
            processValue(manager, source, target, key, declaration);
        }
    }
}
function processValue(manager, source, target, key, keyDeclaration) {
    var value = source[key];
    switch (typeof value) {
        case 'string':
            // Allow the cleaner to know what it is being stored as
            // This might be used to always scrub values for a particular key
            var cleaned = manager.cleanString(value, key, keyDeclaration);
            if (cleaned !== undefined) {
                target[key] = cleaned;
            }
            return;
        case 'undefined':
            return;
        case 'object':
            // Need to handle ABExperiment objects
            if (value && Object.getPrototypeOf(value) === Object.prototype) {
                // Still overwrite
                target[key] = copyObject(manager, value, {});
            }
            else {
                target[key] = value;
            }
            return;
        default:
            target[key] = value;
            return;
    }
}
function copyObject(manager, source, target) {
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        processValue(manager, source, target, key);
    }
    return target;
}
var proto = EventBase.prototype;
proto.eventName = 'EventBase,';
proto.shortEventName = 'EventBase';
// All events are not critical by default
proto.critical = false;
// All events require parents by default
proto.requiresParent = true;
proto.manager = _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"];
//# sourceMappingURL=EventBase.js.map

/***/ }),

/***/ "JKig":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/utilities/getQosEndSchemaFromError.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: getQosEndSchemaFromError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQosEndSchemaFromError", function() { return getQosEndSchemaFromError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_Qos_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Qos.event */ "eT67");


/**
 * @public
 */
function getQosEndSchemaFromError(error) {
    var errorAsApiError = error ? error : undefined;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ error: error && (error.message || error.name), resultCode: (errorAsApiError && getResultCode(errorAsApiError)) || (error && error.name) || 'Unknown' }, (errorAsApiError
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof errorAsApiError.isExpected === 'boolean'
            ? {
                resultType: errorAsApiError.isExpected
                    ? _events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].ExpectedFailure
                    : _events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure
            }
            : {
                resultType: _events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Failure
            })) : {
        resultType: _events_Qos_event__WEBPACK_IMPORTED_MODULE_1__["ResultTypeEnum"].Success
    })), { extraData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ stack: error && error.stack }, (errorAsApiError
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (typeof errorAsApiError.innerError === 'object'
                ? {
                    innerError: getQosEndSchemaFromError(errorAsApiError.innerError)
                }
                : {})), (typeof errorAsApiError.correlationId === 'string'
                ? {
                    correlationId: errorAsApiError.correlationId
                }
                : {})), (typeof errorAsApiError.extraData === 'object'
                ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, errorAsApiError.extraData) : {})) : {})) });
}
function getResultCode(apiError) {
    var parts = [];
    if (typeof apiError.extraData === 'object' &&
        apiError.extraData &&
        typeof apiError.extraData.status !== 'undefined') {
        parts.push("[" + apiError.extraData.status + "]");
    }
    if (typeof apiError.code === 'string') {
        parts.push("" + apiError.code);
    }
    return parts.join(' ');
}
//# sourceMappingURL=getQosEndSchemaFromError.js.map

/***/ }),

/***/ "KP+r":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/ListUtilities.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: DataSyncListViewApiRedirectionFeature, DataSyncListFieldApiRedirectionFeature, EnableNucleusRenderListFilterDataRedirection, NucleusEnableFavortiesGetListsBy, setIgnoreDisabledRoutes, DataSyncListStatus, DataSyncListStatusError, DataSyncListStatusAttentionReason, ListSyncConflictType, getListOperationFromUrl, normalizeGuid, getUserListPreSyncIssues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncListViewApiRedirectionFeature", function() { return DataSyncListViewApiRedirectionFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncListFieldApiRedirectionFeature", function() { return DataSyncListFieldApiRedirectionFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableNucleusRenderListFilterDataRedirection", function() { return EnableNucleusRenderListFilterDataRedirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusEnableFavortiesGetListsBy", function() { return NucleusEnableFavortiesGetListsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIgnoreDisabledRoutes", function() { return setIgnoreDisabledRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatus", function() { return DataSyncListStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatusError", function() { return DataSyncListStatusError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatusAttentionReason", function() { return DataSyncListStatusAttentionReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSyncConflictType", function() { return ListSyncConflictType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListOperationFromUrl", function() { return getListOperationFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeGuid", function() { return normalizeGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserListPreSyncIssues", function() { return getUserListPreSyncIssues; });
/* harmony import */ var _NucleusLogging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NucleusLogging */ "QLOS");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");


var DataSyncListViewApiRedirectionFeature = {
    ODB: 1686
};
var DataSyncListFieldApiRedirectionFeature = {
    ODB: 60072
};
var EnableNucleusRenderListFilterDataRedirection = {
    ODB: 1833
};
var NucleusEnableFavortiesGetListsBy = {
    ODB: 1508
};
var ignoreDisabledRoutes = false;
function setIgnoreDisabledRoutes(ignore) {
    ignoreDisabledRoutes = ignore;
}
var shouldIgnoreDisabledRoutes = function () { return ignoreDisabledRoutes; };
var checkToLowerKillSwitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('d4dfd3ef-72de-45a2-bb9f-487384f16b7c', '09/29/2020', 'check the toLower of the chunk');
var searchRedirectionKillSwitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('81c85944-14d4-4da1-b071-c3e722ffa1e8', '10/13/2020', 'check for search redirection capability');
var bulkValidateUpdateKillSwitch = _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('939e64bb-9da2-447c-8d4e-f020f1822571', '01/04/2021', 'check for bulk edit capability');
var DataSyncListStatus;
(function (DataSyncListStatus) {
    DataSyncListStatus[DataSyncListStatus["None"] = 0] = "None";
    /**
     * The list is up to date and in sync with the cloud.
     */
    DataSyncListStatus[DataSyncListStatus["InSync"] = 1] = "InSync";
    /**
     * List changes have been saved locally, but have not synced to the cloud yet.
     */
    DataSyncListStatus[DataSyncListStatus["ChangesSaved"] = 2] = "ChangesSaved";
    /**
     * The list is actively being synced with the cloud.
     */
    DataSyncListStatus[DataSyncListStatus["Syncing"] = 3] = "Syncing";
    /**
     * The user must take action before the list can sync. Interacting with this
     * should cause Nucleus to pop a dialog.
     */
    DataSyncListStatus[DataSyncListStatus["Attention"] = 4] = "Attention";
    /**
     * The list has conflicts that must be addressed before sync can proceed.
     */
    DataSyncListStatus[DataSyncListStatus["SyncConflict"] = 5] = "SyncConflict";
    /**
     * Nucleus or the list is still being setup. Data for the list is not available
     * locally yet.
     */
    DataSyncListStatus[DataSyncListStatus["SettingUp"] = 6] = "SettingUp";
    /**
     * Sync for this list is not supported.
     */
    DataSyncListStatus[DataSyncListStatus["Unsupported"] = 7] = "Unsupported";
    /**
     * This list is no longer being synced locally.
     */
    DataSyncListStatus[DataSyncListStatus["Removed"] = 8] = "Removed";
    /**
     * Nucleus has encountered an error trying to operate on this list.
     * extraData: IDataSyncListStatusErrorInfo
     */
    DataSyncListStatus[DataSyncListStatus["Error"] = 9] = "Error";
    /**
     * We lost the status connection to Nucleus.
     */
    DataSyncListStatus[DataSyncListStatus["ListStatusConnectionLost"] = 10] = "ListStatusConnectionLost";
    /**
     * We acquired a status connection to Nucleus.
     */
    DataSyncListStatus[DataSyncListStatus["ListStatusConnected"] = 11] = "ListStatusConnected";
})(DataSyncListStatus || (DataSyncListStatus = {}));
/**
 * Error codes for list sync.
 */
var DataSyncListStatusError;
(function (DataSyncListStatusError) {
    DataSyncListStatusError[DataSyncListStatusError["UnknownError"] = 0] = "UnknownError";
})(DataSyncListStatusError || (DataSyncListStatusError = {}));
/**
 * Describes the type of attention required by the user to unblock list sync.
 */
var DataSyncListStatusAttentionReason;
(function (DataSyncListStatusAttentionReason) {
    /**
     * The user must opt-in/enable data sync in order to sync the list.
     */
    DataSyncListStatusAttentionReason[DataSyncListStatusAttentionReason["SetupRequired"] = 0] = "SetupRequired";
    /**
     * The user must provide their credentials before list sync can proceed.
     */
    DataSyncListStatusAttentionReason[DataSyncListStatusAttentionReason["SignInRequired"] = 1] = "SignInRequired";
})(DataSyncListStatusAttentionReason || (DataSyncListStatusAttentionReason = {}));
/**
 * The type of conflict for the given item.
 */
var ListSyncConflictType;
(function (ListSyncConflictType) {
    ListSyncConflictType["Create"] = "Create";
    ListSyncConflictType["Update"] = "Update";
    ListSyncConflictType["Delete"] = "Delete";
})(ListSyncConflictType || (ListSyncConflictType = {}));
var ResultType;
(function (ResultType) {
    ResultType[ResultType["List"] = 1] = "List";
    ResultType[ResultType["ListItem"] = 2] = "ListItem";
    ResultType[ResultType["ListView"] = 3] = "ListView";
    ResultType[ResultType["ListField"] = 4] = "ListField";
})(ResultType || (ResultType = {}));
var IdentifierType;
(function (IdentifierType) {
    IdentifierType[IdentifierType["Guid"] = 1] = "Guid";
    IdentifierType[IdentifierType["Path"] = 2] = "Path";
})(IdentifierType || (IdentifierType = {}));
// Describes the REST APIs that are nucleus supported on list items.
var itemApis = {
    api: {
        recycle: {
            isLeaf: true
        },
        ValidateUpdateListItem: {
            isLeaf: true
        }
    }
};
// Describes the REST APIs that are nucleus supported on views
var viewApis = {
    api: {
        SetViewXml: {
            isLeaf: true,
            flight: DataSyncListViewApiRedirectionFeature
        }
    }
};
// Describes the REST APIs that are nucleus supported on view collections
var viewCollectionApis = {
    api: {
        '%self%': {
            isLeaf: true,
            idType: IdentifierType.Guid,
            flight: DataSyncListViewApiRedirectionFeature,
            returns: ResultType.ListItem,
            api: viewApis.api
        },
        Add: {
            isLeaf: true,
            flight: DataSyncListViewApiRedirectionFeature
        }
    }
};
var fieldApis = {
    flight: DataSyncListFieldApiRedirectionFeature,
    api: {
        DeleteObject: {
            isLeaf: true
        }
    }
};
// Describes the REST APIs that are nucleus supported on lists.
var listApis = {
    api: {
        RenderListDataAsStream: {
            isLeaf: true
        },
        RenderExtendedListFormData: {
            isLeaf: true
        },
        RenderListFilterData: {
            isLeaf: true,
            flight: EnableNucleusRenderListFilterDataRedirection
        },
        AddValidateUpdateItemUsingPath: {
            isLeaf: true
        },
        BulkValidateUpdateListItems: {
            isLeaf: true,
            disabled: bulkValidateUpdateKillSwitch
        },
        GetItemById: {
            returns: ResultType.ListItem,
            idType: IdentifierType.Guid,
            api: itemApis.api
        },
        items: {
            idType: IdentifierType.Guid,
            returns: ResultType.ListItem,
            api: itemApis.api
        },
        Views: {
            isLeaf: true,
            api: viewCollectionApis.api,
            flight: DataSyncListViewApiRedirectionFeature
        },
        Fields: {
            flight: DataSyncListFieldApiRedirectionFeature,
            isLeaf: true,
            api: {
                '%self%': {
                    isLeaf: true
                },
                GetByInternalNameOrTitle: {
                    isLeaf: true,
                    returns: ResultType.ListField,
                    idType: IdentifierType.Path,
                    api: fieldApis.api
                },
                CreateFieldAsXml: {
                    isLeaf: true
                }
            }
        }
    }
};
// Describes the root list REST APIs, hosted at /_api/web
var webApi = {
    api: {
        GetList: {
            returns: ResultType.List,
            idType: IdentifierType.Path,
            api: listApis.api
        },
        GetListUsingPath: {
            returns: ResultType.List,
            idType: IdentifierType.Path,
            api: listApis.api
        },
        Lists: {
            api: {
                // Lists can be either a route or a function
                '%self%': {
                    returns: ResultType.List,
                    idType: IdentifierType.Guid,
                    api: listApis.api
                },
                GetListUsingPath: {
                    returns: ResultType.List,
                    idType: IdentifierType.Path,
                    api: listApis.api
                },
                GetList: {
                    returns: ResultType.List,
                    idType: IdentifierType.Guid,
                    api: listApis.api
                },
                GetById: {
                    returns: ResultType.List,
                    idType: IdentifierType.Guid,
                    api: listApis.api,
                    disabled: checkToLowerKillSwitch
                }
            }
        }
    }
};
var rootApi = {
    api: {
        web: {
            api: webApi.api
        },
        'sp.ListHomeItemCollection.GetListHomePersonalLists': {
            isLeaf: true
        },
        'SP.FavoriteLists.GetListsBy': {
            isLeaf: true,
            flight: NucleusEnableFavortiesGetListsBy // Bug 945295: SP.FavoriteLists.GetListsBy can be a GET or a POST
        },
        'sp.RecentListCollection.GetRecentLists': {
            isLeaf: true
        }
    }
};
/**
 * getListOperationFromUrl
 * @param urlString the url to analyze
 */
function getListOperationFromUrl(urlString, featureCheck) {
    var url = new URL(urlString);
    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("getListOperationFromUrl called for url: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["Private"])(urlString));
    var searchMarker = 'InplaceSearchQuery';
    var searchMarkerIndex = urlString.indexOf(searchMarker);
    // If we are online, redirect a search query to SPO instead of serving it locally
    if (!searchRedirectionKillSwitch && navigator.onLine && searchMarkerIndex > 0) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Detected a search parameter when online, will run query online");
        return undefined;
    }
    // Order is important!! We want to do the the cheapest checks first.
    //
    // note where /_api appears in the pathname of the url. if it doesn't, we don't support this.
    // The pathname is something like:
    //    teams/OneDriveSyncNews/_api/web/GetList(@listUrl)/RenderListDataAsStream
    var webApiMarker = '/_api';
    var markerStart = url.pathname.indexOf(webApiMarker);
    if (markerStart === -1) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Did not find the api marker, this url is not supported");
        return undefined;
    }
    // urlString starts with something like this:
    //    https://microsoft.sharepoint-df.com/teams/OneDriveSyncNews/_api/web/GetList(@listUrl)/RenderListDataAsStream?&@listUrl=%27%2Fteams%2FOneDriveSyncNews%2FLists%2FAnkoltzTestList%27
    var server = url.hostname;
    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("server: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["Private"])(server));
    // The portion of the pathname before the marker is the site.
    //    teams/OneDriveSyncNews
    var relativeSite = url.pathname.substring(0, markerStart);
    if (relativeSite.length === 0) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Did not find a site, this url is not supported");
        return undefined;
    }
    var siteUrl = url.protocol + '//' + server + relativeSite;
    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("site: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["Private"])(siteUrl));
    // The portion of the pathname after the marker is the API that's being called
    var api = url.pathname.substring(markerStart + webApiMarker.length);
    if (api.length === 0) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Did not find an api, this url is not supported");
        return undefined;
    }
    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("api: " + api);
    // api is now a string like this:
    //    GetList(@listUrl)/RenderListDataAsStream
    // split it into chunks
    var apiChunks = api.split('/');
    var listParamName;
    var listParamType;
    var currentNode = rootApi;
    var nodeName = 'root';
    var method;
    var entity;
    if (currentNode.disabled && !shouldIgnoreDisabledRoutes()) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("All nodes are disabled.");
        return undefined;
    }
    var _loop_1 = function (chunk) {
        // Each chunk is either:
        // * a route, like 'Lists'
        // * a function call with a parameter, like 'GetList(@listUrl)'
        // * or a method to call on the object returned by the previous chunk, like 'RenderListDataAsStream'
        // Grab a function/route/method name, and if present, the parameter.
        // This only supports single-param functions at the moment.
        if (chunk.length === 0) {
            return "continue";
        }
        if (!currentNode.api) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Node " + nodeName + " doesn't have any api when analyzing chunk: " + chunk);
            return { value: undefined };
        }
        // Attempt to grab info about the function and param for this chunk.
        var match = chunk.match(new RegExp('([^\\(]*)(\\((\\w+=)?(\\S*?)\\)|$)'));
        if (!match) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Regex match failed against chunk: " + chunk);
            return { value: undefined };
        }
        var func = match[1];
        var param = match[4];
        var nextNodeName = !checkToLowerKillSwitch &&
            Object.getOwnPropertyNames(currentNode.api).find(function (p) { return p.toLowerCase() === func.toLowerCase(); });
        if (!func || (!currentNode.api[func] && !nextNodeName)) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Node " + nodeName + " doesn't have an api matching '" + func + "'" + (!checkToLowerKillSwitch ? " or '" + nextNodeName + "'" : '') + " from chunk '" + chunk + "'");
            return { value: undefined };
        }
        // Advance the currentNode to the method corresponding route/function/method from
        // the current chunk.
        currentNode = currentNode.api[func] || (nextNodeName && currentNode.api[nextNodeName]);
        nodeName = func;
        // Some chunks can either be a route or a function. For example
        // '/Lists/GetListById(@id)' and '/Lists(@id)' are both possible.
        // In the heirarchy defined above, we annotate this with a %self%
        // function that's called if a parameter is provided. Handle that
        // case here.
        if (param && currentNode.api && currentNode.api['%self%']) {
            currentNode = currentNode.api['%self%'];
        }
        // During development, it's helpful to be able to shut off some paths.
        // Once released, some routes may not be immediately available.
        if ((currentNode.flight && !featureCheck(currentNode.flight)) ||
            (currentNode.disabled && !shouldIgnoreDisabledRoutes())) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Node " + nodeName + " is marked as disabled.");
            return { value: undefined };
        }
        // We found parameters, so this is a function. Check if it also
        // returns a list. In that case, this is the function who's parameter
        // is providing the list ID. Remember this so we can look it up later.
        if (currentNode.returns === ResultType.List) {
            entity = currentNode.returns;
            if (param) {
                if (listParamName) {
                    throw new Error('Found multiple list identifiers in URL');
                }
                listParamName = param;
                listParamType = currentNode.idType;
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Found list param '" + listParamName + "' in chunk " + chunk);
            }
        }
        // We've found a leaf node. Mark that as our method name.
        if (currentNode.isLeaf) {
            if (method) {
                method += "/" + nodeName;
            }
            else {
                method = nodeName;
            }
        }
    };
    for (var _i = 0, apiChunks_1 = apiChunks; _i < apiChunks_1.length; _i++) {
        var chunk = apiChunks_1[_i];
        var state_1 = _loop_1(chunk);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // We didn't find a method to call on the object. We don't
    // support this API.
    if (!method) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])('Did not find a list method. This url is not supported');
        return undefined;
    }
    var paramValue = null;
    if (entity) {
        if (!listParamName || listParamType === undefined) {
            // In some cases, the list identifier is just a query param like
            // listFullUrl
            paramValue = url.searchParams.get('listFullUrl');
            if (!paramValue) {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])('Did not find a list or a list operation. This url is not supported');
                return undefined;
            }
        }
        else {
            // Look up the target list ID.
            if (listParamName.startsWith("'%7B") &&
                listParamName.endsWith("%7D'") &&
                listParamName.length === 8 + 36) {
                // The guid was provided in-line, rather than as a named parameter.
                paramValue = listParamName.substr(4, listParamName.length - 8);
            }
            else {
                paramValue = url.searchParams.get(listParamName);
                if (!paramValue) {
                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Found a list operation but couldn't determine the ID. Param name was: " + listParamName);
                    return undefined;
                }
            }
        }
    }
    var listUrl = listParamType === IdentifierType.Path && paramValue
        ? url.protocol + '//' + url.host + decodeURIComponent(paramValue).replace(/'/g, '')
        : undefined;
    var listId = listParamType === IdentifierType.Guid && paramValue
        ? normalizeGuid(decodeURIComponent(paramValue))
        : undefined;
    return {
        ids: {
            siteUrl: siteUrl,
            listId: listId,
            listUrl: listUrl
        },
        rest: {
            api: api,
            method: method
        }
    };
}
function normalizeGuid(id) {
    return id && id.replace(/guid/, '').replace(/'/g, '').replace(/}/g, '').replace(/{/g, '').toLowerCase();
}
/**
 * This is the old implementation of getUserList. Don't use it anymore, call _getUserList()
 * on the nucleus class.
 *
 * @deprecated
 */
function getUserListPreSyncIssues(ids, user) {
    var siteUrl = ids.siteUrl, siteId = ids.siteId, listId = ids.listId, listUrl = ids.listUrl, webId = ids.webId;
    var list = user.syncedLists.find(function (l) {
        var _a;
        return ((siteUrl || siteId) &&
            (!siteUrl || siteUrl === l.siteUrl) &&
            (!siteId || normalizeGuid(siteId) === normalizeGuid(l.siteId)) &&
            (listUrl || listId) &&
            (!listId || normalizeGuid(listId) === normalizeGuid(l.listId)) &&
            (!listUrl || ((_a = l.listUrl) === null || _a === void 0 ? void 0 : _a.endsWith(listUrl))) &&
            (!webId || normalizeGuid(webId) === normalizeGuid(l.webId)));
    });
    if (list && !(list.syncState && list.syncState.unsynced)) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["log"])("Found list: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_0__["Private"])(function () { return JSON.stringify(list); }));
        return list;
    }
}
//# sourceMappingURL=ListUtilities.js.map

/***/ }),

/***/ "KqWT":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/decorators/fromWebPlatform.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: fromWebPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromWebPlatform", function() { return fromWebPlatform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/utilities-browser/lib/PlatformDetection */ "u0q+");


/**
 * Decorator for `AriaTelemetryHandler` which extracts and injects Web platform context automatically.
 * @internal
 */
function fromWebPlatform() {
    return function (create) {
        return /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WithWebContext, _super);
            function WithWebContext(params) {
                var _this = this;
                var platformDetection = new _ms_utilities_browser_lib_PlatformDetection__WEBPACK_IMPORTED_MODULE_1__["PlatformDetection"]();
                var _a = params.context, context = _a === void 0 ? {} : _a;
                _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ language: window.navigator.language }, params), { context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ BrowserIsMobile: platformDetection.isMobile, BrowserIsPWA: platformDetection.isPWA, BrowserMajVer: platformDetection.browserMajor, BrowserMinVer: platformDetection.browserMinor, BrowserName: platformDetection.browserName, BrowserUserAgent: platformDetection.userAgent, OSName: platformDetection.osName, OSVersion: platformDetection.osVersion }, context) })) || this;
                return _this;
            }
            return WithWebContext;
        }(create));
    };
}
//# sourceMappingURL=fromWebPlatform.js.map

/***/ }),

/***/ "L3+i":
/*!***********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/CorrelationVector.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CorrelationVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelationVector", function() { return CorrelationVector; });
/* harmony import */ var _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/utilities-guid/lib/Guid */ "Ng1F");

var CorrelationVector = /** @class */ (function () {
    function CorrelationVector(parent, current) {
        if (parent) {
            this.root = parent.root;
            this.parent = parent.current;
        }
        else {
            this.root = this.parent = _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__["Empty"];
        }
        if (current) {
            this.current = current;
        }
        else {
            this.current = _ms_utilities_guid_lib_Guid__WEBPACK_IMPORTED_MODULE_0__["generate"]();
        }
    }
    CorrelationVector._getCorrelationVector = function () {
        var rootVector;
        if (typeof window !== 'undefined') {
            rootVector = window.rootVector;
        }
        else if (typeof self !== 'undefined') {
            rootVector = self.rootVector;
        }
        return rootVector || new CorrelationVector();
    };
    CorrelationVector.prototype.toString = function () {
        return this.root + "#" + this.parent + "#" + this.current;
    };
    CorrelationVector.RootVector = CorrelationVector._getCorrelationVector();
    return CorrelationVector;
}());

//# sourceMappingURL=CorrelationVector.js.map

/***/ }),

/***/ "MkVS":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/Nucleus.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: NucleusDataSyncClient, clearNucleusBindingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusDataSyncClient", function() { return NucleusDataSyncClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNucleusBindingState", function() { return clearNucleusBindingState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUtilities */ "KP+r");
/* harmony import */ var _EndpointDiscovery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointDiscovery */ "TGuB");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ "NlEA");
/* harmony import */ var _NucleusLogging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NucleusLogging */ "QLOS");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _DataSyncFlights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DataSyncFlights */ "FdyI");
/* harmony import */ var _NucleusTelemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NucleusTelemetry */ "71Qj");








var MAX_WEBSOCKET_RECONNECT_ATTEMPTS = 15;
var NucleusRedirectionResult;
(function (NucleusRedirectionResult) {
    NucleusRedirectionResult["Redirected"] = "Redirected";
    NucleusRedirectionResult["Bypassed"] = "Bypassed";
    NucleusRedirectionResult["FailedThenFallBackToService"] = "FailedThenFallBackToService";
    NucleusRedirectionResult["FailedNoFallback"] = "FailedNoFallback";
})(NucleusRedirectionResult || (NucleusRedirectionResult = {}));
var NucleusRedirectionReason;
(function (NucleusRedirectionReason) {
    NucleusRedirectionReason["Unsupported"] = "UnsupportedOperation";
    NucleusRedirectionReason["EntityNotSynced"] = "EntityNotSynced";
    NucleusRedirectionReason["DiscoveryFailure"] = "DiscoveryFailure";
    NucleusRedirectionReason["ApiFailure"] = "ApiFailure";
    NucleusRedirectionReason["InitialSync"] = "InitialSync";
    NucleusRedirectionReason["SyncListsFailure"] = "SyncListsFailure";
})(NucleusRedirectionReason || (NucleusRedirectionReason = {}));
var CachedUserState;
(function (CachedUserState) {
    CachedUserState["None"] = "None";
    CachedUserState["Cached"] = "Cached";
    CachedUserState["Stale"] = "Stale";
})(CachedUserState || (CachedUserState = {}));
/**
 * Provies data sync services via the Nucleus sync engine.
 */
var NucleusDataSyncClient = /** @class */ (function () {
    function NucleusDataSyncClient(dependencies) {
        this.getUserPromise = undefined;
        this._syncNowRequests = {};
        this._listStatusCallbacks = {};
        // tslint:disable-next-line:no-inferrable-types
        this._listStatusCallbackCount = 0;
        this._listNotificationContext = {};
        this._initUserPromise = undefined;
        Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_7__["initNucleusTelemetry"])(dependencies && dependencies.telemetryContext);
        this.storage = (dependencies && dependencies.storage) || new _Storage__WEBPACK_IMPORTED_MODULE_3__["NucleusStorage"]();
        this.discovery =
            (dependencies && dependencies.discovery) ||
                new _EndpointDiscovery__WEBPACK_IMPORTED_MODULE_2__["NucleusDiscovery"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dependencies.discoveryOptions), { featureCheck: dependencies.featureCheck }));
        this._wsFactory =
            (dependencies && dependencies.websocketFactory) || (function (url) { return new WebSocket(url); });
        this._featureCheck = dependencies.featureCheck;
        this._aadUserId = dependencies.aadUserId;
    }
    NucleusDataSyncClient.prototype.onRequestComplete = function (qosInfo) {
        var httpStatus = qosInfo.httpStatus, succeeded = qosInfo.succeeded, endpoint = qosInfo.endpoint, resultCode = qosInfo.resultCode;
        var _aadUserId = this._aadUserId;
        var context = endpoint.context;
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("requestComplete, user " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(_aadUserId) + ", succeeded: " + succeeded + ", status: " + httpStatus + " ");
        // Callers that don't use exceptions will indicate failure via this callback.
        if (!succeeded) {
            context.requestFailed = true;
        }
        // Some failures indicate that the token and route we have for the user are
        // out of date. Reset the user data, and add context to the endpoint so that
        // getData knows it can retry this request.
        if (resultCode === 'NoConnection' || httpStatus === 401 || httpStatus === 403 || httpStatus === 404) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Forcing refresh, user " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(_aadUserId) + ", error " + httpStatus + " ");
            if (context) {
                context.shouldRetryLocalRequest = true;
            }
            this._resetUserData({ url: context.userRoot, authToken: endpoint.authToken });
            return false;
        }
        var isRetriable = !succeeded && (!httpStatus || (httpStatus >= 500 && httpStatus < 600));
        return isRetriable;
    };
    NucleusDataSyncClient.prototype.getData = function (options, localRequest, serviceRequest) {
        var normalizedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { siteId: Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(options.siteId), listId: Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(options.listId) });
        return this._getDataInternal(normalizedOptions, localRequest, serviceRequest);
    };
    NucleusDataSyncClient.prototype.getQosInfo = function () {
        // Hard code some dummy data for now, will wire this to Nucleus when the endpoint is exposed.
        return {
            dataSyncVersion: '0.1',
            nucleusDataSyncEnabled: true
        };
    };
    NucleusDataSyncClient.prototype.addListStatusCallback = function (callback, id, options) {
        if (!id) {
            // coming soon...
            throw new Error('not yet supported');
        }
        this.addListStatusCallbackAsync(callback, id, options);
        return this._listStatusCallbackCount;
    };
    NucleusDataSyncClient.prototype.addListStatusCallbackAsync = function (callback, id, options) {
        var _this = this;
        if (isBoundToService()) {
            return Promise.resolve(-1);
        }
        id = this._normalizeIds(id);
        var notificationId = this._listStatusCallbackCount++;
        return this._getUser().then(function (user) {
            if (!user) {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Could not subscribe to list changes, user not found');
                return -1;
            }
            var list = _this._getUserList(id, user);
            if (!list) {
                return -1;
            }
            var listName = _this._socketIdFromList(list);
            _this._listStatusCallbacks[notificationId] = {
                callback: callback,
                options: options,
                listName: listName,
                listId: list
            };
            _this._connectListNotifications(user, list);
            var payload = _this._getNotificationPayloadFromState(list, (_this._listNotificationContext[listName] &&
                _this._listNotificationContext[listName].lastKnownServerState) ||
                list.syncState || {
                currentlySyncing: true,
                unsynced: false,
                pendingUploads: 0,
                inInitialSync: false
            });
            callback([payload]);
            return notificationId;
        });
    };
    NucleusDataSyncClient.prototype.removeListStatusCallback = function (id) {
        if (this._listStatusCallbacks[id]) {
            delete this._listStatusCallbacks[id];
        }
    };
    NucleusDataSyncClient.prototype.isListDataSyncEnabled = function (listIds) {
        var _this = this;
        if (isBoundToService()) {
            return Promise.resolve(false);
        }
        listIds = this._normalizeIds(listIds);
        return this._getUser().then(function (user) {
            // Bind state could have changed while we were doing our async work.
            return !isBoundToService() && !!user && !!_this._getUserList(listIds, user);
        });
    };
    NucleusDataSyncClient.prototype.registerAuthTokenCallback = function (getAuthToken) {
        this.discovery.registerAuthTokenCallback(getAuthToken);
    };
    NucleusDataSyncClient.prototype.refreshLocalEndpointInfo = function () {
        return this._getNucleusUserWorker({ forceRefresh: true })
            .then(function () {
            /*nothing*/
        })
            .catch();
    };
    NucleusDataSyncClient.prototype.dismissListSyncIssues = function (issues) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var user, listFullUrl, nonMatchingIssues, endpoint, list, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._featureCheck(_DataSyncFlights__WEBPACK_IMPORTED_MODULE_6__["EnableNucleusListConflictsUX"]) || issues.length === 0) {
                            return [2 /*return*/];
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("dismissListSyncIssues: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(issues); }));
                        return [4 /*yield*/, this._getUser()];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error('Failed to load user info');
                        }
                        listFullUrl = issues[0].listFullUrl;
                        nonMatchingIssues = issues.filter(function (i) { return i.listFullUrl !== listFullUrl; });
                        if (nonMatchingIssues.length > 0) {
                            throw new Error('Issues must be in same list');
                        }
                        endpoint = user.endpoint;
                        list = this._getUserList({ listFullUrl: listFullUrl }, user, true);
                        if (!list) {
                            throw new Error('User is not syncing the given list');
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fetch(endpoint.url + ("/Sync/Sites/" + list.siteId + "/Lists/" + list.listId + "/ConflictErrors"), {
                                headers: {
                                    Authorization: endpoint.authToken,
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify({
                                    action: 'dismiss',
                                    eTag: issues[0].eTag,
                                    ids: issues.map(function (i) { return i.id; })
                                })
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("dismissListSyncIssues failed: " + e_1);
                        return [2 /*return*/, undefined];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype.getListSyncIssues = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var user, endpoint, list, response, e_2, conflicts, e_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._featureCheck(_DataSyncFlights__WEBPACK_IMPORTED_MODULE_6__["EnableNucleusListConflictsUX"])) {
                            return [2 /*return*/, undefined];
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("getListSyncIssues: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(id); }));
                        return [4 /*yield*/, this._getUser()];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, undefined];
                        }
                        endpoint = user.endpoint;
                        list = this._getUserList(id, user, true);
                        if (!list) {
                            return [2 /*return*/, undefined];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fetch(endpoint.url + ("/Sync/Sites/" + list.siteId + "/Lists/" + list.listId + "/ConflictErrors"), {
                                headers: {
                                    Authorization: endpoint.authToken,
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                method: 'GET'
                            })];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("getListSyncIssues failed: " + e_2);
                        return [2 /*return*/, undefined];
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.json()];
                    case 6:
                        conflicts = (_a.sent());
                        return [3 /*break*/, 8];
                    case 7:
                        e_3 = _a.sent();
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Parsing getListSyncIssues failed: error: " + e_3);
                        return [2 /*return*/, undefined];
                    case 8:
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Got conflicts response: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(conflicts); }));
                        return [2 /*return*/, conflicts.conflictErrors.map(function (e) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, e), { eTag: conflicts.eTag, listFullUrl: list.listFullUrl || list.listUrl })); })];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype.listHasSyncIssues = function (ids) {
        if (!this._featureCheck(_DataSyncFlights__WEBPACK_IMPORTED_MODULE_6__["EnableNucleusListConflictsUX"])) {
            return Promise.resolve(false);
        }
        return this.getListSyncIssues(ids).then(function (issues) { return !!issues && issues.length > 0; });
    };
    NucleusDataSyncClient.prototype.notifyNewListCreated = function () {
        return this._triggerListsHomeSyncNow();
    };
    NucleusDataSyncClient.prototype.waitForAsyncWork = function () {
        if (this._initUserPromise) {
            return this._initUserPromise.then(function () {
                /** nothing */
            });
        }
        else {
            return Promise.resolve();
        }
    };
    NucleusDataSyncClient.prototype.initNucleusUser = function () {
        return this._initializeNucleusUser().then(function () {
            /* nothing */
        });
    };
    NucleusDataSyncClient.prototype._getDataInternal = function (options, localRequest, serviceRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_7__["wrapQos"])({
                        name: 'nucleus.redirect'
                    }, function (qosData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var qos, startTime, url, siteId, listId, siteUrl, operation, localResult, e_4, serviceStart, result, serviceEnd, cbid, callbackContext, currentState;
                        var _a;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    qos = qosData;
                                    startTime = new Date();
                                    url = options.url, siteId = options.siteId, listId = options.listId, siteUrl = options.siteUrl;
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("getData(" + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logTime"])(startTime) + ") - " +
                                        ("Bind: " + (isBoundToNucleus() ? 'nucleus' : isBound() ? 'spo' : 'unbound') + ", ") +
                                        ("user: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(this._aadUserId) + ", ") +
                                        ("url: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(url) + ", ") +
                                        ("siteId: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(siteId) + ", ") +
                                        ("siteUrl: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(siteUrl) + ", ") +
                                        ("listId: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(listId) + " "));
                                    qos.redirected = false;
                                    operation = (isBoundToNucleus() || !isBound()) && this._getOperation(options);
                                    if (!!operation) return [3 /*break*/, 1];
                                    qos.result = NucleusRedirectionResult.Bypassed;
                                    qos.reason = NucleusRedirectionReason.Unsupported;
                                    return [3 /*break*/, 5];
                                case 1:
                                    qos.method = (_a = operation.rest) === null || _a === void 0 ? void 0 : _a.method;
                                    _b.label = 2;
                                case 2:
                                    _b.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, this._tryCallingLocalEndpoint(operation, options, localRequest, qos)];
                                case 3:
                                    localResult = _b.sent();
                                    if (!localResult) {
                                        qos.result = NucleusRedirectionResult.FailedThenFallBackToService;
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Could not call local endpoint, trying service.");
                                    }
                                    else {
                                        // Multiple calls could have been issued before the first one finished and failed.
                                        // If the first one was successful or we are the first one, use the local sync result.
                                        // Otherwise, we are not first and the first one failed. Fall through and reissue this
                                        // call to the service instead.
                                        if (tryBindToNucleus()) {
                                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Using local result.Total time " + (Date.now() - startTime.getTime()) + " ms.");
                                            qos.redirected = true;
                                            qos.result = NucleusRedirectionResult.Redirected;
                                            delete qos.reason;
                                            this.storage.setNucleusFirstContact(this._aadUserId, true);
                                            return [2 /*return*/, localResult.result];
                                        }
                                        else {
                                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Got local result, but already bound to service.");
                                        }
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_4 = _b.sent();
                                    if (isBoundToNucleus()) {
                                        // If we are bound to Nucleus, let the error propagate. We can't fallback to the service
                                        // because there might be a data inconsistency. User will see the error, just like if the
                                        // real service was down.
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Failed nucleus local call');
                                        qos.result = NucleusRedirectionResult.FailedNoFallback;
                                        throw e_4;
                                    }
                                    else {
                                        // If we got here, we have a supported operation that we're going to handle by the service.
                                        // Bind to the service in this case. This should always succeed.
                                        if (!tryBindToService()) {
                                            // Mismatched binding conditions can potentially lead to a really bad experience
                                            // (perceived and maybe actual data loss). So I want to be loud if they occur.
                                            // But to be safe, we also need a means to squelch the exception if this fires
                                            // spuriously.
                                            if (!_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_5__["Killswitch"].isActivated('6073c371-2ca5-4e7e-acc5-3e3392e99126', '09/30/2020', 'service binding exception')) {
                                                throw new Error('Error updating service binding.');
                                            }
                                        }
                                        qos.result = NucleusRedirectionResult.FailedThenFallBackToService;
                                    }
                                    return [3 /*break*/, 5];
                                case 5:
                                    // Either we failed a call or this was a feature that isn't available from Nucleus
                                    // Regardless, issue a call to the service and return that result.
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Calling service.');
                                    serviceStart = new Date();
                                    return [4 /*yield*/, serviceRequest()];
                                case 6:
                                    result = _b.sent();
                                    serviceEnd = new Date();
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Service call done after " + (serviceEnd.getTime() - serviceStart.getTime()) + " ms.Total request time " + (serviceEnd.getTime() - startTime.getTime()) + " ms");
                                    if (operation) {
                                        // Set the status to 'none' for any subscribers.
                                        for (cbid in this._listStatusCallbacks) {
                                            if (this._listStatusCallbacks.hasOwnProperty(cbid)) {
                                                callbackContext = this._listStatusCallbacks[cbid];
                                                currentState = this._listNotificationContext[this._socketIdFromList(callbackContext.listId)];
                                                if (!(currentState &&
                                                    currentState.lastKnownServerState &&
                                                    currentState.lastKnownServerState.inInitialSync)) {
                                                    callbackContext.callback([
                                                        {
                                                            id: this._listStatusCallbacks[cbid].listId,
                                                            state: _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].None,
                                                            dataRefreshNeeded: false
                                                        }
                                                    ]);
                                                }
                                            }
                                        }
                                    }
                                    return [2 /*return*/, result];
                            }
                        });
                    }); })];
            });
        });
    };
    NucleusDataSyncClient.prototype._initializeNucleusUser = function () {
        return this._initUserPromise || (this._initUserPromise = this.discovery.tryCreateUserEndpointList());
    };
    NucleusDataSyncClient.prototype._tryCallingLocalEndpoint = function (operation, options, localRequest, qos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var maxAttempts, _loop_1, this_1, attempt, state_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maxAttempts = 2;
                        _loop_1 = function (attempt) {
                            var attemptStart, endpoint, endpointResolutionEndTime, exception, localStartTime, result, requestFailed, localEndTime, e_5, attemptsRemaining, shouldRetryLocalRequest;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        attemptStart = new Date();
                                        return [4 /*yield*/, this_1._getUserOperationEndpoint(operation, options, qos)];
                                    case 1:
                                        endpoint = _a.sent();
                                        endpointResolutionEndTime = new Date();
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Endpoint resolution time: " + (endpointResolutionEndTime.getTime() - attemptStart.getTime()) + " ms");
                                        qos.attempts = attempt + 1;
                                        // No local endpoint available for this user and operation.
                                        if (!endpoint) {
                                            qos.reason = NucleusRedirectionReason.DiscoveryFailure;
                                            return [2 /*return*/, "break"];
                                        }
                                        exception = void 0;
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        localStartTime = new Date();
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("local endpoint call starting at " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logTime"])(localStartTime) + ".");
                                        return [4 /*yield*/, localRequest(endpoint)];
                                    case 3:
                                        result = _a.sent();
                                        requestFailed = endpoint.context.requestFailed;
                                        if (!requestFailed) {
                                            localEndTime = new Date();
                                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Call redirected! elapsed: " + (localEndTime.getTime() - localStartTime.getTime()) + " ms");
                                            delete qos.reason;
                                            return [2 /*return*/, { value: { result: result } }];
                                        }
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_5 = _a.sent();
                                        exception = e_5;
                                        return [3 /*break*/, 5];
                                    case 5:
                                        attemptsRemaining = maxAttempts - (attempt + 1);
                                        shouldRetryLocalRequest = endpoint.context.shouldRetryLocalRequest;
                                        if (shouldRetryLocalRequest && attemptsRemaining > 0) {
                                            // We failed, but the handler indicated that it has reset our discovery state
                                            // for the user. Retry the request.
                                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Local call failed. Retrying discovery & request. " + attemptsRemaining + " tries remaining.");
                                            qos.cachedUserState = CachedUserState.Stale;
                                            return [2 /*return*/, "continue"];
                                        }
                                        else {
                                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Local call failed, not retrying. Context: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(endpoint.context); }) + " ");
                                            qos.reason = NucleusRedirectionReason.ApiFailure;
                                            if (exception) {
                                                throw exception;
                                            }
                                            else {
                                                return [2 /*return*/, { value: undefined }];
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        attempt = 0;
                        _a.label = 1;
                    case 1:
                        if (!(attempt < maxAttempts)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(attempt)];
                    case 2:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        ++attempt;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype._getNucleusUser = function (options, qos) {
        var forceRefresh = (options || {}).forceRefresh;
        if (!forceRefresh && this.getUserPromise) {
            return this.getUserPromise;
        }
        this.getUserPromise = this._getNucleusUserWorker(options, qos);
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Started discovery for user: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(this._aadUserId) + " ");
        return this.getUserPromise;
    };
    NucleusDataSyncClient.prototype._getNucleusUserWorker = function (options, qos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, forceRefresh, _b, storage, discovery, _aadUserId, user, endpoint, e_6, syncedListsResponse, e_7, syncListsSuccess, syncedListsObject_1, syncedLists, e_8, _c, _d, _e, _f, _i, _g, list, cbid;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _a = (options || {}).forceRefresh, forceRefresh = _a === void 0 ? false : _a;
                        _b = this, storage = _b.storage, discovery = _b.discovery, _aadUserId = _b._aadUserId;
                        if (qos) {
                            qos.cachedUserState = CachedUserState.None;
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Get nucleus endpoint, user: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(_aadUserId) + ", forceRefresh: " + forceRefresh + " ");
                        user = storage.getNucleusUserData(_aadUserId);
                        if (user && !forceRefresh) {
                            // If the user has lists, return it. Otherwise, we'll refresh. This means every page load
                            // we'll requery discovery when the user has no synced lists. At first glance this may seem
                            // wasteful, I expect this to be a really rare case (nucleus on, but nothing syncing) and it's
                            // a useful escape hatch for a case where we somehow reset the synced lists inadvertently.
                            if (user.syncedLists.length > 0) {
                                if (qos) {
                                    qos.cachedUserState = CachedUserState.Cached;
                                }
                                return [2 /*return*/, user];
                            }
                            else {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Found user, but synced - lists was empty, refreshing");
                            }
                        }
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, discovery.refreshNucleusUrl(_aadUserId)];
                    case 2:
                        endpoint = _h.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _h.sent();
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Failed discovery: ' + e_6);
                        return [3 /*break*/, 4];
                    case 4:
                        if (!endpoint) {
                            if (qos) {
                                qos.reason = NucleusRedirectionReason.DiscoveryFailure;
                            }
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('No Nucleus endpoint was found for this user');
                            return [2 /*return*/, undefined];
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Calling synced-lists endpoint');
                        _h.label = 5;
                    case 5:
                        _h.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, fetch(endpoint.url + '/Sync/Lists', {
                                headers: {
                                    Authorization: endpoint.authToken,
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                method: 'GET'
                            })];
                    case 6:
                        syncedListsResponse = _h.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_7 = _h.sent();
                        if (qos) {
                            qos.reason = NucleusRedirectionReason.SyncListsFailure;
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Error calling synced-lists endpoint: ' + e_7);
                        return [2 /*return*/, undefined];
                    case 8:
                        syncListsSuccess = !!syncedListsResponse && syncedListsResponse.ok;
                        if (!syncListsSuccess) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Error calling synced-lists endpoint: ' + syncedListsResponse.status);
                            if (qos) {
                                qos.reason = NucleusRedirectionReason.SyncListsFailure;
                            }
                            return [2 /*return*/, undefined];
                        }
                        _h.label = 9;
                    case 9:
                        _h.trys.push([9, 11, , 13]);
                        return [4 /*yield*/, syncedListsResponse.json()];
                    case 10:
                        syncedListsObject_1 = _h.sent();
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("synced - lists resp: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(syncedListsObject_1); }) + " ");
                        syncedLists = syncedListsObject_1.d.results.map(function (r) {
                            return r.syncState
                                ? r
                                : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, r), { syncState: {
                                        currentlySyncing: true,
                                        unsynced: false,
                                        pendingUploads: 0,
                                        refreshNeeded: false,
                                        inInitialSync: false
                                    } });
                        });
                        user = {
                            syncedLists: syncedLists,
                            endpoint: endpoint
                        };
                        storage.updateNucleusUserData(_aadUserId, user);
                        storage.setNucleusFirstContact(_aadUserId, true);
                        return [3 /*break*/, 13];
                    case 11:
                        e_8 = _h.sent();
                        _c = _NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"];
                        _d = "Error parsing synced - lists JSON: " + e_8 + ".";
                        _e = "Payload was: ";
                        _f = _NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"];
                        return [4 /*yield*/, syncedListsResponse.text()];
                    case 12:
                        _c.apply(void 0, [_d +
                                (_e + _f.apply(void 0, [_h.sent()]) + " ")]);
                        if (qos) {
                            qos.reason = NucleusRedirectionReason.SyncListsFailure;
                        }
                        return [2 /*return*/, undefined];
                    case 13:
                        // Connect for notifications to any lists that a caller
                        // has registered for but aren't set up yet.
                        for (_i = 0, _g = user.syncedLists; _i < _g.length; _i++) {
                            list = _g[_i];
                            for (cbid in this._listStatusCallbacks) {
                                if (this._listStatusCallbacks.hasOwnProperty(cbid)) {
                                    if (this._listStatusCallbacks[cbid].listName === this._socketIdFromList(list)) {
                                        this._connectListNotifications(user, list);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype._getOperation = function (options) {
        var url = options.url, siteId = options.siteId, listId = options.listId, siteUrl = options.siteUrl;
        if (url) {
            try {
                // Analyze the URL
                var operation_1 = Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["getListOperationFromUrl"])(url, this._featureCheck);
                if (!operation_1 || !operation_1.rest) {
                    return undefined;
                }
                operation_1.ids = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, operation_1.ids), { siteId: operation_1.ids.siteId || siteId, listId: operation_1.ids.listId || listId, siteUrl: operation_1.ids.siteUrl || siteUrl });
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Found operation: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(operation_1); }) + " ");
                return operation_1;
            }
            catch (e) {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Failed to parse url: ' + e);
                return undefined;
            }
        }
        else {
            if (!siteUrl) {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("URL/site URL weren't provided");
                return undefined;
            }
            return {
                operationType: options.operation,
                ids: {
                    siteId: siteId,
                    listId: listId,
                    siteUrl: siteUrl
                }
            };
        }
    };
    NucleusDataSyncClient.prototype._getUser = function (options, qos) {
        // Grab user information if there is any.
        return this._getNucleusUser(options, qos).catch(function (e) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Failed to get user: ' + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(e));
            return undefined;
        });
    };
    NucleusDataSyncClient.prototype._triggerListsHomeSyncNow = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var user, url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUser()];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("Failed to find user for lists home sync");
                            return [2 /*return*/, false];
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Sync Lists Home Now: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(user.endpoint); }));
                        url = user.endpoint.url + "/Sync/SyncListsHomeNow";
                        return [4 /*yield*/, fetch(url, {
                                headers: {
                                    Authorization: user.endpoint.authToken,
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST'
                            }).catch(function (e) {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("Failed to send sync lists home request: " + e);
                                return false;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype._triggerListSyncNow = function (user, list) {
        var siteId = list.siteId, listId = list.listId;
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Sync now: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(user.endpoint); }) + ", List: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(listId) + ", Site: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(siteId));
        if (!listId || !siteId) {
            return;
        }
        try {
            // We only want to perform this once per list, per page load.
            if (!this._syncNowRequests["" + (siteId + listId)]) {
                var url = user.endpoint.url + "/Sync/Sites/" + siteId + "/Lists/" + listId + "/SyncNow";
                this._syncNowRequests["" + (siteId + listId)] = true;
                // This call is a best-effort poke of
                // nucleus to start grabbing new content for the list since we'll soon be
                // requesting data for it. If it fails, nucleus should still end up doing
                // the right thing. We're temporarily putting it in the nucleus lib
                // but eventually this call should move to the server-side javascript
                // so that it can be performed as early as possible.
                //
                // NOTE: Not awaiting here is intentional - we don't want to block the first data
                // request on this round-trip.
                fetch(url, {
                    headers: {
                        Authorization: user.endpoint.authToken,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }).catch(function (e) {
                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("Failed to send syncnow request: " + e);
                });
            }
            else {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("SyncNow already called for this list");
            }
        }
        catch (e) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("Failed to send syncnow request: " + e);
        }
    };
    NucleusDataSyncClient.prototype._getUserOperationEndpoint = function (operation, options, qos) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url, siteUrl, rest, ids, user, list, nucleusUrl, targetUrl, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = options.url, siteUrl = options.siteUrl;
                        rest = operation.rest, ids = operation.ids;
                        return [4 /*yield*/, this._getUser(undefined, qos)];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            return [2 /*return*/, undefined];
                        }
                        if (!(ids.listId || ids.listUrl)) return [3 /*break*/, 5];
                        list = this._getUserList(ids, user);
                        if (!(!list || ((_a = list.syncState) === null || _a === void 0 ? void 0 : _a.inInitialSync) || ((_b = list.syncState) === null || _b === void 0 ? void 0 : _b.unsynced))) return [3 /*break*/, 4];
                        if (!user.fromStorage) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getUser({ forceRefresh: true })];
                    case 2:
                        // We found a user, they came from our stored cache
                        // and when we cached the data the list was either not syncing or
                        // it was syncing but not yet fully setup. In this case, redo discovery
                        // because the list may be present or usable now.
                        user = _c.sent();
                        if (!user) {
                            return [2 /*return*/, undefined];
                        }
                        list = this._getUserList(ids, user);
                        _c.label = 3;
                    case 3:
                        if (!list) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Found operation, but no synced list.');
                            qos.reason = NucleusRedirectionReason.EntityNotSynced;
                            return [2 /*return*/, undefined];
                        }
                        _c.label = 4;
                    case 4:
                        if (!list.syncState || list.syncState.inInitialSync) {
                            qos.reason = NucleusRedirectionReason.InitialSync;
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Can't redirect to this list during initial sync");
                            return [2 /*return*/, undefined];
                        }
                        // Poke the nucleus service to start refreshing the list if necessary.
                        this._triggerListSyncNow(user, list);
                        _c.label = 5;
                    case 5:
                        nucleusUrl = new URL(user.endpoint.url);
                        if (rest && url) {
                            targetUrl = new URL(url);
                            targetUrl.pathname = nucleusUrl.pathname + '/SharePoint/_api' + rest.api;
                            if (operation.ids.siteUrl) {
                                targetUrl.search = targetUrl.search + ("&siteUrl=" + encodeURIComponent(operation.ids.siteUrl));
                            }
                        }
                        else if (siteUrl) {
                            targetUrl = new URL(siteUrl);
                            targetUrl.pathname = nucleusUrl.pathname + '/SharePoint' + targetUrl.pathname;
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        targetUrl.protocol = 'http';
                        targetUrl.host = nucleusUrl.host;
                        result = {
                            url: targetUrl.toString(),
                            authToken: user.endpoint.authToken,
                            context: {
                                userRoot: user.endpoint.url
                            },
                            client: this
                        };
                        return [2 /*return*/, result];
                }
            });
        });
    };
    NucleusDataSyncClient.prototype._resetUserData = function (endpoint) {
        // We could have multiple requests failing for this user at the same time
        // In that case, we only want to redo discovery once. Check whether the
        // user's stored information still matches what we have in our endpoint.
        // If so, kick off discovery again. Otherwise, we can just ignore this
        // operation, since it means someone else already has.
        var _aadUserId = this._aadUserId;
        var storedData = this.storage.getNucleusUserData(_aadUserId);
        if (storedData &&
            storedData.endpoint &&
            storedData.endpoint.authToken === endpoint.authToken &&
            storedData.endpoint.url === endpoint.url) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Resetting user " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(_aadUserId) + " ");
            this.storage.clearNucleusUserData(_aadUserId);
            this._shutdownNotifications();
            delete this.getUserPromise;
        }
    };
    NucleusDataSyncClient.prototype._shutdownNotifications = function (list) {
        var _this = this;
        if (!list) {
            for (var s in this._listNotificationContext) {
                if (this._listNotificationContext.hasOwnProperty(s)) {
                    var socket = this._listNotificationContext[s].socket;
                    if (socket) {
                        socket.close();
                        this._listNotificationContext[s].socket = undefined;
                    }
                }
            }
        }
        else {
            list.forEach(function (l) {
                var listName = _this._socketIdFromList(l);
                if (!_this._listNotificationContext[listName]) {
                    return;
                }
                var socket = _this._listNotificationContext[listName].socket;
                if (socket) {
                    socket.close();
                    _this._listNotificationContext[listName].socket = undefined;
                }
                _this._notifyListStateConnectionChanges(l, false);
            });
        }
    };
    NucleusDataSyncClient.prototype._socketIdFromList = function (list) {
        return list.siteId + "-" + list.listId;
    };
    NucleusDataSyncClient.prototype._getNotificationPayloadFromState = function (list, state) {
        var localStatus = state.currentlySyncing || state.inInitialSync
            ? _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].Syncing
            : state.pendingUploads
                ? _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].ChangesSaved
                : _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].InSync;
        return {
            id: list,
            state: localStatus,
            dataRefreshNeeded: !!state.refreshNeeded
        };
    };
    NucleusDataSyncClient.prototype._updateListSyncState = function (list, state, listName, context) {
        listName = listName || this._socketIdFromList(list);
        context = context || this._listNotificationContext[listName];
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Notification: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(state); }));
        var payload = this._getNotificationPayloadFromState(list, state);
        var localStatus = payload.state;
        var clientStateChanged = !context.lastSentClientState || localStatus !== context.lastSentClientState.state;
        if (clientStateChanged) {
            context.lastSentClientState = {
                id: list,
                state: localStatus,
                dataRefreshNeeded: !!state.refreshNeeded
            };
        }
        context.lastKnownServerState = state;
        this._listNotificationContext[listName] = context;
        if (clientStateChanged || state.refreshNeeded) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Notifying listeners of new list state");
            for (var listenerId in this._listStatusCallbacks) {
                if (this._listStatusCallbacks.hasOwnProperty(listenerId)) {
                    var listener = this._listStatusCallbacks[listenerId];
                    if (listener && listener.listName === listName) {
                        try {
                            listener.callback([payload]);
                        }
                        catch (e) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])("Error sending list notification to callback " + listName + ": " + e);
                        }
                    }
                }
            }
        }
    };
    NucleusDataSyncClient.prototype._handleListStateChangeMessage = function (list, ev) {
        var listName = this._socketIdFromList(list);
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Got list notification for " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(list); }) + ", listName: " + listName);
        var context = this._listNotificationContext[listName];
        if (!context) {
            return;
        }
        var notification = JSON.parse(ev.data);
        this._updateListSyncState(list, notification, listName, context);
    };
    NucleusDataSyncClient.prototype._handleListStateChangeError = function (user, list) {
        var _this = this;
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Hit a list websocket error");
        this._shutdownNotifications([list]);
        var listName = this._socketIdFromList(list);
        if (this._listNotificationContext[listName] &&
            this._listNotificationContext[listName].reconnectAttempts < MAX_WEBSOCKET_RECONNECT_ATTEMPTS) {
            var timeoutMs = 4000;
            setTimeout(function () {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Attempting to reconnect websocket, attempts: " + _this._listNotificationContext[listName].reconnectAttempts);
                _this._connectListNotifications(user, list);
            }, timeoutMs);
        }
        else {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["logError"])('Not reconnecting websocket because we hit the max reconnection attempts');
        }
    };
    NucleusDataSyncClient.prototype._handleListStateConnected = function (list) {
        this.storage.setNucleusFirstContact(this._aadUserId, true);
        var listName = this._socketIdFromList(list);
        if (this._listNotificationContext[listName]) {
            this._listNotificationContext[listName].reconnectAttempts = 0;
            this._notifyListStateConnectionChanges(list, true);
        }
    };
    NucleusDataSyncClient.prototype._notifyListStateConnectionChanges = function (list, connected) {
        var _a;
        var listName = this._socketIdFromList(list);
        for (var cbid in this._listStatusCallbacks) {
            if (this._listStatusCallbacks.hasOwnProperty(cbid)) {
                var cb = this._listStatusCallbacks[cbid];
                if (!cb.listName || cb.listName === listName) {
                    if ((_a = cb.options) === null || _a === void 0 ? void 0 : _a.sendConnectionNotifications) {
                        cb.callback([
                            {
                                id: list,
                                state: connected
                                    ? _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].ListStatusConnected
                                    : _ListUtilities__WEBPACK_IMPORTED_MODULE_1__["DataSyncListStatus"].ListStatusConnectionLost
                            }
                        ]);
                    }
                }
            }
        }
    };
    NucleusDataSyncClient.prototype._connectListNotifications = function (user, list) {
        var _this = this;
        if (!list.listId || !list.siteId) {
            throw new Error('Cannot subscribe without list and site id');
        }
        var listName = this._socketIdFromList(list);
        if (this._listNotificationContext[listName] && this._listNotificationContext[listName].socket) {
            return;
        }
        var storedState = this._getUserList(list, user);
        if (storedState === undefined) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('User is not currenctly syncing this list.');
            return;
        }
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Setting up notifications for " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(list); }));
        var wsUrl = new URL(user.endpoint.url);
        wsUrl.protocol = 'ws';
        wsUrl.pathname += "/WebSocket/Sites/" + list.siteId + "/Lists/" + list.listId + "/Notifications";
        wsUrl.search = "?authToken=" + encodeURIComponent(user.endpoint.webSocketToken);
        var socket = this._wsFactory(wsUrl.toString());
        if (!this._listNotificationContext[listName]) {
            this._listNotificationContext[listName] = {
                id: list,
                reconnectAttempts: 1,
                socket: socket,
                lastKnownServerState: storedState.syncState
            };
        }
        else {
            this._listNotificationContext[listName].reconnectAttempts++;
            this._listNotificationContext[listName].socket = socket;
        }
        socket.onopen = function () {
            _this._handleListStateConnected(list);
        };
        socket.onmessage = function (ev) {
            _this._handleListStateChangeMessage(list, ev);
        };
        socket.onerror = function () {
            _this._handleListStateChangeError(user, list);
        };
    };
    NucleusDataSyncClient.prototype._normalizeIds = function (ids) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ids), { listId: ids.listId && Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(ids.listId), siteId: ids.siteId && Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(ids.siteId), webId: ids.webId && Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(ids.webId) });
    };
    NucleusDataSyncClient.prototype._getUserList = function (ids, user, includeUnsynced) {
        if (!this._featureCheck(_DataSyncFlights__WEBPACK_IMPORTED_MODULE_6__["EnableNucleusListConflictsUX"])) {
            return Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["getUserListPreSyncIssues"])(ids, user);
        }
        var siteUrl = ids.siteUrl, siteId = ids.siteId, listId = ids.listId, listUrl = ids.listUrl, webId = ids.webId, listFullUrl = ids.listFullUrl;
        var list = user.syncedLists.find(function (l) {
            var _a;
            return ((!!listFullUrl && listFullUrl === l.listUrl) ||
                ((siteUrl || siteId) &&
                    (!siteUrl || siteUrl === l.siteUrl) &&
                    (!siteId || Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(siteId) === Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(l.siteId)) &&
                    (listUrl || listId) &&
                    (!listId || Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(listId) === Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(l.listId)) &&
                    (!listUrl || ((_a = l.listUrl) === null || _a === void 0 ? void 0 : _a.endsWith(listUrl))) &&
                    (!webId || Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(webId) === Object(_ListUtilities__WEBPACK_IMPORTED_MODULE_1__["normalizeGuid"])(l.webId))));
        });
        if (list && (includeUnsynced || !(list.syncState && list.syncState.unsynced))) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])("Found list: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["Private"])(function () { return JSON.stringify(list); }));
            return list;
        }
    };
    return NucleusDataSyncClient;
}());

/**
 * Nucleus starts in the 'unbound' state (isNucluesSession = undefined). When
 * the first request is made to the Nucleus endpoint, we decide whether to bind
 * to the nucleus endpoint (if successful) or to bind to the service (if it failed).
 * Once this decision is locked in, it takes a page refresh to reset it.
 */
var isNucleusSession = undefined;
function clearNucleusBindingState() {
    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Clearing nucleus bind state');
    isNucleusSession = undefined;
}
function isBound() {
    return isNucleusSession !== undefined;
}
function isBoundToNucleus() {
    return isNucleusSession === true;
}
function isBoundToService() {
    return isNucleusSession === false;
}
function tryBindToService() {
    if (isNucleusSession === undefined) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Binding to the SPO service');
        isNucleusSession = false;
    }
    return !isNucleusSession;
}
function tryBindToNucleus() {
    if (isNucleusSession === undefined) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_4__["log"])('Binding to the local Nucleus endpoint');
        isNucleusSession = true;
    }
    return isNucleusSession;
}
//# sourceMappingURL=Nucleus.js.map

/***/ }),

/***/ "Ng1F":
/*!****************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-guid@1.0.0/node_modules/@ms/utilities-guid/lib/Guid.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Empty, generate, normalizeLower, normalizeUpper, normalizeDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLower", function() { return normalizeLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUpper", function() { return normalizeUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDashes", function() { return normalizeDashes; });
// tslint:disable:no-bitwise
function generateUuidPart(length) {
    var str = '';
    while (str.length < length) {
        var num = Math.random() * 16;
        num = num | 0; // clear decimal
        str += num.toString(16);
    }
    return str;
}
/**
 * @public
 */
var Empty = '00000000-0000-0000-0000-000000000000';
/**
 * Return a v4 UUID as specified by RFC 4122 http://tools.ietf.org/html/rfc4122
 *
 * @public
 */
function generate() {
    var parts = [];
    parts.push(generateUuidPart(8));
    parts.push(generateUuidPart(4));
    // first digit must be 4 since we are using pseudorandom numbers
    var timeHighAndVersion = '4' + generateUuidPart(3);
    parts.push(timeHighAndVersion);
    // first digit must have first two bits set to 10
    var clockSeqHiAndReserved = generateUuidPart(4);
    // ClockSeqHiAndReserved is a base-16 string.
    var intVal = parseInt(clockSeqHiAndReserved[0], 16);
    intVal = intVal & 3; // clear out first two bits
    intVal = intVal | 8; // set first bit to 1
    clockSeqHiAndReserved = intVal.toString(16) + clockSeqHiAndReserved.substr(1);
    parts.push(clockSeqHiAndReserved);
    parts.push(generateUuidPart(12));
    return parts.join('-');
}
/**
 * Normalizes a GUID to lowercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeLower(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toLowerCase(), includeBrackets) : '';
}
/**
 * Normalizes a GUID to uppercase. Returns '' if guid is not given.
 * @param includeBrackets - if true, add or keep brackets; if false, strip brackets
 *
 * @public
 */
function normalizeUpper(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    return guid ? _normalizeBrackets(guid.toUpperCase(), includeBrackets) : '';
}
/**
 * Normalizes the dashes in a GUID. Returns '' if the input is null, undefined, or does not contain
 * 32 hexadecimal characters.
 * @param guid - The GUID
 * @param includeBrackets - if true, output will contain brackets; if false, output will not
 *
 * @public
 */
function normalizeDashes(guid, includeBrackets) {
    if (includeBrackets === void 0) { includeBrackets = false; }
    if (guid) {
        var parsed = guid.replace(/[^A-Fa-f0-9]/g, '');
        if (parsed.length === 32) {
            return _normalizeBrackets(parsed.slice(0, 8) + "-" + parsed.slice(8, 12) + "-" + parsed.slice(12, 16) + "-" + parsed.slice(16, 20) + "-" + parsed.slice(20), includeBrackets);
        }
    }
    return '';
}
function _normalizeBrackets(guid, includeBrackets) {
    var match = guid.match(/^\{(.*)\}$/);
    if (match) {
        return includeBrackets ? match[0] : match[1];
    }
    return includeBrackets ? '{' + guid + '}' : guid;
}
//# sourceMappingURL=Guid.js.map

/***/ }),

/***/ "NlEA":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/Storage.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: NucleusStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusStorage", function() { return NucleusStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NucleusLogging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NucleusLogging */ "QLOS");


var statePrefix = 'microsoft.sharepoint.datasync.nucleus';
var stateName = function (userId) { return statePrefix + "." + userId; };
/**
 * Caches the user data for the page lifetime. Not used unless 'nucleus.noUserCache'
 * is set to 'true' in local storage. This is used for testing discovery scenarios
 * so that you can force nucleus to skip the cache on each refresh.
 */
var pageUserData = {};
var firstContactCache = {};
var NucleusStorage = /** @class */ (function () {
    function NucleusStorage() {
    }
    NucleusStorage.prototype.clearNucleusUserData = function (userId) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["log"])("Clearing storage at '" + statePrefix + "." + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(userId) + "'");
        if (pageUserData[userId]) {
            delete pageUserData[userId];
        }
        // Note that we do NOT remove the firstContact flag. This is intentional.
        localStorage.removeItem(stateName(userId));
    };
    NucleusStorage.prototype.updateNucleusUserData = function (userId, data) {
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["log"])("Updating storage at '" + statePrefix + "." + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(userId) + "'. Data: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(function () { return JSON.stringify(data); }));
        var withFlag = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { fromStorage: true, lastUpdate: data.lastUpdate || Date.now() });
        pageUserData[userId] = JSON.stringify(withFlag);
        localStorage.setItem(stateName(userId), JSON.stringify(withFlag));
    };
    NucleusStorage.prototype.getNucleusUserData = function (userId) {
        var data = null;
        if (localStorage.getItem('nucleus.noUserCache') !== 'true') {
            data = localStorage.getItem(stateName(userId));
        }
        else {
            data = pageUserData[userId] || null;
        }
        if (!data) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["log"])("No user info for '" + statePrefix + "." + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(userId) + "'");
            return undefined;
        }
        try {
            var result_1 = JSON.parse(data);
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["log"])("Got storage at '" + statePrefix + "." + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(userId) + "'. Data: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(function () { return JSON.stringify(result_1); }));
            return result_1;
        }
        catch (e) {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["log"])("Error: bad json at '" + statePrefix + "." + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(userId) + "'. Data: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_1__["Private"])(data));
            return undefined;
        }
    };
    NucleusStorage.prototype.setNucleusFirstContact = function (userId, firstContact) {
        if (firstContactCache[userId] === firstContact) {
            return;
        }
        localStorage.setItem("nucleus." + userId + ".firstContact", "" + firstContact);
        firstContactCache[userId] = firstContact;
    };
    NucleusStorage.prototype.getNucleusFirstContact = function (userId) {
        var cached = firstContactCache[userId];
        if (cached !== undefined) {
            return cached;
        }
        var stored = localStorage.getItem("nucleus." + userId + ".firstContact") === 'true';
        firstContactCache[userId] = stored;
        return stored;
    };
    return NucleusStorage;
}());

//# sourceMappingURL=Storage.js.map

/***/ }),

/***/ "O/Ab":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/DataSync.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: DataSyncListStatus, DataSyncListStatusError, DataSyncListStatusAttentionReason, getConflictErrorDetailContents, DataSyncOperationType, getDataSyncClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConflictErrorDetailContents", function() { return getConflictErrorDetailContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSyncOperationType", function() { return DataSyncOperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSyncClient", function() { return getDataSyncClient; });
/* harmony import */ var _nucleus_Nucleus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nucleus/Nucleus */ "MkVS");
/* harmony import */ var _DataSyncFlights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSyncFlights */ "FdyI");
/* harmony import */ var _nucleus_ListUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nucleus/ListUtilities */ "KP+r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatus", function() { return _nucleus_ListUtilities__WEBPACK_IMPORTED_MODULE_2__["DataSyncListStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatusError", function() { return _nucleus_ListUtilities__WEBPACK_IMPORTED_MODULE_2__["DataSyncListStatusError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSyncListStatusAttentionReason", function() { return _nucleus_ListUtilities__WEBPACK_IMPORTED_MODULE_2__["DataSyncListStatusAttentionReason"]; });





var propertyOf = function (name) { return name; };
var predefinedConflictErrorDetailsKeys = [propertyOf('isConflict')];
function getConflictErrorDetailContents(details) {
    var _loop_1 = function (key) {
        if (details.hasOwnProperty(key) &&
            !predefinedConflictErrorDetailsKeys.find(function (v) { return v === key; })) {
            return { value: {
                    key: key,
                    value: details[key]
                } };
        }
    };
    for (var key in details) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
var DataSyncOperationType;
(function (DataSyncOperationType) {
    DataSyncOperationType[DataSyncOperationType["Unspecified"] = 0] = "Unspecified";
    DataSyncOperationType[DataSyncOperationType["ListQuickEdit"] = 1] = "ListQuickEdit";
})(DataSyncOperationType || (DataSyncOperationType = {}));
// Only one instance of the client exists per page.
var client;
/**
 * Retrieves an instance of the data sync client.
 * @param featureCheck A callback which allows async loaded data sync to
 * check feature overrides.
 */
function getDataSyncClient(aadUserId, featureCheck, telemetryContext) {
    return Object(_DataSyncFlights__WEBPACK_IMPORTED_MODULE_1__["isDataSyncEnabled"])(featureCheck)
        ? client || (client = new _nucleus_Nucleus__WEBPACK_IMPORTED_MODULE_0__["NucleusDataSyncClient"]({ aadUserId: aadUserId, featureCheck: featureCheck, telemetryContext: telemetryContext }))
        : undefined;
}
//# sourceMappingURL=DataSync.js.map

/***/ }),

/***/ "QLOS":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/NucleusLogging.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: log, logError, logToConsoleFlag, Private, logTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logToConsoleFlag", function() { return logToConsoleFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Private", function() { return Private; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logTime", function() { return logTime; });
/**
 * Logging for nucleus.
 *
 * IMPORTANT: Do not log private information. Instead, log the result of Private(data).
 * This will squelch the information unless we're in a debug build and logging
 * to the console.
 *
 * On ship builds, non-private messages will be passed to ErrorHandler.error if they are
 * errors, and ErrorHandler.verbose otherwise. See ErrorHandler for more information.
 *
 * On debug builds, if local storage setting 'sharepoint.datasync.nucleus.logToConsole'
 * is set to 'true' then the log line will be printed to the console window. It will not
 * be sent to ErrorHandler.
 */
var logFn;
var log = function (e) { return logFn(e); };
var logError = function (e) { return logFn({ msg: e, error: true }); };
// Console logging defaults to off. Note that console logging
// replaces ErrorHelper logging if it's turned on.
// Check if the user is requesting console logging, and if so, activate it.
var logToConsoleFlag = 'sharepoint.datasync.nucleus.logToConsole';
var consoleSetting = window.localStorage.getItem(logToConsoleFlag);
var logToConsole = !!consoleSetting && consoleSetting.toUpperCase() === 'TRUE';
if (logToConsole) {
    // We're in a debug session where the user has requested that we log to the console.
    // We do this *instead* of logging to the ErrorHelper, because in this mode we're
    // not squelching any PII.
    logFn = function (e) {
        console.log("[nucleus] " + (typeof e === 'string' ? e : e.msg));
    };
}
else {
    logFn = function () {
        /*nothing*/
    };
}
/**
 * If the given object represents private data, it will be squelched from the logging,
 * unless we're on a debug build and the user has requested that all logging go to their
 * console instead of the normal log handlers.
 *
 * If passed a function, it will use the function's result if logging of the value
 * is allowed. Otherwise the function is ignored.
 */
// tslint:disable-next-line:no-any
var Private = !logToConsole
    ? // tslint:disable-next-line:no-any
        function (o) { return '<PRIVATE>'; }
    : // tslint:disable-next-line:no-any
        function (o) { return (!o ? 'undefined' : typeof o === 'function' ? o().toString() : o.toString()); };
function logTime(d) {
    var toLog = d || new Date();
    return "" + toLog.toISOString();
}
//# sourceMappingURL=NucleusLogging.js.map

/***/ }),

/***/ "TGuB":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/data-sync-nucleus@1.6.1_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/data-sync-nucleus/lib/nucleus/EndpointDiscovery.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: NucleusMySiteDiscoveryFlight, DiscoveryExtensionMessages, endpointListExistsFlag, discoveryGraphUrl, NucleusDiscovery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusMySiteDiscoveryFlight", function() { return NucleusMySiteDiscoveryFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoveryExtensionMessages", function() { return DiscoveryExtensionMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpointListExistsFlag", function() { return endpointListExistsFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoveryGraphUrl", function() { return discoveryGraphUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleusDiscovery", function() { return NucleusDiscovery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_EventGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities/lib/EventGroup */ "ZINP");
/* harmony import */ var _uifabric_utilities_lib_EventGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_EventGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NucleusLogging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NucleusLogging */ "QLOS");
/* harmony import */ var _NucleusInternal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NucleusInternal */ "AqOT");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _NucleusTelemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NucleusTelemetry */ "71Qj");
/* harmony import */ var _ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/utilities-error/lib/ApiError */ "6e34");







var NucleusMySiteDiscoveryFlight = {
    ODB: 60046
};
var DiscoveryExtensionMessages = {
    /**
     * Message that initiates a endpoint data refresh in the extension
     */
    startRefresh: 'NUCLEUS_FORCE_REFRESH',
    /**
     * Message that indicates a refresh of the endpoint data is complete
     */
    refreshComplete: 'NUCLEUS_REFRESH_COMPLETE'
};
/**
 * The variable to check to see if the extension is installed
 */
var extensionInstalledFlag = 'nucleus.installed';
var endpointListExistsFlag = 'nucleus.endpointListExists';
function isNucleusExtensionInstalled() {
    return (!!window.sessionStorage.getItem(extensionInstalledFlag) &&
        window.localStorage.getItem('nucleus.noExtension') !== 'true'); // for manual tests
}
function isNucleusRefreshCompleteEvent(event) {
    if (event && event.source !== window && event.source !== null) {
        return false;
    }
    return event && event.data && event.data.type === DiscoveryExtensionMessages.refreshComplete;
}
var discoveryGraphUrl = 'https://graph.microsoft.com/v1.0/me/drive';
var nucleusEndpointListName = 'microsoft.ListSync.Endpoints';
var nucleusListUrlPath = "_api/web/lists/GetByTitle('" + nucleusEndpointListName + "')/items";
var appJson = 'application/json';
var DiscoveryFailureReason;
(function (DiscoveryFailureReason) {
    DiscoveryFailureReason["NoAuthTokenGetter"] = "NoAuthTokenGetter";
    DiscoveryFailureReason["GetMySiteUrlFailed"] = "GetMySiteUrlFailed";
    DiscoveryFailureReason["GetAuthTokenFailed"] = "GetAuthTokenFailed";
    DiscoveryFailureReason["NoEndpointList"] = "NoEndpointList";
    DiscoveryFailureReason["EndpointListParseFailure"] = "EndpointListParseFailure";
    DiscoveryFailureReason["NoPingResponse"] = "NoPingResponse";
    DiscoveryFailureReason["NoExtension"] = "NoExtension";
    DiscoveryFailureReason["ExtensionMessageTimeout"] = "ExtensionMessageTimeout";
    DiscoveryFailureReason["GetSiteIdFailed"] = "GetSiteIdFailed";
    DiscoveryFailureReason["CreateEpListRequestFailed"] = "CreateEpListRequestFailed";
    DiscoveryFailureReason["UnknownError"] = "UnknownError";
    DiscoveryFailureReason["EndpointListFetchFailure"] = "EndpointListFetchFailure";
    DiscoveryFailureReason["VroomSiteIdResponseParseFailure"] = "VroomSiteIdResponseParseFailure";
    DiscoveryFailureReason["VroomCreateListResponseParseFailure"] = "VroomCreateListResponseParseFailure";
    DiscoveryFailureReason["EndpointListContentsParseFailure"] = "EndpointListContentsParseFailure";
})(DiscoveryFailureReason || (DiscoveryFailureReason = {}));
var DiscoveryFailure = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DiscoveryFailure, _super);
    function DiscoveryFailure(reason) {
        return _super.call(this, { message: reason }) || this;
    }
    return DiscoveryFailure;
}(_ms_utilities_error_lib_ApiError__WEBPACK_IMPORTED_MODULE_6__["ApiError"]));
var NucleusDiscovery = /** @class */ (function () {
    function NucleusDiscovery(options) {
        var _a, _b, _c;
        this._getAuthTokenCallback = undefined;
        this._discoveryTimeoutMs = ((_a = options) === null || _a === void 0 ? void 0 : _a.timeoutPeriodMs) || 10000;
        this._sleepBetweenRetriesMs = ((_b = options) === null || _b === void 0 ? void 0 : _b.sleepBetweenRetriesMs) || 100;
        this._featureCheck = ((_c = options) === null || _c === void 0 ? void 0 : _c.featureCheck) || (function () { return true; });
        this._id = Date.now();
        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Initialized discovery " + this._id);
    }
    NucleusDiscovery.prototype.registerAuthTokenCallback = function (getAuthToken) {
        if (this._getAuthTokenCallback) {
            return;
        }
        this._getAuthTokenCallback = getAuthToken;
    };
    NucleusDiscovery.prototype.refreshNucleusUrl = function (userId) {
        var _this = this;
        return Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_5__["wrapQos"])({
            name: 'nucleus.Discovery'
        }, function () {
            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("discovering endpoint for user " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(userId) + ", " + _this._id);
            if (!isNucleusExtensionInstalled() && !_this._getAuthTokenCallback) {
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("No plugin & token callback. Can't do discovery.");
                throw new DiscoveryFailure(DiscoveryFailureReason.NoAuthTokenGetter);
            }
            if (isNucleusExtensionInstalled()) {
                return _this._performDiscoveryWithExtension(userId)
                    .then(function (result) { return result || _this._performDiscoveryWithMySite(); })
                    .catch(function () { return _this._performDiscoveryWithMySite(); });
            }
            else {
                return _this._performDiscoveryWithMySite();
            }
        });
    };
    /**
     * Creates the private user endpoint list. This function will only work
     * once per page load. Subsequent calls simply return the cached result.
     * @param options
     * @returns a promise for a boolean indicating whether the list was created as a result of
     * this operation. Note that the list may have already existed, in which case
     * this function will return false.
     */
    // tslint:disable-next-line:member-ordering
    NucleusDiscovery.prototype.tryCreateUserEndpointList = function (options) {
        return this._epListPromise || (this._epListPromise = this._tryCreateUserEndpointList(options));
    };
    NucleusDiscovery.prototype._tryCreateUserEndpointList = function (options) {
        var _this = this;
        if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('ebef54aa-39c4-4777-8faf-5d09a63ee680', '11/23/2020', 'Create ep list') ||
            localStorage.getItem(endpointListExistsFlag) === 'true') {
            return Promise.resolve(false);
        }
        return Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_5__["wrapQos"])({
            name: 'nucleus.createUserEndpointList',
            onFailure: { result: false }
        }, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var succeeded, mysiteUrl, _a, siteURL, mysiteToken, tokenString, getSiteIdUrl, headers, getIdRequest, getIdResponse, siteId, createRequestUrl, createListRequest, createRequest, createResponse;
            var _this = this;
            var _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this._getAuthTokenCallback) {
                            throw new DiscoveryFailure(DiscoveryFailureReason.NoAuthTokenGetter);
                        }
                        succeeded = false;
                        _a = ((_b = options) === null || _b === void 0 ? void 0 : _b.mysiteUrl);
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._getMySiteUrl()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        mysiteUrl = _a;
                        if (!mysiteUrl) {
                            throw new DiscoveryFailure(DiscoveryFailureReason.GetMySiteUrlFailed);
                        }
                        siteURL = new URL(mysiteUrl);
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return _this._getAuthToken(mysiteUrl); })];
                    case 3:
                        mysiteToken = _c.sent();
                        if (!mysiteToken) {
                            throw new DiscoveryFailure(DiscoveryFailureReason.GetAuthTokenFailed);
                        }
                        tokenString = "Bearer " + mysiteToken;
                        getSiteIdUrl = siteURL.protocol + "//" + siteURL.hostname + "/_api/v2.0/sites/" + siteURL.hostname + ":" + siteURL.pathname;
                        headers = {
                            Authorization: tokenString,
                            Accept: appJson
                        };
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () {
                                return fetch(getSiteIdUrl, {
                                    headers: headers
                                });
                            })];
                    case 4:
                        getIdRequest = _c.sent();
                        if (!getIdRequest || !getIdRequest.ok) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["logError"])("get site ID failed. err: " + (getIdRequest && status) + ", URL: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(getSiteIdUrl));
                            throw new DiscoveryFailure(DiscoveryFailureReason.GetSiteIdFailed);
                        }
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return getIdRequest.json(); })];
                    case 5:
                        getIdResponse = _c.sent();
                        if (!getIdResponse) {
                            throw new DiscoveryFailure(DiscoveryFailureReason.VroomSiteIdResponseParseFailure);
                        }
                        siteId = getIdResponse.id.split(',')[1];
                        createRequestUrl = siteURL.protocol + "//" + siteURL.hostname + "/_api/v2.0/sites/" + siteId + "/lists";
                        createListRequest = {
                            displayName: nucleusEndpointListName,
                            list: {
                                hidden: true
                            },
                            columns: [
                                {
                                    name: 'EndpointData',
                                    text: {
                                        allowMultipleLines: true,
                                        linesForEditing: 6,
                                        textType: 'plain'
                                    }
                                },
                                {
                                    name: 'Device',
                                    text: {}
                                }
                            ]
                        };
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () {
                                return fetch(createRequestUrl, {
                                    headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headers), { 'Content-type': appJson }),
                                    body: JSON.stringify(createListRequest),
                                    method: 'POST'
                                });
                            })];
                    case 6:
                        createRequest = _c.sent();
                        // status 409 means the list already existed. Set the flag either
                        // if we created it just now, or 409 was returned.
                        if (createRequest && (createRequest.ok || createRequest.status === 409)) {
                            try {
                                localStorage.setItem(endpointListExistsFlag, 'true');
                            }
                            catch (_d) {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["logError"])("set local storage flag failed");
                            }
                        }
                        if (!createRequest || !createRequest.ok) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["logError"])("create list failed. err: " + (createRequest && createRequest.status) + ", URL: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(createRequestUrl));
                            throw new DiscoveryFailure(DiscoveryFailureReason.GetSiteIdFailed);
                        }
                        // At this point, the list was created, so even if there are failures later,
                        // we return true from this function.
                        succeeded = true;
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return createRequest.json(); })];
                    case 7:
                        createResponse = _c.sent();
                        if (!createResponse || !createResponse.id) {
                            throw new DiscoveryFailure(DiscoveryFailureReason.VroomCreateListResponseParseFailure);
                        }
                        // Ignore the return value. The list was still created even if reducing the
                        // permissions failed.
                        return [4 /*yield*/, this._reduceEndpointListPermissions(mysiteUrl, createResponse.id, tokenString)];
                    case 8:
                        // Ignore the return value. The list was still created even if reducing the
                        // permissions failed.
                        _c.sent();
                        return [2 /*return*/, succeeded];
                }
            });
        }); });
    };
    /**
     * This function only runs once per page load. Subsequent calls simply return the cached result.
     */
    // tslint:disable-next-line:member-ordering
    NucleusDiscovery.prototype._getMySiteUrl = function (token) {
        return this._mysiteUrlPromise || (this._mysiteUrlPromise = this._getMySiteUrlInternal(token));
    };
    /**
     * Prefer calling _getMySiteUrl which can return a cached result if the url was
     * already retreived.
     * @deprecated
     */
    NucleusDiscovery.prototype._getMySiteUrlInternal = function (token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var authToken, _a, _b, graphResponse, graphObject;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = token;
                        if (_a) return [3 /*break*/, 3];
                        _b = this._getAuthTokenCallback;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._getAuthTokenCallback(discoveryGraphUrl)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a = (_b);
                        _c.label = 3;
                    case 3:
                        authToken = _a;
                        if (!authToken) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () {
                                return fetch(discoveryGraphUrl, {
                                    headers: {
                                        Authorization: "Bearer " + authToken,
                                        Accept: appJson
                                    }
                                });
                            })];
                    case 4:
                        graphResponse = _c.sent();
                        if (!graphResponse) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return graphResponse.json(); })];
                    case 5:
                        graphObject = _c.sent();
                        if (!graphObject || !graphObject.webUrl) {
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("parse graph resp failed: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(function () { return JSON.stringify(graphObject); }));
                            return [2 /*return*/, undefined];
                        }
                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Graph response: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(function () { return JSON.stringify(graphObject); }));
                        // Get an auth token for the user's mysite
                        return [2 /*return*/, graphObject.webUrl.substring(0, graphObject.webUrl.lastIndexOf('/'))];
                }
            });
        });
    };
    NucleusDiscovery.prototype._getAuthToken = function (url) {
        return this._getAuthTokenCallback ? this._getAuthTokenCallback(url) : Promise.resolve(undefined);
    };
    NucleusDiscovery.prototype._performDiscoveryWithMySite = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_5__["wrapQos"])({
                        name: 'nucleus.MysiteDiscovery'
                    }, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var mysiteUrl, listUrl, listToken, listResponse, listObject, endpoints, pings, _loop_1, _i, pings_1, ping, state_1;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this._featureCheck(NucleusMySiteDiscoveryFlight)) {
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("MySite discovery not available");
                                        return [2 /*return*/, undefined];
                                    }
                                    if (!this._getAuthTokenCallback) {
                                        throw new DiscoveryFailure(DiscoveryFailureReason.NoAuthTokenGetter);
                                    }
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Resolving endpoint via mysite.");
                                    return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return _this._getMySiteUrl(); })];
                                case 1:
                                    mysiteUrl = _a.sent();
                                    if (!mysiteUrl) {
                                        throw new DiscoveryFailure(DiscoveryFailureReason.GetMySiteUrlFailed);
                                    }
                                    listUrl = mysiteUrl + '/' + nucleusListUrlPath;
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Endpoint list url: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(listUrl));
                                    return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return _this._getAuthToken(listUrl); })];
                                case 2:
                                    listToken = _a.sent();
                                    if (!listToken) {
                                        throw new DiscoveryFailure(DiscoveryFailureReason.GetAuthTokenFailed);
                                    }
                                    return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () {
                                            return fetch(listUrl, {
                                                headers: {
                                                    Authorization: "Bearer " + listToken,
                                                    Accept: appJson + ';odata=verbose'
                                                }
                                            });
                                        })];
                                case 3:
                                    listResponse = _a.sent();
                                    if (!listResponse) {
                                        throw new DiscoveryFailure(DiscoveryFailureReason.EndpointListFetchFailure);
                                    }
                                    else if (listResponse.status === 404) {
                                        localStorage.removeItem(endpointListExistsFlag);
                                        // The endpoint list does not exist for this user. We should attempt to create it.
                                        // Don't await this, it will run in the background, but we don't want to block on it.
                                        Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("creating ep list");
                                        this.tryCreateUserEndpointList({ mysiteUrl: mysiteUrl });
                                        // Regardless of whether we created the list, we still fail discovery. Sync won't have
                                        // populated it with any endpoint info yet.
                                        throw new DiscoveryFailure(DiscoveryFailureReason.NoEndpointList);
                                    }
                                    else {
                                        localStorage.setItem(endpointListExistsFlag, 'true');
                                    }
                                    return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return listResponse.json(); })];
                                case 4:
                                    listObject = _a.sent();
                                    if (!listObject || !listObject.d || !listObject.d.results) {
                                        throw new DiscoveryFailure(DiscoveryFailureReason.EndpointListParseFailure);
                                    }
                                    Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Endpoint list: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(function () { return JSON.stringify(listObject); }));
                                    if (listObject.d.results.length === 0) {
                                        return [2 /*return*/, undefined];
                                    }
                                    endpoints = listObject.d.results.map(function (r) {
                                        return r.EndpointData.length > 0
                                            ? Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["mapExceptions"])(function () { return JSON.parse(r.EndpointData); }, function () { return new DiscoveryFailure(DiscoveryFailureReason.EndpointListContentsParseFailure); })
                                            : undefined;
                                    });
                                    pings = endpoints.map(function (endpoint) {
                                        return endpoint && {
                                            request: _this._fetchSyncLists(endpoint),
                                            endpoint: endpoint
                                        };
                                    });
                                    _loop_1 = function (ping) {
                                        var pingResponse, e_1;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!ping) return [3 /*break*/, 4];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    return [4 /*yield*/, Object(_NucleusInternal__WEBPACK_IMPORTED_MODULE_3__["unwrapPromise"])(function () { return ping.request; })];
                                                case 2:
                                                    pingResponse = _a.sent();
                                                    if (pingResponse && pingResponse.status === 200) {
                                                        return [2 /*return*/, { value: ping.endpoint }];
                                                    }
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    e_1 = _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    };
                                    _i = 0, pings_1 = pings;
                                    _a.label = 5;
                                case 5:
                                    if (!(_i < pings_1.length)) return [3 /*break*/, 8];
                                    ping = pings_1[_i];
                                    return [5 /*yield**/, _loop_1(ping)];
                                case 6:
                                    state_1 = _a.sent();
                                    if (typeof state_1 === "object")
                                        return [2 /*return*/, state_1.value];
                                    _a.label = 7;
                                case 7:
                                    _i++;
                                    return [3 /*break*/, 5];
                                case 8: throw new DiscoveryFailure(DiscoveryFailureReason.NoPingResponse);
                            }
                        });
                    }); })];
            });
        });
    };
    NucleusDiscovery.prototype._reduceEndpointListPermissions = function (siteUrl, id, token) {
        var breakInheritanceUrl = siteUrl + "/_api/web/lists(guid'" + id + "')/breakroleinheritance(true)";
        var removePrincipalUrl = function (principal) {
            return siteUrl + "/_api/web/lists(guid'" + id + "')/roleassignments/removeroleassignment(principalid='" + principal + "')";
        };
        var init = {
            headers: {
                Authorization: token,
                Accept: appJson
            },
            method: 'POST'
        };
        return fetch(breakInheritanceUrl, init).then(function (bi) {
            return bi.ok &&
                fetch(removePrincipalUrl(4), init).then(function (r1) { return r1.ok && fetch(removePrincipalUrl(5), init).then(function (r2) { return r2.ok; }); });
        });
    };
    NucleusDiscovery.prototype._fetchSyncLists = function (endpoint) {
        return fetch(endpoint.url + '/Sync/Lists', {
            headers: {
                Authorization: endpoint.authToken,
                Accept: appJson,
                'Content-Type': 'application/json'
            }
        });
    };
    NucleusDiscovery.prototype._performDiscoveryWithExtension = function (userId) {
        var _this = this;
        return Object(_NucleusTelemetry__WEBPACK_IMPORTED_MODULE_5__["wrapQos"])({
            name: 'nucleus.ExtensionDiscovery'
        }, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('8a8a00e8-087d-47c4-986e-045d4f15fca4', '10/08/2020', 'Discovery via extension killswitch')) {
                    return [2 /*return*/, Promise.resolve(undefined)];
                }
                if (!isNucleusExtensionInstalled()) {
                    throw new DiscoveryFailure(DiscoveryFailureReason.NoExtension);
                }
                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Resolving endpoint via extension.");
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var events = new _uifabric_utilities_lib_EventGroup__WEBPACK_IMPORTED_MODULE_1__["EventGroup"](window);
                        var expired = false;
                        var startTime = new Date();
                        var postDiscoveryMessage = function () {
                            var message = {
                                type: DiscoveryExtensionMessages.startRefresh,
                                messageData: { user: userId, msgid: _this._id }
                            };
                            if (expired) {
                                return;
                            }
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Posting msg: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(function () { return JSON.stringify(message); }) + ", time: " + new Date().toISOString() + ", " + _this._id);
                            window.postMessage(message, '*');
                        };
                        events.on(window, 'message', function (event) {
                            if (expired || !isNucleusRefreshCompleteEvent(event)) {
                                return;
                            }
                            var messageData = event.data.messageData;
                            Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Plugin response: " + Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["Private"])(function () { return JSON.stringify(event.data); }) + " after " + (Date.now() - startTime.getTime()) + "ms, " + _this._id);
                            // In UTs, it's possible for a message posted to the window from test A not to run until
                            // test B. This has led to nasty bugs. So, we append an instance ID to outgoing messages
                            // that the test extension will attach to the reply. If we see a reply to a message we
                            // never sent, ignore it. The production extension doesn't use this id.
                            if (event.data.msgid && event.data.msgid !== _this._id) {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Expired msg, ignoring. " + _this._id);
                                return;
                            }
                            if (messageData && messageData.retry && !expired) {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Discovery postMessage " + _this._id);
                                setTimeout(postDiscoveryMessage, _this._sleepBetweenRetriesMs);
                            }
                            else {
                                Object(_NucleusLogging__WEBPACK_IMPORTED_MODULE_2__["log"])("Discovery disposing " + _this._id);
                                events.dispose();
                                expired = true;
                                resolve(messageData && messageData.success && messageData.user && messageData.endpointData
                                    ? messageData.endpointData
                                    : undefined);
                            }
                        }, false);
                        postDiscoveryMessage();
                        setTimeout(function () {
                            if (!expired) {
                                expired = true;
                                reject(new DiscoveryFailure(DiscoveryFailureReason.ExtensionMessageTimeout));
                                events.dispose();
                            }
                        }, _this._discoveryTimeoutMs);
                    })];
            });
        }); });
    };
    return NucleusDiscovery;
}());

//# sourceMappingURL=EndpointDiscovery.js.map

/***/ }),

/***/ "Xdo2":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-objects@1.0.0/node_modules/@ms/utilities-objects/lib/assign.js ***!
  \************************************************************************************************************************************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @public
 */
function assign(base, extension) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(base, extension);
}
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "ZINP":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/EventGroup.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/EventGroup.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

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

/***/ "qJrk":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/ErrorHelper.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["OdspErrorHelper"]; });

// Loading @ms/telemetry-manager/./lib/ErrorHelper.js



/***/ }),

/***/ "qWdj":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/decorators/withAriaLoader.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: withAriaLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAriaLoader", function() { return withAriaLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Decorator for `AriaTelemetryHandler` which injects the default aria loader.
 * @internal
 */
function withAriaLoader() {
    return function (create) {
        return /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1(params) {
                var _this = this;
                var _a = params.context, context = _a === void 0 ? {} : _a;
                var _b = params.ariaLoader, ariaLoader = _b === void 0 ? function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../AriaWrapper */ "cWn+"))];
                        case 1: return [2 /*return*/, (_a.sent()).aria];
                    }
                }); }); } : _b, _ = params.context, handlerParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(params, ["ariaLoader", "context"]);
                _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ariaLoader: ariaLoader, context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context) }, handlerParams)) || this;
                return _this;
            }
            return class_1;
        }(create));
    };
}
//# sourceMappingURL=withAriaLoader.js.map

/***/ }),

/***/ "u0q+":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-browser@1.0.2_@uifabric+utilities@7.33.2/node_modules/@ms/utilities-browser/lib/PlatformDetection.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: getBrowser, getBrowserVersion, getOS, PlatformDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserVersion", function() { return getBrowserVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOS", function() { return getOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetection", function() { return PlatformDetection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
// OneDrive:IgnoreCodeCoverage

function getBrowser(userAgent) {
    userAgent = userAgent.toLowerCase();
    // We want to figure out which ONE browser the user is most likely on.
    // The order of the checks is important so we're not deceived by (for example)
    // Chrome saying that it's Safari.
    // (Each regular expression captures the version number so we can parse it later.)
    var matchedBrowser;
    function testBrowserVersion(pattern) {
        return (matchedBrowser = RegExp(pattern + "(\\d+)([\\d.]*)").exec(userAgent));
    }
    // IE <= 10 has something like 'MSIE 9' in the user agent.
    // This is also what newer versions do in compatibility mode.
    // IE 11 sample user agent contains:
    // Trident/7.0; other stuff... rv:11.0
    var isIE = testBrowserVersion('msie ') || testBrowserVersion('trident.*rv:');
    var isIE9 = matchedBrowser && matchedBrowser[1] === '9';
    // This is Edge (it pretends to be Chrome and Safari).
    var isEdge = !matchedBrowser && testBrowserVersion('edge/');
    // This is Edge Chromium.
    var isEdgeChromium = !matchedBrowser && testBrowserVersion('edg/');
    var isFirefox = !matchedBrowser && testBrowserVersion('fxios|firefox/');
    // Note: lots of random browsers say they're Chrome and will end up in this bucket
    var isChrome = !matchedBrowser && testBrowserVersion('(?:chrome|crios)/');
    var isSafari = !matchedBrowser && /safari\/(\d+)/.test(userAgent);
    if (isSafari) {
        testBrowserVersion('version/');
    }
    // At this point, matchedBrowser should contain the version information
    // Some other browser categories:
    //   IE Mobile: /iemobile\/(\d+)/
    //   IE Mobile in desktop mode: contains WPDesktop; get version from Trident version
    //   Opera (currently goes into Chrome bucket): /opr\/(\d+)/
    var browserName = isIE
        ? 'IE'
        : isEdge
            ? 'Edge'
            : isEdgeChromium
                ? 'EdgeChromium'
                : isFirefox
                    ? 'Firefox'
                    : isChrome
                        ? 'Chrome'
                        : isSafari
                            ? 'Safari'
                            : 'NA';
    return {
        browserName: browserName,
        isChrome: !!isChrome,
        isEdge: !!isEdge,
        isEdgeChromium: !!isEdgeChromium,
        isFirefox: !!isFirefox,
        isIE: !!isIE,
        isIE9: !!isIE9,
        isSafari: !!isSafari,
        matchedBrowser: matchedBrowser
    };
}
function getBrowserVersion(info) {
    var matchedBrowser = info.matchedBrowser;
    // Parse the captured version number for user's browser.
    var browserMajor = (matchedBrowser && parseInt(matchedBrowser[1], 10)) || 0;
    var browserMinor = (matchedBrowser && matchedBrowser[2] && matchedBrowser[2].slice(1)) || '0';
    return {
        browserMajor: browserMajor,
        browserMinor: browserMinor
    };
}
function getOS(userAgent) {
    userAgent = userAgent.toLowerCase();
    // Parse device which gives hints about os / mobile state.
    // Windows Phone IE sometimes pretends to be Android, so explicitly check for Windows Phone first.
    // (wpdesktop is used by Windows Phone in desktop mode.)
    var isWinPhone = /windows phone|wpdesktop/.test(userAgent);
    var matchedOS = isWinPhone || /ipad|iphone|ipod|android/.exec(userAgent);
    // true[0] is undefined, which is falsy
    var device = matchedOS && matchedOS[0];
    var isAndroid = device === 'android';
    var isIPad = device === 'ipad';
    var isIOS = !!device && !isAndroid;
    var isMac = !matchedOS && userAgent.indexOf('macintosh') > -1;
    var isWindows = !matchedOS && userAgent.indexOf('windows nt') > -1;
    var osName = isWindows
        ? 'Windows'
        : isWinPhone
            ? 'Windows Phone'
            : isMac
                ? 'OSX'
                : isIOS
                    ? 'IOS'
                    : isAndroid
                        ? 'Android'
                        : 'NA';
    return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isIPad: isIPad,
        isMac: isMac,
        isWindows: isWindows,
        isWinPhone: !!isWinPhone,
        isMobile: !!matchedOS,
        osName: osName
    };
}

/**
 * Use PlatformDetection to evaluate which user experience makes sense for the user's
 * platform. NOTE: This class is NOT COMPLETE! Meaning not all values are parsed out of
 * the user agent. If something is missing that you need, add it and add unit tests.
 * WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
 */
var PlatformDetection = /** @class */ (function () {
    function PlatformDetection(inputAgent) {
        var root = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined;
        if (!inputAgent) {
            inputAgent = (root && root.navigator && navigator.userAgent) || '';
        }
        var userAgent = inputAgent;
        var agent = inputAgent.toLowerCase();
        var browserInfo = getBrowser(agent);
        var browserVersion = getBrowserVersion(browserInfo);
        var osInfo = getOS(agent);
        var isMobile = osInfo.isMobile;
        var isElectron = /electron\/\\d+[\\d.]*/.test(agent);
        var isWinAppWipEnabled = agent.indexOf('winappwipenabled') > -1;
        var isPWA = typeof window !== 'undefined' && window.matchMedia
            ? window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches
            : false;
        // Other operating systems:
        //   Chrome OS: /cros/
        //   Linux: /linux/ (Android can also say it's Linux, so check for Android first)
        // WARNING: Avoid using browser checks when you can use detection techniques for caps checking.
        var osVersionMatch = /[\s\(](os|os x|windows (?:phone|nt)|android) ([\d._]+)/.exec(agent);
        var isUnlimitedStyleSheetsSupported = false;
        var isWebDavSupported = false;
        var isFolderUploadSupported = false;
        var isHtml5FileUploadSupported = false;
        if (root && root.document) {
            /**
             * Checks to see if styleSheet exists as a property off of a style element.
             * This will determine if style registration should be done via cssText (<= IE9) or not
             */
            var emptyStyle = document.createElement('style');
            emptyStyle.type = 'text/css';
            isUnlimitedStyleSheetsSupported = !emptyStyle.styleSheet;
            isWebDavSupported = 'addBehavior' in HTMLDivElement.prototype;
            var input = document.createElement('input');
            input.type = 'file';
            var file = root.File;
            var fileProto = file && file.prototype;
            isHtml5FileUploadSupported = !!(fileProto &&
                (fileProto.slice || fileProto.mozSlice || fileProto.webkitSlice));
            isFolderUploadSupported = 'webkitdirectory' in input && !isElectron;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, browserInfo), browserVersion), osInfo), { isElectron: isElectron, 
            // OS Identification
            osVersion: osVersionMatch ? osVersionMatch[2] : 'NA', isWindows81: !isMobile && /windows (?:8\.1|nt 6\.3)/.test(agent), isWindows10: !isMobile && agent.indexOf('windows nt 10') > -1, isWindows7: !isMobile && agent.indexOf('windows nt 6.1') > -1, 
            // Device identification
            isWinAppWipEnabled: isWinAppWipEnabled,
            isPWA: isPWA, 
            // Capabilities
            areCSS3TransitionsSupported: !browserInfo.isIE || browserVersion.browserMajor > 9, areTouchEventsSupported: !!root && 'ontouchstart' in root, isFolderUploadSupported: isFolderUploadSupported,
            isHtml5FileUploadSupported: isHtml5FileUploadSupported, isRetinaSupported: !!root && root.devicePixelRatio > 1, isUnlimitedStyleSheetsSupported: isUnlimitedStyleSheetsSupported,
            isWebDavSupported: isWebDavSupported,
            // Raw user agent
            userAgent: userAgent });
    }
    return PlatformDetection;
}());

//# sourceMappingURL=PlatformDetection.js.map

/***/ }),

/***/ "unYt":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/utilities-error@1.0.0/node_modules/@ms/utilities-error/lib/CustomError.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 * @public
 *
 * @remarks
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message || (props.innerError && props.innerError.message));
        this.message = error.message;
        this.innerError = props.innerError;
        this.stack = error.stack;
        this.name = error.name;
        // Avoid using assign since some platforms (native) do not enumerate prototyped objects.
        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore TOO BAD
                error[key] = this[key];
            }
        }
        var customErrorType = Object.getPrototypeOf(this);
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());

// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}
//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ "wq9f":
/*!*************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-manager@1.1.3/node_modules/@ms/telemetry-manager/lib/Manager.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Manager"]; });

// Loading @ms/telemetry-manager/./lib/Manager.js



/***/ }),

/***/ "yBP4":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/telemetry-addon-aria@1.1.3_@uifabric+utilities@7.33.2/node_modules/@ms/telemetry-addon-aria/lib/AriaTelemetryHandler.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: AriaTelemetryHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaTelemetryHandler", function() { return AriaTelemetryHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/telemetry-manager/lib/EventBase */ "HMXl");
/* harmony import */ var _AriaEventBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AriaEventBuilder */ "Fb2z");
/* harmony import */ var _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/telemetry-manager/lib/ErrorHelper */ "qJrk");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/utilities-strings/lib/index */ "2h7V");
/* harmony import */ var _ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Telemetry handler for reporting events to Aria.
 * This handler ensures that events logged to Aria are well-formed and supplied with baseline required metadata fields.
 *
 * Host applications should generally use a class derived from this class, such as WebSharedAriaTelemtryHandler,
 * which supply default metadata extracted from context.
 * @public
 */
var AriaTelemetryHandler = /** @class */ (function () {
    function AriaTelemetryHandler(params) {
        var _this = this;
        /**
         * Directly logs an event to Aria using this handler.
         */
        this.logEvent = function (event) {
            var finalEvent = _this._onLogEvent ? _this._onLogEvent(event) : event;
            _this._createLogHandler().then(function (logHandler) { return logHandler(finalEvent); });
        };
        this._getAria = memorizePromise(function () {
            return params.ariaLoader().then(function (aria) {
                initializeLogManager(aria, params);
                return aria;
            });
        });
        this._getLogger = memorizePromise(function () {
            return _this._getAria().then(function (aria) {
                var logger = createLogger(aria, params.tenantToken, params.context);
                return [logger, aria];
            });
        });
        this._createLogHandler = memorizePromise(function () {
            return _this._getLogger().then(function (_a) {
                var logger = _a[0], aria = _a[1];
                var logHandler = createLogHandler(aria, logger, params.logStartEvents, params.ariaQos);
                return logHandler;
            });
        });
        this._onLogEvent = params.onLogEvent;
    }
    /**
     * Attaches this handler to a telemetry manager to log all its reported events to Aria.
     */
    AriaTelemetryHandler.prototype.attach = function (manager) {
        // Ensure the log handler has a chance to initialize before being attached.
        this._createLogHandler();
        var logEvent = this.logEvent;
        manager.addLogHandler(logEvent).forEach(logEvent);
        return function () { return manager.removeLogHandler(logEvent); };
    };
    /**
     * Update the Aria event context.
     */
    AriaTelemetryHandler.prototype.updateContext = function (context) {
        this._getLogger().then(function (_a) {
            var logger = _a[0];
            return updateContext(logger, context);
        });
    };
    return AriaTelemetryHandler;
}());

function createLogHandler(aria, logger, logStartEvents, ariaQosParams) {
    if (logStartEvents === void 0) { logStartEvents = true; }
    if (ariaQosParams === void 0) { ariaQosParams = undefined; }
    return function (event) {
        // Try/catch individual events so that one bad event doesn't cause the rest to fail to get logged
        try {
            if (event.enabled &&
                (event.eventType !== _ms_telemetry_manager_lib_EventBase__WEBPACK_IMPORTED_MODULE_1__["ClonedEventType"].Start || logStartEvents) &&
                !(ariaQosParams && ariaQosParams.isQosEvent(event))) {
                var eventProperties = Object(_AriaEventBuilder__WEBPACK_IMPORTED_MODULE_2__["buildAriaEvent"])(aria, event);
                logger.logEvent(eventProperties);
            }
        }
        catch (exception) {
            var error = void 0;
            if (exception instanceof aria.Exception) {
                error = new Error("Aria error: " + exception.toString());
            }
            if (!exception || !exception.handled) {
                // Only log the exception if it was not already logged before
                _ms_telemetry_manager_lib_ErrorHelper__WEBPACK_IMPORTED_MODULE_3__["log"](error || exception);
            }
        }
    };
}
function initializeLogManager(aria, params) {
    if (!aria.LogManager.isInitialized()) {
        aria.LogManager.initialize(params.tenantToken, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ disableCookies: params.disableCookies }, (params.offlineCache
            ? {
                browserOverrides: {
                    onGetData: params.offlineCache.getData,
                    onSaveData: params.offlineCache.saveData
                }
            }
            : {})), (params.ariaLogConfiguration || {})));
        if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
            window.addEventListener('beforeunload', function () {
                aria.LogManager.flush();
            });
        }
    }
    aria.LogManager.addCallbackListener(function (callbackType, statusCode, tenantToken, events) {
        if (tenantToken !== params.tenantToken) {
            return;
        }
        if (params.ariaQos) {
            params.ariaQos.reportQos({
                result: callbackType,
                statusCode: statusCode,
                events: events
            });
        }
    });
}
function createLogger(aria, tenantToken, context) {
    if (context === void 0) { context = {}; }
    var logger = new aria.Logger(tenantToken);
    updateContext(logger, context);
    return logger;
}
function updateContext(logger, context) {
    var session = context.Session, version = context.Version, osName = context.OSName, osVersion = context.OSVersion, market = context.Market, userId = context.UserId, manifest = context.Manifest, otherContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(context, ["Session", "Version", "OSName", "OSVersion", "Market", "UserId", "Manifest"]);
    var semanticContext = logger.getSemanticContext();
    if (session) {
        logger.setContext('AppInfo.Session', session);
    }
    if (manifest) {
        logger.setContext('AppInfo.Manifest', manifest);
    }
    if (version) {
        semanticContext.setAppVersion(version);
    }
    semanticContext.setUserLanguage(market || '');
    if (userId) {
        semanticContext.setUserId(userId);
    }
    if (osName) {
        semanticContext.setDeviceOsName(osName);
    }
    if (osVersion) {
        semanticContext.setDeviceOsVersion(osVersion);
    }
    for (var key in otherContext) {
        if (Object.prototype.hasOwnProperty.call(otherContext, key)) {
            var value = otherContext[key];
            if (value === undefined || value === null) {
                continue;
            }
            var finalKey = Object(_ms_utilities_strings_lib_index__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(key);
            logger.setContext(finalKey, otherContext[key]);
        }
    }
}
function memorizePromise(func) {
    var promise = undefined;
    return function () {
        if (!promise) {
            promise = func();
        }
        return promise;
    };
}
//# sourceMappingURL=AriaTelemetryHandler.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~data-sync-nucleus_[locale].js.map