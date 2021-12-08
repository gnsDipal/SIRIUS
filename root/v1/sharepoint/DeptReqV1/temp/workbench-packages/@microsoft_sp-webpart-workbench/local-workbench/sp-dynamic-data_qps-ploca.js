define("e40f8203-b39d-425a-a957-714852e33b79_1.12.1", ["@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "8uTw":
/*!*************************************************!*\
  !*** ./lib/common/DynamicDataEventConstants.js ***!
  \*************************************************/
/*! exports provided: ANY_PROPERTY_EVENT_PREFIX, PROPERTY_EVENT_PREFIX, ALL_PROPERTIES_EVENT_PREFIX, SOURCES_CHANGED_EVENT_NAME, SOURCES_RECEIVED, EVENT_NAME_SEPARATOR, GET_PROPERTY_VALUE, GET_ANNOTATED_PROPERTY_VALUE, GET_PROPERTY_DEFINITIONS, GET_ALLOWED_EVENTS, DYNAMICDATAMANAGER_EXCEPTION, NATIVE_SOURCE_API_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANY_PROPERTY_EVENT_PREFIX", function() { return ANY_PROPERTY_EVENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_EVENT_PREFIX", function() { return PROPERTY_EVENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PROPERTIES_EVENT_PREFIX", function() { return ALL_PROPERTIES_EVENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCES_CHANGED_EVENT_NAME", function() { return SOURCES_CHANGED_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCES_RECEIVED", function() { return SOURCES_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_NAME_SEPARATOR", function() { return EVENT_NAME_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROPERTY_VALUE", function() { return GET_PROPERTY_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ANNOTATED_PROPERTY_VALUE", function() { return GET_ANNOTATED_PROPERTY_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROPERTY_DEFINITIONS", function() { return GET_PROPERTY_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALLOWED_EVENTS", function() { return GET_ALLOWED_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMICDATAMANAGER_EXCEPTION", function() { return DYNAMICDATAMANAGER_EXCEPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIVE_SOURCE_API_EVENT", function() { return NATIVE_SOURCE_API_EVENT; });
var ANY_PROPERTY_EVENT_PREFIX = 'DynamicData_AnyPropertyChanged';
var PROPERTY_EVENT_PREFIX = 'DynamicData_PropertyChanged';
var ALL_PROPERTIES_EVENT_PREFIX = 'DynamicData_AllPropertiesChanged';
var SOURCES_CHANGED_EVENT_NAME = 'DynamicData_SourcesChanged';
var SOURCES_RECEIVED = 'DynamicData_All_Sources_Received';
var EVENT_NAME_SEPARATOR = '_';
var GET_PROPERTY_VALUE = 'DynamicData_PropertyValue';
var GET_ANNOTATED_PROPERTY_VALUE = 'DynamicData_Annotated_PropertyValue';
var GET_PROPERTY_DEFINITIONS = 'DynamicData_PropertyDefinitions';
var GET_ALLOWED_EVENTS = 'DynamicData_Allowed_Events';
var DYNAMICDATAMANAGER_EXCEPTION = 'DynamicDataManager_Exception';
var NATIVE_SOURCE_API_EVENT = 'Native_Source_Api_Event';


/***/ }),

/***/ "BDIN":
/*!*********************************************!*\
  !*** ./lib/common/DynamicDataEventNames.js ***!
  \*********************************************/
/*! exports provided: DynamicDataEventNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataEventNames", function() { return DynamicDataEventNames; });
/* harmony import */ var _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicDataEventConstants */ "8uTw");

/**
 * Event names for DynamicData related events.
 *
 * @internal
 */
var DynamicDataEventNames = /** @class */ (function () {
    function DynamicDataEventNames() {
    }
    /**
     * Returns the event name used when all properties in a Dynamic Data source have changed.
     * Example: DynamicData_AllPropertiesChanged_WebPart.<componentId>.<instanceId>
     *
     * @param sourceId - Id of the Dynamic Data source.
     */
    DynamicDataEventNames.getAllPropertiesChangedEventName = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["ALL_PROPERTIES_EVENT_PREFIX"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    /**
     * Returns the event name used when any property in a Dynamic Data source has changed.
     * Example: DynamicData_AnyPropertyChanged_WebPart.<componentId>.<instanceId>
     *
     * @param sourceId - Id of the Dynamic Data source.
     */
    DynamicDataEventNames.getAnyPropertyChangedEventName = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["ANY_PROPERTY_EVENT_PREFIX"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    /**
     * Returns the event name used when a properties in a Dynamic Data source has changed.
     * Example: DynamicData_PropertyChanged_WebPart.<componentId>.<instanceId>_myProperty
     *
     * @param sourceId - Id of the Dynamic Data source.
     * @param propertyId - Id of the property that has changed.
     */
    DynamicDataEventNames.getPropertyChangedEventName = function (sourceId, propertyId) {
        return "" + this.getPropertyChangedEventPrefix(sourceId) + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + propertyId;
    };
    /**
     * Returns the event name prefix used when a property in a Dynamic Data source has changed.
     * This should not be used as a final name for an event, but to be used inside _getPropertyChangedEventName.
     * Example: DynamicData_PropertyChanged_WebPart.<componentId>.<instanceId>
     *
     * @param sourceId - Id of the Dynamic Data source.
     */
    DynamicDataEventNames.getPropertyChangedEventPrefix = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["PROPERTY_EVENT_PREFIX"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    /**
     * Returns the event name used to publish and consume the event for when a specific property
     * has changed its value on a source.
     *
     * @param sourceId - Id of the Dynamic Data source.
     * @param propertyId - Property Id on the source.
     * @param isAnnotated - Indicates whether the event name is for the annotated value.
     */
    DynamicDataEventNames.getPropertyValueEventName = function (sourceId, propertyId, isAnnotated) {
        var scenario = isAnnotated ? _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["GET_ANNOTATED_PROPERTY_VALUE"] : _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["GET_PROPERTY_VALUE"];
        return "" + scenario + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + propertyId;
    };
    /**
     * Returns the event name used to publish and consume the event to request and receive the
     * property definitions from a specific Dynamic Data soource, from the parent window.
     *
     * @param sourceId - Id of the Dynamic Data source.
     */
    DynamicDataEventNames.getPropertyDefintionsEventName = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["GET_PROPERTY_DEFINITIONS"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    /**
     * Returns the event name used to publish and consume the event to request and receive the
     * allowed events on a specific Dynamic Data soource, from the parent window.
     *
     * @param sourceId - Id of the Dynamic Data source.
     */
    DynamicDataEventNames.getAllowedEventsEventName = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["GET_ALLOWED_EVENTS"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    /**
     * Returns the event name used for to raise any event on the native source on the isolated app.
     */
    DynamicDataEventNames.getNativeSourceApiEventName = function () {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["NATIVE_SOURCE_API_EVENT"];
    };
    DynamicDataEventNames.getDynamicDataManagerExceptionEventName = function (sourceId) {
        return "" + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["DYNAMICDATAMANAGER_EXCEPTION"] + _DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME_SEPARATOR"] + sourceId;
    };
    return DynamicDataEventNames;
}());



/***/ }),

/***/ "FpZ8":
/*!********************************************!*\
  !*** ./lib/common/DynamicDataUtilities.js ***!
  \********************************************/
/*! exports provided: DynamicDataUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataUtilities", function() { return DynamicDataUtilities; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicDataManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DynamicDataManager */ "Ro9o");


/**
 * Utilities for the Dynamic Data feature.
 * @internal
 */
var DynamicDataUtilities = /** @class */ (function () {
    function DynamicDataUtilities() {
    }
    /**
     * A unique ServiceKey to identify the IDynamicDataManager as a service in the ServiceScope.
     *
     * @remarks Same ServiceKey is used to provide both DynamicDataManager and IsolatedDynamicDataManager.
     * This is to ensure that the consumers, will not have to selectively consume IDDM type based on the app they're in.
     * Also note that, in the isolated scenario, though we use the same servicekey, where the default instance
     * is DynamicDataManager, we will provide the IsolatedDynamicDataManager instance to the service scope
     * in the isolated app.
     */
    // tslint:disable-next-line: variable-name
    DynamicDataUtilities.IDynamicDataManagerServiceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-dynamic-data:IDynamicDataManager', _DynamicDataManager__WEBPACK_IMPORTED_MODULE_1__["default"]);
    return DynamicDataUtilities;
}());



/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Ro9o":
/*!***********************************!*\
  !*** ./lib/DynamicDataManager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _common_DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/DynamicDataEventConstants */ "8uTw");
/* harmony import */ var _common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/DynamicDataEventNames */ "BDIN");





var QOS_MONITOR_PREFIX = 'DynamicData.DynamicDataManager';
var LOG_SOURCE = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('DynamicDataManager');
/**
 * Manager for Dynamic Data.
 * This holds a reference to all Dynamic Data Sources and uses the SPEventManager internally to handle
 * notifications for source updates.
 *
 * @remarks
 * Data sources can notify for changes within the data source or for a specific property.
 * Data consumers can register to both changes in a Dynamic Data source and a specific property within the source.
 * There are 3 events to handle this variety of situations:
 *
 * Notifying a change for a property triggers events for the specific propery and for "any" property
 * Notifying a change for the whole source triggers events for "any" property and "all" properties.
 *
 * Registering for changes in a property register to events for the specific property and "all" properties.
 * Registering for changes in the whole source register to events for "any" properties.
 *
 * This ensures that regardless of how sources and consumers are configured, events will trigger once and only once for
 * each update within the data source.
 *
 * @internal
 */
var DynamicDataManager = /** @class */ (function () {
    function DynamicDataManager(serviceScope) {
        this._sources = new Map();
        this._sourcesChangedEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEvent"](_common_DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_3__["SOURCES_CHANGED_EVENT_NAME"]);
    }
    Object.defineProperty(DynamicDataManager.prototype, "sourcesChangedEvent", {
        /**
         * Event that gets raised when the list of Dynamic Data Sources gets updated.
         * @eventproperty
         */
        get: function () {
            return this._sourcesChangedEvent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Raises an event to all listeners when a Dynamic Data Source has been updated.
     * @param sourceId - Id of the Dynamic Data Source that is being updated.
     */
    DynamicDataManager.prototype.notifySourceChanged = function (sourceId) {
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId), {});
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAnyPropertyChangedEventName(sourceId), {});
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Raises an event to all listeners when a property in a Dynamic Data Source has been updated.
     * @param sourceId - Id of the Dynamic Data Source whose property is being updated.
     * @param propertyId - Id of the property that is being updated.
     */
    DynamicDataManager.prototype.notifyPropertyChanged = function (sourceId, propertyId) {
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(propertyId, 'propertyId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getPropertyChangedEventName(sourceId, propertyId), {});
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAnyPropertyChangedEventName(sourceId), {});
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Registers a listener for updates on a Dynamic Data Source.
     */
    DynamicDataManager.prototype.registerSourceChanged = function (sourceId, observer, callback) {
        var extraData = this._createQosExtraData(observer.manifest);
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_MONITOR_PREFIX + '.registerSourceChanged');
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(observer, 'observer');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["dynamicDataManagerSourceDoesntExist"], sourceId));
            }
            // Registering to all properties changed event.
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId), observer, callback);
            // Registering to any property changed event, as it means that the source is changed.
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAnyPropertyChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess(extraData);
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure('UnhandledRegisterSourceChange', e, extraData);
            throw e;
        }
    };
    /**
     * Unregisters a listener for updates on a Dynamic Data Source.
     */
    DynamicDataManager.prototype.unregisterSourceChanged = function (sourceId, observer, callback) {
        var extraData = this._createQosExtraData(observer.manifest);
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_MONITOR_PREFIX + '.unregisterSourceChanged');
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(observer, 'observer');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["dynamicDataManagerSourceDoesntExist"], sourceId));
            }
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.unregisterEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId), observer, callback);
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.unregisterEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAnyPropertyChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess(extraData);
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure('UnhandledUnregisterSourceChange', e, extraData);
            throw e;
        }
    };
    /**
     * Registers a listener for updates on a Dynamic Data Source.
     */
    DynamicDataManager.prototype.registerPropertyChanged = function (sourceId, propertyId, observer, callback) {
        var extraData = this._createQosExtraData(observer.manifest);
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_MONITOR_PREFIX + '.registerPropertyChanged');
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(propertyId, 'propertyId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(observer, 'observer');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["dynamicDataManagerSourceDoesntExist"], sourceId));
            }
            // Registering to the specific property
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getPropertyChangedEventName(sourceId, propertyId), observer, callback);
            // Registering to all properties changed event, as the specific property will also be changed.
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.registerEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess(extraData);
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure('UnhandledRegisterPropertyChange', e, extraData);
            throw e;
        }
    };
    /**
     * Unregisters a listener for updates on a Dynamic Data Source.
     */
    DynamicDataManager.prototype.unregisterPropertyChanged = function (sourceId, propertyId, observer, callback) {
        var extraData = this._createQosExtraData(observer.manifest);
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_MONITOR_PREFIX + '.unregisterPropertyChanged');
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(propertyId, 'propertyId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(observer, 'observer');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["dynamicDataManagerSourceDoesntExist"], sourceId));
            }
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.unregisterEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getPropertyChangedEventName(sourceId, propertyId), observer, callback);
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.unregisterEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess(extraData);
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure('UnhandledUnregisterPropertyChange', e, extraData);
            throw e;
        }
    };
    /**
     * Returns a read-only array with all the existing Dynamic Data Sources.
     */
    DynamicDataManager.prototype.getSources = function () {
        var sources = [];
        this._sources.forEach(function (source) { return sources.push(source); });
        return sources;
    };
    /**
     * Returns a Dynamic Data Source based on its id.
     * Returns undefined if the source doesn't exist.
     * @param sourceId - Id of the Dynamic Data Source.
     */
    DynamicDataManager.prototype.tryGetSource = function (sourceId) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(sourceId, 'sourceId');
        return this._sources.get(sourceId);
    };
    /**
     * Adds a new Dynamic Data Source to be managed.
     * Throws an error if the source can't be added.
     *
     * @param source - Dynamic Data Source to add.
     */
    DynamicDataManager.prototype.addSource = function (source) {
        try {
            this._validateSource(source);
            if (this._sources.has(source.id)) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(LOG_SOURCE, _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_loc_Strings_resx__WEBPACK_IMPORTED_MODULE_2__["dynamicDataManagerSourceAlreadyExists"], source.id));
            }
            this._sources.set(source.id, source);
            this._raiseSourcesChangedEvent();
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Removes an existing Dynamic Data Source from the manager.
     * @param id - Id of the Dynamic Data Source.
     */
    DynamicDataManager.prototype.removeSource = function (sourceId) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](QOS_MONITOR_PREFIX + '.removeSource');
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(sourceId, 'sourceId');
            if (this._sources.has(sourceId)) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.removeEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAllPropertiesChangedEventName(sourceId));
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.removeEvent(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getAnyPropertyChangedEventName(sourceId));
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.removeEventsByPrefix(_common_DynamicDataEventNames__WEBPACK_IMPORTED_MODULE_4__["DynamicDataEventNames"].getPropertyChangedEventPrefix(sourceId));
                this._sources.delete(sourceId);
                this._raiseSourcesChangedEvent();
            }
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    /**
     * Creates a new extra data object _IQosExtraData.
     */
    DynamicDataManager.prototype._createQosExtraData = function (manifest) {
        if (!manifest) {
            return undefined;
        }
        var qosExtraData = {
            alias: manifest.alias,
            isInternal: manifest.isInternal,
            manifestId: manifest.id
        };
        return qosExtraData;
    };
    DynamicDataManager.prototype._validateSource = function (source) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(source, 'source');
        if (source.id.indexOf(_common_DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_SEPARATOR"]) > -1) {
            throw new Error("Source id contains invalid characters, like \"" + _common_DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_SEPARATOR"] + "\". Id: \"" + source.id + "\".");
        }
        var regex = /^[a-zA-Z0-9\-_]+$/;
        source.getPropertyDefinitions().forEach(function (def) {
            if (!regex.test(def.id)) {
                throw new Error("Source contains invalid property \"" + def.id + "\".");
            }
        });
    };
    /**
     * Raises an event when the Dynamic Data Sources gets updated.
     * @remarks
     * The event is sticky because sources can be updated before there is anyone listening. This way all clients
     * will get notified that sources have been updated. Further updates are notified in real-time.
     */
    DynamicDataManager.prototype._raiseSourcesChangedEvent = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseStickyEvent(_common_DynamicDataEventConstants__WEBPACK_IMPORTED_MODULE_3__["SOURCES_CHANGED_EVENT_NAME"], {});
    };
    return DynamicDataManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (DynamicDataManager);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "ilZV":
/*!*************************************!*\
  !*** ./lib/DynamicDataReference.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Class that contains the Dynamic Data reference.
 * This includes the source, property, and property path (if applicable) of Dynamic Data
 *
 * @remarks
 * The reference string is of the form `<sourceId>:<property>` or `<sourceId>:<property>:<propertyPath>`
 *
 * Examples of references are:
 * `WebPart.<componentId>.<instanceId>:myComplexProperty:myArray[0].lastName`
 *
 * @public
 */
var DynamicDataReference = /** @class */ (function () {
    function DynamicDataReference(reference) {
        var split = reference.split(':');
        if (split.length < 2) {
            throw new Error("Data id is malformed. Data id: \"" + reference + "\"");
        }
        this._reference = reference;
        this._sourceId = split[0];
        this._property = split[1];
        this._propertyPath = split[2];
    }
    Object.defineProperty(DynamicDataReference.prototype, "reference", {
        /**
         * Returns the full reference of the Dynamic Data object as a string.
         */
        get: function () {
            return this._reference;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "sourceId", {
        /**
         * Returns the referred id of the Dynamic Data Source.
         */
        get: function () {
            return this._sourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "property", {
        /**
         * Returns the referred property of the Dynamic Data.
         */
        get: function () {
            return this._property;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "propertyPath", {
        /**
         * Returns the referred property path of the Dynamic Data.
         * Returns undefined if there is no property path.
         */
        get: function () {
            return this._propertyPath;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicDataReference;
}());
/* harmony default export */ __webpack_exports__["default"] = (DynamicDataReference);


/***/ }),

/***/ "mGD9":
/*!******************************!*\
  !*** ./lib/loc/Strings.resx ***!
  \******************************/
/*! exports provided: dynamicDataManagerSourceAlreadyExists, dynamicDataManagerSourceDoesntExist, pageContextDataSourceTitle, pageContextDataSourceDescription, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dynamicDataManagerSourceAlreadyExists\":\"À śōũŕćē ŵĩţĥ ĩď \\u0022{0}\\u0022 àĺŕēàďŷ ēxĩśţś.\",\"dynamicDataManagerSourceDoesntExist\":\"Ńō śōũŕćē ŵĩţĥ ĩď \\u0022{0}\\u0022 ƒōũńď.\",\"pageContextDataSourceTitle\":\"Ƥàĝē ēńvĩŕōńmēńţ\",\"pageContextDataSourceDescription\":\"Ţĥĩś ĩńćĺũďēś śōmē mēţàďàţà àƀōũţ ţĥē ƥàĝē\"}");

/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: DynamicDataReference, _PageContextDataSource, _DynamicDataManager, _DynamicDataUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicDataReference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicDataReference */ "ilZV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDataReference", function() { return _DynamicDataReference__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PageContextDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContextDataSource */ "uyAI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PageContextDataSource", function() { return _PageContextDataSource__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DynamicDataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicDataManager */ "Ro9o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DynamicDataManager", function() { return _DynamicDataManager__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _common_DynamicDataUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/DynamicDataUtilities */ "FpZ8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DynamicDataUtilities", function() { return _common_DynamicDataUtilities__WEBPACK_IMPORTED_MODULE_3__["DynamicDataUtilities"]; });

/**
 * SharePoint Framework support for dynamic data bindings.
 *
 * @remarks
 * This package provides the necessary infrastructure classes and public APIs necessary
 * to run dynamic data, and implement components that use it.
 *
 * @packagedocumentation
 */






/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "uyAI":
/*!**************************************!*\
  !*** ./lib/PageContextDataSource.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loc/Strings.resx */ "mGD9");
var _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loc/Strings.resx */ "mGD9", 1);
/* harmony import */ var _common_DynamicDataUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/DynamicDataUtilities */ "FpZ8");



/**
 * The page context data source.  It should contain all app-level contextual information
 *
 * @internal
 */
var PageContextDataSource = /** @class */ (function () {
    function PageContextDataSource(serviceScope) {
        var _this = this;
        this._propertyDefinitions = {};
        this._eventDefinitions = {};
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._dynamicDataManager = serviceScope.consume(_common_DynamicDataUtilities__WEBPACK_IMPORTED_MODULE_2__["DynamicDataUtilities"].IDynamicDataManagerServiceKey);
            _this._dynamicDataManager.addSource({
                id: PageContextDataSource.pageContextDataSourceId,
                metadata: {
                    title: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["pageContextDataSourceTitle"],
                    description: _loc_Strings_resx__WEBPACK_IMPORTED_MODULE_1__["pageContextDataSourceDescription"],
                    componentId: '1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8',
                    alias: PageContextDataSource._pageContextDataSourceAlias
                },
                getPropertyDefinitions: _this.getPropertyDefinitions.bind(_this),
                getAnnotatedPropertyValue: _this.getAnnotatedPropertyValue.bind(_this),
                getPropertyValue: _this.getPropertyValue.bind(_this),
                sendEvent: _this.sendEvent.bind(_this),
                // Async apis
                getPropertyDefinitionsAsync: _this.getPropertyDefinitionsAsync.bind(_this),
                allowedEventsAsync: _this.allowedEventsAsync.bind(_this),
                getAnnotatedPropertyValueAsync: _this.getAnnotatedPropertyValueAsync.bind(_this),
                getPropertyValueAsync: _this.getPropertyValueAsync.bind(_this)
            });
        });
    }
    /**
     *
     * @param propInfo - The "sub-datasource" property.
     */
    PageContextDataSource.prototype.addPropertyHandler = function (propInfo) {
        var _this = this;
        // add the property references
        propInfo.dynamicDataFunctions.getPropertyDefinitions().forEach(function (propertyDefinition) {
            _this._propertyDefinitions[propertyDefinition.id] = {
                propertyCollectionId: propInfo.id,
                annotatedPropertyValueFunction: propInfo.dynamicDataFunctions.getAnnotatedPropertyValue,
                propertyValueFunction: propInfo.dynamicDataFunctions.getPropertyValue,
                definition: propertyDefinition
            };
        });
        // add the event references
        if (propInfo.dynamicDataFunctions.allowedEvents) {
            propInfo.dynamicDataFunctions.allowedEvents().forEach(function (event) {
                if (propInfo.dynamicDataFunctions.sendEvent) {
                    _this._eventDefinitions[event.name] = {
                        propertyCollectionId: propInfo.id,
                        sendEvent: propInfo.dynamicDataFunctions.sendEvent,
                        definition: event
                    };
                }
            });
        }
        this._dynamicDataManager.notifySourceChanged(PageContextDataSource.pageContextDataSourceId);
    };
    /**
     * Used by the downstream content providers to indicate that their properties have changed.
     * @param propertyId - the propertyId (not the context property info, but the property id) that has changed
     */
    PageContextDataSource.prototype.notifyPropertyChanged = function (propertyId) {
        this._dynamicDataManager.notifyPropertyChanged(PageContextDataSource.pageContextDataSourceId, propertyId);
    };
    /**
     * Remove all of the properties
     *
     * @param id - the id of the data provider that you want to remove.
     */
    PageContextDataSource.prototype.removePropertyHandler = function (id) {
        // First, delete the property references
        for (var prop in this._propertyDefinitions) {
            if (this._propertyDefinitions.hasOwnProperty(prop)) {
                if (this._propertyDefinitions[prop].propertyCollectionId === id) {
                    delete this._propertyDefinitions[prop];
                }
            }
        }
        // then delete the event references
        for (var prop in this._eventDefinitions) {
            if (this._eventDefinitions.hasOwnProperty(prop)) {
                if (this._eventDefinitions[prop].propertyCollectionId === id) {
                    delete this._eventDefinitions[prop];
                }
            }
        }
        this._dynamicDataManager.notifySourceChanged('PageContext');
    };
    /**
     * Iterate over all of the properties we are aware of and return
     * the set
     */
    PageContextDataSource.prototype.getPropertyDefinitions = function () {
        var retVal = [];
        for (var prop in this._propertyDefinitions) {
            if (this._propertyDefinitions.hasOwnProperty(prop)) {
                retVal.push(this._propertyDefinitions[prop].definition);
            }
        }
        return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(retVal);
    };
    /**
     * Return the property value for the given property ID.  This will
     * iterate over all the different data providers exposed in the
     * context data source
     *
     * @param propertyId - the name of the property you want the value for
     */
    // tslint:disable-next-line:no-any
    PageContextDataSource.prototype.getPropertyValue = function (propertyId) {
        if (this._propertyDefinitions[propertyId]) {
            // We know this property - call the correct prop value function for it
            return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this._propertyDefinitions[propertyId].propertyValueFunction(propertyId));
        }
        return undefined;
    };
    /**
     * Returns the annotated value for the property supplied.
     * @param propertyId - The id of the property that contains the annotated value.
     */
    PageContextDataSource.prototype.getAnnotatedPropertyValue = function (propertyId) {
        if (this._propertyDefinitions[propertyId]) {
            // we know this property - call the correct annotated prop value function.
            return Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this._propertyDefinitions[propertyId].annotatedPropertyValueFunction(propertyId));
        }
        else {
            return { sampleValue: undefined };
        }
    };
    /**
     * Iterate over all of the properties we are aware of and return
     * the set
     */
    PageContextDataSource.prototype.getPropertyDefinitionsAsync = function () {
        return Promise.resolve(this.getPropertyDefinitions());
    };
    /**
     * Return the property value for the given property ID.  This will
     * iterate over all the different data providers exposed in the
     * context data source
     * @param propertyId - the name of the property you want the value for.
     */
    // tslint:disable-next-line:no-any
    PageContextDataSource.prototype.getPropertyValueAsync = function (propertyId) {
        return Promise.resolve(this.getPropertyValue(propertyId));
    };
    /**
     * Returns the annotated value for the property supplied.
     * @param propertyId - The id of the property that contains the annotated value.
     */
    PageContextDataSource.prototype.getAnnotatedPropertyValueAsync = function (propertyId) {
        return Promise.resolve(this.getAnnotatedPropertyValue(propertyId));
    };
    /**
     * iterate over all the known event handlers and return the
     * complete set.
     */
    PageContextDataSource.prototype.allowedEventsAsync = function () {
        var retVal = [];
        for (var prop in this._eventDefinitions) {
            if (this._eventDefinitions.hasOwnProperty(prop)) {
                retVal.push(this._eventDefinitions[prop].definition);
            }
        }
        return Promise.resolve(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(retVal));
    };
    /**
     * This simply passes the sendEvent method to the appropriate
     * function end point.
     *
     * @param eventName - The event name that is being called
     * @param data - The data to be passed into the event
     */
    // tslint:disable-next-line:no-any
    PageContextDataSource.prototype.sendEvent = function (eventName, data) {
        if (this._eventDefinitions[eventName]) {
            this._eventDefinitions[eventName].sendEvent(eventName, data);
        }
    };
    /**
     * Id of the PageContext dynamic data source.
     */
    PageContextDataSource.pageContextDataSourceId = 'PageContext';
    PageContextDataSource._pageContextDataSourceAlias = 'Page Context';
    return PageContextDataSource;
}());
/* harmony default export */ __webpack_exports__["default"] = (PageContextDataSource);


/***/ })

/******/ })});;
//# sourceMappingURL=sp-dynamic-data_[locale].js.map